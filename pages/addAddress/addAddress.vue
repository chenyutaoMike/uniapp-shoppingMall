<template>
	<view class="add-address">
		<view class="add-info">
			<view class="flex height-1 align-center px-2 border-bottom">
				<text class="mr-2">联系人</text>
				<input type="text" placeholder="请输入姓名" v-model="username"/>
			</view>
			<view class="flex height-1 align-center px-2 border-bottom">
				<text class="mr-2">手机号码</text>
				<input type="number" placeholder="请输入手机号" v-model="phone" />
			</view>
			<view class="flex height-1 align-center px-2 border-bottom">
				<text class="mr-2">地区</text>
				<region-picker @change="region_change" :value="regions">
					<view class="picker">
						{{regions[0]}} {{regions[1]}} {{regions[2]}}
					</view>
				</region-picker>

			</view>
			<view class="flex height-1 align-center px-2 border-bottom">
				<text class="mr-2">详细地址</text>
				<input type="text" class="detailAddress" placeholder="街道、楼牌号等" v-model="detailedAddress"  />
			</view>
		</view>
		<view class="submit-user" @click="submitAddress">提交</view>
	</view>
</template>

<script>
	import regionPicker from "@/components/region-picker/region-picker.vue";
	import {
		getAddress,
		addAddress
	} from '@/http/address.js';
	import {formatAddress,checkLogin} from '@/static/utils.js';
	export default {
		components: {
			regionPicker
		},
		data() {
			return {
				regions: ['请选择', '请选择', '请选择'],
				username:'',
				phone:'',
				detailedAddress:'',
				id:0
			}
		},
		onLoad(option) {
			
			this.userId = uni.getStorageSync('userId');
			if(!this.userId){
				checkLogin()
				return
			}
			if (Number(option.id) > 0) {
				this.getAddressInfo({
					id: option.id,
					userId: this.userId
				})
			}
		},
		methods: {
			region_change(e) {
				this.regions = e.detail.value;
			},
			async getAddressInfo(option) {
				let result = await getAddress(option);
				console.log(result.data)
				if(result.data !== null){
					let {consignee,cellphone,address,id} = result.data;
					console.log(id)
					// 使用格式化函数格式化地址
					const addressAry = formatAddress(address);
					this.username = consignee;
					this.phone = cellphone;
					this.id = id;
					this.detailedAddress = addressAry[1];
					this.regions = addressAry[0];
				}

			},
			submitAddress(){
				let {regions,username,phone,detailedAddress,id,userId} = this;
				console.log(regions,username,phone,detailedAddress);
				if(regions === ''){
					uni.showToast({
						title:'选择市省区'
					})
					return 
				}
				if(username === ''){
					uni.showToast({
						title:'请输入姓名'
					})
					return 
				}
				if(phone === ''){
					uni.showToast({
						title:'请输入手机号'
					})
					return 
				}
				if(detailedAddress === ''){
					uni.showToast({
						title:'填写地址'
					})
					return 
				}
				let address = regions.join("") + detailedAddress;
				addAddress({
					userId:userId,
					id,
					consignee:username,
					cellphone:phone,
					address:address
				}).then(res=>{
					console.log(res)
					if(res.data !== null && res.data.status === 0){
						uni.showToast({
							title:'添加成功'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;

		.add-address {
			height: 100%;
			background-color: $bg;

			.add-info {
				background-color: #fff;
				.detailAddress{

					width: 80%;
				}
			}
			
			.submit-user {
				width: 80%;
				background-color: #E64240;
				height: 80upx;
				margin: 30upx auto 0;
				text-align: center;
				line-height: 80upx;
				border-radius: 10upx;
				color: #fff;
				font-size: 34upx;
			}
		}
	}
</style>
