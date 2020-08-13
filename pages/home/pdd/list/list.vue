<template>
	<page :title="catName" @scrolltolower="Scrolltolower" :headbor="false">
		<!-- <text  class="cuIcon-search fs40"></text> -->
		<view slot="right">
			<view @tap="changeListType" class="relative"><image class="wh40" :src="'/static/images/icon_' + listType + '_list.png'" /></view>
		</view>
		<view slot="top">
			<view v-show="true" class="ptb30 bg-white shadow relative" style="z-index: 9">
				<view class="qui-grids fgs column3 filter-nav">
					<view :class="activeIndex == 0 ? 'active' : ''" @click="activeIndex = 0" class="qui-grid" data-text="zhonghe">综合</view>
					<view @click="sort" :class="activeIndex == 1 ? 'active' : ''" class="qui-grid" data-text="xiaoliang"><text :class="sortType == 1 ? 'up' : 'down'" class="arrow">销量</text></view>
					<view @click="sort2" :class="activeIndex == 2 ? 'active' : ''" class="qui-grid" data-text="jiage"><text :class="sortType2 == 1 ? 'up' : 'down'" class="arrow">价格</text></view>
				</view>
			</view>
		</view>
		<view>
			<empty v-if="list.length === 0 && loaded"></empty>
			<view class="loading ptb30" v-if="!loaded"></view>
			<block>
				<!-- 列表样式1  -->
				<view v-show="listType === 'grid'" class="plr10 ptb20">
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

				<!-- 列表样式2  -->
				<view v-show="listType === 'cell'" class="qui-cells mlr30 ptb30">
					<view  @click="goto('/pages/home/pdd/detail/detail?id='+item.goods_id)"  v-for="(item, index) in list" :key="index" class="qui-cell radius12 shadow mb20">
						<view class="mr30">
							<view class="wh250"><image class="wh250 block" :src="item.goods_image_url" mode="widthFix"></image></view>
						</view>
						<view class="cell-bd">
							<view class="line2 fs28 fw600 h80">{{item.goods_name}}</view>
							<view class="flex mt10 space-between">
								<text class="price text-red fs34">{{item.min_normal_price}}</text>
							</view>
							<view class="flex a-center mt10">
								<view class="fs24 text-gray">
									{{item.mall_name}}
								</view>
							</view>
							<view class="flex mt10 space-between">
								<!-- <text class="text-muted fs22">原价 <text class="line-through">￥77.00</text></text> -->
								<text class="text-muted fs22">已售 {{item.sold_quantity}}</text>
							</view>
							<view class="flex mt10">
								<view class="mr20">
									<text class="bg-red fs22 ptb10 plr20 radius10 scb">
										券￥{{item.coupon_discount}}
									</text>
								</view>
								<view>
									<text class="bg-red light fs22 ptb10 plr10 radius10">分享赚￥{{item.sharePrice}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</block>
			<loading-more :nomore="nomore" :list="list"></loading-more>
		</view>
	</page>
</template>

<script>
import Skeleton from '@/components/skeleton.vue';
import pagination from '@/common/mixin/pagination.js';
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
	mixins: [pagination],
	components: {
		Skeleton
	},
	data() {
		return {
			catName: '',
			cid: 0,
			getUrl: '/wap/Coalition/PddList',
			autoLoad: false,
			activeIndex: 0,
			sortType: 0,
			sortType2: 0,
			skeleton: true,
			scrollLeft: 0,
			TabCur: 0,
			listType: 'grid',
			totalCount: 0,
			StatusBar: this.StatusBar,
			CustomBar: this.CustomBar
		};
	},
	computed: {
		...mapState({
			imgUrl: 'imgUrl'
		}),
		...mapGetters(['currentNavList']),
		top() {
			return this.StatusBar;
		}
	},
	onLoad(e) {
		this.params.id = e.id
		this.catName = e.name
		console.log(this.catName)
		this.getListData()
	},
	methods: {
		getListData() {
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
};
</script>

<style lang="scss">

</style>
