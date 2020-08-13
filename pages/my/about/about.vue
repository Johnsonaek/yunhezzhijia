<template>
	<view>
		<page title="关于我们">
			<view class="ptb50 flex aj-center bg-white">
				<image class="wh160 block radius50" :src="logo" mode="widthFix"></image>
			</view>
			
			<view class="qui-cells mt30">
				<view class="qui-cell">
					<view class="cell-bd">当前版本</view>
					<view>1.0.0</view>
				</view>
				<navigator url="/pages/user-agreement/user-agreement" class="qui-cell">
					<view class="cell-bd">用户协议</view>
					<view class="arrow-r"></view>
				</navigator>
				<navigator url="/pages/privacy-policy/privacy-policy" class="qui-cell">
					<view class="cell-bd">隐私政策</view>
					<view class="arrow-r"></view>
				</navigator>
				<navigator url="/" class="qui-cell">
					<view class="cell-bd">分享云合之家</view>
					<view class="arrow-r"></view>
				</navigator>
			</view>
		</page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logo:''
			}
		},
		onLoad() {
			this.getAbout()
		},
		methods: {
			async getAbout(){
				const res = await this.post('/wap/Setting/aboutUs')
				if(res.code == 200){
					this.logo = res.data.app_logo
				}
			}
		}
	}
</script>

<style>

</style>
