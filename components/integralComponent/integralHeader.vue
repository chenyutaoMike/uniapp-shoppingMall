<template>
	<view class="integral-header">
		<image class="integral-header-bg" :src="integralImg"></image>
		<view class="integral-info flex align-center justify-center">
			<view class="integral-info-border flex align-center justify-center flex-column">
				<text class="my-integral">我的积分</text>
				<text class="integral-num">100</text>
			</view>
		</view>
		<view class="go-shop flex align-center">
			<text>积分商城</text>
			<image :src="goShopImg" ></image>
		</view>
		<view class="integral-explain flex align-center" @click="openPopup">
			<text >积分说明</text>
			<image :src="explainImg" class="ml-1"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				integralImg:'/static/images/integralImg/bg.png',
				goShopImg:'/static/images/integralImg/prc.png',
				explainImg:'/static/images/integralImg/explain.png'
			}
		},
		methods:{
			openPopup(){
				this.$emit("openPopup")
			}
		}
	}
</script>

<style lang="scss">
	$borderColor:#F22213;
	$fontColor:#EF1302;
	.integral-header{
		height: 500upx;
		position: relative;
		.integral-header-bg{
			width: 100%;
			height: 100%;
		}
		.integral-info{
			background-color: #fff;
			position: absolute;
			width: 255upx;
			height: 255upx;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			border-radius: 50%;
			.integral-info-border{
					border-radius: 50%;
				width: 230upx;
				height: 230upx;
				border: 2upx solid $borderColor;
				.my-integral{
					color: $borderColor;
					font-size: 30upx;
				}
				.integral-num{
					color: $fontColor;
					font-size: 50upx;
					font-weight: bold;
				}
			}
		}
		.go-shop{
			position: absolute;
			left: 0;
			top: 30upx;
			width: 170upx;
			height: 50upx;
			padding: 0 10upx;
			border-top-right-radius: 25upx;
			border-bottom-right-radius: 25upx;
			background-color: #fff;
			color: $borderColor;
			image{
				width: 50upx;
				height: 50upx;
			}
		}
		.integral-explain{
			position: absolute;
			right: 20upx;
			top: 30upx;
			color: #A99E8A;
			image{
				width: 30upx;
				height: 30upx;
			}
		}
	}
</style>
