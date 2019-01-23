var vendor_7acd1d2=function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,r){"use strict";function n(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function o(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}function i(t,e){for(var r in e)t[r]=e[r];return t}function a(t,e,r){void 0===e&&(e={});var n,o=r||u;try{n=o(t||"")}catch(t){n={}}for(var i in e)n[i]=e[i];return n}function u(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var r=t.replace(/\+/g," ").split("="),n=It(r.shift()),o=r.length>0?It(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]}),e):e}function c(t){var e=t?Object.keys(t).map(function(e){var r=t[e];if(void 0===r)return"";if(null===r)return Ht(e);if(Array.isArray(r)){var n=[];return r.forEach(function(t){void 0!==t&&(null===t?n.push(Ht(e)):n.push(Ht(e)+"="+Ht(t)))}),n.join("&")}return Ht(e)+"="+Ht(r)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function s(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=p(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:h(e,o),matched:t?f(t):[]};return r&&(a.redirectedFrom=h(r,o)),Object.freeze(a)}function p(t){if(Array.isArray(t))return t.map(p);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=p(t[r]);return e}return t}function f(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function h(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;void 0===o&&(o="");var i=e||c;return(r||"/")+i(n)+o}function l(t,e){return e===Bt?t===e:!!e&&(t.path&&e.path?t.path.replace(zt,"")===e.path.replace(zt,"")&&t.hash===e.hash&&d(t.query,e.query):!(!t.name||!e.name)&&t.name===e.name&&t.hash===e.hash&&d(t.query,e.query)&&d(t.params,e.params))}function d(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every(function(r){var n=t[r],o=e[r];return"object"==typeof n&&"object"==typeof o?d(n,o):String(n)===String(o)})}function y(t,e){return 0===t.path.replace(zt,"/").indexOf(e.path.replace(zt,"/"))&&(!e.hash||t.hash===e.hash)&&v(t.query,e.query)}function v(t,e){for(var r in e)if(!(r in t))return!1;return!0}function m(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute&&/\b_blank\b/i.test(t.currentTarget.getAttribute("target")))return;return t.preventDefault&&t.preventDefault(),!0}}function g(t){if(t)for(var e,r=0;r<t.length;r++){if(e=t[r],"a"===e.tag)return e;if(e.children&&(e=g(e.children)))return e}}function b(t){if(!b.installed||Pt!==t){b.installed=!0,Pt=t;var e=function(t){return void 0!==t},r=function(t,r){var n=t.$options._parentVnode;e(n)&&e(n=n.data)&&e(n=n.registerRouteInstance)&&n(t,r)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("router-view",qt),t.component("router-link",Dt);var n=t.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}function w(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function x(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}function k(t){return t.replace(/\/\//g,"/")}function E(t,e){for(var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(r=Gt.exec(t));){var c=r[0],s=r[1],p=r.index;if(a+=t.slice(i,p),i=p+c.length,s)a+=s[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],y=r[5],v=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,b="+"===v||"*"===v,w="?"===v||"*"===v,x=r[2]||u,k=d||y;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:k?A(k):m?".*":"[^"+C(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function R(t,e){return j(E(t,e))}function O(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function _(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function j(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,n){for(var o="",i=r||{},a=n||{},u=a.pretty?O:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if("string"!=typeof s){var p,f=i[s.name];if(null==f){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(Jt(f)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!e[c].test(p))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===h?s.prefix:s.delimiter)+p}}else{if(p=s.asterisk?_(f):u(f),!e[c].test(p))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+p+'"');o+=s.prefix+p}}else o+=s}return o}}function C(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function T(t,e){return t.keys=e,t}function S(t){return t.sensitive?"":"i"}function $(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return T(t,e)}function P(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(U(t[o],e,r).source);return T(new RegExp("(?:"+n.join("|")+")",S(r)),e)}function q(t,e,r){return L(E(t,r),e,r)}function L(t,e,r){Jt(e)||(r=e||r,e=[]),r=r||{};for(var n=r.strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=C(u);else{var c=C(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")",i+=s}}var p=C(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",T(new RegExp("^"+i,S(r)),e)}function U(t,e,r){return Jt(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?$(t,e):Jt(t)?P(t,e,r):q(t,e,r)}function M(t,e,r){try{return(Zt[t]||(Zt[t]=Nt.compile(t)))(e||{},{pretty:!0})}catch(t){return""}}function H(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach(function(t){I(o,i,a,t)});for(var u=0,c=o.length;u<c;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),c--,u--);return{pathList:o,pathMap:i,nameMap:a}}function I(t,e,r,n,o,i){var a=n.path,u=n.name,c=n.pathToRegexpOptions||{},s=B(a,o,c.strict);"boolean"==typeof n.caseSensitive&&(c.sensitive=n.caseSensitive);var p={path:s,regex:z(s,c),components:n.components||{default:n.component},instances:{},name:u,parent:o,matchAs:i,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:null==n.props?{}:n.components?n.props:{default:n.props}};n.children&&n.children.forEach(function(n){var o=i?k(i+"/"+n.path):void 0;I(t,e,r,n,p,o)}),void 0!==n.alias&&(Array.isArray(n.alias)?n.alias:[n.alias]).forEach(function(i){var a={path:i,children:n.children};I(t,e,r,a,o,p.path||"/")}),e[p.path]||(t.push(p.path),e[p.path]=p),u&&(r[u]||(r[u]=p))}function z(t,e){return Nt(t,[],e)}function B(t,e,r){return r||(t=t.replace(/\/$/,"")),"/"===t[0]?t:null==e?t:k(e.path+"/"+t)}function V(t,e,r,n){var o="string"==typeof t?{path:t}:t;if(o.name||o._normalized)return o;if(!o.path&&o.params&&e){o=F({},o),o._normalized=!0;var i=F(F({},e.params),o.params);if(e.name)o.name=e.name,o.params=i;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;o.path=M(u,i,"path "+e.path)}return o}var c=x(o.path||""),s=e&&e.path||"/",p=c.path?w(c.path,s,r||o.append):s,f=a(c.query,o.query,n&&n.options.parseQuery),h=o.hash||c.hash;return h&&"#"!==h.charAt(0)&&(h="#"+h),{_normalized:!0,path:p,query:f,hash:h}}function F(t,e){for(var r in e)t[r]=e[r];return t}function D(t,e){function r(t){H(t,c,p,f)}function n(t,r,n){var o=V(t,r,!1,e),i=o.name;if(i){var u=f[i];if(!u)return a(null,o);var s=u.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof o.params&&(o.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in o.params)&&s.indexOf(h)>-1&&(o.params[h]=r.params[h]);if(u)return o.path=M(u.path,o.params,'named route "'+i+'"'),a(u,o,n)}else if(o.path){o.params={};for(var l=0;l<c.length;l++){var d=c[l],y=p[d];if(K(y.regex,o.path,o.params))return a(y,o,n)}}return a(null,o)}function o(t,r){var o=t.redirect,i="function"==typeof o?o(s(t,r,null,e)):o;if("string"==typeof i&&(i={path:i}),!i||"object"!=typeof i)return a(null,r);var u=i,c=u.name,p=u.path,h=r.query,l=r.hash,d=r.params;if(h=u.hasOwnProperty("query")?u.query:h,l=u.hasOwnProperty("hash")?u.hash:l,d=u.hasOwnProperty("params")?u.params:d,c)return f[c],n({_normalized:!0,name:c,query:h,hash:l,params:d},void 0,r);if(p){var y=J(p,t);return n({_normalized:!0,path:M(y,d,'redirect route with path "'+y+'"'),query:h,hash:l},void 0,r)}return a(null,r)}function i(t,e,r){var o=M(r,e.params,'aliased route with path "'+r+'"'),i=n({_normalized:!0,path:o});if(i){var u=i.matched,c=u[u.length-1];return e.params=i.params,a(c,e)}return a(null,e)}function a(t,r,n){return t&&t.redirect?o(t,n||r):t&&t.matchAs?i(t,r,t.matchAs):s(t,r,n,e)}var u=H(t),c=u.pathList,p=u.pathMap,f=u.nameMap;return{match:n,addRoutes:r}}function K(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name]=u)}return!0}function J(t,e){return w(t,e.parent?e.parent.path:"/",!0)}function N(){window.history.replaceState({key:ot()},""),window.addEventListener("popstate",function(t){X(),t.state&&t.state.key&&it(t.state.key)})}function Q(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick(function(){var t=Y(),i=o(e,r,n?t:null);i&&("function"==typeof i.then?i.then(function(e){rt(e,t)}).catch(function(t){}):rt(i,t))})}}function X(){var t=ot();t&&(te[t]={x:window.pageXOffset,y:window.pageYOffset})}function Y(){var t=ot();if(t)return te[t]}function W(t,e){var r=document.documentElement,n=r.getBoundingClientRect(),o=t.getBoundingClientRect();return{x:o.left-n.left-e.x,y:o.top-n.top-e.y}}function G(t){return et(t.x)||et(t.y)}function Z(t){return{x:et(t.x)?t.x:window.pageXOffset,y:et(t.y)?t.y:window.pageYOffset}}function tt(t){return{x:et(t.x)?t.x:0,y:et(t.y)?t.y:0}}function et(t){return"number"==typeof t}function rt(t,e){var r="object"==typeof t;if(r&&"string"==typeof t.selector){var n=document.querySelector(t.selector);if(n){var o=t.offset&&"object"==typeof t.offset?t.offset:{};o=tt(o),e=W(n,o)}else G(t)&&(e=Z(t))}else r&&G(t)&&(e=Z(t));e&&window.scrollTo(e.x,e.y)}function nt(){return re.now().toFixed(3)}function ot(){return ne}function it(t){ne=t}function at(t,e){X();var r=window.history;try{e?r.replaceState({key:ne},"",t):(ne=nt(),r.pushState({key:ne},"",t))}catch(r){window.location[e?"replace":"assign"](t)}}function ut(t){at(t,!0)}function ct(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],function(){n(o+1)}):n(o+1)};n(0)}function st(t){return function(e,r,o){var i=!1,a=0,u=null;pt(t,function(t,e,r,c){if("function"==typeof t&&void 0===t.cid){i=!0,a++;var s,p=lt(function(e){ht(e)&&(e=e.default),t.resolved="function"==typeof e?e:Pt.extend(e),r.components[c]=e,--a<=0&&o()}),f=lt(function(t){var e="Failed to resolve async component "+c+": "+t;u||(u=n(t)?t:new Error(e),o(u))});try{s=t(p,f)}catch(t){f(t)}if(s)if("function"==typeof s.then)s.then(p,f);else{var h=s.component;h&&"function"==typeof h.then&&h.then(p,f)}}}),i||o()}}function pt(t,e){return ft(t.map(function(t){return Object.keys(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r)})}))}function ft(t){return Array.prototype.concat.apply([],t)}function ht(t){return t.__esModule||oe&&"Module"===t[Symbol.toStringTag]}function lt(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}function dt(t){if(!t)if(Kt){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function yt(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}function vt(t,e,r,n){var o=pt(t,function(t,n,o,i){var a=mt(t,e);if(a)return Array.isArray(a)?a.map(function(t){return r(t,n,o,i)}):r(a,n,o,i)});return ft(n?o.reverse():o)}function mt(t,e){return"function"!=typeof t&&(t=Pt.extend(t)),t.options[e]}function gt(t){return vt(t,"beforeRouteLeave",wt,!0)}function bt(t){return vt(t,"beforeRouteUpdate",wt)}function wt(t,e){if(e)return function(){return t.apply(e,arguments)}}function xt(t,e,r){return vt(t,"beforeRouteEnter",function(t,n,o,i){return kt(t,o,i,e,r)})}function kt(t,e,r,n,o){return function(i,a,u){return t(i,a,function(t){u(t),"function"==typeof t&&n.push(function(){Et(t,e.instances,r,o)})})}}function Et(t,e,r,n){e[r]?t(e[r]):n()&&setTimeout(function(){Et(t,e,r,n)},16)}function Rt(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function Ot(t){var e=Rt(t);if(!/^\/#/.test(e))return window.location.replace(k(t+"/#"+e)),!0}function _t(){var t=jt();return"/"===t.charAt(0)||(Tt("/"+t),!1)}function jt(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function Ct(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function At(t){ee?at(Ct(t)):window.location.hash=t}function Tt(t){ee?ut(Ct(t)):window.location.replace(Ct(t))}function St(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function $t(t,e,r){var n="hash"===r?"#"+e:e;return t?k(t+"/"+n):n}Object.defineProperty(e,"__esModule",{value:!0});var Pt,qt={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,n=e.children,a=e.parent,u=e.data;u.routerView=!0;for(var c=a.$createElement,s=r.name,p=a.$route,f=a._routerViewCache||(a._routerViewCache={}),h=0,l=!1;a&&a._routerRoot!==a;)a.$vnode&&a.$vnode.data.routerView&&h++,a._inactive&&(l=!0),a=a.$parent;if(u.routerViewDepth=h,l)return c(f[s],u,n);var d=p.matched[h];if(!d)return f[s]=null,c();var y=f[s]=d.components[s];u.registerRouteInstance=function(t,e){var r=d.instances[s];(e&&r!==t||!e&&r===t)&&(d.instances[s]=e)},(u.hook||(u.hook={})).prepatch=function(t,e){d.instances[s]=e.componentInstance};var v=u.props=o(p,d.props&&d.props[s]);if(v){v=u.props=i({},v);var m=u.attrs=u.attrs||{};for(var g in v)y.props&&g in y.props||(m[g]=v[g],delete v[g])}return c(y,u,n)}},Lt=/[!'()*]/g,Ut=function(t){return"%"+t.charCodeAt(0).toString(16)},Mt=/%2C/g,Ht=function(t){return encodeURIComponent(t).replace(Lt,Ut).replace(Mt,",")},It=decodeURIComponent,zt=/\/?$/,Bt=s(null,{path:"/"}),Vt=[String,Object],Ft=[String,Array],Dt={name:"router-link",props:{to:{type:Vt,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:Ft,default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,o=r.resolve(this.to,n,this.append),i=o.location,a=o.route,u=o.href,c={},p=r.options.linkActiveClass,f=r.options.linkExactActiveClass,h=null==p?"router-link-active":p,d=null==f?"router-link-exact-active":f,v=null==this.activeClass?h:this.activeClass,b=null==this.exactActiveClass?d:this.exactActiveClass,w=i.path?s(null,i,null,r):a;c[b]=l(n,w),c[v]=this.exact?c[b]:y(n,w);var x=function(t){m(t)&&(e.replace?r.replace(i):r.push(i))},k={click:m};Array.isArray(this.event)?this.event.forEach(function(t){k[t]=x}):k[this.event]=x;var E={class:c};if("a"===this.tag)E.on=k,E.attrs={href:u};else{var R=g(this.$slots.default);if(R){R.isStatic=!1;var O=Pt.util.extend;(R.data=O({},R.data)).on=k,(R.data.attrs=O({},R.data.attrs)).href=u}else E.on=k}return t(this.tag,E,this.$slots.default)}},Kt="undefined"!=typeof window,Jt=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Nt=U,Qt=E,Xt=R,Yt=j,Wt=L,Gt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");Nt.parse=Qt,Nt.compile=Xt,Nt.tokensToFunction=Yt,Nt.tokensToRegExp=Wt;var Zt=Object.create(null),te=Object.create(null),ee=Kt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history}(),re=Kt&&window.performance&&window.performance.now?window.performance:Date,ne=nt(),oe="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,ie=function(t,e){this.router=t,this.base=dt(e),this.current=Bt,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};ie.prototype.listen=function(t){this.cb=t},ie.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},ie.prototype.onError=function(t){this.errorCbs.push(t)},ie.prototype.transitionTo=function(t,e,r){var n=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){n.updateRoute(o),e&&e(o),n.ensureURL(),n.ready||(n.ready=!0,n.readyCbs.forEach(function(t){t(o)}))},function(t){r&&r(t),t&&!n.ready&&(n.ready=!0,n.readyErrorCbs.forEach(function(e){e(t)}))})},ie.prototype.confirmTransition=function(t,e,r){var o=this,i=this.current,a=function(t){n(t)&&(o.errorCbs.length&&o.errorCbs.forEach(function(e){e(t)})),r&&r(t)};if(l(t,i)&&t.matched.length===i.matched.length)return this.ensureURL(),a();var u=yt(this.current.matched,t.matched),c=u.updated,s=u.deactivated,p=u.activated,f=[].concat(gt(s),this.router.beforeHooks,bt(c),p.map(function(t){return t.beforeEnter}),st(p));this.pending=t;var h=function(e,r){if(o.pending!==t)return a();try{e(t,i,function(t){!1===t||n(t)?(o.ensureURL(!0),a(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(a(),"object"==typeof t&&t.replace?o.replace(t):o.push(t)):r(t)})}catch(t){a(t)}};ct(f,h,function(){var r=[];ct(xt(p,r,function(){return o.current===t}).concat(o.router.resolveHooks),h,function(){if(o.pending!==t)return a();o.pending=null,e(t),o.router.app&&o.router.app.$nextTick(function(){r.forEach(function(t){t()})})})})},ie.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(r){r&&r(t,e)})};var ae=function(t){function e(e,r){var n=this;t.call(this,e,r);var o=e.options.scrollBehavior;o&&N();var i=Rt(this.base);window.addEventListener("popstate",function(t){var r=n.current,a=Rt(n.base);n.current===Bt&&a===i||n.transitionTo(a,function(t){o&&Q(e,t,r,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,function(t){at(k(n.base+t.fullPath)),Q(n.router,t,i,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,function(t){ut(k(n.base+t.fullPath)),Q(n.router,t,i,!1),e&&e(t)},r)},e.prototype.ensureURL=function(t){if(Rt(this.base)!==this.current.fullPath){var e=k(this.base+this.current.fullPath);t?at(e):ut(e)}},e.prototype.getCurrentLocation=function(){return Rt(this.base)},e}(ie),ue=function(t){function e(e,r,n){t.call(this,e,r),n&&Ot(this.base)||_t()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router,r=e.options.scrollBehavior,n=ee&&r;n&&N(),window.addEventListener(ee?"popstate":"hashchange",function(){var e=t.current;_t()&&t.transitionTo(jt(),function(r){n&&Q(t.router,r,e,!0),ee||Tt(r.fullPath)})})},e.prototype.push=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,function(t){At(t.fullPath),Q(n.router,t,i,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,function(t){Tt(t.fullPath),Q(n.router,t,i,!1),e&&e(t)},r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;jt()!==e&&(t?At(e):Tt(e))},e.prototype.getCurrentLocation=function(){return jt()},e}(ie),ce=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)},r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,function(){e.index=r,e.updateRoute(n)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(ie),se=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=D(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!ee&&!1!==t.fallback,this.fallback&&(e="hash"),Kt||(e="abstract"),this.mode=e,e){case"history":this.history=new ae(this,t.base);break;case"hash":this.history=new ue(this,t.base,this.fallback);break;case"abstract":this.history=new ce(this,t.base)}},pe={currentRoute:{configurable:!0}};se.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},pe.currentRoute.get=function(){return this.history&&this.history.current},se.prototype.init=function(t){var e=this;if(this.apps.push(t),!this.app){this.app=t;var r=this.history;if(r instanceof ae)r.transitionTo(r.getCurrentLocation());else if(r instanceof ue){var n=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},se.prototype.beforeEach=function(t){return St(this.beforeHooks,t)},se.prototype.beforeResolve=function(t){return St(this.resolveHooks,t)},se.prototype.afterEach=function(t){return St(this.afterHooks,t)},se.prototype.onReady=function(t,e){this.history.onReady(t,e)},se.prototype.onError=function(t){this.history.onError(t)},se.prototype.push=function(t,e,r){this.history.push(t,e,r)},se.prototype.replace=function(t,e,r){this.history.replace(t,e,r)},se.prototype.go=function(t){this.history.go(t)},se.prototype.back=function(){this.go(-1)},se.prototype.forward=function(){this.go(1)},se.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},se.prototype.resolve=function(t,e,r){var n=V(t,e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:$t(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},se.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==Bt&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(se.prototype,pe),se.install=b,se.version="2.8.1",Kt&&window.Vue&&window.Vue.use(se),e.default=se},function(t,e,r){t.exports=r}]);