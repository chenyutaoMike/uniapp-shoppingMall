<template>
	<view class="index">
		<index-top @goDetail="goDetail"/>
		<index-center  />
		<like :list="youLike"/>
	</view>
</template>

<script>
	import indexTop from '@/components/indexComponent/indexTop.vue';
	import indexCenter from '@/components/indexComponent/indexCenter.vue';
	import like from '@/components/youLike.vue';
	import {getIndexRecommend,getIndexBanner,getIndexSlideNav} from '@/http/home.js';
	import {mapActions,mapState} from 'vuex';
 	export default {
		components:{
			indexTop,
			indexCenter,
			like
		},
		data() {
			return {
				listType:0
			}
		},
		mounted() {
			this.getRecommend();
			this.getBanner();
			this.getSlide();
			this.getType();
			this.getYouLike(this.listType)
		},
		onReachBottom(){
			if(this.noList){
				this.listType = this.listType + 1;
				this.getYouLike(this.listType)
			}else{
				uni.showToast({
					title:'没有更多了',
					icon:'none',
					duration:1500
				})
			}
			console.log(this.youLike)
		},
		computed:{
			...mapState({
				noList:state => state.home.noList,
				youLike:state => state.home.youLike
			})
		},
		methods: {
			...mapActions(['getRecommend','getBanner','getSlide','getType','getYouLike']),
			goDetail(id){
				uni.navigateTo({
					url:`../details/details?${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.index{
		height: 100%;
	}
</style>
