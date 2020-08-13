<template>
	<page title="搜索结果"  @scrolltolower="loadMore('qlist')" :headbor="false">
		<!-- <text  class="cuIcon-search fs40"></text> -->
		<!-- <view slot="right">
			<view @tap="changeListType" class="relative"><image class="wh40" :src="'/static/images/icon_' + listType + '_list.png'" /></view>
		</view> -->
		<!-- <view slot="top">
			<view v-show="true" class="ptb30 bg-white shadow relative" style="z-index: 9">
				<view class="qui-grids fgs column3 filter-nav">
					<view :class="activeIndex == 0 ? 'active' : ''" @click="activeIndex = 0" class="qui-grid" data-text="zhonghe">综合</view>
					<view @click="sort" :class="activeIndex == 1 ? 'active' : ''" class="qui-grid" data-text="xiaoliang"><text :class="sortType == 1 ? 'up' : 'down'" class="arrow">销量</text></view>
					<view @click="sort2" :class="activeIndex == 2 ? 'active' : ''" class="qui-grid" data-text="jiage"><text :class="sortType2 == 1 ? 'up' : 'down'" class="arrow">价格</text></view>
				</view>
			</view>
		</view> -->
		<view class="mt24">
			<qui-list :otherParams="otherParams" :autoLoad="false" ref="qlist" getUrl="/wap/Supply/getGoods" v-slot="slotProps">
				<view class="plr12 pt0" style="margin-top: -12rpx;">
					<view class="qui-grids column2 gutter12">
						<view @click="goto('/pages/superior/detail/detail?id=' + item.goods_id)" class="qui-grid" v-for="(item, index) in slotProps.list" :key="index">
							<view class="block tl bg-white radius20 shadow">
								<view class=""><q-image :isRatio="true" :src="item.original_img"></q-image></view>
								<view class="plr20 ptb20">
									<view class="line2 fs28">{{ item.goods_name }}</view>
									<view v-if="action == 1" class="">
										<text class="bg-red radius20 fs22 ptb5 plr10">消费券最高抵扣{{item.coupon_deduction_rate}}</text>
									</view>
									<view v-else-if="action == 2" class="">
										<text class="bg-red radius20 fs22 ptb5 plr10">鼓励金最高抵扣{{item.incentive_deduction_rate}}</text>
									</view>
									<view class="mt10 flex">
										<view class="flex-item">
											<text class="text-theme fs26">￥{{ item.market_price }}</text>
										</view>
										<!-- <view class="fs22 text-muted">已售724</view> -->
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</qui-list>
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
			otherParams:{},
			key: '',
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
	},
	onLoad(e) {
		this.key = e.key
	},
	mounted() {
	    this.getListData()
	},
	methods: {
		getListData(id) {
			this.otherParams.mall_type = 1
			this.otherParams.goods_name = this.key
			this.$refs.qlist.getListInit()
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
