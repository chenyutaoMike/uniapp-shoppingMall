<template>
	<view class="shop-list-box flex flex-wrap justify-between" v-if="gooListArr.length !== 0">
		
		<block v-for="(item,index) in gooListArr" :key="item.id + index">
			<view class="shop-list-item" @click="goDetail(item.id)">
				<view class="shop-list-img">
					<image :src="hostUrl+item.litpic"></image>
				</view>
				<view class="item-content">
					<text class="item-title">{{item.name}}</text>
					<view class="item-bottom flex justify-between align-center">
							<view class="flex flex-column">
								<text class="item-new-pic">￥{{item.price}}</text>
								<text class="item-old-pic">￥{{item.marketPrice}}</text>
							</view>
							<view class="item-shop-cart">
								<image :src="shopCartImg"></image>
							</view>
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
	export default {
		props:{
			gooListArr:{
				type:Array,
				default:() => []
			}
		},
		data(){
			return {
				shopCartImg:'/static/images/goodListImg/shopcart.png',
				hostUrl:hostUrl
			}
		},
			
		methods:{
			goDetail(id){
				uni.navigateTo({
					url:`/pages/details/details?id=${id}`
				})
			}
		}
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
					font-size: 26upx;
				
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				.item-bottom{
					
					.item-new-pic{
						font-size: 36upx;
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
