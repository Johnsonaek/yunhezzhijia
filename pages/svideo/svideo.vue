<template>
	<view>
		<page :headbor="false" :isBack="false" title="">
			<scroll-view slot="top" scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="index == TabCur ? 'text-red cur' : ''" v-for="(item, index) in tabBars" :key="index" @tap="tabSelect" :data-cid="item.id" :data-id="index">
						{{ item.name }}
					</view>
				</view>
			</scroll-view>
			<empty v-if="list.length === 0 && loaded"></empty>
			<view class="loading ptb30" v-if="!loaded"></view>
			<view class="plr12 ptb12">
				<view class="qui-grids column2 gutter12">
					<view @click="goto('/pages/svideo/video-play/video-play?id='+item.itemid)" class="qui-grid" v-for="(item, index) in list" :key="index">
						<view class="block tl bg-white radius20 shadow">
							<view class=""><q-image :isRatio="true" :src="item.itempic"></q-image></view>
							<view class="plr20 ptb20">
								<view class="line2 fs28">{{item.itemtitle}}</view>
								<view class="mt10">
									<text class="text-theme fs26">￥{{item.itemprice}}</text>
									<text class="text-gray fs26 line-through">￥{{item.couponmoney + item.itemprice}}</text>
								</view>
								<view class="qui-btn bg-theme2 h50 mt20 fs24">分享赚{{item.tkmoney}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<loading-more nomore-text="我是有底线的" :nomore="nomore" :list="list"></loading-more>
			<view class="h100">
				
			</view>
		</page>
	</view>
</template>

<script>
import pagination from '@/common/mixin/pagination.js';
import { mapState, mapMutations } from 'vuex';
export default {
	mixins: [pagination],
	data() {
		return {
			getUrl: '/wap/Material/VideoList',
			autoLoad: false,
			TabCur: 0,
			scrollLeft: 0,
			tabBars: [
				// {
				// 	name: '热门推荐'
				// },
				// {
				// 	name: '百变穿搭'
				// },
				// {
				// 	name: '美妆达人'
				// },
				// {
				// 	name: '美丽配饰'
				// },
				// {
				// 	name: '时尚潮男'
				// }
			]
		};
	},
	computed: {
		...mapState({
			PageCur: 'PageCur'
		})
	},
	created() {
		if (this.PageCur == 'svideo') {
			this.init();
		}
	},
	watch: {
		PageCur(newName, oldName) {
			if (newName === 'svideo') {
				this.init();
			}
		}
	},
	methods: {
		init() {
			this.getVideoCategory();
			this.params.id = 0;
			this.getListInit();
		},
		// 切换选项卡
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
			if (!this.loaded) return;
			this.params.id = e.currentTarget.dataset.cid;
			this.getListInit();
		},
		async getVideoCategory() {
			const res = await this.post('/wap/Material/VideoCategoryList');
			if (res.code == 200) {
				this.tabBars = res.data.list.map(v => {
					return {
						name: v.dyCatName,
						name2: v.catName,
						id: v.id
					};
				});
			}
		}
	}
};
</script>

<style lang="scss">
.nav .cur {
	font-weight: bold;
}
</style>
