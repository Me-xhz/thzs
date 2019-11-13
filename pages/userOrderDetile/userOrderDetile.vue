<template>
	<view class="orderdetail">
		<view class="order-header">
			<view class="order-item">订单到货时间：{{orderInfo.box_confirm_time||''}}</view>
			<view class="order-item">提货码：{{orderInfo.get_sn||''}}</view>
			<view v-if="orderInfo.is_today == 0" class="order-state">非今日订单</view>
		</view>
		<view class="order-geo">
			<view v-if="orderInfo.order_status == 0" class="info-state">待提货</view>
			<view v-if="orderInfo.order_status == 1" class="info-state">已提货</view>
			<view v-if="orderInfo.order_status == 2" class="info-state">该订单已申请售后,请勿递送包裹</view>
			<view class="geo-box">
				<view class="geo-text">{{orderInfo.box_sn}}</view>
				<view class="geo-name">包裹位置</view>
			</view>

		</view>
		<view class="order-main">
			<view class="total-goods">共{{orderInfo.list.length||''}}种商品</view>
			<view class="goods-item" v-for="(goods, index) in orderInfo.list" :key="index">
				<view class="item-photo">
					<image :src="goods.sku_img"></image>
				</view>
				<view class="item-info">
					<view class="info-name">
						<text>{{goods.goods_name}}</text>
					</view>
					<view class="info-attr w80">
						<text>{{goods.spec_key_name}}</text>
					</view>
					<view class="info-price">
						<text class="icon-rmb">¥</text>{{goods.goods_price}}
					</view>
					<view class="info-amount info-amount-font">x{{goods.goods_num}}</view>
					<view v-if="goods.status == 2" class="btn" @click="config(goods,index)">
						确定
					</view>
					<view v-if="goods.status == 1" class="btn active" @click="config(goods,index)">
						已验证
					</view>
				</view>
			</view>
			
		</view>
		<view class="order-info">
			<view class="info-item">订单号：{{orderInfo.order_sn||''}}</view>
			<view class="info-item">物流单号：{{orderInfo.delivery_sn||''}}</view>
			<view class="info-item">收货人：{{orderInfo.consignee||''}}</view>
			<view class="info-item">手机号：{{orderInfo.mobile||''}}</view>
			<view v-if="orderInfo.order_status == 1 && orderInfo.order_confirm_time != ''" class="info-item">订单提货时间：{{orderInfo.order_confirm_time}}</view>
			<view v-if="orderInfo.order_status == 1" class="info-item">确认类型：{{orderInfo.confirm_type == 0 ? '用户确认收货' : '自提点确认收货'}}</view>
		</view>
		<view  @tap="submit" class="submit">一键提货</view>
		
		<popup :isShow="isShow" :text="text"  :isFail='true'  confirm="确认收货"  cancal="取消" @succer="succer" @fail='fail'></popup>
		<popup :isShow="isShow2" :text="text2" :isFail='isFail'   @succer="succer2" ></popup>
	</view>
</template>

<script>
	var _this
	export default {
		data() {
			return {
				isFail:false,
				text2:'',
				isShow2:false,
				text:'是否确认收货',
				isShow:false,
				orderSn: "763363",
				orderInfo: {},
				data:{},
			}
		},
		onLoad(options) {
			this.orderSn = options.orderSn;
		},
		onShow() {
			_this=this
			this.getOrder()
			this.getList()
			uni.showLoading({
				title:'加载中....'
			})
		},
		methods: {
			config(res,index){
				console.log(res,index)
				_this.orderInfo.list[index].status=1
			},
			getList(){
				// _this.$http.getOrderList({order_sn: _this.orderSn}).then(res=>{
				// 	_this.list=res.data.result
				// })
			
			},
			fail(){
				this.isShow=false
			},
			succer(){
				let _this=this
				_this.$http.getConfirmOrder(_this.data).then(res => {
					let resData = res.data
					_this.$tool.getRouter(2).hideConfig()
					if (resData.success == 1) {
						// 走失败 
						_this.getOrder();
						console.log(resData)
						_this.$common.toast(resData.msg || '服务器异常')
					
					} else {
						// 走成功
						_this.$common.toast(resData.msg)
						setTimeout(()=>{
							uni.navigateTo()
						},200)
						return
					}
				}).catch(err=>{
					console.log(err)
					_this.$common.toast('服务器异常')
				})
			},
			succer2(){
				uni.navigateBack()
			},
			
			//识别取货码
			getOrder() {
				let _this = this;
				let data = {
					order_sn: _this.orderSn
				}
				// _this.$http.getOrder(data).then(res => {
				_this.$http.getOrderList(data).then(res => {
					console.log(res)
					let resData = res.data
					uni.hideLoading()
					if (resData.success == 1) {
						_this.orderInfo = resData.result
						console.log(resData)
						if(resData.result.order_status == 2){
							this.$tool.getRouter(2).showConfig(this.orderSn)
						}
					} else {
						_this.text2=resData.msg
						_this.isShow2=true
					}
				})
			},
			submit() {
				var _this = this;
				_this.data = {
					user_id: _this.orderInfo.user_id
				}
				
				_this.text='是否确认提货？'
				_this.isShow=true
				
			},
		}
	}
</script>

<style>
	@import url("userOrderDetile.css");
</style>
