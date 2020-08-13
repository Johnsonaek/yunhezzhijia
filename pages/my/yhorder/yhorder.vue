<template>
	<view>
		<view class="flex bg-white pb20 mb10">
			<view class="flex-item flex a-center j-center fs22 h80" v-for="(ele, i) in orderlist" :key="i" :class="{active:ele.isActive}" @tap="isActive(i)">
				<text>{{ele.title}}</text>
			</view>
		</view>
		<view class="bg-white plr20 mb20">
			<view class="flex pt30 pb30 plr20">
				<view class="flex-item fw600">烟台农家店</view>
				<view class="w150 text-red tr">待付款</view>
			</view>
			<view class="pb20 plr20" style="border-bottom: 1px solid #f1f1f1;">
				<navigator url="../yhorderContent/yhorderContent">
					<view class="flex mb10">
						<image src="../../../static/business/rangking/v2_qaxhld.jpg" class="wh200 mr20"></image>
						<view class="flex-item">
							<view class="fs30 fw600 mt20 mb20">烟台红富士苹果水果礼盒生</view>
							<view class="fs22 mb30 text-gray">规格：85~95mm</view>
							<view class="flex">
								<text class="flex-item flex fs34 text-red"><b class="fs24 fw300">￥</b>19.80<text class="fs34 fw600 text-gray ml10" style="text-decoration: line-through;"><b class="fs24 fw600">￥</b>29.80</text></text>
								<text class="w100 tr fs26">x1</text>
							</view>
						</view>
					</view>
					<view class="flex mb15">
						<view class="flex-item fs26 flex a-center">预估佣金：<text class="ml5 text-red fs30">￥3.65</text></view>
						<view class="flex-item fs26 flex a-center" style="justify-content: flex-end;">共1件 总计：<text class="ml5 text-red fs30">￥19.80</text></view>
					</view>
				</navigator>
				<view class="flex">
					<view class="flex-item h40 fs22 text-gray flex a-center">2020-06-02 16:18:22</view>
					<view class="flex w260" style="justify-content:space-between;">
						<navigator class="w120 h40 fs22 flex a-center j-center radius10" style="color: #df0800; border: 1px solid #df0800;">取消订单</navigator>
						<navigator class="w120 h40 fs22 flex a-center j-center radius10" style="color: #44ad13; border: 1px solid #44ad13;">立即购买</navigator>
					</view>
				</view>
			</view>
		</view>
		
		<view class="bg-white plr20 mb20">
			<view class="flex pt30 pb30 plr20">
				<view class="flex-item fw600">烟台农家店</view>
				<view class="w150 text-default tr">待发货</view>
			</view>
			<view class="pb20 plr20" style="border-bottom: 1px solid #f1f1f1;">
				<navigator url="../yhorderContent/yhorderContent">
					<view class="flex mb10">
						<image src="../../../static/business/rangking/v2_qaxhld.jpg" class="wh200 mr20"></image>
						<view class="flex-item">
							<view class="fs30 fw600 mt20 mb20">烟台红富士苹果水果礼盒生</view>
							<view class="fs22 mb30 text-gray">规格：85~95mm</view>
							<view class="flex">
								<text class="flex-item flex fs34 text-red"><b class="fs24 fw300">￥</b>19.80<text class="fs34 fw600 text-gray ml10" style="text-decoration: line-through;"><b class="fs24 fw600">￥</b>29.80</text></text>
								<text class="w100 tr fs26">x1</text>
							</view>
						</view>
					</view>
					<view class="flex mb15">
						<view class="flex-item fs26 flex a-center">预估佣金：<text class="ml5 text-red fs30">￥3.65</text></view>
						<view class="flex-item fs26 flex a-center" style="justify-content: flex-end;">共1件 总计：<text class="ml5 text-red fs30">￥19.80</text></view>
					</view>
				</navigator>
				<view class="flex">
					<view class="flex-item h40 fs22 text-gray flex a-center">2020-06-02 16:18:22</view>
				</view>
			</view>
			<view class="pb20 plr20" style="border-bottom: 1px solid #f1f1f1;">
				<navigator url="../yhorderContent/yhorderContent">
					<view class="flex mb10">
						<image src="../../../static/business/rangking/v2_qaxhld.jpg" class="wh200 mr20"></image>
						<view class="flex-item">
							<view class="fs30 fw600 mt20 mb20">烟台红富士苹果水果礼盒生</view>
							<view class="fs22 mb30 text-gray">规格：85~95mm</view>
							<view class="flex">
								<text class="flex-item flex fs34 text-red"><b class="fs24 fw300">￥</b>19.80<text class="fs34 fw600 text-gray ml10" style="text-decoration: line-through;"><b class="fs24 fw600">￥</b>29.80</text></text>
								<text class="w100 tr fs26">x1</text>
							</view>
						</view>
					</view>
					<view class="flex mb15">
						<view class="flex-item fs26 flex a-center">预估佣金：<text class="ml5 text-red fs30">￥3.65</text></view>
						<view class="flex-item fs26 flex a-center" style="justify-content: flex-end;">共1件 总计：<text class="ml5 text-red fs30">￥19.80</text></view>
					</view>
				</navigator>
				<view class="flex">
					<view class="flex-item h40 fs22 text-gray flex a-center">2020-06-02 16:18:22</view>
				</view>
			</view>
		</view>
		
		<view class="bg-white plr20 mb20">
			<view class="flex pt30 pb30 plr20">
				<view class="flex-item fw600">福建农家店</view>
				<view class="w150 text-default tr">已收货</view>
			</view>
			<view class="pb20 plr20" style="border-bottom: 1px solid #f1f1f1;">
				<navigator url="../yhorderContent/yhorderContent">
					<view class="flex mb10">
						<image src="../../../static/business/rangking/v2_qaxhld.jpg" class="wh200 mr20"></image>
						<view class="flex-item">
							<view class="fs30 fw600 mt20 mb20">烟台红富士苹果水果礼盒生</view>
							<view class="fs22 mb30 text-gray">规格：85~95mm</view>
							<view class="flex">
								<text class="flex-item flex fs34 text-red"><b class="fs24 fw300">￥</b>19.80<text class="fs34 fw600 text-gray ml10" style="text-decoration: line-through;"><b class="fs24 fw600">￥</b>29.80</text></text>
								<text class="w100 tr fs26">x1</text>
							</view>
						</view>
					</view>
					<view class="flex mb15">
						<view class="flex-item fs26 flex a-center">预估佣金：<text class="ml5 text-red fs30">￥3.65</text></view>
						<view class="flex-item fs26 flex a-center" style="justify-content: flex-end;">共1件 总计：<text class="ml5 text-red fs30">￥19.80</text></view>
					</view>
				</navigator>
				<view class="flex">
					<view class="flex-item h40 fs22 text-gray flex a-center">2020-06-02 16:18:22</view>
					<view class="flex w260" style="justify-content:flex-end;">
						<navigator class="w120 h40 fs22 flex a-center j-center radius10" style="color: #0f100f; border: 1px solid #0f100f;">评价</navigator>
					</view>
				</view>
			</view>
		</view>
		
		<view class="bg-white plr20 mb20">
			<view class="flex pt30 pb30 plr20">
				<view class="flex-item fw600">福建农家店</view>
				<view class="w150 text-red tr">交易关闭</view>
			</view>
			<view class="pb20 plr20" style="border-bottom: 1px solid #f1f1f1;">
				<navigator url="../yhorderContent/yhorderContent">
					<view class="flex mb10">
						<image src="../../../static/business/rangking/v2_qaxhld.jpg" class="wh200 mr20"></image>
						<view class="flex-item">
							<view class="fs30 fw600 mt20 mb20">烟台红富士苹果水果礼盒生</view>
							<view class="fs22 mb30 text-gray">规格：85~95mm</view>
							<view class="flex">
								<text class="flex-item flex fs34 text-red"><b class="fs24 fw300">￥</b>19.80<text class="fs34 fw600 text-gray ml10" style="text-decoration: line-through;"><b class="fs24 fw600">￥</b>29.80</text></text>
								<text class="w100 tr fs26">x1</text>
							</view>
						</view>
					</view>
					<view class="flex mb15">
						<view class="flex-item fs26 flex a-center">预估佣金：<text class="ml5 text-red fs30">￥3.65</text></view>
						<view class="flex-item fs26 flex a-center" style="justify-content: flex-end;">共1件 总计：<text class="ml5 text-red fs30">￥19.80</text></view>
					</view>
				</navigator>
				<view class="flex">
					<view class="flex-item h40 fs22 text-gray flex a-center">2020-06-02 16:18:22</view>
					<view class="flex w260" style="justify-content:flex-end;">
						<navigator class="w120 h40 fs22 flex a-center j-center radius10" style="color: #0f100f; border: 1px solid #0f100f;">删除订单</navigator>
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
				orderlist:[
					{
						title:"全部",
						isActive:true,
					},
					{
						title:"代付款",
						isActive:false,
					},
					{
						title:"代发货",
						isActive:false,
					},
					{
						title:"待收货",
						isActive:false,
					},
					{
						title:"已发货",
						isActive:false,
					}
				]
			}
		},
		methods: {
			isActive (num){
				for(let i in this.orderlist){
					this.orderlist[i].isActive=false;
				}
				this.orderlist[num].isActive = true;
			}
		}
	}
</script>

<style lang="scss">
	.active{
		font-weight: bold;
		position: relative;
		&::after{
			content: "";
			display: block;
			position: absolute;
			width: 60rpx;
			height: 6rpx;
			background-color: #f6390d;
			bottom: 10rpx;
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>
