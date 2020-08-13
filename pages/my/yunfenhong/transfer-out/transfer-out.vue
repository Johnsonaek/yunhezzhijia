<template>
	<view>
		<page title="转出红利宝" bgClass="bg-white">
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="cell-bd">我的红利价值 <text class="text-red ml10 fs34">{{ info.user_bonus_amount }}</text></view>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">
						<view class="mb30">
							转出金额
						</view>
					    <view class="flex a-center">
							<text>￥</text>
							<view class="ptb20 bor-1px-b flex-item ml20">
								<input v-model="form.bonus_amount" placeholder="请输入金额" type="number" value="" class="qui-input fs40" />
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="flex aj-center mt50">
				<view @click="submit" class="qui-btn round inline w400">
					转出
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
					bonus_amount: null,
				},
				info: {},
			}
		},
		onLoad() {
		   this.getHomeInfo()	
		},
		methods: {
			submit() {
				if(!this.form.bonus_amount) {
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
				            me.post('/wap/Bonus/transferOut', me.form).then(res=>{
				            	me.success(res, '转出成功',()=>{
				            		me.form.bonus_amount = null
				            		me.getHomeInfo();
				            	})
				            })
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
			},
		}
	}
</script>

<style>

</style>
