<template>
	<view>
		<page title="店铺预览" bgClass="bg-white">
			<view slot="right">
				<text class="cuIcon-refresh fs40"></text>
			</view>
			<view class="qui-cells">
				<view @click="goto('/pages/my/yh-store/setting/setting')" class="qui-cell">
					<view class="mr20">
						<image class="block wh120 radius50" :src="info.path" mode=""></image>
					</view>
					<view class="cell-bd">
						{{info.name}}
					</view>
					<view class="arrow-r"></view>
				</view>
				<view class="qui-card bg-gradual-red ptb30">
					<view class="qui-grids column3 gutter10 plr10">
						<view class="qui-grid">
							<view class="fs30 num">
								{{info.today_order_num}}
							</view>
							<view class="fs24 mt10">今日订单（笔）</view>
						</view>
						<view class="qui-grid">
							<view class="fs30 num">
								{{info.today_total_amount}}
							</view>
							<view class="fs24 mt10">今日销售（元）</view>
						</view>
						<view class="qui-grid">
							<view class="fs30 num">
								{{info.today_income_amount}}
							</view>
							<view class="fs24 mt10">今日营收（元）</view>
						</view>
					</view>
					<view class="hr mtb20 bor-1px-b mlr30"></view>
					<view class="qui-grids column3 gutter10 plr10">
						<view class="qui-grid">
							<view class="fs30 num">
								{{info.total_order_num}}
							</view>
							<view class="fs24 mt10">累计订单（笔）</view>
						</view>
						<view class="qui-grid">
							<view class="fs30 num">
								{{info.history_total_amount}}
							</view>
							<view class="fs24 mt10">累计营收（元）</view>
						</view>
						<view class="qui-grid">
							<view class="fs30 num">
								{{info.fans_num}}
							</view>
							<view class="fs24 mt10">累计粉丝（人）</view>
						</view>
					</view>
				</view>
				<navigator url="/pages/my/yh-store/goods-manage/goods-manage" class="qui-cell">
					<view class="mr20">
						<text class="cuIcon-list"></text>
					</view>
					<view class="cell-bd">
						商品管理
					</view>
					<view class="arrow-r"></view>
				</navigator>
				<view class="qui-cell">
					<view class="mr20">
						<text class="cuIcon-share"></text>
					</view>
					<view class="cell-bd">
						分享小店
					</view>
					<view class="arrow-r"></view>
				</view>
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
			this.getxdInfo()
		},
		methods: {
			getxdInfo() {
				this.post('/wap/OwnSmallShop/shopInfo').then(res => {
					this.info = res.data.shop
				})
			},
		}
	}
</script>

<style>

</style>
