<template>
	<view>
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
		 :duration="duration" :indicator-active-color="indicatorActiveColor" :circular="circular">
			<block v-if="bannerImg && bannerImg.length !== 0">
				<swiper-item v-for="item in bannerImg" :key="item.id">
					<view class="swiper-item" :data-url="item.linkUrl">
						<img class="swiper-img" :src="hostUrl+item.picUrl" alt="">
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	import {
		hostUrl
	} from '@/http/request.js';
	import {
		mapState
	} from 'vuex';
	export default {
		props: {
			indicatorDots: {
				type: Boolean,
				default: true
			},
			autoplay: {
				type: Boolean,
				default: true
			},
			interval: {
				type: Number,
				default: 2000
			},
			duration: {
				type: Number,
				default: 500
			},
			indicatorActiveColor: {
				type: String,
				default: '#FFF'
			},
			circular: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				hostUrl: hostUrl
			}
		},
		computed: {
			...mapState({
				bannerImg:state => state.home.bannerImg
			})
		}
	
	}
</script>

<style lang="scss">
	.swiper {
		swiper-item {
			height: 300upx;
		}

		.swiper-item {
			width: 90%;
			height: 90%;
			position: relative;
			top: 50%;
			left: 50%;
			border-radius: 10upx;
			overflow: hidden;
			transform: translate(-50%, -50%);

			.swiper-img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
