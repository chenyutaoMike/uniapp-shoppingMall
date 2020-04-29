<template>
	<view class="integral-mall-box">
		
		<view class="integral-mall-top border-bottom">
			我的积分:100
		</view>
		<shop-list />
		<view class="to-integral-cart flex flex-column align-center text-white justify-center">
			<image :src="cartIcon"></image>
			<text class="font-small">积分购物车</text>
		</view>
	</view>
</template>

<script>
	import shopList from '@/components/shopList.vue';
	export default {
		components:{
			shopList
		},
		data() {
			return {
				cartIcon:'/static/images/itegralMallImg/good_gwc.png'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.integral-mall-box{
	.integral-mall-top{
		height: 80upx;
		line-height: 80upx;
		font-size: 30upx;
		padding-left: 30upx;
	}
	.to-integral-cart{
		position: fixed;
		right: 0;
		bottom: 30%;
		width: 180upx;
		height: 80upx;
		background-color: #FF0080;
		border-top-left-radius: 50upx;
		border-bottom-left-radius: 50upx;
		image{
			width: 37upx;
			height: 34upx;
		}
	}
}
</style>
