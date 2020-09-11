<!-- 云合商圈 -->
<template>
	<view class="mypage">
		<page :headbor="false" title="" @scrolltolower="loadMore('qlist')">
			<view slot="top" class="bg-white" style="width: 750rpx;">
				<qui-search url="/pages/business/search/search">
					<view class="cuIcon-close fs34 mr20"></view>
					<view v-if="Location" @click="goto('/pages/business/address-list/address-list')" slot="left" class="line1 mr20" style="max-width: 280rpx;">
						<text>{{ Location.address.city }}</text>
						<text class="cuIcon-unfold ml10"></text>
					</view>
				</qui-search>
			</view>
			<!-- 轮播图 -->
			<swiper class="screen-swiper round-dot" :circular="true" indicator-dots="true" :autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item, index) in banner" :key="index">
					<navigator hover-class="none" url="/"><q-image :lazyLoad="false" :imgwh="[702, 350]" :isRatio="true" :src="item.path"></q-image></navigator>
				</swiper-item>
			</swiper>

			<scroll-view scroll-x class="bg-white nav shadow relative z-index9" scroll-with-animation :scroll-left="scrollLeft">
				<view class="flex text-center">
					<view
						class="cu-item flex-sub"
						:class="index == TabCur ? 'text-red cur' : ''"
						v-for="(item, index) in businessCategory"
						:key="index"
						@tap="tabSelect"
						:data-id="index"
					>
						{{ item.name }}
					</view>
				</view>
			</scroll-view>
			<view class="ptb30 bg-white bor-1px-b relative">
				<view class="qui-grids column4 filter-nav">
					<view @click="openPopup('popup')" class="qui-grid" style="flex-direction: row; position: relative; top: -4rpx;">
						<text class="ml40">附近</text>
						<text class="cuIcon-triangledownfill fs40"></text>
					</view>
					<view @click="sort" class="qui-grid" :class="sortType == 1 ? 'up' : 'down'">
						<text v-if="action == 2" class="arrow">红包金</text>
						<text v-else class="arrow">佣金</text>
					</view>
				</view>
			</view>
			<view class="plr24">
				<qui-list :otherParams="otherParams" ref="qlist" getUrl="/wap/Line/ShopList" :autoLoad="false" v-slot="data">
					<view @click="goto('/pages/business/shop/shop?id=' + item.id)" v-for="(item, index) in data.list" :key="index">
						<shop-item :itemData="item"></shop-item>
					</view>
				</qui-list>
				
			</view>
		</page>

		<uni-popup ref="popup" type="center">

			<view class="qui-card panel radius16" style="width: 600rpx; border-radius: 12px; overflow: hidden;">
				<view class="h400 flex">
					<view class="y-tabnav flex-item bg-white bor-1px-r">
						<view
							class="bor-1px-b"
							@tap="changeDistance(index, item)"
							v-for="(item, index) in distanceList"
							:key="index"
							:class="index == currentDistance ? 'active' : ''"
							:data-pid="item.id"
							:data-id="index"
						>
							{{ item.name }}
						</view>
					</view>
					<!-- <view class="flex-item">
						<scroll-view scroll-y="true" style="height: 360rpx;">
							<view class="qui-grids column3 gutter10 plr10">
								<view class="qui-grid" v-for="(item, index) in 20" :key="index"><view class="fs24 mt10">电视类型</view></view>
							</view>
						</scroll-view>
					</view> -->
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import quiSticky from '@/components/sticky.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';

import quiSearch from '@/components/qui-search.vue';
import shopItem from '@/components/business-components/shop-item.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	components: {
		quiSearch,
		shopItem,
		uniPopup,
		quiSticky
	},
	data() {
		return {
			action: 1,
			currentIndex: 0,
			TabCur: 0,
			scrollLeft: 0,
			sortType: 0,
			tabBars: [],
			banner: [],
			currentDistance: 0,
			otherParams:{
				action:this.action,
				longitude:Number,
				latitude:Number,
				distance:3
			},
			distanceList:[]
		};
	},
	computed: {
		...mapState({
			businessCategory: state => state.category.businessCategory,
			PageCur: 'PageCur',
			Location: 'Location'
		})
	},
	onLoad(e) {
		this.action = Number(e.action)
		// this.init();
		console.log(this.otherParams)
	},
	mounted() {
		this.init()
	},
	methods: {
		init() {
			this.getBanners();
			this.getListData(); 
			this.getNearby()
		},
		async getNearby() {
			const res = await this.post('/wap/Bases/BasesDistanceList')
			this.distanceList = res.data.distanceList
		},
		getListData() {
			this.otherParams.action = this.action;
			this.otherParams.longitude = this.Location.longitude || 113.240459; // 经度
			this.otherParams.latitude = this.Location.latitude || 23.130919; // 纬度
			this.otherParams.region = 0; // 区id
			this.$refs.qlist.getListInit();
		},
		changeDistance(index, item) {
			// 切换距离
			this.currentDistance = index
			this.otherParams.distance = item.number
			this.otherParams.distance = item.number || 0; // 附近5000M,单位千米
			this.getListData()
			this.$refs.popup.close()
		},
		// 切换选项卡
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
		},
		changeCategory() {},
		// action：1.首页门店轮播图 2.云合商圈播图 3首页联盟轮播图
		async getBanners() {
			const res = await this.post('/wap/Bases/AdsList', { action: 2 });
			console.log(res)
			if (res.code == 200) {
				this.banner = res.data.list;
			}
		},
		sort() {
			
			if (this.sortType == 1) {
				this.sortType = 2 // 控制箭头向上向下
				this.otherParams.redOrderBy = this.sortType
				this.getListData()
			} else {
				this.sortType = 1 // 控制箭头向上向下
				this.otherParams.redOrderBy = this.sortType
				this.getListData()
			}
			
			if(this.action == 1) {
				this.otherParams.redOrderBy = this.sortType; // 当action = 1时，存在 ；红包金排序1.降序 2.升序
			}
			else {
				this.otherParams.distributionOrderBy = this.sortType // 当action = 2时，存在 ，佣金排序 1正序 2倒序
			}
		}
	}
};
</script>
<style scoped lang="scss">
.mypage {
	background-color: #fff !important;
	height: 100vh;
}

.status {
	/*  #ifdef  APP-PLUS  */
	height: var(--status-bar-height); //覆盖样式
	/*  #endif  */
}
.filter-nav {
	color: var(--defaultTextColor);
	font-size: 28rpx;

	.arrow {
		display: inline-block;
		position: relative;
		padding-right: 36rpx;

		&::before {
			color: var(--grayColor);
			font-size: 40rpx;
			line-height: 1em;
			font-family: 'cuIcon';
			position: absolute;
			content: '\e79c';
			right: 0;
			top: -4rpx;
		}

		&::after {
			color: var(--grayColor);
			font-size: 40rpx;
			line-height: 1em;
			font-family: 'cuIcon';
			position: absolute;
			content: '\e79b';
			right: 0;
			bottom: -10rpx;
		}
	}

	.active {
		font-size: 34rpx;
		color: var(--defaultTextColor);
		font-weight: 600;
		line-height: 1.4em;
	}

	.up {
		.arrow {
			&::before {
				color: var(--defaultTextColor);
			}
		}
	}

	.down {
		.arrow {
			&::after {
				color: var(--defaultTextColor);
			}
		}
	}
}
</style>
