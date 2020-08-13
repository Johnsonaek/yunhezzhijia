<template>
	<page :title="title">
		<empty v-if="list.length === 0 && loaded"></empty>
		<view class="loading ptb30" v-if="!loaded"></view>
		<block v-for="(item, index) in list" :key="index">
			<navigator :url="'/pages/my/courseDetails/courseDetails?id=' + item.id" class="bg-white plr20 ptb20 flex" style="border-bottom: 1px solid #EEEEEE;">
				<view class="w200 h150 radius10" style="overflow: hidden;"><image :src="item.coverImg" class="w200 h150 block"></image></view>
				<view class="flex-item plr20">
					<view class="h100 mb10 fs24">{{ item.title }}</view>
					<view>
						<view class="flex a-center">
							<view class="flex-item flex a-center fs22" style="color: #999999;">{{ item.createdAt }}</view>
							<view class="flex-item flex a-center fs22" style="justify-content: flex-end;color: :;;">
								<image src="../../../static/business/eyes.png" class="wh40 mr10"></image>
								{{ item.pageView }}
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
	mixins: [pagination],
	data() {
		return {
			getUrl: '/wap/BusniessCollege/articleList',
			autoLoad: false,
			title: '课程列表'
		};
	},
	onLoad(e) {
		if (e.cname) {
			this.title = e.cname;
		}
		this.id = e.id;
		this.params.class_id = Number(e.id);
		// this.getListInit()
	},
	onShow() {
		this.getListInit();
	},
	methods: {}
};
</script>

<style></style>
