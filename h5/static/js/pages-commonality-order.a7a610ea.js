(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-commonality-order"],{"050a":function(t,i,n){"use strict";var e=n("801b"),a=n.n(e);a.a},"13bf":function(t,i,n){"use strict";n.r(i);var e=n("cdaf"),a=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(i,t,(function(){return e[t]}))}(r);i["default"]=a.a},1449:function(t,i,n){"use strict";n.r(i);var e=n("9ee5"),a=n("13bf");for(var r in a)"default"!==r&&function(t){n.d(i,t,(function(){return a[t]}))}(r);n("b61a");var c,o=n("f0c5"),s=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"3c3be760",null,!1,e["a"],c);i["default"]=s.exports},"4dd3":function(t,i,n){"use strict";n.r(i);var e=n("f0c8"),a=n("c539");for(var r in a)"default"!==r&&function(t){n.d(i,t,(function(){return a[t]}))}(r);n("050a");var c,o=n("f0c5"),s=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"4510a19f",null,!1,e["a"],c);i["default"]=s.exports},"72d2":function(t,i,n){"use strict";n("a9e3"),n("b6802"),n("d3b7"),n("ac1f"),n("25f0"),n("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"u-number-box",props:{value:{type:Number,default:1},bgColor:{type:String,default:"#F2F3F5"},min:{type:Number,default:0},max:{type:Number,default:99999},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},size:{type:[Number,String],default:26},color:{type:String,default:"#323233"},inputWidth:{type:[Number,String],default:80},inputHeight:{type:[Number,String],default:50},index:{type:[Number,String],default:""},disabledInput:{type:Boolean,default:!1},cursorSpacing:{type:[Number,String],default:100}},watch:{value:function(t){this.inputVal=+t},inputVal:function(t,i){var n=this;if(""!=t){var e=0,a=/(^\d+$)/.test(t);e=a&&t>=this.min&&t<=this.max?t:i,this.handleChange(e,"change"),this.$nextTick((function(){n.inputVal=e}))}}},data:function(){return{inputVal:0}},created:function(){this.inputVal=+this.value},computed:{getCursorSpacing:function(){return Number(uni.upx2px(this.cursorSpacing))}},methods:{minus:function(){this.computeVal("minus")},plus:function(){this.computeVal("plus")},calcPlus:function(t,i){var n,e,a;try{e=t.toString().split(".")[1].length}catch(c){e=0}try{a=i.toString().split(".")[1].length}catch(c){a=0}n=Math.pow(10,Math.max(e,a));var r=e>=a?e:a;return((t*n+i*n)/n).toFixed(r)},calcMinus:function(t,i){var n,e,a;try{e=t.toString().split(".")[1].length}catch(c){e=0}try{a=i.toString().split(".")[1].length}catch(c){a=0}n=Math.pow(10,Math.max(e,a));var r=e>=a?e:a;return((t*n-i*n)/n).toFixed(r)},computeVal:function(t){if(uni.hideKeyboard(),!this.disabled){var i=0;"minus"===t?i=this.calcMinus(this.inputVal,this.step):"plus"===t&&(i=this.calcPlus(this.inputVal,this.step)),i<this.min||i>this.max||(this.inputVal=i,this.handleChange(i,t))}},onBlur:function(t){var i=this,n=0,e=t.detail.value;/(^\d+$)/.test(e)&&0!=e[0]||(n=this.min),n=+e,n>this.max?n=this.max:n<this.min&&(n=this.min),this.$nextTick((function(){i.inputVal=n})),this.handleChange(n,"blur")},handleChange:function(t,i){this.disabled||this.$emit(i,{value:t,index:this.index})}}};i.default=e},"801b":function(t,i,n){var e=n("cf1a");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("bdaca604",e,!0,{sourceMap:!1,shadowMode:!1})},"85f1":function(t,i,n){t.exports=n.p+"static/img/index30.e7a956da.png"},"9ee5":function(t,i,n){"use strict";var e={uNumberBox:n("4dd3").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"commodity"},[e("v-uni-view",{staticClass:"commodity-left"},[e("v-uni-image",{attrs:{src:n("85f1")}})],1),e("v-uni-view",{staticClass:"commodity-center"},[e("v-uni-view",{staticClass:"name"},[t._v("翅桶")]),e("v-uni-view",{staticClass:"specifc"},[t._v("翅根4块+烤翅4块+翅中2块")]),e("v-uni-view",{staticClass:"pirce"},[t._v("返佣"),e("v-uni-text",[t._v("￥8")])],1)],1),e("v-uni-view",{staticClass:"commodity-right"},[t._v("￥32")])],1),e("v-uni-view",{staticClass:"table"},[e("v-uni-view",{staticClass:"tablet"},[e("v-uni-view",{staticClass:"tablename"},[t._v("数量")]),e("v-uni-view",{staticClass:"tablenub"},[e("u-number-box",{attrs:{min:1,max:100,"input-width":100,"input-height":60}})],1)],1),e("v-uni-view",{staticClass:"tablet"},[e("v-uni-view",{staticClass:"tablename"},[t._v("付款累计")]),e("v-uni-view",{staticClass:"tablenub"},[t._v("￥12")])],1),e("v-uni-view",{staticClass:"tablet"},[e("v-uni-view",{staticClass:"tablename"},[t._v("返佣累计")]),e("v-uni-view",{staticClass:"tablenub"},[t._v("￥12")])],1),e("v-uni-view",{staticClass:"tablet"},[e("v-uni-view",{staticClass:"tablename"},[t._v("手机号码")]),e("v-uni-view",{staticClass:"tablenub"},[t._v("17674633339")])],1)],1),e("v-uni-view",{staticClass:"place"}),e("v-uni-view",{staticClass:"footer"},[t._v("￥12  提交订单")])],1)},r=[];n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return r})),n.d(i,"a",(function(){return e}))},aebc:function(t,i,n){var e=n("dcdd");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("c290595c",e,!0,{sourceMap:!1,shadowMode:!1})},b61a:function(t,i,n){"use strict";var e=n("aebc"),a=n.n(e);a.a},c539:function(t,i,n){"use strict";n.r(i);var e=n("72d2"),a=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(i,t,(function(){return e[t]}))}(r);i["default"]=a.a},cdaf:function(t,i){},cf1a:function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-numberbox[data-v-4510a19f]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-number-input[data-v-4510a19f]{position:relative;text-align:center;padding:0;margin:0 %?6?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.u-icon-plus[data-v-4510a19f],\r\n.u-icon-minus[data-v-4510a19f]{width:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-icon-plus[data-v-4510a19f]{border-radius:0 %?8?% %?8?% 0}.u-icon-minus[data-v-4510a19f]{border-radius:%?8?% 0 0 %?8?%}.u-icon-disabled[data-v-4510a19f]{color:#c8c9cc!important;background:#f7f8fa!important}.u-input-disabled[data-v-4510a19f]{color:#c8c9cc!important;background-color:#f2f3f5!important}',""]),t.exports=i},dcdd:function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-3c3be760]{background-color:#f3f3f3}.place[data-v-3c3be760]{width:100%;background-color:#f3f3f3;height:%?120?%}.commodity[data-v-3c3be760]{background-color:#fff;padding:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.commodity .commodity-left uni-image[data-v-3c3be760]{border-radius:%?10?%;width:%?218?%;height:%?218?%}.commodity .commodity-center[data-v-3c3be760]{margin-left:%?20?%}.commodity .commodity-center .name[data-v-3c3be760]{font-size:%?40?%;font-weight:700;margin-bottom:%?24?%;color:#222}.commodity .commodity-center .specifc[data-v-3c3be760]{background-color:#f3f3f3;color:#999;padding:%?18?%;border-radius:%?10?%;margin-bottom:%?34?%}.commodity .commodity-center .pirce[data-v-3c3be760]{color:#999;font-weight:700}.commodity .commodity-center .pirce uni-text[data-v-3c3be760]{color:#f82840}.commodity .commodity-right[data-v-3c3be760]{color:#f82840}.table[data-v-3c3be760]{margin-top:%?24?%;background-color:#fff;padding:0 %?24?%}.table .tablet[data-v-3c3be760]{padding:%?24?% 0;border-bottom:1px solid #f3f3f3;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.table .tablet .tablename[data-v-3c3be760]{margin-left:%?20?%;font-size:%?30?%;font-weight:700;color:#222}.table .tablet .tablenub[data-v-3c3be760]{margin-right:%?20?%;font-size:%?30?%;font-weight:700;color:#f82840}.footer[data-v-3c3be760]{position:fixed;left:0;bottom:0;width:100%;background-color:#f82840;color:#fff;font-size:%?30?%;height:%?100?%;line-height:%?100?%;text-align:center}body.?%PAGE?%[data-v-3c3be760]{background-color:#f3f3f3}',""]),t.exports=i},f0c8:function(t,i,n){"use strict";var e={uIcon:n("27d4").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"u-numberbox"},[n("v-uni-view",{staticClass:"u-icon-minus",class:{"u-icon-disabled":t.disabled||t.inputVal<=t.min},style:{background:t.bgColor,height:t.inputHeight+"rpx",color:t.color},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.minus.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"minus",size:t.size}})],1),n("v-uni-input",{staticClass:"u-number-input",class:{"u-input-disabled":t.disabled},style:{color:t.color,fontSize:t.size+"rpx",background:t.bgColor,height:t.inputHeight+"rpx",width:t.inputWidth+"rpx"},attrs:{disabled:t.disabledInput||t.disabled,"cursor-spacing":t.getCursorSpacing,type:"number"},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.onBlur.apply(void 0,arguments)}},model:{value:t.inputVal,callback:function(i){t.inputVal=i},expression:"inputVal"}}),n("v-uni-view",{staticClass:"u-icon-plus",class:{"u-icon-disabled":t.disabled||t.inputVal>=t.max},style:{background:t.bgColor,height:t.inputHeight+"rpx",color:t.color},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.plus.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"plus",size:t.size}})],1)],1)},r=[];n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return r})),n.d(i,"a",(function(){return e}))}}]);