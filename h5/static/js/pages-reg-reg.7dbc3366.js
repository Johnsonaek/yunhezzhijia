(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-reg-reg"],{"28db":function(e,t,n){"use strict";var i=n("ee27");n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var r=i(n("c964")),a=i(n("fe83")),s={name:"sendCode",data:function(){return{timer:null,send:!0,time:null}},props:{type:{type:String,default:"1"},url:{type:String,default:a.default.sendCodeApiUrl},tel:{type:String,default:""},second:{type:Number,default:60}},created:function(){this.time=this.second},methods:{sendCode:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$validate.isPhone(e.tel)){t.next=3;break}return uni.showToast({icon:"none",title:"请输入正确的手机号"}),t.abrupt("return",!1);case 3:return n=e,t.next=6,e.post(e.url,{mobile:e.tel});case 6:i=t.sent,0==i.code&&(n.send=!1,n.timer=setInterval((function(){n.time--,n.time<=0&&(n.send=!0,n.time=this.second,clearInterval(n.timer))}),1e3));case 8:case"end":return t.stop()}}),t)})))()}}};t.default=s},"77ab":function(e,t,n){"use strict";n.r(t);var i=n("9ac3"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},9587:function(e,t,n){"use strict";n.r(t);var i=n("e305"),r=n("77ab");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);var s,u=n("f0c5"),o=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"260f1840",null,!1,i["a"],s);t["default"]=o.exports},"9ac3":function(e,t,n){"use strict";var i=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var r=i(n("c964")),a=i(n("e8aa")),s={components:{sendCode:a.default},data:function(){return{btnLoading:!1,form:{type:1,mobile:"13427573606",password:"111111",confirm_password:"111111",smscode:"1111"}}},methods:{submit:function(){var e=[{name:"mobile",required:!0,type:"phone",errmsg:"请输入正确的手机号"},{name:"password",type:"required",errmsg:"请输入密码"},{name:"confirm_password",type:"required",errmsg:"请输入确认密码"},{name:"password",type:"eq",eqName:"confirm_password",required:!0,errmsg:"两次输入密码不一致"},{name:"smscode",type:"required",errmsg:"请输入验证码"}],t=this.$validate.validate(this.form,e);if(!t.isOk)return uni.showToast({icon:"none",title:t.errmsg}),!1;this.reg()},reg:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.btnLoading=!0,t.next=3,e.post("/wap/Cis/userRegister",e.form);case 3:n=t.sent,200==n.code?(e.btnLoading=!1,uni.showToast({title:"注册成功"}),setTimeout((function(){uni.navigateBack({delta:1})}),1e3)):e.btnLoading=!1;case 5:case"end":return t.stop()}}),t)})))()}}};t.default=s},"9bd3":function(e,t,n){"use strict";n.r(t);var i=n("28db"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},a4dc:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendCode.apply(void 0,arguments)}}},[e.send?n("v-uni-view",[e._v("获取验证码")]):n("v-uni-view",[e._v(e._s(e.time)+"s")])],1)},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},e305:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page",{attrs:{title:"注册"}},[n("v-uni-view",{staticClass:"qui-cells"},[n("v-uni-view",{staticClass:"qui-cell"},[n("v-uni-view",{staticClass:"mr30"},[e._v("+86"),n("v-uni-text",{staticClass:"cuIcon-triangledownfill fs40"})],1),n("v-uni-view",{staticClass:"cell-bd"},[n("v-uni-input",{staticClass:"qui-input",attrs:{type:"number",maxlength:"11",value:"",placeholder:"请输入您的手机号码"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1)],1),n("v-uni-view",{staticClass:"qui-cell"},[n("v-uni-view",{staticClass:"cell-bd"},[n("v-uni-input",{staticClass:"qui-input",attrs:{type:"text",maxlength:"6",value:"",placeholder:"请输入验证码"},model:{value:e.form.smscode,callback:function(t){e.$set(e.form,"smscode",t)},expression:"form.smscode"}})],1),n("v-uni-view",{staticClass:"qui-btn inline h60 outline round fs24"},[n("send-code",{attrs:{tel:e.form.mobile}})],1)],1),n("v-uni-view",{staticClass:"qui-cell"},[n("v-uni-view",{staticClass:"cell-bd"},[n("v-uni-input",{staticClass:"qui-input",attrs:{type:"text",password:!0,value:"",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),n("v-uni-view",{staticClass:"qui-cell"},[n("v-uni-view",{staticClass:"cell-bd"},[n("v-uni-input",{staticClass:"qui-input",attrs:{type:"text",password:!0,value:"",placeholder:"请再次输入密码"},model:{value:e.form.confirm_password,callback:function(t){e.$set(e.form,"confirm_password",t)},expression:"form.confirm_password"}})],1)],1)],1),n("v-uni-view",{staticClass:"h100"}),n("v-uni-view",{staticClass:"plr50 ptb50"},[n("v-uni-view",{staticClass:"qui-btn",class:e.btnLoading?"loading":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("确认")])],1)],1)],1)},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},e8aa:function(e,t,n){"use strict";n.r(t);var i=n("a4dc"),r=n("9bd3");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);var s,u=n("f0c5"),o=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);t["default"]=o.exports}}]);