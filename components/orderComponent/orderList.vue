<template>
	<view class="order-list">
		  <view class="order-no-list flex flex-column align-center" v-if="noList">
				<image class="order-no-img" src="../../static/images/orderImg/no-order.png"></image>
				<text class="text-secondary p-2">暂无订单</text>
				<view class="order-go-button">去逛逛~</view>
			</view>
			<view class="order-list-box">
				
				
				<view class="order-list-item">
					<view class="order-item-title flex justify-between align-center">
						<view class="order-item-title-num">订单号:00000000000</view>
						<view class="order-item-title-timer">2020/4/26 15:12:56</view>
					</view>
					<view class="order-item-content">
						<view class="shop-list flex align-center">
							<image class="shop-img " src="https://www.baquwangluo.cn/admin/editor/Upload/image/20200103/20200103140917_5131.jpg"></image>
							<view class="shop-info">
								<view class="shop-title">【约会神器】SimpleBetty网红香体接吻糖，香体约会，持久口气清新，生日个性礼物，亲吻香体糖</view>
								<view class="mt-1 font-sm">规格:盒</view>
								<view class=" font-sm">x1</view>
							</view>
						</view>
					</view>
					<view class="order-item-bottom flex justify-between align-center">
						<view>
							<view>状态: <text class="text-pic">代付款</text> </view>
							<view>总价: <text class="text-pic">￥:49.9</text> </view>
						</view>
						<view class="order-detail animated " hover-class="tada">查看详情</view>
					</view>
				</view>
				
				<view class="order-list-item">
					<view class="order-item-title flex justify-between align-center">
						<view class="order-item-title-num">订单号:00000000000</view>
						<view class="order-item-title-timer">2020/4/26 15:12:56</view>
					</view>
					<view class="order-item-content">
						<view class="shop-list flex align-center">
							<image class="shop-img " src="https://www.baquwangluo.cn/admin/editor/Upload/image/20200103/20200103140917_5131.jpg"></image>
							<view class="shop-info">
								<view class="shop-title">【约会神器】SimpleBetty网红香体接吻糖，香体约会，持久口气清新，生日个性礼物，亲吻香体糖</view>
								<view class="mt-1 font-sm">规格:盒</view>
								<view class=" font-sm">x1</view>
							</view>
						</view>
						<view class="shop-list flex align-center">
							<image class="shop-img " src="https://www.baquwangluo.cn/admin/editor/Upload/image/20200103/20200103140917_5131.jpg"></image>
							<view class="shop-info">
								<view class="shop-title">【约会神器】SimpleBetty网红香体接吻糖，香体约会，持久口气清新，生日个性礼物，亲吻香体糖</view>
								<view class="mt-1 font-sm">规格:盒</view>
								<view class=" font-sm">x1</view>
							</view>
						</view>
						<view class="shop-list flex align-center">
							<image class="shop-img " src="https://www.baquwangluo.cn/admin/editor/Upload/image/20200103/20200103140917_5131.jpg"></image>
							<view class="shop-info">
								<view class="shop-title">【约会神器】SimpleBetty网红香体接吻糖，香体约会，持久口气清新，生日个性礼物，亲吻香体糖</view>
								<view class="mt-1 font-sm">规格:盒</view>
								<view class=" font-sm">x1</view>
							</view>
						</view>
					</view>
					<view class="order-item-bottom flex justify-between align-center">
						<view>
							<view>状态: <text class="text-pic">代付款</text> </view>
							<view>总价: <text class="text-pic">￥:49.9</text> </view>
						</view>
						<view class="order-detail animated " hover-class="tada">查看详情</view>
					</view>
				</view>
				<view class="order-list-item">
					<view class="order-item-title flex justify-between align-center">
						<view class="order-item-title-num">订单号:00000000000</view>
						<view class="order-item-title-timer">2020/4/26 15:12:56</view>
					</view>
					<view class="order-item-content">
						<view class="shop-list flex align-center">
							<image class="shop-img " src="https://www.baquwangluo.cn/admin/editor/Upload/image/20200103/20200103140917_5131.jpg"></image>
							<view class="shop-info">
								<view class="shop-title">【约会神器】SimpleBetty网红香体接吻糖，香体约会，持久口气清新，生日个性礼物，亲吻香体糖</view>
								<view class="mt-1 font-sm">规格:盒</view>
								<view class=" font-sm">x1</view>
							</view>
						</view>
					</view>
					<view class="order-item-bottom flex justify-between align-center">
						<view>
							<view>状态: <text class="text-pic">代付款</text> </view>
							<view>总价: <text class="text-pic">￥:49.9</text> </view>
						</view>
						<view class="order-detail animated " hover-class="tada">查看详情</view>
					</view>
				</view>
				<view class="order-list-item">
					<view class="order-item-title flex justify-between align-center">
						<view class="order-item-title-num">订单号:00000000000</view>
						<view class="order-item-title-timer">2020/4/26 15:12:56</view>
					</view>
					<view class="order-item-content">
						<view class="shop-list flex align-center">
							<image class="shop-img " src="https://www.baquwangluo.cn/admin/editor/Upload/image/20200103/20200103140917_5131.jpg"></image>
							<view class="shop-info">
								<view class="shop-title">【约会神器】SimpleBetty网红香体接吻糖，香体约会，持久口气清新，生日个性礼物，亲吻香体糖</view>
								<view class="mt-1 font-sm">规格:盒</view>
								<view class=" font-sm">x1</view>
							</view>
						</view>
					</view>
					<view class="order-item-bottom flex justify-between align-center">
						<view>
							<view>状态: <text class="text-pic">代付款</text> </view>
							<view>总价: <text class="text-pic">￥:49.9</text> </view>
						</view>
						<view class="order-detail animated " hover-class="tada">查看详情</view>
					</view>
				</view>
				
			</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				noList:false
			}
		}
		
	}
