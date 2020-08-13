<template>
	<view>
		<page title="订单详情">
			<view class="tc ptb50 bg-white">
				<view class="flex aj-center flex-column">
					<image class="wh120 block round" :src="detail.headimgurl" mode=""></image>
					<view class="mt20">
						{{detail.nickname}}
					</view>
				</view>
				<view v-if="detail.status == 6" class="">
					<view class="pt50">
						<text class="cuIcon-roundcheck  text-green" style="font-size: 100rpx;"></text>
					</view>
					<view class="fs34 mt10">
						交易成功
					</view>
				</view>
			</view>
			
			
			<view class="qui-cells mt20">
				<view class="qui-cell">
					<view class="cell-bd text-muted">当前状态</view>
					<view class="">
						<text v-if="detail.status == 1">待支付</text>
						<text v-if="detail.status == 2">支付成功</text>
						<text v-if="detail.status == 6">已完成</text>
					</view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd text-muted">下单时间</view>
					<view class="">{{detail.created_at}}</view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd text-muted">订单金额</view>
					<view class="">{{detail.pay_amount}}</view>
				</view>
			</view>
			<view class="qui-cells mt20">
				<view class="qui-cell">
					<view class="cell-bd">订单编号：{{detail.order_sn}}</view>
				</view>
				
			</view>
		</page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				detail: {}
			}
		},
		onLoad(e) {
			this.id = e.id
		   this.getDetail()	
		},
		methods: {
			getDetail() {
				this.post('/wap/LineOrder/shopOrderDetail',{order_id: this.id}).then(res => {
					this.detail = res.data.order
				})
			}
		}
	}
</script>

<style>

</style>
