<template>
	<page title="收益报表">
		<view class="bg-white ptb30">
			<view class="radius10 mlr20 plr30 pt30 pb50" style="background: url(../../../static/business/profit_head.png) no-repeat center center;background-size: cover;">
				<view class="flex mb30">
					<view class="flex-item">
						<view class="fs22 text-white mb20">用户余额（元）</view>
						<text class="fs40 text-white fw600">2000.00</text>
					</view>
					<view class="w200 flex a-center" style="justify-content: flex-end; ">
						<navigator url="../balanceWithdrawal/balanceWithdrawal" class="bg-white radius30 w100 h50 flex a-center j-center fs24" style="color: #F82840;">提现</navigator>
					</view>
				</view>
				<view class="flex">
					<view class="flex-item">
						<view class="flex a-center j-center text-white fs22 mb20">累计收益</view>
						<text class="flex a-center j-center text-white fs30 fw600">1800.00</text>
					</view>
					<view class="flex-item">
						<view class="flex a-center j-center text-white fs22 mb20">已提现(元)</view>
						<text class="flex a-center j-center text-white fs30 fw600">900.00</text>
					</view>
					<view class="flex-item">
						<view class="flex a-center j-center text-white fs22 mb20">未结算(元)</view>
						<text class="flex a-center j-center text-white fs30 fw600">300.00</text>
					</view>
				</view>
			</view>
			<view class="flex" style="background-color: #F5465A; border-radius: 20px 20px 0 0; box-shadow:0px 0px 24px 0px rgba(0, 0, 0, 0.2);margin-top: -15px;">
				<view class="flex-item flex a-center j-center h80" v-for="(ele, i) in list" :key="i" :class="{ hover: ele.isActive }" @tap="isActive(i)">
					<text class="flex a-center j-center text-white fs28 w100 h50 radius30">{{ ele.date }}</text>
				</view>
			</view>
		</view>

		<view class="bg-white plr30 h80 fs22 flex a-center fw600">结算收入：￥39.00</view>
		<view class="bg-white plr30 mb20">
			<view class="flex ptb20r">
				<view class="fw600 fs22 flex-item flex a-center j-center">我的订单收益</view>
				<view class="flex-item flex" style="justify-content: flex-end;">
					<view class="flex a-center j-center w100 h40 radius30 fs22 ml20" style=" background-color: #FFD1D6; color: #F5465A;" @tap="openCheck">
						全部
						<image src="../../../static/business/arrow-d.png" class="wh20 ml10"></image>
					</view>
				</view>
			</view>
			<view class="flex ptb30" style="border-bottom: 1px solid #f3f3f3;">
				<view class="flex-item">
					<view class="flex a-center j-center fs22 mb20" style="color: #666666;">付款笔数</view>
					<view class="flex a-center j-center fs22 mb20" style="color: #666666;">3</view>
				</view>
				<view class="flex-item">
					<view class="flex a-center j-center fs22 mb20" style="color: #666666;">预估收益</view>
					<view class="flex a-center j-center fs22 mb20" style="color: #666666;">￥39.00</view>
				</view>
			</view>

			<view class="pt30 flex">
				<view class="fw600 fs22 flex-item flex j-center">团队订单收益</view>
				<view class="flex-item"></view>
			</view>
			<view class="flex ptb30">
				<view class="flex-item">
					<view class="flex a-center j-center fs22 mb20" style="color: #666666;">付款笔数</view>
					<view class="flex a-center j-center fs22 mb20" style="color: #666666;">0</view>
				</view>
				<view class="flex-item">
					<view class="flex a-center j-center fs22 mb20" style="color: #666666;">预估收益</view>
					<view class="flex a-center j-center fs22 mb20" style="color: #666666;">￥0.00</view>
				</view>
			</view>
		</view>
		<view class="bg-white">
			<navigator class="flex a-center h80 plr20" style="border-bottom: 1px solid #f3f3f3;" url="../balance/balance">
				<text class="flex-item fs24">余额明细</text>
				<view class="arrow-r"></view>
			</navigator>
			<navigator class="flex a-center h80 plr20" url="/pages/my/balanceWithdrawal/list/list">
				<text class="flex-item fs24">提现记录</text>
				<view class="arrow-r"></view>
			</navigator>
		</view>
		<view class="platformcheck" v-if="platformCheck">
			<view class="platformcheck-bg" @tap="close"></view>
			<view class="platformcheck-box bg-white">
				<view class="flex a-center j-center fs30 h80">选择平台</view>
				<view class="flex pb40" style="flex-wrap: wrap;">
					<view class="ptb20" style="width: 20%;">
						<view class="flex j-center mb15">
							<image src="../../../static/business/ordericon/ordericon1.png" class="wh70"></image>
						</view>
						<text class="flex j-center fs22">全部订单</text>
					</view>
					<view class="ptb20" style="width: 20%;">
						<view class="flex j-center mb15">
							<image src="../../../static/business/ordericon/ordericon2.png" class="wh70"></image>
						</view>
						<text class="flex j-center fs22">苏宁</text>
					</view>
					<view class="ptb20" style="width: 20%;">
						<view class="flex j-center mb15">
							<image src="../../../static/business/ordericon/ordericon3.png" class="wh70"></image>
						</view>
						<text class="flex j-center fs22">饿了么</text>
					</view>
					<view class="ptb20" style="width: 20%;">
						<view class="flex j-center mb15">
							<image src="../../../static/business/ordericon/ordericon4.png" class="wh70"></image>
						</view>
						<text class="flex j-center fs22">飞猪</text>
					</view>
					<view class="ptb20" style="width: 20%;">
						<view class="flex j-center mb15">
							<image src="../../../static/business/ordericon/ordericon10.png" class="wh70"></image>
						</view>
						<text class="flex j-center fs22">附近小店</text>
					</view>
					<view class="ptb20" style="width: 20%;">
						<view class="flex j-center mb15">
							<image src="../../../static/business/ordericon/ordericon5.png" class="wh70"></image>
						</view>
						<text class="flex j-center fs22">VIP影视</text>
					</view>
					<view class="ptb20" style="width: 20%;">
						<view class="flex j-center mb15">
							<image src="../../../static/business/ordericon/ordericon7.png" class="wh70"></image>
						</view>
						<text class="flex j-center fs22">天猫</text>
					</view>
					<view class="ptb20" style="width: 20%;">
						<view class="flex j-center mb15">
							<image src="../../../static/business/ordericon/ordericon11.png" class="wh70"></image>
						</view>
						<text class="flex j-center fs22">阿里健康</text>
					</view>
					<view class="ptb20" style="width: 20%;">
						<view class="flex j-center mb15">
							<image src="../../../static/business/ordericon/ordericon8.png" class="wh70"></image>
						</view>
						<text class="flex j-center fs22">9.9包邮</text>
					</view>
					<view class="ptb20" style="width: 20%;">
						<view class="flex j-center mb15">
							<image src="../../../static/business/ordericon/ordericon9.png" class="wh70"></image>
						</view>
						<text class="flex j-center fs22">充值话费</text>
					</view>
					<view class="ptb20" style="width: 20%;">
						<view class="flex j-center mb15">
							<image src="../../../static/business/ordericon/ordericon6.png" class="wh70"></image>
						</view>
						<text class="flex j-center fs22">1元购</text>
					</view>
				</view>
				<view class="flex a-center j-center fs30 h80 fw600" style="border-top: 1px solid #F2F2F2;" @tap="close">取消</view>
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
					date: '本月',
					isActive: false
				},
				{
					date: '上月',
					isActive: false
				}
			],
			platformCheck: false
		};
	},
	methods: {
		isActive(num) {
			for (let i in this.list) {
				this.list[i].isActive = false;
			}
			this.list[num].isActive = true;
		},
		openCheck(){
			this.platformCheck = true
		},
		close(){
			this.platformCheck = false
		}
	}
};
</script>

<style lang="scss">
.hover uni-text {
	background-color: rgba(48, 7, 12, 0.2);
}
/*选择弹出层*/
.platformcheck {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	z-index: 999;
	.platformcheck-bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background-color: rgba(0,0,0,.5);
		z-index: 10;
	}
	.platformcheck-box{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 20;
		border-radius: 15px 15px 0 0;
	}
}
</style>
