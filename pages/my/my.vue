<!-- 我的 -->
<template>
	<page :headbor="false">
		<view slot="top" class="flex h100 a-center bg-theme" style="justify-content: flex-end; padding-right: 30rpx;">
			<navigator url="/pages/my/setting/news"><image class="wh50" src="/static/my/my2.png"></image></navigator>
			<navigator url="/pages/my/setting/set" class="ml20"><image class="wh50" src="/static/my/my3.png"></image></navigator>
		</view>
		<!-- 顶部导航栏 -->
		<view class="user_top">
			<view v-if="userInfo" class="relative z-index9">
				
				<view class="flex plr30 pb30 text-white a-center">
					<navigator url="/pages/my/setting/set" class="mr30">
						<image v-if="userInfo.headimgurl !== ''" class="wh140 radius50" :src="userInfo.headimgurl" mode="widthFix"></image>
						<image v-else class="wh140 radius50" src="/static/images/default-tx.png" mode="widthFix"></image>
					</navigator>
					<view class="flex-item">
						<view class="mb20">
							<text v-if="userInfo.nickname" class="fs36 mr20">{{ userInfo.nickname }}</text>
							<text v-else class="fs36 mr20">{{ userInfo.mobile }}</text>
							<text class="bg-black plr20 ptb5 radius10">
								<text v-if="userInfo.level_type == 1" class="vip-text fs22">达人</text>
								<text v-if="userInfo.level_type == 2" class="vip-text fs22">VIP</text>
								<text v-if="userInfo.level_type == 3" class="vip-text fs22">合伙人</text>
							</text>
						</view>
						<view class="fs26">
							<text>邀请码：{{ userInfo.invite_code }}</text>
							<text @click="paste(userInfo.invite_code)" class="text-yellow ml20">复制</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="qui-card mlr24 relative z-index9">
			<view class="card-hd ptb20">
				<view>
					<view class="fs26">
						账户可用余额
						<text class="fs28 fw600">￥0.00</text>
					</view>
					<!-- <view class="text-gray fs24 mt5">每月25号结算上月收益</view> -->
				</view>
				<navigator url="/pages/my/balanceWithdrawal/balanceWithdrawal" class="qui-btn inline h60 outline round" style="border-color: #000000; color: #000;">提现</navigator>
			</view>
			<view class="bor-1px-b mlr30"></view>
			<view  class="qui-grids column4 gutter30-tb ptb10">
				<navigator class="qui-grid" url="/pages/my/profit/profit">
					<view class="fs36 num">100</view>
					<view class="fs26 mt20">今日预估</view>
				</navigator>
				<view class="qui-grid">
					<view class="fs36 num">100</view>
					<view class="fs26 mt20">今日销售</view>
				</view>
				<view class="qui-grid">
					<view class="fs36 num">100</view>
					<view class="fs26 mt20">累计销售</view>
				</view>
				<view class="qui-grid">
					<view class="fs36 num">100</view>
					<view class="fs26 mt20">累计订单</view>
				</view>
				<navigator class="qui-grid" url="/pages/my/encourage/encourage">
					<view class="fs36 num">100</view>
					<view class="fs26 mt20">鼓励金</view>
				</navigator>
				<navigator class="qui-grid" url="/pages/my/profit/profit">
					<view class="fs36 num">100</view>
					<view class="fs26 mt20">累计收益</view>
				</navigator>
				<navigator class="qui-grid" url="/pages/my/consumption/consumption">
					<view class="fs36 num">100</view>
					<view class="fs26 mt20">消费劵</view>
				</navigator>
				<navigator class="qui-grid" url="/pages/my/yunfenhong/yunfenhong">
					<view class="fs36 num">100</view>
					<view class="fs26 mt20">红利宝</view>
				</navigator>
			</view>
		</view>

		<!-- 升级vip -->
		<navigator url="/pages/my/equityCenter/equityCenter" class="bg-black flex radius10 mlr24 plr20 ptb20">
			<view class="flex-item flex a-center">
				<view class="wh30 mr10"><image class="wh30 block" src="../../static/my/my4.png"></image></view>
				<view class="vip-text fs24">升级VIP享受更多权益</view>
			</view>
			<view class="vip-text fs24">立即参与>></view>
		</navigator>
		<!-- 广告图 -->
		<view class="plr24 mt24"><q-image :isRatio="true" :imgwh="[704, 296]" src="/static/my/my5.png"></q-image></view>
		<!-- 会员中心 -->
		<view class="qui-card mlr24 mtb24">
			<view class="card-hd bor-1px-b pt20 pb20"><text class="fs32 fw600">会员中心</text></view>
			<view class="qui-grids column4 gutter30">
				<navigator url="/pages/my/profit/profit" class="qui-grid">
					<image class="wh64 block" src="/static/my/my6.png"></image>
					<view class="fs26 mt5">收入报表</view>
				</navigator>
				<navigator url="/pages/my/allorder/allorder" class="qui-grid">
					<image class="wh64 block" src="/static/my/my7.png"></image>
					<view class="fs26 mt5">全部订单</view>
				</navigator>
				<navigator url="/pages/my/teamfans/teamfans" class="qui-grid">
					<image class="wh64 block" src="/static/my/my8.png"></image>
					<view class="fs26 mt5">团队粉丝</view>
				</navigator>
				<navigator url="/pages/my/qrcode/qrcode" class="qui-grid">
					<image class="wh64 block" src="/static/my/my9.png"></image>
					<view class="fs26 mt5">邀请好友</view>
				</navigator>
			</view>
		</view>

		<!-- 必备工具 -->
		<view class="qui-card mlr24 mtb24">
			<view class="card-hd bor-1px-b pt20 pb20"><text class="fs32 fw600">云合线下工具</text></view>
			<view class="qui-grids column4 gutter30">
				<navigator v-if="userInfo.is_line_shop>0" url="/pages/my/myStore/myStore" class="qui-grid">
					<image class="wh64 block" src="/static/my/my10.png"></image>
					<view class="fs26 mt5">我的门店</view>
				</navigator>
				<!-- 如果申请待审核过了，就直接跳到资料预览  -->
				<navigator v-if="userInfo.is_line_shop>0" url="/pages/my/storeSettlein/apply/apply" class="qui-grid">
					<image class="wh64 block" src="/static/my/my11.png"></image>
					<view class="fs26 mt5">门店入驻</view>
				</navigator>
				<navigator v-else url="/pages/my/storeSettlein/storeSettlein" class="qui-grid">
					<image class="wh64 block" src="/static/my/my11.png"></image>
					<view class="fs26 mt5">门店入驻</view>
				</navigator>
				<!-- <navigator class="qui-grid">
					<image class="wh64 block" src="/static/my/my12.png"></image>
					<view class="fs26 mt5">地堆物料</view>
				</navigator>
				<navigator url="/pages/my/shareMaterial/shareMaterial" class="qui-grid">
					<image class="wh64 block" src="/static/my/my13.png"></image>
					<view class="fs26 mt5">一键发圈</view>
				</navigator> -->
			</view>
		</view>

		<!-- 云合线下工具 -->
		<view class="qui-card mlr24 mtb24">
			<view class="card-hd bor-1px-b pt20 pb20"><text class="fs32 fw600">云合线上工具</text></view>
			<view class="qui-grids column4 gutter30">
				<navigator url="/pages/my/yh-store/yh-store" class="qui-grid">
					<image class="wh64 block" src="/static/my/my14.png"></image>
					<view class="fs26 mt5">云合微店</view>
				</navigator>
				<!-- <navigator class="qui-grid">
					<image class="wh64 block" src="/static/my/my15.png"></image>
					<view class="fs26 mt5">我的商城</view>
				</navigator> -->
				<navigator url="/pages/my/exclusiveOrder/exclusiveOrder" class="qui-grid">
					<image class="wh64 block" src="/static/my/my16.png"></image>
					<view class="fs26 mt5">专属密令</view>
				</navigator>
				<!-- <view @click="doing" class="qui-grid">
					<image class="wh64 block" src="/static/my/my17.png"></image>
					<view class="fs26 mt5">云发圈</view>
				</view> -->
				<navigator url="/pages/my/shareMaterial/shareMaterial" class="qui-grid">
					<image class="wh64 block" src="/static/my/my13.png"></image>
					<view class="fs26 mt5">一键发圈</view>
				</navigator>
			</view>
		</view>

		<!-- 必备工具 -->
		<view class="qui-card mlr24 mtb24">
			<view class="card-hd bor-1px-b pt20 pb20"><text class="fs32 fw600">必备工具</text></view>
			<view class="qui-grids column4 gutter20 ptb10">
				<navigator url="/pages/my/tutorial/tutorial" class="qui-grid">
					<image class="wh64 block" src="/static/my/my18.png"></image>
					<view class="fs26 mt5">新手教程</view>
				</navigator>
				<navigator url="/pages/my/college/college" class="qui-grid">
					<image class="wh64 block" src="/static/my/my19.png"></image>
					<view class="fs26 mt5">商学院</view>
				</navigator>
				<navigator url="/pages/my/ranksingle/ranksingle" class="qui-grid">
					<image class="wh64 block" src="/static/my/my20.png"></image>
					<view class="fs26 mt5">出单排行榜</view>
				</navigator>
				<navigator url="/pages/my/yunfenhong/yunfenhong" class="qui-grid">
					<image class="wh64 block" src="/static/my/my21.png"></image>
					<view class="fs26 mt5">云分红</view>
				</navigator>
				<navigator url="/pages/my/retrieveOrder/retrieveOrder" class="qui-grid">
					<image class="wh64 block" src="/static/my/my22.png"></image>
					<view class="fs26 mt5">找回订单</view>
				</navigator>
				<navigator url="/pages/my/customer-service/customer-service" class="qui-grid">
					<image class="wh64 block" src="/static/my/my23.png"></image>
					<view class="fs26 mt5">在线客服</view>
				</navigator>
				<navigator url="/pages/my/commonProblem/commonProblem" class="qui-grid">
					<image class="wh64 block" src="/static/my/my24.png"></image>
					<view class="fs26 mt5">常见问题</view>
				</navigator>
			</view>
		</view>

		<!-- 小程序 -->
		<!-- <view class="qui-card mlr24 mtb24">
			<view class="card-hd bor-1px-b pt20 pb20"><text class="fs32 fw600">跳转小程序</text></view>
			<view class="qui-grids column4 gutter30">
				<navigator class="qui-grid">
					<image class="wh64 block" src="/static/my/my25.png"></image>
					<view class="fs26 mt5">VIP影视</view>
				</navigator>
				<navigator class="qui-grid">
					<image class="wh64 block" src="/static/my/my26.png"></image>
					<view class="fs26 mt5">素材库</view>
				</navigator>
				<navigator class="qui-grid">
					<image class="wh64 block" src="/static/my/my27.png"></image>
					<view class="fs26 mt5">直播间</view>
				</navigator>
				<navigator class="qui-grid">
					<image class="wh64 block" src="/static/my/my28.png"></image>
					<view class="fs26 mt5">个人商城</view>
				</navigator>
			</view>
		</view> -->

		<!-- 广告图 -->
		<!-- <view class="plr24"><q-image :isRatio="true" :imgwh="[702, 182]" src="/static/my/my29.png"></q-image></view> -->
		<!-- 更多服务 -->
		<view class="qui-card mlr24 mtb24">
			<view class="card-hd bor-1px-b pt20 pb20"><text class="fs32 fw600">更多服务</text></view>
			<view class="qui-grids column4 gutter30">
				<navigator url="/pages/svideo/favorite/favorite" class="qui-grid">
					<image class="wh64 block" src="/static/my/my30.png"></image>
					<view class="fs26 mt5">我的收藏</view>
				</navigator>
				<navigator url="/pages/my/footprint/footprint" class="qui-grid">
					<image class="wh64 block" src="/static/my/my31.png"></image>
					<view class="fs26 mt5">我的足迹</view>
				</navigator>
				<navigator url="/pages/my/contactUs/contactUs" class="qui-grid">
					<image class="wh64 block" src="/static/my/my32.png"></image>
					<view class="fs26 mt5">联系我们</view>
				</navigator>
				<navigator url="/pages/my/standard/standard" class="qui-grid">
					<image class="wh64 block" src="/static/my/my33.png"></image>
					<view class="fs26 mt5">推广规范</view>
				</navigator>
				<!-- <navigator @click="doing" class="qui-grid">
					<image class="wh64 block" src="/static/my/live.png"></image>
					<view class="fs26 mt5">我的直播</view>
				</navigator> -->
				<navigator url="/pages/my/address/address" class="qui-grid">
					<image class="wh64 block" src="/static/my/map.png"></image>
					<view class="fs26 mt5">收货地址</view>
				</navigator>
			</view>
		</view>
		<view class="h100"></view>
	</page>
