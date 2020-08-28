<template>
	<view>
		<page @scrolltolower="Scrolltolower">
			<view class="mb5" style="position: relative;">
				<view class="arrow-l ml20" @click="goBack"></view>
				<view class="flex a-center j-center h100 bg-white">
					<view
						class="w140 h50 flex a-center j-center mlr5 fs24 radius30"
						style="color: #FFFFFF;background-color: #b3b3b3;"
						v-for="(ele, i) in teamlist"
						:key="i"
						:class="{ hover: ele.teamActive }"
						@tap="teamActive(i)"
					>
						{{ ele.title }}
					</view>
				</view>
			</view>

			<scroll-view scroll-x class="bg-white nav mt24">
				<view class="flex text-center">
					<view
						class="cu-item flex-sub"
						:class="item.type == TabCur ? 'text-red cur' : ''"
						v-for="(item, index) in tabBars"
						:key="index"
						@tap="tabSelect"
						:data-type="item.type"
						:data-id="index"
					>
						{{ item.name }}
					</view>
				</view>
			</scroll-view>

			<empty v-if="list.length === 0 && loaded"></empty>
			<view class="loading ptb30" v-if="!loaded"></view>
			<view class="qui-card panel mb24 mt24" v-for="(item, index) in list" :key="index">
				<view class="card-hd bor-1px-b">
					<text class="text-muted fs24">订单编号：{{item.orderSn}}</text>
<!-- （当action=1时，存在）订单状态：1.待支付2.已支付10.已取消3.待评价4.已评价 -->
					<text v-if="item.status == 1" class="text-red fs24">待付款</text>
					<text v-if="item.status == 2" class="text-red fs24">已支付</text>
					<text v-if="item.status == 3" class="text-red fs24">待评价</text>
					<text v-if="item.status == 4" class="text-red fs24">已评价</text>
					<text v-if="item.status == 10" class="text-red fs24">已取消</text>
				</view>
				<navigator  :url="'/pages/shengtai/order-detail/order-detail?id='+item.order_number" class="qui-cell border-none">
					<view class="mr20"><q-image :imgwh="140" src="/static/business/rangking/v2_qaxhld.jpg"></q-image></view>
					<view class="cell-bd">
						<view class="line2">烟台红富士苹果水果礼盒生</view>
						<view class="flex mt30">
							<view class="flex-item flex a-center"><text class="text-red price fs34 mr20">100 </text> x 12</view>
							<view class="text-red"> +34</view>
						</view>
					</view>
				</navigator>
				<view class="plr30 ptb20 tr bor-1px-t">
					<!-- 0待付款 1待发货 2待收货 3完成 -->
			
					<navigator :url="'/pages/shengtai/order-detail/order-detail?id=' + item.order_number" v-if="item.status == 0" class="qui-btn inline small outline">
						立即付款
					</navigator>
					<view @click="remind(item.order_number)" v-if="item.status == 1" class="qui-btn inline small outline">提醒发货</view>
					<view @click="confirm(item.order_number)" v-if="item.status == 2" class="qui-btn inline small outline">确认收货</view>
					<navigator :url="'/pages/shengtai/order-detail/order-detail?id=' + item.order_number" v-if="item.status == 3" class="qui-btn inline small outline">
						再次购买
					</navigator>
					<view v-if="item.status == -1" class="qui-btn inline small outline">
						已取消
					</view>
				</view>
			</view>

			<loading-more nomore-text="我是有底线的" :nomore="nomore" :list="list"></loading-more>
		</page>
	</view>
</template>

<script>
import pagination from '@/common/mixin/pagination.js';
export default {
	mixins: [pagination],
	data() {
		return {
			getUrl: '/wap/Order/OrderList', // 需要分页的接口地址，
			autoLoad: false,
			TabCur: -1,
			tabBars: [
				{
					name: '全部',
					type: -1
				},
				{
					name: '已付款',
					type: 0
				},
				{
					name: '已发货',
					type: 1
				},
				{
					name: '已结算',
					type: 2
				},
				{
					name: '已失效',
					type: 3
				}
			],
			teamlist: [
				{
					title: '我的订单',
					teamActive: true
				},
				{
					title: '团队订单',
					teamActive: false
				}
			],
			orderlist: [
				{
					title: '全部',
					isActive: true
				},
				{
					title: '已付款',
					isActive: false
				},
				{
					title: '已发货',
					isActive: false
				},
				{
					title: '已结算',
					isActive: false
				},
				{
					title: '已失效',
					isActive: false
				}
			]
		};
	},
	onLoad() {
	
		this.params.platformId = 12
		this.params.action = 2
		this.params.lineShopId = 4
		this.getListInit()
	},
	methods: {
		teamActive(numb) {
			for (let i in this.teamlist) {
				this.teamlist[i].teamActive = false;
			}
			this.teamlist[numb].teamActive = true;
		},
		// 切换选项卡
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.type;
			this.params.status = e.currentTarget.dataset.type;
			if (this.TabCur == -1) {
				this.params.status = null;
			}
			if (!this.loaded) return;
			this.getListInit();
		},
		confirm(e){
			console.log(e)
		}
		//
	}
};
</script>

<style lang="scss">
.arrow-l {
	position: absolute;
	left: 20rpx;
	top: 50%;
	transform: rotateZ(45deg) translateY(-50%);
	border: 2px solid #444444;
	border-top: 0;
	border-right: 0;
	width: 20rpx;
	height: 20rpx;
	z-index: 999;
}
.hover {
	background-color: #ec3f3f !important;
}
.active {
	font-weight: bold;
	position: relative;
	&::after {
		content: '';
		display: block;
		position: absolute;
		width: 60rpx;
		height: 6rpx;
		background-color: #f6390d;
		bottom: 10rpx;
		left: 50%;
		transform: translateX(-50%);
	}
}
</style>
