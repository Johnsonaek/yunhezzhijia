<template>
	<page title="常见问题">
		<view @click="gitInit" slot="right" class="refresh"><image src="../../../static/business/refresh.png" class="wh50"></image></view>

		<empty v-if="list.length === 0 && loaded"></empty>
		<view class="loading ptb30" v-if="!loaded"></view>
		
		<view v-for="(item,index) in list" :key="index" class="pt20 plr20">
			<navigator :url="'/pages/my/commonProblem/detail/detail?id='+item.id" class="flex a-center bg-white ptb20 plr20">
				<text class="flex-item fs28">{{item.title}}</text>
				<view class="arrow-r wt50 ml20"></view>
			</navigator>
		</view>
		
		<loading-more nomore-text="我是有底线的" :nomore="nomore" :list="list"></loading-more>
	</page>
</template>

<script>
import pagination from '@/common/mixin/pagination.js';
export default {
	mixins: [pagination],
	data() {
		return {
			getUrl: '/wap/CommonQuestion/questionList' // 需要分页的接口地址，
		};
	},
	methods: {
		gitInit(){
			this.getListInit()
		}
	}
};
</script>

<style scoped>
.arrow-l {
	position: absolute;
	left: 20rpx;
	top: 50%;
	transform: rotateZ(45deg) translateY(-50%);
	border: 2px solid #444444;
	border-top: 0;
	border-right: 0;
	width: 20rpx;
	height: 20rpx;
	z-index: 999;
}
.refresh {
	position: absolute;
	right: 20rpx;
	top: 50%;
	z-index: 999;
	transform: translateY(-50%);
}
</style>
