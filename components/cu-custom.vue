<template>
	<view>
		<view class="cu-custom"  :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<view  class="action" @tap="BackPage" v-if="isBack">
					<text :style="{color:opcity>=1?'#000':'#fff',background:'rgba(0, 0, 0,'+iconOpcity+')'}"  class="cuIcon-back"></text>
				</view>
				<view v-if="!titleCenter" class="fs30 fw600" :class="{'ml30': !isBack}">
					<slot name="backText">{{title}}</slot>
				</view>
				<view class="content" :style="[{top:StatusBar + 'px'}]">
					<view v-if="titleCenter" :style="{paddingTop:top+'px', opacity:opcity}">{{title}}</view>
				</view>
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var StatusBar= this.StatusBar;
				var CustomBar= this.CustomBar;
				var bgImage = this.bgImage;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;background-color: rgba(255,255,255,${this.opcity});`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		props: {
			title: {
				type: String,
				default: ''
			},
			titleCenter: {
				type: Boolean,
				default: false
			},
			opcity: {
				type: [String, Number],
				default: 0
			},
			iconOpcity: {
				type: [String, Number],
				default: 0
			},
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			bgImage: {
				type: String,
				default: ''
			},
		},
		methods: {
			BackPage() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
  .cuIcon-back{
	  display: flex;
	  width: 60rpx;
	  height: 60rpx;
	  border-radius: 30rpx;
	  align-items: center;
	  justify-content: center;
  }
</style>
