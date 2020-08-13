<template>
	<view>
		<page :isBack="true" title="素材" titleClass="titlebgMain" :headbor="false">
			<scroll-view scroll-x class="bg-white nav superior_nav" scroll-with-animation :scroll-left="scrollLeft">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="index == TabCur ? 'text-red cur' : ''" v-for="(item, index) in tabBars" :key="index" @tap="tabSelect" :data-id="index">
						{{ item.name }}
					</view>
				</view>
			</scroll-view>
			<view v-for="(item,index) in 3" :key="index" class="bg-white mt20 plr20 pt20">
				<view class="flex a-center mb30">
					<image src="../../../static/business/share/share1.png" class="wh60 mr20"></image>
					<view class="flex-item">
						<text class="flex a-center h30 fs22">小编推荐</text>
						<text class="flex a-center h30 fs22" style="color: #888888;">今天12：30</text>
					</view>
					<view class="w150 h60 flex a-center j-center fs24 text-white radius30" style="background-color: #F82840;" @tap="openShare">一键分享</view>
				</view>
				<view class="fs24" style="line-height: 1.8;">
					这是文案
					<br />
					这是文案这是文案
					<br />
					这是文案这是文案这是文案
					<br />
					这是文案这是文案这是文案这是文案
				</view>
				<view class="flex" style="flex-wrap: wrap; justify-content:space-between;">
					<image src="../../../static/business/rangking/v2_qaob10.jpg" class="mb30 radius10" mode="widthFix" style="width: 30%;"></image>
					<image src="../../../static/business/rangking/v2_qaxhld.jpg" class="mb30 radius10" mode="widthFix" style="width: 30%;"></image>
					<image src="../../../static/business/rangking/v2_qaob10.jpg" class="mb30 radius10" mode="widthFix" style="width: 30%;"></image>
					<image src="../../../static/business/rangking/v2_qaxhld.jpg" class="mb30 radius10" mode="widthFix" style="width: 30%;"></image>
					<image src="../../../static/business/rangking/v2_qaob10.jpg" class="mb30 radius10" mode="widthFix" style="width: 30%;"></image>
					<image src="../../../static/business/rangking/v2_qaxhld.jpg" class="mb30 radius10" mode="widthFix" style="width: 30%;"></image>
				</view>
				<view class="ptb20 plr20 flex" style="background-color: #f3f3f3;">
					<image src="../../../static/business/rangking/v2_qaob10.jpg" mode="widthFix" class="wh180 mr20" style="width: 100%;"></image>
					<view class="flex-item">
						<view class="fs26 mb40">这是商品介绍这是商品介绍这是商品介...</view>
						<view class="flex">
							<view class="flex-item r-line">
								<text class="flex a-center j-center fs22 mb20" style="color: #F82840;">￥9.9</text>
								<text class="flex a-center j-center fs22">券后价</text>
							</view>
							<view class="flex-item r-line">
								<text class="flex a-center j-center fs22 mb20" style="color: #F82840;">￥3</text>
								<text class="flex a-center j-center fs22">券额</text>
							</view>
							<view class="flex-item">
								<text class="flex a-center j-center fs22 mb20" style="color: #F82840;">￥1.27</text>
								<text class="flex a-center j-center fs22">分享赚</text>
							</view>
						</view>
					</view>
				</view>
				<view class="flex">
					<view class="flex-item r-line gray flex a-center j-center h100">
						<image src="/static/business/save.png" class="wh30 mr10"></image>
						<text class="fs24">保存素材</text>
					</view>
					<view @click="paste('口令内容')" class="flex-item flex a-center j-center h100">
						<image src="/static/business/copy2.png" class="wh30 mr10"></image>
						<text class="fs24">复制口令</text>
					</view>
				</view>
			</view>
		</page>
	</view>
</template>

<script>
	import '@/utils/ican-H5Api.js';
export default {
	data() {
		return {
			TabCur: 0,
			scrollLeft: 0,
			tabBars: [
				{
					name: '朋友圈素材'
				},
				{
					name: '好货专场'
				},
				{
					name: '营销素材'
				},
				{
					name: '商学院'
				}
			],
			
			shareList : false 
		};
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
		},
		// 切换选项卡
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
		},
		isActive(num) {
			for (let i in this.materialList) {
				this.materialList[i].isActive = false;
			}
			this.materialList[num].isActive = true;
		},
		close(){
			this.shareList = false
		},
		openShare(){
			this.shareList = true
		}
	}
};
</script>

<style lang="scss" scoped>
.material-list {
	font-size: 12px;
	position: relative;
	&.active {
		font-size: 16px;
		&::after {
			content: '';
			position: absolute;
			display: block;
			width: 30px;
			height: 5px;
			background-color: #ffffff;
			border-radius: 30px;
			left: 50%;
			bottom: 4px;
			transform: translateX(-50%);
		}
	}
}
.r-line{
	position: relative;
	&::after{
		content: "";
		position: absolute;
		display: block;
		width: 1px;
		height: 50%;
		right: 0px;
		top: 50%;
		transform: translateY(-50%);
		background-color: #F82840;
	}
	&.gray::after{
		content: "";
		position: absolute;
		display: block;
		width: 1px;
		height: 50%;
		right: 0px;
		top: 50%;
		transform: translateY(-50%);
		background-color: #CAC9C9;
	}
}
/*选择弹出层*/
.share {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	z-index: 999;
	.share-bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background-color: rgba(0,0,0,.5);
		z-index: 10;
	}
	.share-list{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 20;
		border-radius: 15px 15px 0 0;
	}
}
</style>
