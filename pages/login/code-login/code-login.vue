<template>
	<view>
		<page title="验证码登录">
			<navigator url="/pages/login/password-login/password-login" slot="right">
				密码登录
			</navigator>
			
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="mr30">+86 <text class="cuIcon-triangledownfill fs40"></text></view>
					<view class="cell-bd">
						<input type="text" value="" class="qui-input" placeholder="请输入您的手机号码" />
					</view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">
						<input type="text" maxlength="6" value="" class="qui-input" placeholder="请输入验证码" />
					</view>
					<view class="qui-btn inline h60 outline round fs24">
						<send-code tel="13427573606"></send-code>
					</view>
				</view>
			</view>
			<view class="plr30 flex space-between mt30">
				<navigator url="/pages/reg/reg" class="text-default">注册</navigator>
				<view class="text-muted">登录遇到问题？</view>
			</view>
			<view class="h100"></view>
			<view class="plr50 ptb50">
				<view class="qui-btn">
					确认登录
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
