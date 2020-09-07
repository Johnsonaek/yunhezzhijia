<template>
	<view>
		<page title="油站详情">
			<view class="prompt">
				<image src="../../../../static/home/jiayou/ggao.png"></image>
				<view class="shu"></view>
				<view class="prompt_content">
					<view class="content">请在车内操作手机，站内严禁拨打手机</view>
					<view class="content">请告知加油工作人员，本次服务由团油提供</view>
				</view>
			</view>
			
			<view class="gasStation_details">
				<view class="conten_top">
					<image src="../../../../static/home/jiayou/tx.jpg" class="gasStation_img"></image>
					<view class="top_information">
						<view class="gasStation_name">海湾石油光临黄村加油站</view>
						<view class="gasStation_dingwei">
							<image src="../../../../static/home/jiayou/hdingwei.png"></image>
							<view>广东省广州市天河区中山大道666号</view>
						</view>
						<view class="oilprice">
							<view class="number">￥5.08</view>
							<view class="price_gj">比国价降0.63元</view>
							<view class="price_yz">比油站降0.63元</view>
						</view>
						<view class="time">营业时间：24h</view>
					</view>
					
				</view>
				<view class="conten_center">
					<image src="../../../../static/home/jiayou/hui.png"></image>
					<view>加油送精美礼品矿泉水</view>
				</view>
				<view class="conten_bottom">
					<view>
						站内开票
					</view>
				</view>
			</view>
		
			<view class="oil_details">
				<view class="choose_goods">
					<view class="title">选择商品：</view>
					<view class="goods_list">
						<view class="goods_item item">汽油</view>
					</view>
				</view>
				<view class="choose_oilnumber">
					<view class="title">选择油号：</view>
					<view class="oilnumber_list">
						<view class="oilnumber_item item" v-for="(item,index) in oilnumberList" :key="index">{{item}}#</view>
					</view>
				</view>
				<view class="choose_oilgun">
					<view class="title">选择枪号：</view>
					<view class="oilgun_list">
						<view class="oilgun_item item" v-for="(item,index) in oilgunList" :key="index">{{item}}号</view>
					</view>
				</view>

			</view>
		
			<view class="bottom_mesg">
				请您选择<text>枪号</text>，立享<text>优惠加油</text>!
			</view>
		</page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oilnumberList:[92,95],
				oilgunList:[1,3,4,6],
				gasIds:''
			}
		},
		onLoad(options) {
			this.gasIds = options.gasIds
			this.getOliMessage()
			this.login()
			
		},
		methods: {
			async getOliMessage(){
				//获取加油站数据
				
				const res = await this.post('/wap/Coalition/CzbQueryPriceByPhone	',{gasIds:this.gasIds})
				console.log(res)
			},
			async login(){
				//获取加油站数据
				
				const res = await this.post('/wap/Coalition/CzbSecretCode',{phone:13427573606})
				console.log(res)
			}
		}
	}
</script>

<style lang="scss">
	.prompt{
		display: flex;
		align-items: center;
		margin-top: 22rpx;
		padding-left: 26rpx;
		background-color: #FFFBD6;
		height: 120rpx;
		image{
			width: 37rpx;
			height: 37rpx;
			margin-right: 40rpx;
		}
		.shu{
			height: 45rpx;
			border-right: 4rpx solid #5F4E31;
			border-radius: 6rpx;
		}
		.prompt_content{
			margin-left: 40rpx;
			.content{
				color: #5F4E31;
				font-weight: 600;
				font-size: 24rpx;
				margin-top: 10rpx;
			}
		}
	}
	
	.gasStation_details{
		overflow: hidden;
		margin-top: 30rpx;
		height: 360rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		margin-left: 24rpx;
		margin-right: 24rpx;
		.conten_top{
			display: flex;
			margin: 25rpx 0 0 18rpx;
			.gasStation_img{
				width: 98rpx;
				height: 98rpx;
				border-radius: 50%;
				margin-right: 30rpx;
			}
			.top_information{
				.gasStation_name{
					color: #333333;
					font-weight: 600;
					font-size: 26rpx;
				}
				.gasStation_dingwei{
					margin-top: 24rpx;
					display: flex;
					align-items: center;
					image{
						width: 20rpx;
						height: 28rpx;
						margin-right: 8rpx;
					}
					view{
						color: #666666;
						font-size: 24rpx;
					}
				}
				.oilprice{
					margin-top: 24rpx;
					display: flex;
					align-items: center;
					.number{
						font-weight: 600;
						color: #F82840;
						margin-right: 10rpx;
					}
					.price_gj{
						font-size: 8rpx;
						color: #F82840;
						width: 220rpx;
						height: 40rpx;
						line-height: 40rpx;
						padding-left: 42rpx;
						background: url(../../../../static/home/jiayou/zhu.png);
						background-size: 220rpx 40rpx;
						margin-right: 10rpx;
					}
					.price_yz{
						font-size: 8rpx;
						color: #F82840;
						width: 220rpx;
						height: 40rpx;
						line-height: 40rpx;
						padding-left: 42rpx;
						background: url(../../../../static/home/jiayou/zhu.png);
						background-size: 220rpx 40rpx;
					}
				}
				.time{
					font-size: 20rpx;
					font-weight: 600;
					margin-top: 10rpx;
				}
			}
		}
		.conten_center{
			margin: 20rpx 0 0 18rpx;
			display: flex;
			align-items: center;
			image{
				width: 30rpx;
				height: 30rpx;
				margin-right: 16rpx;
			}
			view{
				font-weight: 600;
				font-size: 30rpx;
			}
		}
		.conten_bottom{
			margin: 10rpx 0 0 18rpx;
			view{
				text-align: center;
				width: 180rpx;
				height: 40rpx;
				color: #FFA530;
				background-color: #fef0ed;
				border-radius: 6rpx;
			}
		}
	}
	
	.oil_details{
		margin: 20rpx 0 0 30rpx;
		.title{
			color: #333333;
			font-weight: 600;
			font-size: 34rpx;
		}
		.item{
			width: 150rpx;
			height: 40rpx;
			color: #999999;
			border: 1rpx solid #999999;
			text-align: center;
			border-radius: 8rpx;
			margin-right: 20rpx;
		}
		.choose_goods{
			.goods_list{
				margin: 20rpx 0 20rpx 0;
				display: flex;
				align-items: center;
			}
		}
		.choose_oilnumber{
			.oilnumber_list{
				margin: 20rpx 0 20rpx 0;
				display: flex;
				align-items: center;
			}
		}
		.choose_oilgun{
			.oilgun_list{
				margin: 20rpx 0 20rpx 0;
				display: flex;
				align-items: center;
			}
		}
	}
	
	.bottom_mesg{
		width: 100%;
		margin: 120rpx auto;
		text-align: center;
		font-size: 40rpx;
		font-weight: 600;
		text{
			color: #E11A31;
		}
	}
</style>
