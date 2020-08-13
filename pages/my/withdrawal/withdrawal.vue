<template>
	<view bg="bg-color">
		<view class="balace-list" v-for="(ele,i) in list" :key="i">
			<view class="balace-list-left">
				<view class="balace-top-text">{{ele.title}}</view>
				<view class="balace-bottom-text">2020-06-03 10:03</view>
			</view>
			<view class="balace-list-right">+100.00</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						title: '提现到-支付宝',
					},
					{
						title: '提现到-支付宝',
					},
					{
						title: '提现到-支付宝',
					},
					{
						title: '提现到-支付宝',
					}
				],
			};
		}
	}
</script>

<style lang="scss">
	.bg-color{
		background-color: #f8f8f8;
	}
	.fontSize14{
		font-size: 28rpx;
	}
	.fontSize18b{
		font-size: 36rpx;
		font-weight: bold;
	}
	.balace-list{
		padding:0 30rpx;
		margin: 6rpx 0 12rpx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		.balace-list-left{
			width: calc(100% - 200rpx);
			.balace-top-text{
				font-size: 28rpx;
				color: #101010;
				padding: 10rpx 0;
			}
			.balace-bottom-text{
				font-size: 24rpx;
				color: #787878;	
				padding: 10rpx 0;	
			}
		}
		.balace-list-right{
			width: 200rpx;
			text-align: right;
		}
	}
</style>
