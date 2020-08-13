export default {
	methods: {
		// 定位城市
		getLocation(){
			let me = this
			uni.getLocation({
				geocode: true,
			    type: 'wgs84',
			    success: function (res) {
			        console.log('当前位置的经度：' + res.longitude);
			        console.log('当前位置的纬度：' + res.latitude);
			        console.log('当前城市：' + res.address.city);
					me.resetLocation(res)
			    },
				fail: function (res) {
					console.log(res)
				}
			});
		},
		// 获取用户基本信息
		async getUserInfo() {
			const res = await this.post('/wap/Cis/userInfo');
			if (res.code == 200) {
				this.initUser(res.data.user_info);
			}
		},
		// 获取导航栏分类（首页、云合商圈） action：1.首页导航栏   2.云合商圈（线下门店）
		async getHomeCategory() {
			const res = await this.post('/wap/Bases/Category',{action:1});
			if (res.code == 200) {
				this.initHomeCategory(res.data.category)
			}
		},
		async getBusinessCategory() {
			const res = await this.post('/wap/Bases/Category',{action:2});
			if (res.code == 200) {
				this.initBusinessCategory(res.data.category)
			}
		},
	}
}