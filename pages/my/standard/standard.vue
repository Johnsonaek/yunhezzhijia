<template>
	<view>
		<page :title="info.title" bgClass="bg-white">
			<view class="plr30 ptb30">
				<rich-text :nodes="info.content"></rich-text>
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
				const res = await this.post('/wap/Setting/promotionRule')
				this.info = res.data
			}
		}
	}
</script>

<style>

</style>
