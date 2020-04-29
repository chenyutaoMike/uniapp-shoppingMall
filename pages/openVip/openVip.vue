<template>
	<view class="open-vip-box">
		<open-vip-user />
		<open-vip-list :vipList="list" @seleteVip="changeTotalPic"/>
		<open-vip-pay-methods />
		<view class="open-pay-button">
			确认支付: ￥{{totalPic}}
		</view>
	</view>
</template>

<script>
	const vipList = [{
			Id: 1,
			Msg: '周卡',
			Price: 5
		},
		{
			Id: 2,
			Msg: '月卡',
			Price: 10
		},
		{
			Id: 3,
			Msg: '包月卡',
			Price: 10
		},
		{
			Id: 4,
			Msg: '季卡',
			Price: 20
		},
		{
			Id: 5,
			Msg: '半年卡',
			Price: 50
		}
	];
	
	import openVipUser from '@/components/openVipComponent/openVipUser.vue';
	import openVipList from '@/components/openVipComponent/openVipList.vue';
	import openVipPayMethods from '@/components/openVipComponent/openVipPayMethods.vue';
	export default {
		components:{
			openVipUser,
			openVipList,
			openVipPayMethods
		},
		data() {
			return {
					list: [],
					totalPic:0
			}
		},
		created() {
			this.list = vipList;
		},
		methods: {
			changeTotalPic(id){
			this.totalPic =	this.list.find(item => item.Id === id).Price
			}
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
