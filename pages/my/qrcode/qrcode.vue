<template>
	<view>
		<page title="邀请好友">
			<view class="abs" style="opacity: 0;">
				<tki-qrcode ref="qrcode" :val="val" :size="size" :onval="true" :loadMake="loadMake" :usingComponents="true" @result="qrR" />
			</view>

			<view class="relative">
				<wm-poster
					ref="poster"
					imgSrc="/static/images/default-tx.png"
					QrSrc="/static/images/default-tx.png"
					:qrBase64="src"
					Title=""
					PriceTxt=""
					OriginalTxt=""
				></wm-poster>
			</view>

			<view @click="goto('/pages/my/qrcode/rules/rules')" class="" slot="right">奖励规则</view>
			<view class="bg_bottom">
				<view class="flex a-center abs abscc tc" style="width: 80%;">
					<view class="flex-item"><view class="qui-btn inline h80 bg-white round w240">分享海报</view></view>
					<view class="flex-item"><view class="qui-btn inline h80 bg-white round w240">分享链接</view></view>
				</view>
			</view>
		</page>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import '@/utils/ican-H5Api.js';
import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue';
import wmPoster from '@/components/wm-poster/wm-poster2.vue';
export default {
	components: { wmPoster },
	data() {
		return {
			bg: '',
			qrcode: '',
			ifShow: false,
			val: '',
			size: 260, // 二维码大小
			unit: 'upx', // 单位
			loadMake: true, // 组件加载完成后自动生成二维码
			src: '' // 二维码生成后的图片地址或base64
		};
	},
	onLoad() {
		this.getBgimg();
		this.getQrcode();
	},
	computed: {
		...mapState({
			userInfo: state => state.user.userInfo
		})
	},
	mounted() {
		setTimeout(() => {
			this.crePoster();
		}, 200);
	},
	methods: {
		crePoster() {
			this.$refs.poster.OnCanvas();
		},
		async getBgimg() {
			const res = await this.post('/wap/Setting/inviteBackgroundImg');
			this.bg = res.data.imgUrl;
		},
		qrR(res) {
			this.src = res;
			console.log(this.src);
		},
		paste(value) {
			uni.setClipboardData({
				data: value,
				success() {
					uni.showToast({
						title: '复制成功'
					});
				}
			});
		},
		saveImg() {
			uni.showToast({
				title: '请截图保存',
				icon: 'none'
			});
		},
		getQrcode() {
			var me = this;
			// y请求接口 把要生成二维码的内容 赋值给 val
			me.val = '123';
		}
	}
};
</script>

<style lang="scss">
.bg_bottom {
	left: 0;
	bottom: 0;
	position: fixed;
	width: 750rpx;
	height: 200rpx;
	overflow: hidden;
	&::after {
		top: 0;
		left: 0;
		position: absolute;
		display: block;
		content: '';
		width: 750rpx;
		height: 320rpx;
		background-color: #f02731;
		border-radius: 50%;
		transform: scale(1.5);
		transform-origin: center top;
	}
}
</style>
