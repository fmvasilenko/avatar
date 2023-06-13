(()=>{"use strict";var s={};s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(s){if("object"==typeof window)return window}}(),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})();const e=function(s,e){var t=e.accessKey,a=e.className,r=e.contenteditable,n=e.dir,i=e.draggable,o=e.dropzone,p=e.hidden,l=e.id,g=e.tabindex,h=e.title,_=e.translate;return t&&(s.accessKey=t),a&&(s.className=a),r&&s.setAttribute("contenteditable","true"),n&&(s.dir=n),i&&(s.draggable=i),o&&s.setAttribute("dropzone",o),p&&(s.hidden=p),l&&(s.id=l),g&&(s.tabIndex=g),h&&(s.title=h),void 0!==_&&(s.translate=_),s},t=function(s,t,a){var r=document.createElement(s);return t&&e(r,t),a&&function(s,e){e.forEach((function(e){s.append(e)}))}(r,a),r},a=function(s,e){var t=e.autofocus,a=e.disabled,r=e.form,n=e.formaction,i=e.formenctype,o=e.formmethod,p=e.formnovalidate,l=e.formtarget,g=e.name,h=e.value;return t&&(s.autofocus=!0),a&&s.setAttribute("disabled","true"),r&&s.setAttribute("form",r),n&&s.setAttribute("formAction",n),i&&s.setAttribute("formenctype",i),o&&s.setAttribute("formmethod",o),p&&s.setAttribute("formnovalidate","true"),l&&s.setAttribute("formtarget",l),g&&s.setAttribute("name",g),h&&s.setAttribute("value",h),s},r=function(s,e){var r=t("button",s,e);if(s){var n=s.type,i=s.onclick;a(r,s),i&&(r.onclick=i),r.setAttribute("type",n||"button")}return r},n=function(s,e){return t("div",s,e)};var i,o=(i=function(s,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,e){s.__proto__=e}||function(s,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(s[t]=e[t])},i(s,e)},function(s,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=s}i(s,e),s.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)});const p=function(s){function e(e){var t=s.call(this,"Layer '".concat(e,"' was not found"))||this;return t.name="LayerNotFound",t}return o(e,s),e}(Error);var l=function(){var s=function(e,t){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,e){s.__proto__=e}||function(s,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(s[t]=e[t])},s(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new g("Class extends value "+String(t)+" is not a constructor or null");function a(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}}(),g=function(s){function e(e){var t=s.call(this,e)||this;return t.name="TypeError",t}return l(e,s),e}(Error);const h=g;var _=function(){return _=Object.assign||function(s){for(var e,t=1,a=arguments.length;t<a;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(s[r]=e[r]);return s},_.apply(this,arguments)},u=function(){function s(s){this.layers={},this.order=[],this.onUpdate=s,this.set=this.set.bind(this),this.remove=this.remove.bind(this),this.get=this.get.bind(this),this.getUrlsList=this.getUrlsList.bind(this),this.update=this.update.bind(this),this.setLayers=this.setLayers.bind(this),this.setLayer=this.setLayer.bind(this),this.removeLayers=this.removeLayers.bind(this),this.removeLayer=this.removeLayer.bind(this),this.updateUrl=this.updateUrl.bind(this),this.updatePositionX=this.updatePositionX.bind(this),this.updatePositionY=this.updatePositionY.bind(this),this.updateDisplayed=this.updateDisplayed.bind(this)}return s.prototype.set=function(s){Array.isArray(s)?this.setLayers(s):this.setLayer(s)},s.prototype.remove=function(s){Array.isArray(s)?this.removeLayers(s):this.removeLayer(s)},s.prototype.get=function(s){if(s){if(!this.layers[s])throw new p(s);return this.layers[s]}return this.layers},s.prototype.getUrlsList=function(){var s=this;return Object.entries(this.layers).filter((function(s){return s[1].displayed})).map((function(e){var t=e[0];return s.layers[t].url}))},s.prototype.update=function(s,e,t){var a,r;if(!this.layers[s])throw new p(s);({url:this.updateUrl,positionX:this.updatePositionX,positionY:this.updatePositionY,displayed:this.updateDisplayed})[e](s,t),"url"===e&&(null===(r=(a=this.layers[s]).onUrlUpdated)||void 0===r||r.call(a,String(t))),this.onUpdate&&this.onUpdate(this.layers)},s.prototype.setLayers=function(s){var e=this;s.forEach((function(s){return e.setLayer(s)}))},s.prototype.setLayer=function(s){var e=s.name,t=s.positionX,a=s.positionY,r=s.displayed;this.layers[e]?this.layers[e]=_(_({},s),{positionX:t||this.layers[e].positionX,positionY:a||this.layers[e].positionY,order:this.layers[e].order,displayed:void 0===r||r}):(this.order.push(e),this.layers[e]=_(_({},s),{positionX:t||0,positionY:a||0,order:this.order.length-1,displayed:void 0===r||r}))},s.prototype.removeLayers=function(s){var e=this;s.forEach((function(s){return e.removeLayer(s)}))},s.prototype.removeLayer=function(s){this.layers[s]&&(this.order=this.order.splice(this.layers[s].order,1),delete this.layers[s])},s.prototype.updateUrl=function(s,e){if("string"!=typeof e)throw new h("Url for '".concat(s,"' is supposed to have string type. Now the type is '").concat(typeof e,"'"));this.layers[s].url=e},s.prototype.updatePositionX=function(s,e){if("number"!=typeof e)throw new h("PositionX for '".concat(s,"' is supposed to have number type. Now the type is '").concat(typeof e,"'"));this.layers[s].positionX=e},s.prototype.updatePositionY=function(s,e){if("number"!=typeof e)throw new h("PositionY for '".concat(s,"' is supposed to have number type. Now the type is '").concat(typeof e,"'"));this.layers[s].positionY=e},s.prototype.updateDisplayed=function(s,e){if("boolean"!=typeof e)throw new h("Displayed for '".concat(s,"' is supposed to have boolean type. Now the type is '").concat(typeof e,"'"));this.layers[s].displayed=e},s}();const c=u;var d=function(){function s(s,e){this.layers=s,this.render=e,this.render(this.layers.getUrlsList())}return s.prototype.save=function(){return e=this,a=void 0,n=function(){var e,a,r,n;return function(s,e){var t,a,r,n,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return n={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function o(o){return function(p){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;n&&(n=0,o[0]&&(i=0)),i;)try{if(t=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(s,i)}catch(s){o=[6,s],a=0}finally{t=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,p])}}}(this,(function(i){switch(i.label){case 0:return[4,Promise.all(this.layers.getUrlsList().map((function(e){return s.getElement(e)})))];case 1:return e=i.sent(),a=e.join(""),r=new Blob(['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 450 378">'+a+"</svg>"],{type:"image/svg+xml"}),n=function(s,e){var a=t("a",s,e);if(s){var r=s.download,n=s.href,i=s.hreflang,o=s.ping,p=s.referrerpolicy,l=s.rel,g=s.target,h=s.type;r&&a.setAttribute("download","string"==typeof r?r:"true"),n&&a.setAttribute("href",n),i&&a.setAttribute("hreflang",i),o&&a.setAttribute("ping",o),p&&a.setAttribute("referrerpolicy",p),l&&a.setAttribute("rel",l),g&&a.setAttribute("target",g),h&&a.setAttribute("type",h)}return a}({href:URL.createObjectURL(r),download:"avatar.svg"},["download"]),document.body.append(n),n.click(),n.remove(),[2]}}))},new((r=void 0)||(r=Promise))((function(s,t){function i(s){try{p(n.next(s))}catch(s){t(s)}}function o(s){try{p(n.throw(s))}catch(s){t(s)}}function p(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(s){s(t)}))).then(i,o)}p((n=n.apply(e,a||[])).next())}));var e,a,r,n},s.getElement=function(s){return fetch(s).then((function(s){return s.text()})).then((function(s){var e;return null===(e=(new DOMParser).parseFromString(s,"image/svg+xml").querySelector("svg"))||void 0===e?void 0:e.innerHTML}))},s}();const v=d,f=s.p+"assets/fon_dark.svg",y=s.p+"assets/fon_light.svg",b=s.p+"assets/13_chair.svg",m=s.p+"assets/shirt-blue.svg",C=s.p+"assets/shirt-green.svg",w=s.p+"assets/shirt-orange.svg",B=s.p+"assets/shirt-pink.svg",A=s.p+"assets/shirt-red.svg",F=s.p+"assets/shirt-white.svg",D=s.p+"assets/shirt-yellow.svg",k=s.p+"assets/body_white.svg",L=s.p+"assets/body_tan.svg",E=s.p+"assets/body_tan_1.svg",x=s.p+"assets/body_brown.svg",S=s.p+"assets/body_black.svg",O=s.p+"assets/hair_balding_black.svg",P=s.p+"assets/hair_balding_blond.svg",U=s.p+"assets/hair_balding_brown.svg",N=s.p+"assets/hair_balding_grey.svg",T=s.p+"assets/hair_balding_orange.svg",j=s.p+"assets/hair_balding_purple.svg",I=s.p+"assets/hair_balding_red.svg",X=s.p+"assets/hair_balding_yellow.svg",Y=s.p+"assets/hair_straightShort_black.svg",M=s.p+"assets/hair_straightShort_blond.svg",z=s.p+"assets/hair_straightShort_brown.svg",q=s.p+"assets/hair_straightShort_grey.svg",$=s.p+"assets/hair_straightShort_orange.svg",H=s.p+"assets/hair_straightShort_purple.svg",K=s.p+"assets/hair_straightShort_red.svg",R=s.p+"assets/hair_straightShort_yellow.svg",G=s.p+"assets/hair_straightShort_2_black.svg",W=s.p+"assets/hair_straightShort_2_blond.svg",J=s.p+"assets/hair_straightShort_2_brown.svg",Q=s.p+"assets/hair_straightShort_2_grey.svg",V=s.p+"assets/hair_straightShort_2_orange.svg",Z=s.p+"assets/hair_straightShort_2_purple.svg",ss=s.p+"assets/hair_straightShort_2_red.svg",es=s.p+"assets/hair_straightShort_2_yellow.svg",ts=s.p+"assets/hair_newShort_black.svg",as=s.p+"assets/hair_newShort_blond.svg",rs=s.p+"assets/hair_newShort_brown.svg",ns=s.p+"assets/hair_newShort_grey.svg",is=s.p+"assets/hair_newShort_orange.svg",os=s.p+"assets/hair_newShort_purple.svg",ps=s.p+"assets/hair_newShort_red.svg",ls=s.p+"assets/hair_newShort_yellow.svg",gs=s.p+"assets/hair_curlyShort_black.svg",hs=s.p+"assets/hair_curlyShort_blond.svg",_s=s.p+"assets/hair_curlyShort_brown.svg",us=s.p+"assets/hair_curlyShort_grey.svg",cs=s.p+"assets/hair_curlyShort_orange.svg",ds=s.p+"assets/hair_curlyShort_purple.svg",vs=s.p+"assets/hair_curlyShort_red.svg",fs=s.p+"assets/hair_curlyShort_yellow.svg",ys=s.p+"assets/hair_straightLong_black.svg",bs=s.p+"assets/hair_straightLong_blond.svg",ms=s.p+"assets/hair_straightLong_brown.svg",Cs=s.p+"assets/hair_straightLong_grey.svg",ws=s.p+"assets/hair_straightLong_orange.svg",Bs=s.p+"assets/hair_straightLong_purple.svg",As=s.p+"assets/hair_straightLong_red.svg",Fs=s.p+"assets/hair_straightLong_yellow.svg",Ds=s.p+"assets/hair_straightLonger_2_black.svg",ks=s.p+"assets/hair_straightLonger_2_blond.svg",Ls=s.p+"assets/hair_straightLonger_2_brown.svg",Es=s.p+"assets/hair_straightLonger_2_grey.svg",xs=s.p+"assets/hair_straightLonger_2_orange.svg",Ss=s.p+"assets/hair_straightLonger_2_purple.svg",Os=s.p+"assets/hair_straightLonger_2_red.svg",Ps=s.p+"assets/hair_straightLonger_2_yellow.svg",Us=s.p+"assets/hair_straightLonger_3_black.svg",Ns=s.p+"assets/hair_straightLonger_3_blond.svg",Ts=s.p+"assets/hair_straightLonger_3_brown.svg",js=s.p+"assets/hair_straightLonger_3_grey.svg",Is=s.p+"assets/hair_straightLonger_3_orange.svg",Xs=s.p+"assets/hair_straightLonger_3_purple.svg",Ys=s.p+"assets/hair_straightLonger_3_red.svg",Ms=s.p+"assets/hair_straightLonger_3_yellow.svg",zs=s.p+"assets/hair_curlyLong_black.svg",qs=s.p+"assets/hair_curlyLong_blond.svg",$s=s.p+"assets/hair_curlyLong_brown.svg",Hs=s.p+"assets/hair_curlyLong_grey.svg",Ks=s.p+"assets/hair_curlyLong_orange.svg",Rs=s.p+"assets/hair_curlyLong_purple.svg",Gs=s.p+"assets/hair_curlyLong_red.svg",Ws=s.p+"assets/hair_curlyLong_yellow.svg",Js=s.p+"assets/hair_01_black.svg",Qs=s.p+"assets/hair_01_blond.svg",Vs=s.p+"assets/hair_01_brown.svg",Zs=s.p+"assets/hair_01_grey.svg",se=s.p+"assets/hair_01_orange.svg",ee=s.p+"assets/hair_01_purple.svg",te=s.p+"assets/hair_01_red.svg",ae=s.p+"assets/hair_01_yellow.svg",re=s.p+"assets/hair_02_black.svg",ne=s.p+"assets/hair_02_blond.svg",ie=s.p+"assets/hair_02_brown.svg",oe=s.p+"assets/hair_02_grey.svg",pe=s.p+"assets/hair_02_orange.svg",le=s.p+"assets/hair_02_purple.svg",ge=s.p+"assets/hair_02_red.svg",he=s.p+"assets/hair_02_yellow.svg",_e=s.p+"assets/hair_03_black.svg",ue=s.p+"assets/hair_03_blond.svg",ce=s.p+"assets/hair_03_brown.svg",de=s.p+"assets/hair_03_grey.svg",ve=s.p+"assets/hair_03_orange.svg",fe=s.p+"assets/hair_03_purple.svg",ye=s.p+"assets/hair_03_red.svg",be=s.p+"assets/hair_03_yellow.svg",me=s.p+"assets/eyes_big_blue.svg",Ce=s.p+"assets/eyes_big_brown.svg",we=s.p+"assets/eyes_big_green.svg",Be=s.p+"assets/eyes_big_2_blue.svg",Ae=s.p+"assets/eyes_big_2_brown.svg",Fe=s.p+"assets/eyes_big_2_green.svg",De=s.p+"assets/eyes_big_3_blue.svg",ke=s.p+"assets/eyes_big_3_brown.svg",Le=s.p+"assets/eyes_big_3_green.svg",Ee=s.p+"assets/eyes_blue.svg",xe=s.p+"assets/eyes_brown.svg",Se=s.p+"assets/eyes_green.svg",Oe=s.p+"assets/eyes_skinny_blue.svg",Pe=s.p+"assets/eyes_skinny_brown.svg",Ue=s.p+"assets/eyes_skinny_green.svg",Ne=s.p+"assets/eyebrows_1.svg",Te=s.p+"assets/eyebrows_2.svg",je=s.p+"assets/eyebrows_3.svg",Ie=s.p+"assets/eyebrows_4.svg",Xe=s.p+"assets/eyebrows_5.svg",Ye=s.p+"assets/lashes_01.svg",Me=s.p+"assets/glasses_1.svg",ze=s.p+"assets/glasses_2.svg",qe=s.p+"assets/glasses_3.svg",$e=s.p+"assets/nose_1.svg",He=s.p+"assets/nose_2.svg",Ke=s.p+"assets/nose_3.svg",Re=s.p+"assets/nose_4.svg",Ge=s.p+"assets/nose_5.svg",We=s.p+"assets/nose_6.svg",Je=s.p+"assets/nose_7.svg",Qe=s.p+"assets/mouth_1.svg",Ve=s.p+"assets/mouth_2-01.svg",Ze=s.p+"assets/lips_1_normal.svg",st=s.p+"assets/lips_1_pink.svg",et=s.p+"assets/lips_1_red.svg",tt=s.p+"assets/lips_2_normal.svg",at=s.p+"assets/lips_2_pink.svg",rt=s.p+"assets/lips_2_red.svg",nt=s.p+"assets/lips_3_normal.svg",it=s.p+"assets/lips_3_pink.svg",ot=s.p+"assets/lips_3_red.svg",pt=s.p+"assets/lips_4_normal.svg",lt=s.p+"assets/lips_4_pink.svg",gt=s.p+"assets/lips_4_red.svg",ht=s.p+"assets/beard_black_01.svg",_t=s.p+"assets/beard_blond_01.svg",ut=s.p+"assets/beard_brown_01.svg",ct=s.p+"assets/beard_grey_01.svg",dt=s.p+"assets/beard_orange_01.svg",vt=s.p+"assets/beard_purple_01.svg",ft=s.p+"assets/beard_red_01.svg",yt=s.p+"assets/beard_yellow_01.svg",bt=s.p+"assets/beard_2_black.svg",mt=s.p+"assets/beard_2_blond.svg",Ct=s.p+"assets/beard_2_brown.svg",wt=s.p+"assets/beard_2_grey.svg",Bt=s.p+"assets/beard_2_orange.svg",At=s.p+"assets/beard_2_purple.svg",Ft=s.p+"assets/beard_2_red.svg",Dt=s.p+"assets/beard_2_yellow.svg",kt=s.p+"assets/beard_goatee_black.svg",Lt=s.p+"assets/beard_goatee_blond.svg",Et=s.p+"assets/beard_goatee_brown.svg",xt=s.p+"assets/beard_goatee_grey.svg",St=s.p+"assets/beard_goatee_orange.svg",Ot=s.p+"assets/beard_goatee_purple.svg",Pt=s.p+"assets/beard_goatee_red.svg",Ut=s.p+"assets/beard_goatee_yellow.svg",Nt=s.p+"assets/goatee_2_black.svg",Tt=s.p+"assets/goatee_2_blond.svg",jt=s.p+"assets/goatee_2_brown.svg",It=s.p+"assets/goatee_2_grey.svg",Xt=s.p+"assets/goatee_2_orange.svg",Yt=s.p+"assets/goatee_2_purple.svg",Mt=s.p+"assets/goatee_2_red.svg",zt=s.p+"assets/goatee_2_yellow.svg",qt=s.p+"assets/mustache.svg",$t=s.p+"assets/mustache_2_black.svg",Ht=s.p+"assets/mustache_2_blond.svg",Kt=s.p+"assets/mustache_2_brown.svg",Rt=s.p+"assets/mustache_2_grey.svg",Gt=s.p+"assets/mustache_2_orange.svg",Wt=s.p+"assets/mustache_2_purple.svg",Jt=s.p+"assets/mustache_2_red.svg",Qt=s.p+"assets/mustache_2_yellow.svg",Vt=s.p+"assets/mustache_3_black.svg",Zt=s.p+"assets/mustache_3_blond.svg",sa=s.p+"assets/mustache_3_brown.svg",ea=s.p+"assets/mustache_3_grey.svg",ta=s.p+"assets/mustache_3_orange.svg",aa=s.p+"assets/mustache_3_purple.svg",ra=s.p+"assets/mustache_3_red.svg",na=s.p+"assets/mustache_3_yellow.svg",ia=s.p+"assets/mustache_4_black.svg",oa=s.p+"assets/mustache_4_blond.svg",pa=s.p+"assets/mustache_4_brown.svg",la=s.p+"assets/mustache_4_grey.svg",ga=s.p+"assets/mustache_4_orange.svg",ha=s.p+"assets/mustache_4_purple.svg",_a=s.p+"assets/mustache_4_red.svg",ua=s.p+"assets/mustache_4_yellow.svg",ca=s.p+"assets/ear_white.svg",da=s.p+"assets/ear_tan.svg",va=s.p+"assets/ear_tan_1.svg",fa=s.p+"assets/ear_brown.svg",ya=s.p+"assets/ear_black.svg",ba=s.p+"assets/earing_diamond.svg",ma=s.p+"assets/earing_golden.svg",Ca=s.p+"assets/earing_silver.svg",wa=s.p+"assets/9_watch.svg",Ba=s.p+"assets/text_for_dark.svg",Aa=s.p+"assets/text_for_light.svg",Fa=s.p+"assets/15_text_Carma.svg",Da=s.p+"assets/text_light.svg",ka=s.p+"assets/text_dark.svg",La={background:{elements:{default:{"#ffcd05":y,"#1B003D":f}}},chair:{hideToolPanel:!0,elements:{default:{0:b}}},shirt:{elements:{default:{"#0F71BA":m,"#1FB574":C,"#F79421":w,"#B96DAD":B,"#EC2128":A,"#FFFFFF":F,"#fff272":D}}},face:{elements:{default:{"#DDC190":k,"#B19177":L,"#AC8357":E,"#4a3221":x,"#23160F":S}}},hair:{hasCheckBox:!0,defaultDisplayed:!0,elements:{straightShort:{"#2F2B2C":Y,"#F4EDC9":M,"#453723":z,"#C7C8CA":q,"#DB4B25":$,"#6B4099":H,"#9c1f00":K,"#FFE896":R},straightShort2:{"#2F2B2C":G,"#F4EDC9":W,"#453723":J,"#C7C8CA":Q,"#DB4B25":V,"#6B4099":Z,"#9c1f00":ss,"#FFE896":es},newShort:{"#2F2B2C":ts,"#F4EDC9":as,"#453723":rs,"#C7C8CA":ns,"#DB4B25":is,"#6B4099":os,"#9c1f00":ps,"#FFE896":ls},curlyShort:{"#2F2B2C":gs,"#F4EDC9":hs,"#453723":_s,"#C7C8CA":us,"#DB4B25":cs,"#6B4099":ds,"#9c1f00":vs,"#FFE896":fs},straightLong:{"#2F2B2C":ys,"#F4EDC9":bs,"#453723":ms,"#C7C8CA":Cs,"#DB4B25":ws,"#6B4099":Bs,"#9c1f00":As,"#FFE896":Fs},straightLong2:{"#2F2B2C":Ds,"#F4EDC9":ks,"#453723":Ls,"#C7C8CA":Es,"#DB4B25":xs,"#6B4099":Ss,"#9c1f00":Os,"#FFE896":Ps},straightLong3:{"#2F2B2C":Us,"#F4EDC9":Ns,"#453723":Ts,"#C7C8CA":js,"#DB4B25":Is,"#6B4099":Xs,"#9c1f00":Ys,"#FFE896":Ms},curlyLong:{"#2F2B2C":zs,"#F4EDC9":qs,"#453723":$s,"#C7C8CA":Hs,"#DB4B25":Ks,"#6B4099":Rs,"#9c1f00":Gs,"#FFE896":Ws},balding:{"#2F2B2C":O,"#F4EDC9":P,"#453723":U,"#C7C8CA":N,"#DB4B25":T,"#6B4099":j,"#9c1f00":I,"#FFE896":X},"01":{"#2F2B2C":Js,"#F4EDC9":Qs,"#453723":Vs,"#C7C8CA":Zs,"#DB4B25":se,"#6B4099":ee,"#9c1f00":te,"#FFE896":ae},"02":{"#2F2B2C":re,"#F4EDC9":ne,"#453723":ie,"#C7C8CA":oe,"#DB4B25":pe,"#6B4099":le,"#9c1f00":ge,"#FFE896":he},"03":{"#2F2B2C":_e,"#F4EDC9":ue,"#453723":ce,"#C7C8CA":de,"#DB4B25":ve,"#6B4099":fe,"#9c1f00":ye,"#FFE896":be}}},lashes:{hasCheckBox:!0,defaultDisplayed:!1,elements:{1:{default:Ye}}},eyes:{elements:{big_3:{"#009FD4":De,"#563B0C":ke,"#119D5A":Le},big:{"#009FD4":me,"#563B0C":Ce,"#119D5A":we},big_2:{"#009FD4":Be,"#563B0C":Ae,"#119D5A":Fe},normal:{"#009FD4":Ee,"#563B0C":xe,"#119D5A":Se},skinny:{"#009FD4":Oe,"#563B0C":Pe,"#119D5A":Ue}}},eyebrows:{elements:{1:{default:Ne},2:{default:Te},3:{default:je},4:{default:Ie},5:{default:Xe}}},glasses:{hasCheckBox:!0,defaultDisplayed:!0,elements:{1:{default:Me},2:{default:ze},3:{default:qe}}},nose:{elements:{1:{default:$e},2:{default:He},3:{default:Ke},4:{default:Re},5:{default:Ge},6:{default:We},7:{default:Je}}},mouth:{elements:{mouth_1:{"#AD7A66":Qe,"#B96DAD":Qe,"#D23A34":Qe},mouth_2:{"#AD7A66":Ve,"#B96DAD":Ve,"#D23A34":Ve},lips_1:{"#AD7A66":Ze,"#B96DAD":st,"#D23A34":et},lips_2:{"#AD7A66":tt,"#B96DAD":at,"#D23A34":rt},lips_3:{"#AD7A66":nt,"#B96DAD":it,"#D23A34":ot},lips_4:{"#AD7A66":pt,"#B96DAD":lt,"#D23A34":gt}}},ear:{hideToolPanel:!0,elements:{default:{white:ca,tan:da,chocolate:va,brown:fa,black:ya}}},earings:{hasCheckBox:!0,defaultDisplayed:!1,elements:{1:{default:ba},2:{default:ma},3:{default:Ca}}},mustache:{hasCheckBox:!0,defaultDisplayed:!1,elements:{beard_1:{"#2F2B2C":ht,"#F4EDC9":_t,"#453723":ut,"#C7C8CA":ct,"#DB4B25":dt,"#6B4099":vt,"#9c1f00":ft,"#FFE896":yt},beard_2:{"#2F2B2C":bt,"#F4EDC9":mt,"#453723":Ct,"#C7C8CA":wt,"#DB4B25":Bt,"#6B4099":At,"#9c1f00":Ft,"#FFE896":Dt},goatee:{"#2F2B2C":kt,"#F4EDC9":Lt,"#453723":Et,"#C7C8CA":xt,"#DB4B25":St,"#6B4099":Ot,"#9c1f00":Pt,"#FFE896":Ut},goatee2:{"#2F2B2C":Nt,"#F4EDC9":Tt,"#453723":jt,"#C7C8CA":It,"#DB4B25":Xt,"#6B4099":Yt,"#9c1f00":Mt,"#FFE896":zt},mustache1:{"#2F2B2C":qt,"#F4EDC9":qt,"#453723":qt,"#C7C8CA":qt,"#DB4B25":qt,"#6B4099":qt,"#9c1f00":qt,"#FFE896":qt},mustache2:{"#2F2B2C":$t,"#F4EDC9":Ht,"#453723":Kt,"#C7C8CA":Rt,"#DB4B25":Gt,"#6B4099":Wt,"#9c1f00":Jt,"#FFE896":Qt},mustache3:{"#2F2B2C":Vt,"#F4EDC9":Zt,"#453723":sa,"#C7C8CA":ea,"#DB4B25":ta,"#6B4099":aa,"#9c1f00":ra,"#FFE896":na},mustache4:{"#2F2B2C":ia,"#F4EDC9":oa,"#453723":pa,"#C7C8CA":la,"#DB4B25":ga,"#6B4099":ha,"#9c1f00":_a,"#FFE896":ua}}},watch:{hasCheckBox:!0,defaultDisplayed:!0,elements:{0:{default:wa}}},text:{hideToolPanel:!0,elements:{default:{dark:Aa,light:Ba}}},textCarma:{hideToolPanel:!0,elements:{0:{default:Fa}}},lightningOurPath:{hideToolPanel:!0,elements:{default:{dark:ka,light:Da}}}};var Ea=function(){function s(s){var e=s.container,t=s.name,a=s.config,r=s.updateCallback,n=this;this.pickedOptionIndex=0,this.container=e,this.name=t,this.config=a,this.updateUrl=function(){return r(t,"url",n.getCurrentUrl())},this.updateDisplayed=function(s){return r(t,"displayed",s)},this.itemOptions=Object.keys(this.config.elements),this.itemColors=Object.keys(this.config.elements[this.itemOptions[0]]),this.pickedColor=this.itemColors[0],this.render()}return s.prototype.render=function(){var s,e,r=this,i=n({className:"ToolPanel__group"}),o=(s={className:"ToolPanel__title"},e=[this.name],t("p",s,e)),p=function(s,e){var r=t("input",s,e);if(s){var n=s.type,i=s.accept,o=s.autocomplete,p=s.checked,l=s.inputmode,g=s.list,h=s.max,_=s.maxlength,u=s.min,c=s.minlength,d=s.multiple,v=s.pattern,f=s.placeholder,y=s.readonly,b=s.required,m=s.size,C=s.spellcheck,w=s.src,B=s.step,A=s.onchange;a(r,s),n&&r.setAttribute("type",n),i&&r.setAttribute("accept",i),o&&r.setAttribute("autocomplete",o),p&&r.setAttribute("checked","true"),l&&(r.inputMode=l),g&&r.setAttribute("list",g),h&&r.setAttribute("max",h),_&&r.setAttribute("maxlength",_),u&&r.setAttribute("min",u),c&&r.setAttribute("minlength",c),d&&r.setAttribute("multiple","true"),v&&r.setAttribute("pattern",v),f&&r.setAttribute("placeholder",f),y&&r.setAttribute("readonly","true"),b&&r.setAttribute("required","true"),m&&r.setAttribute("size",m),C&&r.setAttribute("spellcheck","true"),w&&r.setAttribute("src",w),B&&r.setAttribute("step",String(B)),A&&(r.onchange=A)}return r}({type:"checkbox",className:"ToolPanel__checkbox",checked:this.config.defaultDisplayed,onchange:function(s){return r.updateDisplayed(s.target.checked)}}),l=function(s,e){var a=t("label",s,e);return s&&s.for&&a.setAttribute("for",s.for),a}({className:"ToolPanel__titleWithCheckbox"},[p,o]),g=this.itemOptions.length>1?this.renderButtons():null,h=this.itemColors.length>1?this.renderColors():null;this.config.hasCheckBox?i.append(l):i.append(o),g&&i.append(g),h&&i.append(h),this.container.append(i)},s.prototype.renderButtons=function(){var s=this,e=n({className:"ToolPanel__buttons"}),t=r({className:"ToolPanel__prevButton",onclick:function(){s.previousOption()}},["<"]),a=r({className:"ToolPanel__nextButton",onclick:function(){s.nextOption()}},[">"]);return e.append(t),e.append(a),e},s.prototype.renderColors=function(){var s=this,e=n({className:"ToolPanel__colorPicker"});return this.itemColors.forEach((function(t){var a=n({className:"ToolPanel__colorCircle"});a.setAttribute("style","background: ".concat(t)),a.onclick=function(){return s.setColor(t)},e.append(a)})),e},s.prototype.nextOption=function(){this.pickedOptionIndex===this.itemOptions.length-1?this.pickedOptionIndex=0:this.pickedOptionIndex+=1,this.updateUrl()},s.prototype.previousOption=function(){0===this.pickedOptionIndex?this.pickedOptionIndex=this.itemOptions.length-1:this.pickedOptionIndex-=1,this.updateUrl()},s.prototype.setColor=function(s){this.pickedColor=s,this.updateUrl()},s.prototype.getCurrentUrl=function(){return this.config.elements[this.itemOptions[this.pickedOptionIndex]][this.pickedColor]},s}();const xa=Ea;const Sa=function(){function s(s,e,t){this.toolPanelItems=[],this.container=s,this.elements=e,this.update=t,this.render()}return s.prototype.render=function(){var s=this,e=n({className:"ToolPanel"});Object.entries(this.elements).forEach((function(t){var a=t[0],r=t[1];r.hideToolPanel||s.toolPanelItems.push(new xa({container:e,name:a,config:r,updateCallback:s.update}))})),this.container.append(e)},s}();var Oa,Pa=((Oa={})[k]=ca,Oa[L]=da,Oa[E]=va,Oa[x]=fa,Oa[S]=ya,Oa);var Ua,Na=((Ua={})[f]=Ba,Ua[y]=Aa,Ua);var Ta,ja=((Ta={})[f]=Da,Ta[y]=ka,Ta);var Ia=n({id:"block-container",className:"blockContainer"});document.body.append(Ia);var Xa=n({className:"Avatar"});Ia.append(Xa);var Ya=n({className:"Avatar__imageContainer"});Xa.append(Ya);var Ma=n({id:"image-container",className:"Avatar__image"});Ya.append(Ma);var za=function(s){Ma.innerHTML="",s.forEach((function(s){Ma.append(function(s){var t=new Image;if(s){e(t,s);var a=s.alt,r=s.crossorigin,n=s.decoding,i=s.ismap,o=s.src;a&&(t.alt=a),r&&(t.crossOrigin=r),n&&(t.decoding=n),i&&(t.isMap=i),o&&(t.src=o)}return t}({src:s,className:"Avatar__layer"}))}))},qa=new c((function(s){za(Object.entries(s).filter((function(s){return s[1].displayed})).map((function(e){var t=e[0];return s[t].url})))}));qa.set(Object.entries(La).map((function(s){var e=s[0],t=s[1],a=t.defaultDisplayed,r=Object.values(t.elements)[0],n={name:e,url:Object.values(r)[0],displayed:a};return"face"===e&&(n.onUrlUpdated=function(s){qa.update("ear","url",Pa[s])}),"background"===e&&(n.onUrlUpdated=function(s){qa.update("text","url",Na[s]),qa.update("lightningOurPath","url",function(s){return ja[s]}(s))}),n})));var $a=new v(qa,za),Ha=n({className:"Avatar__toolPanelContainer"});Xa.append(Ha),new Sa(Ha,La,(function(s,e,t){qa.update(s,e,t)}));var Ka=r({onclick:function(){return $a.save()},className:"button"},["Download"]);Ha.append(Ka)})();