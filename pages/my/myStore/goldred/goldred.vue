<template>
	<view>
		<page title="投放红包金" bgClass="bg-white">
			<view @click="goto('/pages/my/myStore/rules/rules')" class="" slot="right">投放说明</view>
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="cell-bd">
					    <view class="flex a-center bor-1px-b">
							<text>投放红包金额</text>
							<view class="ptb20 flex-item ml20"> 
								<input v-model="form.hongbai_amount" placeholder="请输入投放红包金额" type="number" value="" class="qui-input" />
							</view>
						</view>
						<view class="flex a-center bor-1px-b">
							<text>投放红包数量</text>
							<view class="ptb20 flex-item ml20">
								<input v-model="form.num" placeholder="请输入投放红包金额" type="number" value="" class="qui-input" />
							</view>
						</view>
						<view class="flex a-center bor-1px-b">
							<text>投放时长</text>
							<view class="ptb20 flex-item ml20">
								<input v-model="form.time_length" placeholder="请输入投放时间(最长24小时)" type="number" value="" class="qui-input" />
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="item"><text :class="[form.time_length===2?'action goup':'goup']" @click="goup(2)">2小时</text></view>
				<view class="item"><text :class="[form.time_length===6?'action goup':'goup']" @click="goup(6)">6小时</text></view>
				<view class="item"><text :class="[form.time_length===12?'action goup':'goup']" @click="goup(12)">12小时</text></view>
				<view class="item"><text :class="[form.time_length===16?'action goup':'goup']" @click="goup(16)">16小时</text></view>
				<view class="item"><text :class="[form.time_length===20?'action goup':'goup']" @click="goup(20)">20小时</text></view>
				<view class="item"><text :class="[form.time_length===24?'action goup':'goup']" @click="goup(24)">24小时</text></view>
			</view>
			
			<view class="flex aj-center mt50">
				<view @click="submit" class="qui-btn round inline w400">
					确认投放
				</view>
			</view>
		</page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					hongbai_amount:'' ,
					num:'' ,
					time_length:'' ,
				},
				info: {},
			}
		},
		onLoad() {
			
		},
		methods: {
			// 选取时长
			goup(num){
				this.form.time_length = num;
			},
			submit() {
				this.GoldRed();
			},
			async GoldRed() {
				let me = this;
				const res = await this.post('/wap/Line/send_red_bag', this.form);
				if (res.code == 200) {
					me.updatePathList();
					uni.showToast({
						title: '投放成功'
					});
					setTimeout(() => {
						uni.navigateBack({
							delta: 1
						});
					}, 600);
				}
			},
		}
	}
</script>

<style>
	.a-center{ margin-bottom: 15rpx; }
	.list{ display: flex; padding: 15rpx; flex-wrap: wrap; justify-content: center; align-items: center; } 
	.list .item{ width: 33.3%; text-align: center; height: 60rpx; margin-bottom:15rpx ; } 
	.goup{ background: #666; color: #fff; display: inline-block; padding: 10rpx 15rpx; border-radius: 5rpx; } 
	.action{ background: #EC3E3F; }
</style>
