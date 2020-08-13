<template>
	<page title="商品管理" bgClass="bg-white" :headbor="false">
		
		<scroll-view scroll-x class="bg-white nav superior_nav bor-1px-b" scroll-with-animation :scroll-left="scrollLeft">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index == TabCur ? 'text-red cur' : ''" v-for="(item, index) in tabBars" :key="index" @tap="tabSelect" :data-type="item.type" :data-id="index">
					{{ item.name }}
				</view>
			</view>
		</scroll-view>
		<empty v-if="list.length === 0 && loaded"></empty>
		<view class="loading ptb30" v-if="!loaded"></view>
		<view class="qui-cells"  v-for="(item,index) in list" :key="index">
			<view class="qui-cell border-none">
				<view class="mr30"><q-image :imgwh="[240, 240]" src="/static/business/rangking/v2_qaxhld.jpg"></q-image></view>
				<view class="cell-bd">
					<view class="line2">烟台红富士苹果水果礼盒生鲜一级果径80-85mm</view>
					<view class="fs24 text-gray mt20">上架时间：2020-05-26</view>
					<view class="flex mt20 fs24" style="flex-wrap: wrap;">
						<view class="mr20">
							<text>拿货价</text>
							<text class="text-red">￥19.80</text>
						</view>
						<view class="mr20">
							<text>销售价</text>
							<text class="text-red">￥20.80</text>
						</view>
						<view class="mt10">
							<text>赚</text>
							<text class="text-red">￥1.00</text>
						</view>
					</view>
				</view>
			</view>
			<view v-if="TabCur==0" class="plr30 flex bg-white tc pb24">
				<view class="flex-item"><navigator url="/pages/my/yh-store/edit/edit" class="qui-btn outline bg-blue inline h60 round">编辑商品</navigator></view>
				<view class="flex-item"><view @click="upAndDown(item.id, item.is_sale)" class="qui-btn outline bg-yellow inline h60 round">下架商品</view></view>
			</view>
			<view  v-if="TabCur==1" class="plr30 flex bg-white tc pb24">
				<view class="flex-item"><view @click="upAndDown(item.id, item.is_sale)"  class="qui-btn outline bg-blue inline h60 round">重新上架</view></view>
				<view class="flex-item"><view @click="delGoods(item.id, index)" class="qui-btn outline bg-yellow inline h60 round">删除商品</view></view>
			</view>
		</view>
		<loading-more nomore-text="我是有底线的" :nomore="nomore" :list="list"></loading-more>
	</page>
</template>

<script>
import pagination from '@/common/mixin/pagination.js';
export default {
	mixins: [pagination],
	data() {
		return {
			getUrl: '/wap/OwnSmallShop/goodsList',
			autoLoad: false,
			TabCur: 0,
			scrollLeft: 0,
			isSale: true,
			tabBars: [
				{
					name: '销售中',
					type: 1
				},
				{
					name: '已下架',
					type: 2
				}
			]
		};
	},
	onLoad(e) {
		this.params.type = 1;
		this.getListInit();
	},
	methods: {
		// 切换选项卡
		tabSelect(e) {
			if(!this.loaded) return
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
			this.params.type = e.currentTarget.dataset.type;
			this.getListInit();
		},
		// 删除商品
		delGoods(id,index) {
			let me = this
			uni.showModal({
				title: '提示',
				content:'确定要删除此商品吗',
				success: (res) => {
					if (res.confirm) {
						me.post('/wap/OwnSmallShop/goodsDel',{ids: id}).then(res => {
							if(res.code == 200) {
								uni.showToast({
									title: '已删除',
									icon: 'none'
								})
								me.list.splice(index,1)
								
							}
						})
					}
				}
			})
		},
		// 上架或重新上架
		upAndDown(id, isSale) {
			let me = this
			console.log(id)
			let content = ''
			let successText =''
			let is_sale
			if(isSale == 1) {
				is_sale = 2
				content = '确定要下架此商品吗'
				successText = '已下架'
			} else if(isSale == 2) {
				is_sale = 1
				content = '确定要上架此商品吗'
				successText = '上架成功'
			}
			uni.showModal({
				title: '提示',
				content:content,
				success: (res) => {
					if (res.confirm) {
						me.post('/wap/OwnSmallShop/goodsSetStatus',{id: id, is_sale: is_sale}).then(res => {
							if(res.code == 200) {
								uni.showToast({
									title: successText,
									icon: 'none'
								})
								this.getListInit();
							}
						})
					}
				}
			})
		
		},
	}
};
</script>

<style></style>
