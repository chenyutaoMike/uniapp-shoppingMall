<template>
	<view class="order-tab flex align-center justify-center">
		<view 
		v-for="item in tabList" 
		:key="item.id" 
		class="flex-1 flex align-center justify-center order-tab-item  "
		:class="seleteItem === item.id ? 'selete':''"
		@click="changeTab(item.id)"
		>
			{{item.value}}
		</view>
	</view>
</template>

<script>
	const tab = [
		{id:0,value:'全部'},
		{id:1,value:'代付款'},
		{id:2,value:'待发货'},
		{id:3,value:'待收货'},
		{id:4,value:'已取消'},
		{id:5,value:'已完成'}
	]
	export default {
		data(){
			return {
				tabList:[],
				seleteItem:0
			}
		},
		created(){
			this.tabList = tab;
		},
		methods:{
			changeTab(id){
				this.seleteItem = id;
				this.$emit('changeTab',id)
			}
		}
	}
</script>

<style lang="scss">
	.order-tab{
		height: 80upx;
		.order-tab-item{
			height: 80upx;
			&.selete {
				color: #CD4744;
				border-bottom: 1upx solid #CD4744;
			}
		}
	}
</style>
