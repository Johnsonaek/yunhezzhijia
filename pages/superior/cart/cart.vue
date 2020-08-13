<template>
	<view>
		<page  title="购物车"  @scrolltolower="Scrolltolower">
			<view  class="text-gray" slot="right" @click="toggleEdit">
				<text v-if="isEdit">完成</text>
				<text v-else>管理</text>
			</view>
			<view class="loading ptb30" v-if="!loaded"></view>
			<empty mode="cart" text="暂无商品" v-if="cartList.length === 0 && loaded"></empty>
			<view class="qui-cells" v-for="(item, index) in cartList" :key="index">
				
				<view class="qui-cell mb20">
					<radio @click="updateIsCheck(index, item)" :checked="ntos(item.is_selected)" color="#F82840" style="transform: scale(0.7);" value="" />
					<image @click="goto('/pages/home/shop-deetails/shop-deetails?id='+item.goods.id)" class="block ml10 wh200 radius12" :src="item.original_img"></image>
					<view class="cell-bd ml20">
						<view class="flex a-center">
							<view  @click="goto('/pages/home/shop-deetails/shop-deetails?id='+item.id)" class="flex-item line2">{{ item.goods_name }}</view>
						</view>
						<view class="mt10" v-if="item.mall_type == 2">
							<text class="bg-red light plr10 fs22 radius10 ptb5">消费券商品</text>
						</view>
						<view class="mt10" v-if="item.mall_type == 3" >
							<text class="bg-red light plr10 fs22 radius10 ptb5">鼓励金商品</text>
						</view>
						<view class="fs24 text-muted mt10 flex">
							<view class="flex-item">
								<text v-if="item.spec_key">{{ item.spec_key }}</text>
							</view>
							<view class="ml30"><view @click="doDelete({ id: item.id, index: index })" class="cuIcon-delete fs40 text-default"></view></view>
						</view>
						<view class="fs30 flex mt20">
							<view class="flex-item text-red fw600">￥{{ item.sell_price }}</view>
							<view class=""><uni-number-box :value="item.number" min="1" @change="changeNum($event, item, index)"></uni-number-box></view>
						</view>
					</view>
				</view>
			</view>

			<loading-more nomore-text="我是有底线的" :nomore="nomore" :list="cartList"></loading-more>
			<!-- 底部 -->
			<view v-if="cartList.length==0"></view>
			  <view slot="bottom" v-else>
				<view class="bg-white flex">
					<view @click="updateAllIsCheck()" class="a-center flex  pl20">
						<radio :checked="checkedAll" :disabled="disableSelectAll" color="#F82840" style="transform: scale(0.7);" />
						<text class="ml0 fs24">全选</text>
					</view>
					<view class="flex-item tr flex flex-column j-center mr30">
						<view class="fs24" v-if="!isEdit">
							<view>合计：<text class="text-red">{{ totalPrice }}</text></view>
							<view v-if="discountedPrice != totalPrice">折后价：<text class="text-red">{{ discountedPrice }}</text></view>
						</view>
					</view>
					<view class="h100 w180 flex aj-center fs30">
						<view @click="doDelete({})" class="qui-btn h70 small round mr20" v-if="isEdit">删除</view>
						<view @click="submitorder"  v-else class="qui-btn h70 small round mr20" >结算</view>
					</view>
				</view>
			</view>
		</page>
	</view>
</template>

<script>
import pagination from '@/common/mixin/pagination.js';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
export default {
	mixins: [pagination],
	data() {
		return {
			getUrl: '/wap/UserCart/cartList',
			isEdit: false,
			autoLoad: true,
			shopId:'',
			setting:{}
		};
	},
	created() {
		
	},
	onShow() {
		this.getSetting()
	},
	computed: {
		...mapState({
			PageCur: 'PageCur',
			cartList: state => state.cart.cartList,
			selectedList: state => state.cart.selectedList
		}),
		...mapGetters(['checkedAll', 'totalPrice','discountedPrice','disableSelectAll']),
		ntos(val) {
			return function(val) {
				if (val) {
					return true;
				} else {
					return false;
				}
			};
		}
	},
	methods: {
		...mapActions(['doDelete', 'doSelectAll', 'doShowPopup', 'updateCartList']),
		...mapMutations(['NavChange', 'selectAll', 'selectItem', 'initCartList', 'unSelectAll', 'setCurrent','initSetting']),
		
		submitorder(){
			
			if(this.selectedList.length==0){
				uni.showToast({
					title:'您还没有选择商品哦',
					icon:'none'
				})
			}else if(this.selectedList.length>0){
				uni.navigateTo({
					url:'/pages/superior/confirm-order/confirm-order?type=2'
				})
			}
		},
		getListResult(items) {
			this.list = [...this.list, ...items];
			// console.log(this.list)
			this.initCartList(this.list);
		},
		async updateIsCheck(index, item) {
			
			let res = await this.post('/wap/UserCart/cartCheck', {
				is_selected: !item.is_selected,
				id: item.id
			});
			item.is_selected = !item.is_selected;
			this.selectItem(index);
		},
		changeNum(e, item, index) {
			this.shopId=item.goodsId
			// console.log(item);
			if (item.cartNum === e) return;
			this.post('/wap/UserCart/goodsNumChange', {
				number: Number(e),
				id: item.id
			}).then(res => {
				item.number = Number(e);
			});
		},
		async updateAllIsCheck() {
			this.$store.commit('setLoadingShow', true)
			let res = await this.post('/wap/UserCart/cartCheck', {
				is_selected: !this.checkedAll,
				checkAll: true
			});
			this.$store.commit('setLoadingShow', false)
			this.doSelectAll();
		},
		toggleEdit() {
			this.isEdit = !this.isEdit;
		},
		async getSetting() {
			const res = await this.post('/wap/MallOrder/userMallSetting');
			if(res.code == 200) {
				console.log(typeof res.data.coupon_deduction_rate)
				this.initSetting(res.data)
			}
		},
	}
};
</script>

<style lang="scss">
page {
	background-color: #f3f3f3;
}
.btn {
	width: 100%;
	position: fixed;
	bottom: 7%;
}
</style>
