<template>
	<view class="integral-box">
		  <intagral-header @openPopup="openPopup"/>
			<view class="integral-tab flex align-center">
				<block v-for="item in tabList" :key="item.id">
					<view 
					class="integral-tab-item flex-1 flex  align-center justify-center"
					:class="item.id === seleteId ? 'selete':''"
					@click="changeTab(item.id)"
					>{{item.value}}</view>
				</block>
			</view>
			<integral-list v-if="seleteId === 0"/>
			<integral-list v-if="seleteId === 1"/>
			<popup :isShow="isShow" @clone="changePopup"/>
	</view>
</template>

<script>
	import intagralHeader from '@/components/integralComponent/integralHeader.vue';
	import integralList from '@/components/integralComponent/integralList.vue';
	import popup from '@/components/popup.vue';
	const tab = [
		{id:0,value:'获取'},
		{id:1,value:'使用'}
	]
	export default {
		components:{
			intagralHeader,
			integralList,
			popup
		},
		data() {
			return {
				tabList:[],
				seleteId:0,
				isShow:false
			}
		},
		created(){
			this.tabList = tab;
		},
		methods: {
			changeTab(id){
				this.seleteId = id;
			},
			changePopup(){
				this.isShow = false;
			},
			openPopup(){
				this.isShow = true;
			}
		}
	}
</script>

<style lang="scss">
	$integralColor:#C5C5C5;
	$seleteColor:#C02316;
.integral-box{
	.integral-tab{
		height: 100upx;
		.integral-tab-item{
			color: #727272;
			height: 100%;
			border-bottom: 1upx solid $integralColor;
			&.selete{
				color: $seleteColor;
				border-color: $seleteColor;
			}
		}
	}
}
</style>
