<template>
	<view class="buy-box">
		<form report-submit="true" @submit="formSubit" @report-submit-timeout="5000" @reset="rsetForm">
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
				<button class="submit-order-buttom" form-type="submit">提交订单</button>
			</view>
			<popup :isShow="isShow" @clone="clone">
				<view class="buy-coupon-list" @click.stop>
					<image @click.stop="clone" class="buy-coupon-clone" src="../../static/images/detailImg/gbico.png"></image>
					<view class="buy-coupon-list-title text-center font-lg">
						选择优惠劵
					</view>
					<view class="text-center font-md text-muted" v-if="!isCoupon">订单中有优惠活动商品，不可用优惠券</view>
					<scroll-view scroll-y style="height: 480upx;" v-else @touchmove.stop>
						<block v-for="item in couponList" :key="item.id" v-if="couponList.length !== 0">
							<view class="buy-coupon-item flex align-center justify-between px-3" :data-id="item.id" :data-is_checked="item.is_checked"
							 @click="seleteCoupon">
								<text>{{item.title}}</text>
								<image v-if="item.checked" src="../../static/images/buyImg/Selection.png"></image>
								<image v-else src="../../static/images/buyImg/Choice.png"></image>
							</view>
						</block>
						<view v-else>暂无优惠劵</view>
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
		calculation
	} from '@/static/utils.js';
	import {
		addOrder,
		pay
	} from '@/http/buy.js';
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
				isShow: false,
				shipping_method: '',
				recommended_code: undefined,
				note: ''
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
			this.getBuyToatlPic(this.userId);
			this.getCheckisCoupon(this.userId)
		},
		onShow() {
			// 获取地址
			this.getDefaultAddress(this.userId);
		},
		methods: {
			...mapActions(['getDefaultAddress', 'getOrderCartAry', 'getBuyToatlPic', 'getCheckisCoupon', 'getSeleteCoupon',
				'getIntegralDTotal', 'useCoupon', 'getChoiceIntegralsub'
			]),
			rsetForm() { //重置表单

			},
			async formSubit(e) { //提交订单
				let formId = e.detail.formId;
				console.log(e)
				console.log(formId)
				let {
					cellphone,
					address,
					quantity,
					totalPic,
					userId,
					addressId,
					shipping_method,
					recommended_code,
					note
				} = this;
				if (!cellphone || !address) {
					uni.showToast({
						title: '请选择地址',
						icon: 'none'
					})
				}
				console.log('userId', userId)
				console.log('addressId', addressId)
				console.log('quantity_sum', quantity)
				console.log('price_sum', totalPic)
				console.log('shipping_method', shipping_method)
				console.log('recommended_code', recommended_code)
				console.log('note', note)
				console.log('formId', formId)
				let res = await addOrder({
					userId: userId,
					addressId: addressId,
					quantity_sum: quantity,
					price_sum: totalPic,
					shipping_method: shipping_method,
					recommended_code: recommended_code,
					note: note,
					formId: formId
				});
				console.log(res)
				if (totalPic <= 0) {
					uni.showToast({
						title: '购买成功',
						icon: 'success',
						duration: 1000,
						success: () => {
							uni.redirectTo({
								url: '/pages/order/order',
							})
						}
					})
					return
				} else {
					if (res.data.status != null) {
						this.payment(res.data.status)
					} else {
						uni.showToast({
							title: '提交失败!',
							icon: 'none',
							duration: 1500
						})
					}
				}
			},
			async payment(id) { //付款函数
				let {userId,openId} = this;
				console.log({id,userId})
				
				let openid = uni.getStorageSync('openId');
				console.log(openid)
				let res = await pay({id,userId,openid:openid});
				console.log(res)
				if (res.data != null) {
					console.log('进来')
					uni.requestPayment({
						'provider': "weixin",
						"orderInfo":res.data.timeStamp,
						'timeStamp': res.data.timeStamp,
						'nonceStr': res.data.nonceStr,
						'package': res.data.package,
						'signType': 'MD5',
						'paySign': res.data.paySign,
						success:(res)=>{
							console.log(res)
						}
					})
				}
			},
			clone() { //关闭窗口并计算金额
				this.isShow = false;
				console.log(this.couponList)
				let {
					couponList
				} = this;
				let number = couponList.reduce((pre, item) => {
					if (item.is_checked === 1) {
						pre += 1;
					}
					return pre
				}, 0);
				if (number === couponList.length) {
					// 没有选择任何优惠劵
					this.getBuyToatlPic(this.userId) //重新获取购物车价钱
					return
				}
				this.getIntegralDTotal(this.userId).then(() => {
					let {
						preferentialAmount,
						totalPic
					} = this;
					let newPic = calculation(totalPic, preferentialAmount);
					if (newPic < 0) {
						uni.showModal({
							title: '温馨提示',
							content: '优惠劵金额大于商品金额,确定使用吗',
							cancelText: "不使用",
							confirmText: '使用',
							success: res => {

								if (res.confirm) {
									console.log('点了确定')
									this.useCoupon(0)
								}
								if (res.cancel) {
									console.log('点了取消')
									// 点击了取消,遍历优惠劵,取消选择优惠劵
									this.couponList.forEach(item => {
										if (item.is_checked === 2) {
											this.getChoiceIntegralsub(item.id)
										}
									})
									this.getBuyToatlPic(this.userId)
								}
							}
						})
					} else {
						this.useCoupon(newPic)
					}

				})
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
				totalPic: state => state.buy.totalPic,
				quantity: state => state.buy.quantity,
				marketPriceTotal: state => state.buy.marketPriceTotal,
				couponList: state => state.buy.couponList,
				isCoupon: state => state.buy.isCoupon,
				preferentialAmount: state => state.buy.preferentialAmount,
				addressId: state => state.buy.addressId,
				openId : state => state.user.openId
			}),
			...mapGetters(['getSeleteCouponList'])

		}
	}
</script>

<style lang="scss">
	button::after {
		border: none;
	}

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
				margin: 0;
				padding: 0;
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
