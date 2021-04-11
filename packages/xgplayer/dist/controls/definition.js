!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.definition=t():(e.xgplayer=e.xgplayer||{},e.xgplayer.PlayerControls=e.xgplayer.PlayerControls||{},e.xgplayer.PlayerControls.definition=t())}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}t.default={name:"definition",method:function(){r.default.method.call(this),o.default.method.call(this)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"definition",method:function(){var e=this;e.once("destroy",function t(){e.off("destroy",t)})}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=function(e){return e&&e.__esModule?e:{default:e}}(n(5));n(6);t.default={name:"s_definition",method:function(){var e=this,t=e.root,n=void 0,i=(0,r.createDom)("xg-definition","",{tabindex:3},"xgplayer-definition");function a(){var n=e.definitionList,o=["<ul>"],a=e.config.url,s=document.createElement("a");e.switchURL?["mp4","hls","__flv__","dash"].every(function(t){return!e[t]||(e[t].url&&(s.href=e[t].url),"__flv__"===t&&(e[t]._options?s.href=e[t]._options.url:s.href=e[t]._mediaDataSource.url),"hls"===t&&(s.href=e[t].originUrl||e[t].url,a=s.href),a=s.href,!1)}):a=e.currentSrc||e.src,n.forEach(function(t){s.href=t.url,e.dash?o.push("<li url='"+t.url+"' cname='"+t.name+"' class='"+(t.selected?"selected":"")+"'>"+t.name+"</li>"):o.push("<li url='"+t.url+"' cname='"+t.name+"' class='"+(s.href===a?"selected":"")+"'>"+t.name+"</li>")});var f=n.filter(function(t){return s.href=t.url,e.dash?!0===t.selected:s.href===a});o.push("</ul><p class='name'>"+(f[0]||{name:""}).name+"</p>");var l=t.querySelector(".xgplayer-definition");if(l){l.innerHTML=o.join("");var u=l.querySelector(".name");e.config.definitionActive&&"hover"!==e.config.definitionActive||u.addEventListener("mouseenter",function(t){t.preventDefault(),t.stopPropagation(),(0,r.addClass)(e.root,"xgplayer-definition-active"),l.focus()})}else{i.innerHTML=o.join("");var c=i.querySelector(".name");e.config.definitionActive&&"hover"!==e.config.definitionActive||c.addEventListener("mouseenter",function(t){t.preventDefault(),t.stopPropagation(),(0,r.addClass)(e.root,"xgplayer-definition-active"),i.focus()}),e.controls.appendChild(i)}}function s(n){e.definitionList=n,n&&n instanceof Array&&n.length>1&&((0,r.addClass)(t,"xgplayer-is-definition"),e.once("canplay",a))}function f(){if(e.currentTime=e.curTime,!n){var t=e.play();void 0!==t&&t&&t.catch(function(e){})}}function l(){e.once("timeupdate",f)}function u(){(0,r.removeClass)(t,"xgplayer-definition-active")}"mobile"===o.default.device&&(e.config.definitionActive="click"),e.on("resourceReady",s),["touchend","click"].forEach(function(t){i.addEventListener(t,function(t){t.preventDefault(),t.stopPropagation();var a=e.definitionList,s=t.target||t.srcElement,u=document.createElement("a");if(s&&"li"===s.tagName.toLocaleLowerCase()){var c,d=void 0;if(Array.prototype.forEach.call(s.parentNode.childNodes,function(t){(0,r.hasClass)(t,"selected")&&(d=t.getAttribute("cname"),(0,r.removeClass)(t,"selected"),e.emit("beforeDefinitionChange",t.getAttribute("url")))}),e.dash&&a.forEach(function(e){e.selected=!1,e.name===s.innerHTML&&(e.selected=!0)}),(0,r.addClass)(s,"selected"),c=s.getAttribute("cname"),s.parentNode.nextSibling.innerHTML=""+s.getAttribute("cname"),u.href=s.getAttribute("url"),e.switchURL){var p=document.createElement("a");["mp4","hls","__flv__","dash"].every(function(t){return!e[t]||(e[t].url&&(p.href=e[t].url),"__flv__"===t&&(e[t]._options?p.href=e[t]._options.url:p.href=e[t]._mediaDataSource.url),"hls"===t&&(p.href=e[t].originUrl||e[t].url),!1)}),p.href===u.href||e.ended||e.switchURL(u.href)}else e.hls&&(document.createElement("a"),e.hls.url),u.href!==e.currentSrc&&(e.curTime=e.currentTime,n=e.paused,e.ended||(e.src=u.href,navigator.userAgent.toLowerCase().indexOf("android")>-1?e.once("timeupdate",l):e.once("playing",f)));e.emit("definitionChange",{from:d,to:c}),"mobile"===o.default.device&&(0,r.removeClass)(e.root,"xgplayer-definition-active")}else"click"!==e.config.definitionActive||!s||"p"!==s.tagName.toLocaleLowerCase()&&"em"!==s.tagName.toLocaleLowerCase()||("mobile"===o.default.device?(0,r.toggleClass)(e.root,"xgplayer-definition-active"):(0,r.addClass)(e.root,"xgplayer-definition-active"),i.focus());e.emit("focus")},!1)}),i.addEventListener("mouseleave",function(e){e.preventDefault(),e.stopPropagation(),(0,r.removeClass)(t,"xgplayer-definition-active")}),e.on("blur",u),e.once("destroy",function t(){e.off("resourceReady",s),e.off("canplay",a),navigator.userAgent.toLowerCase().indexOf("android")>-1?(e.off("timeupdate",l),e.off("timeupdate",f)):e.off("playing",f),e.off("blur",u),e.off("destroy",t)})}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.util=void 0,t.createDom=o,t.hasClass=i,t.addClass=a,t.removeClass=s,t.toggleClass=f,t.findDom=l,t.padStart=u,t.format=c,t.event=d,t.typeOf=p,t.deepCopy=g,t.getBgImage=h,t.copyDom=v,t._setInterval=m,t._clearInterval=y,t.createImgBtn=b,t.isWeiXin=x,t.isUc=w,t.computeWatchDur=L,t.offInDestroy=_,t.on=C,t.once=O,t.getBuffered2=j;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(4));function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=document.createElement(e);return o.className=r,o.innerHTML=t,Object.keys(n).forEach(function(t){var r=t,i=n[t];"video"===e||"audio"===e?i&&o.setAttribute(r,i):o.setAttribute(r,i)}),o}function i(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,function(e){return e===t}):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function a(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach(function(t){t&&e.classList.add(t)}):i(e,t)||(e.className+=" "+t))}function s(e,t){e&&(e.classList?t.split(/\s+/g).forEach(function(t){e.classList.remove(t)}):i(e,t)&&t.split(/\s+/g).forEach(function(t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}))}function f(e,t){e&&t.split(/\s+/g).forEach(function(t){i(e,t)?s(e,t):a(e,t)})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments[1],n=void 0;try{n=e.querySelector(t)}catch(r){0===t.indexOf("#")&&(n=e.getElementById(t.slice(1)))}return n}function u(e,t,n){for(var r=String(n),o=t>>0,i=Math.ceil(o/r.length),a=[],s=String(e);i--;)a.push(r);return a.join("").substring(0,o-s.length)+s}function c(e){if(window.isNaN(e))return"";var t=u(Math.floor(e/3600),2,0),n=u(Math.floor((e-3600*t)/60),2,0),r=u(Math.floor(e-3600*t-60*n),2,0);return("00"===t?[n,r]:[t,n,r]).join(":")}function d(e){if(e.touches){var t=e.touches[0]||e.changedTouches[0];e.clientX=t.clientX||0,e.clientY=t.clientY||0,e.offsetX=t.pageX-t.target.offsetLeft,e.offsetY=t.pageY-t.target.offsetTop}e._target=e.target||e.srcElement}function p(e){return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]}function g(e,t){if("Object"===p(t)&&"Object"===p(e))return Object.keys(t).forEach(function(n){"Object"!==p(t[n])||t[n]instanceof Node?"Array"===p(t[n])?e[n]="Array"===p(e[n])?e[n].concat(t[n]):t[n]:e[n]=t[n]:e[n]?g(e[n],t[n]):e[n]=t[n]}),e}function h(e){var t=(e.currentStyle||window.getComputedStyle(e,null)).backgroundImage;if(!t||"none"===t)return"";var n=document.createElement("a");return n.href=t.replace(/url\("|"\)/g,""),n.href}function v(e){if(e&&1===e.nodeType){var t=document.createElement(e.tagName);return Array.prototype.forEach.call(e.attributes,function(e){t.setAttribute(e.name,e.value)}),e.innerHTML&&(t.innerHTML=e.innerHTML),t}return""}function m(e,t,n,r){e._interval[t]||(e._interval[t]=setInterval(n.bind(e),r))}function y(e,t){clearInterval(e._interval[t]),e._interval[t]=null}function b(e,t,n,r){var i=o("xg-"+e,"",{},"xgplayer-"+e+"-img");if(i.style.backgroundImage='url("'+t+'")',n&&r){var a=void 0,s=void 0,f=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every(function(e){return!(n.indexOf(e)>-1&&r.indexOf(e)>-1)||(a=Number(n.slice(0,n.indexOf(e)).trim()),s=Number(r.slice(0,r.indexOf(e)).trim()),f=e,!1)}),i.style.width=""+a+f,i.style.height=""+s+f,i.style.backgroundSize=""+a+f+" "+s+f,i.style.margin="start"===e?"-"+s/2+f+" auto auto -"+a/2+f:"auto 5px auto 5px"}return i}function x(){return window.navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1}function w(){return window.navigator.userAgent.toLowerCase().indexOf("ucbrowser")>-1}function L(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],n=0;n<e.length;n++)if(!(!e[n].end||e[n].begin<0||e[n].end<0||e[n].end<e[n].begin))if(t.length<1)t.push({begin:e[n].begin,end:e[n].end});else for(var r=0;r<t.length;r++){var o=e[n].begin,i=e[n].end;if(i<t[r].begin){t.splice(r,0,{begin:o,end:i});break}if(!(o>t[r].end)){var a=t[r].begin,s=t[r].end;t[r].begin=Math.min(o,a),t[r].end=Math.max(i,s);break}if(r>t.length-2){t.push({begin:o,end:i});break}}for(var f=0,l=0;l<t.length;l++)f+=t[l].end-t[l].begin;return f}function _(e,t,n,r){e.once(r,function o(){e.off(t,n),e.off(r,o)})}function C(e,t,n,r){if(r)e.on(t,n),_(e,t,n,r);else{e.on(t,function r(o){n(o),e.off(t,r)})}}function O(e,t,n,r){if(r)e.once(t,n),_(e,t,n,r);else{e.once(t,function r(o){n(o),e.off(t,r)})}}function j(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,n=[],o=0;o<e.length;o++)n.push({start:e.start(o)<.5?0:e.start(o),end:e.end(o)});n.sort(function(e,t){var n=e.start-t.start;return n||t.end-e.end});var i=[];if(t)for(var a=0;a<n.length;a++){var s=i.length;if(s){var f=i[s-1].end;n[a].start-f<t?n[a].end>f&&(i[s-1].end=n[a].end):i.push(n[a])}else i.push(n[a])}else i=n;return new r.default(i)}t.util={createDom:o,hasClass:i,addClass:a,removeClass:s,toggleClass:f,findDom:l,padStart:u,format:c,event:d,typeOf:p,deepCopy:g,getBgImage:h,copyDom:v,_setInterval:m,_clearInterval:y,createImgBtn:b,isWeiXin:x,isUc:w,computeWatchDur:L,offInDestroy:_,on:C,once:O,getBuffered2:j}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bufferedList=t}return r(e,[{key:"start",value:function(e){return this.bufferedList[e].start}},{key:"end",value:function(e){return this.bufferedList[e].end}},{key:"length",get:function(){return this.bufferedList.length}}]),e}();t.default=o,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={get device(){return r.os.isPc?"pc":"mobile"},get browser(){var e=navigator.userAgent.toLowerCase(),t={ie:/rv:([\d.]+)\) like gecko/,firfox:/firefox\/([\d.]+)/,chrome:/chrome\/([\d.]+)/,opera:/opera.([\d.]+)/,safari:/version\/([\d.]+).*safari/};return[].concat(Object.keys(t).filter(function(n){return t[n].test(e)}))[0]},get os(){var e=navigator.userAgent,t=/(?:Windows Phone)/.test(e),n=/(?:SymbianOS)/.test(e)||t,r=/(?:Android)/.test(e),o=/(?:Firefox)/.test(e),i=/(?:iPad|PlayBook)/.test(e)||r&&!/(?:Mobile)/.test(e)||o&&/(?:Tablet)/.test(e),a=/(?:iPhone)/.test(e)&&!i;return{isTablet:i,isPhone:a,isAndroid:r,isPc:!(a||r||n||i),isSymbian:n,isWindowsPhone:t,isFireFox:o}}};t.default=r,e.exports=t.default},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(8)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-definition{-webkit-order:5;-moz-box-ordinal-group:6;order:5;width:60px;height:150px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-left:10px;margin-top:-119px}.xgplayer-skin-default .xgplayer-definition ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;left:0;text-align:center;white-space:nowrap;margin-left:-10px;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-definition ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);padding:6px 13px}.xgplayer-skin-default .xgplayer-definition ul li.selected,.xgplayer-skin-default .xgplayer-definition ul li:hover{color:#fff;opacity:1}.xgplayer-skin-default .xgplayer-definition .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:0;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default.xgplayer-definition-active .xgplayer-definition ul,.xgplayer-skin-default.xgplayer-is-definition .xgplayer-definition{display:block}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,s=0,f=[],l=n(10);function u(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(v(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(v(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function c(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function d(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function g(e){var t=document.createElement("style");return e.attrs.type="text/css",h(t,e.attrs),d(e,t),t}function h(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var f=s++;n=a||(a=g(t)),r=y.bind(null,n,f,!1),o=y.bind(null,n,f,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",h(t,e.attrs),d(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){p(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=c(e,t);return u(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}e&&u(c(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete r[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});