</script>

<style lang="scss">
	.order-list{
		height: 100%;
		.order-no-list{
			height: 100%;
			box-sizing: border-box;
			padding-top: 300upx;
			.order-no-img{
				width: 100upx;
				height: 120upx;
			}
			.order-go-button{
				width: 200upx;
				height: 60upx;
				background-color: #1890FF;
				line-height: 60upx;
				text-align: center;
				border-radius: 8upx;
				color: #fff;
			}
		}
		.order-list-box{
			padding: 25upx 20upx;
		
			.order-list-item{
				background-color: #fff;
				border-bottom-left-radius: 10upx;
				border-bottom-right-radius: 10upx;
				box-shadow: 0 3px 3px #ccc;
				margin-bottom: 20upx;
				.order-item-title{
					padding: 0 20upx;
					color: #686868;
					height: 85upx;
					background-color: #F6F6F6;
				}
				.order-item-content{
					box-sizing: border-box;
					padding: 20upx;
				
					.shop-list{
						box-sizing: border-box;
						border-bottom: 1upx solid #F3F3F3;
						.shop-img{
							width: 150upx;
							height: 150upx;
							margin-right: 25upx;
						}
						.shop-info{
							max-width: 520upx;
							color: #919191;
							.shop-title{
								height: 80upx;
								font-size: 26upx;
								overflow: hidden;
								text-overflow: ellipsis;
								display: -webkit-box;
								-webkit-line-clamp: 2;
								-webkit-box-orient: vertical;
							}
						}
						
					}
				}
				.order-item-bottom{
					padding: 10upx 20upx ;
					height: 100upx;
					font-size: 28upx;
					.order-detail{
						width: 160upx;
						height: 60upx;
						border: 1upx solid #ccc;
						text-align: center;
						line-height: 60upx;
						border-radius: 8upx;
					}
				}
			}
		}
	}
</style>
