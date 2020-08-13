<template>
	<view>
		<q-titlebar :opcity="opcity" :height="100">
			<view class="text-white flex a-center">
				<view @click="goBack()" class="w100 ml30 tl">
					<view class="wh60 flex aj-center radius50 bg-black-50"><text class="cuIcon-back text-white fs30 "></text></view>
				</view>
				<view class="flex-item fs36"></view>
				<view class="w100 text-white fs36 mr30 tr"></view>
			</view>
			<view slot="reshow" class="flex a-center">
				<view @click="goBack()" class="w100 ml30 tl">
					<view class="wh60 flex aj-center radius50"><text class="cuIcon-back fs30 "></text></view>
				</view>
				<view class="flex-item fs36">商品详情</view>
				<view class="w100 fs36 mr30 tr"></view>
			</view>
		</q-titlebar>
		<view>
			
			<wm-poster
			    CanvasID = "PosterCanvas"
				ref="poster"
				:imgSrc="detail.original_img"
				QrSrc="/static/images/default-tx.png"
				:qrBase64="qrcode"
				:Title="detail.goods_name"
				:PriceTxt="detail.sell_price"
				Referrer="deking推荐给你"
				OriginalTxt=""
			></wm-poster>
			<view class="">
				<!-- 轮播图 -->
				<swiper style="height: 750rpx;" class="round-dot" :circular="true" indicator-dots="true" :autoplay="true" interval="5000" duration="500">
					<swiper-item v-for="(item, index) in banner" :key="index">
						<navigator hover-class="none" :url="item.url" class="radius12">
							<q-image :lazyLoad="false" :imgwh="[750, 750]" :isRatio="true" :src="item.image_url"></q-image>
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<button type="default" @click="savePoster">测试</button>
			<view class="bg-white plr30 ptb30">
				<view class="flex a-center mt30">
					<view class="flex-item flex a-center">
						<text class="text-red fs40 mr20">￥{{ detail.sell_price }}</text>
						<!-- <text class="text-muted line-through fs24">￥53.8</text> -->

						<text v-if="detail.coupon_deduction_rate" class="bg-red radius20 fs22 ptb5 plr10">消费券最高抵扣{{ detail.coupon_deduction_rate }}</text>

						<text v-if="detail.incentive_deduction_rate" class="bg-red radius20 fs22 ptb5 plr10">鼓励金最高抵扣{{ detail.incentive_deduction_rate }}</text>
					</view>
				</view>
				<view class="fs34 mt20">{{ detail.goods_name }}</view>
				<!-- <view class="flex a-center mt40">
					<view class="w200 text-muted fs24">宝贝描述：5.0</view>
					<view class="flex-item tc text-muted fs24">宝贝描述</view>
					<view class="w200 text-muted fs24 tr">宝贝描述：5.0</view>
				</view> -->
			</view>
			<view class="qui-cells mt30">
				<view class="qui-cell">
					<view class="mr30 text-gray">配送至</view>
					<view class="cell-bd" @click="goto('/pages/my/address/address?from=order')">
						<view v-if="!showPath" class="text-gray">请选择收货地址</view>
						<view v-else class="">{{ showPath.whole_address_name }}</view>
					</view>
					<view class="arrow-r"></view>
				</view>
				<view class="qui-cell" @click="openSkupopup()">
					<view class="mr30 text-gray">规格与包装</view>
					<view class="cell-bd">{{ subText == '' ? '请选择' : subText }}</view>
					<view class="arrow-r"></view>
				</view>
			</view>
			<view class="qui-card mt30 panel">
				<view class="ptb30">
					<view class="divider divider-80"><text class="mlr20 fs30 fw600 text-default">商品详情</text></view>
				</view>
				<view class="card-bd content">
					<image style="width: 400px; height: 400px;" :src="qrcode" mode="widthFix"></image>
					<!-- <rich-text :nodes="detail.goods_content"></rich-text> -->
					<parser :html="detail.goods_content" />
				</view>
			</view>
			<view class="h100"></view>
			<view v-if="detail.coupon_deduction_rate || detail.incentive_deduction_rate" style="position: fixed;left:0;right:0; bottom: 0;" class="flex bg-white bor-1px-t shadow-xy0">
				<view class="w260 flex aj-center">
					<text class="price text-red">3333</text>
				</view>
				<view class="flex-item flex">
					
					<view  @click="openSkupopup()" class="text-white flex-item h100 flex aj-center" style="background-color: #E5C877;">
						<view class="tc">
							加入购物车
						</view>
					</view>
					<view @click="openSkupopup()" class="text-white flex-item h100 flex aj-center" style="background-color: #F82840;">
						<view class="tc">
							立即购买
						</view>
					</view>
				</view>
			</view>
		
		    <view v-else style="position: fixed;left:0;right:0; bottom: 0;" class="flex bg-white bor-1px-t shadow-xy0">
		    	<view class="w260 flex">
		    		<view v-if="!detail.is_sale" @click="openSellPopup()" class="flex-item flex-column flex aj-center">
		    			<image src="/static/superior/icon_goods.png" class="block wh60" mode=""></image>
		    			<view class="fs20">上架</view>
		    		</view>
		    		<view v-else @click="unSell()" class="flex-item flex-column flex aj-center">
		    			<image src="/static/superior/icon_goods_down.png" class="block wh60" mode=""></image>
		    			<view class="fs20">下架</view>
		    		</view>
		    		<view @click="openSkupopup()" url="/pages/shengtai/cart/cart" class="flex-item flex-column flex aj-center">
		    			<image src="/static/superior/icon_cart.png" class="block wh60" mode=""></image>
		    			<view class="fs20">购物车</view>
		    		</view>
		    	</view>
		    	<view class="flex-item flex">
		    		<view v-if="!detail.is_sale" @click="openSellPopup()" class="text-white flex-item h100 flex aj-center" style="background-color: #E5C877;">
		    			<view class="tc">
		    				￥{{(detail.sell_price*detail.commission_rate).toFixed(2)}}
		    				<view>分享赚</view>
		    			</view>
		    		</view>
		    		<view v-else @click="onShare" class="text-white flex-item h100 flex aj-center" style="background-color: #E5C877;">
		    			<view class="tc">
		    				￥{{(detail.sell_price*detail.commission_rate).toFixed(2)}}
		    				<view>分享赚</view>
		    			</view>
		    		</view>
		    		<view @click="openSkupopup()" class="text-white flex-item h100 flex aj-center" style="background-color: #F82840;">
		    			<view class="tc">
		    				￥{{(detail.sell_price*detail.commission_rate).toFixed(2)}}
		    				<view>自购省 {{ goodsConfig.small_shop_markup }}</view>
		    			</view>
		    		</view>
		    	</view>
		    </view>
		</view>
		
		
		<view style="margin-bottom: 120rpx; position: fixed;" @click="goto('/pages/superior/cart/cart')" class="wh100 bg-black-50 radius50 abs absrb flex aj-center flex-column mr30">
			<text class="cuIcon-cart fs30 text-white"></text>
			<view class="fs22 text-white">购物车</view>
		</view>
		<more-share ref="sharePopup" @save="savePoster"></more-share>
		<!-- 加入购物车 -->
		<sku-popup @confirm="confirm" ref="skupop"></sku-popup>

		<!-- 上架商品弹框 -->
		<sell-popup @confirm="sellConfirm" :maxVal="goodsConfig.small_shop_markup" ref="sellpop" :detail="detail"></sell-popup>
	</view>
