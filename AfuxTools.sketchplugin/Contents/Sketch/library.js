var that=this;function __skpm_run(r,t){that.context=t;var e=function(r){var t={};function e(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:n})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,t){if(1&t&&(r=e(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var o in r)e.d(n,o,function(t){return r[t]}.bind(null,o));return n},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},e.p="",e(e.s="./src/library.js")}({"./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/*! exports provided: addLibrary */function(r,t,e){"use strict";e.r(t),e.d(t,"addLibrary",function(){return a});var n=e(/*! sketch/dom */"sketch/dom"),o=e.n(n),a=function(r){var t=o.a.Library;["AFUX 输出组件.sketch"].forEach(function(e){var n=r.plugin.urlForResourceNamed(e);if(n){var o=String(n.path()),a=t.getLibraryForDocumentAtPath(o);AppController.sharedInstance().checkForAssetLibraryUpdates(),"Shutdown"===r.action&&a.remove()}})}},"sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */function(r,t){r.exports=require("sketch/dom")}});"default"===r&&"function"==typeof e?e(t):e[r](t)}that.addLibrary=__skpm_run.bind(this,"addLibrary"),that.addLibrary=__skpm_run.bind(this,"addLibrary"),that.addLibrary=__skpm_run.bind(this,"addLibrary"),that.onRun=__skpm_run.bind(this,"default");