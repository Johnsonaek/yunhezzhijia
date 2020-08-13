<template>
	<page title="出单排行榜">
		<view class="rangk-header flex h300" style="background-color: #F82840;">
			<view class="flex-item flex j-center a-center fw600 " style="opacity: .8;">
				<image src="../../../static/business/teamRankh.png" class="wh50 mr10"></image>
				<navigator url="/pages/my/ranking/ranking" class="text-white">团队出单榜</navigator>
			</view>
			<view class="flex-item flex j-center a-center fw600 ">
				<image src="../../../static/business/personalRankh.png" class="wh50 mr10"></image>
				<navigator class="text-white">单人出单榜</navigator>
			</view>
		</view>
		<view class="rangkdate-list" style="background-color: #F82840;">
			<view class="bg-white flex" style="border-radius: 20px 20px 0 0; border-bottom: 1px solid #F2F0F0;">
				<view v-for="(ele, i) in list" :key="i" :class="{hover:ele.isActive}" @tap="isActive(i)" class="flex-item flex a-center j-center h100">
					<text class="fs26 plr10 ptb5 radius30">{{ele.date}}</text>
				</view>
			</view>
		</view>
		<view class="pt15 pb15 plr15 bg-white flex">
			<view class="mr20">
				<image src="../../../static/business/rangking/v2_qaob10.jpg" mode="widthFix" class="wh200"></image>
			</view>
			<view class="flex-item">
				<view class="fw500 fs26 h150" style="width: 70%;">InS刺绣美女连衣裙时尚夏季裙2020夏季款</view>
				<view class="flex">
					<view class="flex-item text-red">￥19.80</view>
					<view class="w180 text-red" style="text-align: right;">
						<text class="mr10 text-default">出单量</text>98
					</view>
				</view>
			</view>
		</view>
		<view class="pt15 pb15 plr15 bg-white flex mb10">
			<view class="mr20">
				<image src="../../../static/business/rangking/v2_qaob10.jpg" class="wh200"></image>
			</view>
			<view class="flex-item">
				<view class="fw500 fs26 h150" style="width: 70%;">InS刺绣美女连衣裙时尚夏季裙2020夏季款</view>
				<view class="flex">
					<view class="flex-item text-red">￥19.80</view>
					<view class="w180 text-red" style="text-align: right;">
						<text class="mr10 text-default">出单量</text>98
					</view>
				</view>
			</view>
		</view>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						date: '今日',
						isActive: true
					},
					{
						date: '昨日',
						isActive: false
					},
					{
						date: '近7天',
						isActive: false
					},
					{
						date: '当月(6)',
						isActive: false
					},
					{
						date: '当月(5)',
						isActive: false
					}
				],
			}
		},
		methods: {
			isActive (num){
				for(let i in this.list){
					this.list[i].isActive=false;
				}
				this.list[num].isActive = true;	
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #FFFFFF;
	}
	.rangkdate-list{
		.hover uni-text{
			background-color: #fed4d9;
			color: #EE5062;
		}
	}
</style>
