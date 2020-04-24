<template>
	<view class="detail-rich-text">
		<view class="detail-cenert">
			— 商品详情 — 
		</view>
		<view class="grace-rich-text">
		  <rich-text type="text" :nodes="content"></rich-text>
		</view>
	</view>
</template>

<script>
	let graceRichText = require('../../common/richText.js');
	export default {
		data(){
			return {
				// content:'<img alt=\"\" src=\"https://www.baquwangluo.cn//Upload/image/20191030/201910301131426256.jpg\" /><img alt=\"\" src=\"https://www.baquwangluo.cn//Upload/image/20191030/201910301131426256.jpg\" /><img alt=\"\" src=\"https://www.baquwangluo.cn//Upload/image/20191030/201910301131426256.jpg\" /><img alt=\"\" src=\"https://www.baquwangluo.cn//Upload/image/20191030/201910301131426256.jpg\" /><img alt=\"\" src=\"https://www.baquwangluo.cn//Upload/image/20191030/201910301131426256.jpg\" /><img alt=\"\" src=\"https://www.baquwangluo.cn//Upload/image/20191030/201910301131426256.jpg\" /><img alt=\"\" src=\"/Upload/image/20191030/201910301131435670.jpg\" /><img alt=\"\" src=\"/Upload/image/20191030/201910301131437975.jpg\" /><img alt=\"\" src=\"/Upload/image/20191030/201910301131439274.jpg\" /><img alt=\"\" src=\"/Upload/image/20191030/201910301131440504.jpg\" /><img alt=\"\" src=\"/Upload/image/20191030/201910301131441393.jpg\" />'
			}
		},
		created() {
			this.content = graceRichText.format('<img alt=\"\" src=\"https://www.baquwangluo.cn//Upload/image/20191030/201910301131426256.jpg\" /><img alt=\"\" src=\"https://www.baquwangluo.cn//Upload/image/20191030/201910301131426256.jpg\" /><img alt=\"\" src=\"https://www.baquwangluo.cn//Upload/image/20191030/201910301131426256.jpg\" /><img alt=\"\" src=\"https://www.baquwangluo.cn//Upload/image/20191030/201910301131426256.jpg\" /><img alt=\"\" src=\"https://www.baquwangluo.cn//Upload/image/20191030/201910301131426256.jpg\" /><img alt=\"\" src=\"https://www.baquwangluo.cn//Upload/image/20191030/201910301131426256.jpg\" /><img alt=\"\" src=\"/Upload/image/20191030/201910301131435670.jpg\" /><img alt=\"\" src=\"/Upload/image/20191030/201910301131437975.jpg\" /><img alt=\"\" src=\"/Upload/image/20191030/201910301131439274.jpg\" /><img alt=\"\" src=\"/Upload/image/20191030/201910301131440504.jpg\" /><img alt=\"\" src=\"/Upload/image/20191030/201910301131441393.jpg\" />')
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
