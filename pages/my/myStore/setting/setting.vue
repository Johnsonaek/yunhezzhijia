<template>
	<view>
		<page title="小店设置" bgClass="bg-white">
			<view class="qui-cells">
				<view class="qui-cell" @click="openUpload">
					<view class="cell-bd">小店头像</view>
					<view class="mr20"><image class="radius50 wh70" :src="form.path" mode=""></image></view>
					<view class="arrow-r"></view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">店铺名称</view>
					<view class="mr20"><input class="tr" v-model="form.name" type="text" value="" placeholder="陈欢欢商城" /></view>
					<view class="arrow-r"></view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">联系方式</view>
					<view class="mr20"><input class="tr" v-model="form.mobile" type="number" value="" placeholder="联系电话" /></view>
					<view class="arrow-r"></view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">是否愿意作为快递代收点</view>
					<view class="mr20"><switch :checked="isdf" @change="switchChange" color="#e54d42" /></view>
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
	components: { ImagePicker },
	data() {
		return {
			form: {
				path: '',
				name: '',
				mobile: '',
				isDeliverySite: 1
			}
		};
	},
	computed: {
		isdf() {
			return this.form.isDeliverySite == 2 ? true : false;
		}
	},
	onLoad() {
		this.getInfo();
	},
	methods: {
		switchChange(e) {
			console.log(e.target.value);
			this.form.isDeliverySite = e.target.value ? 2 : 1;
		},
		submit() {
			this.updata();
		},
		async getInfo() {
			const res = await this.post('/wap/Line/applyInfo');
			this.form.name = res.data.shop_name;
			this.form.mobile = res.data.mobile;
			this.form.path = res.data.logo;
			this.form.isDeliverySite = res.data.is_delivery_site;

			// this.info = res.data
		},
		async updata() {
			const res = await this.post('/wap/Line/Update', this.form);
			this.success(res, '修改成功', () => {
				this.getInfo();
			});
		},
		openUpload() {
			// 这样就打开了选择上传图片的窗口
			this.$refs.imgPicker.ChooseImage();
		},
		upSuccess(res) {
			// 选择完成图片回调返回 res.file 就是上传成功后端返回来的图片路径
			this.form.path = res.file;
		}
	}
};
</script>

<style></style>
