<template>
	<page title="我的足迹" @scrolltolower="Scrolltolower">
		
		<empty mode="favor" text="暂无收藏" v-if="list.length === 0 && loaded"></empty>
		<!-- <view class="loading ptb30" v-if="!loaded"></view> -->
		
		<view class="qui-cells mt24">
			<view @click="goDetail(item.type,item.id)" class="qui-cell" v-for="(item,index) in list" :key="index">
				<view class="mr24">
					<image :src="item.path" class="wh200 block"></image>
				</view>
				<view class="cell-bd">
					<view class="fw500 fs26 h150 line2">{{item.title}}</view>
					<view class="text-red">￥{{item.amount}}</view>
				</view>
			</view>
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
				getUrl: '/wap/Coalition/MarkList'
			}
		},
		methods: {
			goDetail(type, id) {
				let url = ''
				if(type ==1){
					url = '/pages/home/pdd/detail/detail?id='+id
				} else if(type ==3) {
					url = '/pages/home/taobao/detail/detail?id='+id
				}
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style>

</style>
