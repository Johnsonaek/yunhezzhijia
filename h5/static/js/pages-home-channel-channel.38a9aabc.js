(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-channel-channel"],{"7a12":function(t,s,i){"use strict";i.r(s);var a=i("914b"),e=i("c745");for(var n in e)"default"!==n&&function(t){i.d(s,t,(function(){return e[t]}))}(n);var r,u=i("f0c5"),c=Object(u["a"])(e["default"],a["b"],a["c"],!1,null,"d9366d6e",null,!1,a["a"],r);s["default"]=c.exports},"7c19":function(t,s,i){"use strict";var a=i("ee27");i("99af"),Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0,i("96cf");var e=a(i("c964")),n=a(i("d0ff")),r={data:function(){return{getUrl:"",listName:"list",list:[],loaded:!1,currentPage:0,nomore:!1,totalCount:0,autoLoad:!0,otherData:null,params:{currentPage:1,pageSize:10}}},onLoad:function(){this.autoLoad&&this.getListInit()},methods:{Scrolltolower:function(){this.loadMore()},loadMore:function(){this.params.currentPage++,this.params.currentPage>=this.totalCount?this.nomore=!0:this.getList()},getListInit:function(){this.list=[],this.currentPage=0,this.getList()},getListResult:function(t){this.list=[].concat((0,n.default)(this.list),(0,n.default)(t))},getOther:function(t){this.otherData=t},getList:function(){var t=this;return(0,e.default)(regeneratorRuntime.mark((function s(){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(""!==t.getUrl){s.next=2;break}return s.abrupt("return");case 2:return t.loaded=!1,s.prev=3,s.next=6,t.post(t.getUrl,t.params);case 6:i=s.sent,t.totalCount=i.data.pageCount,t.getListResult(i.data[t.listName]),t.loaded=!0,s.next=14;break;case 12:s.prev=12,s.t0=s["catch"](3);case 14:case"end":return s.stop()}}),s,null,[[3,12]])})))()}}};s.default=r},"865a":function(t,s,i){"use strict";var a=i("ee27");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0,i("96cf");var e=a(i("c964")),n=a(i("7c19")),r={mixins:[n.default],data:function(){return{activeIndex:0,sortType:0,sortType2:0,banner:[],getUrl:"/wap/Line/ShopList",autoLoad:!1}},onLoad:function(){this.getListData(),this.getBanners()},methods:{getBanners:function(){var t=this;return(0,e.default)(regeneratorRuntime.mark((function s(){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.post("/wap/Bases/AdsList",{action:3});case 2:i=s.sent,200==i.code&&(t.banner=i.data.list);case 4:case"end":return s.stop()}}),s)})))()},getListData:function(){this.params.action=1,this.params.longitude=113.253104,this.params.latitude=23.130152,this.params.distance=5,this.params.region=0,this.params.redOrderBy=1,this.getListInit()},sort:function(){this.activeIndex=1,0==this.sortType?this.sortType=1:this.sortType=0},sort2:function(){this.activeIndex=2,0==this.sortType2?this.sortType2=1:this.sortType2=0},changeListType:function(){"grid"===this.listType?this.listType="cell":this.listType="grid"}}};s.default=r},"914b":function(t,s,i){"use strict";var a,e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-uni-view",[i("page",{attrs:{title:"频道页"}},[i("v-uni-view",{staticClass:"plr24 pt24 bg-white"},[i("v-uni-swiper",{class:"square-dot",staticStyle:{height:"262rpx"},attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(t.banner,(function(t,s){return i("v-uni-swiper-item",{key:s},[i("v-uni-navigator",{staticClass:"radius12",attrs:{"hover-class":"none",url:"item.url"}},[i("q-image",{attrs:{lazyLoad:!1,imgwh:[702,262],isRatio:!0,src:t.path}})],1)],1)})),1)],1),i("v-uni-view",{staticClass:"h30 bg-white"}),i("v-uni-view",{staticClass:"special relative z-index9"},[i("v-uni-view",{staticClass:"qui-grids column5 gutter24-tb plr10 bg-white"},[i("v-uni-navigator",{staticClass:"qui-grid",attrs:{"hover-class":"none",url:"/pages/home/goods-list/goods-list"}},[i("v-uni-view",{staticClass:"wh100"},[i("v-uni-image",{staticClass:"wh100 block",attrs:{src:"/static/business/business2.1.png"}})],1),i("v-uni-view",{staticClass:"fs24 mt10"},[t._v("礼品卡券")])],1),i("v-uni-navigator",{staticClass:"qui-grid",attrs:{"hover-class":"none",url:"/pages/home/goods-list/goods-list"}},[i("v-uni-view",{staticClass:"wh100"},[i("v-uni-image",{staticClass:"wh100 block",attrs:{src:"/static/business/business2.2.png"}})],1),i("v-uni-view",{staticClass:"fs24 mt10"},[t._v("家用电器")])],1),i("v-uni-navigator",{staticClass:"qui-grid",attrs:{"hover-class":"none",url:"/"}},[i("v-uni-view",{staticClass:"wh100"},[i("v-uni-image",{staticClass:"wh100 block",attrs:{src:"/static/business/business2.3.png"}})],1),i("v-uni-view",{staticClass:"fs24 mt10"},[t._v("家具厨具")])],1),i("v-uni-navigator",{staticClass:"qui-grid",attrs:{"hover-class":"none",url:"/"}},[i("v-uni-view",{staticClass:"wh100"},[i("v-uni-image",{staticClass:"wh100 block",attrs:{src:"/static/business/business2.4.png"}})],1),i("v-uni-view",{staticClass:"fs24 mt10"},[t._v("珠宝首饰")])],1),i("v-uni-navigator",{staticClass:"qui-grid",attrs:{"hover-class":"none",url:"/"}},[i("v-uni-view",{staticClass:"wh100"},[i("v-uni-image",{staticClass:"wh100 block",attrs:{src:"/static/business/business2.5.png"}})],1),i("v-uni-view",{staticClass:"fs24 mt10"},[t._v("手机数码")])],1),i("v-uni-navigator",{staticClass:"qui-grid",attrs:{"hover-class":"none",url:"/"}},[i("v-uni-view",{staticClass:"wh100"},[i("v-uni-image",{staticClass:"wh100 block",attrs:{src:"/static/business/business2.6.png"}})],1),i("v-uni-view",{staticClass:"fs24 mt10"},[t._v("汽车用品")])],1),i("v-uni-navigator",{staticClass:"qui-grid",attrs:{"hover-class":"none",url:"/"}},[i("v-uni-view",{staticClass:"wh100"},[i("v-uni-image",{staticClass:"wh100 block",attrs:{src:"/static/business/business2.7.png"}})],1),i("v-uni-view",{staticClass:"fs24 mt10"},[t._v("健康保健")])],1),i("v-uni-navigator",{staticClass:"qui-grid",attrs:{"hover-class":"none",url:"/"}},[i("v-uni-view",{staticClass:"wh100"},[i("v-uni-image",{staticClass:"wh100 block",attrs:{src:"/static/business/business2.8.png"}})],1),i("v-uni-view",{staticClass:"fs24 mt10"},[t._v("休闲零食")])],1),i("v-uni-navigator",{staticClass:"qui-grid",attrs:{"hover-class":"none",url:"/"}},[i("v-uni-view",{staticClass:"wh100"},[i("v-uni-image",{staticClass:"wh100 block",attrs:{src:"/static/business/business2.9.png"}})],1),i("v-uni-view",{staticClass:"fs24 mt10"},[t._v("生鲜水果")])],1),i("v-uni-navigator",{staticClass:"qui-grid",attrs:{"hover-class":"none",url:"/"}},[i("v-uni-view",{staticClass:"wh100"},[i("v-uni-image",{staticClass:"wh100 block",attrs:{src:"/static/business/business2.10.png"}})],1),i("v-uni-view",{staticClass:"fs24 mt10"},[t._v("美妆个护")])],1)],1),i("v-uni-view",{staticClass:"bg-gray",staticStyle:{height:"24rpx"}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"ptb30 bg-white shadow relative",staticStyle:{"z-index":"9"}},[i("v-uni-view",{staticClass:"qui-grids fgs column3 filter-nav"},[i("v-uni-view",{staticClass:"qui-grid",class:0==t.activeIndex?"active":"",attrs:{"data-text":"zhonghe"},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.activeIndex=0}}},[t._v("综合")]),i("v-uni-view",{staticClass:"qui-grid",class:1==t.activeIndex?"active":"",attrs:{"data-text":"xiaoliang"},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.sort.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"arrow",class:1==t.sortType?"up":"down"},[t._v("销量")])],1),i("v-uni-view",{staticClass:"qui-grid",class:2==t.activeIndex?"active":"",attrs:{"data-text":"jiage"},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.sort2.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"arrow",class:1==t.sortType2?"up":"down"},[t._v("价格")])],1)],1)],1),i("v-uni-view",{staticClass:"qui-card panel bg-white-gray",staticStyle:{"min-height":"400rpx"}},[i("v-uni-view",{staticClass:"h24"}),0===t.list.length&&t.loaded?i("empty"):t._e(),t.loaded?t._e():i("v-uni-view",{staticClass:"loading ptb30"}),i("v-uni-view",{staticClass:"plr12 pt0",staticStyle:{"margin-top":"-12rpx"}},[i("v-uni-view",{staticClass:"qui-grids column2 gutter12"},t._l(t.list,(function(s,a){return i("v-uni-view",{key:a,staticClass:"qui-grid",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goto("/pages/svideo/detail/detail?id="+s.goods_id)}}},[i("v-uni-view",{staticClass:"block tl bg-white radius20 shadow"},[i("v-uni-view",{},[i("q-image",{attrs:{isRatio:!0,src:"/static/business/rangking/v2_qaob10.jpg"}})],1),i("v-uni-view",{staticClass:"plr20 ptb20"},[i("v-uni-view",{staticClass:"line2 fs28"},[i("v-uni-text",[t._v("商品标题商品标题商品标题商品标题商品标题商品标题商品标题")])],1),i("v-uni-view",{staticClass:"flex a-center mt20"},[i("v-uni-text",{staticClass:"cuIcon-shop text-yellow",staticStyle:{opacity:"0.5"}}),i("v-uni-view",{staticClass:"fs24 text-muted"},[t._v("认养一头牛旗舰店")])],1),i("v-uni-view",{staticClass:"flex mt20"},[i("v-uni-view",{staticClass:"flex-item"},[i("v-uni-text",{staticClass:"bg-red fs22 ptb10 plr20 radius10 scb"},[t._v("券￥80")])],1),i("v-uni-view",[i("v-uni-text",{staticClass:"bg-red light fs22 ptb10 plr10 radius10"},[t._v("分享赚￥0.19")])],1)],1),i("v-uni-view",{staticClass:"mt20 flex"},[i("v-uni-view",{staticClass:"flex-item"},[i("v-uni-text",{staticClass:"text-theme fs26"},[t._v("￥77.00")]),i("v-uni-text",{staticClass:"text-gray fs26 line-through ml10"},[t._v("￥900")])],1),i("v-uni-view",{staticClass:"fs22 text-muted"},[t._v("已售724")])],1)],1)],1)],1)})),1)],1),i("loading-more",{attrs:{"nomore-text":"我是有底线的",nomore:t.nomore,list:t.list}})],1)],1)],1)],1)},n=[];i.d(s,"b",(function(){return e})),i.d(s,"c",(function(){return n})),i.d(s,"a",(function(){return a}))},c745:function(t,s,i){"use strict";i.r(s);var a=i("865a"),e=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(s,t,(function(){return a[t]}))}(n);s["default"]=e.a},d0ff:function(t,s,i){"use strict";i.r(s);var a=i("b680");function e(t){if(Array.isArray(t))return Object(a["a"])(t)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("e260"),i("d3b7"),i("3ca3"),i("ddb0");function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var r=i("dde1");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return e(t)||n(t)||Object(r["a"])(t)||u()}i.d(s,"default",(function(){return c}))}}]);