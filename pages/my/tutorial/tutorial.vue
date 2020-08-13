<template>
	<page title="新手教程">
		 <empty v-if="list.length === 0 && loaded"></empty>
		 <view class="loading ptb30" v-if="!loaded"></view>

		<view v-for="(item,index) in list" :key="index" class="mlr20 mt20 radius10 tutorial-list" style="box-shadow:0px 10px 10px 0px rgba(254,109,98,0.1);">

			<video :poster="item.coverImg" class="block" :src="item.videoUrl" controls></video>
			<view class="flex a-center h80 plr30">
				<text class="flex-item fs22">{{item.title}}</text>
				<view class="player wh40"></view>
			</view>
		</view>
		
		<loading-more nomore-text="我是有底线的" :nomore="nomore" :list="list"></loading-more>
	</page>
</template>

<script>
	import pagination from '@/common/mixin/pagination.js';
	export default {
		mixins:[pagination],
		data() {
			return {
				getUrl: '/wap/NoviceCourse/courseList'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #FFFFFF;
	}
	.tutorial-list{
		uni-text{
			color: #FFA4AF;
		}
		&:nth-child(2n) uni-text{
			color: #C6A4FF;
		}
		.player{
			background: url(/static/business/player1.png) no-repeat center center;
			background-size: cover;
		}
		&:nth-child(2n) .player{
			background: url(/static/business/player2.png) no-repeat center center;
			background-size: cover;
		}
	}
</style>
