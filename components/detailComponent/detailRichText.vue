<template>
	<view class="detail-rich-text">
		<view class="detail-cenert">
			— 商品详情 — 
		</view>
		<view class="grace-rich-text">
		  <rich-text type="text" :nodes="newContent"></rich-text>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	import {
		hostUrl
	} from '@/http/request.js';
	let graceRichText = require('../../common/richText.js');
	export default {
		data(){
			return {
				newContent:''
			}
		},
		mounted(){
			// console.log(this.content)
		const result = 	graceRichText.format(this.content)
		console.log(result)
			// this.newContent = graceRichText.format(this.content)
		},
		computed:{
			...mapState({
				content:state => state.details.info.content
			})
		
			
		}
	}
</script>

<style lang="scss">
	.detail-rich-text{
		margin-top: 20upx;
		.detail-cenert{
			height: 80upx;
			background-color: $bg;
			margin-bottom: 20upx;
			text-align: center;
			line-height: 80upx;
			color: $delColor;
			font-size: 36upx;
			box-shadow: 0px 3px 5px #ccc;
		}
		.grace-rich-text{
				padding: 0 20upx;
			
		}
	}
</style>
