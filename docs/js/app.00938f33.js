(function(t){function e(e){for(var a,l,i=e[0],s=e[1],c=e[2],v=0,p=[];v<i.length;v++)l=i[v],o[l]&&p.push(o[l][0]),o[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},o={1:0},r=[];function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/wenwen-ui-example/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=s;r.push([8,0]),n()})({8:function(t,e,n){t.exports=n("Vtdi")},"8zb5":function(t,e,n){},B4Av:function(t,e,n){"use strict";var a=n("o2Ye"),o=n.n(a);o.a},B7P3:function(t,e,n){"use strict";var a=n("8zb5"),o=n.n(a);o.a},DiIT:function(t,e,n){},Jm0j:function(t,e,n){"use strict";var a=n("DiIT"),o=n.n(a);o.a},Snyz:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var a=n("Kw5r"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("wen-navbar",{directives:[{name:"show",rawName:"v-show",value:t.navShow,expression:"navShow"}],staticClass:"fixed",attrs:{title:"wenwen-ui"},on:{leftClick:t.onLeftClick}}),n("div",{staticClass:"content"},[n("router-view")],1)],1)},r=[],l=new a["a"]({data:{navShow:!0},created:function(){var t=this;this.$on("NAV_HIDE",function(){t.navShow=!1}),this.$on("NAV_SHOW",function(){t.navShow=!0})}}),i={computed:{navShow:function(){return l.navShow}},mounted:function(){document.body.addEventListener("touchstart",function(){},!1)},methods:{onLeftClick:function(){console.log("click"),this.$router.back()}}},s=i,c=(n("nNx0"),n("KHd+")),u=Object(c["a"])(s,o,r,!1,null,null,null),v=u.exports,p=n("jE9Z"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("wenwen-ui")]),n("p",{staticStyle:{"line-height":"40px"}},[t._v("面向移动端Vue组件库")]),n("router-link",{attrs:{to:"/button"}},[t._v("Button")]),n("router-link",{attrs:{to:"/icon"}},[t._v("Icon")]),n("router-link",{attrs:{to:"/cell"}},[t._v("Cell")]),n("router-link",{attrs:{to:"/list"}},[t._v("List")]),n("router-link",{attrs:{to:"/loading"}},[t._v("Loading")]),n("router-link",{attrs:{to:"/navbar"}},[t._v("Navbar")]),n("router-link",{attrs:{to:"/toast"}},[t._v("Toast")]),n("router-link",{attrs:{to:"/spinner"}},[t._v("Spinner")]),n("router-link",{attrs:{to:"/tab"}},[t._v("Tabs")]),n("router-link",{attrs:{to:"/switch"}},[t._v("Switch")]),n("router-link",{attrs:{to:"/switch-cell"}},[t._v("SwitchCell")]),n("router-link",{attrs:{to:"/upload"}},[t._v("Upload")]),n("router-link",{attrs:{to:"/actionsheet"}},[t._v("ActionSheet")])],1)},h=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/docs",target:"_blank"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],_={name:"HelloWorld",props:{msg:String}},b=_,w=(n("v3R0"),Object(c["a"])(b,d,m,!1,null,"42acfd91",null)),g=w.exports,k={name:"home",components:{HelloWorld:g},created:function(){l.$emit("NAV_HIDE")},updated:function(){l.$emit("NAV_HIDE")},destroyed:function(){l.$emit("NAV_SHOW")}},x=k,y=(n("B7P3"),Object(c["a"])(x,f,h,!1,null,"67bd79e0",null)),j=y.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],C={},E=Object(c["a"])(C,S,$,!1,null,null,null),O=E.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{padding:"10px 20px"}},[n("wen-button",{attrs:{type:"default",size:"small"}},[t._v("small按钮")]),n("wen-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",size:"normal"}},[t._v("normal按钮")])],1),n("div",{staticStyle:{padding:"10px 20px"}},[n("wen-button",{attrs:{type:"primary",size:"large"}},[t._v("large按钮")])],1)])},T=[],L={},A=Object(c["a"])(L,z,T,!1,null,null,null),R=A.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("wen-cell",{attrs:{title:"title",value:"文字多的情况下文字多的情况下文字多的情况下"}},[t._v("默认按钮")]),n("wen-cell",{attrs:{title:"title",value:"value"}},[t._v("默认按钮")]),n("wen-cell",{attrs:{title:"title",value:"value"}},[t._v("默认按钮")])],1)},P=[],V={},H=Object(c["a"])(V,N,P,!1,null,null,null),I=H.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("wen-list",{attrs:{finished:t.finished,offset:t.offset},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,function(t){return n("wen-cell",{key:t,attrs:{title:t+""}})}))},W=[],B={data:function(){return{list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],loading:!1,finished:!1,offset:200}},methods:{onLoad:function(){var t=this;setTimeout(function(){for(var e=0;e<10;e++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=40&&(t.finished=!0)},200)}}},J=B,M=Object(c["a"])(J,D,W,!1,null,null,null),q=M.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("wen-navbar",{attrs:{right:"点我"}}),n("wen-navbar",{attrs:{right:"点我",title:"title"}})],1)},F=[],K={},Y=Object(c["a"])(K,Q,F,!1,null,null,null),G=Y.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"20px"}},[n("wen-loading",{staticStyle:{display:"inline-block"},attrs:{color:"black"}}),n("wen-loading",{staticStyle:{display:"inline-block","background-color":"rgba(0, 0, 0, .5)",padding:"10px","box-sizing":"content-box"},attrs:{color:"white"}})],1)},Z=[],X={},tt=Object(c["a"])(X,U,Z,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p20"},[n("wen-button",{attrs:{type:"primary",size:"normal"},nativeOn:{click:function(e){return t.toggleSow(e)}}},[t._v("toast show")])],1)},at=[],ot={methods:{toggleSow:function(){var t=this;this.$toast.show("我是提示文案"),setTimeout(function(){t.$toast.hide()},2e3)}}},rt=ot,lt=Object(c["a"])(rt,nt,at,!1,null,null,null),it=lt.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p20"},[n("wen-button",{attrs:{type:"primary",size:"normal"},nativeOn:{click:function(e){return t.toggleSow(e)}}},[t._v("spinner show")])],1)},ct=[],ut={methods:{toggleSow:function(){var t=this;this.$spinner.show("loading..."),setTimeout(function(){t.$spinner.hide()},2e3)}}},vt=ut,pt=Object(c["a"])(vt,st,ct,!1,null,null,null),ft=pt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-block"},[n("wen-tabs",{attrs:{sticky:""},on:{click:t.onClick},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("wen-tab",{attrs:{title:"内容1内容1内容1内容1"}},[n("p",[t._v("我是内容1")]),n("p",[t._v("我是内容1")]),n("p",[t._v("我是内容1")])]),n("wen-tab",{attrs:{title:"内容2"}},[n("p",[t._v("我是内容2")]),n("p",[t._v("我是内容2")]),n("p",[t._v("我是内容2")])]),n("wen-tab",{attrs:{title:"内容3"}},[n("p",[t._v("我是内容3")]),n("p",[t._v("我是内容3")]),n("p",[t._v("我是内容3")])])],1),n("div",{staticClass:"padding"}),n("h2",[t._v("sticky属性")]),n("wen-tabs",{attrs:{sticky:"",top:0},on:{click:t.onClick},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("wen-tab",{attrs:{title:"内容1内容1内容1内容1"}},[n("p",[t._v("我是内容1")]),n("p",[t._v("我是内容2")]),n("p",[t._v("我是内容3")])]),n("wen-tab",{attrs:{title:"内容2"}},[n("p",[t._v("我是内容2")]),n("p",[t._v("我是内容2")]),n("p",[t._v("我是内容2")])]),n("wen-tab",{attrs:{title:"内容3"}},[n("p",[t._v("我是内容3")]),n("p",[t._v("我是内容3")]),n("p",[t._v("我是内容3")])])],1),n("div",{staticClass:"padding"}),n("div",{staticClass:"padding"}),n("div",{staticClass:"padding"}),n("div",{staticClass:"padding"})],1)},dt=[],mt={data:function(){return{active:0}},methods:{onClick:function(){}}},_t=mt,bt=(n("ijAL"),Object(c["a"])(_t,ht,dt,!1,null,"511f167e",null)),wt=bt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p20"},[n("wen-switch",{attrs:{color:"yellow"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}}),n("wen-switch",{attrs:{disabled:"",color:"blue"},model:{value:t.status2,callback:function(e){t.status2=e},expression:"status2"}})],1)},kt=[],xt={data:function(){return{status:!1,status2:!0}}},yt=xt,jt=Object(c["a"])(yt,gt,kt,!1,null,null,null),St=jt.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("wen-switch-cell",{attrs:{title:"性别",color:"green"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1)},Ct=[],Et={data:function(){return{status:!1}}},Ot=Et,zt=Object(c["a"])(Ot,$t,Ct,!1,null,null,null),Tt=zt.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-icons"},[n("wen-icon",{attrs:{name:"back"}}),n("wen-icon",{attrs:{name:"more"}})],1)},At=[],Rt=(n("Jm0j"),{}),Nt=Object(c["a"])(Rt,Lt,At,!1,null,"7286b291",null),Pt=Nt.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-block"},[n("wen-upload",{attrs:{afterRead:t.afterRead,beforeRead:t.beforeRead}})],1)},Ht=[],It={methods:{beforeRead:function(t){return!0},afterRead:function(t){console.log(t)}}},Dt=It,Wt=(n("B4Av"),Object(c["a"])(Dt,Vt,Ht,!1,null,null,null)),Bt=Wt.exports,Jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p20"},[n("wen-button",{attrs:{type:"primary",size:"normal"},nativeOn:{click:function(e){return t.toggleSow(e)}}},[t._v("toast show")]),n("wen-actionsheet",{attrs:{actions:t.actions},on:{select:t.onselect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},Mt=[],qt={data:function(){return{show:!1,actions:[{name:"选项1"},{name:"选项2"},{name:"选项3"}]}},methods:{onselect:function(t){console.log(t)},toggleSow:function(){this.show=!this.show}}},Qt=qt,Ft=Object(c["a"])(Qt,Jt,Mt,!1,null,null,null),Kt=Ft.exports;a["a"].use(p["a"]);var Yt=new p["a"]({routes:[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:O},{path:"/button",name:"button",component:R},{path:"/cell",name:"cell",component:I},{path:"/list",name:"list",component:q},{path:"/navbar",name:"navbar",component:G},{path:"/loading",name:"loading",component:et},{path:"/toast",name:"toast",component:it},{path:"/spinner",name:"spinner",component:ft},{path:"/tab",name:"tab",component:wt},{path:"/switch",name:"switch",component:St},{path:"/switch-cell",name:"switch-cell",component:Tt},{path:"/icon",name:"icon",component:Pt},{path:"/upload",name:"upload",component:Bt},{path:"/actionSheet",name:"actionSheet",component:Kt}]}),Gt=n("rQrR"),Ut=n.n(Gt);n("qvjG");a["a"].config.productionTip=!1,a["a"].use(Ut.a),new a["a"]({router:Yt,render:function(t){return t(v)}}).$mount("#app")},ijAL:function(t,e,n){"use strict";var a=n("uhqQ"),o=n.n(a);o.a},nNx0:function(t,e,n){"use strict";var a=n("uWEC"),o=n.n(a);o.a},o2Ye:function(t,e,n){},uWEC:function(t,e,n){},uhqQ:function(t,e,n){},v3R0:function(t,e,n){"use strict";var a=n("Snyz"),o=n.n(a);o.a}});
//# sourceMappingURL=app.00938f33.js.map