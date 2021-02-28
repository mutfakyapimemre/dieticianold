(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{433:function(t,e,o){"use strict";o.r(e);o(27),o(5),o(2),o(13);var n=o(4),l=(o(20),o(72)),r={middleware:["admin"],layout:"admin",components:{ValidationObserver:l.a,ValidationProvider:l.b},mounted:function(){this.retrieveData()},data:function(){return{counter:0,inputs:[[{id:"disease0",label:"Hastalık Değeri Adı",value:""},{id:"diseaseMin0",label:"Hastalık Değeri",value:""},{id:"diseaseMax0",label:"Hastalık Değeri 2",value:""},{id:"diseaseType0",label:"Hastalık Değeri Türü",value:""}]],e1:1,inputData:{name:null,description:null,id:null},data:[],searchTitle:null,headers:[{text:"#",align:"center",value:"rank"},{text:"Görsel",align:"center",value:"img_url",sortable:!1},{text:"Kapak Fotoğrafı",align:"center",value:"isCover"},{text:"Durum",align:"center",value:"isActive"},{text:"İşlemler",align:"center",value:"actions",sortable:!1}],page:1,totalPages:0,pageSize:25,pageSizes:[25,50,100,200,500,1e3],loading:!1,options:{url:"https://api.klinikdiyetisyen.com/api/panel/diseases/create-file/",headers:{Authorization:"Bearer "+(this.isEmpty(this.$auth.$storage.getUniversal("user"))?null:this.$auth.$storage.getUniversal("user").api_token)},params:{title:this.isEmpty(this.data)?null:this.data.name},uploadMultiple:!0,parallelUploads:10},userData:this.isEmpty(this.$auth.$storage.getUniversal("user"))?null:this.$auth.$storage.getUniversal("user"),tab:null,items:[{tab:"Hastalık Değerleri"}]}},computed:{img_url:function(){return"https://api.klinikdiyetisyen.com/"}},methods:{isEmpty:function(t){return"number"!=typeof t&&("string"==typeof t||Array.isArray(t)?0==t.length:"object"==Object(n.a)(t)?null==t||0==Object.keys(t).length:"boolean"!=typeof t&&!t)},selectCover:function(){this.e1=3,this.retrieveData()},getRequestParams:function(t,e,o){var n={};return n.title=t,n.page=e,n.size=o,n},retrieveData:function(t){var e=this,o="get-all";this.isEmpty(t)||(o=t);var n=this.getRequestParams(this.searchTitle,this.page,this.pageSize);this.$axios.get("".concat("https://api.klinikdiyetisyen.com/api/","panel/datatables/").concat(o,"?table=diseases_file&page=").concat(n.page,"&per_page=").concat(n.size,"&search=").concat(n.title,"&search_columns=name,email,phone&where_column=nutrients_id&where_value=").concat(this.inputData.id,"&joins=diseases_file"),{json:!0,withCredentials:!1,mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Authorization","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Credentials":!0,"Content-type":"application/json",Authorization:"Bearer "+this.userData.api_token},credentials:"same-origin"}).then((function(t){e.data=t.data.data.data.map(e.getDisplayData),e.totalPages=t.data.data.last_page})).catch((function(t){return console.log(t)})).finally((function(){return e.loading=!1}))},handlePageChange:function(t){this.page=t,this.retrieveData()},handlePageSizeChange:function(t){this.pageSize=t,this.page=1,this.retrieveData()},refreshList:function(){this.retrieveData()},deleteData:function(t){var e=this;this.$axios.delete("https://api.klinikdiyetisyen.com/api/panel/diseases/delete/"+t,{json:!0,withCredentials:!1,mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Authorization","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Credentials":!0,"Content-type":"application/json",Authorization:"Bearer "+this.userData.api_token},credentials:"same-origin"}).then((function(t){t.data.success?(e.$izitoast.success({title:t.data.title,message:t.data.msg,position:"topCenter",displayMode:"once"}),e.refreshList()):e.$izitoast.error({title:t.data.title,message:t.data.msg,position:"topCenter",displayMode:"once"})}))},isActiveSetter:function(t){var e=this;this.$axios.get("https://api.klinikdiyetisyen.com/api/panel/datatables/is-active-setter?table=diseases_file&id="+t,{json:!0,withCredentials:!1,mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Authorization","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Credentials":!0,"Content-type":"application/json",Authorization:"Bearer "+this.userData.api_token},credentials:"same-origin"}).then((function(t){t.data.success?(e.$izitoast.success({title:t.data.title,message:t.data.msg,position:"topCenter",displayMode:"once"}),e.refreshList()):e.$izitoast.error({title:t.data.title,message:t.data.msg,position:"topCenter",displayMode:"once"})}))},isCoverSetter:function(t){var e=this;this.$axios.get("https://api.klinikdiyetisyen.com/api/panel/datatables/is-cover-setter?table=diseases_file&foreign_column=diseases_id&id="+t,{json:!0,withCredentials:!1,mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Authorization","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Credentials":!0,"Content-type":"application/json",Authorization:"Bearer "+this.userData.api_token},credentials:"same-origin"}).then((function(t){t.data.success?(e.$izitoast.success({title:t.data.title,message:t.data.msg,position:"topCenter",displayMode:"once"}),e.refreshList()):e.$izitoast.error({title:t.data.title,message:t.data.msg,position:"topCenter",displayMode:"once"})}))},getDisplayData:function(data){return{rank:data.rank,id:data._id.$oid,isCover:data.isCover,isActive:data.isActive}},cloneProperty:function(){this.inputs.push([{id:"disease".concat(++this.counter),label:"Hastalık Değeri Adı",value:""},{id:"diseaseValue".concat(++this.counter),label:"Hastalık Değeri",value:""},{id:"diseaseValuee".concat(++this.counter),label:"Hastalık Değeri 2",value:""},{id:"diseaseType".concat(++this.counter),label:"Hastalık Değeri Türü",value:""}])},removeProperty:function(t){for(var i=0;i<this.inputs.length;i++)this.inputs[i][0].id===t&&this.inputs.splice(i,1)},onComplete:function(t){JSON.parse(t.xhr.response).success?this.$izitoast.success({title:JSON.parse(t.xhr.response).title,message:JSON.parse(t.xhr.response).msg,position:"topCenter",displayMode:"once"}):this.$izitoast.error({title:JSON.parse(t.xhr.response).title,message:JSON.parse(t.xhr.response).msg,position:"topCenter",displayMode:"once"})},saveDiseases:function(){var t=this,e=new FormData(this.$refs.diseasesForm);this.$axios.post("https://api.klinikdiyetisyen.com/api/panel/diseases/create",e,{json:!0,withCredentials:!1,mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Authorization","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Credentials":!0,"Content-Type":"multipart/form-data; boundary="+e._boundary,Authorization:"Bearer "+this.userData.api_token},credentials:"same-origin"}).then((function(e){e.data.success?(t.$izitoast.success({title:e.data.title,message:e.data.msg,position:"topCenter"}),t.inputData.id=e.data.data.$oid,setTimeout((function(){t.$router.go(decodeURIComponent("/panel/diseases"))}),2e3)):t.$izitoast.error({title:e.data.title,message:e.data.msg,position:"topCenter"})}))}}},c=o(71),d=o(273),v=o.n(d),m=o(335),h=o(267),f=o(265),C=o(275),_=o(281),y=o(282),A=o(249),k=o(283),w=o(345),T=o(347),x=o(346),D=o(333),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("div",{staticClass:"main-wrapper"},[o("div",{staticClass:"page-wrapper"},[o("div",{staticClass:"content container-fluid"},[o("div",{staticClass:"page-header"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-12"},[o("h3",{staticClass:"page-title"},[t._v("Hastalıklar")]),t._v(" "),o("ul",{staticClass:"breadcrumb"},[o("li",{staticClass:"breadcrumb-item"},[o("nuxt-link",{attrs:{to:"/panel"}},[t._v("Anasayfa")])],1),t._v(" "),o("li",{staticClass:"breadcrumb-item active"},[t._v("Hastalıklar")])])])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-header"},[o("h4",{staticClass:"card-title"},[t._v("Hastalık Ekle")])]),t._v(" "),o("div",{staticClass:"card-body"},[o("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.handleSubmit;return[o("form",{ref:"diseasesForm",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),n(t.saveDiseases)}}},[o("v-stepper",{model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[o("v-stepper-header",[o("v-stepper-step",{attrs:{complete:t.e1>1,step:"1"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tHastalık Bilgileri\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),o("v-divider")],1),t._v(" "),o("v-stepper-items",[o("v-stepper-content",{attrs:{step:"1"}},[o("ValidationProvider",{attrs:{name:"Hastalık Adı",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"title"}},[t._v("Hastalık Adı")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.inputData.name,expression:"inputData.name"}],staticClass:"form-control",attrs:{id:"title",type:"text",name:"name"},domProps:{value:t.inputData.name},on:{input:function(e){e.target.composing||t.$set(t.inputData,"name",e.target.value)}}}),t._v(" "),o("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])])]}}],null,!0)}),t._v(" "),o("ValidationProvider",{attrs:{name:"Hastalık Açıklaması",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"description"}},[t._v("Hastalık Açıklaması")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputData.description,expression:"inputData.description"}],staticClass:"form-control",attrs:{id:"description",name:"description"},domProps:{value:t.inputData.description},on:{input:function(e){e.target.composing||t.$set(t.inputData,"description",e.target.value)}}}),t._v(" "),o("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])])]}}],null,!0)}),t._v(" "),o("v-tabs",{attrs:{"background-color":"primary",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("client-only",t._l(t.items,(function(e){return o("v-tab",{key:e.tab},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.tab)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])})),1)],1),t._v(" "),o("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("v-tab-item",{attrs:{eager:""}},[o("v-card",{attrs:{flat:""}},[t.isEmpty(t.inputs)?t._e():o("v-card-text",[o("client-only",t._l(t.inputs,(function(input,e){return o("div",{key:e,staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"},[o("ValidationProvider",{attrs:{name:input[0].label,rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:input[0].id}},[t._v(t._s(input[0].label))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:input[0].value,expression:"input[0].value"}],staticClass:"form-control",attrs:{id:input[0].id,type:"text",name:"diseaseName[]"},domProps:{value:input[0].value},on:{input:function(e){e.target.composing||t.$set(input[0],"value",e.target.value)}}}),t._v(" "),o("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])])]}}],null,!0)})],1),t._v(" "),o("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2"},[o("ValidationProvider",{attrs:{name:input[1].label,rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:input[1].id}},[t._v(t._s(input[1].label))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:input[1].value,expression:"input[1].value"}],staticClass:"form-control",attrs:{id:input[1].id,type:"text",name:"diseaseMin[]"},domProps:{value:input[1].value},on:{input:function(e){e.target.composing||t.$set(input[1],"value",e.target.value)}}}),t._v(" "),o("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])])]}}],null,!0)})],1),t._v(" "),o("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2"},[o("ValidationProvider",{attrs:{name:input[2].label,rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:input[2].id}},[t._v(t._s(input[2].label))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:input[2].value,expression:"input[2].value"}],staticClass:"form-control",attrs:{id:input[2].id,type:"text",name:"diseaseMax[]"},domProps:{value:input[2].value},on:{input:function(e){e.target.composing||t.$set(input[2],"value",e.target.value)}}}),t._v(" "),o("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])])]}}],null,!0)})],1),t._v(" "),o("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2"},[o("ValidationProvider",{attrs:{name:input[3].label,rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:input[3].id}},[t._v(t._s(input[3].label))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:input[3].value,expression:"input[3].value"}],staticClass:"form-control",attrs:{id:input[3].id,type:"text",name:"diseaseType[]"},domProps:{value:input[3].value},on:{input:function(e){e.target.composing||t.$set(input[3],"value",e.target.value)}}}),t._v(" "),o("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])])]}}],null,!0)})],1),t._v(" "),o("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 py-auto my-auto text-center align-bottom"},[o("button",{staticClass:"btn btn-lg btn-primary text-white rounded-circle align-bottom text-center",attrs:{role:"button"},on:{click:function(e){return e.preventDefault(),t.cloneProperty(e)}}},[o("i",{staticClass:"fa fa-plus"})]),t._v(" "),t.inputs.length>1?o("button",{staticClass:"btn btn-lg btn-danger text-white rounded-circle align-bottom text-center",attrs:{role:"button"},on:{click:function(e){return e.preventDefault(),t.removeProperty(input[0].id)}}},[o("i",{staticClass:"fa fa-times"})]):t._e()])])})),0)],1)],1)],1)],1),t._v(" "),o("button",{staticClass:"btn btn-outline-primary rounded-0 btn-lg",attrs:{type:"submit"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tHastalığı Kayıt Et\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1)],1)]}}])})],1)])])])])])])])}),[],!1,null,null,null);e.default=component.exports;v()(component,{VApp:m.a,VCard:h.a,VCardText:f.c,VDivider:C.a,VStepper:_.a,VStepperContent:y.a,VStepperHeader:A.a,VStepperItems:A.b,VStepperStep:k.a,VTab:w.a,VTabItem:T.a,VTabs:x.a,VTabsItems:D.a})}}]);