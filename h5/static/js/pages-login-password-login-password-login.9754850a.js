(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-password-login-password-login"],{"110c":function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page",{attrs:{title:"密码登录"}},[n("v-uni-view",{staticClass:"qui-cells"},[n("v-uni-view",{staticClass:"qui-cell"},[n("v-uni-view",{staticClass:"mr30"},[e._v("+86"),n("v-uni-text",{staticClass:"cuIcon-triangledownfill fs40"})],1),n("v-uni-view",{staticClass:"cell-bd"},[n("v-uni-input",{staticClass:"qui-input",attrs:{type:"number",value:"",maxlength:"11",placeholder:"请输入您的手机号码"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1)],1),n("v-uni-view",{staticClass:"qui-cell"},[n("v-uni-view",{staticClass:"cell-bd"},[n("v-uni-input",{staticClass:"qui-input",attrs:{type:"text",value:"",password:!0,placeholder:"请输入登录密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1)],1),n("v-uni-view",{staticClass:"plr30 flex space-between mt30"},[n("v-uni-navigator",{staticClass:"text-default",attrs:{url:"/pages/reg/reg"}},[e._v("注册")]),n("v-uni-view",{staticClass:"text-muted"},[e._v("登录遇到问题？")])],1),n("v-uni-view",{staticClass:"h100"}),n("v-uni-view",{staticClass:"plr50 ptb50",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"qui-btn",class:e.btnLoading?"loading":""},[e._v("确认登录")])],1)],1)],1)},r=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}))},"255d":function(e,t,n){"use strict";var i=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var a=i(n("c964")),r=i(n("f3f3")),s=i(n("e8aa")),u=n("2f62"),o={components:{sendCode:s.default},data:function(){return{btnLoading:!1,form:{type:1,mobile:"13427573606",password:"111111"}}},onLoad:function(){this.isLogin(!1,!0)},methods:(0,r.default)({},(0,u.mapMutations)(["NavChange","vlogin","initUser"]),{submit:function(){var e=[{name:"mobile",required:!0,type:"phone",errmsg:"请输入正确的手机号"},{name:"password",type:"required",errmsg:"请输入密码"}],t=this.$validate.validate(this.form,e);if(!t.isOk)return uni.showToast({icon:"none",title:t.errmsg}),!1;this.pswlogin()},pswlogin:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e,e.btnLoading=!0,t.next=4,e.post("/wap/Cis/userLogin",e.form);case 4:n=t.sent,200==n.code?(e.vlogin(n.data.token),e.NavChange("home"),setTimeout((function(){uni.reLaunch({url:"/pages/index/index"}),e.btnLoading=!1}),800)):e.btnLoading=!1;case 6:case"end":return t.stop()}}),t)})))()}})};t.default=o},"28db":function(e,t,n){"use strict";var i=n("ee27");n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var a=i(n("c964")),r=i(n("fe83")),s={name:"sendCode",data:function(){return{timer:null,send:!0,time:null}},props:{type:{type:String,default:"1"},url:{type:String,default:r.default.sendCodeApiUrl},tel:{type:String,default:""},second:{type:Number,default:60}},created:function(){this.time=this.second},methods:{sendCode:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$validate.isPhone(e.tel)){t.next=3;break}return uni.showToast({icon:"none",title:"请输入正确的手机号"}),t.abrupt("return",!1);case 3:return n=e,t.next=6,e.post(e.url,{mobile:e.tel});case 6:i=t.sent,0==i.code&&(n.send=!1,n.timer=setInterval((function(){n.time--,n.time<=0&&(n.send=!0,n.time=this.second,clearInterval(n.timer))}),1e3));case 8:case"end":return t.stop()}}),t)})))()}}};t.default=s},"2b8c":function(e,t,n){"use strict";n.r(t);var i=n("110c"),a=n("bafc");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);var s,u=n("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"2603e2de",null,!1,i["a"],s);t["default"]=o.exports},"9bd3":function(e,t,n){"use strict";n.r(t);var i=n("28db"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},a4dc:function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendCode.apply(void 0,arguments)}}},[e.send?n("v-uni-view",[e._v("获取验证码")]):n("v-uni-view",[e._v(e._s(e.time)+"s")])],1)},r=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}))},bafc:function(e,t,n){"use strict";n.r(t);var i=n("255d"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},e8aa:function(e,t,n){"use strict";n.r(t);var i=n("a4dc"),a=n("9bd3");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);var s,u=n("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);t["default"]=o.exports}}]);