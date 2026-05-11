import userStore from '@/store/localStore/index.js'

export default {
	chatKey: 'chatMessageList_',

	// 存入消息（用于上滑加载历史旧消息，插入数组开头）
	saveChatMessage(message) {
		let userId = userStore.getUserid()
		const storageKey = this.chatKey + userId
		const chatMessageList = uni.getStorageSync(storageKey) || [];
		
		for (let i = 0; i < chatMessageList.length; i++) {
			if (chatMessageList[i].p2pId === message.p2pId) {
				// 【核心：去重判断】
				const isExist = chatMessageList[i].chatList.some(item => item.id === message.id);
				if (!isExist) {
					if (message.toUserId === userId) {
						chatMessageList[i].unread += 1
					}
					// 历史消息插入到列表最前方
					chatMessageList[i].chatList.unshift(message)
					uni.setStorageSync(storageKey, chatMessageList)
				}
				return
			}
		}

		// 创建新的私聊窗口
		const isCurrentUserReceiver = message.toUserId === userId
		chatMessageList.unshift({
			type: 'private',
			p2pId: message.p2pId,
			otherId: isCurrentUserReceiver ? message.fromUserId : message.toUserId,
			otherAvatar: isCurrentUserReceiver ? message.fromUserVo?.avatar : message.toUserVo?.avatar,
			otherUserName: isCurrentUserReceiver ? message.fromUserVo?.userName : message.toUserVo?.userName,
			unread: isCurrentUserReceiver ? 1 : 0,
			chatList: [message]
		})
		console.log(chatMessageList)
		uni.setStorageSync(storageKey, chatMessageList)
	},

	// 存入新消息（用于实时收发消息，插入数组末尾）
	insertNewMessage(message) {
	    let userId = userStore.getUserid();
	    const storageKey = this.chatKey + userId;
	    const chatMessageList = uni.getStorageSync(storageKey) || [];
	    
	    for (let i = 0; i < chatMessageList.length; i++) {
	        if (chatMessageList[i].p2pId === message.p2pId) {
	            const isExist = chatMessageList[i].chatList.some(item => item.id === message.id);
	            if (!isExist) {
	                if (message.toUserId === userId) {
	                    chatMessageList[i].unread += 1;
	                    // 正确发出增加事件
	                    uni.$emit('addMessageTabbarBadge', 1);
	                }
	                chatMessageList[i].chatList.push(message);
	                uni.setStorageSync(storageKey, chatMessageList);
	            }
	            return;
	        }
	    }
	
	    // 创建新的私聊窗口
	    const isCurrentUserReceiver = message.toUserId === userId;
	    chatMessageList.unshift({
	        type: 'private',
	        p2pId: message.p2pId,
	        otherId: isCurrentUserReceiver ? message.fromUserId : message.toUserId,
	        otherAvatar: isCurrentUserReceiver ? message.fromUserVo?.avatar : message.toUserVo?.avatar,
	        otherUserName: isCurrentUserReceiver ? message.fromUserVo?.userName : message.toUserVo?.userName,
	        unread: isCurrentUserReceiver ? 1 : 0,
	        chatList: [message]
	    });
	    uni.setStorageSync(storageKey, chatMessageList);
	    
	    // 【修复】：如果是全新的会话，且我是接收方，也必须让总红点 +1
	    if (isCurrentUserReceiver) {
	        uni.$emit('addMessageTabbarBadge', 1);
	    }
	},
	// 获取聊天窗口信息（进入页面时调用）
	getChatWindowMessage(current, size, otherId) {
		const userId = userStore.getUserid()
		const chatMessageList = uni.getStorageSync(this.chatKey + userId) || []

		for (let i = 0; i < chatMessageList.length; i++) {
			if (chatMessageList[i].otherId === otherId) {
				let chatWindow = JSON.parse(JSON.stringify(chatMessageList[i]))
				// 逻辑：获取最近的 size 条
				const total = chatWindow.chatList.length;
				const start = total - size < 0 ? 0 : total - size;
				chatWindow.chatList = chatWindow.chatList.slice(start, total);
				return chatWindow
			}
		}
		return { p2pId: null, chatList: [], unread: 0 };
	},

	// 查询本地缓存的更旧的消息（上滑时调用）
	selectChatMessage(current, size, otherId, newCount) {
		const userId = userStore.getUserid()
		const chatMessageList = uni.getStorageSync(this.chatKey + userId) || []
		for (let i = 0; i < chatMessageList.length; i++) {
			if (chatMessageList[i].otherId === otherId) {
				const list = chatMessageList[i].chatList;
				// 已经展示了 current 条，新收到了 newCount 条，所以偏移量是 current + newCount
				// 我们要取的是这之后更旧的 size 条
				const end = list.length - (current + newCount);
				if (end <= 0) return [];
				const start = end - size < 0 ? 0 : end - size;
				return list.slice(start, end);
			}
		}
		return []
	},

	delUnread(p2pId) {
		const userId = userStore.getUserid()
		const chatMessageList = uni.getStorageSync(this.chatKey + userId) || []
		for (let i = 0; i < chatMessageList.length; i++) {
			if (chatMessageList[i].p2pId === p2pId) {
				if(chatMessageList[i].unread > 0) {
					uni.$emit('subMessageTabbarBadge', chatMessageList[i].unread)
					chatMessageList[i].unread = 0
					uni.setStorageSync(this.chatKey + userId, chatMessageList)
				}
			}
		}
	},

	delete() {
		let userId = userStore.getUserid()
		uni.setStorageSync(this.chatKey + userId, [])
	},

	gainMessageList(type) {
		const userId = userStore.getUserid()
		const chatMessageList = uni.getStorageSync(this.chatKey + userId) || []
		return chatMessageList.filter(item => item.type === type).sort((a, b) => b.unread - a.unread);
	},

	calc() {
		const userId = userStore.getUserid()
		const chatMessageList = uni.getStorageSync(this.chatKey + userId) || []
		return chatMessageList.reduce((sum, item) => sum + item.unread, 0);
	},
	clearUnreadMessage(p2pId) {
	    const userId = userStore.getUserid();
	    const storageKey = this.chatKey + userId;
	    // 【修复】：必须从原始 Storage 里拿全量数据（包含系统消息），不能用 gainMessageList
	    let list = uni.getStorageSync(storageKey) || []; 
	    
	    for(let i = 0; i < list.length; i++) {
	        if(list[i].p2pId === p2pId) {
	            list[i].unread = 0;
	            uni.setStorageSync(storageKey, list);
	            break;
	        }
	    }
	}
}
