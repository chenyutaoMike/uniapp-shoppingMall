<template>
	<scroll-view class="scroll-nav" scroll-x="true" :scroll-with-animation="scrollWithAnimation" >
		<block v-if="slideNav && slideNav.length !== 0">
			<view class="scroll-box-item" v-for="item in slideNav" :key="item.id" :data-id="item.id">
				<view class="nav-item flex flex-column align-center justify-center">
					<img :src="hostUrl+item.img_url" alt="" class='scroll-box-img'>
					<text>{{item.title}}</text>
				</view>	
			</view>
		</block>
		
	</scroll-view>
</template>

<script>
	import {
		hostUrl
	} from '@/http/request.js';
	import {mapState} from 'vuex';
	export default {
		props:{
			scrollWithAnimation:{
				type:Boolean,
				default:false
			},
			
		},
		data() {
			return {
			hostUrl:hostUrl
			}
		},
		computed:{
			...mapState({
				slideNav:state => state.home.slideNav
			})
		}
	}
</script>

<style lang="scss">
	.scroll-nav {
		white-space: nowrap;
		background-color: #fff;
		height: 160upx;
			.scroll-box-item {
				display: inline-block;
				height: 160upx;
				line-height: 160upx;
				width: 25%;
				.nav-item{
					width: 100%;
					height: 100%;
					.scroll-box-img {
						width: 86upx;
						height: 86upx;
					}
				}
			
			}
		
	}
</style>
