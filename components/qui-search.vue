<template>
	<view class="flex a-center ptb20 plr24">
		<slot name="left"></slot>
		<navigator hover-class="none" :url="url" class="flex-item">
			<view class="radius30 h60 flex aj-center" :class="bgClass">
				<text class="cuIcon-search mr10"></text><text class="text-gray">请输入搜索内容</text>
			</view>
		</navigator>
		<slot name="right"></slot>
	</view>
</template>

<script>
	export default {
		name: 'quiSearch',
		props:{
			url: {
				type: String,
				default: ''
			},
			bgClass: {
				type: String,
				default: 'bg-gray'
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
