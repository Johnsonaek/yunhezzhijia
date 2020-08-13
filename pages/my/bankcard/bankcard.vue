<template>
	<view>
		<page title="绑定提现银行卡">
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="mr20 w180">真实姓名</view>
					<view class="cell-bd"><input v-model="form.card_name" type="text" value="" placeholder="请输入真实姓名" class="qui-input" /></view>
				</view>
				<view class="qui-cell">
					<view class="mr20 w180">手机号码</view>
					<view class="cell-bd"><input v-model="form.tel_no" type="number" value="" placeholder="请输入开户绑定时手机号" class="qui-input" /></view>
				</view>
				<view class="qui-cell">
					<view class="mr20 w180">身份证</view>
					<view class="cell-bd"><input v-model="form.cert_id" type="number" value="" placeholder="请输入身份证号码" class="qui-input" /></view>
				</view>
				<view class="qui-cell">
					<view class="mr20 w180">银行类型</view>
					<view class="cell-bd">
						<picker range-key="bankName" :range="typeAarr" :value="index" @change="pickerType">
							<view v-if="form.bank_name">{{ form.bank_name }}</view>
							<view v-else>{{ cardType }}</view>
						</picker>
					</view>
					<view class="cuIcon-unfold"></view>
				</view>
				<view class="qui-cell">
					<view class="mr20 w180">选择开户行</view>
					<view class="cell-bd" @click="openPopup('popup')"><input placeholder="请选择开户行" disabled type="text" :value="provText + ' ' + areaText" class="qui-input" /></view>
					<view class="cuIcon-unfold"></view>
				</view>
				<view class="qui-cell">
					<view class="mr20 w180">银行卡账号</view>
					<view class="cell-bd"><input v-model="form.card_id" type="number" value="" placeholder="请输入银行卡号" class="qui-input" /></view>
				</view>
			</view>

			<view slot="bottom" class="plr30 ptb30 mtb"><view @click="submit" class="qui-btn round">提交</view></view>
		</page>

		<uni-popup ref="popup" type="center">
			<view class="qui-card panel" style="border-radius: 20rpx; width: 700rpx;">
				<view class="flex plr30 ptb30">
					<scroll-view scroll-y style="height: 500rpx;" class="flex-item">
						<view @click="oneTap(index,item.id)" v-for="(item,index) in categoryCode" :key="index" class="ptb20 bor-1px-b flex space-between">
							<text class="fs28">{{item.title}}</text> <text v-if="oneIndex == index" class="cuIcon-roundcheck text-green"></text>
						</view>
					</scroll-view>
					<view class="w50"></view>
					<scroll-view v-if="level2.length>0" scroll-y style="height: 500rpx;" class="flex-item">
						<view @click="twoTap(index,item.id)" v-for="(item,index) in level2" :key="index" class="ptb20 bor-1px-b flex space-between">
							<text class="fs28">{{item.title}}</text> <text v-if="twoIndex == index" class="cuIcon-roundcheck text-green"></text>
						</view>
					</scroll-view>
				</view>
				<view @click="closePopup('popup')" class="ptb30 tc bor-1px-t">取消</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
export default {
	components: {
		uniPopup
	},
	data() {
		return {
			oneIndex: -1,
			twoIndex: -1,
			index: 0,
			cardType: '请选择银行卡类型',
			provText: '',
			areaText: '',
			typeAarr: [],
			info: {},
			categoryCode: [],
			level2: [],
			form: {
				card_id: '',
				card_name: '',
				cert_id: '',
				tel_no: '',
				bank_code: '',
				bank_name: '',
				prov_code: '',
				area_code: ''
			}
		};
	},
	onLoad() {
		this.getType();
		this.getBankInfo();
		this.getCategoryCode();
	},
	methods: {
		oneTap(index, id) {
			console.log(id)
			this.oneIndex = index
			this.level2 = this.categoryCode[index].son
			this.twoIndex = -1;
			this.form.prov_code = id
			this.provText = this.categoryCode[index].title
		},
		twoTap(index, id) {
			console.log(id)
			this.twoIndex = index
			this.form.area_code = id
			this.areaText = this.level2[index].title
			this.$refs.popup.close()
		},
		pickerType(e) {
			this.index = e.target.value;
			this.form.bank_code = this.typeAarr[this.index].bankCode;
			this.form.bank_name = this.typeAarr[this.index].bankName;
		},
		async getBankInfo() {
			const res = await this.post('/wap/UserBank/bankInfo');
			this.form.card_id = res.data.bank.card_id;
			this.form.card_name = res.data.bank.card_name;
			this.form.cert_id = res.data.bank.cert_id;
			this.form.tel_no = res.data.bank.tel_no;
			this.form.bank_code = res.data.bank.bank_code;
			this.form.bank_name = res.data.bank.bank_name;
			this.form.prov_code = res.data.bank.prov_code;
			this.form.area_code = res.data.bank.area_code;
		},
		submit() {
			this.addBankCard();
		},
		async addBankCard() {
			const res = await this.post('/wap/UserBank/bankEdit', this.form);
			this.success(res, '编辑成功');
		},
		async getType() {
			const res = await this.post('/wap/UserBank/CategoryArea');
			console.log(res);
			this.typeAarr = res.data.list;
		},
		async getCategoryCode() {
			const res = await this.post('/wap/UserBank/CategoryCode');
			this.categoryCode = res.data.list
		}
	}
};
</script>

<style></style>
