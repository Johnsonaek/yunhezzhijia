<template>
	<view>
		<page title="提现">
			<!-- <view @click="goto('/pages/my/balanceWithdrawal/list/list')" slot="right">提现记录</view> -->
			<view class="qui-cells shadow-xy0 qui-card">
				<view class="qui-cell">
					<view class="cell-bd">提现银行卡</view><view>{{bankInfo.bank_name}}({{cardId}})</view>
				</view>
			</view>
			<view class="mb20 qui-card shadow plr30">
				<view class="flex a-center h80 fs30 mb50">提现金额</view>
				<view class="pb10" style="border-bottom: 1px solid #EEEEEE;">
					<label class="flex a-center j-center">
						<text class="wh50 fs50">￥</text>
						<input type="text" v-model="form.amount" class="flex-item tr fs50" placeholder="金额" />
					</label>
				</view>
				<view class="flex">
					<text class="flex-item fs24 flex a-center h80" style="color:#999999;">当前可提现余额{{ config.amount }}元</text>
					<text @click="allAmount" class="flex-item fs24 flex a-center h80" style="color:#999999; justify-content: flex-end;">全部提现</text>
				</view>
			</view>
			<view class="plr100 mt50">
				<view @click="submit" class="qui-btn text-white flex a-center j-center h80 round">提现</view>
			</view>
			<view class="mt50 plr20">
				<view class="fs36 fw600 mb30">温馨提示</view>
				<view class="fs24 plr20" style="color:#999999; line-height: 1.8;"><rich-text :nodes="config.tip"></rich-text></view>
			</view>
		</page>
		<qui-keyboard ref="pwdPopup" @finish="finish"></qui-keyboard>
	</view>
</template>

<script>
import quiKeyboard from '@/components/keyboard';
export default {
	components: {
		quiKeyboard
	},
	data() {
		return {
			form: {
				amount: '0',
				pay_password: ''
			},
			bankInfo:{},
			config: {}
		};
	},
	onLoad() {
		this.getConfig();
		this.getBankInfo()
	},
	computed:{
		cardId() {
			let str = this.bankInfo.card_id
			if(str) {
				return str.substring(str.length-4)
			}
			
		}
	},
	methods: {
		async getBankInfo() {
			const res = await this.post('/wap/UserBank/bankInfo')
			this.bankInfo = res.data.bank
		},
		submit() {
			this.$refs.pwdPopup.open();
		},
		withdraw() {
			this.post('/wap/Withdraw/withdrawApply', this.form).then(res => {
				// console.log(res);
				this.success(res,'提现成功',()=>{
					this.form.amount = 0
					this.getConfig();
				})
				
			});
		},
		finish(pwd) {
			this.$refs.pwdPopup.close()
			// 输入完密码返回 你输入的密码 pwd
			this.form.pay_password = pwd;
			this.withdraw();
		},
		allAmount() {
			this.form.amount = this.config.amount;
		},
		async getConfig() {
			const res = await this.post('/wap/Withdraw/withdrawConfig');
			this.config = res.data;
		}
	}
};
</script>

<style scoped>
page {
	background-color: #ffffff;
}
</style>
