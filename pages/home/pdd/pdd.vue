<template>
	<view>
		<page title="拼多多" @scrolltolower="Scrolltolower" >
			<!-- 广告轮播图 -->
			<view class="plr24 pt24 bg-white">
				<swiper style="height: 262rpx;" :class="true ? 'square-dot' : 'round-dot'" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
					<swiper-item v-for="(item, index) in banner" :key="index">
						<navigator hover-class="none" url="item.url" class="radius12">
							<q-image :lazyLoad="false" :imgwh="[702, 262]" :isRatio="true" :src="item.path"></q-image>
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<view class="h30 bg-white">
				
			</view>
			<view class="special relative z-index9">
				<!-- 宫格 -->
				<view class="qui-grids column4 gutter24-tb plr10 bg-white">
					<navigator v-for="(item,index) in categoryList" :key="index" :url="'/pages/home/pdd/list/list?id='+item.id+'&name='+item.catName" hover-class="none" class="qui-grid">
						<view class="wh100"><image class="wh100 block" src="/static/business/business2.1.png"></image></view>
						<view class="fs24 mt10 line1">{{item.catName}}</view>
					</navigator>
					
				</view>
				<view class="bg-gray" style="height: 24rpx;"></view>
				<view v-show="true" class="ptb30 bg-white shadow relative" style="z-index: 9">
					<view class="qui-grids fgs column3 filter-nav">
						<view :class="activeIndex == 0 ? 'active' : ''" @click="activeIndex = 0" class="qui-grid" data-text="zhonghe">综合</view>
						<view @click="sort" :class="activeIndex == 1 ? 'active' : ''" class="qui-grid" data-text="xiaoliang"><text :class="sortType == 1 ? 'up' : 'down'" class="arrow">销量</text></view>
						<view @click="sort2" :class="activeIndex == 2 ? 'active' : ''" class="qui-grid" data-text="jiage"><text :class="sortType2 == 1 ? 'up' : 'down'" class="arrow">价格</text></view>
					</view>
				</view>
				<view class="qui-card panel bg-white-gray" style="min-height: 400rpx;">
				     <view class="h24">
				     	
				     </view>
					<empty v-if="list.length === 0 && loaded"></empty>
					<view class="loading ptb30" v-if="!loaded"></view>
					<view class="plr12 pt0" style="margin-top: -12rpx;">
						<view class="qui-grids column2 gutter10 pb30">
							<view  @click="goto('/pages/home/pdd/detail/detail?id='+item.goods_id)" class="qui-grid" v-for="(item, index) in list" :key="index">
								<view class="block tl bg-white radius20 shadow">
									<view class=""><q-image :isRatio="true" :src="item.goods_image_url"></q-image></view>
									<view class="plr20 ptb20">
										<view class="line2 fs28"> <text>{{item.goods_name}}</text></view>
										<view class="flex a-center mt20">
											<text class="cuIcon-shop text-yellow" style="opacity: 0.5;"></text>
											<view class="fs24 text-muted">
												{{item.mall_name}}
											</view>
										</view>
										<view class="flex mt20">
											<view class="flex-item">
												<text class="bg-red fs22 ptb10 plr20 radius10 scb">
													券￥{{item.coupon_discount}}
												</text>
											</view>
											<view>
												<text class="bg-red light fs22 ptb10 plr10 radius10">分享赚￥{{item.sharePrice}}</text>
											</view>
										</view>
										<view class="mt20 flex">
											<view class="flex-item">
												<text class="text-theme fs26">￥{{item.min_normal_price}}</text>
												<!-- <text class="text-gray fs26 line-through ml10">￥900</text> -->
											</view>
											<view class="fs22 text-muted">已售{{item.sold_quantity}}</view>
										</view>
										
									</view>
								</view>
							</view>
						</view>
					</view>
					<loading-more nomore-text="我是有底线的" :nomore="nomore" :list="list"></loading-more>
				</view>
			</view>
		</page>
	</view>
</template>

<script>
	import pagination from '@/common/mixin/pagination.js';
	export default {
		 mixins:[pagination],
		data() {
			return {
				getUrl: '/wap/Coalition/PddList',
				autoLoad: false,
				activeIndex: 0,
				sortType: 0,
				sortType2: 0,
				banner: [],
				categoryList: []
			}
		},
		onLoad() {
			this.getListData()
			this.getBanners()
			this.getCategory()
		},
		methods: {
			async getCategory() {
				const res = await this.post('/wap/Coalition/PddCategory')
				this.categoryList = res.data.list
			},
			// action：1.首页门店轮播图 2.云合商圈播图 3首页联盟轮播图
			async getBanners() {
				const res = await this.post('/wap/Bases/AdsList', { action: 3 });
				if (res.code == 200) {
					this.banner = res.data.list;
				}
			},
			getListData() {
				this.params.action = 1
				this.params.longitude = 113.253104 // 经度
				this.params.latitude = 23.130152 // 纬度
				this.params.distance = 5 // 附近5000M,单位千米
				this.params.region = 0 // 区id
				this.params.redOrderBy = 1 // 当action = 1时，存在 ；红包金排序1.降序 2.升序
				// this.params.distributionOrderBy = 1 // 当action = 2时，存在 ，佣金排序 1正序 2倒序
				this.getListInit()
			},
			sort() {
				this.activeIndex = 1
				if (this.sortType == 0) {
					this.sortType = 1;
				} else {
					this.sortType = 0;
				}
			},
			sort2() {
				this.activeIndex = 2
				if (this.sortType2 == 0) {
					this.sortType2 = 1;
				} else {
					this.sortType2 = 0;
				}
			},
			changeListType() {
				if (this.listType === 'grid') {
					this.listType = 'cell';
				} else {
					this.listType = 'grid';
				}
			}
		}
	}
</script>

<style>

</style>
