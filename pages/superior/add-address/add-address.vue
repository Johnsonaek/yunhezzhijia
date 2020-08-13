<template>
	<view>
		<page :title="type=='add'?'添加收货地址':'编辑地址'">
			<view class="qui-cells border-none mt20">
				<view class="qui-cell">
					<view class="w180">姓名</view>
					<view class="cell-bd"><input v-model="form.name" placeholder="请输入姓名" type="text" value="" class="qui-input" /></view>
				</view>
				<view class="qui-cell">
					<view class="w180">手机</view>
					<view class="cell-bd"><input v-model="form.mobile" placeholder="请输入手机号码" type="number" maxlength="11" value="" class="qui-input" /></view>
				</view>
				<view class="qui-cell" @tap="openAddres">
					<view class="text-default fw600 w180">地区</view>
					<view class="cell-bd flex text-muted" v-if="pickerText == '请选择地区'">
						{{pickerText}}
					</view>
					<view v-else class="cell-bd flex">
						{{pickerText}}
					</view>
					<view class="arrow-r"></view>
				</view>
				<view class="qui-cell">
					<view class="w180">详细地址</view>
					<view class="cell-bd"><input v-model="form.details" placeholder="请输入详细地址" type="text" value="" class="qui-input" /></view>
				</view>
				<!-- <view class="qui-cell">
					<view class="cell-bd">
						<label  @click="setDefault"  class="radio flex a-center">
							<radio :checked="isDefault" color="#F82840" style="transform: scale(0.7);" value="" />
							<text class="fs24 ml10">设为默认收货地址</text>
						</label>
					</view>
				</view> -->
			</view>
			<view class="h100"></view>
			<view class="plr30 ptb30">
				<view @click="submit" class="qui-btn">保存</view>
				<view v-if="type == 'edit'" style="background-color: #fff !important;" @click="delAddress" class="qui-btn outline bg-white mt20">删除</view>
			</view>
		</page>
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor='#007AFF'></simple-address>
	</view>
</template>

<script>
	import simpleAddress from "@/components/simple-address/simple-address.nvue"
import pickRegions from '@/components/pick-regions/pick-regions.vue';
export default {
	components: {
		pickRegions,
		simpleAddress
	},
	data() {
		return {
			cityPickerValueDefault: [0, 0, 0],
			pickerText: '请选择地区',
			region: [],
			index: 0,
			type: 'add',
			id: 0,
			isDefault: false,
			form: {
				mobile: '',
				name: '',
				status: 0,
				province_id: '',
				area_id: '',
				city_id: '',
				details: ''
			}
		};
	},
	onLoad(e) {
		this.isLogin(true)
		this.id = e.id;
		if(e.type){
			this.type = e.type;
		}
		
		if (this.type == 'edit') {
			this.getAddressInfo();
		}
	},
	computed: {
		
	},
	methods: {
		openAddres() {
			this.$refs.simpleAddress.open();
		},
		onConfirm(e) {
			this.pickerText = e.label
			
			this.form.province_id = e.provinceCode
			this.form.city_id = e.cityCode
			// e.provinceCode
			// e.cityCode
			console.log(e.areaCode)
			const vReg = /^1[1-2]/
			if(vReg.test(e.areaCode)) {
				let strArr = e.areaCode.split('')
				strArr.splice(3,1,'2')
				let str = strArr.join(''); 
				this.form.area_id = str
			} else {
				this.form.area_id = e.areaCode
			}
		},
		setDefault() {
			this.form.status = !this.form.status;
			
			if(this.form.status) {
				this.form.status = 1
				this.isDefault = true
			} else {
				this.form.status = 0
				this.isDefault = false
			}
	
		},
		async getAddressInfo() {
			const res = await this.get('/api/address/show', { id: this.id });
			this.form.mobile = res.data.mobile;
			this.form.name = res.data.name;
			this.form.status = res.data.status;
			this.form.province_id = res.data.province_id;
			this.form.area_id = res.data.area_id;
			this.form.city_id = res.data.city_id;
			this.form.details = res.data.details;
			this.form.id = res.data.id;
			
			this.defaultRegionCode = res.data.area_id.toString()
		    this.pickerText = res.data.region
			
		},
		submit() {
			console.log(this.form)

			let vRules = [
				
				{name: 'name', type: 'required', errmsg: '请输入姓名'},
				{name: 'mobile', required: true, type: 'phone', errmsg: '请输入正确的手机号'},
				{name: 'details', type: 'required', errmsg: '请输入详细地址'}
			]
			
			let vRes = this.$validate.validate(this.form, vRules)
			
			
			if (!vRes.isOk) {
				uni.showToast({
					icon: 'none',
					title: vRes.errmsg
				})
				return false
			}
			
			
			this.editOradd();
		},
		async editOradd() {
			let me = this;
			let text = '';
			text = me.type == 'edit' ? '编辑成功' : '添加成功';
			console.log(text);
			const res = await this.post('/api/address/store', this.form);

			this.success(res, text, function() {
				setTimeout(()=> {
					uni.navigateBack({
						delta: 1
					});
				},600)
			});
		},
		async delAddress() {
			const res = await this._delete('/api/address/del', { 'ids': [this.form.id] });
			this.success(res, '删除成功~', function() {
				setTimeout(() => {
					uni.navigateBack({
						delta: 1
					});
				}, 800);
			});
		}
	}
};
</script>

<style></style>
