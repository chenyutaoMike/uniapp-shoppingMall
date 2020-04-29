<template>
	<view class="integral-cart-list">
		<view class="integral-cart-item flex align-center">
			<view>
				<label>
					<checkbox checked="true" />
				</label>
			</view>
			<view class="integral-cart-item-center flex">
				<image class="mx-3" src="https://www.baquwangluo.cn/admin/editor/Upload/image/20191107/20191107183128_8627.jpg"></image>
				<view class="flex flex-column font-m">
					<text>50元优惠劵</text>
					<text class="text-muted my-1">x1</text>
				</view>
			</view>
			<view class="integral-cart-item-bottom flex flex-column">
				<text class="font-lg text-pic">500</text>
				<image class="delete-img" src="../../static/images/cartImg/delete.png"></image>
			</view>
		</view>
		
		<view class="integral-cart-item flex align-center">
			<view>
				<label>
					<checkbox checked="true" />
				</label>
			</view>
			<view class="integral-cart-item-center flex">
				<image class="mx-3" src="https://www.baquwangluo.cn/admin/editor/Upload/image/20191107/20191107183128_8627.jpg"></image>
				<view class="flex flex-column font-m">
					<text>50元优惠劵</text>
					<text class="text-muted my-1">x1</text>
				</view>
			</view>
			<view class="integral-cart-item-bottom flex flex-column">
				<text class="font-lg text-pic">500</text>
				<image class="delete-img" src="../../static/images/cartImg/delete.png"></image>
			</view>
		</view>
		
	</view>
</template>

<script>
</script>

<style lang="scss">
	.integral-cart-list {
		padding: 20upx;

		.integral-cart-item {
			box-sizing: border-box;
			height: 220upx;
			width: 100%;
			background-color: #fff;
			padding: 30upx;
			border-radius: 16upx;
			box-shadow: 0 3px 3px #ccc;
			margin-bottom: 20upx;
			.integral-cart-item-center{
				width: 500upx;
				image{
					width: 150upx;
					height: 150upx;
				}
			}
			.integral-cart-item-bottom{
				
				height: 100%;
				position: relative;
				.delete-img{
					width: 50upx;
					height: 55upx;
					position: absolute;
					right: 0;
					bottom: 0;
				}
			}
		}
	}
</style>
