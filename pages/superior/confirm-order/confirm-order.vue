<template>
	<view>
		<page title="确认订单">
			<view @click="goto('/pages/my/address/address?from=order')" v-if="!showPath" class="qui-cells">
				<view class="qui-cell">
					<view class="mr30 cuIcon-add fs50 text-default"></view>
					<view class="cell-bd"><view class="fw600">添加收货地址</view></view>
					<view class="arrow-r"></view>
				</view>
			</view>
			<view @click="goto('/pages/my/address/address?from=order')" v-else class="qui-cells">
				<view class="qui-cell">
					<view class="mr30 cuIcon-location fs50 text-default"></view>
					<view class="cell-bd">
						<view class="fw600">{{ showPath.consignee }} {{ showPath.mobile }}</view>
						<view class="text-muted fs24 mt10">收货地址：{{ showPath.address }}</view>
					</view>
					<view class="arrow-r"></view>
				</view>
			</view>
			<view v-if="info" class="mt24">
				<view class="qui-cells">
					<view class="qui-cell" v-for="(item, index) in info.list" :key="index">
						<image @click="goto('/pages/home/shop-deetails/shop-deetails?id=' + item.goods.id)" class="block ml10 wh200 radius12" :src="item.original_img"></image>
						<view class="cell-bd ml20">
							<view class="flex a-center">
								<view @click="goto('/pages/home/shop-deetails/shop-deetails?id=' + item.id)" class="flex-item line2">{{ item.goods_name }}</view>
							</view>
							<view class="mt10" v-if="item.mall_type == 2"><text class="bg-red light plr10 fs22 radius10 ptb5">消费券商品</text></view>
							<view class="mt10" v-if="item.mall_type == 3"><text class="bg-red light plr10 fs22 radius10 ptb5">鼓励金商品</text></view>
							<view class="fs24 text-muted mt10 flex">
								<view class="flex-item">
									<text v-if="item.key_name">{{ item.key_name }}</text>
								</view>
							</view>
							<view class="fs30 flex mt20">
								<view class="flex-item text-red fw600">￥{{ item.sell_price }}</view>
								<view class="">
									<text class="fs22">X</text>
									{{ item.goods_num }}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="h24 bg-gray-muted"></view>
			<view v-if="info" class="qui-cells">
				<view class="qui-cell">
					<view class="cell-bd text-gray">配送方式</view>
					<view>{{ info.logisticsName }}</view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd text-gray">运费</view>
					<view class="text-red">0</view>
				</view>
				<view class="qui-cell">
					<view class="mr30 text-gray">买家留言</view>
					<view class="cell-bd">
						<view class=""><textarea v-model="form.note" class="qui-input" value="" placeholder="买家留言" /></view>
					</view>
				</view>
			</view>

			<view class="flex bg-white a-center" slot="bottom">
				<view class="flex-item h100 flex a-center pl30">
					合计：
					<text class="text-red fs34 price">{{ info.totalAmount }}</text>
				</view>
				<view @click="submit" class="w200 bg-theme h100 flex aj-center">提交订单</view>
			</view>
		</page>
	</view>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
	data() {
		return {
			type: 2,
			info: {},
			form: {
				consignee: '',
				tel: '',
				province: null,
				city: null,
				district: null,
				twon: null,
				address: '',
				order_goods: null,
				delivery_type: 1, // 收货类型：1为自定义；2线下门店自提点
				note: '',
				line_shop_user_id:'1' // 线下门店店主用户id
			},
			orderGoods:{}
		};
	},
	computed: {
		...mapGetters(['showPath'])
	},
	onLoad(e) {
		this.type = e.type;
		this.orderGoods = e.opt
		this.form.order_goods = this.orderGoods
		this.getInfo();
	},
	methods: {
		async getInfo() {
			const res = await this.post('/wap/MallOrder/orderPreview', { type: this.type, order_goods: this.orderGoods });
			this.info = res.data;
			this.form.order_goods = JSON.stringify(res.data.list)
		},
		async submit() {
			this.form.consignee = this.showPath.consignee
			this.form.tel = this.showPath.mobile	
			this.form.province = this.showPath.province
			this.form.city = this.showPath.city
			this.form.district = this.showPath.district	
			this.form.twon = this.showPath.twon || 0
			this.form.address = this.showPath.address
						
						
			const res = await this.post('/wap/MallOrder/orderSubmit', this.form);
			this.success(res,'订单提交成功', () => {
				uni.navigateTo({
					url: `/pages/superior/order-pay/order-pay?id=${res.data.orderId}&amount=${this.info.totalAmount}`
				});
			})
		}
	}
};
</script>

<style></style>
