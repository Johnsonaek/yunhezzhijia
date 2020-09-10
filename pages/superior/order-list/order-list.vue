<template>
	<view>
		<page @scrolltolower="Scrolltolower">
			<view class="mb5" style="position: relative;">
				<view class="arrow-l ml20" @click="goBack"></view>
				<view class="flex a-center j-center h100 bg-white">
					<view
						class="w140 h50 flex a-center j-center mlr5 fs24 radius30"
						style="color: #FFFFFF;background-color: #b3b3b3;"
						v-for="(ele, i) in teamlist"
						:key="i"
						:class="{ hover: ele.teamActive }"
						@tap="teamActive(i)"
					>
						{{ ele.title }}
					</view>
				</view>
			</view>

			<scroll-view scroll-x class="bg-white nav mt24" v-if="isShow == 0">
				<view class="flex text-center">
					<view
						class="cu-item flex-sub"
						:class="item.type == TabCur ? 'text-red cur' : ''"
						v-for="(item, index) in tabBars"
						:key="index"
						@tap="tabSelect"
						:data-type="item.type"
						:data-id="index"
					>
						{{ item.name }}
					</view>
				</view>
			</scroll-view>
			
			<scroll-view scroll-x class="bg-white nav mt24" v-if="isShow == 1">
				<view class="flex text-center">
					<view
						class="cu-item flex-sub"
						:class="item.type == TabCur ? 'text-red cur' : ''"
						v-for="(item, index) in tabTeamBars"
						:key="index"
						@tap="tabSelect"
						:data-type="item.type"
						:data-id="index"
					>
						{{ item.name }}
					</view>
				</view>
			</scroll-view>
			
			<view class="teamOrder" v-if="isShow == 1" v-for="(item,index) in teamOrderList" :key="index">
				<view class="teamOrder_top">
					<view class="order_sn">订单编号：{{item.order_sn}}</view>
					<view class="order_state">
						<text v-if="item.order_status == 10" class="">待付款</text>
						<text v-if="item.order_status == 20" class="">待发货</text>
						<text v-if="item.order_status == 30" class="">待发货</text>
						<text v-if="item.order_status == 40" class="">部分发货</text>
						<text v-if="item.order_status == 45" class="">已发货,待收货</text>
						<text v-if="item.order_status == 50" class="">已确认收货</text>
						<text v-if="item.order_status == 100" class="">已取消</text>
					</view>
				</view>
				<view class="teamOrder_center" v-for="(item2,index2) in item.orderGoodsList
" :key="index2">
					<image :src="item2.original_img"></image>
					<view class="goods_info">
						<view class="goods_name">{{item2.goods_name}}</view>
						<view class="goodsPrice">
							<text class="goodsPrice_icon">￥</text>
							<text class="goodsPrice_price">{{item2.unit_price}}</text>
							<text class="goodsPrice_num">x{{item2.goods_num}}</text>
							<text class="shouyi">+3.65</text>
						</view>
					</view>
				</view>
				<view class="teamOrder_bottom">
					{{item.created_at}}
				</view>
				
			</view>

			<empty v-if="list.length === 0 && loaded"></empty>
			<view class="loading ptb30" v-if="!loaded"></view>
			<view class="qui-card panel mb24 mt24" v-for="(item, index) in OrderList" :key="index">
				<view class="card-hd bor-1px-b">
					<text class="text-muted fs24 order_number">订单编号：{{item.order_sn}}</text>
