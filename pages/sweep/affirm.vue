<template>
	<!-- 到货确认 -->
	<view>
		<view class="row arrival-header">
			<input :value="inputValue" maxlength="12" class="arrival-input" @input="arrivalInput" type="text" placeholder="请输入提货箱一维码"></input>
			<view @tap="scanCode" class="sys-btn">扫码</view>
		</view>
		<view class="arrival-list" v-for="(item, index) in itemList" :key="index">
			<text class="arrival-time">{{item.box_finish_time}}</text>
			<view class="row-wrap arrival-box">
				<!-- <view class="positionR" v-for="(list, index2) in item.box_list" :key="index2" @tap="list.status == 2?'':'goArrivalOrder'" 
				:data-box_sn="list.box_sn" v-if="list.count>0">-->
				<view class="positionR" v-for="(list, index2) in item.box_list" :key="index2" @tap="goArrivalOrder(list.status,list.box_sn)"
				 v-if="list.count>0">
					<view v-if="list.status == 2" class="iconfont icon-xiangbox60 arrival-icon"></view>
					<view v-else class="iconfont icon-xiangbox59 arrival-icon icon-color"></view>
					<view :class="'arrival-name ' + (list.status == 2 ? 'active' : '')">
						<view class="box-name">{{list.pickup_logogram}}</view>
						<view class="box-number">{{list.box_name}}</view>
					</view>
					<view class="arrival-orderNum">{{list.count}}</view>

				</view>
			</view>
		</view>

		<popup :isShow="isShow" :text="text" :isFail='true' confirm="确认" cancal="取消" @succer="succer" @fail='fail'></popup>
		<popup :isShow="isShow2" :text="text2" :isFail='true' confirm="确认" cancal="取消" @succer="succer2" @fail='fail2'></popup>
	</view>
</template>

<script>
	var _this
	export default {
		data() {
			return {
				itemList: [],
				inputValue: "",
				isShow: false,
				text: "",
				allValue: {},
				allBox: {},
				text2: "箱子是否已经到达自提点?",
				isShow2: false
			}
		},
		onLoad() {
			_this = this
		},
		onShow() {
			this.getboxlist()
		},
		methods: {
			succer2() {
				_this.isShow2 = false
				_this.confirmbox(_this.allBox);
				_this.getboxlist();
			},
			fail2() {
				_this.isShow2 = false
			},
			succer() {
				// 点击确定
				_this.isShow = false
				_this.confirmbox(_this.allValue);
			},
			fail() {
				_this.isShow = false
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
						console.log(res);
						_this.confirmbox(res.result);
					}
				});
			},
			//获取箱子列表
			getboxlist() {
				let _this = this;
				_this.$http.getboxlist().then(res => {
					// console.log('获取箱子列表',res);
					let resdata = res.data
					if (resdata.success == 1) {
						_this.itemList = resdata.result.box_group_list
					} else {
						_this.$common.toast(resdata.msg)
					}
				})
			},
			//输入框事件
			arrivalInput(e) {
				var _this = this;
				var value = e.detail.value;
				const reg = /^[a-zA-Z]{2}\d{7}[a-zA-Z]{1}\d{2}$/;
				console.log(reg.test(value));
				_this.text = "中转箱码为：" + value;
				var confirmText = "确认";
				if (value.length == 12 && reg.test(value) == false) {
					_this.$common.toast("请输入正确的提货箱码")
					return;
				} else if (value.length == 12 && reg.test(value) == true) {
					_this.isShow = true
					_this.allValue = value

					return;
				}
			},
			// 确认中转箱到达
			confirmbox(value) {
				var _this = this;
				var data = {
					box_sn: value
				}
				_this.$http.getConfirmbox(data).then(res => {
					let resData = res.data
					console.log(resData)
					_this.$common.toast(resData.msg)
					_this.inputValue = ''
					if (resData.success == 1) {
						_this.getboxlist();
					}
				})
			},
			goArrivalOrder(status, box_sn) {
				
				uni.navigateTo({
					url:'../userOrderDetile/orderList?box_sn='+box_sn+'&status='+status
				})
				// 测试
				return
				if (status == 2) {
					return
				}
				let _this = this;
				_this.allBox = box_sn
				_this.text2 = '箱子是否已经到达自提点?'
				_this.isShow2 = true
			}
		}
	}
</script>

<style>
	.arrival-header {
		background-color: #ffffff;
		padding: 40rpx 0;
		width: 100%;
		display: flex;
		display: -webkit-flex;
		box-sizing: border-box;

	}

	.arrival-input {
		width: 450rpx;
		height: 80rpx;
		line-height: 80rpx;
		border: 1rpx #AAAAAA solid;
		margin-left: 50rpx;
		padding: 0 20rpx;
	}

	.arrival-list {
		text-align: center;
		padding: 20rpx 0;
		background-color: #ffffff;
		margin-bottom: 20rpx;
	}

	.arrival-time {
		font-size: 35rpx;
		color: #000000;
	}

	.arrival-box {
		width: 750rpx;
		display: flex;
		display: -webkit-flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.arrival-icon {
		font-size: 140rpx;
		width: 250rpx;
		margin-top: 20rpx;
		color: #EB3C39;
		text-align: center;
	}

	.icon-color {
		color: #AAAAAA;
	}

	.arrival-name {
		position: absolute;
		top: 85rpx;
		left: 75rpx;
		width: 100rpx;
		text-align: center;
		font-size: 24rpx;
		color: #AAAAAA;
	}

	.arrival-name .box-number {
		font-size: 30rpx;
	}

	.arrival-orderNum {
		position: absolute;
		top: 0;
		right: 10rpx;
		width: 50rpx;
		height: 50rpx;
		line-height: 50rpx;
		border-radius: 50rpx;
		background-color: #EB3C39;
		text-align: center;
		font-size: 28rpx;
		color: #ffffff;
	}

	.active {
		color: #ffffff;
	}

	.sys-btn {
		background-color: #EB3C39;
		width: 140rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		color: #ffffff;
		margin-left: 20rpx;
	}

	.positionR {
		position: relative;
	}
</style>
