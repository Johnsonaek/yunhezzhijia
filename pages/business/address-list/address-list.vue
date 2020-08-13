<template>
	<page title="选择地区">
		<view>
			<uni-indexed-list :options="list" :showSelect="false" @click="bindClick"></uni-indexed-list>
		</view>
	</page>
</template>

<script>
import uniIndexedList from '@/components/uni-indexed-list/uni-indexed-list.vue';
export default {
	components: { uniIndexedList },
	data() {
		return {
			list: [
				{
					letter: 'A',
					data: ['阿克苏机场', '阿拉山口机场', '阿勒泰机场', '阿里昆莎机场', '安庆天柱山机场', '澳门国际机场']
				},
				{
					letter: 'B',
					data: ['保山机场', '包头机场', '北海福成机场', '北京南苑机场', '北京首都国际机场']
				}
			]
		};
	},
	methods: {
		bindClick(e){
			console.log(e)
			uni.navigateBack()
			this.$store.commit('resetLocation',e.item.name)
		}
	}
};
</script>

<style></style>
