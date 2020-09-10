<template>
	<view>
		<uni-popup ref="popup" class="pop_tc">
			<view class="share">
				<view class="share_way">
					<image src="../../../static/business/share/bchb.png"></image>
					<view class="title">生成海报</view>
				</view>
				<view class="share_way" v-clipboard:success="copy" >
					<image src="../../../static/business/share/bclj.png"></image>
					<view class="title" >生成链接</view>
				</view>
			</view>
			<view class="btn" @click="colsePop">取消</view>
		</uni-popup>
		<page title=" " :headbor="false">
			<view class="" slot="right">
				<text class="cuIcon-share" @click="sharePop"></text>
				<!-- <text class="cuIcon-favor ml30"></text> -->
			</view>
			
			<view class="bg-white plr30 ptb30">
				<view class="flex justify-between">
					<view class="fs40 fw600">
						{{detail.name}}
					</view>
					<view class="fs30 text-red">
						￥{{detail.price}}
					</view>
				</view>
				<view class="text-gray fs24 mt20">
					月售{{detail.totalSalesVolume}}    好评率{{detail.highRate}}%
				</view>
				<view class="text-gray fs24 mt20">
					产品简介{{detail.synopsis}}
				</view>
				<view class="flex flex-scroll mt30">
					<q-image :lazyLoad="false" :imgwh="[120,120]" :isRatio="false"  :src="detail.path"></q-image>
				</view>
			</view>
			
			<view class="qui-card panel mt24">
				<view class="card-hd">
					<text class="fw600">到店消费，享受红包金</text>
				</view>
				<view class="card-bd pt0 pb40">
					<text class="ptb10 plr30 bg-red light mr20">返佣￥{{detail.commissionAmount}}</text>
					<text class="ptb10 plr30 bg-red light mr20">分享赚￥{{(detail.distributionRate*detail.price).toFixed(2)}}</text>
				</view>
			</view>
			<view class="qui-card panel mt24">
				<view class="card-hd">
					<text class="fw600">返利佣金说明</text>
				</view>
				<view class="card-bd pt0 pb40">
					
					<view  style="line-height: 1.8em;">
						<rich-text :nodes="detail.commissionDescription"></rich-text>
					</view>
					                            
				</view>
			</view>
			
			<view slot="bottom" class="h100 flex bg-white bor-1px-t">
				<view class="flex-item flex a-center pl30">
					商品金额：<text class="fs32 fw600 text-red">￥{{detail.price}}</text>
				</view>
				<view @click="goto('/pages/business/submit-order/submit-order?id='+id)" class="w240 bg-red flex aj-center">
					购买
				</view>
			</view>
		</page>
	</view>
</template>

<script>
	import {uniPopup} from '@dcloudio/uni-ui'
	import shopItem from '@/components/business-components/shop-item.vue';
	export default {
		components: {
			shopItem,
			uniPopup
		},
		
		data() {
			return {
				dialogTableVisible:false,
			   detail: {}
			}
		},
		onLoad(e) {
			this.id = e.id
			this.getDetail()
		},
		methods: {
			colsePop(){
				this.$refs.popup.close()
			},
			sharePop(){
				this.$refs.popup.open()
			},
			copy(){
				this.$refs.popup.close()
				uni.showToast({//提示
				  title:"链接复制成功"
				})
				 
			},
			call(num) {
				uni.makePhoneCall({
				    phoneNumber: num
				});
			},
			async getDetail() {
				// /wap/Order/orderPreview
				const res = await this.post('/wap/LineGoods/Details',{id: this.id})
				if(res.code == 200) {
					this.detail = res.data.lineGoods
				}
			}
		}
	}
</script>

<style lang="scss">
/deep/ .uni-popup__wrapper-box{
		padding-top: 100rpx;
		width: 80%;
		height: 400rpx;
		background-color: #FFFFFF;
		.share{
			display: flex;
			justify-content: space-around;
			margin-bottom: 30rpx;
			image{
				width: 100rpx;
				height: 100rpx;
			}
		}
		.btn{
			margin: 0 auto;
			text-align: center;
			border: 1rpx solid rgb(187, 187, 187);
			width: 80%;
			line-height: 80rpx;
			font-size: 30rpx;
			font-weight: 600;
			height: 80rpx;
			color: rgb(187, 187, 187);
		}
		
	}
</style>
