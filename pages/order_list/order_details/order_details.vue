<template>
	<!-- 提货订单详情 -->
	<view>
		<view class="nodelivery-detail">
			<view class="detail-menu">
				<view class="title">基本信息</view>
				<view class="stutas" v-if="orderDetailInfo.is_have_back">用户已申请售后</view>
				<view class="detail-box">
					<view class="detail-item" @longpress="copy(orderDetailInfo.box_info.order_sn)">订单号：{{orderDetailInfo.box_info.order_sn}}</view>
					<view class="detail-item" @longpress="copy(orderDetailInfo.box_info.delivery_sn)">物流单号：{{orderDetailInfo.box_info.delivery_sn}}</view>
					<view class="detail-item" @longpress="copy(orderDetailInfo.box_info.consignee)">收货人：{{orderDetailInfo.box_info.consignee}}</view>
					<view class="detail-item " @click="call(orderDetailInfo.box_info.mobile)">手机号： <text class="active"> {{orderDetailInfo.box_info.mobile}}   点击拨打</text></view>
					<view class="detail-item" @longpress="copy(orderDetailInfo.box_info.consignee)">所在箱号：{{orderDetailInfo.box_info.box_sn}}</view>
					<view class="detail-item">是否取货码通知：{{orderDetailInfo.box_info.is_noticed}}</view>
					<view class="detail-item">取货码通知时间：{{orderDetailInfo.box_info.order_send_time}}</view>
					<view class="detail-item">到货确认时间：{{orderDetailInfo.box_info.order_send_time}}</view>
				</view>
			</view>
			<view class="detail-menu" v-if="orderDetailInfo.is_have_back == 1">
				<view class="title">售后信息</view>
				<view class="detail-box">
					<view class="detail-item">售后申请时间：{{orderDetailInfo.back_info.add_time}}</view>
					<view class="detail-item">申请角色：{{orderDetailInfo.back_info.back_user_type}}</view>
				</view>
			</view>
			<view class="detail-menu">
				<view class="title">商品信息</view>
				<view class="detail-box row" v-for="(item,index) in orderDetailInfo.goods_info" :key="index">
					<image class="detail-img" :src="item.sku_img"></image>
					<view class="detail-goods-info">
						<view class="goods-name">{{item.goods_name}}</view>
						<view class="goods-desc">{{item.spec_key_name}}</view>
						<view class="goods-price">¥{{item.goods_price}}</view>
						<view class="goods-number">x{{item.goods_num}}</view>
					</view>
				</view>
			</view>
			<view class="footer-button">
				<button class="back-btn" @tap="onBack" v-if="orderDetailInfo.is_show_way_button">送回仓库</button>
				<button class="back-btn-disabled" v-if="orderDetailInfo.box_info.status == 5" disabled>在途中</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderSn: 0,
				orderDetailInfo: {}
			}
		},
		onLoad: function(options) {
			this.orderSn = options.orderSn;
		},
		onShow() {
			this.getDetailInfo()
		},
		methods: {
			copy(res){
				var  _this=this
				uni.setClipboardData({
				    data: res,
				    success: function () {
				        _this.$common.toast('复制成功')
					
				    }
				});
			},
			call(res){
				uni.makePhoneCall({
					phoneNumber:'18188902961',
					success(res) { 
						console.log(res)
					}
				})
			},
			// 获取提货点未领取订单详情
			getDetailInfo() {
				var _this = this;
				var data = {
					order_sn: _this.orderSn
				}
				_this.$http.getOrderDetail(data).then(res => {
					let resData = res.data
					if (resData.success == 1) {
						_this.orderDetailInfo = resData.result
					} else {
						uni.showToast({
							title: resData.msg,
							icon: 'none',
							duration: 2000
						});
						return
					}
				})
			},
			//点击送回仓库
			onBack() {
				var _this = this;
				uni.showModal({
					title: '',
					content: '是否商品已清点完成，即将带回仓库',
					confirmColor: '#eb3c39',
					cancelText: '取消',
					confirmText: '确定',
					cancelColor: '#030303',
					success: function(res) {
						console.log(res);
						if (res.confirm) {
							var data = {
								order_sn: _this.orderSn
							}
							_this.$http.getWarehouse(data).then(res => {
								let resData = res.data
								if (resData.success == 1) {
									_this.getDetailInfo();
								} else {
									uni.showToast({
										title: resData.msg,
										icon: 'none',
										duration: 2000
									});
									return
								}
							})
						}
					}
				});
			}
		}
	}
</script>

<style>
	@import url("./order_details.css");
	.active{
		color: #39ACEB;
		
	}
</style>
