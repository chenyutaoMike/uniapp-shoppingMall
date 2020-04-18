<template>
	<view class="index">
		<index-top />
		<index-center  />
		<like />
	</view>
</template>

<script>
	import indexTop from '@/components/indexComponent/indexTop.vue';
	import indexCenter from '@/components/indexComponent/indexCenter.vue';
	import like from '@/components/youLike.vue';
	import {getIndexRecommend,getIndexBanner,getIndexSlideNav} from '@/http/home.js';
	import {mapActions} from 'vuex';
 	export default {
		components:{
			indexTop,
			indexCenter,
			like
		},
		data() {
			return {
			
			}
		},
		mounted() {
			this.getRecommend();
			this.getBanner();
			this.getSlide()
			this.getType()
		},
		methods: {
			...mapActions(['getRecommend','getBanner','getSlide','getType']),
		}
	}
</script>

<style lang="scss">
	.index{
		height: 100%;
	}
</style>
