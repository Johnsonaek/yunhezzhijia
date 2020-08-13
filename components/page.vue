<template>
	<view class="page" :class="[bgClass]">
		<view v-if="title !== ''" class="cu-custom" :style="[{ height: CustomBar + 'px' }]">
			<view class="cu-bar" :style="style"  :class="[titleImage != '' ? 'none-bg text-white bg-img' : '', titleClass]">
				<view class="action">
					<slot name="left"></slot>
					<view @tap="BackPage" v-if="isBack"><text class="cuIcon-back"></text></view>
				</view>
				
				<view v-if="!titleCenter" class="fs30 fw600 ml20" :class="{ ml30: !isBack }">
					<slot name="backText">{{ title }}</slot>
				</view>
				<view class="content fs30 fw600" :style="[{ top: StatusBar + 'px' }]">
					<text v-if="titleCenter">{{ title }}</text>
				</view>
				<view class="flex a-center mr30" style="height: 100%;"><slot name="right"></slot></view>
			</view>
		</view>
		<view v-else :style="[{ height: StatusBar + 'px' }]" :class="[titleClass]"></view>
		<view class="bor-1px-b" v-if="headbor"></view>
		<slot name="top"></slot>
		<scroll-view scroll-y class="page-bd" :class="[bgClass]"
		:refresher-enabled="refresherEnabled" 
		:refresher-triggered="triggered"
		 @scrolltolower="scrolltolower" 
		 @scroll="scroll" 
		 @refresherrefresh="refresherrefresh" 
		 @refresherrestore="refresherrestore">
			<slot></slot>
		</scroll-view>
		<slot name="bottom"></slot>
		<public-module></public-module>
	</view>
</template>

<script>
export default {
	name: 'Page',
	data() {
		return {
			StatusBar: this.StatusBar,
			CustomBar: this.CustomBar
		};
	},
	props: {
		triggered: {
			type: Boolean,
			default: false
		},
		refresherEnabled: {
			type: Boolean,
			default: false
		},
		headbor: {
			type: Boolean,
			default: false
		},
		bgClass: {
			type: String,
			default: 'bgf8f8f8'
		},
		titleBgColor: {
			type: String,
			default: '#ffffff'
		},
		titleClass: {
			type: String,
			default: 'bg-white'
		},
		isBack: {
			type: [Boolean, String],
			default: true
		},
		titleCenter: {
			type: Boolean,
			default: true
		},
		title: {
			type: String,
			default: ''
		},
		backText: {
			type: String,
			default: '返回'
		},
		titleImage: {
			type: String,
			default: ''
		}
	},
	computed: {
		style() {
			var StatusBar = this.StatusBar;
			var CustomBar = this.CustomBar;
			var bgImage = this.bgImage;
			var style = `height:${CustomBar}px;padding-top:${StatusBar}px; background-color:${this.titleBgColor};`;
			if (this.bgImage) {
				style = `${style}background-image:url(${bgImage});`;
			}
			if(!this.titleCenter) {
				style += `justify-content: start;`;
			}
			// console.log(style)
			return style;
		}
	},
	mounted() {},
	methods: {
		scrolltolower() {
			this.$emit('scrolltolower');
		},
		scroll(e) {
			this.$emit('scroll', e);
		},
		refresherrefresh(e) {
			this.$emit('refresherrefresh', e);
		},
		refresherrestore(e) {
			this.$emit('refresherrestore', e);
		},
		BackPage() {
			uni.navigateBack({
				delta: 1
			});
		}
	}
};
</script>
