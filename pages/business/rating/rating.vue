<template>
	<view>
		<page title="商品评价">
			<view class="qui-card">
				<view class="card-hd">
					<view class="flex a-center">
						<text class="mr30">评分</text>
						<sx-rate  :value.sync="val"></sx-rate>
					</view>
				</view>
				<view class="card-bd">
					<view class="mb30">
						<text class="plr10 ptb5 bg-gray mr20 mb20">质量特别好</text>
						<text class="plr10 ptb5 bg-gray mr20 mb20">质量特别好</text>
						<text class="plr10 ptb5 bg-gray mr20 mb20">特别好吃</text>
					</view>
					<view class="bg-gray radius12 plr20 ptb20">
						<textarea value="" placeholder="亲留下你的评价吧！" />
					</view>
				</view>
			</view>
			<view class="plr30 ptb30"><view class="qui-btn">发布</view></view>
		</page>
	</view>
</template>

<script>
import sxRate from '@/components/sx-rate/index.vue';
export default {
	components: {
		sxRate
	},
	data() {
		return {
			val: 3
		};
	},
	methods: {}
};
</script>

<style></style>
