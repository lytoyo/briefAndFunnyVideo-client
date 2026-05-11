// utils/websocket.js
import websocketConfig from '@/config/index.js'
import userStore from '@/store/localStore/index.js' // 统一使用 userStore 避免混淆
import messageStore from '@/store/message/index.js'

//状态常量
const WS_STATE = {
	CONNECTING: 0,
	OPEN: 1,
	CLOSING: 2,
	CLOSED: 3
};

class WebSocketManager {
	constructor() {
		// 单例模式 - 通过 uni 全局对象
		if (typeof uni.$webSocketManager !== 'undefined') {
			return uni.$webSocketManager;
		}
		
		// 初始化属性
		this.config = null;
		this.socketTask = null;
		this.reconnectTimer = null;
		this.heartbeatTimer = null;
		this.reconnectCount = 0;
		this.isManualClose = false; // 是否手动关闭
		this.isReconnecting = false; // 是否正在重连过程中
		this.lastReconnectTime = 0;
		this.reconnectDebounceTimer = null;
		
		// 【新增】当前连接的用户ID，用于判断是否需要重新连接
		this.currentConnectedUserId = null; 
		// 【新增】标识是否已成功初始化过配置
		this.isConfigured = false; 
		
		// 绑定方法
		this.init = this.init.bind(this); // 确保init方法也绑定this
		this.connect = this.connect.bind(this);
		this.reconnect = this.reconnect.bind(this);
		this.handleMessage = this.handleMessage.bind(this);
		this.sendHeartbeat = this.sendHeartbeat.bind(this);
		this.send = this.send.bind(this);
		this.showNotification = this.showNotification.bind(this);
		this.navigateToChat = this.navigateToChat.bind(this);
		this.close = this.close.bind(this); // 确保close方法也绑定this
		
		// 存储到 uni 全局对象
		uni.$webSocketManager = this;
		
		return this;
	}
	
	// 【修改】初始化方法：负责配置WebSocket URL，并仅在需要时发起连接
	init() {
		const userId = userStore.getUserid(); // 从userStore获取用户ID
		
		// 如果没有用户ID，或者用户ID变了，或者配置还没有初始化过，则重新配置
		if (!userId) {
			console.warn('未获取到用户ID，无法初始化WebSocket或建立连接');
			// 如果没有用户ID，但当前有连接，需要主动断开
			if (this.socketTask && this.getState() !== WS_STATE.CLOSED) {
				this.close(true); // 强制关闭，不尝试重连
			}
			this.currentConnectedUserId = null; // 清除当前连接用户ID
			this.isConfigured = false; // 重置配置状态
			return; 
		}
		
		// 【修改】仅在用户ID发生变化或首次配置时更新URL
		if (!this.isConfigured || this.currentConnectedUserId !== userId) {
			
			this.config = {
				url: websocketConfig.WEBSOCKET_URL + userId,
				autoReconnect: true,
				reconnectInterval: 3000,
				heartbeatInterval: 30000
			};
			this.currentConnectedUserId = userId; // 记录当前连接的用户ID
			this.isConfigured = true; // 标记已配置
			this.isManualClose = false; // 重新初始化时，重置手动关闭状态
			
			// 如果用户ID变更，旧连接必须强制关闭
			if (this.socketTask && this.getState() !== WS_STATE.CLOSED) {
				
				this.safeClose(); // 关闭旧连接
			}
		}
		
		// 自动连接逻辑，但由 connect() 方法内部判断是否需要真正发起连接
		this.autoConnect();
	}
	
	autoConnect() {
		// 【修改】直接调用 connect，让 connect 方法内部判断是否连接
		this.connect(); 
		
		// 【修改】网络状态变化监听，只注册一次
		if (!this._networkStatusListenerRegistered) {
			uni.onNetworkStatusChange((res) => {
				if (res.isConnected) {
					console.log("网络恢复，尝试重连 WebSocket...");
					// 仅在已配置且未连接时尝试重连
					if (this.isConfigured && this.getState() !== WS_STATE.OPEN) {
						this.reconnect();
					}
				}
			});
			this._networkStatusListenerRegistered = true;
		}
	}
	
