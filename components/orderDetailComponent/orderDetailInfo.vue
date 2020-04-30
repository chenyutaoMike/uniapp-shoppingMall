<template>
	<view class="order-detail-info">
		<view class="order-detail-orderNumber flex flex-column justify-center">
			<text>订 单 号:12123123123123123</text>
			<text>订单状态:代付款</text>
		</view>
		<view class="wall"></view>
		<view class="order-detail-orderNumber flex flex-column justify-center">
			<text>收 货 人:张伟</text>
			<text>收货地址:广东省广州市天河区龙洞街道东大街75号</text>
		</view>
		<view class="wall"></view>
		<view class="order-detail-shopInfo">
			<view class="order-detail-shopInfo-left flex align-center">
					<image src="https://www.baquwangluo.cn/admin/editor/Upload/image/20191107/20191107183128_8627.jpg"></image>
					<view class="shopInfo-left-title flex flex-column">
						<text class="text-ellipsis">商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题</text>
						<text>规格: 盒</text>
						<text>数量</text>
					</view>
			</view>
			<view class="order-detail-shopInfo-right flex flex-column">
				<text class="text-pic font-m">￥49.9</text>
				<text class="text-del font-sm text-muted">￥69.9</text>
				<text>x1</text>
			</view>
		</view>
		<view class="wall"></view>
		<view class="order-detail-picInfo flex justify-between text-muted font-m">
			<view class="flex flex-column">
				<text>商品金额</text>
				<text>运费</text>
				<text>优惠金额</text>
				<text class="text-pic">实付款</text>
				<text>支付方式</text>
			</view>
			<view class="flex flex-column text-right">
				<text>￥49.9</text>
				<text>+￥0</text>
				<text>-￥0</text>
				<text class="text-pic">￥49.9</text>
				<text>微信支付</text>
			</view>
		</view>
		<view class="wall"></view>
		<view class="flex justify-between px-2 align-center height-1">
			<text>提交时间</text>
			<text>2020/4/30 11:55:30</text>
		</view>
		<view class="wall"></view>
		<view class="order-detail-bottom">
			<view class="order-detail-button">立即支付</view>
			<view class="order-detail-button">取消订单</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.order-detail-info{
		.order-detail-orderNumber{
			height: 120upx;
			padding-left: 20upx;
		}
		.order-detail-shopInfo{
			display: flex;
			padding: 20upx;
			justify-content: space-between;
			align-items: center;
	
			.order-detail-shopInfo-left{
				
				image{
					height: 130upx;
					width: 130upx;
					margin-right: 20upx;
				}
				.shopInfo-left-title{
					max-width: 420upx;
				}
			}
			.order-detail-shopInfo-right{
				text-align: right;
				
			}
		}
		.order-detail-picInfo{
			padding: 20upx;
		}
		.order-detail-bottom{
		height: 100upx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.order-detail-button{
			background-color: #FF0080;
			height: 65upx;
			width: 40%;
			text-align: center;
			line-height: 65upx;
			border-radius: 12upx;
			color: #fff;
		}
	
		}
	}
</style>
