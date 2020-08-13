<template>
	<view>
		<page :title="isBind ? '修改支付宝' : '绑定支付宝'" bgClass="bg-white">
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="cell-bd"><input v-model="form.alipay_name" type="text" value="" placeholder="请输入姓名" /></view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd"><input v-model="form.alipay_account" type="text" value="" placeholder="请输入账号" /></view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd"><input v-model="userInfo.mobile" disabled type="number" maxlength="11" value="" placeholder="请输入手机号码" /></view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd"><input @input="inputHandle" type="number" v-model="form.smscode" maxlength="6" value="" placeholder="请输入验证码" /></view>
					<view class="qui-btn w160 bg-gray inline small"><send-code :tel="userInfo.mobile"></send-code></view>
				</view>
			</view>
			<view class="plr50 ptb50">
				<view v-if="btnGray" class="qui-btn bg-gray">确认添加</view>
				<view v-else class="qui-btn" @click="submit">确认添加</view>
			</view>
		</page>
	</view>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import sendCode from '@/components/send-code.vue';
export default {
	components: { sendCode },
	data() {
		return {
			isBind: false,
			btnGray: true,
			form: {
				smscode: '',
				alipay_name: '',
				alipay_account: ''
			}
		};
	},
	computed: {
		...mapState({
			userInfo: state => state.user.userInfo
		})
	},
	onLoad() {
		this.isBind = this.userInfo.is_zfb == 1 ? true : false;
		this.form.alipay_name = this.userInfo.alipay_name;
		this.form.alipay_account = this.userInfo.alipay_account;
	},
	methods: {
		...mapActions(['updateUserInfo']),
		submit() {
			this.bindZfb();
		},
		async bindZfb() {
			const res = await this.post('/wap/Cis/bindAlipay', this.form);
			this.success(res, '', () => {
				this.updateUserInfo();
				setTimeout(() => {
					uni.navigateBack();
				}, 500);
			});
		},
		inputHandle(event) {
			if (event.detail.value.length >= 4) {
				this.btnGray = false;
			}
		}
	}
};
</script>

<style></style>
