(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function jl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ih(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var Gc={exports:{}},Bl={},Xc={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),ah=Symbol.for("react.portal"),sh=Symbol.for("react.fragment"),uh=Symbol.for("react.strict_mode"),ch=Symbol.for("react.profiler"),dh=Symbol.for("react.provider"),fh=Symbol.for("react.context"),ph=Symbol.for("react.forward_ref"),hh=Symbol.for("react.suspense"),mh=Symbol.for("react.memo"),gh=Symbol.for("react.lazy"),hu=Symbol.iterator;function vh(e){return e===null||typeof e!="object"?null:(e=hu&&e[hu]||e["@@iterator"],typeof e=="function"?e:null)}var Kc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zc=Object.assign,Jc={};function Cr(e,t,n){this.props=e,this.context=t,this.refs=Jc,this.updater=n||Kc}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qc(){}qc.prototype=Cr.prototype;function rs(e,t,n){this.props=e,this.context=t,this.refs=Jc,this.updater=n||Kc}var os=rs.prototype=new qc;os.constructor=rs;Zc(os,Cr.prototype);os.isPureReactComponent=!0;var mu=Array.isArray,ed=Object.prototype.hasOwnProperty,ls={current:null},td={key:!0,ref:!0,__self:!0,__source:!0};function nd(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)ed.call(t,r)&&!td.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:wo,type:e,key:l,ref:i,props:o,_owner:ls.current}}function yh(e,t){return{$$typeof:wo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function is(e){return typeof e=="object"&&e!==null&&e.$$typeof===wo}function wh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gu=/\/+/g;function ki(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wh(""+e.key):t.toString(36)}function Zo(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case wo:case ah:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+ki(i,0):r,mu(o)?(n="",e!=null&&(n=e.replace(gu,"$&/")+"/"),Zo(o,t,n,"",function(c){return c})):o!=null&&(is(o)&&(o=yh(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(gu,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",mu(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+ki(l,a);i+=Zo(l,t,n,s,o)}else if(s=vh(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+ki(l,a++),i+=Zo(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function To(e,t,n){if(e==null)return e;var r=[],o=0;return Zo(e,r,"","",function(l){return t.call(n,l,o++)}),r}function xh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},Jo={transition:null},kh={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Jo,ReactCurrentOwner:ls};te.Children={map:To,forEach:function(e,t,n){To(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return To(e,function(){t++}),t},toArray:function(e){return To(e,function(t){return t})||[]},only:function(e){if(!is(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=Cr;te.Fragment=sh;te.Profiler=ch;te.PureComponent=rs;te.StrictMode=uh;te.Suspense=hh;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kh;te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zc({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=ls.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)ed.call(t,s)&&!td.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:wo,type:e.type,key:o,ref:l,props:r,_owner:i}};te.createContext=function(e){return e={$$typeof:fh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dh,_context:e},e.Consumer=e};te.createElement=nd;te.createFactory=function(e){var t=nd.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:ph,render:e}};te.isValidElement=is;te.lazy=function(e){return{$$typeof:gh,_payload:{_status:-1,_result:e},_init:xh}};te.memo=function(e,t){return{$$typeof:mh,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=Jo.transition;Jo.transition={};try{e()}finally{Jo.transition=t}};te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};te.useCallback=function(e,t){return Ue.current.useCallback(e,t)};te.useContext=function(e){return Ue.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};te.useEffect=function(e,t){return Ue.current.useEffect(e,t)};te.useId=function(){return Ue.current.useId()};te.useImperativeHandle=function(e,t,n){return Ue.current.useImperativeHandle(e,t,n)};te.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return Ue.current.useMemo(e,t)};te.useReducer=function(e,t,n){return Ue.current.useReducer(e,t,n)};te.useRef=function(e){return Ue.current.useRef(e)};te.useState=function(e){return Ue.current.useState(e)};te.useSyncExternalStore=function(e,t,n){return Ue.current.useSyncExternalStore(e,t,n)};te.useTransition=function(){return Ue.current.useTransition()};te.version="18.2.0";Xc.exports=te;var y=Xc.exports;const k=jl(y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sh=y,Eh=Symbol.for("react.element"),bh=Symbol.for("react.fragment"),Ah=Object.prototype.hasOwnProperty,Ch=Sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$h={key:!0,ref:!0,__self:!0,__source:!0};function rd(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Ah.call(t,r)&&!$h.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Eh,type:e,key:l,ref:i,props:o,_owner:Ch.current}}Bl.Fragment=bh;Bl.jsx=rd;Bl.jsxs=rd;Gc.exports=Bl;var A=Gc.exports,ea={},od={exports:{}},it={},ld={exports:{}},id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,M){var Q=$.length;$.push(M);e:for(;0<Q;){var ne=Q-1>>>1,O=$[ne];if(0<o(O,M))$[ne]=M,$[Q]=O,Q=ne;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var M=$[0],Q=$.pop();if(Q!==M){$[0]=Q;e:for(var ne=0,O=$.length,D=O>>>1;ne<D;){var N=2*(ne+1)-1,z=$[N],v=N+1,W=$[v];if(0>o(z,Q))v<O&&0>o(W,z)?($[ne]=W,$[v]=Q,ne=v):($[ne]=z,$[N]=Q,ne=N);else if(v<O&&0>o(W,Q))$[ne]=W,$[v]=Q,ne=v;else break e}}return M}function o($,M){var Q=$.sortIndex-M.sortIndex;return Q!==0?Q:$.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],c=[],h=1,p=null,m=3,S=!1,x=!1,E=!1,T=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d($){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=$)r(c),M.sortIndex=M.expirationTime,t(s,M);else break;M=n(c)}}function g($){if(E=!1,d($),!x)if(n(s)!==null)x=!0,me(w);else{var M=n(c);M!==null&&ae(g,M.startTime-$)}}function w($,M){x=!1,E&&(E=!1,f(R),R=-1),S=!0;var Q=m;try{for(d(M),p=n(s);p!==null&&(!(p.expirationTime>M)||$&&!q());){var ne=p.callback;if(typeof ne=="function"){p.callback=null,m=p.priorityLevel;var O=ne(p.expirationTime<=M);M=e.unstable_now(),typeof O=="function"?p.callback=O:p===n(s)&&r(s),d(M)}else r(s);p=n(s)}if(p!==null)var D=!0;else{var N=n(c);N!==null&&ae(g,N.startTime-M),D=!1}return D}finally{p=null,m=Q,S=!1}}var b=!1,C=null,R=-1,Y=5,U=-1;function q(){return!(e.unstable_now()-U<Y)}function K(){if(C!==null){var $=e.unstable_now();U=$;var M=!0;try{M=C(!0,$)}finally{M?re():(b=!1,C=null)}}else b=!1}var re;if(typeof u=="function")re=function(){u(K)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ee=oe.port2;oe.port1.onmessage=K,re=function(){ee.postMessage(null)}}else re=function(){T(K,0)};function me($){C=$,b||(b=!0,re())}function ae($,M){R=T(function(){$(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){x||S||(x=!0,me(w))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function($){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var Q=m;m=M;try{return $()}finally{m=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,M){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Q=m;m=$;try{return M()}finally{m=Q}},e.unstable_scheduleCallback=function($,M,Q){var ne=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ne+Q:ne):Q=ne,$){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Q+O,$={id:h++,callback:M,priorityLevel:$,startTime:Q,expirationTime:O,sortIndex:-1},Q>ne?($.sortIndex=Q,t(c,$),n(s)===null&&$===n(c)&&(E?(f(R),R=-1):E=!0,ae(g,Q-ne))):($.sortIndex=O,t(s,$),x||S||(x=!0,me(w))),$},e.unstable_shouldYield=q,e.unstable_wrapCallback=function($){var M=m;return function(){var Q=m;m=M;try{return $.apply(this,arguments)}finally{m=Q}}}})(id);ld.exports=id;var Th=ld.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad=y,lt=Th;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sd=new Set,qr={};function Bn(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(qr[e]=t,e=0;e<t.length;e++)sd.add(t[e])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ta=Object.prototype.hasOwnProperty,Dh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vu={},yu={};function Ph(e){return ta.call(yu,e)?!0:ta.call(vu,e)?!1:Dh.test(e)?yu[e]=!0:(vu[e]=!0,!1)}function Nh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _h(e,t,n,r){if(t===null||typeof t>"u"||Nh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var as=/[\-:]([a-z])/g;function ss(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(as,ss);Le[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(as,ss);Le[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(as,ss);Le[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function us(e,t,n,r){var o=Le.hasOwnProperty(t)?Le[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_h(t,n,o,r)&&(n=null),r||o===null?Ph(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Yt=ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Do=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),cs=Symbol.for("react.strict_mode"),na=Symbol.for("react.profiler"),ud=Symbol.for("react.provider"),cd=Symbol.for("react.context"),ds=Symbol.for("react.forward_ref"),ra=Symbol.for("react.suspense"),oa=Symbol.for("react.suspense_list"),fs=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),dd=Symbol.for("react.offscreen"),wu=Symbol.iterator;function Dr(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,Si;function Mr(e){if(Si===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Si=t&&t[1]||""}return`
`+Si+e}var Ei=!1;function bi(e,t){if(!e||Ei)return"";Ei=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Ei=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mr(e):""}function Ih(e){switch(e.tag){case 5:return Mr(e.type);case 16:return Mr("Lazy");case 13:return Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 2:case 15:return e=bi(e.type,!1),e;case 11:return e=bi(e.type.render,!1),e;case 1:return e=bi(e.type,!0),e;default:return""}}function la(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Xn:return"Portal";case na:return"Profiler";case cs:return"StrictMode";case ra:return"Suspense";case oa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cd:return(e.displayName||"Context")+".Consumer";case ud:return(e._context.displayName||"Context")+".Provider";case ds:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fs:return t=e.displayName||null,t!==null?t:la(e.type)||"Memo";case qt:t=e._payload,e=e._init;try{return la(e(t))}catch{}}return null}function Rh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return la(t);case 8:return t===cs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lh(e){var t=fd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Po(e){e._valueTracker||(e._valueTracker=Lh(e))}function pd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ia(e,t){var n=t.checked;return we({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hd(e,t){t=t.checked,t!=null&&us(e,"checked",t,!1)}function aa(e,t){hd(e,t);var n=mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sa(e,t.type,n):t.hasOwnProperty("defaultValue")&&sa(e,t.type,mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ku(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sa(e,t,n){(t!=="number"||cl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jr=Array.isArray;function cr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ua(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return we({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Su(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(jr(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mn(n)}}function md(e,t){var n=mn(t.value),r=mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Eu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ca(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var No,vd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=No.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function eo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oh=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(e){Oh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hr[t]=Hr[e]})});function yd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hr.hasOwnProperty(e)&&Hr[e]?(""+t).trim():t+"px"}function wd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=yd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var zh=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function da(e,t){if(t){if(zh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function fa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pa=null;function ps(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ha=null,dr=null,fr=null;function bu(e){if(e=So(e)){if(typeof ha!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Vl(t),ha(e.stateNode,e.type,t))}}function xd(e){dr?fr?fr.push(e):fr=[e]:dr=e}function kd(){if(dr){var e=dr,t=fr;if(fr=dr=null,bu(e),t)for(e=0;e<t.length;e++)bu(t[e])}}function Sd(e,t){return e(t)}function Ed(){}var Ai=!1;function bd(e,t,n){if(Ai)return e(t,n);Ai=!0;try{return Sd(e,t,n)}finally{Ai=!1,(dr!==null||fr!==null)&&(Ed(),kd())}}function to(e,t){var n=e.stateNode;if(n===null)return null;var r=Vl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var ma=!1;if(Ht)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){ma=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{ma=!1}function Mh(e,t,n,r,o,l,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Ur=!1,dl=null,fl=!1,ga=null,jh={onError:function(e){Ur=!0,dl=e}};function Bh(e,t,n,r,o,l,i,a,s){Ur=!1,dl=null,Mh.apply(jh,arguments)}function Fh(e,t,n,r,o,l,i,a,s){if(Bh.apply(this,arguments),Ur){if(Ur){var c=dl;Ur=!1,dl=null}else throw Error(I(198));fl||(fl=!0,ga=c)}}function Fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ad(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Au(e){if(Fn(e)!==e)throw Error(I(188))}function Wh(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Au(o),e;if(l===r)return Au(o),t;l=l.sibling}throw Error(I(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Cd(e){return e=Wh(e),e!==null?$d(e):null}function $d(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$d(e);if(t!==null)return t;e=e.sibling}return null}var Td=lt.unstable_scheduleCallback,Cu=lt.unstable_cancelCallback,Hh=lt.unstable_shouldYield,Uh=lt.unstable_requestPaint,Ae=lt.unstable_now,Vh=lt.unstable_getCurrentPriorityLevel,hs=lt.unstable_ImmediatePriority,Dd=lt.unstable_UserBlockingPriority,pl=lt.unstable_NormalPriority,Qh=lt.unstable_LowPriority,Pd=lt.unstable_IdlePriority,Fl=null,Nt=null;function Yh(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Fl,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:Kh,Gh=Math.log,Xh=Math.LN2;function Kh(e){return e>>>=0,e===0?32:31-(Gh(e)/Xh|0)|0}var _o=64,Io=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Br(a):(l&=i,l!==0&&(r=Br(l)))}else i=n&~o,i!==0?r=Br(i):l!==0&&(r=Br(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Et(t),o=1<<n,r|=e[n],t&=~o;return r}function Zh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Et(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=Zh(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function va(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nd(){var e=_o;return _o<<=1,!(_o&4194240)&&(_o=64),e}function Ci(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Et(t),e[t]=n}function qh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Et(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function ms(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Et(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ue=0;function _d(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Id,gs,Rd,Ld,Od,ya=!1,Ro=[],ln=null,an=null,sn=null,no=new Map,ro=new Map,tn=[],em="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $u(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":no.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(t.pointerId)}}function Nr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=So(t),t!==null&&gs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function tm(e,t,n,r,o){switch(t){case"focusin":return ln=Nr(ln,e,t,n,r,o),!0;case"dragenter":return an=Nr(an,e,t,n,r,o),!0;case"mouseover":return sn=Nr(sn,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return no.set(l,Nr(no.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,ro.set(l,Nr(ro.get(l)||null,e,t,n,r,o)),!0}return!1}function zd(e){var t=An(e.target);if(t!==null){var n=Fn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ad(n),t!==null){e.blockedOn=t,Od(e.priority,function(){Rd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pa=r,n.target.dispatchEvent(r),pa=null}else return t=So(n),t!==null&&gs(t),e.blockedOn=n,!1;t.shift()}return!0}function Tu(e,t,n){qo(e)&&n.delete(t)}function nm(){ya=!1,ln!==null&&qo(ln)&&(ln=null),an!==null&&qo(an)&&(an=null),sn!==null&&qo(sn)&&(sn=null),no.forEach(Tu),ro.forEach(Tu)}function _r(e,t){e.blockedOn===t&&(e.blockedOn=null,ya||(ya=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,nm)))}function oo(e){function t(o){return _r(o,e)}if(0<Ro.length){_r(Ro[0],e);for(var n=1;n<Ro.length;n++){var r=Ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&_r(ln,e),an!==null&&_r(an,e),sn!==null&&_r(sn,e),no.forEach(t),ro.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)zd(n),n.blockedOn===null&&tn.shift()}var pr=Yt.ReactCurrentBatchConfig,ml=!0;function rm(e,t,n,r){var o=ue,l=pr.transition;pr.transition=null;try{ue=1,vs(e,t,n,r)}finally{ue=o,pr.transition=l}}function om(e,t,n,r){var o=ue,l=pr.transition;pr.transition=null;try{ue=4,vs(e,t,n,r)}finally{ue=o,pr.transition=l}}function vs(e,t,n,r){if(ml){var o=wa(e,t,n,r);if(o===null)Oi(e,t,r,gl,n),$u(e,r);else if(tm(o,e,t,n,r))r.stopPropagation();else if($u(e,r),t&4&&-1<em.indexOf(e)){for(;o!==null;){var l=So(o);if(l!==null&&Id(l),l=wa(e,t,n,r),l===null&&Oi(e,t,r,gl,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Oi(e,t,r,null,n)}}var gl=null;function wa(e,t,n,r){if(gl=null,e=ps(r),e=An(e),e!==null)if(t=Fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ad(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gl=e,null}function Md(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vh()){case hs:return 1;case Dd:return 4;case pl:case Qh:return 16;case Pd:return 536870912;default:return 16}default:return 16}}var rn=null,ys=null,el=null;function jd(){if(el)return el;var e,t=ys,n=t.length,r,o="value"in rn?rn.value:rn.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return el=o.slice(e,1<r?1-r:void 0)}function tl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lo(){return!0}function Du(){return!1}function at(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Lo:Du,this.isPropagationStopped=Du,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ws=at($r),ko=we({},$r,{view:0,detail:0}),lm=at(ko),$i,Ti,Ir,Wl=we({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?($i=e.screenX-Ir.screenX,Ti=e.screenY-Ir.screenY):Ti=$i=0,Ir=e),$i)},movementY:function(e){return"movementY"in e?e.movementY:Ti}}),Pu=at(Wl),im=we({},Wl,{dataTransfer:0}),am=at(im),sm=we({},ko,{relatedTarget:0}),Di=at(sm),um=we({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),cm=at(um),dm=we({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fm=at(dm),pm=we({},$r,{data:0}),Nu=at(pm),hm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gm[e])?!!t[e]:!1}function xs(){return vm}var ym=we({},ko,{key:function(e){if(e.key){var t=hm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xs,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wm=at(ym),xm=we({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=at(xm),km=we({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xs}),Sm=at(km),Em=we({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),bm=at(Em),Am=we({},Wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cm=at(Am),$m=[9,13,27,32],ks=Ht&&"CompositionEvent"in window,Vr=null;Ht&&"documentMode"in document&&(Vr=document.documentMode);var Tm=Ht&&"TextEvent"in window&&!Vr,Bd=Ht&&(!ks||Vr&&8<Vr&&11>=Vr),Iu=" ",Ru=!1;function Fd(e,t){switch(e){case"keyup":return $m.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function Dm(e,t){switch(e){case"compositionend":return Wd(t);case"keypress":return t.which!==32?null:(Ru=!0,Iu);case"textInput":return e=t.data,e===Iu&&Ru?null:e;default:return null}}function Pm(e,t){if(Zn)return e==="compositionend"||!ks&&Fd(e,t)?(e=jd(),el=ys=rn=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bd&&t.locale!=="ko"?null:t.data;default:return null}}var Nm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nm[e.type]:t==="textarea"}function Hd(e,t,n,r){xd(r),t=vl(t,"onChange"),0<t.length&&(n=new ws("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qr=null,lo=null;function _m(e){ef(e,0)}function Hl(e){var t=er(e);if(pd(t))return e}function Im(e,t){if(e==="change")return t}var Ud=!1;if(Ht){var Pi;if(Ht){var Ni="oninput"in document;if(!Ni){var Ou=document.createElement("div");Ou.setAttribute("oninput","return;"),Ni=typeof Ou.oninput=="function"}Pi=Ni}else Pi=!1;Ud=Pi&&(!document.documentMode||9<document.documentMode)}function zu(){Qr&&(Qr.detachEvent("onpropertychange",Vd),lo=Qr=null)}function Vd(e){if(e.propertyName==="value"&&Hl(lo)){var t=[];Hd(t,lo,e,ps(e)),bd(_m,t)}}function Rm(e,t,n){e==="focusin"?(zu(),Qr=t,lo=n,Qr.attachEvent("onpropertychange",Vd)):e==="focusout"&&zu()}function Lm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hl(lo)}function Om(e,t){if(e==="click")return Hl(t)}function zm(e,t){if(e==="input"||e==="change")return Hl(t)}function Mm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:Mm;function io(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ta.call(t,o)||!At(e[o],t[o]))return!1}return!0}function Mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ju(e,t){var n=Mu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mu(n)}}function Qd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yd(){for(var e=window,t=cl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=cl(e.document)}return t}function Ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jm(e){var t=Yd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qd(n.ownerDocument.documentElement,n)){if(r!==null&&Ss(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=ju(n,l);var i=ju(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bm=Ht&&"documentMode"in document&&11>=document.documentMode,Jn=null,xa=null,Yr=null,ka=!1;function Bu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ka||Jn==null||Jn!==cl(r)||(r=Jn,"selectionStart"in r&&Ss(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&io(Yr,r)||(Yr=r,r=vl(xa,"onSelect"),0<r.length&&(t=new ws("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jn)))}function Oo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qn={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},_i={},Gd={};Ht&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function Ul(e){if(_i[e])return _i[e];if(!qn[e])return e;var t=qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gd)return _i[e]=t[n];return e}var Xd=Ul("animationend"),Kd=Ul("animationiteration"),Zd=Ul("animationstart"),Jd=Ul("transitionend"),qd=new Map,Fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,t){qd.set(e,t),Bn(t,[e])}for(var Ii=0;Ii<Fu.length;Ii++){var Ri=Fu[Ii],Fm=Ri.toLowerCase(),Wm=Ri[0].toUpperCase()+Ri.slice(1);wn(Fm,"on"+Wm)}wn(Xd,"onAnimationEnd");wn(Kd,"onAnimationIteration");wn(Zd,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(Jd,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function Wu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fh(r,t,void 0,e),e.currentTarget=null}function ef(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;Wu(o,a,c),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;Wu(o,a,c),l=s}}}if(fl)throw e=ga,fl=!1,ga=null,e}function pe(e,t){var n=t[Ca];n===void 0&&(n=t[Ca]=new Set);var r=e+"__bubble";n.has(r)||(tf(t,e,2,!1),n.add(r))}function Li(e,t,n){var r=0;t&&(r|=4),tf(n,e,r,t)}var zo="_reactListening"+Math.random().toString(36).slice(2);function ao(e){if(!e[zo]){e[zo]=!0,sd.forEach(function(n){n!=="selectionchange"&&(Hm.has(n)||Li(n,!1,e),Li(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zo]||(t[zo]=!0,Li("selectionchange",!1,t))}}function tf(e,t,n,r){switch(Md(t)){case 1:var o=rm;break;case 4:o=om;break;default:o=vs}n=o.bind(null,t,n,e),o=void 0,!ma||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Oi(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=An(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}bd(function(){var c=l,h=ps(n),p=[];e:{var m=qd.get(e);if(m!==void 0){var S=ws,x=e;switch(e){case"keypress":if(tl(n)===0)break e;case"keydown":case"keyup":S=wm;break;case"focusin":x="focus",S=Di;break;case"focusout":x="blur",S=Di;break;case"beforeblur":case"afterblur":S=Di;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=am;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Sm;break;case Xd:case Kd:case Zd:S=cm;break;case Jd:S=bm;break;case"scroll":S=lm;break;case"wheel":S=Cm;break;case"copy":case"cut":case"paste":S=fm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=_u}var E=(t&4)!==0,T=!E&&e==="scroll",f=E?m!==null?m+"Capture":null:m;E=[];for(var u=c,d;u!==null;){d=u;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=to(u,f),g!=null&&E.push(so(u,g,d)))),T)break;u=u.return}0<E.length&&(m=new S(m,x,null,n,h),p.push({event:m,listeners:E}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&n!==pa&&(x=n.relatedTarget||n.fromElement)&&(An(x)||x[Ut]))break e;if((S||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,S?(x=n.relatedTarget||n.toElement,S=c,x=x?An(x):null,x!==null&&(T=Fn(x),x!==T||x.tag!==5&&x.tag!==6)&&(x=null)):(S=null,x=c),S!==x)){if(E=Pu,g="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(E=_u,g="onPointerLeave",f="onPointerEnter",u="pointer"),T=S==null?m:er(S),d=x==null?m:er(x),m=new E(g,u+"leave",S,n,h),m.target=T,m.relatedTarget=d,g=null,An(h)===c&&(E=new E(f,u+"enter",x,n,h),E.target=d,E.relatedTarget=T,g=E),T=g,S&&x)t:{for(E=S,f=x,u=0,d=E;d;d=Yn(d))u++;for(d=0,g=f;g;g=Yn(g))d++;for(;0<u-d;)E=Yn(E),u--;for(;0<d-u;)f=Yn(f),d--;for(;u--;){if(E===f||f!==null&&E===f.alternate)break t;E=Yn(E),f=Yn(f)}E=null}else E=null;S!==null&&Hu(p,m,S,E,!1),x!==null&&T!==null&&Hu(p,T,x,E,!0)}}e:{if(m=c?er(c):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var w=Im;else if(Lu(m))if(Ud)w=zm;else{w=Lm;var b=Rm}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(w=Om);if(w&&(w=w(e,c))){Hd(p,w,n,h);break e}b&&b(e,m,c),e==="focusout"&&(b=m._wrapperState)&&b.controlled&&m.type==="number"&&sa(m,"number",m.value)}switch(b=c?er(c):window,e){case"focusin":(Lu(b)||b.contentEditable==="true")&&(Jn=b,xa=c,Yr=null);break;case"focusout":Yr=xa=Jn=null;break;case"mousedown":ka=!0;break;case"contextmenu":case"mouseup":case"dragend":ka=!1,Bu(p,n,h);break;case"selectionchange":if(Bm)break;case"keydown":case"keyup":Bu(p,n,h)}var C;if(ks)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Zn?Fd(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Bd&&n.locale!=="ko"&&(Zn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Zn&&(C=jd()):(rn=h,ys="value"in rn?rn.value:rn.textContent,Zn=!0)),b=vl(c,R),0<b.length&&(R=new Nu(R,e,null,n,h),p.push({event:R,listeners:b}),C?R.data=C:(C=Wd(n),C!==null&&(R.data=C)))),(C=Tm?Dm(e,n):Pm(e,n))&&(c=vl(c,"onBeforeInput"),0<c.length&&(h=new Nu("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=C))}ef(p,t)})}function so(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=to(e,n),l!=null&&r.unshift(so(e,l,o)),l=to(e,t),l!=null&&r.push(so(e,l,o))),e=e.return}return r}function Yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=to(n,l),s!=null&&i.unshift(so(n,s,a))):o||(s=to(n,l),s!=null&&i.push(so(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Um=/\r\n?/g,Vm=/\u0000|\uFFFD/g;function Uu(e){return(typeof e=="string"?e:""+e).replace(Um,`
`).replace(Vm,"")}function Mo(e,t,n){if(t=Uu(t),Uu(e)!==t&&n)throw Error(I(425))}function yl(){}var Sa=null,Ea=null;function ba(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Aa=typeof setTimeout=="function"?setTimeout:void 0,Qm=typeof clearTimeout=="function"?clearTimeout:void 0,Vu=typeof Promise=="function"?Promise:void 0,Ym=typeof queueMicrotask=="function"?queueMicrotask:typeof Vu<"u"?function(e){return Vu.resolve(null).then(e).catch(Gm)}:Aa;function Gm(e){setTimeout(function(){throw e})}function zi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),oo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);oo(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tr=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Tr,uo="__reactProps$"+Tr,Ut="__reactContainer$"+Tr,Ca="__reactEvents$"+Tr,Xm="__reactListeners$"+Tr,Km="__reactHandles$"+Tr;function An(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qu(e);e!==null;){if(n=e[Pt])return n;e=Qu(e)}return t}e=n,n=e.parentNode}return null}function So(e){return e=e[Pt]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Vl(e){return e[uo]||null}var $a=[],tr=-1;function xn(e){return{current:e}}function he(e){0>tr||(e.current=$a[tr],$a[tr]=null,tr--)}function de(e,t){tr++,$a[tr]=e.current,e.current=t}var gn={},Be=xn(gn),Ze=xn(!1),_n=gn;function vr(e,t){var n=e.type.contextTypes;if(!n)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Je(e){return e=e.childContextTypes,e!=null}function wl(){he(Ze),he(Be)}function Yu(e,t,n){if(Be.current!==gn)throw Error(I(168));de(Be,t),de(Ze,n)}function nf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(I(108,Rh(e)||"Unknown",o));return we({},n,r)}function xl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,_n=Be.current,de(Be,e),de(Ze,Ze.current),!0}function Gu(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=nf(e,t,_n),r.__reactInternalMemoizedMergedChildContext=e,he(Ze),he(Be),de(Be,e)):he(Ze),de(Ze,n)}var jt=null,Ql=!1,Mi=!1;function rf(e){jt===null?jt=[e]:jt.push(e)}function Zm(e){Ql=!0,rf(e)}function kn(){if(!Mi&&jt!==null){Mi=!0;var e=0,t=ue;try{var n=jt;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jt=null,Ql=!1}catch(o){throw jt!==null&&(jt=jt.slice(e+1)),Td(hs,kn),o}finally{ue=t,Mi=!1}}return null}var nr=[],rr=0,kl=null,Sl=0,ct=[],dt=0,In=null,Bt=1,Ft="";function En(e,t){nr[rr++]=Sl,nr[rr++]=kl,kl=e,Sl=t}function of(e,t,n){ct[dt++]=Bt,ct[dt++]=Ft,ct[dt++]=In,In=e;var r=Bt;e=Ft;var o=32-Et(r)-1;r&=~(1<<o),n+=1;var l=32-Et(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Bt=1<<32-Et(t)+o|n<<o|r,Ft=l+e}else Bt=1<<l|n<<o|r,Ft=e}function Es(e){e.return!==null&&(En(e,1),of(e,1,0))}function bs(e){for(;e===kl;)kl=nr[--rr],nr[rr]=null,Sl=nr[--rr],nr[rr]=null;for(;e===In;)In=ct[--dt],ct[dt]=null,Ft=ct[--dt],ct[dt]=null,Bt=ct[--dt],ct[dt]=null}var rt=null,nt=null,ge=!1,kt=null;function lf(e,t){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,nt=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:Bt,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rt=e,nt=null,!0):!1;default:return!1}}function Ta(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Da(e){if(ge){var t=nt;if(t){var n=t;if(!Xu(e,t)){if(Ta(e))throw Error(I(418));t=un(n.nextSibling);var r=rt;t&&Xu(e,t)?lf(r,n):(e.flags=e.flags&-4097|2,ge=!1,rt=e)}}else{if(Ta(e))throw Error(I(418));e.flags=e.flags&-4097|2,ge=!1,rt=e}}}function Ku(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function jo(e){if(e!==rt)return!1;if(!ge)return Ku(e),ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ba(e.type,e.memoizedProps)),t&&(t=nt)){if(Ta(e))throw af(),Error(I(418));for(;t;)lf(e,t),t=un(t.nextSibling)}if(Ku(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=rt?un(e.stateNode.nextSibling):null;return!0}function af(){for(var e=nt;e;)e=un(e.nextSibling)}function yr(){nt=rt=null,ge=!1}function As(e){kt===null?kt=[e]:kt.push(e)}var Jm=Yt.ReactCurrentBatchConfig;function wt(e,t){if(e&&e.defaultProps){t=we({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var El=xn(null),bl=null,or=null,Cs=null;function $s(){Cs=or=bl=null}function Ts(e){var t=El.current;he(El),e._currentValue=t}function Pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hr(e,t){bl=e,Cs=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(Cs!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(bl===null)throw Error(I(308));or=e,bl.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var Cn=null;function Ds(e){Cn===null?Cn=[e]:Cn.push(e)}function sf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ds(t)):(n.next=o.next,o.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function Ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Vt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ds(r)):(t.next=o.next,o.next=t),r.interleaved=t,Vt(e,n)}function nl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ms(e,n)}}function Zu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Al(e,t,n,r){var o=e.updateQueue;en=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?l=c:i.next=c,i=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==i&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=s))}if(l!==null){var p=o.baseState;i=0,h=c=s=null,a=l;do{var m=a.lane,S=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,E=a;switch(m=t,S=n,E.tag){case 1:if(x=E.payload,typeof x=="function"){p=x.call(S,p,m);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=E.payload,m=typeof x=="function"?x.call(S,p,m):x,m==null)break e;p=we({},p,m);break e;case 2:en=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else S={eventTime:S,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=S,s=p):h=h.next=S,i|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(h===null&&(s=p),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Ln|=i,e.lanes=i,e.memoizedState=p}}function Ju(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(I(191,o));o.call(r)}}}var cf=new ad.Component().refs;function Na(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yl={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),o=fn(e),l=Wt(r,o);l.payload=t,n!=null&&(l.callback=n),t=cn(e,l,o),t!==null&&(bt(t,e,o,r),nl(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),o=fn(e),l=Wt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=cn(e,l,o),t!==null&&(bt(t,e,o,r),nl(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=fn(e),o=Wt(n,r);o.tag=2,t!=null&&(o.callback=t),t=cn(e,o,r),t!==null&&(bt(t,e,r,n),nl(t,e,r))}};function qu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!io(n,r)||!io(o,l):!0}function df(e,t,n){var r=!1,o=gn,l=t.contextType;return typeof l=="object"&&l!==null?l=ht(l):(o=Je(t)?_n:Be.current,r=t.contextTypes,l=(r=r!=null)?vr(e,o):gn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function ec(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yl.enqueueReplaceState(t,t.state,null)}function _a(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=cf,Ps(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=ht(l):(l=Je(t)?_n:Be.current,o.context=vr(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Na(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Yl.enqueueReplaceState(o,o.state,null),Al(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;a===cf&&(a=o.refs={}),i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Bo(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function tc(e){var t=e._init;return t(e._payload)}function ff(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=pn(f,u),f.index=0,f.sibling=null,f}function l(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,d,g){return u===null||u.tag!==6?(u=Vi(d,f.mode,g),u.return=f,u):(u=o(u,d),u.return=f,u)}function s(f,u,d,g){var w=d.type;return w===Kn?h(f,u,d.props.children,g,d.key):u!==null&&(u.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===qt&&tc(w)===u.type)?(g=o(u,d.props),g.ref=Rr(f,u,d),g.return=f,g):(g=sl(d.type,d.key,d.props,null,f.mode,g),g.ref=Rr(f,u,d),g.return=f,g)}function c(f,u,d,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Qi(d,f.mode,g),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function h(f,u,d,g,w){return u===null||u.tag!==7?(u=Nn(d,f.mode,g,w),u.return=f,u):(u=o(u,d),u.return=f,u)}function p(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Vi(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Do:return d=sl(u.type,u.key,u.props,null,f.mode,d),d.ref=Rr(f,null,u),d.return=f,d;case Xn:return u=Qi(u,f.mode,d),u.return=f,u;case qt:var g=u._init;return p(f,g(u._payload),d)}if(jr(u)||Dr(u))return u=Nn(u,f.mode,d,null),u.return=f,u;Bo(f,u)}return null}function m(f,u,d,g){var w=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return w!==null?null:a(f,u,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Do:return d.key===w?s(f,u,d,g):null;case Xn:return d.key===w?c(f,u,d,g):null;case qt:return w=d._init,m(f,u,w(d._payload),g)}if(jr(d)||Dr(d))return w!==null?null:h(f,u,d,g,null);Bo(f,d)}return null}function S(f,u,d,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,a(u,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Do:return f=f.get(g.key===null?d:g.key)||null,s(u,f,g,w);case Xn:return f=f.get(g.key===null?d:g.key)||null,c(u,f,g,w);case qt:var b=g._init;return S(f,u,d,b(g._payload),w)}if(jr(g)||Dr(g))return f=f.get(d)||null,h(u,f,g,w,null);Bo(u,g)}return null}function x(f,u,d,g){for(var w=null,b=null,C=u,R=u=0,Y=null;C!==null&&R<d.length;R++){C.index>R?(Y=C,C=null):Y=C.sibling;var U=m(f,C,d[R],g);if(U===null){C===null&&(C=Y);break}e&&C&&U.alternate===null&&t(f,C),u=l(U,u,R),b===null?w=U:b.sibling=U,b=U,C=Y}if(R===d.length)return n(f,C),ge&&En(f,R),w;if(C===null){for(;R<d.length;R++)C=p(f,d[R],g),C!==null&&(u=l(C,u,R),b===null?w=C:b.sibling=C,b=C);return ge&&En(f,R),w}for(C=r(f,C);R<d.length;R++)Y=S(C,f,R,d[R],g),Y!==null&&(e&&Y.alternate!==null&&C.delete(Y.key===null?R:Y.key),u=l(Y,u,R),b===null?w=Y:b.sibling=Y,b=Y);return e&&C.forEach(function(q){return t(f,q)}),ge&&En(f,R),w}function E(f,u,d,g){var w=Dr(d);if(typeof w!="function")throw Error(I(150));if(d=w.call(d),d==null)throw Error(I(151));for(var b=w=null,C=u,R=u=0,Y=null,U=d.next();C!==null&&!U.done;R++,U=d.next()){C.index>R?(Y=C,C=null):Y=C.sibling;var q=m(f,C,U.value,g);if(q===null){C===null&&(C=Y);break}e&&C&&q.alternate===null&&t(f,C),u=l(q,u,R),b===null?w=q:b.sibling=q,b=q,C=Y}if(U.done)return n(f,C),ge&&En(f,R),w;if(C===null){for(;!U.done;R++,U=d.next())U=p(f,U.value,g),U!==null&&(u=l(U,u,R),b===null?w=U:b.sibling=U,b=U);return ge&&En(f,R),w}for(C=r(f,C);!U.done;R++,U=d.next())U=S(C,f,R,U.value,g),U!==null&&(e&&U.alternate!==null&&C.delete(U.key===null?R:U.key),u=l(U,u,R),b===null?w=U:b.sibling=U,b=U);return e&&C.forEach(function(K){return t(f,K)}),ge&&En(f,R),w}function T(f,u,d,g){if(typeof d=="object"&&d!==null&&d.type===Kn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Do:e:{for(var w=d.key,b=u;b!==null;){if(b.key===w){if(w=d.type,w===Kn){if(b.tag===7){n(f,b.sibling),u=o(b,d.props.children),u.return=f,f=u;break e}}else if(b.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===qt&&tc(w)===b.type){n(f,b.sibling),u=o(b,d.props),u.ref=Rr(f,b,d),u.return=f,f=u;break e}n(f,b);break}else t(f,b);b=b.sibling}d.type===Kn?(u=Nn(d.props.children,f.mode,g,d.key),u.return=f,f=u):(g=sl(d.type,d.key,d.props,null,f.mode,g),g.ref=Rr(f,u,d),g.return=f,f=g)}return i(f);case Xn:e:{for(b=d.key;u!==null;){if(u.key===b)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Qi(d,f.mode,g),u.return=f,f=u}return i(f);case qt:return b=d._init,T(f,u,b(d._payload),g)}if(jr(d))return x(f,u,d,g);if(Dr(d))return E(f,u,d,g);Bo(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=Vi(d,f.mode,g),u.return=f,f=u),i(f)):n(f,u)}return T}var wr=ff(!0),pf=ff(!1),Eo={},_t=xn(Eo),co=xn(Eo),fo=xn(Eo);function $n(e){if(e===Eo)throw Error(I(174));return e}function Ns(e,t){switch(de(fo,t),de(co,e),de(_t,Eo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ca(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ca(t,e)}he(_t),de(_t,t)}function xr(){he(_t),he(co),he(fo)}function hf(e){$n(fo.current);var t=$n(_t.current),n=ca(t,e.type);t!==n&&(de(co,e),de(_t,n))}function _s(e){co.current===e&&(he(_t),he(co))}var ve=xn(0);function Cl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ji=[];function Is(){for(var e=0;e<ji.length;e++)ji[e]._workInProgressVersionPrimary=null;ji.length=0}var rl=Yt.ReactCurrentDispatcher,Bi=Yt.ReactCurrentBatchConfig,Rn=0,ye=null,$e=null,De=null,$l=!1,Gr=!1,po=0,qm=0;function Oe(){throw Error(I(321))}function Rs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function Ls(e,t,n,r,o,l){if(Rn=l,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,rl.current=e===null||e.memoizedState===null?r0:o0,e=n(r,o),Gr){l=0;do{if(Gr=!1,po=0,25<=l)throw Error(I(301));l+=1,De=$e=null,t.updateQueue=null,rl.current=l0,e=n(r,o)}while(Gr)}if(rl.current=Tl,t=$e!==null&&$e.next!==null,Rn=0,De=$e=ye=null,$l=!1,t)throw Error(I(300));return e}function Os(){var e=po!==0;return po=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ye.memoizedState=De=e:De=De.next=e,De}function mt(){if($e===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=De===null?ye.memoizedState:De.next;if(t!==null)De=t,$e=e;else{if(e===null)throw Error(I(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},De===null?ye.memoizedState=De=e:De=De.next=e}return De}function ho(e,t){return typeof t=="function"?t(e):t}function Fi(e){var t=mt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=$e,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,c=l;do{var h=c.lane;if((Rn&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=p,i=r):s=s.next=p,ye.lanes|=h,Ln|=h}c=c.next}while(c!==null&&c!==l);s===null?i=r:s.next=a,At(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ye.lanes|=l,Ln|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wi(e){var t=mt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);At(l,t.memoizedState)||(Ke=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function mf(){}function gf(e,t){var n=ye,r=mt(),o=t(),l=!At(r.memoizedState,o);if(l&&(r.memoizedState=o,Ke=!0),r=r.queue,zs(wf.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,mo(9,yf.bind(null,n,r,o,t),void 0,null),Pe===null)throw Error(I(349));Rn&30||vf(n,t,o)}return o}function vf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yf(e,t,n,r){t.value=n,t.getSnapshot=r,xf(t)&&kf(e)}function wf(e,t,n){return n(function(){xf(t)&&kf(e)})}function xf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function kf(e){var t=Vt(e,1);t!==null&&bt(t,e,1,-1)}function nc(e){var t=Dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:e},t.queue=e,e=e.dispatch=n0.bind(null,ye,e),[t.memoizedState,e]}function mo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sf(){return mt().memoizedState}function ol(e,t,n,r){var o=Dt();ye.flags|=e,o.memoizedState=mo(1|t,n,void 0,r===void 0?null:r)}function Gl(e,t,n,r){var o=mt();r=r===void 0?null:r;var l=void 0;if($e!==null){var i=$e.memoizedState;if(l=i.destroy,r!==null&&Rs(r,i.deps)){o.memoizedState=mo(t,n,l,r);return}}ye.flags|=e,o.memoizedState=mo(1|t,n,l,r)}function rc(e,t){return ol(8390656,8,e,t)}function zs(e,t){return Gl(2048,8,e,t)}function Ef(e,t){return Gl(4,2,e,t)}function bf(e,t){return Gl(4,4,e,t)}function Af(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cf(e,t,n){return n=n!=null?n.concat([e]):null,Gl(4,4,Af.bind(null,t,e),n)}function Ms(){}function $f(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tf(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Df(e,t,n){return Rn&21?(At(n,t)||(n=Nd(),ye.lanes|=n,Ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function e0(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=Bi.transition;Bi.transition={};try{e(!1),t()}finally{ue=n,Bi.transition=r}}function Pf(){return mt().memoizedState}function t0(e,t,n){var r=fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nf(e))_f(t,n);else if(n=sf(e,t,n,r),n!==null){var o=He();bt(n,e,r,o),If(n,t,r)}}function n0(e,t,n){var r=fn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nf(e))_f(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,At(a,i)){var s=t.interleaved;s===null?(o.next=o,Ds(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=sf(e,t,o,r),n!==null&&(o=He(),bt(n,e,r,o),If(n,t,r))}}function Nf(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function _f(e,t){Gr=$l=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function If(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ms(e,n)}}var Tl={readContext:ht,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},r0={readContext:ht,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:rc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ol(4194308,4,Af.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ol(4194308,4,e,t)},useInsertionEffect:function(e,t){return ol(4,2,e,t)},useMemo:function(e,t){var n=Dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=t0.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:nc,useDebugValue:Ms,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=nc(!1),t=e[0];return e=e0.bind(null,e[1]),Dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,o=Dt();if(ge){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),Pe===null)throw Error(I(349));Rn&30||vf(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,rc(wf.bind(null,r,l,e),[e]),r.flags|=2048,mo(9,yf.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Dt(),t=Pe.identifierPrefix;if(ge){var n=Ft,r=Bt;n=(r&~(1<<32-Et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=po++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},o0={readContext:ht,useCallback:$f,useContext:ht,useEffect:zs,useImperativeHandle:Cf,useInsertionEffect:Ef,useLayoutEffect:bf,useMemo:Tf,useReducer:Fi,useRef:Sf,useState:function(){return Fi(ho)},useDebugValue:Ms,useDeferredValue:function(e){var t=mt();return Df(t,$e.memoizedState,e)},useTransition:function(){var e=Fi(ho)[0],t=mt().memoizedState;return[e,t]},useMutableSource:mf,useSyncExternalStore:gf,useId:Pf,unstable_isNewReconciler:!1},l0={readContext:ht,useCallback:$f,useContext:ht,useEffect:zs,useImperativeHandle:Cf,useInsertionEffect:Ef,useLayoutEffect:bf,useMemo:Tf,useReducer:Wi,useRef:Sf,useState:function(){return Wi(ho)},useDebugValue:Ms,useDeferredValue:function(e){var t=mt();return $e===null?t.memoizedState=e:Df(t,$e.memoizedState,e)},useTransition:function(){var e=Wi(ho)[0],t=mt().memoizedState;return[e,t]},useMutableSource:mf,useSyncExternalStore:gf,useId:Pf,unstable_isNewReconciler:!1};function kr(e,t){try{var n="",r=t;do n+=Ih(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Hi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ia(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var i0=typeof WeakMap=="function"?WeakMap:Map;function Rf(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Pl||(Pl=!0,Ha=r),Ia(e,t)},n}function Lf(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ia(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ia(e,t),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function oc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new i0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=x0.bind(null,e,t,n),t.then(e,e))}function lc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ic(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,cn(n,t,1))),n.lanes|=1),e)}var a0=Yt.ReactCurrentOwner,Ke=!1;function We(e,t,n,r){t.child=e===null?pf(t,null,n,r):wr(t,e.child,n,r)}function ac(e,t,n,r,o){n=n.render;var l=t.ref;return hr(t,o),r=Ls(e,t,n,r,l,o),n=Os(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(ge&&n&&Es(t),t.flags|=1,We(e,t,r,o),t.child)}function sc(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Qs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Of(e,t,l,r,o)):(e=sl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(i,r)&&e.ref===t.ref)return Qt(e,t,o)}return t.flags|=1,e=pn(l,r),e.ref=t.ref,e.return=t,t.child=e}function Of(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(io(l,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,Qt(e,t,o)}return Ra(e,t,n,r,o)}function zf(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(ir,tt),tt|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(ir,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,de(ir,tt),tt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,de(ir,tt),tt|=r;return We(e,t,o,n),t.child}function Mf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ra(e,t,n,r,o){var l=Je(n)?_n:Be.current;return l=vr(t,l),hr(t,o),n=Ls(e,t,n,r,l,o),r=Os(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(ge&&r&&Es(t),t.flags|=1,We(e,t,n,o),t.child)}function uc(e,t,n,r,o){if(Je(n)){var l=!0;xl(t)}else l=!1;if(hr(t,o),t.stateNode===null)ll(e,t),df(t,n,r),_a(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=ht(c):(c=Je(n)?_n:Be.current,c=vr(t,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&ec(t,i,r,c),en=!1;var m=t.memoizedState;i.state=m,Al(t,r,i,o),s=t.memoizedState,a!==r||m!==s||Ze.current||en?(typeof h=="function"&&(Na(t,n,h,r),s=t.memoizedState),(a=en||qu(t,n,a,r,m,s,c))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,uf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:wt(t.type,a),i.props=c,p=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=ht(s):(s=Je(n)?_n:Be.current,s=vr(t,s));var S=n.getDerivedStateFromProps;(h=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==p||m!==s)&&ec(t,i,r,s),en=!1,m=t.memoizedState,i.state=m,Al(t,r,i,o);var x=t.memoizedState;a!==p||m!==x||Ze.current||en?(typeof S=="function"&&(Na(t,n,S,r),x=t.memoizedState),(c=en||qu(t,n,c,r,m,x,s)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return La(e,t,n,r,l,o)}function La(e,t,n,r,o,l){Mf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Gu(t,n,!1),Qt(e,t,l);r=t.stateNode,a0.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=wr(t,e.child,null,l),t.child=wr(t,null,a,l)):We(e,t,a,l),t.memoizedState=r.state,o&&Gu(t,n,!0),t.child}function jf(e){var t=e.stateNode;t.pendingContext?Yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yu(e,t.context,!1),Ns(e,t.containerInfo)}function cc(e,t,n,r,o){return yr(),As(o),t.flags|=256,We(e,t,n,r),t.child}var Oa={dehydrated:null,treeContext:null,retryLane:0};function za(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bf(e,t,n){var r=t.pendingProps,o=ve.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),de(ve,o&1),e===null)return Da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Zl(i,r,0,null),e=Nn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=za(n),t.memoizedState=Oa,e):js(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return s0(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=pn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=pn(a,l):(l=Nn(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?za(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Oa,r}return l=e.child,e=l.sibling,r=pn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function js(e,t){return t=Zl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fo(e,t,n,r){return r!==null&&As(r),wr(t,e.child,null,n),e=js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function s0(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Hi(Error(I(422))),Fo(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Zl({mode:"visible",children:r.children},o,0,null),l=Nn(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&wr(t,e.child,null,i),t.child.memoizedState=za(i),t.memoizedState=Oa,l);if(!(t.mode&1))return Fo(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(I(419)),r=Hi(l,r,void 0),Fo(e,t,i,r)}if(a=(i&e.childLanes)!==0,Ke||a){if(r=Pe,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Vt(e,o),bt(r,e,o,-1))}return Vs(),r=Hi(Error(I(421))),Fo(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=k0.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,nt=un(o.nextSibling),rt=t,ge=!0,kt=null,e!==null&&(ct[dt++]=Bt,ct[dt++]=Ft,ct[dt++]=In,Bt=e.id,Ft=e.overflow,In=t),t=js(t,r.children),t.flags|=4096,t)}function dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pa(e.return,t,n)}function Ui(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Ff(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(We(e,t,r.children,n),r=ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dc(e,n,t);else if(e.tag===19)dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(ve,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Cl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ui(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Cl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ui(t,!0,n,null,l);break;case"together":Ui(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ll(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function u0(e,t,n){switch(t.tag){case 3:jf(t),yr();break;case 5:hf(t);break;case 1:Je(t.type)&&xl(t);break;case 4:Ns(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;de(El,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(ve,ve.current&1),t.flags|=128,null):n&t.child.childLanes?Bf(e,t,n):(de(ve,ve.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);de(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ff(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),de(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,zf(e,t,n)}return Qt(e,t,n)}var Wf,Ma,Hf,Uf;Wf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ma=function(){};Hf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,$n(_t.current);var l=null;switch(n){case"input":o=ia(e,o),r=ia(e,r),l=[];break;case"select":o=we({},o,{value:void 0}),r=we({},r,{value:void 0}),l=[];break;case"textarea":o=ua(e,o),r=ua(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=yl)}da(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&pe("scroll",e),l||a===s||(l=[])):(l=l||[]).push(c,s))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Uf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Lr(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function c0(e,t,n){var r=t.pendingProps;switch(bs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Je(t.type)&&wl(),ze(t),null;case 3:return r=t.stateNode,xr(),he(Ze),he(Be),Is(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(jo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,kt!==null&&(Qa(kt),kt=null))),Ma(e,t),ze(t),null;case 5:_s(t);var o=$n(fo.current);if(n=t.type,e!==null&&t.stateNode!=null)Hf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return ze(t),null}if(e=$n(_t.current),jo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Pt]=t,r[uo]=l,e=(t.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(o=0;o<Fr.length;o++)pe(Fr[o],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":xu(r,l),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},pe("invalid",r);break;case"textarea":Su(r,l),pe("invalid",r)}da(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Mo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Mo(r.textContent,a,e),o=["children",""+a]):qr.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&pe("scroll",r)}switch(n){case"input":Po(r),ku(r,l,!0);break;case"textarea":Po(r),Eu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=yl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Pt]=t,e[uo]=r,Wf(e,t,!1,!1),t.stateNode=e;e:{switch(i=fa(n,r),n){case"dialog":pe("cancel",e),pe("close",e),o=r;break;case"iframe":case"object":case"embed":pe("load",e),o=r;break;case"video":case"audio":for(o=0;o<Fr.length;o++)pe(Fr[o],e);o=r;break;case"source":pe("error",e),o=r;break;case"img":case"image":case"link":pe("error",e),pe("load",e),o=r;break;case"details":pe("toggle",e),o=r;break;case"input":xu(e,r),o=ia(e,r),pe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=we({},r,{value:void 0}),pe("invalid",e);break;case"textarea":Su(e,r),o=ua(e,r),pe("invalid",e);break;default:o=r}da(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?wd(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&vd(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&eo(e,s):typeof s=="number"&&eo(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(qr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&pe("scroll",e):s!=null&&us(e,l,s,i))}switch(n){case"input":Po(e),ku(e,r,!1);break;case"textarea":Po(e),Eu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?cr(e,!!r.multiple,l,!1):r.defaultValue!=null&&cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)Uf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=$n(fo.current),$n(_t.current),jo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(l=r.nodeValue!==n)&&(e=rt,e!==null))switch(e.tag){case 3:Mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mo(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return ze(t),null;case 13:if(he(ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&nt!==null&&t.mode&1&&!(t.flags&128))af(),yr(),t.flags|=98560,l=!1;else if(l=jo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(I(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(I(317));l[Pt]=t}else yr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),l=!1}else kt!==null&&(Qa(kt),kt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Te===0&&(Te=3):Vs())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return xr(),Ma(e,t),e===null&&ao(t.stateNode.containerInfo),ze(t),null;case 10:return Ts(t.type._context),ze(t),null;case 17:return Je(t.type)&&wl(),ze(t),null;case 19:if(he(ve),l=t.memoizedState,l===null)return ze(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Lr(l,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Cl(e),i!==null){for(t.flags|=128,Lr(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(ve,ve.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ae()>Sr&&(t.flags|=128,r=!0,Lr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Cl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ge)return ze(t),null}else 2*Ae()-l.renderingStartTime>Sr&&n!==1073741824&&(t.flags|=128,r=!0,Lr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ae(),t.sibling=null,n=ve.current,de(ve,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Us(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tt&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function d0(e,t){switch(bs(t),t.tag){case 1:return Je(t.type)&&wl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xr(),he(Ze),he(Be),Is(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _s(t),null;case 13:if(he(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ve),null;case 4:return xr(),null;case 10:return Ts(t.type._context),null;case 22:case 23:return Us(),null;case 24:return null;default:return null}}var Wo=!1,je=!1,f0=typeof WeakSet=="function"?WeakSet:Set,F=null;function lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function ja(e,t,n){try{n()}catch(r){xe(e,t,r)}}var fc=!1;function p0(e,t){if(Sa=ml,e=Yd(),Ss(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,c=0,h=0,p=e,m=null;t:for(;;){for(var S;p!==n||o!==0&&p.nodeType!==3||(a=i+o),p!==l||r!==0&&p.nodeType!==3||(s=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(S=p.firstChild)!==null;)m=p,p=S;for(;;){if(p===e)break t;if(m===n&&++c===o&&(a=i),m===l&&++h===r&&(s=i),(S=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=S}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ea={focusedElem:e,selectionRange:n},ml=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var E=x.memoizedProps,T=x.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?E:wt(t.type,E),T);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(g){xe(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return x=fc,fc=!1,x}function Xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&ja(t,n,l)}o=o.next}while(o!==r)}}function Xl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ba(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vf(e){var t=e.alternate;t!==null&&(e.alternate=null,Vf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[uo],delete t[Ca],delete t[Xm],delete t[Km])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qf(e){return e.tag===5||e.tag===3||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yl));else if(r!==4&&(e=e.child,e!==null))for(Fa(e,t,n),e=e.sibling;e!==null;)Fa(e,t,n),e=e.sibling}function Wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wa(e,t,n),e=e.sibling;e!==null;)Wa(e,t,n),e=e.sibling}var _e=null,xt=!1;function Kt(e,t,n){for(n=n.child;n!==null;)Yf(e,t,n),n=n.sibling}function Yf(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:je||lr(n,t);case 6:var r=_e,o=xt;_e=null,Kt(e,t,n),_e=r,xt=o,_e!==null&&(xt?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(xt?(e=_e,n=n.stateNode,e.nodeType===8?zi(e.parentNode,n):e.nodeType===1&&zi(e,n),oo(e)):zi(_e,n.stateNode));break;case 4:r=_e,o=xt,_e=n.stateNode.containerInfo,xt=!0,Kt(e,t,n),_e=r,xt=o;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&ja(n,t,i),o=o.next}while(o!==r)}Kt(e,t,n);break;case 1:if(!je&&(lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xe(n,t,a)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,Kt(e,t,n),je=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function hc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new f0),t.forEach(function(r){var o=S0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:_e=a.stateNode,xt=!1;break e;case 3:_e=a.stateNode.containerInfo,xt=!0;break e;case 4:_e=a.stateNode.containerInfo,xt=!0;break e}a=a.return}if(_e===null)throw Error(I(160));Yf(l,i,o),_e=null,xt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){xe(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gf(t,e),t=t.sibling}function Gf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(t,e),Tt(e),r&4){try{Xr(3,e,e.return),Xl(3,e)}catch(E){xe(e,e.return,E)}try{Xr(5,e,e.return)}catch(E){xe(e,e.return,E)}}break;case 1:vt(t,e),Tt(e),r&512&&n!==null&&lr(n,n.return);break;case 5:if(vt(t,e),Tt(e),r&512&&n!==null&&lr(n,n.return),e.flags&32){var o=e.stateNode;try{eo(o,"")}catch(E){xe(e,e.return,E)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&hd(o,l),fa(a,i);var c=fa(a,l);for(i=0;i<s.length;i+=2){var h=s[i],p=s[i+1];h==="style"?wd(o,p):h==="dangerouslySetInnerHTML"?vd(o,p):h==="children"?eo(o,p):us(o,h,p,c)}switch(a){case"input":aa(o,l);break;case"textarea":md(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var S=l.value;S!=null?cr(o,!!l.multiple,S,!1):m!==!!l.multiple&&(l.defaultValue!=null?cr(o,!!l.multiple,l.defaultValue,!0):cr(o,!!l.multiple,l.multiple?[]:"",!1))}o[uo]=l}catch(E){xe(e,e.return,E)}}break;case 6:if(vt(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(I(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(E){xe(e,e.return,E)}}break;case 3:if(vt(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oo(t.containerInfo)}catch(E){xe(e,e.return,E)}break;case 4:vt(t,e),Tt(e);break;case 13:vt(t,e),Tt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Ws=Ae())),r&4&&hc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(je=(c=je)||h,vt(t,e),je=c):vt(t,e),Tt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(F=e,h=e.child;h!==null;){for(p=F=h;F!==null;){switch(m=F,S=m.child,m.tag){case 0:case 11:case 14:case 15:Xr(4,m,m.return);break;case 1:lr(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(E){xe(r,n,E)}}break;case 5:lr(m,m.return);break;case 22:if(m.memoizedState!==null){gc(p);continue}}S!==null?(S.return=m,F=S):gc(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{o=p.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=p.stateNode,s=p.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=yd("display",i))}catch(E){xe(e,e.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(E){xe(e,e.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:vt(t,e),Tt(e),r&4&&hc(e);break;case 21:break;default:vt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qf(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(eo(o,""),r.flags&=-33);var l=pc(e);Wa(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=pc(e);Fa(e,a,i);break;default:throw Error(I(161))}}catch(s){xe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function h0(e,t,n){F=e,Xf(e)}function Xf(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var o=F,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Wo;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||je;a=Wo;var c=je;if(Wo=i,(je=s)&&!c)for(F=o;F!==null;)i=F,s=i.child,i.tag===22&&i.memoizedState!==null?vc(o):s!==null?(s.return=i,F=s):vc(o);for(;l!==null;)F=l,Xf(l),l=l.sibling;F=o,Wo=a,je=c}mc(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,F=l):mc(e)}}function mc(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||Xl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ju(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ju(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&oo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}je||t.flags&512&&Ba(t)}catch(m){xe(t,t.return,m)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function gc(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function vc(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xl(4,t)}catch(s){xe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){xe(t,o,s)}}var l=t.return;try{Ba(t)}catch(s){xe(t,l,s)}break;case 5:var i=t.return;try{Ba(t)}catch(s){xe(t,i,s)}}}catch(s){xe(t,t.return,s)}if(t===e){F=null;break}var a=t.sibling;if(a!==null){a.return=t.return,F=a;break}F=t.return}}var m0=Math.ceil,Dl=Yt.ReactCurrentDispatcher,Bs=Yt.ReactCurrentOwner,pt=Yt.ReactCurrentBatchConfig,le=0,Pe=null,Ce=null,Ie=0,tt=0,ir=xn(0),Te=0,go=null,Ln=0,Kl=0,Fs=0,Kr=null,Xe=null,Ws=0,Sr=1/0,Mt=null,Pl=!1,Ha=null,dn=null,Ho=!1,on=null,Nl=0,Zr=0,Ua=null,il=-1,al=0;function He(){return le&6?Ae():il!==-1?il:il=Ae()}function fn(e){return e.mode&1?le&2&&Ie!==0?Ie&-Ie:Jm.transition!==null?(al===0&&(al=Nd()),al):(e=ue,e!==0||(e=window.event,e=e===void 0?16:Md(e.type)),e):1}function bt(e,t,n,r){if(50<Zr)throw Zr=0,Ua=null,Error(I(185));xo(e,n,r),(!(le&2)||e!==Pe)&&(e===Pe&&(!(le&2)&&(Kl|=n),Te===4&&nn(e,Ie)),qe(e,r),n===1&&le===0&&!(t.mode&1)&&(Sr=Ae()+500,Ql&&kn()))}function qe(e,t){var n=e.callbackNode;Jh(e,t);var r=hl(e,e===Pe?Ie:0);if(r===0)n!==null&&Cu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cu(n),t===1)e.tag===0?Zm(yc.bind(null,e)):rf(yc.bind(null,e)),Ym(function(){!(le&6)&&kn()}),n=null;else{switch(_d(r)){case 1:n=hs;break;case 4:n=Dd;break;case 16:n=pl;break;case 536870912:n=Pd;break;default:n=pl}n=rp(n,Kf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kf(e,t){if(il=-1,al=0,le&6)throw Error(I(327));var n=e.callbackNode;if(mr()&&e.callbackNode!==n)return null;var r=hl(e,e===Pe?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_l(e,r);else{t=r;var o=le;le|=2;var l=Jf();(Pe!==e||Ie!==t)&&(Mt=null,Sr=Ae()+500,Pn(e,t));do try{y0();break}catch(a){Zf(e,a)}while(!0);$s(),Dl.current=l,le=o,Ce!==null?t=0:(Pe=null,Ie=0,t=Te)}if(t!==0){if(t===2&&(o=va(e),o!==0&&(r=o,t=Va(e,o))),t===1)throw n=go,Pn(e,0),nn(e,r),qe(e,Ae()),n;if(t===6)nn(e,r);else{if(o=e.current.alternate,!(r&30)&&!g0(o)&&(t=_l(e,r),t===2&&(l=va(e),l!==0&&(r=l,t=Va(e,l))),t===1))throw n=go,Pn(e,0),nn(e,r),qe(e,Ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:bn(e,Xe,Mt);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=Ws+500-Ae(),10<t)){if(hl(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Aa(bn.bind(null,e,Xe,Mt),t);break}bn(e,Xe,Mt);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Et(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*m0(r/1960))-r,10<r){e.timeoutHandle=Aa(bn.bind(null,e,Xe,Mt),r);break}bn(e,Xe,Mt);break;case 5:bn(e,Xe,Mt);break;default:throw Error(I(329))}}}return qe(e,Ae()),e.callbackNode===n?Kf.bind(null,e):null}function Va(e,t){var n=Kr;return e.current.memoizedState.isDehydrated&&(Pn(e,t).flags|=256),e=_l(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&Qa(t)),e}function Qa(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function g0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!At(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~Fs,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Et(t),r=1<<n;e[n]=-1,t&=~r}}function yc(e){if(le&6)throw Error(I(327));mr();var t=hl(e,0);if(!(t&1))return qe(e,Ae()),null;var n=_l(e,t);if(e.tag!==0&&n===2){var r=va(e);r!==0&&(t=r,n=Va(e,r))}if(n===1)throw n=go,Pn(e,0),nn(e,t),qe(e,Ae()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bn(e,Xe,Mt),qe(e,Ae()),null}function Hs(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(Sr=Ae()+500,Ql&&kn())}}function On(e){on!==null&&on.tag===0&&!(le&6)&&mr();var t=le;le|=1;var n=pt.transition,r=ue;try{if(pt.transition=null,ue=1,e)return e()}finally{ue=r,pt.transition=n,le=t,!(le&6)&&kn()}}function Us(){tt=ir.current,he(ir)}function Pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qm(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(bs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wl();break;case 3:xr(),he(Ze),he(Be),Is();break;case 5:_s(r);break;case 4:xr();break;case 13:he(ve);break;case 19:he(ve);break;case 10:Ts(r.type._context);break;case 22:case 23:Us()}n=n.return}if(Pe=e,Ce=e=pn(e.current,null),Ie=tt=t,Te=0,go=null,Fs=Kl=Ln=0,Xe=Kr=null,Cn!==null){for(t=0;t<Cn.length;t++)if(n=Cn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Cn=null}return e}function Zf(e,t){do{var n=Ce;try{if($s(),rl.current=Tl,$l){for(var r=ye.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}$l=!1}if(Rn=0,De=$e=ye=null,Gr=!1,po=0,Bs.current=null,n===null||n.return===null){Te=1,go=t,Ce=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=Ie,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var S=lc(i);if(S!==null){S.flags&=-257,ic(S,i,a,l,t),S.mode&1&&oc(l,c,t),t=S,s=c;var x=t.updateQueue;if(x===null){var E=new Set;E.add(s),t.updateQueue=E}else x.add(s);break e}else{if(!(t&1)){oc(l,c,t),Vs();break e}s=Error(I(426))}}else if(ge&&a.mode&1){var T=lc(i);if(T!==null){!(T.flags&65536)&&(T.flags|=256),ic(T,i,a,l,t),As(kr(s,a));break e}}l=s=kr(s,a),Te!==4&&(Te=2),Kr===null?Kr=[l]:Kr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Rf(l,s,t);Zu(l,f);break e;case 1:a=s;var u=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(dn===null||!dn.has(d)))){l.flags|=65536,t&=-t,l.lanes|=t;var g=Lf(l,a,t);Zu(l,g);break e}}l=l.return}while(l!==null)}ep(n)}catch(w){t=w,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function Jf(){var e=Dl.current;return Dl.current=Tl,e===null?Tl:e}function Vs(){(Te===0||Te===3||Te===2)&&(Te=4),Pe===null||!(Ln&268435455)&&!(Kl&268435455)||nn(Pe,Ie)}function _l(e,t){var n=le;le|=2;var r=Jf();(Pe!==e||Ie!==t)&&(Mt=null,Pn(e,t));do try{v0();break}catch(o){Zf(e,o)}while(!0);if($s(),le=n,Dl.current=r,Ce!==null)throw Error(I(261));return Pe=null,Ie=0,Te}function v0(){for(;Ce!==null;)qf(Ce)}function y0(){for(;Ce!==null&&!Hh();)qf(Ce)}function qf(e){var t=np(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?ep(e):Ce=t,Bs.current=null}function ep(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=d0(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,Ce=null;return}}else if(n=c0(n,t,tt),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Te===0&&(Te=5)}function bn(e,t,n){var r=ue,o=pt.transition;try{pt.transition=null,ue=1,w0(e,t,n,r)}finally{pt.transition=o,ue=r}return null}function w0(e,t,n,r){do mr();while(on!==null);if(le&6)throw Error(I(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(qh(e,l),e===Pe&&(Ce=Pe=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ho||(Ho=!0,rp(pl,function(){return mr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=pt.transition,pt.transition=null;var i=ue;ue=1;var a=le;le|=4,Bs.current=null,p0(e,n),Gf(n,e),jm(Ea),ml=!!Sa,Ea=Sa=null,e.current=n,h0(n),Uh(),le=a,ue=i,pt.transition=l}else e.current=n;if(Ho&&(Ho=!1,on=e,Nl=o),l=e.pendingLanes,l===0&&(dn=null),Yh(n.stateNode),qe(e,Ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Pl)throw Pl=!1,e=Ha,Ha=null,e;return Nl&1&&e.tag!==0&&mr(),l=e.pendingLanes,l&1?e===Ua?Zr++:(Zr=0,Ua=e):Zr=0,kn(),null}function mr(){if(on!==null){var e=_d(Nl),t=pt.transition,n=ue;try{if(pt.transition=null,ue=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,Nl=0,le&6)throw Error(I(331));var o=le;for(le|=4,F=e.current;F!==null;){var l=F,i=l.child;if(F.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(F=c;F!==null;){var h=F;switch(h.tag){case 0:case 11:case 15:Xr(8,h,l)}var p=h.child;if(p!==null)p.return=h,F=p;else for(;F!==null;){h=F;var m=h.sibling,S=h.return;if(Vf(h),h===c){F=null;break}if(m!==null){m.return=S,F=m;break}F=S}}}var x=l.alternate;if(x!==null){var E=x.child;if(E!==null){x.child=null;do{var T=E.sibling;E.sibling=null,E=T}while(E!==null)}}F=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,F=i;else e:for(;F!==null;){if(l=F,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Xr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,F=f;break e}F=l.return}}var u=e.current;for(F=u;F!==null;){i=F;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,F=d;else e:for(i=u;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xl(9,a)}}catch(w){xe(a,a.return,w)}if(a===i){F=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,F=g;break e}F=a.return}}if(le=o,kn(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Fl,e)}catch{}r=!0}return r}finally{ue=n,pt.transition=t}}return!1}function wc(e,t,n){t=kr(n,t),t=Rf(e,t,1),e=cn(e,t,1),t=He(),e!==null&&(xo(e,1,t),qe(e,t))}function xe(e,t,n){if(e.tag===3)wc(e,e,n);else for(;t!==null;){if(t.tag===3){wc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=kr(n,e),e=Lf(t,e,1),t=cn(t,e,1),e=He(),t!==null&&(xo(t,1,e),qe(t,e));break}}t=t.return}}function x0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Ie&n)===n&&(Te===4||Te===3&&(Ie&130023424)===Ie&&500>Ae()-Ws?Pn(e,0):Fs|=n),qe(e,t)}function tp(e,t){t===0&&(e.mode&1?(t=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):t=1);var n=He();e=Vt(e,t),e!==null&&(xo(e,t,n),qe(e,n))}function k0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tp(e,n)}function S0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),tp(e,n)}var np;np=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,u0(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,ge&&t.flags&1048576&&of(t,Sl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ll(e,t),e=t.pendingProps;var o=vr(t,Be.current);hr(t,n),o=Ls(null,t,r,e,o,n);var l=Os();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(r)?(l=!0,xl(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ps(t),o.updater=Yl,t.stateNode=o,o._reactInternals=t,_a(t,r,e,n),t=La(null,t,r,!0,l,n)):(t.tag=0,ge&&l&&Es(t),We(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ll(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=b0(r),e=wt(r,e),o){case 0:t=Ra(null,t,r,e,n);break e;case 1:t=uc(null,t,r,e,n);break e;case 11:t=ac(null,t,r,e,n);break e;case 14:t=sc(null,t,r,wt(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),Ra(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),uc(e,t,r,o,n);case 3:e:{if(jf(t),e===null)throw Error(I(387));r=t.pendingProps,l=t.memoizedState,o=l.element,uf(e,t),Al(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=kr(Error(I(423)),t),t=cc(e,t,r,n,o);break e}else if(r!==o){o=kr(Error(I(424)),t),t=cc(e,t,r,n,o);break e}else for(nt=un(t.stateNode.containerInfo.firstChild),rt=t,ge=!0,kt=null,n=pf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yr(),r===o){t=Qt(e,t,n);break e}We(e,t,r,n)}t=t.child}return t;case 5:return hf(t),e===null&&Da(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,ba(r,o)?i=null:l!==null&&ba(r,l)&&(t.flags|=32),Mf(e,t),We(e,t,i,n),t.child;case 6:return e===null&&Da(t),null;case 13:return Bf(e,t,n);case 4:return Ns(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wr(t,null,r,n):We(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),ac(e,t,r,o,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,de(El,r._currentValue),r._currentValue=i,l!==null)if(At(l.value,i)){if(l.children===o.children&&!Ze.current){t=Qt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Wt(-1,n&-n),s.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Pa(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(I(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Pa(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}We(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,hr(t,n),o=ht(o),r=r(o),t.flags|=1,We(e,t,r,n),t.child;case 14:return r=t.type,o=wt(r,t.pendingProps),o=wt(r.type,o),sc(e,t,r,o,n);case 15:return Of(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),ll(e,t),t.tag=1,Je(r)?(e=!0,xl(t)):e=!1,hr(t,n),df(t,r,o),_a(t,r,o,n),La(null,t,r,!0,e,n);case 19:return Ff(e,t,n);case 22:return zf(e,t,n)}throw Error(I(156,t.tag))};function rp(e,t){return Td(e,t)}function E0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,n,r){return new E0(e,t,n,r)}function Qs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function b0(e){if(typeof e=="function")return Qs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ds)return 11;if(e===fs)return 14}return 2}function pn(e,t){var n=e.alternate;return n===null?(n=ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function sl(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Qs(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Kn:return Nn(n.children,o,l,t);case cs:i=8,o|=8;break;case na:return e=ft(12,n,t,o|2),e.elementType=na,e.lanes=l,e;case ra:return e=ft(13,n,t,o),e.elementType=ra,e.lanes=l,e;case oa:return e=ft(19,n,t,o),e.elementType=oa,e.lanes=l,e;case dd:return Zl(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ud:i=10;break e;case cd:i=9;break e;case ds:i=11;break e;case fs:i=14;break e;case qt:i=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=ft(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Nn(e,t,n,r){return e=ft(7,e,r,t),e.lanes=n,e}function Zl(e,t,n,r){return e=ft(22,e,r,t),e.elementType=dd,e.lanes=n,e.stateNode={isHidden:!1},e}function Vi(e,t,n){return e=ft(6,e,null,t),e.lanes=n,e}function Qi(e,t,n){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function A0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ci(0),this.expirationTimes=Ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ys(e,t,n,r,o,l,i,a,s){return e=new A0(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ft(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ps(l),e}function C0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function op(e){if(!e)return gn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Je(n))return nf(e,n,t)}return t}function lp(e,t,n,r,o,l,i,a,s){return e=Ys(n,r,!0,e,o,l,i,a,s),e.context=op(null),n=e.current,r=He(),o=fn(n),l=Wt(r,o),l.callback=t??null,cn(n,l,o),e.current.lanes=o,xo(e,o,r),qe(e,r),e}function Jl(e,t,n,r){var o=t.current,l=He(),i=fn(o);return n=op(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=cn(o,t,i),e!==null&&(bt(e,o,i,l),nl(e,o,i)),i}function Il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gs(e,t){xc(e,t),(e=e.alternate)&&xc(e,t)}function $0(){return null}var ip=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xs(e){this._internalRoot=e}ql.prototype.render=Xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Jl(e,t,null,null)};ql.prototype.unmount=Xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){Jl(null,e,null,null)}),t[Ut]=null}};function ql(e){this._internalRoot=e}ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ld();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&zd(e)}};function Ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kc(){}function T0(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=Il(i);l.call(c)}}var i=lp(t,r,e,0,null,!1,!1,"",kc);return e._reactRootContainer=i,e[Ut]=i.current,ao(e.nodeType===8?e.parentNode:e),On(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Il(s);a.call(c)}}var s=Ys(e,0,!1,null,null,!1,!1,"",kc);return e._reactRootContainer=s,e[Ut]=s.current,ao(e.nodeType===8?e.parentNode:e),On(function(){Jl(t,s,n,r)}),s}function ti(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=Il(i);a.call(s)}}Jl(t,i,e,o)}else i=T0(n,t,e,o,r);return Il(i)}Id=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Br(t.pendingLanes);n!==0&&(ms(t,n|1),qe(t,Ae()),!(le&6)&&(Sr=Ae()+500,kn()))}break;case 13:On(function(){var r=Vt(e,1);if(r!==null){var o=He();bt(r,e,1,o)}}),Gs(e,1)}};gs=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=He();bt(t,e,134217728,n)}Gs(e,134217728)}};Rd=function(e){if(e.tag===13){var t=fn(e),n=Vt(e,t);if(n!==null){var r=He();bt(n,e,t,r)}Gs(e,t)}};Ld=function(){return ue};Od=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}};ha=function(e,t,n){switch(t){case"input":if(aa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Vl(r);if(!o)throw Error(I(90));pd(r),aa(r,o)}}}break;case"textarea":md(e,n);break;case"select":t=n.value,t!=null&&cr(e,!!n.multiple,t,!1)}};Sd=Hs;Ed=On;var D0={usingClientEntryPoint:!1,Events:[So,er,Vl,xd,kd,Hs]},Or={findFiberByHostInstance:An,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},P0={bundleType:Or.bundleType,version:Or.version,rendererPackageName:Or.rendererPackageName,rendererConfig:Or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cd(e),e===null?null:e.stateNode},findFiberByHostInstance:Or.findFiberByHostInstance||$0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uo.isDisabled&&Uo.supportsFiber)try{Fl=Uo.inject(P0),Nt=Uo}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D0;it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ks(t))throw Error(I(200));return C0(e,t,null,n)};it.createRoot=function(e,t){if(!Ks(e))throw Error(I(299));var n=!1,r="",o=ip;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ys(e,1,!1,null,null,n,!1,r,o),e[Ut]=t.current,ao(e.nodeType===8?e.parentNode:e),new Xs(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Cd(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return On(e)};it.hydrate=function(e,t,n){if(!ei(t))throw Error(I(200));return ti(null,e,t,!0,n)};it.hydrateRoot=function(e,t,n){if(!Ks(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=ip;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=lp(t,null,e,1,n??null,o,!1,l,i),e[Ut]=t.current,ao(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ql(t)};it.render=function(e,t,n){if(!ei(t))throw Error(I(200));return ti(null,e,t,!1,n)};it.unmountComponentAtNode=function(e){if(!ei(e))throw Error(I(40));return e._reactRootContainer?(On(function(){ti(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};it.unstable_batchedUpdates=Hs;it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ei(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return ti(e,t,n,!1,r)};it.version="18.2.0-next-9e3b772b8-20220608";function ap(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ap)}catch(e){console.error(e)}}ap(),od.exports=it;var ni=od.exports,Sc=ni;ea.createRoot=Sc.createRoot,ea.hydrateRoot=Sc.hydrateRoot;var sp={exports:{}},ce={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ne=typeof Symbol=="function"&&Symbol.for,Zs=Ne?Symbol.for("react.element"):60103,Js=Ne?Symbol.for("react.portal"):60106,ri=Ne?Symbol.for("react.fragment"):60107,oi=Ne?Symbol.for("react.strict_mode"):60108,li=Ne?Symbol.for("react.profiler"):60114,ii=Ne?Symbol.for("react.provider"):60109,ai=Ne?Symbol.for("react.context"):60110,qs=Ne?Symbol.for("react.async_mode"):60111,si=Ne?Symbol.for("react.concurrent_mode"):60111,ui=Ne?Symbol.for("react.forward_ref"):60112,ci=Ne?Symbol.for("react.suspense"):60113,N0=Ne?Symbol.for("react.suspense_list"):60120,di=Ne?Symbol.for("react.memo"):60115,fi=Ne?Symbol.for("react.lazy"):60116,_0=Ne?Symbol.for("react.block"):60121,I0=Ne?Symbol.for("react.fundamental"):60117,R0=Ne?Symbol.for("react.responder"):60118,L0=Ne?Symbol.for("react.scope"):60119;function st(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Zs:switch(e=e.type,e){case qs:case si:case ri:case li:case oi:case ci:return e;default:switch(e=e&&e.$$typeof,e){case ai:case ui:case fi:case di:case ii:return e;default:return t}}case Js:return t}}}function up(e){return st(e)===si}ce.AsyncMode=qs;ce.ConcurrentMode=si;ce.ContextConsumer=ai;ce.ContextProvider=ii;ce.Element=Zs;ce.ForwardRef=ui;ce.Fragment=ri;ce.Lazy=fi;ce.Memo=di;ce.Portal=Js;ce.Profiler=li;ce.StrictMode=oi;ce.Suspense=ci;ce.isAsyncMode=function(e){return up(e)||st(e)===qs};ce.isConcurrentMode=up;ce.isContextConsumer=function(e){return st(e)===ai};ce.isContextProvider=function(e){return st(e)===ii};ce.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zs};ce.isForwardRef=function(e){return st(e)===ui};ce.isFragment=function(e){return st(e)===ri};ce.isLazy=function(e){return st(e)===fi};ce.isMemo=function(e){return st(e)===di};ce.isPortal=function(e){return st(e)===Js};ce.isProfiler=function(e){return st(e)===li};ce.isStrictMode=function(e){return st(e)===oi};ce.isSuspense=function(e){return st(e)===ci};ce.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ri||e===si||e===li||e===oi||e===ci||e===N0||typeof e=="object"&&e!==null&&(e.$$typeof===fi||e.$$typeof===di||e.$$typeof===ii||e.$$typeof===ai||e.$$typeof===ui||e.$$typeof===I0||e.$$typeof===R0||e.$$typeof===L0||e.$$typeof===_0)};ce.typeOf=st;sp.exports=ce;var eu=sp.exports;function O0(e){function t(O,D,N,z,v){for(var W=0,L=0,P=0,B=0,V,H,Z=0,ie=0,G,se=G=V=0,J=0,fe=0,Qe=0,Ee=0,Gt=N.length,gt=Gt-1,Ye,X="",be="",wi="",xi="",Xt;J<Gt;){if(H=N.charCodeAt(J),J===gt&&L+B+P+W!==0&&(L!==0&&(H=L===47?10:47),B=P=W=0,Gt++,gt++),L+B+P+W===0){if(J===gt&&(0<fe&&(X=X.replace(m,"")),0<X.trim().length)){switch(H){case 32:case 9:case 59:case 13:case 10:break;default:X+=N.charAt(J)}H=59}switch(H){case 123:for(X=X.trim(),V=X.charCodeAt(0),G=1,Ee=++J;J<Gt;){switch(H=N.charCodeAt(J)){case 123:G++;break;case 125:G--;break;case 47:switch(H=N.charCodeAt(J+1)){case 42:case 47:e:{for(se=J+1;se<gt;++se)switch(N.charCodeAt(se)){case 47:if(H===42&&N.charCodeAt(se-1)===42&&J+2!==se){J=se+1;break e}break;case 10:if(H===47){J=se+1;break e}}J=se}}break;case 91:H++;case 40:H++;case 34:case 39:for(;J++<gt&&N.charCodeAt(J)!==H;);}if(G===0)break;J++}switch(G=N.substring(Ee,J),V===0&&(V=(X=X.replace(p,"").trim()).charCodeAt(0)),V){case 64:switch(0<fe&&(X=X.replace(m,"")),H=X.charCodeAt(1),H){case 100:case 109:case 115:case 45:fe=D;break;default:fe=me}if(G=t(D,fe,G,H,v+1),Ee=G.length,0<$&&(fe=n(me,X,Qe),Xt=a(3,G,fe,D,re,K,Ee,H,v,z),X=fe.join(""),Xt!==void 0&&(Ee=(G=Xt.trim()).length)===0&&(H=0,G="")),0<Ee)switch(H){case 115:X=X.replace(b,i);case 100:case 109:case 45:G=X+"{"+G+"}";break;case 107:X=X.replace(u,"$1 $2"),G=X+"{"+G+"}",G=ee===1||ee===2&&l("@"+G,3)?"@-webkit-"+G+"@"+G:"@"+G;break;default:G=X+G,z===112&&(G=(be+=G,""))}else G="";break;default:G=t(D,n(D,X,Qe),G,z,v+1)}wi+=G,G=Qe=fe=se=V=0,X="",H=N.charCodeAt(++J);break;case 125:case 59:if(X=(0<fe?X.replace(m,""):X).trim(),1<(Ee=X.length))switch(se===0&&(V=X.charCodeAt(0),V===45||96<V&&123>V)&&(Ee=(X=X.replace(" ",":")).length),0<$&&(Xt=a(1,X,D,O,re,K,be.length,z,v,z))!==void 0&&(Ee=(X=Xt.trim()).length)===0&&(X="\0\0"),V=X.charCodeAt(0),H=X.charCodeAt(1),V){case 0:break;case 64:if(H===105||H===99){xi+=X+N.charAt(J);break}default:X.charCodeAt(Ee-1)!==58&&(be+=o(X,V,H,X.charCodeAt(2)))}Qe=fe=se=V=0,X="",H=N.charCodeAt(++J)}}switch(H){case 13:case 10:L===47?L=0:1+V===0&&z!==107&&0<X.length&&(fe=1,X+="\0"),0<$*Q&&a(0,X,D,O,re,K,be.length,z,v,z),K=1,re++;break;case 59:case 125:if(L+B+P+W===0){K++;break}default:switch(K++,Ye=N.charAt(J),H){case 9:case 32:if(B+W+L===0)switch(Z){case 44:case 58:case 9:case 32:Ye="";break;default:H!==32&&(Ye=" ")}break;case 0:Ye="\\0";break;case 12:Ye="\\f";break;case 11:Ye="\\v";break;case 38:B+L+W===0&&(fe=Qe=1,Ye="\f"+Ye);break;case 108:if(B+L+W+oe===0&&0<se)switch(J-se){case 2:Z===112&&N.charCodeAt(J-3)===58&&(oe=Z);case 8:ie===111&&(oe=ie)}break;case 58:B+L+W===0&&(se=J);break;case 44:L+P+B+W===0&&(fe=1,Ye+="\r");break;case 34:case 39:L===0&&(B=B===H?0:B===0?H:B);break;case 91:B+L+P===0&&W++;break;case 93:B+L+P===0&&W--;break;case 41:B+L+W===0&&P--;break;case 40:if(B+L+W===0){if(V===0)switch(2*Z+3*ie){case 533:break;default:V=1}P++}break;case 64:L+P+B+W+se+G===0&&(G=1);break;case 42:case 47:if(!(0<B+W+P))switch(L){case 0:switch(2*H+3*N.charCodeAt(J+1)){case 235:L=47;break;case 220:Ee=J,L=42}break;case 42:H===47&&Z===42&&Ee+2!==J&&(N.charCodeAt(Ee+2)===33&&(be+=N.substring(Ee,J+1)),Ye="",L=0)}}L===0&&(X+=Ye)}ie=Z,Z=H,J++}if(Ee=be.length,0<Ee){if(fe=D,0<$&&(Xt=a(2,be,fe,O,re,K,Ee,z,v,z),Xt!==void 0&&(be=Xt).length===0))return xi+be+wi;if(be=fe.join(",")+"{"+be+"}",ee*oe!==0){switch(ee!==2||l(be,2)||(oe=0),oe){case 111:be=be.replace(g,":-moz-$1")+be;break;case 112:be=be.replace(d,"::-webkit-input-$1")+be.replace(d,"::-moz-$1")+be.replace(d,":-ms-input-$1")+be}oe=0}}return xi+be+wi}function n(O,D,N){var z=D.trim().split(T);D=z;var v=z.length,W=O.length;switch(W){case 0:case 1:var L=0;for(O=W===0?"":O[0]+" ";L<v;++L)D[L]=r(O,D[L],N).trim();break;default:var P=L=0;for(D=[];L<v;++L)for(var B=0;B<W;++B)D[P++]=r(O[B]+" ",z[L],N).trim()}return D}function r(O,D,N){var z=D.charCodeAt(0);switch(33>z&&(z=(D=D.trim()).charCodeAt(0)),z){case 38:return D.replace(f,"$1"+O.trim());case 58:return O.trim()+D.replace(f,"$1"+O.trim());default:if(0<1*N&&0<D.indexOf("\f"))return D.replace(f,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+D}function o(O,D,N,z){var v=O+";",W=2*D+3*N+4*z;if(W===944){O=v.indexOf(":",9)+1;var L=v.substring(O,v.length-1).trim();return L=v.substring(0,O).trim()+L+";",ee===1||ee===2&&l(L,1)?"-webkit-"+L+L:L}if(ee===0||ee===2&&!l(v,1))return v;switch(W){case 1015:return v.charCodeAt(10)===97?"-webkit-"+v+v:v;case 951:return v.charCodeAt(3)===116?"-webkit-"+v+v:v;case 963:return v.charCodeAt(5)===110?"-webkit-"+v+v:v;case 1009:if(v.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+v+v;case 978:return"-webkit-"+v+"-moz-"+v+v;case 1019:case 983:return"-webkit-"+v+"-moz-"+v+"-ms-"+v+v;case 883:if(v.charCodeAt(8)===45)return"-webkit-"+v+v;if(0<v.indexOf("image-set(",11))return v.replace(q,"$1-webkit-$2")+v;break;case 932:if(v.charCodeAt(4)===45)switch(v.charCodeAt(5)){case 103:return"-webkit-box-"+v.replace("-grow","")+"-webkit-"+v+"-ms-"+v.replace("grow","positive")+v;case 115:return"-webkit-"+v+"-ms-"+v.replace("shrink","negative")+v;case 98:return"-webkit-"+v+"-ms-"+v.replace("basis","preferred-size")+v}return"-webkit-"+v+"-ms-"+v+v;case 964:return"-webkit-"+v+"-ms-flex-"+v+v;case 1023:if(v.charCodeAt(8)!==99)break;return L=v.substring(v.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+L+"-webkit-"+v+"-ms-flex-pack"+L+v;case 1005:return x.test(v)?v.replace(S,":-webkit-")+v.replace(S,":-moz-")+v:v;case 1e3:switch(L=v.substring(13).trim(),D=L.indexOf("-")+1,L.charCodeAt(0)+L.charCodeAt(D)){case 226:L=v.replace(w,"tb");break;case 232:L=v.replace(w,"tb-rl");break;case 220:L=v.replace(w,"lr");break;default:return v}return"-webkit-"+v+"-ms-"+L+v;case 1017:if(v.indexOf("sticky",9)===-1)break;case 975:switch(D=(v=O).length-10,L=(v.charCodeAt(D)===33?v.substring(0,D):v).substring(O.indexOf(":",7)+1).trim(),W=L.charCodeAt(0)+(L.charCodeAt(7)|0)){case 203:if(111>L.charCodeAt(8))break;case 115:v=v.replace(L,"-webkit-"+L)+";"+v;break;case 207:case 102:v=v.replace(L,"-webkit-"+(102<W?"inline-":"")+"box")+";"+v.replace(L,"-webkit-"+L)+";"+v.replace(L,"-ms-"+L+"box")+";"+v}return v+";";case 938:if(v.charCodeAt(5)===45)switch(v.charCodeAt(6)){case 105:return L=v.replace("-items",""),"-webkit-"+v+"-webkit-box-"+L+"-ms-flex-"+L+v;case 115:return"-webkit-"+v+"-ms-flex-item-"+v.replace(R,"")+v;default:return"-webkit-"+v+"-ms-flex-line-pack"+v.replace("align-content","").replace(R,"")+v}break;case 973:case 989:if(v.charCodeAt(3)!==45||v.charCodeAt(4)===122)break;case 931:case 953:if(U.test(O)===!0)return(L=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?o(O.replace("stretch","fill-available"),D,N,z).replace(":fill-available",":stretch"):v.replace(L,"-webkit-"+L)+v.replace(L,"-moz-"+L.replace("fill-",""))+v;break;case 962:if(v="-webkit-"+v+(v.charCodeAt(5)===102?"-ms-"+v:"")+v,N+z===211&&v.charCodeAt(13)===105&&0<v.indexOf("transform",10))return v.substring(0,v.indexOf(";",27)+1).replace(E,"$1-webkit-$2")+v}return v}function l(O,D){var N=O.indexOf(D===1?":":"{"),z=O.substring(0,D!==3?N:10);return N=O.substring(N+1,O.length-1),M(D!==2?z:z.replace(Y,"$1"),N,D)}function i(O,D){var N=o(D,D.charCodeAt(0),D.charCodeAt(1),D.charCodeAt(2));return N!==D+";"?N.replace(C," or ($1)").substring(4):"("+D+")"}function a(O,D,N,z,v,W,L,P,B,V){for(var H=0,Z=D,ie;H<$;++H)switch(ie=ae[H].call(h,O,Z,N,z,v,W,L,P,B,V)){case void 0:case!1:case!0:case null:break;default:Z=ie}if(Z!==D)return Z}function s(O){switch(O){case void 0:case null:$=ae.length=0;break;default:if(typeof O=="function")ae[$++]=O;else if(typeof O=="object")for(var D=0,N=O.length;D<N;++D)s(O[D]);else Q=!!O|0}return s}function c(O){return O=O.prefix,O!==void 0&&(M=null,O?typeof O!="function"?ee=1:(ee=2,M=O):ee=0),c}function h(O,D){var N=O;if(33>N.charCodeAt(0)&&(N=N.trim()),ne=N,N=[ne],0<$){var z=a(-1,D,N,N,re,K,0,0,0,0);z!==void 0&&typeof z=="string"&&(D=z)}var v=t(me,N,D,0,0);return 0<$&&(z=a(-2,v,N,N,re,K,v.length,0,0,0),z!==void 0&&(v=z)),ne="",oe=0,K=re=1,v}var p=/^\0+/g,m=/[\0\r\f]/g,S=/: */g,x=/zoo|gra/,E=/([,: ])(transform)/g,T=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,u=/@(k\w+)\s*(\S*)\s*/,d=/::(place)/g,g=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,b=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,R=/-self|flex-/g,Y=/[^]*?(:[rp][el]a[\w-]+)[^]*/,U=/stretch|:\s*\w+\-(?:conte|avail)/,q=/([^-])(image-set\()/,K=1,re=1,oe=0,ee=1,me=[],ae=[],$=0,M=null,Q=0,ne="";return h.use=s,h.set=c,e!==void 0&&c(e),h}var z0={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function M0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var j0=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ec=M0(function(e){return j0.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),tu=eu,B0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},F0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},W0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nu={};nu[tu.ForwardRef]=W0;nu[tu.Memo]=cp;function bc(e){return tu.isMemo(e)?cp:nu[e.$$typeof]||B0}var H0=Object.defineProperty,U0=Object.getOwnPropertyNames,Ac=Object.getOwnPropertySymbols,V0=Object.getOwnPropertyDescriptor,Q0=Object.getPrototypeOf,Cc=Object.prototype;function dp(e,t,n){if(typeof t!="string"){if(Cc){var r=Q0(t);r&&r!==Cc&&dp(e,r,n)}var o=U0(t);Ac&&(o=o.concat(Ac(t)));for(var l=bc(e),i=bc(t),a=0;a<o.length;++a){var s=o[a];if(!F0[s]&&!(n&&n[s])&&!(i&&i[s])&&!(l&&l[s])){var c=V0(t,s);try{H0(e,s,c)}catch{}}}}return e}var Y0=dp;const G0=jl(Y0);var ut={};function St(){return(St=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var $c=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Ya=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!eu.typeOf(e)},Rl=Object.freeze([]),hn=Object.freeze({});function Er(e){return typeof e=="function"}function Tc(e){return e.displayName||e.name||"Component"}function ru(e){return e&&typeof e.styledComponentId=="string"}var br=typeof process<"u"&&ut!==void 0&&(ut.REACT_APP_SC_ATTR||ut.SC_ATTR)||"data-styled",ou=typeof window<"u"&&"HTMLElement"in window,X0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&(ut.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==""?ut.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ut.REACT_APP_SC_DISABLE_SPEEDY:ut.SC_DISABLE_SPEEDY!==void 0&&ut.SC_DISABLE_SPEEDY!==""&&ut.SC_DISABLE_SPEEDY!=="false"&&ut.SC_DISABLE_SPEEDY)),K0={};function zn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Z0=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,l=o.length,i=l;n>=i;)(i<<=1)<0&&zn(16,""+n);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var a=l;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),c=0,h=r.length;c<h;c++)this.tag.insertRule(s,r[c])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),l=o+r;this.groupSizes[n]=0;for(var i=o;i<l;i++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],l=this.indexOfGroup(n),i=l+o,a=l;a<i;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),ul=new Map,Ll=new Map,Jr=1,Vo=function(e){if(ul.has(e))return ul.get(e);for(;Ll.has(Jr);)Jr++;var t=Jr++;return ul.set(e,t),Ll.set(t,e),t},J0=function(e){return Ll.get(e)},q0=function(e,t){t>=Jr&&(Jr=t+1),ul.set(e,t),Ll.set(t,e)},eg="style["+br+'][data-styled-version="5.3.11"]',tg=new RegExp("^"+br+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ng=function(e,t,n){for(var r,o=n.split(","),l=0,i=o.length;l<i;l++)(r=o[l])&&e.registerName(t,r)},rg=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,l=n.length;o<l;o++){var i=n[o].trim();if(i){var a=i.match(tg);if(a){var s=0|parseInt(a[1],10),c=a[2];s!==0&&(q0(c,s),ng(e,c,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(i)}}},og=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},fp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){for(var s=a.childNodes,c=s.length;c>=0;c--){var h=s[c];if(h&&h.nodeType===1&&h.hasAttribute(br))return h}}(n),l=o!==void 0?o.nextSibling:null;r.setAttribute(br,"active"),r.setAttribute("data-styled-version","5.3.11");var i=og();return i&&r.setAttribute("nonce",i),n.insertBefore(r,l),r},lg=function(){function e(n){var r=this.element=fp(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var l=document.styleSheets,i=0,a=l.length;i<a;i++){var s=l[i];if(s.ownerNode===o)return s}zn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),ig=function(){function e(n){var r=this.element=fp(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),l=this.nodes[n];return this.element.insertBefore(o,l||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),ag=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Dc=ou,sg={isServer:!ou,useCSSOMInjection:!X0},Ol=function(){function e(n,r,o){n===void 0&&(n=hn),r===void 0&&(r={}),this.options=St({},sg,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&ou&&Dc&&(Dc=!1,function(l){for(var i=document.querySelectorAll(eg),a=0,s=i.length;a<s;a++){var c=i[a];c&&c.getAttribute(br)!=="active"&&(rg(l,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Vo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(St({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,l=r.useCSSOMInjection,i=r.target,n=o?new ag(i):l?new lg(i):new ig(i),new Z0(n)));var n,r,o,l,i},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Vo(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Vo(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Vo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,l="",i=0;i<o;i++){var a=J0(i);if(a!==void 0){var s=n.names.get(a),c=r.getGroup(i);if(s&&c&&s.size){var h=br+".g"+i+'[id="'+a+'"]',p="";s!==void 0&&s.forEach(function(m){m.length>0&&(p+=m+",")}),l+=""+c+h+'{content:"'+p+`"}/*!sc*/
`}}}return l}(this)},e}(),ug=/(a)(d)/gi,Pc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ga(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Pc(t%52)+n;return(Pc(t%52)+n).replace(ug,"$1-$2")}var ar=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},pp=function(e){return ar(5381,e)};function hp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Er(n)&&!ru(n))return!1}return!0}var cg=pp("5.3.11"),dg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&hp(t),this.componentId=n,this.baseHash=ar(cg,n),this.baseStyle=r,Ol.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,l=[];if(this.baseStyle&&l.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))l.push(this.staticRulesId);else{var i=Mn(this.rules,t,n,r).join(""),a=Ga(ar(this.baseHash,i)>>>0);if(!n.hasNameForId(o,a)){var s=r(i,"."+a,void 0,o);n.insertRules(o,a,s)}l.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,h=ar(this.baseHash,r.hash),p="",m=0;m<c;m++){var S=this.rules[m];if(typeof S=="string")p+=S;else if(S){var x=Mn(S,t,n,r),E=Array.isArray(x)?x.join(""):x;h=ar(h,E+m),p+=E}}if(p){var T=Ga(h>>>0);if(!n.hasNameForId(o,T)){var f=r(p,"."+T,void 0,o);n.insertRules(o,T,f)}l.push(T)}}return l.join(" ")},e}(),fg=/^\s*\/\/.*$/gm,pg=[":","[",".","#"];function hg(e){var t,n,r,o,l=e===void 0?hn:e,i=l.options,a=i===void 0?hn:i,s=l.plugins,c=s===void 0?Rl:s,h=new O0(a),p=[],m=function(E){function T(f){if(f)try{E(f+"}")}catch{}}return function(f,u,d,g,w,b,C,R,Y,U){switch(f){case 1:if(Y===0&&u.charCodeAt(0)===64)return E(u+";"),"";break;case 2:if(R===0)return u+"/*|*/";break;case 3:switch(R){case 102:case 112:return E(d[0]+u),"";default:return u+(U===0?"/*|*/":"")}case-2:u.split("/*|*/}").forEach(T)}}}(function(E){p.push(E)}),S=function(E,T,f){return T===0&&pg.indexOf(f[n.length])!==-1||f.match(o)?E:"."+t};function x(E,T,f,u){u===void 0&&(u="&");var d=E.replace(fg,""),g=T&&f?f+" "+T+" { "+d+" }":d;return t=u,n=T,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),h(f||!T?"":T,g)}return h.use([].concat(c,[function(E,T,f){E===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,S))},m,function(E){if(E===-2){var T=p;return p=[],T}}])),x.hash=c.length?c.reduce(function(E,T){return T.name||zn(15),ar(E,T.name)},5381).toString():"",x}var mp=k.createContext();mp.Consumer;var gp=k.createContext(),mg=(gp.Consumer,new Ol),Xa=hg();function vp(){return y.useContext(mp)||mg}function yp(){return y.useContext(gp)||Xa}var gg=function(){function e(t,n){var r=this;this.inject=function(o,l){l===void 0&&(l=Xa);var i=r.name+l.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,l(r.rules,i,"@keyframes"))},this.toString=function(){return zn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Xa),this.name+t.hash},e}(),vg=/([A-Z])/,yg=/([A-Z])/g,wg=/^ms-/,xg=function(e){return"-"+e.toLowerCase()};function Nc(e){return vg.test(e)?e.replace(yg,xg).replace(wg,"-ms-"):e}var _c=function(e){return e==null||e===!1||e===""};function Mn(e,t,n,r){if(Array.isArray(e)){for(var o,l=[],i=0,a=e.length;i<a;i+=1)(o=Mn(e[i],t,n,r))!==""&&(Array.isArray(o)?l.push.apply(l,o):l.push(o));return l}if(_c(e))return"";if(ru(e))return"."+e.styledComponentId;if(Er(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var s=e(t);return Mn(s,t,n,r)}var c;return e instanceof gg?n?(e.inject(n,r),e.getName(r)):e:Ya(e)?function h(p,m){var S,x,E=[];for(var T in p)p.hasOwnProperty(T)&&!_c(p[T])&&(Array.isArray(p[T])&&p[T].isCss||Er(p[T])?E.push(Nc(T)+":",p[T],";"):Ya(p[T])?E.push.apply(E,h(p[T],T)):E.push(Nc(T)+": "+(S=T,(x=p[T])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||S in z0||S.startsWith("--")?String(x).trim():x+"px")+";"));return m?[m+" {"].concat(E,["}"]):E}(e):e.toString()}var Ic=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Er(e)||Ya(e)?Ic(Mn($c(Rl,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Ic(Mn($c(e,n)))}var wp=function(e,t,n){return n===void 0&&(n=hn),e.theme!==n.theme&&e.theme||t||n.theme},kg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Sg=/(^-|-$)/g;function Yi(e){return e.replace(kg,"-").replace(Sg,"")}var xp=function(e){return Ga(pp(e)>>>0)};function Qo(e){return typeof e=="string"&&!0}var Ka=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Eg=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function bg(e,t,n){var r=e[n];Ka(t)&&Ka(r)?kp(r,t):e[n]=t}function kp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,l=n;o<l.length;o++){var i=l[o];if(Ka(i))for(var a in i)Eg(a)&&bg(e,i[a],a)}return e}var vo=k.createContext();vo.Consumer;function Ag(e){var t=y.useContext(vo),n=y.useMemo(function(){return function(r,o){if(!r)return zn(14);if(Er(r)){var l=r(o);return l}return Array.isArray(r)||typeof r!="object"?zn(8):o?St({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?k.createElement(vo.Provider,{value:n},e.children):null}var Gi={};function Sp(e,t,n){var r=ru(e),o=!Qo(e),l=t.attrs,i=l===void 0?Rl:l,a=t.componentId,s=a===void 0?function(u,d){var g=typeof u!="string"?"sc":Yi(u);Gi[g]=(Gi[g]||0)+1;var w=g+"-"+xp("5.3.11"+g+Gi[g]);return d?d+"-"+w:w}(t.displayName,t.parentComponentId):a,c=t.displayName,h=c===void 0?function(u){return Qo(u)?"styled."+u:"Styled("+Tc(u)+")"}(e):c,p=t.displayName&&t.componentId?Yi(t.displayName)+"-"+t.componentId:t.componentId||s,m=r&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,S=t.shouldForwardProp;r&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(u,d,g){return e.shouldForwardProp(u,d,g)&&t.shouldForwardProp(u,d,g)}:e.shouldForwardProp);var x,E=new dg(n,p,r?e.componentStyle:void 0),T=E.isStatic&&i.length===0,f=function(u,d){return function(g,w,b,C){var R=g.attrs,Y=g.componentStyle,U=g.defaultProps,q=g.foldedComponentIds,K=g.shouldForwardProp,re=g.styledComponentId,oe=g.target,ee=function(z,v,W){z===void 0&&(z=hn);var L=St({},v,{theme:z}),P={};return W.forEach(function(B){var V,H,Z,ie=B;for(V in Er(ie)&&(ie=ie(L)),ie)L[V]=P[V]=V==="className"?(H=P[V],Z=ie[V],H&&Z?H+" "+Z:H||Z):ie[V]}),[L,P]}(wp(w,y.useContext(vo),U)||hn,w,R),me=ee[0],ae=ee[1],$=function(z,v,W,L){var P=vp(),B=yp(),V=v?z.generateAndInjectStyles(hn,P,B):z.generateAndInjectStyles(W,P,B);return V}(Y,C,me),M=b,Q=ae.$as||w.$as||ae.as||w.as||oe,ne=Qo(Q),O=ae!==w?St({},w,{},ae):w,D={};for(var N in O)N[0]!=="$"&&N!=="as"&&(N==="forwardedAs"?D.as=O[N]:(K?K(N,Ec,Q):!ne||Ec(N))&&(D[N]=O[N]));return w.style&&ae.style!==w.style&&(D.style=St({},w.style,{},ae.style)),D.className=Array.prototype.concat(q,re,$!==re?$:null,w.className,ae.className).filter(Boolean).join(" "),D.ref=M,y.createElement(Q,D)}(x,u,d,T)};return f.displayName=h,(x=k.forwardRef(f)).attrs=m,x.componentStyle=E,x.displayName=h,x.shouldForwardProp=S,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Rl,x.styledComponentId=p,x.target=r?e.target:e,x.withComponent=function(u){var d=t.componentId,g=function(b,C){if(b==null)return{};var R,Y,U={},q=Object.keys(b);for(Y=0;Y<q.length;Y++)R=q[Y],C.indexOf(R)>=0||(U[R]=b[R]);return U}(t,["componentId"]),w=d&&d+"-"+(Qo(u)?u:Yi(Tc(u)));return Sp(u,St({},g,{attrs:m,componentId:w}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(u){this._foldedDefaultProps=r?kp({},e.defaultProps,u):u}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),o&&G0(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var Za=function(e){return function t(n,r,o){if(o===void 0&&(o=hn),!eu.isValidElementType(r))return zn(1,String(r));var l=function(){return n(r,o,j.apply(void 0,arguments))};return l.withConfig=function(i){return t(n,r,St({},o,{},i))},l.attrs=function(i){return t(n,r,St({},o,{attrs:Array.prototype.concat(o.attrs,i).filter(Boolean)}))},l}(Sp,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Za[e]=Za(e)});var Cg=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=hp(n),Ol.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,l){var i=l(Mn(this.rules,r,o,l).join(""),""),a=this.componentId+n;o.insertRules(a,a,i)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,l){n>2&&Ol.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,l)},e}();function $g(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=j.apply(void 0,[e].concat(n)),l="sc-global-"+xp(JSON.stringify(o)),i=new Cg(o,l);function a(c){var h=vp(),p=yp(),m=y.useContext(vo),S=y.useRef(h.allocateGSInstance(l)).current;return h.server&&s(S,c,h,m,p),y.useLayoutEffect(function(){if(!h.server)return s(S,c,h,m,p),function(){return i.removeStyles(S,h)}},[S,c,h,m,p]),null}function s(c,h,p,m,S){if(i.isStatic)i.renderStyles(c,K0,p,S);else{var x=St({},h,{theme:wp(h,m,a.defaultProps)});i.renderStyles(c,x,p,S)}}return k.memo(a)}const _=Za;var Tg=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`;const lu="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",iu="inset 2px 2px 3px rgba(0,0,0,0.2)",Ct=()=>j`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,$t=({background:e="material",color:t="materialText"}={})=>j`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,bo=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>j`
  background-image: ${[`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`,`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`].join(",")};
  background-color: ${t};
  background-size: ${`${n*2}px ${n*2}px`};
  background-position: 0 0, ${`${n}px ${n}px`};
`,jn=()=>j`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Gn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Dg=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?lu:!1,o?iu:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),ke=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return j`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Gn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Gn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Gn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Gn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>Dg({theme:r,topLeftInner:Gn[t][n.topLeftInner],bottomRightInner:Gn[t][n.bottomRightInner],hasShadow:o})};
  `},Ar=()=>j`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,Pg=e=>Buffer.from(e).toString("base64"),Ng=typeof btoa<"u"?btoa:Pg,Yo=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${Ng(n)})`},au=(e="default")=>j`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>bo({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${$t()}
    ${e==="flat"?jn():ke({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${$t()}
    ${e==="flat"?jn():ke({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${e==="default"?ke({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>Yo(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>Yo(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>Yo(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>Yo(t.materialText,0)};
  }
`,_g=_.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,Ja=y.forwardRef(({children:e,underline:t=!0,...n},r)=>k.createElement(_g,{ref:r,underline:t,...n},e));Ja.displayName="Anchor";const Ig=_.header`
  ${ke()};
  ${$t()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Ep=y.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>k.createElement(Ig,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));Ep.displayName="AppBar";const Wn=()=>{};function Tn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function Rg(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Rc(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(Rg(t)))}function vn(e){return typeof e=="number"?`${e}px`:e}const Lg=_.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:t})=>!e&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:e})=>!e&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Og=_.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,zg=y.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:l,...i},a)=>k.createElement(Lg,{noBorder:n,ref:a,size:vn(r),square:o,src:l,...i},l?k.createElement(Og,{src:l,alt:e}):t));zg.displayName="Avatar";const Re={sm:"28px",md:"36px",lg:"44px"},Mg=j`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>Re[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?Re[t]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:t})=>e&&!t&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,pi=_.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?j`
          ${jn()}
          ${n?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!e&&!t&&Ar}
            outline-offset: -4px;
          }
        `:o==="menu"||o==="thin"?j`
          ${$t()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&ke({style:"buttonThin"})}
          }
          &:active {
            ${!t&&ke({style:"buttonThinPressed"})}
          }
          ${e&&ke({style:"buttonThinPressed"})}
          ${t&&Ct()}
        `:j`
          ${$t()};
          border: none;
          ${t&&Ct()}
          ${e?bo({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${n?j`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:j`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${ke(e?{style:o==="raised"?"window":"button",invert:!0}:{style:o==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&ke({style:o==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&Ar}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${Mg}
`,yo=y.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:l="md",square:i=!1,active:a=!1,onTouchStart:s=Wn,primary:c=!1,variant:h="default",...p},m)=>k.createElement(pi,{active:a,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:c,ref:m,size:l,square:i,type:r,variant:h,...p},n));yo.displayName="Button";function yn({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:l="value"}){const i=o!==void 0,[a,s]=y.useState(e),c=y.useCallback(h=>{i||s(h)},[i]);if(i&&typeof t!="function"&&!r){const h=`Warning: You provided a \`${l}\` prop to a component without an \`${n}\` handler.${l==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${l}\`.`}`;console.warn(h)}return[i?o:a,c]}const qa=_.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>Re[e.size]};
  width: ${e=>e.square?Re[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>Re[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:t})=>!t&&`
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${e=>e.$disabled&&Ct()}
`,Wr=y.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:l,...i},a)=>k.createElement(qa,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:l,role:"menuitem",ref:a,"aria-disabled":t,...i},r));Wr.displayName="MenuListItem";const bp=_.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${ke({style:"window"})}
  ${$t()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;bp.displayName="MenuList";const It=20,zl=_.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${It}px;
  height: ${It}px;
  opacity: 0;
  z-index: -1;
`,su=_.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&Ct()}

  ${qa} & {
    margin: 0;
    height: 100%;
  }
  ${qa}:hover & {
    ${({$disabled:e,theme:t})=>!e&&j`
        color: ${t.materialTextInvert};
      `};
  }
`,uu=_.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${zl}:focus ~ & {
    ${Ar}
  }
  ${zl}:not(:disabled) ~ &:active {
    ${Ar}
  }
`,Rt=_.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${iu};`}
  }
`,jg=_.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${au()}
`,Ap=y.forwardRef(({children:e,shadow:t=!0,...n},r)=>k.createElement(Rt,{ref:r,shadow:t,...n},k.createElement(jg,null,e)));Ap.displayName="ScrollView";const Cp=j`
  width: ${It}px;
  height: ${It}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Bg=_(Rt)`
  ${Cp}
  width: ${It}px;
  height: ${It}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,Fg=_.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${Cp}
  width: ${It-4}px;
  height: ${It-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,Wg=_.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:e,theme:t})=>e?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,Hg=_.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>bo({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Ug={flat:Fg,default:Bg},Vg=y.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:l="",onChange:i=Wn,style:a={},value:s,variant:c="default",...h},p)=>{var m;const[S,x]=yn({defaultValue:n,onChange:i,readOnly:(m=h.readOnly)!==null&&m!==void 0?m:r,value:e}),E=y.useCallback(u=>{const d=u.target.checked;x(d),i(u)},[i,x]),T=Ug[c];let f=null;return o?f=Hg:S&&(f=Wg),k.createElement(su,{$disabled:r,className:t,style:a},k.createElement(zl,{disabled:r,onChange:r?void 0:E,readOnly:r,type:"checkbox",value:s,checked:S,"data-indeterminate":o,ref:p,...h}),k.createElement(T,{$disabled:r,role:"presentation"},f&&k.createElement(f,{$disabled:r,variant:c})),l&&k.createElement(uu,null,l))});Vg.displayName="Checkbox";const $p=_.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${vn(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${vn(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;$p.displayName="Separator";const Qg=_(pi)`
  padding-left: 8px;
`,Yg=_($p)`
  height: 21px;
  position: relative;
  top: 0;
`,Tp=_.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,Gg=_.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?j`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:j`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${Tp}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Ar}
    outline-offset: -8px;
  }
`,Xg=_.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?j`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:j`
          border-top: 6px solid ${({theme:t})=>t.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>e==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,Kg=y.forwardRef(({value:e,defaultValue:t,onChange:n=Wn,disabled:r=!1,variant:o="default",...l},i)=>{var a;const[s,c]=yn({defaultValue:t,onChange:n,readOnly:(a=l.readOnly)!==null&&a!==void 0?a:r,value:e}),h=p=>{const m=p.target.value;c(m),n(p)};return k.createElement(Qg,{disabled:r,as:"div",variant:o,size:"md"},k.createElement(Tp,{onChange:h,readOnly:r,disabled:r,value:s??"#008080",type:"color",ref:i,...l}),k.createElement(Gg,{$disabled:r,color:s??"#008080",role:"presentation"}),o==="default"&&k.createElement(Yg,{orientation:"vertical"}),k.createElement(Xg,{$disabled:r,variant:o}))});Kg.displayName="ColorInput";const Zg=_.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>j`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${bo({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${e*2}px);
      top: ${2*e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${e*2}px);
      top: ${e}px;
      left: ${e*2}px;
    }
  `}
`,Lc=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Jg=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function qg({digit:e=0,pixelSize:t=2,...n}){const r=Jg[Number(e)].map((o,l)=>o?`${Lc[l]} active`:Lc[l]);return k.createElement(Zg,{pixelSize:t,...n},r.map((o,l)=>k.createElement("span",{className:o,key:l})))}const ev=_.div`
  ${ke({style:"status"})}
  display: inline-flex;
  background: #000000;
`,tv={sm:1,md:2,lg:3,xl:4},nv=y.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const l=y.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return k.createElement(ev,{ref:o,...r},l.map((i,a)=>k.createElement(qg,{digit:i,pixelSize:tv[n],key:a})))});nv.displayName="Counter";const Dp=j`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Re.md};
`,rv=_(Rt).attrs({"data-testid":"variant-default"})`
  ${Dp}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,ov=_.div.attrs({"data-testid":"variant-flat"})`
  ${jn()}
  ${Dp}
  position: relative;
`,Pp=j`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&Ct()}
`,lv=_.input`
  ${Pp}
  padding: 0 8px;
`,iv=_.textarea`
  ${Pp}
  padding: 8px;
  resize: none;
  ${({variant:e})=>au(e)}
`,Np=y.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Wn,shadow:o=!0,style:l,variant:i="default",...a},s)=>{const c=i==="flat"?ov:rv,h=y.useMemo(()=>{var p;return a.multiline?k.createElement(iv,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:i,...a}):k.createElement(lv,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(p=a.type)!==null&&p!==void 0?p:"text",variant:i,...a})},[t,r,a,s,i]);return k.createElement(c,{className:e,fullWidth:n,$disabled:t,shadow:o,style:l},h)});Np.displayName="TextInput";const av=_.div`
  display: inline-flex;
  align-items: center;
`,es=_(yo)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?j`
          height: calc(50% - 1px);
        `:j`
          height: 50%;
        `}
`,sv=_.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?j`
          height: calc(${Re.md} - 4px);
        `:j`
          height: ${Re.md};
          margin-left: 2px;
        `}
`,Oc=_.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?j`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:j`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${es}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?j`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:j`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,_p=y.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:l,readOnly:i,step:a=1,style:s,value:c,variant:h="default",width:p,...m},S)=>{const[x,E]=yn({defaultValue:t,onChange:l,readOnly:i,value:c}),T=y.useCallback(b=>{const C=parseFloat(b.target.value);E(C)},[E]),f=y.useCallback(b=>{const C=Tn(parseFloat(((x??0)+b).toFixed(2)),o??null,r??null);E(C),l==null||l(C)},[r,o,l,E,x]),u=y.useCallback(()=>{x!==void 0&&(l==null||l(x))},[l,x]),d=y.useCallback(()=>{f(a)},[f,a]),g=y.useCallback(()=>{f(-a)},[f,a]),w=h==="flat"?"flat":"raised";return k.createElement(av,{className:e,style:{...s,width:p!==void 0?vn(p):"auto"},...m},k.createElement(Np,{value:x,variant:h,onChange:T,disabled:n,type:"number",readOnly:i,ref:S,fullWidth:!0,onBlur:u}),k.createElement(sv,{variant:h},k.createElement(es,{"data-testid":"increment",variant:w,disabled:n||i,onClick:d},k.createElement(Oc,{invert:!0})),k.createElement(es,{"data-testid":"decrement",variant:w,disabled:n||i,onClick:g},k.createElement(Oc,null))))});_p.displayName="NumberInput";function uv(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const Ip=e=>y.useMemo(()=>e??uv(),[e]),Rp=j`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Lp=j`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,cu=_.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,cv=_.div`
  ${Rp}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${cu}:focus & {
    ${Lp}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,Op=j`
  height: ${Re.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?Ct():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,dv=_(Rt)`
  ${Op}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,fv=_.div`
  ${jn()}
  ${Op}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,pv=_.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${Rp}
  cursor: pointer;
  &:disabled {
    ${Ct()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,zp=_(pi).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?j`
          height: 100%;
          margin-right: 0;
        `:j`
          height: 100%;
        `}
  ${({native:e=!1,variant:t="default"})=>e&&(t==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:e=!1,native:t=!1})=>e||t?"none":"auto"}
`,hv=_.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:e=!1,theme:t})=>e?t.materialTextDisabled:t.materialText};
  ${({$disabled:e=!1,theme:t})=>e&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${zp}:active & {
    margin-top: 2px;
  }
`,mv=_.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${lu};
  ${({variant:e="default"})=>e==="flat"?j`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:j`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>au(e)}
`,gv=_.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${Re.md} - 4px);
  line-height: calc(${Re.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?Lp:""}
  user-select: none;
`,vv=[],Mp=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:l=vv,readOnly:i,style:a,value:s,variant:c,width:h})=>{var p;const m=y.useMemo(()=>l.filter(Boolean),[l]),[S,x]=yn({defaultValue:t??((p=m==null?void 0:m[0])===null||p===void 0?void 0:p.value),onChange:o,readOnly:i,value:s}),E=!(n||i),T=y.useMemo(()=>({className:e,style:{...a,width:h}}),[e,a,h]),f=y.useMemo(()=>k.createElement(zp,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:c==="flat"?"flat":"raised"},k.createElement(hv,{"data-testid":"select-icon",$disabled:n})),[n,r,c]),u=y.useMemo(()=>c==="flat"?fv:dv,[c]);return y.useMemo(()=>({isEnabled:E,options:m,value:S,setValue:x,wrapperProps:T,DropdownButton:f,Wrapper:u}),[f,u,E,m,x,S,T])},yv={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},wv=1e3,xv=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:l,onOpen:i,open:a,options:s,readOnly:c,value:h,selectRef:p,setValue:m,wrapperRef:S})=>{const x=y.useRef(null),E=y.useRef([]),T=y.useRef(0),f=y.useRef(0),u=y.useRef(),d=y.useRef("search"),g=y.useRef(""),w=y.useRef(),[b,C]=yn({defaultValue:!1,onChange:i,onChangePropName:"onOpen",readOnly:c,value:a,valuePropName:"open"}),R=y.useMemo(()=>{const P=s.findIndex(B=>B.value===h);return T.current=Tn(P,0,null),s[P]},[s,h]),[Y,U]=y.useState(s[0]),q=y.useCallback(P=>{const B=x.current,V=E.current[P];if(!V||!B){u.current=P;return}u.current=void 0;const H=B.clientHeight,Z=B.scrollTop,ie=B.scrollTop+H,G=V.offsetTop,se=V.offsetHeight,J=V.offsetTop+V.offsetHeight;G<Z&&B.scrollTo(0,G),J>ie&&B.scrollTo(0,G-H+se),V.focus({preventScroll:!0})},[x]),K=y.useCallback((P,{scroll:B}={})=>{var V;const H=s.length-1;let Z;switch(P){case"first":{Z=0;break}case"last":{Z=H;break}case"next":{Z=Tn(f.current+1,0,H);break}case"previous":{Z=Tn(f.current-1,0,H);break}case"selected":{Z=Tn((V=T.current)!==null&&V!==void 0?V:0,0,H);break}default:Z=P}f.current=Z,U(s[Z]),B&&q(Z)},[f,s,q]),re=y.useCallback(({fromEvent:P})=>{C(!0),K("selected",{scroll:!0}),i==null||i({fromEvent:P})},[K,i,C]),oe=y.useCallback(()=>{d.current="search",g.current="",clearTimeout(w.current)},[]),ee=y.useCallback(({focusSelect:P,fromEvent:B})=>{var V;n==null||n({fromEvent:B}),C(!1),U(s[0]),oe(),u.current=void 0,P&&((V=p.current)===null||V===void 0||V.focus())},[oe,n,s,p,C]),me=y.useCallback(({fromEvent:P})=>{b?ee({focusSelect:!1,fromEvent:P}):re({fromEvent:P})},[ee,re,b]),ae=y.useCallback((P,{fromEvent:B})=>{T.current!==P&&(T.current=P,m(s[P].value),t==null||t(s[P],{fromEvent:B}))},[t,s,m]),$=y.useCallback(({focusSelect:P,fromEvent:B})=>{ae(f.current,{fromEvent:B}),ee({focusSelect:P,fromEvent:B})},[ee,ae]),M=y.useCallback((P,{fromEvent:B,select:V})=>{var H;switch(d.current==="cycleFirstLetter"&&P!==g.current&&(d.current="search"),P===g.current?d.current="cycleFirstLetter":g.current+=P,d.current){case"search":{let Z=s.findIndex(ie=>{var G;return((G=ie.label)===null||G===void 0?void 0:G.toLocaleUpperCase().indexOf(g.current))===0});Z<0&&(Z=s.findIndex(ie=>{var G;return((G=ie.label)===null||G===void 0?void 0:G.toLocaleUpperCase().indexOf(P))===0}),g.current=P),Z>=0&&(V?ae(Z,{fromEvent:B}):K(Z,{scroll:!0}));break}case"cycleFirstLetter":{const Z=V?(H=T.current)!==null&&H!==void 0?H:-1:f.current;let ie=s.findIndex((G,se)=>{var J;return se>Z&&((J=G.label)===null||J===void 0?void 0:J.toLocaleUpperCase().indexOf(P))===0});ie<0&&(ie=s.findIndex(G=>{var se;return((se=G.label)===null||se===void 0?void 0:se.toLocaleUpperCase().indexOf(P))===0})),ie>=0&&(V?ae(ie,{fromEvent:B}):K(ie,{scroll:!0}));break}}clearTimeout(w.current),w.current=setTimeout(()=>{d.current==="search"&&(g.current="")},wv)},[K,s,ae]),Q=y.useCallback(P=>{var B;P.button===0&&(P.preventDefault(),(B=p.current)===null||B===void 0||B.focus(),me({fromEvent:P}),l==null||l(P))},[l,p,me]),ne=y.useCallback(P=>{$({focusSelect:!0,fromEvent:P})},[$]),O=y.useCallback(P=>{const{altKey:B,code:V,ctrlKey:H,metaKey:Z,shiftKey:ie}=P,{ARROW_DOWN:G,ARROW_UP:se,END:J,ENTER:fe,ESC:Qe,HOME:Ee,SPACE:Gt,TAB:gt}=yv,Ye=B||H||Z||ie;if(!(V===gt&&(B||H||Z)||V!==gt&&Ye))switch(V){case G:{if(P.preventDefault(),!b){re({fromEvent:P});return}K("next",{scroll:!0});break}case se:{if(P.preventDefault(),!b){re({fromEvent:P});return}K("previous",{scroll:!0});break}case J:{if(P.preventDefault(),!b){re({fromEvent:P});return}K("last",{scroll:!0});break}case fe:{if(!b)return;P.preventDefault(),$({focusSelect:!0,fromEvent:P});break}case Qe:{if(!b)return;P.preventDefault(),ee({focusSelect:!0,fromEvent:P});break}case Ee:{if(P.preventDefault(),!b){re({fromEvent:P});return}K("first",{scroll:!0});break}case Gt:{P.preventDefault(),b?$({focusSelect:!0,fromEvent:P}):re({fromEvent:P});break}case gt:{if(!b)return;ie||P.preventDefault(),$({focusSelect:!ie,fromEvent:P});break}default:!Ye&&V.match(/^Key/)&&(P.preventDefault(),P.stopPropagation(),M(V.replace(/^Key/,""),{select:!b,fromEvent:P}))}},[K,ee,b,re,M,$]),D=y.useCallback(P=>{O(P),o==null||o(P)},[O,o]),N=y.useCallback(P=>{K(P)},[K]),z=y.useCallback(P=>{b||(oe(),e==null||e(P))},[oe,e,b]),v=y.useCallback(P=>{oe(),r==null||r(P)},[oe,r]),W=y.useCallback(P=>{x.current=P,u.current!==void 0&&q(u.current)},[q]),L=y.useCallback((P,B)=>{E.current[B]=P,u.current===B&&q(u.current)},[q]);return y.useEffect(()=>{if(!b)return()=>{};const P=B=>{var V;const H=B.target;!((V=S.current)===null||V===void 0)&&V.contains(H)||(B.preventDefault(),ee({focusSelect:!1,fromEvent:B}))};return document.addEventListener("mousedown",P),()=>{document.removeEventListener("mousedown",P)}},[ee,b,S]),y.useMemo(()=>({activeOption:Y,handleActivateOptionIndex:N,handleBlur:z,handleButtonKeyDown:D,handleDropdownKeyDown:O,handleFocus:v,handleMouseDown:Q,handleOptionClick:ne,handleSetDropdownRef:W,handleSetOptionRef:L,open:b,selectedOption:R}),[Y,N,z,D,v,O,Q,ne,W,L,b,R])},kv=y.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:l,style:i,value:a,variant:s,width:c,...h},p)=>{const{isEnabled:m,options:S,setValue:x,value:E,DropdownButton:T,Wrapper:f}=Mp({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:l,value:a,variant:s}),u=y.useCallback(d=>{const g=S.find(w=>w.value===d.target.value);g&&(x(g.value),r==null||r(g,{fromEvent:d}))},[r,S,x]);return k.createElement(f,{className:e,style:{...i,width:c}},k.createElement(cu,null,k.createElement(pv,{...h,disabled:n,onChange:m?u:Wn,ref:p,value:E},S.map((d,g)=>{var w;return k.createElement("option",{key:`${d.value}-${g}`,value:d.value},(w=d.label)!==null&&w!==void 0?w:d.value)})),T))});kv.displayName="SelectNative";function Sv({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:l,setRef:i}){const a=y.useCallback(()=>{e(n)},[e,n]),s=y.useCallback(h=>{i(h,n)},[n,i]),c=Ip();return k.createElement(gv,{active:t,"aria-selected":l?"true":void 0,"data-value":o.value,id:c,onClick:r,onMouseEnter:a,ref:s,role:"option",tabIndex:0},o.label)}function Ev({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:l,inputProps:i,labelId:a,menuMaxHeight:s,name:c,onBlur:h,onChange:p,onClose:m,onFocus:S,onKeyDown:x,onMouseDown:E,onOpen:T,open:f,options:u,readOnly:d,shadow:g=!0,style:w,variant:b="default",value:C,width:R="auto",...Y},U){const{isEnabled:q,options:K,setValue:re,value:oe,wrapperProps:ee,DropdownButton:me,Wrapper:ae}=Mp({className:n,defaultValue:r,disabled:o,native:!1,onChange:p,options:u,style:w,readOnly:d,value:C,variant:b,width:R}),$=y.useRef(null),M=y.useRef(null),Q=y.useRef(null),{activeOption:ne,handleActivateOptionIndex:O,handleBlur:D,handleButtonKeyDown:N,handleDropdownKeyDown:z,handleFocus:v,handleMouseDown:W,handleOptionClick:L,handleSetDropdownRef:P,handleSetOptionRef:B,open:V,selectedOption:H}=xv({onBlur:h,onChange:p,onClose:m,onFocus:S,onKeyDown:x,onMouseDown:E,onOpen:T,open:f,options:K,value:oe,selectRef:M,setValue:re,wrapperRef:Q});y.useImperativeHandle(U,()=>({focus:fe=>{var Qe;(Qe=M.current)===null||Qe===void 0||Qe.focus(fe)},node:$.current,value:String(oe)}),[oe]);const Z=y.useMemo(()=>H?typeof l=="function"?l(H):H.label:"",[l,H]),ie=q?1:void 0,G=y.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),se=Ip(),J=y.useMemo(()=>K.map((fe,Qe)=>{const Ee=`${oe}-${Qe}`,Gt=fe===ne,gt=fe===H;return k.createElement(Sv,{activateOptionIndex:O,active:Gt,index:Qe,key:Ee,onClick:L,option:fe,selected:gt,setRef:B})}),[ne,O,L,B,K,H,oe]);return k.createElement(ae,{...ee,$disabled:o,ref:Q,shadow:g,style:{...w,width:R}},k.createElement("input",{name:c,ref:$,type:"hidden",value:String(oe),...i}),k.createElement(cu,{"aria-disabled":o,"aria-expanded":V,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??a,"aria-owns":q&&V?se:void 0,onBlur:D,onFocus:v,onKeyDown:N,onMouseDown:q?W:E,ref:M,role:"button",tabIndex:ie,...Y},k.createElement(cv,null,Z),me),q&&V&&k.createElement(mv,{id:se,onKeyDown:z,ref:P,role:"listbox",style:G,tabIndex:0,variant:b},J))}const jp=y.forwardRef(Ev);jp.displayName="Select";const bv=_.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,Ml=y.forwardRef(function({children:t,noPadding:n=!1,...r},o){return k.createElement(bv,{noPadding:n,ref:o,...r},t)});Ml.displayName="Toolbar";const Av=_.div`
  padding: 16px;
`,Hn=y.forwardRef(function({children:t,...n},r){return k.createElement(Av,{ref:r,...n},t)});Hn.displayName="WindowContent";const Cv=_.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?j`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:j`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${pi} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Un=y.forwardRef(function({active:t=!0,children:n,...r},o){return k.createElement(Cv,{active:t,ref:o,...r},n)});Un.displayName="WindowHeader";const $v=_.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${ke({style:"window"})}
  ${$t()}
