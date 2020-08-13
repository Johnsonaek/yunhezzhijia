<template>
	<view>
		<page :title="title" bgClass="bg-white" :headbor="false">
			<view v-if="step == 1" class="tc ptb30 plr30">
				<view class="fs28 text-gray">为了您的账户安全，将对原有手机号码验证</view>
				<view class="fs32 text-default mt40">
					<text>已绑定：</text>
					<text class="fw600">{{ userInfo.mobile }}</text>
				</view>
				<view class="flex mt30 number-box  tc aj-center mlr30 mb20">
					<input @input="codeInput" class="smscode-input" type="number" maxlength="4" value="" v-model="smscode" />
					<view :class="smscode.length > index ? 'dot' : ''" class="flex-item h100 flex aj-center" v-for="(item, index) in len" :key="index">
					  <text class="fs40 num">{{smscode[index]}}</text>
					</view>
				</view>
				<view class="mt30"><send-code :tel="userInfo.mobile"></send-code></view>
				
				<view class="plr50 ptb50 mt50">
					<view class="qui-btn" :class="btnDisabled?'disabled':''" @click="nextStep">下一步</view>
				</view>
			</view>
			
			<view  v-if="step == 2" class="step2">
				<view class="qui-cells">
					
					<view class="qui-cell">
						<view class="cell-bd"><input v-model="form.mobile" type="number" maxlength="11" value="" placeholder="请输入新手机号码" /></view>
					</view>
					<view class="qui-cell">
						<view class="cell-bd"><input @input="inputHandle" type="number" v-model="form.smscode" maxlength="6" value="" placeholder="请输入验证码" /></view>
						<view class="qui-btn w160 bg-gray inline small"><send-code :tel="form.mobile"></send-code></view>
					</view>
					<view class="plr50 ptb50 mt50">
						<view class="qui-btn" :class="btnDisabled?'disabled':''" @click="submit">确认修改</view>
					</view>
				</view>
				
			</view>
		</page>
	</view>
</template>

<script>
import sendCode from '@/components/send-code.vue';
import { mapState,mapActions } from 'vuex';
export default {
	components: { sendCode },
	data() {
		return {
			len: ['','','',''],
			btnDisabled: true,
			title: '身份验证',
			step: 1,
			smscode:'',
			form: {
				mobile: '',
				smscode: ''
			}
		};
	},
	computed: {
		...mapState({
			userInfo: state => state.user.userInfo
		})
	},
	methods: {
		...mapActions(['updateUserInfo']),
		submit(){
			this.bindPhone()
		},
		nextStep(){
			this.btnDisabled = true
			this.verifyMobile()
		},
		codeInput(e){
			this.smscode = e.detail.value
			if(this.smscode.length==4){
				this.btnDisabled = false
			}
		},
		inputHandle(e) {
			if(e.detail.value.length==4){
				this.btnDisabled = false
			}
		},
		async verifyMobile(){
			const res = await this.post('/wap/Cis/verifyMobile',{smscode: this.smscode})
			if(res.code == 200){
				this.step = 2
			}
		},
		async bindPhone(){
			const res = await this.post('/wap/Cis/bindMobile',this.form)
			this.success(res, '',()=>{
				this.updateUserInfo();
				setTimeout(()=>{
					uni.navigateBack()
				},500)
			})
		}
	}
};
</script>

<style lang="scss">
	.number-box {
		position: relative;
		.smscode-input{
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 9;
			text-indent: -1000px;
		}
		.flex-item {
			position: relative;
			&::after {
				content: '';
				position: absolute;
				bottom: 10rpx;
				left: 0;
				right: 0;
				margin: 0 auto;
				width: 106rpx;
				height: 4rpx;
				background-color: #aaa;
			}
		}
		.dot:after{
			background-color: #000;
		}
		.dot:before {
			display: none;
			content: '';
			position: absolute;
			bottom: 40rpx;
			left: 0;
			right: 0;
			margin: 0 auto;
			width: 20rpx;
			height: 20rpx;
			border-radius: 50%;
			background-color: #000;
		}
	}
</style>
