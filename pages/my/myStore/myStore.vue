<template>
	<page title="我的门店" bgClass="bg-white">
		
		<view v-if="userInfo.is_line_shop == 1" class="ptb50">
			<view class="h200"></view>
			<view class="tc">
				门店入驻申请已提交，请耐心等待平台审核
			</view>
			<view class="h200"></view>
			<view class="plr100">
				<view @click="goBack()" class="qui-btn round">
					确定
				</view>
			</view>
		</view>
		<view v-else class="pt24">
			<view class="qui-grids column3 gutter10 plr10">
				<view class="qui-grid">
					<navigator url="/pages/my/myStore/preview/preview">
						<image src="/static/md_icon_01.png" class="wh80 mb10"></image>
						<text class="flex a-center j-center fs22" style="width: 100%; color: #999999;">店铺预览</text>
					</navigator>
				</view>
				<view class="qui-grid">
					<navigator url="/pages/my/myStore/kaitong/kaitong">
						<image src="/static/md_icon_02.png" class="wh80 mb10"></image>
						<text class="flex a-center j-center fs22" style="width: 100%; color: #999999;">开通活动金</text>
					</navigator>
				</view>
				<view class="qui-grid">
					<view @click="goto('/pages/my/myStore/order/order')">
						<image src="/static/md_icon_03.png" class="wh80 mb10"></image>
						<text class="flex a-center j-center fs22" style="width: 100%; color: #999999;">订单管理</text>
					</view>
				</view>
			</view>
			
		</view>
		
		
		
			
		</view>
	</page>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				tabBars: [
					{
						name: '销售中'
					},
					{
						name: '已下架'
					}
				],
			}
		},
		computed: {
			...mapState({
				userInfo: state => state.user.userInfo
			})
		},
		methods: {
			// 切换选项卡
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
			}
		}
	}
</script>

<style>

</style>
