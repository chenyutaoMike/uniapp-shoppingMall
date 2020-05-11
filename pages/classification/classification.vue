<template>
	<!-- <classification /> -->
	<view class="classification">
		<view class="top">
			<input type="text" v-model="classificationSearch" @confirm="submitValue" placeholder="搜索商品名称" class="classification-input">
		</view>
		<!-- 	<view class="center" :style="`height:${scrollH}px`">
			<scroll-view scroll-with-animation scroll-y="true" class="scroll-Y" :style="`height:${scrollH}px`">
				<view :class="activeId === index ? 'scroll-view-item active' : 'scroll-view-item' " v-for="(item,index) in typeList"
				 :key="item.id" @tap="changeTab(index)">{{item.title}}</view>
			</scroll-view>
		</view> -->

		<view class="classificationpage">
			<!-- 左侧导航 -->
			<view class='tui-fixed-left'>
				<scroll-view class='tui-city-scroll' scroll-x="true" scroll-y="true" style='height:92%;' scroll-with-animation="true"
				 @scroll-top="leftMenuTop">
					<view :class="index === currentActiveIndex ? 'menu-item menu-active ' : 'menu-item' " v-for="(item,index) in typeList"
					 :key="index" :data-index="index" :id='index' @tap='changeMenu'>{{item.title}}</view>
				</scroll-view>
			</view>

			<!-- 右侧滚动商品 -->
			<view class='content'>
				<scroll-view class='tui-city-scroll-y' scroll-y="true" style='height:92%;' scroll-with-animation="true" :scroll-top="rightProTop"
				 @scroll="scroll">
					<view class='pro-item' v-for="(item,index) in typeList" :key="index">
						<view class='tui-list-head' :id='`NAV${index}`'>{{item.title}}</view>
						<view class='tui-list-li'>
							<view class='goods-box' @click="goGoodList" :data-id="itemList.id" v-for="(itemList,index) in item.list" :key="index">
								<image class='goodsImg' :src='hostUrl+itemList.img_url'></image>
								<view class='goodsName'>{{itemList.title}}</view>
							</view>
						</view>

					</view>


				</scroll-view>
			</view>

		</view>

	</view>

</template>

<script>
	import {
		hostUrl
	} from '@/http/request.js';
	import {
		getClassification
	} from '@/http/classification.js'
	export default {
		data() {
			return {
				typeList: [],
				hostUrl: hostUrl,
				classificationSearch: '',
				proListToTop: [],
				menuToTop: [],
				MENU: 0,
				windowHeight: 0,
				timeoutId: null,
				currentActiveIndex: 0
			}
		},

		mounted() {

			getClassification().then(res => {
				if (res.data !== null) {
					console.log(res.data)

					this.typeList = res.data;
					this.$nextTick(() => {
						this.getActiveReacts();
						this.getAllRects();
						this.getSystemInfo()
					})
				}

			})
			let res = uni.getSystemInfoSync();
			this.scrollH = res.windowHeight - uni.upx2px(100);


		},
		methods: {
			submitValue() {
				uni.navigateTo({
					url: `/pages/goodList/good-list?searchValue=${this.classificationSearch}`
				})
				this.classificationSearch = '';
			},
			goGoodList(e) {
				let id = e.currentTarget.dataset.id;

				uni.navigateTo({
					url: `/pages/goodList/good-list?typeId=${id}&type=1`
				})
			},
			rightProTop(e) {

			},
			changeMenu(e) {
				// console.log(proListToTop);
				// 改变左侧tab栏操作
				if (Number(e.target.id) === this.currentActiveIndex) return
				this.MENU = 1

				this.currentActiveIndex = Number(e.target.id),
					this.rightProTop = this.proListToTop[Number(e.target.id)]

				this.setMenuAnimation(Number(e.target.id))
			},
			leftMenuTop() {

			},
			scroll(e) {
				for (let i = 0; i < this.proListToTop.length; i++) {
					if (e.detail.scrollTop < this.proListToTop[i] && i !== 0 && e.detail.scrollTop > this.proListToTop[i - 1]) {
						return this.setDis(i)
					}
				}
				// 找不到匹配项，默认显示第一个数据
				if (!this.MENU) {
					this.currentActiveIndex = 0
				}
				this.MENU = 0
			},
			setDis(i) {
				// 设置左侧menu栏的选中状态
				if (i !== this.currentActiveIndex + 1 && !this.MENU) {

					this.currentActiveIndex = i - 1

				}
				this.MENU = 0
				this.setMenuAnimation(i)
			},
			setMenuAnimation(i) {
				// 设置动画，使menu滚动到指定位置。
				let _this = this
				// console.log(33)
				if (_this.menuToTop[i].animate) {
					// console.log(11111)
					// 节流操作
					if (_this.timeoutId) {
						clearTimeout(_this.timeoutId)
					}
					_this.timeoutId = setTimeout(() => {
						// console.log(12138)

						_this.leftMenuTop = (_this.menuToTop[i].top - _this.windowHeight)

					}, 50)
				} else {
					// console.log(11)
					if (_this.leftMenuTop === 0) return
					// console.log(22)

					_this.leftMenuTop = 0

				}
			},
			getActiveReacts() {
				uni.createSelectorQuery().selectAll('.menu-active').boundingClientRect(function(rects) {
					return rects[0].top
				}).exec()
			},
			getAllRects() {
				let _this = this;
				// 获取商品数组的位置信息
				uni.createSelectorQuery().selectAll('.pro-item').boundingClientRect(function(rects) {
					rects.forEach(function(rect) {

						// 这里减去44是根据你的滚动区域距离头部的高度，如果没有高度，可以将其删去
						_this.proListToTop.push(rect.top - 50)
					})
				}).exec()

				// 获取menu数组的位置信息
				uni.createSelectorQuery().selectAll('.menu-item').boundingClientRect(function(rects) {
					uni.getSystemInfo({
						success: function(res) {

							_this.windowHeight = res.windowHeight / 2
							//  console.log(windowHeight)
							rects.forEach(function(rect) {
								// console.log(rect)
								_this.menuToTop.push({
									top: rect.top,
									animate: rect.top > windowHeight

								})
							})
						}
					})
				}).exec()
			},
			// 获取系统的高度信息
			getSystemInfo() {
				let _this = this
				uni.getSystemInfo({
					success: function(res) {
						_this.windowHeight = res.windowHeight / 2
					}
				})
			},
		}


	}
