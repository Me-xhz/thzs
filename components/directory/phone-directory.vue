<template>
	<view class="phone-main" :style="{height: winHeight + 'px'}">
		<view class="phoneDirectory">
			<phone-list :phones="phones" :letter="letter" :scrollAnimationOFF="scrollAnimationOFF" @change="handlePhoneListIndex"
			 @reset="handleReset" @handleClick="handleClick">
			</phone-list>
			<phone-alphabet :phones="phones" :phoneListIndex="phoneListIndex" @change="handleDatasetKey" @scrollAnimationOFF="handleScrollAnimationOFF"
			 @reset="handleReset">
			</phone-alphabet>
		</view>
	</view>
</template>

<script>
	import phoneList from './phone-list.vue'
	import phoneAlphabet from './phone-alphabet.vue'
	export default {
		name: "phone-directory",
		components: {
			phoneList,
			phoneAlphabet,
		},
		props: {

			phones: {
				type: Object

			},


			default: false
		},
		data() {
			return {
				isSect: true,
				winHeight: 0,
				letter: 'A',
				scrollAnimationOFF: true,
				phoneListIndex: 'A',
				reset: true
			}
		},
		computed: {
			phonesEscape() {
				return escape(JSON.stringify(this.phones))
			}
		},
		mounted() {


			let windowHeight = uni.getSystemInfoSync().windowHeight
			// #ifndef APP-PLUS
			this.winHeight = windowHeight
			//#endif

			//#ifdef APP-PLUS
			this.winHeight = windowHeight - 56
			//#endif

			if (!this.phones) {
				uni.showToast({
					title: '没有数据',
					icon: "none",
					mask: false,
					duration: 1500
				})
			}
		},
		methods: {
			goSecletCity() {
				//如果选择城市
				uni.navigateTo({
					url: '../../pages/local/cityList'
				})
			},

			handleClick(e) {
				this.$emit('paramClick', e)
			},
			handleDatasetKey(val) {
				this.letter = val
			},
			handleScrollAnimationOFF(val) {
				this.scrollAnimationOFF = val
			},
			handlePhoneListIndex(val) {
				if (this.reset) {
					this.phoneListIndex = val
				}
			},
			handleReset(val) {
				if (val) {
					this.letter = ''
				}
				this.reset = val
			}

		}
	}
</script>

<style scoped lang="scss">
	.tips {
		height: 100rpx;
		color: #FFB400;
		font-size: 28rpx;
		font-weight: 500;
		padding: 12rpx 24rpx;
		background-color: #FFFBE6;
		box-sizing: border-box;
	}

	.phone-main {
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.phoneDirectory {
		display: flex;
		flex-direction: row;

	}

	.location {
		background-color: #fff;
		padding: 16rpx 32rpx;
		align-items: center;
		font-size: 28rpx;

		.location-city {
			width: 200rpx;
			height: 60rpx;
			border: 1px solid #ebebeb;
			font-size: 32rpx;
			text-align: center;
			line-height: 60rpx;
			margin-top: 10rpx;
			color: #46595F;

			.iconfont {
				margin-right: 10rpx;
				font-size: 28rpx;
				color: #ffd122;
				display: inline-block;
			}

			.icon-btn_dizhix:before {
				content: "\e69f";
			}

			.cityName {
				display: inline-block;
			}
		}
	}

	.allFactory_position {
		display: flex;
		margin-top: 6upx;
		padding: 0 32upx;
		justify-content: space-between;
		align-items: flex-end;
	}

	.allFactory_position>.allFactory {
		color: #746B64;
		font-size: 28upx;
	}

	.allFactory_position>.position {
		color: #908E9A;
		font-size: 24upx;
	}
</style>
