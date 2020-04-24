<template>
	<view class="detail-top">
		<view class="detail-rotate">
			<swiper class="detail-swiper" indicator-dots	circular :autoplay="true" :interval="3000" :duration="500">
				<swiper-item class="detail-swiper-item" >
					<image class="rotate-img" src="https://www.baquwangluo.cn/Upload/image/20191030/201910301131053595.png"></image>
				</swiper-item>
				<swiper-item class="detail-swiper-item">
					<image class="rotate-img" src="https://www.baquwangluo.cn/Upload/image/20191030/201910301131054835.png"></image>
				</swiper-item>
				<swiper-item class="detail-swiper-item">
					<image class="rotate-img" src="https://www.baquwangluo.cn/Upload/image/20191030/201910301131104358.png"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="detail-desc-box">
			<view class="detail-title">纳米黑科技多功能无痕收纳魔力贴</view>
			<view class="detail-desc flex justify-between">
				<view class="detail-pic">
					<text class="detail-newPic mr-1 ">￥29</text>
					<text class="detail-oldPic">￥49</text>
				</view>
				<view class="detail-store">
					库存不足
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	
	export default {
		components:{
		
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.detail-top {
		.detail-rotate {
			width: 100%;
			.detail-swiper {
				height: 460upx;
				width: 100%;
				.detail-swiper-item {
					width: 100%;
					 height: 100%;
					.rotate-img {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.detail-desc-box{
			padding: 20upx;
			box-shadow: 0px 3px 5px #ccc;
			.detail-title{
				font-size: 34upx;
				color: #181818;
			}
			.detail-desc{
				.detail-pic{
					.detail-newPic{
						font-size: 34upx;
						color: $picColor;
					}
					.detail-oldPic{
						font-size: 24upx;
						color:$delColor;
						text-decoration: line-through;
					}
				}
			}
			.detail-store{
				color: $delColor;
			}
		}
	}
</style>
