(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-superior-detail-detail"],{"098e":function(t,e,i){"use strict";var n=i("1785"),a=i.n(n);a.a},"135b":function(t,e,i){"use strict";var n=i("2f2e"),a=i.n(n);a.a},1785:function(t,e,i){var n=i("a47a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("b7ca484e",n,!0,{sourceMap:!1,shadowMode:!1})},"27c2":function(t,e,i){"use strict";i.r(e);var n=i("29fa"),a=i("d771");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("2d6c");var r,o=i("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"774c2d88",null,!1,n["a"],r);e["default"]=l.exports},"29fa":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{display:"inherit"}},[t.nodes.length?t._e():t._t("default"),i("v-uni-view",{staticClass:"top",style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{animation:t.scaleAm},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t._touchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t._touchmove.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t._tap.apply(void 0,arguments)}}},[i("div",{attrs:{id:"rtf"+t.uid}})]),t._l(t.imgs,(function(e,n){return i("v-uni-image",{key:n,attrs:{id:n,src:e,hidden:!0},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t._load.apply(void 0,arguments)}}})}))],2)},s=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},"2a73":function(t,e,i){"use strict";var n=i("ee27");i("99af"),i("caad"),i("c975"),i("a9e3"),i("acd8"),i("ac1f"),i("2532"),i("466d"),i("5319"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("54f8")),s=uni.getSystemInfoSync().screenWidth/750,r=i("3f33"),o={name:"parser",data:function(){return{uid:this._uid,scaleAm:"",showAm:"",nodes:[],imgs:[]}},props:{html:null,autopause:{type:Boolean,default:!0},autosetTitle:{type:Boolean,default:!0},compress:Number,domain:String,gestureZoom:Boolean,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean,useCache:Boolean,xml:Boolean},watch:{html:function(t){this.setContent(t)}},mounted:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,n="",a=0;i=e[a];a++){if("/"==i&&"/"!=e[a-1]&&"/"!=e[a+1])break;n+=Math.random()>.5?i.toUpperCase():i}return n+=e.substr(a),this[t]=n}if(this[t]=e,e.includes("data:image")){var s=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!s)return}}},this.nodes.length||this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{_Dom2Str:function(t){var e,i="",n=(0,a.default)(t);try{for(n.s();!(e=n.n()).done;){var s=e.value;if("text"==s.type)i+=s.text;else{for(var r in i+="<"+s.name,s.attrs||{})i+=" "+r+'="'+s.attrs[r]+'"';s.children&&s.children.length?i+=">"+this._Dom2Str(s.children)+"</"+s.name+">":i+=">"}}}catch(o){n.e(o)}finally{n.f()}return i},setContent:function(t,e){var i=this;if(t){"string"!=typeof t&&(t=this._Dom2Str(t.nodes||t)),t.includes("rpx")&&(t=t.replace(/[0-9.]*rpx/g,(function(t){return parseFloat(t)*s+"px"})));var n=document.createElement("div");if(e)this.rtf?this.rtf.appendChild(n):this.rtf=n;else{var o="<style scoped>@keyframes show{0%{opacity:0}100%{opacity:1}}";for(var l in r.userAgentStyles)o+="".concat(l,"{").concat(r.userAgentStyles[l],"}");for(l in this.tagStyle)o+="".concat(l,"{").concat(this.tagStyle[l],"}");o+="</style>",t=o+t,this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=n}n.innerHTML=t;for(var c,u=this.rtf.getElementsByTagName("style"),d=0;c=u[d++];)c.innerHTML=c.innerHTML.replace(/\s*body/g,"#rtf"+this._uid),c.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,n=0;e=t[n++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),i._observer.unobserve(e.target))}),{rootMargin:"900px 0px 900px 0px"}));var f=this,p=this.rtf.getElementsByTagName("title");p.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:p[0].innerText}),this.imgList.length=0;for(var v,h=this.rtf.getElementsByTagName("img"),m=0,g=0;v=h[m];m++){v.style.maxWidth="100%";var b=v.getAttribute("src");this.domain&&b&&("/"==b[0]?"/"==b[1]?v.src=(this.domain.includes("://")?this.domain.split("://")[0]:"")+":"+b:v.src=this.domain+b:b.includes("://")||(v.src=this.domain+"/"+b)),v.hasAttribute("ignore")||"A"==v.parentElement.nodeName||(v.i=g++,f.imgList.push(v.src||v.getAttribute("data-src")),v.onclick=function(){var t=!0;this.ignore=function(){return t=!1},f.$emit("imgtap",this),t&&uni.previewImage({current:this.i,urls:f.imgList})}),v.onerror=function(){f.$emit("error",{source:"img",target:this})},f.lazyLoad&&this._observer&&v.src&&0!=v.i&&(v.setAttribute("data-src",v.src),v.removeAttribute("src"),this._observer.observe(v))}var w,x=this.rtf.getElementsByTagName("a"),_=(0,a.default)(x);try{for(_.s();!(w=_.n()).done;){var y=w.value;y.onclick=function(){var t=!0,e=this.getAttribute("href");if(f.$emit("linkpress",{href:e,ignore:function(){return t=!1}}),t&&e)if("#"==e[0])f.useAnchor&&f.navigateTo({id:e.substr(1)});else{if(0==e.indexOf("http")||0==e.indexOf("//"))return!0;uni.navigateTo({url:e})}return!1}}}catch(B){_.e(B)}finally{_.f()}var C=this.rtf.getElementsByTagName("video");f.videoContexts=C;for(var k,T=0;k=C[T++];)k.style.maxWidth="100%",k.onerror=function(){f.$emit("error",{source:"video",target:this})},k.onplay=function(){if(f.autopause)for(var t,e=0;t=f.videoContexts[e++];)t!=this&&t.pause()};var A,S,E=this.rtf.getElementsByTagName("audios"),$=(0,a.default)(E);try{for($.s();!(A=$.n()).done;){var M=A.value;M.onerror=function(){f.$emit("error",{source:"audio",target:this})}}}catch(B){$.e(B)}finally{$.f()}this.document=this.rtf,e||document.getElementById("rtf"+this._uid).appendChild(this.rtf),this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){var t=[i.rtf.getBoundingClientRect()];i.width=t[0].width,t[0].height==S&&(i.$emit("ready",t[0]),clearInterval(i._timer)),S=t[0].height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.html||this.nodes;return this.rtf.innerText},navigateTo:function(t){if(!this.useAnchor)return t.fail&&t.fail({errMsg:"Anchor is disabled"});if(!t.id)return window.scrollTo(0,this.rtf.offsetTop),t.success&&t.success({errMsg:"pageScrollTo:ok"});var e=document.getElementById(t.id);if(!e)return t.fail&&t.fail({errMsg:"Label not found"});t.scrollTop=this.rtf.offsetTop+e.offsetTop,uni.pageScrollTo(t)},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},preLoad:function(t,e){t.constructor==Array&&(t=this._Dom2Str(t));var i=document.createElement("div");i.innerHTML=t;for(var n=i.querySelectorAll("img"),a=n.length-1;a>=e;a--)n[a].removeAttribute("src")},_load:function(t){},_tap:function(t){if(this.gestureZoom&&t.timeStamp-this._lastT<300){var e=t.touches[0].pageY-t.currentTarget.offsetTop;if(this._zoom)this._scaleAm.translateX(0).scale(1).step(),uni.pageScrollTo({scrollTop:(e+this._initY)/2-t.touches[0].clientY,duration:400});else{var i=t.touches[0].pageX-t.currentTarget.offsetLeft;this._initY=e,this._scaleAm=uni.createAnimation({transformOrigin:"".concat(i,"px ").concat(this._initY,"px 0"),timingFunction:"ease-in-out"}),this._scaleAm.scale(2).step(),this._tMax=i/2,this._tMin=(i-this.width)/2,this._tX=0}this._zoom=!this._zoom,this.scaleAm=this._scaleAm.export()}this._lastT=t.timeStamp},_touchstart:function(t){1==t.touches.length&&(this._initX=this._lastX=t.touches[0].pageX)},_touchmove:function(t){var e=t.touches[0].pageX-this._lastX;if(this._zoom&&1==t.touches.length&&Math.abs(e)>20){if(this._lastX=t.touches[0].pageX,this._tX<=this._tMin&&e<0||this._tX>=this._tMax&&e>0)return;this._tX+=e*Math.abs(this._lastX-this._initX)*.05,this._tX<this._tMin&&(this._tX=this._tMin),this._tX>this._tMax&&(this._tX=this._tMax),this._scaleAm.translateX(this._tX).step(),this.scaleAm=this._scaleAm.export()}}}};e.default=o},"2d6c":function(t,e,i){"use strict";var n=i("8eda"),a=i.n(n);a.a},"2f2e":function(t,e,i){var n=i("e080");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2870357c",n,!0,{sourceMap:!1,shadowMode:!1})},"368e":function(t,e,i){"use strict";var n=i("ee27");i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("7049")),s=n(i("0a0c")),r={components:{uniPopup:a.default,uniNumberBox:s.default},props:{detail:{type:Object},maxVal:{type:[Number,String],default:10}},computed:{},data:function(){return{curBtn:0,rate:0,remark:""}},methods:{open:function(){this.$refs["sellPopup"].open()},close:function(){this.$refs["sellPopup"].close()},confirm:function(t){this.close(),this.$emit("confirm",{rate:this.rate,remark:this.remark})},minRate:function(){this.curBtn=0,this.rate=0},maxRate:function(){this.curBtn=1,this.rate=this.maxVal}}};e.default=r},"3f33":function(t,e,i){function n(t){for(var e={},i=t.split(","),n=i.length;n--;)e[i[n]]=!0;return e}i("ac1f"),i("1276"),t.exports={filter:null,highlight:null,onText:null,blankChar:n(" , ,\t,\r,\n,\f"),blockTags:n("address,article,aside,body,caption,center,cite,footer,header,html,nav,section,pre"),ignoreTags:n("area,base,basefont,canvas,command,embed,frame,iframe,input,isindex,keygen,link,map,meta,param,script,source,style,svg,textarea,title,track,use,wbr,embed,iframe"),richOnlyTags:n("a,colgroup,fieldset,legend,picture,table"),selfClosingTags:n("area,base,basefont,br,col,circle,ellipse,embed,frame,hr,img,input,isindex,keygen,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustAttrs:n("align,alt,app-id,author,autoplay,border,cellpadding,cellspacing,class,color,colspan,controls,data-src,dir,face,height,href,id,ignore,loop,media,muted,name,path,poster,rowspan,size,span,src,start,style,type,unit-id,width,xmlns"),boolAttrs:n("autoplay,controls,ignore,loop,muted"),trustTags:n("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",img:"max-width:100%",mark:"background-color:yellow",picture:"max-width:100%",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}}},"543e":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"@-webkit-keyframes show-data-v-774c2d88{0%{opacity:0}100%{opacity:1}}@keyframes show-data-v-774c2d88{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},"55f6":function(t,e,i){"use strict";i.r(e);var n=i("368e"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"76eb":function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("c964")),s=n(i("f3f3")),r=(n(i("fe83")),n(i("27c2"))),o=i("2f62"),l=n(i("a827")),c=n(i("80d5")),u={components:{skuPopup:l.default,Parser:r.default,sellPopup:c.default},data:function(){return{detail:{},banner:[],goodsConfig:{}}},onLoad:function(t){this.id=t.id,this.getDetail()},computed:(0,s.default)({},(0,o.mapState)({subText:function(t){return t.sku.subText},selectPath:function(t){return t.path.selectPath}}),{},(0,o.mapGetters)(["showPath"])),methods:(0,s.default)({},(0,o.mapMutations)(["setCurrent"]),{openSkupopup:function(){this.$refs.skupop.open()},openSellPopup:function(){this.getConfig(),this.$refs.sellpop.open()},sellConfirm:function(t){var e=this;this.post("/wap/OwnSmallShop/goodsAdd",{goods_id:this.id,recommend_remark:t.remark,markup_rate:t.rate,is_sale:1}).then((function(t){200==t.code&&(uni.showToast({title:"上架成功",icon:"none"}),e.getDetail())}))},unSell:function(){var t=this,e=this;uni.showModal({title:"确定要下架该商品吗",content:"下加后顾客将无法查看和购买该商品",success:function(i){i.confirm&&e.post("/wap/OwnSmallShop/goodsAdd",{goods_id:t.id,is_sale:2}).then((function(e){200==e.code&&(uni.showToast({title:"已下架",icon:"none"}),t.getDetail())}))}})},confirm:function(t){console.log(t),"addCart"==t.btnType?(console.log("加入购物车"),this.addCart(t)):console.log("购买")},getConfig:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.post("/wap/Supply/goodsDetailConfig");case 2:i=e.sent,200==i.code&&(t.goodsConfig=i.data.goods_config);case 4:case"end":return e.stop()}}),e)})))()},addCart:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={goods_id:t.id,number:1,spec_key:""},e.next=3,t.post("/wap/UserCart/addcart",i);case 3:n=e.sent,200==n.code&&uni.showToast({title:"已添加到购物车~",icon:"none"});case 5:case"end":return e.stop()}}),e)})))()},getDetail:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i,n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.post("/wap/Supply/getDetails",{goods_id:t.id});case 2:i=e.sent,200==i.code&&(t.detail=i.data,t.banner=i.data.getGoodsImages,n=i.data.sell_price,a=i.data.original_img,s=i.data.goods_name,t.setCurrent({price:n,image:a,name:s}));case 4:case"end":return e.stop()}}),e)})))()}})};e.default=u},"80d5":function(t,e,i){"use strict";i.r(e);var n=i("88fb"),a=i("55f6");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("135b");var r,o=i("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"d86d6d20",null,!1,n["a"],r);e["default"]=l.exports},"88fb":function(t,e,i){"use strict";var n={uniPopup:i("7049").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("uni-popup",{ref:"sellPopup",attrs:{type:"bottom"}},[i("v-uni-view",{staticClass:"bg-white rbox"},[i("v-uni-view",{staticClass:"cuIcon-roundclose abs absrt fs40 mt30 mr30",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"qui-cells"},[i("v-uni-view",{staticClass:"qui-cell"},[i("v-uni-view",{staticClass:"cell-hd w180"},[i("v-uni-view",{staticClass:"img1x1 radius12"},[i("v-uni-image",{attrs:{src:t.detail.original_img,mode:""}})],1)],1),i("v-uni-view",{staticClass:"cell-bd"},[i("v-uni-view",{staticClass:"fs32 line3 mr50"},[t._v(t._s(t.detail.goods_name))])],1)],1),i("v-uni-view",{staticClass:"qui-cells"},[i("v-uni-view",{staticClass:"qui-cell"},[i("v-uni-view",{staticClass:"cell-bd"},[t._v("推荐语")])],1),i("v-uni-view",{staticClass:"qui-cell"},[i("v-uni-view",{staticClass:"cell-bd"},[i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入推荐语"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1)],1),i("v-uni-view",{staticClass:"h24 bg-gray-muted"}),i("v-uni-view",{staticClass:"qui-cells"},[i("v-uni-view",{staticClass:"qui-cell"},[i("v-uni-view",{staticClass:"cell-bd text-red"},[t._v("赚：￥0.24")])],1),i("v-uni-view",{staticClass:"qui-cell"},[i("v-uni-view",{},[t._v("加价（%）：")]),i("v-uni-view",{staticClass:"cell-bd border h60 flex a-center pl20 mr20"},[i("v-uni-input",{staticClass:"qui-input",attrs:{type:"number",placeholder:"",value:"0"},model:{value:t.rate,callback:function(e){t.rate=e},expression:"rate"}})],1),i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",{staticClass:"qui-btn inline small w140",class:0==t.curBtn?"":"outline",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.minRate.apply(void 0,arguments)}}},[t._v("不加价")]),i("v-uni-view",{staticClass:"qui-btn inline small  w140 ml20",class:1==t.curBtn?"":"outline",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.maxRate.apply(void 0,arguments)}}},[t._v("加到最高")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"flex plr30 ptb30"},[i("v-uni-view",{staticClass:"flex-item h90 flex aj-center bg-theme",staticStyle:{"border-radius":"40px 40px 40px 40px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v("上架转发")])],1)],1)],1)},s=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},"8e87":function(t,e,i){"use strict";i.r(e);var n=i("76eb"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"8eda":function(t,e,i){var n=i("543e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0609aaf3",n,!0,{sourceMap:!1,shadowMode:!1})},a47a:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content img[data-v-3903a917]{max-width:100%!important}',""]),t.exports=e},b4f9:function(t,e,i){"use strict";i.r(e);var n=i("b64e"),a=i("8e87");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("098e");var r,o=i("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"3903a917",null,!1,n["a"],r);e["default"]=l.exports},b64e:function(t,e,i){"use strict";var n={skuPopup:i("a827").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page",[i("v-uni-view",{},[i("v-uni-swiper",{staticClass:"round-dot",staticStyle:{height:"750rpx"},attrs:{circular:!0,"indicator-dots":"true",autoplay:!0,interval:"5000",duration:"500"}},t._l(t.banner,(function(t,e){return i("v-uni-swiper-item",{key:e},[i("v-uni-navigator",{staticClass:"radius12",attrs:{"hover-class":"none",url:t.url}},[i("q-image",{attrs:{lazyLoad:!1,imgwh:[750,750],isRatio:!0,src:t.image_url}})],1)],1)})),1)],1),i("v-uni-view",{staticClass:"bg-white plr30 ptb30"},[i("v-uni-view",{staticClass:"flex a-center mt30"},[i("v-uni-view",{staticClass:"flex-item"},[i("v-uni-text",{staticClass:"text-red fs40 mr20"},[t._v("￥"+t._s(t.detail.sell_price))])],1)],1),i("v-uni-view",{staticClass:"fs34 mt20"},[t._v(t._s(t.detail.goods_name))])],1),i("v-uni-view",{staticClass:"qui-cells mt30"},[i("v-uni-view",{staticClass:"qui-cell"},[i("v-uni-view",{staticClass:"mr30 text-gray"},[t._v("配送至")]),i("v-uni-view",{staticClass:"cell-bd",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goto("/pages/my/address/address?from=order")}}},[t.showPath?i("v-uni-view",{},[t._v(t._s(t.showPath.address))]):i("v-uni-view",{staticClass:"text-gray"},[t._v("请选择收货地址")])],1),i("v-uni-view",{staticClass:"arrow-r"})],1),i("v-uni-view",{staticClass:"qui-cell",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openSkupopup()}}},[i("v-uni-view",{staticClass:"mr30 text-gray"},[t._v("规格与包装")]),i("v-uni-view",{staticClass:"cell-bd"},[t._v(t._s(""==t.subText?"请选择":t.subText))]),i("v-uni-view",{staticClass:"arrow-r"})],1)],1),i("v-uni-view",{staticClass:"qui-card mt30 panel"},[i("v-uni-view",{staticClass:"ptb30"},[i("v-uni-view",{staticClass:"divider divider-80"},[i("v-uni-text",{staticClass:"mlr20 fs30 fw600 text-default"},[t._v("商品详情")])],1)],1),i("v-uni-view",{staticClass:"card-bd content",staticStyle:{"min-height":"800rpx"}},[i("parser",{attrs:{html:t.detail.goods_content}})],1)],1),i("v-uni-view",{staticClass:"flex bg-white bor-1px-t shadow-xy0",attrs:{slot:"bottom"},slot:"bottom"},[i("v-uni-view",{staticClass:"w260 flex"},[t.detail.is_sale?i("v-uni-view",{staticClass:"flex-item flex-column flex aj-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.unSell()}}},[i("v-uni-image",{staticClass:"block wh60",attrs:{src:"/static/superior/icon_goods_down.png",mode:""}}),i("v-uni-view",{staticClass:"fs20"},[t._v("下架")])],1):i("v-uni-view",{staticClass:"flex-item flex-column flex aj-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openSellPopup()}}},[i("v-uni-image",{staticClass:"block wh60",attrs:{src:"/static/superior/icon_goods.png",mode:""}}),i("v-uni-view",{staticClass:"fs20"},[t._v("上架")])],1),i("v-uni-view",{staticClass:"flex-item flex-column flex aj-center",attrs:{url:"/pages/shengtai/cart/cart"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openSkupopup()}}},[i("v-uni-image",{staticClass:"block wh60",attrs:{src:"/static/superior/icon_cart.png",mode:""}}),i("v-uni-view",{staticClass:"fs20"},[t._v("购物车")])],1)],1),i("v-uni-view",{staticClass:"flex-item flex"},[t.detail.is_sale?i("v-uni-view",{staticClass:"text-white flex-item h100 flex aj-center",staticStyle:{"background-color":"#E5C877"}},[i("v-uni-view",{staticClass:"tc"},[i("v-uni-view",[t._v("已上架")])],1)],1):i("v-uni-view",{staticClass:"text-white flex-item h100 flex aj-center",staticStyle:{"background-color":"#E5C877"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openSellPopup()}}},[i("v-uni-view",{staticClass:"tc"},[t._v("￥10.00"),i("v-uni-view",[t._v("分享赚")])],1)],1),i("v-uni-view",{staticClass:"text-white flex-item h100 flex aj-center",staticStyle:{"background-color":"#F82840"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openSkupopup()}}},[i("v-uni-view",{staticClass:"tc"},[t._v("￥10.00"),i("v-uni-view",[t._v("自购省 "+t._s(t.goodsConfig.small_shop_markup))])],1)],1)],1)],1)],1),i("sku-popup",{ref:"skupop",attrs:{btnText:t.detail.isAvailableForPreOrder?"立即预订":"确定",btnClass:t.detail.isAvailableForPreOrder?"bg-green":"bg-theme"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}}),i("sell-popup",{ref:"sellpop",attrs:{maxVal:t.goodsConfig.small_shop_markup,detail:t.detail},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.sellConfirm.apply(void 0,arguments)}}})],1)},s=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},d771:function(t,e,i){"use strict";i.r(e);var n=i("2a73"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},e080:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.product-box[data-v-d86d6d20]{width:%?750?%;display:block;margin:0 auto}.product-content[data-v-d86d6d20]{margin:0 %?30?%}.product-delcom[data-v-d86d6d20]{color:#323232;font-size:%?26?%;border-bottom:1px solid #eee;padding:%?30?% 0}.product-footerlist[data-v-d86d6d20]{margin-top:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.product-footerlist .item[data-v-d86d6d20]{-webkit-transition:opacity 0s;transition:opacity 0s;margin-bottom:10px;border:1px solid var(--themeColor);border-radius:5px;color:var(--themeColor);padding:%?10?% %?10?%;min-width:%?120?%;text-align:center;margin-right:%?20?%}.product-footerlist .item.productActive[data-v-d86d6d20]{background-color:var(--themeColor);color:#fff;border:1px solid var(--themeColor)}.product-footerlist .item.noneActive[data-v-d86d6d20]{background-color:#eee;opacity:.4;color:#000;border:1px dashed var(--grayColor);pointer-events:none}.rbox[data-v-d86d6d20]{border-top-left-radius:%?36?%;border-top-right-radius:%?36?%;overflow:hidden}',""]),t.exports=e}}]);