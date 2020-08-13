<template>
	<view>
		<page title="创建分享">
			<view class="bg-blue light plr30 ptb10">分享成功可赚￥3.65</view>
			
			<view class="qui-card panel mt24">
				<view class="card-hd">
					<view class="">
						<text>分享图片</text> <text class="text-muted ml20">已选择1张图片</text>
					</view>
					<view class="">
						<text class="text-blue">保存图片</text>
						<text class="ml40">全选</text>
					</view>
				</view>
				<view class="card-bd pt0">
					<view class="flex flex-scroll">
						<view class="mr20 w150 relative radius12" v-for="(item,index) in 6" :key="index">
							<view v-if="index == 0" class="plr10 ptb5 fs20 text-white abs" style="width:100%; left: 0; bottom: 0; background-color: rgba(0,0,0,0.6);">
								二维码推广图
							</view>
							<label style="transform: scale(0.6);" color="#3699FF" class="radio abs absrt">
								<radio value="" />
							</label>
							<image class="wh150 block" src="/static/images/default-tx.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		    <view class="qui-card panel mt24">
		    	<view class="card-hd">
		    		<text>分享文案</text> <text class="qui-btn inline outline h50 round fs24">复制口令</text>
		    	</view>
		    	<view class="card-bd pt0" style="min-height: 600rpx;">
		    		<view class="bg-gray-muted radius12 plr24 ptb20">
						<rich-text :nodes="html"></rich-text>
					</view>
		    	</view>
		    </view>
			<view slot="bottom" class="bg-white bor-1px-t pt40">
				<view class="tc">
					分享至
				</view>
				<view class="flex a-center ptb30">

					<view class="flex-item flex aj-center flex-column">
						<image class="wh60 block" src="/static/svideo/share_wx.png" mode=""></image>
						<view class="">
							微信好友
						</view>
					</view>
					<view class="flex-item flex aj-center flex-column">
						<image class="wh60 block" src="/static/svideo/share_pyq.png" mode=""></image>
						<view class="">
							微信好友
						</view>
					</view>
					<view class="flex-item flex aj-center flex-column">
						<image class="wh60 block" src="/static/svideo/share_text.png" mode=""></image>
						<view class="">
							微信好友
						</view>
					</view>
				</view>
			</view>
		</page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				html: '<p>【原价】￥29.80</p> <p>fu致这段话￥UlKp1tF41Qh￥打開氵匋宝即可查看</p>'
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
