window.PlayerControls=window.PlayerControls||{},window.PlayerControls.start=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.util=void 0,t.createDom=a,t.hasClass=o,t.addClass=i,t.removeClass=s,t.toggleClass=l,t.findDom=u,t.padStart=c,t.format=f,t.event=d,t.typeOf=p,t.deepCopy=g,t.getBgImage=y,t.copyDom=v,t._setInterval=h,t._clearInterval=m,t.createImgBtn=b,t.isWeiXin=x,t.isUc=w,t.computeWatchDur=C,t.offInDestroy=k,t.on=O,t.once=L,t.getBuffered2=j;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(3));function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=document.createElement(e);return a.className=r,a.innerHTML=t,Object.keys(n).forEach(function(t){var r=t,o=n[t];"video"===e||"audio"===e?o&&a.setAttribute(r,o):a.setAttribute(r,o)}),a}function o(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,function(e){return e===t}):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function i(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach(function(t){t&&e.classList.add(t)}):o(e,t)||(e.className+=" "+t))}function s(e,t){e&&(e.classList?t.split(/\s+/g).forEach(function(t){e.classList.remove(t)}):o(e,t)&&t.split(/\s+/g).forEach(function(t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}))}function l(e,t){e&&t.split(/\s+/g).forEach(function(t){o(e,t)?s(e,t):i(e,t)})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments[1],n=void 0;try{n=e.querySelector(t)}catch(r){0===t.indexOf("#")&&(n=e.getElementById(t.slice(1)))}return n}function c(e,t,n){for(var r=String(n),a=t>>0,o=Math.ceil(a/r.length),i=[],s=String(e);o--;)i.push(r);return i.join("").substring(0,a-s.length)+s}function f(e){if(window.isNaN(e))return"";var t=c(Math.floor(e/3600),2,0),n=c(Math.floor((e-3600*t)/60),2,0),r=c(Math.floor(e-3600*t-60*n),2,0);return("00"===t?[n,r]:[t,n,r]).join(":")}function d(e){if(e.touches){var t=e.touches[0]||e.changedTouches[0];e.clientX=t.clientX||0,e.clientY=t.clientY||0,e.offsetX=t.pageX-t.target.offsetLeft,e.offsetY=t.pageY-t.target.offsetTop}e._target=e.target||e.srcElement}function p(e){return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]}function g(e,t){if("Object"===p(t)&&"Object"===p(e))return Object.keys(t).forEach(function(n){"Object"!==p(t[n])||t[n]instanceof Node?"Array"===p(t[n])?e[n]="Array"===p(e[n])?e[n].concat(t[n]):t[n]:e[n]=t[n]:e[n]?g(e[n],t[n]):e[n]=t[n]}),e}function y(e){var t=(e.currentStyle||window.getComputedStyle(e,null)).backgroundImage;if(!t||"none"===t)return"";var n=document.createElement("a");return n.href=t.replace(/url\("|"\)/g,""),n.href}function v(e){if(e&&1===e.nodeType){var t=document.createElement(e.tagName);return Array.prototype.forEach.call(e.attributes,function(e){t.setAttribute(e.name,e.value)}),e.innerHTML&&(t.innerHTML=e.innerHTML),t}return""}function h(e,t,n,r){e._interval[t]||(e._interval[t]=setInterval(n.bind(e),r))}function m(e,t){clearInterval(e._interval[t]),e._interval[t]=null}function b(e,t,n,r){var o=a("xg-"+e,"",{},"xgplayer-"+e+"-img");if(o.style.backgroundImage='url("'+t+'")',n&&r){var i=void 0,s=void 0,l=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every(function(e){return!(n.indexOf(e)>-1&&r.indexOf(e)>-1)||(i=Number(n.slice(0,n.indexOf(e)).trim()),s=Number(r.slice(0,r.indexOf(e)).trim()),l=e,!1)}),o.style.width=""+i+l,o.style.height=""+s+l,o.style.backgroundSize=""+i+l+" "+s+l,o.style.margin="start"===e?"-"+s/2+l+" auto auto -"+i/2+l:"auto 5px auto 5px"}return o}function x(){return window.navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1}function w(){return window.navigator.userAgent.toLowerCase().indexOf("ucbrowser")>-1}function C(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],n=0;n<e.length;n++)if(!(!e[n].end||e[n].begin<0||e[n].end<0||e[n].end<e[n].begin))if(t.length<1)t.push({begin:e[n].begin,end:e[n].end});else for(var r=0;r<t.length;r++){var a=e[n].begin,o=e[n].end;if(o<t[r].begin){t.splice(r,0,{begin:a,end:o});break}if(!(a>t[r].end)){var i=t[r].begin,s=t[r].end;t[r].begin=Math.min(a,i),t[r].end=Math.max(o,s);break}if(r>t.length-2){t.push({begin:a,end:o});break}}for(var l=0,u=0;u<t.length;u++)l+=t[u].end-t[u].begin;return l}function k(e,t,n,r){e.once(r,function a(){e.off(t,n),e.off(r,a)})}function O(e,t,n,r){if(r)e.on(t,n),k(e,t,n,r);else{e.on(t,function r(a){n(a),e.off(t,r)})}}function L(e,t,n,r){if(r)e.once(t,n),k(e,t,n,r);else{e.once(t,function r(a){n(a),e.off(t,r)})}}function j(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,n=[],a=0;a<e.length;a++)n.push({start:e.start(a)<.5?0:e.start(a),end:e.end(a)});n.sort(function(e,t){var n=e.start-t.start;return n||t.end-e.end});var o=[];if(t)for(var i=0;i<n.length;i++){var s=o.length;if(s){var l=o[s-1].end;n[i].start-l<t?n[i].end>l&&(o[s-1].end=n[i].end):o.push(n[i])}else o.push(n[i])}else o=n;return new r.default(o)}t.util={createDom:a,hasClass:o,addClass:i,removeClass:s,toggleClass:l,findDom:u,padStart:c,format:f,event:d,typeOf:p,deepCopy:g,getBgImage:y,copyDom:v,_setInterval:h,_clearInterval:m,createImgBtn:b,isWeiXin:x,isUc:w,computeWatchDur:C,offInDestroy:k,on:O,once:L,getBuffered2:j}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(2)),a=o(n(4));function o(e){return e&&e.__esModule?e:{default:e}}t.default={name:"start",method:function(){r.default.method.call(this),a.default.method.call(this)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default={name:"start",method:function(){var e=this,t=e.root;function n(){e.off("canplay",n);var t=e.play();void 0!==t&&t&&t.catch(function(e){})}function a(){(0,r.hasClass)(t,"xgplayer-nostart")?((0,r.removeClass)(t,"xgplayer-nostart"),(0,r.addClass)(t,"xgplayer-is-enter"),"function"==typeof t.contains?e.video&&1===e.video.nodeType&&!t.contains(e.video)||e.video&&1!==e.video.nodeType&&"ready"!==e.video.audioPlayer.status?(e.once("canplay",n),e.start()):n():e.video&&1===e.video.nodeType&&!t.querySelector(this.videoConfig.mediaType)||e.video&&1!==e.video.nodeType&&!t.querySelector("canvas")&&"ready"!==e.video.audioPlayer.status?(e.once("canplay",n),e.start()):n()):e.paused&&((0,r.removeClass)(t,"xgplayer-nostart xgplayer-isloading"),setTimeout(function(){var t=e.play();void 0!==t&&t&&t.catch(function(e){})},10))}e.on("startBtnClick",a),e.once("destroy",function t(){e.off("startBtnClick",a),e.off("canplay",n),e.off("destroy",t)})}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bufferedList=t}return r(e,[{key:"start",value:function(e){return this.bufferedList[e].start}},{key:"end",value:function(e){return this.bufferedList[e].end}},{key:"length",get:function(){return this.bufferedList.length}}]),e}();t.default=a,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=i(n(5)),o=i(n(6));function i(e){return e&&e.__esModule?e:{default:e}}n(7);t.default={name:"s_start",method:function(){var e=this,t=e.root,n=(0,r.createDom)("xg-start",'<div class="xgplayer-icon-play">'+a.default+'</div>\n                                      <div class="xgplayer-icon-pause">'+o.default+"</div>",{},"xgplayer-start");function i(e){(0,r.addClass)(e.root,"xgplayer-skin-default"),e.config&&(e.config.autoplay&&!(0,r.isWeiXin)()&&!(0,r.isUc)()&&(0,r.addClass)(e.root,"xgplayer-is-enter"),e.config.lang&&"en"===e.config.lang?(0,r.addClass)(e.root,"xgplayer-lang-is-en"):"jp"===e.config.lang&&(0,r.addClass)(e.root,"xgplayer-lang-is-jp"),e.config.enableContextmenu||e.video.addEventListener("contextmenu",function(e){e.preventDefault(),e.stopPropagation()}))}e.isReady?(t.appendChild(n),i(e)):e.once("ready",function(){t.appendChild(n),i(e)}),e.once("autoplay was prevented",function(){(0,r.removeClass)(e.root,"xgplayer-is-enter"),(0,r.addClass)(e.root,"xgplayer-nostart")}),e.once("canplay",function(){(0,r.removeClass)(e.root,"xgplayer-is-enter")}),n.onclick=function(t){t.preventDefault(),t.stopPropagation(),e.emit("startBtnClick")}}},e.exports=t.default},function(e,t,n){"use strict";n.r(t),t.default='<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">\n  <path transform="translate(15,15) scale(0.04,0.04)" d="M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z"></path>\n</svg>\n'},function(e,t,n){"use strict";n.r(t),t.default='<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">\n  <path transform="translate(15,15) scale(0.04 0.04)" d="M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>\n</svg>\n'},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(10)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(9)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-start{border-radius:50%;display:inline-block;width:70px;height:70px;background:rgba(0,0,0,.38);overflow:hidden;text-align:center;line-height:70px;vertical-align:middle;position:absolute;left:50%;top:50%;z-index:115;margin:-35px auto auto -35px;cursor:pointer}.xgplayer-skin-default .xgplayer-start div{position:absolute}.xgplayer-skin-default .xgplayer-start div svg{fill:hsla(0,0%,100%,.7)}.xgplayer-skin-default .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default .xgplayer-start .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-start:hover{opacity:.85}.xgplayer-skin-default.xgplayer-playing .xgplayer-start,.xgplayer-skin-default.xgplayer-playing .xgplayer-start .xgplayer-icon-play{display:none}.xgplayer-skin-default.xgplayer-playing .xgplayer-start .xgplayer-icon-pause{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-start{display:inline-block}.xgplayer-skin-default.xgplayer-pause .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default.xgplayer-is-replay .xgplayer-start,.xgplayer-skin-default.xgplayer-pause .xgplayer-start .xgplayer-icon-pause{display:none}.xgplayer-skin-default.xgplayer-is-replay .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default.xgplayer-is-replay .xgplayer-start .xgplayer-icon-pause{display:none}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([a]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r={},a=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),o=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),i=null,s=0,l=[],u=n(11);function c(e,t){for(var n=0;n<e.length;n++){var a=e[n],o=r[a.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](a.parts[i]);for(;i<a.parts.length;i++)o.parts.push(v(a.parts[i],t))}else{var s=[];for(i=0;i<a.parts.length;i++)s.push(v(a.parts[i],t));r[a.id]={id:a.id,refs:1,parts:s}}}}function f(e,t){for(var n=[],r={},a=0;a<e.length;a++){var o=e[a],i=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function d(e,t){var n=o(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=o(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,a)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function g(e){var t=document.createElement("style");return e.attrs.type="text/css",y(t,e.attrs),d(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,a,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var l=s++;n=i||(i=g(t)),r=m.bind(null,n,l,!1),a=m.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",y(t,e.attrs),d(e,t),t}(t),r=function(e,t,n){var r=n.css,a=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||o)&&(r=u(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,t),a=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),a=function(){p(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return c(n,t),function(e){for(var a=[],o=0;o<n.length;o++){var i=n[o];(s=r[i.id]).refs--,a.push(s)}e&&c(f(e,t),t);for(o=0;o<a.length;o++){var s;if(0===(s=a[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete r[s.id]}}}};var h=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function m(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=h(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}}]);