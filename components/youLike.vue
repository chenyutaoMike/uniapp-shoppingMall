<template>
	<view class="like">
		<view class="like-title  bg-success ">
			-_猜你喜欢_-
		</view>
		<ul class="like-list flex flex-wrap justify-between">
			<li class="like-item">
				<img class="like-img" src="https://www.baquwangluo.cn/admin/editor/Upload/image/20191104/20191104170125_9514.png"
				 alt="">
				<view class="item-name">
					【干唇救星，养出诱人嘟嘟唇】泰国treechada玫瑰精油睡眠唇膜
					国treechada玫瑰精油睡眠唇膜
					国treechada玫瑰精油睡眠唇膜
				</view>
				<view class="like-pic">
					<text class="new-pic">￥88.00</text>
					<text class="old-pic">￥128.00</text>
				</view>
			</li>
			<li class="like-item">
				<img class="like-img" src="https://www.baquwangluo.cn/admin/editor/Upload/image/20191104/20191104170125_9514.png"
				 alt="">
				<view class="item-name">
					【干唇救星，养出诱人嘟嘟唇】泰国treechada玫瑰精油睡眠唇膜
				</view>
				<view class="like-pic">
					<text class="new-pic">￥88.00</text>
					<text class="old-pic">￥128.00</text>
				</view>
			</li>
			<li class="like-item">
				<img class="like-img" src="https://www.baquwangluo.cn/admin/editor/Upload/image/20191104/20191104170125_9514.png"
				 alt="">
				<view class="item-name">
					【干唇救星，养出诱人嘟嘟唇】泰国treechada玫瑰精油睡眠唇膜
				</view>
				<view class="like-pic">
					<text class="new-pic">￥88.00</text>
					<text class="old-pic">￥128.00</text>
				</view>
			</li>
			<li class="like-item">
				<img class="like-img" src="https://www.baquwangluo.cn/admin/editor/Upload/image/20191104/20191104170125_9514.png"
				 alt="">
				<view class="item-name">
					【干唇救星，养出诱人嘟嘟唇】泰国treechada玫瑰精油睡眠唇膜
				</view>
				<view class="like-pic">
					<text class="new-pic">￥88.00</text>
					<text class="old-pic">￥128.00</text>
				</view>
			</li>
		</ul>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.like {
		background-color: $bg;
		width: 100%;

		.like-title {
			width: 100%;
			height: 140upx;
			text-align: center;
			line-height: 140upx;
			background-color: $bg;
		}

		.like-list {
			width: 95%;
			margin: 0 auto;
			padding-bottom: 10upx;
			.like-item {
				background-color: #fff;
				// height: 475upx;
				width: 49%;
				margin-bottom: 20upx;
				border-radius: 10upx;
				overflow: hidden;
				&:nth-child(2n) {
					margin-right: 0;
				}

				.like-img {
					height: 345upx;
					width: 100%;
				}

				.item-name {
					height: 100upx;
					padding: 0 10upx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				.like-pic{
					padding: 0 10upx;
					.new-pic{
						font-size: 32upx;
						color: #ff005a;
					}
					.old-pic{
						margin-left: 20upx;
						font-size: 26upx;
						color: #2d2d2d;
						text-decoration: line-through;
					}
				}
			}
		}
	}
</style>
