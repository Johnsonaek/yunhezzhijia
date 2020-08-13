<template>
	<view>
		<page title="线下订单" @scrolltolower="Scrolltolower">
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
								<text class="text-muted fs24">店铺名称：{{item.line_shop_name}}</text>
			<!-- （当action=1时，存在）订单状态：1.待支付2.已支付10.已取消3.待评价4.已评价 -->
								<text v-if="item.status == 1" class="text-gray fs24">待付款</text>
								<text v-if="item.status == 2" class="text-gray fs24">已支付</text>
								<text v-if="item.status == 6" class="text-gray fs24">待评价</text>
				
							</view>
							<view  class="qui-cell border-none">
								<view @click="goto('/pages/business/consumer-pay-result/consumer-pay-result?id='+item.id)"  class="mr20"><q-image :imgwh="180" :src="item.img_url"></q-image></view>
								<view class="cell-bd" @click="goto('/pages/business/consumer-pay-result/consumer-pay-result?id='+item.id)">
									<view class="line2">{{item.goods_name}}</view>
									<view class="text-muted fs22 mt10">{{item.created_at}}</view>
									<view class="flex mt10">
										<view class="flex-item flex a-center">数量:<text class="mr20">{{item.goods_num}} </text></view>
									</view>
									<view class="mt10 flex a-center">
										<view class="flex-item">
											总价： <text class="price text-red">{{item.pay_amount}}</text>
										</view>
									</view>
								</view>
								<view class=" pt100">
									<view v-if="item.status == 6" class="fs24 qui-btn inline mini outline text-red mt30">
										已评价
									</view>
									<view v-if="item.status == 2" @click="goto('/pages/my/allorder/evaluate/evaluate?id='+item.id)"  class="fs24 qui-btn inline mini outline text-red mt30">
										待评价
									</view>
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
		mixins:[pagination],
		data() {
			return {
				getUrl: '/wap/LineOrder/orderList', // 需要分页的接口地址，
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
		onShow() {
			this.getListInit()
		},
		methods: {
			// 切换选项卡
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id
				this.params.type = Number(e.currentTarget.dataset.type)
				if (!this.loaded) return;
				this.getListInit();
			}
		}
	}
</script>

<style>

</style>
