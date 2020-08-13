<template>
	<view class="qui-grids gutter30-tb column5 bg-white">
		<view class="qui-grid" v-for="(item,index) in gridData" :key="index">
			<image :src="item.img" mode="widthFix" class="block wh100"></image>
			<view class="fs24">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isSwiper: true,
			current: 0,
			gridData:[
				{
					img: '../../static/index/index3.png',
					name: '新人免单'
				},
				{
					img: '../../static/index/index4.png',
					name: '1元购'
				},
				{
					img: '../../static/index/index5.png',
					name: '加油7折起'
				},
				{
					img: '../../static/index/index6.png',
					name: '任务赚钱'
				},
				{
					img: '../../static/index/index7.png',
					name: '9.9包邮'
				},
				{
					img: '../../static/index/index8.png',
					name: '饿了么'
				},
				{
					img: '../../static/index/index9.png',
					name: '苏宁'
				},
				{
					img: '../../static/index/index10.png',
					name: '飞猪'
				},
				{
					img: '../../static/index/index11.png',
					name: 'VIP影视'
				},
				{
					img: '../../static/index/index13.png',
					name: '天猫'
				},
				{
					img: '../../static/index/index14.png',
					name: '话费充值'
				},
				{
					img: '../../static/index/index15.png',
					name: '附近小店'
				},
				{
					img: '../../static/index/index16.png',
					name: '阿里健康'
				},
				{
					img: '../../static/index/index17.png',
					name: '直播间'
				},
				{
					img: '../../static/index/index18.png',
					name: '新手教程'
				},
				{
					img: '../../static/index/index19.png',
					name: '商学院'
				},
				{
					img: '../../static/index/index20.png',
					name: '抽奖'
				},
				{
					img: '../../static/index/index21.png',
					name: '自营商城'
				},
				{
					img: '../../static/index/index4.png',
					name: '特权卡'
				}
			],
		}
	},
	methods: {
		change(e) {
			this.current = e.detail.current;
		}
	}
};
</script>

<style scoped lang="scss">
/* 下方这些scss变量为uView内置变量，详见开发  组件-指南-内置样式 */
.grid-text {
	font-size: 24rpx;
	color: #080808;
}

.swiper {
	background-color: $uni-navtabr-color;
	// background-color: pink;
	height: 380rpx;
	image {
		width: 100upx;
		height: 100upx;
	}
}

.indicator-dots {
	background-color: $uni-navtabr-color;
	display: flex;
	justify-content: center;
	align-items: center;
}

.indicator-dots-item {
	background-color: $u-tips-color;
	height: 6px;
	width: 6px;
	border-radius: 10px;
	margin: 3px 3px;
}

.indicator-dots-active {
	background-color: $u-type-primary;
}
</style>
