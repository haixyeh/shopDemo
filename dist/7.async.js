webpackJsonp([7],{"8LTN":function(t,n,e){"use strict";function r(){function t(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}function n(t,n,r,a){var c=n&&n.prototype instanceof o?n:o,i=Object.create(c.prototype),u=new d(a||[]);return i._invoke=function(t,n,r){var o="suspendedStart";return function(a,c){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===a)throw c;return v()}for(r.method=a,r.arg=c;;){var i=r.delegate;if(i){var u=f(i,r);if(u){if(u===x)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var l=e(t,n,r);if("normal"===l.type){if(o=r.done?"completed":"suspendedYield",l.arg===x)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o="completed",r.method="throw",r.arg=l.arg)}}}(t,r,u),i}function e(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}function o(){}function a(){}function c(){}function i(n){["next","throw","return"].forEach(function(e){t(n,e,function(t){return this._invoke(e,t)})})}function u(t,n){function r(o,a,c,i){var u=e(t[o],t,a);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&g.call(l,"__await")?n.resolve(l.__await).then(function(t){r("next",t,c,i)},function(t){r("throw",t,c,i)}):n.resolve(l).then(function(t){f.value=t,c(f)},function(t){return r("throw",t,c,i)})}i(u.arg)}var o;this._invoke=function(t,e){function a(){return new n(function(n,o){r(t,e,n,o)})}return o=o?o.then(a,a):a()}}function f(t,n){var r=t.iterator[n.method];if(void 0===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,f(t,n),"throw"===n.method))return x;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return x}var o=e(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,x;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,x):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,x)}function l(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function s(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function h(t){if(t){var n=t[E];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function n(){for(;++e<t.length;)if(g.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:v}}function v(){return{value:void 0,done:!0}}r=function(){return p};var p={},y=Object.prototype,g=y.hasOwnProperty,m="function"==typeof Symbol?Symbol:{},E=m.iterator||"@@iterator",w=m.asyncIterator||"@@asyncIterator",b=m.toStringTag||"@@toStringTag";try{t({},"")}catch(n){t=function(t,n,e){return t[n]=e}}p.wrap=n;var x={},S={};t(S,E,function(){return this});var L=Object.getPrototypeOf,k=L&&L(L(h([])));k&&k!==y&&g.call(k,E)&&(S=k);var O=c.prototype=o.prototype=Object.create(S);return a.prototype=c,t(O,"constructor",c),t(c,"constructor",a),a.displayName=t(c,b,"GeneratorFunction"),p.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===a||"GeneratorFunction"===(n.displayName||n.name))},p.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,c):(n.__proto__=c,t(n,b,"GeneratorFunction")),n.prototype=Object.create(O),n},p.awrap=function(t){return{__await:t}},i(u.prototype),t(u.prototype,w,function(){return this}),p.AsyncIterator=u,p.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var c=new u(n(t,e,r,o),a);return p.isGeneratorFunction(e)?c:c.next().then(function(t){return t.done?t.value:c.next()})},i(O),t(O,b,"Generator"),t(O,E,function(){return this}),t(O,"toString",function(){return"[object Generator]"}),p.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},p.values=h,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(s),!t)for(var n in this)"t"===n.charAt(0)&&g.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}if(this.done)throw t;for(var e=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=g.call(o,"catchLoc"),i=g.call(o,"finallyLoc");if(c&&i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&g.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,x):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),x},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),s(e),x}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;s(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:h(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),x}},p}var o=e("ouCL");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(e("+TWC")),c=e("QSYX"),i={namespace:"admin",state:{name:"Ryan",query:{},listData:[{id:1,name:"Haix",age:18,address:"no way"},{id:2,name:"Ryan",age:29,address:"no way"},{id:3,name:"Wendy",age:29,address:"\u53f0\u4e2d\u5e02\u897f\u5c6f\u5340"},{id:4,name:"Ian",age:28,address:"\u53f0\u4e2d\u5e02\u897f\u5c6f\u5340"}],info:{current_page:"1",limit:"20",total:"2",total_page:"1"}},subscriptions:{setup:function(t){t.dispatch,t.history}},effects:{fetch:r().mark(function t(n,e){var o,a,c;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.payload,a=e.call,c=e.put,t.next=4,c({type:"save",payload:o});case 4:case"end":return t.stop()}},t)}),addAfterSecond:r().mark(function t(n,e){var o,a;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.call,a=e.put,t.next=3,a({type:"addCount",payload:{loading:!0}});case 3:return t.next=5,o(c.delay,500);case 5:return t.next=7,a({type:"overAddCount",payload:{loading:!1}});case 7:case"end":return t.stop()}},t)}),setYourName:r().mark(function t(n,e){var o,a;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.payload,a=e.put,t.next=4,a({type:"setName",payload:o});case 4:case"end":return t.stop()}},t)})},reducers:{getList:function(t,n){var e=n.payload;return(0,a.default)({},t,e)},save:function(t,n){return(0,a.default)({},t,{query:(0,a.default)({},n.payload)})},addCount:function(t,n){return t.count+=1,(0,a.default)({},t,n.payload)},setName:function(t,n){return(0,a.default)({},t,n.payload)},overAddCount:function(t,n){return(0,a.default)({},t,n.payload)}}};n.default=i},QSYX:function(t,n,e){"use strict";function r(t,n){if(null==t)return{};var e,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}function o(t,n){var e=t.indexOf(n);e>=0&&t.splice(e,1)}function a(t){var n=!1;return function(){n||(n=!0,t())}}function c(t,n,e){void 0===n&&(n=Ct),void 0===e&&(e="iterator");var r={meta:{name:e},next:t,throw:n,return:jt,isSagaIterator:!0};return"undefined"!=typeof Symbol&&(r[Symbol.iterator]=function(){return r}),r}function i(t,n){var e=n.sagaStack;console.error(t),console.error(e)}function u(t,n){function e(){c===a&&(r=!0,n(i))}var r,o=Object.keys(t),a=o.length,c=0,i=gt(t)?Tt(a):{},u={};return o.forEach(function(t){var o=function(o,a){r||(a||It(o)?(n.cancel(),n(o,a)):(i[t]=o,c++,e()))};o.cancel=St,u[t]=o}),n.cancel=function(){r||(r=!0,o.forEach(function(t){return u[t].cancel()}))},u}function f(t){return{name:t.name||"anonymous",location:l(t)}}function l(t){return t[st]}function s(t,n){void 0===t&&(t=10);var e=new Array(t),r=0,o=0,a=0,c=function(n){e[o]=n,o=(o+1)%t,r++},i=function(){if(0!=r){var n=e[a];return e[a]=null,r--,a=(a+1)%t,n}},u=function(){for(var t=[];r;)t.push(i());return t};return{isEmpty:function(){return 0==r},put:function(i){if(r<t)c(i);else{var f;switch(n){case Pt:throw new Error(Mt);case Gt:e[o]=i,o=(o+1)%t,a=o;break;case Dt:f=2*t,e=u(),r=e.length,o=e.length,a=0,e.length=f,t=f,c(i)}}},take:i,flush:u}}function d(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return 0===n.length?function(t){return t}:1===n.length?n[0]:n.reduce(function(t,n){return function(){return t(n.apply(void 0,arguments))}})}function h(){var t={};return t.promise=new Promise(function(n,e){t.resolve=n,t.reject=e}),t}function v(t){try{g(),t()}finally{m()}}function p(t){dn.push(t),hn||(g(),E())}function y(t){try{return g(),t()}finally{E()}}function g(){hn++}function m(){hn--}function E(){m();for(var t;!hn&&void 0!==(t=dn.shift());)v(t)}function w(t){var n="*"===t?mn:yt(t)?yn:gt(t)?vn:wt(t)?yn:pt(t)?pn:bt(t)?gn:null;if(null===n)throw new Error("invalid pattern: "+t);return n(t)}function b(t){function n(n){if(!c){if(0===i.length)return t.put(n);i.shift()(n)}}function e(n){c&&t.isEmpty()?n(En):t.isEmpty()?(i.push(n),n.cancel=function(){o(i,n)}):n(t.take())}function r(n){if(c&&t.isEmpty())return void n(En);n(t.flush())}function a(){if(!c){c=!0;var t=i;i=[];for(var n=0,e=t.length;n<e;n++){(0,t[n])(En)}}}void 0===t&&(t=Xt());var c=!1,i=[];return{take:e,put:n,flush:r,close:a}}function x(t,n){void 0===n&&(n=qt());var e,r=!1,o=b(n),c=function(){r||(r=!0,pt(e)&&e(),o.close())};return e=t(function(t){if(wn(t))return void c();o.put(t)}),e=a(e),r&&e(),{take:o.take,flush:o.flush,close:c}}function S(){var t,n=!1,e=[],r=e,c=function(){r===e&&(r=e.slice())},i=function(){n=!0;var t=e=r;r=[],t.forEach(function(t){t(En)})};return t={},t[at]=!0,t.put=function(t){if(!n){if(wn(t))return void i();for(var o=e=r,a=0,c=o.length;a<c;a++){var u=o[a];u[ot](t)&&(u.cancel(),u(t))}}},t.take=function(t,e){if(void 0===e&&(e=mn),n)return void t(En);t[ot]=e,c(),r.push(t),t.cancel=a(function(){c(),o(r,t)})},t.close=i,t}function L(){var t=S(),n=t.put;return t.put=function(t){if(t[ct])return void n(t);p(function(){n(t)})},t}function k(t,n){var e=t[nt];pt(e)&&(n.cancel=e),t.then(n,function(t){n(t,!0)})}function O(t,n){return t.isSagaIterator?{name:t.meta.name}:f(n)}function A(t){var n=t.context,e=t.fn,r=t.args;try{var o=e.apply(n,r);if(Et(o))return o;var a=!1;return c(function(t){return a?{value:t,done:!0}:(a=!0,{value:o,done:!mt(o)})})}catch(t){return c(function(){throw t})}}function C(t,n,e){var r=n.channel,o=n.action,a=n.resolve;p(function(){var n;try{n=(r?r.put:t.dispatch)(o)}catch(t){return void e(t,!0)}a&&mt(n)?k(n,e):e(n)})}function j(t,n,e){var r=n.channel,o=void 0===r?t.channel:r,a=n.pattern,c=n.maybe,i=function(t){return t instanceof Error?void e(t,!0):wn(t)&&!c?void e(lt):void e(t)};try{o.take(i,vt(a)?w(a):null)}catch(t){return void e(t,!0)}e.cancel=i.cancel}function T(t,n,e,r){var o=n.context,a=n.fn,c=n.args,i=r.task;try{var u=a.apply(o,c);if(mt(u))return void k(u,e);if(Et(u))return void W(t,u,i.context,kn,f(a),!1,e);e(u)}catch(t){e(t,!0)}}function N(t,n,e){var r=n.context,o=n.fn,a=n.args;try{var c=function(t,n){ht(t)?e(n):e(t,!0)};o.apply(r,a.concat(c)),c.cancel&&(e.cancel=c.cancel)}catch(t){e(t,!0)}}function _(t,n,e,r){var o=n.context,a=n.fn,c=n.args,i=n.detached,u=r.task,f=A({context:o,fn:a,args:c}),l=O(f,a);y(function(){var n=W(t,f,u.context,kn,l,i,void 0);i?e(n):n.isRunning()?(u.queue.addTask(n),e(n)):n.isAborted()?u.queue.abort(n.error()):e(n)})}function R(t,n,e,r){var a=r.task,c=function(t,n){if(t.isRunning()){var e={task:a,cb:n};n.cancel=function(){t.isRunning()&&o(t.joiners,e)},t.joiners.push(e)}else t.isAborted()?n(t.error(),!0):n(t.result())};if(gt(n)){if(0===n.length)return void e([]);var i=u(n,e);n.forEach(function(t,n){c(t,i[n])})}else c(n,e)}function I(t){t.isRunning()&&t.cancel()}function M(t,n,e,r){var o=r.task;n===it?I(o):gt(n)?n.forEach(I):I(n),e()}function P(t,n,e,r){var o=r.digestEffect,a=kn,c=Object.keys(n);if(0===c.length)return void e(gt(n)?[]:{});var i=u(n,e);c.forEach(function(t){o(n[t],a,i[t],t)})}function G(t,n,e,r){var o=r.digestEffect,a=kn,c=Object.keys(n),i=gt(n)?Tt(c.length):{},u={},f=!1;c.forEach(function(t){var n=function(n,r){f||(r||It(n)?(e.cancel(),e(n,r)):(e.cancel(),f=!0,i[t]=n,e(i)))};n.cancel=St,u[t]=n}),e.cancel=function(){f||(f=!0,c.forEach(function(t){return u[t].cancel()}))},c.forEach(function(t){f||o(n[t],a,u[t],t)})}function D(t,n,e){var r=n.selector,o=n.args;try{var a=r.apply(void 0,[t.getState()].concat(o));e(a)}catch(t){e(t,!0)}}function F(t,n,e){var r=n.pattern,o=n.buffer,a=b(o),c=w(r),i=function n(e){wn(e)||t.channel.take(n,c),a.put(e)},u=a.close;a.close=function(){i.cancel(),u()},t.channel.take(i,c),e(a)}function q(t,n,e,r){e(r.task.isCancelled())}function H(t,n,e){n.flush(e)}function Y(t,n,e,r){e(r.task.context[n])}function K(t,n,e,r){var o=r.task;Ot(o.context,n),e()}function X(t,n,e){function r(t){n(),c(),e(t,!0)}function a(n){u.push(n),n.cont=function(a,c){f||(o(u,n),n.cont=St,c?r(a):(n===t&&(i=a),u.length||(f=!0,e(i))))}}function c(){f||(f=!0,u.forEach(function(t){t.cont=St,t.cancel()}),u=[])}var i,u=[],f=!1;return a(t),{addTask:a,cancelAll:c,abort:r,getTasks:function(){return u}}}function z(t,n){return t+"?"+n}function U(t){var n=l(t);if(n){return n.code+"  "+z(n.fileName,n.lineNumber)}return""}function B(t){var n=t.name,e=t.location;return e?n+"  "+z(e.fileName,e.lineNumber):n}function J(t){var n=At(function(t){return t.cancelledTasks},t);return n.length?["Tasks cancelled due to error:"].concat(n).join("\n"):""}function Q(t,n,e,r,o,a,c){function i(){v===bn&&(v=xn,m.cancelAll(),u(ft,!1))}function u(n,e){if(e){if(v=Sn,Tn({meta:o,cancelledTasks:y}),E.isRoot){var r=Rn();Nn(),t.onError(n,{sagaStack:r})}h=n,p&&p.reject(n)}else n===ft?v=xn:v!==xn&&(v=Ln),d=n,p&&p.resolve(n);E.cont(n,e),E.joiners.forEach(function(t){t.cb(n,e)}),E.joiners=null}function f(t){Ot(g,t)}function l(){return p?p.promise:(p=sn(),v===Sn?p.reject(h):v!==bn&&p.resolve(d),p.promise)}var s;void 0===c&&(c=St);var d,h,v=bn,p=null,y=[],g=Object.create(e),m=X(n,function(){y.push.apply(y,m.getTasks().map(function(t){return t.meta.name}))},u),E=(s={},s[ut]=!0,s.id=r,s.meta=o,s.isRoot=a,s.context=g,s.joiners=[],s.queue=m,s.cancel=i,s.cont=c,s.end=u,s.setContext=f,s.toPromise=l,s.isRunning=function(){return v===bn},s.isCancelled=function(){return v===xn||v===bn&&n.status===xn},s.isAborted=function(){return v===Sn},s.result=function(){return d},s.error=function(){return h},s);return E}function W(t,n,e,r,o,a,c){function i(){d.status===bn&&(d.status=xn,u(ft))}function u(t,e){try{var o;e?(o=n.throw(t),Nn()):Rt(t)?(d.status=xn,u.cancel(),o=pt(n.return)?n.return(ft):{done:!0,value:ft}):o=_t(t)?pt(n.return)?n.return():{done:!0}:n.next(t),o.done?(d.status!==xn&&(d.status=Ln),d.cont(o.value)):l(o.value,r,u)}catch(t){if(d.status===xn)throw t;d.status=Sn,d.cont(t,!0)}}function f(n,e,r){if(mt(n))k(n,r);else if(Et(n))W(t,n,h.context,e,o,!1,r);else if(n&&n[rt]){var a=An[n.type];a(t,n.payload,r,v)}else r(n)}function l(n,e,r,o){function a(e,o){i||(i=!0,r.cancel=St,t.sagaMonitor&&(o?t.sagaMonitor.effectRejected(c,e):t.sagaMonitor.effectResolved(c,e)),o&&_n(n),r(e,o))}void 0===o&&(o="");var c=On();t.sagaMonitor&&t.sagaMonitor.effectTriggered({effectId:c,parentEffectId:e,label:o,effect:n});var i;a.cancel=St,r.cancel=function(){i||(i=!0,a.cancel(),a.cancel=St,t.sagaMonitor&&t.sagaMonitor.effectCancelled(c))},s(n,c,a)}var s=t.finalizeRunEffect(f);u.cancel=St;var d={meta:o,cancel:i,status:bn},h=Q(t,d,e,r,o,a,c),v={task:h,digestEffect:l};return c&&(c.cancel=h.cancel),u(),h}function Z(t,n){for(var e=t.channel,r=void 0===e?L():e,o=t.dispatch,a=t.getState,c=t.context,u=void 0===c?{}:c,l=t.sagaMonitor,s=t.effectMiddlewares,h=t.onError,v=void 0===h?i:h,p=arguments.length,g=new Array(p>2?p-2:0),m=2;m<p;m++)g[m-2]=arguments[m];var E=n.apply(void 0,g),w=On();l&&(l.rootSagaStarted=l.rootSagaStarted||St,l.effectTriggered=l.effectTriggered||St,l.effectResolved=l.effectResolved||St,l.effectRejected=l.effectRejected||St,l.effectCancelled=l.effectCancelled||St,l.actionDispatched=l.actionDispatched||St,l.rootSagaStarted({effectId:w,saga:n,args:g}));var b;if(s){var x=d.apply(void 0,s);b=function(t){return function(n,e,r){return x(function(n){return t(n,e,r)})(n)}}}else b=Lt;var S={channel:r,dispatch:Nt(o),getState:a,sagaMonitor:l,onError:v,finalizeRunEffect:b};return y(function(){var t=W(S,E,u,w,f(n),!0,void 0);return l&&l.effectResolved(w,t),t})}function V(t){function n(t){var n=t.getState,r=t.dispatch;return e=Z.bind(null,Object(dt.a)({},l,{context:c,channel:u,dispatch:r,getState:n,sagaMonitor:f})),function(t){return function(n){f&&f.actionDispatched&&f.actionDispatched(n);var e=t(n);return u.put(n),e}}}var e,o=void 0===t?{}:t,a=o.context,c=void 0===a?{}:a,i=o.channel,u=void 0===i?L():i,f=o.sagaMonitor,l=r(o,["context","channel","sagaMonitor"]);return n.run=function(){return e.apply(void 0,arguments)},n.setContext=function(t){Ot(c,t)},n}Object.defineProperty(n,"__esModule",{value:!0});var $,tt=function(t){return"@@redux-saga/"+t},nt=tt("CANCEL_PROMISE"),et=tt("CHANNEL_END"),rt=tt("IO"),ot=tt("MATCH"),at=tt("MULTICAST"),ct=tt("SAGA_ACTION"),it=tt("SELF_CANCELLATION"),ut=tt("TASK"),ft=tt("TASK_CANCEL"),lt=tt("TERMINATE"),st=tt("LOCATION"),dt=e("RfZZ"),ht=function(t){return null===t||void 0===t},vt=function(t){return null!==t&&void 0!==t},pt=function(t){return"function"==typeof t},yt=function(t){return"string"==typeof t},gt=Array.isArray,mt=function(t){return t&&pt(t.then)},Et=function(t){return t&&pt(t.next)&&pt(t.throw)},wt=function(t){return pt(t)&&t.hasOwnProperty("toString")},bt=function(t){return Boolean(t)&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype},xt=function(t){return function(){return t}}(!0),St=function(){},Lt=function(t){return t},kt="function"==typeof Symbol,Ot=(kt&&Symbol.asyncIterator&&Symbol.asyncIterator,function(t,n){Object(dt.a)(t,n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(n).forEach(function(e){t[e]=n[e]})}),At=function(t,n){var e;return(e=[]).concat.apply(e,n.map(t))},Ct=function(t){throw t},jt=function(t){return{value:t,done:!0}},Tt=function(t){return Array.apply(null,new Array(t))},Nt=function(t){return function(n){return t(Object.defineProperty(n,ct,{value:!0}))}},_t=function(t){return t===lt},Rt=function(t){return t===ft},It=function(t){return _t(t)||Rt(t)},Mt="Channel's Buffer overflow!",Pt=1,Gt=3,Dt=4,Ft={isEmpty:xt,put:St,take:St},qt=function(){return Ft},Ht=function(t){return s(t,Pt)},Yt=function(t){return s(t,2)},Kt=function(t){return s(t,Gt)},Xt=function(t){return s(t,Dt)},zt=Object.freeze({__proto__:null,none:qt,fixed:Ht,dropping:Yt,sliding:Kt,expanding:Xt}),Ut="TAKE",Bt="PUT",Jt="ALL",Qt="RACE",Wt="CALL",Zt="CPS",Vt="FORK",$t="JOIN",tn="CANCEL",nn="SELECT",en="ACTION_CHANNEL",rn="CANCELLED",on="FLUSH",an="GET_CONTEXT",cn="SET_CONTEXT",un=function(t,n){var e;return e={},e[rt]=!0,e.combinator=!1,e.type=t,e.payload=n,e},fn=function(t){return un(Vt,Object(dt.a)({},t.payload,{detached:!0}))},ln=(function(){"function"==typeof Symbol&&Symbol.observable}(),function(){return Math.random().toString(36).substring(7).split("").join(".")}),sn=(ln(),ln(),h),dn=[],hn=0,vn=function(t){return function(n){return t.some(function(t){return w(t)(n)})}},pn=function(t){return function(n){return t(n)}},yn=function(t){return function(n){return n.type===String(t)}},gn=function(t){return function(n){return n.type===t}},mn=function(){return xt},En={type:et},wn=function(t){return t&&t.type===et},bn=0,xn=1,Sn=2,Ln=3,kn=0,On=function(){return++kn},An=($={},$[Ut]=j,$[Bt]=C,$[Jt]=P,$[Qt]=G,$[Wt]=T,$[Zt]=N,$[Vt]=_,$[$t]=R,$[tn]=M,$[nn]=D,$[en]=F,$[rn]=q,$[on]=H,$[an]=Y,$[cn]=K,$),Cn=null,jn=[],Tn=function(t){t.crashedEffect=Cn,jn.push(t)},Nn=function(){Cn=null,jn.length=0},_n=function(t){Cn=t},Rn=function(){var t=jn[0],n=jn.slice(1),e=t.crashedEffect?U(t.crashedEffect):null;return["The above error occurred in task "+B(t.meta)+(e?" \n when executing effect "+e:"")].concat(n.map(function(t){return"    created by "+B(t.meta)}),[J(jn)]).join("\n")},In=V;e.d(n,"CANCEL",function(){return nt}),e.d(n,"SAGA_LOCATION",function(){return st}),e.d(n,"buffers",function(){return zt}),e.d(n,"detach",function(){return fn}),e.d(n,"END",function(){return En}),e.d(n,"channel",function(){return b}),e.d(n,"eventChannel",function(){return x}),e.d(n,"isEnd",function(){return wn}),e.d(n,"multicastChannel",function(){return S}),e.d(n,"runSaga",function(){return Z}),e.d(n,"stdChannel",function(){return L});n.default=In}});