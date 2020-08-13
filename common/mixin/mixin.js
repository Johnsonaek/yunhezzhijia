import Vue from 'vue'
import store from "@/store"
const globalMixin = {
	// eslint-disable-next-line
	install(Vue) {
		Vue.mixin({
			data() {
				return {
					unitText: '点劵'
				}
			},
			methods: {
				
				isLogin(bool = true) {
					var token = uni.getStorageSync('token');
					if (bool && !token) {
						uni.reLaunch({
							url: '/pages/login/login',
						})
					}
				},
				success(res, title, callback) {
					console.log(res)
					if (res.code == 200) {
						uni.showToast({
							icon: 'none',
							title: title ? title : res.msg
						})
						callback && callback()
					}
				},
				loadMore(refname) {
					this.$refs[refname].Scrolltolower()
				},
				apiSuccess(res, title, callback) {
					console.log(res)
					if (res.code == 200) {
						uni.showToast({
							icon: 'none',
							title: title ? title : res.msg
						})
						callback && callback()
					}
				},
				// 跳转哪一个Tab菜单页 name
				goTab(name) {
					this.$store.commit('NavChange', name)
					uni.setStorageSync('PageCur', name)
					uni.navigateTo({
						url: '/pages/index/index'
					})
				},
				goBack() {

					// #ifdef H5
					let canBack = true
					const pages = getCurrentPages()
					// 有可返回的页面则直接返回，uni.navigateBack默认返回失败之后会自动刷新页面 ，无法继续返回  
					if (pages.length > 1) {
						uni.navigateBack(1)
						return;
					}
					// vue router 可以返回uni.navigateBack失败的页面 但是会重新加载  
					let a = this.$router.go(-1)
					// router.go失败之后则重定向到首页  
					if (a == undefined) {
						uni.reLaunch({
							url: "/pages/index/index"
						})
					}
					return;
					// #endif  
					uni.navigateBack(1)
				},
				openUrl(url) {
					if(url == '') {
						uni.showToast({
							title: '链接不存在',
							icon: 'none'
						})
						return
					}
					// #ifdef APP-PLUS
					    plus.runtime.openURL(url);
					// #endif  
					// #ifdef H5
					    window.location.href = url
					// #endif  
				},
				openAuth(url, fn) {
					var token = uni.getStorageSync('token');
					if (!token) {
						// this.$refs.auth.open();
						uni.navigateTo({
							url: '/pages/login/login'
						})
						return
					}
					fn && fn()
					if (url && url == '') return
					uni.navigateTo({
						url: url
					})
				},
				openPopup(ref) {
					this.$refs[ref].open()
				},
				closePopup(ref) {
					this.$refs[ref].close()
				},
				goto(path) {
					uni.navigateTo({
						url: path
					});
				},
				doing() {
					uni.showToast({
						title: '功能开发中',
						icon: 'none'
					});
				},
				$uGetRect(selector, all) {
					return new Promise(resolve => {
						uni.createSelectorQuery().
						in(this)[all ? 'selectAll' : 'select'](selector)
							.boundingClientRect(rect => {
								if (all && Array.isArray(rect) && rect.length) {
									resolve(rect)
								}
								if (!all && rect) {
									resolve(rect)
								}
							})
							.exec()
					})
				}
			},
			filters: {
				// ...filter,
			},
			computed: {



			},
		})
	},
}

Vue.use(globalMixin)

export default globalMixin
