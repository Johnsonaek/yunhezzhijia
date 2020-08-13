<template>
	<view>
		<page title="我的订单" @scrolltolower="Scrolltolower">
			<scroll-view slot="top" scroll-x class="bg-white nav">
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
					<text class="text-muted fs24">订单编号：{{ item.order_sn }}</text>
					<text v-if="item.order_status == 10" class="text-red fs24">待付款</text>
					<text v-if="item.order_status == 20 || item.order_status == 30 || item.order_status == 40" class="text-red fs24">待发货</text>
					<text v-if="item.order_status == 45" class="text-red fs24">已发货</text>
					<text v-if="item.order_status == 50" class="text-red fs24">已完成</text>
				</view>
				<view
					v-for="(item2, index2) in item.orderGoodsList"
					:key="index2"
					class="qui-cell bg-gray-muted"
				>
					<view @click="goto('/pages/superior/order-list/detail/detail?id=' + item.id)" class="mr20 radius12"><q-image :imgwh="140" :src="item2.original_img"></q-image></view>
					<view @click="goto('/pages/superior/order-list/detail/detail?id=' + item.id)" class="cell-bd">
						<view class="line2">{{ item2.goods_name }}</view>
						<view class="flex mt30">
							<view class="flex-item flex a-center">
								<text class="text-red price fs34 mr20">{{ item2.unit_price }}</text>
								x {{ item2.goods_num }}
							</view>
						</view>
					</view>
					<view v-if="item.order_status == 50"  class="">
						<view @click="goto('/pages/superior/order-list/wuliu/wuliu?order_sn='+item.order_sn+'&goods_id='+item2.goods_id)" class="text-muted fs24 arrow-r">查看物流</view>
					</view>
				</view>
				<view class="plr30 ptb20 bor-1px-t flex a-center">
					<view class="flex-item">
						合计：
						<text class="text-red price fs30">{{ item.total_amount }}</text>
					</view>
					<view class="">
						<!-- 0待付款 1待发货 2待收货 3完成 -->
						<view @click="orderCancel(item.id, index)" v-if="item.order_status == 10" class="qui-btn inline small bg-white mr20 outline">取消订单</view>
						<navigator :url="'/pages/superior/order-pay/order-pay?id=' + item.id+'&amount='+item.total_amount" v-if="item.order_status == 10" class="qui-btn inline small outline">
							立即付款
						</navigator>
						<view @click="remind(item.id)" v-if="item.order_status == 20 || item.order_status == 30 || item.order_status == 40" class="qui-btn inline small outline">
							提醒发货
						</view>
						<view @click="orderReceipt(item.id)" v-if="item.order_status == 45" class="qui-btn inline small outline">确认收货</view>
						<block v-if="item.order_status == 50">
							<view class="qui-btn inline bg-white small outline">已完成</view>
							
						</block>
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
			getUrl: '/wap/MallOrder/orderList', // 需要分页的接口地址，
			autoLoad: false,
			TabCur: 0,
			type: 0,
			tabBars: [
				{
					name: '全部',
					type: 0
				},
				{
					name: '待付款',
					type: 1
				},
				{
					name: '待发货',
					type: 2
				},
				{
					name: '待收货',
					type: 3
				},
				{
					name: '已完成',
					type: 4
				}
			]
		};
	},
	onLoad(e) {
		this.params.type = e.type || 0;
		this.TabCur = e.type
		// this.params.platformId = 12
		// this.params.action = 2
		// this.params.lineShopId = 4
		this.getListInit();
	},
	methods: {
		remind(id) {
			uni.showToast({
				title: '已提醒发货~',
				icon: 'none'
			})
		},
		orderReceipt(id) {
			let me = this;
			uni.showModal({
				content: '确定收货吗？',
				success: res => {
					if (res.confirm) {
						me.post('/wap/MallOrder/orderReceipt', { id: id }).then(res => {
							me.success(res, '订单已确认收货');
							me.getListInit();
						});
					}
				}
			});
		},
		orderCancel(id, index) {
			let me = this;
			uni.showModal({
				content: '确定取消订单吗？',
				success: res => {
					if (res.confirm) {
						me.post('/wap/MallOrder/orderCancel', { id: id }).then(res => {
							me.success(res, '订单已取消');
							me.list.splice(index, 1);
						});
					}
				}
			});
		},
		// 切换选项卡
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.type;
			this.params.type = Number(e.currentTarget.dataset.type);
			if (!this.loaded) return;
			this.getListInit();
		}
	}
};
</script>

<style></style>
