<template>
	<view>
		<view class="integral-cart-list" v-if="cartList.length !== 0">
			<view class="integral-cart-item flex align-center" v-for="item in cartList" :key="item.id + item.title">
				<view>
				<label>
					<checkbox v-if="item.is_checked === 1" @click="choice" :data-id="item.id" :data-checkId="item.is_checked" />
					<checkbox checked v-if="item.is_checked === 2" @click="choice" :data-id="item.id" :data-checkId="item.is_checked" />
				</label>
				</view>
				<view class="integral-cart-item-center flex">
					<image class="mx-3" :src="hostUrl+item.litpic"></image>
					<view class="flex flex-column font-m">
						<text>{{item.title}}</text>
						<text class="text-muted my-1">x{{item.quantity}}</text>
					</view>
				</view>
				<view class="integral-cart-item-bottom flex flex-column">
					<text class="font-lg text-pic">{{item.integral}}</text>
					<image @click="delItem(item.id)" class="delete-img" src="../../static/images/cartImg/delete.png"></image>
				</view>
			</view>

		</view>
		<view class="text-center mt-5 font-md text-secondary" v-else>购物车空空如也~</view>
	</view>
</template>

<script>
	import {
		hostUrl
	} from '@/http/request.js';
	import {cartDel} from '@/http/cart.js';
	export default {
		props: {
			cartList: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		data(){
			return {
				hostUrl:hostUrl
			}
		},

		methods:{
			delItem(id){
				cartDel(id).then(res=>{
					if(res.data !== null && res.data.status === 0){
						this.$emit('changeCart');
						uni.showToast({
							title:'删除成功'
						})
					}else{
						uni.showToast({
							title:'删除失败'
						})
					}
				})
			},
			choice(e){
				let {
					id,
					checkid
				} = e.currentTarget.dataset;
				
				this.$emit('choice',{id,checkId:checkid})
			}
		}
	}
</script>

<style lang="scss">
	.integral-cart-list {
		padding: 20upx;

		.integral-cart-item {
			box-sizing: border-box;
			height: 220upx;
			width: 100%;
			background-color: #fff;
			padding: 30upx;
			border-radius: 16upx;
			box-shadow: 0 3px 3px #ccc;
			margin-bottom: 20upx;

			.integral-cart-item-center {
				width: 500upx;

				image {
					width: 150upx;
					height: 150upx;
				}
			}

			.integral-cart-item-bottom {

				height: 100%;
				position: relative;
				flex: 1;
				text-align: right;
				.delete-img {
					width: 50upx;
					height: 55upx;
					position: absolute;
					right: 0;
					bottom: 0;
				}
			}
		}
	}
</style>
