<template>
	<view class="integral-cart-box">
		<scroll-view scroll-y="true" class="good-list-bg" :style="`height:${scrollH}px`">
			<integral-cart-list />
		</scroll-view>
		<view class="integral-cart-bottom flex align-center">
			<view class="integral-cart-bottom-left flex pl-3">
				<label>
					<checkbox checked="true" />
				</label>
				<text class="mx-3 font-m">全选</text>
				<view>
					<text class="font-m text-pic">积分: <text class="font-w">500</text></text>
				</view>
			</view>
			<view class="integral-cart-bottom-right text-center animated" hover-class="tada">
				确认兑换
			</view>
		</view>
	</view>
</template>

<script>
	import integralCartList from '@/components/integralCartComponent/integralCartList.vue';
	export default {
		components: {
			integralCartList
		},
		data() {
			return {
					scrollH:''
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
	.integral-cart-box {
		background-color: $bg;

		.integral-cart-bottom {
			height: 100upx;
			background-color: #fff;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			.integral-cart-bottom-left{
				flex: 7;
				
			}
			.integral-cart-bottom-right{
				flex: 3;
				background-color: $btnBg;
				height: 100%;
				line-height: 100upx;
				border-radius: 8upx;
				color: #fff;
				font-size: 34upx;
			}
		}
	}
</style>
