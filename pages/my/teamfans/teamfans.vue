<template>
	<page @scrolltolower="loadMore('getList')" title="团队粉丝" titleClass="teamfs_bg" :headbor="false">
		<view style="background-image:linear-gradient(90deg, #484848 , #18191E);">
			<view class="mb30 flex a-center">
				<view class="flex-item flex j-center fs28 text-white ">
					<image src="../../../static/business/recommend.png" class="wh40 mr10"></image>
					您的推荐人
				</view>
				
			</view>
			<view class="flex a-center j-center plr20 mb40">
				<view v-if="info.superior_info" class="flex-item flex a-center j-center">
					<image  :src="info.superior_info.headimgurl" class="wh60 mr10 radius50"></image>
					<text class="fs22 text-white">{{info.superior_info.nickname}}</text>
				</view>
				<!-- <view style="opacity: 0;" class="flex-item flex a-center j-center">
					<text class="fs22 text-white">LXF889906363</text>
					<image src="../../../static/business/copy.png" class="wh30 ml15"></image>
				</view> -->
			</view>
			<view class="flex">
				<view class="flex-item flex a-center j-center fans" v-for="(ele, i) in fanslist" :key="i" :class="{ active: ele.isActive }" @tap="isActive(i)">
					<view class="pt20 plr20 pb20" style="width: 90%; border-radius: 10px 10px 0 0;">
						<view class="flex a-center j-center text-default mb10 fs28">{{ ele.number }}</view>
						<view class="flex a-center j-center text-default fs28">{{ ele.title }}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="flex a-center j-center bg-white pt30 pb20">
			<view @click="changeData(3)" class="flex-item">
				<view class="flex a-center j-center fs28 mb20">今日新增</view>
				<view class="flex a-center j-center fs28 fw600">{{ info.today_fans_num }}</view>
			</view>
			<view @click="changeData(4)" class="flex-item">
				<view class="flex a-center j-center fs28 mb20">昨日新增</view>
				<view class="flex a-center j-center fs28 fw600">{{ info.yesterday_fans_num }}</view>
			</view>
			<view @click="changeData(5)" class="flex-item">
				<view class="flex a-center j-center fs28 mb20">间邀粉丝</view>
				<view class="flex a-center j-center fs28 fw600">{{ info.indirect_fans_num }}</view>
			</view>
		</view>

		<qui-list :otherParams="otherParams" :autoLoad="false" ref="refList" getUrl="/wap/Team/teamMemberList" v-slot="data">
			<view v-for="(item,index) in data.list" :key="index" class="flex mt20 mlr20 bg-white plr30 ptb20 radius10">
				<image :src="item.headimgurl" class="wh80 mr20"></image>
				<view class="flex-item">
					<view class="fs26 fw600 flex a-center h40">
						<text>{{item.nickname}}</text>
						<text class="plr20 radius10 ml10 fw300 fs22" style="background-color: #353535; color: #F3D8BB;">
							<text v-if="item.level_type==1">达人</text>
							<text v-if="item.level_type==2">vip</text>
							<text v-if="item.level_type==3">合伙人</text>
						</text>
					</view>
					<view class="fs22 flex a-center h40" style="color: #afafaf;">加入时间：{{item.created_at}}</view>
				</view>
				<view class="w200">
					<view class="fs24 flex a-center h40" style="justify-content: flex-end;">直属粉丝 {{ item.direct_fans_num }}</view>
					<view class="fs24 flex a-center h40" style="justify-content: flex-end;">订单数量 {{item.order_num}}</view>
				</view>
			</view>
		</qui-list>
	</page>
</template>

<script>
export default {
	data() {
		return {
			otherParams: {
				type: 2
			},
			info: {},
			fanslist: [
				{
					number: 0,
					title: '直属粉丝',
					isActive: false
				},
				{
					number: 0,
					title: '全部',
					isActive: true
				}
			]
		};
	},
	onLoad() {
		this.getBaseInfo();
	},
	mounted() {
		this.$refs.refList.getListInit()
	},
	methods: {
		changeData(index) {
			this.otherParams.type = index
			this.$refs.refList.getListInit()
		},
		async getBaseInfo() {
			const res = await this.post('/wap/Team/teamInfo');
			this.info = res.data;
			this.fanslist[0].number = res.data.direct_fans_num
			this.fanslist[1].number = res.data.total_fans_num
		},
		isActive(num) {
			for (let i in this.fanslist) {
				this.fanslist[i].isActive = false;
			}
			this.fanslist[num].isActive = true;
			if(num == 0) {
				this.changeData(1)
			}
			if(num == 1) {
				this.changeData(2)
			}
		}
	}
};
</script>

<style lang="scss">
.color1 {
	color: red;
}

.arrow-l {
	position: absolute;
	left: 20rpx;
	top: 50%;
	transform: rotateZ(45deg) translateY(-50%);
	border: 2px solid #ffffff;
	border-top: 0;
	border-right: 0;
	width: 20rpx;
	height: 20rpx;
	z-index: 999;
}

.fans > uni-view {
	background-image: linear-gradient(90deg, #e9e9eb, #a4a5a7);
}
.active > uni-view {
	background-image: linear-gradient(90deg, #fae7af, #f6d183);
}
</style>
