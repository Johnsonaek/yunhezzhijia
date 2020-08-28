<template>
	<view>
		<page title="新人免单" bgClass="bg-red" @scrolltolower="Scrolltolower">
			<q-image :lazyLoad="false" :isRatio="true" :imgwh="[750,1107]" src="/static/images/bg00989.png"></q-image>
			
			 <empty v-if="list.length === 0 && loaded"></empty>
			 <view class="loading ptb30" v-if="!loaded"></view>
		    <view @click="goto('/pages/svideo/detail/detail?id='+item.itemid+'&goodtype='+item.goodtype)" class="qui-card flex plr30 ptb30" v-for="(item,index) in list" :key="index">
				<view class="mr20">
					<q-image :lazyLoad="false" :isRatio="false" :imgwh="[180,180]" :src="item.itempic"></q-image>
				</view>
		    	<view class="flex-item text-default">
		    		<view class="line2 fs28 text-default">{{item.itemtitle}}</view>
					<view class="flex mt20">
						<text class="text-muted">原价￥{{item.itemprice}}</text> <text class="text-red ml20">补贴￥{{item.sharePrice}}</text>
					</view>
					<view class="flex mt20 a-center">
						<view class="flex-item">
							仅剩 <text class="text-red">{{item.couponsurplus}}</text>单 <!-- {{item.goods_id}} -->
						</view>
						<view class="qui-btn inline round h50 fs24">
							立即元抢
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
		 mixins:[pagination],
		data() {
			return {
				getUrl: '/wap/Coalition/GetIconList',
				autoLoad: false,
			}
		},
		onLoad(e) {
			this.params.id = Number(e.id)
			this.params.platformId = Number(e.pid)
			this.getListInit()
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
