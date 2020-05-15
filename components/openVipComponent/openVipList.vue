<template>
	<view class="open-vip-list">
		<block v-for="item in vipList" :key="item.Id">
			<view class="vip-list-item" :class="seleteId === item.Id ? 'selete':''" @click="changeSelete(item.Id)">
				<view>会员{{item.Msg}}</view>
				<view class="vip-list-item-pic"> <text class="vip-list-item-num">{{item.Price}}</text>元</view>
				<view class="vip-list-item-bottom">KL优选商城</view>
			</view>
		</block>
	</view>
</template>

<script>

	export default {
		props:{
			vipList:{
				type:Array,
				default:() => {
					return []
				}
			}
		},
		data() {
			return {
			
				seleteId: 0
			}
		},
		
		methods: {
			changeSelete(id){
				this.seleteId = id;
				this.$emit('seleteVip',id)
			}
		}
	}
</script>

<style lang="scss">
	.open-vip-list {
		padding: 30upx;
		display: flex;
		flex-wrap: wrap;

		.vip-list-item {
			box-sizing: border-box;
			margin-bottom: 20upx;
			width: 32%;
			border: 1upx solid #ccc;
			border-radius: 10upx;
			margin-right: 2%;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			padding: 20upx;
			background-color: #F7F7F7;

			&:nth-child(3n) {
				margin-right: 0;
			}

			&.selete {
				background-color: #FFE4E9;
				border-color: #DF5F8E;
			}

			.vip-list-item-pic {
				margin: 20upx 0;
				color: #D3155B;

				.vip-list-item-num {
					font-size: 60upx;
					font-weight: bold;
					margin-right: 5upx;
				}
			}

			.vip-list-item-bottom {
				color: #474747;
			}
		}
	}
</style>
