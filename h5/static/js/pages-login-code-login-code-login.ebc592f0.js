(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-code-login-code-login"],{"0ea7":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page",{attrs:{title:"验证码登录"}},[n("v-uni-navigator",{attrs:{slot:"right",url:"/pages/login/password-login/password-login"},slot:"right"},[t._v("密码登录")]),n("v-uni-view",{staticClass:"qui-cells"},[n("v-uni-view",{staticClass:"qui-cell"},[n("v-uni-view",{staticClass:"mr30"},[t._v("+86"),n("v-uni-text",{staticClass:"cuIcon-triangledownfill fs40"})],1),n("v-uni-view",{staticClass:"cell-bd"},[n("v-uni-input",{staticClass:"qui-input",attrs:{type:"text",value:"",placeholder:"请输入您的手机号码"}})],1)],1),n("v-uni-view",{staticClass:"qui-cell"},[n("v-uni-view",{staticClass:"cell-bd"},[n("v-uni-input",{staticClass:"qui-input",attrs:{type:"text",maxlength:"6",value:"",placeholder:"请输入验证码"}})],1),n("v-uni-view",{staticClass:"qui-btn inline h60 outline round fs24"},[n("send-code",{attrs:{tel:"13427573606"}})],1)],1)],1),n("v-uni-view",{staticClass:"plr30 flex space-between mt30"},[n("v-uni-navigator",{staticClass:"text-default",attrs:{url:"/pages/reg/reg"}},[t._v("注册")]),n("v-uni-view",{staticClass:"text-muted"},[t._v("登录遇到问题？")])],1),n("v-uni-view",{staticClass:"h100"}),n("v-uni-view",{staticClass:"plr50 ptb50"},[n("v-uni-view",{staticClass:"qui-btn"},[t._v("确认登录")])],1)],1)],1)},u=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}))},"28db":function(t,e,n){"use strict";var i=n("ee27");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("c964")),u=i(n("fe83")),r={name:"sendCode",data:function(){return{timer:null,send:!0,time:null}},props:{type:{type:String,default:"1"},url:{type:String,default:u.default.sendCodeApiUrl},tel:{type:String,default:""},second:{type:Number,default:60}},created:function(){this.time=this.second},methods:{sendCode:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$validate.isPhone(t.tel)){e.next=3;break}return uni.showToast({icon:"none",title:"请输入正确的手机号"}),e.abrupt("return",!1);case 3:return n=t,e.next=6,t.post(t.url,{mobile:t.tel});case 6:i=e.sent,0==i.code&&(n.send=!1,n.timer=setInterval((function(){n.time--,n.time<=0&&(n.send=!0,n.time=this.second,clearInterval(n.timer))}),1e3));case 8:case"end":return e.stop()}}),e)})))()}}};e.default=r},"9bd3":function(t,e,n){"use strict";n.r(e);var i=n("28db"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},a4dc:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendCode.apply(void 0,arguments)}}},[t.send?n("v-uni-view",[t._v("获取验证码")]):n("v-uni-view",[t._v(t._s(t.time)+"s")])],1)},u=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}))},a70d:function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("e8aa")),u={components:{sendCode:a.default},data:function(){return{}},methods:{}};e.default=u},c4ff:function(t,e,n){"use strict";n.r(e);var i=n("0ea7"),a=n("d660");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);var r,s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"4a519d54",null,!1,i["a"],r);e["default"]=l.exports},d660:function(t,e,n){"use strict";n.r(e);var i=n("a70d"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},e8aa:function(t,e,n){"use strict";n.r(e);var i=n("a4dc"),a=n("9bd3");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);var r,s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=l.exports}}]);