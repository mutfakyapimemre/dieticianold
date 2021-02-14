(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{419:function(t,e,r){"use strict";r.r(e);r(12),r(2),r(23);var n=r(16),o=r(21),l=r.n(o),d=r(68),c=r(69),m={middleware:["session-control","dietician"],layout:"dietician",components:{ValidationObserver:c.a,ValidationProvider:c.b},data:function(){return{data:{name:null,gender:null,city:null,town:null,district:null,neighborhoods:null,address:null,birthDate:null,size:null,weight:null,waist:null,hip:null,chest:null,neck:null,upperArm:null,lowerArm:null,wrist:null,upperLeg:null,lowerLeg:null,skinfoldThickness:null,fatRatio:null,fat:null,muscleRatio:null,muscle:null,waterRatio:null,water:null,tc:null,phone:null,email:null,password:null,password_confirmation:null},country:{cities:[],towns:[],districts:[],neighborhoods:[]},months:["OCAK","ŞUBAT","MART","NİSAN","MAYIS","HAZİRAN","TEMMUZ","AĞUSTOS","EYLÜL","EKİM","KASIM","ARALIK"],siteSettings:this.$store.getters.siteSettings,userData:this.isEmpty(l.a.get("userData"))?null:JSON.parse(d.a.decode(l.a.get("userData")))}},computed:{img_url:function(){return"https://api.klinikdiyetisyen.com/"}},mounted:function(){this.getCities()},methods:{isEmpty:function(t){return"number"!=typeof t&&("string"==typeof t||Array.isArray(t)?0==t.length:"object"==Object(n.a)(t)?null==t||0==Object.keys(t).length:"boolean"!=typeof t&&!t)},getCities:function(){var t=this;this.$axios.get("https://api.klinikdiyetisyen.com/api/informations/cities").then((function(e){t.country.cities=e.data.data.cities.length>0?e.data.data.cities:[],setTimeout((function(){t.getTowns()}),100)}))},getTowns:function(t){var e=this,r=null;void 0!==t&&t.target.options.selectedIndex>-1&&(r=t.target.options[t.target.options.selectedIndex].dataset.id);if(isEmpty(r)&&void 0!==this.$refs.city.options&&this.$refs.city.options.length>0)for(var element in this.$refs.city.options)this.$refs.city.options[element].selected&&(r=this.$refs.city.options[element].dataset.id);this.$axios.get("https://api.klinikdiyetisyen.com/api/informations/towns?id="+r).then((function(r){e.country.towns=r.data.towns.length>0?r.data.towns:[],e.country.districts=[],e.country.neighborhoods=[],void 0===t&&setTimeout((function(){e.getDistricts()}),100)}))},getDistricts:function(t){var e=this,r=null;void 0!==t&&t.target.options.selectedIndex>-1&&(r=t.target.options[t.target.options.selectedIndex].dataset.id);if(isEmpty(r)&&void 0!==this.$refs.town.options&&this.$refs.town.options.length>0)for(var element in this.$refs.town.options)this.$refs.town.options[element].selected&&(r=this.$refs.town.options[element].dataset.id);this.$axios.get("https://api.klinikdiyetisyen.com/api/informations/districts?id="+r).then((function(r){e.country.districts=r.data.districts.length>0?r.data.districts:[],e.country.neighborhoods=[],void 0===t&&setTimeout((function(){e.getNeighborhoods()}),100)}))},getNeighborhoods:function(t){var e=this,r=null;void 0!==t&&t.target.options.selectedIndex>-1&&(r=t.target.options[t.target.options.selectedIndex].dataset.id);if(isEmpty(r)&&void 0!==this.$refs.district.options&&this.$refs.district.options.length>0)for(var element in this.$refs.district.options)this.$refs.district.options[element].selected&&(r=this.$refs.district.options[element].dataset.id);this.$axios.get("https://api.klinikdiyetisyen.com/api/informations/neighborhoods?id="+r).then((function(t){e.country.neighborhoods=t.data.neighborhoods.length>0?t.data.neighborhoods:[]}))},saveInformation:function(){var t=this,e=new FormData(this.$refs.informationForm);e.append("dietician_id",this.userData._id),this.$axios.post("https://api.klinikdiyetisyen.com/api/users/register/",e,{json:!0,withCredentials:!1,mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Authorization","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Credentials":!0,"Content-Type":"multipart/form-data; boundary="+e._boundary,Authorization:"Bearer "+this.userData.api_token}}).then((function(e){e.data.success?(t.$izitoast.success({title:e.data.title,message:e.data.msg,position:"topCenter"}),setTimeout((function(){t.$router.go(decodeURIComponent("/dietician-panel/consultants/"))}),2e3)):t.$izitoast.error({title:e.data.title,message:e.data.msg,position:"topCenter"})}))}}},v=r(67),_=r(264),f=r.n(_),h=r(386),w=r(387),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-wrapper"},[r("div",{staticClass:"page-wrapper"},[r("div",{staticClass:"content container-fluid"},[r("div",{staticClass:"page-header"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("h3",{staticClass:"page-title"},[t._v("Yeni Danışman Kaydet")]),t._v(" "),r("ul",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/dietician-panel",tag:"a"}},[t._v("Anasayfa")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("Yeni Danışman Kaydet")])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[t._m(0),t._v(" "),r("div",{staticClass:"card-body"},[r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.handleSubmit;return[r("form",{ref:"informationForm",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),n(t.saveInformation)}}},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-striped table-hover table-center table-borderless mb-0",staticStyle:{"border-top":"none"}},[r("tbody",[r("tr",[r("td",[r("b",[t._v("Email Adresiniz :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Email Adresiniz",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],staticClass:"form-control",attrs:{id:"email",type:"text",name:"email"},domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Telefon Numaranız :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Telefon Numaranız",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.phone,expression:"data.phone"}],staticClass:"form-control",attrs:{id:"phone",type:"text",name:"phone"},domProps:{value:t.data.phone},on:{input:function(e){e.target.composing||t.$set(t.data,"phone",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("T.C. Kimlik Numaranız :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"T.C. Kimlik Numaranız",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.tc,expression:"data.tc"}],staticClass:"form-control",attrs:{id:"tc",type:"text",name:"tc"},domProps:{value:t.data.tc},on:{input:function(e){e.target.composing||t.$set(t.data,"tc",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Şifreniz :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Şifreniz",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.password,expression:"data.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",id:"password",required:""},domProps:{value:t.data.password},on:{input:function(e){e.target.composing||t.$set(t.data,"password",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Tekrar Şifreniz :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Tekrar Şifreniz",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.password_confirmation,expression:"data.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",name:"password_confirmation",id:"password_confirmation",required:""},domProps:{value:t.data.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.data,"password_confirmation",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Adınız ve Soyadınız :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Adınız ve Soyadınız",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name"},domProps:{value:t.data.name},on:{input:function(e){e.target.composing||t.$set(t.data,"name",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Cinsiyet :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Cinsiyetiniz",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("v-radio-group",{attrs:{name:"gender",row:""},model:{value:t.data.gender,callback:function(e){t.$set(t.data,"gender",e)},expression:"data.gender"}},[r("v-radio",{attrs:{value:"Erkek"},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(" Erkek ")]},proxy:!0}],null,!0)}),t._v(" "),r("v-radio",{attrs:{value:"Kadın"},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(" Kadın ")]},proxy:!0}],null,!0)})],1),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Özel Durum :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Özel Durum",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("select",{staticClass:"form-control",attrs:{name:"special_case",id:"special_durum"}},[r("option",{attrs:{value:"YOK"}},[t._v("YOK")]),t._v(" "),r("option",{attrs:{value:"HAMİLE"}},[t._v("HAMİLE")]),t._v(" "),r("option",{attrs:{value:"EMZİKLİ"}},[t._v("EMZİKLİ")])]),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("İkamet Ettiğiniz İl :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"İkamet Ettiğiniz İl",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[t.isEmpty(t.country.cities)?t._e():r("select",{directives:[{name:"model",rawName:"v-model",value:t.data.city,expression:"data.city"}],ref:"city",staticClass:"form-control",attrs:{name:"city",id:"city"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data,"city",e.target.multiple?r:r[0])},t.getTowns]}},[r("option",{domProps:{value:null,selected:t.isEmpty(t.data.city)}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tİl Seçiniz.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),t._l(t.country.cities,(function(e,n){return r("option",{key:n,attrs:{"data-id":e.towns},domProps:{value:e.name,selected:t.data.city===e.name}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])}))],2),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("İkamet Ettiğiniz İlçe :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"İkamet Ettiğiniz İlçe",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("select",{directives:[{name:"model",rawName:"v-model",value:t.data.town,expression:"data.town"}],ref:"town",staticClass:"form-control",attrs:{name:"town",id:"town"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data,"town",e.target.multiple?r:r[0])},t.getDistricts]}},[t.country.towns.length>0?r("option",{attrs:{selected:""},domProps:{value:null}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tİlçe Seçiniz.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t.country.towns.length<=0?r("option",{attrs:{selected:""},domProps:{value:null}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tÖnce İl Seçiniz.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e(),t._v(" "),t._l(t.country.towns,(function(e,n){return r("option",{key:n,attrs:{"data-id":e.districts},domProps:{value:e.name,selected:e.name===t.data.town}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])}))],2),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("İkamet Ettiğiniz Semt :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"İkamet Ettiğiniz Semt",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("select",{directives:[{name:"model",rawName:"v-model",value:t.data.district,expression:"data.district"}],ref:"district",staticClass:"form-control",attrs:{name:"district",id:"district"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data,"district",e.target.multiple?r:r[0])},t.getNeighborhoods]}},[t.country.districts.length>0?r("option",{attrs:{selected:""},domProps:{value:null}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSemt Seçiniz.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t.country.districts.length<=0?r("option",{attrs:{selected:""},domProps:{value:t.data.district}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tÖnce İlçe Seçiniz.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e(),t._v(" "),t._l(t.country.districts,(function(e,n){return r("option",{key:n,attrs:{"data-id":e.neighborhoods},domProps:{value:e.name,selected:e.name===t.data.district}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])}))],2),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("İkamet Ettiğiniz Mahalle :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"İkamet Ettiğiniz Mahalle",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("select",{directives:[{name:"model",rawName:"v-model",value:t.data.neighborhood,expression:"data.neighborhood"}],ref:"neighborhood",staticClass:"form-control",attrs:{name:"neighborhood",id:"neighborhood"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data,"neighborhood",e.target.multiple?r:r[0])}}},[t.country.neighborhoods.length>0?r("option",{attrs:{selected:"selected"},domProps:{value:null}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMahalle Seçiniz.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t.country.neighborhoods.length<=0?r("option",{attrs:{selected:"selected"},domProps:{value:t.data.neighborhood}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tÖnce Semt Seçiniz.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e(),t._v(" "),t._l(t.country.neighborhoods,(function(e,n){return r("option",{key:n,domProps:{value:e.name,selected:e.name===t.data.neighborhood}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])}))],2),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("İkamet Ettiğiniz Adres :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"İkamet Ettiğiniz Adres",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.address,expression:"data.address"}],staticClass:"form-control",attrs:{name:"address",id:"address",cols:"30",rows:"5"},domProps:{value:t.data.address},on:{input:function(e){e.target.composing||t.$set(t.data,"address",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Doğum Tarihi :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Doğum Tarihi",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.birthDate,expression:"data.birthDate"}],staticClass:"form-control",attrs:{type:"date",name:"birthDate",placeholder:"Doğum Tarihi"},domProps:{value:t.data.birthDate},on:{input:function(e){e.target.composing||t.$set(t.data,"birthDate",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Boy (cm) :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Boy (cm)",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.size,expression:"data.size"}],staticClass:"form-control",attrs:{type:"number",name:"size",id:"size"},domProps:{value:t.data.size},on:{input:function(e){e.target.composing||t.$set(t.data,"size",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Ağırlık (kg) :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Ağırlık (kg)",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.weight,expression:"data.weight"}],staticClass:"form-control",attrs:{type:"number",name:"weight",id:"weight"},domProps:{value:t.data.weight},on:{input:function(e){e.target.composing||t.$set(t.data,"weight",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Bel (cm) :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Bel (cm)",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.waist,expression:"data.waist"}],staticClass:"form-control",attrs:{type:"number",name:"waist",id:"waist"},domProps:{value:t.data.waist},on:{input:function(e){e.target.composing||t.$set(t.data,"waist",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Kalça (cm) :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Kalça (cm)",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.hip,expression:"data.hip"}],staticClass:"form-control",attrs:{type:"number",name:"hip",id:"hip"},domProps:{value:t.data.hip},on:{input:function(e){e.target.composing||t.$set(t.data,"hip",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Göğüs (cm) :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Göğüs (cm)",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.chest,expression:"data.chest"}],staticClass:"form-control",attrs:{type:"number",name:"chest",id:"chest"},domProps:{value:t.data.chest},on:{input:function(e){e.target.composing||t.$set(t.data,"chest",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Boyun (cm) : ")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Boyun (cm)",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.neck,expression:"data.neck"}],staticClass:"form-control",attrs:{type:"number",name:"neck",id:"neck"},domProps:{value:t.data.neck},on:{input:function(e){e.target.composing||t.$set(t.data,"neck",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Üst Kol (cm) :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Üst Kol (cm)",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.upperArm,expression:"data.upperArm"}],staticClass:"form-control",attrs:{type:"number",name:"upperArm",id:"upperArm"},domProps:{value:t.data.upperArm},on:{input:function(e){e.target.composing||t.$set(t.data,"upperArm",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Alt Kol (cm) :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Alt Kol (cm)",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.lowerArm,expression:"data.lowerArm"}],staticClass:"form-control",attrs:{type:"number",name:"lowerArm",id:"lowerArm"},domProps:{value:t.data.lowerArm},on:{input:function(e){e.target.composing||t.$set(t.data,"lowerArm",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Kol Bileği (cm) :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Kol Bileği (cm)",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.wrist,expression:"data.wrist"}],staticClass:"form-control",attrs:{type:"number",name:"wrist",id:"wrist"},domProps:{value:t.data.wrist},on:{input:function(e){e.target.composing||t.$set(t.data,"wrist",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Üst Bacak (cm) :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Üst Bacak (cm)",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.upperLeg,expression:"data.upperLeg"}],staticClass:"form-control",attrs:{type:"number",name:"upperLeg",id:"upperLeg"},domProps:{value:t.data.upperLeg},on:{input:function(e){e.target.composing||t.$set(t.data,"upperLeg",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Alt Bacak (cm) :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Alt Bacak (cm)",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.lowerLeg,expression:"data.lowerLeg"}],staticClass:"form-control",attrs:{type:"number",name:"lowerLeg",id:"lowerLeg"},domProps:{value:t.data.lowerLeg},on:{input:function(e){e.target.composing||t.$set(t.data,"lowerLeg",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Deri Kıvrım Kalınlığı (cm) :")])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("ValidationProvider",{attrs:{name:"Deri Kıvrım Kalınlığı (cm)",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.skinfoldThickness,expression:"data.skinfoldThickness"}],staticClass:"form-control",attrs:{type:"number",name:"skinfoldThickness",id:"skinfoldThickness"},domProps:{value:t.data.skinfoldThickness},on:{input:function(e){e.target.composing||t.$set(t.data,"skinfoldThickness",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Yağ :")])]),t._v(" "),r("td",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.data.fatRatio)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("td",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.data.fat)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tKG\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Kas :")])]),t._v(" "),r("td",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.data.muscleRatio)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("td",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.data.muscle)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tKG\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Su :")])]),t._v(" "),r("td",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.data.waterRatio)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("td",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.data.water)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tKG\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),r("tr",[r("td",[r("b",[t._v("Profil Resminiz :")])]),t._v(" "),r("td",{staticClass:"align-middle",attrs:{colspan:"2"}},[r("input",{staticClass:"form-control",attrs:{type:"file",accept:"image/*",placeholder:"Profil Resminiz",name:"img_url"}})])])]),t._v(" "),r("tfoot",[r("tr",[r("td",{attrs:{colspan:"3"}})])])])]),t._v(" "),r("button",{staticClass:"btn btn-primary login-btn text-white float-right",attrs:{type:"submit"}},[t._v("\n\t\t\t\t\t\t\t\t\t\tDanışan Bilgilerini Kaydet\n\t\t\t\t\t\t\t\t\t")])])]}}])})],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h4",{staticClass:"card-title"},[this._v("Yeni Danışman Kaydet")])])}],!1,null,null,null);e.default=component.exports;f()(component,{VRadio:h.a,VRadioGroup:w.a})}}]);