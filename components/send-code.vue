<template>
	<view>
		<view  @tap="sendCode"  v-if="send">获取验证码</view>
		<view v-else>{{time}}s</view>
	</view>
</template>

<script>
	import Config from '@/utils/config.js'
	export default {
		name: 'sendCode',
		data() {
			return {
				timer: null,
				send: true,
				time: null,
			};
		},
		props:{
			// 1注册 2重置密码 3设置交易密码
			type: {
				type: String,
				default: '1'
			},
			url: {
				type: String,
				default: Config.sendCodeApiUrl
			},
			tel: {
				type: String,
				default: ''
			},
			second: {
				type: Number,
				default: 60
			}
		},
		created() {
			this.time = this.second
		},
		methods:{
			async sendCode() {
				
				if (!this.$validate.isPhone(this.tel)) {
				  uni.showToast({
				    icon: 'none',
				    title: '请输入正确的手机号'
				  })
				  
				  return false
				}
				let me = this;
				
				const res = await this.post(this.url, {mobile: this.tel})
			
				if (res.code == 200) {
					me.send = false
					me.timer = setInterval(function() {
						me.time--
						if (me.time <= 0) {
							me.send = true
							me.time = me.second
							clearInterval(me.timer)
						}
					}, 1000)
				}
			
			},
		}
	}
</script>

