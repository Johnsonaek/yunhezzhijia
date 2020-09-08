<!-- 自营商城 -->
<template>
	<view>
		<page bgClass="bg-white" :headbor="false" @scrolltolower="loadMore('qlist')">
			<qui-search slot="top" url="/pages/superior/search/search">
				<navigator url="/pages/superior/cart/cart" slot="right" class="ml20"><text class="cuIcon-cart fs50"></text></navigator>
			</qui-search>
			
			<scroll-view slot="top" scroll-x class="bg-white nav superior_nav" scroll-with-animation :scroll-left="scrollLeft">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="index == TabCur ? 'text-red cur' : ''" v-for="(item, index) in tabBars" :key="index" @tap="tabSelect" :data-cid="item.id" :data-id="index">
						{{ item.name }}
					</view>
				</view>
			</scroll-view>

			<!-- 轮播图 -->
			<view class="plr24 ptb24 ">
				<swiper style="height: 262rpx;" class="round-dot" :circular="true" :autoplay="true" indicator-dots="true" interval="5000" duration="500">
					<swiper-item v-for="(item, index) in banner" :key="index">
						<navigator hover-class="none" url="/" class="radius12">
							<q-image :lazyLoad="false" :imgwh="[702, 262]" :isRatio="true" :src="item.imgUrl"></q-image>
						</navigator>
					</swiper-item>
				</swiper>
			</view>

			<view class="bg-gray" style="height: 24rpx;"></view>
			<!-- 推荐 -->
			<view class="qui-card panel bg-white-gray" style="min-height: 800rpx;">
				<!-- <view class="card-hd ptb24">
					<view class="">
						<text class="fs34 fw600">为你推荐</text>
						<text class="fs26 text-muted ml20">爆款好货 先到先得</text>
					</view>
				</view> -->
				<view class="h24">
					
				</view>
				<qui-list :otherParams="otherParams" :autoLoad="false" ref="qlist" getUrl="/wap/Supply/getGoods" v-slot="slotProps">
					<view class="plr12 pt0" style="margin-top: -12rpx;">
						<view class="qui-grids column2 gutter12">
							<view @click="goto('/pages/superior/detail/detail?id=' + item.goods_id)" class="qui-grid" v-for="(item, index) in slotProps.list" :key="index">
								<view class="block tl bg-white radius20 shadow">
									<view class=""><q-image :isRatio="true" :src="item.original_img"></q-image></view>
									<view class="plr20 ptb20">
										<view class="line2 fs28 h80">{{ item.goods_name }}</view>
										<view class="mt10 flex">
											<view class="flex-item">
												<text class="text-theme fs26">￥{{ item.sell_price }}</text>
												<text class="text-gray fs26 line-through ml10">￥{{ item.ma_price }}</text>
											</view>
											<!-- <view class="fs22 text-muted">已售724</view> -->
										</view>
										<view style="border:0" class="qui-btn bg-theme2 h50 mt20 fs24">分享赚{{(item.sell_price * item.commission_rate).toFixed(2)}}</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</qui-list>
			</view>

			
			<view class="cu-tabbar-height"></view>
		</page>
		<uni-popup ref="popup" type="top">
			<view style="margin-top: 200rpx;"></view>
			<view class="qui-card panel">
				<view class="h400 flex">
					<view class="y-tabnav w200 bg-white bor-1px-r">
						<view @click="getLevel3(item.id, index)" class="bor-1px-b" v-for="(item, index) in level2" :key="index" :class="index == currentIndex ? 'active' : ''" :data-pid="item.id" :data-id="index">
							{{ item.name }}
						</view>
					</view>
					<view class="flex-item">
						<scroll-view scroll-y="true" style="height: 360rpx; position: relative;">
							<view v-show="level3Loading" class="loading abs abscc"></view>
							<view class="qui-grids column3 gutter10 plr10">
								<view class="qui-grid" v-for="(item, index) in level3" :key="index" @click="getListData(item.id)"><view class="fs24 mt10 line1">{{item.name}}</view></view>
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
// import pagination from '@/common/mixin/pagination.js';
import quiSearch from '@/components/qui-search.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	components: { quiSearch, uniPopup },
	// mixins: [pagination],
	data() {
		return {
			otherParams:{},
			level3Loading: false,
			level2: [],
			level3: [],
			currentIndex: 0,
			banner: [],
			autoLoad: false,
			TabCur: 0,
			scrollLeft: 0,
			tabBars: [],
			showHeader: true,
			afterHeaderOpacity: 1, //不透明度
			headerPosition: 'fixed',
			headerTop: null,
			statusTop: null,
			nVueTitle: null,
			current: 0
		};
	},
	computed: {
		...mapState({
			PageCur: 'PageCur'
		}),
	},
	watch: {
		PageCur(newName, oldName) {
			if (newName === 'superior') {
				// 监听页面切换，做你想做的事
				this.init();
			}
		}
	},
	mounted() {
		if (this.PageCur == 'superior') {
			this.init();
		}
	},
	onLoad(){
		this.getBanner()
		this.getGoodsCat(0,1)
		
	},
	methods: {
		async getGoodsClassiFication(){
			const res = await this.post('/wap/Supply/getGoodsCat')
			console.log(res)
		},
		async getBanner() {
			const res = await this.post('/wap/MallBanner/bannerList')
			this.banner = res.data.list
		},
		getLevel3(cid,index) {
			this.currentIndex = index
			this.getGoodsCat(cid,3)
		},
		// 切换选项卡
		tabSelect(e) {
			console.log(e.currentTarget.dataset.id)
			this.TabCur = e.currentTarget.dataset.id;
			let cid = e.currentTarget.dataset.cid;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 100;
			if (this.TabCur > 0) {
				this.$refs.popup.open();
				this.getGoodsCat(cid,2)
				this.level3 = []
				setTimeout(()=>{
					this.getGoodsCat(this.level2[0].id,3)
				},1000)
			} else {
				delete this.otherParams.cat_id3
				this.$refs.qlist.getListInit()
			}
		},
		init() {
			this.getGoodsCat(0,1);
			this.getBanner();
			this.$refs.qlist.getListInit()
		},
		getListData(id) {
			this.otherParams.mall_type = 1;
			this.otherParams.cat_id3 = id;
			this.$refs.qlist.getListInit()
			this.$refs.popup.close();
		},
		// 获取产品分类
		async getGoodsCat(cid,level) {
			this.level3Loading = true
			const res = await this.post('/wap/Supply/getGoodsCat', {cate_id: cid});
			if(level == 1) {
				this.tabBars = [...[{name: '全部'}],...res.data];
			} else if(level == 2) {
				this.level2 = res.data
			} else {
				this.level3 = res.data
			}
			if(res.data.length == 0) {
				uni.showToast({
					title: '没有更多分类',
					icon: 'none'
				})
				this.$refs.popup.close();
			}
			
			this.level3Loading = false
			
			
		}
	}
};
</script>
<style scoped lang="scss">
.bg-white-gray {
	background-image: linear-gradient(180deg, #fff, #fff, #f8f8f8);
}
.superior_nav .cu-item.cur {
	color: #000000;
}
.superior_nav .cu-item.cur::after {
	background-color: #000000;
}
</style>
