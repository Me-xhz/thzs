import http from '../utils/index.js'

const apis = {}

function ExpConfig(config){
	
	return {...config,header:{isExp:true}}
}

/**
 * @ 参数为 url  data数据 如果需要拼接 则是config里的params对象
 * @  实例  /user/login  {}, {params:{code: 304}}
 */

//这个是上传图片的公共方法
apis.upload = (filePath) => http.upload('url', {
	filePath: filePath,
	name: 'file'
})

//获取token 
apis.getToken = (data, config) => http.post("user/checkLogin", data, config)

//注册新用户
apis.thirdLogin = (data, config) => http.post('user/thirdLogin?oauth=' + data.suffix, data, config)

// 老用户更新
apis.updateUser = (data, config) => http.post('user/getWXUserInfo', data, config)

// 首页传入定位获取提货点
apis.getLoacl=(data,config)=> http.post('pickup/getpickupr',data,ExpConfig(config))


//app登录
apis.appLogin = (data, config) => http.post('oauth/login', data, config)



//获取提货点信息
apis.getExpressUserInfo=(data,config)=>http.post('user/getExpressUserInfo',data,config)
 
 // 返回今天未扫描订单
apis.getUnclaimednum=(data,config)=>http.post('takedelivery/unclaimednum',data,ExpConfig(config))
 
 //获取所有提货点列表
 apis.getPickupList=(data,config)=>http.post('pickup/userPickUpList',data,ExpConfig(config))
 
 //获取用户详细信息
apis.getUserInfo = (data, config) => http.post('index/userInfo', data, config)


//登录成功后获取提货点列表
apis.getPickUpList = (data, config) => http.post('pickup/userPickUpList', data, ExpConfig(config))

// 获取提货点未领取商品列表
apis.getUnclaimedGoodsInfo = (data, config) => http.post('takedelivery/unclaimedGoodsInfo', data, ExpConfig(config))

// 获取提货点未领取的订单列表
apis.getUnclaimedInfo = (data, config) => http.post('takedelivery/unclaimedInfo', data, ExpConfig(config))

// 获取提货点未领取订单详情
apis.getOrderDetail = (data, config) => http.post('takedelivery/orderDetail', data, ExpConfig(config))

// 送回仓库确认 
apis.getWarehouse = (data, config) => http.post('takedelivery/unclaimedBackToWare', data, ExpConfig(config))

// 获取订单数据、返回今天未扫描订单
apis.getOrder = (data, config) => http.post('takedelivery/getOrder', data, ExpConfig(config))

// 物流、确认收货
apis.getConfirmOrder = (data, config) => http.post('takedelivery/confirmorder', data, ExpConfig(config))

// 获取箱子列表
apis.getboxlist = (data, config) => http.post('takedelivery/getboxlist', data, ExpConfig(config))

// 确认中转箱到达
apis.getConfirmbox = (data, config) => http.post('takedelivery/confirmbox', data, ExpConfig(config))

//获取提货人的所有订单列表
apis.getOrderList=(data,config)=>http.post('takedelivery/getGoodsList',data,ExpConfig(config))

// 邀请码核销(注：商城域名)
apis.getInvitation = (data, config) => http.post('InviteActivityReceiveList/exchange', data, config)


export default apis
