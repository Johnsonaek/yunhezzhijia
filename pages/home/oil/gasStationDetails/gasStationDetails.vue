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
					<view class="gasStation_img">
						<image src="../../../../static/home/jiayou/tx.jpg"></image>
					</view>
					<view class="top_information">
						<view class="gasStation_name">{{oilList.gasName}}</view>
						<view class="gasStation_dingwei">
							<image src="../../../../static/home/jiayou/hdingwei.png"></image>
							<view>广东省广州市天河区中山大道666号</view>
						</view>
						<view class="oilprice">
							<view class="number_icon">￥</view>
							<view class="number">5.08</view>
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
						<view :class="{goods_item:true,item:true,choose:index == olinameShow }" v-for="(item,index) in oliname" :key="index" @click="olinamechange(index)">
							{{item}}
						</view>
					</view>
				</view>
				<view class="choose_oilnumber">
					<view class="title">选择油号：</view>
					<view class="oilnumber_list">
						<view :class="{goods_item:true,item:true,choose:index == oliNoShow }" v-for="(item,index) in oliNoList" :key="index" @click="oliNochange(index)">{{item}}</view>
					</view>
				</view>
				<view class="choose_oilgun">
					<view class="title">选择枪号：</view>
					<view class="oilgun_list">
						<view :class="{goods_item:true,item:true,choose:index == gunisShow }" v-for="(item,index) in gunList" :key="index" @click="gunchange(index)">{{item}}号</view>
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
				oliname:[],
				olinameShow:0,
				oliNoList:[],
				oliNoShow:0,
				gunList:[],
				gunisShow:0,
				gasIds:'',
				oilList:[]
			}
		},
		onLoad(options) {
			this.gasIds = options.gasIds
			// this.login()
			this.getOliMessage()
			
			
		},
		methods: {
			async getOliMessage(){
				//获取加油站数据
				const res = await this.post('/wap/Coalition/CzbQueryPriceByPhone	',{gasIds:this.gasIds})
				this.oilList = res.data.list[0]
				console.log(this.oilList.oilPriceList)
				for(let i = 0;i < this.oilList.oilPriceList.length;i++){
					if(this.oilList.oilPriceList[i].oilType == 1 && this.oliname.indexOf('汽油') == -1){
						this.oliname.push('汽油')
					}
					if(this.oilList.oilPriceList[i].oilType == 2 && this.oliname.indexOf('柴油油') == -1){
						this.oliname.push('柴油')
					}
					if(this.oilList.oilPriceList[i].oilType == 3 && this.oliname.indexOf('LLNG') == -1){
						this.oliname.push('LNG')
					}
					if(this.oilList.oilPriceList[i].oilType == 4 && this.oliname.indexOf('CNG') == -1){
						this.oliname.push('CNG')
					}
				}
				let type = Number
				if(this.oliname[0] == '汽油'){
					type = 1
				}else if(this.oliname[0] == '柴油'){
					type = 2
				}else if(this.oliname[0] == 'LNG'){
					type = 3
				}else{
					type = 4
				}
				for(let i = 0;i < this.oilList.oilPriceList.length;i++){
					if(this.oilList.oilPriceList[i].oilType == type){
						this.oliNoList.push(this.oilList.oilPriceList[i].oilName)
						this.gunList.push(this.oilList.oilPriceList[i].gunNos[0].gunNo)
					}
				}
				
			},
		
			olinamechange(index){
				this.olinameShow = index
				let type = Number
				if(this.oliname[index] == '汽油'){
					type = 1
				}else if(this.oliname[index] == '柴油'){
					type = 2
				}else if(this.oliname[index] == 'LNG'){
					type = 3
				}else{
					type = 4
				}
				this.oliNoList = []
				this.gunList = []
				for(let i = 0;i < this.oilList.oilPriceList.length;i++){
					if(this.oilList.oilPriceList[i].oilType == type){
						this.oliNoList.push(this.oilList.oilPriceList[i].oilName)
						this.gunList.push(this.oilList.oilPriceList[i].gunNos[0].gunNo)
					}
				}
			},
			oliNochange(index){
				this.oliNoShow = index
			},
			gunchange(index){
				this.gunisShow = index
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
		box-sizing: border-box;
		overflow: hidden;
		margin-top: 30rpx;
		height: 360rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		margin-left: 18rpx;
		margin-right: 18rpx;
		.conten_top{
			display: flex;
			margin: 25rpx 0 0 12rpx;
			.gasStation_img{
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				image{
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
			.top_information{
				padding-left: 6rpx;
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
					.number_icon{
						color: #F82840;
						font-size: 28rpx;
					}
					.number{
						font-weight: 600;
						font-size: 40rpx;
						color: #F82840;
						margin-right: 10rpx;
					}
					.price_gj{
						font-size: 20rpx;
						color: #F82840;
						width: 240rpx;
						height: 40rpx;
						line-height: 40rpx;
						padding-left: 56rpx;
						background: url(../../../../static/home/jiayou/zhu.png);
						background-size: 240rpx 40rpx;
						margin-right: 10rpx;
					}
					.price_yz{
						font-size: 20rpx;
						color: #F82840;
						width: 240rpx;
						height: 40rpx;
						line-height: 40rpx;
						padding-left: 56rpx;
						background: url(../../../../static/home/jiayou/zhu.png);
						background-size: 240rpx 40rpx;
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
		.choose{
			border: 1rpx solid #E11A31;
			color: #E11A31;
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
