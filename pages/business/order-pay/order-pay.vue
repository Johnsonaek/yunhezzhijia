<template>
	<view>
		<page title="" bgClass="bg-white" :headbor="false">
			<view class="bg-red h300" style="margin-bottom: -180rpx;">
				<view class="flex pt30 a-center pl30">
					<text @click="goBack" class="cuIcon-back fs40"></text>
					<text class="ml30 fs32">支付</text>
				</view>
			</view>
			<view class="bg-white mlr30 shadow z-index9 radius12">
				<view class="tc pt30 fs40">
					<view class="ptb40">
						总共需支付
						<text class="text-red">¥{{amount}}</text>
					</view>
				</view>
				<radio-group @change="radioChange" class="qui-cells block">
					<label class="qui-cell" v-for="(item, index) in items" :key="item.value">
						<image class="block wh120 mr20" :src="item.icon" mode="widthFix"></image>
						<view class="cell-bd">
							<view class="fs30">{{ item.name }}</view>
							<!-- <view class="text-muted mt10 fs22">
								扫二维码领取红包支付更优惠
							</view> -->
						</view>
						<view class="radio"><radio color="#f82840" style="transform: scale(0.7);" :value="item.value" :checked="index === current" /></view>
					</label>
				</radio-group>
			</view>
			<view class="plr30 ptb30" slot="bottom"><view @click="submit" class="qui-btn">确认支付</view></view>
		</page>
	</view>
</template>

<script>
// import AdaPay from '@/sdk/pay/adaPay.min.js';
export default {
	data() {
		return {
			id: 0,
			type: 1,
			amount: 0,
			items: [
				{
					value: '1',
					name: '微信支付',
					icon: '/static/superior/superior10.png',
					checked: 'true'
				},
				{
					value: '2',
					name: '支付宝支付',
					icon: '/static/superior/superior11.png'
				}
			],
			current: 0
		};
	},
	onLoad(e) {
		this.amount = e.amount
		this.id = e.id;
	},
	methods: {
		radioChange(evt) {
			for (let i = 0; i < this.items.length; i++) {
				if (this.items[i].value === evt.target.value) {
					this.current = i;
					break;
				}
			}
			this.type = evt.target.value;
		},
		async submit() {
			
			const res = await this.post('/wap/LineOrder/orderPay', { order_id: this.id, payment_type: this.type });
			console.log(res);
			
			AdaPay.doPay(res.data.payment, result => {
				console.log('返回结果码.....' + result.result_status);
				console.log('返回结果描述.....' + result.result_message);
				console.log('返回结果信息.....' + result.result_info);
			});
			uni.navigateTo({
				url:'/pages/business/pay-result/pay-result'
			})

			// let url2 = '/pages/business/pay-result/pay-result';
		}
	}
};
</script>

<style></style>
