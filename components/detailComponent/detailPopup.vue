<template>
	<view class="detail-popup" @click="clone" @touchmove.stop.prevent="move">
		<view class="detail-popup-desc">
			<view class="detail-popup-box">
				<view class="detail-popup-top flex align-center">
					<view class="popup-top-img mr-2">
						<image src="https://www.baquwangluo.cn/admin/editor/Upload/image/20191230/20191230154848_0467.jpg"></image>
					</view>
					<view class="detail-popup-pic">
						<view>价格:<text class="text-pic">￥49</text></view>
						<view>库存:<text>0</text></view>
						<view>已选择:<text>个</text></view>
					</view>
					<image @click="clone" class="cloneImg" src="../../static/images/detailImg/gbico.png"></image>
				</view>
				<view class="detail-select" @click.stop>
					<view class="text-secondary my-2 ">选择规格</view>
					<view class="detail-select-item flex">
						<view class="select-item selete">个</view>
						<view class="select-item">吨</view>
					</view>
				</view>
				<view class="detail-num">
					<view class="text-secondary my-2 ">选择数量</view>
					<view class="num-box flex font-md" >
						<view class="num-decrease text-center">-</view>
						<input type="num" value="1" class="numipt text-center" disabled />
						<view class="num-add text-center" >+</view>
					</view>
				</view>

			</view>
				<view class="popup-button" v-if="isToBuy">立即购买</view>
				<view class="popup-button" v-else>加入购物车</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cloneImg: '@/static/images/detailImg/gbico.png',
				isToBuy:true
			}
		},
		methods: {
			clone() {
				this.$emit('clone')
			},
			move() {
				return
			}
		}
	}
</script>

<style lang="scss">
	.detail-popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: $popup;
		z-index: 999;

		.detail-popup-desc {
			background-color: #fff;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;

			.detail-popup-box {
				padding: 0 15upx;

				.detail-popup-top {
					position: relative;
					height: 190upx;
					border-bottom: 1upx solid $borderColor;

					.popup-top-img {
						width: 190upx;
						height: 190upx;
						border-radius: 8upx;
						overflow: hidden;
						position: relative;
						top: -20upx;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.cloneImg {
						width: 58upx;
						height: 58upx;

						position: absolute;
						right: 20upx;
						top: -20upx;
						z-index: 9999;

						image {
							width: 100%;
							height: 100%;
						}
					}


				}

				.detail-select {
					width: 100%;

					.detail-select-item {
						.select-item {
							padding: 15upx 25upx;
							border: 1upx solid $borderColor;
							border-radius: 8upx;
							margin-right: 20upx;
							
							&.selete {
										border: 1upx solid $picColor;
										color: $picColor;
							}
						}
					}

				}

				.detail-num {
					.num-box{
						width: 180upx;
						height: 60upx;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-bottom: 30upx;
						.num-decrease{
							flex: 1;
							height: 100%;
							border: 1upx solid $borderColor;
							line-height: 60upx;
							border-top-left-radius: 6upx;
							border-bottom-left-radius: 6upx;
						}
						.numipt{
							height: 100%;
							line-height: 100%;
							flex: 1;
							border-top: 1upx solid $borderColor;
							border-bottom: 1upx solid $borderColor;
						}
						.num-add{
							height: 100%;
							line-height: 60upx;
							flex: 1;
							border: 1upx solid $borderColor;
							border-top-right-radius: 6upx;
							border-bottom-right-radius: 6upx;
						}
					}
				}

			}
			.popup-button{
				height: 100upx;
				width: 100%;
				background-color: $picColor;
				text-align: center;
				line-height: 100upx;
				color: #fff;
			}

		}
	}
</style>
