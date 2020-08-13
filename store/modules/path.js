import {post} from '@/utils/request.js'
export default {
	state:{
		list:[],
		selectPath: null
	},
	getters:{
		// 获取默认地址
		defaultPath:(state)=>{
			let defaultPath = state.list.filter(v=> v.is_default);
			return  defaultPath[0]
		},
		showPath: (state) => {
			return state.selectPath?state.selectPath: state.list.filter(v=> v.is_default)[0];
		}
	},
	mutations:{
		// 下单选中收货地址
		selectPath(state, index) {
			state.selectPath = state.list[index]
		},
		// 覆盖收货地址
		updatePathList(state, list){
			state.list = list;
		},
		// 创建收货地址
		createPath(state,item){
			state.list.unshift(item)
		},
		// 删除收货地址
		delPath(state,index){
			state.list.splice(index,1)
		},
		// 修改收货地址
		updatePath(state,{index,item}){
			for (let key in item) {
				state.list[index][key] = item[key]
			}
		},
		// 取消默认地址
		removeDefault(state){
			state.list.forEach((v)=>{
				if (v.isDefault) {
					v.isDefault = false
				}
			})
		}
	},
	actions:{
		// 更新购物车列表
		updatePathList({
			state,
			commit
		}) {
			post('/wap/UserAddress/addressList').then(res => {
				commit('updatePathList', res.data.list)
			})
		},
		createPathAction({commit},item){
			if (item.isDefault) {
				commit('removeDefault');
			}
			commit('createPath',item)
		}
	}
}