// 我是一个没有感情的工具类
import http from '../apis/index.js'



// 设置储存token
export const setTokenStorage = (token) => {
	uni.setStorageSync('X-Authorization', token)
}

// 获取token
export const getTokenStorage = () => {
	let token = ''
	try {
		token = uni.getStorageSync('X-Authorization')
	} catch (e) {}
	return token
}

//扫一扫二维码
export  const getQRcode=()=>{
	uni.scanCode({
		onlyFromCamera:true,
		success(res) {
			console.log(res)
			return res.result
		},
		fail(err) {
			
		}
	})
}

//微信授权
export const WxSilentLogin = (callback) => {
	uni.login({
		provider: 'weixin',
		success(res) {
			console.log(res)
			http.getToken({
				oauthCode: res.code
			}).then(resS => {
				uni.getUserInfo({
					provider: 'weixin',
					success: (infoRes) => {
						// 只有拿到信息了 才会认为是已经登录成功了
						setTokenStorage(resS.data.result.token)
						setStorageSync('userInfo', infoRes.rawData)
						setStorageSync('isLogin', true)
						callback(infoRes.rawData)
					},
					fail() {
						uni.reLaunch({
							url: '../../pages/login/login'
						})
					}
				})
			})

		},
		fail() {
			uni.reLaunch({
				url: '../../pages/login/login'
			})
		}

	})
}


// APP环境下清除所有缓存	
export function clearAllStorage() {
	uni.showLoading({
		title: '退出中'
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
								title: '退出成功',
								icon: 'none'
							})
						}
					}
				})
			})
		},
		fail() {
			uni.hideLoading()
			toast('退出失败');
		}
	})
}

// UUID
export function uuid(len, radix) {
	var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	var uuid = [],
		i;
	radix = radix || chars.length;

	if (len) {
		// Compact form
		for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
	} else {

		var r; // rfc4122 requires these characters

		uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
		uuid[14] = '4'; // Fill in random data. At i==19 set the high bits of clock sequence as

		for (i = 0; i < 36; i++) {
			if (!uuid[i]) {
				r = 0 | Math.random() * 16;
				uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
			}
		}
	}

	return uuid.join('');
}

//  处理数据按字母排序分类。
export function sortData(data, field) { //data原数据，field数据的拼音键名。
	let letter_reg = /^[A-Z]$/;
	let list = [];
	let letter = '';
	for (let i = 0; i < data.length; i++) {
		// 添加 # 分组，用来 存放 首字母不能 转为 大写英文的 数据
		list['#'] = [];
		// 首字母 转 大写英文
		letter = (data[i][field]).slice(0, 1).toUpperCase();
		// 是否 大写 英文 字母
		if (!letter_reg.test(letter)) {
			letter = '#';
		}
		// 创建 字母 分组
		if (!(letter in list)) {
			list[letter] = [];
		}
		// 字母 分组 添加 数据
		list[letter].push(data[i]);
	}
	// 转换 格式 进行 排序；
	let resault = [];
	for (let key in list) {
		resault.push({
			letter: key,
			list: list[key]
		});
	}
	resault.sort((a, b) => {
		return a.letter.charCodeAt(0) - b.letter.charCodeAt(0);
	});
	// # 号分组 放最后
	let last_arr = resault[0];
	resault.splice(0, 1);
	// resault.push(last_arr);

	// 转换 数据 格式
	let json_sort = {}
	for (let i = 0; i < resault.length; i++) {
		json_sort[resault[i].letter] = resault[i].list;
	}
	return resault;
}
//同步获取store
export var getStorageSync = (res) => {

	let token = null
	try {
		token = uni.getStorageSync(res)

	} catch (e) {

	}
	return token
}



//获取手机信息 ，有点重复，但解耦
export var getSysteminfo = function(res) {
	let token = getStorageSync(res)
	if (!token) {
		uni.getSystemInfo({
			success(resS) {
				setStorageSync('systemInfo', resS)
				token = uni.getStorageSync(res)
				return JSON.stringify(token)
			}
		})
	}
	return JSON.stringify(token)

}


//设置储存Store
export var setStorageSync = function(name, res) {
	uni.setStorageSync(name, res)
}


// 重新整理一下config
export const configHandle = (config) => {
	config.header = {
		...config.header,
		'X-Authorization': getTokenStorage() // token 特殊处理，主要是header有可能使用的是局部配置
	}
	return config
}

//获取上级路由实
export const getRouter = (index) => {
	var pages = getCurrentPages(); //当前页
	var beforePage = pages[pages.length - Number(index)]; //上个页面
	// #ifdef H5
	return beforePage
	// #endif
	// #ifndef H5
	return beforePage.$vm
	// #endif

}

export const setUserInfo = (info) => {
	uni.setStorageSync('info', info)
}
