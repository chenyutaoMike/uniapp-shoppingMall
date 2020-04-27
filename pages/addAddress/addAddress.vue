<template>
	<view class="add-address">
		<view class="add-info">
			<view class="flex height-1 align-center px-2 border-bottom">
				<text class="mr-2">联系人</text>
				<input type="text" placeholder="请输入姓名"/>
			</view>
			<view class="flex height-1 align-center px-2 border-bottom">
				<text class="mr-2">手机号码</text>
				<input type="number" placeholder="请输入手机号"/>
			</view>
			<view class="flex height-1 align-center px-2 border-bottom">
				<text class="mr-2">地区</text>
				<region-picker @change="region_change" :value="regions" >
				    <view class="picker">
						{{regions[0]}} {{regions[1]}} {{regions[2]}}
						</view>
				</region-picker>
			 
			</view>
			<view class="flex height-1 align-center px-2 border-bottom">
				<text class="mr-2">详细地址</text>
				<input type="text" placeholder="街道/楼牌号等" />
			</view>
		</view>
		<view class="submit-user">提交</view>
	</view>
</template>

<script>
	import regionPicker from "@/components/region-picker/region-picker.vue"
	export default {
		components: {  
		    regionPicker  
		},
		data() {
			return {
						regions: ['请选择','请选择','请选择']
			}
		},
		methods: {
				region_change(e){
					 this.regions = e.detail.value;
					 
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
			}
			.submit-user{
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
