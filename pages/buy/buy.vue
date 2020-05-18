<template>
	<view class="buy-box">
		<form>
			<view class="buy-box-top">

				<view class="top-list flex px-3">
					<text class="font-m">快递服务:</text>
					<view class="flex align-center justify-center">
						<view class="list-btn mx-3 animated" hover-class="tada">普通快递</view>
						<view class="list-btn animated" hover-class="tada" @click="seleteAddress">选择地址</view>
					</view>
				</view>
				<view class="top-list flex align-center px-3">
					<text class="font-m">联系方式:</text>
					<view class="ml-3">
						{{cellphone}}
					</view>
				</view>
				<view class="top-list flex align-center px-3 border-box">
					<text class="address-title">收货地址:</text>
					<view class="ml-3 address">
						{{address}}
					</view>
				</view>

			</view>
			<view class="wall"></view>
			<!-- 订单列表 -->
			<buy-list :orderList="orderList" />
			<!-- 订单列表 -->
			<view class="wall"></view>
			<view class="message flex px-3 align-center">
				<view class="message-title">买家留言:</view>
				<input type="text" class="ml-2 message-input" v-model="message" />
			</view>
			<view class="wall"></view>
			<view class="paymentMethod">
				支付方式
			</view>
			<view class="wxPay px-3 flex justify-between align-center">
				<view class="wxPay-title flex align-center">
					<image src="../../static/images/buyImg/wechat.png"></image>
					<text class="ml-2">微信支付</text>
				</view>
				<image class="wxPay-selete" src="../../static/images/buyImg/Selection.png"></image>
			</view>
			<view class="wall"></view>
			<view class="coupon border-box px-3 flex justify-between align-center" @click="openCoupon">
				<view class="flex align-center coupon-left">
					<view>可用优惠劵: </view>
					<view class="text-pic" v-if="getSeleteCouponList.length === 0">请选择优惠劵</view>
					<view v-else class="text-pic coupon-text">{{getSeleteCouponList}}</view>
				</view>
				<view class="coupon-right">
					<image class="coupon-img" src="../../static/images/buyImg/syico3.png"></image>
				</view>

			</view>
			<view class="wall"></view>
			<view class="total-amount">
				<view class="total-amount-pic flex align-center justify-between">
					<text>合计金额</text>
					<text class="text-pic font-lg">￥{{totalPic}}</text>
				</view>
				<view class="flex align-center justify-between mt-2">
					<text>合计数量</text>
					<text>{{quantity}}</text>
				</view>
				<view class="flex align-center justify-between my-2">
					<text>运费</text>
					<text>+ 0</text>
				</view>
				<view class="flex align-center justify-between">
					<text>优惠</text>
					<text>- {{marketPriceTotal}}</text>
				</view>
			</view>
			<view class="submit-order flex  align-center justify-between">
				<view class="ml-4 text-pic">
					实际付款:
					<text class="font-lg ml-1">￥{{totalPic}}</text>
				</view>
				<view class="submit-order-buttom">提交订单</view>
			</view>
			<popup :isShow="isShow" @clone="clone">
				<view class="buy-coupon-list" @click.stop>
					<image @click.stop="clone" class="buy-coupon-clone" src="../../static/images/detailImg/gbico.png"></image>
					<view class="buy-coupon-list-title text-center font-lg">
						选择优惠劵
					</view>
					<view class="text-center font-md text-muted" v-if="!isCoupon">订单中有优惠活动商品，不可用优惠券</view>
					<scroll-view scroll-y style="height: 480upx;" v-else @touchmove.stop>
						<block v-for="item in couponList" :key="item.id">
							<view class="buy-coupon-item flex align-center justify-between px-3" :data-id="item.id" :data-is_checked="item.is_checked"
							 @click="seleteCoupon">
								<text>{{item.title}}</text>
								<image v-if="item.checked" src="../../static/images/buyImg/Selection.png"></image>
								<image v-else src="../../static/images/buyImg/Choice.png"></image>
							</view>
						</block>

					</scroll-view>
					<view class="selete-coupon" v-show="isCoupon" @click="clone">
						完成
					</view>

				</view>
			</popup>
		</form>
	</view>
</template>

