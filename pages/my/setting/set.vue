<template>
	<view>
		<page title="设置">
			<view v-if="userInfo" class="container">
				<view class="head">
					<view @click="selectAvater" class="head-top  a-center">
						<image v-if="userInfo.headimgurl" class="block wh120 radius50" :src="userInfo.headimgurl" mode="widthFix"></image>
						<image v-else class="block wh120 radius50" src="/static/images/default-tx.png" mode="widthFix"></image>
						<view class="head-color">
							修改头像
							<text class="arrow-r"></text>
						</view>
					</view>
					<view class="head-top" @tap="showchanid('nickname')">
						昵称
						<view class="head-color">
							<text v-if="userInfo.nickname">{{ userInfo.nickname }}</text>
							<text v-else>设置昵称</text>
							<text class="arrow-r"></text>
						</view>
					</view>
					<view class="head-top" @tap="showchanid('wx_number')">
						微信号
						<view class="head-color">
							<text v-if="userInfo.wx_number">{{ userInfo.wx_number }}</text>
							<text v-else>请填写您的微信号</text>
							<text class="arrow-r"></text>
						</view>
					</view>
				</view>
				<view class="head">
					<view class="head-top" @click="goto('/pages/my/change-phone/change-phone')">
						绑定手机号
						<view class="head-color">
							<text v-if="userInfo.mobile">{{ userInfo.mobile }}</text>
							<text v-else>请绑定手机</text>
							<text class="arrow-r"></text>
						</view>
					</view>
					<navigator url="amend">
						<view @click="goto('/pages/my/change-password/change-password')" class="head-top">
							修改密码
							<text class="arrow-r"></text>
						</view>
					</navigator>
					<view @click="goto('/pages/my/pay-password/pay-password')" class="head-top">
						修改支付密码
						<text class="arrow-r"></text>
					</view>
				</view>
				<view class="head">
					<view @click="goto('/pages/my/bind-zfb/bind-zfb')" class="head-top">
						绑定支付宝
						<view class="head-color">
							<text v-if="userInfo.is_zfb">已绑定</text><text v-else>未绑定</text>
							<text class="arrow-r"></text>
						</view>
					</view>
					<view class="head-top">
						微信授权绑定
						<view class="head-color">
							<text v-if="userInfo.is_wx">已绑定</text><text v-else>未授权</text>
							<text class="arrow-r"></text>
						</view>
					</view>
					<view class="head-top">
						淘宝授权
						<view class="head-color">
							未授权，点击去授权
							<text class="arrow-r"></text>
						</view>
					</view>
					<view @click="goto('/pages/my/bankcard/bankcard')" class="head-top">
						绑定提现银行卡
						<view class="head-color">
							<text class="arrow-r"></text>
						</view>
					</view>
				</view>

				<view class="head">
					<view class="head-top">
						清理缓存
						<view class="head-color">
							0.00M
							<text class="arrow-r"></text>
						</view>
					</view>
					<view @click="goto('/pages/my/about/about')" class="head-top">
						关于我们
					</view>
					<!-- #ifdef APP-PLUS -->
					<!-- <view class="head-top">
						版本
						<view class="head-color">
							当前版本{{curVersion}}
							<u-icon name="arrow-right" color="#8f8f8f" class="icon-right"></u-icon>
						</view>
					</view> -->
					<!-- #endif -->
				</view>
				<view class="out" @click="logout">退出</view>
			</view>
		</page>
		<uni-popup ref="popup" type="center">
			<view style="width: 600rpx;" class="form ptb50 plr30 bg-white relative radius10">
				<view class="fs40" @tap="closePopup('popup')" style="position: absolute; right: 10px; top: 10px; color: #747474;"><text class="cuIcon-close fs40"></text></view>
				<view class="flex a-center j-center fw600 fs30 mb20">填写{{ titleText }}</view>
				<view class="flex a-center j-center fs26 mb50" style="color: #747474;">请正确填写你的{{ titleText }}</view>
				<view class="flex a-center j-center mb40">
					<input type="text" v-model="inputVal" value="" placeholder="" class="radius10 plr20 flex a-center h60 fs26 qui-input" style="border:1px solid #bbbbbb;" />
				</view>
				<view @click="submit" class="qui-btn h80 mb20">保存</view>
				<!-- <view class="flex a-center j-center fs26" style="color: #747474;">可以在设置里修改微信号</view> -->
			</view>
		</uni-popup>
		
		<image-picker :hide="true" ref="imgPicker" :count="1" @success="upSuccess"></image-picker>
	</view>
</template>

<script>
import ImagePicker from '@/components/image-picker.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
	components: { uniPopup, ImagePicker },
	data() {
		return {
			inputVal: '',
			editType: 'nickname',
			form: {},
			src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
			weixinName: '鱼水欢',
			changeName: false,
			changeId: false,
			titleText: ''
		};
	},
	onLoad() {},
	computed: {
		...mapState({
			userInfo: state => state.user.userInfo
		})
	},
	methods: {
		...mapMutations(['NavChange', 'vlogout']),
		...mapActions(['updateUserInfo']),

		submit() {
			this.form[this.editType] = this.inputVal;
			if (this.inputVal == '') {
				uni.showToast({
					title: `请输入${this.titleText}`,
					icon: 'none'
				});
				return;
			}

			this.closePopup('popup');
			this.inputVal = '';
			this.editData();
		},
		async editData() {
			const res = await this.post('/wap/Cis/updateUserInfo', this.form);
			this.success(res, '保存成功', () => {
				this.updateUserInfo();
			});
		},
		logout() {
			this.vlogout();
			this.goto('/pages/login/login');
		},
		showchaname() {
			this.changeName = !this.changeName;
		},
		selectAvater() {
			this.$refs.imgPicker.ChooseImage()
		},
		upSuccess(res) {
			console.log(res.file)
			// 选择完成图片回调返回 res.file 就是上传成功后端返回来的图片路径
			this.form.headimgurl = res.file;
			
			this.editData()
		},
		showchanid(type) {
			this.editType = type;

			switch (type) {
				case 'wx_number':
					this.titleText = '微信号';
					break;
				case 'nickname':
					this.titleText = '昵称';
					break;
			}
			this.$refs.popup.open();
			this.changeId = !this.changeId;
		}
	}
};
</script>

<style lang="scss">
.icon-right {
	margin-left: 10upx;
}
.center {
	padding-top: 28upx;
}
.out {
	background-color: #ffffff;
	text-align: center;
	padding: 20upx 0;
	margin-bottom: 20upx;
}
.bg {
	background-color: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
}
page {
	background-color: #f6f6f6;
}
.head {
	margin: 10upx 0;
	background-color: #ffffff;
	padding: 0 20upx;
	margin-bottom: 20upx;
	.head-top {
		display: flex;
		padding: 25upx 0;
		border-bottom: 1px solid #f6f6f6;
		justify-content: space-between;
		.head-color {
			color: #cacaca;
		}
		image {
			border-radius: 50%;
			width: 80upx;
			height: 80upx;
		}
	}
}
</style>
