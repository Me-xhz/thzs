<script>
	import { checkUpdater } from '@/common/checkUpdater'
	export default {
		onLaunch: function() {
			uni.removeStorageSync('getExpressPickupId');
			console.log('App Launch')
			// #ifdef APP-PLUS
			plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
				let versionCode = widgetInfo.version
				// let version = widgetInfo.version.replace(/\./g, '');
				console.log("我是版本信息",widgetInfo)
				checkUpdater(versionCode) 
			})
			// #endif 
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./iconfont.css");

	page {
		height: 100%;
		background: #f2f2f2;
		font-family: '微软雅黑';
	}
</style>
