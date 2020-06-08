<template>
	<view class="coupon-box">
		
		<view class="coupon-tab flex align-center">
			<block v-for="item in tabList" :key="item.id">
				<view 
				class="coupon-tab-item flex-1 flex  align-center justify-center"
				:class="item.id === seleteId ? 'selete':''"
				@click="changeTab(item.id)"
				>{{item.value}}</view>
			</block>
		</view>
		<coupon-list v-if="seleteId === 1" :isUse="false" :couponList="notUseCoupon" />
		<coupon-list v-if="seleteId === 0" :isUse="true" :couponList="useCoupon" />
	</view>
</template>

<script>
	// 1 未使用
	// 0 已使用
	const tab = [
		{id:1,value:'未使用'},
		{id:0,value:'已使用'}
	]
	import couponList from '@/components/couponComponent/couponList.vue';
	import {mapActions,mapState} from 'vuex';
	export default {
		components:{
			couponList
		},
		data() {
			return {
					tabList:[],
					seleteId:1
			}
		},
		created(){
			this.tabList = tab;
		},
		onLoad() {
			this.userId = uni.getStorageSync('userId');
			// 请求已使用优惠劵
			this.getCouponList({userId:this.userId,status:0})
			// 请求未使用优惠劵
			this.getCouponList({userId:this.userId,status:1})
		},
		methods: {
			...mapActions(['getCouponList']),
			changeTab(id){
				this.seleteId = id;
			},
		},
		computed:{
			...mapState({
				useCoupon:state => state.coupon.useCoupon,
				notUseCoupon:state => state.coupon.notUseCoupon
			})
		}
	}
</script>

<style lang="scss">
	$integralColor:#C5C5C5;
	$seleteColor:#C02316;
.coupon-box {
		
.coupon-tab{
	height: 100upx;
	.coupon-tab-item {
		border-bottom: 1upx solid #F3F3F3;
		color: #727272;
		height: 100%;
		border-bottom: 1upx solid $integralColor;
		&.selete{
			color: $seleteColor;
			border-color: $seleteColor;
		}
	}
}
		
	}
</style>
