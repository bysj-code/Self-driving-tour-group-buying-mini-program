(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{3735:function(r,e,i){"use strict";i.r(e);var t=i("536d"),o=i("48c7");for(var a in o)"default"!==a&&function(r){i.d(e,r,(function(){return o[r]}))}(a);i("7d39"),i("5b4c");var n,l=i("f0c5"),d=Object(l["a"])(o["default"],t["b"],t["c"],!1,null,"7752c730",null,!1,t["a"],n);e["default"]=d.exports},"394f":function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-7752c730]{height:calc(100vh - 44px);overflow:auto}.content[data-v-7752c730]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220215/fb8f345764f2443691fcbbed4cfb1341.png);background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-7752c730]{text-align:center}.logo uni-image[data-v-7752c730]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-7752c730]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-7752c730]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-7752c730]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-7752c730]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-7752c730]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-7752c730]{color:#b49950}.picker-select-input[data-v-7752c730]{line-height:%?88?%}',""]),r.exports=e},"48c7":function(r,e,i){"use strict";i.r(e);var t=i("4e2d"),o=i.n(t);for(var a in t)"default"!==a&&function(r){i.d(e,r,(function(){return t[r]}))}(a);e["default"]=o.a},"4e2d":function(r,e,i){"use strict";var t=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5"),i("96cf");var o=t(i("3b8d")),a={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,faqirenxingbieOptions:[],faqirenxingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var r=(0,o.default)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:[],e=uni.getStorageSync("loginTable"),this.tableName=e,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yonghuxingbieOptions[0]),"faqiren"==this.tableName&&(this.faqirenxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.faqirenxingbieOptions[0]),this.styleChange();case 6:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),methods:{yonghuxingbieChange:function(r){this.yonghuxingbieIndex=r.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},faqirenxingbieChange:function(r){this.faqirenxingbieIndex=r.target.value,this.ruleForm.xingbie=this.faqirenxingbieOptions[this.faqirenxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var r=(0,o.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.zhanghao||"yonghu"!=this.tableName){r.next=3;break}return this.$utils.msg("账号不能为空"),r.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){r.next=6;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if("yonghu"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){r.next=9;break}return this.$utils.msg("两次密码输入不一致"),r.abrupt("return");case 9:if(this.ruleForm.xingming||"yonghu"!=this.tableName){r.next=12;break}return this.$utils.msg("姓名不能为空"),r.abrupt("return");case 12:if("yonghu"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){r.next=15;break}return this.$utils.msg("邮箱应输入邮件格式"),r.abrupt("return");case 15:if("yonghu"!=this.tableName||!this.ruleForm.shoujihaoma||this.$validate.isMobile(this.ruleForm.shoujihaoma)){r.next=18;break}return this.$utils.msg("手机号码应输入手机格式"),r.abrupt("return");case 18:if(this.ruleForm.faqizhanghao||"faqiren"!=this.tableName){r.next=21;break}return this.$utils.msg("发起账号不能为空"),r.abrupt("return");case 21:if(this.ruleForm.mima||"faqiren"!=this.tableName){r.next=24;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 24:if("faqiren"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){r.next=27;break}return this.$utils.msg("两次密码输入不一致"),r.abrupt("return");case 27:if(this.ruleForm.faqixingming||"faqiren"!=this.tableName){r.next=30;break}return this.$utils.msg("发起姓名不能为空"),r.abrupt("return");case 30:if("faqiren"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){r.next=33;break}return this.$utils.msg("邮箱应输入邮件格式"),r.abrupt("return");case 33:if("faqiren"!=this.tableName||!this.ruleForm.lianxishouji||this.$validate.isMobile(this.ruleForm.lianxishouji)){r.next=36;break}return this.$utils.msg("联系手机应输入手机格式"),r.abrupt("return");case 36:return r.next=38,this.$api.register("".concat(this.tableName),this.ruleForm,this.emailcode);case 38:this.$utils.msgBack("注册成功");case 40:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}()}};e.default=a},"536d":function(r,e,i){"use strict";var t,o=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"box",style:{padding:"48rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 5%",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.39)",borderRadius:"48rpx",borderWidth:"0",width:"90%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"logo",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-image",{style:{padding:"0",boxShadow:"0 0 0px #59f43e",margin:"0 auto",borderColor:"#ccc",borderRadius:"40rpx",borderWidth:"2rpx",width:"160rpx",borderStyle:"solid",url:"http://codegen.caihongy.cn/20220215/2134695ff2c24277b99596995f4f99ce.webp",isShow:!0,height:"160rpx"},attrs:{src:"http://codegen.caihongy.cn/20220215/2134695ff2c24277b99596995f4f99ce.webp",mode:"aspectFill"}})],1),"yonghu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(163, 169, 228, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"账号"},model:{value:r.ruleForm.zhanghao,callback:function(e){r.$set(r.ruleForm,"zhanghao",e)},expression:"ruleForm.zhanghao"}})],1):r._e(),"yonghu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(163, 169, 228, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1):r._e(),"yonghu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(163, 169, 228, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"确认密码"},model:{value:r.ruleForm.mima2,callback:function(e){r.$set(r.ruleForm,"mima2",e)},expression:"ruleForm.mima2"}})],1):r._e(),"yonghu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(163, 169, 228, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"姓名"},model:{value:r.ruleForm.xingming,callback:function(e){r.$set(r.ruleForm,"xingming",e)},expression:"ruleForm.xingming"}})],1):r._e(),"yonghu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-picker",{attrs:{value:r.yonghuxingbieIndex,range:r.yonghuxingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.yonghuxingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 20rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(163, 169, 228, 1)",backgroundColor:"rgba(255, 255, 255, 1)",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1):r._e(),"yonghu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(163, 169, 228, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"邮箱"},model:{value:r.ruleForm.youxiang,callback:function(e){r.$set(r.ruleForm,"youxiang",e)},expression:"ruleForm.youxiang"}})],1):r._e(),"yonghu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(163, 169, 228, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"手机号码"},model:{value:r.ruleForm.shoujihaoma,callback:function(e){r.$set(r.ruleForm,"shoujihaoma",e)},expression:"ruleForm.shoujihaoma"}})],1):r._e(),"faqiren"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(163, 169, 228, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"发起账号"},model:{value:r.ruleForm.faqizhanghao,callback:function(e){r.$set(r.ruleForm,"faqizhanghao",e)},expression:"ruleForm.faqizhanghao"}})],1):r._e(),"faqiren"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(163, 169, 228, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1):r._e(),"faqiren"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(163, 169, 228, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"确认密码"},model:{value:r.ruleForm.mima2,callback:function(e){r.$set(r.ruleForm,"mima2",e)},expression:"ruleForm.mima2"}})],1):r._e(),"faqiren"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(163, 169, 228, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"发起姓名"},model:{value:r.ruleForm.faqixingming,callback:function(e){r.$set(r.ruleForm,"faqixingming",e)},expression:"ruleForm.faqixingming"}})],1):r._e(),"faqiren"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-picker",{attrs:{value:r.faqirenxingbieIndex,range:r.faqirenxingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.faqirenxingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 20rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(163, 169, 228, 1)",backgroundColor:"rgba(255, 255, 255, 1)",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1):r._e(),"faqiren"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(163, 169, 228, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"邮箱"},model:{value:r.ruleForm.youxiang,callback:function(e){r.$set(r.ruleForm,"youxiang",e)},expression:"ruleForm.youxiang"}})],1):r._e(),"faqiren"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(163, 169, 228, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"联系手机"},model:{value:r.ruleForm.lianxishouji,callback:function(e){r.$set(r.ruleForm,"lianxishouji",e)},expression:"ruleForm.lianxishouji"}})],1):r._e(),i("v-uni-button",{staticClass:"btn-submit",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 auto",borderColor:"rgba(163, 169, 228, 1)",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"80rpx",color:"#333",borderWidth:"8rpx",width:"160rpx",fontSize:"32rpx",borderStyle:"solid",height:"160rpx"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.register.apply(void 0,arguments)}}},[r._v("注册")])],1)],1)},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return t}))},"5b4c":function(r,e,i){"use strict";var t=i("5b5d"),o=i.n(t);o.a},"5b5d":function(r,e,i){var t=i("394f");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var o=i("4f06").default;o("1f7bf518",t,!0,{sourceMap:!1,shadowMode:!1})},"7d39":function(r,e,i){"use strict";var t=i("d10c"),o=i.n(t);o.a},d10c:function(r,e,i){var t=i("d148");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var o=i("4f06").default;o("bf937d74",t,!0,{sourceMap:!1,shadowMode:!1})},d148:function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,".btn-submit[data-v-7752c730]{height:auto!important;line-height:%?160?%}",""]),r.exports=e}}]);