import Config from './config.js'
import store from "../store/index.js"
// 200：无异常   4005要重新登录
function logout(res) {
	if(res.data.code == '4005') {
		uni.removeStorageSync('token')
		uni.showToast({
			title: res.data.msg,
			icon: 'none',
			duration: 2000
		})
		return
	}
}

function request(url, options) {
	var method = options.method || 'GET';
	// console.log(TOKEN)
	var data = {}
	const token = uni.getStorageSync('token');
	data = options.data;
	// console.log(data)
	let baseUrl
	// #ifndef H5
	     baseUrl = Config.http + Config.hostName
	// #endif
	// #ifdef H5
		 if(process.env.NODE_ENV === 'development'){
		     baseUrl = ''
		 }else{
		     baseUrl = Config.http + Config.hostName
		 }
	// #endif
	

	return new Promise((resolve, rej) => {
		uni.request({
			url: baseUrl + url,
			method: method,
			data: data,
			header: {
				'content-type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
				'Authorization': token
			},
			success: res => {
				if(res.statusCode.toString().charAt(0) !== '2') {}
				
				if(!res.data.code) return
				if(res.data.code != 200) {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 1500
					})
				}
				if(res.data.code == 4005) {
					logout(res)
				}
				resolve(res.data)
			
			},
			fail: res => {
				console.log(res)
				uni.showModal({
					showCancel: false,
					title: '提示',
					content: '请稍后重试'
				})
				return rej(res)
			},
			complete: res => {
			}
		});
	})
}


export function post(url, data = {}) {
	return request(url, {
		method: 'POST',
		data
	})
}

export function get(url, data = {}) {
	return request(url, {
		method: 'GET',
		data
	})
}

export function put(url, data = {}) {
	return request(url, {
		method: 'PUT',
		data
	})
}
export function _delete(url, data = {}) {
	return request(url, {
		method: 'DELETE',
		data
	})
}
