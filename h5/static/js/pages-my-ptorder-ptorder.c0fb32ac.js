(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-ptorder-ptorder"],{"06b7":function(t,e,a){"use strict";var i=a("2d61"),n=a.n(i);n.a},1311:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("page",{on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.Scrolltolower.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"mb5",staticStyle:{position:"relative"}},[a("v-uni-view",{staticClass:"arrow-l ml20",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"flex a-center j-center h100 bg-white"},t._l(t.teamlist,(function(e,i){return a("v-uni-view",{key:i,staticClass:"w140 h50 flex a-center j-center mlr5 fs24 radius30",class:{hover:e.teamActive},staticStyle:{color:"#FFFFFF","background-color":"#b3b3b3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.teamActive(i)}}},[t._v(t._s(e.title))])})),1)],1),a("v-uni-scroll-view",{staticClass:"bg-white nav mt24",attrs:{"scroll-x":!0}},[a("v-uni-view",{staticClass:"flex text-center"},t._l(t.tabBars,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item flex-sub",class:e.type==t.TabCur?"text-red cur":"",attrs:{"data-type":e.type,"data-id":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(e.name))])})),1)],1),0===t.list.length&&t.loaded?a("empty"):t._e(),t.loaded?t._e():a("v-uni-view",{staticClass:"loading ptb30"}),t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"qui-card panel mb24 mt24"},[a("v-uni-view",{staticClass:"card-hd bor-1px-b"},[a("v-uni-text",{staticClass:"text-muted fs24"},[t._v("订单编号："+t._s(e.orderSn))]),1==e.status?a("v-uni-text",{staticClass:"text-red fs24"},[t._v("待付款")]):t._e(),2==e.status?a("v-uni-text",{staticClass:"text-red fs24"},[t._v("已支付")]):t._e(),3==e.status?a("v-uni-text",{staticClass:"text-red fs24"},[t._v("待评价")]):t._e(),4==e.status?a("v-uni-text",{staticClass:"text-red fs24"},[t._v("已评价")]):t._e(),10==e.status?a("v-uni-text",{staticClass:"text-red fs24"},[t._v("已取消")]):t._e()],1),a("v-uni-navigator",{staticClass:"qui-cell border-none",attrs:{url:"/pages/shengtai/order-detail/order-detail?id="+e.order_number}},[a("v-uni-view",{staticClass:"mr20"},[a("q-image",{attrs:{imgwh:140,src:"/static/business/rangking/v2_qaxhld.jpg"}})],1),a("v-uni-view",{staticClass:"cell-bd"},[a("v-uni-view",{staticClass:"line2"},[t._v("烟台红富士苹果水果礼盒生")]),a("v-uni-view",{staticClass:"flex mt30"},[a("v-uni-view",{staticClass:"flex-item flex a-center"},[a("v-uni-text",{staticClass:"text-red price fs34 mr20"},[t._v("100")]),t._v("x 12")],1),a("v-uni-view",{staticClass:"text-red"},[t._v("+34")])],1)],1)],1),a("v-uni-view",{staticClass:"plr30 ptb20 tr bor-1px-t"},[0==e.status?a("v-uni-navigator",{staticClass:"qui-btn inline small outline",attrs:{url:"/pages/shengtai/order-detail/order-detail?id="+e.order_number}},[t._v("立即付款")]):t._e(),1==e.status?a("v-uni-view",{staticClass:"qui-btn inline small outline",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.remind(e.order_number)}}},[t._v("提醒发货")]):t._e(),2==e.status?a("v-uni-view",{staticClass:"qui-btn inline small outline",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.confirm(e.order_number)}}},[t._v("确认收货")]):t._e(),3==e.status?a("v-uni-navigator",{staticClass:"qui-btn inline small outline",attrs:{url:"/pages/shengtai/order-detail/order-detail?id="+e.order_number}},[t._v("再次购买")]):t._e(),-1==e.status?a("v-uni-view",{staticClass:"qui-btn inline small outline"},[t._v("已取消")]):t._e()],1)],1)})),a("loading-more",{attrs:{"nomore-text":"我是有底线的",nomore:t.nomore,list:t.list}})],2)],1)},r=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}))},"2d61":function(t,e,a){var i=a("8f8e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("16c75aec",i,!0,{sourceMap:!1,shadowMode:!1})},"7c19":function(t,e,a){"use strict";var i=a("ee27");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("c964")),r=i(a("d0ff")),s={data:function(){return{getUrl:"",listName:"list",list:[],loaded:!1,currentPage:0,nomore:!1,totalCount:0,autoLoad:!0,otherData:null,params:{currentPage:1,pageSize:10}}},onLoad:function(){this.autoLoad&&this.getListInit()},methods:{Scrolltolower:function(){this.loadMore()},loadMore:function(){this.params.currentPage++,this.params.currentPage>=this.totalCount?this.nomore=!0:this.getList()},getListInit:function(){this.list=[],this.currentPage=0,this.getList()},getListResult:function(t){this.list=[].concat((0,r.default)(this.list),(0,r.default)(t))},getOther:function(t){this.otherData=t},getList:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.getUrl){e.next=2;break}return e.abrupt("return");case 2:return t.loaded=!1,e.prev=3,e.next=6,t.post(t.getUrl,t.params);case 6:a=e.sent,t.totalCount=a.data.pageCount,t.getListResult(a.data[t.listName]),t.loaded=!0,e.next=14;break;case 12:e.prev=12,e.t0=e["catch"](3);case 14:case"end":return e.stop()}}),e,null,[[3,12]])})))()}}};e.default=s},"8f8e":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.arrow-l[data-v-76801fb2]{position:absolute;left:%?20?%;top:50%;-webkit-transform:rotate(45deg) translateY(-50%);transform:rotate(45deg) translateY(-50%);border:2px solid #444;border-top:0;border-right:0;width:%?20?%;height:%?20?%;z-index:999}.hover[data-v-76801fb2]{background-color:#ec3f3f!important}.active[data-v-76801fb2]{font-weight:700;position:relative}.active[data-v-76801fb2]::after{content:"";display:block;position:absolute;width:%?60?%;height:%?6?%;background-color:#f6390d;bottom:%?10?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}',""]),t.exports=e},b07a:function(t,e,a){"use strict";a.r(e);var i=a("e287"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},b977:function(t,e,a){"use strict";a.r(e);var i=a("1311"),n=a("b07a");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("06b7");var s,o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"76801fb2",null,!1,i["a"],s);e["default"]=l.exports},d0ff:function(t,e,a){"use strict";a.r(e);var i=a("b680");function n(t){if(Array.isArray(t))return Object(i["a"])(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("e260"),a("d3b7"),a("3ca3"),a("ddb0");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var s=a("dde1");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return n(t)||r(t)||Object(s["a"])(t)||o()}a.d(e,"default",(function(){return l}))},e287:function(t,e,a){"use strict";var i=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("7c19")),r={mixins:[n.default],data:function(){return{getUrl:"/wap/Order/OrderList",autoLoad:!1,TabCur:-1,tabBars:[{name:"全部",type:-1},{name:"已付款",type:0},{name:"已发货",type:1},{name:"已结算",type:2},{name:"已失效",type:3}],teamlist:[{title:"我的订单",teamActive:!0},{title:"团队订单",teamActive:!1}],orderlist:[{title:"全部",isActive:!0},{title:"已付款",isActive:!1},{title:"已发货",isActive:!1},{title:"已结算",isActive:!1},{title:"已失效",isActive:!1}]}},onLoad:function(){this.params.platformId=12,this.params.action=2,this.params.lineShopId=4,this.getListInit()},methods:{teamActive:function(t){for(var e in this.teamlist)this.teamlist[e].teamActive=!1;this.teamlist[t].teamActive=!0},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.type,this.params.status=t.currentTarget.dataset.type,-1==this.TabCur&&(this.params.status=null),this.loaded&&this.getListInit()}}};e.default=r}}]);