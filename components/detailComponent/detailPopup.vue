<template>
	<view class="detail-popup" @click="clone" @touchmove.stop.prevent="move">
		<view class="detail-popup-desc">
			<view class="detail-popup-box">
				<view class="detail-popup-top flex align-center">
					<view class="popup-top-img mr-2">
						<image :src="hostUrl+info.litpic"></image>
					</view>
					<view class="detail-popup-pic">
						<view>价格:<text class="text-pic">￥{{info.price}}</text></view>
						<view>库存:<text>{{info.stock}}</text></view>
						<view>已选择:<text>{{seleteNumber}}</text></view>
					</view>
					<image @click="clone" class="cloneImg" src="../../static/images/detailImg/gbico.png"></image>
				</view>
				<view class="detail-select" @click.stop>
					<view class="text-secondary my-2 ">选择规格</view>
					<view class="detail-select-item flex" >
						<block v-for="(item,index) in unit_arr" :key="item+index">
							<view class="select-item" :class="index === seleteUnitIndex ? 'selete' : '' " @click="seleteUnit(index)">{{item}}</view>
						</block>
					</view>
				</view>
				<view class="detail-num">
					<view class="text-secondary my-2 ">选择数量</view>
					<view class="num-box flex font-md" >
						<view class="num-decrease text-center" @click.stop="decrease">-</view>
						<input type="num" :value="seleteNumber" class="numipt text-center" disabled />
						<view class="num-add text-center" @click.stop="add">+</view>
					</view>
				</view>

			</view>
				<view class="popup-button" v-if="addCartorBuy === 0" @click.stop="addCart">加入购物车</view>
				<view class="popup-button" v-else @click.stop @click="buy">立即购买</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapActions} from 'vuex';
	import {hostUrl} from '@/http/request.js';
	export default {
		props:{
			addCartorBuy:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				cloneImg: '@/static/images/detailImg/gbico.png',
				hostUrl:hostUrl,
				seleteUnitIndex:0,
				seleteNumber:1
			}
		},
		methods: {
			...mapActions(['getAddCart']),
			addCart(){
				// 验证登陆信息
				let userId = uni.getStorageSync('userId');
				if(!userId){
					uni.showToast({
						title:'请先登陆',
						icon:'none'
					})
					return 
				}
				let {id,unit,stock} = this.info;
				let {seleteNumber,seleteUnitIndex} = this;
				if(seleteNumber > stock){
					uni.showToast({
						title:'选择数量大于库存',
						icon:'none'
					})
					return
				}
				// 加入购物车
				let option = {
					id:id,
					userId:userId,
					quantity:seleteNumber,
					isChecked:1,
					unit:unit.split('/')[seleteUnitIndex]
				}
				this.getAddCart(option);
				this.$emit('clone')
			},
			clone() {
				this.$emit('clone')
			},
			move() {
				return
			},
			seleteUnit(index){
				this.seleteUnitIndex = index;
			},
			add(){
				if(this.seleteNumber > this.info.stock){
					uni.showToast({
						title:'购买数量超过库存',
						icon:'none',
						duration:1500
					})
					return 
				}
				this.seleteNumber = this.seleteNumber+1;
			},
			decrease(){
				if(this.seleteNumber <= 1){
					uni.showToast({
						title:'购买数量不能小于1',
						icon:'none',
						duration:1500
					})
					return 
				}
				this.seleteNumber = this.seleteNumber-1;
			},
			buy(){
				let userId = uni.getStorageSync('userId');
				if(!userId){
					uni.showToast({
						title:'请先登陆',
						icon:'none'
					})
					return 
				}
				let {id,unit,stock} = this.info;
				let {seleteNumber,seleteUnitIndex} = this;
				if(seleteNumber > stock){
					uni.showToast({
						title:'选择数量大于库存',
						icon:'none'
					})
					return
				}
				// 立即购买
				let option = {
					id:id,
					userId:userId,
					quantity:seleteNumber,
					isChecked:2,
					unit:unit.split('/')[seleteUnitIndex]
				}
			
				this.getAddCart(option)
				this.$emit('clone')
			}
		},
		computed:{
			...mapState({
				info:state => state.details.info
			}),
			unit_arr(){
				
				return this.info.unit.split('/')
			}
		}
	}
</script>

<style lang="scss">
	.detail-popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: $popup;
		z-index: 999;

		.detail-popup-desc {
			background-color: #fff;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;

			.detail-popup-box {
				padding: 0 15upx;

				.detail-popup-top {
					position: relative;
					height: 190upx;
					border-bottom: 1upx solid $borderColor;

					.popup-top-img {
						width: 190upx;
						height: 190upx;
						border-radius: 8upx;
						overflow: hidden;
						position: relative;
						top: -20upx;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.cloneImg {
						width: 58upx;
						height: 58upx;

						position: absolute;
						right: 20upx;
						top: -20upx;
						z-index: 9999;

						image {
							width: 100%;
							height: 100%;
						}
					}


				}

				.detail-select {
					width: 100%;

					.detail-select-item {
						.select-item {
							padding: 15upx 25upx;
							border: 1upx solid $borderColor;
							border-radius: 8upx;
							margin-right: 20upx;
							
							&.selete {
										border: 1upx solid $picColor;
										color: $picColor;
							}
						}
					}

				}

				.detail-num {
					.num-box{
						width: 180upx;
						height: 60upx;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-bottom: 30upx;
						.num-decrease{
							flex: 1;
							height: 100%;
							border: 1upx solid $borderColor;
							line-height: 60upx;
							border-top-left-radius: 6upx;
							border-bottom-left-radius: 6upx;
						}
						.numipt{
							height: 100%;
							line-height: 100%;
							flex: 1;
							border-top: 1upx solid $borderColor;
							border-bottom: 1upx solid $borderColor;
						}
						.num-add{
							height: 100%;
							line-height: 60upx;
							flex: 1;
							border: 1upx solid $borderColor;
							border-top-right-radius: 6upx;
							border-bottom-right-radius: 6upx;
						}
					}
				}

			}
			.popup-button{
				height: 100upx;
				width: 100%;
				background-color: $picColor;
				text-align: center;
				line-height: 100upx;
				color: #fff;
			}

		}
	}
</style>
