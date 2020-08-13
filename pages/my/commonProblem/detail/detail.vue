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
		onLoad(e) {
			this.id = e.id
			this.getInfo()
		},
		methods: {
			async getInfo() {
				const res = await this.post('/wap/CommonQuestion/questionDetail', {id: this.id})
				this.info = res.data.question
			}
		}
	}
</script>

<style>

</style>
