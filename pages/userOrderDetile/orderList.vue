<template>
	<view class="orderList">
		<view class="goods-item" v-for="(goods, index) in list" :key="index" @click="gotoDetile(goods)">
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
						<text class="icon-rmb">¥</text>{{goods.goods_price}}
					</view>
				</view>
				<view class="info-amount info-amount-font">x{{goods.goods_num}}</view>
				<view :class="goods.status == 0 ? 'info_btn' : 'info_btn active' " @click.stop="getTake(goods,index)" >
						确定收货
				</view>
			</view>
		</view>
		<popup :isShow="isShow" :text="text"  confirm="确认收货"  :isFail='true'  cancal="取消" @succer="succer" @fail='fail'></popup>
		<popup :isShow="isShow2" :text="text2"  confirm="确认收货"  :isFail='true'  cancal="取消" @succer="succer2" @fail='fail2'></popup>
	</view>
</template>

<script>
	var _this
	export default {
		data() {
			return {
				text2:'是否确认收货',
				isShow2:false,
				isShow:false,
				text:"该订单未进行确认收货，是否确认收货",
				list: [],
				orderSn:"763363",
				inputValue:'',
				order_sn:'',
				newIndex:''
			}
		},
		onLoad(e) {
			_this=this
			this.getList()
			uni.showLoading({
				title:'获取中..'
			})
		},
		methods:{
			fail2(){
				this.isShow2=false
			},
			succer2(){
				_this.list[_this.newIndex].status=0
				_this.isShow2=false
				return
				uni.showLoading({
					title:'提货中。。。'
				})
				_this.$http.getConfirmOrder(data).then(res => {
					let resData = res.data
					uni.hideLoading()
					if (resData.success == 1) {
						// 走失败 
						console.log(resData)
						_this.$common.toast(resData.msg)
					
					} else {
						// 走成功
						_this.$common.toast(resData.msg)
						_this.list[_this.newIndex].status=1
					}
				})
			},
			getTake(res,index){
				console.log(res)
				if(res.status == 1) return 
				_this.order_sn=res.order_sn
				_this.newIndex =index
				_this.isShow2=true
				
			},
			showConfig(res){
				// this.isShow=true
				// this.inputValue=res
			},
			hideConfig(){
				// this.inputValue=''
				// this.isShow=false
			},
			fail(res){
				this.isShow=false
				this.inputValue=''  
			},
			succer(res){
				uni.navigateTo({
					url: '/pages/userOrderDetile/userOrderDetile?orderSn=' + this.inputValue
				})
			},
			gotoDetile(res){
				uni.navigateTo({
					url: '/pages/userOrderDetile/userOrderDetile?orderSn=' + res.get_sn,
				})
			},
			getList(){
				_this.$http.getOrderList({order_sn: _this.orderSn}).then(res=>{
					uni.hideLoading()
					_this.list=res.data.result
					if(_this.list.length==1){
						uni.redirectTo({
							url:'/pages/userOrderDetile/userOrderDetile?orderSn=' + _this.list[0].get_sn,
						})
					}
					if(res.data.success !==1 ){
						_this.$common.toast(res.data.msg)
					}
				})
			}
		}
	}
</script>

<style scoped>
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
