<template>
	<view class="order-box">
		<order-search />
		<order-tab  @changeTab="changeTab"/>
		<view class="order-box-list">
		<scroll-view scroll-y="true" class="good-list-bg" :style="`height:${scrollH}px`">
		  	<order-list />
		</scroll-view>
		</view>
	</view>
</template>

<script>
	import orderSearch from '@/components/orderComponent/orderSearch.vue';
	import orderTab from '@/components/orderComponent/orderTab.vue';
	import orderList from '@/components/orderComponent/orderList.vue';
	export default {
		components:{
			orderSearch,
			orderTab,
			orderList
		},
		data() {
			return {
				scrollH :''
			}
		},
		mounted() {
			let res = uni.getSystemInfoSync();
			this.scrollH = res.windowHeight - uni.upx2px(180);
		},
		methods:{
			changeTab(id){
				console.log(id)
			}
		}
	}
</script>

<style lang="scss">
.order-box-list{
	background-color: #EDEDED;
}
</style>
