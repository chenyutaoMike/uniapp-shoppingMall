<template>
	<view class="buy-box">
		<view class="buy-box-top">
			
			<view class="top-list flex px-3">
				<text class="font-m">快递服务:</text>
				<view class="flex align-center justify-center">
					<view class="list-btn mx-3 animated" hover-class="tada">普通快递</view>
					<view class="list-btn animated" hover-class="tada">选择地址</view>
				</view>
			</view>
			<view class="top-list flex align-center px-3">
				<text class="font-m">联系方式:</text>
				<view class="ml-3">
							{{phone}}
				</view>
			</view>
			<view class="top-list flex align-center px-3 border-box">
				<text class="address-title">收货地址:</text>
				<view class="ml-3 address">
							{{address}}
				</view>
			</view>
			
		</view>
		<view class="wall"></view>
		<buy-list />
		<view class="wall"></view>
		<view class="message flex px-3 align-center">
			<view class="message-title">买家留言:</view>
			<input type="text" class="ml-2 message-input"   v-model="message"/>
		</view>
		<view class="wall"></view>
	</view>
</template>

<script>
	import buyList from '@/components/buyComponent/buyList.vue';
	export default {
		components:{
			buyList
		},
		data() {
			return {
				phone:'12121212121',
				address:'广东省广州市天河区龙洞街道东大街南边巷32号',
				message:''
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.buy-box{
	.buy-box-top{
		background-color: #fff;
		.top-list{
			height: 100upx;
			
			line-height: 100upx;
			border-bottom: 1upx solid #ccc;
			.list-btn{
				border: 1upx solid $Theme-color;
				color:  $Theme-color;
				padding: 10upx 30upx;
				border-radius: 10upx;
			}
		}
		.border-box{
			font-size: 28upx;
			box-sizing: border-box;
			.address-title{
				display: inline-block;
				flex: 2;
			}
			.address{
				flex: 9;
				box-sizing: border-box;
				// margin-left: 30upx;
				white-space: pre-line;
			}
		}
	}
	.message{
		height: 100upx;
		line-height: 100upx;
		border-bottom: 1upx solid #ccc;
		box-sizing: border-box;
		.message-title{
			flex: 2;
		}
		.message-input{
			flex:9;
		}
	}
}
</style>
