<template>
	<view class="open-vip-user">
		<view class="open-vip-user-bg"></view>
		<view class="open-vip-user-img-box">
			<image class="open-vip-user-img" :src="vipBgImg"></image>
			<view class="open-vip-user-info flex align-center">
				<view class="user-info-img mr-2">
					<image v-if="!userInfo.headimgurl" src="../../static/images/userImg/touxiang.png"></image>
					<image v-else :src="userInfo.headimgurl"></image>
				</view>
				<view class="user-info flex flex-column text-white">
					<text class="font-m" v-if="!userInfo.username">请先登陆</text>
					<text class="font-m" v-else>{{userInfo.username}}</text>
					<!-- <text class="font-sm">vip还剩余 <text class="text-pic">10</text> 天</text> -->
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			userInfo: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		data() {
			return {
				vipBgImg: '/static/images/openVipImg/Vip-Background.png'
			}
		},
		onLoad() {
			console.log(this.userInfo)
		}
	}
</script>

<style lang="scss">
	.open-vip-user {
		height: 370upx;
		background-color: #fff;
		position: relative;

		.open-vip-user-bg {
			height: 200upx;
			background-color: #26221F;
			border-bottom-right-radius: 100upx;
			border-bottom-left-radius: 100upx;
		}

		.open-vip-user-img-box {
			width: 680upx;
			height: 340upx;
			position: absolute;
			left: 50%;
			bottom: 0;
			transform: translateX(-50%);

			.open-vip-user-img {
				width: 100%;
				height: 100%;
			}

			.open-vip-user-info {
				position: absolute;
				left: 30upx;
				top: 30upx;

				.user-info-img {
					width: 80upx;
					height: 80upx;
					border-radius: 50%;
					overflow: hidden;
					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>
