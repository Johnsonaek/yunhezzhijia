<template>
	<view>
		<page :title="title">
			<view v-if="type == 'edit'" slot="right" class="text-red" @click="delAddressstore">删除</view>
			<view class="content">
				<view class="qui-cell">
					<view class="w180 mr30"><text class="tit">姓名</text></view>
					<view class="cell-bd"><input class="qui-input" type="text" v-model="form.consignee" placeholder="收货人姓名" placeholder-class="placeholder" /></view>
				</view>
				<view class="qui-cell">
					<view class="w180 mr30"><text class="tit">手机</text></view>
					<view class="cell-bd"><input class="qui-input" type="number" v-model="form.mobile" placeholder="收货人手机号码" placeholder-class="placeholder" /></view>
				</view>
				<view class="qui-cell" @tap="openAddres">
					<view class="w180 mr30"><text class="tit">地区</text></view>
					<view class="cell-bd flex">{{ pickerText }}</view>
					<view class="arrow-r"></view>
				</view>
				<view class="qui-cell">
					<view class="w180 mr30"><text class="tit">详情地址</text></view>
					<view class="cell-bd"><input class="input" type="text" v-model="form.address" placeholder="街道门牌、楼层房间号等信息" placeholder-class="placeholder" /></view>
				</view>
				<view class="qui-cell">
					<label @click="setDefault" class="radio flex a-center">
						<radio :checked="form.is_default" color="#F43530" style="transform: scale(0.7);" />
						<text class="ml20">设为默认地址</text>
					</label>
				</view>
			</view>

			<view slot="bottom" class="plr50 ptb30"><view class="qui-btn" @click="submit">提交</view></view>
		</page>

		<simple-address :showType="2" ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor="#007AFF"></simple-address>
	</view>
</template>

<script>
// js部分

import { mapState, mapMutations, mapActions } from 'vuex';
import simpleAddress from '@/components/simple-address/simple-address.nvue';

export default {
	components: {
		simpleAddress
	},
	data() {
		return {
			isDf: false,
			form: {
				consignee: '',
				mobile: '',
				province: '',
				city: '',
				district: '',
				street: '',
				address: '',
				is_default: false
			},
			popup:false,
			title: '添加收货地址',
			cityPickerValueDefault: [0, 0, 0],
			pickerText: '请选择地区',
			type: '',
			id: ''
		};
	},
	onLoad(e) {
		this.form.id = e.id;
		this.id = e.id;
		this.type = e.type;
		if (e.type === 'edit') {
			this.title = '编辑收货地址';
			this.getAddresses();
		}
	},
	methods: {
		...mapMutations(['delPath']),
		...mapActions(['updatePathList']),
		setDefault() {
			this.form.is_default = !this.form.is_default;
		},
		async getAddresses() {
			if (this.type === 'edit') {
				const res = await this.post('/wap/UserAddress/addressInfo', {
					id: this.id
				});
				const addressInfo = res.data.address_info;
				this.form.consignee = addressInfo.consignee;
				this.form.address = addressInfo.address;
				this.form.mobile = addressInfo.mobile;
				this.form.is_default = addressInfo.is_default;
				
				
				this.form.province = addressInfo.province; 
				this.form.city = addressInfo.city;
				this.form.district = addressInfo.district;
				this.form.street = addressInfo.street;
				
				console.log(addressInfo.province_name)
				this.pickerText = addressInfo.province_name+'-'+addressInfo.city_name+'-'+addressInfo.city_name+'-'+addressInfo.street_name
			}
		},
		submit() {
			this.AddorEdit();
		},
		async AddorEdit() {
			let me = this;
			const res = await this.post('/wap/UserAddress/addAddress', this.form);
			if (res.code == 200) {
				me.updatePathList();
				uni.showToast({
					title: me.type == 'edit' ? '编辑成功' : '新增成功'
				});
				setTimeout(() => {
					uni.navigateBack({
						delta: 1
					});
				}, 600);
			}
		},
		delAddressstore(index) {
			let me = this;
			uni.showModal({
				content: '确定要删除吗？',
				success: res => {
					if (res.confirm) {
						this.post('/wap/UserAddress/addressDel', { id: this.form.id }).then(res => {
							if (res.code == 200) {
								// 更新地址列表
								me.updatePathList();
								uni.showToast({
									title: '删除成功'
								});
								setTimeout(() => {
									uni.navigateBack({
										delta: 1
									});
								}, 600);
							}
						});
					}
				}
			});
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

<style lang="scss">
page {
	padding-top: 16upx;
}

.row {
	display: flex;
	align-items: center;
	position: relative;
	padding: 0 30upx;
	height: 110upx;
	background: #fff;

	.tit {
		flex-shrink: 0;
		width: 120upx;
		font-size: 30upx;
	}
	.input {
		flex: 1;
		font-size: 30upx;
	}
	.icon-shouhuodizhi {
		font-size: 36upx;
	}
}
.default-row {
	margin-top: 16upx;
	.tit {
		flex: 1;
	}
	switch {
		transform: translateX(16upx) scale(0.9);
	}
}
.add-btn {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 690upx;
	height: 80upx;
	margin: 60upx auto;
	// font-size: $font-lg;
	color: #fff;
	// background-color: $base-color;
	border-radius: 10upx;
	box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
}
</style>
