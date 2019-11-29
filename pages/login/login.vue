<template>
	<view class="content">
		<view class="text-area">
			<view class="view_block">
				<image :src="imgUrl + '/img_dltt@2x01.png'" class="dltt"></image>
			</view>
			<view class="inpnt_code">
				<view class="code_list">
					<input type="text" value="" maxlength="11" v-model="allFrom.phone" placeholder="请输入手机号码" />
				</view>
				<view class="code_list">
					<input type="text" value="" maxlength="4" v-model="allFrom.code" placeholder="请输入验证码" /><text :class="isTime? 'codeClass active' : 'codeClass' "
					 @click="getCode">{{CodeTime}}</text>
				</view>
				<view class="login_code " @click="submit">
					登录
				</view>
			</view>
			<!-- #ifdef MP-WEIXIN -->
			<!-- 			<view class="btn_box">
				<button class="login_btn" open-type="getUserInfo" @getuserinfo="onGotUserInfo">
					<text class="login_text">登录</text>
				</button>
			</view> -->
			<!-- #endif -->
			<!-- #ifdef APP-PLUS -->
			<!-- 		<view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}" v-for="provider in providerList"
			 :key="provider.value">
				<button class="login_btn" @tap="oauth(provider.value)">
					<text class="login_text">登录</text>
				</button>
			</view> -->
			<!-- #endif -->
			<!-- <image :src="imgUrl + '/dlwz@2x01.png'" class="dlwz"></image> -->
		</view>
	</view>
</template>
<script>
	var _this
	import {
		setTokenStorage
	} from '../../utils/tool.js'
	export default {

		data() {
			return {
				infoRes: {},
				imgUrl: this.$URL.iconURL,
				title: 'login',
				providerList: [],
				hasProvider: false,
				positionTop: 0,
				CodeTime: "获取验证码",
				isTime: false,
				allFrom: {},
				setTime:null
			}
		},
		onLoad() {
			_this = this
			this.initPosition()
			this.initProvider()
		},
		onShow() {
		},
		onHide() {
			clearInterval(_this.setTime)
			_this.setTime=null
			console.log(_this.setTime,'清空')
		},
		methods: {
			submit() {
				// 提交登录
				if (!_this.$common.str.test(_this.allFrom.phone) || !_this.allFrom.code) {
					_this.$common.toast('请输入正确的手机号或验证码')
					return
				}
				uni.showLoading({
					title:'登陆中...'
				})
				_this.$http.codeLogin({
					code:_this.allFrom.code,
					mobile:_this.allFrom.phone
				}).then(res=>{
					console.log('登录信息',res)
					uni.hideLoading();
					if(res.data.success == 1){
						_this.$tool.setStorageSync("pickup", res.data.result)
						// _this.$tool.setStorageSync("oldToken", _this.$tool.getTokenStorage())
						setTokenStorage(res.data.result.token)
						_this.$tool.setStorageSync('isLogin', true)
						uni.reLaunch({
							url: '../index/index'
						})
					}else{
						_this.$common.toast(res.data.msg)
					}
				}).catch(err=>{
					uni.hideLoading();
				})

			},
			getCode() {
				if (_this.isTime) {
					return
				}
				// 获取短信验证码
				if (!_this.$common.str.test(_this.allFrom.phone)) {
					_this.$common.toast('请输入正确的手机号')
					return
				}
				_this.$http.getCode({
					mobile: _this.allFrom.phone
				}).then((res) => {
					console.log(res)
					if(res.data.success == 1){
						_this.$common.toast("发送成功")
						_this.getCodeTime()
					}else{
						_this.$common.toast(res.data.msg || '发送失败！')
					}
				})
				//发送请求之后在触发验证码
			},
			//倒计时
			getCodeTime(res) {
				clearInterval(_this.setTime)
				let times = 60
				_this.isTime = true
				_this.setTime = setInterval(() => {
					times--
					_this.CodeTime = times + 's重试'
					if (times == 0) {
						_this.isTime = false
						clearInterval(_this.setTime)
						_this.CodeTime = '重新获取验证码'
						return
					}
				}, 1000)
			},
			//获取用户信息
			getUserInfo() {
				this.$http.getUserInfo().then(res => {
					console.log("用户信息", res)
					if (res.data.result.has_express == 1) {
						// 有权限登录
						_this.$http.getExpressUserInfo().then(res => {
							console.log('物流信息', res)
							_this.$tool.setStorageSync("pickup", res.data.result)
							_this.$tool.setStorageSync("oldToken", _this.$tool.getTokenStorage())
							setTokenStorage(res.data.result.token)
							_this.$tool.setStorageSync('isLogin', true)
							uni.hideLoading();
							uni.reLaunch({
								url: '../index/index'
							})
						})
					} else {
						uni.hideLoading();
						this.$common.toast('暂无权限登录')
					}
				})
			},
			//微信主动唤起登录权限
			onGotUserInfo: function(e) {
				if (e.detail.rawData) {
					this.oauth('weixin')
					this.$tool.setStorageSync('userInfo', e.detail.rawData)
				} else {
					uni.showToast({
						title: '登录将体验更多功能',
						icon: 'none'
					})
				}
			},
			applogin(res) {
				_this.$http.appLogin(res).then(res => {
					// *app 登录没有其余多余的流程
					console.log("报错信息", res)
					setTokenStorage(res.data.result.token)
					_this.getUserInfo()
				}).catch(err => {
					console.log("我是错误", err)
					uni.hideLoading()
				})
			},
			//此处登录之后重定向到首页
			goLogin(loginFrom) {
				// 获取token 
				this.$http.getToken(loginFrom).then(res => {
					if (res.data.result.status == 0) {
						setTokenStorage(res.data.result.token)
						_this.getUserInfo()
					} else if (res.data.result.status == 1) {
						//新用户注册				
						let thirdFrom = {
							oauthCode: loginFrom.code,
							encrypted_data: _this.infoRes.encrypted_data,
							iv: _this.infoRes.iv,
							signature: _this.infoRes.signature,
							unionid: res.data.result.unionid,
							...loginFrom
						}
						_this.$http.thirdLogin(thirdFrom).then(res => {
							setTokenStorage(res.data.result.token)
							_this.getUserInfo()
						})
					} else if (res.result.status == 2) {
						//老用户更新
						console.log(res.data.result.token)
						setTokenStorage(res.data.result.token)
						_this.getUserInfo()

					}
				}).catch(err => {
					console.log(err)
				})

			},

			initPosition() {
				this.positionTop = uni.getSystemInfoSync().windowHeight - 200;
			},
			//判断当前页面支持何种登录方式 且将渲染到页面上 当前选择微信和QQ
			initProvider() {
				const filters = ['weixin'];
				uni.getProvider({
					service: 'oauth',
					success: (res) => {
						if (res.provider && res.provider.length) {
							for (let i = 0; i < res.provider.length; i++) {
								if (~filters.indexOf(res.provider[i])) {
									this.providerList.push({
										value: res.provider[i],
										image: '../../static/img/' + res.provider[i] + '.png'
									});
								}
							}

							this.hasProvider = true;
						}
					},
					fail: (err) => {
						console.error('获取服务供应商失败：' + JSON.stringify(err));
					}
				});

			},

			// oauth 鉴权
			oauth(value) {
				uni.login({
					provider: value,
					success: (res) => {
						uni.getUserInfo({
							provider: value,
							success: (infoRes) => {

								_this.infoRes = {
									oauthCode: res.code,
									suffix: 'wx',
									iv: infoRes.iv,
									encrypted_data: infoRes.encryptedData,
									signature: infoRes.signature,
									...infoRes.userInfo
								}
								// #ifdef MP-WEIXIN
								_this.infoRes.suffix = 'wxm'
								uni.showLoading({
									title: '登录中，请稍等',
									mask: true
								});
								_this.goLogin(_this.infoRes)
								console.log(_this.infoRes);
								// #endif
								// #ifdef APP-PLUS
								let userInfo = infoRes.userInfo
								uni.showLoading({
									title: '登录中，请稍等',
									mask: true
								});
								userInfo.oauth = "app"
								console.log('我是用户信息', userInfo)
								_this.applogin(userInfo)
								// #endif
							}
						});
					},
					fail: (err) => {
						console.error('授权登录失败：' + JSON.stringify(err));
					}
				});
			},
		}
	}
