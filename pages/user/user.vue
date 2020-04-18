<template>
	<view class="user-box" :style="`height:${scrollH}px`" >
	<scroll-view scroll-y="true" :style="`height:${scrollH}px`" >
		<user-top />
		<view class="wall"></view>
		<userList />
	</scroll-view>
	</view>


</template>

<script>
	import userTop from '@/components/userComponent/userTop.vue';
	import userList from '@/components/userComponent/userList.vue';
	export default {
		components: {
			userTop,
			userList
		},
		data() {
			return {
				scrollH: 0
			}
		},
		mounted() {
			let res = uni.getSystemInfoSync();
			this.scrollH = res.windowHeight;
		
		},
		methods: {

		}
	}
</script>

<style lang="scss">
.user-box{
	.wall{
		width: 100%;
		height: 10upx;
		background-color: #f5f5f5;
	}
}
</style>
