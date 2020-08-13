<template>
	<view>
		<page title="余额明细" @scrolltolower="loadMore('qlist')">
			<view class="bg-gradual-red plr30 ptb30  h200 flex aj-center flex-column">
				<view class="fs50">{{amount}}</view>
				<view class="fs24 mt20">账户余额</view>
			</view>

			<view class="qui-cells">
				<qui-list ref="qlist" getUrl="/wap/Line/amountLogList" v-slot="data">
					<view v-for="(item,index) in data.list" :key="index" class="qui-cell ptb10">
						<view class="cell-bd">
							<!-- 来源：1充值；2门店营业收入；3提现；4转为红包金 -->
							<view class="fs28">
								<text v-if="item.from == 1">充值</text>
								<text v-if="item.from == 2">门店营业收入</text>
								<text v-if="item.from == 3">提现</text>
								<text v-if="item.from == 4">转为红包金</text>
							</view>
							<view class="text-muted fs24">{{item.created_at}}</view>
						</view>
						<!-- 收入支出类型：1收入；2支出 -->
						<view v-if="item.type == 1" class="fs30 text-green">+{{item.amount}}</view>
						<view v-if="item.type == 2"  class="fs30 text-red">-{{item.amount}}</view>
					</view>
				</qui-list>
			</view>
		</page>
	</view>
</template>

<script>
export default {
	data() {
		return {
			amount:0
		};
	},
	onLoad(e) {
		this.amount = e.amount
	},
	methods: {}
};
</script>

<style></style>
