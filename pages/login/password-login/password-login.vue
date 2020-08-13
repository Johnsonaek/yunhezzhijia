<template>
	<view>
		<page title="密码登录">
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="mr30">
						+86
						<text class="cuIcon-triangledownfill fs40"></text>
					</view>
					<view class="cell-bd"><input v-model="form.mobile" type="number" value="" maxlength="11" class="qui-input" placeholder="请输入您的手机号码" /></view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd"><input v-model="form.password" type="text" value="" :password="true" class="qui-input" placeholder="请输入登录密码" /></view>
				</view>
			</view>
			<view class="plr30 flex space-between mt30">
				<navigator url="/pages/reg/reg" class="text-default">注册</navigator>
				<view class="text-muted">登录遇到问题？</view>
			</view>
			<view class="h100"></view>
			<view @click="submit" class="plr50 ptb50">
				<view :class="btnLoading?'loading':''" class="qui-btn"><text class="text-white">确认登录</text></view>
			</view>
		</page>
	</view>
</template>

<script>
import sendCode from '@/components/send-code.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	components: { sendCode },
	data() {
		return {
			btnLoading: false,
			form: {
				type: 1,
				mobile: '13427573606',
				password: '111111'
			}
		};
	},
	onLoad() {
		this.isLogin(false, true);
	},
	methods: {
		...mapMutations(['NavChange','vlogin','initUser']),
		submit() {
			let vRules = [
				{ name: 'mobile', required: true, type: 'phone', errmsg: '请输入正确的手机号' },
				{ name: 'password', type: 'required', errmsg: '请输入密码' }
			];
			let vRes = this.$validate.validate(this.form, vRules)
			if (!vRes.isOk) {
				uni.showToast({
					icon: 'none',
					title: vRes.errmsg
				});
				return false;
			}
			this.pswlogin()
		},
		async pswlogin() {
			let me = this
			this.btnLoading = true
			const res = await this.post('/wap/Cis/userLogin', this.form)
			if (res.code == 200) {
				this.vlogin(res.data.token)
				this.NavChange('home');
				
				setTimeout(() => {
					uni.reLaunch({
						url: '/pages/index/index'
					});
					this.btnLoading = false
				}, 800);
				
			} else {
				this.btnLoading = false
			}
			
		}
	}
};
</script>

<style></style>
