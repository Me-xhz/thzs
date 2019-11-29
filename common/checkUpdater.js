export function checkUpdater(currentId, updaterPage) {
	// currentId是旧版本，app已经安装   latestId是新版本
	currentId = currentId.replace(/\./g, '');  
	currentId=Number(currentId)
	console.log('旧版本',currentId);
	uni.request({
		url: 'https://update.haoyousheng.com.cn/Version/checkVersion',
		method: 'POST',
		success: res => {
			console.log("更新数据",res)
			const resData = res.data.data
			let latestId = resData.version 
			latestId = latestId.replace(/\./g, '');
			latestId = Number(latestId)
			console.log('新版本',latestId);  
			//新版本号大于旧版本号，更新
			if (currentId < latestId) {
				console.log('需要更新');
				uni.showModal({
					showCancel: true,
					content: '检测有新版本，请点击确认更新',
					success: function(res) {
						if (res.confirm) {
							// console.log('确认强制更新，正在取得地址')
							//  如果需要背地（静默）热更新，获取下载地址
							const androidWgtUrl = resData.androidWgtUrl
							const iosWgtUrl = resData.iosWgtUrl
							console.log('我是回调',resData)
							let downloadWgtUrl = ''
							let ready = false
							// 判断系统类型
							if (plus.os.name.toLowerCase() === 'android') {
								console.log('安卓系统')
								if (androidWgtUrl) { // 我这里默认#也是没有地址，请根据业务自行修改
									console.log('发现下载地址')
									// 安卓：创建下载任务
									if (androidWgtUrl.match(RegExp(/.wgt/))) {
										console.log('确认wgt热更新包')
										downloadWgtUrl = androidWgtUrl
										ready = true
									} else {
										console.log('安卓推荐.wgt强制更新，.apk的强制更新请您自行修改程序')
									}
								} else {
									console.log('下载地址是空的，无法继续')
								}
							} else {
								console.log('苹果系统')
								console.log(iosWgtUrl)
								if (iosWgtUrl) { // 我这里默认#也是没有地址，请根据业务自行修改
									console.log('发现下载地址')
									// 苹果(A)：进行热更新（如果iosLink是wgt更新包的下载地址）判断文件名中是否含有.wgt
									if (iosWgtUrl.match(RegExp(/.wgt/))) {
										console.log('确认wgt热更新包')
										downloadWgtUrl = iosWgtUrl
										ready = true
									} else {
										console.log('苹果只支持.wgt强制更新')
									}
								} else {
									console.log('下载地址是空的，无法继续')
								} 
							}
							if (ready) {
								console.log('任务开始')
								console.log('下载地址', downloadWgtUrl);
								let downloadTask = uni.downloadFile({
									url: downloadWgtUrl,
									success: (res) => {
										console.log(res);
										if (res.statusCode === 200) {
											plus.runtime.install(res.tempFilePath, {
												force: false
											}, function() {
												console.log('install success...');
												plus.runtime.restart();
											}, function(e) {
												console.error('install fail...');
											});
										}
									},
									
								})
								downloadTask.onProgressUpdate((res) => {
									// console.log('下载进度' + res.progress);
									// console.log('已经下载的数据长度' + res.totalBytesWritten);
									// console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);
									
									// 测试条件，取消下载任务。
									/* if (res.progress > 50) {
										downloadTask.abort();
									} */
								})
							} else {
								console.log('下载地址未准备，无法开启下载任务')
							}
						}
					}
				});

			}
		}
	})
}
