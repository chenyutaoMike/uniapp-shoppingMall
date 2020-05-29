<template>
	<view class="user-box" :style="`height:${scrollH}px`">
		<scroll-view scroll-y="true" :style="`height:${scrollH}px` ">
			<user-top :userInfo="userInfo" :orderList="orderList" />
			<view class="wall"></view>
			<userList />

		</scroll-view>
		<button @click="userlogout">退出登陆</button>
	</view>


</template>

<script>
	const orderList = [{
			id: 1,
			img_url: '/static/images/userImg/order1.png',
			title: '待支付',
			num: ''
		},
		{
			id: 2,
			img_url: '/static/images/userImg/order2.png',
			title: '待发货',
			num: ''
		},
		{
			id: 3,
			img_url: '/static/images/userImg/order3.png',
			title: '待收货',
			num: ''
		},
		{
			id: 4,
			img_url: '/static/images/userImg/order4.png',
			title: '已完成',
			num: ''
		}
	];
	import userTop from '@/components/userComponent/userTop.vue';
	import userList from '@/components/userComponent/userList.vue';
	import {
		mapActions,
		mapState
	} from 'vuex';
	export default {
		components: {
			userTop,
			userList
		},
		data() {
			return {
				scrollH: 0,
				orderList: []
			}
		},
		mounted() {
			let res = uni.getSystemInfoSync();
			this.scrollH = res.windowHeight;

		},
		onLoad() {
			this.orderList = orderList;
			let {
				userInfo
			} = this;
			// 如果useInfo没有值,就向缓存的userInfo取值
			if (Object.keys(userInfo).length === 0) {
				let newInfo = uni.getStorageSync('userInfo');
				// 取到UserInfo后,更新store中的userInfo
				if (Object.keys(newInfo).length !== 0) {
					this.setUserInfo(newInfo)
				}

			}

		},
		onShow() {
			let userId = uni.getStorageSync('userId');
			this.getOrderPay(userId); //获取待支付
			this.getOrderDelivery(userId); //获取待发货
			this.getOrderReceiving(userId); //获取待收货
			this.getOrderTransaction(userId); //获取已完成
			this.orderList.forEach(item => {
				if (item.id === 1) {
					item.num = this.isPay
				}
				if (item.id === 2) {
					item.num = this.isDelivery
				}
				if (item.id === 3) {
					item.num = this.isReceiving
				}
				if (item.id === 4) {
					item.num = this.isTransaction
				}
			})
		},
		methods: {
			...mapActions(['getOrderPay', 'getOrderDelivery', 'getOrderReceiving', 'getOrderTransaction', 'logout',
				'setUserInfo'
			]),
			userlogout() {
				// 退出登陆
				this.logout()
			}
		},
		computed: {
			...mapState({
				isPay: state => state.user.isPay,
				isDelivery: state => state.user.isDelivery,
				isReceiving: state => state.user.isReceiving,
				isTransaction: state => state.user.isTransaction,
				userInfo: state => state.user.userInfo
			})
		},
		updated() {
			console.log(this.userInfo)
		}
	}
</script>

<style lang="scss">
	.user-box {
		.wall {
			width: 100%;
			height: 10upx;
			background-color: #f5f5f5;
		}
	}
</style>
