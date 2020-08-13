<template>
	<view class="qui-grids gutter10" :class="'column'+column">
		<view  :style="{width: inline?'auto':'', minWidth: '120rpx'}" class="qui-grid" :key="index" v-for="(item, index) in label.list">
			<view class="qui-btn small outline" :class="label.selected === index ? 'radio-active' : ''" @click="changeRadio(index)">{{ item.name }}</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'RadioGroup',
	props: {
		label: Object,
		column: {
			type: [String, Number],
			default: 3
		},
		inline: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		changeRadio(index) {
			this.$emit('update:selected', index);
			this.$emit('changeRadio',index)
		}
	}
};
</script>

<style scoped>
.radio-active {
	background: var(--themeColor) !important;
	color: #ffffff !important;
	border-color: var(--themeColor) !important;
}
</style>
