export default {
	state:{
		detailData: {},
		currentSelect: {
			price:0,
			image:'',
			stock:''
		},
		subText: '',
		difference:[], // sku 组合起来的多少条商品
		specifications: [] // suk 选择分组&按钮数组
	},
	getters:{
		minPrice:(state)=>{		
			let minPrice = Math.min.apply(Math, state.difference.map(v => v.s_price))
			return  minPrice
		},
		maxPrice:(state)=>{
			let maxPrice = Math.max.apply(Math, state.difference.map(v => v.s_price))
			return maxPrice
		},
		// minMaxPrice: (state) => {
		// 	let minMaxPrice = getters.minPrice == getters.maxPrice ? getters.minPrice : getters.minPrice + '-' + getters.maxPrice,
		// 	return minMaxPrice
		// }
	},
	mutations:{
		setDetailToVuex(state, obj) {
			state.detailData = obj
		},
		setTags(state, arr) {
			// console.log(arr)
			state.specifications = arr
		},
		setRows(state, arr) {
			state.difference = arr || []
		},
		setCurrent(state, {price,image,stock}) {
			state.currentSelect.price = price
			state.currentSelect.image = image
			state.currentSelect.stock = stock
		},
		setText(state, str) {
			state.subText = str
		}
	}
}