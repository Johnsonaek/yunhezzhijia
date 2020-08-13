<template>
	<view>
		<view v-if="nomore"  class="nomoer">
			<view v-show="list.length> itemlength"  class="divider divider-50 ptb20"><text class="fs28 mlr20">{{nomoreText}}</text></view>
		</view>
		<view v-else>
			<view v-show="list.length> step" class="loading">{{loadingText}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'LoadingMore',
		props:{
			list: {
				type: Array
			},
			nomore: {
				type: Boolean,
				default: false
			},
			nomoreText: {
				type: String,
				default: '没有更多数据了'
			},
			loadingText: {
				type: String,
				default: '正在加载'
			},
			step: {
				type: [String, Number],
				default: 20
			},
			itemlength: {
				type: [String, Number],
				default: 5
			}
			
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
