webpackJsonp([135],{DjL9:function(e,t){},"RL/6":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Mt7t"),i=r("446f"),a=r("VCTt");var c=Object(a.b)(),o={name:"GreenCertification.vue",data:function(){return{circleLineOptions:{centerTitle:"蔬菜类认证率",leftTitle:"认证面积",rightTitle:"认证主体数",centerNum:"%",leftNum:"亩",rightNum:"家"}}},props:{},created:function(){this.renderInfo()},methods:{getAllCateByArea:function(){return this.$ajax.post(this.$api.safeSupervise.allCateByArea,{farmAreaId:[c.farmAreaId],farmAreaType:c.farmAreaType}).then(function(e){var t=e.data;if(0===t.respCode)return t.obj;throw new Error(t)}).catch(function(e){throw e})},renderInfo:function(){var e,t=this;return(e=regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getAllCateByArea();case 3:r=e.sent,t.circleLineOptions.leftNum=(r.vegetablesCertifiLandArea+"万亩").replace(/(undefined|null)/g,""),t.circleLineOptions.centerNum=(r.vegetablesCertifiRate+"%").replace(/(undefined|null)/g,""),t.circleLineOptions.rightNum=(r.vegetablesCertifiCompany+"家").replace(/(undefined|null)/g,""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,t,[[0,9]])}),function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(i,a){try{var c=t[i](a),o=c.value}catch(e){return void r(e)}if(!c.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}("next")})})()}},computed:{},components:{CircleLine:n.default,BoxItem:i.default}},u=r("W5g0");var l=function(e){r("DjL9")},s=Object(u.a)(o,function(){var e=this.$createElement,t=this._self._c||e;return t("box-item",{attrs:{title:"绿色认证"}},[t("div",{staticClass:"circle-line-wrap"},[t("circle-line",{attrs:{options:this.circleLineOptions}})],1)])},[],!1,l,"data-v-0b72c509",null);t.default=s.exports}});
//# sourceMappingURL=135.ef9af5f26efecb5492bb.js.map