`,Tv=_.span`
  ${({theme:e})=>j`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,Vn=y.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},l)=>k.createElement($v,{ref:l,shadow:r,...o},e,t&&k.createElement(Tv,{"data-testid":"resizeHandle",ref:n})));Vn.displayName="Window";const Dv=_(Ap)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,Pv=_.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,Nv=_.div`
  display: flex;
  flex-wrap: wrap;
`,zt=_.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,_v=_.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,Iv=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Rv(e,t){return new Date(e,t+1,0).getDate()}function Lv(e,t,n){return new Date(e,t,n).getDay()}function Ov(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const zv=y.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},l)=>{const[i,a]=y.useState(()=>Ov(t)),{year:s,month:c,day:h}=i,p=y.useCallback(({value:T})=>{a(f=>({...f,month:T}))},[]),m=y.useCallback(T=>{a(f=>({...f,year:T}))},[]),S=y.useCallback(T=>{a(f=>({...f,day:T}))},[]),x=y.useCallback(()=>{const T=[i.year,i.month+1,i.day].map(f=>String(f).padStart(2,"0")).join("-");n==null||n(T)},[i.day,i.month,i.year,n]),E=y.useMemo(()=>{const T=Array.from({length:42}),f=Lv(s,c,1);let u=h;const d=Rv(s,c);return u=u<d?u:d,T.forEach((g,w)=>{if(w>=f&&w<d+f){const b=w-f+1;T[w]=k.createElement(zt,{key:w,onClick:()=>{S(b)}},k.createElement(_v,{active:b===u},b))}else T[w]=k.createElement(zt,{key:w})}),T},[h,S,c,s]);return k.createElement(Vn,{className:e,ref:l,shadow:o,style:{margin:20}},k.createElement(Un,null,k.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),k.createElement(Hn,null,k.createElement(Ml,{noPadding:!0,style:{justifyContent:"space-between"}},k.createElement(jp,{options:Iv,value:c,onChange:p,width:128,menuMaxHeight:200}),k.createElement(_p,{value:s,onChange:m,width:100})),k.createElement(Dv,null,k.createElement(Pv,null,k.createElement(zt,null,"S"),k.createElement(zt,null,"M"),k.createElement(zt,null,"T"),k.createElement(zt,null,"W"),k.createElement(zt,null,"T"),k.createElement(zt,null,"F"),k.createElement(zt,null,"S")),k.createElement(Nv,null,E)),k.createElement(Ml,{noPadding:!0,style:{justifyContent:"space-between"}},k.createElement(yo,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),k.createElement(yo,{fullWidth:!0,onClick:n?x:void 0,disabled:!n},"OK"))))});zv.displayName="DatePicker";const Mv=e=>{switch(e){case"status":case"well":return j`
        ${ke({style:"status"})}
      `;case"window":case"outside":return j`
        ${ke({style:"window"})}
      `;case"field":return j`
        ${ke({style:"field"})}
      `;default:return j`
        ${ke()}
      `}},jv=_.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>Mv(e)}
  ${({variant:e})=>$t(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Bv=y.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>k.createElement(jv,{ref:o,shadow:t,variant:n,...r},e));Bv.displayName="Frame";const Fv=_.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&j`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&Ct()}
