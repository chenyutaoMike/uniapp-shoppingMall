<template>
	<view class="detail-box">
		<detail-top></detail-top>
		<detail-rich-text />
		<view class="detail-bottom fixed-bottom flex justify-between align-center px-3">
			<view class="detail-bottom-left">
				<view class="detail-pic">￥39</view>
				<view class="detail-oldPic">为您节省￥39</view>
			</view>
			<view class="detail-bottom-right">
				<view class="buy-button flex">
					<view class="buy bottom-btn" @click="addCart">加入购物车</view>
					<view class="add-cart bottom-btn" @click="buy">立即购买</view>
				</view>
			</view>
		</view>
		<detail-popup v-if="isShow" @clone="clone" :addCartorBuy="addCartorBuy"/>
	</view>
</template>

<script>
	import detailTop from '@/components/detailComponent/detailTop.vue';
	import detailRichText from '@/components/detailComponent/detailRichText.vue';
	import detailPopup from '@/components/detailComponent/detailPopup.vue';
	import {mapActions} from 'vuex';
	
	export default {
		components:{
			detailTop,
			detailRichText,
			detailPopup
		},
		data() {
			return {
				isShow:false,
				addCartorBuy:0,     //0代表加入购物车,1代表购买
			}
		},
		onLoad(option){
			const id = option.id;
			console.log(id)
			this.getImages(id);
			this.getDetailInfo(id)
		},
		methods: {
			...mapActions(['getImages','getDetailInfo']),
			clone(){
				this.isShow = false;
			},
			addCart(){
				this.isShow = true;
				this.addCartorBuy = 0;
			},
			buy(){
				this.isShow = true;
				this.addCartorBuy = 1;
			}
		}
	}
</script>

<style lang="scss">
	.detail-box{
		padding-bottom: 100upx;
		.detail-bottom{
			height: 100upx;
			background-color: #fff;
			.detail-bottom-left{
				.detail-pic{
					color: $picColor;
					font-size: 36upx;
				
				}
				.detail-oldPic{
					color: $delColor;
					font-size: 26upx;
				}
				
			}
			.detail-bottom-right{
				color: #fff;
				.bottom-btn{
					height: 80upx;
					line-height: 80upx;
					padding: 0 40upx;
					border: 1upx solid $picColor;
				}
				.buy{
					border-top-left-radius: 50upx;
					border-bottom-left-radius: 50upx;
					color: $picColor;
				}
				.add-cart{
					border-top-right-radius: 50upx;
					border-bottom-right-radius: 50upx;
					background-color: $picColor;
				}
			}
		}
	}

</style>
