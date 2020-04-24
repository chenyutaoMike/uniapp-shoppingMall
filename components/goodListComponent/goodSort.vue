<template>
	<view class="good-sort flex align-center justify-center">
		<view class="sort-item flex-1 text-center selete">排序</view>
		<view class="sort-item flex-1 text-center">默认</view>
		<view class="sort-item flex-1 text-center">价格</view>
		<view class="sort-item flex-1 text-center">销量</view>
		<view class="sort-item flex-1 text-center">上新</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.good-sort{
		height: 80upx;
		background-color: #FFFFFF;
		.sort-item{
			&.selete{
				color: $Theme-color;
			}
		}
		
	}
</style>
