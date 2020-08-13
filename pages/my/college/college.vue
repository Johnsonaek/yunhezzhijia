<template>
	<page title="商学院" @scrolltolower="Scrolltolower">
		<view class="">
			<swiper style="height: 262rpx;" :class="true ? 'square-dot' : 'round-dot'" :indicator-dots="true" :circular="true" :autoplay="true">
				<swiper-item v-for="(item, index) in banner" :key="index">
					<navigator hover-class="none" url="#"><q-image :lazyLoad="false" :imgwh="[750, 375]" :isRatio="true" :src="item.imgUrl"></q-image></navigator>
				</swiper-item>
			</swiper>
		</view>

		<view class="qui-grids column3 gutter10 plr20 mt20">
			<view class="qui-grid" v-for="(item,index) in classList" :key="index">
				<navigator
					:url="'/pages/my/curriculumlist/curriculumlist?id='+item.id+'&cname='+item.class_name"
					class="flex a-center j-center mb30 h60 fs24 radius10 fw600 block"
					style="background-color: #F0EFEF; color: #F82840; line-height: 60rpx;"
				>
					{{ item.class_name }}
				</navigator>
			</view>
		</view>
		<navigator :url="'/pages/my/courseDetails/courseDetails?id='+topOne.id" class="mb50 mlr30">
			<view class="h300" style="border-radius: 10px 10px 0 0;overflow: hidden;">
				<q-image :lazyLoad="false" :isRatio="true" :imgwh="[750,375]" :src="topOne.coverImg"></q-image>
			</view>
			<view class="bg-white flex plr20 ptb10" style="border-radius: 0 0 10px 10px; box-shadow:0px 4px 7px 0px rgba(195,190,191,1);">
				<view class="flex-item flex a-center fs22" style="color: #999999;">{{topOne.createdAt}}</view>
				<view class="flex-item flex a-center fs22" style="justify-content: flex-end;color: #999999;">
					<image src="/static/business/eyes.png" class="wh40 mr10"></image>
					{{topOne.pageView}}
				</view>
			</view>
		</navigator>
		<empty v-if="list.length === 0 && loaded"></empty>
		<view class="loading ptb30" v-if="!loaded"></view>
		<block v-for="(item, index) in list" :key="index">
			<navigator v-if="index > 0" :url="'/pages/my/courseDetails/courseDetails?id='+item.id" class="bg-white mlr20 ptb20 flex" style="border-bottom: 1px solid #EEEEEE;">
				<view class="w200 h150 radius10" style="overflow: hidden;"><image :src="item.coverImg" class="w200 h150 block"></image></view>
				<view class="flex-item plr20">
					<view class="h100 mb10 fs24">{{item.title}}</view>
					<view>
						<view class="flex a-center">
							<view class="flex-item flex a-center fs22" style="color: #999999;">{{item.createdAt}}</view>
							<view class="flex-item flex a-center fs22" style="justify-content: flex-end;color: :;;">
								<image src="../../../static/business/eyes.png" class="wh40 mr10"></image>
								{{item.pageView}}
							</view>
						</view>
					</view>
				</view>
			</navigator>
		</block>
		<loading-more nomore-text="我是有底线的" :nomore="nomore" :list="list"></loading-more>
	</page>
</template>

<script>
	import pagination from '@/common/mixin/pagination.js';
export default {
	mixins:[pagination],
	data() {
		return {
			getUrl: '/wap/BusniessCollege/articleList',
			banner: [],
			classList: [],
		};
	},
	onLoad() {
		this.init();
	},
	computed:{
		topOne(){
			return this.list[0]
		}
	},
	methods: {
		init() {
			this.getBanner();
			this.getClassList();
		},
		async getBanner() {
			const res = await this.post('/wap/BusniessCollege/adsList');
			this.banner = res.data.list;
		},
		async getClassList() {
			const res = await this.post('/wap/BusniessCollege/classList');
			this.classList = res.data.list;
		}
	}
};
</script>

<style scoped>
page {
	background-color: #ffffff;
}
</style>
