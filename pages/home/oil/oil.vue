<template>
	<page title="加油7折起">
		<view class="content">
			<view>
				<!-- 距离过远弹出框 -->
				<uni-popup ref="popup" class="pop_tc">
					<view class="dialogicon">!</view>
					<view class="warningone">您当前位置不在该油站内!</view>
					<view class="warningtwo">您当前位置距离油站过远，请在油站内进行支付</view>
					<view class="dialoginfo">
						<image :src="dialogObj.img" class="dialogimg"></image>
						<view class="dialogname">品牌优选-{{ dialogObj.name }}</view>
					</view>
					<view class="btn" @click="closePop">知道了</view>
				</uni-popup>
				<page title="一键加油">
					<view :class="{ top: active == 0 }">
						<view class="dingwei" v-if="active == 0">
							<image src="../../../static/home/jiayou/dingwei.png"></image>
							{{ LocateTheAddress }}
							<view>></view>
						</view>
						<ms-tabs :list="list2" v-model="active" lineColor="#F82840" itemColor="#F82840"></ms-tabs>
					</view>

					<view class="jycontent" v-if="active == 0">
						<view class="jiayoutop">
							<view class="topleft">
								<view class="number">{{ oliRadio == '' ? '92#' : oliRadio }}</view>
								<span class="el-dropdown-link">
									<image src="../../../static/home/jiayou/jx.png" :class="{ oli_transform: qiyouListShow }" @click="oilChange"></image>
								</span>
							</view>

							<view class="topright">
								<view class="fanshi">{{ fanshiList[fanshiRadio].name }}</view>
								<span class="el-dropdown-link">
									<image src="../../../static/home/jiayou/jx.png" :class="{ fanshi_transform: fanshitrue }" @click="fanshiChange"></image>
								</span>
							</view>
						</view>

						<scroll-view @scroll="scroll" :scroll-y="false">
							<view
								v-for="(item, index) in loadgasStation"
								class="infinite-list-item"
								:key="item.id"
								@click="gotoGasStation(item.range, item.gasId, item.gasName, item.gasLogoSmall)"
								v-if="!qiyouListShow && !fanshitrue"
							>
								<view class="jiayouitem">
									<view class="gasStation_positioning_top">
										<view class="gasStation_name">{{ item.gasName }}</view>
										<image src="../../../static/home/jiayou/dbx.png"></image>
									</view>
									<view class="gasStation_positioning_center">
										<view class="address">
											<image src="../../../static/home/jiayou/hdingwei.png"></image>
											<view class="address_name">{{ item.gasAddress }}</view>
										</view>
										<view class="distance">{{ (item.range / 1000).toFixed(2) }}km</view>
									</view>
									<view class="gasStation_positioning_bottom">
										<view class="icon">￥</view>
										<view class="price_number">{{ item.priceYfq }}</view>
										<view class="falling_icon">以降￥{{ '0' + (item.priceGun - item.priceYfq).toFixed(2) }}</view>
										<del class="del_price">国际价￥{{ item.priceOfficial }}</del>
									</view>
								</view>
							</view>
						</scroll-view>

						<view class="oilChooseList" v-if="qiyouListShow">
							<view class="qiyou">
								<view class="title">汽油</view>
								<view class="qiyoulist">
									<view
										:class="{ chaiyou_item: true, item: true, choose: item + '#' == oliRadio || item == oliRadio }"
										v-for="(item, index) in qiyouList"
										:key="index"
										@click="olichoose(item, index)"
									>
										{{ item }}#
									</view>
								</view>
							</view>
							<view class="chaiyou">
								<view class="title">柴油</view>
								<view class="chaiyoulist">
									<view
										:class="{ chaiyou_item: true, item: true, choose: item + '#' == oliRadio || item == oliRadio }"
										v-for="(item, index) in chaiyouList"
										:key="index"
										@click="olichoose(item, index)"
									>
										{{ item }}#
									</view>
								</view>
							</view>
							<view class="trqi">
								<view class="title">天然气</view>
								<view class="trqilist">
									<view
										:class="{ chaiyou_item: true, item: true, choose: item + '#' == oliRadio || item == oliRadio }"
										v-for="(item, index) in trqiList"
										:key="index"
										@click="olichoose(item, index)"
									>
										{{ item }}
									</view>
								</view>
							</view>
						</view>

						<view class="fanshiList" v-if="fanshitrue">
							<view :class="{ fanshi_item: true, choose: index == fanshiRadio }" v-for="(item, index) in fanshiList" :key="index" @click="fanshichoose(index)">
								{{ item.name }}
							</view>
						</view>

						<p v-if="loading" class="loading">加载中...</p>
						<p v-if="noMore" class="nomore">没有更多了</p>
					</view>

					<view class="mycontent" v-if="active == 1">
						<view class="user">
							<image src="../../../static/home/jiayou/tx.jpg"></image>
							<view class="user_info">
								<view class="iphone">188*****1888</view>
								<view class="kaiche">已认证专快车/顺风车</view>
							</view>
						</view>
						<view class="feature_list">
							<view class="feature_item">
								<view class="feature_item_left">
									<image src="../../../static/home/jiayou/yhj.png"></image>
									<view>优惠卷</view>
								</view>
								<view class="feature_item_right">
									<view>0张</view>
									<image src="../../../static/home/jiayou/left.png"></image>
								</view>
							</view>
							<view class="feature_item">
								<view class="feature_item_left">
									<image src="../../../static/home/jiayou/dingd.png"></image>
									<view>加油订单</view>
								</view>
								<view class="feature_item_right"><image src="../../../static/home/jiayou/left.png"></image></view>
							</view>
							<view class="feature_item">
								<view class="feature_item_left">
									<image src="../../../static/home/jiayou/help.png"></image>
									<view>帮助中心</view>
								</view>
								<view class="feature_item_right"><image src="../../../static/home/jiayou/left.png"></image></view>
							</view>
							<view class="feature_item">
								<view class="feature_item_left">
									<image src="../../../static/home/jiayou/kf.png"></image>
									<view>客服中心</view>
								</view>
								<view class="feature_item_right"><image src="../../../static/home/jiayou/left.png"></image></view>
							</view>
						</view>
					</view>
				</page>
			</view>
		</view>
	</page>
