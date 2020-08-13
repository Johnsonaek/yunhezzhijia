<!-- 云合商圈 -->
<template>
	<view>
		<!-- 状态栏 -->
		<view v-if="showHeader" class="status" :style="{ position: headerPosition, top: statusTop, opacity: afterHeaderOpacity }"></view>
		<!-- 顶部导航栏 -->
		<view v-if="showHeader" class="header" :style="{ position: headerPosition, top: headerTop, opacity: afterHeaderOpacity }">
			<view class="top-search">
				<!-- 定位城市 -->
				<view class="addr">
					<navigator url="./tabSubpage/site"><text>广州</text></navigator>
					<u-icon name="arrow-down" class="site" color="#fff"></u-icon>
				</view>
				<!-- 搜索框 -->
				<view class="input-box">
					<navigator url="tabSubpage/search">
						<u-icon name="search" class="search-content" ></u-icon>
						<text>请输入搜索内容</text>
					</navigator>
				</view>
			</view>
			<!-- tabs栏 -->
			<view class="Tabs"><u-tabs bg-color="linear-gradient(45deg,rgba(248,40,64,1),rgba(251,60,118,1))" :list="Tabs" active-color="#fff" inactive-color="#fff" :is-scroll="true" :current="current" @change="change"></u-tabs></view>
		</view>
		<!-- 占位 -->
		<view v-if="showHeader" class="place"></view>
		<!-- 附近 -->
		<view class="nearby">
			<view class="nearby-right">
				附近
				<view class="img"><image src="../../../static/superior/superior2.png"></image></view>
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
					<view class="banner-img">
						<image src="../../../static/index/index30.png"></image>
					</view>
					<view class="snacks-name">
						<view class="name">
							<view>迪士尼(万达店) <text class="redbg">精选</text></view>
							<view class="distance">
								< 500m
							</view>
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
					<view class="banner-img">
						<image src="../../../static/index/index30.png"></image>
					</view>
					<view class="snacks-name">
						<view class="name">
							<view>迪士尼(万达店) <text class="redbg">精选</text></view>
							<view class="distance">
								< 500m
							</view>
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
					<view class="banner-img">
						<image src="../../../static/index/index30.png"></image>
					</view>
					<view class="snacks-name">
						<view class="name">
							<view>迪士尼(万达店) <text class="redbg">精选</text></view>
							<view class="distance">
								< 500m
							</view>
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
			Tabs: ['精选好店', '美食', '电器', '美妆', '生活用品', '女装', '男装', '女靴'],
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
	background: $uni-bgred-color;

	/*  #ifdef  APP-PLUS  */
	top: var(--status-bar-height);
	/*  #endif  */
	.top-search {
		padding: 20upx 20upx;
		display: flex;
	}
	.addr {
		color: #FFFFFF;
		width: 120upx;
		height: 60upx;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		font-size: 28upx;
		.site {
			padding-left: 10upx;
			padding-top: 8upx;
		}
	}
	.input-box {
		width: 100%;
		height: 60upx;
		background-color: #f5f5f5;
		border-radius: 30upx;
		position: relative;
		display: flex;
		align-items: center;
		.search-content {
			padding-left: 130upx;
			padding-right: 10upx;
		}
	}
}
.place {
	width: 100%;
	// background-color: #ffffff;
	background-color: pink;
	height: 180upx;
	/*  #ifdef  APP-PLUS  */
	margin-top: var(--status-bar-height);
	/*  #endif  */
}
// 附近
.nearby{
	margin-top: 24upx;
	background-color: #fff;
	display: flex;
	padding: 26upx 37upx;
	.nearby-right{
		display: flex;
		margin-right: 97upx;
		image{
			margin-left: 8upx;
			margin-top: 14upx;
			display: block;
			width: 12upx;
			height: 12upx;
		}
	}
	
	.nearby-left{
		display: flex;
		
		.erro{
			image{
				margin-left: 6upx;
				display: block;
				width: 12upx;
				height: 12upx;
			}
			.img{
				margin-top: 10upx;
			}
		}
	}
}
.eat {
	background-color: #FFFFFF;
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
