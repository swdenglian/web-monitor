"use strict";var t=function(){function t(){}return t.push=function(r){t.stack.push(r)},t.clear=function(){t.stack=[]},t.getLength=function(){return t.stack.length},t.upload=function(){console.log(t.stack.map((function(t){return t.toJSON()}))),t.clear()},t.startTimer=function(){t.intervalTimer&&clearInterval(t.intervalTimer),t.intervalTimer=setInterval((function(){t.upload()}),3e3)},t.setup=function(){t.startTimer()},t.intervalTimer=null,t.stack=[],t}(),r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])})(t,n)};function n(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}var e=function(){return(e=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)},o=navigator.userAgent,i="denglian1008_"+Date.now().toString(),u=function(){function t(t,r,n,e,u,s){void 0===r&&(r="denglian1008"),void 0===n&&(n=Date.now()),void 0===e&&(e=window.location.href),void 0===u&&(u=i),void 0===s&&(s=o),this.type=t,this.userID=r,this.time=n,this.url=e,this.reqId=u,this.ua=s}return t.prototype.toJSON=function(){return{type:this.type,userID:this.userID,time:this.time,ua:this.ua,url:this.url}},t}(),s=function(t){function r(r,n){var e=t.call(this,"JavaScriptError")||this;return e.errorMessage=r,e.errorStack=n,e}return n(r,t),r.prototype.toJSON=function(){return e(e({},t.prototype.toJSON.call(this)),{errorMessage:this.errorMessage,errorStack:this.errorStack})},r}(u),a=function(){function r(){}return r.setup=function(){var t=console.error;console.error=function(){if(!r.jsMonitorStart){var n=arguments[0]&&arguments[0].message,e=0,o=0,i=arguments[0]&&arguments[0].stack;i||(i=arguments[0]),r.addMessage(n,e,o,i)}return t.apply(console,arguments)},window.onerror=function(t,n,e,o,i){r.jsMonitorStart=!0;var u=i?i.stack:null;r.addMessage(t,e,o,u)}},r.addMessage=function(r,n,e,o){t.push(new s(r+":"+n+":"+e,o))},r.jsMonitorStart=!1,r}(),c=function(t){function r(r,n){var e=t.call(this,"SourceLoadError")||this;return e.sourceURL=r,e.typeName=n,e}return n(r,t),r.prototype.toJSON=function(){return e(e({},t.prototype.toJSON.call(this)),{sourceURL:this.sourceURL,typeName:this.typeName})},r}(u),l=function(){function r(){}return r.setup=function(){window.addEventListener("error",(function(t){var n,e=null===(n=null==t?void 0:t.target)||void 0===n?void 0:n.localName,o="";"link"===e?o=t.target.href:"script"===e&&(o=t.target.src),r.addMessage(o,e)}),!0)},r.addMessage=function(r,n){t.push(new c(r,n))},r}(),p=function(){function t(){}return t.setup=function(){a.setup(),l.setup()},t}();console.log("funny setup"),t.setup(),p.setup();
//# sourceMappingURL=index.js.map