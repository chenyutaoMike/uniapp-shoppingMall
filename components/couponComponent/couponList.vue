<template>
	<view>
		<view class="coupon-list" v-if="couponList.length !== 0" >
			<view class="coupon-item flex" :class="isUse?'isuse':''" v-for="item in couponList" :key="item.id">
				<view class="coupon-pic flex align-center justify-center">
					<text class="coupon-pic-icon">￥</text>
					<text class="coupon-pic-num">{{item.money}}</text>
				</view>
				<view class="coupon-info p-2">
					<view class="font">{{item.title}}</view>
					<view class="font-sm">使用说明：除优惠专区类商品外均可使用优惠券抵扣现金</view>
					<view class="font-sm flex justify-between">
						<text>{{item.updateTime}}</text>
						<text>x{{item.quantity}}</text>
					</view>
				</view>
			</view>
		</view>
		<view v-else class="text-center font-md mt-5 text-secondary">
			暂无优惠劵
		</view>
	</view>

</template>

<script>
	export default {
		props: {
			isUse: {
				type: Boolean,
				default: false
			},
			couponList: {
				type: Array,
				default: () => {
					return []
				}
			}
		}
	}
</script>

<style lang="scss">
	@mixin afterAndBefor {
		content: "";
		width: 30upx;
		height: 30upx;
		border-radius: 50%;
		background-color: #fff;
		position: absolute;
	}

	.coupon-list {
		padding: 25upx 30upx;

		.coupon-item {
			width: 100%;
			box-sizing: border-box;
			background-color: #F64D22;
			border-radius: 12upx;
			overflow: hidden;
			margin-bottom: 20upx;

			&.isuse {
				background-color: #999999;
			}

			.coupon-pic {
				flex: 3;
				color: #fff;
				border-right: 1upx dashed #fff;
				position: relative;

				&::after {
					@include afterAndBefor;
					right: -15upx;
					top: -15upx;
				}

				&::before {
					@include afterAndBefor;
					right: -15upx;
					bottom: -15upx;
				}

				.coupon-pic-icon {
					position: relative;
					top: 5%;
				}

				.coupon-pic-num {
					font-size: 60upx;
					font-weight: bold;

				}
			}

			.coupon-info {
				flex: 7;
				box-sizing: border-box;
				padding: 20upx 20upx;
				color: #fff;
			}
		}
	}
</style>
