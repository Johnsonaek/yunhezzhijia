<template>
	<view>
		<page title="投放说明" bgClass="bg-white">
			<view class="plr30 ptb30">
				<rich-text :nodes="info.data"></rich-text>
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
			this.getInfo()
		},
		methods: {
			async getInfo() {
				const res = await this.post('/wap/Line/line_shop_recharge');
				console.log(res.data.data)
				this.info = res.data;
			}
		}
	}
</script>

<style>

</style>
