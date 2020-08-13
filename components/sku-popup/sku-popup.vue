<template>
	<uni-popup ref="skuPopup" type="bottom">
		<view class="bg-white rbox">
			<view @tap="close" class="cuIcon-roundclose abs absrt fs40 mt30 mr30 fs40"></view>
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="cell-hd w180">
						<view class="img1x1 radius12"><image :src="currentSelect.image" mode=""></image></view>
					</view>
					<view class="cell-bd">
						<!-- <view class="fs32 line2 mr50">{{ currentSelect.name }}</view> -->
						<view v-if="currentSelect.price" class="text-red fs36 price">{{ currentSelect.price }}</view>
						<view v-else class="text-red fs36 price">{{minMaxPrice}}</view>
						
						<view class="fs24 text-muted mt10">库存{{currentSelect.stock}}件</view>
						<view v-if="specifications.length>0" class="fs28 mt20">{{ subText }}</view>
					</view>
				</view>
				<scroll-view scroll-y="true" style="height:400rpx;">
					<view class="product-box">
						<view class="product-content">
							<view class="product-delcom" v-for="(ProductItem, n) in specifications" :key="n">
								<view class="text-gray">{{ ProductItem.name }}</view>
								<view class="product-footerlist">
									<view
										class="item"
										v-for="(oItem, index) in ProductItem.item"
										:key="index"
										v-on:click="specificationBtn(oItem, n, index)"
										v-bind:class="[oItem.isShow ? '' : 'noneActive', subIndex[n] == index ? 'productActive' : '']"
									>
										{{ oItem.name }}
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="flex plr30">
					<view class="cell-bd"><view class="fs28 mb20 text-gray">购买数量</view></view>
					<view><uni-number-box @change="changeQuantity" :value="num" :min="1"></uni-number-box></view>
				</view>
			</view>
			<view class="flex plr30 ptb30">
				<view @click="confirm" data-type="addCart"  class="flex-item h90 flex aj-center text-white" style="background-color: #FD8694; border-radius: 40px 0 0 40px;">
					加入购物车
				</view>
				<view @click="confirm" data-type="nowBuy" class="flex-item h90 flex aj-center bg-theme" style="border-radius:0 40px 40px 0 ;">
					立即购买
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue';
export default {
	components: {
		uniPopup,
		uniNumberBox
	},
	props: {
		btnClass: {
			type: String,
			default: 'bg-theme'
		},
		btnText: {
			type: String,
			default: '确定'
		}
	},
	computed: {
		...mapState({
			minMaxPrice: state => state.sku.minMaxPrice,
			detailData: state => state.sku.detailData,
			currentSelect: state => state.sku.currentSelect,
			specifications: state => state.sku.specifications,
			difference: state => state.sku.difference,
			subText: state => state.sku.subText
		})
	},
	data() {
		return {
			spec_key: 0,
			id: 0,
			num:1,
			selectGoods: {},
			selectArr: [],
			shopItemInfo: {},
			subIndex: [],
			selected: false
		};
	},

	methods: {
		...mapMutations(['setText','setCurrent']),
		specificationBtn: function(item, n, index) {
			console.log(item)
			var self = this;
			if (self.selectArr[n] != item) {
				self.selectArr[n] = item;
				self.subIndex[n] = index;
			} else {
				self.selectArr[n] = '';
				self.subIndex[n] = -1; //去掉选中的颜色
			}
			self.checkItem();
		},
		checkItem: function() {
			var self = this;
			var option = this.specifications;
			// console.log(option)
			var result = []; //定义数组储存被选中的值
			for (var i in option) {
				result[i] = self.selectArr[i] ? self.selectArr[i] : '';
			}
			// console.log(result)
			for (var i in option) {
				var last = result[i]; //把选中的值存放到字符串last去
				for (var k in option[i].item) {
					result[i] = option[i].item[k]; //赋值，存在直接覆盖，不存在往里面添加name值
					// result[i] = option[i].item[k].id; //赋值，存在直接覆盖，不存在往里面添加name值
					option[i].item[k].isShow = self.isMay(result); //在数据里面添加字段isShow来判断是否可以选择
				}
				result[i] = last; //还原，目的是记录点下去那个值，避免下一次执行循环时被覆盖
			}
			let text = '';
			
			// 计算出未选择完整时提示文字
			for (let i = 0; i < result.length; i++) {
				if (result[i] == '') {
					this.selected = false
					text += this.specifications[i].name + '-';
				}
			}
			
			text = '请选择: ' + text.substring(0,text.length-1);
			this.setText(text)
			let key = result.map(v => v.id).join('_')
			this.spec_key = key || ''
			let key_name = result.map(v => v.name).join('-')
			// 选择完整了
			if (this.shopItemInfo[key]) {
				this.selected = true
				text = '已选: ' + key_name;
				this.setText(text)
				this.id = this.shopItemInfo[key].goods_id
				this.setCurrent({
					price: this.shopItemInfo[key].s_price,
					image: this.shopItemInfo[key].spec_img,
					stock: this.shopItemInfo[key].store_count,
				})
				this.selectGoods = this.shopItemInfo[key];
			} else {
				// 如果没选完规格 就显示detail 外面的图片，价格，总库存
				this.id = this.detailData.goods_id
				this.setCurrent({
					price: this.detailData.sell_price,
					image: this.detailData.original_img,
					stock: this.detailData.store_count,
				})
			}
			self.$forceUpdate(); //重绘
		},
		isMay: function(res) {
			let key = res.map(v => v.id).join('_')
			console.log(key)
			for (var i in res) {
				
				if (res[i] == '') {
					return true; //如果数组里有为空的值，那直接返回true
				}
			}
			
			if (!this.shopItemInfo[key]) return;
			return this.shopItemInfo[key].store_count == 0 ? true : true; //匹配选中的数据的库存，若不为空返回true反之返回false
		},
		open() {
		
			for (var i in this.difference) {
				
				this.shopItemInfo[this.difference[i].key] = this.difference[i]; //修改数据结构格式，改成键值对的方式，以方便和选中之后的值进行匹配		
				
			}
			// console.log(this.shopItemInfo)
			this.checkItem();
			this.$refs['skuPopup'].open();
		},
		close() {
			this.setText('')
			this.$refs['skuPopup'].close();
		},
		changeQuantity(e) {
			this.num = Number(e)
		},
		confirm(e) {
			
	
			let btnType = e.currentTarget.dataset.type
			if(this.difference.length > 0){
				if(!this.selected) {
					uni.showToast({
						title: '请选择商品属性',
						icon: 'none'
					})
					return
				}
			}
			
			this.close();
			
			this.$emit('confirm', {
				id: this.id,
				num: this.num,
				spec_key: this.spec_key,
				btnType: btnType
			})
		},
		setDefaultSelect(name,quantity){
			let me = this
			let rname = name.split('-')
			me.num = quantity
			me.selectArr = rname
			let option = me.specifications
			me.subIndex = []
			for(let i in rname) {
				let index = option[i].item.findIndex(v => {
					return v.name == rname[i]
				})
				this.subIndex.push(index)
			}
		    me.checkItem();
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
