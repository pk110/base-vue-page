(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-297822c6"],{"2c36":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABOElEQVRoQ+1XMU4DQQz09HRQ5CmIBoQEX0he4n2D/RL4AkJKKFC+kgKqPMA0IJEjkS72hb3b+MrTju2Z8WnnQBN/MPH5KQnUdjAdSAeCCrS1Qqo6MzMlosdvYV4AMDNvgkKdDL7jgKo+EdG80+2ZmReHJlDVFRHdnmzCv4XfmPnu5/UOARHZArj4jTGzz1LK1VQIfAC4PIbAPyq/t1V4hcZGYNofcW01Pf3bugc8CtTGpAPpQFCBtlboLMNccAPC8HCYE5E1gOvwJD0LmNmylHJ/KI0eHeZE5B3ATc/+Qxx7ZeaHvQQ8/wNDTBSp0U2jGeYianqwbd0DHgVqY9KBdCCoQFsrlGEuuA4eeDjMeZoOiekS8IS58aRRT5gbWxrNMDfkfvep1dY90Ifx2M6kA7UdSQfSgaACX9e/qDF7pn7aAAAAAElFTkSuQmCCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA="},"62a0":function(e,t,s){"use strict";var a=s("70dd"),o=s.n(a);o.a},"70dd":function(e,t,s){},a513:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticStyle:{height:"100%"}},[a("el-header",{staticClass:"header"},[a("div",{staticClass:"header_left"},[a("img",{staticClass:"header_logoImg",attrs:{src:s("cf05")}}),a("el-select",{staticClass:"header_store",attrs:{placeholder:"全部门店",size:"small"},model:{value:e.storeChoose,callback:function(t){e.storeChoose=t},expression:"storeChoose"}},e._l(e.stores,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("div",{staticClass:"siderBar_status"},[a("p",[e._v("已关店")]),a("el-dropdown",{attrs:{size:"small",trigger:"click"}},[a("span",{staticClass:"el-dropdown-link"},[a("img",{attrs:{src:s("2c36")}})]),a("el-dropdown-menu",{staticClass:"siderBar_dropdown_choose",attrs:{slot:"dropdown"},slot:"dropdown"},[a("div",[e._v("营业时间:10:00-20:00")]),a("el-dropdown-item",[a("el-radio",{attrs:{label:"1"},model:{value:e.storeStatus,callback:function(t){e.storeStatus=t},expression:"storeStatus"}},[a("p",[e._v("恢复营业")]),a("p",[e._v("按营业时间自动开关店")])])],1),a("el-dropdown-item",[a("el-radio",{attrs:{label:"2"},model:{value:e.storeStatus,callback:function(t){e.storeStatus=t},expression:"storeStatus"}},[a("p",[e._v("紧急关店")]),a("p",[e._v("严重影响客户体验，请谨慎操作")])])],1)],1)],1),a("div",[e._v("到达营业时间会自动调整为营业中")])],1),a("el-input",{staticClass:"header_search",staticStyle:{width:"410px","margin-left":"13px"},attrs:{size:"small",placeholder:"输入取餐号、流水编号、订单号、手机号、地址","suffix-icon":"el-icon-search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("el-button",{staticStyle:{"margin-left":"13px",color:"#000","font-weight":"bold"},attrs:{size:"small"}},[e._v("自动接单")])],1),a("div",{staticClass:"header_right"},[a("el-dropdown",{attrs:{size:"small",trigger:"click"},on:{command:e.loginOut}},[a("span",{staticClass:"el-dropdown-link"},[a("img",{staticClass:"header_user",attrs:{src:s("cf05")}})]),a("el-dropdown-menu",{staticClass:"siderBar_dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[e._v("pk")]),a("el-dropdown-item",{attrs:{divided:"",command:"login"}},[e._v("退出登录")])],1)],1)],1)]),a("el-container",{staticClass:"body",staticStyle:{"margin-top":"5px"}},[a("el-aside",{staticStyle:{width:"200px"},style:{height:e.siderHeight}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"active-text-color":e.activeTextColor,"background-color":e.backgroundColor,"text-color":e.textColor,router:"","unique-opened":e.uniqueOpen,"default-active":e.$route.path},on:{select:e.selectMenu}},[e._l(e.siderbarList,(function(t,s){return["true"==t.ischild?a("el-submenu",{attrs:{index:t.path}},[a("template",{slot:"title"},[a("span",[e._v(e._s(t.name))])]),e._l(t.child,(function(t,s){return a("div",{staticClass:"siderBar_child"},["true"==t.ischild?a("el-submenu",{key:s,attrs:{index:t.path}},[a("template",{slot:"title"},[a("span",[e._v(e._s(t.name))])])],2):a("el-menu-item",{key:s,attrs:{index:t.path}},["/manager/orders"==t.path?a("div",[a("span",{staticStyle:{"padding-left":"28px"}},[e._v(e._s(t.name))]),a("span",{staticClass:"badge"},[e._v("9")])]):a("div",[a("span",[e._v(e._s(t.name))])])])],1)}))],2):a("el-menu-item",{attrs:{index:t.path}},[a("span",[e._v(e._s(t.name))])])]}))],2)],1),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{staticStyle:{width:"100%","min-width":"880px",margin:"0 12px","margin-right":"0","overflow-y":"auto"},style:{height:e.siderHeight}})],1)],1)],1)},o=[],r={data(){return{siderHeight:0,stores:[{label:"店铺1",value:1},{label:"店铺2",value:2},{label:"店铺3",value:3}],siderbarList:[],uniqueOpen:!0,backgroundColor:"#fff",textColor:"#000",activeTextColor:"#fff",storeStatus:"1"}},methods:{onRefresh(){this.$store.state.network=!0,this.$router.replace("/manager/refresh")},loginOut(e){"login"==e&&(localStorage.removeItem("token"),this.$router.push("/manager/login"))},selectMenu(e){0==this.$store.state.network&&(this.$store.state.network=!0)}},computed:{storeChoose:{get:function(){return this.$store.getters.storesMessage},set:function(){}},search:{get:function(){return this.$store.getters.search},set:function(){}},network(){}},components:{},created(){this.siderbarList=this.$store.state.siderBar.list,this.siderHeight=document.body.clientHeight-75+"px"}},i=r,l=(s("62a0"),s("2877")),n=Object(l["a"])(i,a,o,!1,null,"7f61b762",null);t["default"]=n.exports},cf05:function(e,t,s){e.exports=s.p+"img/logo.0dc55c5c.png"}}]);
//# sourceMappingURL=chunk-297822c6.f86f0131.js.map