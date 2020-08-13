<template>
	<uni-popup ref="authPopup" type="bottom" style="z-index: 999999;">
		<view class="login_popup_page">
			asdfasf
		</view>
	</uni-popup>
</template>

<script>
	import Config from '@/utils/config.js'
	let baseUrl =''
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	import {
		mapMutations
	} from 'vuex';
	export default {
		name: 'AuthPopup',
		components: {
			uniPopup,
		},
		methods:{
			...mapMutations(['login','NavChange']),
			getuserinfo: function(res1) {
				this.close()
				if(res1.detail.errMsg !== 'getUserInfo:ok') return
				let me = this;
				uni.login({
					provider: 'weixin',
					success: function(res2) {
						uni.showLoading({
							title: '登录中'
						})
						// me.NavChange('home')
						uni.request({
							url: baseUrl + '/api/services/public/TokenAuth/WxMiniProgramAuthenticate',
							data: {
								code: res2.code
							},
							method: 'POST',
							header: {
								'content-type': 'application/json',
								'X-Requested-With': 'XMLHttpRequest',
								'Abp.TenantId': 1,
							},
							success: (res3) => {
								// console.log(res3.data.result.accessToken);
								me.login(res3.data.result)
								userConfig.session.login(res3.data.result.accessToken, res3.data.result.encryptedAccessToken);
								uni.hideLoading()
								
			
								// 去更新头像
								wx.getUserInfo({
									success: function(res4) {
										console.log(res4)
										uni.request({
											url: baseUrl + '/api/services/public/Member/UpdateOfWxMiniProgram',
											data: {
												encryptedData: res4.encryptedData,
												iv: res4.iv
											},
											method: 'PUT',
											header: {
												'content-type': 'application/json',
												'X-Requested-With': 'XMLHttpRequest',
												'Abp.TenantId': 1,
												'Authorization': "Bearer " + userConfig.session.token()
											},
											success: (res5) => {
												// 头像修改成功
											},
											complete: (res) => {
												uni.reLaunch({
													url: '/pages/index/index',
												});
											}
										});
			
									}
								})
							}
						});
			
					}
				});
			},
			open() {
				this.$refs['authPopup'].open();
			},
			close() {
				this.$refs['authPopup'].close();
			},
		}
	}
</script>

<style lang="scss">
	.login_popup_page{
		height: 100vh;
		width: 750rpx;
		background-color: #fff;
	}
</style>
