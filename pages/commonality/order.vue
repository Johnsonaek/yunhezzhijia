<!-- 提交订单 -->
<template>
	<view>
		<view class="commodity">
			<view class="commodity-left">
				<image src="../../static/index/index30.png"></image>
			</view>
			<view class="commodity-center">
				<view class="name">翅桶</view>
				<view class="specifc">翅根4块+烤翅4块+翅中2块</view>
				<view class="pirce">返佣<text>￥8</text></view>
			</view>
			<view class="commodity-right">￥32</view>
		</view>
		<!-- 表格 -->
		<view class="table">
			<view class="tablet">
				<view class="tablename">数量</view>
				<view class="tablenub">
					<u-number-box 
					:min="1" 
					:max="100"
					:input-width="100" 
					:input-height="60">
					</u-number-box>
				</view>
			</view>
			<view class="tablet">
				<view class="tablename">付款累计</view>
				<view class="tablenub">￥12</view>
			</view>
			<view class="tablet">
				<view class="tablename">返佣累计</view>
				<view class="tablenub">￥12</view>
			</view>
			<view class="tablet">
				<view class="tablename">手机号码</view>
				<view class="tablenub">17674633339</view>
			</view>
		</view>
		
		<view class="place"></view>
		<view class="footer">
			￥12  提交订单
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	page{
		background-color: #f3f3f3;
	}
	.place {
		width: 100%;
		background-color: #f3f3f3;
		height: 120upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	.commodity{
		background-color: #FFFFFF;
		padding: 24upx;
		display: flex;
		justify-content: space-around;
		.commodity-left{
			image{
				border-radius: 10upx;
				width: 218upx;
				height: 218upx;
			}
		}
		.commodity-center{
			margin-left: 20upx;
			.name{
				font-size:40upx;
				font-weight:bold;
				margin-bottom: 24upx;
				color:rgba(34,34,34,1);
			}
			.specifc{
				background-color: #f3f3f3;
				color: #999999;
				padding: 18upx;
				border-radius: 10upx;
				margin-bottom: 34upx;
			}
			.pirce{
				color: #999999;
				font-weight: bold;
				text{
					color: #F82840;
				}
			}
		}
		.commodity-right{
			color: #F82840;
		}
	}
	.table{
		margin-top: 24upx;
		background-color: #FFFFFF;
		padding: 0 24upx;
		.tablet{
			padding:24upx 0;
			border-bottom:  1px solid #F3F3F3;
			display: flex;
			justify-content: space-between;
			.tablename{
				margin-left: 20upx;
				font-size:30upx;
				font-weight:bold;
				color:rgba(34,34,34,1);
			}
			.tablenub{
				margin-right: 20upx;
				font-size:30upx;
				font-weight:bold;
				color:#F82840;
			}
		}
		}
		.footer{
			position: fixed;
			left: 0;
			bottom: 0;
			width:100%;
			background-color: #F82840;
			color: #FFFFFF;
			font-size: 30upx;
			height: 100upx;
			line-height: 100upx;
			text-align: center;
			}
</style>
