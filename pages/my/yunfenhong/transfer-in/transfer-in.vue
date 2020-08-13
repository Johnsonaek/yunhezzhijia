<template>
	<view>
		<page title="转入红利宝" bgClass="bg-white">
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="cell-bd">
						我的佣金
						<text class="text-red ml10 fs34">{{ info.user_amount }}</text>
					</view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">
						<view class="flex a-center">
							<view class="mr20">转入金额</view>
							<view class="flex-item"><input v-model="form.amount" placeholder="请输入金额" type="number" value="" class="qui-input fs40" /></view>
						</view>
					</view>
				</view>
				<view v-if="info" class="qui-cell">
					<view class="cell-bd">
						兑换红利宝金额
						<text class="text-red ml10 fs34">{{  rateAmount }}</text>
					</view>
				</view>
			</view>

			<view @click="submit" class="flex aj-center mt50"><view class="qui-btn round inline w400">转入</view></view>
		</page>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				amount: null
			},
			info: {}
		};
	},
	onLoad() {
		this.getHomeInfo();
	},
	computed:{
		rateAmount() {
			return this.info.today_bonus_rate * this.form.amount || 0
		}
	},
	methods: {
		submit() {
			if(!this.form.amount) {
				uni.showToast({
					title: '请输入金额',
					icon: 'none'
				})
				return
			}
			let me = this;
			uni.showModal({
			    title: '提示',
			    content: '确定要转出吗',
			    success: function (res) {
			        if (res.confirm) {
			            me.post('/wap/Bonus/transferTo', me.form).then(res => {
			            	me.success(res, '转入成功', () => {
			            		me.form.amount = null;
			            		me.getHomeInfo();
			            	});
			            });
			        } else if (res.cancel) {
			            console.log('用户点击取消');
			        }
			    }
			});
			
		},
		getHomeInfo(type) {
			this.post('/wap/Bonus/index').then(res => {
				this.info = res.data;
			});
		}
	}
};
</script>

<style></style>
