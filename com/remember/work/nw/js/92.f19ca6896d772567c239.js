webpackJsonp([92],{"9FWJ":function(e,t){},On8H:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("MKOF"),i=n("VKKs"),a=n("0F4G"),s={data:function(){return{navList:[],titlename:"",logoUrl:"",showLogo:!1,poweredBy:""}},computed:{navSplitNum:function(){return Math.ceil(this.navList.length/2)||0}},created:function(){this.checkLogin(),this.initNavListfn(),this.refreshPage()},methods:{initNavListfn:function(){var e=[];JSON.parse(JSON.stringify(a.a[0].children)).forEach(function(t){t.headerTitle&&e.push({id:t.key,name:t.name,selected:!1,text:t.headerTitle})});var t=Object(i.b)("govGovernmentSubjectVO").showMenuType;this.navList=e.filter(function(e){return(t&e.id)===e.id}),1===this.navList.length&&"overview"===this.navList[0].name&&(this.navList.length=0)},switchPage:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).to;"animalHusbandryManage"!==e.name&&(this.$router.push(e),this.navList.forEach(function(t){t.selected=e.name===t.name}))},refreshPage:function(){var e=this.$route.name;e={plotlist:"landSource"}[e]||e,this.navList.forEach(function(t){t.selected=e===t.name})},checkLogin:function(){if(!Object(i.b)("accessToken"))return!0;var e=Object(i.b)("govGovernmentUserVO");this.getShowLogo(e.governmentSubjectId)},doLoginOut:function(){var e=this;setTimeout(function(){e.checkLogin()},500)},getShowLogo:function(e){var t=this;this.$ajax.post(this.$api.login.showLogo,{id:e}).then(function(e){var n=e.data,o=n.obj;0===n.respCode&&(t.showLogo=o.showLogoFlag,t.logoUrl=o.subjectLogoUrl,t.titlename=Object(i.b)("govGovernmentSubjectVO").subjectName,t.poweredBy=Object(i.b)("govGovernmentSubjectVO").poweredBy)})},logoClickfn:function(){this.canShowLogoHref()&&(window.location.href="http://10.121.226.68/ypt")},canShowLogoHref:function(){var e=!1,t=Object(i.b)("govGovernmentSubjectVO");return-1!==window.location.href.indexOf("govtest")&&[103].includes(t.id)&&(e=!0),-1!==window.location.href.indexOf("gov.snkoudai")&&[49,57,74].includes(t.id)&&(e=!0),-1===window.location.href.indexOf("192.168")&&-1===window.location.href.indexOf("127.0")||(e=!0),e}},components:{UserCenter:o.default}},c=n("W5g0");var l=function(e){n("9FWJ")},r=Object(c.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"overview-header"},[n("div",{staticClass:"page-tab"},[n("ul",{staticClass:"navs leftnavs"},e._l(e.navList.slice(0,e.navSplitNum),function(t){return n("li",{key:t.name,staticClass:"nav leftnav",class:{selected:t.selected},on:{click:function(n){return e.switchPage({to:{name:t.name}})}}},[n("span",[e._v(e._s(t.text))])])}),0),e._v(" "),n("div",{staticClass:"placeholder"}),e._v(" "),n("ul",{staticClass:"navs rightnavs"},e._l(e.navList.slice(e.navSplitNum,1e3),function(t){return n("li",{key:t.name,staticClass:"nav rightnav",class:{selected:t.selected},on:{click:function(n){return e.switchPage({to:{name:t.name}})}}},[n("span",[e._v(e._s(t.text))])])}),0)]),e._v(" "),n("div",{staticClass:"logo head-logo"},[e.logoUrl?n("div",{staticClass:"img-logo-box"},[n("img",{staticClass:"head-logo-pic",attrs:{src:e.logoUrl,alt:e.titlename}})]):n("p",{staticClass:"logo-title"},[n("span",{class:{"logo-href":e.canShowLogoHref()},on:{click:e.logoClickfn}},[e._v(e._s(e.titlename))])]),e._v(" "),e.showLogo?n("a",{staticClass:"head-logo-label"},[e.poweredBy?n("span",[e._v(e._s(e.poweredBy))]):[n("span",[e._v("Powered by")]),e._v(" 左岸芯慧 ")]],2):e._e()]),e._v(" "),n("div",{staticClass:"header-user"},[n("UserCenter",{on:{doLoginOut:e.doLoginOut}})],1)])},[],!1,l,"data-v-ae7528a4",null);t.default=r.exports}});
//# sourceMappingURL=92.f19ca6896d772567c239.js.map