<template>
	<view :class="{ hide: hide }">
		<view class="qui-grids gutter10" :class="'column' + column">
			<view class="hem">
				<view class="qui-grid" v-for="(item, index) in imgs" :key="index" @tap="ViewImage" :data-url="imgs[index]">
					<view class="img1x1 relative">
						<image style="height: 100%; width: 100%;" class="abs abslt" :src="imgs[index]" mode="aspectFill"></image>
						<view v-if="progress<100" class="abs flex aj-center text-white" style="left: 0; right: 0; bottom: 0;top:0; background-color: rgba(0,0,0,0.6);">
							{{progress}}%
						</view>
						<view class="abs absrt wh40 bg-red flex a-center j-center" @tap.stop="DelImg" :data-index="index"><text class="cuIcon-close fs30"></text></view>
					</view>
				</view>
				<view class="qui-grid" @tap="ChooseImage" v-if="imgs.length < count">
					<view class="img1x1 relative"><text class="cuIcon-cameraadd abs abscc fs50"></text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import Config from '@/utils/config.js';
export default {
	name: 'ImagePicker',
	props: {
		index: {
			type: [String, Number],
			default: 0
		},
		hide: {
			type: Boolean,
			default: false
		},
		count: {
			type: [String, Number],
			default: 4
		},
		column: {
			type: [String, Number],
			default: 4
		}
	},
	data() {
		return {
			progress:0,
			imgs: [],
			file: ''
		};
	},
	methods: {
		ChooseImage() {
			const token = uni.getStorageSync('token');
			// console.log(token)
			let baseUrl = '';
			// #ifndef H5
			baseUrl = Config.http + Config.hostName;
			// #endif
			// #ifdef H5
			if (process.env.NODE_ENV === 'development') {
				baseUrl = '';
			} else {
				baseUrl = Config.http + Config.hostName;
			}
			// #endif
			uni.chooseImage({
				count: 1, //只能给一张张上传
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: res => {
					if (this.imgs.length != 0) {
						this.imgs = this.imgs.concat(res.tempFilePaths);
					} else {
						this.imgs = res.tempFilePaths;
					}
					const uploadTask = uni.uploadFile({
						url: baseUrl + Config.uploadApiUrl,
						// url: 'http://abc.yulus.cn/api/upload/files',
						filePath: this.imgs[this.imgs.length - 1],
						name: 'file',
						'content-type': 'multipart/form-data',
						header: {
							token: token
						},
						success: uploadFileRes => {
							const res = JSON.parse(uploadFileRes.data);
							this.success(res.data.imgUrl);
						},
						fail: res => {
							this.imgs = [];
							uni.showToast({
								icon: 'none',
								title: '图片上传失败！'
							});
							this.progress = 0
						}
					});

					uploadTask.onProgressUpdate(res => {
						this.progress = res.progress
						this.$emit('onProgress', res.progress)
					});
				}
			});
		},
		ViewImage(e) {
			uni.previewImage({
				urls: this.imgs,
				current: e.currentTarget.dataset.url
			});
		},
		DelImg(e) {
			this.imgs.splice(e.currentTarget.dataset.index, 1);
		},
		success(res) {
			this.$emit('success', {
				file: res,
				index: this.index
			});
		}
	}
};
</script>

<style>
.hide {
	opacity: 0;
	width: 0;
	height: 0;
	overflow: hidden;
}
</style>
