<template>
	<view class="user-box" :style="`height:${scrollH}px`" >
	<scroll-view scroll-y="true" :style="`height:${scrollH}px`" >
		<user-top :userInfo="userInfo"/>
		<view class="wall"></view>
		<userList />
	</scroll-view>
	</view>


</template>

<script>
	import userTop from '@/components/userComponent/userTop.vue';
	import userList from '@/components/userComponent/userList.vue';
	import {mapActions} from 'vuex';
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
		onLoad(){
			let userInfo = uni.getStorageSync('userInfo');
			this.userInfo = userInfo;
			this.getOrderPay(this.userInfo.userId)
		},
		methods: {
			...mapActions(['getOrderPay'])
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
