<template>
	<view>
		<uni-popup ref="popup" class="pop_tc">
			<view class="share">
				<view class="share_way">
					<image src="../../../static/business/share/bchb.png"></image>
					<view class="title">生成海报</view>
				</view>
				<view class="share_way" v-clipboard:success="copy">
					<image src="../../../static/business/share/bclj.png"></image>
					<view class="title" >生成链接</view>
				</view>
			</view>
			<view class="btn" @click="colsePop">取消</view>
		</uni-popup>
		
		
		<!-- <el-dialog  :visible.sync="dialogTableVisible" :show-close="false">
			<view class="share">
				<view class="share_way">
					<image src="../../../static/business/share/bchb.png"></image>
					<view class="title">生成海报</view>
				</view>
				<view class="share_way" v-clipboard:success="copy"  v-clipboard:copy="message">
					<image src="../../../static/business/share/bclj.png"></image>
					<view class="title" >生成链接</view>
				</view>
			</view>
			<view class="btn" @click="dialogTableVisible = false">取消</view>
		</el-dialog> -->
		<page title=" " :headbor="false">
			
			<view class="" slot="right">
				<text class="cuIcon-share" @click="sharePop"></text>
				<!-- <text class="cuIcon-favor ml30"></text> -->
			</view>
			<view class="qui-cells" style="margin-top: -30rpx;">
				<view class="bg-white plr30 pt30">
					<shop-item :itemData="detail"  :shopIndex="true"></shop-item>
				</view>
				<view class="qui-cell">
					<view class="cell-bd">
						<view class="fs28">{{ detail.address }}</view>
						<view class="fs24 text-gray mt10" v-if="detail.range">距离您的位置{{ detail.range }}m</view>
						<view class="fs28 mt10 ">营业中 {{ detail.start_period_time }} -- {{ detail.end_period_time}}</view>
					</view>
					<view @click="call(detail.mobile)" class="ml20 tc w120">
						<image class="wh50" src="/static/superior/superior8.png" mode="widthFix"></image>
						<view class="tc fs24 mt20">联系商家</view>
					</view>
				</view>
			</view>
			<scroll-view scroll-x class="bg-white nav mt24 bor-1px-b" scroll-with-animation :scroll-left="scrollLeft">
				<view class="">
					<view class="cu-item flex-sub" :class="index == TabCur ? 'text-red cur' : ''" v-for="(item, index) in tabBars" :key="index" @tap="tabSelect" :data-id="index" :data-type="item.type">
						{{ item.name }}
					</view>
				</view>
			</scroll-view>
			<empty v-if="list.length === 0 && loaded"></empty>
			<view class="loading ptb30" v-if="!loaded"></view>
			<view class="qui-cells">
				<view @click="goto('/pages/business/detail/detail?id='+item.id)" class="qui-cell" v-for="(item, index) in list" :key="index">
					<q-image :lazyLoad="true" :isRatio="false" :imgwh="[200, 200]" :src="item.path" class="goods_img"></q-image>
					<view class="cell-bd ml30 goods_info">
						<view class="fs32 fw600">{{item.name}}</view>
						<view class="fs24 mt20 text-gray line1">{{item.commissionDescription}}</view>
						<view class="mt10 text-gray fs24">
							<!-- <text>黄村</text> -->
							<text class="">月售3035</text>
						</view>
						<view class="mt20">
							<text style="white-space: nowrap;" class="plr10 ptb5 bg-red light fs24 radius10 mr20 mb20">返佣 ￥{{item.commissionAmount | tofix}}</text>
							<text style="white-space: nowrap;"  class="plr10 ptb5 bg-red light fs24 radius10 mr20">分享赚 ￥{{(item.inciteRate*item.price).toFixed(2)}}</text>
						</view>
						<view class="ml30 pt50 goods_qg">
							<view class="pt50 fs24 goods_price">
								<text class="text-red ">￥{{item.price}}</text>
								/一份
							</view>
							<view class="qui-btn round inline h50 w140 mt20 small">抢购</view>
					</view>
					
					</view>
				</view>
			</view>
			<loading-more nomore-text="我是有底线的" :nomore="nomore" :list="list"></loading-more>
		</page>
	</view>
</template>

<script>
import {uniPopup} from '@dcloudio/uni-ui'
import pagination from '@/common/mixin/pagination.js';
import shopItem from '@/components/business-components/shop-item.vue';
export default {
	mixins: [pagination],
	components: {
		shopItem,
		uniPopup
	},
	data() {
		return {
			getUrl: '/wap/LineGoods/List',
			autoLoad: false,
			detail: {},
			TabCur: 0,
			scrollLeft: 0,
			dialogTableVisible:false,
			tabBars: [
				{
					name: '套餐',
					type: 2
				},
				{
					name: '单品',
					type: 1
				}
			]
		};
	},
	onLoad(e) {
		this.id = e.id;
		console.log('111');

		this.params.shopId = Number(e.id);
		this.params.type = 2;
		this.getListInit();
		this.getDetail();
	},
	filters:{
		tofix(val) {
			return val.toFixed(2); 
		}
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
		// 切换选项卡
		tabSelect(e) {
			if(!this.loaded) return
			this.TabCur = e.currentTarget.dataset.id;
			let type = e.currentTarget.dataset.type;
			this.params.type = e.currentTarget.dataset.type;
			this.getListInit();
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
		},
		async getDetail() {
			const res = await this.post('/wap/Line/Details', { id: this.id });
			if (res.code == 200) {
				this.detail = res.data.lineShop;
			}
		}
	}
};
</script>

<style  lang="scss">
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
	/deep/ uni-image{
		img{
			width: 200rpx !important;
			height: 200rpx !important;
		}
	}
	/deep/ .goods_info{
		margin: 0 !important;
		margin-left: 20rpx !important;
	}
	
	.goods_qg{
		display: flex;
		align-items: center;
		margin: 0 !important;
		padding: 0 !important;
		.goods_price{
			margin: 0 !important;
			padding: 0 !important;
			margin-right: 60rpx !important;
		}
	}
	
	/deep/ .el-dialog{
		margin-top: 440rpx !important;
		width: 600rpx;
		.share{
			display: flex;
			justify-content: space-around;
			image{
				width: 100rpx;
				height: 100rpx;
			}
		}
		.btn{
			margin: 0 auto;
			margin-top: 60rpx;
			width: 400rpx;
			height: 60rpx;
			line-height: 60rpx;
			border: 1rpx solid #606266;
			text-align: center;
		}
		
	}
</style>
