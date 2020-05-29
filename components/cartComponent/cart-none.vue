<template>
	<view class="cart-none">
		<image class="cart-none-img" :src="imgUrl" alt="" />
		<view class="cart-none-bottom text-center ">
			<text class="font-md text-secondary">购物车空空如也</text>
				<view class="cart-none-btn text-center mg0-auto" @click="goGoodList">
				去逛逛
					</view>
		</view>
	<youLike v-if="userId" :list='youLikeList' @addCart="addCart" />
	</view>
</template>

<script>
	import youLike from '@/components/youLike.vue';
	import {mapActions} from 'vuex';
	export default {
		props:{
			isNone:Boolean,
			youLikeList:{
				type:Array,
				default:()=>{
					return []
				}
			}
		},
		components:{
			youLike
		},
		data(){
			return {
				imgUrl:'/static/images/cartImg/shopCart.png'
			}
		},
		created() {
			this.userId = uni.getStorageSync('userId');
			
		},
		mounted() {
			console.log(this.isNone)
		},
		methods:{
				...mapActions(['getAddCart']),
			goGoodList(){
				uni.navigateTo({
					url:'/pages/goodList/good-list'
				})
			},
			addCart(detail){
				// 验证登陆信息
					let userId = uni.getStorageSync('userId');
					if(!userId){
						uni.showToast({
							title:'请先登陆',
							icon:'none'
						})
						return 
					}
					let seleteNumber = 1;
					let seleteUnitIndex = 0;
					if(seleteNumber > detail.stock){
						uni.showToast({
							title:'库存不足',
							icon:'none'
						})
						return
					}
					// 加入购物车
					let option = {
						id:detail.id,
						userId:userId,
						quantity:seleteNumber,
						isChecked:1,
						unit:detail.unit.split('/')[seleteUnitIndex]
					}
					this.getAddCart(option);
					this.$emit('changeCart')
			}
		},
	
	}
</script>

<style lang="scss">
	.cart-none{
		background-color: #f2f2f2;
		.cart-none-img{
			width: 100%;
			height: 400upx;
		}
			.cart-none-bottom{

					.cart-none-btn{
						width: 250upx;
						height: 60upx;
						border: 1upx solid $btnBg;
						color: $btnBg;
						line-height: 60upx;
						border-radius: 8upx;
						margin: 40upx  auto 0;
					}
			}
		
	}
</style>
