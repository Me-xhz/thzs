<template>
	<view class="container">
		<view class="node-number">
			<view class="text" @tap="showNumberModel">查看商品数量统计</view>
			<view class="number">订单数：{{boxOrderNumber}}</view>
			<view class="picker-select" @tap="toggleTab(tabList[0])" v-if="pageStyle==1|| pageStyle==4">
				<view>{{pickerArrayName}}</view>
				<view class="iconfont icon-btn_sanjiaoxiaojiantoux"></view>

			</view>
			<!-- 全部、已售后、 未提货组件-->
			<w-picker v-if="selectList.length!=0" mode="selector" :defaultVal="[0]" @confirm="onConfirm" ref="selector"
			 themeColor="#f00" :selectList="selectList"></w-picker>
		</view>
		<view class="searchbox">
			<view class="dataInpt" @tap="toggleTab(tabList[1])">
				{{selectTime}}
			</view>
			<!-- 选择时间组件 -->
			<w-picker mode="date" startYear="2017" endYear="2020" :current="true" @confirm="onConfirmTime" :disabledAfter="true"
			 ref="date" themeColor="#f00"></w-picker>
			<input class="searchInput" :value="searchValue" type='text' @input='searchInput' @confirm="searchCifim" placeholder='姓名/手机号/物流单号'></input>
		</view>
		<view class="list-pad">
			<view class="list-box" v-for="(item,index) in boxOrderInfo" :key="index" @tap="goDetail" :data-order-sn="item.order_sn">
				<view class="list-item">订单号：{{item.order_sn}}</view>
				<view class="list-item">物流单号：{{item.delivery_sn}}</view>
				<view class="list-item">收货人：{{item.consignee}}</view>
				<view class="list-item">手机号：{{item.mobile}}</view>
				<view class="list-item" v-if="pageStyle==1|| pageStyle==4">是否发送取货码：{{item.is_noticed}}</view>
				<view class="list-item" v-if="pageStyle==1|| pageStyle==4">取货码发送时间：{{item.order_send_time}}</view>
				<view v-if="item.is_have_back == 1" class='list-status'>用户已申请售后</view>
				<view class="list-btn-box">
					<button class="list-btn">查看详情</button>
				</view>
			</view>
		</view>
		<view class="drawer_screen" @tap="hideNumberModel" v-if="numberModelStatus"></view>
		<view class="number-model-box" v-if="numberModelStatus">
			<view class="header-text">商品数量统计</view>
			<scroll-view class="row model-scroll" scroll-y="true">
				<view class="row model-list" v-for="(item,index) in numberList" :key="index">
					<text class="list-name" :class="item.type == 2 ? 'red' : ''">{{item.goods_name}}</text>
					<text class="list-number">*{{item.send_number}}</text>
				</view>
			</scroll-view>
		</view>


	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components: {
			wPicker
		},
		data() {
			return {
				oldSize: 0,
				pageStyle: 1,
				boxOrderNumber: 0,
				numberModelStatus: false,
				mode: "range",
				// defaultVal: [0, 0, 0, 0, 0, 0, 0],
				tabIndex: 0,
				pickerArrayName: '全部',
				pickerIndex: 0,
				tabList: [{
					mode: "selector",
					name: "全部"
				}, {
					mode: "date",
					name: "日期选择"
				}],
				selectList: [{
					label: "全部",
				}, {
					label: "已售后",
				}, {
					label: "未提货",
				}, {
					label: "已发货未确认",
				}],
				//输入框的值
				searchValue: '',
				//选择时间的值
				dateValue: "",
				selectTime: '选择日期',
				numberList: [],
				page: 1,
				page_size: 5,
				boxOrderInfo: [],
			}
		},
		onLoad(options) {
			this.pageStyle = options.style
			//动态设置标题栏
			uni.setNavigationBarTitle({
				title: options.style == '2' ? '在途中订单' : options.style == '3' ? '售后到库订单' : '未提货订单'
			});
		},
		onShow() {
			this.getNumberBox()
			this.searchSubmit()
		},
		methods: {
			showNumberModel() {
				this.numberModelStatus = true
			},
			hideNumberModel() {
				this.numberModelStatus = false
			},
			//滑动选值
			toggleTab(item) {
				// console.log(item);
				this.mode = item.mode;
				// // this.defaultVal = item.value;
				this.$refs[item.mode].show();
			},
			//最后的赋值 选择全部、已售后、未提货的确认事件
			onConfirm(val) {
				this.pickerArrayName = val.result;
				console.log(val)
				switch (val.result) {
					case '全部':
						this.pickerIndex = 0
						this.pageStyle=1	
						break;
					case '已售后':
						this.pickerIndex = 1
						this.pageStyle=1
						break;
					case '未提货':
						this.pickerIndex = 2
						this.pageStyle=1
						break;
					case '已发货未确认':
						this.pickerIndex = 0
						this.pageStyle=4
						console.log(this.pageStyle)
						break;
					default:
						break;
				}
				this.page = 1;
				this.page_size = 20;
				this.boxOrderInfo = [];
				this.searchSubmit();
				this.getNumberBox();
			},
			//最后的赋值 选择时间后点击确认事件
			onConfirmTime(val) {
				this.selectTime = val.result;
				this.dateValue = this.selectTime
				this.page = 1;
				this.page_size = 20;
				this.boxOrderInfo = [];
				this.searchSubmit();
				this.getNumberBox();
			},
			searchInput(e) {
				console.log('输入事件')
				this.searchValue = e.detail.value
			},
			searchCifim() {
				console.log('点击确认事件');
			},

			onReachBottom() {
				this.searchSubmit();
				this.getNumberBox();
			},
			goDetail(e) {
				var order_sn = e.currentTarget.dataset.orderSn;
				uni.navigateTo({
					url: './order_details/order_details?orderSn=' + order_sn
				})
			},
			//获取提货点未领取商品列表 list_type:列表类型 默认未提货列表 1 未提货列表 2 在途中列表 3 售后完成列表 0已发货未确认
			getNumberBox() {
				var _this = this
				var date = new Date(_this.dateValue).getTime();
				var data = {
					key_word: _this.searchValue,
					search_time: date,
					unclaimed_status: Number(_this.pickerIndex),
					list_type: Number(_this.pageStyle)
				}
				_this.$http.getUnclaimedGoodsInfo(data).then(res => {
					let resData = res.data
					_this.numberList = resData.result.boxGoodsInfo
				})

			},
			// 获取提货点未领取的订单列表 list_type:列表类型 默认未提货列表 1 未提货列表 2 在途中列表 3 售后完成列表
			searchSubmit() {
				var _this = this;
				let isold = false
				var date = new Date(_this.dateValue).getTime();
				var data = {
					key_word: _this.searchValue,
					page: _this.page,
					page_size: _this.page_size,
					search_time: date,
					unclaimed_status: Number(_this.pickerIndex),
					list_type: Number(_this.pageStyle)
				}
				_this.$http.getUnclaimedInfo(data).then(res => {
					let resData = res.data
					if (resData.result.boxOrderInfo.length > 0) {

						if (resData.result.boxOrderInfo.length !== _this.page_size) {
							_this.oldSize = resData.result.boxOrderInfo.length
							// 保存上次未满当前条数
						} else {

						}
						_this.page += 1
						_this.boxOrderInfo = [..._this.boxOrderInfo, ...resData.result.boxOrderInfo]
					} else {
						uni.showToast({
							icon: "none",
							title: '没有更多了',
							duration: 500
						});
					}
					_this.boxOrderNumber = resData.result.count
				})
			},

		}
	}
</script>

<style lang="scss">
	@import url("./order_list.css");
</style>
