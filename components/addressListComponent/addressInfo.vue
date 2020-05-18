<template>
	<view class="address-info-box">

		<view v-if="addressList.length !== 0">
			<block v-for="item in addressList" :key="item.id">
				<view class="address-info-item">
					<view class="address-detail ">{{item.address}}</view>
					<view class="address-user-info flex my-1 pb-2">
						<view class="address-user-name mr-2">{{item.consignee}}</view>
						<view class="address-user-phone">{{item.cellphone}}</view>
					</view>
					<view class="address-bottom flex justify-between align-center">
						<view class="flex align-center " @click="changeSelete(item.id)">
							<view class="flex align-center">
								<icon type="success" size="20" v-if="item.is_default === 1"></icon>
								<image src="../../static/images/addressImg/Choice.png" v-else></image>
							</view>
							<text class="ml-1">设为默认</text>
						</view>
						<view class="flex align-center address-bottom-right">
							<view @click="editAddress(item.id)">
								<image class="mr-1 edit" src="../../static/images/addressImg/bjico.png"></image>
								<text>编辑</text>
							</view>
							<view class="ml-3" @click="removeAddress(item.id)">
								<image class="mr-1 delete" src="../../static/images/addressImg/scico.png"></image>
								<text>删除</text>
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
		<view v-else class="text-center mx-5 font-lg text-secondary">
			空空如也,请添加地址
		</view>

	</view>
</template>

<script>
	import {
		defaultAddress,
		deleteAddress
	} from '@/http/address.js';

	export default {
		props: {
			addressList: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		data() {
			return {
				seleteDefault: false
			}
		},
		created() {
			this.userId = uni.getStorageSync('userId');
		},
		methods: {
			changeSelete(id) {
				defaultAddress({
					id,
					userId: this.userId
				}).then(res => {
					if (res.data.status === 0) {
						uni.showToast({
							title: '设置成功'
						})
						this.$emit('changeSelete')
					}
				})
			},
			async removeAddress(id) {
				let result = await deleteAddress(id);
				if (result.data !== null && result.data.status === 0) {
					uni.showToast({
						title: '删除成功'
					})
					this.$emit('removeAddress')
				}
			},
			editAddress(id) {
				uni.navigateTo({
					url: `/pages/addAddress/addAddress?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.address-info-box {
		padding: 20upx;
		margin-bottom: 100upx;

		.address-info-item {
			padding: 25upx 25upx 20upx;
			background-color: #fff;
			box-shadow: 0 3px 3px #ccc;
			margin-bottom: 20upx;

			.address-detail {
				font-size: 32upx;
			}

			.address-user-info {
				color: #8B8B8B;
				border-bottom: 1upx solid #ccc;
			}

			.address-bottom {
				height: 60upx;
				color: #424242;

				image {
					width: 40upx;
					height: 40upx;
					display: inline-block;
				}

				.address-bottom-right {

					image {
						position: relative;
						top: 10upx;
					}
				}
			}
		}
	}
</style>
