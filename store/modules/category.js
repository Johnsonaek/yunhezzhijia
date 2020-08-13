import {post,get} from '@/utils/request.js'
export default {
	state: {
		homeCategory: [],
		businessCategory: [],
		svideoCategory: [],
		superiorCategory:[],
		currentIndex: 1
	},
	getters: {
		
	},
	mutations: {
		initHomeCategory(state, data){
			state.homeCategory = [...[{name: '精选'}], ...data]
		},
		initBusinessCategory(state, data){
			state.businessCategory = data
		},
		initSvideoCategory(state, data){
			state.svideoCategory = data
		},
		initSuperiorCategory(state, data){
			state.superiorCategory = data
		},
	},
	actions: {
		
	}
}
