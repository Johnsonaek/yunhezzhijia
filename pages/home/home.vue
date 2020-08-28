<template>
	<view>
		<page bgClass="bg-white" titleClass="bg-theme" @scrolltolower="loadMore()" :headbor="false">
			<view slot="top" class="bg-theme">
				<view class="relative z-index9">
					<qui-search url="/pages/home/search/search">
						<view @click="goto('/pages/my/setting/news')" slot="right" class="cuIcon-comment text-white fs50 ml20"></view>
					</qui-search>
					<scroll-view scroll-x class="nav home_nav" scroll-with-animation :scroll-into-view="scrollInto">
						<view class="flex text-center">
							<view
								:id="'tab_' + item.id"
								style="width: 80px"
								class="cu-item flex-sub text-white"
								:class="idx == TabCur ? 'text-red cur' : ''"
								v-for="(item, idx) in homeCategory"
								:key="idx"
								@tap="tabSelect"
								:data-id="idx"
								:data-cid="item.id"
							>
								{{ item.name }}
							</view>
						</view>
					</scroll-view>
				</view>
			</view>

			<view v-show="TabCur == 0">
				<view class="home_top"></view>
				<!-- 广告轮播图 -->

				<view class="plr24 pt24 z-index9">
					<swiper
						style="height: 262rpx;"
						:class="true ? 'square-dot' : 'round-dot'"
						:indicator-dots="true"
						:circular="true"
						:autoplay="true"
						interval="5000"
						duration="500"
					>
						<swiper-item v-for="(item, index1) in banner" :key="index1">
							<view @click="openUrl(item.url)" class="radius12"><q-image :lazyLoad="false" :imgwh="[702, 262]" :isRatio="true" :src="item.path"></q-image></view>
						</swiper-item>
					</swiper>
				</view>

				<!-- 联盟图标 -->
				<swiper class="screen-swiper bg-white" style="height: 380rpx;" :class="dotStyle ? 'square-dot' : 'round-dot'" :circular="false" :autoplay="false">
					<swiper-item v-for="(item, index2) in iconGroup" :key="index2">
						<view class="qui-grids column5 gutter20-tb plr20 bg-white pb30">
							<view @click="goWhere(item2)" class="qui-grid" v-for="(item2, index3) in item" :key="index3">
								<q-image :src="item2.path"></q-image>
								<view class="fs24 mt10 line1">{{ item2.name }}</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
				<view class="h24 bg-gray-muted" title="分隔条"></view>
				<!-- 粉丝喜报 -->
				<!-- <view class="flex bg-white ptb30 bor-1px-t plr30">
				<view class="mr20"><image src="../../static/index/index23.png" class="block" style="width: 135rpx; height: 28rpx;"></image></view>
				<view class="flex-item line1">粉丝喜报粉丝喜报粉丝喜报粉丝喜报粉丝喜报粉丝喜报</view>
			</view> -->
				<!-- 直播大厅 -->

				<!-- <view class="qui-card panel mt24">
				<view class="card-hd">
					<view class="flex a-center">
						<image class="wh40 block mr10" src="../../static/index/index24.png" mode="widthFix"></image>
						<view class="fs30 fw600">直播大厅</view>
					</view>
				</view>
				<view class="plr12 pb24" style="margin-top: -12rpx;">
					<view class="qui-grids gutter12 column2">
						<view class="qui-grid relative">
							<view class="abs abslt mt30 ml30 flex text-white fs24">
								<view class="plr10" style="background-color: #F7273F;"><view class="live">直播中</view></view>
								<view class="flex-item plr10" style="background-color: rgba(0,0,0,0.6);">6645在看</view>
							</view>
							<view class="img1x1 radius12 shadow relative block" style="background-image: url('/static/index/index30.png');"></view>
						</view>
						<view class="qui-grid">
							<view class="flex flex-column" style="width: 100%">
								<view class="flex-item radius12 shadow relative">
									<view class="abs abslt mt20 ml20 flex text-white fs24">
										<view class="plr10" style="background-color: #F7273F;"><view class="live">直播中</view></view>
										<view class="flex-item plr10" style="background-color: rgba(0,0,0,0.6);">6645在看</view>
									</view>
									<q-image :imgwh="[340, 158]" :isRatio="true" src="/static/index/index30.png"></q-image>
								</view>
								<view class="flex-item radius12 mt24 relative">
									<view class="abs abslt mt20 ml20 flex text-white fs24">
										<view class="plr10" style="background-color: #F7273F;"><view class="live">直播中</view></view>
										<view class="flex-item plr10" style="background-color: rgba(0,0,0,0.6);">6645在看</view>
									</view>
									<q-image :imgwh="[340, 158]" :isRatio="true" src="/static/index/index30.png"></q-image>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view> -->

				<!-- 分销大厅 -->
				<view class="qui-card panel">
					<view class="card-hd">
						<view class="flex a-center">
							<image class="wh40 block mr10" src="../../static/index/index24.png" mode="widthFix"></image>
							<view class="fs30 fw600">分销大厅</view>
						</view>
					</view>
					<view class="plr12 pb24" style="margin-top: -12rpx;">
						<view class="qui-grids gutter12 column2">
							<view @click="goto('/pages/business/list/list?action=' + item.action)" v-for="(item, index4) in fxList" :key="index4" class="qui-grid relative">
								<view class="block radius12"><q-image :imgwh="[340, 158]" :isRatio="true" :src="item.path"></q-image></view>
							</view>
						</view>
					</view>
				</view>
				<view class="h24 bg-gray-muted" title="分隔条"></view>
				<!-- 兑换大厅 -->
				<view class="qui-card panel">
					<view class="card-hd">
						<view class="flex a-center">
							<image class="wh40 block mr10" src="/static/index/index25.png" mode="widthFix"></image>
							<view class="fs30 fw600">兑换大厅</view>
						</view>
					</view>
					<view class="plr12 pb24" style="margin-top: -12rpx;">
						<view class="qui-grids gutter12 column2">
							<view @click="goto('/pages/superior/list/list?action=' + item.action)" v-for="(item, index5) in dhList" :key="index5" class="qui-grid relative">
								<view class="block radius12"><q-image :imgwh="[340, 158]" :isRatio="true" :src="item.path"></q-image></view>
							</view>
						</view>
					</view>
				</view>
				<view class="h24 bg-gray-muted" title="分隔条"></view>
				<!-- 吃喝玩乐 -->
				<view class="qui-card panel mt24">
					<view class="card-hd">
						<view class="block fs36 fw600 tc relative">
							<text>广州吃喝玩乐</text>
							<image class="abs abscc" style="width: 327rpx; height: 32rpx;" src="/static/index/index32.png"></image>
						</view>
					</view>
					<view class="plr24 pb24">
						<swiper style="height: 235rpx;" :class="true ? 'square-dot' : 'round-dot'" :indicator-dots="true" :circular="true" :autoplay="true">
							<swiper-item v-for="(item, index6) in businessBanner" :key="index6">
								<navigator hover-class="none" url="#"><q-image :lazyLoad="false" :imgwh="[702, 235]" :isRatio="true" :src="item.path"></q-image></navigator>
							</swiper-item>
						</swiper>
						<!-- <view>dsfafsf</view> -->
						<block v-for="(item, index9) in list" :key="index9">
							<view @click="goto('/pages/business/shop/shop?id=' + item.id)" v-for="(item, index8) in list" :key="index8">
								<shop-item :itemData="item"></shop-item>
							</view>
						</block>
					</view>
				</view>
			</view>

			<view v-show="TabCur > 0" class="special relative z-index9">
				<view class="h24 bg-gray-muted" title="分隔条"></view>
				<view class="qui-card panel bg-white-gray" style="min-height: 400rpx;">
					<view class="ptb30 bg-white shadow relative" style="z-index: 9">
						<view class="qui-grids fgs column3 filter-nav">
							<view :class="activeIndex == 0 ? 'active' : ''" @click="activeIndex = 0" class="qui-grid" data-text="zhonghe">综合</view>
							<view @click="sort" :class="activeIndex == 1 ? 'active' : ''" class="qui-grid" data-text="xiaoliang">
								<text :class="sortType == 1 ? 'up' : 'down'" class="arrow">销量</text>
							</view>
							<view @click="sort2" :class="activeIndex == 2 ? 'active' : ''" class="qui-grid" data-text="jiage">
								<text :class="sortType2 == 1 ? 'up' : 'down'" class="arrow">价格</text>
							</view>
						</view>
					</view>

					<view class="plr12 ptb12">
						<qui-list :otherParams="otherParams" :autoLoad="false" ref="getList" getUrl="/wap/Coalition/ColumnList" v-slot="slotProps">
							<view class="qui-grids column2 gutter12">
								<view @click="goto('/pages/svideo/detail/detail?id=' + item.itemid)" class="qui-grid" v-for="(item, index10) in slotProps.list" :key="index10">
									<view class="block tl bg-white radius20 shadow">
										<view class=""><q-image :isRatio="true" :src="item.itempic"></q-image></view>
										<view class="plr20 ptb20">
											<view class="line2 fs28">
												<text>{{ item.itemtitle }}</text>
											</view>
											<view class="flex a-center mt20">
												<text class="cuIcon-shop text-yellow" style="opacity: 0.5;"></text>
												<view class="fs24 text-muted">{{ item.shopname }}</view>
											</view>
											<view class="flex mt20">
												<view class="flex-item">
													<text class="bg-red fs22 ptb10 plr20 radius10 scb">券￥{{ item.couponmoney }}</text>
												</view>
												<view>
													<text class="bg-red light fs22 ptb10 plr10 radius10">分享赚￥{{ item.tkmoney }}</text>
												</view>
											</view>
											<view class="mt20 flex">
												<view class="flex-item">
													<text class="text-theme fs26">￥{{ item.itemprice }}</text>
													<!-- <text class="text-gray fs26 line-through ml10">￥900</text> -->
												</view>
												<view class="fs22 text-muted">已售{{ item.itemsale }}</view>
											</view>
										</view>
									</view>
								</view>
							</view>
						</qui-list>
					</view>
				</view>
			</view>
			<view class="cu-tabbar-height bg-white"></view>
		</page>
	</view>
