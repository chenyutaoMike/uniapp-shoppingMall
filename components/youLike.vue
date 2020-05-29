<template>
	<view class="like" v-if="list.length !== 0">
		<view class="like-title  bg-success ">
			-_猜你喜欢_-
		</view>
		
		<ul class="like-list flex flex-wrap justify-between" >
			<block v-for="item in list" :key="item.id" >
				<li class="like-item" @click="goDetail(item.id)">
					<img class="like-img" :src="hostUrl + item.litpic"
					 alt="">
					<view class="item-name">
						{{item.name}}
					</view>
					<view class="like-pic">
						<text class="new-pic">￥{{item.price}}</text>
						<text class="old-pic">￥{{item.marketPrice}}</text>
					</view>
				</li>
			</block>

		</ul>
	</view>
</template>

<script>
	import {hostUrl} from '@/http/request.js';
	export default{
		props:{
			list:{
				type:Array,
				default:() => {
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
			goDetail(id){
				uni.navigateTo({
					url:`/pages/details/details?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.like {
		background-color: $bg;
		width: 100%;

		.like-title {
			width: 100%;
			height: 140upx;
			text-align: center;
			line-height: 140upx;
			background-color: $bg;
		}

		.like-list {
			width: 95%;
			margin: 0 auto;
			padding-bottom: 10upx;
			.like-item {
				background-color: #fff;
				// height: 475upx;
				width: 49%;
				margin-bottom: 20upx;
				border-radius: 10upx;
				overflow: hidden;
				&:nth-child(2n) {
					margin-right: 0;
				}

				.like-img {
					height: 345upx;
					width: 100%;
				}

				.item-name {
					height: 100upx;
					padding: 0 10upx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				.like-pic{
					padding: 0 10upx;
					.new-pic{
						font-size: 32upx;
						color: #ff005a;
					}
					.old-pic{
						margin-left: 20upx;
						font-size: 26upx;
						color: #2d2d2d;
						text-decoration: line-through;
					}
				}
			}
		}
	}
</style>
