webpackJsonp([144,132],{AQ5S:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("dxWU"),n=a.n(i),r={props:{videoId:{type:String,default:"video"},videoQuality:{type:Object,default:function(){return{}}},autoplay:{type:Boolean,default:!0}},data:function(){return{player:null,loading:!1,showInitplayer:!1}},mounted:function(){var e=this;this.autoplay&&(this.initPlayer(),setTimeout(function(){e.player.paused()&&e.player.play()},2e3))},methods:{initPlayer:function(){var e=this.videoQuality.hlsUrl?this.videoQuality.hlsUrl:null,t=this.videoQuality.hlsUrlHd?this.videoQuality.hlsUrlHd:null,a=e||t,i=this;this.player=new TcPlayer(this.videoId,{m3u8:a,width:"100%",height:"100%",live:!0,autoplay:i.autoplay,flash:!1,preload:"none",poster:{style:"stretch",src:n.a},wording:{2032:"请求视频失败，请检查网络",2048:"请求m3u8文件失败，可能是网络错误或者跨域问题"},listener:function(n){if("load"===n.type&&(i.loading=!0),"playing"!==n.type&&"error"!==n.type&&"progress"!==n.type||(i.loading=!1),"pause"===n.type&&i.player&&i.player.hls&&i.player.hls.stopLoad(),"play"===n.type&&i.player&&i.player.hls&&i.player.hls.startLoad(),i.player&&!i.player.initreflashbtn){i.player.initreflashbtn=!0;var r=document.createElement("div");r.className="vcp-reflashbtn",r.addEventListener("click",function(){i.player&&i.player.video&&i.player.video.hls&&i.player.video.hls.stopLoad(),clearTimeout(i.player.timer_errordoing),i.player.load(a),i.player&&i.player.video&&i.player.video.play()}),setTimeout(function(){n.src.player.el.querySelector(".vcp-controls-panel").appendChild(r)},600);var o=document.createElement("div"),l=e?"流畅":"高清";o.setAttribute("class","switch-load-btn"),o.innerText=l,o.addEventListener("click",function(){switch(l){case"流畅":if(!t)return i.$message({type:"warning",message:"当前视频仅支持流畅播放",center:!0}),!1;i.player.load(t),a=t,l="高清";break;case"高清":if(!e)return i.$message({type:"warning",message:"当前视频仅支持高清播放",center:!0}),!1;i.player.load(e),a=e,l="流畅"}i.$message({type:"success",message:"已切换至"+l+"播放",center:!0}),o.innerText=l,i.player&&i.player.video&&i.player.video.play()}),e!==t&&n.src.player.el.querySelector(".vcp-controls-panel").appendChild(o)}}}),window.palyers||(window.palyers=[]),window.palyers.push(this.player)}}},o=a("W5g0");var l=function(e){a("ApC8"),a("wmYo")},s=Object(o.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"custom-video-player",attrs:{"element-loading-background":"rgba(0, 0, 0, 0)"}},[a("div",{staticClass:"video",attrs:{id:e.videoId}}),e._v(" "),e.autoplay?e._e():a("div",{staticClass:"noInitPlayer",class:{active:e.showInitplayer},on:{mouseover:function(t){e.showInitplayer=!0},mouseleave:function(t){e.showInitplayer=!1},click:function(t){e.autoplay=!0,e.initPlayer()}}},[e._m(0)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"playbtn"},[t("div",{staticClass:"vcp-playtoggle"})])}],!1,l,"data-v-32a80e0d",null);t.default=s.exports},ApC8:function(e,t){},GAmO:function(e,t){},MZv5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"LayoutBox",props:{disableBackground:{type:Boolean,default:!1}}},n=a("W5g0");var r=function(e){a("d4f5")},o=Object(n.a)(i,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"layout-box"},[this._l(4,function(e){return t("div",{key:e,staticClass:"border"})}),this._v(" "),t("div",{staticClass:"box-content",class:{background:!this.disableBackground}},[this._t("default")],2)],2)},[],!1,r,"data-v-15f484f0",null);t.default=o.exports},NZoF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"area-title",props:{title:{default:null,type:String},titleTip:{default:"",type:String},titleLeft:{type:Boolean,default:!1}}},n=a("W5g0");var r=function(e){a("oGnE")},o=Object(n.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"area-head-bar",class:{titleLeft:e.titleLeft}},[e._t("headLeft",[e.titleTip?a("h2",{staticClass:"head-title"},[a("span",[e._v(e._s(e.title))]),e._v(" "),a("el-tooltip",{attrs:{effect:"dark","popper-class":"custom-tooltip-panel-item",placement:"bottom","visible-arrow":!1,"popper-options":{removeOnDestroy:!0}}},[a("div",{staticClass:"tooltip-box",attrs:{slot:"content"},slot:"content"},[a("p",[e._v("\n\t\t\t\t\t\t"+e._s(e.titleTip)+"\n\t\t\t\t\t")])]),e._v(" "),a("i",{staticClass:"iconfont icon-tishi1"})])],1):e._e()]),e._v(" "),e.title&&!e.titleTip?a("h2",{staticClass:"head-title"},[a("span",{domProps:{innerHTML:e._s(e.title)}})]):e._e(),e._v(" "),e._t("headRight")],2)},[],!1,r,"data-v-01cc5fed",null);t.default=o.exports},d4f5:function(e,t){},dxWU:function(e,t){e.exports="https://snkoudai.oss-cn-hangzhou.aliyuncs.com/goverment/static/img/video-poster.3a25068.png"},fNk6:function(e,t){},oGnE:function(e,t){},pUSI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("xk5x"),n=a("AQ5S"),r=a("TXSd"),o=a.n(r),l=a("VCTt");var s={name:"plot-video-10",props:{farmAreaInfo:{type:Object,default:function(){return Object(l.b)()}}},data:function(){return{videoInfo:null,mainLoading:!0,farmId:"3573",farmName:"",showVideo:!1}},mounted:function(){var e=this;this.$nextTick(function(){e.stopRender(),e.initMoudle()})},destroyed:function(){this.stopRender()},methods:{initMoudle:function(){var e,t=this;return(e=regeneratorRuntime.mark(function e(){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopRender(),t.showVideo=!1,e.next=4,t.getAreaCameraListByArea();case 4:a=e.sent,t.mainLoading=!1,a&&a.list.length?(t.videoInfo=a.list[0],t.farmId=a.list[0].farmId,t.farmName=a.list[0].farmName):(t.farmName="未配置示例摄像头",t.videoInfo=null),t.showVideo=!0;case 8:case"end":return e.stop()}},e,t)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function i(n,r){try{var o=t[n](r),l=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(l).then(function(e){i("next",e)},function(e){i("throw",e)});e(l)}("next")})})()},stopRender:function(){o()()},getAllIoTTheFarm:function(){return this.$ajax.post(this.$api.farmDetail.getIotAll,{farmId:this.farmId}).then(function(e){var t=e.data;if(0===t.respCode)return t.obj}).catch(function(e){console.log(new Error("获取农场下的所有物联网设备"),e)})},getAreaCameraListByArea:function(){return this.$ajax.post(this.$api.areaCameraConfig.listByArea,{farmAreaId:[this.farmAreaInfo.farmAreaId],farmAreaType:this.farmAreaInfo.farmAreaType}).then(function(e){var t=e.data;if(0===t.respCode)return t.obj}).catch(function(e){console.log(new Error("获取农场下的所有物联网设备"),e)})},handlePage:function(){this.videoInfo?this.$router.push({path:"/iotDevice/"+this.farmId,query:{farmName:this.farmName}}):this.$message({type:"warning",message:"未配置示例基地",center:!0})}},components:{areaPanel:i.default,hlsVideo:n.default}},d=a("W5g0");var c=function(e){a("fNk6")},u=Object(d.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.mainLoading,expression:"mainLoading"}],staticClass:"gov-area-panel",attrs:{"element-loading-spinner":"iconfont icon-loading1","element-loading-background":"rgba(0, 0, 0, 0.2)"}},[a("area-panel",{attrs:{"area-title":"物联网监控",subTitle:"更多"},on:{"hand-sub-title":e.handlePage}},[a("div",{staticClass:"video-container",attrs:{slot:"panelMain"},slot:"panelMain"},[a("p",{staticClass:"video-head"},[e._v(e._s(e.farmName))]),e._v(" "),a("div",{staticClass:"video-wrap"},[e.showVideo?a("hls-video",{attrs:{"video-id":"baseDefaultVideo","video-quality":e.videoInfo}}):e._e()],1)])])],1)},[],!1,c,"data-v-12186f80",null);t.default=u.exports},wmYo:function(e,t){},xk5x:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("MZv5"),n=a("NZoF"),r={name:"area-panel",props:{showSubTitle:{type:Boolean,default:!0},areaTitle:{type:String,default:""},titleTip:{type:String,default:""},subTitle:{type:String,default:"明细"},rightIcon:{type:String,default:"icon-changyongicon-"},titleLeft:{type:Boolean,default:!1},isLeft:{type:Boolean,default:!1}},data:function(){return{}},methods:{handSubTitle:function(){this.$emit("hand-sub-title")}},components:{areaTitle:n.default,LayoutBox:i.default}},o=a("W5g0");var l=function(e){a("GAmO")},s=Object(o.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"area-panel-wrapper"},[a("layout-box",{attrs:{"disable-background":""}},[a("area-title",{attrs:{title:e.areaTitle,titleTip:e.titleTip,titleLeft:e.titleLeft}},[e.isLeft?a("div",{attrs:{slot:"headLeft"},slot:"headLeft"},[e._t("customLeft")],2):e._e(),e._v(" "),e._t("subTitle",[e.showSubTitle?a("div",{staticClass:"head-sub-title",on:{click:e.handSubTitle}},[a("span",[e._v(e._s(e.subTitle))]),e._v(" "),a("i",{staticClass:"iconfont",class:[e.rightIcon]})]):e._e()],{slot:"headRight",subTitle:e.subTitle,rightIcon:e.rightIcon})],2),e._v(" "),a("div",{staticClass:"area-panel-main"},[e._t("panelMain")],2)],1)],1)},[],!1,l,"data-v-666e939f",null);t.default=s.exports}});
//# sourceMappingURL=144.06582e94eb8670e3f8cc.js.map