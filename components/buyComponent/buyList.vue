<template>
	<view class="buy-list-box" v-if="orderList !== 0">

		<block v-for="item in orderList" :key="item.id">
			<view class="buy-list-item flex align-center justify-between px-3">
				<view class="flex align-center">
					<image class="buy-list-img mr-2" :src="hostUrl+item.litpic"></image>
					<view class="buy-info">
						<view class="buy-info-title">{{item.title}}</view>
						<view class="buy-info-specs">规格:{{item.property_value}}</view>
					</view>
				</view>
				<view class="flex flex-column text-right">
					<text class="font-md text-pic">￥{{item.price}}</text>
					<text class="text-del text-secondary">￥{{item.marketPrice}}</text>
					<text class="text-secondary">x{{item.quantity}}</text>
				</view>
			</view>
		</block>

	</view>
</template>

<script>
	import {
		hostUrl
	} from '@/http/request.js';
	export default {
		props: {
			orderList: {
				type: Array,
				default: []
			}
		
		},
		data() {
			return {
				hostUrl: hostUrl
			}
		}
	}
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

			.buy-info {
				max-width: 420upx;

				.buy-info-title {
					font-size: 28rpx;
					height: 90upx;
					color: #4c4c4c;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;

				}

				.buy-info-specs {
					color: #999;
					font-size: 26upx;
				}
			}
		}
	}
</style>
