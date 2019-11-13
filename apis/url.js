// var hostUrl = 'https://wx.shop.haoyousheng.com.cn/v1';
// var logisticUrl = 'https://api.express.haoyousheng.com.cn/v1';
// var coordinationUrl = 'https://api.rp.haoyousheng.com.cn';

// 全局URL



import * as http from '../utils/tool.js'
// import MD5Encode from './utils/crypto/MD5Encode.js'

// const MD5Encode = require('./crypto/MD5Encode.js');
// const HmacSHA256 = require("./crypto/hmac-sha256.js");
// const Base64 = require("./crypto/enc-base64.js");

const VERSIONS = 'v2.3.5';

//详情页面URL 
const activeUrl = 'https://api.activity.haoyousheng.com.cn/api/'


// 正式服URL
// const Url = 'https://wx.shop.haoyousheng.com.cn/v1/'
// const Url = 'http://api.shop.rp.surex.cc/v1/'
//福州接口
const Url = 'https://api-t.st-llshop.surex.cc/v1/'
//广州接口
// var Url = 'http://api.shop.rp.surex.cc/v1/';

//物流接口
const ExpUrl = 'https://api-t.hys-express.surex.cc/v1/'
// const ExpUrl = 'http://192.168.2.183/v1/'
// 

// 图标URL
const iconURL = "https://img.shop.haoyousheng.com.cn/wechat_icons"
//一些单独URL
const shopImg = 'https://img.shop.haoyousheng.com.cn/'

// https://api-t.st-llshop.surex.cc/v1/index/userInfo


var signHeaderKeys = ['x-ca-timestamp', 'x-ca-key', 'x-ca-nonce', 'x-ca-stage'].sort();


const header = {
	// 到时候有些接口会有不一样的请求头 在这里
	// 这里应该判断一下 有些接口增加 或者不增加
	'accept': 'application/json',
	'content-type': 'application/json',
	'x-application': 'goodBuy',
	'x-platform': 'wx',
	'x-useragent': 'host',
	'x-ver': VERSIONS,
	'x-ca-timestamp': parseInt(new Date().getTime() / 1000),
	'x-ca-key': '24814519',
	'x-ca-nonce': http.uuid(),
	'x-ca-stage': 'RELEASE',
	'x-scene': '1001',
	'x-page': 'pages/index/index{}',
	'x-ca-signature-headers': signHeaderKeys.join(','),
	// 'X-PickUp': 35,				//提货点ID 动态
	// 'X-WAREHOUSE': -1,			//城市ID 动态
}



// header['x-ca-signature'] = sign(stringToSign);

// var stringToSign = buildStringToSign(header, signedHeadersStr, parsedUrl, data);

// function sign(stringToSign) {
// 	let appSecret = 'a824c303497dfbae3b24fc131c7dfd0c';
// 	let sign = HmacSHA256(stringToSign, appSecret);
// 	sign = Base64.stringify(sign);
// 	return sign;
// }


module.exports = {
	Url,
	header,
	iconURL,
	shopImg,
	activeUrl,
	ExpUrl
}
