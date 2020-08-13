<template>
	<view>
		<page :titleCenter="false" title="烟台水果店">
			<video
			    v-if="videoArr.length>0"
				style="height: 100%; width: 100%;"
				id="myVideo"
				:autoplay="true"
				:src="videoArr[0].video_url"
				:poster="videoArr[0].first_frame"
				@error="videoErrorCallback"
				:controls="true"
			>
				<cover-view style="width: 100%; height: 100%; white-space:normal;  background-size: cover; background-image: url('https://org.modao.cc/uploads4/images/4897/48971926/v2_qapuzy.jpg');" class="relative z-index9">
					<view class="abs absrc mr10">
						<view @click="like" class="wh80 radius50 flex aj-center bg-black-50">
							<view v-if="isLike" class="cuIcon-likefill text-red fs50"></view>
							<view v-else class="cuIcon-like text-white fs50"></view>
						</view>
						<view @click="openShowText" class="wh80 radius50 flex aj-center bg-black-50 mt40"><view class="cuIcon-text text-white fs50"></view></view>
					</view>
					
					
					
					<!--文案-->
					<view v-if="showText" class="abs absbc block z-index9 bg-black-50">
						<view class="text-white text-wrap plr30 ptb20" style="min-height: 200rpx;">{{detail.itemdesc}}
						</view>
						<view class="flex a-center ptb20 plr30 tc bg-black-60">
							<view @click="showText = false" class="flex-item text-white">取消</view>
							<view class="h50 bor-1px-r"></view>
							<view @click="paste(detail.itemdesc)" class="flex-item text-red">复制</view>
						</view>
					</view>
					<!--商品-->
					<view v-else class="abs absbc block z-index9 bg-black-50">
						<view @click="goto('/pages/svideo/detail/detail?id='+detail.itemid)" class="flex a-center ptb20 plr30">
							<view class="radius12 mr24">
								<image class="block wh160" :src="detail.itempic" mode=""></image>
							</view>
							<view class="flex-item text-white">
								<view class="fs30 line2">
									{{detail.itemtitle}}
								</view>
								<view class="fs24 mt20">
									券后价 <text class="text-red mr20">￥{{detail.itemprice}}</text>     分享赚<text class="text-red">￥{{detail.tkmoney}}</text>
								</view>
							</view>
							<view class="">
								<image class="wh60 block" src="/static/svideo/cart.png" mode=""></image>
							</view>
						</view>
					</view>
				</cover-view>
			</video>
		</page>
	</view>
</template>

<script>
import '@/utils/ican-H5Api.js';
export default {
	data() {
		return {
			detail: {},
			videoArr: [],
			showText: false,
			isLike: false,
			src: '',
			text: '这是一段可复制的文案这是一段可复制的文案这是一段可复制的文案这是一段可复制的文案这是一段可复制的文案这是一段可复制的文案这是一段可复制的文案这是一段可复制的文案这是一段可复制的文案这是一段可复制的文案这是一段可复制的文案',
			danmuList: [
				{
					text: '第 1s 出现的弹幕',
					color: '#ff0000',
					time: 1
				},
				{
					text: '第 3s 出现的弹幕',
					color: '#ff00ff',
					time: 3
				}
			],
			danmuValue: ''
		};
	},
	onReady: function(res) {
		// #ifndef MP-ALIPAY
		this.videoContext = uni.createVideoContext('myVideo');
		// #endif
	},
	onLoad(e) {
		this.id = e.id || 0
		this.getVideoDetail()
	},
	methods: {
		async getVideoDetail() {
			const res = await this.post('/wap/Material/VideoDetails',{itemid: this.id})
			if(res.code == 200){
				this.videoArr = res.data
				this.detail = res.items
			}
		},
		sendDanmu: function() {
			this.videoContext.sendDanmu({
				text: this.danmuValue,
				color: this.getRandomColor()
			});
			this.danmuValue = '';
		},
		videoErrorCallback: function(e) {},
		
		getRandomColor: function() {
			const rgb = [];
			for (let i = 0; i < 3; ++i) {
				let color = Math.floor(Math.random() * 256).toString(16);
				color = color.length == 1 ? '0' + color : color;
				rgb.push(color);
			}
			return '#' + rgb.join('');
		},
		paste(value) {
			uni.setClipboardData({
				data: value,
				success() {
					uni.showToast({
						title: '复制成功'
					});
				}
			});
		},
		like() {
			this.isLike = !this.isLike;
			if(this.isLike) {
				uni.showToast({
					title: '已收藏',
					icon: 'none'
				});
			} else {
				uni.showToast({
					title: '已取消收藏',
					icon: 'none'
				});
			}
		},
		openShowText(){
			this.showText = !this.showText
		}
	}
};
</script>

<style scoped lang="scss">
.bg-black-50 {
	background-color: rgba(0,0,0,0.5);
	// background-color: rgba(255, 255, 255, 0.5);
}
.bg-black-60 {
	background-color: rgba(0,0,0,0.6);
.text-wrap{
		display:block;
		white-space: pre-wrap;
	}
}
</style>
