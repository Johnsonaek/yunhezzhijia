import Vue from 'vue'
import Config from '@/utils/config'
import store from '@/store'
import moment from 'moment/moment'

const globalFilter = {
	i(value) { // 过滤图片
	    
		return (Config.imgUrl + value);
	},
	p(value) {
		var reg = /(\d{3})\d{4}(\d{4})/;
		var tel = value.replace(reg, "$1****$2")
		return tel
	},
	t(value) {
		let formatString = formatString || 'MM月DD日';
		    // return moment(value).format(formatString); // value可以是普通日期 20170723
		return moment.unix(value).format(formatString); // 这是时间戳转时间
	}
}

// 全局过滤器
Object.keys(globalFilter).forEach(k => Vue.filter(k, globalFilter[k]))

export default globalFilter
