<template>
	<view>
		<page title="订单管理" @scrolltolower="Scrolltolower">
			<!-- <scroll-view slot="top" scroll-x class="bg-white nav">
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
			</scroll-view> -->
			
			<empty v-if="list.length === 0 && loaded"></empty>
						<view class="loading ptb30" v-if="!loaded"></view>
						<view class="qui-card panel mb24 mt24" v-for="(item, index) in list" :key="index">
							<view class="card-hd bor-1px-b">
								<text class="fs28">{{item.mobile}}</text>

								<text class="text-red fs24">交易成功</text>
							</view>
							<navigator  :url="'/pages/business/pay-result/pay-result?id='+item.id" class="qui-cell border-none">
								<view class="mr20"><q-image :imgwh="180" :src="item.img_url"></q-image></view>
								<view class="cell-bd">
									<view class="line2">{{item.goods_name}}</view>
									<view class="text-muted fs22 mt10">下单时间：{{item.created_at}}</view>
									<view class="flex mt10">
										<view class="flex-item flex a-center fs24">数量：<text class="mr20">{{item.goods_num}} </text></view>
									</view>
									<view class="mt10">
										总价： <text class="price text-red">{{item.pay_amount}}</text>
									</view>
								</view>
							</navigator>
							<view class="plr30 pb20">
								订单号：{{item.order_sn}}
							</view>
						</view>
			
						<loading-more nomore-text="我是有底线的" :nomore="nomore" :list="list"></loading-more>
			
						
		</page>
	</view>
</template>

<script>
	import pagination from '@/common/mixin/pagination.js';
	export default {
		mixins:[pagination],
		data() {
			return {
				getUrl: '/wap/LineOrder/shopOrderList', // 需要分页的接口地址，
				autoLoad: false,
				TabCur: 0,
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
						name: '待评价',
						type: 2
					},
					{
						name: '已评价',
						type: 3
					}
				],
			}
		},
		onLoad() {
		
			this.params.platformId = 12
			this.params.action = 2
			this.params.lineShopId = 4
			this.getListInit()
		},
		methods: {
			// 切换选项卡
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.type;
				this.params.status = e.currentTarget.dataset.type;
				if (this.TabCur == -1) {
					this.params.status = null;
				}
				if (!this.loaded) return;
				this.getListInit();
			}
		}
	}
</script>

<style>

</style>
