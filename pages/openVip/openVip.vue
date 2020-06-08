<template>
	<view class="open-vip-box">
		<open-vip-user :userInfo="vipUserInfo" />
		<open-vip-list :vipList="vipAry" @seleteVip="changeTotalPic"/>
		<open-vip-pay-methods />
		<view class="open-pay-button">
			确认支付: ￥{{totalPic}}
		</view>
	</view>
</template>

<script>

	
	import openVipUser from '@/components/openVipComponent/openVipUser.vue';
	import openVipList from '@/components/openVipComponent/openVipList.vue';
	import openVipPayMethods from '@/components/openVipComponent/openVipPayMethods.vue';
	import {mapActions,mapState} from 'vuex';
	export default {
		components:{
			openVipUser,
			openVipList,
			openVipPayMethods
		},
		data() {
			return {
					totalPic:0
			}
		},
		onLoad() {
			this.userId = uni.getStorageSync('userId');
			if(!this.userId){
				uni.showToast({
					title:'请先登陆',
					icon:'none'
				})
			}
			this.getIsVip(this.userId);
			this.getVipList();
			this.getVipUser(this.userId)
		},
		methods: {
			...mapActions(['getIsVip','getVipList','getVipUser']),
			// 选择列表
			changeTotalPic(id){
			this.totalPic =	this.vipAry.find(item => item.Id === id).Price
			}
		},
		computed:{
			...mapState({
				vipAry:state => state.openVip.vipAry,
				vipUserInfo: state => state.openVip.vipUserInfo
			})
		}
	}
</script>

<style lang="scss">
.open-vip-box{
	padding-bottom: 120upx;
	.open-pay-button{
		height: 100upx;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #F8DB8D;
		text-align: center;
		line-height: 100upx;
		font-size: 40upx;
		color: #AF791D;
	}
}
</style>
