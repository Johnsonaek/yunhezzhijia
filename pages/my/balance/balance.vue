<template>
	<page title="余额明细">
		<view bg="bg-color" style="margin-top: 5px;">
			<view class="balace-header">
				<view class="balace-header-text fontSize14">可用余额</view>
				<view class="balace-header-text fontSize18b">￥838.00</view>
			</view>
			<view class="balace-list" v-for="(ele, i) in BalanceOfSubsidiary" :key="i">
				<view class="balace-list-left">
					<view class="balace-top-text">{{ ele.from_name }}</view>
					<view class="balace-bottom-text">{{ele.created_at}}</view>
				</view>
				<view class="balace-list-right">{{ele.sign}}{{ele.amount}}</view>
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
						title: '点赞',
						show: false
					},
					{
						title: '评论',
						show: false
					},
					{	
						title: '转发',
						show: false
					},
					{
						title: '关注',
						show: false
					}
				],
				BalanceOfSubsidiary:[]
			};
		},
		onLoad(options) {
			this.BalanceOfSubsidiary = JSON.parse(options.BalanceOfSubsidiary)
			console.log(this.BalanceOfSubsidiary)
		}
	};
</script>

<style lang="scss">
.bg-color {
	background-color: #f8f8f8;
}
.fontSize14 {
	font-size: 28rpx;
}
.fontSize18b {
	font-size: 36rpx;
	font-weight: bold;
}
.balace-header {
	background-color: #ffffff;
	padding: 40rpx 0;
	.balace-header-text {
		width: 100%;
		text-align: center;
		color: #101010;
		padding: 30rpx 0;
	}
}
.balace-list {
	padding: 0 30rpx;
	margin: 2rpx 0;
	background-color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	.balace-list-left {
		width: calc(100% - 200rpx);
		.balace-top-text {
			font-size: 28rpx;
			color: #101010;
			padding: 10rpx 0;
		}
		.balace-bottom-text {
			font-size: 24rpx;
			color: #787878;
			padding: 10rpx 0;
		}
	}
	.balace-list-right {
		width: 200rpx;
		text-align: right;
	}
}
</style>
