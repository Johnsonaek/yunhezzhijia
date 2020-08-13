<template>
	<view>
		<page title="绑定手机号码">
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="mr30">
						+86
						<text class="cuIcon-triangledownfill fs40"></text>
					</view>
					<view class="cell-bd"><input v-model="form.mobile" type="text" value="" class="qui-input" placeholder="请输入您的手机号码" /></view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd"><input v-model="form.smscode" type="text" maxlength="6" value="" class="qui-input" placeholder="请输入验证码" /></view>
					<view class="qui-btn inline h60 outline round fs24"><send-code :tel="form.mobile"></send-code></view>
				</view>
			</view>
			<view class="h100"></view>
			<view class="plr50 ptb50"><view @click="reg" class="qui-btn">绑定</view></view>
		</page>
	</view>
</template>

<script>
import sendCode from '@/components/send-code.vue';
export default {
	components: { sendCode },
	data() {
		return {
			form: {
				type: 2,
				mobile: '',
				openid: '',
				access_token: '',
				smscode: ''
			}
		};
	},
	onLoad(e) {
		this.form.openid = e.openid;
		this.form.access_token = e.access_token;
	},
	methods: {
		async reg() {
			const res = await this.post('/wap/Cis/userRegister', this.form);
			if (res.code == 200) {
				uni.showToast({
					title: '绑定成功'
				});
				setTimeout(() => {
					uni.reLaunch({
						url: '/pages/index/index'
					});
				}, 600);
			}
		}
	}
};
</script>

<style></style>
