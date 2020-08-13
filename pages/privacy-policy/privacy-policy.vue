<template>
	<view>
		<page title="隐私政策">
			<view class="plr30 ptb30">
				<rich-text :nodes="content"></rich-text>
			</view>
		</page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: ''
			}
		},
		onLoad() {
			this.isLogin(false)
			this.getAgreement()
		},
		methods: {
			async getAgreement(){
				const res = await this.post('/wap/Setting/privacyPolicy')
				if(res.code == 200) {
					this.content = res.data.info
				}
			}
		}
	}
</script>

<style>

</style>
