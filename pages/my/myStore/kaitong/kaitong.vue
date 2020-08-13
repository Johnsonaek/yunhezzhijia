<template>
	<view>
		<page title="开通活动金">
			<radio-group class="qui-cells block" @change="changeRadio">
				<view class="qui-cell">
					<view class="cell-bd">
						<label class="radio flex a-center">
							<radio checked style="transform: scale(0.7);" value="1" /><text>金钱开通</text>
						</label>
					</view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">
						金钱开通: <text class="text-red">￥888</text>
					</view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">
						<label class="radio flex a-center">
							<radio style="transform: scale(0.7);" value="2" /><text>激活码开通</text>
						</label>
					</view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">
						<input v-model="form.invitationCode" type="text" value="" placeholder="请输入激活码"/>
					</view>
				</view>
				<view class="plr30 ptb30 fs24 text-muted">
					活动金说明：开通活动金之后可以使用红包金，鼓励金，分销金
				</view>
			</radio-group>
			
			<view class="ptb30 plr50">
				<view @click="submit" class="qui-btn round">
					开通
				</view>
			</view>
		</page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					action:1,
					invitationCode: ''
				}
			}
		},
		methods: {
			changeRadio(e) {
				console.log(e)
				this.form.action = e.detail.value
			},
			submit() {
				this.kaitong()
			},
			async kaitong() {
				const res = await this.post('/wap/Line/ActivityAmount', this.form)
				if(res.data.orderId){
					uni.navigateTo({
						url: `/pages/business/order-pay/order-pay?id=${res.data.orderId}&amount=100`
					})
				}
				// 未完待续 成功后要做什么操作呢？ 给个状态我，如果开通了的这个页面上，已成功开通活动金
				
			}
		}
	}
</script>

<style>

</style>
