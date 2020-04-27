<template>
	<view class="address-info-box">
		
		<view class="address-info-item">
			<view class="address-detail ">广东省广州市天河区龙洞街道东大街南边巷75号</view>
			<view class="address-user-info flex my-1 pb-2">
				<view class="address-user-name mr-2">张伟</view>
				<view class="address-user-phone">18207565433</view>
			</view>
			<view class="address-bottom flex justify-between align-center">
				<view class="flex align-center ">
					<view class="flex align-center" @click="changeSelete">
						<image  src="../../static/images/addressImg/Choice.png" v-if="seleteDefault"></image>
						<icon type="success" size="20" v-else></icon>
					</view>
					<text class="ml-1">设为默认</text>
				</view>
				<view class="flex align-center address-bottom-right">
					<view>
						<image class="mr-1 edit" src="../../static/images/addressImg/bjico.png"></image>
						<text>编辑</text>
					</view>
					<view class="ml-3">
						<image class="mr-1 delete" src="../../static/images/addressImg/scico.png"></image>
						<text>删除</text>
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="address-info-item">
			<view class="address-detail ">广东省广州市天河区龙洞街道东大街南边巷75号</view>
			<view class="address-user-info flex my-1 pb-2">
				<view class="address-user-name mr-2">张伟</view>
				<view class="address-user-phone">18207565433</view>
			</view>
			<view class="address-bottom flex justify-between align-center">
				<view class="flex align-center ">
					<view class="flex align-center" @click="changeSelete">
						<image  src="../../static/images/addressImg/Choice.png" v-if="seleteDefault"></image>
						<icon type="success" size="20" v-else></icon>
					</view>
					<text class="ml-1">设为默认</text>
				</view>
				<view class="flex align-center address-bottom-right">
					<view>
						<image class="mr-1 edit" src="../../static/images/addressImg/bjico.png"></image>
						<text>编辑</text>
					</view>
					<view class="ml-3">
						<image class="mr-1 delete" src="../../static/images/addressImg/scico.png"></image>
						<text>删除</text>
					</view>
				</view>
			</view>
		</view>
		
		
		
		<view class="address-info-item">
			<view class="address-detail ">广东省广州市天河区龙洞街道东大街南边巷75号</view>
			<view class="address-user-info flex my-1 pb-2">
				<view class="address-user-name mr-2">张伟</view>
				<view class="address-user-phone">18207565433</view>
			</view>
			<view class="address-bottom flex justify-between align-center">
				<view class="flex align-center ">
					<view class="flex align-center" @click="changeSelete">
						<image  src="../../static/images/addressImg/Choice.png" v-if="seleteDefault"></image>
						<icon type="success" size="20" v-else></icon>
					</view>
					<text class="ml-1">设为默认</text>
				</view>
				<view class="flex align-center address-bottom-right">
					<view>
						<image class="mr-1 edit" src="../../static/images/addressImg/bjico.png"></image>
						<text>编辑</text>
					</view>
					<view class="ml-3">
						<image class="mr-1 delete" src="../../static/images/addressImg/scico.png"></image>
						<text>删除</text>
					</view>
				</view>
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return {
				seleteDefault:false
			}
		},
			methods:{
				changeSelete(){
					this.seleteDefault = !this.seleteDefault
				}
			}
	}
</script>

<style lang="scss">
	.address-info-box{
		padding:20upx;
		.address-info-item{
			padding: 25upx 25upx 20upx;
			background-color: #fff;
			box-shadow: 0 3px 3px #ccc;
			margin-bottom: 20upx;
			.address-detail{
				font-size: 32upx;
			}
			.address-user-info{
				color: #8B8B8B;
				border-bottom: 1upx solid #ccc;
			}
			.address-bottom{
				height: 60upx;
				color: #424242;
				image{
					width: 40upx;
					height: 40upx;
					display: inline-block;
				}
				.address-bottom-right{
					
					image{
						position: relative;
						top: 10upx;
					}
				}
			}
		}
	}
</style>
