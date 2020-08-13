import Vue from "vue"
import Vuex from "vuex"

import cart from "@/store/modules/cart.js"
import path from "@/store/modules/path.js"
import user from "@/store/modules/user.js"
import category from "@/store/modules/category.js"
import sku from "@/store/modules/sku.js"
import Config from '@/utils/config.js'

Vue.use(Vuex)
let clearTime;
export default new Vuex.Store({
	state:{
		// 网络图片地址
		PageCur: 'home',
		Refresh: false,
		loadingShow: false,
		Location: '',
	},
	mutations: {
		resetLocation(state,res) {
			console.log(res)
			state.Location = res
		},
		initNav(state, name) {
			if(!uni.getStorageSync('PageCur')) {
				uni.setStorageSync('PageCur', 'home')
			}
			state.PageCur = uni.getStorageSync('PageCur')
		},
		NavChange(state, name) {
			state.PageCur = name
			uni.setStorageSync('PageCur', name)
		},
		refreshChange(state, b) {
			state.Refresh = b
			// console.log(state.Refresh)
		},
		setLoadingShow(state, data) {
			if (state.loadingShow) {
				clearTime && clearTimeout(clearTime);
				clearTime = setTimeout(function() {
					state.loadingShow = data;
				}, 300);
			} else {
				state.loadingShow = data;
			}
		},
	},
	modules:{
		cart,
		path,
		user,
		category,
		sku
	}
})