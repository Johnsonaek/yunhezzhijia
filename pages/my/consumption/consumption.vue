<template>
	<view>
		<page title="消费劵" @scrolltolower="loadMore('qlist')">
			<view class="encourage ptb60 ">
				<text class="fs50" v-if="xfjye != Number">{{xfjye}}</text>
				<view>消费消费劵</view>
			</view>
			
			<qui-list getUrl="/wap/Coupon/couponList" ref="qlist" v-slot="data">
				<view class="qui-cells">
					<view class="qui-cell" v-for="(item,index) in data.list" :key="index">
						<view class="cell-bd">
							<view class="fs28">{{item.remark}}</view>
							<view class="text-muted fs24 mt10">{{item.created_at}}</view>
						</view>
						<view class="tr">
							<view class="fw600">{{item.amount}}</view>
							<!-- 1.待审核 2.审核通过 3.拒绝提现；4已到账 -->
							<!-- <view>
								<text class="text-red" v-if="item.status == 1">待审核</text>
								<text class="text-green" v-if="item.status == 2">审核通过</text>
								<text class="text-red" v-if="item.status == 3">拒绝提现</text>
								<text class="text-blue" v-if="item.status == 4">已到账</text>
							</view> -->
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
				xfjye:Number
			}
		},
		onLoad() {
			this.getxfjye()
		},
		methods: {
			async getxfjye(){
				const res = await this.post('/wap/Cis/balance',{type:2})
				this.xfjye = res.data.money
			},
		}
	}
</script>

<style>
.encourage{ background: #EC3F3F; text-align: center; color: #fff; } 
</style>
