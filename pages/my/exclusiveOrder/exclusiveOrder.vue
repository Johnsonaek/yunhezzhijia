<template>
	<page title="专属密令">
		<view class="pt50 mlr20 mt20 radius10" style="background-image: linear-gradient(-90deg,#4ABEF8,#0FA9F6); padding-bottom: 50px;">
			<text class="flex a-center j-center text-white fs26 mb30">系统自动分配邀请码</text>
			<text class="flex a-center j-center text-white fs40" style="line-height: 1em;">{{userInfo.invite_code}}</text>
		</view>
		<!-- <view class="ptb50 mlr20 mt20 radius10" style="background-image: linear-gradient(-90deg,#F82840,#FB3C76);">
			<text class="flex a-center j-center text-white fs26 mb40">我的专属自定义邀请码</text>
			<view class="flex a-center j-center">
				<navigator url="" class="flex a-center j-center fs26 w300 h40 bg-white radius30 h60" style="color: #F82840;">设置自定义邀请码</navigator>
			</view>
		</view> -->
		<view class="mt50 plr20">
			<view class="fs36 fw600 mb30">注意事项</view>
			<rich-text :nodes="info.note"></rich-text>
		</view>
	</page>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
				info: {}
			}
		},
		computed: {
			...mapState({
				userInfo: state => state.user.userInfo,
			})
		},
		onLoad() {
			this.getNote()
		},
		computed: {
			...mapState({
				PageCur: 'PageCur',
				userInfo: state => state.user.userInfo,
			})
		},
		methods: {
			async getNote() {
				const res = await this.post('/wap/Setting/inviteCodeNote')
				this.info = res.data
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #FFFFFF;
	}
</style>
