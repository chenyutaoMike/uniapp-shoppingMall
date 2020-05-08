<template>
	<view class="detail-top">
		<view class="detail-rotate">
			<swiper 
			class="detail-swiper" 
			indicator-dots	
			circular 
			:autoplay="true" 
			:interval="3000" 
			:duration="500"
			v-if="imgs !== 0"
			>
			<block v-for="item in imgs" :key="item.id">
				<swiper-item class="detail-swiper-item" >
					<image class="rotate-img" :src="hostUrl+item.original_path"></image>
				</swiper-item>
			</block>
			
			</swiper>
		</view>
		<view class="detail-desc-box">
			<view class="detail-title">{{info.name}}</view>
			<view class="detail-desc flex justify-between">
				<view class="detail-pic">
					<text class="detail-newPic mr-1 ">￥{{info.price}}</text>
					<text class="detail-oldPic">￥{{info.marketPrice}}</text>
				</view>
				<view class="detail-store">
					{{info.stock >= 10 ? '库存充足':'库存不足'}}
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	import {
		hostUrl
	} from '@/http/request.js';
	export default {
		components:{
		
		},
		data() {
			return {
					hostUrl:hostUrl
			}
		},
		methods: {

		},
		computed:{
			...mapState({
				imgs:state => state.details.imgs,
				info:state => state.details.info
			})
		},
		
	}
</script>

<style lang="scss">
	.detail-top {
		.detail-rotate {
			width: 100%;
			.detail-swiper {
				height: 460upx;
				width: 100%;
				.detail-swiper-item {
					width: 100%;
					 height: 100%;
					.rotate-img {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.detail-desc-box{
			padding: 20upx;
			box-shadow: 0px 3px 5px #ccc;
			.detail-title{
				font-size: 34upx;
				color: #181818;
			}
			.detail-desc{
				.detail-pic{
					.detail-newPic{
						font-size: 34upx;
						color: $picColor;
					}
					.detail-oldPic{
						font-size: 24upx;
						color:$delColor;
						text-decoration: line-through;
					}
				}
			}
			.detail-store{
				color: $delColor;
			}
		}
	}
</style>
