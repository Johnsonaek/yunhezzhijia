<template>
	<view>
		<view class="bg-white flex mt5">
			<view class="flex-item flex a-center j-center h80 conmerf-list" v-for="(ele, i) in list" :key="i" :class="{hover:ele.isActive}" @tap="isActive(i)">{{ele.state}}</view>
		</view>
		<view class="mt20 bg-white flex">
			<view class="flex-item flex plr20 pt20 pb20">
				<image src="../../../static/business/rangking/v2_qaob10.jpg" class="wh180 mr20"></image>
				<view class="flex-item">
					<view class="fs30 mb20">清衣秀门店</view>
					<view class="fs24 mb5">全店通用</view>
					<view class="fs24 text-gray">2020-05-21 23:00</view>
					<view class="fs24 text-gray">—</view>
					<view class="fs24 text-gray">2020-05-23 23:00</view>
				</view>
			</view>
			<view class="w240 pt20" :class="[unusable?'bg-red':'bg-gray']">
				<view class="flex a-center j-center mb10 fs40 fw600 text-white">8.5折</view>
				<view class="flex a-center j-center mb20 fs22 fw600 text-white">满168元可用</view>
				<view class="flex a-center j-center" v-if="unusable">
					<navigator class="flex a-center j-center w150 h50 radius10 fs24 text-white" style="border: 1px solid #FFFFFF;">立即使用</navigator>
				</view>
			</view>
		</view>
		<view class="mt20 bg-white flex">
			<view class="flex-item flex plr20 pt20 pb20">
				<image src="../../../static/business/rangking/v2_qaob10.jpg" class="wh180 mr20"></image>
				<view class="flex-item">
					<view class="fs30 mb20">清衣秀门店</view>
					<view class="fs24 mb5">全店通用</view>
					<view class="fs24 text-gray">2020-05-21 23:00</view>
					<view class="fs24 text-gray">—</view>
					<view class="fs24 text-gray">2020-05-23 23:00</view>
				</view>
			</view>
			<view class="w240 pt20" :class="[unusable?'bg-red':'bg-gray']">
				<view class="flex a-center j-center mb10 fs40 fw600 text-white">8.5折</view>
				<view class="flex a-center j-center mb20 fs22 fw600 text-white">满168元可用</view>
				<view class="flex a-center j-center" v-if="unusable">
					<navigator class="flex a-center j-center w150 h50 radius10 fs24 text-white" style="border: 1px solid #FFFFFF;">立即使用</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						state:"未使用",
						isActive:true,
					},
					{
						state:"已使用",
						isActive:false,
					},
					{
						state:"已失效",
						isActive:false,
					}
				],
				unusable:true,
			}
		},
		methods: {
			isActive (num){
				for(let i in this.list){
					this.list[i].isActive=false;
				}
				this.list[num].isActive = true;
				if(num==0){
					this.unusable=true
				}else{
					this.unusable=false
				}
			}
		}
	}
</script>

<style lang="scss">
	.bg-gray{
		background-color:#b3b3b3 !important;
		}
	.conmerf-list{
		position: relative;
		&.hover{
			color: #fb5959;
			&::after{
				content: "";
				display: block;
				position: absolute;
				left: 25%;
				bottom: 0;
				width: 50%;
				height: 6rpx;
				background-color: #fb5959;
			}
		}
	}
</style>
