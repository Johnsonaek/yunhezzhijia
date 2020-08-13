<template>
	<page title="权益中心">
		<view v-if="userInfo" class="ptb40" style="background-image: linear-gradient(to right, #F82840 , #FB3C76);">
			<view class=" flex a-center j-center mb10"><image :src="userInfo.headimgurl" class="wh100"></image></view>
			<view class="flex a-center j-center fs28 text-white mb20">{{userInfo.nickname}}</view>
			<view class="flex a-center j-center"><text class="flex a-center j-center plr30 h40 bg-black fs22 radius10" style="color: #B79173;">
			<text v-if="userInfo.level_type==1">达人</text>
			<text v-if="userInfo.level_type==2">vip</text>
			<text v-if="userInfo.level_type==3">合伙人</text>
			</text></view>
		</view>
		<view class="flex">
			<view class="flex-item pt20 pb30" v-for="(ele, i) in equitylist" :key="i" :class="{ hover: ele.isHover }" @tap="isHover(i)">
				<text class="flex a-center j-center fs34 h50 mb20 fw600">{{ ele.title }}</text>
				<text class="flex a-center j-center fs22">{{ ele.text }}</text>
			</view>
		</view>
		<view class="bg-white ptb30 plr30 mb20">
			<!-- <view class="fw600 fs28 mb20">升级合伙人后，收益提升，享受更多权益。</view> -->
			<view class="fs22" style="line-height: 1.8;">
				<rich-text :nodes="info.desciption"></rich-text>
			</view>
		</view>
		<view v-if="equitylist[0].isHover" class="bg-white ptb30 plr30">
			<view class="fw600 fs28 mb20">
				做任务去升级
				<text class="fw300">（任意满足一条件即可升级）</text>
			</view>
			<!-- <view class="fw600 fs24 mb5">条件一</view> -->
			<view class=" fs24 mb5">有效直推{{info.need_directly_num}}人</view>
			<view class="flex a-center">
				<view class="w300 mr15" style="height: 3px; background-color: #E66060;position: relative;">
					<view :style="'width:'+left1+'%'" class="scheduleColor"></view>
					<view :style="'left:'+left1+'%'" class="schedule"></view>
				</view>
				<text class="flex-item fs22">{{info.directly_num}}/{{info.need_directly_num}}</text>
				<navigator url="/pages/my/qrcode/qrcode" class="plr20 radius30 fs22 text-white h30 flex a-center" style="background-color: #E66060;">去完成</navigator>
			</view>
			<view class=" fs24 mb5">有效间推{{info.need_indirectly_num}}人</view>
			<view class="flex a-center">
				<view class="w300 mr15" style="height: 3px; background-color: #E66060;position: relative;">
					<view :style="'width:'+left2+'%'" class="scheduleColor"></view>
					<view :style="'left:'+left2+'%'"  class="schedule"></view>
				</view>
				<text class="flex-item fs22">{{info.indirectly_num}}/{{info.need_indirectly_num}}</text>
				<navigator url="/pages/my/qrcode/qrcode" class="plr20 radius30 fs22 text-white h30 flex a-center" style="background-color: #E66060;">去完成</navigator>
			</view>
			
		</view>
		
		
		<view v-if="equitylist[1].isHover" class="bg-white ptb30 plr30">
			<view class="fw600 fs28 mb20">
				做任务去升级
				<text class="fw300">（任意满足一条件即可升级）</text>
			</view>
			<!-- <view class="fw600 fs24 mb5">条件一</view> -->
			<view class=" fs24 mb5">有效直推{{info.need_vip_directly_num}}个VIP</view>
			<view class="flex a-center">
				<view class="w300 mr15" style="height: 3px; background-color: #E66060;position: relative;">
					<view :style="'width:'+info.vip_directly_num/info.need_vip_directly_num*100+'%'" class="scheduleColor"></view>
					<view :style="'left:'+info.vip_directly_num/info.need_vip_directly_num*100+'%'" class="schedule"></view>
				</view>
				<text class="flex-item fs22">{{info.vip_directly_num}}/{{info.need_vip_directly_num}}</text>
				<navigator url="/pages/my/qrcode/qrcode" class="plr20 radius30 fs22 text-white h30 flex a-center" style="background-color: #E66060;">去完成</navigator>
			</view>
			<view class=" fs24 mb5">团队总订单{{info.need_team_order_num}}单</view>
			<view class="flex a-center">
				<view class="w300 mr15" style="height: 3px; background-color: #E66060;position: relative;">
					<view :style="'width:'+info.team_order_num/info.need_team_order_num*100+'%'" class="scheduleColor"></view>
					<view :style="'left:'+info.team_order_num/info.need_team_order_num*100+'%'"  class="schedule"></view>
				</view>
				<text class="flex-item fs22">{{info.team_order_num}}/{{info.need_team_order_num}}</text>
				<navigator url="/pages/my/qrcode/qrcode" class="plr20 radius30 fs22 text-white h30 flex a-center" style="background-color: #E66060;">去完成</navigator>
			</view>
			
			<view class=" fs24 mb5">个人累计收益{{info.need_user_income}}元</view>
			<view class="flex a-center">
				<view class="w300 mr15" style="height: 3px; background-color: #E66060;position: relative;">
					<view :style="'width:'+info.user_income/info.need_user_income*100+'%'" class="scheduleColor"></view>
					<view :style="'left:'+info.user_income/info.need_user_income*100+'%'"  class="schedule"></view>
				</view>
				<text class="flex-item fs22">{{info.user_income}}/{{info.need_user_income}}</text>
				<navigator url="/pages/my/qrcode/qrcode" class="plr20 radius30 fs22 text-white h30 flex a-center" style="background-color: #E66060;">去完成</navigator>
			</view>
			
		</view>
	</page>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {
			info: {},
			equitylist: [
				{
					title: 'VIP',
					text: '升级到VIP需要完成以下任务',
					isHover: true
				},
				{
					title: '合伙人',
					text: '升级到合伙人需要完成以下任务',
					isHover: false
				}
			]
		};
	},
	computed: {
		...mapState({
			
			userInfo: state => state.user.userInfo
		}),
		left1() {
			return  this.info.directly_num/this.info.need_directly_num * 100
		},
		left2() {
			return  this.info.indirectly_num/this.info.need_indirectly_num * 100
		}
	},
	onLoad() {
		this.getInfo(1)
	},
	methods: {
		isHover(num) {
			for (let i in this.equitylist) {
				this.equitylist[i].isHover = false;
			}
			this.equitylist[num].isHover = true;
			
			this.getInfo(num+1)
		},
		async getInfo(type) {
			const res = await this.post('/wap/RightCenter/info',{type:type})
			if(res.code==200) {
				this.info = res.data
			}
		}
	}
};
</script>

<style>
.hover {
	background-color: #000000;
	color: #ffffff;
}
.schedule {
	width: 1px;
	height: 5px;
	position: absolute;
	left: 15%;
	top: -1px;
	background-color: red;
}
.scheduleColor{
	width: 15%;
	height: 3px;
	background-color: red;
}
</style>
