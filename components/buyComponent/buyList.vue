<template>
	<view class="buy-list-box">
		
		<view class="buy-list-item flex align-center justify-between px-3">
			<view class="flex align-center">
				<image class="buy-list-img mr-2" src="http://www.baquwangluo.cn/admin/editor/Upload/image/20191113/20191113113624_1521.jpg"></image>
				<view class="buy-info">
					<view class="buy-info-title">测试测试测试测试测测试测试测试测试测测试测试测试测试测试测试测试测试测试</view>
					<view class="buy-info-specs">规格:规格1</view>
				</view>
			</view>
			<view class="flex flex-column text-right">
				<text class="font-md text-pic">￥0.01</text>
				<text class="text-del text-secondary">￥10.01</text>
				<text class="text-secondary">x4</text>
			</view>
		</view>
		
		
	</view>
</template>

<script>
</script>

<style lang="scss">
	.buy-list-box {
		.buy-list-item {
			height: 220upx;
			background-color: #fff;
			border-bottom: 1upx solid #ccc;
			.buy-list-img {
				width: 150upx;
				height: 150upx;
			}
			.buy-info{
				max-width: 420upx;
				
				.buy-info-title{
					font-size: 28rpx;
					height: 90upx;
					color: #4c4c4c;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					
				}
				.buy-info-specs{
					color: #ccc;
					font-size: 26upx;
				}
			}
		}
	}
</style>
