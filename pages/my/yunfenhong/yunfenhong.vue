<template>
	<view>
		<page title="红利宝" titleClass="bg-blue" :headbor="false" bgClass="bg-white">
			<view @click="goto('/pages/my/yunfenhong/list/list')" class="text-white" slot="right">明细</view>
			<view class="bg-blue plr30 ptb30" style="margin-bottom: -120rpx;">
				<view class="flex a-center">
					<view class="flex-item">
						<view class="">我的红利宝价值</view>
						<view class="mt20">
							<text class="num fs40">{{ info.user_bonus_amount }}</text>
						</view>
					</view>

					<view class="flex-item ml30">
						<view class="">我的佣金</view>
						<view class="mt20">
							<text class="num fs40">{{ info.user_amount }}</text>
						</view>
					</view>
					<view class="flex-item"></view>
				</view>
				<view class="text-fff50 fs24 mt30">说明：我的红利宝价值=红利宝兑换值 x 我的红利宝数量</view>
				<view class="h100"></view>
			</view>
			<view class="qui-card flex plr40 ptb40 shadow-xy0">
				<view class="flex-item pl20">
					<view class="text-muted">今日红利宝兑换值</view>
					<view class="fs34 mt20">{{ info.today_bonus_rate }}</view>
					<view class="text-muted mt30">总涨幅价格</view>
					<view class="fs34 mt20">{{ info.total_income }}</view>
				</view>
				<view class="bor-1px-l h200"></view>
				<view class="flex-item ml40 pl20">
					<view class="text-muted">我的红利宝数量</view>
					<view class="fs34 mt20">{{ info.user_bonus_num }}</view>
					<view class="text-muted mt30">昨日涨幅</view>
					<view class="fs34 mt20">{{ info.yesterday_income }}</view>
				</view>
			</view>

			<scroll-view scroll-x class="bg-white nav yfh_nav" scroll-with-animation :scroll-left="scrollLeft">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="index == TabCur ? 'text-blue cur' : ''" v-for="(item, index) in tabBars" :key="index" @tap="tabSelect" :data-id="index">
						{{ item.name }}
					</view>
				</view>
			</scroll-view>

			<view class="qiun-columns">
				<!--#ifdef H5 -->

				<!--#endif-->
				<view class="qiun-bg-white qiun-padding">
				
				</view>
				<view class="qiun-charts">
					<!--#ifdef MP-ALIPAY -->
					<canvas
						canvas-id="canvasLineA"
						id="canvasLineA"
						class="charts"
						:width="cWidth * pixelRatio"
						:height="cHeight * pixelRatio"
						:style="{ width: cWidth + 'px', height: cHeight + 'px' }"
						@touchstart="touchLineA"
						@touchmove="moveLineA"
						@touchend="touchEndLineA"
					></canvas>
					<!--#endif-->
					<!--#ifndef MP-ALIPAY -->
					<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
					<!--#endif-->
				</view>
				
				
			</view>

			<view slot="bottom" class="flex ptb30 plr30">
				<view class="flex-item"><view style="border:0;" @click="goto('/pages/my/yunfenhong/transfer-out/transfer-out')" class="qui-btn bg-white shadow-xy0">转出</view></view>
				<view class="w30"></view>
				<view class="flex-item"><view  @click="goto('/pages/my/yunfenhong/transfer-in/transfer-in')"  class="qui-btn bg-blue shadow-xy0">转入</view></view>
			</view>
		</page>
	</view>
</template>

<script>
import uCharts from '@/components/u-charts/u-charts.js';
var _self;
var canvaLineA = null;
var lastMoveTime = null; //最后执行移动的时间戳
export default {
	data() {
		return {
			cWidth: '',
			cHeight: '',
			pixelRatio: 1,
			textarea: '',
			Interactive: '', //交互显示的数据
			lineWeek: {},
			lineMonth: {},
			info: {},
			TabCur: 0,
			scrollLeft: 0,
			tabBars: [
				{
					name: '7天收益'
				},
				{
					name: '月收益'
				}
			]
		};
	},
	onShow() {
		this.getHomeInfo(1);
	},
	onLoad() {
		_self = this;
		//#ifdef MP-ALIPAY
		uni.getSystemInfo({
			success: function(res) {
				if (res.pixelRatio > 1) {
					// 正常这里给2就行，如果pixelRatio=3性能会降低一点
					_self.pixelRatio =res.pixelRatio;
					_self.pixelRatio = 2;
				}
			}
		});
		//#endif
		this.cWidth = uni.upx2px(750);
		this.cHeight = uni.upx2px(500);
	},
	methods: {
		// 切换选项卡
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
	
			if(this.TabCur == 0) {
				this.getHomeInfo(1)
			} else {
				this.getHomeInfo(2)
			}
		},
		getHomeInfo(type) {
			this.post('/wap/Bonus/index').then(res => {
				this.info = res.data;
				this.lineWeek = res.data.lineWeek;
				this.lineMonth = res.data.lineMonth;

				
				let LineA = { categories: [], series: [] };
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				
				if(type ==1) {
					LineA.categories = res.data.lineWeek.categories;
					LineA.series = [res.data.lineWeek.series];
				} else {
					LineA.categories = res.data.lineMonth.categories;
					LineA.series = [res.data.lineMonth.series];
				}
				
				
			
				_self.showLineA('canvasLineA', LineA);
			});
		},
		
		showLineA(canvasId, chartData) {
			canvaLineA = new uCharts({
				$this: _self,
				canvasId: canvasId,
				type: 'line',
				colors: ['#569ff1', '#f04864', '#8543e0', '#90ed7d'],
				fontSize: 11,
				padding: [15, 15, 0, 15],
				legend:{
					show:true,
					padding:5,
					lineHeight:11,
					margin:0,
				},
				dataLabel: false,
				dataPointShape: true,
				background: '#FFFFFF',
				pixelRatio: _self.pixelRatio,
				categories: chartData.categories,
				series: chartData.series,
				animation: true,
				xAxis: {
					type: 'grid',
					gridColor: '#CCCCCC',
					gridType: 'dash',
					dashLength: 8,
					// disableGrid:true
				},
				yAxis: {
					gridType: 'dash',
					gridColor: '#CCCCCC',
					dashLength: 8,
					format:(val)=>{return val.toFixed(0)+'%'}
				},
				width: _self.cWidth * _self.pixelRatio,
				height: _self.cHeight * _self.pixelRatio,
				extra: {
					line: {
						type: 'curve'
					}
				}
			});
		},
		touchLineA(e) {
			lastMoveTime = Date.now();
		},
		moveLineA(e) {
			let currMoveTime = Date.now();
			let duration = currMoveTime - lastMoveTime;
			if (duration < Math.floor(1000 / 60)) return; //每秒60帧
			lastMoveTime = currMoveTime;

			let currIndex = canvaLineA.getCurrentDataIndex(e);
			if (currIndex > -1 && currIndex < canvaLineA.opts.categories.length) {
				let riqi = canvaLineA.opts.categories[currIndex];
				let leibie = canvaLineA.opts.series[0].name;
				let shuju = canvaLineA.opts.series[0].data[currIndex];
				this.Interactive = leibie + ':' + riqi + '-' + shuju + '元';
			}
			canvaLineA.showToolTip(e, {
				format: function(item, category) {
					return category + ' ' + item.name + ':' + item.data;
				}
			});
		},
		
	}
};
</script>

<style lang="scss" scoped>
.yfh_nav .cu-item.cur {
	color: var(--blueColor);
	font-weight: 600;
}
.yfh_nav .cu-item.cur::after {
	background-color: var(--blueColor);
}
/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
