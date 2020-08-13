<template>
	<view>
		<page title="APP下载">
			<view class="ptb30 plr50"><q-image :lazyLoad="false" :isRatio="true" :imgwh="[600, 500]" :src="img"></q-image></view>

			<view class="plr30 mt50">
				<view class="flex h90">
					<view class="flex-item flex a-center bg-red light">
						<text class="pl30">{{ userInfo.invite_code }}</text>
					</view>
					<view class="bg w200 flex aj-center bg-red" @click="paste(userInfo.invite_code)">复制邀请码</view>
				</view>
			</view>
			<view class="plr30 mt50"><a href="#" class="mt30 qui-btn bg-white round">下载APP (请先复制邀请码)</a></view>
		</page>
	</view>
</template>

<script>
import '@/utils/ican-H5Api.js';
export default {
	data() {
		return {
			img: '',
			userInfo: {}
		};
	},
	onLoad() {
		this.getUserInfo();
		this.getImg();
	},
	methods: {
		paste(value) {
			uni.setClipboardData({
				data: value,
				success() {
					uni.showToast({
						title: '已复制'
					});
				}
			});
		},
		async getImg() {
			const res = await this.post('/wap/Setting/inviteBackgroundImg');
			this.img = res.data.imgUrl;
		},
		// 获取用户基本信息
		async getUserInfo() {
			const res = await this.post('/wap/Cis/userInfo');
			if (res.code == 200) {
				this.userInfo = res.data.user_info;
			}
		}
	}
};
</script>

<style></style>
