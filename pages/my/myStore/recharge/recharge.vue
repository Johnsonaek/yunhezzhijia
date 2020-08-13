<template>
	<view>
		<page title="充值" bgClass="bg-white">
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="w180 mr20">充值金额</view>
					<view class="cell-bd"><input type="text" value="" placeholder="请输入充值金额" /></view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">
						<view class="mb30">请选择支付方式</view>
						<radio-group class="block">
							<label class="flex a-center ptb10">
								<image class="block wh60 mr20" src="/static/superior/superior10.png" mode="widthFix"></image>
								<view class="flex-item"><text>微信支付</text></view>
								<radio class="mr20" color="#F43F3A" style="transform: scale(0.7);" value="1" />
							</label>
							<label class="flex a-center ptb10">
								<image class="block wh60 mr20" src="/static/superior/superior11.png" mode="widthFix"></image>
								<view class="flex-item"><text>支付宝支付</text></view>
								<radio class="mr20" color="#F43F3A" style="transform: scale(0.7);" value="2" />
							</label>
						</radio-group>
					</view>
				</view>
			</view>
			<view class="h200"></view>
			<view class="plr100"><view class="qui-btn round">确认支付</view></view>
		</page>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style></style>
