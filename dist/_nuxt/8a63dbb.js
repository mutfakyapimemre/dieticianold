(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{375:function(t,e,r){"use strict";r.r(e);r(5),r(2),r(13);var n=r(4),o={layout:"dietician",computed:{img_url:function(){return"https://api.klinikdiyetisyen.com/"}},methods:{isEmpty:function(t){return"number"!=typeof t&&("string"==typeof t||Array.isArray(t)?0==t.length:"object"==Object(n.a)(t)?null==t||0==Object.keys(t).length:"boolean"!=typeof t&&!t)},logout:function(){var t=this;this.$auth.logout(),this.$auth.$storage.removeUniversal("user"),this.$auth.strategy.refreshToken.reset(),this.$izitoast.success({title:"Başarılı!",message:"Başarıyla Çıkış Yaptınız Yönlendiriliyorsunuz.",position:"topCenter"}),setTimeout((function(){t.$router.go(decodeURIComponent("/"))}),2e3)}},data:function(){return{userData:this.isEmpty(this.$auth.$storage.getUniversal("user"))?null:this.$auth.$storage.getUniversal("user"),isAuthenticated:this.isEmpty(this.$auth.$storage.getUniversal("user"))?null:this.$auth.$storage.getUniversal("user").api_token,siteSettings:this.$store.getters.siteSettings}}},l=r(71),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("div",{staticClass:"header-left"},[r("nuxt-link",{attrs:{to:"/"}},[r("img",{staticClass:"logo",attrs:{src:"/img/logo.png",alt:"Diyetisyen Klinik"}})]),t._v(" "),r("nuxt-link",{staticClass:"logo logo-small",attrs:{to:"/"}},[r("img",{attrs:{src:"/img/favicon.png",alt:"Diyetisyen Klinik",width:"30",height:"30"}})])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),r("ul",{staticClass:"nav user-menu"},[r("li",{staticClass:"nav-item dropdown noti-dropdown"},[t._m(2),t._v(" "),r("div",{staticClass:"dropdown-menu notifications"},[t._m(3),t._v(" "),t._m(4),t._v(" "),r("div",{staticClass:"topnav-dropdown-footer"},[r("nuxt-link",{attrs:{to:"/panel/notifications"}},[t._v("Tüm Bildirimleri Görüntüle")])],1)])]),t._v(" "),r("li",{staticClass:"nav-item dropdown has-arrow"},[r("a",{staticClass:"dropdown-toggle nav-link",attrs:{href:"javascript:void(0)","data-toggle":"dropdown"}},[r("span",{staticClass:"user-img"},[r("img",{staticClass:"rounded-circle",attrs:{src:t.img_url+"/public/storage/"+t.userData.profile_photo,width:"31",alt:t.userData.name}})])]),t._v(" "),r("div",{staticClass:"dropdown-menu"},[r("div",{staticClass:"user-header"},[r("div",{staticClass:"avatar avatar-sm"},[r("img",{staticClass:"avatar-img rounded-circle",attrs:{src:t.img_url+"/public/storage/"+t.userData.profile_photo,alt:t.userData.name}})]),t._v(" "),t.isEmpty(t.userData)?t._e():r("div",{staticClass:"user-text"},[r("h6",[r("span",[t._v(t._s(t.userData.name))])]),t._v(" "),r("p",{staticClass:"text-muted mb-0"},[t._v(t._s(t.userData.department))])])]),t._v(" "),t.isEmpty(t.userData)||t.isEmpty(t.userData._id)?t._e():r("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/profile"}},[t._v("Profilim")]),t._v(" "),r("a",{staticClass:"dropdown-item",attrs:{href:"javascript:void(0)"},on:{click:t.logout}},[t._v("Çıkış Yap")])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"javascript:void(0);",id:"toggle_btn"}},[e("i",{staticClass:"fa fa-bars"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"mobile_btn",attrs:{href:"javascript:void(0)",id:"mobile_btn"}},[e("i",{staticClass:"fa fa-bars"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"dropdown-toggle nav-link",attrs:{href:"javascript:void(0);","data-toggle":"dropdown"}},[r("i",{staticClass:"fa fa-bell"}),t._v(" "),r("span",{staticClass:"badge badge-pill"},[t._v("3")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"topnav-dropdown-header"},[r("span",{staticClass:"notification-title"},[t._v("Bildirimler")]),t._v(" "),r("a",{staticClass:"clear-noti",attrs:{href:"javascript:void(0)"}},[t._v("Tümünü Temizle")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"noti-content"},[r("ul",{staticClass:"notification-list"},[r("li",{staticClass:"notification-message"},[r("a",{attrs:{href:"javascript:void(0);"}},[r("div",{staticClass:"media"},[r("span",{staticClass:"avatar avatar-sm"},[r("img",{staticClass:"avatar-img rounded-circle",attrs:{alt:"User Image",src:"/img/patients/patient3.jpg"}})]),t._v(" "),r("div",{staticClass:"media-body"},[r("p",{staticClass:"noti-details"},[r("span",{staticClass:"noti-title"})]),t._v(" "),r("p",{staticClass:"noti-time"},[r("span",{staticClass:"notification-time"},[t._v("12 mins ago")])])])])])])])])}],!1,null,null,null);e.default=component.exports}}]);