<template>
	<view class="address-box">
		<scroll-view scroll-y="true" class="good-list-bg" :style="`height:${scrollH}px`">
		  	<address-info :addressList="addressList" @changeSelete="changeSelete" @removeAddress="removeAddress"/>
			
		</scroll-view>
		<view class="address-add flex justify-between px-3 align-center" @click="goAddress">
			<text class="text-white" >新增收货地址</text>
			<image class="address-add-img" src="../../static/images/addressImg/jiaico.png"></image>
		</view>
	</view>
</template>

<script>
	import addressInfo from '@/components/addressListComponent/addressInfo.vue';
	import {mapActions,mapState} from 'vuex';
	import {checkLogin} from '@/static/utils.js';
	export default {
		components:{
			addressInfo
		},
		data() {
			return {
				scrollH:''
			}
		},
		methods: {
			...mapActions(['getAddressAry']),
			goAddress(){
				uni.navigateTo({
					url:`/pages/addAddress/addAddress?id=0`
				})
			},
			changeSelete(){
				this.getAddressAry(this.userId)
			},
			removeAddress(){
				this.getAddressAry(this.userId)
			}
		},
		onLoad() {
			let res = uni.getSystemInfoSync();
			this.userId = uni.getStorageSync('userId');
			this.scrollH = res.windowHeight;
			if(!this.userId){
				// 如果没登陆,提示用户登陆,并跳转到user页面进行登陆
				checkLogin();
					return
			}
		},
		onShow(){
			if(!this.userId){
			checkLogin();
				return 
			}
			this.getAddressAry(this.userId)
		},
		computed:{
			...mapState({
				addressList:state => state.address.addressList
			})
		}
	}
</script>

<style lang="scss">
	.address-box{
		background-color: $bg;
		.address-add{
			position: fixed;
			bottom: 20upx;
			width: 80%;
			height: 100upx;
			background-color: #E6442D;
			z-index: 9999;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 20upx;
			box-sizing: border-box;
			.address-add-img{
				width: 30upx;
				height: 30upx;
			}
		}
	}

</style>
