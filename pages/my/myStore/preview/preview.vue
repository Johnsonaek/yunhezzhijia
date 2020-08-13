<template>
	<view>
		<page title="店铺预览" bgClass="bg-white">
			<view slot="right">
				<text @click="refresh" class="cuIcon-refresh fs40"></text>
			</view>
			<view class="qui-cells">
				<view @click="goto('/pages/my/myStore/setting/setting')" class="qui-cell">
					<view class="mr20">
						<image class="block wh80 radius50" :src="info.shop_logo" mode=""></image>
					</view>
					<view class="cell-bd">
						{{info.shop_name}}
					</view>
					<view class="arrow-r"></view>
				</view>
				
				<view class="qui-grids column2 gutter30-tb plr10">
					<view class="qui-grid">
						<view class="fs30 num">
							{{info.amount}}
						</view>
						<view class="fs24 mt10">店铺账户余额（元）</view>
						<view class="mt20 fs24">
							<text @click="goto('/pages/my/myStore/withdrawal/withdrawal')" class="text-blue">提现</text> <text @click="goto('/pages/my/myStore/recharge/recharge')" class="text-blue ml30">充值</text>
						</view>
					</view>
					<view class="qui-grid">
						<view class="fs30 num">
							{{info.today_sale_amount}}
						</view>
						<view class="fs24 mt10">今日收款（元）</view>
						<view class="mt20 fs24">
							<text @click="goto('/pages/my/myStore/balance/balance?amount='+info.amount)" class="text-blue">查看明细</text>
						</view>
					</view>
				</view>
				<view class="qui-card bg-gradual-red ptb30">
					<view class="qui-grids column2 gutter30-tb plr10">
						<view class="qui-grid">
							<view class="fs30 num">
								{{info.today_sale_num}}
							</view>
							<view class="fs24 mt10">今日订单（笔）</view>
						</view>
						<view class="qui-grid">
							<view class="fs30 num">
								{{info.today_sale_amount}}
							</view>
							<view class="fs24 mt10">今日销售（元）</view>
						</view>
						<view class="qui-grid">
							<view class="fs30 num">
								{{info.total_sale_num}}
							</view>
							<view class="fs24 mt10">累计订单（元）</view>
						</view>
						<view class="qui-grid">
							<view class="fs30 num">
								{{info.total_sale_amount}}
							</view>
							<view class="fs24 mt10">累计销售（元）</view>
						</view>
					</view>
					
					
				</view>
				
				
			</view>
		</page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:{}
			}
		},
		onLoad() {
			this.getInfo()
		},
		methods: {
			refresh() {
				uni.showLoading({
					title:''
				})
				setTimeout(()=>{
					uni.hideLoading()
				}, 600)
				this.getInfo()
			},
			async getInfo() {
				const res = await this.post('/wap/Line/shopInfo');
				
				this.info = res.data
			},
		}
	}
</script>

<style>

</style>