	// 【修改】connect 方法：更严格的连接状态判断
	connect() {
		// 1. 如果没有配置或没有用户ID，直接返回
		if (!this.isConfigured || !this.currentConnectedUserId) {
			console.warn('WebSocketManager: 未配置或无用户ID，无法连接。');
			return;
		}
		
		// 2. 如果是手动关闭状态，直接返回（除非是 init 强制重置了 isManualClose）
		if (this.isManualClose) {
			
			return;
		}
		
		// 3. 如果已经处于 OPEN 状态，或者正在 CONNECTING 状态，直接返回
		const currentState = this.getState();
		if (currentState === WS_STATE.OPEN || currentState === WS_STATE.CONNECTING) {
			
			return;
		}
		
		// 4. 如果正在重连中，也跳过
		if (this.isReconnecting) {
			
			return;
		}
		
		// 确保config和url已准备好
		if (!this.config || !this.config.url) {
			console.error('WebSocketManager: 配置未准备好，无法连接。');
			return;
		}
		
		
		try {
			this.socketTask = uni.connectSocket({
				url: this.config.url,
				header: {
					'content-type': 'application/json'
				},
				// 【修改】complete 在某些情况下会触发多次，不推荐在这里绑定事件
				complete:()=>{} 
			});
			this.bindEvents();
		} catch (e) {
			console.error("WebSocketManager: connectSocket 异常:", e);
			this.reconnect(); // 尝试重连
		}
	}
	
	// 【修改】bindEvents 方法：重置重连状态
	bindEvents() {
		if (!this.socketTask) return;
		
		this.socketTask.onOpen((res) => {
			
			this.reconnectCount = 0;
			this.isReconnecting = false;
			this.isManualClose = false; // 连接成功，重置手动关闭状态
			this.startHeartbeat();
		});
		
		this.socketTask.onMessage((res) => {
			this.handleMessage(res.data);
		});
		
		this.socketTask.onClose((res) => {
			this.stopHeartbeat();
			// 【修改】仅在非手动关闭且允许自动重连时才尝试重连
			if (this.config.autoReconnect && !this.isManualClose) {
				
				this.reconnect();
			} else {
				// 否则清理状态
				this.isReconnecting = false;
				this.socketTask = null; // 确保socketTask被置空
				clearTimeout(this.reconnectTimer); // 清理所有重连定时器
				this.reconnectTimer = null;
			}
		});
		
		this.socketTask.onError((err) => {
			// 【修改】仅在非手动关闭时才尝试重连
			if (!this.isManualClose) {
				this.reconnect();
			}
		});
	}
	
	handleMessage(rawData) {
		try {
			let message;
			
			if (typeof rawData === 'string') {
				message = JSON.parse(rawData);
			} else if (typeof rawData === 'object') {
				message = rawData;
			} else {
				console.warn("WebSocketManager: 收到未知格式消息:", rawData);
				return;
			}
			
			// 【重要】只有当消息是当前登录用户的才处理
			if (message.toUserId === this.currentConnectedUserId || message.fromUserId === this.currentConnectedUserId) {
				if(message.type === "private"){
					messageStore.insertNewMessage(message);	
					uni.$emit('chatMessage', message); // 仅在 private 消息时触发
				}
				uni.$emit('handleMessage', message); // 兼容旧代码，通用消息触发
			} else {
				console.warn(`WebSocketManager: 收到非当前用户 (${this.currentConnectedUserId}) 的消息，忽略.`, message);
			}
			
		} catch (err) {
			console.error("WebSocketManager: 处理消息失败:", err);
		}
	}
	
	sendHeartbeat() {
		// 【修改】添加日志，确认心跳是否发送
		// console.log("WebSocketManager: 发送心跳.");
		if (this.socketTask && this.getState() === WS_STATE.OPEN) {
			this.send({
				type: 'heartbeat',
				timestamp: Date.now(),
				// 【修改】建议带上用户ID，方便后端识别
				userId: this.currentConnectedUserId 
			}).catch((e) => {
				console.error("WebSocketManager: 心跳发送失败:", e);
			});
		} else {
			console.warn("WebSocketManager: 无法发送心跳，连接未打开或不存在.");
		}
	}
	
