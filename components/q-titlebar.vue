<template>
	<view class="title-bar-wrapper" :style="[{ height: StatusBar + barHeight + 'px' }]">
		<view class="title-bar" :style="style">
			<view class="bg" :class="bgClass" :style="bgStyle"></view>
			<view class="flex a-center z-index9" :style="[{ height: barHeight + 'px' }]">
				<view class="flex-item tc">
					<block v-if="reshow">
						<slot v-if="opcity < 0.5"></slot>
						<slot v-else name="reshow"></slot>
					</block>
					<block v-else><slot></slot></block>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
let observer = null;
export default {
	name: 'qTitlebar',
	props: {
		reshow: {
			type: Boolean,
			default: true
		},
		height: {
			type: [String, Number],
			default: 0
		},
		opcity: {
			type: [String, Number],
			default: 0
		},
		bgClass: {
			type: String,
			default: 'bg-white'
		}
	},
	data() {
		return {
			StatusBar: this.StatusBar,
			CustomBar: this.CustomBar
		};
	},
	created() {

	},
	computed: {
		barHeight() {
			return uni.upx2px(this.height);
		},
		bgStyle() {
			let style = `opacity: ${this.opcity};`;
			return style;
		},
		style() {
			let StatusBar = this.StatusBar;
			let barHeight = this.barHeight;
			let style = `height:${StatusBar + barHeight}px;padding-top:${StatusBar}px;`;
			return style;
		}
	},

	methods: {}
};
</script>

<style scoped lang="scss">
.title-bar-wrapper {
	z-index: 9999;
	left:0;
	right:0;
	top: 0;
	position: fixed;
	display: block;
	overflow: hidden;
}
.title-bar {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 9999;
	.bg {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 1;
	}
}
</style>