</template>

<script>
import quiSticky from '@/components/sticky.vue';
import pagination from '@/common/mixin/pagination.js';
import shopItem from '@/components/business-components/shop-item.vue';
import quiSearch from '@/components/qui-search.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	mixins: [pagination],
	components: {
		shopItem,
		quiSearch,
		quiSticky
	},
	props: {
		opcity: {
			type: [Number, String],
			default: 0
		}
	},
	data() {
		return {
			scrollInto: '',
			otherParams: {
				back: 10
			},
			activeIndex: 0,
			sortType: 0,
			sortType2: 0,
			getUrl: '/wap/Line/ShopList',
			autoLoad: false,
			banner: [],
			fxList: [],
			dhList: [],
			businessBanner: [],
			icons: [],
			TabCur: 0,
			scrollLeft: 0,
			dotStyle: false,
			tabBars: []
		};
	},
	watch: {
		PageCur(newName, oldName) {
			if (newName === 'home') {
				this.init();
			}
		}
	},
	created() {
		if (this.PageCur == 'home') {
			this.init();
		}
	},
	computed: {
		...mapState({
			PageCur: 'PageCur',
			homeCategory: state => state.category.homeCategory
		}),

		iconGroup() {
			let itemLen = 10;
			let result = [];
			for (let i = 0; i < Math.ceil(this.icons.length / itemLen); i++) {
				result[i] = this.icons.slice(i * itemLen, i * itemLen + itemLen);
			}
			return result;
		}
	},
	methods: {
		goWhere(item) {
		    if(item.id == 21) {
				// 跳到自营商城的特殊处理
				this.goTab('superior')
				return	
			}
			console.log(item);
			uni.navigateTo({
				url: item.url
			});
			return;
			
		},

		init() {
			this.getBanners();
			this.getBusinessBanner();
			this.getCoalitionIcon();
			this.getOtherLobbyList(1);
			this.getOtherLobbyList(2);
			this.getListData();
		},
		getListData() {
			this.params.action = 1;
			this.params.longitude = 113.253104; // 经度
			this.params.latitude = 23.130152; // 纬度
			this.params.distance = 5; // 附近5000M,单位千米
			this.params.region = 0; // 区id
			this.params.redOrderBy = 1; // 当action = 1时，存在 ；红包金排序1.降序 2.升序
			// this.params.distributionOrderBy = 1 // 当action = 2时，存在 ，佣金排序 1正序 2倒序
			this.getListInit();
		},
		loadMore() {
			if (this.TabCur > 0) {
				this.otherParams.min_id = this.$refs.getList.min_id;
				this.$refs.getList.getList();
			}
		},
		// 切换选项卡
		tabSelect(e) {
			if (!this.loaded) return;
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 80;
			if (this.TabCur > 0) {
				this.otherParams.cid = Number(e.currentTarget.dataset.cid);
				this.$refs.getList.getListInit();
			}
			//
		},
		sort() {
			this.activeIndex = 1;
			if (this.sortType == 0) {
				this.sortType = 1;
			} else {
				this.sortType = 0;
			}
		},
		sort2() {
			this.activeIndex = 2;
			if (this.sortType2 == 0) {
				this.sortType2 = 1;
			} else {
				this.sortType2 = 0;
			}
		},

		// action：1.首页门店轮播图 2.云合商圈播图 3首页联盟轮播图
		async getBanners() {
			const res = await this.post('/wap/Bases/AdsList', { action: 3 });
			if (res.code == 200) {
				this.banner = res.data.list;
			}
		},
		// action：1.首页门店轮播图 2.云合商圈播图 3首页联盟轮播图
		async getBusinessBanner() {
			const res = await this.post('/wap/Bases/AdsList', { action: 1 });
			if (res.code == 200) {
				this.businessBanner = res.data.list;
			}
		},
		async getCoalitionIcon() {
			const res = await this.post('/wap/Coalition/Icon');
			if (res.code == 200) {
				this.icons = res.data.list;
			}
		},
		// 类型：1.分销大厅 2.兑换大厅
		async getOtherLobbyList(action) {
			const res = await this.post('/wap/OtherLobby/List', { action: action });
			if (res.code == 200) {
				if (action == 1) {
					this.fxList = res.data.list;
				} else {
					this.dhList = res.data.list;
				}
			}
		}
	}
};
</script>
<style lang="scss">
//
.live {
	display: flex;
	align-items: center;
	&::before {
		display: block;
		content: '';
		width: 10rpx;
		height: 10rpx;
		background-color: #fff;
		border-radius: 50%;
		margin-right: 10rpx;
	}
}

.home_top {
	position: relative;
	width: 750rpx;
	height: 200rpx;
	margin-bottom: -200rpx;
	&::after {
		bottom: 0;
		left: 0;
		position: absolute;
		display: block;
		content: '';
		width: 750rpx;
		height: 300rpx;
		background: linear-gradient(0deg, var(--themeColor), var(--themeColor));
		border-radius: 50%;
		transform: scale(1.8);
		transform-origin: center bottom;
	}
}
.home_top2 {
	height: 200rpx;
	background-color: var(--themeColor);
	margin-bottom: 0;
	&::after {
		display: none;
	}
}
.home_nav .cu-item.cur {
	color: #fff;
	font-size: 36rpx;
	font-weight: 600;
}
.home_nav .cu-item.cur::after {
	background-color: #fff;
}
</style>
