<template>
	<view class="user-top">
		<!-- 用户信息 -->
		<view class="user-info">
			<image :src="userInfo.avatarUrl ? userInfo.avatarUrl : user_img" class="user-img" ></image>
	
			<view class="user-login font-lg" @click="goLogin" v-if="!userInfo.nickName">微信登陆</view>
			<view v-else>
				<view class="user-name">{{userInfo.nickName}}</view>
				<!-- <view>积分：100</view> -->
			</view>
		</view>
		<!-- 订单信息 -->
		<view class="order-list">
			<block v-for="item in orderList" :key="item.id">
					<view class="order-info" :data-id="item.id" @click="goOrder(item.id)">
						<view class="order-icon" >
								<image :src="item.img_url"></image>
						</view>
						{{item.title}}
						<text class="order-num" v-if="item.num !== '' ">{{item.num}}</text>
					</view>
			</block>
		
		</view>

	</view>
</template>

<script>

	import {mapActions} from 'vuex';
	export default {
		props:{
			userInfo:{
				type:Object,
				default:() => {
					return {}
				}
			},
			orderList:{
				type:Array,
				default:() => {
					return []
				}
			}
		},
		data() {
			return {
				user_img: '/static/images/userImg/touxiang.png',
			}
		},

		mounted(){
		
			
		},
		methods:{
			...mapActions(['getUniLogin']),
			goOrder(id){
				uni.navigateTo({
					url:`/pages/order/order?id=${id}`
				})
			},
			goLogin(){
				// this.getUniLogin();
				console.log('change')
				uni.showToast({
					title:'暂不开放',
					icon:'none'
				})
				return 
				
				uni.navigateTo({
					url:'/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="scss">
	.user-top {

		width: 100%;
		background-color: $Theme-color;


		.user-info {
			height: 260upx;
			width: 100%;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			padding-left: 20upx;
			font-size: 30upx;
			color: #fff;

			.user-img {
				width: 140upx;
				height: 140upx;
				margin-right: 60upx;
				border-radius: 50%;
			}

			.user-name {
				font-size: 42upx;
			}
		}
		.order-list{
			display: flex;
			background-color: #fff;
			height: 160upx;
			box-sizing: border-box;
			border-bottom: 1upx solid $cartBg;
			.order-info{
				flex: 1;
				display: flex;
				height: 100%;
				color: #070707;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: 28upx;
				position: relative;
				.order-icon{
					width: 50upx;
					height: 50upx;
					
					margin-bottom: 10upx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.order-num{
					min-width: 35upx;
					padding: 0 5upx;
					position: absolute;
					right: 50upx;
					top: 10upx;
					background-color: #ee0c62;
					border-radius: 50%;
					color: #fff;
					font-size: 24upx;
					text-align: center;
				}
			}
			
		}
	}
</style>
