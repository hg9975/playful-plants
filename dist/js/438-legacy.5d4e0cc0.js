(self["webpackChunkhot_pot_project"]=self["webpackChunkhot_pot_project"]||[]).push([[438],{438:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return l}});var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"pDetail"},[n("b-container",{staticClass:"header"},[n("b-row",[n("b-col",{staticClass:"returnlink",attrs:{cols:"1",offset:"0"}},[n("router-link",{staticClass:"returnlink",attrs:{to:"/"}},[n("b-button",{attrs:{variant:"outline-secondary"}},[n("b-icon",{attrs:{icon:"arrow-left"}})],1)],1)],1)],1),n("b-row",{staticClass:"mb-1 plantname"},[n("h3",[t._v(t._s(this.curPlant))])])],1),n("b-container",{staticClass:"main-view",attrs:{fluid:""}},[n("b-container",{staticClass:"banner"},[t.images.image2?n("b-row",[n("b-carousel",{ref:"myCarousel",staticClass:"plantphotos",attrs:{id:"family photos",interval:3e3,controls:"",indicators:"","label-prev":"","label-next":"","no-hover-pause":!0},model:{value:t.slide,callback:function(r){t.slide=r},expression:"slide"}},t._l(t.images,(function(r,e){return n("b-carousel-slide",{key:e,staticClass:"plantImg",attrs:{"img-src":t._f("filterImg")(r)}})})),1)],1):n("b-row",[n("img",{staticClass:"plantImg",attrs:{src:t.getImgUrl(t.cnt)}})])],1),n("b-row",{staticClass:"cards"},[n("horizontal-scroll",{staticClass:"scroller"},t._l(t.tags,(function(r,e){return n("b-button",{key:e,staticClass:"button",attrs:{variant:"outline-dark",id:"plantTag",disabled:""}},[t._v(t._s(r))])})),1)],1),n("b-container",{staticClass:"columnsgrid"},[n("b-row",{staticClass:"description"},[n("h6",[t._v("Description:")]),n("p",{staticClass:"justifiedtext"},[t._v(" "+t._s(this.discription)+" ")])]),n("b-row",{staticClass:"instruction"},[n("h6",[t._v("Gardening Instruction:")]),t._l(t.instructions,(function(r,e){return n("p",{key:r.id,staticClass:"justifiedtext"},[t._v(" "+t._s(e)+": "+t._s(r)+" ")])}))],2)],1)],1)],1)},i=[],s=(n(9653),n(2526),n(1817),n(7941),n(3002)),o=n.n(s),a={name:"plantDetail",components:{HorizontalScroll:o()},props:{plant_id:{type:String}},data:function(){return{slide:0,sliding:null,curPlant:this.$route.params.plant_id,plants_data:this.$plant_fixtures,images:{type:Object},tags:{type:Object},instructions:{type:Object},discription:{type:String},cnt:1,num:{type:Number,default:1},lefttt:!1,righttt:{type:Boolean,default:!1}}},filters:{filterImg:function(t){return n(6998)("./"+t+".jpg")}},created:function(){this.images=this.plants_data[this.curPlant].images,this.tags=this.plants_data[this.curPlant].tags,this.discription=this.plants_data[this.curPlant].description,this.instructions=this.plants_data[this.curPlant].instruction,this.num=Object.keys(this.images).length,this.righttt=1!=this.num},methods:{getImgUrl:function(t){return n(6998)("./"+this.images["image"+t]+".jpg")},toLeft:function(){this.cnt--,this.cnt<=1?this.lefttt=!1:this.lefttt=!0,this.righttt=!0},toRight:function(){this.cnt++,this.cnt>=this.num?this.righttt=!1:this.righttt=!0,this.lefttt=!0}}},c=a,u=n(1001),f=(0,u.Z)(c,e,i,!1,null,"3c870446",null),l=f.exports},2092:function(t,r,n){var e=n(9974),i=n(1702),s=n(8361),o=n(7908),a=n(6244),c=n(5417),u=i([].push),f=function(t){var r=1==t,n=2==t,i=3==t,f=4==t,l=6==t,p=7==t,h=5==t||l;return function(d,v,g,b){for(var m,y,_=o(d),S=s(_),I=e(v,g),w=a(S),C=0,E=b||c,N=r?E(d,w):n||p?E(d,0):void 0;w>C;C++)if((h||C in S)&&(m=S[C],y=I(m,C,_),t))if(r)N[C]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return C;case 2:u(N,m)}else switch(t){case 4:return!1;case 7:u(N,m)}return l?-1:i||f?f:N}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},7475:function(t,r,n){var e=n(7854),i=n(3157),s=n(4411),o=n(111),a=n(5112),c=a("species"),u=e.Array;t.exports=function(t){var r;return i(t)&&(r=t.constructor,s(r)&&(r===u||i(r.prototype))?r=void 0:o(r)&&(r=r[c],null===r&&(r=void 0))),void 0===r?u:r}},5417:function(t,r,n){var e=n(7475);t.exports=function(t,r){return new(e(t))(0===r?0:r)}},7235:function(t,r,n){var e=n(857),i=n(2597),s=n(6061),o=n(3070).f;t.exports=function(t){var r=e.Symbol||(e.Symbol={});i(r,t)||o(r,t,{value:s.f(t)})}},735:function(t,r,n){var e=n(133);t.exports=e&&!!Symbol["for"]&&!!Symbol.keyFor},857:function(t,r,n){var e=n(7854);t.exports=e},3111:function(t,r,n){var e=n(1702),i=n(4488),s=n(1340),o=n(1361),a=e("".replace),c="["+o+"]",u=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),l=function(t){return function(r){var n=s(i(r));return 1&t&&(n=a(n,u,"")),2&t&&(n=a(n,f,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},6532:function(t,r,n){var e=n(6916),i=n(5005),s=n(5112),o=n(1320);t.exports=function(){var t=i("Symbol"),r=t&&t.prototype,n=r&&r.valueOf,a=s("toPrimitive");r&&!r[a]&&o(r,a,(function(t){return e(n,this)}))}},863:function(t,r,n){var e=n(1702);t.exports=e(1..valueOf)},6061:function(t,r,n){var e=n(5112);r.f=e},1361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9653:function(t,r,n){"use strict";var e=n(9781),i=n(7854),s=n(1702),o=n(4705),a=n(1320),c=n(2597),u=n(9587),f=n(7976),l=n(2190),p=n(7593),h=n(7293),d=n(8006).f,v=n(1236).f,g=n(3070).f,b=n(863),m=n(3111).trim,y="Number",_=i[y],S=_.prototype,I=i.TypeError,w=s("".slice),C=s("".charCodeAt),E=function(t){var r=p(t,"number");return"bigint"==typeof r?r:N(r)},N=function(t){var r,n,e,i,s,o,a,c,u=p(t,"number");if(l(u))throw I("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=m(u),r=C(u,0),43===r||45===r){if(n=C(u,2),88===n||120===n)return NaN}else if(48===r){switch(C(u,1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+u}for(s=w(u,2),o=s.length,a=0;a<o;a++)if(c=C(s,a),c<48||c>i)return NaN;return parseInt(s,e)}return+u};if(o(y,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var x,k=function(t){var r=arguments.length<1?0:_(E(t)),n=this;return f(S,n)&&h((function(){b(n)}))?u(Object(r),n,k):r},O=e?d(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;O.length>j;j++)c(_,x=O[j])&&!c(k,x)&&g(k,x,v(_,x));k.prototype=S,S.constructor=k,a(i,y,k)}},9660:function(t,r,n){var e=n(2109),i=n(133),s=n(7293),o=n(5181),a=n(7908),c=!i||s((function(){o.f(1)}));e({target:"Object",stat:!0,forced:c},{getOwnPropertySymbols:function(t){var r=o.f;return r?r(a(t)):[]}})},4032:function(t,r,n){"use strict";var e=n(2109),i=n(7854),s=n(6916),o=n(1702),a=n(1913),c=n(9781),u=n(133),f=n(7293),l=n(2597),p=n(7976),h=n(9670),d=n(5656),v=n(4948),g=n(1340),b=n(9114),m=n(30),y=n(1956),_=n(8006),S=n(1156),I=n(5181),w=n(1236),C=n(3070),E=n(6048),N=n(5296),x=n(1320),k=n(2309),O=n(6200),j=n(3501),P=n(9711),T=n(5112),A=n(6061),F=n(7235),R=n(6532),$=n(8003),D=n(9909),G=n(2092).forEach,L=O("hidden"),M="Symbol",U="prototype",V=D.set,z=D.getterFor(M),X=Object[U],Y=i.Symbol,B=Y&&Y[U],H=i.TypeError,Q=i.QObject,Z=w.f,q=C.f,J=S.f,K=N.f,W=o([].push),tt=k("symbols"),rt=k("op-symbols"),nt=k("wks"),et=!Q||!Q[U]||!Q[U].findChild,it=c&&f((function(){return 7!=m(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,r,n){var e=Z(X,r);e&&delete X[r],q(t,r,n),e&&t!==X&&q(X,r,e)}:q,st=function(t,r){var n=tt[t]=m(B);return V(n,{type:M,tag:t,description:r}),c||(n.description=r),n},ot=function(t,r,n){t===X&&ot(rt,r,n),h(t);var e=v(r);return h(n),l(tt,e)?(n.enumerable?(l(t,L)&&t[L][e]&&(t[L][e]=!1),n=m(n,{enumerable:b(0,!1)})):(l(t,L)||q(t,L,b(1,{})),t[L][e]=!0),it(t,e,n)):q(t,e,n)},at=function(t,r){h(t);var n=d(r),e=y(n).concat(pt(n));return G(e,(function(r){c&&!s(ut,n,r)||ot(t,r,n[r])})),t},ct=function(t,r){return void 0===r?m(t):at(m(t),r)},ut=function(t){var r=v(t),n=s(K,this,r);return!(this===X&&l(tt,r)&&!l(rt,r))&&(!(n||!l(this,r)||!l(tt,r)||l(this,L)&&this[L][r])||n)},ft=function(t,r){var n=d(t),e=v(r);if(n!==X||!l(tt,e)||l(rt,e)){var i=Z(n,e);return!i||!l(tt,e)||l(n,L)&&n[L][e]||(i.enumerable=!0),i}},lt=function(t){var r=J(d(t)),n=[];return G(r,(function(t){l(tt,t)||l(j,t)||W(n,t)})),n},pt=function(t){var r=t===X,n=J(r?rt:d(t)),e=[];return G(n,(function(t){!l(tt,t)||r&&!l(X,t)||W(e,tt[t])})),e};u||(Y=function(){if(p(B,this))throw H("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?g(arguments[0]):void 0,r=P(t),n=function(t){this===X&&s(n,rt,t),l(this,L)&&l(this[L],r)&&(this[L][r]=!1),it(this,r,b(1,t))};return c&&et&&it(X,r,{configurable:!0,set:n}),st(r,t)},B=Y[U],x(B,"toString",(function(){return z(this).tag})),x(Y,"withoutSetter",(function(t){return st(P(t),t)})),N.f=ut,C.f=ot,E.f=at,w.f=ft,_.f=S.f=lt,I.f=pt,A.f=function(t){return st(T(t),t)},c&&(q(B,"description",{configurable:!0,get:function(){return z(this).description}}),a||x(X,"propertyIsEnumerable",ut,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:Y}),G(y(nt),(function(t){F(t)})),e({target:M,stat:!0,forced:!u},{useSetter:function(){et=!0},useSimple:function(){et=!1}}),e({target:"Object",stat:!0,forced:!u,sham:!c},{create:ct,defineProperty:ot,defineProperties:at,getOwnPropertyDescriptor:ft}),e({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:lt}),R(),$(Y,M),j[L]=!0},1817:function(t,r,n){"use strict";var e=n(2109),i=n(9781),s=n(7854),o=n(1702),a=n(2597),c=n(614),u=n(7976),f=n(1340),l=n(3070).f,p=n(9920),h=s.Symbol,d=h&&h.prototype;if(i&&c(h)&&(!("description"in d)||void 0!==h().description)){var v={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),r=u(d,this)?new h(t):void 0===t?h():h(t);return""===t&&(v[r]=!0),r};p(g,h),g.prototype=d,d.constructor=g;var b="Symbol(test)"==String(h("test")),m=o(d.toString),y=o(d.valueOf),_=/^Symbol\((.*)\)[^)]+$/,S=o("".replace),I=o("".slice);l(d,"description",{configurable:!0,get:function(){var t=y(this),r=m(t);if(a(v,t))return"";var n=b?I(r,7,-1):S(r,_,"$1");return""===n?void 0:n}}),e({global:!0,forced:!0},{Symbol:g})}},763:function(t,r,n){var e=n(2109),i=n(5005),s=n(2597),o=n(1340),a=n(2309),c=n(735),u=a("string-to-symbol-registry"),f=a("symbol-to-string-registry");e({target:"Symbol",stat:!0,forced:!c},{for:function(t){var r=o(t);if(s(u,r))return u[r];var n=i("Symbol")(r);return u[r]=n,f[n]=r,n}})},2526:function(t,r,n){n(4032),n(763),n(6620),n(8862),n(9660)},6620:function(t,r,n){var e=n(2109),i=n(2597),s=n(2190),o=n(6330),a=n(2309),c=n(735),u=a("symbol-to-string-registry");e({target:"Symbol",stat:!0,forced:!c},{keyFor:function(t){if(!s(t))throw TypeError(o(t)+" is not a symbol");if(i(u,t))return u[t]}})}}]);
//# sourceMappingURL=438-legacy.5d4e0cc0.js.map