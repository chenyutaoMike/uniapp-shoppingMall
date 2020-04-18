<template>
	<view class="cart-box">

	<scroll-view scroll-y="true" :style="`height:${scrollH}px`">
			<cart-none v-if="none"/>
			<cart-list v-else/>
	</scroll-view>
	

		<view class="cart-bottom">
			<view class="cart-bottom-info">
				<view class="info-left">
					<label>
					   <checkbox  checked="" class="ml-4" />全选
					 </label>
					<text class="pic mx-4" >￥888</text>
					<text class="text-secondary">为您节省 ￥666</text>
				</view>
				<view class="info-right">
					去结算 (0)
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import cartNone from '@/components/cartComponent/cart-none.vue';
	import cartList from '@/components/cartComponent/cart-list.vue';
	export default {
		components:{
			cartNone,
			cartList
		},
		data() {
			return {
				scrollH:0,
				none:false
			}
		},
		mounted() {
			let res = uni.getSystemInfoSync();
			this.scrollH = res.windowHeight - uni.upx2px(100);
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.cart-box {
		background-color: $cartBg;
		.cart-bottom {
			background-color: #fff;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			height: 100upx;
			.cart-bottom-info{
				height: 100%;
				display: flex;
				.info-left{
					flex: 7;
					line-height: 100upx;
					.pic{
						color: $btnBg;
						font-size: 32upx;
					}
				
				}
				.info-right{
					flex: 3;
					background-color: $btnBg;
					text-align: center;
					line-height: 100upx;
					color: #fff;
					counter-reset: 34upx;
				}
			}
		}
	}
</style>