`,Wv=_.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,Dn=y.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},l)=>k.createElement(Fv,{"aria-disabled":t,$disabled:t,variant:n,ref:l,...o},e&&k.createElement(Wv,{variant:n},e),r));Dn.displayName="GroupBox";const Hv=_.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${vn(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;Hv.displayName="Handle";const Uv="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Vv=_.div`
  display: inline-block;
  height: ${({size:e})=>vn(e)};
  width: ${({size:e})=>vn(e)};
`,Qv=_.span`
  display: block;
  background: ${Uv};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Yv=y.forwardRef(({size:e=30,...t},n)=>k.createElement(Vv,{size:e,ref:n,...t},k.createElement(Qv,null)));Yv.displayName="Hourglass";const Gv=_.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Xv=_.div`
  position: relative;
`,Kv=_.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,Zv=_(Rt).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Jv=_.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`,qv=y.forwardRef(({backgroundStyles:e,children:t,...n},r)=>k.createElement(Gv,{ref:r,...n},k.createElement(Xv,null,k.createElement(Kv,null,k.createElement(Zv,{style:e},t)),k.createElement(Jv,null))));qv.displayName="Monitor";const ey=_.div`
  display: inline-block;
  height: ${Re.md};
  width: 100%;
`,ty=_(Rt)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Bp=j`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,ny=_.div`
  position: relative;
  top: 4px;
  ${Bp}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,ry=_.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Bp}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,oy=_.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Fp=17,ly=_.span`
  display: inline-block;
  width: ${Fp}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,iy=y.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},l)=>{const i=e?null:`${n}%`,a=y.useRef(null),[s,c]=y.useState([]),h=y.useCallback(()=>{if(!a.current||n===void 0)return;const p=a.current.getBoundingClientRect().width,m=Math.round(n/100*p/Fp);c(Array.from({length:m}))},[n]);return y.useEffect(()=>(h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)),[h]),k.createElement(ey,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:l,role:"progressbar",variant:r,...o},k.createElement(ty,{variant:r,shadow:t},r==="default"?k.createElement(k.Fragment,null,k.createElement(ny,{"data-testid":"defaultProgress1"},i),k.createElement(ry,{"data-testid":"defaultProgress2",value:n},i)):k.createElement(oy,{ref:a,"data-testid":"tileProgress"},s.map((p,m)=>k.createElement(ly,{key:m})))))});iy.displayName="ProgressBar";const Wp=j`
  width: ${It}px;
  height: ${It}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,ay=_(Rt)`
  ${Wp}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,sy=_.div`
  ${jn()}
  ${Wp}
  outline: none;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,uy=_.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,cy={flat:sy,default:ay},dy=y.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:l={},variant:i="default",...a},s)=>{const c=cy[i];return k.createElement(su,{$disabled:n,className:t,style:l},k.createElement(c,{$disabled:n,role:"presentation"},e&&k.createElement(uy,{$disabled:n,variant:i})),k.createElement(zl,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...a}),r&&k.createElement(uu,null,r))});dy.displayName="Radio";const fy=typeof window<"u"?y.useLayoutEffect:y.useEffect;function Sn(e){const t=y.useRef(e);return fy(()=>{t.current=e}),y.useCallback((...n)=>(0,t.current)(...n),[])}function zc(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Mc(e,t){return y.useMemo(()=>e==null&&t==null?null:n=>{zc(e,n),zc(t,n)},[e,t])}let hi=!0,ts=!1,jc;const py={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function hy(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&py[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function my(e){e.metaKey||e.altKey||e.ctrlKey||(hi=!0)}function Xi(){hi=!1}function gy(){this.visibilityState==="hidden"&&ts&&(hi=!0)}function vy(e){e.addEventListener("keydown",my,!0),e.addEventListener("mousedown",Xi,!0),e.addEventListener("pointerdown",Xi,!0),e.addEventListener("touchstart",Xi,!0),e.addEventListener("visibilitychange",gy,!0)}function yy(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return hi||hy(t)}function wy(){ts=!0,window.clearTimeout(jc),jc=window.setTimeout(()=>{ts=!1},100)}function xy(){const e=y.useCallback(t=>{const n=ni.findDOMNode(t);n!=null&&vy(n.ownerDocument)},[]);return{isFocusVisible:yy,onBlurVisible:wy,ref:e}}function ky(e,t,n){return(n-t)*e+t}function Go(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function Xo(e){return e&&e.ownerDocument||document}function Sy(e,t){var n;const{index:r}=(n=e.reduce((o,l,i)=>{const a=Math.abs(t-l);return o===null||a<o.distance||a===o.distance?{distance:a,index:i}:o},null))!==null&&n!==void 0?n:{};return r??-1}const Ey=_.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:t})=>e&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:e,size:t})=>e==="vertical"?j`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `:j`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,Hp=()=>j`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?j`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:j`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,by=_(Rt)`
  ${Hp()}
