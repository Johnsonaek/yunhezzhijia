import Vue from 'vue'

//引入element ui
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
import store from "./store"
Vue.prototype.$store = store
import '@/common/mixin/mixin'
import globalFilter from '@/common/filter/filter'
Vue.prototype.i = globalFilter.i;

// 表单验证
import validate from '@/utils/ys-validate.js'
Vue.prototype.$validate = validate
// 网络请求
import {post, get, _delete, put} from '@/utils/request.js'
Vue.prototype.post = post
Vue.prototype.get = get
Vue.prototype._delete = _delete
Vue.prototype.put = put

import VueClipboard from 'vue-clipboard2' 
Vue.use(VueClipboard);

// Vue.use(ElementUI);



import Page from './components/page.vue'
Vue.component('page',Page)

import Empty from './components/empty.vue'
Vue.component('empty',Empty)

import LoadingMore from './components/loading-more.vue'
Vue.component('loadingMore',LoadingMore)

import cuCustom from './components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import qImage from './components/q-image.vue'
Vue.component('q-image',qImage)

import authPopup from './components/auth-popup/auth-popup.vue'
Vue.component('auth-popup',authPopup)

import qTitlebar from './components/q-titlebar.vue'
Vue.component('q-titlebar',qTitlebar)

import quiList from './components/qui-list.vue'
Vue.component('qui-list',quiList)

import publicModule from "@/components/public_module.vue";
Vue.component("public-module", publicModule);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
