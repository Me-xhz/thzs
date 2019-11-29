import Request from './request'
import Url from '../apis/url.js'
import {
	setTokenStorage,
	getTokenStorage,
	configHandle,
	getSysteminfo,
	getStorageSync
} from './tool.js'

const expireToken = [] // 储存过期的token
const tokenExpireCode = 0 // token过期后 后端返回的code码 
let isShow = false

//	动态添加请求头
async function gethead(config) {
	config.header['X-WAREHOUSE'] = getStorageSync('city').warehouse_id
	config.header['X-PickUp'] = getStorageSync('pickup').pickup_id || ''
	config.header['x-ca-systemInfo'] = getSysteminfo('systemInfo')
	//提货点header添加
	/* let pickupId = uni.getStorageSync('getExpressPickupId');
	console.log(pickupId);
	if (pickupId != undefined) {
		config.header['X-PickUp'] = pickupId
	} */
	if (config.header.thisUrl == 2) {
		config.baseUrl = Url.activeUrl
	}
	return config

}


// 防抖闭包来一波
function getTokenDebounce() {
	let lock = false
	let success = false
	return async function() {
		if (!lock) {
			lock = true
			getNewTokenServe().then(res => {
				setTokenStorage(res.data.data.token) // todo 储存token，可更换为自己的储存token逻辑
				success = true
				lock = false
			}).catch(() => {
				success = false
				lock = false
			})
		}
		return new Promise(resolve => {
			// XXX 我只能想到通过轮询来看获取新的token是否结束，有好的方案可以说。一直看lock,直到请求失败或者成功
			const timer = setInterval(() => {
				if (!lock) {
					clearInterval(timer)
					if (success) {
						resolve('success')
					} else {
						resolve('fail')
					}
				}
			}, 100) // 轮询时间可以自己看改成多少合适
		})
	}
}


// XXX 重新创建一个示例，可根据自身逻辑决定是否需要重新创建一个示例
const reReqest = new Request()
reReqest.setConfig(config => {
	config.baseUrl = Url.Url /* 根域名不同 */

	return config
})

// 这里获取信息
const http = new Request()
const refreshToken = getTokenDebounce()


http.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = Url.Url /* 根域名不同 */
	config.header = {
		...config.header,
		...Url.header
	}

	return config
})

/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Number } statusCode - 请求响应体statusCode（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
 */
// 有默认，非必写
http.validateStatus = (statusCode) => {
	return statusCode === 200
}

http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */


	config.header = {
		...config.header,
		'X-Authorization': getTokenStorage()
	}

	// 这里是动态添加请求头 	这里动态获取一定要最新的 不够优雅 需要优化
	gethead(config).then(res => {
		config = res
	})


	//  这里判断 使用按个url
	if (config.header['isExp']) {

		config.baseUrl = Url.ExpUrl
	} else {
		config.baseUrl = Url.Url
	}
	return config
})
// 必须使用异步函数，注意
http.interceptor.response(async (response) => { /* 请求之后拦截器 */

	if (response.data.msg == '10086') {
		// 这里删除了一段以前的逻辑代码，现在的逻辑是如果token失效就会清除token等信息 跳转登录页面
		//  或者也可以是先尝试静默登录
		if (isShow) return
		isShow = true
		uni.showModal({
			content: 'token过期,请重新登录',
			title: '提示',
			success(res) {
				isShow = false
				if (res.confirm) {
					uni.removeStorage({
						key: 'token'
					})

					uni.removeStorage({
						key: 'isLogin'
					})

					uni.navigateTo({
						url: '/pages/login/login'
					})

				} else {
					uni.navigateBack()
				}
			}
		})

	}

	return response
}, (response) => { // 请求错误做点什么
	return response
})


export default http
