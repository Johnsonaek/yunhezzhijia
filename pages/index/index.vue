<template>
	<view>
		<!-- <view style="position: fixed; left: 0;right:0;top:0;bottom: 0; background-color: rgba(0,0,0,0.5); z-index: 9999999999;">
			<view class="flex a-center">
				<view class="flex-item tc">
					<image class="wh100" src="/static/images/share_pyq.png" mode=""></image>
					<view class="mt10">朋友圈</view>
				</view>
				<view class="flex-item tc">
					<image class="wh100" src="/static/images/share_wx.png" mode=""></image>
					<view class="mt10">微信</view>
				</view>
				<view class="flex-item tc">
					<image class="wh100" src="/static/images/share_link.png" mode=""></image>
					<view class="mt10">复制链接</view>
				</view>
			</view>
		</view> -->
		<view v-show="PageCur == 'home'" :class="{ hidepage: PageCur !== 'home' }"><home :opcity="opcity"></home></view>
		<view v-show="PageCur == 'business'" :class="{ hidepage: PageCur !== 'business' }"><business></business></view>
		<view v-show="PageCur == 'svideo'" :class="{ hidepage: PageCur !== 'svideo' }"><svideo></svideo></view>
		<view v-show="PageCur == 'superior'" :class="{ hidepage: PageCur !== 'superior' }"><superior></superior></view>
		<view v-show="PageCur == 'my'" :class="{ hidepage: PageCur !== 'my' }"><my></my></view>
		<view v-if="!logined && PageCur == 'home'" class="flex unlogin a-center">
			<view class="flex-item pl20">登录账户领取海量优惠券</view>
			<navigator hover-class="none" url="/pages/login/login" class="qui-btn inline small h60 round">去登录</navigator>
		</view>
		<view class="cu-tabbar-height bg-white"></view>
		<bottom-tabbar :navList="navList"></bottom-tabbar>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import Home from '@/pages/home/home.vue';
import Business from '@/pages/business/business.vue';
import Svideo from '@/pages/svideo/svideo.vue';
import Superior from '@/pages/superior/superior.vue';
import My from '@/pages/my/my.vue';
import bottomTabbar from '@/components/bottom-tabbar.vue';
import { mapState, mapMutations } from 'vuex';
import indexMixin from './index.js';
export default {
	mixins: [indexMixin],
	components: {
		uniPopup,
		bottomTabbar,
		Home,
		Business,
		Svideo,
		Superior,
		My
	},
	data() {
		return {
			opcity: 0,
			logined: false,
			navList: [
				{
					text: '首页',
					name: 'home'
				},
				{
					text: '云合商圈',
					name: 'business'
				},
				{
					text: '短视频',
					name: 'svideo'
				},
				{
					text: '云合优品',
					name: 'superior'
				},
				{
					text: '我的',
					name: 'my'
				}
			]
		};
	},
	computed: {
		...mapState({
			PageCur: 'PageCur',
			Location: 'Location'
		})
	},
	onLoad(e) {
		// this.isLogin(true);
		this.initNav();
		this.getHomeCategory();
		this.getBusinessCategory();

		// 获取系统剪贴板内容
		uni.getClipboardData({
			success: function(res) {
				// console.log('dddddddddddddddddddfffff‘）
				console.log(res);
				this.$refs.popup.open();
			}
		});
	},
	onShow() {
		let token = uni.getStorageSync('token');
		if (token) {
			this.logined = true;
			this.getUserInfo();
		} else {
			this.logined = false;
		}
		this.getLocation();
	},
	methods: {
		...mapMutations(['initUser', 'resetLocation', 'initHomeCategory', 'initBusinessCategory', 'vlogin', 'initNav'])
	},
	watch: {
		PageCur(newName, oldName) {
			// this.isLogin(true)
			if (newName === 'home') {
				// 监听页面地切，做你想做的事
				// this.init()
			}
		},
		Location(newName, oldName) {
			console.log('地区改变了');
		}
	}
};
</script>

<style scoped lang="scss">
.hidepage {
	opacity: 0;
}

.active {
	color: var(--themeColor);
}

.msg-box {
	width: 80%;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	background-color: #fff;
	border-radius: 6rpx;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.unlogin {
	color: #fff;
	padding: 10rpx 10rpx;
	position: fixed;
	left: 24rpx;
	right: 24rpx;
	bottom: 120rpx;
	z-index: 99999;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 50rpx;
}
</style>