</template>

<script>
import pagination from '@/common/mixin/pagination.js';
import Config from '@/utils/config';
import Parser from '@/components/jyf-parser/jyf-parser.vue';
import { mapState, mapGetters, mapMutations } from 'vuex';
import skuPopup from '@/components/sku-popup/sku-popup';
import moreShare from '@/components/more-share.vue';
import sellPopup from '@/components/business-components/sell-popup.vue';
import wmPoster from '@/components/wm-poster/wm-poster.vue';
export default {
	mixins: [pagination],
	components: { skuPopup, Parser, sellPopup, moreShare, wmPoster },
	data() {
		return {
			opcity: 0,
			getUrl: '/wap/UserAddress/addressList',
			autoLoad: true,
			detail: {},
			banner: [],
			goodsConfig: {},
			qrcode: ''
		};
	},
	onLoad(e) {
		this.id = e.id;
		this.getDetail();
		this.getQrCode();
		setTimeout(() => {
			uni.getSystemInfo({
				success: res => {
					this.scrollH = res.windowWidth / 2;
				}
			});
		}, 50);
	},
	computed: {
		...mapState({
			subText: state => state.sku.subText,
			selectPath: state => state.path.selectPath
		}),
		...mapGetters(['showPath'])
	},
	onPageScroll(e) {
		let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
		let opcity = scroll / this.scrollH;
		if (this.opcity >= 1 && opcity >= 1) {
			return;
		}
		this.opcity = opcity;
	},
	methods: {
		...mapMutations(['setCurrent', 'setTags', 'setRows', 'setDetailToVuex', 'updatePathList']),
		onShare() {
			let options = {
				shareUrl:'shareUrl',
				shareTitle:'uni-app分',
				shareSummary:'2我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验2222',
				shareImg:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png',
				appId:'appId',
				appPath:'appPath',
			}
			this.$refs.sharePopup.open(options);
		},
		getListResult(items) {
			this.list = [...this.list, ...items];
			this.updatePathList(this.list);
		},
		openSkupopup() {
			this.$refs.skupop.open();
		},
		openSellPopup() {
			this.getConfig();
			this.$refs.sellpop.open();
		},
		// 上架商品
		sellConfirm(res) {
			this.post('/wap/OwnSmallShop/goodsAdd', {
				goods_id: this.id,
				recommend_remark: res.remark,
				markup_rate: res.rate,
				is_sale: 1
			}).then(res => {
				if (res.code == 200) {
					uni.showToast({
						title: '上架成功',
						icon: 'none'
					});
					this.getDetail();
				}
			});
		},
		// 下架操作
		unSell() {
			let me = this;
			uni.showModal({
				title: '确定要下架该商品吗',
				content: '下加后顾客将无法查看和购买该商品',
				success: res => {
					if (res.confirm) {
						me.post('/wap/OwnSmallShop/goodsAdd', { goods_id: this.id, is_sale: 2 }).then(res => {
							if (res.code == 200) {
								uni.showToast({
									title: '已下架',
									icon: 'none'
								});
								this.getDetail();
							}
						});
					}
				}
			});
		},
		confirm(res) {
			if (res.btnType == 'addCart') {
				// 加入购物车
				console.log('加入购物车');

				this.addCart(res);
			} else if (res.btnType == 'nowBuy') {
				let obj = [
					{
						goods_id: res.id,
						goods_num: res.num,
						spec_key: res.spec_key,
						recommend_user_id: '0'
					}
				];
				let objStr = JSON.stringify(obj);
				uni.navigateTo({
					url: `/pages/superior/confirm-order/confirm-order?type=1&opt=${objStr}`
				});
			}
		},
		async getConfig() {
			const res = await this.post('/wap/Supply/goodsDetailConfig');
			if (res.code == 200) {
				this.goodsConfig = res.data.goods_config;
			}
		},
		async addCart(form) {
			console.log(form);
			/* [{
			 "goods_id":8012,
			 "goods_num":1,
			 "spec_key":"",
			 "recommend_user_id":"0"
			 },
			 {
				 "goods_id":8013,
				 "goods_num":1,
				 "spec_key":"",
				 "recommend_user_id":"0",
				 },
			 ] */
			// let form = {
			// 	goods_id: this.id,
			// 	number: 1,
			// 	spec_key: ''
			// };

			const res = await this.post('/wap/UserCart/addcart', {
				goods_id: form.id,
				number: form.num,
				spec_key: form.spec_key
			});
			if (res.code == 200) {
				uni.showToast({
					title: '已添加到购物车~',
					icon: 'none'
				});
			}
		},
		async getQrCode() {
			const res = await this.post('/wap/OwnSmallShop/createWxQrcode', { goods_id: this.id });
			this.qrcode = res.data.qrCode;
		},
		async getDetail() {
			const res = await this.post('/wap/Supply/getDetails', { goods_id: this.id });
			if (res.code == 200) {
				this.setDetailToVuex(res.data);
				this.detail = res.data;
				this.banner = res.data.getGoodsImages;
				let price = res.data.sell_price;
				let image = res.data.original_img;
				let name = res.data.goods_name;
				let stock = res.data.store_count;
				this.setRows(res.data.SpecGoodsPriceAll);
				this.setCurrent({ price, image, stock });
				let arr = [];
				// let arr = [
				// 	{
				// 		name: '颜色',
				// 		item: [
				// 			{
				// 				name: '红色'
				// 			}
				// 		]
				// 	}
				// ]
				for (let item in res.data.spec) {
					let itemArr = res.data.spec[item].list.map(v => {
						return {
							id: v.id,
							name: v.item
						};
					});

					arr.push({
						name: res.data.spec[item].cate_name,
						item: itemArr
					});
				}

				this.setTags(arr);
			}
		},
		savePoster() {
			console.log('生成海报')
			this.$refs.poster.OnCanvas();
			
			uni.canvasToTempFilePath({
			  x: 0,
			  y: 0,
			  width: 50,
			  height: 50,
			  destWidth: 100,
			  destHeight: 100,
			  canvasId: 'PosterCanvas',
			  success: function(res) {
			    // 在H5平台下，tempFilePath 为 base64
			    console.log(res.tempFilePath)
				uni.saveFile({
					tempFilePath: res.tempFilePath,
					success:(res)=>{
						console.log(res)
					}
				})
			  } 
			})
			
		}
	}
};
</script>

<style lang="scss">
.content img {
	max-width: 100% !important;
}
</style>
