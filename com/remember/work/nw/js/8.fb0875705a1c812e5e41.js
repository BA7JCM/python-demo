webpackJsonp([8,76],{"77Nr":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("VR0t"),n=a("yivU"),r=a("ae5q"),s=a("VCTt");var o={data:function(){return{loading:!1,viewImgDialog:!1,fieldsDetailList:[],sortDirection:1,sortField:1,landCountDefaultSort:"none",landArceDefaultSort:"descending"}},props:{regulatoryVisible:{default:!1,type:Boolean},cropId:{default:"",type:String},area:{default:{},type:function(){return{}}},title:{default:"",type:String}},computed:{dialog:{get:function(){return this.regulatoryVisible},set:function(t){this.$emit("update:regulatoryVisible",t)}}},mounted:function(){this.getFieldsDetailList()},methods:{sortChange:function(t){if(this.currentPage=1,"landCountOnPlanting"===t.prop){if("none"===this.landCountDefaultSort)return this.landArceDefaultSort="none",this.landCountDefaultSort="descending",this.sortField=0,this.sortDirection=1,void this.getFieldsDetailList();this.sortField=0,this.sortDirection="descending"===t.order?1:0}if("landArceOnPlanting"===t.prop){if("none"===this.landArceDefaultSort)return this.landCountDefaultSort="none",this.landArceDefaultSort="descending",this.sortField=1,this.sortDirection=1,void this.getFieldsDetailList();this.sortField=1,this.sortDirection="descending"===t.order?1:0}this.getFieldsDetailList()},getFieldsDetailList:function(){var t=this;return function(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function i(n,r){try{var s=e[n](r),o=s.value}catch(t){return void a(t)}if(!s.done)return Promise.resolve(o).then(function(t){i("next",t)},function(t){i("throw",t)});t(o)}("next")})}}(regeneratorRuntime.mark(function e(){var a,i,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,a=Object(s.b)(),i={cropGroupId:t.cropId,farmAreaId:t.area.id?[t.area.id]:[a.farmAreaId],farmAreaType:t.area.level?t.area.level:a.farmAreaType,pageNo:1,pageSize:100,sortDirection:t.sortDirection,sortField:t.sortField},e.next=5,t.$ajax.post(t.$api.produce.fieldsGroupDetailList,i);case 5:0===(n=e.sent).data.respCode&&(t.fieldsDetailList=n.data.obj.list),t.loading=!1;case 8:case"end":return e.stop()}},e,t)}))()}},components:{Dialog:i.default,CustomTable:n.default,CustomTableSort:r.default}},l=a("W5g0");var d=function(t){a("UP7G"),a("KeEI")},u=Object(l.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fields-statistics-dialog"},[a("Dialog",{attrs:{dialogVisible:t.dialog,title:t.title+"的在田情况",loading:t.loading,dialogTop:"calc(50vh - 256px)"},on:{"update:dialogVisible":function(e){t.dialog=e},"update:dialog-visible":function(e){t.dialog=e}}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"regulatory-con"},[a("CustomTable",{attrs:{theme:"dialog-dark"}},[a("template",{slot:"table-container"},[a("el-table",{staticStyle:{"max-width":"760px"},attrs:{data:t.fieldsDetailList,height:"430"}},[a("el-table-column",{attrs:{label:"经营主体名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"text"},[t._v(t._s(e.row.farmName))])]}}])}),t._v(" "),a("el-table-column",{scopedSlots:t._u([{key:"header",fn:function(e){return[a("CustomTableSort",{attrs:{title:"在田地块数（个）",prop:"landCountOnPlanting",defaultSort:t.landCountDefaultSort,theme:"dialog-dark"},on:{sortChange:t.sortChange}})]}},{key:"default",fn:function(e){return[a("span",{staticClass:"text-blue"},[t._v(t._s(e.row.landCountOnPlanting))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"180"},scopedSlots:t._u([{key:"header",fn:function(e){return[a("CustomTableSort",{attrs:{title:"在田面积（亩）",prop:"landArceOnPlanting",defaultSort:t.landArceDefaultSort,theme:"dialog-dark"},on:{sortChange:t.sortChange}})]}},{key:"default",fn:function(e){return[a("span",{staticClass:"text-green"},[t._v(t._s(e.row.landArceOnPlanting))])]}}])})],1)],1)],2)],1)])],1)},[],!1,d,"data-v-2f71f34f",null);e.default=u.exports},KeEI:function(t,e){},UP7G:function(t,e){},iYnU:function(t,e){},vKfe:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("VCTt"),n=a("mOB5"),r=a("44dg"),s=a("ItLx"),o=a("8BiH"),l=a("yivU"),d=a("ae5q"),u=a("77Nr"),c=a("LR0P"),f=a("oAV5"),h=a("VKKs");function g(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function i(n,r){try{var s=e[n](r),o=s.value}catch(t){return void a(t)}if(!s.done)return Promise.resolve(o).then(function(t){i("next",t)},function(t){i("throw",t)});t(o)}("next")})}}var m={props:{farmAreaInfo:{type:Object,default:function(){return Object(i.b)()}},isHeaderShow:{type:Boolean,default:!0},isSearchShow:{type:Boolean,default:!0},hideColumn:{type:Object,default:function(){return{}}},minWidth:{type:String,default:"1366px"},minHeight:{type:String,default:"696px"},height:{type:String,default:"100vh"}},data:function(){return{fieldsCategoryList:[{cropCategoryName:"全部类型",cropCategoryId:0}],fieldsCategory:"全部类型",tempFieldsList:[],fieldsList1:[],tempFieldsList1:[],tableHeight:0,fieldsList:[],keyword:"",dialogShow:!1,dialogTitle:"",cropId:0,landNumDefaultSort:"none",sumPlantAcreDefaultSort:"descending",zzLandNumDefaultSort:"none",zzSumPlantAcreDefaultSort:"descending",loading:!1,tabs:[{index:0,title:"神农口袋"},{index:1,title:"种植业系统"}],tabCurrent:0,areaValue:"",fieldsArea:{}}},computed:{dataTargetFlag:function(){return Object(h.b)("govGovernmentSubjectVO").dataTargetFlag},level:function(){return Object(h.b)("govGovernmentSubjectVO").subjectLevel},startId:function(){var t=Object(h.b)("govGovernmentSubjectVO"),e=Object(h.b)("govGovernmentSubjectVO").subjectLevel;return 1===e?t.provinceId:2===e?t.cityId:3===e?t.countyId:void 0}},created:function(){0===this.tabCurrent&&(this.getFieldsCategoryList(),this.getFieldsList())},mounted:function(){var t=this;this.$nextTick(function(){t.tableHeight=t.$refs.listContent.offsetHeight}),window.addEventListener("resize",this.resizeHandle,!1)},methods:{back:function(){var t=this,e=this.$route.path;this.$router.go(-1),setTimeout(function(){e===t.$route.path&&t.back()},200)},areaCilck:function(t,e){var a=this;return g(regeneratorRuntime.mark(function e(){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.loading=!0,a.areaValue=t,i=t.ids.concat(),a.fieldsArea={id:t.villageId?t.villageId:t.townId?t.townId:i.splice(i.length-1,i.length)[0],level:t.level},a.currentPage=1,a.getFieldsList();case 6:case"end":return e.stop()}},e,a)}))()},rowClick:function(t){this.isHeaderShow||(this.dialogShow=!0,this.cropId=t.cropGroupId,this.dialogTitle=t.cropGroupName)},tabChange:function(t){var e=this;this.fieldsCategoryList=[{cropCategoryName:"全部类型",cropCategoryId:0}],this.fieldsCategory="全部类型",this.keyword="",0===this.tabCurrent&&this.$nextTick(function(){e.landNumDefaultSort="none",e.sumPlantAcreDefaultSort="descending",e.areaValue="",e.getFieldsCategoryList(),e.getFieldsList()}),this.tabCurrent},selectFieldsCategory:function(t){var e=[];if("全部类型"===t)return this.keyword?void(this.fieldsList=this.fuzzyQuery(this.tempFieldsList,this.keyword)):void(this.fieldsList=this.tempFieldsList);if(!this.keyword)return e=this.tempFieldsList.filter(function(e){return e.cropCategoryName===t}),void(this.fieldsList=e);e=this.tempFieldsList.filter(function(e){return e.cropCategoryName===t}),this.fieldsList=e;var a=this.fuzzyQuery(this.fieldsList,this.keyword);this.fieldsList=a},search:function(){if(!this.keyword){var t=this.fuzzyQuery(this.tempFieldsList,this.keyword);return this.fieldsList=t,void this.selectFieldsCategory(this.fieldsCategory)}var e=this.fuzzyQuery(this.fieldsList,this.keyword);this.fieldsList=e},sortChange:function(t){if("landNum"===t.prop){if("none"===this.landNumDefaultSort)return this.sumPlantAcreDefaultSort="none",this.landNumDefaultSort="descending",this.fieldsList=this.descendingSort(this.fieldsList,"landNum"),void(this.tempFieldsList=this.descendingSort(this.tempFieldsList,"landNum"));"descending"===t.order?(this.fieldsList=this.descendingSort(this.fieldsList,"landNum"),this.tempFieldsList=this.descendingSort(this.tempFieldsList,"landNum")):(this.fieldsList=this.ascendingSort(this.fieldsList,"landNum"),this.tempFieldsList=this.ascendingSort(this.tempFieldsList,"landNum"))}if("sumPlantAcre"===t.prop){if("none"===this.sumPlantAcreDefaultSort)return this.landNumDefaultSort="none",this.sumPlantAcreDefaultSort="descending",this.fieldsList=this.descendingSort(this.fieldsList,"sumPlantAcre"),void(this.tempFieldsList=this.descendingSort(this.tempFieldsList,"sumPlantAcre"));"descending"===t.order?(this.fieldsList=this.descendingSort(this.fieldsList,"sumPlantAcre"),this.tempFieldsList=this.descendingSort(this.tempFieldsList,"sumPlantAcre")):(this.fieldsList=this.ascendingSort(this.fieldsList,"sumPlantAcre"),this.tempFieldsList=this.ascendingSort(this.tempFieldsList,"sumPlantAcre"))}},handleEdit:function(t){this.dialogShow=!0,this.cropId=t.cropGroupId,this.dialogTitle=t.cropGroupName},getFieldsCategoryList:function(){var t=this;return g(regeneratorRuntime.mark(function e(){var a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(f.c)(),e.next=3,t.$ajax.post(t.$api.operators.cropCategorylistByArea,{farmAreaId:[a.farmId],farmAreaType:a.level});case 3:0===(i=e.sent).data.respCode&&i.data.obj.list.forEach(function(e){e.stasticPlantAcreByCropCategory.forEach(function(e){t.fieldsCategoryList.push(e)})});case 5:case"end":return e.stop()}},e,t)}))()},getFieldsList:function(){var t=this;return g(regeneratorRuntime.mark(function e(){var a,i,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.fieldsList=[],a=Object(f.c)(),i=t.areaValue.villageId?[t.areaValue.villageId]:t.areaValue.townId?[t.areaValue.townId]:t.areaValue.ids,!t.isHeaderShow&&t.farmAreaInfo.farmAreaId&&(a.farmId=t.farmAreaInfo.farmAreaId,a.level=t.farmAreaInfo.farmAreaType,t.fieldsArea={id:t.farmAreaInfo.farmAreaId,level:t.farmAreaInfo.farmAreaType}),e.next=7,t.$ajax.post(t.$api.plotlist.getAreaCropGroup,{farmAreaId:t.areaValue?i:[a.farmId],farmAreaType:t.areaValue?t.areaValue.level:a.level});case 7:0===(n=e.sent).data.respCode?(t.fieldsList=n.data.obj,t.tempFieldsList=n.data.obj,t.selectFieldsCategory(t.fieldsCategory),t.keyword&&t.search(),t.loading=!1):t.loading=!1;case 9:case"end":return e.stop()}},e,t)}))()},fuzzyQuery:function(t,e){for(var a=t.concat(),i=[],n=0;n<a.length;n++)a[n].cropGroupName.indexOf(e)>=0&&i.push(a[n]);return i},descendingSort:function(t,e){var a=t.concat();return"sumPlantAcre"===e?a.sort(function(t,e){return e.sumPlantAcre-t.sumPlantAcre}):a.sort(function(t,e){return e.landNum-t.landNum})},ascendingSort:function(t,e){var a=t.concat();return"sumPlantAcre"===e?a.sort(function(t,e){return t.sumPlantAcre-e.sumPlantAcre}):a.sort(function(t,e){return t.landNum-e.landNum})},resizeHandle:function(){this.tableHeight=this.$refs.listContent.offsetHeight},backTop:function(){document.querySelector(".el-table__body-wrapper").scrollTop=0}},watch:{fieldsList:function(){var t=this;this.$nextTick(function(){t.backTop()})}},destroyed:function(){window.removeEventListener("resize",this.resizeHandle,!1)},components:{Nav:n.default,Loading:r.default,CustomInput:s.default,CustomSelect:o.default,CustomTable:l.default,CustomTableSort:d.default,FieldsStatisticsDialog:u.default,CustomAreaSelect:c.default}},p=a("W5g0");var v=function(t){a("iYnU")},C=Object(p.a)(m,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"title",rawName:"v-title"}],staticClass:"fields-statistics",style:{minWidth:t.minWidth,height:t.height,minHeight:t.minHeight},attrs:{"data-title":t.isHeaderShow?"在田品种统计":"农业总览"}},[t.isHeaderShow?i("Nav",{attrs:{title:"在田品种统计",hasShadow:!0,backColor:"#B6CFDE",paddingRight:"13px",isUserCenter:!0},on:{back:t.back}}):t._e(),t._v(" "),i("div",{staticClass:"main"},[t.isSearchShow?i("div",{staticClass:"search-box"},[i("div",{staticClass:"search-box-left"},[t.dataTargetFlag?i("CustomSelect",{attrs:{margin:"0 15px 0 0"}},[i("template",{slot:"select-container"},[i("el-select",{attrs:{placeholder:"选择在田统计"},on:{change:t.tabChange},model:{value:t.tabCurrent,callback:function(e){t.tabCurrent=e},expression:"tabCurrent"}},t._l(t.tabs,function(t){return i("el-option",{key:t.index,attrs:{label:t.title,value:t.index}})}),1)],1)],2):t._e(),t._v(" "),i("CustomSelect",{attrs:{margin:"0 15px 0 0"}},[i("template",{slot:"select-container"},[i("el-select",{attrs:{placeholder:"请选择类型"},on:{change:t.selectFieldsCategory},model:{value:t.fieldsCategory,callback:function(e){t.fieldsCategory=e},expression:"fieldsCategory"}},t._l(t.fieldsCategoryList,function(t){return i("el-option",{key:t.cropCategoryId,attrs:{label:t.cropCategoryName,value:t.cropCategoryName}})}),1)],1)],2),t._v(" "),0===t.tabCurrent?i("CustomAreaSelect",{attrs:{level:t.level,areaId:t.startId},on:{areaCilck:t.areaCilck}}):t._e(),t._v(" "),i("CustomInput",{attrs:{iconfont:"el-icon-search",placeholder:"输入品种名称搜索"},on:{clickAndEnter:t.search},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),t._v(" "),i("div",{staticClass:"excel-box"})]):t._e(),t._v(" "),i("div",{ref:"listContent",staticClass:"list-content"},[i("CustomTable",{directives:[{name:"show",rawName:"v-show",value:0===t.tabCurrent,expression:"tabCurrent === 0"}]},[i("template",{slot:"table-container"},[i("el-table",{attrs:{data:t.fieldsList,height:t.tableHeight,border:!0,lazy:!0},on:{"row-click":t.rowClick}},[i("template",{slot:"empty"},[i("div",[i("Loading",{attrs:{show:t.loading,type:"element",theme:"loader-light"}}),t._v(" "),t.loading?t._e():i("div",{staticClass:"no-data"},[i("img",{attrs:{src:a("gtDs")}}),t._v(" "),i("span",[t._v("暂无数据")])])],1)]),t._v(" "),t.hideColumn.cropGroupName?t._e():i("el-table-column",{attrs:{label:"在田品种",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"cropName"},[i("img",{attrs:{src:e.row.cropImageUrl}}),t._v(" "),i("span",{staticClass:"text"},[t._v(t._s(e.row.cropGroupName))])])]}}],null,!1,2828093650)}),t._v(" "),t.hideColumn.cropCategoryName?t._e():i("el-table-column",{attrs:{label:"类型",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"text"},[t._v(t._s(e.row.cropCategoryName))])]}}],null,!1,3328781668)}),t._v(" "),t.hideColumn.landNum?t._e():i("el-table-column",{scopedSlots:t._u([{key:"header",fn:function(e){return[0===t.tabCurrent?i("CustomTableSort",{attrs:{title:"在田地块数量（个）",defaultSort:t.landNumDefaultSort,prop:"landNum"},on:{sortChange:t.sortChange}}):t._e()]}},{key:"default",fn:function(e){return[i("span",{staticClass:"text"},[t._v(t._s(e.row.landNum))])]}}],null,!1,1568541278)}),t._v(" "),t.hideColumn.sumPlantAcre?t._e():i("el-table-column",{scopedSlots:t._u([{key:"header",fn:function(e){return[0===t.tabCurrent?i("CustomTableSort",{attrs:{title:"在田面积（亩）",defaultSort:t.sumPlantAcreDefaultSort,prop:"sumPlantAcre"},on:{sortChange:t.sortChange}}):t._e()]}},{key:"default",fn:function(e){return[i("span",{staticClass:"text"},[t._v(t._s(e.row.sumPlantAcre))])]}}],null,!1,214572960)}),t._v(" "),t.hideColumn.handle?t._e():i("el-table-column",{attrs:{label:"操作",width:"120",align:"left","header-align":"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"handle",on:{click:function(a){return t.handleEdit(e.row)}}},[i("i",{staticClass:"iconfont icon-xiangqing"}),t._v(" "),i("span",[t._v("详情")])])]}}],null,!1,1162681631)})],2)],1)],2),t._v(" "),i("CustomTable",{directives:[{name:"show",rawName:"v-show",value:1===t.tabCurrent,expression:"tabCurrent === 1"}]},[i("template",{slot:"table-container"},[i("el-table",{attrs:{data:t.fieldsList1,height:t.tableHeight,lazy:!0}},[i("template",{slot:"empty"},[t._e(),t._v(" "),i("div",{staticClass:"no-data"},[i("div",{staticClass:"empty-notice"},[i("i",{staticClass:"iconfont icon-gantanhao_icon"}),t._v(" "),i("span",[t._v("种植业管理系统未提供该数据")])])])]),t._v(" "),i("el-table-column",{attrs:{label:"在田品种",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"cropName"},[i("img",{attrs:{src:e.row.cropImgUrl}}),t._v(" "),i("span",{staticClass:"text"},[t._v(t._s(e.row.cropName))])])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"作物种类",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"text"},[t._v(t._s(e.row.cropCategoryName))])]}}])}),t._v(" "),i("el-table-column",{scopedSlots:t._u([{key:"header",fn:function(e){return[i("CustomTableSort",{attrs:{title:"在田地块数量（个）",defaultSort:t.zzLandNumDefaultSort,prop:"landNum"},on:{sortChange:t.sortChange}})]}},{key:"default",fn:function(e){return[i("span",{staticClass:"text"},[t._v(t._s(e.row.landNum))])]}}])}),t._v(" "),i("el-table-column",{scopedSlots:t._u([{key:"header",fn:function(e){return[i("CustomTableSort",{attrs:{title:"在田面积（亩）",defaultSort:t.zzSumPlantAcreDefaultSort,prop:"sumPlantAcre"},on:{sortChange:t.sortChange}})]}},{key:"default",fn:function(e){return[i("span",{staticClass:"text"},[t._v(t._s(e.row.sumPlantAcre))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",width:"120",align:"left","header-align":"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"handle",on:{click:function(a){return t.handleEdit(e.row)}}},[i("i",{staticClass:"iconfont icon-xiangqing"}),t._v(" "),i("span",[t._v("详情")])])]}}])})],2)],1)],2)],1)]),t._v(" "),t.dialogShow?i("FieldsStatisticsDialog",{attrs:{area:t.fieldsArea,regulatoryVisible:t.dialogShow,cropId:t.cropId,title:t.dialogTitle},on:{"update:regulatoryVisible":function(e){t.dialogShow=e},"update:regulatory-visible":function(e){t.dialogShow=e}}}):t._e()],1)},[],!1,v,"data-v-7571f8a8",null);e.default=C.exports}});
//# sourceMappingURL=8.fb0875705a1c812e5e41.js.map