<!-- （当action=1时，存在）订单状态：1.待支付2.已支付10.已取消3.待评价4.已评价 -->
					<text v-if="item.order_status == 10" class="text-red fs24">待付款</text>
					<text v-if="item.order_status == 20" class="text-red fs24">待发货</text>
					<text v-if="item.order_status == 30" class="text-red fs24">待发货</text>
					<text v-if="item.order_status == 40" class="text-red fs24">部分发货</text>
					<text v-if="item.order_status == 45" class="text-red fs24">已发货,待收货</text>
					<text v-if="item.order_status == 50" class="text-red fs24">已确认收货</text>
					<text v-if="item.order_status == 100" class="text-red fs24">已取消</text>
				</view>
				<navigator  :url="'/pages/shengtai/order-detail/order-detail?id='+item.order_number" class="qui-cell border-none" v-for="(item2,index2) in item.orderGoodsList" :key="index2">
					
					<view class="mr20"><q-image :imgwh="140" :src="item2.original_img"></q-image></view>
					<view class="cell-bd">
						<view class="line2" >{{item2.goods_name}}</view>
						<view class="flex mt30">
							<view class="flex-item flex a-center"><text class="text-red price fs34 mr20">{{item2.unit_price}} </text> x {{item2.goods_num}}</view>
							
						</view>
					</view>
				</navigator>
				<view class="order_info">
					<view class="time">{{item.created_at}}</view>
					<view class="price_info">
						<!-- 0待付款 1待发货 2待收货 3完成 -->
						<view class="price_number">
							共{{item.orderGoodsList.length}}件  总计：<text class="price_icon">￥</text>
							<text class="sum">{{item.sum_price}}</text>
						</view>
								
						<view class="btn_list">
							<navigator :url="'/pages/shengtai/order-detail/order-detail?id=' + item.order_number" v-if="item.order_status == 10" class="price_btn red">
								取消订单
							</navigator>
							<navigator :url="'/pages/shengtai/order-detail/order-detail?id=' + item.order_number" v-if="item.order_status == 10" class="price_btn green">
								立即付款
							</navigator>
							<view @click="remind(item.order_number)" v-if="item.order_status == 20" class="price_btn">提醒发货</view>
							<view @click="remind(item.order_number)" v-if="item.order_status == 30" class="price_btn">提醒发货</view>
							<view @click="confirm(item.order_number)" v-if="item.order_status == 40" class="price_btn">提醒发货</view>
							<view @click="remind(item.order_number)" v-if="item.order_status == 45" class="price_btn">确认收货</view>
							<navigator :url="'/pages/shengtai/order-detail/order-detail?id=' + item.order_number" v-if="item.order_status == 50" class="price_btn">
								再次购买
							</navigator>
							<view v-if="item.status == 100" class="price_btn">
								已取消
							</view>
						</view>
					</view>
				</view>
			</view>

			<loading-more nomore-text="我是有底线的" :nomore="nomore" :list="list"></loading-more>
		</page>
	</view>
</template>

<script>
import pagination from '@/common/mixin/pagination.js';
export default {
	mixins: [pagination],
	data() {
		return {
			getUrl: '/wap/Order/OrderList', // 需要分页的接口地址，
			autoLoad: false,
			TabCur: -1,
			isShow:0,
			OrderList:[],
			tabBars: [
				{
					name: '全部',
				},
				{
					name: '待付款',
					type: 1
				},
				{
					name: '待发货',
					type: 2
				},
				{
					name: '待收货',
					type: 3
				},
				{
					name: '已收货',
					type: 4
				}
			],
			tabTeamBars: [
				{
					name: '全部',
				
				},
				{
					name: '待付款',
					type: 1
				},
				{
					name: '待发货',
					type: 2
				},
				{
					name: '已发货',
					type: 3
				}
			],
			teamlist: [
				{
					title: '我的订单',
					teamActive: true
				},
				{
					title: '团队订单',
					teamActive: false
				}
			],
			teamOrderList:[]
		};
	},
	onLoad() {
		this.params.platformId = 12
		this.params.action = 2
		this.params.lineShopId = 4
		this.getListInit()
		this.getOrderList()
	},
	methods: {
		async getOrderList(type){
			const res = await this.post('/wap/MallOrder/orderList',{type:type})
			console.log(res)
			let OrderList = res.data.list
			for(let i = 0;i < OrderList.length;i++){
				let sum_price = 0;
				for(let l = 0;l < OrderList[i].orderGoodsList.length;l++){
					sum_price +=OrderList[i].orderGoodsList[l].goods_num * Number(OrderList[i].orderGoodsList[l].unit_price)
				}
				OrderList[i].sum_price = sum_price
			}
			this.OrderList = OrderList
		},
		async getTeamOrderList(type){
			const res = await this.post('/wap/MallOrder/getGroupOrderList',{type:type})
			this.teamOrderList = res.data.list
			console.log(this.teamOrderList)
		},
		teamActive(numb) {
			this.isShow = numb
			for (let i in this.teamlist) {
				this.teamlist[i].teamActive = false;
			}
			this.teamlist[numb].teamActive = true;
			if(numb == 0){
				this.getOrderList()
			}else{
				this.getTeamOrderList()
			}
			
		},
		// 切换选项卡
		tabSelect(e) {
			console.log(e)
			if(this.isShow == 0){
				this.getOrderList(e.currentTarget.dataset.type)
			}else{
				this.getTeamOrderList(e.currentTarget.dataset.type)
			}
			// this.TabCur = e.currentTarget.dataset.type;
			// this.params.status = e.currentTarget.dataset.type;
			// if (this.TabCur == -1) {
			// 	this.params.status = null;
			// }
			// if (!this.loaded) return;
			// this.getListInit();
		},
		confirm(e){
			console.log(e)
		}
		//
	}
};
</script>

