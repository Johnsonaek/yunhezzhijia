(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-yunfenhong-yunfenhong"],{"3bf7":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{TabCur:0,scrollLeft:0,tabBars:[{name:"7天收益"},{name:"月收益"},{name:"年收益"}]}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1),this.loaded}}};s.default=a},"529a":function(t,s,i){"use strict";i.r(s);var a=i("de43"),e=i("6506");for(var n in e)"default"!==n&&function(t){i.d(s,t,(function(){return e[t]}))}(n);i("a8cc");var r,u=i("f0c5"),c=Object(u["a"])(e["default"],a["b"],a["c"],!1,null,"921fa21a",null,!1,a["a"],r);s["default"]=c.exports},6506:function(t,s,i){"use strict";i.r(s);var a=i("3bf7"),e=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(s,t,(function(){return a[t]}))}(n);s["default"]=e.a},a8cc:function(t,s,i){"use strict";var a=i("cdb7"),e=i.n(a);e.a},aa50:function(t,s,i){var a=i("24fb");s=a(!1),s.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.yfh_nav .cu-item.cur[data-v-921fa21a]{color:var(--blueColor);font-weight:600}.yfh_nav .cu-item.cur[data-v-921fa21a]::after{background-color:var(--blueColor)}',""]),t.exports=s},cdb7:function(t,s,i){var a=i("aa50");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("d4cb8ee0",a,!0,{sourceMap:!1,shadowMode:!1})},de43:function(t,s,i){"use strict";var a,e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-uni-view",[i("page",{attrs:{title:"红利宝",titleClass:"bg-blue",headbor:!1,bgClass:"bg-white"}},[i("v-uni-view",{staticClass:"bg-blue plr30 ptb30",staticStyle:{"margin-bottom":"-120rpx"}},[i("v-uni-view",{staticClass:"flex a-center"},[i("v-uni-view",{staticClass:"flex-item"},[i("v-uni-view",{},[t._v("我的红利宝价值")]),i("v-uni-view",{staticClass:"fs32 mt20"},[i("v-uni-text",{staticClass:"num"},[t._v("12888.88")]),i("v-uni-text",{staticClass:"cuIcon-attention"})],1)],1),i("v-uni-view",{staticClass:"flex-item ml30"},[i("v-uni-view",{},[t._v("我的佣金")]),i("v-uni-view",{staticClass:"fs32 mt20"},[i("v-uni-text",{staticClass:"num"},[t._v("12888.88")]),i("v-uni-text",{staticClass:"cuIcon-attention"})],1)],1),i("v-uni-view",{staticClass:"flex-item"})],1),i("v-uni-view",{staticClass:"text-fff50 fs24 mt30"},[t._v("说明：我的红利宝价值=红利宝兑换值 x 我的红利宝数量")]),i("v-uni-view",{staticClass:"h100"})],1),i("v-uni-view",{staticClass:"qui-card flex plr40 ptb40 shadow-xy0"},[i("v-uni-view",{staticClass:"flex-item pl20"},[i("v-uni-view",{staticClass:"text-muted"},[t._v("今日红利宝兑换值")]),i("v-uni-view",{staticClass:"fs34 mt20"},[t._v("1.17")]),i("v-uni-view",{staticClass:"text-muted mt30"},[t._v("总涨幅价格")]),i("v-uni-view",{staticClass:"fs34 mt20"},[t._v("1.17")])],1),i("v-uni-view",{staticClass:"bor-1px-l h200"}),i("v-uni-view",{staticClass:"flex-item ml40 pl20"},[i("v-uni-view",{staticClass:"text-muted"},[t._v("我的红利宝数量")]),i("v-uni-view",{staticClass:"fs34 mt20"},[t._v("1.17")]),i("v-uni-view",{staticClass:"text-muted mt30"},[t._v("昨日涨幅")]),i("v-uni-view",{staticClass:"fs34 mt20"},[t._v("1.17")])],1)],1),i("v-uni-scroll-view",{staticClass:"bg-white nav yfh_nav",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},[i("v-uni-view",{staticClass:"flex text-center"},t._l(t.tabBars,(function(s,a){return i("v-uni-view",{key:a,staticClass:"cu-item flex-sub",class:a==t.TabCur?"text-blue cur":"",attrs:{"data-id":a},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(s.name))])})),1)],1),i("v-uni-view",{staticClass:"flex ptb30 plr30",attrs:{slot:"bottom"},slot:"bottom"},[i("v-uni-view",{staticClass:"flex-item"},[i("v-uni-view",{staticClass:"qui-btn bg-white shadow-xy0",staticStyle:{border:"0"}},[t._v("提现")])],1),i("v-uni-view",{staticClass:"w30"}),i("v-uni-view",{staticClass:"flex-item"},[i("v-uni-view",{staticClass:"qui-btn bg-blue shadow-xy0"},[t._v("充值")])],1)],1)],1)],1)},n=[];i.d(s,"b",(function(){return e})),i.d(s,"c",(function(){return n})),i.d(s,"a",(function(){return a}))}}]);