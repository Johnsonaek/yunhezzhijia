<template>
	<view class="mt5">
		<view class="flex a-center j-center bg-white h300 mb20">海报图</view>
		<view class="bg-white flex plr30 pt30 pb40 mb20">
			<view class="flex-item flex a-center j-center" style="flex-wrap:wrap;">
				<image src="../../../static/business/user.png" class="wh80 mb10"></image>
				<text class="flex a-center j-center fs22" style="width: 100%; color: #999999;">产品上传</text>
			</view>
			<view class="flex-item flex a-center j-center" style="flex-wrap:wrap;">
				<image src="../../../static/business/user.png" class="wh80 mb10"></image>
				<text class="flex a-center j-center fs22" style="width: 100%; color: #999999;">活动创建</text>
			</view>
			<view class="flex-item flex a-center j-center" style="flex-wrap:wrap;">
				<image src="../../../static/business/user.png" class="wh80 mb10"></image>
				<text class="flex a-center j-center fs22" style="width: 100%; color: #999999;">微店预览</text>
			</view>
			<view class="flex-item flex a-center j-center" style="flex-wrap:wrap;">
				<image src="../../../static/business/user.png" class="wh80 mb10"></image>
				<text class="flex a-center j-center fs22" style="width: 100%; color: #999999;">微店模板</text>
			</view>
		</view>
		<view class="bg-white flex plr30 ptb20 mb20">
			<view class="w300 fs50">云合微店</view>
			<view class="flex plr20 ptb20 fs26 h150" style="border: 1px solid #000000; text-align: justify;">开通云合微店后，你可以在全城甄选优品做好物推荐，无需囤货和发货，你也可以上传自己的产品自行发货售后服务！</view>
		</view>
		<view>
			<view class="bg-white flex" style="border-bottom: 1px solid #888888;">
				<view class="flex-item flex a-center j-center fw600 h80" style="color: #888888;" v-for="(ele, i) in storenav" :key="i" :class="{hover:ele.isActive}" @tap="navActive(i)">{{ele.title}}</view>
			</view>
			<view class="bg-white mb20 ptb20 plr20">
				<view class="flex mb10">
					<image src="../../../static/business/rangking/v2_qaxhld.jpg" class="wh300 mr20"></image>
					<view class="flex-item">
						<view class="fs32 mb20">烟台红富士苹果水果礼盒生鲜一级果径80-85mm</view>
						<view class="fs22 mb20" style="color: #888888;">上架时间：2020-05-26</view>
						<view class="fs22 mb10">拿货价<text class="text-red">￥19.80</text></view>
						<view class="fs22 mb10">销售价<text class="text-red">￥19.80</text></view>
						<view class="fs22 mb10">赚<text class="text-red">￥19.80</text></view>
					</view>
				</view>
				<view class="flex a-center j-center ptb10">
					<view class="flex-item flex a-center j-center">
						<navigator class="flex a-center j-center h60 radius30 fs24" style="width: 80%; border: 1px solid #2594f4;color: #2594f4;">编辑商品</navigator>
					</view>
					<view class="flex-item flex a-center j-center">
						<navigator class="flex a-center j-center h60 radius30 fs24" style="width: 80%; border: 1px solid #f37b44;color: #f37b44;">下架商品</navigator>
					</view>
				</view>
			</view>
			<view class="bg-white mb20 ptb20 plr20">
				<view class="flex mb10">
					<image src="../../../static/business/rangking/v2_qaxhld.jpg" class="wh300 mr20"></image>
					<view class="flex-item">
						<view class="fs32 mb20">烟台红富士苹果水果礼盒生鲜一级果径80-85mm</view>
						<view class="fs22 mb20" style="color: #888888;">上架时间：2020-05-26</view>
						<view class="fs22 mb10">拿货价<text class="text-red">￥19.80</text></view>
						<view class="fs22 mb10">销售价<text class="text-red">￥19.80</text></view>
						<view class="fs22 mb10">赚<text class="text-red">￥19.80</text></view>
					</view>
				</view>
				<view class="flex a-center j-center ptb10">
					<view class="flex-item flex a-center j-center">
						<navigator class="flex a-center j-center h60 radius30 fs24" style="width: 80%; border: 1px solid #2594f4;color: #2594f4;">编辑商品</navigator>
					</view>
					<view class="flex-item flex a-center j-center">
						<navigator class="flex a-center j-center h60 radius30 fs24" style="width: 80%; border: 1px solid #f37b44;color: #f37b44;">下架商品</navigator>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				storenav: [
					{
						title:"销售中",
						isActive:true
					},
					{
						title:"已下架",
						isActive:false
					}
				]
			}
		},
		methods: {
			navActive (numb){
				for(let i in this.storenav){
					this.storenav[i].isActive=false;
				}
				this.storenav[numb].isActive = true;
			},
		}
	}
</script>

<style lang="scss">
	.hover{
		position: relative;
		color: #fb5959 !important;
		&::after{
			content: "";
			display: block;
			width: 80px;
			height: 4px;
			background-color: #fb5959;
			position: absolute;
			left: 50%;
			bottom: 0;
			transform: translateX(-50%);
		}
	}
</style>
