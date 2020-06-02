<template>
	<view class="search-box">
		<input type="text" 
			class="text-center  bg-white" 
			placeholder="搜索商品名称" 
			confirm-type="search"
			v-model="indexSearch"
			@confirm="submitValue"
			@blur="showImg" @focus="hiddenImg" />
		<image :src="imgUrl" alt="search" class="searchImg" v-if="searchImg">
		</image>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: '/static/images/indexImg/ssico.png',
				searchImg:true,
				indexSearch:''
			}
		},
		methods:{
			showImg(){
				this.searchImg = true;
			},
			hiddenImg(){
				this.searchImg = false;
			},
			submitValue(){
				uni.navigateTo({
					url:`/pages/goodList/good-list?searchValue=${this.indexSearch}`
				})
				this.indexSearch = '';
			}
		}
	}
</script>

<style lang="scss">
	.search-box {
		z-index: 9;
		width: 100%;
		height: 50upx;
		position: relative;
		vertical-align: bottom;
		input {
			width: 90%;
			margin: 0 auto;
			height: 100%;
			border-radius: 50upx;
		}
		.searchImg {
			width: 35upx;
			height: 35upx;
			position: absolute;
			left: 30%;
			top: 20%;
		}
		text {
			color: rgb(45,45,45);
			font-size: 24upx;
		}
	}

	


</style>
