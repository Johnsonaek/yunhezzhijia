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
						<text class="text-red">¥{{ amount }}</text>
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
		this.amount = e.amount;
		this.id = e.id;
		console.log(e)
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
			let me = this;
			if (this.type == 1) {
				// const res = await this.post('/wap/MallOrderPay/orderPay', { order_id: this.id, payment_type: this.type });
				// console.log(res)
				
				// return;
				plus.share.getServices(
					function(res) {
						console.log(me.id)
						var sweixin = null;
						for (var i = 0; i < res.length; i++) {
							var t = res[i];
							if (t.id == 'weixin') {
								sweixin = t;
							}
						}
						console.log(sweixin)
						if (sweixin) {
							sweixin.launchMiniProgram({
								id: 'gh_3d067a9824f2',
								type: 2, //0 正式 1 测试 2 体验  小程序的版本
								path: 'pages/order-pay/order-pay?id='+me.id+'&amount='+me.amount //这里你要跳的路径，可以传值
							});
						}
					},
					function(res) {
						console.log(JSON.stringify(res));
					}
				);
				return;
			} else {
				console.log(this.id)
				const res = await this.post('/wap/MallOrderPay/orderPay', { order_id: this.id, payment_type: this.type });
				console.log(res);
				// let url = "alipays://platformapi/startapp?appId=10000007&qrcode=" + pay_info字段对应的值
				let url = res.data.payment.expend.pay_info
				plus.runtime.openURL(url)

				
				// let url2 = '/pages/business/pay-result/pay-result';
			}
			
		}
	
	
	}
};
</script>
<!-- <script module="f2" lang="renderjs">
	let myChart
	export default {
		mounted() {
			const script = document.createElement('script')
			// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
			script.src = 'sdk/pay/adaPay.min.js'
			document.head.appendChild(script)
		},
		methods: {
			
		}
	}
</script> -->

<style></style>
