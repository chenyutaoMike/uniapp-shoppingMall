<template>
	<block v-if="indexType.length !== 0">
		<view class="good-list" >
			<block v-for="item in indexType" :key="item.id" >
				<view class="good-title flex justify-between align-center" v-if="item.list.length !== 0">
					<text class="title">{{item.title}}</text>
					<view class="more text-center animated " hover-class="tada">更多</view>
				</view>
				<block v-if="item.hot_img">
					<view class="good-center">
						<img class="center-img" :src="hostUrl+item.hot_img" alt="">
						<view class="center-title text-white">{{item.hot_title}}</view>
					</view>
				</block>
				<ul class="list flex flex-wrap justify-between">
					<block v-for="itemList in item.list" :key="itemList.id">
						<li class="list-item bg-white" :data-id="itemList.id">
							<img class="list-img" :src="hostUrl+itemList.litpic" alt="">
							<text class="list-name">{{itemList.name}}</text>
							<view class="list-pic flex flex-column">
								<text class="new-pic">￥{{itemList.price}}</text>
								<text class="old-pic">￥{{itemList.marketPrice}}</text>
							</view>
						</li>
					</block>
				</ul>
			</block>
		</view>
	</block>
</template>

<script>
	import {
		hostUrl
	} from '@/http/request.js';
import {mapState} from 'vuex';
	export default {
		data() {
			return {
				hostUrl: hostUrl
				
			}
		},
		mounted() {
		},
		computed:{
			...mapState({
				indexType:state => state.home.indexType
			})
		}
	}
</script>

<style lang="scss">
	.good-list {
		width: 95%;
		margin: 0 auto 30upx;
		box-sizing: border-box;
		
		.good-title {
			height: 80upx;
			background-color: $Theme-color;
			padding: 0 26upx;
			border-top-left-radius: 10rpx;
			border-top-right-radius: 10rpx;
			color: #fff;

			.title {
				font-size: 32upx;
			}

			.more {
				border: 1upx solid #fff;
				width: 120upx;
				height: 50upx;
				font-size: 26upx;
				border-radius: 50upx;
				line-height: 50upx;
			}
		}

		.good-center {
			width: 100%;
			height: 300upx;
			position: relative;

			.center-img {
				width: 100%;
				height: 100%;
			}

			.center-title {
				position: absolute;
				bottom: 0upx;
				left: 0;
				right: 0;
				height: 80upx;
				line-height: 80upx;
				background-color: rgba(0, 0, 0, .5);
				font-size: 34upx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				color: #fff;
			}
		}

		.list {
			width: 100%;
			margin-top: 16upx;
			box-sizing: border-box;

			.list-item {

				width: 32%;
				box-sizing: border-box;
				padding-bottom: 10upx;
				margin-bottom: 10upx;
				border-radius: 10upx;
				overflow: hidden;

				.list-img {
					width: 100%;
					height: 225upx;
				}

				.list-name {
					color: #464646;
					padding: 0 5upx;
					margin-top: 10upx;
					height: 80upx;
					font-size: 26upx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				.list-pic {
					padding: 0 10upx;
					margin-top: 10upx;

					.new-pic {
						color: #ff005a;
						font-size: 30upx;
					}

					.old-pic {
						color: #2d2d2d;
						font-size: 24upx;
						text-decoration: line-through;
					}
				}
			}
		}
	}
</style>
