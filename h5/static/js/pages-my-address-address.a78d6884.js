(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-address-address"],{"0cc5":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page",{attrs:{title:"收货地址"}},[a("v-uni-view",{staticClass:"fs28",attrs:{slot:"right"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goto("/pages/my/add-address/add-address")}},slot:"right"},[t._v("添加地址")]),0===t.pathList.length&&t.loaded?a("empty"):t._e(),t.loaded?t._e():a("v-uni-view",{staticClass:"loading ptb30"}),a("v-uni-view",{staticClass:"content b-t"},t._l(t.pathList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"list b-b mtb20"},[a("v-uni-view",{staticClass:"wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(i)}}},[a("v-uni-view",{staticClass:"u-box fw600"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(e.consignee))]),a("v-uni-text",{staticClass:"mobile"},[t._v(t._s(e.mobile))])],1),a("v-uni-view",{staticClass:"address-box"},[a("v-uni-text",{staticClass:"address"},[t._v(t._s(e.address))])],1)],1),a("v-uni-navigator",{attrs:{url:"/pages/my/add-address/add-address?id="+e.id+"&type=edit"}},[a("v-uni-text",{staticClass:"cuIcon-edit fs50"})],1)],1)})),1),a("loading-more",{attrs:{"nomore-text":"我是有底线的",nomore:t.nomore,list:t.pathList}})],1)},r=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}))},"2b9b":function(t,e,a){"use strict";a.r(e);var i=a("0cc5"),n=a("fc50");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("d541");var s,o=a("f0c5"),d=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"1e721da2",null,!1,i["a"],s);e["default"]=d.exports},"5f8a":function(t,e,a){"use strict";var i=a("ee27");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("d0ff")),r=i(a("f3f3")),s=i(a("7c19")),o=a("2f62"),d={mixins:[s.default],data:function(){return{getUrl:"/wap/UserAddress/addressList",autoLoad:!1,type:"",addressList:[]}},onShow:function(){},onLoad:function(t){this.from=t.from,this.type=t.type,this.getListInit()},computed:(0,r.default)({},(0,o.mapState)({pathList:function(t){return t.path.list}})),methods:(0,r.default)({},(0,o.mapMutations)(["updatePathList","selectPath"]),{clickItem:function(t){"order"==this.from&&(this.selectPath(t),uni.navigateBack({delta:1}))},getListResult:function(t){this.list=[].concat((0,n.default)(this.list),(0,n.default)(t)),this.updatePathList(this.list)},add:function(t){uni.setStorageSync("add",t),uni.navigateTo({url:"/pages/home/submitorder/submitorder"})}})};e.default=d},"7c19":function(t,e,a){"use strict";var i=a("ee27");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("c964")),r=i(a("d0ff")),s={data:function(){return{getUrl:"",listName:"list",list:[],loaded:!1,currentPage:0,nomore:!1,totalCount:0,autoLoad:!0,otherData:null,params:{currentPage:1,pageSize:10}}},onLoad:function(){this.autoLoad&&this.getListInit()},methods:{Scrolltolower:function(){this.loadMore()},loadMore:function(){this.params.currentPage++,this.params.currentPage>=this.totalCount?this.nomore=!0:this.getList()},getListInit:function(){this.list=[],this.currentPage=0,this.getList()},getListResult:function(t){this.list=[].concat((0,r.default)(this.list),(0,r.default)(t))},getOther:function(t){this.otherData=t},getList:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.getUrl){e.next=2;break}return e.abrupt("return");case 2:return t.loaded=!1,e.prev=3,e.next=6,t.post(t.getUrl,t.params);case 6:a=e.sent,t.totalCount=a.data.pageCount,t.getListResult(a.data[t.listName]),t.loaded=!0,e.next=14;break;case 12:e.prev=12,e.t0=e["catch"](3);case 14:case"end":return e.stop()}}),e,null,[[3,12]])})))()}}};e.default=s},"8ae8":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-1e721da2]{padding-bottom:%?120?%}.content[data-v-1e721da2]{position:relative}.list[data-v-1e721da2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?30?%;background:#fff;position:relative}.wrapper[data-v-1e721da2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}.address-box[data-v-1e721da2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-box .tag[data-v-1e721da2]{font-size:%?24?%;margin-right:%?10?%;background:#fffafb;border:1px solid #ffb4c7;border-radius:%?4?%;padding:%?4?% %?10?%;line-height:1}.address-box .address[data-v-1e721da2]{font-size:%?30?%}.u-box[data-v-1e721da2]{font-size:%?28?%;margin-top:%?16?%}.u-box .name[data-v-1e721da2]{margin-right:%?30?%}.icon-bianji[data-v-1e721da2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;font-size:%?40?%;padding-left:%?30?%}.add-btn[data-v-1e721da2]{position:fixed;left:%?30?%;right:%?30?%;bottom:%?16?%;z-index:95;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?690?%;height:%?80?%;font-size:%?32?%;color:#fff;\r\n  /* background-color: $base-color; */border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}',""]),t.exports=e},af0a:function(t,e,a){var i=a("8ae8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("5b48e2e6",i,!0,{sourceMap:!1,shadowMode:!1})},d0ff:function(t,e,a){"use strict";a.r(e);var i=a("b680");function n(t){if(Array.isArray(t))return Object(i["a"])(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("e260"),a("d3b7"),a("3ca3"),a("ddb0");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var s=a("dde1");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t){return n(t)||r(t)||Object(s["a"])(t)||o()}a.d(e,"default",(function(){return d}))},d541:function(t,e,a){"use strict";var i=a("af0a"),n=a.n(i);n.a},fc50:function(t,e,a){"use strict";a.r(e);var i=a("5f8a"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a}}]);