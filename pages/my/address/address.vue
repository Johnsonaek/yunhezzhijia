<template>
	<page title="收货地址" @scrolltolower="Scrolltolower">
		<view @click="goto('/pages/my/add-address/add-address')" slot="right" class="fs28">添加地址</view>
		<empty mode="address" text="暂时收货地址" v-if="pathList.length === 0 && loaded"></empty>
		<view class="loading ptb30" v-if="!loaded"></view>
		<view class="content b-t">
			<view class="list b-b mtb20" v-for="(item, index) in pathList" :key="index">
				<!-- <label class="radio mr20">
					<radio disabled color="#39B54A" style="transform: scale(0.7);" value="" />
					<text></text>
				</label> -->
				<view class="wrapper" @click="clickItem(index)">
					<view class="u-box fw600">
						<text class="name">{{ item.consignee }}</text>
						<text class="mobile">{{ item.mobile }}</text>
					</view>
					<view class="address-box mt10">
						<text v-if="item.is_default" class="tag">默认</text>
						<text class="address fs26 text-gray">{{ item.whole_address_name }}</text>
					</view>
				</view>
				<navigator :url="'/pages/my/add-address/add-address?id=' + item.id + '&type=edit'"><text class="cuIcon-edit fs50"></text></navigator>
			</view>
		</view>
		 <loading-more nomore-text="我是有底线的" :nomore="nomore" :list="pathList"></loading-more>
	</page>
</template>

<script>
import pagination from '@/common/mixin/pagination.js';
import { mapState, mapMutations } from 'vuex';
export default {
	mixins: [pagination],
	data() {
		return {
			getUrl: '/wap/UserAddress/addressList',
			autoLoad: false,
			type: '',
			addressList: []
		};
	},
	onShow() {
		// this.getaddresses()
	},
	onLoad(e) {
		this.from = e.from
		this.type = e.type;
		this.getListInit();
	},
	computed:{
		...mapState({
			pathList: state => state.path.list
		})
	},
	methods: {
		...mapMutations(['updatePathList','selectPath']),
		clickItem(index) {
			if(this.from == 'order') {
				this.selectPath(index)
				uni.navigateBack({
					delta:1
				})
			}
		},
		getListResult(items) {
			this.list = [...this.list, ...items];
			this.updatePathList(this.list);
		},
		add(item) {
			uni.setStorageSync('add', item);
			// console.log(item)
			uni.navigateTo({
				url: '/pages/home/submitorder/submitorder'
			});
		}
	}
};
</script>

<style lang="scss">
page {
	padding-bottom: 120upx;
}
.content {
	position: relative;
}
.list {
	display: flex;
	align-items: center;
	padding: 20upx 30upx;
	background: #fff;
	position: relative;
}
.wrapper {
	display: flex;
	flex-direction: column;
	flex: 1;
}
.address-box {
	display: flex;
	align-items: center;
	.tag {
		font-size: 24upx;
		margin-right: 10upx;
		background: #fffafb;
		border: 1px solid #ffb4c7;
		border-radius: 4upx;
		padding: 4upx 10upx;
		line-height: 1;
	}
	.address {
		font-size: 30upx;
	}
}
.u-box {
	font-size: 28upx;
	margin-top: 16upx;
	.name {
		margin-right: 30upx;
	}
}
.icon-bianji {
	display: flex;
	align-items: center;
	height: 80upx;
	font-size: 40upx;
	padding-left: 30upx;
}

.add-btn {
	position: fixed;
	left: 30upx;
	right: 30upx;
	bottom: 16upx;
	z-index: 95;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 690upx;
	height: 80upx;
	font-size: 32upx;
	color: #fff;
	/* background-color: $base-color; */
	border-radius: 10upx;
	box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
}
</style>
