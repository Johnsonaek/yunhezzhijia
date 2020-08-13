<template>
	<view>
		<page title="商品编辑" bgClass="bg-white">
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="mr20"><image class="wh140 radius12 block" :src="info.original_img" mode=""></image></view>
					<view class="cell-bd">{{ info.goods_name }}</view>
				</view>
			</view>
			<view class="h30 bg-gray-muted"></view>
			<view class="qui-card panel">
				<view class="card-hd bor-1px-b"><text class="fs30 fw600">推荐语</text></view>
				<view class="card-bd"><textarea v-model="info.recommend_remark" class="h200 fs28" value="" placeholder="请输入推荐语" /></view>
			</view>
			<view class="h30 bg-gray-muted"></view>
			<view class="qui-card panel">
				<view class="card-hd bor-1px-b"><text class="fs30 fw600">产品价格</text></view>
				<view class="qui-cells">
					<view class="qui-cell flex-start">
						<view class="cell-bd">
							<view class="flex mt20">
								<view class="flex-item">
									拿货价
									<text class="text-red">￥{{ info.purchase_price }}</text>
								</view>
								<view class="">
									加价后价格
									<text class="text-red">￥{{ afterPrice }}</text>
								</view>
							</view>
							<view class="flex mt30">
								<view class="flex-item flex">
									我要加价（%）
									<input v-model="info.markup_rate" style="border: 1px solid #eee; height: 50rpx;" class="w140 fs24 pl20 radius10" type="number" />
								</view>
								<view class="">
									赚
									<text class="text-red">￥{{ inCome }}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="h100"></view>
			<view class="plr50 ptb50"><view @click="editGoods" class="qui-btn round">保存</view></view>
		</page>
	</view>
</template>

<script>
export default {
	data() {
		return {
			remark: '',
			addprice: '',
			id: 0,
			info: {}
		};
	},
	onLoad(e) {
		this.id = e.id;
		this.getInfo();
	},
	computed: {
		afterPrice() {
			let sp = Number(this.info.sale_price);
			let rate = Number(this.info.commission_rate);
			let markup_rate = Number(this.info.markup_rate) / 100;
			let p = markup_rate * sp + sp;
			return p.toFixed(2);
		},
		inCome() {
			let sp = Number(this.info.sale_price);
			let rate = Number(this.info.commission_rate);
			let markup_rate = Number(this.info.markup_rate) / 100;

			let p = (rate + markup_rate) * sp;
			return p.toFixed(2);
		}
	},
	methods: {
		async getInfo() {
			const res = await this.post('/wap/OwnSmallShop/goodsInfo', { id: this.id });
			this.info = res.data.goods;
		},
		async editGoods() {
			let params = {
				id: this.id,
				markup_rate: this.info.markup_rate,
				recommend_remark: this.info.recommend_remark
			};
			const res = await this.post('/wap/OwnSmallShop/goodsEdit',params);
			this.success(res, '编辑成功', ()=>{
				this.getInfo()
			})
			
		}
	}
};
</script>

<style></style>
