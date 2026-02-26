##引入插件##
const FileSpliter = uni.requireNativePlugin('Forke-FileSpliter');

##使用插件##

```

	1、设置保存路径
	let savePath = fs.root.fullPath;	
	
	2、选择文件,多文件的话
	plus.gallery.pick((files) => {
		files.files.map((path) => {
			that.spliter(path);
		});
	}, (e) => {
		console.log("取消选择图片");
	}, {
		filter: "none",
		multiple: true
	});

	3、开始切片
	plus.io.resolveLocalFileSystemURL(path, (entry) => {
		entry.file((file) => {
			FileSpliter.splitFile({
				filePath: file.fullPath,  //选择文件的完整路径，例如"/storage/0/..."
				savePath: savePath,  //保存文件的完整路径，需要该路径存在, 例如"/storage/0/..."
				fileName: file.name, //"文件名"  
				chunkSize: 1024 * 1024 * 10  //每一片的大小, 例如 1024 * 1024 * 10  代表10MB
			}, (ret) => {
				//成功的回调
				if (ret) {
					if (ret.code == 'process') {
						console.log("name", ret.name); //分片的所属文件名，用于区分多文件同时切片
						console.log("chunk", ret.chunk); //分片序号
						console.log("path", ret.path);  //分片的绝对路径
					} else if (ret.code == 'complete') {
						console.log("切片完成");
					} else if (ret.code == 'start') {
						console.log("切片开始");
					}
				}
			}, (ret) => {
				//失败的回调
			});

		}）
	})

	4、上传
	uni.uploadFile({
		url: url, //仅为示例，非真实的接口地址
		filePath: tempPath, //切片返回的路径
		name: 'files',
		header: {
			"Authorization": that.accessToken
		},
		formData: {
			"md5Hash": md5Hash, //分片的md5Hash
			"chunk": chunk,
			"chunkTotal": totalchunk, //这个需要自己根据文件总大小计算
			"fileName": fileName
		},
		success: (uploadFileRes) => {
			console.log(uploadFileRes.data);
		}
	});
	
	5、上传完成清空切片目录
	FileSpliter.clearFilePath({
					savePath: savePath,
					fileName: fileName
	}, (ret) => {
		if (ret) {
			if (ret.code == 'complete') {
				console.log("切片目录已清空");
			}
		}
	}, (ret) => {

	});


```