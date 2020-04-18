<template>
	<view class="cart-list-box">
		<view class="cart-list invalid">
			<view class="list-left ">
				<view class="left-msg">
					<label>
						<checkbox />
					</label>
					<!-- <text class="left-text">库存不足</text> -->
				</view>
				<img class="left-img" src="https://www.baquwangluo.cn/admin/editor/Upload/image/20200106/20200106112221_1050.jpg"
				 alt="">
			</view>
			<view class="list-right">
				<view class="list-detail">
					<view class="title text2-ellipsis">「澳洲必带」NU-LAX乐康片原味/西梅加强版(40片/瓶） 果蔬膳食纤维清肠排宿便 香港直邮</view>
					<view class="specifications">规格: 瓶子</view>
					<view class="compute">
						<view class="decrease" @click="decrease">-</view>
						<view class="num">1</view>
						<view class="add">+</view>
					</view>
				</view>
			
			</view>
			<view class="list-pic">
				<view class="list-new-pic">￥99</view>
				<view class="list-old-pic">￥99</view>
				<view class="list-del">
					<image class="deleteImg" :src="deleteImg" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data(){
		return {
			deleteImg:'/static/images/cartImg/delete.png'
		}
	},
	methods:{
		decrease(){
			console.log('减少')
		}
	}
}
</script>

<style lang="scss">
	.cart-list-box {
		padding: 20upx;
		background-color: $cartBg;

		.cart-list {
			height: 250upx;
			background-color: #fff;
			box-sizing: border-box;
			padding: 25upx 30upx;
			border-radius: 20upx;
			box-shadow: 0px 3px 3px #ccc;
			display: flex;
			position: relative;
			&.invalid{
				background-color: #f0f0f0;
			}
			.list-left {
				display: flex;
				align-items: center;
				height: 100%;

				.left-msg {
					max-width: 50upx;
					font-size: 24upx;
					margin-right: 10upx;

					.left-text {
						color: $cart-text;
					}
				}

				.left-img {
					width: 175upx;
					height: 175upx;
				}
			}

			.list-right {
				.list-detail {
					max-width: 280upx;
					margin: 0 25upx;

					.title {
						font-size: 28rpx;
						color: #4c4c4c;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					.specifications{
						font-size: 26upx;
						color: $cart-text;
						
					}
					.compute{
						margin-top: 10upx;
						display: flex;
						box-sizing: border-box;
						padding: 0 10upx;
						width: 200upx;
						height: 60upx;
						border: 1upx solid $cart-text;
						border-radius: 10upx;
						align-items: center;
						justify-content: center;
						text-align: center;
						color: #535353;
					}
					.add{
						flex: 1;
					}
					.num{
						flex: 3;
						
					}
					.decrease{
						flex: 1;
					}
				}
				
			}
			.list-pic{
				text-align: right;
				.list-new-pic{
					font-size: 32upx;
					color: $btnBg;
				}
				.list-old-pic{
					text-decoration: line-through;
					margin-top: 20upx;
					font-size: 28upx;
					color: $cart-text;
				}
				.list-del{
					position: absolute;
					bottom: 30upx;
					right: 50upx;
					width: 50upx;
					height: 50upx;
					.deleteImg{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>
