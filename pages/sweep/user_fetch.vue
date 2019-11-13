<template>
	<!-- 用户取件 -->
	<view class="container">
		<view class='row inputBox'>
			<input :value='inputValue' class='delivery-input' placeholder="请输入取货码" type='number' focus="true" @input="deliveryInput"></input>
			<button @tap='submit' class='btn-sm'>确认</button>
		</view>
		<view class='scan' @tap='scanCode'>
			扫一扫
		</view>
	<!-- 	<view class='' @tap='getList'>
			测试
		</view> -->
		<popup :isShow="isShow" :text="text"  confirm="确认收货"  :isFail='true'  cancal="取消" @succer="succer" @fail='fail'></popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:'该订单未进行确认收货，是否确认收货',
				isShow:false,
				inputValue: ""
			}
		},
		methods: {
			getList(){
				uni.navigateTo({
					url:'../userOrderDetile/orderList?orderSn=' + that.inputValue,
				})
			},
			showConfig(res){
				this.isShow=true
				this.inputValue=res
			},
			hideConfig(){
				this.inputValue=''
				this.isShow=false
			},
			fail(res){
				this.isShow=false
				this.inputValue=''  
			},
			succer(res){
				this.submit();
			},
			deliveryInput(e) {
				this.inputValue = e.detail.value
			},
			submit() {
				if(!this.inputValue){
					this.$common.toast('请填写完整的提货码')
					return
				}
				var that = this;
				uni.navigateTo({
					url: '/pages/userOrderDetile/userOrderDetile?orderSn=' + that.inputValue,
				})	
				// 去到列表		
				// uni.navigateTo({
				// 	url:'../userOrderDetile/orderList?orderSn=' + that.inputValue,
				// })
				that.inputValue = ''
			},
			scanCode() {
				var that = this;
				// 只允许通过相机扫码
				uni.scanCode({
					onlyFromCamera: true,
					success: function(res) {
						that.inputValue = res.result;
						that.submit();
					}
				});
			}
		}
	}
</script>

<style>

	.container {
		width: 100%;
		overflow-x: hidden;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		font-family: '微软雅黑';
	}

	.inputBox {
		margin-top: 300rpx;
		width: 750rpx;
		display: flex;
		display: -webkit-flex;
		box-sizing: border-box;
	}

	.delivery-input {
		min-width: 40rpx;
		width: 450rpx;
		min-height: 80rpx;
		line-height: 100rpx;
		border: 1rpx #555555 solid;
		padding: 10rpx;
		margin-left: 40rpx;
		border-radius: 8rpx;
		font-size: 42rpx;
	}

	.btn-sm {
		width: 150rpx;
		text-align: center;
		height: 100rpx;
		padding: 0;
		background-color: #ff0041;
		line-height: 100rpx;
		color: #fff;
		font-size: 32rpx;
	}

	.scan {
		position: absolute;
		top: 40%;
		bottom: 40%;
		left: 50%;
		transform: translateX(-50%);
		-webkit-transform: translateX(-50%);
		width: 160rpx;
		height: 160rpx;
		line-height: 160rpx;
		border-radius: 8rpx;
		font-size: 32rpx;
		text-align: center;
		color: #fff;
		background-color: #ff0041;
	}
</style>
