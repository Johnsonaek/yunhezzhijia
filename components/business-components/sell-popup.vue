<template>
	<uni-popup ref="sellPopup" type="bottom">
		<view class="bg-white rbox">
			<view @tap="close" class="cuIcon-roundclose abs absrt fs40 mt30 mr30"></view>
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="cell-hd w180">
						<view class="img1x1 radius12"><image :src="detail.original_img" mode=""></image></view>
					</view>
					<view class="cell-bd">
						<view class="fs32 line3 mr50">{{detail.goods_name}}</view>
					</view>
				</view>
				<view class="qui-cells">
					<view class="qui-cell">
						<view class="cell-bd">推荐语</view>
					</view>
					<view class="qui-cell">
						<view class="cell-bd">
							<input v-model="remark" type="text" value="" placeholder="请输入推荐语" />
						</view>
					</view>
				</view>
				<view class="h24 bg-gray-muted"></view>
				<view class="qui-cells">
					<view class="qui-cell">
						<view class="cell-bd text-red">赚：￥0.24</view>
					</view>
					<view class="qui-cell">
						<view class="">
							加价（%）：
						</view>
						<view class="cell-bd border h60 flex a-center pl20 mr20">
							<input v-model="rate"  type="number" placeholder="" value="0" class="qui-input"/>
						</view>
						<view class="flex">
							<view :class="curBtn==0?'':'outline'" @click="minRate" class="qui-btn inline small w140">不加价</view>
							<view :class="curBtn==1?'':'outline'" @click="maxRate" class="qui-btn inline small  w140 ml20">加到最高</view>
						</view>
					</view>
				</view>
			</view>
			<view class="flex plr30 ptb30">
				<view @click="confirm" class="flex-item h90 flex aj-center bg-theme" style="border-radius:40px 40px 40px 40px;">
					上架转发
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue';
export default {
	components: {
		uniPopup,
		uniNumberBox
	},
	props: {
		detail: {
			type: Object
		},
		maxVal: {
			type: [Number,String],
			default: 10
		}
	},
	computed: {
		
	},
	data() {
		return {
			curBtn: 0,
			rate: 0,
			remark:'',
		};
	},

	methods: {
		open() {
			this.$refs['sellPopup'].open();
		},
		close() {
			this.$refs['sellPopup'].close();
		},
		confirm(res) {			
			this.close();
			this.$emit('confirm', {
				rate: this.rate,
				remark: this.remark
			})
		},
		// 不加价
		minRate() {
			this.curBtn = 0
			this.rate = 0
		},
		// 加到最高
		maxRate() {
			this.curBtn = 1
			this.rate = this.maxVal
		}
	}
};
</script>

<style lang="scss">
.product-box {
	width: 750rpx;
	display: block;
	margin: 0 auto;
}
.product-content {
	margin: 0 30rpx;
}
.product-delcom {
	color: #323232;
	font-size: 26rpx;
	border-bottom: 1px solid #eeeeee;
	padding: 30rpx 0;
}
.product-footerlist {
	margin-top: 10px;
	display: flex;
	flex-wrap: wrap;
}
.product-footerlist .item {
	transition: opacity 0s;
	margin-bottom: 10px;
	border: 1px solid var(--themeColor);
	border-radius: 5px;
	color: var(--themeColor);
	padding: 10rpx 10rpx;
	min-width: 120rpx;
	text-align: center;
	margin-right: 20rpx;
}
.product-footerlist .item.productActive {
	background-color: var(--themeColor);
	color: #fff;
	border: 1px solid var(--themeColor);
}
.product-footerlist .item.noneActive {
	background-color: #eee;
	opacity: 0.4;
	color: #000;
	border: 1px dashed var(--grayColor);
	pointer-events: none;
}

.rbox {
	border-top-left-radius: 36rpx;
	border-top-right-radius: 36rpx;
	overflow: hidden;
}
</style>