<script>
	import buyList from '@/components/buyComponent/buyList.vue';
	import popup from '@/components/popup.vue';
	import {
		mapActions,
		mapState,
		mapGetters
	} from 'vuex';
	export default {
		components: {
			buyList,
			popup
		},
		data() {
			return {
				message: '',
				isShow: false
			}
		},
		onLoad() {
			// 检查是否登陆
			this.userId = uni.getStorageSync('userId');
			if (!this.userId) {
				uni.showToast({
					title: '请先登陆',
					icon: 'none',
					success: () => {
						uni.navigateBack({
							delta: 1
						})
					}
				})
				return
			}
			this.getOrderCartAry(this.userId);
			this.getCartTotalPic(this.userId);
			this.getCheckisCoupon(56)
		},
		onShow() {
			// 获取地址
			this.getDefaultAddress(this.userId);
		},
		methods: {
			...mapActions(['getDefaultAddress', 'getOrderCartAry', 'getCartTotalPic', 'getCheckisCoupon', 'getSeleteCoupon']),
			clone() {
				this.isShow = false;
			},
			openCoupon() {
				this.isShow = true;
			},
			seleteAddress() {
				uni.navigateTo({
					url: '/pages/addressList/addressList'
				})
			},
			seleteCoupon(e) {
				console.log(e)
				let {
					id,
					is_checked
				} = e.currentTarget.dataset;
				let {
					userId
				} = this;
				this.getSeleteCoupon({
					id,
					checkId: is_checked,
					userId
				})
			}
		},
		computed: {
			...mapState({
				address: state => state.buy.address,
				cellphone: state => state.buy.cellphone,
				orderList: state => state.buy.orderList,
				totalPic: state => state.cart.totalPic,
				quantity: state => state.cart.quantity,
				marketPriceTotal: state => state.cart.marketPriceTotal,
				couponList: state => state.buy.couponList,
				isCoupon: state => state.buy.isCoupon
			}),
			...mapGetters(['getSeleteCouponList'])

		}
	}
</script>

<style lang="scss">
	.buy-box {
		padding-bottom: 100upx;

		.buy-box-top {
			background-color: #fff;

			.top-list {
				height: 100upx;

				line-height: 100upx;
				border-bottom: 1upx solid #ccc;

				.list-btn {
					border: 1upx solid $Theme-color;
					color: $Theme-color;
					padding: 10upx 30upx;
					border-radius: 10upx;
				}
			}

			.border-box {
				font-size: 28upx;
				box-sizing: border-box;

				.address-title {
					display: inline-block;
					flex: 2;
				}

				.address {
					flex: 9;
					box-sizing: border-box;
					// margin-left: 30upx;
					white-space: pre-line;
				}
			}
		}

		.message {
			height: 100upx;
			line-height: 100upx;
			border-bottom: 1upx solid #ccc;
			box-sizing: border-box;

			.message-title {
				flex: 2;
			}

			.message-input {
				flex: 9;
			}
		}

		.paymentMethod {
			height: 100upx;
			border-bottom: 1upx solid #ccc;
			line-height: 100upx;
			padding-left: 30upx;
		}

		.wxPay {
			height: 120upx;

			.wxPay-title {
				image {
					width: 50upx;
					height: 50upx;
				}
			}

			.wxPay-selete {
				width: 50upx;
				height: 50upx;
			}
		}

		.coupon {
			height: 100upx;

			.coupon-left {
				flex: 1;

				.coupon-text {
					width: 45%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;

				}
			}

			.coupon-right {
				width: 30upx;
				height: 30upx;
				.coupon-img {
					width: 100%;
					height: 100%;
				}
			}

		}

		.total-amount {
			padding: 0 30upx;
			border-bottom: 1upx solid #ccc;

			.total-amount-pic {
				height: 100upx;
				line-height: 100upx;
				border-bottom: 1upx dashed #ccc;
			}
		}

		.submit-order {
			height: 100upx;
			width: 100%;
			position: fixed;
			left: 0;
			bottom: 0;
			background-color: #fff;

			.submit-order-buttom {
				width: 220upx;
				text-align: center;
				line-height: 100upx;
				background-color: $btnBg;
				color: #fff;
			}
		}

		.buy-coupon-list {
			position: fixed;
			bottom: 0;
			left: 0;
			min-height: 600upx;
			width: 100%;
			background-color: #fff;
			border-radius: 20upx 20upx 0 0;

			.buy-coupon-clone {
				width: 50upx;
				height: 50upx;
				position: absolute;
				right: 30upx;
				top: 30upx;
			}

			.buy-coupon-list-title {
				height: 100upx;
				line-height: 100upx;
			}

			.buy-coupon-item {
				height: 80upx;

				image {
					width: 50upx;
					height: 50upx;
				}
			}

			.selete-coupon {
				height: 80upx;
				width: 80%;
				background-color: #E5432E;
				border-radius: 50upx;
				color: #fff;
				text-align: center;
				line-height: 80upx;
				margin: 20upx auto;
			}
		}
	}
</style>
