<template>
	<view>
		<!-- QrSrc  占位用 -->
		<view v-show="isShow" class="rebate z-index9">
			<wm-poster
			    CanvasID = "PosterCanvas"
				ref="poster"
				imgSrc="/static/images/default-tx.png"
				QrSrc="/static/images/default-tx.png" 
				qrBase64="/static/images/default-tx.png"
				Title="商品名称"
				PriceTxt="200.00"
				Referrer="deking推荐给你"
				OriginalTxt=""
			></wm-poster>
			
			<view class="plr100 ptb30">
				<view class="qui-btn round">
					保存
				</view>
			</view>
		</view>
		<page v-show="!isShow" title="一键发圈活动">
			<view class="mtb30 bg-white ptb20"><text class="bg-red plr30 ptb10">活动描述</text></view>
			<view class="qui-card">
				<view class="card-bd">
					<textarea style="font-size: 28rpx; height: 200rpx;" value="" placeholder="请输入活动描述，100字内" />
					<view class="tr text-muted">0/100</view>
				</view>
			</view>
			<view class="plr30 ptb30 text-muted">活动图片（活动详细介绍图片，最多可上传6张）</view>
			<view class="plr30 pb30">
				<image-picker ref="imgPicker" column="3" :count="6" @success="upSuccess"></image-picker>
			</view>

			<view class="plr50 ptb30">
				<view class="h100"></view>
				<view @click="createPoster" class="qui-btn round">生成海报</view>
				<!-- <view @click="goto('/pages/my/yh-store/share-code/share-code')" class="qui-btn round">生成海报</view> -->
				<!-- <view class="flex a-center fs24 mt30">
					<label class="radio flex a-center">
					<text>创建活动即代表用户已同意</text>
					</label> <text class="text-blue">《小分店活动发布协议》</text>
				</view> -->
			</view>
		</page>
	</view>
</template>

<script>
import ImagePicker from '@/components/image-picker.vue';
import wmPoster from '@/components/wm-poster/wm-poster3.vue';
export default {
	components: {
		ImagePicker,
		wmPoster
	},
	data() {
		return {
			isShow: false
		};
	},
	methods: {
		upSuccess(res) {
			
		},
		createPoster() {
			uni.showLoading({
				title:'生成中'
			})
			this.$refs.poster.OnCanvas();
			setTimeout(()=> {
				console.log('生成海报')
				
				this.isShow = true;
				uni.hideLoading()
			},600)
			
		}
	}
};
</script>

<style></style>
