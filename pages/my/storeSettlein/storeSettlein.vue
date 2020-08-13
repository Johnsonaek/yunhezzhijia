<template>
	<view class="">
		<page title="门店入驻">
			<q-image :lazyLoad="false" :imgwh="[702, 262]" :isRatio="true" src="/static/superior/superior1.png"></q-image>
			<view class="plr30 ptb30 fs26" style="word-break: break-all;line-height: 1.8;">{{ info.description }}</view>
			<view class="flex h100 bg-white" slot="bottom">
				<view class="flex-item flex a-center">
					<label class="radio flex  a-center pl30" @click="openPopup('popup')">
						<radio color="#39B54A" style="transform: scale(0.7);" value="" />
						<text class="text-blue">同意协议</text>
					</label>
				</view>
				<navigator url="/pages/my/storeSettlein/apply/apply" class="bg-red w200 flex aj-center">立即入驻</navigator>
			</view>
		</page>
		<uni-popup ref="popup" type="bottom">
			<scroll-view :scroll-y="true" class="bg-white" style="height: 800rpx;">
				<view class="qui-card">

					<view v-if="xy" class="card-bd">
						<rich-text :nodes="xy.description"></rich-text>
					</view>
				</view>
			</scroll-view>
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
			info: {},
			xy: {}
		};
	},
	onLoad() {
		this.getInfo();
	},
	methods: {
		getInfo() {
			this.post('/wap/Bases/Setting').then(res => {
				this.info = res.data.list.filter(v => {
					return v.id == 45;
				})[0];
				this.xy = res.data.list.filter(v => {
					return v.id == 64;
				})[0];
				console.log(this.info);
			});
		}
	}
};
</script>

<style></style>
