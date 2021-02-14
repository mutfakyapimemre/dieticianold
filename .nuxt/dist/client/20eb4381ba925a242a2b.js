(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{393:function(t,e,n){"use strict";n.r(e);n(30),n(24),n(12),n(2),n(23);var r=n(15),l=n(10),o=n(349),c=n(63);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={middleware:["session-control","auth"],components:{ValidationObserver:o.a,ValidationProvider:o.b},data:function(){return{isUser:!0,isDietician:!1,email:null,password:null,password_confirmation:null,name:null,phone:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["isAuthenticated","loggedInUser"])),methods:{isEmpty:function(t){return"number"!=typeof t&&("string"==typeof t||Array.isArray(t)?0==t.length:"object"==Object(r.a)(t)?null==t||0==Object.keys(t).length:"boolean"!=typeof t&&!t)},onLogin:function(){var t=this,e=new FormData(this.$refs.userLogin);e.append("isUser",this.isUser),e.append("isDietician",this.isDietician),this.$store.dispatch("LoginUser",e).then((function(e){e.success?(t.$izitoast.success({title:e.title,message:e.msg,position:"topCenter"}),setTimeout((function(e){t.isEmpty(t.$route.query.url)?t.$router.go(decodeURIComponent("/profile")):window.location.href=decodeURIComponent(t.$route.query.url)}),2e3)):t.$izitoast.error({title:e.title,message:e.msg,position:"topCenter"})}))},onRegister:function(){var t=this,e=new FormData(this.$refs.userRegister);e.append("isUser",this.isUser),e.append("isDietician",this.isDietician),this.$store.dispatch("RegisterUser",e).then((function(e){e.success?t.$izitoast.success({title:e.title,message:e.msg,position:"topCenter"}):t.$izitoast.error({title:e.title,message:e.msg,position:"topCenter"})}))}}},m=n(68),v=n(259),_=n.n(v),h=n(321),y=n(302),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"h-auto"},[n("div",{staticClass:"breadcrumb-bar"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-12 col-sm-12 col-md-12 col-12 col-xl-12"},[n("nav",{staticClass:"page-breadcrumb",attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb pl-0"},[n("li",{staticClass:"breadcrumb-item"},[n("nuxt-link",{attrs:{to:"/",tag:"a"}},[t._v("Anasayfa")])],1),t._v(" "),n("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n\t\t\t\t\t\t\t\tKullanıcı Girişi\n\t\t\t\t\t\t\t")])])]),t._v(" "),n("h2",{staticClass:"breadcrumb-title"},[t._v("Kullanıcı Girişi")])])])])]),t._v(" "),n("div",{staticClass:"content account-page",staticStyle:{padding:"50px 0"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2"},[n("div",{staticClass:"account-content"},[n("div",{staticClass:"row align-items-center justify-content-center"},[n("div",{staticClass:"col-12 col-sm-12 col-md-7 col-lg-6 col-xl-6 login-left"},[n("img",{staticClass:"img-fluid",attrs:{src:"/img/login-banner.png",alt:"Diyetisyen Klinik"}})]),t._v(" "),n("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 login-right"},[n("nav",{staticClass:"user-tabs mb-4"},[n("ul",{staticClass:"nav nav-tabs nav-tabs-bottom nav-justified"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link active",attrs:{href:"#login","data-toggle":"tab"}},[t._v("Giriş Yap")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#register","data-toggle":"tab"}},[t._v("Kayıt Ol")])])])]),t._v(" "),n("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[n("div",{staticClass:"tab-pane fade show active",attrs:{id:"login",role:"tabpanel","aria-labelledby":"login-tab"}},[n("div",{staticClass:"login-header"},[n("h3",{staticClass:"font-weight-bold"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tDiyetisyen Klinik\n\t\t\t\t\t\t\t\t\t\t\t\t"),n("small",{staticClass:"font-weight-normal"},[t._v("Kullanıcı Girişi")]),t._v(" "),n("nuxt-link",{attrs:{to:"/dietician-login",tag:"a"}},[t._v("Diyetisyen Misiniz? Hemen Giriş Yapın")])],1)]),t._v(" "),n("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.handleSubmit;return[n("form",{ref:"userLogin",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),r(t.onLogin)}}},[n("div",{staticClass:"form-group form-focus"},[n("ValidationProvider",{attrs:{name:"Email Adresiniz",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-text-field",{attrs:{label:"Email Adresiniz","hide-details":"auto",name:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),t._v(" "),n("div",{staticClass:"form-group form-focus"},[n("ValidationProvider",{attrs:{name:"Şifreniz",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-text-field",{attrs:{label:"Şifreniz","hide-details":"auto",type:"password",name:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),t._v(" "),n("div",{staticClass:"text-right"},[n("nuxt-link",{staticClass:"forgot-link",attrs:{to:"/forgot-password",tag:"a"}},[t._v("Şifremi Unuttum.")])],1),t._v(" "),n("button",{staticClass:"btn btn-green-light login-btn",attrs:{type:"submit"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tGiriş Yap\n\t\t\t\t\t\t\t\t\t\t\t\t")])])]}}])})],1),t._v(" "),n("div",{staticClass:"tab-pane fade",attrs:{id:"register",role:"tabpanel","aria-labelledby":"register-tab"}},[n("div",{staticClass:"login-header"},[n("h3",{staticClass:"font-weight-bold"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tDiyetisyen Klinik\n\t\t\t\t\t\t\t\t\t\t\t\t"),n("small",{staticClass:"font-weight-normal"},[t._v("Kullanıcı Kaydı")]),t._v(" "),n("nuxt-link",{attrs:{to:"/dietician-login",tag:"a"}},[t._v("Diyetisyen Misiniz? Hemen Kayıt Olun")])],1)]),t._v(" "),n("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.handleSubmit;return[n("form",{ref:"userRegister",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),r(t.onRegister)}}},[n("div",{staticClass:"form-group form-focus"},[n("ValidationProvider",{attrs:{name:"Adınız ve Soyadınız",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-text-field",{attrs:{label:"Adınız ve Soyadınız","hide-details":"auto",type:"text",name:"name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),t._v(" "),n("div",{staticClass:"form-group form-focus"},[n("ValidationProvider",{attrs:{name:"Email Adresiniz",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-text-field",{attrs:{label:"Email Adresiniz","hide-details":"auto",type:"email",name:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),t._v(" "),n("div",{staticClass:"form-group form-focus"},[n("ValidationProvider",{attrs:{name:"Telefon Numaranız",rules:"required|phone"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-text-field",{attrs:{label:"Telefon Numaranız","hide-details":"auto",type:"text",name:"phone"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),t._v(" "),n("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),t._v(" "),n("div",{staticClass:"form-group form-focus"},[n("ValidationProvider",{attrs:{name:"Şifreniz",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-text-field",{attrs:{label:"Şifreniz","hide-details":"auto",type:"password",name:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),t._v(" "),n("div",{staticClass:"form-group form-focus"},[n("ValidationProvider",{attrs:{name:"Tekrar Şifreniz",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-text-field",{attrs:{label:"Şifreniz","hide-details":"auto",type:"password",name:"password_confirmation"},model:{value:t.password_confirmation,callback:function(e){t.password_confirmation=e},expression:"password_confirmation"}}),t._v(" "),n("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),t._v(" "),n("button",{staticClass:"btn btn-green-light login-btn",attrs:{type:"submit"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tKayıt Ol\n\t\t\t\t\t\t\t\t\t\t\t\t")])])]}}])})],1)])])])])])])])])])}),[],!1,null,null,null);e.default=component.exports;_()(component,{VApp:h.a,VTextField:y.a})}}]);