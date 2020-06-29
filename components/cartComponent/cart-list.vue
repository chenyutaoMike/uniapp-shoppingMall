<template>
	<view class="cart-list-box">
		<block v-for="item in cartList" :key="item.id">

			<view class="cart-list flex justify-between" :class="item.invalid ? 'invalid' : '' ">

				<view class="list-left ">
					<view class="left-msg">
						<label v-if="!item.invalid">
							<checkbox v-if="item.is_checked === 1" @click="choice" :data-id="item.id" :data-checkId="item.is_checked" />
							<checkbox checked v-if="item.is_checked === 2" @click="choice" :data-id="item.id" :data-checkId="item.is_checked" />
						</label>
						<text v-else class="left-text">
							{{item.tips}}
						</text>
					</view>
					<img class="left-img" :src="hostUrl+item.litpic" alt="" @click.stop="goDetails(item.article_id)">
				</view>
				<view class="list-right">
					<view class="list-detail">
						<view class="title text2-ellipsis">{{item.title}}</view>
						<view class="specifications">规格: {{item.property_value}}</view>
						<view class="compute">
							<view class="decrease animated" hover-class="tada" @click="decrease(item)" >-</view>
							<view class="num">{{item.quantity}}</view>
							<view class="add animated " hover-class="tada" @click="add(item)">+</view>
						</view>
					</view>
bu
				</view>
				<view class="list-pic">
					<view class="list-new-pic">￥{{item.price}}</view>
					<view class="list-old-pic">￥{{item.marketPrice}}</view>
					<view class="list-del" @click="delItem(item.id)">
						<image class="deleteImg" :src="deleteImg" mode=""></image>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import {
		hostUrl
	} from '@/http/request.js';
	import {
		cartAdd,
		cartDecrease,
		cartDel
	} from '@/http/cart.js';
	export default {
		props: {
			cartList: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		data() {
			return {
				deleteImg: '/static/images/cartImg/delete.png',
				hostUrl: hostUrl,

			}
		},
		mounted() {
				this.userId = uni.getStorageSync('userId');
				
		},
		methods: {
			decrease(info) {
				let {id,quantity} = info;
				if(quantity <= 1){
					uni.showToast({
						title:'购买数量不能为0',
						icon:'none'
					})
					return
				}
				cartDecrease(id).then(res=>{
					if(res.data !== null && res.data.status === 0){
						this.$emit('changeCart')
					}
				})
			},
			add(info){
				let {quantity,stock,id} = info;
			
				if(quantity > stock){
					uni.showToast({
						title:'购买数量大于库存',
						icon:'none'
					})
					return
				}
				cartAdd(id).then(res =>{
					
					if(res.data !== null && res.data.status === 0){
						this.$emit('changeCart')
					}
				})
			},
			delItem(id){
				
				cartDel(id).then(res=>{
					if(res.data !== null && res.data.status === 0){
						this.$emit('changeCart')
					}
				})
			},
			choice(e) {
				let {
					id,
					checkid
				} = e.currentTarget.dataset;
				this.$emit('choice',{id,checkId:checkid})
			
			},
			goDetails(id){
				uni.navigateTo({
					url:`/pages/details/details?id=${id}`
				})
			}
		},
		computed: {

		}
	}
</script>

<style lang="scss">
	.cart-list-box {
		padding: 20upx;
		background-color: $cartBg;

		.cart-list {
			height: 250upx;
			background-color: #fff;
			box-sizing: border-box;
			padding: 25upx 30upx;
			border-radius: 20upx;
			box-shadow: 0px 3px 3px #ccc;
			display: flex;
			position: relative;
			margin-bottom: 20upx;

			&.invalid {
				background-color: #f0f0f0;
			}

			.list-left {
				display: flex;
				align-items: center;
				height: 100%;

				.left-msg {
					max-width: 50upx;
					font-size: 24upx;
					margin-right: 10upx;

					.left-text {
						color: $cart-text;
					}
				}

				.left-img {
					width: 175upx;
					height: 175upx;
				}
			}

			.list-right {

				.list-detail {
					max-width: 280upx;
					min-width: 280upx;
					margin: 0 25upx;

					.title {
						font-size: 28rpx;
						height: 90upx;
						color: #4c4c4c;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}

					.specifications {
						font-size: 26upx;
						color: $cart-text;

					}

					.compute {
						margin-top: 10upx;
						display: flex;
						box-sizing: border-box;
						padding: 0 10upx;
						width: 200upx;
						height: 60upx;
						border: 1upx solid $cart-text;
						border-radius: 10upx;
						align-items: center;
						justify-content: center;
						text-align: center;
						color: #535353;
					}

					.add {
						flex: 1;
					}

					.num {
						flex: 3;

					}

					.decrease {
						flex: 1;
					}
				}

			}

			.list-pic {

				.list-new-pic {
					font-size: 32upx;
					color: $btnBg;
				}

				.list-old-pic {
					text-decoration: line-through;
					margin-top: 20upx;
					font-size: 28upx;
					color: $cart-text;
				}

				.list-del {
					position: absolute;
					bottom: 30upx;
					right: 50upx;
					width: 50upx;
					height: 50upx;

					.deleteImg {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>
