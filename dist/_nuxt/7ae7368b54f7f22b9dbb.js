(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{438:function(t,e,r){"use strict";r.r(e);r(23);var n=r(16),o=(r(52),r(3)),l=(r(12),r(2),r(21)),c=r.n(l),d=r(68),m=r(69),v={middleware:["session-control","admin"],layout:"admin",components:{ValidationObserver:m.a,ValidationProvider:m.b},data:function(){return{counter:this.isEmpty(this.data)||this.isEmpty(this.data.values)?0:this.data.values.length,e1:1,imageData:[],data:{images:[]},userData:this.isEmpty(c.a.get("userData"))?null:JSON.parse(d.a.decode(c.a.get("userData")))}},computed:{img_url:function(){return"https://api.klinikdiyetisyen.com/"}},validate:function(t){var e=t.params;return null!==e.id?e.id:null},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=t.error,o=t.$axios,e.prev=1,e.next=4,o.get("https://api.klinikdiyetisyen.com/api/panel/criteria/update/"+r.id);case 4:return l=e.sent,data=l.data,e.abrupt("return",data);case 9:e.prev=9,e.t0=e.catch(1),n({message:"Ölçüt Bilgisi Bulunamadı.",statusCode:404});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},methods:{isEmpty:function(t){return"number"!=typeof t&&("string"==typeof t||Array.isArray(t)?0==t.length:"object"==Object(n.a)(t)?null==t||0==Object.keys(t).length:"boolean"!=typeof t&&!t)},cloneProperty:function(){this.data.values.push({title:"",value:"",type:"",id:++this.counter})},removeProperty:function(t){this.data.values.splice(t,1)},editCriterias:function(){var t=this,e=new FormData(this.$refs.criteriasForm);this.$axios.post("https://api.klinikdiyetisyen.com/api/panel/criteria/update/"+this.data._id.$oid,e,{json:!0,withCredentials:!1,mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Authorization","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Credentials":!0,"Content-Type":"multipart/form-data; boundary="+e._boundary,Authorization:"Bearer "+this.userData.api_token}}).then((function(e){e.data.success?(t.$izitoast.success({title:e.data.title,message:e.data.msg,position:"topCenter"}),setTimeout((function(){t.$router.go(decodeURIComponent("/panel/criterias"))}),2e3)):t.$izitoast.error({title:e.data.title,message:e.data.msg,position:"topCenter"})}))}}},f=r(67),h=r(264),C=r.n(h),y=r(326),_=r(266),w=r(272),A=r(273),k=r(240),D=r(274),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",{staticClass:"main-wrapper"},[r("div",{staticClass:"page-wrapper"},[r("div",{staticClass:"content container-fluid"},[r("div",{staticClass:"page-header"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("h3",{staticClass:"page-title"},[t._v("Ölçüt Düzenle")]),t._v(" "),r("ul",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/panel",tag:"a"}},[t._v("Anasayfa")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("Ölçüt Düzenle")])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h4",{staticClass:"card-title"},[t._v("Ölçüt Düzenle")])]),t._v(" "),r("div",{staticClass:"card-body"},[r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.handleSubmit;return[r("form",{ref:"criteriasForm",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),n(t.editCriterias)}}},[r("v-stepper",{model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[r("v-stepper-header",[r("v-stepper-step",{attrs:{complete:t.e1>1,step:"1"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tÖlçüt Bilgileri\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-divider")],1),t._v(" "),r("v-stepper-items",[r("v-stepper-content",{attrs:{step:"1"}},[r("ValidationProvider",{attrs:{name:"Ölçüt Adı",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"title"}},[t._v("Ölçüt Adı")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],staticClass:"form-control",attrs:{id:"title",type:"text",name:"name"},domProps:{value:t.data.name},on:{input:function(e){e.target.composing||t.$set(t.data,"name",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])])]}}],null,!0)}),t._v(" "),r("button",{staticClass:"btn btn-outline-primary rounded-0 btn-lg",attrs:{type:"submit"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tÖlçütü Güncelle\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1)],1)]}}])})],1)])])])])])])])}),[],!1,null,null,null);e.default=component.exports;C()(component,{VApp:y.a,VDivider:_.a,VStepper:w.a,VStepperContent:A.a,VStepperHeader:k.a,VStepperItems:k.b,VStepperStep:D.a})}}]);