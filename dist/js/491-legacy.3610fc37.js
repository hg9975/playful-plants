(self["webpackChunkhot_pot_project"]=self["webpackChunkhot_pot_project"]||[]).push([[491],{1491:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"camera-box"},[r("b-container",{staticClass:"header"},[r("b-row",[r("b-col",{attrs:{cols:"1",offset:"0"}},[r("b-button",{staticClass:"ml-0 close",attrs:{variant:"outline-secondary"},on:{click:function(e){return t.close()}}},[r("b-icon",{attrs:{icon:"arrow-left"}})],1)],1),r("b-col",{staticClass:"px-0",attrs:{offset:"8"}},[r("b-button",{staticClass:"upload",attrs:{variant:"success"},on:{click:function(e){return t.returnAndSave()}}},[t._v(" Upload ")])],1)],1)],1),r("b-container",{staticClass:"take-photo"},[r("b-row",[r("b-col",{staticClass:"yourCamera",attrs:{sm:"12"}},[t.isCameraOpen?r("div",{staticClass:"camera-canvas"},[r("video",{ref:"camera",attrs:{width:t.canvasHeight,height:t.canvasWidth,autoplay:"",id:"cameratag"}}),r("canvas",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"canvas",attrs:{width:t.canvasHeight,height:t.canvasWidth}})]):t._e()]),r("b-col",{staticClass:"captureBtn",attrs:{sm:"12"}},[r("b-button",{staticClass:"capturesave",attrs:{pill:"",variant:"outline-success"},on:{click:t.capture}},[r("b-icon-camera-fill"),t._v(" Capture ")],1),r("b-icon-arrow-repeat",{ref:"canshowswitch",staticClass:"flipBtn",attrs:{"font-scale":"1.5"},on:{click:t.switchCam}})],1),null!=this.item?r("div",{staticClass:"imgshow"},[r("img",{attrs:{src:this.item}})]):t._e()],1)],1)],1)},a=[],i=(r(1539),r(4747),r(4916),r(5306),r(144)),o={name:"CameraApi",components:{},data:function(){return{isCameraOpen:!0,canvasHeight:400,canvasWidth:400,mode:"face",twocam:!0,item:[]}},created:function(){},mounted:function(){this.startCameraStream()},methods:{startCameraStream:function(){var t,e=this;"face"==this.mode?t={audio:!1,video:{width:{ideal:400},height:{ideal:400},facingMode:"face"}}:"environment"==this.mode&&(t={audio:!1,video:{width:{ideal:400},height:{ideal:400},facingMode:{exact:"environment"}}}),navigator.mediaDevices.getUserMedia(t).then((function(t){e.$refs.camera.srcObject=t})).catch((function(t){alert("Browser doesn't support or there is some errors."+t)}))},stopCameraStream:function(){var t=this.$refs.camera.srcObject.getTracks();t.forEach((function(t){t.stop()}))},capture:function(){var t=50,e=this;setTimeout((function(){var t=e.$refs.canvas.getContext("2d");t.drawImage(e.$refs.camera,0,0,e.canvasWidth,e.canvasHeight);var r=e.$refs.canvas.toDataURL("image/jpeg").replace("image/jpeg","image/octet-stream");e.addToPhotoGallery(r),console.log(r)}),t)},addToPhotoGallery:function(t){this.item=t},returnAndSave:function(){this.stopCameraStream(),null!=this.item&&(i["default"].prototype.$photo=this.item),this.$router.push("/journal/new")},close:function(){this.stopCameraStream(),this.$router.push("/journal/new")},switchCam:function(){this.stopCameraStream(),"environment"==this.mode?this.mode="face":this.mode="environment",this.startCameraStream()}}},c=o,s=r(1001),u=(0,s.Z)(c,n,a,!1,null,"c59f49e6",null),l=u.exports},1530:function(t,e,r){"use strict";var n=r(8710).charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},8533:function(t,e,r){"use strict";var n=r(2092).forEach,a=r(9341),i=a("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},2092:function(t,e,r){var n=r(9974),a=r(1702),i=r(8361),o=r(7908),c=r(6244),s=r(5417),u=a([].push),l=function(t){var e=1==t,r=2==t,a=3==t,l=4==t,f=6==t,v=7==t,d=5==t||f;return function(h,p,m,g){for(var x,b,C=o(h),w=i(C),E=n(p,m),y=c(w),I=0,$=g||s,R=e?$(h,y):r||v?$(h,0):void 0;y>I;I++)if((d||I in w)&&(x=w[I],b=E(x,I,C),t))if(e)R[I]=b;else if(b)switch(t){case 3:return!0;case 5:return x;case 6:return I;case 2:u(R,x)}else switch(t){case 4:return!1;case 7:u(R,x)}return f?-1:a||l?l:R}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},9341:function(t,e,r){"use strict";var n=r(7293);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){return 1},1)}))}},7475:function(t,e,r){var n=r(7854),a=r(3157),i=r(4411),o=r(111),c=r(5112),s=c("species"),u=n.Array;t.exports=function(t){var e;return a(t)&&(e=t.constructor,i(e)&&(e===u||a(e.prototype))?e=void 0:o(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?u:e}},5417:function(t,e,r){var n=r(7475);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},7007:function(t,e,r){"use strict";r(4916);var n=r(1702),a=r(1320),i=r(2261),o=r(7293),c=r(5112),s=r(8880),u=c("species"),l=RegExp.prototype;t.exports=function(t,e,r,f){var v=c(t),d=!o((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),h=d&&!o((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return e=!0,null},r[v](""),!e}));if(!d||!h||r){var p=n(/./[v]),m=e(v,""[t],(function(t,e,r,a,o){var c=n(t),s=e.exec;return s===i||s===l.exec?d&&!o?{done:!0,value:p(e,r,a)}:{done:!0,value:c(r,e,a)}:{done:!1}}));a(String.prototype,t,m[0]),a(l,v,m[1])}f&&s(l[v],"sham",!0)}},647:function(t,e,r){var n=r(1702),a=r(7908),i=Math.floor,o=n("".charAt),c=n("".replace),s=n("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,n,f,v){var d=r+t.length,h=n.length,p=l;return void 0!==f&&(f=a(f),p=u),c(v,p,(function(a,c){var u;switch(o(c,0)){case"$":return"$";case"&":return t;case"`":return s(e,0,r);case"'":return s(e,d);case"<":u=f[s(c,1,-1)];break;default:var l=+c;if(0===l)return a;if(l>h){var v=i(l/10);return 0===v?a:v<=h?void 0===n[v-1]?o(c,1):n[v-1]+o(c,1):a}u=n[l-1]}return void 0===u?"":u}))}},7651:function(t,e,r){var n=r(7854),a=r(6916),i=r(9670),o=r(614),c=r(4326),s=r(2261),u=n.TypeError;t.exports=function(t,e){var r=t.exec;if(o(r)){var n=a(r,t,e);return null!==n&&i(n),n}if("RegExp"===c(t))return a(s,t,e);throw u("RegExp#exec called on incompatible receiver")}},2261:function(t,e,r){"use strict";var n=r(6916),a=r(1702),i=r(1340),o=r(7066),c=r(2999),s=r(2309),u=r(30),l=r(9909).get,f=r(9441),v=r(7168),d=s("native-string-replace",String.prototype.replace),h=RegExp.prototype.exec,p=h,m=a("".charAt),g=a("".indexOf),x=a("".replace),b=a("".slice),C=function(){var t=/a/,e=/b*/g;return n(h,t,"a"),n(h,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),w=c.BROKEN_CARET,E=void 0!==/()??/.exec("")[1],y=C||E||w||f||v;y&&(p=function(t){var e,r,a,c,s,f,v,y=this,I=l(y),$=i(t),R=I.raw;if(R)return R.lastIndex=y.lastIndex,e=n(p,R,$),y.lastIndex=R.lastIndex,e;var k=I.groups,S=w&&y.sticky,_=n(o,y),A=y.source,j=0,O=$;if(S&&(_=x(_,"y",""),-1===g(_,"g")&&(_+="g"),O=b($,y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==m($,y.lastIndex-1))&&(A="(?: "+A+")",O=" "+O,j++),r=new RegExp("^(?:"+A+")",_)),E&&(r=new RegExp("^"+A+"$(?!\\s)",_)),C&&(a=y.lastIndex),c=n(h,S?r:y,O),S?c?(c.input=b(c.input,j),c[0]=b(c[0],j),c.index=y.lastIndex,y.lastIndex+=c[0].length):y.lastIndex=0:C&&c&&(y.lastIndex=y.global?c.index+c[0].length:a),E&&c&&c.length>1&&n(d,c[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(c[s]=void 0)})),c&&k)for(c.groups=f=u(null),s=0;s<k.length;s++)v=k[s],f[v[0]]=c[v[1]];return c}),t.exports=p},7066:function(t,e,r){"use strict";var n=r(9670);t.exports=function(){var t=n(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},2999:function(t,e,r){var n=r(7293),a=r(7854),i=a.RegExp,o=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),c=o||n((function(){return!i("a","y").sticky})),s=o||n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:s,MISSED_STICKY:c,UNSUPPORTED_Y:o}},9441:function(t,e,r){var n=r(7293),a=r(7854),i=a.RegExp;t.exports=n((function(){var t=i(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},7168:function(t,e,r){var n=r(7293),a=r(7854),i=a.RegExp;t.exports=n((function(){var t=i("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},4916:function(t,e,r){"use strict";var n=r(2109),a=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},5306:function(t,e,r){"use strict";var n=r(2104),a=r(6916),i=r(1702),o=r(7007),c=r(7293),s=r(9670),u=r(614),l=r(9303),f=r(7466),v=r(1340),d=r(4488),h=r(1530),p=r(8173),m=r(647),g=r(7651),x=r(5112),b=x("replace"),C=Math.max,w=Math.min,E=i([].concat),y=i([].push),I=i("".indexOf),$=i("".slice),R=function(t){return void 0===t?t:String(t)},k=function(){return"$0"==="a".replace(/./,"$0")}(),S=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),_=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));o("replace",(function(t,e,r){var i=S?"$":"$0";return[function(t,r){var n=d(this),i=void 0==t?void 0:p(t,b);return i?a(i,t,n,r):a(e,v(n),t,r)},function(t,a){var o=s(this),c=v(t);if("string"==typeof a&&-1===I(a,i)&&-1===I(a,"$<")){var d=r(e,o,c,a);if(d.done)return d.value}var p=u(a);p||(a=v(a));var x=o.global;if(x){var b=o.unicode;o.lastIndex=0}var k=[];while(1){var S=g(o,c);if(null===S)break;if(y(k,S),!x)break;var _=v(S[0]);""===_&&(o.lastIndex=h(c,f(o.lastIndex),b))}for(var A="",j=0,O=0;O<k.length;O++){S=k[O];for(var T=v(S[0]),M=C(w(l(S.index),c.length),0),B=[],U=1;U<S.length;U++)y(B,R(S[U]));var D=S.groups;if(p){var H=E([T],B,M,c);void 0!==D&&y(H,D);var N=v(n(a,void 0,H))}else N=m(T,c,M,B,D,a);M>=j&&(A+=$(c,j,M)+N,j=M+T.length)}return A+$(c,j)}]}),!_||!k||S)},4747:function(t,e,r){var n=r(7854),a=r(8324),i=r(8509),o=r(8533),c=r(8880),s=function(t){if(t&&t.forEach!==o)try{c(t,"forEach",o)}catch(e){t.forEach=o}};for(var u in a)a[u]&&s(n[u]&&n[u].prototype);s(i)}}]);
//# sourceMappingURL=491-legacy.3610fc37.js.map