</template>

<script>
import { uniPopup } from '@dcloudio/uni-ui';
import amap from '../../../common/amap-wx.js';
export default {
	components: {
		uniPopup
	},
	data() {
		return {
			list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			longitude: Number,
			latitude: Number,
			list2: [
				{
					title: '加油'
				},
				{
					title: '我的'
				}
			],
			active: 0,
			fanshitrue: false,
			qiyouList: [90, 92, 95, 98, 101],
			chaiyouList: [-40, -35, -30, -20, -20, -10, 0],
			trqiList: ['CNG', 'LNG'],
			oliRadio: '92#',
			chooseindex: Number,
			qiyouListShow: false,
			fanshiList: [
				{
					name: '智能排序',
					code: 1
				},
				{
					name: '距离优先',
					code: 1
				},
				{
					name: '价格优先',
					code: 2
				}
			],
			fanshiRadio: 0,
			gasStation: [],
			count: 9,
			loadgasStation: [],
			loading: false,
			LocateTheAddress: uni.getStorageSync('LocateTheAddress'),
			dialogTableVisible: false,
			dialogObj: {
				name: '',
				img: ''
			}
		};
	},
	onPageScroll(e) {
		console.log(123123);
	},
	computed: {
		noMore() {
			return this.loadgasStation.length >= this.gasStation.length;
		},
		disabled() {
			return this.loading || this.noMore;
		}
	},
	onLoad() {
		uni.getLocation({
			//没有特别说明的都是固定写法
			type: 'wgs84',
			success: function(res) {
				var locationString = res.latitude + ',' + res.longitude;
				this.longitude = res.longitude;
				this.latitude = res.latitude;
				wx.request({
					url: 'http://apis.map.qq.com/ws/geocoder/v1/',
					data: {
						key: 'S7SBZ-BLEK3-AUM3J-3NJ2M-2LO66-5PBLD',
						location: locationString
					},
					method: 'GET',
					success: function(r) {
						//输出一下位置信息
						// this.LocateTheAddress = r.data.result.address
						uni.setStorageSync('LocateTheAddress', r.data.result.address);
					}
				});
			}
		});
		this.getOliMessage();
	},
	methods: {
		scroll(e) {
			console.log(e.detail.scrollTop);
		},
		onPullDown(done) {
			setTimeout(() => {
				this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
				done();
			}, 1000 * 3);
		},
		onLoadMore(e) {
			setTimeout(() => {
				let len = this.list.length;
				for (let i = 1; i <= 10; i++) {
					this.list.push(len + i);
				}
				e.done();
			}, 1000 * 1);
		},
		onSuccess(list) {
			this.list = list;
		},
		closePop() {
			this.$refs.popup.close();
		},
		gotoGasStation(range, id, name, img) {
			if (range > 2000) {
				this.$refs.popup.open();
				this.dialogTableVisible = true;
				this.dialogObj.name = name;
				this.dialogObj.img = img;
				console.log(this.dialogObj);
			} else {
				uni.navigateTo({
					url: `./gasStationDetails/gasStationDetails?gasIds=${id}`
				});
			}
		},
		load() {
			//下拉加载数据
			this.loading = true;
			if (this.loadgasStation.length < this.gasStation.length) {
				setTimeout(() => {
					this.count += 5;
					this.loading = false;
					this.loadgasStation = this.gasStation.slice(0, this.count);
				}, 2000);
			}
		},
		async getOliMessage() {
			//获取加油站数据
			let oilNo = this.oliRadio;
			if (Number(this.oliRadio.split('#')[0]) == Number) {
				oilNo = Number(this.oliRadio.split('#')[0]);
			}
			const res = await this.post('/wap/Coalition/CzbQueryGasInfoList', {
				longitude: this.longitude,
				latitude: this.latitude,
				oilNo: oilNo,
				type: this.fanshiList[this.fanshiRadio].code
			});
			if (res.code == 200) {
				this.loadgasStation = res.data.list;
				// this.loadgasStation = this.gasStation.slice(0,9)
			}
		},
		olichoose(item) {
			if (Object.prototype.toString.call(item) == '[object Number]') {
				this.oliRadio = item + '#';
			} else {
				this.oliRadio = item;
			}
			this.getOliMessage();
			this.qiyouListShow = false;
		},
		oilChange() {
			this.fanshitrue = false;
			if (this.qiyouListShow == true) {
				this.qiyouListShow = false;
			} else {
				this.qiyouListShow = true;
			}
		},
		fanshichoose(index) {
			this.fanshitrue = false;
			this.fanshiRadio = index;
			this.getOliMessage();
		},
		fanshiChange() {
			this.qiyouListShow = false;
			if (this.fanshitrue == true) {
				this.fanshitrue = false;
			} else {
				this.fanshitrue = true;
			}
		}
	}
};
</script>

