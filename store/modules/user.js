import {post,get} from '@/utils/request.js'
export default {
	state:{
		// 登录状态
		loginStatus:false,
		// token
		token:null,
		// 用户信息
		userInfo:{},
		commission: {},
		integral: {}
	},
	mutations:{
		// 初始化登录状态
		initUser(state, data){
			// console.log(data)
			state.userInfo = data
			uni.setStorageSync('userInfo',JSON.stringify(data))
		},
		// 修改用户资料时更新userInfo
		updataUser(state, data) {
			state.userInfo.avatar = data.avatar
			state.userInfo.nickName = data.nickName
		},
		// 登录
		vlogin(state,data){
			state.loginStatus = true
			state.token = data
			// 持久化存储
			uni.setStorageSync('token',data)
		},
		// 退出登录
		vlogout(state){
			state.loginStatus = false
			state.token = null
			uni.removeStorageSync('token')
		},
		initCommission(state, data) {
			state.commission = data
		},
		initIntegral(state, data) {
			state.integral = data
		}
	},
	actions: {
		updateUserInfo({state,commit}){
			post('/wap/Cis/userInfo').then(res => {
				commit('initUser',res.data.user_info)
			})
		},
	}
}