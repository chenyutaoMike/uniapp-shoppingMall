<template>
	<view class="index-top">
		<search-input />
		<view class="top-bg"></view>
		<view class="top">
			<rotate @goDetail="goDetail"/>
			<left-silde-nav :scrollWithAnimation="true"  />
		</view>

	</view>
</template>

<script>
	import rotate from '../rotate.vue';
	import searchInput from './searchInput.vue';
	import leftSildeNav from './leftSlideNav.vue';
	export default {
		components: {
			rotate,
			searchInput,
			leftSildeNav,
		},
		data() {
			return {
				
			}
		},
		methods:{
			goDetail(id){
				this.$emit('goDetail',id)
			}
		}
	}
</script>

<style lang="scss">
	.index-top {
		background-color: #fff;

		height: 520upx;

		.top-bg {
			height: 300upx;
			border-bottom-left-radius: 50upx;
			border-bottom-right-radius: 50upx;
			position: absolute;
			top: 0;
			width: 100%;
			background-color: $Theme-color;
		}

		.top {
			position: absolute;
			left: 0;
			width: 100%;
		}
	}
</style>