</script>

<style scoped>
	.content{
		height: 100%;
		background-color: #FFFFFF;
	}
	.codeClass {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 250rpx;
		font-size: 32rpx;
		height: 80%;
		line-height: 80%;
		background-color: #FFE150;
		border-radius: 50rpx;
	}
	.active{
		background-color: #C8C7CC;
	}

	.btn_box {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.code {
		background-color: #FFE150;
		height: 70rpx;
		line-height: 70rpx;
		width: 150rpx;
		text-align: center;
		border-radius: 30px;
	}

	.code_list {
		width: 80%;
		height: 100rpx;
		line-height: 100rpx;
		padding-left: 30rpx;
		margin: 0rpx auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1rpx solid rgba(0, 0, 0, .3);
	}

	.login_code {
		height: 88rpx;
		line-height: 88rpx;
		width: 80%;
		justify-content: center;
		background-color: #FFE150;
		border-radius: 50px;
		text-align: center;
		margin: 0rpx auto;
		margin-top: 40rpx;
	}

	.login_code:active {
		background-color: #FFE185;
	}

	.login_btn {
		height: 88rpx;
		line-height: 88rpx;
		width: 260rpx;
		justify-content: center;
		background-color: #FFE150;
		border-radius: 50px;
		text-align: center;

		/* background-color: #bbb; */
		/* 取消按钮的颜色 */
	}

	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.oauth-image {
		width: 100upx;
		height: 100upx;
		border: 1upx solid #dddddd;
		border-radius: 100upx;
		margin: 0 40upx;
		background-color: #ffffff;
	}

	.oauth-image image {
		width: 60upx;
		height: 60upx;
		margin: 20upx;
	}

	.view_block {
		width: 264rpx;
		height: 380rpx;
		padding-top: 208rpx;
		margin: 0 auto 100rpx auto;
	}

	.view_block>image {
		height: 100%;
		width: 100%;

	}

	.dlwz {
		display: block;
		width: 416rpx;
		height: 112rpx;
		margin: 0 auto;
		margin-top: 100rpx;

	}



	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
