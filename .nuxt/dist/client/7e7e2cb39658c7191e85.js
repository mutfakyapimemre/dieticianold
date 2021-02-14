(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{430:function(t,e,r){"use strict";r.r(e);r(12),r(2),r(23);var o=r(15),n=r(21),l=r.n(n),d=r(55),c=r(69),m={middleware:["session-control","admin"],layout:"admin",components:{ValidationObserver:c.a,ValidationProvider:c.b},data:function(){return{name:null,phone:null,email:null,password:null,password_confirmation:null,facebook:null,twitter:null,instagram:null,youtube:null,linkedin:null,img_url:null,userData:this.isEmpty(l.a.get("userData"))?null:JSON.parse(d.a.decode(l.a.get("userData")))}},methods:{isEmpty:function(t){return"number"!=typeof t&&("string"==typeof t||Array.isArray(t)?0==t.length:"object"==Object(o.a)(t)?null==t||0==Object.keys(t).length:"boolean"!=typeof t&&!t)},saveUsers:function(){var t=this,e=new FormData(this.$refs.usersForm);this.$axios.post("https://api.klinikdiyetisyen.com/api/panel/users/create",e,{json:!0,withCredentials:!1,mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Authorization","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Credentials":!0,"Content-Type":"multipart/form-data; boundary="+e._boundary,Authorization:"Bearer "+this.userData.api_token},credentials:"same-origin"}).then((function(e){e.data.success?(t.$izitoast.success({title:e.data.title,message:e.data.msg,position:"topCenter"}),setTimeout((function(){t.$router.go(decodeURIComponent("/panel/users"))}),2e3)):t.$izitoast.error({title:e.data.title,message:e.data.msg,position:"topCenter"})}))}}},v=r(68),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-wrapper"},[r("div",{staticClass:"page-wrapper"},[r("div",{staticClass:"content container-fluid"},[r("div",{staticClass:"page-header"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("h3",{staticClass:"page-title"},[t._v("Kullanıcılar")]),t._v(" "),r("ul",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/panel",tag:"a"}},[t._v("Anasayfa")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("Kullanıcılar")])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[t._m(0),t._v(" "),r("div",{staticClass:"card-body"},[r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.handleSubmit;return[r("form",{ref:"usersForm",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),o(t.saveUsers)}}},[r("ul",{staticClass:"nav nav-tabs nav-tabs-bottom nav-justified"},[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link active",attrs:{href:"#genel-bilgiler","data-toggle":"tab"}},[t._v("Genel Bilgiler")])]),t._v(" "),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#sosyal-medya","data-toggle":"tab"}},[t._v("Sosyal Medya")])])]),t._v(" "),r("div",{staticClass:"tab-content mb-3"},[r("div",{staticClass:"tab-pane show active",attrs:{id:"genel-bilgiler"}},[r("ValidationProvider",{attrs:{name:"Adınız ve Soyadınız",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"title"}},[t._v("Adınız ve Soyadınız")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],staticClass:"form-control",attrs:{id:"title",type:"text",name:"name"},domProps:{value:t.data.name},on:{input:function(e){e.target.composing||t.$set(t.data,"name",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(o[0]))])])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{name:"Email Adresiniz",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"company_name"}},[t._v("Email Adresiniz")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],staticClass:"form-control",attrs:{id:"company_name",type:"text",name:"email"},domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(o[0]))])])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{name:"Şifreniz",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[t._v("Şifreniz")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.password,expression:"data.password"}],staticClass:"form-control",attrs:{id:"password",type:"text",name:"password"},domProps:{value:t.data.password},on:{input:function(e){e.target.composing||t.$set(t.data,"password",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(o[0]))])])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{name:"Tekrar Şifreniz",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password_confirmation"}},[t._v("Tekrar Şifreniz")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.password_confirmation,expression:"data.password_confirmation"}],staticClass:"form-control",attrs:{id:"password_confirmation",type:"text",name:"password_confirmation"},domProps:{value:t.data.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.data,"password_confirmation",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(o[0]))])])]}}],null,!0)}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"},[r("img",{attrs:{src:decodeURIComponent(t.siteSettings.baseURL)+"/public/storage/"+t.data.img_url,alt:t.data.name}})]),t._v(" "),r("div",{staticClass:"col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Kullanıcı Görseli")]),t._v(" "),r("input",{ref:"img_url",staticClass:"form-control",attrs:{type:"file",id:"img_url",name:"img_url"}})])])])],1),t._v(" "),r("div",{staticClass:"tab-pane",attrs:{id:"sosyal-medya"}},[r("ValidationProvider",{attrs:{name:"Facebook",rules:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"facebook"}},[t._v("Facebook")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.facebook,expression:"data.facebook"}],staticClass:"form-control",attrs:{id:"facebook",type:"text",name:"facebook"},domProps:{value:t.data.facebook},on:{input:function(e){e.target.composing||t.$set(t.data,"facebook",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(o[0]))])])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{name:"Facebook",rules:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"twitter"}},[t._v("Twitter")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.twitter,expression:"data.twitter"}],staticClass:"form-control",attrs:{id:"twitter",type:"text",name:"twitter"},domProps:{value:t.data.twitter},on:{input:function(e){e.target.composing||t.$set(t.data,"twitter",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(o[0]))])])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{name:"Instagram",rules:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"instagram"}},[t._v("Instagram")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.instagram,expression:"data.instagram"}],staticClass:"form-control",attrs:{id:"instagram",type:"text",name:"instagram"},domProps:{value:t.data.instagram},on:{input:function(e){e.target.composing||t.$set(t.data,"instagram",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(o[0]))])])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{name:"Linkedin",rules:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"linkedin"}},[t._v("Linkedin")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.linkedin,expression:"data.linkedin"}],staticClass:"form-control",attrs:{id:"linkedin",type:"text",name:"linkedin"},domProps:{value:t.data.linkedin},on:{input:function(e){e.target.composing||t.$set(t.data,"linkedin",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(o[0]))])])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{name:"Youtube",rules:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"youtube"}},[t._v("Youtube")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.youtube,expression:"data.youtube"}],staticClass:"form-control",attrs:{id:"youtube",type:"text",name:"youtube"},domProps:{value:t.data.youtube},on:{input:function(e){e.target.composing||t.$set(t.data,"youtube",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(o[0]))])])]}}],null,!0)})],1)]),t._v(" "),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary login-btn",attrs:{type:"submit"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tGönder\n\t\t\t\t\t\t\t\t\t\t")])])])]}}])})],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h4",{staticClass:"card-title"},[this._v("Kullanıcı Ekle")])])}],!1,null,null,null);e.default=component.exports}}]);