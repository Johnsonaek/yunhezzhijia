<template>
	<view>
		<page title="注册">
		
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="mr30">+86 <text class="cuIcon-triangledownfill fs40"></text></view>
					<view class="cell-bd">
						<input type="number" v-model="form.mobile" maxlength="11" value="" class="qui-input" placeholder="请输入您的手机号码" />
					</view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">
						<input type="text" v-model="form.smscode" maxlength="6" value="" class="qui-input" placeholder="请输入验证码" />
					</view>
					<view class="qui-btn inline h60 outline round fs24">
						<send-code :tel="form.mobile"></send-code>
					</view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">
						<input type="text" v-model="form.password"  :password="true"  value="" class="qui-input" placeholder="请输入密码" />
					</view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">
						<input type="text" v-model="form.confirm_password" :password="true"  value="" class="qui-input" placeholder="请再次输入密码" />
					</view>
				</view>
			</view>
	
			<view class="h100"></view>
			<view class="plr50 ptb50">
				<view @click="submit" class="qui-btn" :class="btnLoading?'loading':''">
					确认
				</view>
			</view>
		</page>
	</view>
</template>

<script>
	import sendCode from '@/components/send-code.vue'
	export default {
		components:{sendCode},
		data() {
			return {
				btnLoading: false,
				form: {
					type: 1,
					mobile: '',
					password: '',
					confirm_password: '',
					smscode: ''
				}
			}
		},
		methods: {
			submit() {
				/* if(!this.isAgree) {
					uni.showToast({
						icon: 'none',
						title: '请仔细阅读并同意用户协议'
					});
					return
				}
				*/
				let vRules = [
					{ name: 'mobile', required: true, type: 'phone', errmsg: '请输入正确的手机号' },
					{ name: 'password', type: 'required', errmsg: '请输入密码' },
					{name: 'confirm_password', type: 'required', errmsg: '请输入确认密码'},
					{name: 'password', type: 'eq', eqName: 'confirm_password', required: true, errmsg: '两次输入密码不一致'},
					{ name: 'smscode', type: 'required', errmsg: '请输入验证码' },
					// { name: 'code', type: 'required', errmsg: '请输入推荐码' }
				];
				let vRes = this.$validate.validate(this.form, vRules)
				if (!vRes.isOk) {
					uni.showToast({
						icon: 'none',
						title: vRes.errmsg
					});
					return false;
				}
				// 表单验证通过 请求接口
				this.reg()
			},
			async reg() {
				this.btnLoading = true
				const res = await this.post('/wap/Cis/userRegister', this.form)
				if(res.code == 200) {
					this.btnLoading = false
					uni.showToast({
						title: '注册成功'
					})
					setTimeout(() => {
					   uni.navigateBack({
					   	delta:1
					   })	
					},1000)
				} else {
					this.btnLoading = false
				}
			}
		}
	}
</script>

<style>

</style>
