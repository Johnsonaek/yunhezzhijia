<template>
	<view>
		<page title="小店设置" bgClass="bg-white">
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="cell-bd">小店头像</view>
					<view @click="openChoose" class="mr20"><image class="radius50 wh70" :src="form.path?form.path:avatar" mode=""></image></view>
					<view class="arrow-r"></view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">店铺名称</view>
					<view class="mr20"><input v-model="form.name" class="tr" type="text" value="" placeholder="店铺名称" /></view>
					<view class="arrow-r"></view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">
						<view class="mb30">小店公告</view>
						<view class="border radius16 plr30 ptb30" style="border: 1px solid #eee;">
							<textarea v-model="form.announcement" style="height: 200rpx;font-size: 28rpx;" value="" placeholder="请输入店铺公告描述（最多100字）" />
						</view>
					</view>
				</view>
			</view>
			<view class="h100"></view>
			<view class="plr50 ptb30"><view @click="submit" class="qui-btn round">保存</view></view>
		</page>
		<image-picker :hide="true" ref="imgPicker" :count="1" @success="upSuccess"></image-picker>
	</view>
</template>

<script>
import ImagePicker from '@/components/image-picker.vue';
export default {
	components: {
		ImagePicker
	},
	data() {
		return {
			
			avatar: '/static/images/default-tx.png',
			form: {
				path: '',
				name: '',
				announcement: ''
			}
		};
	},
	onLoad() {
		this.getxdInfo()
	},
	methods: {
		submit() {
			this.infoUpdata()
		},
		getxdInfo() {
			this.post('/wap/OwnSmallShop/shopInfo').then(res => {
				this.form.path = res.data.shop.path
				this.form.name = res.data.shop.name 
				this.form.announcement = res.data.shop.announcement 
			})
		},
		openChoose(){
			this.$refs.imgPicker.ChooseImage()
		},
		upSuccess(res) {
			// 选择完成图片回调返回 res.file 就是上传成功后端返回来的图片路径
			this.form.image = res.file;
			this.updataAvatar(res.file)
			this.avatar = res.file
		},
		async updataAvatar(path) {
			const res = await this.post('/wap/OwnSmallShop/photoUpdate', { path: path });
			this.apiSuccess(res, '头像已更新', ()=> {
				this.getxdInfo()
			})
		},
		async updata() {
			const res = await this.post('/wap/Line/Update', this.form);
		},
		async infoUpdata() {
			const res = await this.post('/wap/OwnSmallShop/infoUpdate',this.form)
			this.success(res, '更新成功',()=>{
				this.getxdInfo()
			})
		}
	}
};
</script>

<style></style>
