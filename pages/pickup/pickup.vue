<template>
	<view class="">
		<directory @paramClick="paramClick" :phones="phones"></directory>
	</view>
</template>

<script>
	import directory from '../../components/directory/phone-directory.vue'
	export default {
		data() {
			return {
				newCitys: {},
				phones: {},
			}
		},
		components: {
			directory
		},
		onLoad() {
			this.getList()
		},
		methods: {
			paramClick(res) {
				// 选择完地区之后返回首页 重新加载
				let allfrom = this.$tool.getStorageSync('pickup')
				let {
					cityname,
					pickup_id,
					pinyin,
					py
				} = res
				allfrom.pickup_name = cityname
				allfrom.pickup_id = pickup_id
				this.$tool.setStorageSync('pickup', allfrom)
				uni.navigateBack()
			},
			getList() {
				var _this = this
				let allfrom = {}
				_this.$http.getPickupList({}).then(res => {
					let cities = res.data.result.cities
					cities.unshift({
						cityName: "全部提货点",
						pickup_id: 0,
						pinYin: "all",
						py: "all"
					})
					_this.phones = _this.$tool.sortData(cities, "py")
					_this.phones.forEach(e => {
						allfrom[e.letter] = e.list
					})
					this.phones = allfrom
				})
			}
		}

	}
</script>

<style scoped>

</style>
