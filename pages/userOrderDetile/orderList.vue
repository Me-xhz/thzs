<template>
	<view class="orderList">
		<view class="allItem">
			
		
		<view class="goods-item" v-for="(goods, index) in list" :key="index" >
			<view class="item-photo">
				<image class="" :src="goods.sku_img"></image>
			</view>
			<view class="item-info">
				<view class="price">
					<view class="info-name">
						<text>{{goods.goods_name}}</text>
					</view>
					<view class="info-attr w80">
						<text>{{goods.spec_key_name}}</text>
					</view>
					<view class="info-price">
					</view>
				</view>
				<view class="info-amount info-amount-font">x{{goods.count}}</view>
			</view>
		</view>
		<!-- v-if="status == 1" -->
		<view v-if="status == 1"   class="btn" @click="submit">
			 确认到货
		</view>
		</view>
		<popup :isShow="isShow" :text="text"  confirm="确认"  :isFail='true'  cancal="取消" @succer="succer" @fail='fail'></popup>
		<!-- <popup :isShow="isShow2" :text="text2"  confirm="确认收货"  :isFail='true'  cancal="取消" @succer="succer2" @fail='fail2'></popup> -->
	</view>
</template>

<script>
	var _this
	export default {
		data() {
			return {
				isShow:false,
				text:"箱子是否已经到达自提点？",
				list: [],
				box_sn:"",
				status:''
			}
		},
		onLoad(e) {
			_this=this
			_this.box_sn=e.box_sn
			_this.status=e.status
			console.log(_this.status)
			this.getList()
			uni.showLoading({
				title:'获取中..'
			})
		},
		methods:{
			submit(){
				this.isShow=true
			},
			fail(res){
				this.isShow=false
			
			},
			succer(res){
					this.isShow=false
					uni.showLoading({
						title:'确认中...'
					})
					var data = {
						box_sn: _this.box_sn
					}
					_this.$http.getConfirmbox(data).then(res => {
						uni.hideLoading()
						console.log(res.data)
						_this.$common.toast(res.data.msg)
						if (res.data.success == 1) {
							_this.status=2
						}
					})
			},
		
			getList(){
				_this.$http.getBoxList({box_sn: _this.box_sn}).then(res=>{
					uni.hideLoading()
					_this.list=res.data.result.list
					if(res.data.success !==1 ){
						_this.$common.toast(res.data.msg)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.allItem{
			margin-bottom: 200rpx;
	}
	.btn{
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		width: 100%;
		height: 150rpx;
		background-color: #EB3C39;
		line-height: 150rpx;
		text-align: center;
		color:#FFFFFF;
	}
	.info_btn{
		font-size: 24rpx;
		height: 80rpx;
		width: 120rpx;
		border-radius: 5rpx;
		line-height: 80rpx;
		text-align: center;
		margin-right: 20rpx;
		color: #FFFFFF;
		background-color: #ff0041;
	}
	.active{
		background-color: #C0C0C0;
		color: #000000;
	}
	.price{
		flex: 1;
	}
	.item-info {
		display: flex;
		align-items: center;
		flex: 1;

	}
	.item-photo {
		width: 150rpx;
		height: 150rpx;
		margin: 0px 50rpx;
	}
	.item-photo >image{
		width: 150rpx;
		height: 150rpx;
	}
	.goods-item {
		height: 200rpx;
		width: 100%;
		display: flex;
		align-items: center;
		background-color: #FFFFFF;
		border-top: 1rpx solid #C8C7CC;
	
	}
	.orderList {
		height: 100%;
		width: 100%;
	}
	.info-price{
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		color: #030303;
		font-size: 26rpx;
		line-height: 30rpx;
		margin-top: 20rpx;
	}
	.info-amount-font {
		max-width: 100rpx;
		font-size: 48rpx !important;
		color: #39ACEB !important;
		font-weight: 600 !important;
		margin-left: auto;
		flex: 1;
		text-align: right;
		margin-right: 30rpx;
	}
	.info-name{
		position: relative;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		width: 70%;
		padding-right: 0 !important;
		box-sizing: border-box;
		color: #030303;
		font-size: 26rpx;
		font-weight: normal;
		text-align: left;
		line-height: 1.7;
	}
	.info-attr{
		position: relative;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		width: 80%;
		box-sizing: border-box;
		color: #979797;
		font-size: 24rpx;
		font-weight: normal;
		text-align: left;
		line-height: 1.8;
	}
</style>
