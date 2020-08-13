<template>
	<view>
		<page title="忘记密码" bgClass="bg-white">
			<view class="qui-cells">
				<view class="qui-cell bor-left_0">
					<view class="w180">验证码：</view>
					<view class="cell-bd"><input type="text" v-model="form.smscode" value="" placeholder="请输入手机验证码" /></view>
					<view class="qui-btn w160 bg-gray inline small"><send-code type="2" :tel="userInfo.mobile"></send-code></view>
				</view>
				<view class="qui-cell bor-left_0">
					<view class="w180">密码：</view>
					<view class="cell-bd"><input type="text" v-model="form.password" value="" placeholder="请设置你的新密码" /></view>
				</view>
				<view class="qui-cell bor-left_0">
					<view class="w180">确认密码：</view>
					<view class="cell-bd"><input type="text" v-model="form.confirm_password" value="" placeholder="请输入确认密码" /></view>
				</view>
				<view class="h60"></view>
				<view class="plr50 mt50">
					<view @click="submit" class="qui-btn round">确定</view>
				</view>
			</view>
			
		</page>
	</view>
</template>

<script>
	import sendCode from '@/components/send-code.vue';
	import { mapState, mapMutations } from 'vuex';
	export default {
		components:{
			sendCode
		},
		data() {
			return {
				mobile: '',
				form: {
					password:'',
					confirm_password: '',
					smscode: ''
				}
			}
		},
		onLoad() {
			this.isLogin(true)
		},
		computed:{
			...mapState({
				userInfo: state => state.user.userInfo,
			})
		},
		methods: {
			submit() {
				let vRules = [
					{ name: 'password', type: 'required', errmsg: '请输入密码' },
					{name: 'confirm_password', type: 'required', errmsg: '请输入确认密码'},
					{name: 'password', type: 'eq', eqName: 'confirm_password', required: true, errmsg: '两次输入密码不一致'},
					{ name: 'smscode', type: 'required', errmsg: '请输入验证码' },
				];
				
				let vRes = this.$validate.validate(this.form, vRules);
				
				if (!vRes.isOk) {
					uni.showToast({
						icon: 'none',
						title: vRes.errmsg
					});
					return false;
				}
				this.resetPassword()
			},
			async resetPassword() {
				const res = await this.post('/wap/Cis/setPassword', this.form)
				this.success(res, '密码修改成功,重新登录~', function() {
					uni.removeStorageSync('token')
					setTimeout(() => {
						uni.reLaunch({
							url: '/pages/login/login'
						})
					},1000)
				});
			}
		}
	}
</script>

<style>

</style>
