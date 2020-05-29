<template>
	<view class="index">
		<index-top @goDetail="goDetail"/>
		<index-center  />
		<like :list="youLike" @addCart="addCart"  />
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
			
		},
		computed:{
			...mapState({
				noList:state => state.home.noList,
				youLike:state => state.home.youLike
			})
		},
		methods: {
			...mapActions(['getRecommend','getBanner','getSlide','getType','getYouLike','getAddCart']),
			goDetail(id){
				uni.navigateTo({
					url:`/pages/details/details?${id}`
				})
			},
			addCart(detail){
				// 验证登陆信息
					let userId = uni.getStorageSync('userId');
					if(!userId){
						uni.showToast({
							title:'请先登陆',
							icon:'none'
						})
						return 
					}
				
				
					
					let seleteNumber = 1;
					let seleteUnitIndex = 0;
					if(seleteNumber > detail.stock){
						uni.showToast({
							title:'库存不足',
							icon:'none'
						})
						return
					}
					// 加入购物车
					let option = {
						id:detail.id,
						userId:userId,
						quantity:seleteNumber,
						isChecked:1,
						unit:detail.unit.split('/')[seleteUnitIndex]
					}
					this.getAddCart(option);
				}
			
		}
	}
</script>

<style lang="scss">
	.index{
		height: 100%;
	}
</style>