</template>
<script>
import quiSticky from '@/components/sticky.vue';
import '@/utils/ican-H5Api.js';
import { mapState, mapMutations } from 'vuex';
export default {
	components: { quiSticky },
	data() {
		return {
			opcity: 0,
			showHeader: true,
			afterHeaderOpacity: 1, //不透明度
			headerPosition: 'fixed',
			headerTop: null,
			statusTop: null,
			nVueTitle: null
		};
	},
	computed: {
		...mapState({
			PageCur: 'PageCur',
			userInfo: state => state.user.userInfo
		})
	},
	watch: {
		PageCur(newName, oldName) {
			if (newName === 'my') {
				this.isLogin(true)
				// 监听页面切换，做你想做的事
			}
		}
	},
	onLoad() {
		setTimeout(() => {
			uni.getSystemInfo({
				success: (res) => {
					this.scrollH = res.windowWidth / 2
				}
			})
		}, 50)
	},
	onPageScroll(e) {
		let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
		let opcity = scroll / this.scrollH;
		if (this.opcity >= 1 && opcity >= 1) {
			return;
		}
		this.opcity = opcity;
	},
	created() {
		if (this.PageCur == 'my') {
		}
	},
	methods: {
		paste(value) {
			uni.setClipboardData({
				data: value,
				success() {
					uni.showToast({
						title: '复制成功'
					});
				}
			});
		}
	}
};
</script>
<style scoped lang="scss">
page {
	background-color: var(--pageColor);
}
.wh64 {
	width: 64upx;
	height: 64upx;
}
.vip-text {
	background: linear-gradient(0deg, rgba(245, 241, 231, 1) 0%, rgba(253, 185, 143, 1) 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
.user_top {
	position: relative;
	width: 750rpx;
	height: 300rpx;
	overflow: hidden;
	margin-bottom: -140rpx;
	&::after {
		bottom: 0;
		left: 0;
		position: absolute;
		display: block;
		content: '';
		width: 750rpx;
		height: 400rpx;
		background: linear-gradient(0deg, var(--themeColor), var(--themeColor));
		border-radius: 50%;
		transform: scale(1.8);
		transform-origin: center bottom;
	}
}
</style>
