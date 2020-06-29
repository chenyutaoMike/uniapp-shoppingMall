<template>
	<view class="cart-box">

	<scroll-view scroll-y="true" :style="`height:${scrollH}px`">
			<cart-none v-if="isNone" :youLikeList="youLike" @changeCart="changeCart" />
			<cart-list  v-else :cartList="cartList"  @choice="choice" @changeCart="changeCart" />
	</scroll-view>
	
		<view class="cart-bottom"  >
			<view class="cart-bottom-info">
				<view class="info-left flex  align-center">
					<label>
						<checkbox  v-if="selection === 1" class="ml-4" :data-id="selection" @click="cartSelect" />
					   <checkbox v-else checked="" class="ml-4" :data-id="selection" @click="cartSelect" />
						 全选
					 </label>
					 <view class="flex flex-column ml-2 text-center">
						
						 <text class="pic" >￥{{totalPic}}</text>
						 <text class="text-secondary font-sm">为您节省 ￥{{marketPriceTotal}}</text>
					 </view>
				</view>
				<view class="info-right">
					去结算 ({{quantity}})
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import cartNone from '@/components/cartComponent/cart-none.vue';
	import cartList from '@/components/cartComponent/cart-list.vue';
	import {
		cartChoice,
		selectAll,
		checkCount
	} from '@/http/cart.js';
	import {mapActions,mapState} from 'vuex';
	export default {
		components:{
			cartNone,
			cartList
		},
		data() {
			return {
				scrollH:0,
				selection:1
			}
		},
		mounted() {
			let res = uni.getSystemInfoSync();
			this.scrollH = res.windowHeight - uni.upx2px(100);
		
		},
		onLoad() {
			if(this.cartList.length !== 0){
				this.getCartYouLike()
			}
		},
		onShow(){
			this.userId = uni.getStorageSync('userId');
			if(!this.userId){
				uni.showToast({
					title:'请先登陆',
					icon:'none'
				})
			}
			// 56是userId
			this.getCartListAry(this.userId);
			this.getCartTotalPic(this.userId);
			// 判断是否全选
			checkCount(this.userId).then(res=>{
				
				if(res.data.status === 2){
					this.selection = 2;
				}else {
					this.selection = 1;
				}
			})
		},
		methods: {
			...mapActions(['getCartListAry','getCartTotalPic','getCartYouLike']),
			changeCart(){
				
				this.getCartListAry(this.userId);
				this.getCartTotalPic(this.userId);
			},
			async choice(option){  //单选
					let res = await	cartChoice(option);
					if(res.data !== null){
						// 检查是否全选
					let result = await checkCount(this.userId);
						
						if(result.data.status === 2){
								// 如果全部选择了,那么this.selection = 2,全选框会打上勾
							this.selection = 2;
							this.getCartTotalPic(this.userId);
							this.getCartListAry(this.userId)
					
						}else if(result.data.status === 0 || result.data.status === 1){
							// 如果没有全选,那么this.selection = 1,全选框不打钩
							this.selection = 1;
							this.getCartTotalPic(this.userId);
							this.getCartListAry(this.userId)
						}
						
					}
			
			},
			cartSelect(e){   //全选
			
				let checkId = e.currentTarget.dataset.id;
				selectAll({userId:this.userId,checkId:checkId}).then(res=>{
					if(res.data !== null && res.data.status === 0){
						this.selection === 1? this.selection = 2 : this.selection = 1;
						this.getCartTotalPic(this.userId);
						this.getCartListAry(this.userId);
						
					}
				})
			}
		},
		computed:{
			...mapState({
				cartList:state => state.cart.cartList,
				totalPic:state => state.cart.totalPic,
				marketPriceTotal:state => state.cart.marketPriceTotal,
				quantity:state => state.cart.quantity,
				youLike:state => state.cart.youLike,
			}),
			isNone(){
				// 判断购物车是否有商品,如果有商品就显示购物车,如果没有就显示猜你喜欢列表
				return this.cartList.length >= 1 ? false : true
			}
		}
	}
</script>

<style lang="scss">
	.cart-box {
		background-color: $cartBg;
		.cart-bottom {
			background-color: #fff;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			height: 100upx;
			.cart-bottom-info{
				height: 100%;
				display: flex;
				.info-left{
					flex: 7;
					line-height: 100upx;
					
				
				}
				.pic{
					color: $btnBg;
					font-size: 36upx;
				}
				.info-right{
					flex: 3;
					background-color: $btnBg;
					text-align: center;
					line-height: 100upx;
					color: #fff;
					counter-reset: 34upx;
				}
			}
		}
	}
</style>
