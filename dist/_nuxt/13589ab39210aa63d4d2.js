(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{421:function(t,e,r){"use strict";r.r(e);r(15),r(12),r(2),r(23);var n=r(16),l=r(21),o=r.n(l),c=r(68),d=r(69),m={middleware:["session-control","admin"],layout:"admin",components:{ValidationObserver:d.a,ValidationProvider:d.b},data:function(){return{counter:0,inputs:[[{id:"criteria0",label:"Ölçüt Değeri Adı",value:""},{id:"criteriaValue0",label:"Ölçüt Değeri",value:""},{id:"criteriaType0",label:"Ölçüt Değeri Türü",value:""}]],e1:1,inputData:{name:null,description:null,id:null},userData:this.isEmpty(o.a.get("userData"))?null:JSON.parse(c.a.decode(o.a.get("userData")))}},computed:{img_url:function(){return"https://api.klinikdiyetisyen.com/"}},methods:{isEmpty:function(t){return"number"!=typeof t&&("string"==typeof t||Array.isArray(t)?0==t.length:"object"==Object(n.a)(t)?null==t||0==Object.keys(t).length:"boolean"!=typeof t&&!t)},cloneProperty:function(){this.inputs.push([{id:"criteria".concat(++this.counter),label:"Ölçüt Değeri Adı",value:""},{id:"criteriaValue".concat(++this.counter),label:"Ölçüt Değeri",value:""},{id:"criteriaType".concat(++this.counter),label:"Ölçüt Değeri Türü",value:""}])},removeProperty:function(t){for(var i=0;i<this.inputs.length;i++)this.inputs[i][0].id===t&&this.inputs.splice(i,1)},saveCriterias:function(){var t=this,e=new FormData(this.$refs.criteriasForm);this.$axios.post("https://api.klinikdiyetisyen.com/api/panel/criteria/create",e,{json:!0,withCredentials:!1,mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Authorization","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Credentials":!0,"Content-Type":"multipart/form-data; boundary="+e._boundary,Authorization:"Bearer "+this.userData.api_token},credentials:"same-origin"}).then((function(e){e.data.success?(t.$izitoast.success({title:e.data.title,message:e.data.msg,position:"topCenter"}),t.$refs.myDropzone.options.url="https://api.klinikdiyetisyen.com/api/panel/criteria/create-file/"+e.data.data.$oid,t.$refs.myDropzone.dropzone.options.url="https://api.klinikdiyetisyen.com/api/panel/criteria/create-file/"+e.data.data.$oid,t.options.url="https://api.klinikdiyetisyen.com/api/panel/criteria/create-file/"+e.data.data.$oid,t.inputData.id=e.data.data.$oid,t.options.params.title=e.data.name,t.e1=2):t.$izitoast.error({title:e.data.title,message:e.data.msg,position:"topCenter"})}))}}},v=r(67),f=r(264),h=r.n(f),y=r(326),C=r(266),k=r(272),_=r(273),D=r(240),A=r(274),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",{staticClass:"main-wrapper"},[r("div",{staticClass:"page-wrapper"},[r("div",{staticClass:"content container-fluid"},[r("div",{staticClass:"page-header"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("h3",{staticClass:"page-title"},[t._v("Makale Kategorileri")]),t._v(" "),r("ul",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/panel",tag:"a"}},[t._v("Anasayfa")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("Makale Kategorileri")])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h4",{staticClass:"card-title"},[t._v("Ölçüt Ekle")])]),t._v(" "),r("div",{staticClass:"card-body"},[r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.handleSubmit;return[r("form",{ref:"blogCategoriesForm",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),n(t.saveBlogCategories)}}},[r("v-stepper",{model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[r("v-stepper-header",[r("v-stepper-step",{attrs:{complete:t.e1>1,step:"1"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tMakale Kategorisi Bilgileri\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-divider")],1),t._v(" "),r("v-stepper-items",[r("v-stepper-content",{attrs:{step:"1"}},[r("ValidationProvider",{attrs:{name:"Makale Kategorisi Adı",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"title"}},[t._v("Makale Kategorisi Adı")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.inputData.name,expression:"inputData.name"}],staticClass:"form-control",attrs:{id:"title",type:"text",name:"name"},domProps:{value:t.inputData.name},on:{input:function(e){e.target.composing||t.$set(t.inputData,"name",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])])]}}],null,!0)}),t._v(" "),r("button",{staticClass:"btn btn-outline-primary rounded-0 btn-lg",attrs:{type:"submit"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tÖlçütü Kayıt Et\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1)],1)]}}])})],1)])])])])])])])}),[],!1,null,null,null);e.default=component.exports;h()(component,{VApp:y.a,VDivider:C.a,VStepper:k.a,VStepperContent:_.a,VStepperHeader:D.a,VStepperItems:D.b,VStepperStep:A.a})}}]);