<template>
	<view>
		<page title="邀请分享说明" bgClass="bg-white">
			<view class="plr30 ptb30">
				<rich-text :nodes="info.inviteRule"></rich-text>
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
				const res = await this.post('/wap/Setting/inviteRule')
				this.info = res.data
			}
		}
	}
</script>

<style>

</style>
