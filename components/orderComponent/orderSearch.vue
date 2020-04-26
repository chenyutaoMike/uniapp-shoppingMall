<template>
	<view class="order-search flex align-center">
		<input type="text" class="order-search-input" placeholder="请输入订单号"/>
		<image :src="searchImg" class="order-search-img"></image>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				searchImg:'/static/images/ssico.png'
			}
		}
	}
</script>

<style lang="scss">
	.order-search{
		height: 100upx;
		padding: 0 20upx;
		position: relative;
		box-sizing: border-box;
		.order-search-input{
			box-sizing: border-box;
			width: 100%;
			height: 80upx;
			border: 1upx solid #ccc;
			border-radius: 8upx;
			padding-left: 60upx;
			
		}
		.order-search-img{
			width: 40upx;
			height: 40upx;
			position: absolute;
			left: 40upx;
			top:50%;
			transform: translateY(-50%);
		}
	}
</style>
