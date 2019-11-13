//文字提示弹层
export function toast(title) {
	uni.showToast({
		title: title,
		icon: 'none',
		duration: 2000
	});
}
//规范弹窗(无title)
export function showModal(content, confirmText, successCallback) {
	wx.showModal({
		title: '',
		content: content,
		confirmText: confirmText,
		confirmColor: '#eb3c39',
		cancelText: '取消',
		cancelColor: '#030303',
		success: successCallback
	});
}
/**
 * 唤起客服电话
 */
export function phoneCall(phone) {
	uni.makePhoneCall({
		phoneNumber: phone,
		success: function(res) {
			console.log("成功");
		},
		fail: function(res) {
			console.log("失败");
		}
	});
}

// 清除所有缓存
export function clearAllStorage() {
	uni.showLoading({
		title: '清除中'
	})
	uni.getStorageInfo({
		success(res) {
			let next = res.keys.length
			res.keys.forEach(item => {
				uni.removeStorage({
					key: item,
					success() {
						next--
						if (next == 0) {
							uni.hideLoading()
							uni.showToast({
								title: '清除成功',
								icon: 'none'
							})
						}
					}
				})
			})
		},
		fail() {
			uni.hideLoading()
			toast('清除成功');
		}
	})
}

//新思路 封装app支付 
export function setPay(data,success,fail,complete){
	var dataMap = {
		timeStamp: String(data.timeStamp),
		nonceStr: String(data.nonceStr),
		package: String(data.package),
		signType: String(data.signType),
		paySign: String(data.sign),
		success: success,
		fail: fail,
		complete: complete
	};
	uni.requestPayment(dataMap);
}

