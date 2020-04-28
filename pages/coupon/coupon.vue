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
		<coupon-list v-if="seleteId === 0" :isUse="false"/>
		<coupon-list v-if="seleteId === 1" :isUse="true"/>
	</view>
</template>

<script>
	
	const tab = [
		{id:0,value:'未使用'},
		{id:1,value:'已使用'}
	]
	import couponList from '@/components/couponComponent/couponList.vue';
	export default {
		components:{
			couponList
		},
		data() {
			return {
					tabList:[],
					seleteId:0
			}
		},
		created(){
			this.tabList = tab;
		},
		methods: {
			changeTab(id){
				this.seleteId = id;
			},
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
