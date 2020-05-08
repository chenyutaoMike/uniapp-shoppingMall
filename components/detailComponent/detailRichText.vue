<template>
	<view class="detail-rich-text">
		<view class="detail-cenert">
			— 商品详情 —
		</view>
		<view class="grace-rich-text">
			<u-parse :content="content" :imageProp="imageProp"></u-parse>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import {
		hostUrl
	} from '@/http/request.js';
	import uParse from "@/components/feng-parse/parse.vue";
	export default {
		data() {
			return {
				imageProp: {
					domain: 'https://www.baquwangluo.cn',
					lazyLoad:true
				}
			}
		},
		components: {
			uParse
		},
		computed: {
			...mapState({
				content: state => state.details.info.content
			})
		}
	}
</script>

<style lang="scss">
	.detail-rich-text {
		margin-top: 20upx;

		.detail-cenert {
			height: 80upx;
			background-color: $bg;
			margin-bottom: 20upx;
			text-align: center;
			line-height: 80upx;
			color: $delColor;
			font-size: 36upx;
			box-shadow: 0px 3px 5px #ccc;
		}

		.grace-rich-text {
			padding: 0 20upx;

		}
	}
</style>
