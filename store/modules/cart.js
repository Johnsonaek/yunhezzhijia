import {
	post,
	get
} from '@/utils/request.js'
export default {
	state: {
		cartList: [],
		// 选中列表（存放选中的id）
		selectedList: [],
		cartDetail: {},
		setting: {}
	},
	getters: {
		
		// 判断是否全选
		checkedAll: (state) => {
			return state.cartList.length === state.selectedList.length
		},
		// 折后价
		discountedPrice: (state) => {
			var total = 0
			var max = 0
			state.cartList.forEach(v => {
				let i = state.selectedList.indexOf(v.id)
				if (i > -1) {
					// mall_type  user_coupon_amount(可用消费券全额)  user_incentive_amount（可用鼓励金金额）
				    if(v.mall_type == 2) {
						// 2消费券商品； coupon_deduction_rate (消费券商城抵扣比例)
						max += (v.sell_price * v.number) * state.setting.coupon_deduction_rate
			
						total += v.sell_price * v.number
					}
					else if(v.mall_type == 3) {
						// 2鼓励金商品；incentive_deduction_rate (鼓励金商城抵扣比例)
						max += (v.sell_price * v.number) * state.setting.incentive_deduction_rate
						total += v.sell_price * v.number
					} 
					else {
						// 1.普通商品；
						total += v.sell_price * v.number
					}
					
				}
			})
		    let totalAmout = state.setting.user_coupon_amount + state.setting.user_incentive_amount
			let result = totalAmout<max?total-totalAmout:total-max
			return result.toFixed(2)
		},
		// 合计
		totalPrice: (state) => {
			console.log(state.selectedList)
			var total = 0
			state.cartList.forEach(v => {
				let i = state.selectedList.indexOf(v.id)
				console.log(i)
				if (i > -1) {
					total += v.sell_price * v.number
				}
			})
			return total.toFixed(2)
		},
		// 禁用全选
		disableSelectAll: (state) => {
			return state.cartList.length === 0
		},
		// 购物车商品数量
		cartCount: (state) => {
			if (state.cartList.length <= 99) {
				return state.cartList.length
			}
			return '99+'
		},
		confirmCount: (state) => {
			return state.selectedList.length
		}

	},
	mutations: {
		initSetting(state, data) {
			state.setting = data
		},
		// 初始化list
		initCartList(state, list) {
		    // console.log(list)
			let newList = list.map(v => {
				return {
					id: v.id,
					goods_id: v.goods_id,
					goods_name: v.goods_name,
					number: v.number,
					sell_price: v.sell_price,
					original_img: v.original_img,
					is_selected: v.is_selected,
					mall_type: v.mall_type
				}
			})
			state.cartList = newList
			state.selectedList = []
			state.cartList.forEach((v) => {
				if (v.is_selected) {
					state.selectedList.push(v.id)
				}
			})
		},
		// 初始化购物详情
		initCartDetail(state, data) {
			state.cartDetail = data
		},
		// 选中/取消选中某个商品
		selectItem(state, index) {
			let id = state.cartList[index].id
			
			// let i = state.selectedList.findIndex(res => {
			// 	return res.id == id
			// })
			
			let i = state.selectedList.indexOf(id)
			
			// 之前是选中，取消选中
			if (i > -1) {
				// 取消当前商品选中状态
				state.cartList[index].isActive = false
				// 移除选中列表中的当前商品
				return state.selectedList.splice(i,1)
			}
			
			// 选中
			state.cartList[index].isActive = true
			state.selectedList.push(state.cartList[index].id)
		},
		// 全选
		selectAll(state) {
			state.selectedList = state.cartList.map(v => {
				// 设置选中状态
				v.is_selected = true
				return v.id
			})
		},
		// 取消全选
		unSelectAll(state) {
			state.cartList.forEach(v => {
				// 设置选中状态
				v.is_selected = false
			})
			state.selectedList = []
		},
		// 删除选中
		delGoods(state) {
			console.log('asdfaf')
			state.cartList = state.cartList.filter(v => {
				return state.selectedList.indexOf(v.id) === -1
			})
			// $U.updateCartBadge(state.list.length)
		},
		delGoodsOne(state, index) {
			console.log(index)
			state.cartList.splice(index, 1)
		},
		// 加入购物车
		addGoodsToCart(state, goods) {
			state.cartList.unshift(goods)
		},
		// 清空购物车
		clearCart(state) {
			state.cartList = []
			state.selectedList = []

		}
	},
	actions: {
		// 更新购物车列表
		updateCartList({
			state,
			commit
		}) {
			get('/api/services/public/CartItem/GetAll').then(res => {
				commit('initCartList', res.result)
			})
		},
		doSelectAll({
			commit,
			getters
		}) {
			getters.checkedAll ? commit('unSelectAll') : commit('selectAll')
		},
		doDelete({
			commit,
			state
		}, {
			id,
			index
		}) {
			
			uni.showModal({
				content: '是否删除选中',
				success: (res) => {
					if (res.confirm) {
						let ids = ''
						if(!id){
							state.selectedList.forEach(v => {
								ids += v
							})
							ids  = state.selectedList.join(',')
							console.log(ids)
							
						} else {
							ids = id
						}
						post('/wap/UserCart/cartDel', {
							ids: ids
						}).then(res => {
							if(!id){
								console.log('delGoods')
								commit('delGoods')
							} else {
								console.log('delGoodsOne')
								commit('delGoodsOne', index)
							}
							uni.showToast({
								title: '删除成功'
							});
						})
					}
				}
			});
		}
	}
}
