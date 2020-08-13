<template>
	<view class="bg-white" style="height: 100vh;">
		<q-titlebar></q-titlebar>
		<view @click="goBack" class="cuIcon-close fs40 abs abslt" slot="left"></view>
		<view class="h100">
			
		</view>
		<view class="flex aj-center flex-column ptb50">
			<image class="wh160 block radius50" src="/static/images/default-tx.png" mode="widthFix"></image>
			<view class="fw600 fs36 mt30">
				云合之家欢迎您
			</view>
		</view>
		<view class="h100"></view>
		<view class="tc mt40">
			<view class="text-gray mb30">
				请选择登录方式
			</view>
			<view class="qui-grids column2 gutter20 plr20">
				<view class="qui-grid">
					<view @click="passwordLogin" class="qui-btn">手机登录</view>
				</view>
				<view class="qui-grid">
					<view @click="wxLogin" class="qui-btn bg-green">微信登录</view>
				</view>
			</view>
		</view>
		<navigator url="/pages/index/index" class="tc mt50">
			跳过这一步，进入APP
		</navigator>
		<view class="plr40 ptb30 mt30 flex a-center fs24 text-gray">
			<label @click="tapRadio" class="mr10 flex a-center">
				<radio :checked="isAgree" style="transform: scale(0.7);" color="#1CBBB4" value="" /><text class="">登录注册代表同意云合之家</text>
			</label>
			
			<text @click="goto('/pages/user-agreement/user-agreement')" class="text-blue">用户协议</text>
			<text class="">和</text>
			<text @click="goto('/pages/privacy-policy/privacy-policy')" class="text-blue">隐私政策</text>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	export default {
		data() {
			return {
				isAgree: false
			}
		},
		methods: {
			...mapMutations(['NavChange','vlogin','initUser']),
			tapRadio() {
				this.isAgree = !this.isAgree
			},
			passwordLogin() {
				if(!this.isAgree) {
					uni.showToast({
						title: '请阅读协议',
						icon: 'none'
					})
					return
				}
				uni.navigateTo({
					url:'/pages/login/password-login/password-login'
				})
			},
			wxLogin() {
				let me = this
				if(!this.isAgree) {
					uni.showToast({
						title: '请阅读协议',
						icon: 'none'
					})
					return
				}
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
				    console.log(loginRes.authResult);
					let openid = loginRes.authResult.openid
					let access_token = loginRes.authResult.access_token
					me.post('/wap/Cis/weixinLogin',{openid:openid,access_token: access_token }).then(res => {
						console.log(res)
						if(res.code == 200) {
							me.vlogin(res.data.token)
							me.NavChange('home');
							
							setTimeout(() => {
								uni.reLaunch({
									url: '/pages/index/index'
								});
							}, 600);
						}
						else if(res.code == 233) {
							uni.navigateTo({
								url: `/pages/login/bind-phone/bind-phone?openid=${openid}&access_token=${access_token}`
							})
						}
					})
				    
					// 获取用户信息
				    // uni.getUserInfo({
				    //   provider: 'weixin',
				    //   success: function (infoRes) {
						  // console.log(infoRes)
				    //       this.
				    //   }
				    // });
				  }
				});
			}
		}
	}
</script>

<style>

</style>