`,Ay=_(Rt)`
  ${Hp()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,Cy=_.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?j`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:j`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?j`
          ${jn()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:j`
          ${$t()}
          ${ke()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&bo({mainColor:t.material,secondaryColor:t.borderLightest})}
`,sr=6,$y=_.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?j`
          right: ${-sr-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${sr}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:j`
          bottom: ${-sr}px;
          height: ${sr}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&j`
      ${Ct()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,Ty=_.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?j`
          transform: translate(${sr+2}px, ${sr+1}px);
        `:j`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,Dy=y.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:l,onChange:i,onChangeCommitted:a,onMouseDown:s,orientation:c="horizontal",size:h="100%",step:p=1,value:m,variant:S="default",...x},E)=>{const T=S==="flat"?Ay:by,f=c==="vertical",[u=o,d]=yn({defaultValue:e,onChange:i??a,value:m}),{isFocusVisible:g,onBlurVisible:w,ref:b}=xy(),[C,R]=y.useState(!1),Y=y.useRef(),U=y.useRef(null),q=Mc(b,Y),K=Mc(E,q),re=Sn(D=>{g(D)&&R(!0)}),oe=Sn(()=>{C!==!1&&(R(!1),w())}),ee=y.useRef(),me=y.useMemo(()=>n===!0&&Number.isFinite(p)?[...Array(Math.round((r-o)/p)+1)].map((D,N)=>({label:void 0,value:o+p*N})):Array.isArray(n)?n:[],[n,r,o,p]),ae=Sn(D=>{const N=(r-o)/10,z=me.map(L=>L.value),v=z.indexOf(u);let W=0;switch(D.key){case"Home":W=o;break;case"End":W=r;break;case"PageUp":p&&(W=u+N);break;case"PageDown":p&&(W=u-N);break;case"ArrowRight":case"ArrowUp":p?W=u+p:W=z[v+1]||z[z.length-1];break;case"ArrowLeft":case"ArrowDown":p?W=u-p:W=z[v-1]||z[0];break;default:return}D.preventDefault(),p&&(W=Rc(W,p,o)),W=Tn(W,o,r),d(W),R(!0),i==null||i(W),a==null||a(W)}),$=y.useCallback(D=>{if(!Y.current)return 0;const N=Y.current.getBoundingClientRect();let z;f?z=(N.bottom-D.y)/N.height:z=(D.x-N.left)/N.width;let v;if(v=ky(z,o,r),p)v=Rc(v,p,o);else{const W=me.map(P=>P.value),L=Sy(W,v);v=W[L]}return v=Tn(v,o,r),v},[me,r,o,p,f]),M=Sn(D=>{var N;const z=Go(D,ee.current);if(!z)return;const v=$(z);(N=U.current)===null||N===void 0||N.focus(),d(v),R(!0),i==null||i(v)}),Q=Sn(D=>{const N=Go(D,ee.current);if(!N)return;const z=$(N);a==null||a(z),ee.current=void 0;const v=Xo(Y.current);v.removeEventListener("mousemove",M),v.removeEventListener("mouseup",Q),v.removeEventListener("touchmove",M),v.removeEventListener("touchend",Q)}),ne=Sn(D=>{var N;s==null||s(D),D.preventDefault(),(N=U.current)===null||N===void 0||N.focus(),R(!0);const z=Go(D,ee.current);if(z){const W=$(z);d(W),i==null||i(W)}const v=Xo(Y.current);v.addEventListener("mousemove",M),v.addEventListener("mouseup",Q)}),O=Sn(D=>{var N;D.preventDefault();const z=D.changedTouches[0];z!=null&&(ee.current=z.identifier),(N=U.current)===null||N===void 0||N.focus(),R(!0);const v=Go(D,ee.current);if(v){const L=$(v);d(L),i==null||i(L)}const W=Xo(Y.current);W.addEventListener("touchmove",M),W.addEventListener("touchend",Q)});return y.useEffect(()=>{const{current:D}=Y;D==null||D.addEventListener("touchstart",O);const N=Xo(D);return()=>{D==null||D.removeEventListener("touchstart",O),N.removeEventListener("mousemove",M),N.removeEventListener("mouseup",Q),N.removeEventListener("touchmove",M),N.removeEventListener("touchend",Q)}},[Q,M,O]),k.createElement(Ey,{$disabled:t,hasMarks:!!me.length,isFocused:C,onMouseDown:ne,orientation:c,ref:K,size:vn(h),...x},k.createElement("input",{disabled:t,name:l,type:"hidden",value:u??0}),me&&me.map(D=>k.createElement($y,{$disabled:t,"data-testid":"tick",key:D.value/(r-o)*100,orientation:c,style:{[f?"bottom":"left"]:`${(D.value-o)/(r-o)*100}%`}},D.label&&k.createElement(Ty,{"aria-hidden":!0,"data-testid":"mark",orientation:c},D.label))),k.createElement(T,{orientation:c,variant:S}),k.createElement(Cy,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":c,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":u,onBlur:oe,onFocus:re,onKeyDown:ae,orientation:c,ref:U,role:"slider",style:{[f?"bottom":"left"]:`${(f?-100:0)+100*(u-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:S}))});Dy.displayName="Slider";const Py=_.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${iu};
  overflow-y: auto;
