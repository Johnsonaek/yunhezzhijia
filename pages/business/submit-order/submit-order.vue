<template>
	<view>
		<page title="提交订单">
			<view class="qui-cells">
				<view class="qui-cell">
					<q-image :lazyLoad="true" :isRatio="false" :imgwh="[200,200]" :src="info.img"></q-image>
					<view class="cell-bd ml30">
						<view class="fs32 fw600 flex justify-between">{{info.goods_name}} </view>
						<!-- <view class="mt10 text-gray fs24 mt30">
							<text class="bg-gray plr10 ptb10">翅根4块+烤翅4块+翅中2块</text>
						</view> -->
						<view class="mt30">
							<text class="mr20">价格<text class="text-red">￥{{info.unit_price}}</text></text>
							<text>返佣<text class="text-red">￥{{(info.unit_price*info.commision_rate).toFixed(2)}}</text></text>
						</view>
						
					</view>
				</view>
			</view>
			
			<view class="qui-cells mt24">
				<view class="qui-cell">
					<view class="cell-bd">数量</view>
					<view class="">
						<uni-number-box v-model="form.number" :min="0" :max="9"></uni-number-box>
					</view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">付款累计</view>
					<view class="text-red fs30">￥{{info.unit_price}}</view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">返佣累计</view>
					<view class="text-red fs30">￥{{(info.unit_price*info.commision_rate).toFixed(2)}}</view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">手机号码</view>
					<view class="text-red fs30">{{info.mobile}}</view>
				</view>
				
			</view>
			
			<view @click="submit" slot="bottom" class="qui-btn radius0">
				￥{{info.unit_price}} 提交订单
			</view>
		</page>
	</view>
</template>

<script>
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	export default {
		components: {uniNumberBox},
		data() {
			return {
				info: {},
				id: 0,
				form: {
					line_goods_id: 0,
					number: 1
				}
			}
		},
		onLoad(e) {
			this.id = e.id
			this.form.line_goods_id = e.id
			this.getPreview()
		},
		methods: {
			async getPreview(){
				const res = await this.post('/wap/Order/orderPreview', {line_goods_id: this.id})
				this.info = res.data
			},
			submit() {
				this.post('/wap/LineOrder/OrderSubmit', this.form).then(res => {
					console.log(res)
					let orderId = res.data.order_id
					this.success(res,'订单提交成功', () => {
						uni.navigateTo({
							url: `/pages/business/order-pay/order-pay?id=${orderId}&amount=${this.info.unit_price}`
						});
					})
				})
			}
		}
	}
</script>

<style>

</style>
