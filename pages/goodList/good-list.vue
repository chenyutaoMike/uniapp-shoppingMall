<template>
	<view class="goo_list-box">
		<good-list-search />
		<goodSort />
		<scroll-view scroll-y="true" class="good-list-bg" :style="`height:${scrollH}px`">
			<shop-list />
		</scroll-view>
	</view>
</template>

<script>
	import goodListSearch from '@/components/goodListComponent/goodListSearch.vue';
	import goodSort from '@/components/goodListComponent/goodSort.vue';
	import shopList from '@/components/shopList.vue';
	export default {
		components:{
			goodListSearch,
			goodSort,
			shopList
		},
		data() {
			return {
				scrollH:''
			}
		},
		mounted() {
			let res = uni.getSystemInfoSync();
			this.scrollH = res.windowHeight - uni.upx2px(160);
		},
		methods: {
			change(){
				console.log(111)
			}
		}
	}
</script>

<style lang="scss">
.goo_list-box{
	.good-list-bg{
		background-color: #EFEEF4;
	}
}
</style>
