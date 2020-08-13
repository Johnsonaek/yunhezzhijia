<!-- 商店详情 -->
<!-- 云合商圈 -->
<template>
	<view>
		<!-- 状态栏 -->
		<view v-if="showHeader" class="status" :style="{ position: headerPosition, top: statusTop, opacity: afterHeaderOpacity }"></view>
		<!-- 顶部导航栏 -->
		<view v-if="showHeader" class="header" :style="{ position: headerPosition, top: headerTop, opacity: afterHeaderOpacity }">
			<view><image src="../../static/superior/superior9.png"></image></view>

			<view class="top-right">
				<image src="../../static/superior/superior6.png"></image>
				<image src="../../static/superior/superior7.png"></image>
			</view>
		</view>
		<!-- 占位 -->
		<view v-if="showHeader" class="place"></view>
		<!-- 吃喝玩乐 -->
		<view class="eat">
			<view class="snacks">
				<view class="snacks-all">
					<view class="banner-img"><image src="../../static/index/index30.png"></image></view>
					<view class="snacks-name">
						<view class="name">
							<view>
								迪士尼(万达店)
								<text class="redbg">精选</text>
							</view>
							<view class="distance"><!-- < 500m --></view>
						</view>
						<view class="star">
							<image src="../../static/index/index34.png"></image>
							<image src="../../static/index/index34.png"></image>
							<image src="../../static/index/index34.png"></image>
							<image src="../../static/index/index35.png"></image>
							<image src="../../static/index/index33.png"></image>
							<view class="nub">4.0分</view>
						</view>
						<view class="grayall">
							<text class="gray">黄村</text>
							<text class="gray">月售3035</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 位置 -->
		<view class="seat">
			<view class="seat-left">
				<view>天河区中山大道110号112/113档</view>
				<view style="font-size: 24upx; color: #999; margin: 18upx 0;">距离您的位置560m</view>
				<view>营业中 9:00:22:00</view>
			</view>
			<view class="seat-right">
				<view style="margin-left: 26upx;"><image src="../../static/superior/superior8.png"></image></view>
				联系商家
			</view>
		</view>
		<!-- tabs栏 -->
		<view class="Tabs">
			<u-tabs bg-color="#fff" active-color="#F82840" inactive-color="#222222" :list="Tabs" :is-scroll="true" :current="current" @change="change"></u-tabs>
		</view>
		<view class="snack" v-if="current == 0">
			<view class="snacks">
				<view class="snacks-all">
					<navigator url="./mercha-details">
						<view class="banner-img"><image src="../../static/index/index31.png"></image></view>
					</navigator>
					<view class="snacks-name">
						<navigator url="./mercha-details">
							<view class="name">翅桶</view>
							<view class="star">香辣鸡翅4块+新奥尔良鸡翅4块</view>
						</navigator>
						<view class="grayall">
							<navigator url="./mercha-details">
								<view class="grayall-left">
									<text class="gray">月售3035</text>
									<text class="gray">好评率96%</text>
								</view>
								<view class="footer">
									<view class="footer-left">
										<text>返佣￥8</text>
										<text>分享赚￥8</text>
									</view>
								</view>
							</navigator>
							<view class="grayall-right">
								<text class="red">
									￥
									<text style="font-weight: bold; font-size: 28upx;">2.8</text>
								</text>
								<text>/一份</text>
								<navigator url="./order"><view class="footer-right">抢购</view></navigator>
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
			showHeader: true,
			afterHeaderOpacity: 1, //不透明度
			headerPosition: 'fixed',
			headerTop: null,
			statusTop: null,
			nVueTitle: null,
			Tabs: ['套餐', '单品'],
			current: 0
		};
	},
	onPageScroll(e) {
		//兼容iOS端下拉时顶部漂移
		this.headerPosition = e.scrollTop >= 0 ? 'fixed' : 'absolute';
		this.headerTop = e.scrollTop >= 0 ? null : 0;
		this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
	},
	methods: {
		change(index) {
			this.current = index;
			console.log(index);
		}
	}
};
</script>
<style lang="scss">
page {
	position: relative;
	background-color: #f3f3f3;
}
.status {
	width: 100%;
	height: 0;
	position: fixed;
	z-index: 10;
	background-color: #fff;
	background-color: pink;
	top: 0;
	/*  #ifdef  APP-PLUS  */
	height: var(--status-bar-height); //覆盖样式
	/*  #endif  */
}
.header {
	width: 100%;
	height: 100upx;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 10;
	background-color: #fff;

	/*  #ifdef  APP-PLUS  */
	top: var(--status-bar-height);
	/*  #endif  */
	display: flex;
	padding: 0 24upx;
	justify-content: space-between;
	image {
		width: 34upx;
		height: 34upx;
	}
	.top-right {
		image:last-child {
			margin-left: 40upx;
		}
	}
}
.place {
	width: 100%;
	background-color: #ffffff;
	height: 76upx;
	/*  #ifdef  APP-PLUS  */
	margin-top: var(--status-bar-height);
	/*  #endif  */
}
// 店名
.eat {
	padding: 0upx 24upx;
	background-color: #ffffff;
	.distance {
		margin-left: 140upx;
		font-size: 24upx;
		color: rgba(136, 136, 136, 1);
	}
	.snacks {
		padding: 24upx 0upx;
		border-bottom: 1px solid #f3f3f3;
		.red {
			font-size: 24upx;
			color: #f82840;
		}
		.redbg {
			margin-left: 10upx;
			color: #f82840;
			font-size: 20upx;
			padding: 10upx;
			background: rgba(255, 245, 237, 1);
			border-radius: 2px;
		}
		.grayall {
			padding-top: 40upx;

			.grayall-left {
			}
			.gray {
				margin-right: 60upx;
				color: #888888;
				font-size: 24upx;
			}
		}
		.snacks-all {
			display: flex;
			.banner-img {
				margin-top: 10upx;
				margin-right: 16upx;
				image {
					border-radius: 10upx;
					width: 150upx;
					height: 150upx;
				}
			}
			.name {
				display: flex;
				justify-content: space-between;
			}
			.star {
				padding-top: 10upx;
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

// 位置
.seat {
	background-color: #ffffff;
	font-size: 28upx;
	padding: 24upx 24upx;
	margin-bottom: 24upx;
	display: flex;
	justify-content: space-between;
	.seat-left {
	}
	.seat-right {
		image {
			width: 48upx;
			height: 48upx;
		}
	}
}

// 店铺商品
.snack {
	padding: 0upx 24upx;
	background-color: #ffffff;
	.distance {
		margin-left: 140upx;
		font-size: 24upx;
		color: rgba(136, 136, 136, 1);
	}
	.name {
		font-size: 30upx;
	}
	.footer-right {
		margin-top: 20upx;
		width: 136upx;
		height: 51upx;
		color: #ffffff;
		line-height: 51upx;
		text-align: center;
		background: rgba(250, 93, 93, 1);
		border-radius: 26upx;
	}
	.snacks {
		padding: 24upx 0upx;
		border-bottom: 1px solid #f3f3f3;
		.red {
			font-size: 24upx;
			color: #f82840;
		}
		.redbg {
			margin-left: 10upx;
			color: #f82840;
			font-size: 20upx;
			padding: 10upx;
			background: rgba(255, 245, 237, 1);
			border-radius: 2px;
		}

		.grayall {
			font-size: 28upx;
			display: flex;
			.gray {
				margin-right: 40upx;
				color: #888888;
			}
			.grayall-right {
				margin-bottom: 20upx;
			}
		}
		.snacks-all {
			display: flex;
			.banner-img {
				margin-top: 10upx;
				margin-right: 16upx;
				image {
					border-radius: 10upx;
					width: 200upx;
					height: 200upx;
				}
			}
			.star {
				color: #999999;
				margin: 12upx 0;
			}
		}
		.footer {
			margin-top: 20upx;
			display: flex;
			font-size: 24upx;
			.footer-left {
				margin-top: 10upx;
				color: #f9384c;
				text {
					padding: 8upx;
					border-radius: 10upx;
					background-color: #ffd2d2;
				}
				text:last-child {
					margin-left: 47upx;
				}
			}
		}
	}
}
</style>
