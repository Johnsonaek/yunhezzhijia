<template>
	<view>
		<page title="银卡列表"  @scrolltolower="loadMore('qlist')">
			<view @click="goto('/pages/my/bankcard/bankcard')" slot="right" class="">
				添加银行卡
			</view>
			<qui-list getUrl="/wap/UserBank/List" ref="qlist" v-slot="data">
				<view class="qui-cells">
					<view class="qui-cell" v-for="(item, index) in data.list" :key="index">
						<label class="radio flex a-center mr20">
							<radio :checked="item.is_default" style="transform: scale(0.7);" value="" />
							<text></text>
						</label>
						<view class="cell-bd">
							<text>{{ item.bank_name }}</text>
							<text class="ml30">{{ item.bank_account }}</text>
						</view>
					</view>
				</view>
			</qui-list>
		</page>
	</view>
</template>

<script>
export default {
	data() {
		return {
		};
	},
	methods: {
		async getList() {
			const res = await this.post('/wap/UserBank/List');
			this.list = res.data.list;
		}
	}
};
</script>

<style></style>
