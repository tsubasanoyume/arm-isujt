(function(t){function e(e){for(var n,i,o=e[0],s=e[1],c=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&p.push(l[i][0]),l[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==l[s]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},l={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/arm-isujt/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=s;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"504f":function(t,e,a){"use strict";a("9e62")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("5363");var n=a("2b0e"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{staticClass:"nav-bold-text",attrs:{id:"nav","mini-variant":t.mini,color:"#00194D",app:"",permanent:"",width:300,floating:""}},[n("div",{on:{click:t.home}},[t.mini?t._e():n("img",{staticClass:"ma-4",attrs:{src:a("9b19")}})]),n("v-list",{attrs:{dark:"",dense:"",flat:""}},[t._l(t.items,(function(e){return[e.children?n("v-list-group",{key:e.text,attrs:{color:"#ff7141","prepend-icon":e.icon},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])]},proxy:!0}],null,!0),model:{value:e.model,callback:function(a){t.$set(e,"model",a)},expression:"item.model"}},[t._l(e.children,(function(e){return[e.children?n("v-list-group",{key:e.text,staticClass:"pa-0",attrs:{"sub-group":"",color:"#ff7141"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",{staticClass:"mr-0"},[t._v(" "+t._s(e.text)+" ")])]},proxy:!0}],null,!0),model:{value:e.model,callback:function(a){t.$set(e,"model",a)},expression:"child.model"}},t._l(e.children,(function(e,a){return n("v-list-item",{key:a,staticClass:"plain-text ml-12 py-0 pl-3 my-0 rounded-l-lg",attrs:{to:{path:e.path},color:"#00194d","active-class":"active-list"},on:{click:t.showTable},model:{value:e.model,callback:function(a){t.$set(e,"model",a)},expression:"sub_child.model"}},[n("v-list-item-title",{staticClass:"text-wrap"},[t._v(" "+t._s(e.text)+" ")])],1)})),1):n("v-list-item",{key:e.text,staticClass:"ml-5 rounded-l-lg",attrs:{to:{path:e.path},color:"#00194d","active-class":"active-list"},model:{value:e.model,callback:function(a){t.$set(e,"model",a)},expression:"child.model"}},[n("v-list-item-action",{staticClass:"mr-2 my-0"},[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",{staticClass:"py-0"},[n("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)],1)]}))],2):n("v-list-item",{key:e.text,staticClass:"rounded-l-lg",attrs:{to:{path:e.path},color:"#00194d","active-class":"active-list","prepend-icon":e.icon},model:{value:e.model,callback:function(a){t.$set(e,"model",a)},expression:"item.model"}},[n("v-list-item-action",{staticClass:"mr-2 my-0"},[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",{staticClass:"py-0"},[n("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)],1)]}))],2),n("v-btn",{attrs:{icon:"",color:"white",bottom:"",absolute:"",right:""}},[n("v-icon",[t._v("mdi-logout")])],1)],1),n("v-main",{attrs:{id:"main"}},[n("v-btn",{staticClass:"toggle-btn",attrs:{color:"#00194d",dark:"",small:""},on:{click:t.toggle}},[n("v-icon",[t._v(t._s(t.appMenuIcon))])],1),n("router-view")],1)],1)},r=[],i={name:"App",components:{},data:function(){return{mini:!1,items:[{icon:"mdi-file-check-outline",text:"Задачи",path:"tasks",model:!1},{icon:"mdi-tune",text:"Управление",path:"control",model:!0,children:[{icon:"mdi-trending-up",text:"Нормирование",path:"normalization",model:!0,children:[{text:"Участки",model:!0,path:"norm_section"},{text:"Депо",model:!1,path:"norm_depo"},{text:"Процентное соотношение",model:!1,path:"norm_ratio"}]},{icon:"mdi-calendar-text-outline",text:"Планирование",path:"planning",model:!0,children:[{text:"Задание тех. станций",model:!1,path:"planning1"},{text:"Задание по стыкам",model:!1,path:"planning2"},{text:"План",model:!1,path:"planning3"},{text:"Наряд-задание по локомотивным бригадам",model:!1,path:"planning4"},{text:"Показатели плана",model:!1,path:"planning5"},{text:"График оборота локомотивов",model:!1,path:"planning6"}]},{icon:"mdi-cog-outline",text:"Регулирование",path:"regulation",model:!0,children:[{text:"Стыки",model:!1,path:"regulation1"},{text:"Участки",model:!1,path:"regulation2"},{text:"План",model:!1,path:"regulation3"},{text:"Анализ",model:!1,path:"regulation4"}]}]},{icon:"mdi-information-outline",text:"Информация",path:"info",model:!1,children:[{icon:"mdi-cube-outline",text:"Моделирование",path:"model",model:!0,children:[{text:"Участки",model:!1,path:"model1"},{text:"Депо",model:!1,path:"model2"},{text:"Процентное соотношение",model:!1,path:"model3"},{text:"Корректировка НСИ",model:!1,path:"model4"},{text:"Сравнение",model:!1,path:"model5"}]},{icon:"mdi-layers-triple-outline",text:"Отчеты",path:"report",model:!1},{icon:"mdi-format-list-bulleted",text:"Приказы",path:"order",model:!1}]}]}},methods:{home:function(){this.$router.push("/")},showTable:function(){console.log()},toggle:function(){this.mini=!this.mini}},computed:{appMenuIcon:function(){return this.mini?"mdi-chevron-right":"mdi-chevron-left"}}},o=i,s=(a("034f"),a("2877")),c=a("6544"),u=a.n(c),d=a("7496"),p=a("8336"),m=a("132d"),v=a("8860"),h=a("56b0"),x=a("da13"),f=a("1800"),_=a("5d23"),b=a("f6c4"),g=a("f774"),C=Object(s["a"])(o,l,r,!1,null,null,null),w=C.exports;u()(C,{VApp:d["a"],VBtn:p["a"],VIcon:m["a"],VList:v["a"],VListGroup:h["a"],VListItem:x["a"],VListItemAction:f["a"],VListItemContent:_["a"],VListItemTitle:_["b"],VMain:b["a"],VNavigationDrawer:g["a"]});var D=a("8c4f"),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1")])}],V={name:"Home",components:{}},F=V,S=Object(s["a"])(F,y,k,!1,null,null,null),j=S.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-3"},[a("v-expansion-panels",{staticClass:"rounded-lg",attrs:{focusable:"",hover:""}},[a("v-expansion-panel",{attrs:{id:"filter-norm-sections"}},[a("v-expansion-panel-header",{staticClass:"rounded-lg pa-2",attrs:{color:"#4D6C99"}},[a("div",[a("v-icon",{staticClass:"mr-1",attrs:{color:"white"}},[t._v("mdi-filter-outline")]),a("span",[t._v("Фильтры")])],1)]),a("v-expansion-panel-content",{staticClass:"pt-3"},[a("v-row",{staticClass:"pa-0",attrs:{dense:""}},[a("v-col",{staticClass:"mr-2",attrs:{md:"3"}},[a("DateFilter")],1),a("v-col",{attrs:{md:"3"}},[a("DrlFilter",{attrs:{dateFilterId:t.dateFilterId}})],1)],1)],1)],1)],1),a("div",{staticClass:"mt-6"},[a("h3",{staticClass:"block-title"},[a("v-icon",{staticClass:"mr-2",attrs:{color:"#ff7141"}},[t._v("mdi-trending-up")]),t._v("Оперативное нормирование ")],1)]),a("DataTable",{attrs:{headers:t.headers,headersFlat:t.headersFlat,url:t.url}})],1)},O=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"mb-1"},[t._v("Район управления ДРЛ:")]),a("v-select",{attrs:{items:t.drls,"item-text":"name","item-value":"id",outlined:"",solo:"",dense:"","hide-details":""}})],1)},P=[],T=a("bc3a"),z=a.n(T),$={name:"DrlFilter",created:function(){this.fetchDrl()},methods:{fetchDrl:function(){var t=this;z.a.get("server/drl.json").then((function(e){t.drls=e.data.data}))}},data:function(){return{drls:[]}}},M=$,N=a("b974"),R=Object(s["a"])(M,I,P,!1,null,"284ec9ed",null),H=R.exports;u()(R,{VSelect:N["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],attrs:{id:"table-norm-section"}},[a("v-data-table",{staticClass:"mt-3 pa-2",attrs:{headers:t.headersFlat,items:t.tableData,dense:"","disable-pagination":"","disable-filtering":"","disable-sort":"","hide-default-footer":"","hide-default-header":"",locale:"ru-RU",height:t.windowSize.y-149,"calculate-widths":"","loading-text":"Загрузка..."},scopedSlots:t._u([{key:"header",fn:function(e){return[a("thead",{staticClass:"v-data-table-header"},[a("tr",t._l(t.headers,(function(e,n){return a("th",{key:n,ref:"headerCell",refInFor:!0,staticClass:"text-center parent-header td-border-style",attrs:{rowspan:e.children?1:3,colspan:t.getColspan(e)}},[t._v(" "+t._s(e.text)+" ")])})),0),a("tr",t._l(t.getSubHeader(t.headers),(function(e,n){return a("th",{key:n,staticClass:"text-center child-header td-border-style",attrs:{rowspan:e.children?1:2,colspan:e.children?e.children.length:1}},[t._v(" "+t._s(e.text)+" ")])})),0),a("tr",t._l(t.getSubHeader(t.headers,!0),(function(e,n){return a("th",{key:n,staticClass:"text-center child-header td-border-style",attrs:{rowspan:e.children?1:2,colspan:e.children?e.children.length:1}},[t._v(" "+t._s(e.text)+" ")])})),0)])]}}])})],1)},A=[],J=(a("159b"),a("4de4"),a("99af"),{name:"DataTable",created:function(){this.fetchTableData()},methods:{fetchTableData:function(){var t=this;z.a.get(this.url).then((function(e){t.tableData=e.data.data}))},onResize:function(){this.windowSize={x:window.innerWidth,y:window.innerHeight}},getSubHeader:function(t,e){var a=[];if(t.filter((function(t){return t.children})).forEach((function(t){a=a.concat(t.children)})),e){var n=[];return a.filter((function(t){return t.children})).forEach((function(t){n=n.concat(t.children)})),n}return a},getColspan:function(t){var e;return e=t.cols?t.cols:t.children?t.children.length:1,e}},props:["headers","headersFlat","url"],data:function(){return{windowSize:{x:0,y:0},tableData:[]}}}),B=J,G=(a("504f"),a("b0af")),U=a("8fea"),W=a("269a"),q=a.n(W),K=a("dc22"),Q=Object(s["a"])(B,L,A,!1,null,"6deea4dc",null),X=Q.exports;u()(Q,{VCard:G["a"],VDataTable:U["a"]}),q()(Q,{Resize:K["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"mb-1"},[t._v("Дата:")]),a("v-menu",{staticClass:"mt-2",attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-text-field",t._g({attrs:{id:t.dateFilterId,label:"Дата",outlined:"",solo:"","append-icon":"mdi-calendar","single-line":"",dense:"","hide-details":"",readonly:"",value:t.fromDateDisp},on:{"click:append":t.showC}},n))]}}]),model:{value:t.fromDateMenu,callback:function(e){t.fromDateMenu=e},expression:"fromDateMenu"}},[a("v-date-picker",{attrs:{"no-title":"","first-day-of-week":"1"},on:{input:function(e){t.fromDateMenu=!1}},model:{value:t.fromDateVal,callback:function(e){t.fromDateVal=e},expression:"fromDateVal"}})],1)],1)},Z=[],tt=a("3835"),et=(a("1276"),a("ac1f"),{name:"DateFilter",props:["dateFilterId"],data:function(t){return{isShow:!1,fromDateVal:(new Date).toISOString().substr(0,10),dateFormatted:t.formatDate((new Date).toISOString().substr(0,10)),fromDateMenu:!1}},computed:{fromDateDisp:function(){return this.formatDate(this.fromDateVal)}},methods:{formatDate:function(t){if(!t)return null;var e=t.split("-"),a=Object(tt["a"])(e,3),n=a[0],l=a[1],r=a[2];return"".concat(r,".").concat(l,".").concat(n)},showC:function(){this.fromDateMenu=!this.fromDateMenu}}}),at=et,nt=a("2e4b"),lt=a("e449"),rt=a("8654"),it=Object(s["a"])(at,Y,Z,!1,null,"3ca34199",null),ot=it.exports;u()(it,{VDatePicker:nt["a"],VMenu:lt["a"],VTextField:rt["a"]});var st={name:"NormalizationSections",components:{DateFilter:ot,DataTable:X,DrlFilter:H},data:function(){return{dateFilterId:"dateNormSections",url:"/server/norm_1.json",headers:[{text:"Тяговый полигон",align:"start",value:"long_name",children:[{text:"Наименование расчетных участков"}]},{text:"Длина (L,км)",value:"distance"},{text:"Коэф. Кп.гр.э",value:"k_pgre"},{text:"Коэф. Кп.п.э.",value:"k_pe"},{text:"Кол-во поездов N(max)",value:"tr_num"},{text:"В т.ч. тяжело весных N (2-ая тяга СМЕТ)",value:"tr_heavy_num"},{text:"Окна, час",value:"duration"},{text:"Потребность локомотивов",value:"way",cols:15,children:[{text:"Грузовое движение",children:[{text:"Мт (4-х)",value:"ft"},{text:"Мт (3-х)",value:"ft3"},{text:"Мт (2-х)",value:"fl"}]},{text:"ПВД",children:[{text:"Мт (3-х)",value:"locl3"},{text:"Мт (2-х)",value:"locl"}]},{text:"ТОЛКАЧИ",children:[{text:"Мт (4-х)",value:"pt4"},{text:"Мт (3-х)",value:"pt"},{text:"Мт (2-х)",value:"pl"}]},{text:"ОПЕР, РД",children:[{text:"Мт (4-х)",value:"rt4"},{text:"Мт (3-х)",value:"rt"},{text:"Мт (2-х)",value:"rl"}]},{text:"ВСЕГО",children:[{text:"Мт (4-х)",value:"t"},{text:"Мт (3-х)",value:"t3"},{text:"Мт (2-х)",value:"l"}]},{text:"ИТОГО",children:[{text:"Мв",value:"total"}]}]}],headersFlat:[{text:"Тяговый полигон",align:"start",sortable:!1,value:"long_name",children:[{text:"Наименование расчетных участков"}]},{text:"Длина (L,км)",value:"distance"},{text:"Коэф. Кп.гр.э",value:"k_pgre"},{text:"Коэф. Кп.п.э.",value:"k_pe"},{text:"Кол-во поездов N(max)",value:"tr_num"},{text:"В т.ч. тяжело весных N (2-ая тяга СМЕТ)",value:"tr_heavy_num"},{text:"Окна, час",value:"duration"},{text:"Мт (4-х)",value:"ft"},{text:"Мт (3-х)",value:"ft3"},{text:"Мт (2-х)",value:"fl"},{text:"Мт (3-х)",value:"locl3"},{text:"Мт (2-х)",value:"locl"},{text:"Мт (4-х)",value:"pt4"},{text:"Мт (3-х)",value:"pt"},{text:"Мт (2-х)",value:"pl"},{text:"Мт (4-х)",value:"rt4"},{text:"Мт (3-х)",value:"rt"},{text:"Мт (2-х)",value:"rl"},{text:"Мт (4-х)",value:"t"},{text:"Мт (3-х)",value:"t3"},{text:"Мт (2-х)",value:"l"},{text:"Мв",value:"total"}]}}},ct=st,ut=(a("95d2"),a("62ad")),dt=a("cd55"),pt=a("49e2"),mt=a("c865"),vt=a("0393"),ht=a("0fd9"),xt=Object(s["a"])(ct,E,O,!1,null,"3e5e9c16",null),ft=xt.exports;u()(xt,{VCol:ut["a"],VExpansionPanel:dt["a"],VExpansionPanelContent:pt["a"],VExpansionPanelHeader:mt["a"],VExpansionPanels:vt["a"],VIcon:m["a"],VRow:ht["a"]});var _t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-3"},[a("v-expansion-panels",{staticClass:"rounded-lg",attrs:{focusable:"",hover:""}},[a("v-expansion-panel",{attrs:{id:"filter-norm-sections"}},[a("v-expansion-panel-header",{staticClass:"rounded-lg pa-2",attrs:{color:"#4D6C99"}},[a("div",[a("v-icon",{staticClass:"mr-1",attrs:{color:"white"}},[t._v("mdi-filter-outline")]),a("span",[t._v("Фильтры")])],1)]),a("v-expansion-panel-content",{staticClass:"pt-3"},[a("v-row",[a("v-col",{staticClass:"pa-2",attrs:{md:"3"}},[a("DateFilter")],1)],1)],1)],1)],1),a("div",{staticClass:"mt-6"},[a("h3",{staticClass:"block-title"},[a("v-icon",{staticClass:"mr-2",attrs:{color:"#ff7141"}},[t._v("mdi-trending-up")]),t._v("Оперативное нормирование ")],1)]),a("DataTable",{attrs:{headers:t.headers,headersFlat:t.headersFlat,url:t.url}})],1)},bt=[],gt={name:"NormalizationDepo",components:{DateFilter:ot,DataTable:X},data:function(){return{dateFilterId:"dateNormDepo",url:"/server/norm_depo.json",headersFlat:[{text:"№",value:"road_code"},{text:"Депо приписки локомотивов",value:"depot_name"},{text:"Т (4-х), т.ед.",value:"s"},{text:"Т (3-х), т.ед.",value:"t"},{text:"Л (2-х), т.ед.",value:"l"},{text:"Всего, т.ед.",value:"sum"}],headers:[{text:"№",align:"start",value:"road_code"},{text:"Депо приписки локомотивов",align:"start",value:"depot_name"},{text:"Потребное количество эксплуатируемого парка локомотивов на следующие сутки",align:"start",cols:4,children:[{text:"Т (4-х), т.ед.",value:"s"},{text:"Т (3-х), т.ед.",value:"t"},{text:"Л (2-х), т.ед.",value:"l"},{text:"Всего, т.ед.",value:"sum"}]}]}}},Ct=gt,wt=(a("9952"),Object(s["a"])(Ct,_t,bt,!1,null,"1681f073",null)),Dt=wt.exports;u()(wt,{VCol:ut["a"],VExpansionPanel:dt["a"],VExpansionPanelContent:pt["a"],VExpansionPanelHeader:mt["a"],VExpansionPanels:vt["a"],VIcon:m["a"],VRow:ht["a"]});var yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-3"},[a("v-expansion-panels",{staticClass:"rounded-lg",attrs:{focusable:"",hover:""}},[a("v-expansion-panel",{attrs:{id:"filter-norm-sections"}},[a("v-expansion-panel-header",{staticClass:"rounded-lg pa-2",attrs:{color:"#4D6C99"}},[a("div",[a("v-icon",{staticClass:"mr-1",attrs:{color:"white"}},[t._v("mdi-filter-outline")]),a("span",[t._v("Фильтры")])],1)]),a("v-expansion-panel-content",{staticClass:"pt-3"},[a("v-row",[a("v-col",{staticClass:"pa-2",attrs:{md:"3"}},[a("DateFilter")],1)],1)],1)],1)],1),a("div",{staticClass:"mt-6"},[a("h3",{staticClass:"block-title"},[a("v-icon",{staticClass:"mr-2",attrs:{color:"#ff7141"}},[t._v("mdi-trending-up")]),t._v("Оперативное нормирование ")],1)]),a("DataTable",{attrs:{headers:t.headers,headersFlat:t.headersFlat,url:t.url}})],1)},kt=[],Vt={name:"NormalizationRatio",components:{DateFilter:ot,DataTable:X},data:function(){return{dateFilterId:"dateNormRatio",url:"/server/norm_minmax.json",headersFlat:[{text:"Депо приписки локомотивов",value:"depo"},{text:"Т (4-х), т.ед.",value:"park_t4"},{text:"Т (3-х), т.ед.",value:"park_t3"},{text:"Л (2-х), т.ед.",value:"park_l2"},{text:"Т (4-х)",value:"neisp_t4"},{text:"Т (3-х)",value:"neisp_t3"},{text:"Л (2-х)",value:"neisp_l2"},{text:"Т (4-х), т.ед.",value:"max_t4"},{text:"Т (3-х), т.ед.",value:"max_t3"},{text:"Л (2-х), т.ед.",value:"max_l2"},{text:"Т (4-х)",value:"uch_t4"},{text:"Т (3-х)",value:"uch_t3"},{text:"Л (2-х)",value:"uch_l2"}],headers:[{text:"Депо приписки локомотивов",align:"start",value:"depo"},{text:"Инвентарный парк",align:"start",cols:3,children:[{text:"Т (4-х), т.ед.",value:"park_t4"},{text:"Т (3-х), т.ед.",value:"park_t3"},{text:"Л (2-х), т.ед.",value:"park_l2"}]},{text:"Плановая доля неисправных локомотивов",align:"start",cols:3,children:[{text:"Т (4-х)",value:"neisp_t4"},{text:"Т (3-х)",value:"neisp_t3"},{text:"Л (2-х)",value:"neisp_l2"}]},{text:"Макс. содержание",align:"start",cols:3,children:[{text:"Т (4-х), т.ед.",value:"max_t4"},{text:"Т (3-х), т.ед.",value:"max_t3"},{text:"Л (2-х), т.ед.",value:"max_l2"}]},{text:"% содержания от общего по участку",align:"start",cols:3,children:[{text:"Т (4-х)",value:"uch_t4"},{text:"Т (3-х)",value:"uch_t3"},{text:"Л (2-х)",value:"uch_l2"}]}]}}},Ft=Vt,St=(a("9707"),Object(s["a"])(Ft,yt,kt,!1,null,"87b8181e",null)),jt=St.exports;u()(St,{VCol:ut["a"],VExpansionPanel:dt["a"],VExpansionPanelContent:pt["a"],VExpansionPanelHeader:mt["a"],VExpansionPanels:vt["a"],VIcon:m["a"],VRow:ht["a"]}),n["a"].use(D["a"]);var Et=[{path:"/",name:"Home",component:j},{path:"/norm_section",name:"NormalizationSections",component:ft},{path:"/norm_depo",name:"NormalizationDepo",component:Dt},{path:"/norm_ratio",name:"NormalizationRatio",component:jt}],Ot=new D["a"]({mode:"history",base:"/arm-isujt/",routes:Et}),It=Ot,Pt=a("2f62");n["a"].use(Pt["a"]);var Tt=new Pt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),zt=a("f309"),$t=a("2992"),Mt=a.n($t);n["a"].use(zt["a"]);var Nt=new zt["a"]({icons:{iconfont:"mdi"},lang:{locales:{ru:Mt.a},current:"ru"}});n["a"].config.productionTip=!1,new n["a"]({router:It,store:Tt,vuetify:Nt,render:function(t){return t(w)}}).$mount("#app")},"85ec":function(t,e,a){},"91cb":function(t,e,a){},"95d2":function(t,e,a){"use strict";a("c063")},9707:function(t,e,a){"use strict";a("91cb")},9952:function(t,e,a){"use strict";a("c0d9")},"9b19":function(t,e,a){t.exports=a.p+"img/logo.1d225358.svg"},"9e62":function(t,e,a){},c063:function(t,e,a){},c0d9:function(t,e,a){}});
//# sourceMappingURL=app.0c26526a.js.map