(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-integral-on-line"],{"0ae3":function(t,e,i){"use strict";i.r(e);var a=i("7ac1"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"137c":function(t,e,i){"use strict";i.r(e);var a=i("d85e"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"7ac1":function(t,e,i){"use strict";var a=i("ee27");i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("c964")),s={name:"u-tabs",props:{isScroll:{type:Boolean,default:!0},list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},height:{type:[String,Number],default:80},fontSize:{type:[String,Number],default:30},duration:{type:[String,Number],default:.5},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#303133"},barWidth:{type:[String,Number],default:40},barHeight:{type:[String,Number],default:6},gutter:{type:[String,Number],default:30},bgColor:{type:String,default:"#ffffff"},name:{type:String,default:"name"},bold:{type:Boolean,default:!0},activeItemStyle:{type:Object,default:function(){return{}}},showBar:{type:Boolean,default:!0},barStyle:{type:Object,default:function(){return{}}}},data:function(){return{scrollLeft:0,tabQueryInfo:[],componentWidth:0,scrollBarLeft:0,parentLeft:0,id:this.$u.guid(),currentIndex:this.current,barFirstTimeMove:!0}},watch:{list:function(t,e){var i=this;this.currentIndex=0,this.$nextTick((function(){i.init()}))},current:{immediate:!0,handler:function(t,e){var i=this;this.$nextTick((function(){i.currentIndex=t,i.scrollByIndex()}))}}},computed:{tabBarStyle:function(){var t={width:this.barWidth+"rpx",transform:"translate(".concat(this.scrollBarLeft,"px, -100%)"),"transition-duration":"".concat(this.barFirstTimeMove?0:this.duration,"s"),"background-color":this.activeColor,height:this.barHeight+"rpx","border-radius":"".concat(this.barHeight/2,"px")};return Object.assign(t,this.barStyle),t},tabItemStyle:function(){var t=this;return function(e){var i={height:t.height+"rpx","line-height":t.height+"rpx","font-size":t.fontSize+"rpx","transition-duration":"".concat(t.duration,"s"),padding:t.isScroll?"0 ".concat(t.gutter,"rpx"):"",flex:t.isScroll?"auto":"1"};return e==t.currentIndex&&t.bold&&(i.fontWeight="bold"),e==t.currentIndex?(i.color=t.activeColor,i=Object.assign(i,t.activeItemStyle)):i.color=t.inactiveColor,i}}},methods:{init:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$uGetRect("#"+t.id);case 2:i=e.sent,t.parentLeft=i.left,t.componentWidth=i.width,t.getTabRect();case 6:case"end":return e.stop()}}),e)})))()},clickTab:function(t){t!=this.currentIndex&&this.$emit("change",t)},getTabRect:function(){for(var t=uni.createSelectorQuery().in(this),e=0;e<this.list.length;e++)t.select("#u-tab-item-".concat(e)).fields({size:!0,rect:!0});t.exec(function(t){this.tabQueryInfo=t,this.scrollByIndex()}.bind(this))},scrollByIndex:function(){var t=this,e=this.tabQueryInfo[this.currentIndex];if(e){var i=e.width,a=e.left-this.parentLeft,n=a-(this.componentWidth-i)/2;this.scrollLeft=n<0?0:n;var s=e.left+e.width/2-this.parentLeft;this.scrollBarLeft=s-uni.upx2px(this.barWidth)/2,1==this.barFirstTimeMove&&setTimeout((function(){t.barFirstTimeMove=!1}),100)}}},mounted:function(){this.init()}};e.default=s},"7c08":function(t,e,i){"use strict";i.r(e);var a=i("8d07"),n=i("0ae3");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("b962");var r,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"56229554",null,!1,a["a"],r);e["default"]=o.exports},"7fa2":function(t,e,i){"use strict";var a=i("a6b0"),n=i.n(a);n.a},"84bb":function(t,e,i){"use strict";i.r(e);var a=i("fe36"),n=i("137c");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("7fa2");var r,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"513bcac8",null,!1,a["a"],r);e["default"]=o.exports},"85f1":function(t,e,i){t.exports=i.p+"static/img/index30.e7a956da.png"},"8d07":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-tabs",style:{background:t.bgColor},attrs:{id:t.id}},[i("v-uni-scroll-view",{staticClass:"u-scroll-view",attrs:{"scroll-x":!0,"scroll-left":t.scrollLeft,"scroll-with-animation":!0}},[i("v-uni-view",{staticClass:"u-scroll-box",class:{"u-tabs-scorll-flex":!t.isScroll}},[t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"u-tab-item",style:[t.tabItemStyle(a)],attrs:{id:"u-tab-item-"+a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickTab(a)}}},[t._v(t._s(e))])})),t.showBar?i("v-uni-view",{staticClass:"u-tab-bar",style:[t.tabBarStyle]}):t._e()],2)],1)],1)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))},a3d0:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-513bcac8]{position:relative;background-color:#f8f8f8}@font-face{font-family:HMfont-home;src:url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAABDkAAsAAAAAHNQAABCUAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCEOAqqPKIAATYCJAM4Cx4ABCAFhG0HgUIbsBczo8LGAQApXpzs/3DAzQnrqJVQobqjkywr6K3VnnGPu9Hok7hbbDQrMa3YYH8hMXBogoTzwQb7Cx1kafc7LoV7nPdDKXng//D1vvHHmJQxLb6PhyYHA5TjobT1Ahe8Yj0Bel0CGZ62+e/eIdwdcCPswEj8LgoVo7G/whxWfmb0JgvdWPLFRbsoNzNXdS7DRYaDbmUCvEXgheNFZKuuXTu+aEU1WZOVcF6HmhlSCYD7H5tIg0qTmVZRu7s/lUSaaoKS9pbWFqJJPkHSvAEC8qYvrtm2JxQywhzK2SfN9jDt5aDpt8kIchy0s3wRg+cEDyyL1Gjv/0BR8z+X2vyO6G5ACjPM2Jv/kxz8wNafHP0SH7XNFUltLPemCOSEuj/MFYBU5wAtGDXh5vzUTW2j/5KagmzC/t9v7y4vg+OMRLwoYBX7mqMT0LTlBLl5HwAPJnsrAWq90PqiBwuZMscZ1C9VGb1mFFGDEvWoghTgm/3nw38eYUBUSeA9ptuMzhWP6CnnWSmqHGeaRRcCLo/iyCLhBJCP+jsz/U2o4b4D1fw7hicAtNVFucyfljwd+lM9sx8fV+GEPO940Lb+jASoiKpq6hqaWtrS1Y7G/7wq2KltWPMj1qFwqECFwhWIFJ5AlcIXqFG0BeoUHYEGRVegSdETaFH0BdoUAZHuWjgQATQVCHT4be+atmrX6mUNeAWg+gE0muCtP9vhJIvE2tPS0aWD7CMMIF3Shslisx04nYhOo7FwnK5OV6peT8FmMckJTC7XkLV2OJTAz3pkMUl1XU87pJQQTOCcvpRZU4mQYa2upA2dlZXiXsMYFpZotVJSMWjs8inptH/3IVRdnVfTCSu4BEN26erEHIyVQgYQydTZpPut5IJTT8c7zVtLICfML4kL4IAySN6neVUQEGHYRWxJzy9tvvtVbt8+Hq7LLy95wyxipk2XPrlfGueR8BzXrk8uJkbH4zP3PElIY8T2xpM0xV8QJjH6dOl8LrBDVDBSg+4NWThiuyw1pg6hQ+yicS1L1JHvhOEBr5mGpWUXbFS5Rshz/DLGeg2qcy8vgln+ZkxXQytRtsvny6uMysNUI+s1FzjjHq+dSKulGvPTvPwVmoI2Toen7K7Efgc01rrMYDSU5GcvBhMIRyH2Y72RCUkgpeUh7Jn3rqySk3c1lpC5CJ0zQktsu63zHuocSwVg4ZgXHoTc9SCBeBrju2cUMDDt2ZCAwADYdQ3kMjGm/PN5fLdsdJyu0cfGxicOCM8pSecvpDGwXpDWYqUBH66TifQOImT6TKN4Buv+7WW5sFsFxTBOyY51svEoxFgAhbWC3NuzSpiYJlSdBIWjAAURRzd941tLpD2D6kLgCDEcT/sKXOEV0sKioNREw0YqHazPM2fr1dL4OM+D4hnDyLsaFNynxsCMGMmdgWf/6rvRKZN7o4kVU1l5m99ajfRIZUTnK2KBNy994FPp/WxnOiS6msJFnF3XcqJviugTy4XXdBjl/4srzMjY50JQrr1aNMWbp97D6fN+1nYjPB0NKuW6G8ZZIzlPqcw551595Ar0weMyL5/2U1cjD/MyYkPUWhE41+KuE5JVKRWGGyR6fiFhdqEaZ8ZASohSmGRcnKYwuX4l9IhUk0l9HIMHPuuUtP59MWP3epKdxHQvrImZ18/64M1+dz0Jk3t9rCHEf5T8u+gX2ajrBl5tAokz/AFTLihRgsraYThf4zK19rS8Ii9Ckd6nOtZGiO/wsxmyZnG+pkoirBl5nAQXm+XAUhDQh1YxB5qe/WepUh0P0ird8D4LmBPkFZACMmlJCAA2ISjPrkF4dMfQkuBgNCY8qI9gDuLKAJJR0G1Jy0eDFIbmnSMytrmDFpbHeGJbsKD4s5KOcQWNNxGZ5meZZUSaUU1nDy0cS/OMA2jAVb+wXnF4wxSd2XSgClRWDI9TenjWXTtQKlrSL3I2ecIO0zlUXBUYrblrj8SDK4vYVfNCT/ITRm0ZrwAlTV0cTOcbc9fElZUiVzsx7uXPp8aydaPuKBHKGc81bs7L+qlJUzC9YWy10UhUyh51z03PAZ3XFk+WF+3R3lL4QeeeMFVZ/NnaZhKJy9wAIVMAAFiF5PqSYDAOTmzJXtYOW6Vm9aSZOtUIsAyzhBpkxpBouI3V6YCh/T3eKEgaygxVmEqaQatyANDbRmr9/SDTZrK4Q9qp3+vbvXCbBcyVURxSDA1aHepHAIhLNgSKNPV8dRrUa5nWhUxk+jhdqiCBLIZ33cGMWEVt++wvwOe942lUKazTTySP6AKMHjD30DNo2LkbQTY02XJ27tWH6/fZGBMjiVjfxb+Uy7GuXrJaKsvMqNrUGABdRpb0jBSHD06EFsMmcNNQFYGkZwMCSbLLjY2fnpYxfk+C5OUhkvuCfbsECVR22awVGCiRVEDrvjOorVtBSjW5tQ3OJbnGXBLmrVqVt71wwZAjVedubasmU0BAEe1WEIwLOPpsn+cvLv47u7wpSx7ho5PjLk2zTzWZJsUzM8QZj4qECydpFk2yyikS5BQCBsLILhSoS27dZygh+Zf2DilcqvGQv8hgqoK2Y3vGPNyjoLRojgdXmVKV7ewat0S2yCFIHdSTeXJxT6jg33p49Chaj2pg1kOYosZPOBcAlYGqr2+doaWB++E+NteIy4JZS5dlQXLf84WFaGsrsERpVWRjK6wRmSeg5oYCIiOLat2/EHwNaS6CNY2tVaRFvei9raJmh9R5CKE/bpgnEtXMVBJCLyGILZFelLKExy77Xr4plGHP0qjaGNKXupr+rXEY2xW9rkhIeK7ri9mVYaRLX+2rUggJD9UO8a47HRHqiWYys4nqOrUdKSPt1OYNLzQfNxXpolby67Gc63KBjZhT0NOgj5V+DBkmVlYRlDZFVIkGdGQ6A6LHoEbuGkYy/Ewn4HdxDcPFX2ylGNPgo+dfadSgC4HdPBnHj8Nac6JutK7E234bU8Zq/33lqiWo0terdfhPWTcXf4R9tIWg8H04xb9D7CMo9442YpRPqdvUFH8UtHx0gYtq29Lhu8lwUV1bGkyHV9mrTn4anIOFi9wYKvtwxTrBt9cbnI/BVrLdoADku36wtXk6urgd1gJGEi9HkB27w9/Gz2ZMCmSHTc9FVw0uHPiO9wIM3Mc9kdrsdgncEQHXq5DasqnfDa43Din1WJ+OpP1I0cO8drRWHsmIgis1I/+h0WBBoWnqVP7qaQYxuXJfIIWVO2GVza0EWL6RXobfMR8i6EvrOw8lSdzEYtQTrmwYKUADGpVBKQNwU0WqPC2agAQ0AeIs/yyBisUuD5QU3gWS/NYOnVRiLHiIixRWHey6cGrMVdCyY5sx6RYhV5S3RoO3+3jhka1bN++ESZesEzAWvINptXXpSBpiA6b5zjQk/Y479m8PcqKcIRnX911oydrQ0rfjIQ2VLNf0erh2chWIAdEeUriOmKO0T8jl1E6tmRO4y+VtaOkaVPrfEECIBOg4o0EM0AYCR93UeYyW7RL1He07hISwVvb/NziFPbvEzCyxOGiRTjvxE1zGzil7hXTvIEF4zS/tUFT5MkAb9w7MRfL5QVfEiotFSTP7TuoVwPp6uB0F9RobxxWamihGPWGdiJRXIMOZWF7uQCrKh2ul4x0Sb/mLF/+/YYQjLNDU103KRzSaXPAdSz70nTPNP9CC4MffmeUuT4Tl5TlNKIV8liyPlcleA5CaB+B83q0HC/48PJ97iy7vw4MfROonLACLCsfO1T7LoqIxoojYFo6BS/T8GH+31h6tu3zaeULDhNdPPcZvdc7Qj3VGVT29KuguM6o06vjx/sR0DJcii9durAZOTrhOW8eVPYQOP9IULCnZnYOYjJRz21e+5HX2NhhHO9FUBw6rmB9n6a7jdL76eziU/M0YUW0/Hkd0CW2Jzt0/khCxnsSEviTnQC4WfegavUP54evnDS1zc63tvQEEkm8bZyQRfNWpEegHhdOOMxjHw0uDj3ac/HzWnskTdmR5RQbwflgEBOaOlXqzae5io5Qs1+XkqogcgxOJdGa1oCI2sS9lrmt/nq56kD9EhAIf62KaWlQc6tB6N8PONwJW7dhZBZ2iDCYu2jjbxGMlOjwMVzrrxgLmp9wP8gGsBRuQf0gOCKBfoeekjW+kI1O823co9uPHTdMRD+9IsXwZfrxGHt8TH9hN9pA7MQlwo8EH8Yv4WYVG3sg11ONyvb3VQqwJu1qDUAgf3GVbsO+OVeMUvg0b4A04hA+t0reEU0R42P+/+OW8b/ggbxD79svHYhROeck1GeyubnYGOP8BHNrAZDW1vVYOcofw1w+iIkkyKurBB/PF/PP8xQ93DqrLcCO8TG0zHncp/uob6Y/rD+5g/KN/FcD0UUqyyQbr9nXGSTaGQmfbRtsZW581PtPaeqDxgHbq6C8yJ8Tyh4xsnyBb+CMkR0Zm6WbFgQAgHz+RGIv+DfyL0uNKnUrjdumixyyufHL8dDX3OKrHa13v7r1+K8LOsCrNT2B1BTlGi5ITViuzZ8y+UusUk1ve2c4Oly74tu63lLzodIH6J3GXIpvylJELf7cD4CAJ+PRs2K4bBYc+OascxKM6QbQuwvwPDbJYg4csTnsbhV4eH7Yw+twp1rHjrFOMJYwYqo/ZlWqV+3n7cVg5BjEGXIMxAjM5B7CjUxNPJ9KOXiaX89zDGw+TpDs58zCxTxmUcAW2j7PPok0Mp9CUcpgODswcrGnH9rfv11s5E9a/5zC3b2dyOGJODgVvK7cxNnCasLZ/rIchmNdVSU3HqdjF8sKayr4v7FkILBuGZw8zH3mK3olEZg3YIfkayQWDhnGAKTkxHOUZanPBf422rCdsW6MPhl7sJywvtcIyXfE1Nqiv+nv16aZPTOiKNJLus9nHZ9O4JNfxYcprKpWD/EG80m09OsqShTJHtYQPwL5EqPWE7iHxknjQS5khUlYpusHNy20D+gRd71aJZ7aPNbAgLYy5xjxjy1Vsc9LC6MO0NLKkjUiJId4QIS07tqM6Zc/hCE7xKPyI+ShiBylzinMH2iF34SdDp4YM3oZDkNFES4y7Xk/19Pt7w7hgH5j3O+/zUGohsg+OOP/M9/DxdJcGnaeo/0GlL6WLSI1hiyrDvkBgi29m7Efn8/y6L1G+Qg3SEXTdonuT799Dm/007Uu99X/IPR89WzpsSW7mQgA2yzRoefutDc0GgM/xsD25d75uvnVBr2eX5QJJyuGuX4Abjmh+bmMrLndoTJc+QcsbjPrE56OaDZ/U7YC85oSvaDnjq+rO+aZjAX23jBQCVMg44EjtDx/0tfJR108+6RuFAWPNXb5i6g1f1Q/lm+4Q/iBb9k6Ibl8CNoI9tEegjp1RQG6d2l9odW5C0G0f+MMQqQSKNI+Wf6DDICNF3NlSxIAJvMD7z9hwnhl84BE7SQcRv80yw0qZdrysbvkGbMQ6sQft8WLq2Jm7y23s93+h1bkJnE7vF/9hiPTyoJDKEeBDdahOq9Iw7mxJCDVAWwZewDuhOH+iDDz7dSN2khpyhP1WRq5msGqqX1/G+iNI6b0Cr4YJOoPJYpMcLsXjS2t6JHc9c9cIsXs+UOPKztkqskbl5MHo0HQSYWdPA10bnQ20cfYm0DHK9uQu46BW+U5Iigz0QvRUcX9QPCBwLzP/nx7bfCjmAnymyVitAAAAAA==") format("woff2")}.status[data-v-513bcac8]{width:100%;height:0;position:fixed;z-index:10;background-color:#fff;top:0}.header[data-v-513bcac8]{width:100%;height:%?100?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;z-index:10;background:#fff}.place[data-v-513bcac8]{width:100%;background-color:#fff;height:%?88?%}.placeon[data-v-513bcac8]{width:100%;background-color:#fff;height:%?80?%}.cake[data-v-513bcac8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;background-color:#f1f1f1;padding:%?14?% %?10?%}.cake .Alll[data-v-513bcac8]{padding:%?10?% %?10?%}.cake .Alll .guess uni-image[data-v-513bcac8]{width:%?344?%;height:%?344?%}.cake .Alll .guess .guess-tot[data-v-513bcac8]{padding-bottom:%?24?%;width:%?344?%;background-color:#fff;border-radius:%?10?%}.cake .Alll .guess .guess-all[data-v-513bcac8]{margin-top:%?10?%;padding-left:%?12?%}.cake .Alll .guess .guess-all .guess-title[data-v-513bcac8]{font-size:%?26?%;color:#000;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.cake .Alll .guess .guess-all .coupon[data-v-513bcac8]{margin-top:%?10?%;width:%?174?%;height:%?42?%;line-height:%?42?%;font-size:%?20?%;text-align:center;background-color:#fd8895;border-radius:%?10?%;color:#fff}.cake .Alll .guess .guess-all .guess-red[data-v-513bcac8]{margin-top:%?10?%;padding-bottom:%?5?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?20?%;color:#888}.cake .Alll .guess .guess-all .guess-red uni-text[data-v-513bcac8]{margin-right:%?10?%}.cake .Alll .guess .guess-all .guess-red .red[data-v-513bcac8]{font-weight:700;color:#df2a2a;font-size:%?26?%}.cake .Alll .guess .guess-all .guess-red .red .lineation[data-v-513bcac8]{margin-left:%?12?%;color:#888;font-size:%?20?%;text-decoration:line-through;font-weight:300}body.?%PAGE?%[data-v-513bcac8]{background-color:#f8f8f8}',""]),t.exports=e},a6b0:function(t,e,i){var a=i("a3d0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("45cba150",a,!0,{sourceMap:!1,shadowMode:!1})},b962:function(t,e,i){"use strict";var a=i("ec3c"),n=i.n(a);n.a},ba2e:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-56229554],\r\nuni-scroll-view[data-v-56229554]{box-sizing:border-box}[data-v-56229554]::-webkit-scrollbar,[data-v-56229554]::-webkit-scrollbar,[data-v-56229554]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-box[data-v-56229554]{position:relative}uni-scroll-view[data-v-56229554] ::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-view[data-v-56229554]{width:100%;white-space:nowrap;position:relative}.u-tab-item[data-v-56229554]{position:relative;display:inline-block;text-align:center;-webkit-transition-property:background-color,color;transition-property:background-color,color}.u-tab-bar[data-v-56229554]{position:absolute;bottom:0}.u-tabs-scorll-flex[data-v-56229554]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}',""]),t.exports=e},c197:function(t,e,i){t.exports=i.p+"static/img/index31.a221afaf.png"},d85e:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={components:{},data:function(){return{showHeader:!0,afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,Tabs:["精选好店","美食","电器","美妆","生活用品","女装","男装","女靴"],current:0}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},methods:{change:function(t){this.current=t}}};e.default=a},ec3c:function(t,e,i){var a=i("ba2e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("86e2d6f4",a,!0,{sourceMap:!1,shadowMode:!1})},fe36:function(t,e,i){"use strict";var a={uTabs:i("7c08").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t.showHeader?a("v-uni-view",{staticClass:"status",style:{position:t.headerPosition,top:t.statusTop,opacity:t.afterHeaderOpacity}}):t._e(),t.showHeader?a("v-uni-view",{staticClass:"header",style:{position:t.headerPosition,top:t.headerTop,opacity:t.afterHeaderOpacity}},[t.showHeader?a("v-uni-view",{staticClass:"place"}):t._e(),a("v-uni-view",{staticClass:"Tabs"},[a("u-tabs",{attrs:{"bg-color":"#fff","active-color":"#222","inactive-color":"#222",list:t.Tabs,"is-scroll":!0,current:t.current},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}})],1)],1):t._e(),t.showHeader?a("v-uni-view",{staticClass:"placeon"}):t._e(),a("v-uni-view",{staticClass:"cake"},[a("v-uni-view",{staticClass:"Alll"},[a("v-uni-view",{staticClass:"guess"},[a("v-uni-view",{staticClass:"guess-tot"},[a("v-uni-image",{attrs:{src:i("85f1")}}),a("v-uni-view",{staticClass:"guess-all"},[a("v-uni-view",{staticClass:"guess-title"},[t._v("韩国口红人们色号101唇釉口红")]),a("v-uni-view",{staticClass:"guess-red"},[a("v-uni-view",{staticClass:"red"},[t._v("￥53.8"),a("v-uni-text",{staticClass:"lineation"},[t._v("￥63.8")])],1),a("v-uni-text",[t._v("已售724")])],1),a("v-uni-view",{staticClass:"coupon"},[t._v("分享赚1.57元")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"Alll"},[a("v-uni-view",{staticClass:"guess"},[a("v-uni-view",{staticClass:"guess-tot"},[a("v-uni-image",{attrs:{src:i("c197")}}),a("v-uni-view",{staticClass:"guess-all"},[a("v-uni-view",{staticClass:"guess-title"},[t._v("韩国口红人们色号101唇釉口红")]),a("v-uni-view",{staticClass:"guess-red"},[a("v-uni-view",{staticClass:"red"},[t._v("￥53.8"),a("v-uni-text",{staticClass:"lineation"},[t._v("￥63.8")])],1),a("v-uni-text",[t._v("已售724")])],1),a("v-uni-view",{staticClass:"coupon"},[t._v("分享赚1.57元")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"Alll"},[a("v-uni-view",{staticClass:"guess"},[a("v-uni-view",{staticClass:"guess-tot"},[a("v-uni-image",{attrs:{src:i("c197")}}),a("v-uni-view",{staticClass:"guess-all"},[a("v-uni-view",{staticClass:"guess-title"},[t._v("韩国口红人们色号101唇釉口红")]),a("v-uni-view",{staticClass:"guess-red"},[a("v-uni-view",{staticClass:"red"},[t._v("￥53.8"),a("v-uni-text",{staticClass:"lineation"},[t._v("￥63.8")])],1),a("v-uni-text",[t._v("已售724")])],1),a("v-uni-view",{staticClass:"coupon"},[t._v("分享赚1.57元")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"Alll"},[a("v-uni-view",{staticClass:"guess"},[a("v-uni-view",{staticClass:"guess-tot"},[a("v-uni-image",{attrs:{src:i("c197")}}),a("v-uni-view",{staticClass:"guess-all"},[a("v-uni-view",{staticClass:"guess-title"},[t._v("韩国口红人们色号101唇釉口红")]),a("v-uni-view",{staticClass:"guess-red"},[a("v-uni-view",{staticClass:"red"},[t._v("￥53.8"),a("v-uni-text",{staticClass:"lineation"},[t._v("￥63.8")])],1),a("v-uni-text",[t._v("已售724")])],1),a("v-uni-view",{staticClass:"coupon"},[t._v("分享赚1.57元")])],1)],1)],1)],1)],1)],1)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))}}]);