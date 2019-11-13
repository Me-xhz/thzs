<template>
	<view class="container">
		<view class="container-head">
			<view class="pickup" @tap.stop='nav_pickup'>
				{{pickup.pickup_name}}
			</view>
			<view class="pickup pickup2" @tap.stop='exitUser'>
				切换账号
			</view>
			<view class="order-box" @tap='toNodelivery' data-style='1'>
				<view class="order">
					{{order_num.num||'0'}}
				</view>
				<view class="text">
					到货剩余订单数量
				</view>
			</view>

		</view>
		<view class="container-box">
			<view class="index-item" @tap="toRouter" v-if="pickup.authList.orderConfirm" data-type='user_fetch'>
				<view class="iconfont icon-ERP_tihuofangshi flex-icon"></view>
				<view class="flex-text">用户取件</view>
			</view>
			<view class="index-item" @tap="toRouter" v-if="pickup.authList.boxConfirm" data-type='affirm'>
				<view class="iconfont icon-daohuoqingdian flex-icon"></view>
				<view class="flex-text">到货确认</view>
			</view>
			<view class="index-item" @tap="toNodelivery2" data-style='on_order'>
				<view class="number" v-if="order_num.on_the_way_num > 0">{{order_num.on_the_way_num}}</view>
				<view class="iconfont icon-img_dengdaishangpinpeisongx flex-icon"></view>
				<view class="flex-text">在途订单</view>
			</view>
			<view class="index-item" @tap="toNodelivery" data-style='3'>
				<view class="iconfont icon-img_img_quhuochenggongx flex-icon"></view>
				<view class="flex-text">售后到库</view>
			</view>
			<view class="index-item" @tap="toRouter" v-if="pickup.authList.inviteExchange" data-type='invite'>
				<view class="iconfont icon-btn_xing_hx flex-icon"></view>
				<view class="flex-text">邀请码核销</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	var _this
	export default {
		data() {
			return {
				order_num: {},
				pickup: {},
			}
		},
	
		onLoad(e) {
			//利用缓存读取用户的相关信息
			this.expressAuthList = uni.getStorageSync('pickup').authList
			this.pickup = uni.getStorageSync('pickup').pickup_name
			if (e.pickup) {
				this.pickup = e.pickup
			}

		},
		onShow() {
			_this = this
			// 获取提货点信息
			this.pickup=this.$tool.getStorageSync('pickup')
			// 校验有没有登录
			if (!_this.$tool.getStorageSync('isLogin')) {
				uni.reLaunch({
					url: '../login/login'
				})
				return
			}
			this.getUnclaimednum()
		},

		methods: {

			exitUser(){
				console.log('exitUser')
				this.$tool.clearAllStorage()
				uni.navigateTo({
					url: '../login/login'
				})
			
			},
			nav_pickup() {
				uni.navigateTo({
					url:'../pickup/pickup'

				})
			},
			toNodelivery(e) {
				let style = e.currentTarget.dataset.style;
				uni.navigateTo({
					url: '/pages/order_list/order_list?style=' + style
				})
			},
			toNodelivery2(e) {
				uni.navigateTo({
					url: '/pages/order_list/order_list?style=' + 2
				})
			},

			//跳转到用户取件、到货确认、邀请码核销
			toRouter(e) {
				let type = e.currentTarget.dataset.type
				uni.navigateTo({
					url: '/pages/sweep/' + type
				})
			},
			// 返回今天未扫描订单
			getUnclaimednum() {

				var _this = this;
				_this.$http.getUnclaimednum().then(res=>{
					console.log(res);
					_this.order_num=res.data.result.data
				})
			}

		}
	}
</script>

<style lang="scss">
	.container {
		width: 100%;
		overflow-x: hidden;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		font-family: '微软雅黑';

		.container-head {
			position: relative;
			height: 340upx;
			width: 100%;
			background-color: #EB3C39;
			text-align: center;
			.order-box {
				padding-top: 100upx;

				.order {
					font-size: 80rpx;
					font-weight: bold;
					color: #ffffff;
				}

				.text {
					font-size: 30rpx;
					margin-top: 10rpx;
					color: #ffffff;
				}
			}

			.pickup {
				position: absolute;
				top: 40rpx;
				left: 40rpx;
				color: #EB3C39;
				background-color: #ffffff;
				padding: 10rpx 14rpx;
				border-radius: 8rpx;
				font-size: 24rpx;
			}
			.pickup2{
				right: 40rpx;
				left: auto;
			}
		}

		.container-box {
			padding: 180upx 0;
			background-color: #FFFFFF;
			margin-top: 20upx;
			display: flex;
			flex-wrap: wrap;

			.index-item {
				position: relative;
				width: 33%;
				text-align: center;
				margin-bottom: 60rpx;

				.number {
					position: absolute;
					top: 0;
					right: 60rpx;
					width: 40rpx;
					height: 40rpx;
					line-height: 40rpx;
					text-align: center;
					background-color: #EB3C39;
					color: #fff;
					font-size: 24rpx;
					border-radius: 50%;
				}
			}

			.flex-icon {
				font-size: 80rpx;
				color: #EB3C39;
			}

			.flex-text {
				font-size: 30rpx;
				margin-top: 20rpx;
				color: #555555;
			}
		}
	}
</style>
