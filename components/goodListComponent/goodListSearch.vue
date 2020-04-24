<template>
	<view class="good-list-search">
		<input type="text"  placeholder="搜索商品名称" class="list-search"/>
		<image :src="imgUrl" alt="search" class="list-search-img">
		</image>
	</view>
</template>

<script>
	export default {
		data(){
			return {
					imgUrl: '/static/images/indexImg/ssico.png'
			}
		}
	}
</script>

<style lang="scss">
	.good-list-search{
		height: 80upx;
		background-color: $Theme-color;
		line-height: 100upx;
		box-sizing: border-box;
		padding: 0 25upx;
		position: relative;
		.list-search{
			box-sizing: border-box;
			height: 60upx;
			background-color: #fff;
			width: 100%;
			border-radius: 50upx;
			padding-left: 65upx;
		}
		.list-search-img{
			position: absolute;
			width: 36upx;
			height: 36upx;
			left: 50upx;
			top: 15upx;
		}
	}
</style>