`,Ny=y.forwardRef(function({children:t,...n},r){return k.createElement(Py,{ref:r,...n},t)});Ny.displayName="TableBody";const _y=_.td`
  padding: 0 8px;
`,Iy=y.forwardRef(function({children:t,...n},r){return k.createElement(_y,{ref:r,...n},t)});Iy.displayName="TableDataCell";const Ry=_.thead`
  display: table-header-group;
`,Ly=y.forwardRef(function({children:t,...n},r){return k.createElement(Ry,{ref:r,...n},t)});Ly.displayName="TableHead";const Oy=_.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${ke()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&j`
      &:active {
        &:before {
          ${ke({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&Ct()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&Ct()}
  }
`,zy=y.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Wn,sort:l,...i},a){const s=l==="asc"?"ascending":l==="desc"?"descending":void 0;return k.createElement(Oy,{$disabled:t,"aria-disabled":t,"aria-sort":s,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:a,...i},k.createElement("div",null,n))});zy.displayName="TableHeadCell";const My=_.tr`
  color: inherit;
  display: table-row;
  height: calc(${Re.md} - 2px);
  line-height: calc(${Re.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,jy=y.forwardRef(function({children:t,...n},r){return k.createElement(My,{ref:r,...n},t)});jy.displayName="TableRow";const By=_.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,Fy=_(Rt)`
  &:before {
    box-shadow: none;
  }
`,Wy=y.forwardRef(({children:e,...t},n)=>k.createElement(Fy,null,k.createElement(By,{ref:n,...t},e)));Wy.displayName="Table";const Hy=_.button`
  ${$t()}
  ${ke()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${Re.md};
  line-height: ${Re.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Ar}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${Re.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`,Uy=y.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},l)=>k.createElement(Hy,{"aria-selected":n,selected:n,onClick:i=>t==null?void 0:t(e,i),ref:l,role:"tab",...o},r));Uy.displayName="Tab";const Vy=_.div`
  ${$t()}
  ${ke()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,Qy=y.forwardRef(({children:e,...t},n)=>k.createElement(Vy,{ref:n,...t},e));Qy.displayName="TabBody";const Yy=_.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,Gy=_.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`;function Xy(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const Ky=y.forwardRef(({value:e,onChange:t=Wn,children:n,rows:r=1,...o},l)=>{const i=y.useMemo(()=>{var a;const s=(a=k.Children.map(n,p=>{if(!k.isValidElement(p))return null;const m={selected:p.props.value===e,onClick:t};return k.cloneElement(p,m)}))!==null&&a!==void 0?a:[],c=Xy(s,r).map((p,m)=>({key:m,tabs:p})),h=c.findIndex(p=>p.tabs.some(m=>m.props.selected));return c.push(c.splice(h,1)[0]),c},[n,t,r,e]);return k.createElement(Yy,{...o,isMultiRow:r>1,role:"tablist",ref:l},i.map(a=>k.createElement(Gy,{key:a.key},a.tabs)))});Ky.displayName="Tabs";const Zy=["blur","focus"],Jy=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Bc(e){return"nativeEvent"in e&&Zy.includes(e.type)}function Fc(e){return"nativeEvent"in e&&Jy.includes(e.type)}const qy={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},e1=_.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${lu};
  text-align: center;
  font-size: 1rem;
  ${e=>qy[e.position]}
`,t1=_.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,n1=y.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:l=0,onBlur:i,onClose:a,onFocus:s,onMouseEnter:c,onMouseLeave:h,onOpen:p,style:m,text:S,position:x="top",...E},T)=>{const[f,u]=y.useState(!1),[d,g]=y.useState(),[w,b]=y.useState(),C=!n,R=!r,Y=$=>{window.clearTimeout(d),window.clearTimeout(w);const M=window.setTimeout(()=>{u(!0),p==null||p($)},o);g(M)},U=$=>{$.persist(),Bc($)?s==null||s($):Fc($)&&(c==null||c($)),Y($)},q=$=>{window.clearTimeout(d),window.clearTimeout(w);const M=window.setTimeout(()=>{u(!1),a==null||a($)},l);b(M)},K=$=>{$.persist(),Bc($)?i==null||i($):Fc($)&&(h==null||h($)),q($)},re=C?K:void 0,oe=C?U:void 0,ee=R?U:void 0,me=R?K:void 0,ae=C?0:void 0;return k.createElement(t1,{"data-testid":"tooltip-wrapper",onBlur:re,onFocus:oe,onMouseEnter:ee,onMouseLeave:me,tabIndex:ae},k.createElement(e1,{className:e,"data-testid":"tooltip",position:x,ref:T,show:f,style:m,...E},S),t)});n1.displayName="Tooltip";const ns=_(uu)`
  white-space: nowrap;
`,Up=j`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":j`
          cursor: pointer;

          :focus {
            ${ns} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,r1=_.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&j`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:t})=>t.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,o1=_.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?j`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `:j`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,l1=_.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,i1=_.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${Up};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,Wc=_(su)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Up};
`,a1=_.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Hc(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function Uc(e){e.preventDefault()}function Vp({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:l,selected:i,style:a,tree:s=[]}){const c=o===0,h=y.useCallback(p=>{var m,S;const x=!!(p.items&&p.items.length>0),E=n.includes(p.id),T=(m=t||p.disabled)!==null&&m!==void 0?m:!1,f=T?Uc:w=>l(w,p),u=T?Uc:w=>l(w,p),d=i===p.id,g=k.createElement(a1,{"aria-hidden":!0},p.icon);return k.createElement(o1,{key:p.label,isRootLevel:c,role:"treeitem","aria-expanded":E,"aria-selected":d,hasItems:x},x?k.createElement(l1,{open:E},k.createElement(i1,{onClick:f,$disabled:T},k.createElement(Wc,{$disabled:T},g,k.createElement(ns,null,p.label))),E&&k.createElement(Vp,{className:e,disabled:T,expanded:n,level:o+1,select:l,selected:i,style:a,tree:(S=p.items)!==null&&S!==void 0?S:[]})):k.createElement(Wc,{as:"button",$disabled:T,onClick:u},g,k.createElement(ns,null,p.label)))},[e,t,n,c,o,l,i,a]);return k.createElement(r1,{className:c?e:void 0,style:c?a:void 0,ref:c?r:void 0,role:c?"tree":"group",isRootLevel:c},s.map(h))}function s1({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:l,onNodeToggle:i,selected:a,style:s,tree:c=[]},h){const[p,m]=yn({defaultValue:t,onChange:i,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[S,x]=yn({defaultValue:n,onChange:l,onChangePropName:"onNodeSelect",value:a,valuePropName:"selected"}),E=y.useCallback((u,d)=>{if(i){const g=Hc(p,d);i(u,g)}m(g=>Hc(g,d))},[p,i,m]),T=y.useCallback((u,d)=>{x(d),l&&l(u,d)},[l,x]),f=y.useCallback((u,d)=>{u.preventDefault(),T(u,d.id),d.items&&d.items.length&&E(u,d.id)},[T,E]);return k.createElement(Vp,{className:e,disabled:r,expanded:p,level:0,innerRef:h,select:f,selected:S,style:s,tree:c})}const u1=y.forwardRef(s1);u1.displayName="TreeView";var c1={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},d1=c1;const f1=jl(d1),p1="/dariomercuri/assets/ms_sans_serif-7vK4zdaj.woff2",h1="/dariomercuri/assets/ms_sans_serif_bold--XaUURxl.woff2";var mi={exports:{}},Qp={},Yp={exports:{}},m1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",g1=m1,v1=g1;function Gp(){}function Xp(){}Xp.resetWarningCache=Gp;var y1=function(){function e(r,o,l,i,a,s){if(s!==v1){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Xp,resetWarningCache:Gp};return n.PropTypes=n,n};Yp.exports=y1();var Kp=Yp.exports;function Zp(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Zp(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Vc(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Zp(e))&&(r&&(r+=" "),r+=t);return r}const w1=Object.freeze(Object.defineProperty({__proto__:null,clsx:Vc,default:Vc},Symbol.toStringTag,{value:"Module"})),x1=ih(w1);var Se={},Lt={};Object.defineProperty(Lt,"__esModule",{value:!0});Lt.dontSetMe=A1;Lt.findInArray=k1;Lt.int=b1;Lt.isFunction=S1;Lt.isNum=E1;function k1(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function S1(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function E1(e){return typeof e=="number"&&!isNaN(e)}function b1(e){return parseInt(e,10)}function A1(e,t,n){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(n," - do not set this, set it on the child."))}var Qn={};Object.defineProperty(Qn,"__esModule",{value:!0});Qn.browserPrefixToKey=qp;Qn.browserPrefixToStyle=C1;Qn.default=void 0;Qn.getPrefix=Jp;const Ki=["Moz","Webkit","O","ms"];function Jp(){var e;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const n=(e=window.document)===null||e===void 0||(e=e.documentElement)===null||e===void 0?void 0:e.style;if(!n||t in n)return"";for(let r=0;r<Ki.length;r++)if(qp(t,Ki[r])in n)return Ki[r];return""}function qp(e,t){return t?"".concat(t).concat($1(e)):e}function C1(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e}function $1(e){let t="",n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):e[r]==="-"?n=!0:t+=e[r];return t}Qn.default=Jp();Object.defineProperty(Se,"__esModule",{value:!0});Se.addClassName=nh;Se.addEvent=P1;Se.addUserSelectStyles=F1;Se.createCSSTransform=z1;Se.createSVGTransform=M1;Se.getTouch=j1;Se.getTouchIdentifier=B1;Se.getTranslation=du;Se.innerHeight=R1;Se.innerWidth=L1;Se.matchesSelector=th;Se.matchesSelectorAndParentsTo=D1;Se.offsetXYFromParent=O1;Se.outerHeight=_1;Se.outerWidth=I1;Se.removeClassName=rh;Se.removeEvent=N1;Se.removeUserSelectStyles=W1;var ot=Lt,Qc=T1(Qn);function eh(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(eh=function(r){return r?n:t})(e)}function T1(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=eh(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}let Ko="";function th(e,t){return Ko||(Ko=(0,ot.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,ot.isFunction)(e[n])})),(0,ot.isFunction)(e[Ko])?e[Ko](t):!1}function D1(e,t,n){let r=e;do{if(th(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function P1(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.addEventListener?e.addEventListener(t,n,o):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function N1(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function _1(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,ot.int)(n.borderTopWidth),t+=(0,ot.int)(n.borderBottomWidth),t}function I1(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,ot.int)(n.borderLeftWidth),t+=(0,ot.int)(n.borderRightWidth),t}function R1(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,ot.int)(n.paddingTop),t-=(0,ot.int)(n.paddingBottom),t}function L1(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,ot.int)(n.paddingLeft),t-=(0,ot.int)(n.paddingRight),t}function O1(e,t,n){const o=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),l=(e.clientX+t.scrollLeft-o.left)/n,i=(e.clientY+t.scrollTop-o.top)/n;return{x:l,y:i}}function z1(e,t){const n=du(e,t,"px");return{[(0,Qc.browserPrefixToKey)("transform",Qc.default)]:n}}function M1(e,t){return du(e,t,"")}function du(e,t,n){let{x:r,y:o}=e,l="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(t){const i="".concat(typeof t.x=="string"?t.x:t.x+n),a="".concat(typeof t.y=="string"?t.y:t.y+n);l="translate(".concat(i,", ").concat(a,")")+l}return l}function j1(e,t){return e.targetTouches&&(0,ot.findInArray)(e.targetTouches,n=>t===n.identifier)||e.changedTouches&&(0,ot.findInArray)(e.changedTouches,n=>t===n.identifier)}function B1(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function F1(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&nh(e.body,"react-draggable-transparent-selection")}function W1(e){if(e)try{if(e.body&&rh(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function nh(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function rh(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}var Ot={};Object.defineProperty(Ot,"__esModule",{value:!0});Ot.canDragX=V1;Ot.canDragY=Q1;Ot.createCoreData=G1;Ot.createDraggableData=X1;Ot.getBoundPosition=H1;Ot.getControlPosition=Y1;Ot.snapToGrid=U1;var et=Lt,ur=Se;function H1(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:r}=e.props;r=typeof r=="string"?r:K1(r);const o=fu(e);if(typeof r=="string"){const{ownerDocument:l}=o,i=l.defaultView;let a;if(r==="parent"?a=o.parentNode:a=l.querySelector(r),!(a instanceof i.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');const s=a,c=i.getComputedStyle(o),h=i.getComputedStyle(s);r={left:-o.offsetLeft+(0,et.int)(h.paddingLeft)+(0,et.int)(c.marginLeft),top:-o.offsetTop+(0,et.int)(h.paddingTop)+(0,et.int)(c.marginTop),right:(0,ur.innerWidth)(s)-(0,ur.outerWidth)(o)-o.offsetLeft+(0,et.int)(h.paddingRight)-(0,et.int)(c.marginRight),bottom:(0,ur.innerHeight)(s)-(0,ur.outerHeight)(o)-o.offsetTop+(0,et.int)(h.paddingBottom)-(0,et.int)(c.marginBottom)}}return(0,et.isNum)(r.right)&&(t=Math.min(t,r.right)),(0,et.isNum)(r.bottom)&&(n=Math.min(n,r.bottom)),(0,et.isNum)(r.left)&&(t=Math.max(t,r.left)),(0,et.isNum)(r.top)&&(n=Math.max(n,r.top)),[t,n]}function U1(e,t,n){const r=Math.round(t/e[0])*e[0],o=Math.round(n/e[1])*e[1];return[r,o]}function V1(e){return e.props.axis==="both"||e.props.axis==="x"}function Q1(e){return e.props.axis==="both"||e.props.axis==="y"}function Y1(e,t,n){const r=typeof t=="number"?(0,ur.getTouch)(e,t):null;if(typeof t=="number"&&!r)return null;const o=fu(n),l=n.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,ur.offsetXYFromParent)(r||e,l,n.props.scale)}function G1(e,t,n){const r=!(0,et.isNum)(e.lastX),o=fu(e);return r?{node:o,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:o,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function X1(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function K1(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function fu(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var gi={},vi={};Object.defineProperty(vi,"__esModule",{value:!0});vi.default=Z1;function Z1(){}Object.defineProperty(gi,"__esModule",{value:!0});gi.default=void 0;var Zi=q1(y),Ge=pu(Kp),J1=pu(ni),Me=Se,Zt=Ot,Ji=Lt,zr=pu(vi);function pu(e){return e&&e.__esModule?e:{default:e}}function oh(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(oh=function(r){return r?n:t})(e)}function q1(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=oh(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}function Fe(e,t,n){return t=ew(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ew(e){var t=tw(e,"string");return typeof t=="symbol"?t:String(t)}function tw(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const yt={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let Jt=yt.mouse,yi=class extends Zi.Component{constructor(){super(...arguments),Fe(this,"dragging",!1),Fe(this,"lastX",NaN),Fe(this,"lastY",NaN),Fe(this,"touchIdentifier",null),Fe(this,"mounted",!1),Fe(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:r}=n;if(this.props.disabled||!(t.target instanceof r.defaultView.Node)||this.props.handle&&!(0,Me.matchesSelectorAndParentsTo)(t.target,this.props.handle,n)||this.props.cancel&&(0,Me.matchesSelectorAndParentsTo)(t.target,this.props.cancel,n))return;t.type==="touchstart"&&t.preventDefault();const o=(0,Me.getTouchIdentifier)(t);this.touchIdentifier=o;const l=(0,Zt.getControlPosition)(t,o,this);if(l==null)return;const{x:i,y:a}=l,s=(0,Zt.createCoreData)(this,i,a);(0,zr.default)("DraggableCore: handleDragStart: %j",s),(0,zr.default)("calling",this.props.onStart),!(this.props.onStart(t,s)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,Me.addUserSelectStyles)(r),this.dragging=!0,this.lastX=i,this.lastY=a,(0,Me.addEvent)(r,Jt.move,this.handleDrag),(0,Me.addEvent)(r,Jt.stop,this.handleDragStop))}),Fe(this,"handleDrag",t=>{const n=(0,Zt.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let a=r-this.lastX,s=o-this.lastY;if([a,s]=(0,Zt.snapToGrid)(this.props.grid,a,s),!a&&!s)return;r=this.lastX+a,o=this.lastY+s}const l=(0,Zt.createCoreData)(this,r,o);if((0,zr.default)("DraggableCore: handleDrag: %j",l),this.props.onDrag(t,l)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const s=document.createEvent("MouseEvents");s.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(s)}return}this.lastX=r,this.lastY=o}),Fe(this,"handleDragStop",t=>{if(!this.dragging)return;const n=(0,Zt.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let s=r-this.lastX||0,c=o-this.lastY||0;[s,c]=(0,Zt.snapToGrid)(this.props.grid,s,c),r=this.lastX+s,o=this.lastY+c}const l=(0,Zt.createCoreData)(this,r,o);if(this.props.onStop(t,l)===!1||this.mounted===!1)return!1;const a=this.findDOMNode();a&&this.props.enableUserSelectHack&&(0,Me.removeUserSelectStyles)(a.ownerDocument),(0,zr.default)("DraggableCore: handleDragStop: %j",l),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&((0,zr.default)("DraggableCore: Removing handlers"),(0,Me.removeEvent)(a.ownerDocument,Jt.move,this.handleDrag),(0,Me.removeEvent)(a.ownerDocument,Jt.stop,this.handleDragStop))}),Fe(this,"onMouseDown",t=>(Jt=yt.mouse,this.handleDragStart(t))),Fe(this,"onMouseUp",t=>(Jt=yt.mouse,this.handleDragStop(t))),Fe(this,"onTouchStart",t=>(Jt=yt.touch,this.handleDragStart(t))),Fe(this,"onTouchEnd",t=>(Jt=yt.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,Me.addEvent)(t,yt.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:n}=t;(0,Me.removeEvent)(n,yt.mouse.move,this.handleDrag),(0,Me.removeEvent)(n,yt.touch.move,this.handleDrag),(0,Me.removeEvent)(n,yt.mouse.stop,this.handleDragStop),(0,Me.removeEvent)(n,yt.touch.stop,this.handleDragStop),(0,Me.removeEvent)(t,yt.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,Me.removeUserSelectStyles)(n)}}findDOMNode(){var t,n;return(t=this.props)!==null&&t!==void 0&&t.nodeRef?(n=this.props)===null||n===void 0||(n=n.nodeRef)===null||n===void 0?void 0:n.current:J1.default.findDOMNode(this)}render(){return Zi.cloneElement(Zi.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};gi.default=yi;Fe(yi,"displayName","DraggableCore");Fe(yi,"propTypes",{allowAnyClick:Ge.default.bool,children:Ge.default.node.isRequired,disabled:Ge.default.bool,enableUserSelectHack:Ge.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:Ge.default.arrayOf(Ge.default.number),handle:Ge.default.string,cancel:Ge.default.string,nodeRef:Ge.default.object,onStart:Ge.default.func,onDrag:Ge.default.func,onStop:Ge.default.func,onMouseDown:Ge.default.func,scale:Ge.default.number,className:Ji.dontSetMe,style:Ji.dontSetMe,transform:Ji.dontSetMe});Fe(yi,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return s.default}}),e.default=void 0;var t=m(y),n=h(Kp),r=h(ni),o=h(x1),l=Se,i=Ot,a=Lt,s=h(gi),c=h(vi);function h(u){return u&&u.__esModule?u:{default:u}}function p(u){if(typeof WeakMap!="function")return null;var d=new WeakMap,g=new WeakMap;return(p=function(w){return w?g:d})(u)}function m(u,d){if(!d&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var g=p(d);if(g&&g.has(u))return g.get(u);var w={},b=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in u)if(C!=="default"&&Object.prototype.hasOwnProperty.call(u,C)){var R=b?Object.getOwnPropertyDescriptor(u,C):null;R&&(R.get||R.set)?Object.defineProperty(w,C,R):w[C]=u[C]}return w.default=u,g&&g.set(u,w),w}function S(){return S=Object.assign?Object.assign.bind():function(u){for(var d=1;d<arguments.length;d++){var g=arguments[d];for(var w in g)Object.prototype.hasOwnProperty.call(g,w)&&(u[w]=g[w])}return u},S.apply(this,arguments)}function x(u,d,g){return d=E(d),d in u?Object.defineProperty(u,d,{value:g,enumerable:!0,configurable:!0,writable:!0}):u[d]=g,u}function E(u){var d=T(u,"string");return typeof d=="symbol"?d:String(d)}function T(u,d){if(typeof u!="object"||u===null)return u;var g=u[Symbol.toPrimitive];if(g!==void 0){var w=g.call(u,d||"default");if(typeof w!="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(u)}class f extends t.Component{static getDerivedStateFromProps(d,g){let{position:w}=d,{prevPropsPosition:b}=g;return w&&(!b||w.x!==b.x||w.y!==b.y)?((0,c.default)("Draggable: getDerivedStateFromProps %j",{position:w,prevPropsPosition:b}),{x:w.x,y:w.y,prevPropsPosition:{...w}}):null}constructor(d){super(d),x(this,"onDragStart",(g,w)=>{if((0,c.default)("Draggable: onDragStart: %j",w),this.props.onStart(g,(0,i.createDraggableData)(this,w))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),x(this,"onDrag",(g,w)=>{if(!this.state.dragging)return!1;(0,c.default)("Draggable: onDrag: %j",w);const b=(0,i.createDraggableData)(this,w),C={x:b.x,y:b.y,slackX:0,slackY:0};if(this.props.bounds){const{x:Y,y:U}=C;C.x+=this.state.slackX,C.y+=this.state.slackY;const[q,K]=(0,i.getBoundPosition)(this,C.x,C.y);C.x=q,C.y=K,C.slackX=this.state.slackX+(Y-C.x),C.slackY=this.state.slackY+(U-C.y),b.x=C.x,b.y=C.y,b.deltaX=C.x-this.state.x,b.deltaY=C.y-this.state.y}if(this.props.onDrag(g,b)===!1)return!1;this.setState(C)}),x(this,"onDragStop",(g,w)=>{if(!this.state.dragging||this.props.onStop(g,(0,i.createDraggableData)(this,w))===!1)return!1;(0,c.default)("Draggable: onDragStop: %j",w);const C={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:Y,y:U}=this.props.position;C.x=Y,C.y=U}this.setState(C)}),this.state={dragging:!1,dragged:!1,x:d.position?d.position.x:d.defaultPosition.x,y:d.position?d.position.y:d.defaultPosition.y,prevPropsPosition:{...d.position},slackX:0,slackY:0,isElementSVG:!1},d.position&&!(d.onDrag||d.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var d,g;return(d=(g=this.props)===null||g===void 0||(g=g.nodeRef)===null||g===void 0?void 0:g.current)!==null&&d!==void 0?d:r.default.findDOMNode(this)}render(){const{axis:d,bounds:g,children:w,defaultPosition:b,defaultClassName:C,defaultClassNameDragging:R,defaultClassNameDragged:Y,position:U,positionOffset:q,scale:K,...re}=this.props;let oe={},ee=null;const ae=!!!U||this.state.dragging,$=U||b,M={x:(0,i.canDragX)(this)&&ae?this.state.x:$.x,y:(0,i.canDragY)(this)&&ae?this.state.y:$.y};this.state.isElementSVG?ee=(0,l.createSVGTransform)(M,q):oe=(0,l.createCSSTransform)(M,q);const Q=(0,o.default)(w.props.className||"",C,{[R]:this.state.dragging,[Y]:this.state.dragged});return t.createElement(s.default,S({},re,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(w),{className:Q,style:{...w.props.style,...oe},transform:ee}))}}e.default=f,x(f,"displayName","Draggable"),x(f,"propTypes",{...s.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:a.dontSetMe,style:a.dontSetMe,transform:a.dontSetMe}),x(f,"defaultProps",{...s.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(Qp);const{default:lh,DraggableCore:nw}=Qp;mi.exports=lh;mi.exports.default=lh;mi.exports.DraggableCore=nw;var rw=mi.exports;const Ao=jl(rw);let qi=1;const Co=()=>{const[e,t]=y.useState(qi);return[e,()=>{qi+=1,t(qi)}]};function Yc(){const{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}}function $o(){const[e,t]=y.useState(Yc());return y.useEffect(()=>{function n(){t(Yc())}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const ow=e=>{const[t,n]=Co(),{height:r,width:o}=$o(),l=y.useRef(),[i,a]=y.useState({width:0,height:0}),[s,c]=y.useState({x:0,y:0});y.useEffect(()=>{l.current&&(a({width:l.current.offsetWidth,height:l.current.offsetHeight}),c(e.isMobile?{x:o*.15,y:1500}:{x:o*.74,y:r*.68}))},[]);const h=(p,m)=>{c({x:m.x,y:m.y})};return A.jsx(Ao,{handle:".handle",onDrag:n,onStop:h,position:s,bounds:{left:0,top:0,right:o-i.width},children:A.jsxs(Vn,{onClick:n,className:"window",style:{position:"absolute",zIndex:t},ref:l,children:[A.jsx(Un,{className:"handle",children:"Education.exe"}),A.jsxs(Hn,{children:[A.jsx(Dn,{label:"Concordia",children:"Diploma in Full-Stack Development"}),A.jsx("br",{}),A.jsx(Dn,{label:"John Abbott College",children:"DEC in Computer Science"})]})]})})},lw=e=>{const[t,n]=Co(),{height:r,width:o}=$o(),l=y.useRef(),[i,a]=y.useState({width:0,height:0}),[s,c]=y.useState({x:0,y:0});y.useEffect(()=>{l.current&&(a({width:l.current.offsetWidth,height:l.current.offsetHeight}),c(e.isMobile?{x:o*.01,y:650}:{x:o*.01,y:r*.3}))},[]);const h=(p,m)=>{c({x:m.x,y:m.y})};return A.jsx(Ao,{handle:".handle",onDrag:n,onStop:h,position:s,bounds:{left:0,top:0,right:o-i.width},children:A.jsxs(Vn,{onClick:n,className:"window",style:{position:"absolute",zIndex:t,width:e.isMobile?"97%":"auto"},ref:l,children:[A.jsx(Un,{className:"handle",children:"Experience.exe"}),A.jsxs(Hn,{style:{paddingBottom:"0px"},children:[A.jsxs(Dn,{label:e.isMobile?A.jsx("div",{style:{fontWeight:"bold"},children:"Software Developer - SeeMyApps - (Nov 2022 - Nov 2023)"}):A.jsxs("div",{children:[A.jsx("span",{style:{fontWeight:"bold"},children:"Software Developer"}),A.jsx("div",{className:"line"}),A.jsx("span",{style:{fontWeight:"bold"},children:"SeeMyApps"}),A.jsx("div",{className:"line"}),A.jsx("span",{style:{fontWeight:"bold"},children:"(Nov 2022 - Nov 2023)"})]}),children:[A.jsx("p",{children:"Independently worked on a variety of projects specializing in online customer engagement and CMS services for businesses."}),A.jsxs("p",{children:["Built a prototype SASS application from the ground up in Angular, .NET and MongoDB."," "]}),A.jsx("p",{children:"Revamped the look and feel of multiple company services in both Ionic and Material."})," ",A.jsx("p",{children:"Planned and executed the integration of a Google Actions Center API into existing company software."})]}),A.jsx("br",{}),A.jsxs(Dn,{label:e.isMobile?A.jsx("div",{style:{fontWeight:"bold"},children:"Software Developer - MindGeek - (Apr 2022 - Jul 2022)"}):A.jsxs("div",{children:[A.jsx("span",{style:{fontWeight:"bold"},children:"Software Developer"}),A.jsx("div",{className:"line"}),A.jsx("span",{style:{fontWeight:"bold"},children:"MindGeek"}),A.jsx("div",{className:"line"}),A.jsx("span",{style:{fontWeight:"bold"},children:"(Apr 2022 - Jul 2022)"})]}),children:[A.jsx("p",{children:"Collaborated with a small agile team to develop, discuss, and enhance features for multiple backend services using Laravel PHP."}),A.jsx("p",{children:"Terminated due to a corporate layoff following the resignation of the CEO and COO."})]}),A.jsx("br",{}),A.jsx(Dn,{label:e.isMobile?A.jsx("div",{style:{fontWeight:"bold"},children:"Computer Technician - Private Client - (May 2020 - Feb 2021)"}):A.jsxs("div",{children:[A.jsx("span",{style:{fontWeight:"bold"},children:"Computer Technician"}),A.jsx("div",{className:"line"}),A.jsx("span",{style:{fontWeight:"bold"},children:"Private Client"}),A.jsx("div",{className:"line"}),A.jsx("span",{style:{fontWeight:"bold"},children:"(May 2020 - Feb 2021)"})]}),children:"Assisted in building, managing and maintaining hundreds of computers for cryptocurrency mining."}),A.jsx("br",{}),A.jsxs(Dn,{label:e.isMobile?A.jsx("div",{style:{fontWeight:"bold"},children:"Junior Web Developer - SignatureWEB - (Jan 2020 - May 2020)"}):A.jsxs("div",{children:[A.jsx("span",{style:{fontWeight:"bold"},children:"Junior Web Developer"}),A.jsx("div",{className:"line"}),A.jsx("span",{style:{fontWeight:"bold"},children:"SignatureWEB"}),A.jsx("div",{className:"line"}),A.jsx("span",{style:{fontWeight:"bold"},children:"(Jan 2020 - May 2020)"})]}),children:["Worked on two client websites on a small agile team in both front-end and back-end development."," "]}),A.jsx("br",{})]})]})})},iw=({children:e,onOutsideClick:t})=>{const n=y.useRef(null);return y.useEffect(()=>{const r=o=>{n.current&&!n.current.contains(o.target)&&t()};return document.addEventListener("click",r),()=>{document.removeEventListener("click",r)}},[t]),A.jsx("div",{ref:n,children:e})},aw=()=>{const[e,t]=y.useState(!1),n=()=>{t(!1)};return A.jsx(Ep,{style:{position:"initial",width:"100%"},children:A.jsx(Ml,{children:A.jsx("div",{style:{position:"relative",display:"inline-block"},children:A.jsxs(iw,{onOutsideClick:n,children:[A.jsx(yo,{onClick:()=>t(!e),active:e,style:{fontWeight:"bold"},children:"Menu"}),e&&A.jsxs(bp,{style:{position:"absolute",left:"0",top:"100%",zIndex:9999},onClick:()=>t(!1),children:[A.jsx(Wr,{children:A.jsxs("div",{className:"menuLink",children:[A.jsx("img",{src:"src/assets/icons/Gray_briefcase.ico",alt:"",className:"menuIcon"}),A.jsx("a",{href:"https://www.linkedin.com/in/dariomerc/",children:"LinkedIn"})]})}),A.jsx(Wr,{children:A.jsxs("div",{className:"menuLink",children:[A.jsx("img",{src:"src/assets/icons/Mail.ico",alt:"",className:"menuIcon"}),A.jsx("a",{href:"mailto:dario.mercuri31@gmail.com",children:"Email"})]})}),A.jsx(Wr,{children:A.jsxs("div",{className:"menuLink",children:[A.jsx("img",{src:"src/assets/icons/Starfield.ico",alt:"",className:"menuIcon"}),A.jsx("a",{href:"https://github.com/DarioMerc",children:"GitHub"})]})}),A.jsx(Wr,{children:A.jsxs("div",{className:"menuLink",children:[A.jsx("img",{src:"src/assets/icons/Resume.ico",alt:"",className:"menuIcon"}),A.jsx("a",{href:"src/assets/resume.pdf",download:"Dario Mercuri CV.pdf",children:"Resume"})]})})]})]})})})})},sw=({message:e,timeout:t})=>{const[n,r]=y.useState(!0);return y.useEffect(()=>{const o=setTimeout(()=>{r(!1)},t);return()=>clearTimeout(o)},[t]),A.jsx("div",{className:"popup",style:{opacity:n?1:0},children:e})},uw=e=>{const[t,n]=Co(),{height:r,width:o}=$o();console.log(r,o);const l=y.useRef(),[i,a]=y.useState({width:0,height:0}),[s,c]=y.useState({x:0,y:0});y.useEffect(()=>{l.current&&(a({width:l.current.offsetWidth,height:l.current.offsetHeight}),c(e.isMobile?{x:o*.25,y:r*.01}:{x:o*.725,y:r*.01}))},[]);const h=(p,m)=>{c({x:m.x,y:m.y})};return A.jsx(Ao,{handle:".handle",onDrag:n,position:s,onStop:h,bounds:{left:0,top:0,right:o-i.width+1,bottom:r},children:A.jsxs(Vn,{onClick:n,className:"window",style:{position:"absolute",zIndex:t},ref:l,children:[A.jsx(Un,{className:"handle",children:"Portrait.png"}),A.jsxs(Hn,{style:{padding:"10px",display:"flex",flexDirection:"column",alignItems:"center"},children:[A.jsx("img",{src:"src\\assets\\images\\Portrait.jpg",style:{width:"200px",height:"auto"},className:"unselectable"}),A.jsxs("div",{style:{padding:"0px 10px"},children:[A.jsxs("div",{className:"portraitLink",children:[A.jsx("img",{src:"src/assets/icons/Agent.ico",alt:"",className:"portraitIcon"}),"Dario Mercuri"]}),A.jsxs("div",{className:"portraitLink",children:[A.jsx("img",{src:"src/assets/icons/Mailbox.ico",alt:"",className:"portraitIcon"}),A.jsx(Ja,{href:"mailto:dario.mercuri31@gmail.com",children:"dario.mercuri31@gmail.com"})]}),A.jsxs("div",{className:"portraitLink",children:[A.jsx("img",{src:"src/assets/icons/Phone.ico",alt:"",className:"portraitIcon"}),A.jsx(Ja,{href:"tel:5148021614",children:"(514) 802-1614"})]})]})]})]})})},cw=e=>{const[t,n]=Co(),{height:r,width:o}=$o(),l=y.useRef(),[i,a]=y.useState({width:0,height:0}),[s,c]=y.useState({x:0,y:0});y.useEffect(()=>{l.current&&(a({width:l.current.offsetWidth,height:l.current.offsetHeight}),c(e.isMobile?{x:o*.03,y:1350}:{x:o*.7,y:r*.5}))},[]);const h=(p,m)=>{c({x:m.x,y:m.y})};return A.jsx(Ao,{handle:".handle",onDrag:n,onStop:h,position:s,bounds:{left:0,top:0,right:o-i.width},children:A.jsxs(Vn,{onClick:n,className:"window",style:{position:"absolute",zIndex:t},ref:l,children:[A.jsx(Un,{className:"handle",children:"Projects"}),A.jsx(Hn,{children:"Coming soon..."})]})})},dw=e=>{const[t,n]=Co(),{height:r,width:o}=$o(),l=y.useRef(),[i,a]=y.useState({width:0,height:0}),[s,c]=y.useState({x:0,y:0});y.useEffect(()=>{l.current&&(a({width:l.current.offsetWidth,height:l.current.offsetHeight}),c(e.isMobile?{x:o*.03,y:r*.5}:{x:o*.015,y:r*.035}))},[]);const h=(p,m)=>{c({x:m.x,y:m.y})};return A.jsx(Ao,{handle:".handle",onDrag:n,onStop:h,position:s,bounds:{left:0,top:0,right:o-i.width,bottom:r},children:A.jsxs(Vn,{onClick:n,className:"window",style:{position:"absolute",zIndex:t,width:e.isMobile?"90%":o*.7},ref:l,children:[A.jsx(Un,{className:"handle",children:A.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:"Description.txt"})}),A.jsx(Hn,{children:A.jsx("p",{children:"An enthusiastic full-stack developer looking for a new role! I am looking for a company that I can grow with as both a developer and a person. I value organization and learning best practices since they are always changing! Outside of my career I have strong passions in both music and movies and I pride myself on being an easygoing and upbeat person."})})]})})},fw=()=>{const[e,t]=y.useState(!1),[n,r]=y.useState(window.innerWidth<=768);return y.useEffect(()=>{const o=()=>{r(window.innerWidth<=768)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),y.useEffect(()=>{const o=setTimeout(()=>{t(!0)},3e3);return()=>clearTimeout(o)},[]),A.jsxs("div",{style:{position:"relative",height:"100vh",width:"100%",overflowX:"hidden"},children:[e&&A.jsx(sw,{message:"You can drag windows around by their blue header!",timeout:1e4}),A.jsx(aw,{}),A.jsx(lw,{isMobile:n}),A.jsx(uw,{isMobile:n}),A.jsx(dw,{isMobile:n}),A.jsx(cw,{isMobile:n}),A.jsx(ow,{isMobile:n})]})},pw=$g`
  ${Tg}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${p1}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${h1}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`,hw=()=>A.jsxs("div",{children:[A.jsx(pw,{}),A.jsx(Ag,{theme:f1,children:A.jsx(fw,{})})]});ea.createRoot(document.getElementById("root")).render(A.jsx(k.StrictMode,{children:A.jsx(hw,{})}));
