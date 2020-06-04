<template>
	<view class="integral-mall-box">
		
		<view class="integral-mall-top border-bottom">
			我的积分:{{score}}
		</view>
		<scroll-view scroll-y="true" :style="`height:${scrollH}px`" @scrolltolower="getNextList">
				 <integralMallList :shopList="shopList"/>
		</scroll-view>
		
		<view class="to-integral-cart flex flex-column align-center text-white justify-center" @click="goIntegralCart">
			<image :src="cartIcon"></image>
			<text class="font-small">积分购物车({{cartNumber}})</text>
		</view>
	</view>
</template>

<script>
	import integralMallList from '@/components/integralMallComponent/integralMallList.vue';
	import {mapActions,mapState} from 'vuex';

	export default {
		components:{
			integralMallList
		},
		data() {
			return {
				cartIcon:'/static/images/itegralMallImg/good_gwc.png',
				scrollH:''
			}
		},
		mounted() {
			let res = uni.getSystemInfoSync();
			this.scrollH = res.windowHeight - uni.upx2px(80);
		},
		onReady() {
			this.userId = uni.getStorageSync('userId');
			if(this.isGet){
				this.getIntegralProductList({userId:this.userId,page:this.page})
			}
			this.getIntegralCartList()
		},
		methods: {
			...mapActions(['getIntegralProductList','getIntegralCartList']),
			getNextList(){
				if(this.isGet){
					if(this.flag){	
						this.$store.commit('SETFLAG')
						this.getIntegralProductList({userId:this.userId,page:this.page+1})
					}
				}else {
					uni.showToast({
						title:'没有更多商品了',
						icon:'none'
					})
				}
			},
			goIntegralCart(){
				uni.navigateTo({
					url:'/pages/integralCart/integralCart'
				})
			}
		},
		computed:{
			...mapState({
				page:state => state.integral.page,
				shopList:state => state.integral.shopList,
				isGet:state => state.integral.isGet,
				score:state => state.integral.score,
				flag:state => state.integral.flag,
				cartNumber:state => state.integral.cartNumber,
			})
		}
	}
</script>

<style lang="scss">
.integral-mall-box{
	.integral-mall-top{
		height: 80upx;
		line-height: 80upx;
		font-size: 30upx;
		padding-left: 30upx;
	}
	.to-integral-cart{
		position: fixed;
		right: 0;
		bottom: 30%;
		width: 180upx;
		height: 80upx;
		background-color: #FF0080;
		border-top-left-radius: 50upx;
		border-bottom-left-radius: 50upx;
		image{
			width: 37upx;
			height: 34upx;
		}
	}
}
</style>
