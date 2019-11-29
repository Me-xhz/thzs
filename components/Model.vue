<template>
	<view v-if="isShow" class="Model">
			<view class="content">
				<slot></slot>
			</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				
		}
		},
		props:{
			isShow:Boolean
		}
	}
</script>

<style>
	.Model{
		position: fixed;
		top: 0rpx;
		bottom: 0rpx;
		left: 0rpx;
		right: 0rpx;
		background-color: rgba(0,0,0,.3);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 999;
	}
	.content{
		min-height: 800rpx;
		width: 80%;
		background-color: #FFFFFF;
	}
</style>
