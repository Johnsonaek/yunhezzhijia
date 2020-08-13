<template>
	<uni-popup ref="popup" type="bottom">
		<view class="bg-white" style="border-radius: 26rpx 26rpx 0 0;">
			<view v-if="showTitle" class="ptb30 tc bor-1px-b text-gray">分享到</view>
			<view class="ptb30">
				<view class="qui-grids column3 gutter20-tb">
					<view class="qui-grid" v-for="(item, index) in shareList" :key="index">
						<view @click="onShare(item)">
							<image class="block wh90" :src="item.icon" mode="widthFix"></image>
							<view class="fs24 mt10">{{ item.text }}</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="showCancel" @click="close" class="ptb30 tc bor-1px-t">取消</view>
		</view>
	</uni-popup>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
export default {
	name: 'moreShare',
	components: { uniPopup },
	props: {
		showTitle: {
			type: Boolean,
			default: false
		},
		showCancel: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			shareList: [
				{
					icon: '/static/share/icon_weixin.png',
					text: '微信好友',
					provider: 'weixin',
					scene: 'WXSceneSession',
					type: 0
				},
				{
					icon: '/static/share/icon_pengyouquan.png',
					text: '微信朋友圈',
					provider: 'weixin',
					scene: 'WXSenceTimeline',
					type: 0
				},
				{
					icon: '/static/share/icon_saveimg.png',
					text: '保存海报',
					provider: 'savepic'
				}
			],
			shareSummary: '',
			shareUrl: '',
			shareTitle: '',
			shareImg: '',
			appId: '', // 默认不传type的时候，必须传appId和appPath才会显示小程序图标
			appPath: 'pages/home/home',
			appWebUrl: 'https://kemean.com/'
		};
	},
	created() {
		// uni.getProvider({
		//     service: 'share',
		//     success: function (res) {
		//         console.log(res.provider)
		//         if (~res.provider.indexOf('weixin')) {
		//         }
		//     }
		// });
	},
	methods: {
		onShare(item) {
		
			let provider = item.provider;
			if (provider == 'savepic') {
				// 生成并保存海报
				this.savePoster()
				console.log('生成海报')
			} else if(provider == 'weixin') {
				this.share(item);
			}
		},
		savePoster() {
			console.log('ddddddddd')
			this.$emit('save')
		},
		share(options) {
			// console.log(options)
			
			uni.share({
			    provider: options.provider,
			    scene: options.scene,
			    type: options.type,
			    href: "http://uniapp.dcloud.io/",
			    title: this.shareTitle,
			    summary: this.shareSummary,
			    imageUrl: this.shareImg,
			    success: function (res) {
			        console.log("success:" + JSON.stringify(res));
			    },
			    fail: function (err) {
			        console.log("fail:" + JSON.stringify(err));
			    }
			});
			
			
			
		},
		onSave() {},
		open(opt) {
			
			console.log(opt)
			this.$refs['popup'].open();
			this.shareUrl = opt.shareUrl || '';
			this.shareTitle = opt.shareTitle|| '';
			this.shareSummary = opt.shareSummary|| '';
			this.shareImg = opt.shareImg|| '';
			this.appId = opt.appId|| '';
			this.appPath = opt.appPath|| '';
		},
		close() {
			this.$refs['popup'].close();
		}
	}
};
</script>

<style></style>