<style lang="scss">
.order_number{
	color: #000000;
	font-weight: 600;
}
.order_info{
	padding-bottom: 30rpx;
	padding-right: 30rpx;
	display: flex;
	justify-content: space-between;
	.time{
		padding-left: 30rpx;
		padding-bottom: 30rpx;
		color: rgba(120, 120, 120, 1);
		font-size: 24rpx;
	}
	.price_info{
		font-weight: 600;
		.price_icon{
			font-weight: 400;
			color: rgb(223, 9, 2);
			font-size: 24rpx;
		}
		.price_number{
		}
		.sum{
			font-weight: 400;
			color: rgb(223, 9, 2);
			font-size: 40rpx;
		}
		.btn_list{
			display: flex;
			justify-content: flex-end;
			.price_btn{
				width: 120rpx;
				height: 44rpx;
				border: 1rpx solid #000000;
				font-size: 24rpx;
				line-height: 44rpx;
				text-align: center;
				border-radius: 10rpx;
			}
			.price_btn:nth-child(2){
				margin-left: 10rpx;
			}
			.green{
				color: rgb(68, 173, 19);
				border: 1rpx solid rgb(68, 173, 19);
			}
			.red{
				color: rgb(223, 8, 0);
				border: 1rpx solid rgb(223, 8, 0);
			}
		}
		
	}
}
.teamOrder{
	background-color: #FFFFFF;
	margin-bottom: 18rpx;
	margin-top: 6rpx;
	.teamOrder_top{
		padding: 20rpx 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.order_sn{
			font-weight: 600;
		}
		.order_state{
			font-weight: 600;
		}
	}
	.teamOrder_center{
		display: flex;
		padding: 0 30rpx;
		margin: 16rpx 0;
		image{
			width: 180rpx;
			height: 160rpx;
			margin-right: 14rpx;
		}
		.goods_info{
			.goods_name{
				margin-bottom: 60rpx;
			}
			.goodsPrice{
				.goodsPrice_icon{
					font-size: 14rpx;
					color: rgb(223, 9, 2);
				}
				.goodsPrice_price{
					color: rgb(223, 9, 2);
					font-size: 40rpx;
					font-weight: 400;
					margin-right: 60rpx;
				}
				.goodsPrice_num{
					margin-right: 240rpx;
				}
				.shouyi{
					color: rgb(223, 9, 2);
					font-size: 32rpx;
					font-weight: 400;
				}
			}
		}
	}
	.teamOrder_bottom{
		border-top: 1rpx solid rgba(155, 155, 155, 1);
		text-align: right;
		color: rgba(155, 155, 155, 1);
		padding: 10rpx 6rpx;
	}
}


.arrow-l {
	position: absolute;
	left: 20rpx;
	top: 50%;
	transform: rotateZ(45deg) translateY(-50%);
	border: 2px solid #444444;
	border-top: 0;
	border-right: 0;
	width: 20rpx;
	height: 20rpx;
	z-index: 999;
}
.hover {
	background-color: #ec3f3f !important;
}
.active {
	font-weight: bold;
	position: relative;
	&::after {
		content: '';
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