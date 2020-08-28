<template>
	<view>
		<page title="入驻申请">
			<view slot="right">
			  <text class="text-red" v-if="userInfo.is_line_shop == 1">待审核</text>
			  <text class="text-green" v-if="userInfo.is_line_shop == 2">审核通过</text>
			  <text class="text-red" v-if="userInfo.is_line_shop == 3">审核不通过</text>
			</view>
			<view class="qui-cells-title">
				<text>企业信息</text>
				<text>（按照证书上的内容逐字填写）</text>
			</view>
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="w180 mr10">公司名称</view>
					<view class="cell-bd"><input v-model="form.company" type="text" value="" placeholder="填写公司名称" /></view>
				</view>
				<view class="qui-cell">
					<view class="w180 mr10">社会信用代码</view>
					<view class="cell-bd"><input v-model="form.code" type="text" value="" placeholder="输入统一社会信用代码" /></view>
				</view>
				<view class="qui-cell flex-start">
					<view class="w180 mr10">营业执照</view>
					<view class="cell-bd">
						<image-picker ref="imgPicker" :count="1" column="3" @success="upSuccess"></image-picker>
						<view class="mt20 text-muted">示例</view>
					</view>
				</view>
				<view class="qui-cell">
					<view class="w180 mr10">店铺名称</view>
					<view class="cell-bd"><input v-model="form.shopName" type="text" value="" placeholder="填写店铺名称" /></view>
				</view>
				<view class="qui-cell flex-start">
					<view class="w180 mr10">店铺LOGO</view>
					<view class="cell-bd">
						<image-picker ref="imgPicker2" :count="1" column="3" @success="upSuccess2"></image-picker>
						<view class="mt20 text-muted">示例</view>
					</view>
				</view>
			</view>

			<view class="qui-cells-title"><text>法定代表人信息</text></view>
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="w180 mr10">法人代表姓名</view>
					<view class="cell-bd"><input v-model="form.name" type="text" value="" placeholder="输入真实姓名" /></view>
				</view>
				<view class="qui-cell">
					<view class="w180 mr10">身份证号码</view>
					<view class="cell-bd"><input v-model="form.identityNumber" type="text" value="" placeholder="输入身份证号码" /></view>
				</view>
				<view class="qui-cell">
					<view class="w180 mr10">身份证类型：</view>
					<view class="cell-bd"><input type="text" disabled value="二代身份证" placeholder="输入身份证类型" /></view>
				</view>
				<view class="qui-cell flex-start">
					<view class="w180 mr10">证件正面</view>
					<view class="cell-bd">
						<image-picker ref="imgPicker3" :count="1" column="3" @success="upSuccess3"></image-picker>
						<view class="mt20 text-muted">示例</view>
					</view>
				</view>
				<view class="qui-cell flex-start">
					<view class="w180 mr10">证件背面</view>
					<view class="cell-bd">
						<image-picker ref="imgPicker4" :count="1" column="3" @success="upSuccess4"></image-picker>
						<view class="mt20 text-muted">示例</view>
					</view>
				</view>
				<view class="qui-cell">
					<view class="w180 mr10">联系方式</view>
					<view class="cell-bd"><input v-model="form.mobile" type="text" value="" placeholder="请输入手机号码或者电话" /></view>
				</view>
				<view class="qui-cell" @tap="openAddres">
					<view class="w180 mr30"><text class="tit">地区</text></view>
					<view class="cell-bd flex">{{ pickerText }}</view>
					<view class="arrow-r"></view>
				</view>
				<view class="qui-cell">
					<view class="w180 mr10">联系地址</view>
					<view class="cell-bd"><input type="text" value="" placeholder="联系地址" /></view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd"><input v-model="form.street" type="text" value="" placeholder="输入详细商家地址" /></view>
				</view>
			</view>
			<view class="qui-cells mt20">
				<label class="qui-cell">
					<view class="cell-bd">是否愿意作为快递代收点</view>
					<view class="">
						<radio checked="form.isDeliverySite" value="1" />
					</view>
				</label>
			</view>

			<view class="plr50 mt50 pb30"><view  @click="submit"  class="qui-btn round">下一步</view></view>
		</page>
		<simple-address :showType="2" ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor="#007AFF"></simple-address>
	</view>
</template>

<script>
import ImagePicker from '@/components/image-picker.vue';
import simpleAddress from '@/components/simple-address/simple-address.nvue';
import { mapState, mapMutations } from 'vuex';
export default {
	components: {
		ImagePicker
	},
	data() {
		return {
			form: {
				category_id: '',
				company: '',
				code: '',
				name: '',
				identityNumber: '',
				type: 1, // 证件类型：1.身份证
				charter: '',// 执照
				identityUp: '',//身份证正
				identityDown: '',// 身份证反
				regionId: 440103,
				townId: '111',
				street: '',
				latitude: '23.130919',
				longitude: '113.240459',
				shopName: '',
				shopPath: '', // shopPath
				mobile: '',
				categoryId: 1, // 店铺所属分类
				isDeliverySite: 1 ,// 是否为代收点 1不是代收点 2代收点
			},
			cityPickerValueDefault: [0, 0, 0],
			pickerText: '请选择地区',
		};
	},
	onLoad() {
	   this.getInfo()
	   console.log(this.Location)
	},
	computed: {
		...mapState({
			Location: 'Location',
			userInfo: state => state.user.userInfo
		})
	},
	methods: {
		submit() {
			// uni.navigateTo({
			// 	url: '/pages/my/storeSettlein/status/status'
			// })
			// return;
			this.apply()
		},
		async getInfo() {
			const res = await this.post('/wap/Line/applyInfo')
			this.form.charter = res.data.charter
			this.$refs.imgPicker.imgs.push('/static/images/default-tx.png')
			console.log(this.$refs.imgPicker.imgs[0])
		},
		async apply() {
			const res = await this.post('/wap/Line/Submit', this.form)
			
			if(res.code == 200) {
				
			}
		},
		// 营业执照
		upSuccess(res) {
			console.log(res)
			this.form.charter = res.file
		},
		// 店铺图片logo
		upSuccess2(res) {
			console.log(res)
			this.form.shopPath = res.file
		},
		//身份证正
		upSuccess3(res) {
			console.log(res)
			this.form.identityUp = res.file
		},
		// 身份证反
		upSuccess4(res) {
			console.log(res)
			this.form.identityDown = res.file
		},
		// 弹出选择地区
		openAddres() {
			this.$refs.simpleAddress.open();
			
		},
		// 选择完得到省市区的 id
		onConfirm(e) {
			console.log(e);
			this.pickerText = e.label;
			this.form.province = e.provinceCode;
			this.form.city = e.cityCode;
			this.form.district = e.areaCode;
			this.form.street = e.streetCode;
			// console.log(this.form)
		}
	}
};
</script>

<style></style>