	startHeartbeat() {
		this.stopHeartbeat();
		// 【修改】确保 config 已加载
		if (this.config && this.config.heartbeatInterval) {
			this.heartbeatTimer = setInterval(() => {
				this.sendHeartbeat();
			}, this.config.heartbeatInterval);
			// console.log(`WebSocketManager: 心跳已启动，间隔 ${this.config.heartbeatInterval}ms.`);
		} else {
			console.warn("WebSocketManager: 未配置心跳间隔，无法启动心跳.");
		}
	}
	
	stopHeartbeat() {
		if (this.heartbeatTimer) {
			clearInterval(this.heartbeatTimer);
			this.heartbeatTimer = null;
			// console.log("WebSocketManager: 心跳已停止.");
		}
	}
	
	send(data) {
		return new Promise((resolve, reject) => {
			// 【修改】增加更严格的状态判断
			if (!this.socketTask || this.getState() !== WS_STATE.OPEN) {
				reject(new Error(`WebSocket 未连接或状态异常 (${this.getStateText()})`));
				return;
			}
			
			const message = typeof data === 'object' ? JSON.stringify(data) : data;
			
			this.socketTask.send({
				data: message,
				success: () => {
					resolve(true);
				},
				fail: (err) => {
					reject(err);
				}
			});
		});
	}
	
	// 【修改】reconnect 方法：确保防抖和状态正确
	reconnect() {
		// 如果已在重连中，或已连接，或手动关闭，则跳过
		if (this.isReconnecting || this.isManualClose || this.getState() === WS_STATE.OPEN) {
			// console.log(`WebSocketManager: reconnect 跳过，当前状态：isReconnecting=${this.isReconnecting}, isManualClose=${this.isManualClose}, state=${this.getStateText()}`);
			return;
		}

		if (this.reconnectDebounceTimer) {
			clearTimeout(this.reconnectDebounceTimer);
		}
		
		this.reconnectDebounceTimer = setTimeout(() => {
			this._performReconnect();
		}, 300); // 防抖时间
	}
	
	// 【修改】_performReconnect 方法：更严格的重连状态控制
	_performReconnect() {
		// 再次检查状态，防止在 setTimeout 期间状态改变
		if (this.isManualClose || this.isReconnecting || this.getState() === WS_STATE.OPEN || !this.isConfigured || !this.currentConnectedUserId) {
			return;
		}
		
		const now = Date.now();
		// 【修改】如果距离上次重连时间太短，也跳过，防止频繁重连
		if (now - this.lastReconnectTime < this.config.reconnectInterval / 2) { // 比如设置成重连间隔的一半
			
			return;
		}
		
		this.isReconnecting = true; // 标记正在重连
		this.lastReconnectTime = now; // 更新上次重连时间
		this.reconnectCount++; // 重连计数
		
		
		
		// 清理旧的重连定时器
		if (this.reconnectTimer) {
			clearTimeout(this.reconnectTimer);
			this.reconnectTimer = null;
		}
		
		// 先安全关闭当前可能存在的旧连接
		this.safeClose(true); // 传入 true 表示是重连关闭，不触发 onclose 中的 autoReconnect
		
		// 延迟后尝试发起新连接
		this.reconnectTimer = setTimeout(() => {
			this.connect(); // 调用 connect 尝试连接
			// connect 方法内部会判断连接是否成功并重置 isReconnecting
		}, this.config.reconnectInterval); // 根据配置的重连间隔
	}
	
