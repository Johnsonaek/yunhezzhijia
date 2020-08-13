<template>
	<view>
		<page title="在线客服">
			<view class="plr30 ptb30 tc">
				<view class="">
					微信客服号：{{info.wx}}
				</view>
				<view class="mt30 flex aj-center">
					<image class="wh280 block" :src="info.weixinQrcode" mode=""></image>
				</view>
			</view>
			<view class="plr30 ptb30 tc">
				<view class="">
					微信QQ号：{{info.qq}}
				</view>
				<view class="mt30 flex aj-center">
					<image class="wh280 block" :src="info.qqQrcode" mode=""></image>
				</view>
			</view>
			<view class="h100">
				
			</view>
			<view class="tc">
				客服电话：{{info.tel}}
			</view>
			
			<view @click="call(info.tel)" class="text-green tc flex aj-center mt30">
				<text class="cuIcon-phone fs40"></text> 拨打电话
			</view>
			
		</page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {}
			}
		},
		onLoad() {
			this.getContactUs()
		},
		methods: {
			call(num) {
				uni.makePhoneCall({
				    phoneNumber: num
				});
			},
			async getContactUs() {
				const res = await this.post('/wap/Setting/contactUs')
				this.info = res.data
			},
		}
	}
</script>

<style>

</style>
