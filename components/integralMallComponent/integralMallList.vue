<template>
	<view>
	<view class="shop-list-box flex flex-wrap justify-between" v-if="shopList.length !== 0">
		
		<block v-for="(item,index) in shopList" >
			<view class="shop-list-item"  :key="index+item.name">
				<view class="shop-list-img">
					<image :src="hostUrl+item.litpic"></image>
				</view>
				<view class="item-content">
					<text class="item-title font-md">{{item.name}}</text>
					<view class="item-bottom flex justify-between align-center">
							<view class="flex flex-column">
								<text class="item-new-pic">积分:{{item.integral}}</text>
							
							</view>
							<view class="item-shop-cart" @click.stop="addCart(item.id)">
								<image :src="shopCartImg"></image>
							</view>
					</view>
				</view>
			</view>
			
		</block>
		
	</view>
	<view class="text-center my-4 font-lg text-secondary" v-else>暂无商品</view>
	</view>
</template>

<script>
	import {
		hostUrl
	} from '@/http/request.js';
	import {mapActions} from 'vuex';
	export default {
		props:{
			shopList:{
				type:Array,
				default:() => {
					return []
				}
			}
		},
		data(){
			return {
				shopCartImg:'/static/images/goodListImg/shopcart.png',
				hostUrl:hostUrl
			}
		},
			
		methods:{
				...mapActions(['getIntegralAddCart']),
			addCart(id){
				// 验证登陆信息
				let userId = uni.getStorageSync('userId');
				if(!userId){
					uni.showToast({
						title:'请先登陆',
						icon:'none'
					})
					return 
				}
			
			
				let {shopList} = this;
					
				let info = shopList.find(item =>{
					return item.id === id;
				})
			
				
				let seleteNumber = 1;
				if(seleteNumber > info.stock){
					uni.showToast({
						title:'库存不足',
						icon:'none'
					})
					return
				}
				// 加入购物车
				let option = {
					id:info.id,
					userId:userId,
					quantity:seleteNumber,
					isChecked:1,
					unit:'份'
				}
				this.getIntegralAddCart(option);
			}
		},
		
		
	}
</script>

<style lang="scss">
	.shop-list-box {
		padding: 20upx 10upx;
		.shop-list-item{
			width: 49%;
			background-color: #fff;
			margin-bottom: 20upx;
			border-radius: 10upx;
			overflow: hidden;
			box-shadow: 0 0 3px 3px #ccc;
			.shop-list-img{
				width: 100%;
				height: 360upx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.item-content{
				padding: 5upx 15upx ;
				.item-title{
					display: block;
					height: 90upx;
					max-width: 320upx;
					font-size: 34upx;
				
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				.item-bottom{
					
					.item-new-pic{
						font-size: 30upx;
						color: $picColor;
					}
					.item-old-pic{
						font-size: 26upx;
						text-decoration: line-through;
						color: $delColor;
					}
					.item-shop-cart{
						width: 100upx;
						height: 100upx;
						image {
							width: 100%;
							height: 100%;
						}
					}
				}
				
			}
		}
	}
</style>
