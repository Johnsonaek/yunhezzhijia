<template>
	<view>
		<page>
			<view class="">
				<!-- 轮播图 -->
				<swiper style="height: 750rpx;" class="round-dot" :circular="true" :autoplay="true" interval="5000" duration="500">
					<swiper-item v-for="(item, index) in banner" :key="index">
						<navigator hover-class="none" :url="item.url" class="radius12">
							<q-image :lazyLoad="false" :imgwh="[750, 750]" :isRatio="true" :src="item.path"></q-image>
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			
			<view class="bg-white plr30 ptb30">
				
				<view class="fs34 mt20">{{detail.itemtitle}}</view>
				<view class="flex a-center mt30">
					<view class="flex-item">
						<text class="text-red">券后价￥</text>
						<text class="text-red fs40">{{detail.itemendprice}}</text>
					</view>
					<view class="plr10 ptb5 bg-gold fs20">
						分享赚￥{{detail.sharePrice}}
					</view>
				</view>
				<view class="flex a-center mt40">
					<view class="w200 text-muted fs24">原价：<text class="text-muted line-through fs24">￥{{detail.itemprice}}</text></view>
					<view class="flex-item tc text-muted fs24"></view>
					<view class="w200 text-muted fs24 tr">销量{{detail.itemsale}}</view>
				</view>
				<view @click="openUrl(detail.couponurl)" class="s-coupon flex a-center" style="background-image: url(/static/svideo/coupon.png);">
					<view class="w160 aj-center flex">
						<view class="fs30 text-yellow pt20">
							<text class="numcolor">￥</text><text class="num numcolor" style="font-size: 80rpx; padding-top: 10rpx">{{detail.couponmoney}}</text>
						</view>
					</view>
					<view class="h120 bor-1px-r mr30"></view>
					<view class="flex-item">
						<view class="fs30 text-white">满{{detail.couponexplain}}使用</view>
						<view class="fs24 text-fff50 mt20">
							使用时间：<text>{{detail.couponstarttime | t}}</text>-<text>{{detail.couponendtime | t}}</text>
						</view>
					</view>
				</view>
				<view class="fs24 mt30 text-muted">
					{{detail.guide_article}}  <text class="text-yellow ml10 " @click="paste(detail.guide_article)">复制文案</text>
				</view>
			</view>
			<view class="qui-cells mt30">
				<view class="qui-cell border-none">
					<view class="mr30 text-gray">
						<image class="wh70 block radius50" src="/static/images/default-tx.png" mode=""></image>
					</view>
					<view class="cell-bd fs30">{{detail.shopname}}</view>
					<view class="arrow-r fs24" style="color: #F82840;">进店看看</view>
				</view>
				<view class="qui-cell fs24  border-none" style="padding-top: 0;">
					<view class="cell-bd text-muted tl">宝贝描述 <text class="text-red">5.0</text></view>
					<view class="cell-bd text-muted tc">卖家服务 <text class="text-red">5.0</text></view>
					<view class="cell-bd text-muted tr">物流服务 <text class="text-red">5.0</text></view>
				</view>
			</view>
			<view class="qui-card mt30 panel">
				<view class="ptb30 plr50">
					<view class="divider"><text class="mlr20 fs30 fw600 text-default">商品详情</text></view>
				</view>
				<view class="card-bd" style="min-height: 800rpx;">详情内容</view>
			</view>

			<view slot="bottom" class="flex bg-white bor-1px-t shadow-xy0">
				<view class="w260 flex">
					<view @click="goTab('home')" class="flex-item flex-column flex aj-center">
						<text class="cuIcon-home fs50"></text>
						<view class="fs20">首页</view>
					</view>
					<navigator url="/pages/shengtai/cart/cart" class="flex-item flex-column flex aj-center">
						<text class="cuIcon-favor fs50"></text>
						<view class="fs20">收藏</view>
					</navigator>
				</view>
				<view class="flex-item flex">
					<view @click="goShare()" class="text-white flex-item h100 flex aj-center" style="background-color: #E5C877;">
						<view class="tc">
							￥{{detail.sharePrice}}
							<view>分享赚</view>
						</view>
					</view>
					<view @click="goBuy()" class="text-white flex-item h100 flex aj-center" style="background-color: #F82840;">
						<view class="tc">
							￥{{(detail.itemprice-detail.itemendprice).toFixed(2)}}
							<view>自购省</view>
						</view>
					</view>
				</view>
			</view>
		</page>
		<!-- 加入购物车 -->
		<sku-popup @confirm="confirm" btnClass="bg-red" ref="skupop"></sku-popup>
		<uni-popup ref="popup" type="center">
			<view class="bg-white radius16 plr30 ptb30 tc" style="width: 570rpx; height: 570rpx;">
				<view class="fs30 pt30">正在跳转淘宝</view>
				<view class="h30"></view>
				<view class="flex a-center mt50">
					<view class="flex-item flex aj-center">
						<image src="/static/images/default-tx.png" class="wh100 block radius50" mode=""></image>
					</view>
					<view><image src="/static/svideo/dotdotdot.png" style="width: 100rpx; height: 10rpx;" class="block" mode=""></image></view>
					<view class="flex-item flex aj-center">
						<image src="/static/svideo/icon_taobao.png" class="wh100 block radius50" mode=""></image>
					</view>
				</view>
				<view class="mt50">
					<view class="fs30">返佣——￥3.65</view>
					<view class="fs30">领券——￥3.00</view>
				</view>
				<view class="h30"></view>
				<view class="text-red mt50">
					可省约6.65
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import ImagePicker from '@/components/image-picker.vue';
	import '@/utils/ican-H5Api.js';
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
import skuPopup from '@/components/sku-popup/sku-popup';
export default {
	components: { skuPopup,uniPopup,ImagePicker },
	data() {
		return {
			detail: {},
			progress: 0,
			text: '推荐理由：【8斤特大单苹果】超大个新鲜大苹果超大个新鲜大苹果超大个新鲜大苹果超大个新鲜大苹果超大个新鲜大苹果超大个新鲜大苹果超大个新鲜大苹果超大个新鲜大苹果',
			banner: []
		};
	},
	onLoad(e) {
		this.id = e.id
		this.goodtype = e.goodtype;
		this.getDetail()
		
	},
	methods: {
		openSkupopup() {
			this.$refs.skupop.open()
		},
		confirm(res) {
			console.log(res);
		},
		async getDetail(){
			const res = await this.post('/wap/Coalition/ItemDetail',{itemid: this.id,goodtype:this.goodtype})
			console.log(res)
			if(res.code == 200) {
				this.banner.push({path:res.data.itempic})
				this.detail = res.data
			}
			
		},
		paste(value) {
			uni.setClipboardData({
				data: value,
				success() {
					uni.showToast({
						title: '复制成功'
					});
				}
			});
		},
		goBuy(){
			this.$refs.popup.open()
		},
		goShare(){
			uni.navigateTo({
				url: '/pages/svideo/share/share'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
	.s-coupon{
		width: 702rpx;
		height: 220rpx;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		margin: 0 auto;
	}
	.numcolor{
		background:linear-gradient(180deg,rgba(253,255,205,1) 0%, rgba(255,226,110,1) 100%);
		-webkit-background-clip:text;
		-webkit-text-fill-color:transparent;
	}
</style>
