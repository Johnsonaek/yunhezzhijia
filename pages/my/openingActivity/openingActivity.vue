<template>
	<view>
		<view class="plr20 h80 fs24 flex a-center">是否开通活动金？</view>
		<view class="bg-white mb20">
			<label @tap="radio('1')" class="flex a-center h80 plr20">
				<radio :checked="oPtion==='1'" class="mr20"></radio>
				<text class="fs24">金钱开通</text>
			</label>
			<view class="fs24 flex a-center h80" style="padding-left: 48px; color: #9A9A9A;">开通金额：<text style="color: #F82840;">￥888</text></view>
		</view>
		<view class="bg-white mb20">
			<label @tap="radio('2')" class="flex a-center h80 plr20">
				<radio :checked="oPtion==='2'" class="mr20"></radio>
				<text class="fs24">激活码开通</text>
			</label>
			<label class="flex a-center h80" style="padding-left: 48px;">
				<input type="text" value="" class="fs24" placeholder="请输入激活码" />
			</label>
		</view>
		<view class="plr20 h50 fs22 flex a-center " style="margin-bottom: 100px; color: #999999;">活动金说明：开通活动金之后可以使用红包金、鼓励金、分销金</view>
		<view class="flex a-center j-center mb30">
			<text class="flex a-center j-center h100 text-white fs28" style="width: 80%; background-color: #C7C6C6; border-radius: 30px;">暂不开通</text>
		</view>
		<view class="flex a-center j-center">
			<text class="flex a-center j-center h100 text-white fs28" style="width: 80%; background-color: #F82840; border-radius: 30px;">开通</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oPtion:"1",
			}
		},
		methods: {
			radio(e){
				this.oPtion=e
			}
		}
	}
</script>

<style scoped>
	
</style>
