<template>
	<view class="open-vip-pay">
		<view class="pay-title">支付方式</view>
		
		<view class="pay-list flex align-center justify-between px-3 border-bottom">
			<view class="pay-list-left flex align-center">
				<image :src="wxIcon"></image>
				<text class="ml-2 font-md">微信支付</text>
			</view>
			<view class="pay-list-right flex align-center">
				<image :src="seleteIcon"></image>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data(){
			return {
				wxIcon:'/static/images/openVipImg/wxIcon.png',
				seleteIcon:'/static/images/openVipImg/Selection.png'
			}
		}
	}
</script>

<style lang="scss">
	.open-vip-pay{
		.pay-title{
			height: 80upx;
			padding-left: 30upx;
			font-size: 40upx;
			background-color: #F7F7F7;
		}
		.pay-list{
			height: 100upx;
			.pay-list-left{
				image{
					width: 60upx;
					height: 60upx;
				}
			}
			.pay-list-right{
				image{
					width: 60upx;
					height: 60upx;
				}
			}
		}
	}
</style>
