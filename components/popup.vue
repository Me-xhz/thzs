<template>
	<view class="popup" v-if="isShow" @click.stop>
		<view class="content">
			<view v-if="title" class="title">
				{{title}}
			</view>
			<view :class="title ? 'content_text content_title' : 'content_text'">
				<view class="text">{{text}}</view>
			</view>
			<view class="content_btn">
				<view v-if="isFail"  class="btn2" @click="fail()">{{cancal || '取消'}}</view>
				<view  class="btn2 red" @click="succer">{{confirm ||  '确定' }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			title:String,
			text:{			//主要内容
				type:String,
			},
			isShow:{		// 是否显示
				type:Boolean
			},
			isFail:{		//是否需要取消键 默认显示
				type:Boolean,
				required:true	
			},
			cancal:String,		//取消按钮的字
			confirm:String		//确认按钮的字
			
		},
		methods:{
				succer(){		//点击成功的回调
					this.$emit('succer',"huidiao")
					this.$emit('huidiao',"FSAF")
				},
				fail(){			// 点击失败的回调
					this.$emit('fail','我是')
				}
		}
	}
</script>

<style scoped>
	.title{
		height: 80rpx;
		line-height: 100rpx;
		text-align: center;
		width: 100%;
		color: #030303;
		font-size: 40rpx;
	}
	.popup{
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		right: 0rpx;
		bottom: 0rpx;
		background-color: rgba(0,0,0,.3);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.content{
		background-color: #FFFFFF;
		width: 80%;
		border-radius: 10rpx;
		
	}
	.content_btn{
		height: 100rpx;
		border-top: 1rpx #C8C7CC solid;
		display: flex;
		align-items: center;
	}
	
	.btn2{
		width: 50%;
		height: 100%;
		line-height: 100rpx;
		text-align: center;
		flex: 1;
	}
	.text{
		text-align: center;
	}
	.red{
		color: red;
		border-left: 1rpx #C8C7CC solid;
	}
	.btn2:active{
		background-color: #C0C0C0;
	}
	.content_text{
		min-height: 150rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20rpx 40rpx;
		color: #C8C7CC;
	}
	.content_title{
		min-height: 100rpx;
		padding: 0rpx 40rpx 10rpx 40rpx;
		font-size: 32rpx;
	}
</style>
