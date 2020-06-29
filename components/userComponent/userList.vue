<template>
	<view class="user-list">
		<block v-for="item in userList" :key="item.id">
			<view class="list-item" @click="jump(item)">
				<view class="img-box">
					<image class="list-item-img" :src="item.img_url" ></image>
				</view>
				{{item.title}}
			</view>
		</block>
	</view>
</template>

<script>
	const userList = [
		{id:1,title:'我的积分',img_url:'/static/images/userImg/uesr_icon2.png',link_url:'/pages/integral/integral'},
		{id:2,title:'积分商城',img_url:'/static/images/userImg/uesr_icon1.png', link_url:'/pages/integralMall/integralMall'},
		{id:3,title:'我的优惠劵',img_url:'/static/images/userImg/uesr_icon4.png',link_url:'/pages/coupon/coupon'},
		{id:4,title:'我的会员',img_url:'/static/images/userImg/vip.png',link_url:'/pages/openVip/openVip'},
		{id:5,title:'地址管理',img_url:'/static/images/userImg/uesr_icon5.png',link_url:'/pages/addressList/addressList'},
		{id:6,title:'客服中心',img_url:'/static/images/userImg/phone.png',link_url:'#'},
		{id:7,title:'联系客服',img_url:'/static/images/userImg/uesr_icon7.png',link_url:'#'}
	];
	export default {
		data(){
			return {
				userList:''
			}
		},
		created() {
			this.userList = userList;
		},
		methods:{
			jump(item){
				if(item.link_url === '#'){
					if(item.id === 6){
						this.msg('暂不开放')
					}
					if(item.id === 7){
						// 拨打电话
						uni.makePhoneCall({
						    phoneNumber: '18207598505'  
						})
					}
					return 
				}
				uni.navigateTo({
					url:item.link_url
				})
			}
		}
	}
</script>

<style lang="scss">
	.list-item {
		height: 100upx;
		border-bottom: 1upx solid #dedede;
		padding-left: 40upx;
		line-height: 100upx;
		display: flex;
		align-items: center;
		font-size: 30upx;
		color: #2e2e2e;
		.img-box {
			height: 100%;

			display: flex;
			align-items: center;
			margin-right: 20upx;
			.list-item-img {
				width: 54upx;
				height: 54upx;
			}
		}



	}
</style>
