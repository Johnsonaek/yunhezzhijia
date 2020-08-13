<template>
	<view>
		<page title="消息管理" @scrolltolower="Scrolltolower">
			<scroll-view slot="top" scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="index == TabCur ? 'text-red cur' : ''" v-for="(item, index) in tabBars" :key="index" @tap="tabSelect" :data-id="index"  :data-type="item.type">
						{{ item.name }}
					</view>
				</view>
			</scroll-view>
			<empty mode="message" v-if="list.length === 0 && loaded"></empty>
			<view class="loading ptb30" v-if="!loaded"></view>
			<view class="qui-card" v-for="(item,index) in list" :key="index">
				<view class="card-bd">
					<view class="fs28">{{item.title}}</view>
					<view class="text-gray mt10">{{item.content}}</view>
					<view class="text-muted mt10 fs22">{{item.created_at}}</view>
				</view>
			</view>
			<loading-more nomore-text="我是有底线的" :nomore="nomore" :list="list"></loading-more>
		</page>

		<!-- 系统通知 -->
		<!-- <view v-if="currentId == 1">
			<view class="head-user">
				<view class="user-left">
					
					<view class="user-top">
						<view class="come">苏宁接口升级通知，数据更新延迟</view>
						<view class="text">由于5月苏宁易购接口升级通知，数据更新延迟，
						导致苏宁结算延迟，下个月会全部统一进结算。</view>
						<view class="code">2020-04-17</view>
					</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import pagination from '@/common/mixin/pagination.js';
export default {
	mixins:[pagination],
	data() {
		return {
			TabCur: 0,
			scrollLeft: 0,
			tabBars: [
				{
					name: '我的消息',
					type:1
				},
				{
					name: '系统消息',
					type: 2
				}
			],
			getUrl: '/wap/PushRecord/recordList', // 需要分页的接口地址，
			autoLoad: false,
			showHeader: true,
			afterHeaderOpacity: 1, //不透明度
			headerPosition: 'fixed',
			headerTop: null,
			statusTop: null,
			nVueTitle: null,
			list: ['我的消息', '系统通知'],
			currentId: ''
			/* 控制被选中 */
		};
	},
	onLoad() {
		this.params.type = 1
		this.getListInit();
	},
	methods: {
		// 切换选项卡
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
			if (!this.loaded) return;
			this.params.type = Number(e.currentTarget.dataset.type);
			this.getListInit();
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: $uni-bg-color-grey;
}
.head-user {
	margin: 10upx 20upx;
	border-radius: 20upx;
	background-color: #ffffff;
	font-size: 24upx;
	color: #c0c0c0;

	.user-left {
		display: flex;
		margin-left: 20upx;
		padding-top: 20upx;

		.come {
			color: #000000;
			font-size: 28upx;
		}
		.text {
			font-weight: bold;
			width: 480upx;
		}
		.user-top {
			margin-left: 20upx;

			.code {
				margin-top: 5upx;
				margin-bottom: 20upx;
				color: #c0c0c0;
			}
		}

		image {
			border-radius: 50%;
			width: 80upx;
			height: 80upx;
		}
	}
}

.all {
	display: flex;
	background-color: #ffffff;
	.left {
		margin-left: 20upx;
		line-height: 80upx;
	}
	.center {
		display: flex;
		margin-left: 120upx;
		.scroll-container {
			line-height: 70upx;
			padding: 0upx 60upx;
			box-sizing: border-box;
			white-space: nowrap;
			text-align: center;
			&.active {
				display: inline-block;
				color: #f9024d;
				border-radius: 2upx;
			}
		}
	}
}
.bottom-border {
	margin: 0 auto;
	width: 90upx;
	height: 8upx;
	background: #ff4f52;
	border-radius: 5upx;
}
.status {
	width: 100%;
	height: 0;
	position: fixed;
	z-index: 10;
	background-color: #fff;
	top: 0;
	/*  #ifdef  APP-PLUS  */
	height: var(--status-bar-height); //覆盖样式
	/*  #endif  */
}
.header {
	width: 100%;
	height: 80upx;
	align-items: center;
	position: fixed;
	display: flex;
	top: 0;
	z-index: 10;
	background-color: $uni-bg-color;

	/*  #ifdef  APP-PLUS  */
	top: var(--status-bar-height);
	/*  #endif  */
	.icon-site {
		margin-right: 20upx;
	}
}
.place {
	width: 100%;
	background-color: $uni-bg-color-grey;
	height: 90upx;
	/*  #ifdef  APP-PLUS  */
	margin-top: var(--status-bar-height);
	/*  #endif  */
}
</style>
