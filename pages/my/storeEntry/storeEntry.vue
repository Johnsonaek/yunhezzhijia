<template>
	<view>
		<view class="h400" style="width: 100%;background: url(../../../static/business/profit_head.png) no-repeat center center; background-size: cover;"></view>
		<view class="mlr20 radius30 plr20 pt50 pb30 relative mb40" style="border: 2px solid #F6F16C; background-color: #F52855;">
			<view class="abs abstc w160 h70 flex a-center j-center fs28 fw600" style="transform:translate(-50%,-50%);border-radius: 30px; background-color: #F6F16C; color: #F20E40;">招商流程</view>
			<view class="text-white">
				1、流程1流程流程流程流程流程流程流程流程流程流程流程
				<br />
				1、流程1
				<br />
				1、流程1
				<br />
				1、流程1
				<br />
				1、流程1
				<br />
				1、流程1
			</view>
		</view>
		<view class="bg-white radius50 mlr30 plr50 pt30 pb50">
			<view class="flex a-center j-center mb30">
				<text class="fs30 fw600" style="color: #F82840;">入驻说明</text>
			</view>
			<view class="fs22 fw600">
				1、必须什么什么什么必须什么什么什么必须什么什么什么什么必须什么什么什么什么什么必须什么什么什么什么什么必须什么什么什么什么什么
				<br />
				<br />
				2、必须什么什么什么必须什么什么什么必须什么什么什么什么必须什么什么什么什么什么必须什么什么什么什么什么必须什么什么什么什么什么
			</view>
			<view class="fs22 fw600">
				1、必须什么什么什么必须什么什么什么必须什么什么什么什么必须什么什么什么什么什么必须什么什么什么什么什么必须什么什么什么什么什么
				<br />
				<br />
				2、必须什么什么什么必须什么什么什么必须什么什么什么什么必须什么什么什么什么什么必须什么什么什么什么什么必须什么什么什么什么什么
			</view>
			<view class="fs22 fw600">
				1、必须什么什么什么必须什么什么什么必须什么什么什么什么必须什么什么什么什么什么必须什么什么什么什么什么必须什么什么什么什么什么
				<br />
				<br />
				2、必须什么什么什么必须什么什么什么必须什么什么什么什么必须什么什么什么什么什么必须什么什么什么什么什么必须什么什么什么什么什么
			</view>
		</view>
		<view class="flex" style="position: fixed; left: 0; bottom: 0; width: 100%; background-color: #717171;">
			<view class="flex-item plr50">
				<label class="flex a-center h100">
					<checkbox value="" class="mr20" />
					<text class="fs26 text-white">同意入驻协议</text>
				</label>
			</view>
			<view class="w180 h100 text-white flex a-center j-center fs26" style="background-color: #F82840;" @tap="showBtn">立即入驻</view>
		</view>
		<view class="flex a-center j-center" style="position: fixed; left: 0;top: 0; width: 100%;height: 100%; z-index: 99;" v-if="isShow">
			<view class="close-bg" style="position: absolute; width: 100%; height: 100%; background-color: rgba(0,0,0,.5); z-index: 99;" @tap="hideBtn"></view>
			<view class="bg-white flex a-center j-center radius10" style="z-index: 109; width: 80%; ">
				<view class="flex-item ptb50">
					<navigator url="">
						<view class="flex a-center j-center mb20">
							<image src="../../../static/business/entryicon1.png" class="wh80"></image>
						</view>
						<text class="flex a-center j-center fw600 fs22">企业线上店铺</text>
					</navigator>
				</view>
				<view class="flex-item ptb50">
					<navigator url="">
						<view class="flex a-center j-center mb20">
							<image src="../../../static/business/entryicon2.png" class="wh80"></image>
						</view>
						<text class="flex a-center j-center fw600 fs22">企业线上店铺</text>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isShow: false,
		};
	},
	methods: {
		showBtn(){
			this.isShow = true
		},
		hideBtn(){
			this.isShow = false
		}
	}
};
</script>

<style scoped>
	page {
		padding-bottom: 60px;
		background-color: #f43962;
	}
</style>