	// 【修改】safeClose 方法：增加一个参数，用于区分是重连导致的关闭还是其他原因
	safeClose(isForReconnect = false) {
		if (this.socketTask) {
			try {
				const state = this.socketTask.readyState;
				
				// 暂时将 isManualClose 设为 true，阻止 onclose/onerror 再次触发重连
				const originalIsManualClose = this.isManualClose;
				this.isManualClose = true; 
				
				if (state === WS_STATE.OPEN || state === WS_STATE.CONNECTING) {
					
					this.socketTask.close({
						code: 1000, // 正常关闭
						reason: isForReconnect ? "Reconnecting" : "Manual Close",
						success: () => {
							// 成功关闭后，恢复 isManualClose 状态
							this.isManualClose = originalIsManualClose;
							this.socketTask = null;
						},
						fail: (err) => {
							console.error("WebSocketManager: safeClose 失败:", err);
							this.isManualClose = originalIsManualClose;
							this.socketTask = null; // 即使失败也要清理
						}
					});
				} else {
					
					this.isManualClose = originalIsManualClose; // 恢复状态
					this.socketTask = null;
				}
			} catch (e) {
				
				this.socketTask = null; // 异常也清理
			}
		} else {
			this.socketTask = null; // 确保是null
		}
		// 清理重连相关的定时器和状态
		clearTimeout(this.reconnectTimer);
		clearTimeout(this.reconnectDebounceTimer);
		this.reconnectTimer = null;
		this.reconnectDebounceTimer = null;
		this.isReconnecting = false;
	}
	
	// 【修改】close 方法：真正的手动关闭，并清理所有状态
	close(force = false) { // 增加 force 参数，用于不触发重连的强制关闭
		this.isManualClose = true; // 标记为手动关闭
		this.stopHeartbeat(); // 停止心跳
		
		if (this.socketTask) {
			// 如果是强制关闭（如用户退出登录），则直接关闭，不触发 onclose 中的 autoReconnect
			if (force) {
				this.socketTask.close({ code: 1000, reason: "Forced Manual Close" });
			} else {
				// 普通手动关闭，允许 onclose 正常处理
				this.socketTask.close();
			}
			this.socketTask = null;
		}
		
		// 清理所有重连相关的定时器和状态
		clearTimeout(this.reconnectTimer);
		clearTimeout(this.reconnectDebounceTimer);
		this.reconnectTimer = null;
		this.reconnectDebounceTimer = null;
		this.reconnectCount = 0;
		this.isReconnecting = false;
		this.currentConnectedUserId = null; // 【重要】清除用户ID
		this.isConfigured = false; // 【重要】重置配置状态
		
		console.log("WebSocketManager: 已完全关闭并清理所有状态.");
	}
	
	getState() {
		if (!this.socketTask) return WS_STATE.CLOSED;
		return this.socketTask.readyState;
	}
	
	getStateText() {
		const state = this.getState();
		const states = {
			0: '连接中', // CONNECTING
			1: '已连接', // OPEN
			2: '关闭中', // CLOSING
			3: '已关闭'  // CLOSED
		};
		return states[state] || '未知状态';
	}
	
	shouldShowNotification(message) {
		const showTypes = ['chat', 'private', 'group', 'system', 'notification'];
		return showTypes.includes(message.type) &&
			!message.silent &&
			this.isAppInForeground();
	}
	
	isAppInForeground() {
		// uni-app 的 getApp() 可以获取到 App 实例，通过它判断前后台状态
		const app = getApp();
		return app && app.__isAppShow; // 假设 App 实例有一个 __isAppShow 属性
	}
	
	showNotification(message) {
		// 你的通知逻辑
	}
	
	navigateToChat(message) {
		// 你的跳转逻辑
	}
}

// 获取实例的函数 (无需修改)
export const getWebSocketManager = () => {
	if (typeof uni.$webSocketManager !== 'undefined') {
		return uni.$webSocketManager;
	}
	const manager = new WebSocketManager();
	return manager;
};

// 【修改】导出为 initManager，表示初始化整个Manager，而不是直接连接
export const initManager = () => {
	const manager = getWebSocketManager();
	manager.init();
	return manager;
};

// 【新增】导出 connect 方法，用于外部触发连接
export const connect = () => {
	const manager = getWebSocketManager();
	manager.connect();
};

// 【修改】导出 close 方法，用于外部断开连接 (例如退出登录)
export const close = (force = false) => {
	const manager = getWebSocketManager();
	manager.close(force);
};

export const sendMessage = (data) => {
	const manager = getWebSocketManager();
	return manager.send(data);
};

export const getWebSocketState = () => {
	const manager = getWebSocketManager();
	return manager.getState();
};

export const getWebSocketStateText = () => {
	const manager = getWebSocketManager();
	return manager.getStateText();
};

// 默认导出 manager 实例
export default getWebSocketManager();
	