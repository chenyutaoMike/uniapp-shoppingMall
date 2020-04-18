<template>
	<view class="cart-none">
		<image class="cart-none-img" :src="imgUrl" alt="" />
		<view class="cart-none-bottom text-center ">
			<text class="font-md text-secondary">购物车空空如也</text>
				<view class="cart-none-btn text-center mg0-auto">
				去逛逛
					</view>
		</view>
	<youLike />
	</view>
</template>

<script>
	import youLike from '@/components/youLike.vue'
	export default {
		components:{
			youLike
		},
		data(){
			return {
				imgUrl:'/static/images/cartImg/shopCart.png'
			}
		}
	}
</script>

<style lang="scss">
	.cart-none{
		background-color: #f2f2f2;
		.cart-none-img{
			width: 100%;
			height: 400upx;
		}
			.cart-none-bottom{

					.cart-none-btn{
						width: 250upx;
						height: 60upx;
						border: 1upx solid $btnBg;
						color: $btnBg;
						line-height: 60upx;
						border-radius: 8upx;
						margin: 40upx  auto 0;
					}
			}
		
	}
</style>
