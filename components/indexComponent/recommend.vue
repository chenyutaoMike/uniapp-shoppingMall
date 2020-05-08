<template>
	<view>
		<block v-for="item in recommend" :key="item.id">
			<view class="recommend" :data-url="item.linkUrl" @click="godetail">
				<img class="recommend-img" :src="hostUrl+item.picUrl" alt="">
				<view class="day-recommend text-center text-white">{{item.name}}</view>
			</view>
		</block>
	</view>
</template>

<script>
	import {
		hostUrl
	} from '@/http/request.js';
	import {mapState} from 'vuex'
	export default {

		data() {
			return {
				hostUrl: hostUrl
			}
		},
		computed:{
			...mapState({
				recommend:state => state.home.recommend
			})
		},
		methods:{
			godetail(e){
				uni.navigateTo({
					url:e.currentTarget.dataset.url
				})
			}
		}
	}
</script>

<style lang="scss">
	.recommend {
		height: 300upx;
		width: 95%;
		margin: 20upx auto;
		border-radius: 30upx;
		overflow: hidden;
		position: relative;

		.recommend-img {
			width: 100%;
			height: 100%;
		}

		.day-recommend {
			position: absolute;
			top: 20upx;
			left: 0;
			width: 160upx;
			background-color: #ff005a;
			border-top-right-radius: 25rpx;
			border-bottom-right-radius: 25rpx;
		}

	}
</style>
