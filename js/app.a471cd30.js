(function(t){function e(e){for(var o,r,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],o=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var o={},n={app:0},i=[];function r(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=o,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0c31":function(t){t.exports=JSON.parse('{"navbar":{"link-education":{"name":"Educação","link-academic":"Formação Acadêmica","link-extra":"Formação Extra"},"link-experience":"Experiência","link-skills":"Habilidades"},"blog":{"head":"Notas","posted":"Publicado em:","sponsor":"Patrocinado por "},"home":{"description":"Graduando em Ciência da Computação - UFV/CAF"},"education":{"academic":{"description":"Formação Acadêmica","grade-course":{"description":"Ciência da Computação / UFV-CAF","time":"2019 - Presente"},"high-school-grade":"Técnico em Análise e Desenvolvimento de Sistemas - COLTEC/UFMG"},"extra":{"description":"Formação Extra","btn1-see":"Ver Certificado","btn2-github":"Github","btn3-more":"Ver Mais","btn4-less":"Ver Menos","with-certificate":"Cursos com Certificado","no-certificate":{"description":"Cursos sem Certificado","c1-specialization-DSA":"Especialização em Estruturas de Dados e Algoritmos - Universidade da Califórnia, San Diego & National Research University Higher School of Economics"}},"languages":{"description":"Idiomas","pt_br":"Português","en_US":"Inglês","text":"Compreende Bem, Lê Bem, Fala Bem, Escreve Bem"}},"experience":{"description":"Experiência Profissional","exp1":{"name":"Progetec - Estágio","time":"6 meses - 2018","description":"Trabalhei com C# para transformar o sistema Desktop para sistema web. Para isso tive que arquitetei o sistema com o DDD. Também desenvolvi os códigos do SQLServer utilizando a ferramenta de migrations a partir dos domínios definidos. A infraestrutura foi desenvolvida com Docker e Plataforma da Google Cloud."}},"blogHome":{"placeholderComboBox":"Categorias","buttonFilter":"Filtrar"}}')},"42d7":function(t,e,a){"use strict";a("9a11")},"49f8":function(t,e,a){var o={"./en.json":"edd4","./pt_BR.json":"0c31"};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}n.keys=function(){return Object.keys(o)},n.resolve=i,t.exports=n,n.id="49f8"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var o=a("2b0e"),n=a("bb71");a("da64");o["a"].use(n["a"],{theme:{primary:"#18298C",secondary:"#04BF8A",accent:"#F29F05"},iconfont:"fa || md"});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Navbar"),a("router-view"),a("Footer")],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{attrs:{color:"primary",fixed:"",app:""}},[a("router-link",{attrs:{to:"/"}},[a("v-toolbar-title",{staticClass:"grey--text text--lighten-3",on:{click:function(e){return t.$vuetify.goTo("#landing",{offset:-100})}}},[t._v("Germano Barcelos")])],1),a("v-spacer"),a("v-toolbar-items",{staticClass:"fill-height"},[a("v-btn",{staticClass:"grey--text text--lighten-3",attrs:{to:"/blog",flat:""}},[t._v(" Blog ")]),a("v-btn",{staticClass:"grey--text text--lighten-3",attrs:{flat:"",target:"_blank",href:t.linkCV()}},[t._v("\n      CV\n    ")]),a("v-menu",{attrs:{bottom:""}},[a("v-btn",{staticClass:"grey--text text--lighten-3",attrs:{slot:"activator",color:"primary",dark:"",flat:""},slot:"activator"},[a("v-toolbar-title",{staticClass:"body-1"},[t._v(t._s(t.displayLocale))])],1),a("v-list",t._l(t.langs,(function(e,o){return a("v-list-tile",{key:o,on:{click:function(a){return t.changeLocale(e)}}},[a("v-list-tile-title",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs1:""}},[a("p",{staticClass:"body-1"},[t._v(t._s(e.name))])])],1)],1)],1)})),1)],1)],1)],1)},l=[],c={name:"navbar",data:function(){return{langs:[{name:"English",id:"en"},{name:"Português",id:"pt_BR"}]}},methods:{changeLocale:function(t){this.$i18n.locale=t.id},linkCV:function(){var t="https://drive.google.com/open?id=1rkQ3Hsk9yx1dcKVC1We9qaqDlUMSKbeQ",e="https://drive.google.com/open?id=1OQvs40bzM90_-gs3S0rtXJW3Lue9of8l";return"pt_BR"===this.$i18n.locale?e:t}},computed:{displayLocale:function(){var t="en";return"pt_BR"===this.$i18n.locale&&(t="pt_BR"),t}}},u=c,p=a("2877"),d=a("6544"),m=a.n(d),g=a("8336"),f=a("0e8f"),v=a("a722"),h=a("8860"),b=a("ba95"),x=a("5d23"),y=a("e449"),_=a("9910"),C=a("71d9"),w=a("2a7f"),k=Object(p["a"])(u,s,l,!1,null,null,null),V=k.exports;m()(k,{VBtn:g["a"],VFlex:f["a"],VLayout:v["a"],VList:h["a"],VListTile:b["a"],VListTileTitle:x["b"],VMenu:y["a"],VSpacer:_["a"],VToolbar:C["a"],VToolbarItems:w["a"],VToolbarTitle:w["b"]});var S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{attrs:{color:"primary",padless:""}},[o("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[o("v-flex",{attrs:{xs6:"","justify-center":"","align-center":""}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("v-toolbar-items",{staticClass:"justify-center"},[o("p",{staticClass:"grey--text text--lighten-3 my-auto text-xs-right"},[t._v("\n              "+t._s(t.$t("blog.sponsor"))+"\n            ")]),o("v-btn",{attrs:{flat:"",color:"primary",href:"https://buttercms.com"}},[o("v-img",{staticClass:"my-auto mx-auto text-xs-left",attrs:{height:"150%",width:"150%",src:a("5e21")}})],1)],1)],1)],1)],1)],1)],1)},E=[],F=a("553a"),P=a("adda"),j={},D=Object(p["a"])(j,S,E,!1,null,null,null),O=D.exports;m()(D,{VBtn:g["a"],VFlex:f["a"],VFooter:F["a"],VImg:P["a"],VLayout:v["a"],VToolbarItems:w["a"]});var L={name:"App",components:{Navbar:V,Footer:O},data:function(){return{}}},T=L,B=a("7496"),A=Object(p["a"])(T,i,r,!1,null,null,null),$=A.exports;m()(A,{VApp:B["a"]});var U=a("8c4f"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-container",{attrs:{"fill-height":"","grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("Home",{attrs:{id:"landing"}})],1)],1)],1)},M=[],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("v-container",{attrs:{"fill-height":"","grid-list-xs":"","text-xs-center":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-avatar",{staticClass:"mb-3",attrs:{tile:!1,size:256,color:"grey lighten-4"}},[a("img",{attrs:{src:"https://avatars3.githubusercontent.com/u/26390780?v=4",alt:"avatar"}})])],1),a("v-flex",{attrs:{xs12:""}},[a("h2",{staticClass:"display-1 font-weight-condensed mb-3"},[t._v("\n          Germano Barcelos\n        ")]),a("p",{staticClass:"headline font-weight-light"},[t._v("\n          "+t._s(t.$t("home.description"))+"\n        ")])]),a("v-flex",{attrs:{xs2:"",sm1:""}},[a("v-tooltip",{attrs:{bottom:""}},[a("v-btn",{attrs:{slot:"activator",href:"https://www.linkedin.com/in/germano-b-534b6a138/",icon:"",large:"",target:"_blank"},slot:"activator"},[a("i",{staticClass:"fab fa-linkedin-in fa-2x"})]),a("span",[t._v("LinkedIn")])],1)],1),a("v-flex",{attrs:{xs2:"",sm1:""}},[a("v-tooltip",{attrs:{bottom:""}},[a("v-btn",{attrs:{slot:"activator",href:"https://github.com/gegen07",icon:"",large:"",target:"_blank"},slot:"activator"},[a("i",{staticClass:"fab fa-github fa-2x"})]),a("span",[t._v("Github")])],1)],1),a("v-flex",{attrs:{xs2:"",sm1:""}},[a("v-tooltip",{attrs:{bottom:""}},[a("v-btn",{attrs:{slot:"activator",href:"https://twitter.com/gegen07",icon:"",large:"",target:"_blank"},slot:"activator"},[a("i",{staticClass:"fab fa-twitter fa-2x"})]),a("span",[t._v("Twitter")])],1)],1)],1)],1)],1)},N=[],z={name:"home",components:{},data:function(){return{}}},H=z,R=a("8212"),J=a("a523"),Q=a("3a2f"),W=Object(p["a"])(H,G,N,!1,null,null,null),q=W.exports;m()(W,{VAvatar:R["a"],VBtn:g["a"],VContainer:J["a"],VFlex:f["a"],VLayout:v["a"],VTooltip:Q["a"]});var K={name:"home",components:{Home:q}},X=K,Z=a("549c"),Y=Object(p["a"])(X,I,M,!1,null,null,null),tt=Y.exports;m()(Y,{VContainer:J["a"],VContent:Z["a"],VLayout:v["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("v-content",[a("v-container",{attrs:{"justify-center":"","grid-list-xs":"","fill-height":""}},[a("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",lg7:""}},[a("v-flex",{staticClass:"mx-auto mt-5 mb-3 justify-center",attrs:{lg12:""}},[a("p",{staticClass:"display-2 justify-center"},[t._v(" "+t._s(t.$t("blog.head"))+" ")])]),a("v-divider"),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs10:""}},[a("v-select",{attrs:{items:t.categories,"item-text":"name","item-value":"slug","prepend-icon":"filter_list","small-chips":"",label:"Tags","persistent-hint":"",clearable:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("v-chip",{key:JSON.stringify(e.item),attrs:{selected:e.selected},on:{input:e.item}},[a("strong",[t._v(t._s(e.item.name))]),t._v(" \n                  ")])]}}]),model:{value:t.selectedItems,callback:function(e){t.selectedItems=e},expression:"selectedItems"}})],1),a("v-flex",{attrs:{xs2:""}},[a("v-btn",{on:{click:function(e){return t.filterCategories()}}},[t._v(t._s(t.$t("blogHome.buttonFilter")))])],1),t._l(t.posts,(function(e,o){return a("v-flex",{key:e.slug+"_"+o,staticClass:"mx-auto mt-0 mb-3",attrs:{xs12:""}},[a("router-link",{staticStyle:{display:"inline-block","text-decoration":"none"},attrs:{to:"/blog/"+e.slug}},[a("v-flex",{staticClass:"mb-3"},[a("p",{staticClass:"font-weight-black headline text--primary"},[t._v(t._s(e.title))]),a("p",{staticClass:"subtitle-1 font-weight-light text--primary"},[t._v(t._s(e.summary))]),a("p",{staticClass:"caption font-italic font-weight-light"},[t._v("  "+t._s(t.$t("blog.posted"))+" "+t._s(t.parseDate(e.published))+" ")])])],1),a("v-divider")],1)})),a("v-flex",{staticClass:"text-xs-center"},[a("v-pagination",{attrs:{length:Math.ceil(t.pagination.total/t.pagination.perpage)},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1)],2)],1)],1)],1)],1)],1)},at=[],ot=a("b396"),nt=a.n(ot),it=nt()("536d79ab1d64cfcd47138b29ac75f19a5eb3c330"),rt={name:"blog-home",data:function(){return{metadata:{},page_title:"Blog",posts:[],categories:[],selectedItems:[],pagination:{page:1,total:1,perpage:10}}},methods:{filterCategories:function(){var t=this;if(void 0===this.selectedItems||0===this.selectedItems.length)it.post.list({page:this.pagination.page,page_size:this.pagination.perpage}).then((function(e){t.pagination.total=e.data.meta.count,t.posts=e.data.data}));else{var e=this.selectedItems;console.log(e),it.post.list({page:this.pagination.page,page_size:this.pagination.perpage,category_slug:e}).then((function(a){t.pagination.total=a.data.meta.count,t.posts=a.data.data,console.log(e)}))}},getPosts:function(){var t=this;it.post.list({page:this.pagination.page,page_size:this.pagination.perpage}).then((function(e){t.pagination.total=e.data.meta.count,t.posts=e.data.data}))},getCategories:function(){var t=this;it.category.list().then((function(e){t.categories=e.data.data}))},parseDate:function(t){var e=new Date(t).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"numeric"});return e}},mounted:function(){this.getPosts(),this.getCategories()}},st=rt,lt=(a("42d7"),a("cc20")),ct=a("ce7e"),ut=a("891e"),pt=a("b56d"),dt=Object(p["a"])(st,et,at,!1,null,null,null),mt=dt.exports;m()(dt,{VBtn:g["a"],VChip:lt["a"],VContainer:J["a"],VContent:Z["a"],VDivider:ct["a"],VFlex:f["a"],VLayout:v["a"],VPagination:ut["a"],VSelect:pt["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-container",{attrs:{"justify-center":"","grid-list-xs":"","fill-height":""}},[a("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[a("v-flex",{staticClass:"mt-5",attrs:{xs12:"",lg8:"",id:"blog-post"}},[a("h1",{staticClass:"display-"},[t._v(t._s(t.post.data.title))]),a("v-spacer"),a("p",[t._v(" Posted on: "+t._s(t.parseDate(t.post.data.published))+" ")]),a("v-divider"),a("div",{staticClass:"mt-5",domProps:{innerHTML:t._s(t.post.data.body)}}),t.post.meta.previous_post?a("router-link",{staticClass:"button",attrs:{to:/blog/+t.post.meta.previous_post.slug}},[t._v("\n          "+t._s(t.post.meta.previous_post.title)+"\n        ")]):t._e(),t.post.meta.next_post?a("router-link",{staticClass:"button",attrs:{to:/blog/+t.post.meta.next_post.slug}},[t._v("\n          "+t._s(t.post.meta.next_post.title)+"\n        ")]):t._e()],1)],1)],1)],1)},ft=[],vt={name:"blog-post",data:function(){return{post:{}}},methods:{getPost:function(){var t=this;it.post.retrieve(this.$route.params.slug).then((function(e){t.post=e.data})).catch((function(t){console.log(t)}))},parseDate:function(t){var e=new Date(t).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"numeric"});return e}},watch:{$route:{immediate:!0,handler:function(t,e){this.getPost()}}},created:function(){this.getPost()}},ht=vt,bt=(a("6801"),Object(p["a"])(ht,gt,ft,!1,null,null,null)),xt=bt.exports;m()(bt,{VContainer:J["a"],VContent:Z["a"],VDivider:ct["a"],VFlex:f["a"],VLayout:v["a"],VSpacer:_["a"]}),o["a"].use(U["a"]);var yt=new U["a"]({routes:[{path:"/",name:"home",component:tt},{path:"/blog/",name:"blog-home",component:mt},{path:"/blog/:slug",name:"blog-post",component:xt}]}),_t=(a("4917"),a("ac6a"),a("a925"));function Ct(){var t=a("49f8"),e={};return t.keys().forEach((function(a){var o=a.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){var n=o[1];e[n]=t(a)}})),e}o["a"].use(_t["a"]);var wt=new _t["a"]({locale:"pt_BR",fallbackLocale:"en",messages:Ct()});o["a"].config.productionTip=!1,new o["a"]({router:yt,i18n:wt,render:function(t){return t($)}}).$mount("#app")},"5e21":function(t,e,a){t.exports=a.p+"img/butter-y.0ffea21a.png"},6801:function(t,e,a){"use strict";a("b26b")},"9a11":function(t,e,a){},b26b:function(t,e,a){},edd4:function(t){t.exports=JSON.parse('{"navbar":{"link-education":{"name":"Education","link-academic":"Academic Education","link-extra":"Extra Academic"},"link-experience":"Experience","link-skills":"Skills"},"blog":{"head":"Notes","posted":"Posted on:","sponsor":"Sponsored by"},"home":{"description":"CS Student in UFV-CAF"},"education":{"academic":{"description":"Academic Education","grade-course":{"description":"Computer Science / UFV-CAF","time":"2019 - Present"},"high-school-grade":"Technician in analysis and development of systems - COLTEC/UFMG"},"extra":{"description":"Extra Education","btn1-see":"See Certificate","btn2-github":"Github","btn3-more":"Show More","btn4-less":"Show Less","with-certificate":"Courses with Certificate","no-certificate":{"description":"Courses without Certificate","c1-specialization-DSA":"Data Structure and Algorithms Specialization - University of California, San Diego & National Research University Higher School of Economics"}},"languages":{"description":"Languages","pt_br":"Portuguese (BR)","en_US":"English","text":"Good Understanding, Good Reading, Good Speaking, Good Writing"}},"experience":{"description":"Work Experience","exp1":{"name":"Progetec - Internship","time":"6 months - 2018","description":"I worked with C# to change desktop platform of Progetec to Web System. To conclude this project I have to architect the system with DDD, besides that I developed SQLServer code using migrations and ASP.Net Core. The infrastructure was developed with Docker and Google Cloud Platform."}},"blogHome":{"placeholderComboBox":"Categories","buttonFilter":"Filter"}}')}});
//# sourceMappingURL=app.a471cd30.js.map