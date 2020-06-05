<template>
	<view class="integral-cart-box">
		<scroll-view scroll-y="true" class="good-list-bg" :style="`height:${scrollH}px`">
			<integral-cart-list :cartList="cartList" @changeCart="changeCart" @choice="choice" />
		</scroll-view>
		<view class="integral-cart-bottom flex align-center">
			<view class="integral-cart-bottom-left flex pl-3">
	
				<label>
					<checkbox  v-if="selection === 1"  :data-id="selection" @click="cartSelect" />
				   <checkbox v-else checked=""  :data-id="selection" @click="cartSelect" />
					<text class="selete-All">全选</text>
				 </label>
				<view>
					<text class="font-m text-pic ml-3">积分: <text class="font-w ml-1">{{integralNumber}}</text></text>
				</view>
			</view>
			<view class="integral-cart-bottom-right text-center animated" hover-class="tada" @click="exchange">
				确认兑换
			</view>
		</view>
	</view>
</template>

<script>
	import integralCartList from '@/components/integralCartComponent/integralCartList.vue';
	
	import {integralChoice,integralSelectionAll,integralCountChecked} from '@/http/integral.js'
	import {mapState,mapActions} from 'vuex';
	export default {
		components: {
			integralCartList
		},
		data() {
			return {
					scrollH:'',
					selection:1
			}
		},
		mounted() {
			let res = uni.getSystemInfoSync();
			this.scrollH = res.windowHeight - uni.upx2px(100);
		},
		onShow(){
			this.userId = uni.getStorageSync('userId');
			if(!this.userId){
				uni.showToast({
					title:'请先登陆',
					icon:'none'
				})
			}
			// 获取积分购物车列表
			this.getIntegralCartList();
			// 获取积分信息
			this.getDTotalIntegral();
			
			// 判断是否全选
			integralCountChecked(this.userId).then(res=>{
				if(res.data.status === 2){
					this.selection = 2;
				}else {
					this.selection = 1;
				}
			})
		},
		methods: {
			...mapActions(['getIntegralCartList','getDTotalIntegral']),
			changeCart(){
				this.getIntegralCartList()
			},
			async choice(option){
				let res = await	integralChoice(option);
				
				if(res.data !== null){
					// 检查是否全选
				let result = await integralCountChecked(this.userId);
					console.log('68:',result)
					if(result.data.status === 2){
							// 如果全部选择了,那么this.selection = 2,全选框会打上勾
						this.selection = 2;
						this.getDTotalIntegral();
						this.getIntegralCartList();
				
					}else if(result.data.status === 0 || result.data.status === 1){
						// 如果没有全选,那么this.selection = 1,全选框不打钩
						this.selection = 1;
						this.getDTotalIntegral();
						this.getIntegralCartList();
					}
					
				}
			},
			cartSelect(e){
				
				let checkId = e.currentTarget.dataset.id;
				integralSelectionAll({userId:this.userId,checkId:checkId}).then(res=>{
				
					if(res.data !== null && res.data.status === 0){
						this.selection === 1? this.selection = 2 : this.selection = 1;
						this.getDTotalIntegral();
						this.getIntegralCartList();
						
					}
				})
			},
			exchange(){
				
			}
		},
		computed:{
			...mapState({
				cartList:state => state.integral.cartList,
				integralNumber:state => state.integral.integralNumber
			})
		}
	}
</script>

<style lang="scss">
	.integral-cart-box {
		background-color: $bg;

		.integral-cart-bottom {
			height: 100upx;
			background-color: #fff;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			.integral-cart-bottom-left{
				flex: 7;
			
				.selete-All{
					font-size: 30upx;
				}
			}
			.integral-cart-bottom-right{
				flex: 3;
				background-color: $btnBg;
				height: 100%;
				line-height: 100upx;
				border-radius: 8upx;
				color: #fff;
				font-size: 34upx;
			}
		}
	}
</style>
