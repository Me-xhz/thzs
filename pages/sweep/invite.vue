<template>
	<!--邀请码核销  -->
	<view>
		<view class="container">
			<view class='row inputBox'>
				<input :value='inputValue' class='delivery-input' placeholder="请输入邀请码" @input="deliveryInput"></input>
				<button @tap='submit' class='btn-sm'>确认</button>
			</view>
			<view class='scan' @tap='scanCode'>
				扫一扫
			</view>
		</view>
		<popup :isShow="isShow" :text="text" :title="title" :isFail='true' cancal="取消" @succer="succer" @fail='fail'></popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"是否确认核销？",
				isShow: false,
				text: "",
				inputValue: ""
			}
		},
		methods: {
			fail(res) {
				this.isShow=false
				uni.showToast({
					title: "已取消",
					icon: 'none',
					duration: 2000
				})
				return
			},
			succer(res) {
				var _this=this
				_this.isShow=false
				uni.showLoading({
					title:'销毁中...'
				})
				var data = {
					invite_code: _this.inputValue
				}
				_this.$http.getInvitation(data).then(res => {
					uni.hideLoading()
					console.log(res);
					let resData = res.data;
					uni.showToast({
						title: resData.msg,
						icon: 'none',
						duration: 2000
					})
					_this.inputValue = ''
				})
			},
			deliveryInput(e) {
				this.inputValue = e.detail.value
			},
			submit() {
				var _this = this;
				if(!_this.inputValue) return 
				this.isShow=true
				this.text='邀请码：' + _this.inputValue
				
				return
				uni.showModal({
					title: '是否确定核销？',
					content: '邀请码：' + _this.inputValue,
					confirmText: '确定',
					confirmColor: '#eb3c39',
					cancelText: '取消',
					cancelColor: '#030303',
					success: function(res) {
						if (res.confirm) {
						
						} else {

						}
					}
				})
			},
			scanCode() {
				var _this = this;
				// 只允许通过相机扫码
				if (uni.getSystemInfoSync().platform == "ios") {
					plus.key.hideSoftKeybord()
				}
				uni.scanCode({
					onlyFromCamera: true,
					success: function(res) {
						_this.inputValue = res.result;
						_this.submit();
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
		display: flex;
		display: -webkit-flex;
		box-sizing: border-box;
		margin-top: 300rpx;
		width: 750rpx;
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
