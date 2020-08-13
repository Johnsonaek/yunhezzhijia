<template>
	<view>
		<page title="修改支付密码" bgClass="bg-white">
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="cell-bd"><input v-model="userInfo.mobile" disabled type="number" maxlength="11" value="" placeholder="请输入手机号码" /></view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd"><input type="number" v-model="form.smscode" maxlength="6" value="" placeholder="请输入验证码" /></view>
				    <view class="qui-btn w160 bg-gray inline small"><send-code :tel="userInfo.mobile"></send-code></view>
				</view>
				<view class="qui-cell" @click="enterPwd">
					<input type="number" v-model="form.pay_password" maxlength="6" disabled :password="true" value="" placeholder="请输入支付密码" />
				</view>
			</view>
			<view class="plr50 ptb50">
				<view v-if="btnGray" class="qui-btn bg-gray">确认</view>
				<view v-else class="qui-btn" @click="submit">确认</view>
			</view>
		</page>
		<qui-keyboard title="支付安全键盘" ref="pwdPopup" @finish="finish"></qui-keyboard>
	</view>
</template>

<script>
	import quiKeyboard from '@/components/keyboard';
	import sendCode from '@/components/send-code.vue';
	import { mapState, mapMutations } from 'vuex';
	export default {
		components:{sendCode,quiKeyboard},
		data() {
			return {
				btnGray: true,
				form: {
					smscode: '',
					pay_password: ''
				}
			}
		},
		computed: {
			...mapState({
				userInfo: state => state.user.userInfo
			})
		},
		methods: {
			submit() {
				this.setPayPassword()
			},
			enterPwd() {
				this.form.pay_password = ''
				 this.$refs.pwdPopup.open()
				 this.btnGray = true
			},
			finish(pwd) {
				this.form.pay_password = pwd
				if(this.form.pay_password !== '') {
					this.btnGray = false
				}
				this.$refs.pwdPopup.close()
			},
			async setPayPassword(){
				const res = await this.post('/wap/Cis/setPayPassword', this.form)
				this.success(res, '设置密码成功~',()=>{
					setTimeout(()=>{
						uni.navigateBack()
					},500)
				})
			}
		}
	}
</script>

<style>

</style>