</script>

<style lang="scss">
	.classification {
		.top {
			height: 80upx;
			background-color: #fff;
			padding: 10upx 10upx;
			box-sizing: border-box;

			.classification-input {
				box-sizing: border-box;
				width: 100%;
				height: 100%;
				background-color: #ededed;
				border-radius: 50upx;
				padding-left: 30upx;
			}
		}

		.classificationpage {
			margin-top: 30rpx;
		}

		.tui-fixed-x {
			position: fixed;
			top: 0rpx;
			left: 0;
		}

		.tui-fixed-left {
			width: 180rpx;
			height: 100%;

			position: fixed;
			background-color: #F0F0F0;
			top: 90rpx;
			left: 0;
		}

		.tui-list-head {
			height: 65rpx;
			line-height: 65rpx;
		}

		.tui-city-scroll {
			width: 100%;
		}

		.menu-item {
			display: block;
			position: relative;
			width: 180rpx;
			height: 100rpx;
			line-height: 100rpx;
			font-size: 26rpx;
			/* border-bottom: 1px solid #dfdfdf; */
			box-sizing: border-box;
			background: #F0F0F0;
			z-index: 10;
			text-align: center;
			transition: 0.8s;
			color: #757575;
		}

		.menu-active {
			background-color: #FFFFFF;
			color: #FF0047;
		}

		.menu-active::after {
			content: '';
			display: block;
			width: 30rpx;
			height: 50rpx;
			background-color: #e73a6a;
			position: relative;
			left: 0;
			bottom: 50%;
			transform: translate(-50%, -50%);
			border-top-right-radius: 25%;
			border-bottom-right-radius: 25%;
		}

		.content {
			/* padding: 0 20rpx; */
			position: fixed;
			top: 89rpx;
			right: 0;
			width: 570rpx;
			height: 100%;
			box-sizing: border-box;
		}

		.tui-city-scroll-y {
			height: 100%;
			box-sizing: border-box;
		}

		.tui-list-head {
			margin-left: 20rpx;
			height: 65rpx;
			line-height: 65rpx;
			font-size: 28rpx;

		}

		.pro-item {}

		.tui-list-li {
			padding: 20rpx 0 0 0;
			margin: 0 20rpx 20rpx 20rpx;
			background: #fff;
			overflow: hidden;
			color: #fff;
			font-size: 50rpx;
			box-sizing: border-box;
			/* box-shadow: 1px 3px 5px 5px #ececec; */
			box-shadow: 1px 3px 5px 3px #ccc;

			border-radius: 15rpx;
		}

		.goods-box {
			margin-right: 10rpx;
			float: left;
			width: 170rpx;
			overflow: hidden;
		}

		.tui-list-li .goods-box:nth-child(3n) {
			margin-right: 0rpx;
		}

		.goodsImg {
			margin-bottom: 15rpx;
			display: block;
			width: 100rpx;
			height: 100rpx;
			margin: 0 auto;
		}

		.goodsName {
			margin-bottom: 20rpx;
			width: 100%;
			height: 42rpx;
			line-height: 42rpx;
			overflow: hidden;
			box-sizing: border-box;
			text-align: center;
			font-size: 20rpx;
			text-overflow: ellipsis;
			white-space: nowrap;
			color: #2F2F2F;
		}



		// .center {
		// 	position: absolute;
		// 	left: 0;
		// 	top: 100upx;
		// 	height: 100%;
		// 	background-color: #f0f0f0;
		// 	// width: 220upx;
		// 	width: 30%;

		// 	.scroll-view-item {
		// 		width: 100%;
		// 		height: 125upx;
		// 		background-color: #f0f0f0;

		// 		&.active {
		// 			color: red;
		// 		}
		// 	}
		// }

		// .content {
		// 	width: 70%;
		// 	position: absolute;
		// 	right: 0;
		// 	top: 100upx;

		// 	.right-item {
		// 		padding: 0 20upx;

		// 		.right-title {
		// 			font-size: 36upx;
		// 		}

		// 		.right-box {
		// 			width: 100%;
		// 			height: 100%;
		// 			display: flex;

		// 			.list-box {
		// 				width: 100%;
		// 				display: flex;
		// 				flex-wrap: wrap;
		// 				justify-content: flex-start;
		// 				border-radius: 10upx;
		// 				// border: 1upx solid black;
		// 				box-shadow: 0 0px 3px 3px #ccc;

		// 				.list-item {
		// 					height: 250upx;
		// 					flex: 1;
		// 					display: flex;
		// 					flex-direction: column;
		// 					align-items: center;
		// 					justify-content: center;

		// 					.item-img {
		// 						width: 150upx;
		// 						height: 150upx;
		// 					}
		// 				}

		// 			}
		// 		}
		// 	}
		// }

	}
</style>
