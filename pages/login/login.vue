<template>
	<view class="content">
		<!-- <view class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>
				<m-input class="m-input" type="text" clearable focus v-model="account" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-row">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
		</view> -->
		<!-- <view class="btn-row">
			<button type="primary" class="primary login-btn" @tap="bindLogin">登录</button>
		</view> -->
		<!-- 	<view class="action-row">
			<navigator url="../reg/reg">注册账号</navigator>
			<text>|</text>
			<navigator url="../pwd/pwd">忘记密码</navigator>
		</view> -->
		<view class="oauth-row" v-if="hasProvider">
			<view class="oauth-image" v-for="provider in providerList" :key="provider.value">
				<image :src="provider.image" @tap="oauth(provider.value)"></image>
				<!-- #ifdef MP-WEIXIN -->
				<button v-if="!isDevtools" open-type="getUserInfo" @getuserinfo="getUserInfo"></button>
				<!-- #endif -->
			</view>
		</view>
		<view class="wxLogin" @tap="oauth('weixin')">微信登陆</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex';
	import mInput from '../../components/m-input.vue'

	export default {
		components: {
			mInput
		},
		data() {
			return {
				providerList: [],
				hasProvider: false,
				account: '',
				password: '',
				positionTop: 0,
				isDevtools: false,
			}
		},
		computed: {

		},
		onReady() {
			this.initProvider()
		},
		methods: {
			...mapActions(['getUniLogin']),
			initProvider() {
				const filters = ['weixin','qq'];
				uni.getProvider({
					service: 'oauth',
					success: (res) => {
						if (res.provider && res.provider.length) {
							for (let i = 0; i < res.provider.length; i++) {
								if (~filters.indexOf(res.provider[i])) {
									this.providerList.push({
										value: res.provider[i],
										image: '../../static/images/img/' + res.provider[i] + '.png'
									});
									console.log('../../static/images/img/' + res.provider[i] + '.png')
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
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			},
			bindLogin() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (this.account.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}

			},
			oauth(value) {
				uni.login({
					provider: value,
					success: (loginRes) => {

						uni.getUserInfo({
							provider: value,
							success: (infoRes) => {
								console.log(infoRes)
								this.getUniLogin(infoRes);
								uni.navigateBack({
									delta:1
								})
							},
							fail() {
								uni.showToast({
									icon: 'none',
									title: '登陆失败'
								});
							}
						});
					},
					fail: (err) => {
						// console.error('授权登录失败：' + JSON.stringify(err));
					
							uni.showToast({
								icon: 'none',
								title: '登陆失败'
							});
						
					}
				});

			// 	let _this = this;
			// 	let getAppid = 'wxeee2536abcf8a3d8';
			// 	uni.login({
			// 		provider: value,
			// 		success: (loginRes) => {
				
			// 			uni.getUserInfo({
			// 				provider: value,
			// 				success: (infoRes) => {
			// 					console.log(infoRes)
			// 					// this.getUniLogin(infoRes);
			// 					this.userInfo = infoRes;
			// 					let weixinService = null;
			// 					// http://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices
			// 					plus.oauth.getServices(function(services) {
				
			// 						if (services && services.length) {
			// 							for (let i = 0, len = services.length; i < len; i++) {
			// 								if (services[i].id === 'weixin') {
			// 									weixinService = services[i];
			// 									break;
			// 								}
			// 							}
			// 							if (!weixinService) {
			// 								console.log('没有微信登录授权服务');
			// 								return;
			// 							}
			// 							// http://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.authorize
			// 							weixinService.authorize(function(event) { //此处获取code的关键
									
			// 								// _this.weixinCode = event.code; //用户换取 access_token 的 code
			// 								// it.requestLogin();
											
			// 							  _this.getUniLogin({code:event.code,userInfo:_this.userInfo})
									
								
			// 							}, function(error) {
			// 								console.error('authorize fail:' + JSON.stringify(error));
			// 							}, {
			// 								// http://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthOptions
			// 								appid: getAppid, //开放平台的应用标识。暂时填个假的充数，仅做演示。
			// 							});
			// 						} else {
			// 							console.log('无可用的登录授权服务');
			// 						}
			// 					}, function(error) {
			// 						console.error('getServices fail:' + JSON.stringify(error));
			// 					});
			// 				},
			// 				fail() {
			// 					uni.showToast({
			// 						icon: 'none',
			// 						title: '登陆失败'
			// 					});
			// 				}
			// 			});
			// 		},
			// 		fail: (err) => {
			// 			console.error('授权登录失败：' + JSON.stringify(err));
			// 		}
			// 	});
				
			
			 },

			
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	page {
		min-height: 100%;
		display: flex;
		font-size: 16px;
	}

	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
	}

	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;

	}

	/* 原生组件模式下需要注意组件外部样式 */
	custom-component {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	/* #ifdef MP-ALIPAY */
	page {
		min-height: 100vh;
	}

	/* #endif */

	/* 原生组件模式下需要注意组件外部样式 */
	m-input {
		width: 100%;
		/* min-height: 100%; */
		display: flex;
		flex: 1;
	}

	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
		padding: 10px;
	}

	.input-group {
		background-color: #ffffff;
		margin-top: 20px;
		position: relative;
	}

	.input-group::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
		font-size: 18px;
		line-height: 40px;
	}

	.input-row .title {
		width: 72px;
		padding-left: 15px;
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 8px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.btn-row {
		margin-top: 25px;
		padding: 10px;
	}

	button.primary {
		background-color: #0faeff;
	}

	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.action-row navigator {
		color: #007aff;
		padding: 0 10px;
	}

	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 100upx;
		left: 0;
		width: 100%;
	}

	.oauth-image {
		position: relative;
		width: 50px;
		height: 50px;
		border: 1px solid #dddddd;
		border-radius: 50px;
		margin: 0 20px;
		background-color: #ffffff;
	}

	.oauth-image image {
		width: 30px;
		height: 30px;
		margin: 10px;
	}

	.oauth-image button {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}

	.wxLogin {
		width: 100%;
		height: 100upx;
		background-color: #33FF00;
		margin-top: 200upx;
		text-align: center;
		line-height: 100upx;
		color: #fff;
		font-size: 34upx;
		border-radius: 10upx;

	}
</style>
