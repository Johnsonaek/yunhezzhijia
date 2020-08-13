<template>
	<view class="cu-bar tabbar bg-white shadow foot">
		<view v-for="(item, index) in navList" :key="index" class="action" @click="NavChange(item.name)" data-cur="home">
			<view class='cuIcon-cu-image' :class="{'active': PageCur == item.name}">
				<image v-if="PageCur == item.name" class="lh_img" :src="'/static/tabbar/'+item.name+'_lh.png'"></image>
				<image v-else :src="'/static/tabbar/'+item.name+'.png'"></image>
			</view>
			<view class="mt10" :class="PageCur==item.name?'active':'text-gray'">{{item.text}}</view>
		</view>
	</view>
</template>

<script>
	import Config from '@/utils/config.js'
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		name: 'BottomTabbar',
		props:{
			navList: {
				type: Array
			},
			active: {
				type: [Number, String],
				default: 0
			}
		},
		data() {
			return {
			
			};
		},
		computed:{
			...mapState({
				PageCur: 'PageCur'
			})
		},
		methods: {
			...mapMutations(['NavChange'])
		}
	}
</script>


<style lang="scss">
	.active {
		color: var(--themeColor);
	}

	.cu-bar.tabbar {
		.action {
			.cuIcon-cu-image {
				margin-bottom: 4rpx;
				position: relative;
				width: 44rpx;
				height: 44rpx;
				image {
					width: 44rpx;
					height: 44rpx;
					position: absolute;
					left: 0;
					top: 0;
				}
				.lh_img{
					transition: opacity 0.3s;
					z-index: 2;
					opacity: 0;
					display: none;
				}
				&.active .lh_img{
					opacity: 1;
					display: block;
				}
			}
		}
	}
</style>