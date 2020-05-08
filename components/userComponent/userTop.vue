<template>
	<view class="user-top">
		<!-- 用户信息 -->
		<view class="user-info">
			<image :src="user_img" class="user-img"></image>
			<!-- <view class="user-login">登录/注册</view> -->
			<view>
				<view class="user-name">undefined</view>
				<view>积分：100</view>
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
						<text class="order-num">10</text>
					</view>
			</block>
		
		</view>

	</view>
</template>

<script>
	const orderList = [{
			id: 1,
			img_url: '/static/images/userImg/order1.png',
			title: '待支付'
		},
		{
			id: 2,
			img_url: '/static/images/userImg/order2.png',
			title: '待发货'
		},
		{
			id: 3,
			img_url: '/static/images/userImg/order3.png',
			title: '待收货'
		},
		{
			id: 4,
			img_url: '/static/images/userImg/order4.png',
			title: '已完成'
		}
	]
	export default {

		data() {
			return {
				user_img: '/static/images/userImg/touxiang.png',
				orderList: ''
			}
		},
		created() {
			this.orderList = orderList;
		},
		methods:{
			goOrder(id){
				uni.navigateTo({
					url:`/pages/order/order?id=${id}`
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
					width: 30upx;
					height: 30upx;
					padding: 5upx;
					position: absolute;
					right: 50upx;
					top: 10upx;
					background-color: #ee0c62;
					border-radius: 50%;
					color: #fff;
					text-align: center;
					line-height: 30upx;
				}
			}
			
		}
	}
</style>
