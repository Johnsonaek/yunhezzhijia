<!-- 高佣悬赏 -->
<template>
	<view>
		<!-- 广告图 -->
		<view class="banner"><image src="../../../static/index/topage/high1.png"></image></view>
		<!-- tabs -->
		<view class="bg-all">
			<view class="Tabs">
				<u-tabs class="one" bg-color="#fff" active-color="#222222" inactive-color="#666666" :list="Tabs" :is-scroll="true" :current="current" @change="change"></u-tabs>
			</view>
			<!-- 附近 -->
			<view class="nearby">
				<view class="nearby-right">
					附近
					<image src="../../../static/superior/superior2.png"></image>
				</view>
				<view class="nearby-left">
					红包金
					<view class="erro">
						<view class="img"><image src="../../../static/superior/superior4.png"></image></view>
						<view><image src="../../../static/superior/superior2.png"></image></view>
					</view>
				</view>
			</view>
			<!-- 吃喝玩乐 -->
			<view class="eat">
				<view class="snacks">
					<view class="snacks-all">
						<view class="banner-img"><image src="../../../static/index/index30.png"></image></view>
						<view class="snacks-name">
							<view class="name">
								<view>
									迪士尼 (万达店)
									<text class="redbg">精选</text>
								</view>
								<view class="distance">< 500m</view>
							</view>

							<view class="star">
								<image src="../../../static/index/index34.png"></image>
								<image src="../../../static/index/index34.png"></image>
								<image src="../../../static/index/index34.png"></image>
								<image src="../../../static/index/index35.png"></image>
								<image src="../../../static/index/index33.png"></image>
								<view class="nub">4.0分</view>
							</view>
							<view class="packet">
								<text>最高红包金</text>
								<text class="red">￥8.00</text>
							</view>
							<view class="grayall">
								<text class="gray">黄村</text>
								<text class="gray">月售3035</text>
							</view>
							<view class="footer">
								<text class="golden">味道很好，非常推荐</text>
								<text class="golden">真的很赞!</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 吃喝玩乐 -->
			<view class="eat">
				<view class="snacks">
					<view class="snacks-all">
						<view class="banner-img"><image src="../../../static/index/index30.png"></image></view>
						<view class="snacks-name">
							<view class="name">
								<view>
									迪士尼 (万达店)
									<text class="redbg">精选</text>
								</view>
								<view class="distance">< 500m</view>
							</view>
			
							<view class="star">
								<image src="../../../static/index/index34.png"></image>
								<image src="../../../static/index/index34.png"></image>
								<image src="../../../static/index/index34.png"></image>
								<image src="../../../static/index/index35.png"></image>
								<image src="../../../static/index/index33.png"></image>
								<view class="nub">4.0分</view>
							</view>
							<view class="packet">
								<text>最高红包金</text>
								<text class="red">￥8.00</text>
							</view>
							<view class="grayall">
								<text class="gray">黄村</text>
								<text class="gray">月售3035</text>
							</view>
							<view class="footer">
								<text class="golden">味道很好，非常推荐</text>
								<text class="golden">真的很赞!</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			Tabs: ['精选', '美食', '电器', '美妆', '生活用品', '女装', '男装', '女靴'],
			current: 0
		};
	},
	methods: {
		change(index) {
			this.current = index;
		}
	}
};
</script>

<style lang="scss" scoped>
.banner {
	image {
		display: block;
		width: 750upx;
		height: 610upx;
	}
}
.bg-all {
	background-color: $uni-bghot-color;
}
.Tabs {
	padding: 24upx;
	.one {
		border-radius: 10upx;
	}
}
// 附近
.nearby {
	font-size: 30upx;
	margin: 1px 24upx;
	border-radius: 10upx 10upx 0 0;
	background-color: #ffffff;
	display: flex;
	padding: 26upx 37upx;
	.nearby-right {
		display: flex;
		margin-right: 97upx;
		image {
			margin-left: 8upx;
			margin-top: 14upx;
			display: block;
			width: 12upx;
			height: 12upx;
		}
	}

	.nearby-left {
		display: flex;
		.erro {
			image {
				margin-left: 6upx;
				display: block;
				width: 12upx;
				height: 12upx;
			}
			.img {
				margin-top: 10upx;
			}
		}
	}
}

.eat {
	margin: 0 24upx;
	background-color: #ffffff;
	height: 335upx;
	border-bottom: 1px solid #f3f3f3;
	.distance {
		font-weight: 400;
		margin-left: 60upx;
		font-size: 24upx;
		color: rgba(136, 136, 136, 1);
	}
	.snacks {
		padding: 24upx 24upx;
		height: 287upx;
		.red {
			font-size: 24upx;
			color: #f82840;
		}
		.redbg {
			font-weight: 400;
			margin-left: 13upx;
			color: #f82840;
			font-size: 24upx;
			padding: 8upx;
			background: rgba(255, 245, 237, 1);
			border-radius: 4px;
		}

		.grayall {
			margin: 24upx 0;
			.gray {
				margin-right: 60upx;
				color: #888888;
				font-size: 28upx;
			}
		}

		.packet {
			margin-top: 24upx;
			font-size: 28upx;
			color: #888888;
			text {
				margin-right: 20upx;
			}
		}
		.footer {
			.golden {
				border-radius: 2px;
				padding: 10upx;
				background-color: #fff5ed;
				color: #ff7e23;
			}
			.golden:last-child {
				margin-left: 12upx;
			}
		}
		.snacks-all {
			display: flex;
			.banner-img {
				margin-right: 20upx;
				image {
					display: block;
					border-radius: 10upx;
					width: 190upx;
					height: 190upx;
				}
			}
			.name {
				font-weight: bold;
				display: flex;
				font-size: 30upx;
			}
			.star {
				margin-top: 20upx;
				display: flex;
				image {
					width: 30upx;
					height: 30upx;
				}
				.nub {
					font-size: 24upx;
					font-weight: bold;
					color: #e49741;
					margin-left: 19upx;
				}
			}
		}
	}
}
</style>
