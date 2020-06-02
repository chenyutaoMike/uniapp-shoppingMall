<template>
	<view>
		<view class="integral-list" v-if="list.length > 1">
			<view class="integral-list-item flex justify-between align-center" v-for="item in list" :key="item.id">
				<view class="flex flex-column">
					<text class="font-m">{{list.methods === 'get'? '购买商品':'兑换'}}{{item.title}}</text>
					<text class="font-sm text-light-muted">{{item.updateTime}}</text>
				</view>
				<text class="font-m text-pic">{{list.methods === 'get'? '+':'-'}}{{item.integral_sum}}</text>
			</view>
		</view>
		<view class="mt-2 font-m text-light-muted text-center" v-else>暂无积分信息</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default:()=>{
					return []
				}
			}
		},
		
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="scss">
	.integral-list {
		padding: 0 30upx;

		.integral-list-item {
			height: 100upx;
			border-bottom: 1upx solid #F3F3F3;
		}
	}
</style>
