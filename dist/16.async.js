webpackJsonp([16],{KHFt:function(t,e,r){"use strict";function n(){function t(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}function e(t,e,n,i){var a=e&&e.prototype instanceof o?e:o,c=Object.create(a.prototype),u=new h(i||[]);return c._invoke=function(t,e,n){var o="suspendedStart";return function(i,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===i)throw a;return d()}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=f(c,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var s=r(t,e,n);if("normal"===s.type){if(o=n.done?"completed":"suspendedYield",s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o="completed",n.method="throw",n.arg=s.arg)}}}(t,n,u),c}function r(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function c(e){["next","throw","return"].forEach(function(r){t(e,r,function(t){return this._invoke(r,t)})})}function u(t,e){function n(o,i,a,c){var u=r(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&g.call(s,"__await")?e.resolve(s.__await).then(function(t){n("next",t,a,c)},function(t){n("throw",t,a,c)}):e.resolve(s).then(function(t){f.value=t,a(f)},function(t){return n("throw",t,a,c)})}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e(function(e,o){n(t,r,e,o)})}return o=o?o.then(i,i):i()}}function f(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,f(t,e),"throw"===e.method))return b;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,b;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,b):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function s(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function l(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(s,this),this.reset(!0)}function p(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(g.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:d}}function d(){return{value:void 0,done:!0}}n=function(){return y};var y={},v=Object.prototype,g=v.hasOwnProperty,m="function"==typeof Symbol?Symbol:{},w=m.iterator||"@@iterator",x=m.asyncIterator||"@@asyncIterator",L=m.toStringTag||"@@toStringTag";try{t({},"")}catch(e){t=function(t,e,r){return t[e]=r}}y.wrap=e;var b={},E={};t(E,w,function(){return this});var _=Object.getPrototypeOf,O=_&&_(_(p([])));O&&O!==v&&g.call(O,w)&&(E=O);var j=a.prototype=o.prototype=Object.create(E);return i.prototype=a,t(j,"constructor",a),t(a,"constructor",i),i.displayName=t(a,L,"GeneratorFunction"),y.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},y.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,a):(e.__proto__=a,t(e,L,"GeneratorFunction")),e.prototype=Object.create(j),e},y.awrap=function(t){return{__await:t}},c(u.prototype),t(u.prototype,x,function(){return this}),y.AsyncIterator=u,y.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new u(e(t,r,n,o),i);return y.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},c(j),t(j,L,"Generator"),t(j,w,function(){return this}),t(j,"toString",function(){return"[object Generator]"}),y.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},y.values=p,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(l),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),c=g.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),l(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;l(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:p(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),b}},y}var o=r("ouCL");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(r("+TWC")),a={namespace:"menus",state:{name:"Ryan",text:"Category",count:0,loading:!1},subscriptions:{setup:function(t){t.dispatch,t.history}},effects:{fetch:n().mark(function t(e,r){var o,i,a;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.payload,i=r.call,a=r.put,t.next=4,a({type:"save"});case 4:case"end":return t.stop()}},t)}),addAfterSecond:n().mark(function t(e,r){var o;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.put,t.next=3,o({type:"addCount",payload:{loading:!0}});case 3:return t.next=5,o({type:"overAddCount",payload:{loading:!1}});case 5:case"end":return t.stop()}},t)}),setYourName:n().mark(function t(e,r){var o,i;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.payload,i=r.put,t.next=4,i({type:"setName",payload:o});case 4:case"end":return t.stop()}},t)})},reducers:{getList:function(t,e){var r=e.payload;return(0,i.default)({},t,r)},save:function(t,e){return(0,i.default)({},t,e.payload)},addCount:function(t,e){return t.count+=1,(0,i.default)({},t,e.payload)},setName:function(t,e){return(0,i.default)({},t,e.payload)},overAddCount:function(t,e){return(0,i.default)({},t,e.payload)}}};e.default=a}});