<style lang="scss">
.content {
	height: 100%;
}
/deep/ .uni-popup__wrapper-box {
	padding-top: 20rpx;
	width: 90%;
	height: 560rpx;
	background-color: #ffffff;
	.btn {
		margin: 0 auto;

		border-radius: 14rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 30rpx;
		width: 250rpx;
		height: 80rpx;
		background-color: #e41937;
		color: #ffffff;
	}
}
.dialoginfo {
	display: flex;
	align-items: center;
	margin-top: 20rpx;
	justify-content: center;
	.dialogimg {
		flex: 0 0 15%;
		border-radius: 50%;
		width: 100rpx;
		height: 100rpx;
	}
	.dialogname {
		font-size: 38rpx;
		font-weight: 600;
		color: #333333;
		margin-left: 20rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}

.warningone {
	text-align: center;
	font-weight: 600;
	font-size: 40rpx;
	color: #333333;
	margin-top: 23rpx;
}
.warningtwo {
	text-align: center;
	font-size: 28rpx;
	color: #333333;
	margin-top: 34rpx;
}
.dialogicon {
	font-size: 90rpx;
	width: 85rpx;
	height: 85rpx;
	background-color: #fe4040;
	border-radius: 50%;
	color: #ffffff;
	text-align: center;
	line-height: 85rpx;
	margin: 0 auto;
}
.el-button--primary {
	background-color: #e41937;
	border: none;
	display: table;
	margin: 0 auto;
	margin-top: 24rpx;
}
.oli_transform {
	transform: rotate(180deg);
}
.fanshi_transform {
	transform: rotate(180deg);
}
/deep/ .tab__item-title {
	font-weight: 600;
}
ul li {
	list-style: none;
}
ul.infinite-list {
	padding-left: 0;
}
.content {
	.loading {
		text-align: center;
		font-weight: 600;
	}
	.nomore {
		text-align: center;
		font-weight: 600;
	}
	.top {
		margin-top: 22rpx;
		width: 100%;
		height: 129rpx;
		background-color: #ffffff;
		.dingwei {
			padding-top: 15rpx;
			padding-left: 20rpx;
			display: flex;
			align-items: center;
			font-size: 24rpx;
			image {
				width: 52rpx;
				height: 52rpx;
				vertical-align: middle;
				margin-right: 7rpx;
			}
			view {
				font-size: 40rpx;
				width: 26rpx;
				height: 40rpx;
				line-height: 37rpx;
				margin-left: 12rpx;
			}
		}
	}
	.jycontent {
		margin-top: 60rpx;
		.jiayoutop {
			height: 76rpx;
			background-color: #ffffff;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 50rpx;
			.topleft {
				display: flex;
				align-items: center;
				.number {
					font-size: 30rpx;
					font-weight: 600;
				}
			}
			.topright {
				display: flex;
				align-items: center;
				.fanshi {
					font-weight: 600;
				}
			}
			image {
				margin-left: 10rpx;
				width: 20rpx;
				height: 10rpx;
			}
		}
		.oilChooseList {
			width: 100%;
			height: 880rpx;
			background-color: #ffffff;
			margin-top: 10rpx;
			padding-left: 50rpx;
			padding-top: 28rpx;
			padding-right: 47rpx;
			.choose {
				border: 1rpx solid #f82840 !important;
				color: #f82840 !important;
			}
			.title {
				font-weight: 600;
				font-size: 34rpx;
				color: #333333;
			}
			.item {
				width: 100rpx;
				height: 40rpx;
				border: 1rpx solid #999999;
				text-align: center;
				padding: 6rpx 0;
				font-size: 20rpx;
				font-weight: 600;
				color: #999999;
				border-radius: 12rpx;
				margin-top: 24rpx;
				margin-left: 20rpx;
			}
			.qiyou {
				.qiyoulist {
					display: flex;
					.qiyou_item {
					}
				}
			}
			.chaiyou {
				margin-top: 47rpx;
				.chaiyoulist {
					display: flex;
					flex-wrap: wrap;
				}
			}
			.trqi {
				margin-top: 47rpx;
				.trqilist {
					display: flex;
					justify-content: left;
					.trqi_item {
						margin-right: 50rpx;
					}
				}
			}
		}
		.fanshiList {
			width: 100%;
			height: 100rpx;
			margin-top: 10rpx;
			background-color: #ffffff;
			display: flex;
			.choose {
				border: 1rpx solid #f82840 !important;
				color: #f82840 !important;
			}
			.fanshi_item {
				width: 160rpx;
				height: 40rpx;
				border: 1rpx solid #999999;
				text-align: center;
				line-height: 40rpx;
				font-size: 20rpx;
				font-weight: 600;
				color: #999999;
				border-radius: 12rpx;
				margin-top: 24rpx;
				margin-left: 20rpx;
			}
		}
		.jiayouitem:last-child {
			margin-bottom: 20rpx;
		}
		.jiayouitem {
			border-radius: 10rpx;
			margin-top: 24rpx;
			margin-left: auto;
			margin-right: auto;
			width: 702rpx;
			height: 250rpx;
			background-color: #ffffff;
			.gasStation_positioning_top {
				padding-top: 42rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-left: 26rpx;
				padding-right: 52rpx;
				font-size: 24rpx;
				font-weight: 600;
				.gasStation_name {
					width: 600rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				image {
					width: 23rpx;
					height: 23rpx;
				}
			}
			.gasStation_positioning_center {
				margin-top: 24rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-left: 26rpx;
				padding-right: 24rpx;
				color: #666666;
				.address {
					.address_name {
						width: 400rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					image {
						width: 14rpx;
						height: 20rpx;
						margin-right: 8rpx;
					}
					display: flex;
					align-items: center;
					font-size: 24rpx;
				}
			}
			.gasStation_positioning_bottom {
				margin-top: 22rpx;
				display: flex;
				padding-left: 26rpx;
				align-items: center;
				.icon {
					width: 14rpx;
					height: 18rpx;
					margin-right: 18rpx;
					line-height: 25rpx;
					font-size: 24rpx;
				}
				.price_number {
					margin-right: 18rpx;
					font-size: 30rpx;
					font-weight: 600;
				}
				.falling_icon {
					font-size: 16rpx;
					color: #f82840;
					padding-left: 50rpx;
					margin-right: 18rpx;
					width: 200rpx;
					height: 40rpx;
					background: url(../../../static/home/jiayou/zhu.png);
					background-size: 200rpx 40rpx;
					line-height: 40rpx;
				}
				.del_price {
					color: #666666;
					font-size: 20rpx;
				}
			}
		}
	}

	.mycontent {
		height: 100%;
		background-color: #ffffff;
		padding-top: 40rpx;
		.user {
			display: flex;
			align-items: center;
			padding-left: 24rpx;
			image {
				width: 130rpx;
				height: 130rpx;
				border-radius: 50%;
				margin-right: 46rpx;
			}
			.user_info {
				.iphone {
					font-size: 32rpx;
					margin-bottom: 21rpx;
					color: #333333;
					font-weight: 600;
				}
				.kaiche {
					color: #999999;
					border: 1px solid #999999;
					border-radius: 8rpx;
					padding: 9rpx 23rpx;
				}
			}
		}
		.feature_list {
			margin-top: 70rpx;
			padding: 0 24rpx;
			.feature_item {
				margin-bottom: 24rpx;
				width: 100%;
				height: 64rpx;
				border-radius: 10rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-left: 28rpx;
				padding-right: 23rpx;
				box-shadow: 0rpx 4rpx 4rpx 2rpx #eaeaea;
				.feature_item_left {
					display: flex;
					align-items: center;
					image {
						width: 33rpx;
						height: 33rpx;
						margin-right: 18rpx;
					}
					view {
						font-size: 28rpx;
						font-weight: 600;
					}
				}
				.feature_item_right {
					display: flex;
					align-items: center;
					image {
						width: 13rpx;
						height: 27rpx;
					}
					view {
						font-size: 24rpx;
						font-weight: 600;
						margin-right: 27rpx;
					}
				}
			}
		}
	}
}
</style>
