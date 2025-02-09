(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},ys=[],gn=()=>{},wv=()=>!1,Ma=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Zc=t=>t.startsWith("onUpdate:"),et=Object.assign,eu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ev=Object.prototype.hasOwnProperty,De=(t,e)=>Ev.call(t,e),le=Array.isArray,vs=t=>to(t)==="[object Map]",Us=t=>to(t)==="[object Set]",hd=t=>to(t)==="[object Date]",ye=t=>typeof t=="function",Je=t=>typeof t=="string",rn=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",jp=t=>(Ue(t)||ye(t))&&ye(t.then)&&ye(t.catch),qp=Object.prototype.toString,to=t=>qp.call(t),Tv=t=>to(t).slice(8,-1),Wp=t=>to(t)==="[object Object]",tu=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vi=Xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Iv=/-(\w)/g,Jt=Fa(t=>t.replace(Iv,(e,n)=>n?n.toUpperCase():"")),Av=/\B([A-Z])/g,Yr=Fa(t=>t.replace(Av,"-$1").toLowerCase()),Ua=Fa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ll=Fa(t=>t?`on${Ua(t)}`:""),ar=(t,e)=>!Object.is(t,e),Go=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Hp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ua=t=>{const e=parseFloat(t);return isNaN(e)?t:e},bv=t=>{const e=Je(t)?Number(t):NaN;return isNaN(e)?t:e};let dd;const $a=()=>dd||(dd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $s(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?Pv(r):$s(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Je(t)||Ue(t))return t}const Cv=/;(?![^(]*\))/g,Sv=/:([^]+)/,Rv=/\/\*[^]*?\*\//g;function Pv(t){const e={};return t.replace(Rv,"").split(Cv).forEach(n=>{if(n){const r=n.split(Sv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function We(t){let e="";if(Je(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=We(t[n]);r&&(e+=r+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const kv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vv=Xc(kv);function zp(t){return!!t||t===""}function Ov(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=qr(t[r],e[r]);return n}function qr(t,e){if(t===e)return!0;let n=hd(t),r=hd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=rn(t),r=rn(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?Ov(t,e):!1;if(n=Ue(t),r=Ue(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!qr(t[o],e[o]))return!1}}return String(t)===String(e)}function nu(t,e){return t.findIndex(n=>qr(n,e))}const Kp=t=>!!(t&&t.__v_isRef===!0),rt=t=>Je(t)?t:t==null?"":le(t)||Ue(t)&&(t.toString===qp||!ye(t.toString))?Kp(t)?rt(t.value):JSON.stringify(t,Gp,2):String(t),Gp=(t,e)=>Kp(e)?Gp(t,e.value):vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[xl(r,i)+" =>"]=s,n),{})}:Us(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xl(n))}:rn(e)?xl(e):Ue(e)&&!le(e)&&!Wp(e)?String(e):e,xl=(t,e="")=>{var n;return rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dt;class Qp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Yp(t){return new Qp(t)}function ru(){return Dt}function Jp(t,e=!1){Dt&&Dt.cleanups.push(t)}let $e;const Ml=new WeakSet;class Xp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Dt&&Dt.active&&Dt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ml.has(this)&&(Ml.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||eg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,fd(this),tg(this);const e=$e,n=en;$e=this,en=!0;try{return this.fn()}finally{ng(this),$e=e,en=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ou(e);this.deps=this.depsTail=void 0,fd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ml.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){uc(this)&&this.run()}get dirty(){return uc(this)}}let Zp=0,wi,Ei;function eg(t,e=!1){if(t.flags|=8,e){t.next=Ei,Ei=t;return}t.next=wi,wi=t}function su(){Zp++}function iu(){if(--Zp>0)return;if(Ei){let e=Ei;for(Ei=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;wi;){let e=wi;for(wi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function tg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ng(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ou(r),Dv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function uc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(rg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function rg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Li))return;t.globalVersion=Li;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!uc(t)){t.flags&=-3;return}const n=$e,r=en;$e=t,en=!0;try{tg(t);const s=t.fn(t._value);(e.version===0||ar(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{$e=n,en=r,ng(t),t.flags&=-3}}function ou(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ou(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Dv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let en=!0;const sg=[];function Tr(){sg.push(en),en=!1}function Ir(){const t=sg.pop();en=t===void 0?!0:t}function fd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=$e;$e=void 0;try{e()}finally{$e=n}}}let Li=0;class Nv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class au{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!en||$e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==$e)n=this.activeLink=new Nv($e,this),$e.deps?(n.prevDep=$e.depsTail,$e.depsTail.nextDep=n,$e.depsTail=n):$e.deps=$e.depsTail=n,ig(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=$e.depsTail,n.nextDep=void 0,$e.depsTail.nextDep=n,$e.depsTail=n,$e.deps===n&&($e.deps=r)}return n}trigger(e){this.version++,Li++,this.notify(e)}notify(e){su();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{iu()}}}function ig(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ig(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ha=new WeakMap,$r=Symbol(""),hc=Symbol(""),xi=Symbol("");function At(t,e,n){if(en&&$e){let r=ha.get(t);r||ha.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new au),s.map=r,s.key=n),s.track()}}function Pn(t,e,n,r,s,i){const o=ha.get(t);if(!o){Li++;return}const l=c=>{c&&c.trigger()};if(su(),e==="clear")o.forEach(l);else{const c=le(t),u=c&&tu(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===xi||!rn(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(xi)),e){case"add":c?u&&l(o.get("length")):(l(o.get($r)),vs(t)&&l(o.get(hc)));break;case"delete":c||(l(o.get($r)),vs(t)&&l(o.get(hc)));break;case"set":vs(t)&&l(o.get($r));break}}iu()}function Lv(t,e){const n=ha.get(t);return n&&n.get(e)}function ls(t){const e=Se(t);return e===t?e:(At(e,"iterate",xi),Qt(t)?e:e.map(bt))}function Ba(t){return At(t=Se(t),"iterate",xi),t}const xv={__proto__:null,[Symbol.iterator](){return Fl(this,Symbol.iterator,bt)},concat(...t){return ls(this).concat(...t.map(e=>le(e)?ls(e):e))},entries(){return Fl(this,"entries",t=>(t[1]=bt(t[1]),t))},every(t,e){return Cn(this,"every",t,e,void 0,arguments)},filter(t,e){return Cn(this,"filter",t,e,n=>n.map(bt),arguments)},find(t,e){return Cn(this,"find",t,e,bt,arguments)},findIndex(t,e){return Cn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Cn(this,"findLast",t,e,bt,arguments)},findLastIndex(t,e){return Cn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Cn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ul(this,"includes",t)},indexOf(...t){return Ul(this,"indexOf",t)},join(t){return ls(this).join(t)},lastIndexOf(...t){return Ul(this,"lastIndexOf",t)},map(t,e){return Cn(this,"map",t,e,void 0,arguments)},pop(){return ci(this,"pop")},push(...t){return ci(this,"push",t)},reduce(t,...e){return pd(this,"reduce",t,e)},reduceRight(t,...e){return pd(this,"reduceRight",t,e)},shift(){return ci(this,"shift")},some(t,e){return Cn(this,"some",t,e,void 0,arguments)},splice(...t){return ci(this,"splice",t)},toReversed(){return ls(this).toReversed()},toSorted(t){return ls(this).toSorted(t)},toSpliced(...t){return ls(this).toSpliced(...t)},unshift(...t){return ci(this,"unshift",t)},values(){return Fl(this,"values",bt)}};function Fl(t,e,n){const r=Ba(t),s=r[e]();return r!==t&&!Qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Mv=Array.prototype;function Cn(t,e,n,r,s,i){const o=Ba(t),l=o!==t&&!Qt(t),c=o[e];if(c!==Mv[e]){const p=c.apply(t,i);return l?bt(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,bt(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function pd(t,e,n,r){const s=Ba(t);let i=n;return s!==t&&(Qt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,bt(l),c,t)}),s[e](i,...r)}function Ul(t,e,n){const r=Se(t);At(r,"iterate",xi);const s=r[e](...n);return(s===-1||s===!1)&&uu(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function ci(t,e,n=[]){Tr(),su();const r=Se(t)[e].apply(t,n);return iu(),Ir(),r}const Fv=Xc("__proto__,__v_isRef,__isVue"),og=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rn));function Uv(t){rn(t)||(t=String(t));const e=Se(this);return At(e,"has",t),e.hasOwnProperty(t)}class ag{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Qv:hg:i?ug:cg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=xv[n]))return c;if(n==="hasOwnProperty")return Uv}const l=Reflect.get(e,n,Ye(e)?e:r);return(rn(n)?og.has(n):Fv(n))||(s||At(e,"get",n),i)?l:Ye(l)?o&&tu(n)?l:l.value:Ue(l)?s?fg(l):no(l):l}}class lg extends ag{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Wr(i);if(!Qt(r)&&!Wr(r)&&(i=Se(i),r=Se(r)),!le(e)&&Ye(i)&&!Ye(r))return c?!1:(i.value=r,!0)}const o=le(e)&&tu(n)?Number(n)<e.length:De(e,n),l=Reflect.set(e,n,r,Ye(e)?e:s);return e===Se(s)&&(o?ar(r,i)&&Pn(e,"set",n,r):Pn(e,"add",n,r)),l}deleteProperty(e,n){const r=De(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Pn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!rn(n)||!og.has(n))&&At(e,"has",n),r}ownKeys(e){return At(e,"iterate",le(e)?"length":$r),Reflect.ownKeys(e)}}class $v extends ag{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Bv=new lg,jv=new $v,qv=new lg(!0);const dc=t=>t,No=t=>Reflect.getPrototypeOf(t);function Wv(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=vs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?dc:e?fc:bt;return!e&&At(i,"iterate",c?hc:$r),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Lo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Hv(t,e){const n={get(s){const i=this.__v_raw,o=Se(i),l=Se(s);t||(ar(s,l)&&At(o,"get",s),At(o,"get",l));const{has:c}=No(o),u=e?dc:t?fc:bt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&At(Se(s),"iterate",$r),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Se(i),l=Se(s);return t||(ar(s,l)&&At(o,"has",s),At(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Se(l),u=e?dc:t?fc:bt;return!t&&At(c,"iterate",$r),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return et(n,t?{add:Lo("add"),set:Lo("set"),delete:Lo("delete"),clear:Lo("clear")}:{add(s){!e&&!Qt(s)&&!Wr(s)&&(s=Se(s));const i=Se(this);return No(i).has.call(i,s)||(i.add(s),Pn(i,"add",s,s)),this},set(s,i){!e&&!Qt(i)&&!Wr(i)&&(i=Se(i));const o=Se(this),{has:l,get:c}=No(o);let u=l.call(o,s);u||(s=Se(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?ar(i,d)&&Pn(o,"set",s,i):Pn(o,"add",s,i),this},delete(s){const i=Se(this),{has:o,get:l}=No(i);let c=o.call(i,s);c||(s=Se(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Pn(i,"delete",s,void 0),u},clear(){const s=Se(this),i=s.size!==0,o=s.clear();return i&&Pn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Wv(s,t,e)}),n}function lu(t,e){const n=Hv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(De(n,s)&&s in r?n:r,s,i)}const zv={get:lu(!1,!1)},Kv={get:lu(!1,!0)},Gv={get:lu(!0,!1)};const cg=new WeakMap,ug=new WeakMap,hg=new WeakMap,Qv=new WeakMap;function Yv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jv(t){return t.__v_skip||!Object.isExtensible(t)?0:Yv(Tv(t))}function no(t){return Wr(t)?t:cu(t,!1,Bv,zv,cg)}function dg(t){return cu(t,!1,qv,Kv,ug)}function fg(t){return cu(t,!0,jv,Gv,hg)}function cu(t,e,n,r,s){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Jv(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function lr(t){return Wr(t)?lr(t.__v_raw):!!(t&&t.__v_isReactive)}function Wr(t){return!!(t&&t.__v_isReadonly)}function Qt(t){return!!(t&&t.__v_isShallow)}function uu(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function hu(t){return!De(t,"__v_skip")&&Object.isExtensible(t)&&Hp(t,"__v_skip",!0),t}const bt=t=>Ue(t)?no(t):t,fc=t=>Ue(t)?fg(t):t;function Ye(t){return t?t.__v_isRef===!0:!1}function ge(t){return pg(t,!1)}function Xv(t){return pg(t,!0)}function pg(t,e){return Ye(t)?t:new Zv(t,e)}class Zv{constructor(e,n){this.dep=new au,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:bt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Qt(e)||Wr(e);e=r?e:Se(e),ar(e,n)&&(this._rawValue=e,this._value=r?e:bt(e),this.dep.trigger())}}function Y(t){return Ye(t)?t.value:t}const e0={get:(t,e,n)=>e==="__v_raw"?t:Y(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ye(s)&&!Ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function gg(t){return lr(t)?t:new Proxy(t,e0)}function t0(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=r0(t,n);return e}class n0{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Lv(Se(this._object),this._key)}}function r0(t,e,n){const r=t[e];return Ye(r)?r:new n0(t,e,n)}class s0{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new au(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Li-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return eg(this,!0),!0}get value(){const e=this.dep.track();return rg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function i0(t,e,n=!1){let r,s;return ye(t)?r=t:(r=t.get,s=t.set),new s0(r,s,n)}const xo={},da=new WeakMap;let xr;function o0(t,e=!1,n=xr){if(n){let r=da.get(n);r||da.set(n,r=[]),r.push(t)}}function a0(t,e,n=Fe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=q=>s?q:Qt(q)||s===!1||s===0?kn(q,1):kn(q);let d,p,g,m,T=!1,S=!1;if(Ye(t)?(p=()=>t.value,T=Qt(t)):lr(t)?(p=()=>u(t),T=!0):le(t)?(S=!0,T=t.some(q=>lr(q)||Qt(q)),p=()=>t.map(q=>{if(Ye(q))return q.value;if(lr(q))return u(q);if(ye(q))return c?c(q,2):q()})):ye(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Tr();try{g()}finally{Ir()}}const q=xr;xr=d;try{return c?c(t,3,[m]):t(m)}finally{xr=q}}:p=gn,e&&s){const q=p,H=s===!0?1/0:s;p=()=>kn(q(),H)}const P=ru(),O=()=>{d.stop(),P&&P.active&&eu(P.effects,d)};if(i&&e){const q=e;e=(...H)=>{q(...H),O()}}let L=S?new Array(t.length).fill(xo):xo;const F=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const H=d.run();if(s||T||(S?H.some((z,b)=>ar(z,L[b])):ar(H,L))){g&&g();const z=xr;xr=d;try{const b=[H,L===xo?void 0:S&&L[0]===xo?[]:L,m];c?c(e,3,b):e(...b),L=H}finally{xr=z}}}else d.run()};return l&&l(F),d=new Xp(p),d.scheduler=o?()=>o(F,!1):F,m=q=>o0(q,!1,d),g=d.onStop=()=>{const q=da.get(d);if(q){if(c)c(q,4);else for(const H of q)H();da.delete(d)}},e?r?F(!0):L=d.run():o?o(F.bind(null,!0),!0):d.run(),O.pause=d.pause.bind(d),O.resume=d.resume.bind(d),O.stop=O,O}function kn(t,e=1/0,n){if(e<=0||!Ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ye(t))kn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)kn(t[r],e,n);else if(Us(t)||vs(t))t.forEach(r=>{kn(r,e,n)});else if(Wp(t)){for(const r in t)kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&kn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ro(t,e,n,r){try{return r?t(...r):t()}catch(s){ja(s,e,n)}}function sn(t,e,n,r){if(ye(t)){const s=ro(t,e,n,r);return s&&jp(s)&&s.catch(i=>{ja(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(sn(t[i],e,n,r));return s}}function ja(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){Tr(),ro(i,null,10,[t,c,u]),Ir();return}}l0(t,n,s,r,o)}function l0(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Nt=[];let dn=-1;const ws=[];let Xn=null,us=0;const mg=Promise.resolve();let fa=null;function qa(t){const e=fa||mg;return t?e.then(this?t.bind(this):t):e}function c0(t){let e=dn+1,n=Nt.length;for(;e<n;){const r=e+n>>>1,s=Nt[r],i=Mi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function du(t){if(!(t.flags&1)){const e=Mi(t),n=Nt[Nt.length-1];!n||!(t.flags&2)&&e>=Mi(n)?Nt.push(t):Nt.splice(c0(e),0,t),t.flags|=1,_g()}}function _g(){fa||(fa=mg.then(vg))}function u0(t){le(t)?ws.push(...t):Xn&&t.id===-1?Xn.splice(us+1,0,t):t.flags&1||(ws.push(t),t.flags|=1),_g()}function gd(t,e,n=dn+1){for(;n<Nt.length;n++){const r=Nt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Nt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function yg(t){if(ws.length){const e=[...new Set(ws)].sort((n,r)=>Mi(n)-Mi(r));if(ws.length=0,Xn){Xn.push(...e);return}for(Xn=e,us=0;us<Xn.length;us++){const n=Xn[us];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Xn=null,us=0}}const Mi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function vg(t){try{for(dn=0;dn<Nt.length;dn++){const e=Nt[dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ro(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dn<Nt.length;dn++){const e=Nt[dn];e&&(e.flags&=-2)}dn=-1,Nt.length=0,yg(),fa=null,(Nt.length||ws.length)&&vg()}}let st=null,wg=null;function pa(t){const e=st;return st=t,wg=t&&t.type.__scopeId||null,e}function St(t,e=st,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Pd(-1);const i=pa(e);let o;try{o=t(...s)}finally{pa(i),r._d&&Pd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function tn(t,e){if(st===null)return t;const n=Qa(st),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Fe]=e[s];i&&(ye(i)&&(i={mounted:i,updated:i}),i.deep&&kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Dr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Tr(),sn(c,n,8,[t.el,l,t,e]),Ir())}}const Eg=Symbol("_vte"),Tg=t=>t.__isTeleport,Ti=t=>t&&(t.disabled||t.disabled===""),md=t=>t&&(t.defer||t.defer===""),_d=t=>typeof SVGElement<"u"&&t instanceof SVGElement,yd=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,pc=(t,e)=>{const n=t&&t.to;return Je(n)?e?e(n):null:n},Ig={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,u){const{mc:d,pc:p,pbc:g,o:{insert:m,querySelector:T,createText:S,createComment:P}}=u,O=Ti(e.props);let{shapeFlag:L,children:F,dynamicChildren:q}=e;if(t==null){const H=e.el=S(""),z=e.anchor=S("");m(H,n,r),m(z,n,r);const b=(y,I)=>{L&16&&(s&&s.isCE&&(s.ce._teleportTarget=y),d(F,y,I,s,i,o,l,c))},v=()=>{const y=e.target=pc(e.props,T),I=Ag(y,e,S,m);y&&(o!=="svg"&&_d(y)?o="svg":o!=="mathml"&&yd(y)&&(o="mathml"),O||(b(y,I),Qo(e,!1)))};O&&(b(n,z),Qo(e,!0)),md(e.props)?Ot(()=>{v(),e.el.__isMounted=!0},i):v()}else{if(md(e.props)&&!t.el.__isMounted){Ot(()=>{Ig.process(t,e,n,r,s,i,o,l,c,u),delete t.el.__isMounted},i);return}e.el=t.el,e.targetStart=t.targetStart;const H=e.anchor=t.anchor,z=e.target=t.target,b=e.targetAnchor=t.targetAnchor,v=Ti(t.props),y=v?n:z,I=v?H:b;if(o==="svg"||_d(z)?o="svg":(o==="mathml"||yd(z))&&(o="mathml"),q?(g(t.dynamicChildren,q,y,s,i,o,l),yu(t,e,!0)):c||p(t,e,y,I,s,i,o,l,!1),O)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Mo(e,n,H,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const R=e.target=pc(e.props,T);R&&Mo(e,R,null,u,0)}else v&&Mo(e,z,b,u,1);Qo(e,O)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:u,targetAnchor:d,target:p,props:g}=t;if(p&&(s(u),s(d)),i&&s(c),o&16){const m=i||!Ti(g);for(let T=0;T<l.length;T++){const S=l[T];r(S,e,n,m,!!S.dynamicChildren)}}},move:Mo,hydrate:h0};function Mo(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:u,props:d}=t,p=i===2;if(p&&r(o,e,n),(!p||Ti(d))&&c&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);p&&r(l,e,n)}function h0(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:u,createText:d}},p){const g=e.target=pc(e.props,c);if(g){const m=Ti(e.props),T=g._lpa||g.firstChild;if(e.shapeFlag&16)if(m)e.anchor=p(o(t),e,l(t),n,r,s,i),e.targetStart=T,e.targetAnchor=T&&o(T);else{e.anchor=o(t);let S=T;for(;S;){if(S&&S.nodeType===8){if(S.data==="teleport start anchor")e.targetStart=S;else if(S.data==="teleport anchor"){e.targetAnchor=S,g._lpa=e.targetAnchor&&o(e.targetAnchor);break}}S=o(S)}e.targetAnchor||Ag(g,e,d,u),p(T&&o(T),e,g,n,r,s,i)}Qo(e,m)}return e.anchor&&o(e.anchor)}const Bs=Ig;function Qo(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Ag(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[Eg]=i,t&&(r(s,t),r(i,t)),i}const Zn=Symbol("_leaveCb"),Fo=Symbol("_enterCb");function bg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Jr(()=>{t.isMounted=!0}),pu(()=>{t.isUnmounting=!0}),t}const Gt=[Function,Array],Cg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},Sg=t=>{const e=t.subTree;return e.component?Sg(e.component):e},d0={name:"BaseTransition",props:Cg,setup(t,{slots:e}){const n=Xg(),r=bg();return()=>{const s=e.default&&fu(e.default(),!0);if(!s||!s.length)return;const i=Rg(s),o=Se(t),{mode:l}=o;if(r.isLeaving)return $l(i);const c=vd(i);if(!c)return $l(i);let u=Fi(c,o,r,n,p=>u=p);c.type!==Lt&&Hr(c,u);let d=n.subTree&&vd(n.subTree);if(d&&d.type!==Lt&&!Fr(c,d)&&Sg(n).type!==Lt){let p=Fi(d,o,r,n);if(Hr(d,p),l==="out-in"&&c.type!==Lt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},$l(i);l==="in-out"&&c.type!==Lt?p.delayLeave=(g,m,T)=>{const S=Pg(r,d);S[String(d.key)]=d,g[Zn]=()=>{m(),g[Zn]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{T(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function Rg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Lt){e=n;break}}return e}const f0=d0;function Pg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Fi(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:m,onAfterLeave:T,onLeaveCancelled:S,onBeforeAppear:P,onAppear:O,onAfterAppear:L,onAppearCancelled:F}=e,q=String(t.key),H=Pg(n,t),z=(y,I)=>{y&&sn(y,r,9,I)},b=(y,I)=>{const R=I[1];z(y,I),le(y)?y.every(C=>C.length<=1)&&R():y.length<=1&&R()},v={mode:o,persisted:l,beforeEnter(y){let I=c;if(!n.isMounted)if(i)I=P||c;else return;y[Zn]&&y[Zn](!0);const R=H[q];R&&Fr(t,R)&&R.el[Zn]&&R.el[Zn](),z(I,[y])},enter(y){let I=u,R=d,C=p;if(!n.isMounted)if(i)I=O||u,R=L||d,C=F||p;else return;let E=!1;const Ve=y[Fo]=Xe=>{E||(E=!0,Xe?z(C,[y]):z(R,[y]),v.delayedLeave&&v.delayedLeave(),y[Fo]=void 0)};I?b(I,[y,Ve]):Ve()},leave(y,I){const R=String(t.key);if(y[Fo]&&y[Fo](!0),n.isUnmounting)return I();z(g,[y]);let C=!1;const E=y[Zn]=Ve=>{C||(C=!0,I(),Ve?z(S,[y]):z(T,[y]),y[Zn]=void 0,H[R]===t&&delete H[R])};H[R]=t,m?b(m,[y,E]):E()},clone(y){const I=Fi(y,e,n,r,s);return s&&s(I),I}};return v}function $l(t){if(Wa(t))return t=pr(t),t.children=null,t}function vd(t){if(!Wa(t))return Tg(t.type)&&t.children?Rg(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ye(n.default))return n.default()}}function Hr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Hr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function fu(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Be?(o.patchFlag&128&&s++,r=r.concat(fu(o.children,e,l))):(e||o.type!==Lt)&&r.push(l!=null?pr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function He(t,e){return ye(t)?et({name:t.name},e,{setup:t}):t}function kg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ga(t,e,n,r,s=!1){if(le(t)){t.forEach((T,S)=>ga(T,e&&(le(e)?e[S]:e),n,r,s));return}if(Es(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ga(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Qa(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Fe?l.refs={}:l.refs,p=l.setupState,g=Se(p),m=p===Fe?()=>!1:T=>De(g,T);if(u!=null&&u!==c&&(Je(u)?(d[u]=null,m(u)&&(p[u]=null)):Ye(u)&&(u.value=null)),ye(c))ro(c,l,12,[o,d]);else{const T=Je(c),S=Ye(c);if(T||S){const P=()=>{if(t.f){const O=T?m(c)?p[c]:d[c]:c.value;s?le(O)&&eu(O,i):le(O)?O.includes(i)||O.push(i):T?(d[c]=[i],m(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else T?(d[c]=o,m(c)&&(p[c]=o)):S&&(c.value=o,t.k&&(d[t.k]=o))};o?(P.id=-1,Ot(P,n)):P()}}}$a().requestIdleCallback;$a().cancelIdleCallback;const Es=t=>!!t.type.__asyncLoader,Wa=t=>t.type.__isKeepAlive;function p0(t,e){Vg(t,"a",e)}function g0(t,e){Vg(t,"da",e)}function Vg(t,e,n=ut){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ha(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Wa(s.parent.vnode)&&m0(r,e,n,s),s=s.parent}}function m0(t,e,n,r){const s=Ha(e,t,r,!0);Dg(()=>{eu(r[e],s)},n)}function Ha(t,e,n=ut,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Tr();const l=so(n),c=sn(e,n,t,o);return l(),Ir(),c});return r?s.unshift(i):s.push(i),i}}const $n=t=>(e,n=ut)=>{(!Bi||t==="sp")&&Ha(t,(...r)=>e(...r),n)},_0=$n("bm"),Jr=$n("m"),y0=$n("bu"),Og=$n("u"),pu=$n("bum"),Dg=$n("um"),v0=$n("sp"),w0=$n("rtg"),E0=$n("rtc");function T0(t,e=ut){Ha("ec",t,e)}const I0="components";function gu(t,e){return b0(I0,t,!0,e)||t}const A0=Symbol.for("v-ndc");function b0(t,e,n=!0,r=!1){const s=st||ut;if(s){const i=s.type;{const l=f1(i,!1);if(l&&(l===e||l===Jt(e)||l===Ua(Jt(e))))return i}const o=wd(s[t]||i[t],e)||wd(s.appContext[t],e);return!o&&r?i:o}}function wd(t,e){return t&&(t[e]||t[Jt(e)]||t[Ua(Jt(e))])}function En(t,e,n,r){let s;const i=n,o=le(t);if(o||Je(t)){const l=o&&lr(t);let c=!1;l&&(c=!Qt(t),t=Ba(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?bt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ue(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function Ed(t,e,n={},r,s){if(st.ce||st.parent&&Es(st.parent)&&st.parent.ce)return e!=="default"&&(n.name=e),X(),xt(Be,null,[de("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),X();const o=i&&Ng(i(n)),l=n.key||o&&o.key,c=xt(Be,{key:(l&&!rn(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Ng(t){return t.some(e=>$i(e)?!(e.type===Lt||e.type===Be&&!Ng(e.children)):!0)?t:null}const gc=t=>t?Zg(t)?Qa(t):gc(t.parent):null,Ii=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gc(t.parent),$root:t=>gc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>mu(t),$forceUpdate:t=>t.f||(t.f=()=>{du(t.update)}),$nextTick:t=>t.n||(t.n=qa.bind(t.proxy)),$watch:t=>G0.bind(t)}),Bl=(t,e)=>t!==Fe&&!t.__isScriptSetup&&De(t,e),C0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Bl(r,e))return o[e]=1,r[e];if(s!==Fe&&De(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&De(u,e))return o[e]=3,i[e];if(n!==Fe&&De(n,e))return o[e]=4,n[e];mc&&(o[e]=0)}}const d=Ii[e];let p,g;if(d)return e==="$attrs"&&At(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Fe&&De(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,De(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Bl(s,e)?(s[e]=n,!0):r!==Fe&&De(r,e)?(r[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Fe&&De(t,o)||Bl(e,o)||(l=i[0])&&De(l,o)||De(r,o)||De(Ii,o)||De(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Td(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let mc=!0;function S0(t){const e=mu(t),n=t.proxy,r=t.ctx;mc=!1,e.beforeCreate&&Id(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:m,updated:T,activated:S,deactivated:P,beforeDestroy:O,beforeUnmount:L,destroyed:F,unmounted:q,render:H,renderTracked:z,renderTriggered:b,errorCaptured:v,serverPrefetch:y,expose:I,inheritAttrs:R,components:C,directives:E,filters:Ve}=e;if(u&&R0(u,r,null),o)for(const pe in o){const Ee=o[pe];ye(Ee)&&(r[pe]=Ee.bind(n))}if(s){const pe=s.call(n,n);Ue(pe)&&(t.data=no(pe))}if(mc=!0,i)for(const pe in i){const Ee=i[pe],Bt=ye(Ee)?Ee.bind(n,n):ye(Ee.get)?Ee.get.bind(n,n):gn,Xt=!ye(Ee)&&ye(Ee.set)?Ee.set.bind(n):gn,zt=we({get:Bt,set:Xt});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>zt.value,set:ze=>zt.value=ze})}if(l)for(const pe in l)Lg(l[pe],r,n,pe);if(c){const pe=ye(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(Ee=>{Ai(Ee,pe[Ee])})}d&&Id(d,t,"c");function Le(pe,Ee){le(Ee)?Ee.forEach(Bt=>pe(Bt.bind(n))):Ee&&pe(Ee.bind(n))}if(Le(_0,p),Le(Jr,g),Le(y0,m),Le(Og,T),Le(p0,S),Le(g0,P),Le(T0,v),Le(E0,z),Le(w0,b),Le(pu,L),Le(Dg,q),Le(v0,y),le(I))if(I.length){const pe=t.exposed||(t.exposed={});I.forEach(Ee=>{Object.defineProperty(pe,Ee,{get:()=>n[Ee],set:Bt=>n[Ee]=Bt})})}else t.exposed||(t.exposed={});H&&t.render===gn&&(t.render=H),R!=null&&(t.inheritAttrs=R),C&&(t.components=C),E&&(t.directives=E),y&&kg(t)}function R0(t,e,n=gn){le(t)&&(t=_c(t));for(const r in t){const s=t[r];let i;Ue(s)?"default"in s?i=Ht(s.from||r,s.default,!0):i=Ht(s.from||r):i=Ht(s),Ye(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Id(t,e,n){sn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Lg(t,e,n,r){let s=r.includes(".")?Kg(n,r):()=>n[r];if(Je(t)){const i=e[t];ye(i)&&mt(s,i)}else if(ye(t))mt(s,t.bind(n));else if(Ue(t))if(le(t))t.forEach(i=>Lg(i,e,n,r));else{const i=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(i)&&mt(s,i,t)}}function mu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ma(c,u,o,!0)),ma(c,e,o)),Ue(e)&&i.set(e,c),c}function ma(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ma(t,i,n,!0),s&&s.forEach(o=>ma(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=P0[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const P0={data:Ad,props:bd,emits:bd,methods:di,computed:di,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:di,directives:di,watch:V0,provide:Ad,inject:k0};function Ad(t,e){return e?t?function(){return et(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function k0(t,e){return di(_c(t),_c(e))}function _c(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function di(t,e){return t?et(Object.create(null),t,e):e}function bd(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:et(Object.create(null),Td(t),Td(e??{})):e}function V0(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=Vt(t[r],e[r]);return n}function xg(){return{app:null,config:{isNativeTag:wv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let O0=0;function D0(t,e){return function(r,s=null){ye(r)||(r=et({},r)),s!=null&&!Ue(s)&&(s=null);const i=xg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:O0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:g1,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ye(d.install)?(o.add(d),d.install(u,...p)):ye(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,g){if(!c){const m=u._ceVNode||de(r,s);return m.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),p&&e?e(m,d):t(m,d,g),c=!0,u._container=d,d.__vue_app__=u,Qa(m.component)}},onUnmount(d){l.push(d)},unmount(){c&&(sn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Br;Br=u;try{return d()}finally{Br=p}}};return u}}let Br=null;function Ai(t,e){if(ut){let n=ut.provides;const r=ut.parent&&ut.parent.provides;r===n&&(n=ut.provides=Object.create(r)),n[t]=e}}function Ht(t,e,n=!1){const r=ut||st;if(r||Br){const s=Br?Br._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ye(e)?e.call(r&&r.proxy):e}}function N0(){return!!(ut||st||Br)}const Mg={},Fg=()=>Object.create(Mg),Ug=t=>Object.getPrototypeOf(t)===Mg;function L0(t,e,n,r=!1){const s={},i=Fg();t.propsDefaults=Object.create(null),$g(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:dg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function x0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Se(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(za(t.emitsOptions,g))continue;const m=e[g];if(c)if(De(i,g))m!==i[g]&&(i[g]=m,u=!0);else{const T=Jt(g);s[T]=yc(c,l,T,m,t,!1)}else m!==i[g]&&(i[g]=m,u=!0)}}}else{$g(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!De(e,p)&&((d=Yr(p))===p||!De(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=yc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!De(e,p))&&(delete i[p],u=!0)}u&&Pn(t.attrs,"set","")}function $g(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(vi(c))continue;const u=e[c];let d;s&&De(s,d=Jt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:za(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Se(n),u=l||Fe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=yc(s,c,p,u[p],t,!De(u,p))}}return o}function yc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=De(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ye(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=so(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Yr(n))&&(r=!0))}return r}const M0=new WeakMap;function Bg(t,e,n=!1){const r=n?M0:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ye(t)){const d=p=>{c=!0;const[g,m]=Bg(p,e,!0);et(o,g),m&&l.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Ue(t)&&r.set(t,ys),ys;if(le(i))for(let d=0;d<i.length;d++){const p=Jt(i[d]);Cd(p)&&(o[p]=Fe)}else if(i)for(const d in i){const p=Jt(d);if(Cd(p)){const g=i[d],m=o[p]=le(g)||ye(g)?{type:g}:et({},g),T=m.type;let S=!1,P=!0;if(le(T))for(let O=0;O<T.length;++O){const L=T[O],F=ye(L)&&L.name;if(F==="Boolean"){S=!0;break}else F==="String"&&(P=!1)}else S=ye(T)&&T.name==="Boolean";m[0]=S,m[1]=P,(S||De(m,"default"))&&l.push(p)}}const u=[o,l];return Ue(t)&&r.set(t,u),u}function Cd(t){return t[0]!=="$"&&!vi(t)}const jg=t=>t[0]==="_"||t==="$stable",_u=t=>le(t)?t.map(fn):[fn(t)],F0=(t,e,n)=>{if(e._n)return e;const r=St((...s)=>_u(e(...s)),n);return r._c=!1,r},qg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(jg(s))continue;const i=t[s];if(ye(i))e[s]=F0(s,i,r);else if(i!=null){const o=_u(i);e[s]=()=>o}}},Wg=(t,e)=>{const n=_u(e);t.slots.default=()=>n},Hg=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},U0=(t,e,n)=>{const r=t.slots=Fg();if(t.vnode.shapeFlag&32){const s=e._;s?(Hg(r,e,n),n&&Hp(r,"_",s,!0)):qg(e,r)}else e&&Wg(t,e)},$0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Hg(s,e,n):(i=!e.$stable,qg(e,s)),o=e}else e&&(Wg(t,e),o={default:1});if(i)for(const l in s)!jg(l)&&o[l]==null&&delete s[l]},Ot=t1;function B0(t){return j0(t)}function j0(t,e){const n=$a();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:m=gn,insertStaticContent:T}=t,S=(w,A,V,B=null,x=null,j=null,J=void 0,G=null,K=!!A.dynamicChildren)=>{if(w===A)return;w&&!Fr(w,A)&&(B=M(w),ze(w,x,j,!0),w=null),A.patchFlag===-2&&(K=!1,A.dynamicChildren=null);const{type:W,ref:ue,shapeFlag:ee}=A;switch(W){case Ka:P(w,A,V,B);break;case Lt:O(w,A,V,B);break;case Wl:w==null&&L(A,V,B,J);break;case Be:C(w,A,V,B,x,j,J,G,K);break;default:ee&1?H(w,A,V,B,x,j,J,G,K):ee&6?E(w,A,V,B,x,j,J,G,K):(ee&64||ee&128)&&W.process(w,A,V,B,x,j,J,G,K,se)}ue!=null&&x&&ga(ue,w&&w.ref,j,A||w,!A)},P=(w,A,V,B)=>{if(w==null)r(A.el=l(A.children),V,B);else{const x=A.el=w.el;A.children!==w.children&&u(x,A.children)}},O=(w,A,V,B)=>{w==null?r(A.el=c(A.children||""),V,B):A.el=w.el},L=(w,A,V,B)=>{[w.el,w.anchor]=T(w.children,A,V,B,w.el,w.anchor)},F=({el:w,anchor:A},V,B)=>{let x;for(;w&&w!==A;)x=g(w),r(w,V,B),w=x;r(A,V,B)},q=({el:w,anchor:A})=>{let V;for(;w&&w!==A;)V=g(w),s(w),w=V;s(A)},H=(w,A,V,B,x,j,J,G,K)=>{A.type==="svg"?J="svg":A.type==="math"&&(J="mathml"),w==null?z(A,V,B,x,j,J,G,K):y(w,A,x,j,J,G,K)},z=(w,A,V,B,x,j,J,G)=>{let K,W;const{props:ue,shapeFlag:ee,transition:ae,dirs:ie}=w;if(K=w.el=o(w.type,j,ue&&ue.is,ue),ee&8?d(K,w.children):ee&16&&v(w.children,K,null,B,x,jl(w,j),J,G),ie&&Dr(w,null,B,"created"),b(K,w,w.scopeId,J,B),ue){for(const ke in ue)ke!=="value"&&!vi(ke)&&i(K,ke,null,ue[ke],j,B);"value"in ue&&i(K,"value",null,ue.value,j),(W=ue.onVnodeBeforeMount)&&un(W,B,w)}ie&&Dr(w,null,B,"beforeMount");const he=q0(x,ae);he&&ae.beforeEnter(K),r(K,A,V),((W=ue&&ue.onVnodeMounted)||he||ie)&&Ot(()=>{W&&un(W,B,w),he&&ae.enter(K),ie&&Dr(w,null,B,"mounted")},x)},b=(w,A,V,B,x)=>{if(V&&m(w,V),B)for(let j=0;j<B.length;j++)m(w,B[j]);if(x){let j=x.subTree;if(A===j||Qg(j.type)&&(j.ssContent===A||j.ssFallback===A)){const J=x.vnode;b(w,J,J.scopeId,J.slotScopeIds,x.parent)}}},v=(w,A,V,B,x,j,J,G,K=0)=>{for(let W=K;W<w.length;W++){const ue=w[W]=G?er(w[W]):fn(w[W]);S(null,ue,A,V,B,x,j,J,G)}},y=(w,A,V,B,x,j,J)=>{const G=A.el=w.el;let{patchFlag:K,dynamicChildren:W,dirs:ue}=A;K|=w.patchFlag&16;const ee=w.props||Fe,ae=A.props||Fe;let ie;if(V&&Nr(V,!1),(ie=ae.onVnodeBeforeUpdate)&&un(ie,V,A,w),ue&&Dr(A,w,V,"beforeUpdate"),V&&Nr(V,!0),(ee.innerHTML&&ae.innerHTML==null||ee.textContent&&ae.textContent==null)&&d(G,""),W?I(w.dynamicChildren,W,G,V,B,jl(A,x),j):J||Ee(w,A,G,null,V,B,jl(A,x),j,!1),K>0){if(K&16)R(G,ee,ae,V,x);else if(K&2&&ee.class!==ae.class&&i(G,"class",null,ae.class,x),K&4&&i(G,"style",ee.style,ae.style,x),K&8){const he=A.dynamicProps;for(let ke=0;ke<he.length;ke++){const Re=he[ke],yt=ee[Re],at=ae[Re];(at!==yt||Re==="value")&&i(G,Re,yt,at,x,V)}}K&1&&w.children!==A.children&&d(G,A.children)}else!J&&W==null&&R(G,ee,ae,V,x);((ie=ae.onVnodeUpdated)||ue)&&Ot(()=>{ie&&un(ie,V,A,w),ue&&Dr(A,w,V,"updated")},B)},I=(w,A,V,B,x,j,J)=>{for(let G=0;G<A.length;G++){const K=w[G],W=A[G],ue=K.el&&(K.type===Be||!Fr(K,W)||K.shapeFlag&70)?p(K.el):V;S(K,W,ue,null,B,x,j,J,!0)}},R=(w,A,V,B,x)=>{if(A!==V){if(A!==Fe)for(const j in A)!vi(j)&&!(j in V)&&i(w,j,A[j],null,x,B);for(const j in V){if(vi(j))continue;const J=V[j],G=A[j];J!==G&&j!=="value"&&i(w,j,G,J,x,B)}"value"in V&&i(w,"value",A.value,V.value,x)}},C=(w,A,V,B,x,j,J,G,K)=>{const W=A.el=w?w.el:l(""),ue=A.anchor=w?w.anchor:l("");let{patchFlag:ee,dynamicChildren:ae,slotScopeIds:ie}=A;ie&&(G=G?G.concat(ie):ie),w==null?(r(W,V,B),r(ue,V,B),v(A.children||[],V,ue,x,j,J,G,K)):ee>0&&ee&64&&ae&&w.dynamicChildren?(I(w.dynamicChildren,ae,V,x,j,J,G),(A.key!=null||x&&A===x.subTree)&&yu(w,A,!0)):Ee(w,A,V,ue,x,j,J,G,K)},E=(w,A,V,B,x,j,J,G,K)=>{A.slotScopeIds=G,w==null?A.shapeFlag&512?x.ctx.activate(A,V,B,J,K):Ve(A,V,B,x,j,J,K):Xe(w,A,K)},Ve=(w,A,V,B,x,j,J)=>{const G=w.component=l1(w,B,x);if(Wa(w)&&(G.ctx.renderer=se),c1(G,!1,J),G.asyncDep){if(x&&x.registerDep(G,Le,J),!w.el){const K=G.subTree=de(Lt);O(null,K,A,V)}}else Le(G,w,A,V,x,j,J)},Xe=(w,A,V)=>{const B=A.component=w.component;if(Z0(w,A,V))if(B.asyncDep&&!B.asyncResolved){pe(B,A,V);return}else B.next=A,B.update();else A.el=w.el,B.vnode=A},Le=(w,A,V,B,x,j,J)=>{const G=()=>{if(w.isMounted){let{next:ee,bu:ae,u:ie,parent:he,vnode:ke}=w;{const vt=zg(w);if(vt){ee&&(ee.el=ke.el,pe(w,ee,J)),vt.asyncDep.then(()=>{w.isUnmounted||G()});return}}let Re=ee,yt;Nr(w,!1),ee?(ee.el=ke.el,pe(w,ee,J)):ee=ke,ae&&Go(ae),(yt=ee.props&&ee.props.onVnodeBeforeUpdate)&&un(yt,he,ee,ke),Nr(w,!0);const at=ql(w),dt=w.subTree;w.subTree=at,S(dt,at,p(dt.el),M(dt),w,x,j),ee.el=at.el,Re===null&&e1(w,at.el),ie&&Ot(ie,x),(yt=ee.props&&ee.props.onVnodeUpdated)&&Ot(()=>un(yt,he,ee,ke),x)}else{let ee;const{el:ae,props:ie}=A,{bm:he,m:ke,parent:Re,root:yt,type:at}=w,dt=Es(A);if(Nr(w,!1),he&&Go(he),!dt&&(ee=ie&&ie.onVnodeBeforeMount)&&un(ee,Re,A),Nr(w,!0),ae&&xe){const vt=()=>{w.subTree=ql(w),xe(ae,w.subTree,w,x,null)};dt&&at.__asyncHydrate?at.__asyncHydrate(ae,w,vt):vt()}else{yt.ce&&yt.ce._injectChildStyle(at);const vt=w.subTree=ql(w);S(null,vt,V,B,w,x,j),A.el=vt.el}if(ke&&Ot(ke,x),!dt&&(ee=ie&&ie.onVnodeMounted)){const vt=A;Ot(()=>un(ee,Re,vt),x)}(A.shapeFlag&256||Re&&Es(Re.vnode)&&Re.vnode.shapeFlag&256)&&w.a&&Ot(w.a,x),w.isMounted=!0,A=V=B=null}};w.scope.on();const K=w.effect=new Xp(G);w.scope.off();const W=w.update=K.run.bind(K),ue=w.job=K.runIfDirty.bind(K);ue.i=w,ue.id=w.uid,K.scheduler=()=>du(ue),Nr(w,!0),W()},pe=(w,A,V)=>{A.component=w;const B=w.vnode.props;w.vnode=A,w.next=null,x0(w,A.props,B,V),$0(w,A.children,V),Tr(),gd(w),Ir()},Ee=(w,A,V,B,x,j,J,G,K=!1)=>{const W=w&&w.children,ue=w?w.shapeFlag:0,ee=A.children,{patchFlag:ae,shapeFlag:ie}=A;if(ae>0){if(ae&128){Xt(W,ee,V,B,x,j,J,G,K);return}else if(ae&256){Bt(W,ee,V,B,x,j,J,G,K);return}}ie&8?(ue&16&&Mt(W,x,j),ee!==W&&d(V,ee)):ue&16?ie&16?Xt(W,ee,V,B,x,j,J,G,K):Mt(W,x,j,!0):(ue&8&&d(V,""),ie&16&&v(ee,V,B,x,j,J,G,K))},Bt=(w,A,V,B,x,j,J,G,K)=>{w=w||ys,A=A||ys;const W=w.length,ue=A.length,ee=Math.min(W,ue);let ae;for(ae=0;ae<ee;ae++){const ie=A[ae]=K?er(A[ae]):fn(A[ae]);S(w[ae],ie,V,null,x,j,J,G,K)}W>ue?Mt(w,x,j,!0,!1,ee):v(A,V,B,x,j,J,G,K,ee)},Xt=(w,A,V,B,x,j,J,G,K)=>{let W=0;const ue=A.length;let ee=w.length-1,ae=ue-1;for(;W<=ee&&W<=ae;){const ie=w[W],he=A[W]=K?er(A[W]):fn(A[W]);if(Fr(ie,he))S(ie,he,V,null,x,j,J,G,K);else break;W++}for(;W<=ee&&W<=ae;){const ie=w[ee],he=A[ae]=K?er(A[ae]):fn(A[ae]);if(Fr(ie,he))S(ie,he,V,null,x,j,J,G,K);else break;ee--,ae--}if(W>ee){if(W<=ae){const ie=ae+1,he=ie<ue?A[ie].el:B;for(;W<=ae;)S(null,A[W]=K?er(A[W]):fn(A[W]),V,he,x,j,J,G,K),W++}}else if(W>ae)for(;W<=ee;)ze(w[W],x,j,!0),W++;else{const ie=W,he=W,ke=new Map;for(W=he;W<=ae;W++){const Pt=A[W]=K?er(A[W]):fn(A[W]);Pt.key!=null&&ke.set(Pt.key,W)}let Re,yt=0;const at=ae-he+1;let dt=!1,vt=0;const qn=new Array(at);for(W=0;W<at;W++)qn[W]=0;for(W=ie;W<=ee;W++){const Pt=w[W];if(yt>=at){ze(Pt,x,j,!0);continue}let Kt;if(Pt.key!=null)Kt=ke.get(Pt.key);else for(Re=he;Re<=ae;Re++)if(qn[Re-he]===0&&Fr(Pt,A[Re])){Kt=Re;break}Kt===void 0?ze(Pt,x,j,!0):(qn[Kt-he]=W+1,Kt>=vt?vt=Kt:dt=!0,S(Pt,A[Kt],V,null,x,j,J,G,K),yt++)}const ns=dt?W0(qn):ys;for(Re=ns.length-1,W=at-1;W>=0;W--){const Pt=he+W,Kt=A[Pt],rs=Pt+1<ue?A[Pt+1].el:B;qn[W]===0?S(null,Kt,V,rs,x,j,J,G,K):dt&&(Re<0||W!==ns[Re]?zt(Kt,V,rs,2):Re--)}}},zt=(w,A,V,B,x=null)=>{const{el:j,type:J,transition:G,children:K,shapeFlag:W}=w;if(W&6){zt(w.component.subTree,A,V,B);return}if(W&128){w.suspense.move(A,V,B);return}if(W&64){J.move(w,A,V,se);return}if(J===Be){r(j,A,V);for(let ee=0;ee<K.length;ee++)zt(K[ee],A,V,B);r(w.anchor,A,V);return}if(J===Wl){F(w,A,V);return}if(B!==2&&W&1&&G)if(B===0)G.beforeEnter(j),r(j,A,V),Ot(()=>G.enter(j),x);else{const{leave:ee,delayLeave:ae,afterLeave:ie}=G,he=()=>r(j,A,V),ke=()=>{ee(j,()=>{he(),ie&&ie()})};ae?ae(j,he,ke):ke()}else r(j,A,V)},ze=(w,A,V,B=!1,x=!1)=>{const{type:j,props:J,ref:G,children:K,dynamicChildren:W,shapeFlag:ue,patchFlag:ee,dirs:ae,cacheIndex:ie}=w;if(ee===-2&&(x=!1),G!=null&&ga(G,null,V,w,!0),ie!=null&&(A.renderCache[ie]=void 0),ue&256){A.ctx.deactivate(w);return}const he=ue&1&&ae,ke=!Es(w);let Re;if(ke&&(Re=J&&J.onVnodeBeforeUnmount)&&un(Re,A,w),ue&6)cn(w.component,V,B);else{if(ue&128){w.suspense.unmount(V,B);return}he&&Dr(w,null,A,"beforeUnmount"),ue&64?w.type.remove(w,A,V,se,B):W&&!W.hasOnce&&(j!==Be||ee>0&&ee&64)?Mt(W,A,V,!1,!0):(j===Be&&ee&384||!x&&ue&16)&&Mt(K,A,V),B&&Ke(w)}(ke&&(Re=J&&J.onVnodeUnmounted)||he)&&Ot(()=>{Re&&un(Re,A,w),he&&Dr(w,null,A,"unmounted")},V)},Ke=w=>{const{type:A,el:V,anchor:B,transition:x}=w;if(A===Be){jn(V,B);return}if(A===Wl){q(w);return}const j=()=>{s(V),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(w.shapeFlag&1&&x&&!x.persisted){const{leave:J,delayLeave:G}=x,K=()=>J(V,j);G?G(w.el,j,K):K()}else j()},jn=(w,A)=>{let V;for(;w!==A;)V=g(w),s(w),w=V;s(A)},cn=(w,A,V)=>{const{bum:B,scope:x,job:j,subTree:J,um:G,m:K,a:W}=w;Sd(K),Sd(W),B&&Go(B),x.stop(),j&&(j.flags|=8,ze(J,w,A,V)),G&&Ot(G,A),Ot(()=>{w.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},Mt=(w,A,V,B=!1,x=!1,j=0)=>{for(let J=j;J<w.length;J++)ze(w[J],A,V,B,x)},M=w=>{if(w.shapeFlag&6)return M(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const A=g(w.anchor||w.el),V=A&&A[Eg];return V?g(V):A};let te=!1;const Z=(w,A,V)=>{w==null?A._vnode&&ze(A._vnode,null,null,!0):S(A._vnode||null,w,A,null,null,null,V),A._vnode=w,te||(te=!0,gd(),yg(),te=!1)},se={p:S,um:ze,m:zt,r:Ke,mt:Ve,mc:v,pc:Ee,pbc:I,n:M,o:t};let be,xe;return{render:Z,hydrate:be,createApp:D0(Z,be)}}function jl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Nr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function q0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function yu(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=er(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&yu(o,l)),l.type===Ka&&(l.el=o.el)}}function W0(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function zg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:zg(e)}function Sd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const H0=Symbol.for("v-scx"),z0=()=>Ht(H0);function K0(t,e){return vu(t,null,e)}function mt(t,e,n){return vu(t,e,n)}function vu(t,e,n=Fe){const{immediate:r,deep:s,flush:i,once:o}=n,l=et({},n),c=e&&r||!e&&i!=="post";let u;if(Bi){if(i==="sync"){const m=z0();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=gn,m.resume=gn,m.pause=gn,m}}const d=ut;l.call=(m,T,S)=>sn(m,d,T,S);let p=!1;i==="post"?l.scheduler=m=>{Ot(m,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(m,T)=>{T?m():du(m)}),l.augmentJob=m=>{e&&(m.flags|=4),p&&(m.flags|=2,d&&(m.id=d.uid,m.i=d))};const g=a0(t,e,l);return Bi&&(u?u.push(g):c&&g()),g}function G0(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?Kg(r,t):()=>r[t]:t.bind(r,r);let i;ye(e)?i=e:(i=e.handler,n=e);const o=so(this),l=vu(s,i.bind(r),n);return o(),l}function Kg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Q0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Jt(e)}Modifiers`]||t[`${Yr(e)}Modifiers`];function Y0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&Q0(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Je(d)?d.trim():d)),o.number&&(s=n.map(ua)));let l,c=r[l=Ll(e)]||r[l=Ll(Jt(e))];!c&&i&&(c=r[l=Ll(Yr(e))]),c&&sn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,sn(u,t,6,s)}}function Gg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ye(t)){const c=u=>{const d=Gg(u,e,!0);d&&(l=!0,et(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ue(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):et(o,i),Ue(t)&&r.set(t,o),o)}function za(t,e){return!t||!Ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,Yr(e))||De(t,e))}function ql(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:g,setupState:m,ctx:T,inheritAttrs:S}=t,P=pa(t);let O,L;try{if(n.shapeFlag&4){const q=s||r,H=q;O=fn(u.call(H,q,d,p,m,g,T)),L=l}else{const q=e;O=fn(q.length>1?q(p,{attrs:l,slots:o,emit:c}):q(p,null)),L=e.props?l:J0(l)}}catch(q){bi.length=0,ja(q,t,1),O=de(Lt)}let F=O;if(L&&S!==!1){const q=Object.keys(L),{shapeFlag:H}=F;q.length&&H&7&&(i&&q.some(Zc)&&(L=X0(L,i)),F=pr(F,L,!1,!0))}return n.dirs&&(F=pr(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&Hr(F,n.transition),O=F,pa(P),O}const J0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ma(n))&&((e||(e={}))[n]=t[n]);return e},X0=(t,e)=>{const n={};for(const r in t)(!Zc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Z0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Rd(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!za(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Rd(r,o,u):!0:!!o;return!1}function Rd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!za(n,i))return!0}return!1}function e1({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Qg=t=>t.__isSuspense;function t1(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):u0(t)}const Be=Symbol.for("v-fgt"),Ka=Symbol.for("v-txt"),Lt=Symbol.for("v-cmt"),Wl=Symbol.for("v-stc"),bi=[];let qt=null;function X(t=!1){bi.push(qt=t?null:[])}function n1(){bi.pop(),qt=bi[bi.length-1]||null}let Ui=1;function Pd(t,e=!1){Ui+=t,t<0&&qt&&e&&(qt.hasOnce=!0)}function Yg(t){return t.dynamicChildren=Ui>0?qt||ys:null,n1(),Ui>0&&qt&&qt.push(t),t}function oe(t,e,n,r,s,i){return Yg(N(t,e,n,r,s,i,!0))}function xt(t,e,n,r,s){return Yg(de(t,e,n,r,s,!0))}function $i(t){return t?t.__v_isVNode===!0:!1}function Fr(t,e){return t.type===e.type&&t.key===e.key}const Jg=({key:t})=>t??null,Yo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||Ye(t)||ye(t)?{i:st,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,r=0,s=null,i=t===Be?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Jg(e),ref:e&&Yo(e),scopeId:wg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:st};return l?(wu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),Ui>0&&!o&&qt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&qt.push(c),c}const de=r1;function r1(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===A0)&&(t=Lt),$i(t)){const l=pr(t,e,!0);return n&&wu(l,n),Ui>0&&!i&&qt&&(l.shapeFlag&6?qt[qt.indexOf(t)]=l:qt.push(l)),l.patchFlag=-2,l}if(p1(t)&&(t=t.__vccOpts),e){e=s1(e);let{class:l,style:c}=e;l&&!Je(l)&&(e.class=We(l)),Ue(c)&&(uu(c)&&!le(c)&&(c=et({},c)),e.style=$s(c))}const o=Je(t)?1:Qg(t)?128:Tg(t)?64:Ue(t)?4:ye(t)?2:0;return N(t,e,n,r,s,o,i,!0)}function s1(t){return t?uu(t)||Ug(t)?et({},t):t:null}function pr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?i1(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Jg(u),ref:e&&e.ref?n&&i?le(i)?i.concat(Yo(e)):[i,Yo(e)]:Yo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pr(t.ssContent),ssFallback:t.ssFallback&&pr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Hr(d,c.clone(d)),d}function Ga(t=" ",e=0){return de(Ka,null,t,e)}function ct(t="",e=!1){return e?(X(),xt(Lt,null,t)):de(Lt,null,t)}function fn(t){return t==null||typeof t=="boolean"?de(Lt):le(t)?de(Be,null,t.slice()):$i(t)?er(t):de(Ka,null,String(t))}function er(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pr(t)}function wu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),wu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ug(e)?e._ctx=st:s===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:st},n=32):(e=String(e),r&64?(n=16,e=[Ga(e)]):n=8);t.children=e,t.shapeFlag|=n}function i1(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=We([e.class,r.class]));else if(s==="style")e.style=$s([e.style,r.style]);else if(Ma(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function un(t,e,n,r=null){sn(t,e,7,[n,r])}const o1=xg();let a1=0;function l1(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||o1,i={uid:a1++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bg(r,s),emitsOptions:Gg(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Y0.bind(null,i),t.ce&&t.ce(i),i}let ut=null;const Xg=()=>ut||st;let _a,vc;{const t=$a(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};_a=e("__VUE_INSTANCE_SETTERS__",n=>ut=n),vc=e("__VUE_SSR_SETTERS__",n=>Bi=n)}const so=t=>{const e=ut;return _a(t),t.scope.on(),()=>{t.scope.off(),_a(e)}},kd=()=>{ut&&ut.scope.off(),_a(null)};function Zg(t){return t.vnode.shapeFlag&4}let Bi=!1;function c1(t,e=!1,n=!1){e&&vc(e);const{props:r,children:s}=t.vnode,i=Zg(t);L0(t,r,i,e),U0(t,s,n);const o=i?u1(t,e):void 0;return e&&vc(!1),o}function u1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,C0);const{setup:r}=n;if(r){Tr();const s=t.setupContext=r.length>1?d1(t):null,i=so(t),o=ro(r,t,0,[t.props,s]),l=jp(o);if(Ir(),i(),(l||t.sp)&&!Es(t)&&kg(t),l){if(o.then(kd,kd),e)return o.then(c=>{Vd(t,c,e)}).catch(c=>{ja(c,t,0)});t.asyncDep=o}else Vd(t,o,e)}else em(t,e)}function Vd(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=gg(e)),em(t,n)}let Od;function em(t,e,n){const r=t.type;if(!t.render){if(!e&&Od&&!r.render){const s=r.template||mu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,u=et(et({isCustomElement:i,delimiters:l},o),c);r.render=Od(s,u)}}t.render=r.render||gn}{const s=so(t);Tr();try{S0(t)}finally{Ir(),s()}}}const h1={get(t,e){return At(t,"get",""),t[e]}};function d1(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,h1),slots:t.slots,emit:t.emit,expose:e}}function Qa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(gg(hu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ii)return Ii[n](t)},has(e,n){return n in e||n in Ii}})):t.proxy}function f1(t,e=!0){return ye(t)?t.displayName||t.name:t.name||e&&t.__name}function p1(t){return ye(t)&&"__vccOpts"in t}const we=(t,e)=>i0(t,e,Bi);function Eu(t,e,n){const r=arguments.length;return r===2?Ue(e)&&!le(e)?$i(e)?de(t,null,[e]):de(t,e):de(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$i(n)&&(n=[n]),de(t,e,n))}const g1="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wc;const Dd=typeof window<"u"&&window.trustedTypes;if(Dd)try{wc=Dd.createPolicy("vue",{createHTML:t=>t})}catch{}const tm=wc?t=>wc.createHTML(t):t=>t,m1="http://www.w3.org/2000/svg",_1="http://www.w3.org/1998/Math/MathML",Rn=typeof document<"u"?document:null,Nd=Rn&&Rn.createElement("template"),y1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Rn.createElementNS(m1,t):e==="mathml"?Rn.createElementNS(_1,t):n?Rn.createElement(t,{is:n}):Rn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Nd.innerHTML=tm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Nd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Kn="transition",ui="animation",Cs=Symbol("_vtc"),nm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},rm=et({},Cg,nm),v1=t=>(t.displayName="Transition",t.props=rm,t),Ya=v1((t,{slots:e})=>Eu(f0,sm(t),e)),Lr=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ld=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function sm(t){const e={};for(const C in t)C in nm||(e[C]=t[C]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,T=w1(s),S=T&&T[0],P=T&&T[1],{onBeforeEnter:O,onEnter:L,onEnterCancelled:F,onLeave:q,onLeaveCancelled:H,onBeforeAppear:z=O,onAppear:b=L,onAppearCancelled:v=F}=e,y=(C,E,Ve,Xe)=>{C._enterCancelled=Xe,Yn(C,E?d:l),Yn(C,E?u:o),Ve&&Ve()},I=(C,E)=>{C._isLeaving=!1,Yn(C,p),Yn(C,m),Yn(C,g),E&&E()},R=C=>(E,Ve)=>{const Xe=C?b:L,Le=()=>y(E,C,Ve);Lr(Xe,[E,Le]),xd(()=>{Yn(E,C?c:i),hn(E,C?d:l),Ld(Xe)||Md(E,r,S,Le)})};return et(e,{onBeforeEnter(C){Lr(O,[C]),hn(C,i),hn(C,o)},onBeforeAppear(C){Lr(z,[C]),hn(C,c),hn(C,u)},onEnter:R(!1),onAppear:R(!0),onLeave(C,E){C._isLeaving=!0;const Ve=()=>I(C,E);hn(C,p),C._enterCancelled?(hn(C,g),Ec()):(Ec(),hn(C,g)),xd(()=>{C._isLeaving&&(Yn(C,p),hn(C,m),Ld(q)||Md(C,r,P,Ve))}),Lr(q,[C,Ve])},onEnterCancelled(C){y(C,!1,void 0,!0),Lr(F,[C])},onAppearCancelled(C){y(C,!0,void 0,!0),Lr(v,[C])},onLeaveCancelled(C){I(C),Lr(H,[C])}})}function w1(t){if(t==null)return null;if(Ue(t))return[Hl(t.enter),Hl(t.leave)];{const e=Hl(t);return[e,e]}}function Hl(t){return bv(t)}function hn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Cs]||(t[Cs]=new Set)).add(e)}function Yn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Cs];n&&(n.delete(e),n.size||(t[Cs]=void 0))}function xd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let E1=0;function Md(t,e,n,r){const s=t._endId=++E1,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=im(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,g),i()},g=m=>{m.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(u,g)}function im(t,e){const n=window.getComputedStyle(t),r=T=>(n[T]||"").split(", "),s=r(`${Kn}Delay`),i=r(`${Kn}Duration`),o=Fd(s,i),l=r(`${ui}Delay`),c=r(`${ui}Duration`),u=Fd(l,c);let d=null,p=0,g=0;e===Kn?o>0&&(d=Kn,p=o,g=i.length):e===ui?u>0&&(d=ui,p=u,g=c.length):(p=Math.max(o,u),d=p>0?o>u?Kn:ui:null,g=d?d===Kn?i.length:c.length:0);const m=d===Kn&&/\b(transform|all)(,|$)/.test(r(`${Kn}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:m}}function Fd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ud(n)+Ud(t[r])))}function Ud(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Ec(){return document.body.offsetHeight}function T1(t,e,n){const r=t[Cs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const $d=Symbol("_vod"),I1=Symbol("_vsh"),A1=Symbol(""),b1=/(^|;)\s*display\s*:/;function C1(t,e,n){const r=t.style,s=Je(n);let i=!1;if(n&&!s){if(e)if(Je(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Jo(r,l,"")}else for(const o in e)n[o]==null&&Jo(r,o,"");for(const o in n)o==="display"&&(i=!0),Jo(r,o,n[o])}else if(s){if(e!==n){const o=r[A1];o&&(n+=";"+o),r.cssText=n,i=b1.test(n)}}else e&&t.removeAttribute("style");$d in t&&(t[$d]=i?r.display:"",t[I1]&&(r.display="none"))}const Bd=/\s*!important$/;function Jo(t,e,n){if(le(n))n.forEach(r=>Jo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=S1(t,e);Bd.test(n)?t.setProperty(Yr(r),n.replace(Bd,""),"important"):t[r]=n}}const jd=["Webkit","Moz","ms"],zl={};function S1(t,e){const n=zl[e];if(n)return n;let r=Jt(e);if(r!=="filter"&&r in t)return zl[e]=r;r=Ua(r);for(let s=0;s<jd.length;s++){const i=jd[s]+r;if(i in t)return zl[e]=i}return e}const qd="http://www.w3.org/1999/xlink";function Wd(t,e,n,r,s,i=Vv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qd,e.slice(6,e.length)):t.setAttributeNS(qd,e,n):n==null||i&&!zp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":rn(n)?String(n):n)}function Hd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?tm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=zp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Vn(t,e,n,r){t.addEventListener(e,n,r)}function R1(t,e,n,r){t.removeEventListener(e,n,r)}const zd=Symbol("_vei");function P1(t,e,n,r,s=null){const i=t[zd]||(t[zd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=k1(e);if(r){const u=i[e]=D1(r,s);Vn(t,l,u,c)}else o&&(R1(t,l,o,c),i[e]=void 0)}}const Kd=/(?:Once|Passive|Capture)$/;function k1(t){let e;if(Kd.test(t)){e={};let r;for(;r=t.match(Kd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Yr(t.slice(2)),e]}let Kl=0;const V1=Promise.resolve(),O1=()=>Kl||(V1.then(()=>Kl=0),Kl=Date.now());function D1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;sn(N1(r,n.value),e,5,[r])};return n.value=t,n.attached=O1(),n}function N1(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Gd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,L1=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?T1(t,r,o):e==="style"?C1(t,n,r):Ma(e)?Zc(e)||P1(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):x1(t,e,r,o))?(Hd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Je(r))?Hd(t,Jt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Wd(t,e,r,o))};function x1(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gd(e)&&ye(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gd(e)&&Je(n)?!1:e in t}const om=new WeakMap,am=new WeakMap,ya=Symbol("_moveCb"),Qd=Symbol("_enterCb"),M1=t=>(delete t.props.mode,t),F1=M1({name:"TransitionGroup",props:et({},rm,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Xg(),r=bg();let s,i;return Og(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!j1(s[0].el,n.vnode.el,o))return;s.forEach(U1),s.forEach($1);const l=s.filter(B1);Ec(),l.forEach(c=>{const u=c.el,d=u.style;hn(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[ya]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",p),u[ya]=null,Yn(u,o))};u.addEventListener("transitionend",p)})}),()=>{const o=Se(t),l=sm(o);let c=o.tag||Be;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),Hr(d,Fi(d,l,r,n)),om.set(d,d.el.getBoundingClientRect()))}i=e.default?fu(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&Hr(d,Fi(d,l,r,n))}return de(c,null,i)}}}),va=F1;function U1(t){const e=t.el;e[ya]&&e[ya](),e[Qd]&&e[Qd]()}function $1(t){am.set(t,t.el.getBoundingClientRect())}function B1(t){const e=om.get(t),n=am.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function j1(t,e,n){const r=t.cloneNode(),s=t[Cs];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=im(r);return i.removeChild(r),o}const gr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Go(e,n):e};function q1(t){t.target.composing=!0}function Yd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Yt=Symbol("_assign"),mn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Yt]=gr(s);const i=r||s.props&&s.props.type==="number";Vn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ua(l)),t[Yt](l)}),n&&Vn(t,"change",()=>{t.value=t.value.trim()}),e||(Vn(t,"compositionstart",q1),Vn(t,"compositionend",Yd),Vn(t,"change",Yd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Yt]=gr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ua(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},W1={deep:!0,created(t,e,n){t[Yt]=gr(n),Vn(t,"change",()=>{const r=t._modelValue,s=Ss(t),i=t.checked,o=t[Yt];if(le(r)){const l=nu(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Us(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(cm(t,i))})},mounted:Jd,beforeUpdate(t,e,n){t[Yt]=gr(n),Jd(t,e,n)}};function Jd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(le(e))s=nu(e,r.props.value)>-1;else if(Us(e))s=e.has(r.props.value);else{if(e===n)return;s=qr(e,cm(t,!0))}t.checked!==s&&(t.checked=s)}const H1={created(t,{value:e},n){t.checked=qr(e,n.props.value),t[Yt]=gr(n),Vn(t,"change",()=>{t[Yt](Ss(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Yt]=gr(r),e!==n&&(t.checked=qr(e,r.props.value))}},lm={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Us(e);Vn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ua(Ss(o)):Ss(o));t[Yt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,qa(()=>{t._assigning=!1})}),t[Yt]=gr(r)},mounted(t,{value:e}){Xd(t,e)},beforeUpdate(t,e,n){t[Yt]=gr(n)},updated(t,{value:e}){t._assigning||Xd(t,e)}};function Xd(t,e){const n=t.multiple,r=le(e);if(!(n&&!r&&!Us(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Ss(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=nu(e,l)>-1}else o.selected=e.has(l);else if(qr(Ss(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ss(t){return"_value"in t?t._value:t.value}function cm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Zd={created(t,e,n){Uo(t,e,n,null,"created")},mounted(t,e,n){Uo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Uo(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Uo(t,e,n,r,"updated")}};function z1(t,e){switch(t){case"SELECT":return lm;case"TEXTAREA":return mn;default:switch(e){case"checkbox":return W1;case"radio":return H1;default:return mn}}}function Uo(t,e,n,r,s){const o=z1(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const K1=["ctrl","shift","alt","meta"],G1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>K1.some(n=>t[`${n}Key`]&&!e.includes(n))},ji=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=G1[e[o]];if(l&&l(s,e))return}return t(s,...i)})},Q1=et({patchProp:L1},y1);let ef;function Y1(){return ef||(ef=B0(Q1))}const J1=(...t)=>{const e=Y1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Z1(r);if(!s)return;const i=e._component;!ye(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,X1(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function X1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Z1(t){return Je(t)?document.querySelector(t):t}var ew=!1;/*!
 * pinia v2.2.6
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let um;const Ja=t=>um=t,hm=Symbol();function Tc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ci;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ci||(Ci={}));function tw(){const t=Yp(!0),e=t.run(()=>ge({}));let n=[],r=[];const s=hu({install(i){Ja(s),s._a=i,i.provide(hm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!ew?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const dm=()=>{};function tf(t,e,n,r=dm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ru()&&Jp(s),s}function cs(t,...e){t.slice().forEach(n=>{n(...e)})}const nw=t=>t(),nf=Symbol(),Gl=Symbol();function Ic(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Tc(s)&&Tc(r)&&t.hasOwnProperty(n)&&!Ye(r)&&!lr(r)?t[n]=Ic(s,r):t[n]=r}return t}const rw=Symbol();function sw(t){return!Tc(t)||!t.hasOwnProperty(rw)}const{assign:Jn}=Object;function iw(t){return!!(Ye(t)&&t.effect)}function ow(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const d=t0(n.state.value[t]);return Jn(d,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=hu(we(()=>{Ja(n);const m=n._s.get(t);return o[g].call(m,m)})),p),{}))}return c=fm(t,u,e,n,r,!0),c}function fm(t,e,n={},r,s,i){let o;const l=Jn({actions:{}},n),c={deep:!0};let u,d,p=[],g=[],m;const T=r.state.value[t];!i&&!T&&(r.state.value[t]={}),ge({});let S;function P(v){let y;u=d=!1,typeof v=="function"?(v(r.state.value[t]),y={type:Ci.patchFunction,storeId:t,events:m}):(Ic(r.state.value[t],v),y={type:Ci.patchObject,payload:v,storeId:t,events:m});const I=S=Symbol();qa().then(()=>{S===I&&(u=!0)}),d=!0,cs(p,y,r.state.value[t])}const O=i?function(){const{state:y}=n,I=y?y():{};this.$patch(R=>{Jn(R,I)})}:dm;function L(){o.stop(),p=[],g=[],r._s.delete(t)}const F=(v,y="")=>{if(nf in v)return v[Gl]=y,v;const I=function(){Ja(r);const R=Array.from(arguments),C=[],E=[];function Ve(pe){C.push(pe)}function Xe(pe){E.push(pe)}cs(g,{args:R,name:I[Gl],store:H,after:Ve,onError:Xe});let Le;try{Le=v.apply(this&&this.$id===t?this:H,R)}catch(pe){throw cs(E,pe),pe}return Le instanceof Promise?Le.then(pe=>(cs(C,pe),pe)).catch(pe=>(cs(E,pe),Promise.reject(pe))):(cs(C,Le),Le)};return I[nf]=!0,I[Gl]=y,I},q={_p:r,$id:t,$onAction:tf.bind(null,g),$patch:P,$reset:O,$subscribe(v,y={}){const I=tf(p,v,y.detached,()=>R()),R=o.run(()=>mt(()=>r.state.value[t],C=>{(y.flush==="sync"?d:u)&&v({storeId:t,type:Ci.direct,events:m},C)},Jn({},c,y)));return I},$dispose:L},H=no(q);r._s.set(t,H);const b=(r._a&&r._a.runWithContext||nw)(()=>r._e.run(()=>(o=Yp()).run(()=>e({action:F}))));for(const v in b){const y=b[v];if(Ye(y)&&!iw(y)||lr(y))i||(T&&sw(y)&&(Ye(y)?y.value=T[v]:Ic(y,T[v])),r.state.value[t][v]=y);else if(typeof y=="function"){const I=F(y,v);b[v]=I,l.actions[v]=y}}return Jn(H,b),Jn(Se(H),b),Object.defineProperty(H,"$state",{get:()=>r.state.value[t],set:v=>{P(y=>{Jn(y,v)})}}),r._p.forEach(v=>{Jn(H,o.run(()=>v({store:H,app:r._a,pinia:r,options:l})))}),T&&i&&n.hydrate&&n.hydrate(H.$state,T),u=!0,d=!0,H}/*! #__NO_SIDE_EFFECTS__ */function js(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,c){const u=N0();return l=l||(u?Ht(hm,null):null),l&&Ja(l),l=um,l._s.has(r)||(i?fm(r,e,s,l):ow(r,s,l)),l._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const hs=typeof document<"u";function pm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function aw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&pm(t.default)}const Oe=Object.assign;function Ql(t,e){const n={};for(const r in e){const s=e[r];n[r]=on(s)?s.map(t):t(s)}return n}const Si=()=>{},on=Array.isArray,gm=/#/g,lw=/&/g,cw=/\//g,uw=/=/g,hw=/\?/g,mm=/\+/g,dw=/%5B/g,fw=/%5D/g,_m=/%5E/g,pw=/%60/g,ym=/%7B/g,gw=/%7C/g,vm=/%7D/g,mw=/%20/g;function Tu(t){return encodeURI(""+t).replace(gw,"|").replace(dw,"[").replace(fw,"]")}function _w(t){return Tu(t).replace(ym,"{").replace(vm,"}").replace(_m,"^")}function Ac(t){return Tu(t).replace(mm,"%2B").replace(mw,"+").replace(gm,"%23").replace(lw,"%26").replace(pw,"`").replace(ym,"{").replace(vm,"}").replace(_m,"^")}function yw(t){return Ac(t).replace(uw,"%3D")}function vw(t){return Tu(t).replace(gm,"%23").replace(hw,"%3F")}function ww(t){return t==null?"":vw(t).replace(cw,"%2F")}function qi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ew=/\/$/,Tw=t=>t.replace(Ew,"");function Yl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Cw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:qi(o)}}function Iw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function rf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Aw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Rs(e.matched[r],n.matched[s])&&wm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Rs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!bw(t[n],e[n]))return!1;return!0}function bw(t,e){return on(t)?sf(t,e):on(e)?sf(e,t):t===e}function sf(t,e){return on(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Cw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Wi;(function(t){t.pop="pop",t.push="push"})(Wi||(Wi={}));var Ri;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ri||(Ri={}));function Sw(t){if(!t)if(hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Tw(t)}const Rw=/^[^#]+#/;function Pw(t,e){return t.replace(Rw,"#")+e}function kw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Xa=()=>({left:window.scrollX,top:window.scrollY});function Vw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=kw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function of(t,e){return(history.state?history.state.position-e:-1)+t}const bc=new Map;function Ow(t,e){bc.set(t,e)}function Dw(t){const e=bc.get(t);return bc.delete(t),e}let Nw=()=>location.protocol+"//"+location.host;function Em(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),rf(c,"")}return rf(n,t)+r+s}function Lw(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const m=Em(t,location),T=n.value,S=e.value;let P=0;if(g){if(n.value=m,e.value=g,o&&o===T){o=null;return}P=S?g.position-S.position:0}else r(m);s.forEach(O=>{O(n.value,T,{delta:P,type:Wi.pop,direction:P?P>0?Ri.forward:Ri.back:Ri.unknown})})};function c(){o=n.value}function u(g){s.push(g);const m=()=>{const T=s.indexOf(g);T>-1&&s.splice(T,1)};return i.push(m),m}function d(){const{history:g}=window;g.state&&g.replaceState(Oe({},g.state,{scroll:Xa()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function af(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Xa():null}}function xw(t){const{history:e,location:n}=window,r={value:Em(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Nw()+t+c;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(m){console.error(m),n[d?"replace":"assign"](g)}}function o(c,u){const d=Oe({},e.state,af(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=Oe({},s.value,e.state,{forward:c,scroll:Xa()});i(d.current,d,!0);const p=Oe({},af(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function Mw(t){t=Sw(t);const e=xw(t),n=Lw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:Pw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Fw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Mw(t)}function Uw(t){return typeof t=="string"||t&&typeof t=="object"}function Tm(t){return typeof t=="string"||typeof t=="symbol"}const Im=Symbol("");var lf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(lf||(lf={}));function Ps(t,e){return Oe(new Error,{type:t,[Im]:!0},e)}function Sn(t,e){return t instanceof Error&&Im in t&&(e==null||!!(t.type&e))}const cf="[^/]+?",$w={sensitive:!1,strict:!1,start:!0,end:!0},Bw=/[.+*?^${}()[\]/\\]/g;function jw(t,e){const n=Oe({},$w,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let m=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(Bw,"\\$&"),m+=40;else if(g.type===1){const{value:T,repeatable:S,optional:P,regexp:O}=g;i.push({name:T,repeatable:S,optional:P});const L=O||cf;if(L!==cf){m+=10;try{new RegExp(`(${L})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${T}" (${L}): `+q.message)}}let F=S?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;p||(F=P&&u.length<2?`(?:/${F})`:"/"+F),P&&(F+="?"),s+=F,m+=20,P&&(m+=-8),S&&(m+=-20),L===".*"&&(m+=-50)}d.push(m)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const m=d[g]||"",T=i[g-1];p[T.name]=m&&T.repeatable?m.split("/"):m}return p}function c(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const m of g)if(m.type===0)d+=m.value;else if(m.type===1){const{value:T,repeatable:S,optional:P}=m,O=T in u?u[T]:"";if(on(O)&&!S)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const L=on(O)?O.join("/"):O;if(!L)if(P)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${T}"`);d+=L}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function qw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Am(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=qw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(uf(r))return 1;if(uf(s))return-1}return s.length-r.length}function uf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ww={type:0,value:""},Hw=/[a-zA-Z0-9_]/;function zw(t){if(!t)return[[]];if(t==="/")return[[Ww]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:Hw.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function Kw(t,e,n){const r=jw(zw(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Gw(t,e){const n=[],r=new Map;e=pf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,m){const T=!m,S=df(p);S.aliasOf=m&&m.record;const P=pf(e,p),O=[S];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const H of q)O.push(df(Oe({},S,{components:m?m.record.components:S.components,path:H,aliasOf:m?m.record:S})))}let L,F;for(const q of O){const{path:H}=q;if(g&&H[0]!=="/"){const z=g.record.path,b=z[z.length-1]==="/"?"":"/";q.path=g.record.path+(H&&b+H)}if(L=Kw(q,g,P),m?m.alias.push(L):(F=F||L,F!==L&&F.alias.push(L),T&&p.name&&!ff(L)&&o(p.name)),bm(L)&&c(L),S.children){const z=S.children;for(let b=0;b<z.length;b++)i(z[b],L,m&&m.children[b])}m=m||L}return F?()=>{o(F)}:Si}function o(p){if(Tm(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=Jw(p,n);n.splice(g,0,p),p.record.name&&!ff(p)&&r.set(p.record.name,p)}function u(p,g){let m,T={},S,P;if("name"in p&&p.name){if(m=r.get(p.name),!m)throw Ps(1,{location:p});P=m.record.name,T=Oe(hf(g.params,m.keys.filter(F=>!F.optional).concat(m.parent?m.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),p.params&&hf(p.params,m.keys.map(F=>F.name))),S=m.stringify(T)}else if(p.path!=null)S=p.path,m=n.find(F=>F.re.test(S)),m&&(T=m.parse(S),P=m.record.name);else{if(m=g.name?r.get(g.name):n.find(F=>F.re.test(g.path)),!m)throw Ps(1,{location:p,currentLocation:g});P=m.record.name,T=Oe({},g.params,p.params),S=m.stringify(T)}const O=[];let L=m;for(;L;)O.unshift(L.record),L=L.parent;return{name:P,path:S,params:T,matched:O,meta:Yw(O)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function hf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function df(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Qw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Qw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ff(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Yw(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function pf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Jw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Am(t,e[i])<0?r=i:n=i+1}const s=Xw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Xw(t){let e=t;for(;e=e.parent;)if(bm(e)&&Am(t,e)===0)return e}function bm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Zw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(mm," "),o=i.indexOf("="),l=qi(o<0?i:i.slice(0,o)),c=o<0?null:qi(i.slice(o+1));if(l in e){let u=e[l];on(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function gf(t){let e="";for(let n in t){const r=t[n];if(n=yw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(on(r)?r.map(i=>i&&Ac(i)):[r&&Ac(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function eE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=on(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const tE=Symbol(""),mf=Symbol(""),Za=Symbol(""),Iu=Symbol(""),Cc=Symbol("");function hi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function tr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(Ps(4,{from:n,to:e})):g instanceof Error?c(g):Uw(g)?c(Ps(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function Jl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(pm(c)){const d=(c.__vccOpts||c)[e];d&&i.push(tr(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=aw(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const m=(p.__vccOpts||p)[e];return m&&tr(m,n,r,o,l,s)()}))}}return i}function _f(t){const e=Ht(Za),n=Ht(Iu),r=we(()=>{const c=Y(t.to);return e.resolve(c)}),s=we(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Rs.bind(null,d));if(g>-1)return g;const m=yf(c[u-2]);return u>1&&yf(d)===m&&p[p.length-1].path!==m?p.findIndex(Rs.bind(null,c[u-2])):g}),i=we(()=>s.value>-1&&oE(n.params,r.value.params)),o=we(()=>s.value>-1&&s.value===n.matched.length-1&&wm(n.params,r.value.params));function l(c={}){if(iE(c)){const u=e[Y(t.replace)?"replace":"push"](Y(t.to)).catch(Si);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:we(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function nE(t){return t.length===1?t[0]:t}const rE=He({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_f,setup(t,{slots:e}){const n=no(_f(t)),{options:r}=Ht(Za),s=we(()=>({[vf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[vf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&nE(e.default(n));return t.custom?i:Eu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),sE=rE;function iE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function oE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!on(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function yf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vf=(t,e,n)=>t??e??n,aE=He({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ht(Cc),s=we(()=>t.route||r.value),i=Ht(mf,0),o=we(()=>{let u=Y(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=we(()=>s.value.matched[o.value]);Ai(mf,we(()=>o.value+1)),Ai(tE,l),Ai(Cc,s);const c=ge();return mt(()=>[c.value,l.value,t.name],([u,d,p],[g,m,T])=>{d&&(d.instances[p]=u,m&&m!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!Rs(d,m)||!g)&&(d.enterCallbacks[p]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return wf(n.default,{Component:g,route:u});const m=p.props[d],T=m?m===!0?u.params:typeof m=="function"?m(u):m:null,P=Eu(g,Oe({},T,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return wf(n.default,{Component:P,route:u})||P}}});function wf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Cm=aE;function lE(t){const e=Gw(t.routes,t),n=t.parseQuery||Zw,r=t.stringifyQuery||gf,s=t.history,i=hi(),o=hi(),l=hi(),c=Xv(Gn);let u=Gn;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ql.bind(null,M=>""+M),p=Ql.bind(null,ww),g=Ql.bind(null,qi);function m(M,te){let Z,se;return Tm(M)?(Z=e.getRecordMatcher(M),se=te):se=M,e.addRoute(se,Z)}function T(M){const te=e.getRecordMatcher(M);te&&e.removeRoute(te)}function S(){return e.getRoutes().map(M=>M.record)}function P(M){return!!e.getRecordMatcher(M)}function O(M,te){if(te=Oe({},te||c.value),typeof M=="string"){const A=Yl(n,M,te.path),V=e.resolve({path:A.path},te),B=s.createHref(A.fullPath);return Oe(A,V,{params:g(V.params),hash:qi(A.hash),redirectedFrom:void 0,href:B})}let Z;if(M.path!=null)Z=Oe({},M,{path:Yl(n,M.path,te.path).path});else{const A=Oe({},M.params);for(const V in A)A[V]==null&&delete A[V];Z=Oe({},M,{params:p(A)}),te.params=p(te.params)}const se=e.resolve(Z,te),be=M.hash||"";se.params=d(g(se.params));const xe=Iw(r,Oe({},M,{hash:_w(be),path:se.path})),w=s.createHref(xe);return Oe({fullPath:xe,hash:be,query:r===gf?eE(M.query):M.query||{}},se,{redirectedFrom:void 0,href:w})}function L(M){return typeof M=="string"?Yl(n,M,c.value.path):Oe({},M)}function F(M,te){if(u!==M)return Ps(8,{from:te,to:M})}function q(M){return b(M)}function H(M){return q(Oe(L(M),{replace:!0}))}function z(M){const te=M.matched[M.matched.length-1];if(te&&te.redirect){const{redirect:Z}=te;let se=typeof Z=="function"?Z(M):Z;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=L(se):{path:se},se.params={}),Oe({query:M.query,hash:M.hash,params:se.path!=null?{}:M.params},se)}}function b(M,te){const Z=u=O(M),se=c.value,be=M.state,xe=M.force,w=M.replace===!0,A=z(Z);if(A)return b(Oe(L(A),{state:typeof A=="object"?Oe({},be,A.state):be,force:xe,replace:w}),te||Z);const V=Z;V.redirectedFrom=te;let B;return!xe&&Aw(r,se,Z)&&(B=Ps(16,{to:V,from:se}),zt(se,se,!0,!1)),(B?Promise.resolve(B):I(V,se)).catch(x=>Sn(x)?Sn(x,2)?x:Xt(x):Ee(x,V,se)).then(x=>{if(x){if(Sn(x,2))return b(Oe({replace:w},L(x.to),{state:typeof x.to=="object"?Oe({},be,x.to.state):be,force:xe}),te||V)}else x=C(V,se,!0,w,be);return R(V,se,x),x})}function v(M,te){const Z=F(M,te);return Z?Promise.reject(Z):Promise.resolve()}function y(M){const te=jn.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(M):M()}function I(M,te){let Z;const[se,be,xe]=cE(M,te);Z=Jl(se.reverse(),"beforeRouteLeave",M,te);for(const A of se)A.leaveGuards.forEach(V=>{Z.push(tr(V,M,te))});const w=v.bind(null,M,te);return Z.push(w),Mt(Z).then(()=>{Z=[];for(const A of i.list())Z.push(tr(A,M,te));return Z.push(w),Mt(Z)}).then(()=>{Z=Jl(be,"beforeRouteUpdate",M,te);for(const A of be)A.updateGuards.forEach(V=>{Z.push(tr(V,M,te))});return Z.push(w),Mt(Z)}).then(()=>{Z=[];for(const A of xe)if(A.beforeEnter)if(on(A.beforeEnter))for(const V of A.beforeEnter)Z.push(tr(V,M,te));else Z.push(tr(A.beforeEnter,M,te));return Z.push(w),Mt(Z)}).then(()=>(M.matched.forEach(A=>A.enterCallbacks={}),Z=Jl(xe,"beforeRouteEnter",M,te,y),Z.push(w),Mt(Z))).then(()=>{Z=[];for(const A of o.list())Z.push(tr(A,M,te));return Z.push(w),Mt(Z)}).catch(A=>Sn(A,8)?A:Promise.reject(A))}function R(M,te,Z){l.list().forEach(se=>y(()=>se(M,te,Z)))}function C(M,te,Z,se,be){const xe=F(M,te);if(xe)return xe;const w=te===Gn,A=hs?history.state:{};Z&&(se||w?s.replace(M.fullPath,Oe({scroll:w&&A&&A.scroll},be)):s.push(M.fullPath,be)),c.value=M,zt(M,te,Z,w),Xt()}let E;function Ve(){E||(E=s.listen((M,te,Z)=>{if(!cn.listening)return;const se=O(M),be=z(se);if(be){b(Oe(be,{replace:!0,force:!0}),se).catch(Si);return}u=se;const xe=c.value;hs&&Ow(of(xe.fullPath,Z.delta),Xa()),I(se,xe).catch(w=>Sn(w,12)?w:Sn(w,2)?(b(Oe(L(w.to),{force:!0}),se).then(A=>{Sn(A,20)&&!Z.delta&&Z.type===Wi.pop&&s.go(-1,!1)}).catch(Si),Promise.reject()):(Z.delta&&s.go(-Z.delta,!1),Ee(w,se,xe))).then(w=>{w=w||C(se,xe,!1),w&&(Z.delta&&!Sn(w,8)?s.go(-Z.delta,!1):Z.type===Wi.pop&&Sn(w,20)&&s.go(-1,!1)),R(se,xe,w)}).catch(Si)}))}let Xe=hi(),Le=hi(),pe;function Ee(M,te,Z){Xt(M);const se=Le.list();return se.length?se.forEach(be=>be(M,te,Z)):console.error(M),Promise.reject(M)}function Bt(){return pe&&c.value!==Gn?Promise.resolve():new Promise((M,te)=>{Xe.add([M,te])})}function Xt(M){return pe||(pe=!M,Ve(),Xe.list().forEach(([te,Z])=>M?Z(M):te()),Xe.reset()),M}function zt(M,te,Z,se){const{scrollBehavior:be}=t;if(!hs||!be)return Promise.resolve();const xe=!Z&&Dw(of(M.fullPath,0))||(se||!Z)&&history.state&&history.state.scroll||null;return qa().then(()=>be(M,te,xe)).then(w=>w&&Vw(w)).catch(w=>Ee(w,M,te))}const ze=M=>s.go(M);let Ke;const jn=new Set,cn={currentRoute:c,listening:!0,addRoute:m,removeRoute:T,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:S,resolve:O,options:t,push:q,replace:H,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Le.add,isReady:Bt,install(M){const te=this;M.component("RouterLink",sE),M.component("RouterView",Cm),M.config.globalProperties.$router=te,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>Y(c)}),hs&&!Ke&&c.value===Gn&&(Ke=!0,q(s.location).catch(be=>{}));const Z={};for(const be in Gn)Object.defineProperty(Z,be,{get:()=>c.value[be],enumerable:!0});M.provide(Za,te),M.provide(Iu,dg(Z)),M.provide(Cc,c);const se=M.unmount;jn.add(M),M.unmount=function(){jn.delete(M),jn.size<1&&(u=Gn,E&&E(),E=null,c.value=Gn,Ke=!1,pe=!1),se()}}};function Mt(M){return M.reduce((te,Z)=>te.then(()=>y(Z)),Promise.resolve())}return cn}function cE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Rs(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Rs(u,c))||s.push(c))}return[n,r,s]}function Au(){return Ht(Za)}function uE(t){return Ht(Iu)}var Ef={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},hE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Rm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,m=u&63;c||(m=64,o||(g=64)),r.push(n[d],n[p],n[g],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new dE;const g=i<<2|l>>4;if(r.push(g),u!==64){const m=l<<4&240|u>>2;if(r.push(m),p!==64){const T=u<<6&192|p;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fE=function(t){const e=Sm(t);return Rm.encodeByteArray(e,!0)},wa=function(t){return fE(t).replace(/\./g,"")},Pm=function(t){try{return Rm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=()=>pE().__FIREBASE_DEFAULTS__,mE=()=>{if(typeof process>"u"||typeof Ef>"u")return;const t=Ef.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_E=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pm(t[1]);return e&&JSON.parse(e)},el=()=>{try{return gE()||mE()||_E()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},km=t=>{var e,n;return(n=(e=el())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yE=t=>{const e=km(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Vm=()=>{var t;return(t=el())===null||t===void 0?void 0:t.config},Om=t=>{var e;return(e=el())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[wa(JSON.stringify(n)),wa(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function EE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function TE(){var t;const e=(t=el())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function AE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CE(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function SE(){return!TE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function RE(){try{return typeof indexedDB=="object"}catch{return!1}}function PE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kE,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,io.prototype.create)}}class io{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?VE(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Bn(s,l,r)}}function VE(t,e){return t.replace(OE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const OE=/\{\$([^}]+)}/g;function DE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ea(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Tf(i)&&Tf(o)){if(!Ea(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Tf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function pi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function NE(t,e){const n=new LE(t,e);return n.subscribe.bind(n)}class LE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Xl),s.error===void 0&&(s.error=Xl),s.complete===void 0&&(s.complete=Xl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){return t&&t._delegate?t._delegate:t}class zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UE(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FE(t){return t===Mr?void 0:t}function UE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ME(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const BE={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},jE=Te.INFO,qE={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},WE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=qE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bu{constructor(e){this.name=e,this._logLevel=jE,this._logHandler=WE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const HE=(t,e)=>e.some(n=>t instanceof n);let If,Af;function zE(){return If||(If=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KE(){return Af||(Af=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dm=new WeakMap,Sc=new WeakMap,Nm=new WeakMap,Zl=new WeakMap,Cu=new WeakMap;function GE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(cr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dm.set(n,t)}).catch(()=>{}),Cu.set(e,t),e}function QE(t){if(Sc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sc.set(t,e)}let Rc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YE(t){Rc=t(Rc)}function JE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ec(this),e,...n);return Nm.set(r,e.sort?e.sort():[e]),cr(r)}:KE().includes(t)?function(...e){return t.apply(ec(this),e),cr(Dm.get(this))}:function(...e){return cr(t.apply(ec(this),e))}}function XE(t){return typeof t=="function"?JE(t):(t instanceof IDBTransaction&&QE(t),HE(t,zE())?new Proxy(t,Rc):t)}function cr(t){if(t instanceof IDBRequest)return GE(t);if(Zl.has(t))return Zl.get(t);const e=XE(t);return e!==t&&(Zl.set(t,e),Cu.set(e,t)),e}const ec=t=>Cu.get(t);function ZE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=cr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(cr(o.result),c.oldVersion,c.newVersion,cr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const eT=["get","getKey","getAll","getAllKeys","count"],tT=["put","add","delete","clear"],tc=new Map;function bf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tc.get(e))return tc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=tT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||eT.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return tc.set(e,i),i}YE(t=>({...t,get:(e,n,r)=>bf(e,n)||t.get(e,n,r),has:(e,n)=>!!bf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pc="@firebase/app",Cf="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new bu("@firebase/app"),sT="@firebase/app-compat",iT="@firebase/analytics-compat",oT="@firebase/analytics",aT="@firebase/app-check-compat",lT="@firebase/app-check",cT="@firebase/auth",uT="@firebase/auth-compat",hT="@firebase/database",dT="@firebase/data-connect",fT="@firebase/database-compat",pT="@firebase/functions",gT="@firebase/functions-compat",mT="@firebase/installations",_T="@firebase/installations-compat",yT="@firebase/messaging",vT="@firebase/messaging-compat",wT="@firebase/performance",ET="@firebase/performance-compat",TT="@firebase/remote-config",IT="@firebase/remote-config-compat",AT="@firebase/storage",bT="@firebase/storage-compat",CT="@firebase/firestore",ST="@firebase/vertexai",RT="@firebase/firestore-compat",PT="firebase",kT="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="[DEFAULT]",VT={[Pc]:"fire-core",[sT]:"fire-core-compat",[oT]:"fire-analytics",[iT]:"fire-analytics-compat",[lT]:"fire-app-check",[aT]:"fire-app-check-compat",[cT]:"fire-auth",[uT]:"fire-auth-compat",[hT]:"fire-rtdb",[dT]:"fire-data-connect",[fT]:"fire-rtdb-compat",[pT]:"fire-fn",[gT]:"fire-fn-compat",[mT]:"fire-iid",[_T]:"fire-iid-compat",[yT]:"fire-fcm",[vT]:"fire-fcm-compat",[wT]:"fire-perf",[ET]:"fire-perf-compat",[TT]:"fire-rc",[IT]:"fire-rc-compat",[AT]:"fire-gcs",[bT]:"fire-gcs-compat",[CT]:"fire-fst",[RT]:"fire-fst-compat",[ST]:"fire-vertex","fire-js":"fire-js",[PT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Map,OT=new Map,Vc=new Map;function Sf(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ks(t){const e=t.name;if(Vc.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;Vc.set(e,t);for(const n of Ta.values())Sf(n,t);for(const n of OT.values())Sf(n,t);return!0}function Su(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new io("app","Firebase",DT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=kT;function Lm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ur.create("bad-app-name",{appName:String(s)});if(n||(n=Vm()),!n)throw ur.create("no-options");const i=Ta.get(s);if(i){if(Ea(n,i.options)&&Ea(r,i.config))return i;throw ur.create("duplicate-app",{appName:s})}const o=new $E(s);for(const c of Vc.values())o.addComponent(c);const l=new NT(n,r,o);return Ta.set(s,l),l}function xm(t=kc){const e=Ta.get(t);if(!e&&t===kc&&Vm())return Lm();if(!e)throw ur.create("no-app",{appName:t});return e}function hr(t,e,n){var r;let s=(r=VT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(l.join(" "));return}ks(new zr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="firebase-heartbeat-database",xT=1,Hi="firebase-heartbeat-store";let nc=null;function Mm(){return nc||(nc=ZE(LT,xT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),nc}async function MT(t){try{const n=(await Mm()).transaction(Hi),r=await n.objectStore(Hi).get(Fm(t));return await n.done,r}catch(e){if(e instanceof Bn)xn.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function Rf(t,e){try{const r=(await Mm()).transaction(Hi,"readwrite");await r.objectStore(Hi).put(e,Fm(t)),await r.done}catch(n){if(n instanceof Bn)xn.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function Fm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=1024,UT=30*24*60*60*1e3;class $T{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Pf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=UT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pf(),{heartbeatsToSend:r,unsentEntries:s}=BT(this._heartbeatsCache.heartbeats),i=wa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return xn.warn(n),""}}}function Pf(){return new Date().toISOString().substring(0,10)}function BT(t,e=FT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),kf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),kf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RE()?PE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await MT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function kf(t){return wa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t){ks(new zr("platform-logger",e=>new nT(e),"PRIVATE")),ks(new zr("heartbeat",e=>new $T(e),"PRIVATE")),hr(Pc,Cf,t),hr(Pc,Cf,"esm2017"),hr("fire-js","")}qT("");function Ru(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Um(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WT=Um,$m=new io("auth","Firebase",Um());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new bu("@firebase/auth");function HT(t,...e){Ia.logLevel<=Te.WARN&&Ia.warn(`Auth (${qs}): ${t}`,...e)}function Xo(t,...e){Ia.logLevel<=Te.ERROR&&Ia.error(`Auth (${qs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,...e){throw Pu(t,...e)}function _n(t,...e){return Pu(t,...e)}function Bm(t,e,n){const r=Object.assign(Object.assign({},WT()),{[e]:n});return new io("auth","Firebase",r).create(e,{appName:t.name})}function Ln(t){return Bm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $m.create(t,...e)}function fe(t,e,...n){if(!t)throw Pu(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xo(e),new Error(e)}function Mn(t,e){t||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zT(){return Vf()==="http:"||Vf()==="https:"}function Vf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zT()||AE()||"connection"in navigator)?navigator.onLine:!0}function GT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=EE()||bE()}get(){return KT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=new ao(3e4,6e4);function Ar(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function br(t,e,n,r,s={}){return qm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=oo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return IE()||(u.referrerPolicy="no-referrer"),jm.fetch()(Wm(t,t.config.apiHost,n,l),u)})}async function qm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},QT),e);try{const s=new XT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $o(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw $o(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw $o(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Bm(t,d,u);an(t,d)}}catch(s){if(s instanceof Bn)throw s;an(t,"network-request-failed",{message:String(s)})}}async function lo(t,e,n,r,s={}){const i=await br(t,e,n,r,s);return"mfaPendingCredential"in i&&an(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Wm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ku(t.config,s):`${t.config.apiScheme}://${s}`}function JT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),YT.get())})}}function $o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=_n(t,e,r);return s.customData._tokenResponse=n,s}function Of(t){return t!==void 0&&t.enterprise!==void 0}class ZT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return JT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eI(t,e){return br(t,"GET","/v2/recaptchaConfig",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(t,e){return br(t,"POST","/v1/accounts:delete",e)}async function Hm(t,e){return br(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nI(t,e=!1){const n=ht(t),r=await n.getIdToken(e),s=Vu(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Pi(rc(s.auth_time)),issuedAtTime:Pi(rc(s.iat)),expirationTime:Pi(rc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function rc(t){return Number(t)*1e3}function Vu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pm(n);return s?JSON.parse(s):(Xo("Failed to decode base64 JWT payload"),null)}catch(s){return Xo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Df(t){const e=Vu(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&rI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pi(this.lastLoginAt),this.creationTime=Pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await zi(t,Hm(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?zm(i.providerUserInfo):[],l=oI(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Dc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function iI(t){const e=ht(t);await Aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zm(t){return t.map(e=>{var{providerId:n}=e,r=Ru(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(t,e){const n=await qm(t,{},async()=>{const r=oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Wm(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",jm.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lI(t,e){return br(t,"POST","/v2/accounts:revokeToken",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Df(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=Df(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await aI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ts;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ts,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ru(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Dc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await zi(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nI(this,e)}reload(){return iI(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Aa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(Ln(this.auth));const e=await this.getIdToken();return await zi(this,tI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:F,emailVerified:q,isAnonymous:H,providerData:z,stsTokenManager:b}=n;fe(F&&b,e,"internal-error");const v=Ts.fromJSON(this.name,b);fe(typeof F=="string",e,"internal-error"),Qn(p,e.name),Qn(g,e.name),fe(typeof q=="boolean",e,"internal-error"),fe(typeof H=="boolean",e,"internal-error"),Qn(m,e.name),Qn(T,e.name),Qn(S,e.name),Qn(P,e.name),Qn(O,e.name),Qn(L,e.name);const y=new Dn({uid:F,auth:e,email:g,emailVerified:q,displayName:p,isAnonymous:H,photoURL:T,phoneNumber:m,tenantId:S,stsTokenManager:v,createdAt:O,lastLoginAt:L});return z&&Array.isArray(z)&&(y.providerData=z.map(I=>Object.assign({},I))),P&&(y._redirectEventId=P),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ts;s.updateFromServerResponse(n);const i=new Dn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Aa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?zm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ts;l.updateFromIdToken(r);const c=new Dn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Dc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=new Map;function Nn(t){Mn(t instanceof Function,"Expected a class definition");let e=Nf.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Km.type="NONE";const Lf=Km;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t,e,n){return`firebase:${t}:${e}:${n}`}class Is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Zo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Zo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Is(Nn(Lf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Nn(Lf);const o=Zo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Dn._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Is(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Is(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zm(e))return"Blackberry";if(e_(e))return"Webos";if(Qm(e))return"Safari";if((e.includes("chrome/")||Ym(e))&&!e.includes("edge/"))return"Chrome";if(Xm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gm(t=Rt()){return/firefox\//i.test(t)}function Qm(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ym(t=Rt()){return/crios\//i.test(t)}function Jm(t=Rt()){return/iemobile/i.test(t)}function Xm(t=Rt()){return/android/i.test(t)}function Zm(t=Rt()){return/blackberry/i.test(t)}function e_(t=Rt()){return/webos/i.test(t)}function Ou(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cI(t=Rt()){var e;return Ou(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uI(){return CE()&&document.documentMode===10}function t_(t=Rt()){return Ou(t)||Xm(t)||e_(t)||Zm(t)||/windows phone/i.test(t)||Jm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t,e=[]){let n;switch(t){case"Browser":n=xf(Rt());break;case"Worker":n=`${xf(Rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(t,e={}){return br(t,"GET","/v2/passwordPolicy",Ar(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=6;class pI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:fI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mf(this),this.idTokenSubscription=new Mf(this),this.beforeStateQueue=new hI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$m,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Is.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hm(this,{idToken:e}),r=await Dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Aa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(Ln(this));const n=e?ht(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dI(this),n=new pI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new io("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await Is.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=n_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&HT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xr(t){return ht(t)}class Mf{constructor(e){this.auth=e,this.observer=null,this.addObserver=NE(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mI(t){tl=t}function r_(t){return tl.loadJS(t)}function _I(){return tl.recaptchaEnterpriseScript}function yI(){return tl.gapiScript}function vI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class wI{constructor(){this.enterprise=new EI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class EI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const TI="recaptcha-enterprise",s_="NO_RECAPTCHA";class II{constructor(e){this.type=TI,this.auth=Xr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{eI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new ZT(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Of(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(s_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wI().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Of(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=_I();c.length!==0&&(c+=l),r_(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Ff(t,e,n,r=!1,s=!1){const i=new II(t);let o;if(s)o=s_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Nc(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ff(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ff(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t,e){const n=Su(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ea(i,e??{}))return s;an(s,"already-initialized")}return n.initialize({options:e})}function bI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CI(t,e,n){const r=Xr(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=i_(e),{host:o,port:l}=SI(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),RI()}function i_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SI(t){const e=i_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Uf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Uf(o)}}}function Uf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function PI(t,e){return br(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(t,e){return lo(t,"POST","/v1/accounts:signInWithPassword",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI(t,e){return lo(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}async function OI(t,e){return lo(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends Du{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ki(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ki(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nc(e,n,"signInWithPassword",kI);case"emailLink":return VI(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nc(e,r,"signUpPassword",PI);case"emailLink":return OI(e,{idToken:n,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(t,e){return lo(t,"POST","/v1/accounts:signInWithIdp",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="http://localhost";class Kr extends Du{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ru(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Kr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return As(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,As(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,As(e,n)}buildRequest(){const e={requestUri:DI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LI(t){const e=fi(pi(t)).link,n=e?fi(pi(e)).deep_link_id:null,r=fi(pi(t)).deep_link_id;return(r?fi(pi(r)).link:null)||r||n||e||t}class Nu{constructor(e){var n,r,s,i,o,l;const c=fi(pi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=NI((s=c.mode)!==null&&s!==void 0?s:null);fe(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=LI(e);try{return new Nu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.providerId=Ws.PROVIDER_ID}static credential(e,n){return Ki._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Nu.parseLink(n);return fe(r,"argument-error"),Ki._fromEmailAndCode(e,r.code,r.tenantId)}}Ws.PROVIDER_ID="password";Ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends o_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends co{constructor(){super("facebook.com")}static credential(e){return Kr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends co{constructor(){super("github.com")}static credential(e){return Kr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends co{constructor(){super("twitter.com")}static credential(e,n){return Kr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(t,e){return lo(t,"POST","/v1/accounts:signUp",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Dn._fromIdTokenResponse(e,r,s),o=$f(r);return new Gr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=$f(r);return new Gr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function $f(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends Bn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ba.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ba(e,n,r,s)}}function a_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ba._fromErrorAndOperation(t,i,e,r):i})}async function MI(t,e,n=!1){const r=await zi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(t,e,n=!1){const{auth:r}=t;if(pn(r.app))return Promise.reject(Ln(r));const s="reauthenticate";try{const i=await zi(t,a_(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=Vu(i.idToken);fe(o,r,"internal-error");const{sub:l}=o;return fe(t.uid===l,r,"user-mismatch"),Gr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&an(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(t,e,n=!1){if(pn(t.app))return Promise.reject(Ln(t));const r="signIn",s=await a_(t,r,e),i=await Gr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function UI(t,e){return l_(Xr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(t){const e=Xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $I(t,e,n){if(pn(t.app))return Promise.reject(Ln(t));const r=Xr(t),o=await Nc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xI).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&c_(t),c}),l=await Gr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function BI(t,e,n){return pn(t.app)?Promise.reject(Ln(t)):UI(ht(t),Ws.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&c_(t),r})}function jI(t,e,n,r){return ht(t).onIdTokenChanged(e,n,r)}function qI(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}function Lu(t,e,n,r){return ht(t).onAuthStateChanged(e,n,r)}function WI(t){return ht(t).signOut()}const Ca="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ca,"1"),this.storage.removeItem(Ca),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=1e3,zI=10;class h_ extends u_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=t_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},HI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}h_.type="LOCAL";const KI=h_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_ extends u_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}d_.type="SESSION";const f_=d_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new nl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await GI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=xu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return window}function YI(t){yn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function JI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ZI(){return p_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="firebaseLocalStorageDb",eA=1,Sa="firebaseLocalStorage",m_="fbase_key";class uo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rl(t,e){return t.transaction([Sa],e?"readwrite":"readonly").objectStore(Sa)}function tA(){const t=indexedDB.deleteDatabase(g_);return new uo(t).toPromise()}function Lc(){const t=indexedDB.open(g_,eA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sa,{keyPath:m_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sa)?e(r):(r.close(),await tA(),e(await Lc()))})})}async function Bf(t,e,n){const r=rl(t,!0).put({[m_]:e,value:n});return new uo(r).toPromise()}async function nA(t,e){const n=rl(t,!1).get(e),r=await new uo(n).toPromise();return r===void 0?null:r.value}function jf(t,e){const n=rl(t,!0).delete(e);return new uo(n).toPromise()}const rA=800,sA=3;class __{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return p_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nl._getInstance(ZI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JI(),!this.activeServiceWorker)return;this.sender=new QI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lc();return await Bf(e,Ca,"1"),await jf(e,Ca),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rl(s,!1).getAll();return new uo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}__.type="LOCAL";const iA=__;new ao(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t,e){return e?Nn(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu extends Du{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,n){return As(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aA(t){return l_(t.auth,new Mu(t),t.bypassAuthState)}function lA(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),FI(n,new Mu(t),t.bypassAuthState)}async function cA(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),MI(n,new Mu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aA;case"linkViaPopup":case"linkViaRedirect":return cA;case"reauthViaPopup":case"reauthViaRedirect":return lA;default:an(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=new ao(2e3,1e4);class ms extends y_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ms.currentPopupAction&&ms.currentPopupAction.cancel(),ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uA.get())};e()}}ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA="pendingRedirect",ea=new Map;class dA extends y_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ea.get(this.auth._key());if(!e){try{const r=await fA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ea.set(this.auth._key(),e)}return this.bypassAuthState||ea.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fA(t,e){const n=mA(e),r=gA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function pA(t,e){ea.set(t._key(),e)}function gA(t){return Nn(t._redirectPersistence)}function mA(t){return Zo(hA,t.config.apiKey,t.name)}async function _A(t,e,n=!1){if(pn(t.app))return Promise.reject(Ln(t));const r=Xr(t),s=oA(r,e),o=await new dA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=10*60*1e3;class vA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!v_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yA&&this.cachedEventUids.clear(),this.cachedEventUids.has(qf(e))}saveEventToCache(e){this.cachedEventUids.add(qf(e)),this.lastProcessedEventTime=Date.now()}}function qf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function v_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return v_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(t,e={}){return br(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IA=/^https?/;async function AA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EA(t);for(const n of e)try{if(bA(n))return}catch{}an(t,"unauthorized-domain")}function bA(t){const e=Oc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IA.test(n))return!1;if(TA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=new ao(3e4,6e4);function Wf(){const t=yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SA(t){return new Promise((e,n)=>{var r,s,i;function o(){Wf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wf(),n(_n(t,"network-request-failed"))},timeout:CA.get()})}if(!((s=(r=yn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=yn().gapi)===null||i===void 0)&&i.load)o();else{const l=vI("iframefcb");return yn()[l]=()=>{gapi.load?o():n(_n(t,"network-request-failed"))},r_(`${yI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ta=null,e})}let ta=null;function RA(t){return ta=ta||SA(t),ta}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=new ao(5e3,15e3),kA="__/auth/iframe",VA="emulator/auth/iframe",OA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NA(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ku(e,VA):`https://${t.config.authDomain}/${kA}`,r={apiKey:e.apiKey,appName:t.name,v:qs},s=DA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${oo(r).slice(1)}`}async function LA(t){const e=await RA(t),n=yn().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:NA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),l=yn().setTimeout(()=>{i(o)},PA.get());function c(){yn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MA=500,FA=600,UA="_blank",$A="http://localhost";class Hf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BA(t,e,n,r=MA,s=FA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},xA),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Rt().toLowerCase();n&&(l=Ym(u)?UA:n),Gm(u)&&(e=e||$A,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[m,T])=>`${g}${m}=${T},`,"");if(cI(u)&&l!=="_self")return jA(e||"",l),new Hf(null);const p=window.open(e||"",l,d);fe(p,t,"popup-blocked");try{p.focus()}catch{}return new Hf(p)}function jA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA="__/auth/handler",WA="emulator/auth/handler",HA=encodeURIComponent("fac");async function zf(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qs,eventId:s};if(e instanceof o_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",DE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof co){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${HA}=${encodeURIComponent(c)}`:"";return`${zA(t)}?${oo(l).slice(1)}${u}`}function zA({config:t}){return t.emulator?ku(t,WA):`https://${t.authDomain}/${qA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="webStorageSupport";class KA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=f_,this._completeRedirectFn=_A,this._overrideRedirectResult=pA}async _openPopup(e,n,r,s){var i;Mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await zf(e,n,r,Oc(),s);return BA(e,o,xu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await zf(e,n,r,Oc(),s);return YI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LA(e),r=new vA(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sc,{type:sc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[sc];o!==void 0&&n(!!o),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return t_()||Qm()||Ou()}}const GA=KA;var Kf="@firebase/auth",Gf="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JA(t){ks(new zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:n_(t)},u=new gI(r,s,i,c);return bI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ks(new zr("auth-internal",e=>{const n=Xr(e.getProvider("auth").getImmediate());return(r=>new QA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hr(Kf,Gf,YA(t)),hr(Kf,Gf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=5*60,ZA=Om("authIdTokenMaxAge")||XA;let Qf=null;const eb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZA)return;const s=n==null?void 0:n.token;Qf!==s&&(Qf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Vs(t=xm()){const e=Su(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AI(t,{popupRedirectResolver:GA,persistence:[iA,KI,f_]}),r=Om("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=eb(i.toString());qI(n,o,()=>o(n.currentUser)),jI(n,l=>o(l))}}const s=km("auth");return s&&CI(n,`http://${s}`),n}function tb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=_n("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",tb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JA("Browser");const nb="/Re.Words/images/logo.svg",w_=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},rb={},sb={class:"greeting"},ib={class:"container"},ob={class:"greeting__inner"};function ab(t,e){const n=gu("router-link");return X(),oe("section",sb,[N("div",ib,[N("div",ob,[e[1]||(e[1]=N("div",{class:"greeting__logo logo"},[N("img",{class:"logo__img",src:nb,alt:"logo"})],-1)),e[2]||(e[2]=N("h1",{class:"greeting__title"}," Note of words in your pocket ",-1)),de(n,{class:"greeting__btn btn btn--white",to:"/entrance"},{default:St(()=>e[0]||(e[0]=[Ga(" Start ")])),_:1})])])])}const lb=w_(rb,[["render",ab]]),sl=js("loader",()=>{const t=ge(!1);function e(){t.value=!0}function n(){t.value=!1}return{isLoading:t,showLoader:e,hideLoader:n}});function E_(){return Math.floor(Math.random()*1e6).toString()}const In=js("alert",()=>{const t=ge([]);function e(r,s){const i=E_(),o={id:i,isVisible:!0,message:r,class:s};t.value.push(o),setTimeout(()=>n(i),2500)}function n(r){const s=t.value.find(i=>i.id===r);s&&(s.isVisible=!1,setTimeout(()=>{t.value=t.value.filter(i=>i.id!==r)},300))}return{alerts:t,showAlert:e,hideAlert:n}}),cb={class:"entrance"},ub={class:"container"},hb={class:"entrance__inner"},db={class:"entrance__title"},fb={class:"entrance__form form",action:"#",method:"post"},pb={class:"form__box form-box"},gb={class:"form__box form-box"},mb=["type"],_b={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},yb={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},vb={key:0,class:"form__box form-box"},wb=["type"],Eb={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Tb={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ib={class:"form__buttons buttons"},Ab=He({__name:"EntranceView",setup(t){const e=sl(),n=In(),r=ge(!0),s=ge(!1),i=Au(),o=ge({email:{value:"",error:!1},password:{value:"",error:!1},passwordRepeat:{value:"",error:!1}}),l=we(()=>r.value?"Log In":"Registration"),c=we(()=>r.value?"Registration":"Log In"),u=we(()=>s.value?"text":"password");function d(){r.value=!r.value}function p(){s.value=!s.value}function g(){let P=!0;return o.value.email.value.includes("@")?o.value.email.error=!1:(o.value.email.error=!0,n.showAlert("Invalid email","alert--error"),P=!1),o.value.password.value.length<6?(o.value.password.error=!0,n.showAlert("Password must be at least 6 characters","alert--error"),P=!1):o.value.password.error=!1,!r.value&&o.value.password.value!==o.value.passwordRepeat.value?(o.value.passwordRepeat.error=!0,n.showAlert("Passwords do not match","alert--error"),P=!1):o.value.passwordRepeat.error=!1,P}const m=async()=>{e.showLoader();try{await $I(Vs(),o.value.email.value,o.value.password.value),i.push("/menu")}catch(P){P instanceof Error&&n.showAlert(`${P.message}`,"alert--error")}finally{e.hideLoader()}},T=async()=>{e.showLoader();try{await BI(Vs(),o.value.email.value,o.value.password.value),i.push("/menu")}catch(P){P instanceof Error&&n.showAlert(`${P.message}`,"alert--error")}finally{e.hideLoader()}},S=()=>{g()&&(r.value?T():m())};return(P,O)=>(X(),oe("div",cb,[N("div",ub,[N("div",hb,[N("h1",db,rt(l.value),1),N("form",fb,[N("div",pb,[tn(N("input",{class:We(["form-box__input filling filling--input",{"filling--error":o.value.email.error}]),type:"email",placeholder:"Email","onUpdate:modelValue":O[0]||(O[0]=L=>o.value.email.value=L)},null,2),[[mn,o.value.email.value]])]),N("div",gb,[tn(N("input",{class:We(["form-box__input filling filling--input",{"filling--error":o.value.password.error}]),type:u.value,placeholder:"Password","onUpdate:modelValue":O[1]||(O[1]=L=>o.value.password.value=L)},null,10,mb),[[Zd,o.value.password.value]]),N("div",{class:"form-box__show",onClick:p},[de(va,{name:"opacity"},{default:St(()=>[s.value?ct("",!0):(X(),oe("svg",_b,O[3]||(O[3]=[N("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.99328 10.2678C8.29095 10.2678 8.5857 10.2092 8.86071 10.0953C9.13573 9.98135 9.38561 9.81439 9.59609 9.6039C9.80657 9.39342 9.97354 9.14354 10.0875 8.86853C10.2014 8.59352 10.26 8.29876 10.26 8.00109C10.26 7.70342 10.2014 7.40867 10.0875 7.13366C9.97354 6.85865 9.80657 6.60877 9.59609 6.39828C9.38561 6.1878 9.13573 6.02083 8.86071 5.90692C8.5857 5.79301 8.29095 5.73437 7.99328 5.73438C7.39211 5.73438 6.81556 5.97319 6.39047 6.39828C5.96538 6.82337 5.72656 7.39992 5.72656 8.00109C5.72656 8.60226 5.96538 9.17881 6.39047 9.6039C6.81556 10.029 7.39211 10.2678 7.99328 10.2678ZM7.99328 8.96866C7.73667 8.96866 7.49056 8.86672 7.30911 8.68526C7.12765 8.50381 7.02571 8.25771 7.02571 8.00109C7.02571 7.74448 7.12765 7.49837 7.30911 7.31692C7.49056 7.13547 7.73667 7.03353 7.99328 7.03353C8.24989 7.03353 8.496 7.13547 8.67745 7.31692C8.8589 7.49837 8.96084 7.74448 8.96084 8.00109C8.96084 8.25771 8.8589 8.50381 8.67745 8.68526C8.496 8.86672 8.24989 8.96866 7.99328 8.96866Z",fill:"white"},null,-1),N("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 3.46484C4.88488 3.46484 2.76518 5.15452 1.64672 6.36624C1.23129 6.80812 1 7.39178 1 7.99828C1 8.60477 1.23129 9.18844 1.64672 9.63031C2.76453 10.842 4.88359 12.5317 8 12.5317C11.1158 12.5317 13.2348 10.842 14.3533 9.63031C14.7687 9.18844 15 8.60477 15 7.99828C15 7.39178 14.7687 6.80812 14.3533 6.36624C13.2355 5.15452 11.1164 3.46484 8 3.46484ZM2.59874 7.24508C3.58897 6.17195 5.38809 4.76011 8 4.76011C10.6119 4.76011 12.4117 6.17195 13.4019 7.24508C13.5963 7.44767 13.7048 7.71754 13.7048 7.99828C13.7048 8.27901 13.5963 8.54888 13.4019 8.75148C12.411 9.8246 10.6119 11.2364 8.00065 11.2364C5.38809 11.2364 3.58832 9.8246 2.59809 8.75148C2.40375 8.54888 2.29523 8.27901 2.29523 7.99828C2.29523 7.71754 2.40375 7.44767 2.59809 7.24508H2.59874Z",fill:"white"},null,-1)]))),s.value?(X(),oe("svg",yb,O[4]||(O[4]=[N("path",{d:"M3.14038 5.05078C2.59879 5.4391 2.09827 5.8817 1.64659 6.37169C1.23124 6.81348 1 7.39703 1 8.0034C1 8.60977 1.23124 9.19332 1.64659 9.63511C2.76547 10.8466 4.88475 12.5359 7.99924 12.5359C8.83841 12.5359 9.60505 12.4129 10.2992 12.2109L9.22303 11.1341C8.81904 11.2056 8.40952 11.2414 7.99924 11.2409C5.38786 11.2409 3.58845 9.82936 2.59842 8.75645C2.40411 8.55389 2.29562 8.28408 2.29562 8.0034C2.29562 7.72272 2.40411 7.4529 2.59842 7.25035C3.03825 6.77179 3.53215 6.34591 4.07019 5.98124L3.14038 5.05208V5.05078Z",fill:"white"},null,-1),N("path",{d:"M5.75193 7.66704C5.69899 8.0179 5.72918 8.37629 5.84006 8.71335C5.95095 9.05042 6.13943 9.35673 6.39034 9.60764C6.64124 9.85854 6.94756 10.047 7.28462 10.1579C7.62168 10.2688 7.98007 10.299 8.33093 10.246L5.75193 7.66704ZM10.2411 8.29447L7.7035 5.7569C8.04727 5.71256 8.39663 5.74766 8.7247 5.85951C9.05278 5.97135 9.35082 6.15696 9.59592 6.40205C9.84101 6.64715 10.0266 6.9452 10.1385 7.27327C10.2503 7.60135 10.2854 7.9507 10.2411 8.29447Z",fill:"white"},null,-1),N("path",{d:"M11.961 10.0062C12.4882 9.64582 12.9726 9.22655 13.4049 8.75652C13.5992 8.55397 13.7077 8.28415 13.7077 8.00347C13.7077 7.72279 13.5992 7.45297 13.4049 7.25042C12.4136 6.17751 10.6142 4.76595 8.00347 4.76595C7.58907 4.76595 7.19409 4.80156 6.82048 4.86567L5.74044 3.78563C6.47633 3.5753 7.23811 3.46937 8.00347 3.47094C11.1186 3.47094 13.2372 5.16028 14.3555 6.37176C14.7708 6.81355 15.0021 7.3971 15.0021 8.00347C15.0021 8.60984 14.7708 9.19339 14.3555 9.63518C13.9799 10.0425 13.4917 10.5028 12.8902 10.9354L11.961 10.0062ZM1.53361 2.44918C1.47177 2.38945 1.42244 2.318 1.38851 2.23901C1.35457 2.16001 1.33671 2.07504 1.33596 1.98907C1.33521 1.90309 1.3516 1.81783 1.38415 1.73825C1.41671 1.65868 1.46479 1.58638 1.52559 1.52559C1.58638 1.46479 1.65868 1.41671 1.73825 1.38415C1.81783 1.3516 1.90309 1.33521 1.98907 1.33596C2.07504 1.33671 2.16001 1.35457 2.23901 1.38851C2.318 1.42244 2.38945 1.47177 2.44918 1.53361L14.4785 13.5629C14.5965 13.6851 14.6617 13.8486 14.6602 14.0184C14.6588 14.1882 14.5907 14.3506 14.4706 14.4706C14.3506 14.5907 14.1882 14.6588 14.0184 14.6602C13.8486 14.6617 13.6851 14.5965 13.5629 14.4785L1.53361 2.44918Z",fill:"white"},null,-1)]))):ct("",!0)]),_:1})])]),r.value?ct("",!0):(X(),oe("div",vb,[tn(N("input",{class:We(["form-box__input filling filling--input",{"filling--error":o.value.passwordRepeat.error}]),type:u.value,placeholder:"Repeat password","onUpdate:modelValue":O[2]||(O[2]=L=>o.value.passwordRepeat.value=L)},null,10,wb),[[Zd,o.value.passwordRepeat.value]]),N("div",{class:"form-box__show",onClick:p},[de(va,{name:"opacity"},{default:St(()=>[s.value?ct("",!0):(X(),oe("svg",Eb,O[5]||(O[5]=[N("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.99328 10.2678C8.29095 10.2678 8.5857 10.2092 8.86071 10.0953C9.13573 9.98135 9.38561 9.81439 9.59609 9.6039C9.80657 9.39342 9.97354 9.14354 10.0875 8.86853C10.2014 8.59352 10.26 8.29876 10.26 8.00109C10.26 7.70342 10.2014 7.40867 10.0875 7.13366C9.97354 6.85865 9.80657 6.60877 9.59609 6.39828C9.38561 6.1878 9.13573 6.02083 8.86071 5.90692C8.5857 5.79301 8.29095 5.73437 7.99328 5.73438C7.39211 5.73438 6.81556 5.97319 6.39047 6.39828C5.96538 6.82337 5.72656 7.39992 5.72656 8.00109C5.72656 8.60226 5.96538 9.17881 6.39047 9.6039C6.81556 10.029 7.39211 10.2678 7.99328 10.2678ZM7.99328 8.96866C7.73667 8.96866 7.49056 8.86672 7.30911 8.68526C7.12765 8.50381 7.02571 8.25771 7.02571 8.00109C7.02571 7.74448 7.12765 7.49837 7.30911 7.31692C7.49056 7.13547 7.73667 7.03353 7.99328 7.03353C8.24989 7.03353 8.496 7.13547 8.67745 7.31692C8.8589 7.49837 8.96084 7.74448 8.96084 8.00109C8.96084 8.25771 8.8589 8.50381 8.67745 8.68526C8.496 8.86672 8.24989 8.96866 7.99328 8.96866Z",fill:"white"},null,-1),N("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 3.46484C4.88488 3.46484 2.76518 5.15452 1.64672 6.36624C1.23129 6.80812 1 7.39178 1 7.99828C1 8.60477 1.23129 9.18844 1.64672 9.63031C2.76453 10.842 4.88359 12.5317 8 12.5317C11.1158 12.5317 13.2348 10.842 14.3533 9.63031C14.7687 9.18844 15 8.60477 15 7.99828C15 7.39178 14.7687 6.80812 14.3533 6.36624C13.2355 5.15452 11.1164 3.46484 8 3.46484ZM2.59874 7.24508C3.58897 6.17195 5.38809 4.76011 8 4.76011C10.6119 4.76011 12.4117 6.17195 13.4019 7.24508C13.5963 7.44767 13.7048 7.71754 13.7048 7.99828C13.7048 8.27901 13.5963 8.54888 13.4019 8.75148C12.411 9.8246 10.6119 11.2364 8.00065 11.2364C5.38809 11.2364 3.58832 9.8246 2.59809 8.75148C2.40375 8.54888 2.29523 8.27901 2.29523 7.99828C2.29523 7.71754 2.40375 7.44767 2.59809 7.24508H2.59874Z",fill:"white"},null,-1)]))),s.value?(X(),oe("svg",Tb,O[6]||(O[6]=[N("path",{d:"M3.14038 5.05078C2.59879 5.4391 2.09827 5.8817 1.64659 6.37169C1.23124 6.81348 1 7.39703 1 8.0034C1 8.60977 1.23124 9.19332 1.64659 9.63511C2.76547 10.8466 4.88475 12.5359 7.99924 12.5359C8.83841 12.5359 9.60505 12.4129 10.2992 12.2109L9.22303 11.1341C8.81904 11.2056 8.40952 11.2414 7.99924 11.2409C5.38786 11.2409 3.58845 9.82936 2.59842 8.75645C2.40411 8.55389 2.29562 8.28408 2.29562 8.0034C2.29562 7.72272 2.40411 7.4529 2.59842 7.25035C3.03825 6.77179 3.53215 6.34591 4.07019 5.98124L3.14038 5.05208V5.05078Z",fill:"white"},null,-1),N("path",{d:"M5.75193 7.66704C5.69899 8.0179 5.72918 8.37629 5.84006 8.71335C5.95095 9.05042 6.13943 9.35673 6.39034 9.60764C6.64124 9.85854 6.94756 10.047 7.28462 10.1579C7.62168 10.2688 7.98007 10.299 8.33093 10.246L5.75193 7.66704ZM10.2411 8.29447L7.7035 5.7569C8.04727 5.71256 8.39663 5.74766 8.7247 5.85951C9.05278 5.97135 9.35082 6.15696 9.59592 6.40205C9.84101 6.64715 10.0266 6.9452 10.1385 7.27327C10.2503 7.60135 10.2854 7.9507 10.2411 8.29447Z",fill:"white"},null,-1),N("path",{d:"M11.961 10.0062C12.4882 9.64582 12.9726 9.22655 13.4049 8.75652C13.5992 8.55397 13.7077 8.28415 13.7077 8.00347C13.7077 7.72279 13.5992 7.45297 13.4049 7.25042C12.4136 6.17751 10.6142 4.76595 8.00347 4.76595C7.58907 4.76595 7.19409 4.80156 6.82048 4.86567L5.74044 3.78563C6.47633 3.5753 7.23811 3.46937 8.00347 3.47094C11.1186 3.47094 13.2372 5.16028 14.3555 6.37176C14.7708 6.81355 15.0021 7.3971 15.0021 8.00347C15.0021 8.60984 14.7708 9.19339 14.3555 9.63518C13.9799 10.0425 13.4917 10.5028 12.8902 10.9354L11.961 10.0062ZM1.53361 2.44918C1.47177 2.38945 1.42244 2.318 1.38851 2.23901C1.35457 2.16001 1.33671 2.07504 1.33596 1.98907C1.33521 1.90309 1.3516 1.81783 1.38415 1.73825C1.41671 1.65868 1.46479 1.58638 1.52559 1.52559C1.58638 1.46479 1.65868 1.41671 1.73825 1.38415C1.81783 1.3516 1.90309 1.33521 1.98907 1.33596C2.07504 1.33671 2.16001 1.35457 2.23901 1.38851C2.318 1.42244 2.38945 1.47177 2.44918 1.53361L14.4785 13.5629C14.5965 13.6851 14.6617 13.8486 14.6602 14.0184C14.6588 14.1882 14.5907 14.3506 14.4706 14.4706C14.3506 14.5907 14.1882 14.6588 14.0184 14.6602C13.8486 14.6617 13.6851 14.5965 13.5629 14.4785L1.53361 2.44918Z",fill:"white"},null,-1)]))):ct("",!0)]),_:1})])])),N("div",Ib,[N("div",{class:"buttons__btn btn btn--transparent",onClick:d},rt(c.value),1),N("button",{class:"buttons__btn btn btn--white",type:"button",onClick:ji(S,["prevent"])}," Submit ")])])])])]))}}),bb=He({__name:"Account",setup(t){const e=Au(),n=async()=>{await WI(Vs()),e.push("/entrance")};return(r,s)=>(X(),oe("div",{class:"head__account account filling filling--round",onClick:n},s[0]||(s[0]=[N("svg",{width:"15",height:"22",viewBox:"0 0 15 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[N("path",{d:"M11.1169 11.9102H6.74548C6.43245 11.8982 6.13613 11.7608 5.91879 11.5271C5.70145 11.2934 5.58002 10.9815 5.58002 10.6569C5.58002 10.3323 5.70145 10.0204 5.91879 9.78669C6.13613 9.55297 6.43245 9.41564 6.74548 9.40357H11.1169L9.69714 7.76254C9.48525 7.51596 9.37545 7.19293 9.39142 6.86319C9.4074 6.53345 9.54787 6.22344 9.78253 6.00008C9.89794 5.89012 10.0333 5.80504 10.1807 5.74981C10.3282 5.69458 10.4848 5.67029 10.6414 5.67836C10.798 5.68644 10.9514 5.72671 11.0929 5.79683C11.2343 5.86695 11.3608 5.96553 11.4651 6.08681L14.683 9.80776C14.8852 10.038 14.9981 10.3376 15 10.6488C15.0018 10.9601 14.8925 11.2611 14.693 11.4939L11.4651 15.2252C11.3611 15.3469 11.2347 15.4458 11.0933 15.5162C10.9519 15.5866 10.7984 15.6271 10.6417 15.6353C10.4851 15.6436 10.3284 15.6194 10.1809 15.5641C10.0334 15.5089 9.89794 15.4238 9.78253 15.3137C9.54787 15.0904 9.4074 14.7803 9.39142 14.4506C9.37545 14.1209 9.48525 13.7978 9.69714 13.5513L11.1169 11.9102ZM7.18915 18.8334C7.34492 18.8657 7.49304 18.9294 7.62505 19.0209C7.75706 19.1125 7.87037 19.2301 7.95852 19.367C8.04667 19.5039 8.10793 19.6575 8.1388 19.8189C8.16967 19.9804 8.16955 20.1465 8.13843 20.3079C8.10732 20.4693 8.04584 20.6228 7.95748 20.7596C7.86913 20.8964 7.75564 21.0138 7.62349 21.1051C7.49134 21.1964 7.34313 21.2599 7.18731 21.2919C7.03149 21.3239 6.87111 21.3238 6.71534 21.2915L6.15112 21.1736C2.14971 20.3513 0 19.8847 0 13.9121V7.04784C0 1.32678 2.30709 0.879225 6.12768 0.14024L6.72538 0.0222801C7.03998 -0.0400597 7.3656 0.0296414 7.63059 0.21605C7.89559 0.402459 8.07827 0.690305 8.13843 1.01627C8.1986 1.34223 8.13133 1.6796 7.95142 1.95417C7.77151 2.22875 7.4937 2.41802 7.1791 2.48036L6.57135 2.60179C3.98299 3.10312 2.41926 3.40496 2.41926 7.05131V13.9121C2.41926 17.8342 3.88756 18.1552 6.62158 18.7172L7.18915 18.8334Z",fill:"white"})],-1)])))}}),Cb={class:"head"},Sb={class:"head__inner"},Rb={class:"head__title"},Pb={key:0,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},T_=He({__name:"Head",props:{title:{},isBack:{type:Boolean}},setup(t){const e=t;return(n,r)=>{const s=gu("router-link");return X(),oe("div",Cb,[N("div",Sb,[de(s,{class:"head__link",to:"/menu"},{default:St(()=>[N("h1",Rb,[e.isBack?(X(),oe("svg",Pb,r[0]||(r[0]=[N("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.7511 10.0008C18.7511 9.83503 18.6853 9.67606 18.5681 9.55885C18.4508 9.44164 18.2919 9.37579 18.1261 9.37579H3.38487L7.31862 5.44329C7.37673 5.38518 7.42282 5.31619 7.45427 5.24027C7.48572 5.16434 7.50191 5.08297 7.50191 5.00079C7.50191 4.91861 7.48572 4.83723 7.45427 4.76131C7.42282 4.68539 7.37673 4.6164 7.31862 4.55829C7.26051 4.50018 7.19152 4.45408 7.1156 4.42264C7.03967 4.39119 6.9583 4.375 6.87612 4.375C6.79394 4.375 6.71256 4.39119 6.63664 4.42264C6.56071 4.45408 6.49173 4.50018 6.43362 4.55829L1.43362 9.55829C1.37541 9.61635 1.32923 9.68532 1.29773 9.76125C1.26622 9.83718 1.25 9.91858 1.25 10.0008C1.25 10.083 1.26622 10.1644 1.29773 10.2403C1.32923 10.3163 1.37541 10.3852 1.43362 10.4433L6.43362 15.4433C6.49173 15.5014 6.56071 15.5475 6.63664 15.5789C6.71256 15.6104 6.79394 15.6266 6.87612 15.6266C6.9583 15.6266 7.03967 15.6104 7.1156 15.5789C7.19152 15.5475 7.26051 15.5014 7.31862 15.4433C7.37673 15.3852 7.42282 15.3162 7.45427 15.2403C7.48572 15.1643 7.50191 15.083 7.50191 15.0008C7.50191 14.9186 7.48572 14.8372 7.45427 14.7613C7.42282 14.6854 7.37673 14.6164 7.31862 14.5583L3.38487 10.6258H18.1261C18.2919 10.6258 18.4508 10.5599 18.5681 10.4427C18.6853 10.3255 18.7511 10.1666 18.7511 10.0008Z",fill:"white"},null,-1)]))):ct("",!0),N("span",null,rt(e.title),1)])]),_:1}),de(bb)])])}}});var Yf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jr,I_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function y(){}y.prototype=v.prototype,b.D=v.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(I,R,C){for(var E=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)E[Ve-2]=arguments[Ve];return v.prototype[R].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,y){y||(y=0);var I=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)I[R]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(R=0;16>R;++R)I[R]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=b.g[0],y=b.g[1],R=b.g[2];var C=b.g[3],E=v+(C^y&(R^C))+I[0]+3614090360&4294967295;v=y+(E<<7&4294967295|E>>>25),E=C+(R^v&(y^R))+I[1]+3905402710&4294967295,C=v+(E<<12&4294967295|E>>>20),E=R+(y^C&(v^y))+I[2]+606105819&4294967295,R=C+(E<<17&4294967295|E>>>15),E=y+(v^R&(C^v))+I[3]+3250441966&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(C^y&(R^C))+I[4]+4118548399&4294967295,v=y+(E<<7&4294967295|E>>>25),E=C+(R^v&(y^R))+I[5]+1200080426&4294967295,C=v+(E<<12&4294967295|E>>>20),E=R+(y^C&(v^y))+I[6]+2821735955&4294967295,R=C+(E<<17&4294967295|E>>>15),E=y+(v^R&(C^v))+I[7]+4249261313&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(C^y&(R^C))+I[8]+1770035416&4294967295,v=y+(E<<7&4294967295|E>>>25),E=C+(R^v&(y^R))+I[9]+2336552879&4294967295,C=v+(E<<12&4294967295|E>>>20),E=R+(y^C&(v^y))+I[10]+4294925233&4294967295,R=C+(E<<17&4294967295|E>>>15),E=y+(v^R&(C^v))+I[11]+2304563134&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(C^y&(R^C))+I[12]+1804603682&4294967295,v=y+(E<<7&4294967295|E>>>25),E=C+(R^v&(y^R))+I[13]+4254626195&4294967295,C=v+(E<<12&4294967295|E>>>20),E=R+(y^C&(v^y))+I[14]+2792965006&4294967295,R=C+(E<<17&4294967295|E>>>15),E=y+(v^R&(C^v))+I[15]+1236535329&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(R^C&(y^R))+I[1]+4129170786&4294967295,v=y+(E<<5&4294967295|E>>>27),E=C+(y^R&(v^y))+I[6]+3225465664&4294967295,C=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(C^v))+I[11]+643717713&4294967295,R=C+(E<<14&4294967295|E>>>18),E=y+(C^v&(R^C))+I[0]+3921069994&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^C&(y^R))+I[5]+3593408605&4294967295,v=y+(E<<5&4294967295|E>>>27),E=C+(y^R&(v^y))+I[10]+38016083&4294967295,C=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(C^v))+I[15]+3634488961&4294967295,R=C+(E<<14&4294967295|E>>>18),E=y+(C^v&(R^C))+I[4]+3889429448&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^C&(y^R))+I[9]+568446438&4294967295,v=y+(E<<5&4294967295|E>>>27),E=C+(y^R&(v^y))+I[14]+3275163606&4294967295,C=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(C^v))+I[3]+4107603335&4294967295,R=C+(E<<14&4294967295|E>>>18),E=y+(C^v&(R^C))+I[8]+1163531501&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^C&(y^R))+I[13]+2850285829&4294967295,v=y+(E<<5&4294967295|E>>>27),E=C+(y^R&(v^y))+I[2]+4243563512&4294967295,C=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(C^v))+I[7]+1735328473&4294967295,R=C+(E<<14&4294967295|E>>>18),E=y+(C^v&(R^C))+I[12]+2368359562&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(y^R^C)+I[5]+4294588738&4294967295,v=y+(E<<4&4294967295|E>>>28),E=C+(v^y^R)+I[8]+2272392833&4294967295,C=v+(E<<11&4294967295|E>>>21),E=R+(C^v^y)+I[11]+1839030562&4294967295,R=C+(E<<16&4294967295|E>>>16),E=y+(R^C^v)+I[14]+4259657740&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^C)+I[1]+2763975236&4294967295,v=y+(E<<4&4294967295|E>>>28),E=C+(v^y^R)+I[4]+1272893353&4294967295,C=v+(E<<11&4294967295|E>>>21),E=R+(C^v^y)+I[7]+4139469664&4294967295,R=C+(E<<16&4294967295|E>>>16),E=y+(R^C^v)+I[10]+3200236656&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^C)+I[13]+681279174&4294967295,v=y+(E<<4&4294967295|E>>>28),E=C+(v^y^R)+I[0]+3936430074&4294967295,C=v+(E<<11&4294967295|E>>>21),E=R+(C^v^y)+I[3]+3572445317&4294967295,R=C+(E<<16&4294967295|E>>>16),E=y+(R^C^v)+I[6]+76029189&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^C)+I[9]+3654602809&4294967295,v=y+(E<<4&4294967295|E>>>28),E=C+(v^y^R)+I[12]+3873151461&4294967295,C=v+(E<<11&4294967295|E>>>21),E=R+(C^v^y)+I[15]+530742520&4294967295,R=C+(E<<16&4294967295|E>>>16),E=y+(R^C^v)+I[2]+3299628645&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(R^(y|~C))+I[0]+4096336452&4294967295,v=y+(E<<6&4294967295|E>>>26),E=C+(y^(v|~R))+I[7]+1126891415&4294967295,C=v+(E<<10&4294967295|E>>>22),E=R+(v^(C|~y))+I[14]+2878612391&4294967295,R=C+(E<<15&4294967295|E>>>17),E=y+(C^(R|~v))+I[5]+4237533241&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~C))+I[12]+1700485571&4294967295,v=y+(E<<6&4294967295|E>>>26),E=C+(y^(v|~R))+I[3]+2399980690&4294967295,C=v+(E<<10&4294967295|E>>>22),E=R+(v^(C|~y))+I[10]+4293915773&4294967295,R=C+(E<<15&4294967295|E>>>17),E=y+(C^(R|~v))+I[1]+2240044497&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~C))+I[8]+1873313359&4294967295,v=y+(E<<6&4294967295|E>>>26),E=C+(y^(v|~R))+I[15]+4264355552&4294967295,C=v+(E<<10&4294967295|E>>>22),E=R+(v^(C|~y))+I[6]+2734768916&4294967295,R=C+(E<<15&4294967295|E>>>17),E=y+(C^(R|~v))+I[13]+1309151649&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~C))+I[4]+4149444226&4294967295,v=y+(E<<6&4294967295|E>>>26),E=C+(y^(v|~R))+I[11]+3174756917&4294967295,C=v+(E<<10&4294967295|E>>>22),E=R+(v^(C|~y))+I[2]+718787259&4294967295,R=C+(E<<15&4294967295|E>>>17),E=y+(C^(R|~v))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+C&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var y=v-this.blockSize,I=this.B,R=this.h,C=0;C<v;){if(R==0)for(;C<=y;)s(this,b,C),C+=this.blockSize;if(typeof b=="string"){for(;C<v;)if(I[R++]=b.charCodeAt(C++),R==this.blockSize){s(this,I),R=0;break}}else for(;C<v;)if(I[R++]=b[C++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var y=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=y&255,y/=256;for(this.u(b),b=Array(16),v=y=0;4>v;++v)for(var I=0;32>I;I+=8)b[y++]=this.g[v]>>>I&255;return b};function i(b,v){var y=l;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=v(b)}function o(b,v){this.h=v;for(var y=[],I=!0,R=b.length-1;0<=R;R--){var C=b[R]|0;I&&C==v||(y[R]=C,I=!1)}this.g=y}var l={};function c(b){return-128<=b&&128>b?i(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return P(u(-b));for(var v=[],y=1,I=0;b>=y;I++)v[I]=b/y|0,y*=4294967296;return new o(v,0)}function d(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return P(d(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),I=p,R=0;R<b.length;R+=8){var C=Math.min(8,b.length-R),E=parseInt(b.substring(R,R+C),v);8>C?(C=u(Math.pow(v,C)),I=I.j(C).add(u(E))):(I=I.j(y),I=I.add(u(E)))}return I}var p=c(0),g=c(1),m=c(16777216);t=o.prototype,t.m=function(){if(S(this))return-P(this).m();for(var b=0,v=1,y=0;y<this.g.length;y++){var I=this.i(y);b+=(0<=I?I:4294967296+I)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(T(this))return"0";if(S(this))return"-"+P(this).toString(b);for(var v=u(Math.pow(b,6)),y=this,I="";;){var R=q(y,v).g;y=O(y,R.j(v));var C=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=R,T(y))return C+I;for(;6>C.length;)C="0"+C;I=C+I}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function T(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function S(b){return b.h==-1}t.l=function(b){return b=O(this,b),S(b)?-1:T(b)?0:1};function P(b){for(var v=b.g.length,y=[],I=0;I<v;I++)y[I]=~b.g[I];return new o(y,~b.h).add(g)}t.abs=function(){return S(this)?P(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],I=0,R=0;R<=v;R++){var C=I+(this.i(R)&65535)+(b.i(R)&65535),E=(C>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);I=E>>>16,C&=65535,E&=65535,y[R]=E<<16|C}return new o(y,y[y.length-1]&-2147483648?-1:0)};function O(b,v){return b.add(P(v))}t.j=function(b){if(T(this)||T(b))return p;if(S(this))return S(b)?P(this).j(P(b)):P(P(this).j(b));if(S(b))return P(this.j(P(b)));if(0>this.l(m)&&0>b.l(m))return u(this.m()*b.m());for(var v=this.g.length+b.g.length,y=[],I=0;I<2*v;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<b.g.length;R++){var C=this.i(I)>>>16,E=this.i(I)&65535,Ve=b.i(R)>>>16,Xe=b.i(R)&65535;y[2*I+2*R]+=E*Xe,L(y,2*I+2*R),y[2*I+2*R+1]+=C*Xe,L(y,2*I+2*R+1),y[2*I+2*R+1]+=E*Ve,L(y,2*I+2*R+1),y[2*I+2*R+2]+=C*Ve,L(y,2*I+2*R+2)}for(I=0;I<v;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=v;I<2*v;I++)y[I]=0;return new o(y,0)};function L(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function F(b,v){this.g=b,this.h=v}function q(b,v){if(T(v))throw Error("division by zero");if(T(b))return new F(p,p);if(S(b))return v=q(P(b),v),new F(P(v.g),P(v.h));if(S(v))return v=q(b,P(v)),new F(P(v.g),v.h);if(30<b.g.length){if(S(b)||S(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,I=v;0>=I.l(b);)y=H(y),I=H(I);var R=z(y,1),C=z(I,1);for(I=z(I,2),y=z(y,2);!T(I);){var E=C.add(I);0>=E.l(b)&&(R=R.add(y),C=E),I=z(I,1),y=z(y,1)}return v=O(b,R.j(v)),new F(R,v)}for(R=p;0<=b.l(v);){for(y=Math.max(1,Math.floor(b.m()/v.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),C=u(y),E=C.j(v);S(E)||0<E.l(b);)y-=I,C=u(y),E=C.j(v);T(C)&&(C=g),R=R.add(C),b=O(b,E)}return new F(R,b)}t.A=function(b){return q(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)&b.i(I);return new o(y,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)|b.i(I);return new o(y,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)^b.i(I);return new o(y,this.h^b.h)};function H(b){for(var v=b.g.length+1,y=[],I=0;I<v;I++)y[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(y,b.h)}function z(b,v){var y=v>>5;v%=32;for(var I=b.g.length-y,R=[],C=0;C<I;C++)R[C]=0<v?b.i(C+y)>>>v|b.i(C+y+1)<<32-v:b.i(C+y);return new o(R,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,I_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,jr=o}).apply(typeof Yf<"u"?Yf:typeof self<"u"?self:typeof window<"u"?window:{});var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var A_,gi,b_,na,xc,C_,S_,R_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bo=="object"&&Bo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var k=a[_];if(!(k in f))break e;f=f[k]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,_=!1,k={next:function(){if(!_&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function m(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function T(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,k,D){for(var Q=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)Q[Me-2]=arguments[Me];return h.prototype[k].apply(_,Q)}}function S(a){const h=a.length;if(0<h){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function P(a,h){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(c(_)){const k=a.length||0,D=_.length||0;a.length=k+D;for(let Q=0;Q<D;Q++)a[k+Q]=_[Q]}else a.push(_)}}class O{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function L(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var H=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function z(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function b(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function v(a){const h={};for(const f in a)h[f]=a[f];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(f in _)a[f]=_[f];for(let D=0;D<y.length;D++)f=y[D],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function R(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function E(){var a=Bt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ve{constructor(){this.h=this.g=null}add(h,f){const _=Xe.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var Xe=new O(()=>new Le,a=>a.reset());class Le{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,Ee=!1,Bt=new Ve,Xt=()=>{const a=l.Promise.resolve(void 0);pe=()=>{a.then(zt)}};var zt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(f){C(f)}var h=Xe;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function ze(){this.s=this.s,this.C=this.C}ze.prototype.s=!1,ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ke(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var jn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function cn(a,h){if(Ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(H){e:{try{q(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Mt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&cn.aa.h.call(this)}}T(cn,Ke);var Mt={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),te=0;function Z(a,h,f,_,k){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=k,this.key=++te,this.da=this.fa=!1}function se(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function be(a){this.src=a,this.g={},this.h=0}be.prototype.add=function(a,h,f,_,k){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var Q=w(a,h,_,k);return-1<Q?(h=a[Q],f||(h.fa=!1)):(h=new Z(h,this.src,D,!!_,k),h.fa=f,a.push(h)),h};function xe(a,h){var f=h.type;if(f in a.g){var _=a.g[f],k=Array.prototype.indexOf.call(_,h,void 0),D;(D=0<=k)&&Array.prototype.splice.call(_,k,1),D&&(se(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function w(a,h,f,_){for(var k=0;k<a.length;++k){var D=a[k];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==_)return k}return-1}var A="closure_lm_"+(1e6*Math.random()|0),V={};function B(a,h,f,_,k){if(Array.isArray(h)){for(var D=0;D<h.length;D++)B(a,h[D],f,_,k);return null}return f=ae(f),a&&a[M]?a.K(h,f,u(_)?!!_.capture:!!_,k):x(a,h,f,!1,_,k)}function x(a,h,f,_,k,D){if(!h)throw Error("Invalid event type");var Q=u(k)?!!k.capture:!!k,Me=ue(a);if(Me||(a[A]=Me=new be(a)),f=Me.add(h,f,_,Q,D),f.proxy)return f;if(_=j(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)jn||(k=Q),k===void 0&&(k=!1),a.addEventListener(h.toString(),_,k);else if(a.attachEvent)a.attachEvent(K(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function j(){function a(f){return h.call(a.src,a.listener,f)}const h=W;return a}function J(a,h,f,_,k){if(Array.isArray(h))for(var D=0;D<h.length;D++)J(a,h[D],f,_,k);else _=u(_)?!!_.capture:!!_,f=ae(f),a&&a[M]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=w(D,f,_,k),-1<f&&(se(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=ue(a))&&(h=a.g[h.toString()],a=-1,h&&(a=w(h,f,_,k)),(f=-1<a?h[a]:null)&&G(f))}function G(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[M])xe(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(K(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=ue(h))?(xe(f,a),f.h==0&&(f.src=null,h[A]=null)):se(a)}}}function K(a){return a in V?V[a]:V[a]="on"+a}function W(a,h){if(a.da)a=!0;else{h=new cn(h,this);var f=a.listener,_=a.ha||a.src;a.fa&&G(a),a=f.call(_,h)}return a}function ue(a){return a=a[A],a instanceof be?a:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[ee]||(a[ee]=function(h){return a.handleEvent(h)}),a[ee])}function ie(){ze.call(this),this.i=new be(this),this.M=this,this.F=null}T(ie,ze),ie.prototype[M]=!0,ie.prototype.removeEventListener=function(a,h,f,_){J(this,a,h,f,_)};function he(a,h){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Ke(h,a);else if(h instanceof Ke)h.target=h.target||a;else{var k=h;h=new Ke(_,a),I(h,k)}if(k=!0,f)for(var D=f.length-1;0<=D;D--){var Q=h.g=f[D];k=ke(Q,_,!0,h)&&k}if(Q=h.g=a,k=ke(Q,_,!0,h)&&k,k=ke(Q,_,!1,h)&&k,f)for(D=0;D<f.length;D++)Q=h.g=f[D],k=ke(Q,_,!1,h)&&k}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],_=0;_<f.length;_++)se(f[_]);delete a.g[h],a.h--}}this.F=null},ie.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},ie.prototype.L=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function ke(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,D=0;D<h.length;++D){var Q=h[D];if(Q&&!Q.da&&Q.capture==f){var Me=Q.listener,ft=Q.ha||Q.src;Q.fa&&xe(a.i,Q),k=Me.call(ft,_)!==!1&&k}}return k&&!_.defaultPrevented}function Re(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function yt(a){a.g=Re(()=>{a.g=null,a.i&&(a.i=!1,yt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class at extends ze{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:yt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dt(a){ze.call(this),this.h=a,this.g={}}T(dt,ze);var vt=[];function qn(a){z(a.g,function(h,f){this.g.hasOwnProperty(f)&&G(h)},a),a.g={}}dt.prototype.N=function(){dt.aa.N.call(this),qn(this)},dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ns=l.JSON.stringify,Pt=l.JSON.parse,Kt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function rs(){}rs.prototype.h=null;function wh(a){return a.h||(a.h=a.i())}function Eh(){}var Js={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function El(){Ke.call(this,"d")}T(El,Ke);function Tl(){Ke.call(this,"c")}T(Tl,Ke);var Pr={},Th=null;function vo(){return Th=Th||new ie}Pr.La="serverreachability";function Ih(a){Ke.call(this,Pr.La,a)}T(Ih,Ke);function Xs(a){const h=vo();he(h,new Ih(h))}Pr.STAT_EVENT="statevent";function Ah(a,h){Ke.call(this,Pr.STAT_EVENT,a),this.stat=h}T(Ah,Ke);function kt(a){const h=vo();he(h,new Ah(h,a))}Pr.Ma="timingevent";function bh(a,h){Ke.call(this,Pr.Ma,a),this.size=h}T(bh,Ke);function Zs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function ei(){this.g=!0}ei.prototype.xa=function(){this.g=!1};function Jy(a,h,f,_,k,D){a.info(function(){if(a.g)if(D)for(var Q="",Me=D.split("&"),ft=0;ft<Me.length;ft++){var Pe=Me[ft].split("=");if(1<Pe.length){var wt=Pe[0];Pe=Pe[1];var Et=wt.split("_");Q=2<=Et.length&&Et[1]=="type"?Q+(wt+"="+Pe+"&"):Q+(wt+"=redacted&")}}else Q=null;else Q=D;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+h+`
`+f+`
`+Q})}function Xy(a,h,f,_,k,D,Q){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+h+`
`+f+`
`+D+" "+Q})}function ss(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ev(a,f)+(_?" "+_:"")})}function Zy(a,h){a.info(function(){return"TIMEOUT: "+h})}ei.prototype.info=function(){};function ev(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var D=k[0];if(D!="noop"&&D!="stop"&&D!="close")for(var Q=1;Q<k.length;Q++)k[Q]=""}}}}return ns(f)}catch{return h}}var wo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ch={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Il;function Eo(){}T(Eo,rs),Eo.prototype.g=function(){return new XMLHttpRequest},Eo.prototype.i=function(){return{}},Il=new Eo;function Wn(a,h,f,_){this.j=a,this.i=h,this.l=f,this.R=_||1,this.U=new dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sh}function Sh(){this.i=null,this.g="",this.h=!1}var Rh={},Al={};function bl(a,h,f){a.L=1,a.v=bo(An(h)),a.m=f,a.P=!0,Ph(a,null)}function Ph(a,h){a.F=Date.now(),To(a),a.A=An(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),qh(f.i,"t",_),a.C=0,f=a.j.J,a.h=new Sh,a.g=ad(a.j,f?h:null,!a.m),0<a.O&&(a.M=new at(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,_=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(vt[0]=k.toString()),k=vt);for(var D=0;D<k.length;D++){var Q=B(f,k[D],_||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Xs(),Jy(a.i,a.u,a.A,a.l,a.R,a.m)}Wn.prototype.ca=function(a){a=a.target;const h=this.M;h&&bn(a)==3?h.j():this.Y(a)},Wn.prototype.Y=function(a){try{if(a==this.g)e:{const Et=bn(this.g);var h=this.g.Ba();const as=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||Yh(this.g)))){this.J||Et!=4||h==7||(h==8||0>=as?Xs(3):Xs(2)),Cl(this);var f=this.g.Z();this.X=f;t:if(kh(this)){var _=Yh(this.g);a="";var k=_.length,D=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kr(this),ti(this);var Q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(D&&h==k-1)});_.length=0,this.h.g+=a,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=f==200,Xy(this.i,this.u,this.A,this.l,this.R,Et,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,ft=this.g;if((Me=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(Me)){var Pe=Me;break t}}Pe=null}if(f=Pe)ss(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sl(this,f);else{this.o=!1,this.s=3,kt(12),kr(this),ti(this);break e}}if(this.P){f=!0;let Zt;for(;!this.J&&this.C<Q.length;)if(Zt=tv(this,Q),Zt==Al){Et==4&&(this.s=4,kt(14),f=!1),ss(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==Rh){this.s=4,kt(15),ss(this.i,this.l,Q,"[Invalid Chunk]"),f=!1;break}else ss(this.i,this.l,Zt,null),Sl(this,Zt);if(kh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||Q.length!=0||this.h.h||(this.s=1,kt(16),f=!1),this.o=this.o&&f,!f)ss(this.i,this.l,Q,"[Invalid Chunked Response]"),kr(this),ti(this);else if(0<Q.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),Dl(wt),wt.M=!0,kt(11))}}else ss(this.i,this.l,Q,null),Sl(this,Q);Et==4&&kr(this),this.o&&!this.J&&(Et==4?rd(this.j,this):(this.o=!1,To(this)))}else yv(this.g),f==400&&0<Q.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),kr(this),ti(this)}}}catch{}finally{}};function kh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function tv(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?Al:(f=Number(h.substring(f,_)),isNaN(f)?Rh:(_+=1,_+f>h.length?Al:(h=h.slice(_,_+f),a.C=_+f,h)))}Wn.prototype.cancel=function(){this.J=!0,kr(this)};function To(a){a.S=Date.now()+a.I,Vh(a,a.I)}function Vh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Zs(g(a.ba,a),h)}function Cl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Wn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Zy(this.i,this.A),this.L!=2&&(Xs(),kt(17)),kr(this),this.s=2,ti(this)):Vh(this,this.S-a)};function ti(a){a.j.G==0||a.J||rd(a.j,a)}function kr(a){Cl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,qn(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Sl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Rl(f.h,a))){if(!a.K&&Rl(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Vo(f),Po(f);else break e;Ol(f),kt(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Zs(g(f.Za,f),6e3));if(1>=Nh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Or(f,11)}else if((a.K||f.g==a)&&Vo(f),!L(h))for(k=f.Da.g.parse(h),h=0;h<k.length;h++){let Pe=k[h];if(f.T=Pe[0],Pe=Pe[1],f.G==2)if(Pe[0]=="c"){f.K=Pe[1],f.ia=Pe[2];const wt=Pe[3];wt!=null&&(f.la=wt,f.j.info("VER="+f.la));const Et=Pe[4];Et!=null&&(f.Aa=Et,f.j.info("SVER="+f.Aa));const as=Pe[5];as!=null&&typeof as=="number"&&0<as&&(_=1.5*as,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const Zt=a.g;if(Zt){const Do=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Do){var D=_.h;D.g||Do.indexOf("spdy")==-1&&Do.indexOf("quic")==-1&&Do.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Pl(D,D.h),D.h=null))}if(_.D){const Nl=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Nl&&(_.ya=Nl,je(_.I,_.D,Nl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var Q=a;if(_.qa=od(_,_.J?_.ia:null,_.W),Q.K){Lh(_.h,Q);var Me=Q,ft=_.L;ft&&(Me.I=ft),Me.B&&(Cl(Me),To(Me)),_.g=Q}else td(_);0<f.i.length&&ko(f)}else Pe[0]!="stop"&&Pe[0]!="close"||Or(f,7);else f.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Or(f,7):Vl(f):Pe[0]!="noop"&&f.l&&f.l.ta(Pe),f.v=0)}}Xs(4)}catch{}}var nv=class{constructor(a,h){this.g=a,this.map=h}};function Oh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Dh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Nh(a){return a.h?1:a.g?a.g.size:0}function Rl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Pl(a,h){a.g?a.g.add(h):a.h=h}function Lh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Oh.prototype.cancel=function(){if(this.i=xh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function xh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return S(a.i)}function rv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,_=0;_<f;_++)h.push(a[_]);return h}h=[],f=0;for(_ in a)h[f++]=a[_];return h}function sv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const _ in a)h[f++]=_;return h}}}function Mh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=sv(a),_=rv(a),k=_.length,D=0;D<k;D++)h.call(void 0,_[D],f&&f[D],a)}var Fh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function iv(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),k=null;if(0<=_){var D=a[f].substring(0,_);k=a[f].substring(_+1)}else D=a[f];h(D,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Vr){this.h=a.h,Io(this,a.j),this.o=a.o,this.g=a.g,Ao(this,a.s),this.l=a.l;var h=a.i,f=new si;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Uh(this,f),this.m=a.m}else a&&(h=String(a).match(Fh))?(this.h=!1,Io(this,h[1]||"",!0),this.o=ni(h[2]||""),this.g=ni(h[3]||"",!0),Ao(this,h[4]),this.l=ni(h[5]||"",!0),Uh(this,h[6]||"",!0),this.m=ni(h[7]||"")):(this.h=!1,this.i=new si(null,this.h))}Vr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ri(h,$h,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ri(h,$h,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ri(f,f.charAt(0)=="/"?lv:av,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ri(f,uv)),a.join("")};function An(a){return new Vr(a)}function Io(a,h,f){a.j=f?ni(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ao(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Uh(a,h,f){h instanceof si?(a.i=h,hv(a.i,a.h)):(f||(h=ri(h,cv)),a.i=new si(h,a.h))}function je(a,h,f){a.i.set(h,f)}function bo(a){return je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ni(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ri(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,ov),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ov(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var $h=/[#\/\?@]/g,av=/[#\?:]/g,lv=/[#\?]/g,cv=/[#\?@]/g,uv=/#/g;function si(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&iv(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=si.prototype,t.add=function(a,h){Hn(this),this.i=null,a=is(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Bh(a,h){Hn(a),h=is(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function jh(a,h){return Hn(a),h=is(a,h),a.g.has(h)}t.forEach=function(a,h){Hn(this),this.g.forEach(function(f,_){f.forEach(function(k){a.call(h,k,_,this)},this)},this)},t.na=function(){Hn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){const k=a[_];for(let D=0;D<k.length;D++)f.push(h[_])}return f},t.V=function(a){Hn(this);let h=[];if(typeof a=="string")jh(this,a)&&(h=h.concat(this.g.get(is(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Hn(this),this.i=null,a=is(this,a),jh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function qh(a,h,f){Bh(a,h),0<f.length&&(a.i=null,a.g.set(is(a,h),S(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];const D=encodeURIComponent(String(_)),Q=this.V(_);for(_=0;_<Q.length;_++){var k=D;Q[_]!==""&&(k+="="+encodeURIComponent(String(Q[_]))),a.push(k)}}return this.i=a.join("&")};function is(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function hv(a,h){h&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(f,_){var k=_.toLowerCase();_!=k&&(Bh(this,_),qh(this,k,f))},a)),a.j=h}function dv(a,h){const f=new ei;if(l.Image){const _=new Image;_.onload=m(zn,f,"TestLoadImage: loaded",!0,h,_),_.onerror=m(zn,f,"TestLoadImage: error",!1,h,_),_.onabort=m(zn,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=m(zn,f,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function fv(a,h){const f=new ei,_=new AbortController,k=setTimeout(()=>{_.abort(),zn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(D=>{clearTimeout(k),D.ok?zn(f,"TestPingServer: ok",!0,h):zn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),zn(f,"TestPingServer: error",!1,h)})}function zn(a,h,f,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(f)}catch{}}function pv(){this.g=new Kt}function gv(a,h,f){const _=f||"";try{Mh(a,function(k,D){let Q=k;u(k)&&(Q=ns(k)),h.push(_+D+"="+encodeURIComponent(Q))})}catch(k){throw h.push(_+"type="+encodeURIComponent("_badmap")),k}}function Co(a){this.l=a.Ub||null,this.j=a.eb||!1}T(Co,rs),Co.prototype.g=function(){return new So(this.l,this.j)},Co.prototype.i=function(a){return function(){return a}}({});function So(a,h){ie.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(So,ie),t=So.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,oi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ii(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,oi(this)),this.g&&(this.readyState=3,oi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ii(this):oi(this),this.readyState==3&&Wh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ii(this))},t.Qa=function(a){this.g&&(this.response=a,ii(this))},t.ga=function(){this.g&&ii(this)};function ii(a){a.readyState=4,a.l=null,a.j=null,a.v=null,oi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function oi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(So.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Hh(a){let h="";return z(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function kl(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=Hh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):je(a,h,f))}function Qe(a){ie.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Qe,ie);var mv=/^https?$/i,_v=["POST","PUT"];t=Qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Il.g(),this.v=this.o?wh(this.o):wh(Il),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){zh(this,D);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)f.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())f.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(_v,h,void 0))||_||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,Q]of f)this.g.setRequestHeader(D,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qh(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){zh(this,D)}};function zh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Kh(a),Ro(a)}function Kh(a){a.A||(a.A=!0,he(a,"complete"),he(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,he(this,"complete"),he(this,"abort"),Ro(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ro(this,!0)),Qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Gh(this):this.bb())},t.bb=function(){Gh(this)};function Gh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||bn(a)!=4||a.Z()!=2)){if(a.u&&bn(a)==4)Re(a.Ea,0,a);else if(he(a,"readystatechange"),bn(a)==4){a.h=!1;try{const Q=a.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=Q===0){var k=String(a.D).match(Fh)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),_=!mv.test(k?k.toLowerCase():"")}f=_}if(f)he(a,"complete"),he(a,"success");else{a.m=6;try{var D=2<bn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Kh(a)}}finally{Ro(a)}}}}function Ro(a,h){if(a.g){Qh(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||he(a,"ready");try{f.onreadystatechange=_}catch{}}}function Qh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function bn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Pt(h)}};function Yh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function yv(a){const h={};a=(a.g&&2<=bn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(L(a[_]))continue;var f=R(a[_]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[k]||[];h[k]=D,D.push(f)}b(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ai(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Jh(a){this.Aa=0,this.i=[],this.j=new ei,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ai("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ai("baseRetryDelayMs",5e3,a),this.cb=ai("retryDelaySeedMs",1e4,a),this.Wa=ai("forwardChannelMaxRetries",2,a),this.wa=ai("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Oh(a&&a.concurrentRequestLimit),this.Da=new pv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Jh.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,_){kt(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=od(this,null,this.W),ko(this)};function Vl(a){if(Xh(a),a.G==3){var h=a.U++,f=An(a.I);if(je(f,"SID",a.K),je(f,"RID",h),je(f,"TYPE","terminate"),li(a,f),h=new Wn(a,a.j,h),h.L=2,h.v=bo(An(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=ad(h.j,null),h.g.ea(h.v)),h.F=Date.now(),To(h)}id(a)}function Po(a){a.g&&(Dl(a),a.g.cancel(),a.g=null)}function Xh(a){Po(a),a.u&&(l.clearTimeout(a.u),a.u=null),Vo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ko(a){if(!Dh(a.h)&&!a.s){a.s=!0;var h=a.Ga;pe||Xt(),Ee||(pe(),Ee=!0),Bt.add(h,a),a.B=0}}function vv(a,h){return Nh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Zs(g(a.Ga,a,h),sd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Wn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=v(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(k.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=ed(this,k,h),f=An(this.I),je(f,"RID",a),je(f,"CVER",22),this.D&&je(f,"X-HTTP-Session-Id",this.D),li(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(Hh(D)))+"&"+h:this.m&&kl(f,this.m,D)),Pl(this.h,k),this.Ua&&je(f,"TYPE","init"),this.P?(je(f,"$req",h),je(f,"SID","null"),k.T=!0,bl(k,f,null)):bl(k,f,h),this.G=2}}else this.G==3&&(a?Zh(this,a):this.i.length==0||Dh(this.h)||Zh(this))};function Zh(a,h){var f;h?f=h.l:f=a.U++;const _=An(a.I);je(_,"SID",a.K),je(_,"RID",f),je(_,"AID",a.T),li(a,_),a.m&&a.o&&kl(_,a.m,a.o),f=new Wn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=ed(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Pl(a.h,f),bl(f,_,h)}function li(a,h){a.H&&z(a.H,function(f,_){je(h,_,f)}),a.l&&Mh({},function(f,_){je(h,_,f)})}function ed(a,h,f){f=Math.min(a.i.length,f);var _=a.l?g(a.l.Na,a.l,a):null;e:{var k=a.i;let D=-1;for(;;){const Q=["count="+f];D==-1?0<f?(D=k[0].g,Q.push("ofs="+D)):D=0:Q.push("ofs="+D);let Me=!0;for(let ft=0;ft<f;ft++){let Pe=k[ft].g;const wt=k[ft].map;if(Pe-=D,0>Pe)D=Math.max(0,k[ft].g-100),Me=!1;else try{gv(wt,Q,"req"+Pe+"_")}catch{_&&_(wt)}}if(Me){_=Q.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,_}function td(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;pe||Xt(),Ee||(pe(),Ee=!0),Bt.add(h,a),a.v=0}}function Ol(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Zs(g(a.Fa,a),sd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,nd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Zs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),Po(this),nd(this))};function Dl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function nd(a){a.g=new Wn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=An(a.qa);je(h,"RID","rpc"),je(h,"SID",a.K),je(h,"AID",a.T),je(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&je(h,"TO",a.ja),je(h,"TYPE","xmlhttp"),li(a,h),a.m&&a.o&&kl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=bo(An(h)),f.m=null,f.P=!0,Ph(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Po(this),Ol(this),kt(19))};function Vo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function rd(a,h){var f=null;if(a.g==h){Vo(a),Dl(a),a.g=null;var _=2}else if(Rl(a.h,h))f=h.D,Lh(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;_=vo(),he(_,new bh(_,f)),ko(a)}else td(a);else if(k=h.s,k==3||k==0&&0<h.X||!(_==1&&vv(a,h)||_==2&&Ol(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),k){case 1:Or(a,5);break;case 4:Or(a,10);break;case 3:Or(a,6);break;default:Or(a,2)}}}function sd(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Or(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),_=a.Xa;const k=!_;_=new Vr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Io(_,"https"),bo(_),k?dv(_.toString(),f):fv(_.toString(),f)}else kt(2);a.G=0,a.l&&a.l.sa(h),id(a),Xh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function id(a){if(a.G=0,a.ka=[],a.l){const h=xh(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.ra()}}function od(a,h,f){var _=f instanceof Vr?An(f):new Vr(f);if(_.g!="")h&&(_.g=h+"."+_.g),Ao(_,_.s);else{var k=l.location;_=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var D=new Vr(null);_&&Io(D,_),h&&(D.g=h),k&&Ao(D,k),f&&(D.l=f),_=D}return f=a.D,h=a.ya,f&&h&&je(_,f,h),je(_,"VER",a.la),li(a,_),_}function ad(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Qe(new Co({eb:f})):new Qe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ld(){}t=ld.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Oo(){}Oo.prototype.g=function(a,h){return new jt(a,h)};function jt(a,h){ie.call(this),this.g=new Jh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!L(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!L(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new os(this)}T(jt,ie),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Vl(this.g)},jt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ns(a),a=f);h.i.push(new nv(h.Ya++,a)),h.G==3&&ko(h)},jt.prototype.N=function(){this.g.l=null,delete this.j,Vl(this.g),delete this.g,jt.aa.N.call(this)};function cd(a){El.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}T(cd,El);function ud(){Tl.call(this),this.status=1}T(ud,Tl);function os(a){this.g=a}T(os,ld),os.prototype.ua=function(){he(this.g,"a")},os.prototype.ta=function(a){he(this.g,new cd(a))},os.prototype.sa=function(a){he(this.g,new ud)},os.prototype.ra=function(){he(this.g,"b")},Oo.prototype.createWebChannel=Oo.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,R_=function(){return new Oo},S_=function(){return vo()},C_=Pr,xc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wo.NO_ERROR=0,wo.TIMEOUT=8,wo.HTTP_ERROR=6,na=wo,Ch.COMPLETE="complete",b_=Ch,Eh.EventType=Js,Js.OPEN="a",Js.CLOSE="b",Js.ERROR="c",Js.MESSAGE="d",ie.prototype.listen=ie.prototype.K,gi=Eh,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,A_=Qe}).apply(typeof Bo<"u"?Bo:typeof self<"u"?self:typeof window<"u"?window:{});const Jf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new bu("@firebase/firestore");function ds(){return Qr.logLevel}function ne(t,...e){if(Qr.logLevel<=Te.DEBUG){const n=e.map(Fu);Qr.debug(`Firestore (${Hs}): ${t}`,...n)}}function Fn(t,...e){if(Qr.logLevel<=Te.ERROR){const n=e.map(Fu);Qr.error(`Firestore (${Hs}): ${t}`,...n)}}function Os(t,...e){if(Qr.logLevel<=Te.WARN){const n=e.map(Fu);Qr.warn(`Firestore (${Hs}): ${t}`,...n)}}function Fu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t="Unexpected state"){const e=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: `+t;throw Fn(e),new Error(e)}function Ne(t,e){t||me()}function ve(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class Vb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ob{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new dr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new P_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new It(e)}}class Db{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Nb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Db(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ne(this.o===void 0);const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new Lb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Mb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function Ds(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new it(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{static fromTimestamp(e){return new _e(e)}static min(){return new _e(new it(0,0))}static max(){return new _e(new it(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class qe extends Gi{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const Fb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends Gi{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return Fb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new re($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new re($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(qe.fromString(e))}static fromName(e){return new ce(qe.fromString(e).popFirst(5))}static empty(){return new ce(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new qe(e.slice()))}}function Ub(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=_e.fromTimestamp(r===1e9?new it(n+1,0):new it(n,r));return new mr(s,ce.empty(),e)}function $b(t){return new mr(t.readTime,t.key,-1)}class mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mr(_e.min(),ce.empty(),-1)}static max(){return new mr(_e.max(),ce.empty(),-1)}}function Bb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==jb)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Wb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ks(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}il.oe=-1;function ol(t){return t==null}function Ra(t){return t===0&&1/t==-1/0}function Hb(t){return typeof t=="number"&&Number.isInteger(t)&&!Ra(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Xf(e)),e=Kb(t.get(n),e);return Xf(e)}function Kb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Xf(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function V_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jo(this.root,e,this.comparator,!0)}}class jo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new pt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,s,i){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ep(this.data.getIterator())}getIteratorFrom(e){return new ep(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class ep{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new ot(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new O_("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const Gb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=Gb.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yr(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function al(t){const e=t.mapValue.fields.__previous_value__;return Uu(e)?al(e):e}function Qi(t){const e=_r(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Yi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uu(t)?4:Jb(t)?9007199254740991:Yb(t)?10:11:me()}function Tn(t,e){if(t===e)return!0;const n=vr(t);if(n!==vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qi(t).isEqual(Qi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=_r(s.timestampValue),l=_r(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return yr(s.bytesValue).isEqual(yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ze(s.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(s.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ze(s.integerValue)===Ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ze(s.doubleValue),l=Ze(i.doubleValue);return o===l?Ra(o)===Ra(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ds(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Zf(o)!==Zf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Tn(o[c],l[c])))return!1;return!0}(t,e);default:return me()}}function Ji(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function Ns(t,e){if(t===e)return 0;const n=vr(t),r=vr(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ze(i.integerValue||i.doubleValue),c=Ze(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return tp(t.timestampValue,e.timestampValue);case 4:return tp(Qi(t),Qi(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(i,o){const l=yr(i),c=yr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Ae(l[u],c[u]);if(d!==0)return d}return Ae(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ae(Ze(i.latitude),Ze(o.latitude));return l!==0?l:Ae(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return np(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},g=o.fields||{},m=(l=p.value)===null||l===void 0?void 0:l.arrayValue,T=(c=g.value)===null||c===void 0?void 0:c.arrayValue,S=Ae(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0);return S!==0?S:np(m,T)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===qo.mapValue&&o===qo.mapValue)return 0;if(i===qo.mapValue)return 1;if(o===qo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Ae(c[p],d[p]);if(g!==0)return g;const m=Ns(l[c[p]],u[d[p]]);if(m!==0)return m}return Ae(c.length,d.length)}(t.mapValue,e.mapValue);default:throw me()}}function tp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=_r(t),r=_r(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function np(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ns(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function Ls(t){return Mc(t)}function Mc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Mc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Mc(n.fields[o])}`;return s+"}"}(t.mapValue):me()}function ra(t){switch(vr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=al(t);return e?16+ra(e):16;case 5:return 2*t.stringValue.length;case 6:return yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ra(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Cr(r.fields,(i,o)=>{s+=i.length+ra(o)}),s}(t.mapValue);default:throw me()}}function rp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fc(t){return!!t&&"integerValue"in t}function $u(t){return!!t&&"arrayValue"in t}function sp(t){return!!t&&"nullValue"in t}function ip(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sa(t){return!!t&&"mapValue"in t}function Yb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ki(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ki(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ki(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Jb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ki(n)}setAll(e){let n=gt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ki(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());sa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];sa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Cr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ut(ki(this.value))}}function D_(t){const e=[];return Cr(t.fields,(n,r)=>{const s=new gt([n]);if(sa(r)){const i=D_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ct(e,0,_e.min(),_e.min(),_e.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,s){return new Ct(e,1,n,_e.min(),r,s,0)}static newNoDocument(e,n){return new Ct(e,2,n,_e.min(),_e.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new Ct(e,3,n,_e.min(),_e.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n){this.position=e,this.inclusive=n}}function op(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=Ns(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ap(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n="asc"){this.field=e,this.dir=n}}function Xb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{}class nt extends N_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new eC(e,n,r):n==="array-contains"?new rC(e,r):n==="in"?new sC(e,r):n==="not-in"?new iC(e,r):n==="array-contains-any"?new oC(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tC(e,r):new nC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ns(n,this.value)):n!==null&&vr(this.value)===vr(n)&&this.matchesComparison(Ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends N_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ln(e,n)}matches(e){return L_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function L_(t){return t.op==="and"}function x_(t){return Zb(t)&&L_(t)}function Zb(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function Uc(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+Ls(t.value);if(x_(t))return t.filters.map(e=>Uc(e)).join(",");{const e=t.filters.map(n=>Uc(n)).join(",");return`${t.op}(${e})`}}function M_(t,e){return t instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&Tn(r.value,s.value)}(t,e):t instanceof ln?function(r,s){return s instanceof ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&M_(o,s.filters[l]),!0):!1}(t,e):void me()}function F_(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ls(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(F_).join(" ,")+"}"}(t):"Filter"}class eC extends nt{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class tC extends nt{constructor(e,n){super(e,"in",n),this.keys=U_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nC extends nt{constructor(e,n){super(e,"not-in",n),this.keys=U_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function U_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ce.fromName(r.referenceValue))}class rC extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $u(n)&&Ji(n.arrayValue,this.value)}}class sC extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ji(this.value.arrayValue,n)}}class iC extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ji(this.value.arrayValue,n)}}class oC extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$u(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ji(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function lp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new aC(t,e,n,r,s,i,o)}function Bu(t){const e=ve(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Uc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ol(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ls(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ls(r)).join(",")),e.ue=n}return e.ue}function ju(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Xb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!M_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ap(t.startAt,e.startAt)&&ap(t.endAt,e.endAt)}function $c(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function lC(t,e,n,r,s,i,o,l){return new Gs(t,e,n,r,s,i,o,l)}function $_(t){return new Gs(t)}function cp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function B_(t){return t.collectionGroup!==null}function Vi(t){const e=ve(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ot(gt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Xi(i,r))}),n.has(gt.keyField().canonicalString())||e.ce.push(new Xi(gt.keyField(),r))}return e.ce}function vn(t){const e=ve(t);return e.le||(e.le=cC(e,Vi(t))),e.le}function cC(t,e){if(t.limitType==="F")return lp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Xi(s.field,i)});const n=t.endAt?new Pa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Pa(t.startAt.position,t.startAt.inclusive):null;return lp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bc(t,e){const n=t.filters.concat([e]);return new Gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function jc(t,e,n){return new Gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ll(t,e){return ju(vn(t),vn(e))&&t.limitType===e.limitType}function j_(t){return`${Bu(vn(t))}|lt:${t.limitType}`}function fs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>F_(s)).join(", ")}]`),ol(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ls(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ls(s)).join(",")),`Target(${r})`}(vn(t))}; limitType=${t.limitType})`}function cl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ce.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Vi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=op(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Vi(r),s)||r.endAt&&!function(o,l,c){const u=op(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Vi(r),s))}(t,e)}function uC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function q_(t){return(e,n)=>{let r=!1;for(const s of Vi(t)){const i=hC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function hC(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ns(c,u):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return V_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=new Ge(ce.comparator);function Un(){return dC}const W_=new Ge(ce.comparator);function mi(...t){let e=W_;for(const n of t)e=e.insert(n.key,n);return e}function H_(t){let e=W_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ur(){return Oi()}function z_(){return Oi()}function Oi(){return new Zr(t=>t.toString(),(t,e)=>t.isEqual(e))}const fC=new Ge(ce.comparator),pC=new ot(ce.comparator);function Ie(...t){let e=pC;for(const n of t)e=e.add(n);return e}const gC=new ot(Ae);function mC(){return gC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ra(e)?"-0":e}}function K_(t){return{integerValue:""+t}}function _C(t,e){return Hb(e)?K_(e):qu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this._=void 0}}function yC(t,e,n){return t instanceof ka?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Uu(i)&&(i=al(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Zi?Q_(t,e):t instanceof eo?Y_(t,e):function(s,i){const o=G_(s,i),l=up(o)+up(s.Pe);return Fc(o)&&Fc(s.Pe)?K_(l):qu(s.serializer,l)}(t,e)}function vC(t,e,n){return t instanceof Zi?Q_(t,e):t instanceof eo?Y_(t,e):n}function G_(t,e){return t instanceof Va?function(r){return Fc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ka extends ul{}class Zi extends ul{constructor(e){super(),this.elements=e}}function Q_(t,e){const n=J_(e);for(const r of t.elements)n.some(s=>Tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class eo extends ul{constructor(e){super(),this.elements=e}}function Y_(t,e){let n=J_(e);for(const r of t.elements)n=n.filter(s=>!Tn(s,r));return{arrayValue:{values:n}}}class Va extends ul{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function up(t){return Ze(t.integerValue||t.doubleValue)}function J_(t){return $u(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function wC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Zi&&s instanceof Zi||r instanceof eo&&s instanceof eo?Ds(r.elements,s.elements,Tn):r instanceof Va&&s instanceof Va?Tn(r.Pe,s.Pe):r instanceof ka&&s instanceof ka}(t.transform,e.transform)}class EC{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ia(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hl{}function X_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wu(t.key,nn.none()):new ho(t.key,t.data,nn.none());{const n=t.data,r=Ut.empty();let s=new ot(gt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Sr(t.key,r,new Wt(s.toArray()),nn.none())}}function TC(t,e,n){t instanceof ho?function(s,i,o){const l=s.value.clone(),c=dp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(s,i,o){if(!ia(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=dp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Z_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Di(t,e,n,r){return t instanceof ho?function(i,o,l,c){if(!ia(i.precondition,o))return l;const u=i.value.clone(),d=fp(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(i,o,l,c){if(!ia(i.precondition,o))return l;const u=fp(i.fieldTransforms,c,o),d=o.data;return d.setAll(Z_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return ia(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function IC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=G_(r.transform,s||null);i!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function hp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ds(r,s,(i,o)=>wC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ho extends hl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends hl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Z_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dp(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,vC(o,l,n[s]))}return r}function fp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,yC(i,o,e))}return r}class Wu extends hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AC extends hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&TC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Di(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Di(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=z_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=X_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&Ds(this.mutations,e.mutations,(n,r)=>hp(n,r))&&Ds(this.baseMutations,e.baseMutations,(n,r)=>hp(n,r))}}class Hu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=function(){return fC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Hu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,Ce;function RC(t){switch(t){default:return me();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function ey(t){if(t===void 0)return Fn("GRPC error has no .code"),$.UNKNOWN;switch(t){case tt.OK:return $.OK;case tt.CANCELLED:return $.CANCELLED;case tt.UNKNOWN:return $.UNKNOWN;case tt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case tt.INTERNAL:return $.INTERNAL;case tt.UNAVAILABLE:return $.UNAVAILABLE;case tt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case tt.NOT_FOUND:return $.NOT_FOUND;case tt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case tt.ABORTED:return $.ABORTED;case tt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case tt.DATA_LOSS:return $.DATA_LOSS;default:return me()}}(Ce=tt||(tt={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=new jr([4294967295,4294967295],0);function pp(t){const e=PC().encode(t),n=new I_;return n.update(e),new Uint8Array(n.digest())}function gp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jr([n,r],0),new jr([s,i],0)]}class zu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _i(`Invalid padding: ${n}`);if(r<0)throw new _i(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _i(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _i(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=jr.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(jr.fromNumber(r)));return s.compare(kC)===1&&(s=new jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=pp(e),[r,s]=gp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new zu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=pp(e),[r,s]=gp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _i extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,fo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new dl(_e.min(),s,new Ge(Ae),Un(),Ie())}}class fo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fo(r,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class ty{constructor(e,n){this.targetId=e,this.me=n}}class ny{constructor(e,n,r=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class mp{constructor(){this.fe=0,this.ge=_p(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ie(),n=Ie(),r=Ie();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me()}}),new fo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=_p()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class VC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Un(),this.qe=Wo(),this.Qe=Wo(),this.Ke=new Ge(Ae)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if($c(i))if(r===0){const o=new ce(i.path);this.We(n,o,Ct.newNoDocument(o,_e.min()))}else Ne(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=yr(r).toUint8Array()}catch(c){if(c instanceof O_)return Os("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new zu(o,s,i)}catch(c){return Os(c instanceof _i?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&$c(l.target)){const c=new ce(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,Ct.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ie();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new dl(e,n,this.Ke,this.ke,r);return this.ke=Un(),this.qe=Wo(),this.Qe=Wo(),this.Ke=new Ge(Ae),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new mp,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new ot(Ae),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ot(Ae),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new mp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Wo(){return new Ge(ce.comparator)}function _p(){return new Ge(ce.comparator)}const OC={asc:"ASCENDING",desc:"DESCENDING"},DC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},NC={and:"AND",or:"OR"};class LC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qc(t,e){return t.useProto3Json||ol(e)?e:{value:e}}function Oa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ry(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xC(t,e){return Oa(t,e.toTimestamp())}function wn(t){return Ne(!!t),_e.fromTimestamp(function(n){const r=_r(n);return new it(r.seconds,r.nanos)}(t))}function Ku(t,e){return Wc(t,e).canonicalString()}function Wc(t,e){const n=function(s){return new qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sy(t){const e=qe.fromString(t);return Ne(cy(e)),e}function Hc(t,e){return Ku(t.databaseId,e.path)}function ic(t,e){const n=sy(e);if(n.get(1)!==t.databaseId.projectId)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(oy(n))}function iy(t,e){return Ku(t.databaseId,e)}function MC(t){const e=sy(t);return e.length===4?qe.emptyPath():oy(e)}function zc(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oy(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yp(t,e,n){return{name:Hc(t,e),fields:n.value.mapValue.fields}}function FC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Ne(d===void 0||typeof d=="string"),_t.fromBase64String(d||"")):(Ne(d===void 0||d instanceof Buffer||d instanceof Uint8Array),_t.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?$.UNKNOWN:ey(u.code);return new re(d,u.message||"")}(o);n=new ny(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ic(t,r.document.name),i=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):_e.min(),l=new Ut({mapValue:{fields:r.document.fields}}),c=Ct.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new oa(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ic(t,r.document),i=r.readTime?wn(r.readTime):_e.min(),o=Ct.newNoDocument(s,i),l=r.removedTargetIds||[];n=new oa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ic(t,r.document),i=r.removedTargetIds||[];n=new oa([],i,s,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new SC(s,i),l=r.targetId;n=new ty(l,o)}}return n}function UC(t,e){let n;if(e instanceof ho)n={update:yp(t,e.key,e.value)};else if(e instanceof Wu)n={delete:Hc(t,e.key)};else if(e instanceof Sr)n={update:yp(t,e.key,e.data),updateMask:GC(e.fieldMask)};else{if(!(e instanceof AC))return me();n={verify:Hc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ka)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Va)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:xC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me()}(t,e.precondition)),n}function $C(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?wn(s.updateTime):wn(i);return o.isEqual(_e.min())&&(o=wn(i)),new EC(o,s.transformResults||[])}(n,e))):[]}function BC(t,e){return{documents:[iy(t,e.path)]}}function jC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=iy(t,s);const i=function(u){if(u.length!==0)return ly(ln.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:ps(g.field),direction:HC(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=qc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function qC(t){let e=MC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=ay(p);return g instanceof ln&&x_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(T){return new Xi(gs(T.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,ol(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,m=p.values||[];return new Pa(m,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,m=p.values||[];return new Pa(m,g)}(n.endAt)),lC(e,s,o,i,l,"F",c,u)}function WC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ay(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gs(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=gs(n.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gs(n.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gs(n.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return nt.create(gs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>ay(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function HC(t){return OC[t]}function zC(t){return DC[t]}function KC(t){return NC[t]}function ps(t){return{fieldPath:t.canonicalString()}}function gs(t){return gt.fromServerFormat(t.fieldPath)}function ly(t){return t instanceof nt?function(n){if(n.op==="=="){if(ip(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NAN"}};if(sp(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ip(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NAN"}};if(sp(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ps(n.field),op:zC(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(s=>ly(s));return r.length===1?r[0]:{compositeFilter:{op:KC(n.op),filters:r}}}(t):me()}function GC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,r,s,i=_e.min(),o=_e.min(),l=_t.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.ht=e}}function YC(t){const e=qC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.ln=new XC}addToCollectionParentIndex(e,n){return this.ln.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(mr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(mr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class XC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ot(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ot(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ft{static withCacheSize(e){return new Ft(e,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft.DEFAULT_COLLECTION_PERCENTILE=10,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ft.DEFAULT=new Ft(41943040,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ft.DISABLED=new Ft(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new xs(0)}static Qn(){return new xs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp([t,e],[n,r]){const s=Ae(t,n);return s===0?Ae(e,r):s}class ZC{constructor(e){this.Gn=e,this.buffer=new ot(wp),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();wp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class eS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ne("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ks(n)?ne("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await zs(n)}await this.Yn(3e5)})}}class tS{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return U.resolve(il.oe);const r=new ZC(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(vp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vp):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),ds()<=Te.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function nS(t,e){return new tS(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this.changes=new Zr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Di(r.mutation,s,Wt.empty(),it.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ie()){const s=Ur();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=mi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Un();const o=Oi(),l=function(){return Oi()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Sr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Di(d.mutation,u,d.mutation.getFieldMask(),it.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new sS(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Oi();let s=new Ge((o,l)=>o-l),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Wt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||Ie()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=z_();d.forEach(g=>{if(!i.has(g)){const m=X_(n.get(g),r.get(g));m!==null&&p.set(g,m),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):B_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Ur());let l=-1,c=i;return o.next(u=>U.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ie())).next(d=>({batchId:l,changes:H_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(r=>{let s=mi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=mi();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const u=function(p,g){return new Gs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Ct.newInvalidDocument(d)))});let l=mi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Di(d.mutation,u,Wt.empty(),it.now()),cl(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return U.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:wn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:YC(s.bundledQuery),readTime:wn(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(){this.overlays=new Ge(ce.comparator),this.Er=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ur();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Ur(),i=n.length+1,o=new ce(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Ur(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Ur(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return U.resolve(l)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new CC(n,r));let i=this.Er.get(n);i===void 0&&(i=Ie(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this.dr=new ot(lt.Ar),this.Rr=new ot(lt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new lt(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new lt(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ce(new qe([])),r=new lt(n,e),s=new lt(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ce(new qe([])),r=new lt(n,e),s=new lt(n,e+1);let i=Ie();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new lt(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class lt{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ce.comparator(e.key,n.key)||Ae(e.br,n.br)}static Vr(e,n){return Ae(e.br,n.br)||ce.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new ot(lt.Ar)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new lt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new lt(n,0),s=new lt(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const l=this.Cr(o.br);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(Ae);return n.forEach(s=>{const i=new lt(s,0),o=new lt(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],l=>{r=r.add(l.br)})}),U.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ce.isDocumentKey(i)||(i=i.child(""));const o=new lt(new ce(i),0);let l=new ot(Ae);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.br)),!0)},o),U.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return U.forEach(n.mutations,s=>{const i=new lt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new lt(n,0),s=this.vr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e){this.Nr=e,this.docs=function(){return new Ge(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ct.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Un();const o=n.path,l=new ce(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Bb($b(d),r)<=0||(s.has(d.key)||cl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me()}Lr(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hS(this)}getSize(e){return U.resolve(this.size)}}class hS extends rS{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e){this.persistence=e,this.Br=new Zr(n=>Bu(n),ju),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.kr=0,this.qr=new Gu,this.targetCount=0,this.Qr=xs.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),U.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new xs(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Un(n),U.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,n){this.Kr={},this.overlays={},this.$r=new il(0),this.Ur=!1,this.Ur=!0,this.Wr=new lS,this.referenceDelegate=e(this),this.Gr=new dS(this),this.indexManager=new JC,this.remoteDocumentCache=function(s){return new uS(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new QC(n),this.jr=new oS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new aS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new cS(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new fS(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return U.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class fS extends qb{constructor(e){super(),this.currentSequenceNumber=e}}class Qu{constructor(e){this.persistence=e,this.Zr=new Gu,this.Xr=null}static ei(e){return new Qu(e)}get ti(){if(this.Xr)return this.Xr;throw me()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),U.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.ti,r=>{const s=ce.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,_e.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return U.or([()=>U.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Da{constructor(e,n){this.persistence=e,this.ri=new Zr(r=>zb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=nS(this,n)}static ei(e,n){return new Da(e,n)}Hr(){}Jr(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return U.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?U.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,i.removeEntry(o,_e.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),U.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ra(e.data.value)),n}ir(e,n,r){return U.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Yu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return SE()?8:Wb(Rt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new pS;return this.ts(e,n,o).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(ds()<=Te.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),U.resolve()):(ds()<=Te.DEBUG&&ne("QueryEngine","Query:",fs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(ds()<=Te.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vn(n))):U.resolve())}Xi(e,n){if(cp(n))return U.resolve(null);let r=vn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=jc(n,null,"F"),r=vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ie(...i);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(n,l);return this.ss(n,u,o,c.readTime)?this.Xi(e,jc(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,r,s){return cp(n)||s.isEqual(_e.min())?U.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?U.resolve(null):(ds()<=Te.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fs(n)),this.os(e,o,n,Ub(s,-1)).next(l=>l))})}rs(e,n){let r=new ot(q_(e));return n.forEach((s,i)=>{cl(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return ds()<=Te.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",fs(n)),this.Zi.getDocumentsMatchingQuery(e,n,mr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ge(Ae),this.cs=new Zr(i=>Bu(i),ju),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iS(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function _S(t,e,n,r){return new mS(t,e,n,r)}async function hy(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ie();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function yS(t,e){const n=ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,g=p.keys();let m=U.resolve();return g.forEach(T=>{m=m.next(()=>d.getEntry(c,T)).next(S=>{const P=u.docVersions.get(T);Ne(P!==null),S.version.compareTo(P)<0&&(p.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),d.addEntry(S)))})}),m.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ie();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function dy(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function vS(t,e){const n=ve(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let m=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?m=m.withResumeToken(_t.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):d.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(d.resumeToken,r)),s=s.insert(p,m),function(S,P,O){return S.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(g,m,d)&&l.push(n.Gr.updateTargetData(i,m))});let c=Un(),u=Ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(wS(i,o,e.documentUpdates).next(d=>{c=d.Is,u=d.Es})),!r.isEqual(_e.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=s,i))}function wS(t,e,n){let r=Ie(),s=Ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Un();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(_e.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ne("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function ES(t,e){const n=ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function TS(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function Kc(t,e,n){const r=ve(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ks(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Ep(t,e,n){const r=ve(t);let s=_e.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=ve(c),g=p.cs.get(d);return g!==void 0?U.resolve(p.us.get(g)):p.Gr.getTargetData(u,d)}(r,o,vn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:_e.min(),n?i:Ie())).next(l=>(IS(r,uC(e),l),{documents:l,ds:i})))}function IS(t,e,n){let r=t.ls.get(e)||_e.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Tp{constructor(){this.activeTargetIds=mC()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AS{constructor(){this._o=new Tp,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Tp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho=null;function oc(){return Ho===null?Ho=function(){return 268435456+Math.round(2147483648*Math.random())}():Ho++,"0x"+Ho.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class RS extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const l=oc(),c=this.No(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,c,u,s).then(d=>(ne("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Os("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,i,o,l){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=CS[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=oc();return new Promise((o,l)=>{const c=new A_;c.setWithCredentials(!0),c.listenOnce(b_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case na.NO_ERROR:const d=c.getResponseJson();ne(Tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case na.TIMEOUT:ne(Tt,`RPC '${e}' ${i} timed out`),l(new re($.DEADLINE_EXCEEDED,"Request time out"));break;case na.HTTP_ERROR:const p=c.getStatus();if(ne(Tt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const T=function(P){const O=P.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(O)>=0?O:$.UNKNOWN}(m.status);l(new re(T,m.message))}else l(new re($.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new re($.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{ne(Tt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ne(Tt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}qo(e,n,r){const s=oc(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=R_(),l=S_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");ne(Tt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let g=!1,m=!1;const T=new SS({Eo:P=>{m?ne(Tt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(g||(ne(Tt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),ne(Tt,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},Ao:()=>p.close()}),S=(P,O,L)=>{P.listen(O,F=>{try{L(F)}catch(q){setTimeout(()=>{throw q},0)}})};return S(p,gi.EventType.OPEN,()=>{m||(ne(Tt,`RPC '${e}' stream ${s} transport opened.`),T.So())}),S(p,gi.EventType.CLOSE,()=>{m||(m=!0,ne(Tt,`RPC '${e}' stream ${s} transport closed`),T.Do())}),S(p,gi.EventType.ERROR,P=>{m||(m=!0,Os(Tt,`RPC '${e}' stream ${s} transport errored:`,P),T.Do(new re($.UNAVAILABLE,"The operation could not be completed")))}),S(p,gi.EventType.MESSAGE,P=>{var O;if(!m){const L=P.data[0];Ne(!!L);const F=L,q=(F==null?void 0:F.error)||((O=F[0])===null||O===void 0?void 0:O.error);if(q){ne(Tt,`RPC '${e}' stream ${s} received error:`,q);const H=q.status;let z=function(y){const I=tt[y];if(I!==void 0)return ey(I)}(H),b=q.message;z===void 0&&(z=$.INTERNAL,b="Unknown error status: "+H+" with message "+q.message),m=!0,T.Do(new re(z,b)),p.close()}else ne(Tt,`RPC '${e}' stream ${s} received:`,L),T.vo(L)}}),S(l,C_.STAT_EVENT,P=>{P.stat===xc.PROXY?ne(Tt,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===xc.NOPROXY&&ne(Tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.bo()},0),T}}function ac(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t){return new LC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n,r,s,i,o,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new fy(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new re($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PS extends py{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=FC(this.serializer,e),r=function(i){if(!("targetChange"in i))return _e.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?wn(o.readTime):_e.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=zc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=$c(c)?{documents:BC(i,c)}:{query:jC(i,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ry(i,o.resumeToken);const u=qc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(_e.min())>0){l.readTime=Oa(i,o.snapshotVersion.toTimestamp());const u=qc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=WC(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=zc(this.serializer),n.removeTarget=e,this.c_(n)}}class kS extends py{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=$C(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=zc(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>UC(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Wc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re($.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,Wc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re($.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class OS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Fn(n),this.C_=!1):ne("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{es(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ve(c);u.k_.add(4),await po(u),u.K_.set("Unknown"),u.k_.delete(4),await pl(u)}(this))})}),this.K_=new OS(r,s)}}async function pl(t){if(es(t))for(const e of t.q_)await e(!0)}async function po(t){for(const e of t.q_)await e(!1)}function gy(t,e){const n=ve(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),eh(n)?Zu(n):Qs(n).s_()&&Xu(n,e))}function Ju(t,e){const n=ve(t),r=Qs(n);n.B_.delete(e),r.s_()&&my(n,e),n.B_.size===0&&(r.s_()?r.a_():es(n)&&n.K_.set("Unknown"))}function Xu(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qs(t).V_(e)}function my(t,e){t.U_.xe(e),Qs(t).m_(e)}function Zu(t){t.U_=new VC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Qs(t).start(),t.K_.F_()}function eh(t){return es(t)&&!Qs(t).i_()&&t.B_.size>0}function es(t){return ve(t).k_.size===0}function _y(t){t.U_=void 0}async function NS(t){t.K_.set("Online")}async function LS(t){t.B_.forEach((e,n)=>{Xu(t,e)})}async function xS(t,e){_y(t),eh(t)?(t.K_.O_(e),Zu(t)):t.K_.set("Unknown")}async function MS(t,e,n){if(t.K_.set("Online"),e instanceof ny&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.B_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Na(t,r)}else if(e instanceof oa?t.U_.$e(e):e instanceof ty?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(_e.min()))try{const r=await dy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(u);d&&i.B_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(_t.EMPTY_BYTE_STRING,d.snapshotVersion)),my(i,c);const p=new or(d.target,c,u,d.sequenceNumber);Xu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await Na(t,r)}}async function Na(t,e,n){if(!Ks(e))throw e;t.k_.add(1),await po(t),t.K_.set("Offline"),n||(n=()=>dy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await pl(t)})}function yy(t,e){return e().catch(n=>Na(t,n,e))}async function gl(t){const e=ve(t),n=wr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;FS(e);)try{const s=await ES(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,US(e,s)}catch(s){await Na(e,s)}vy(e)&&wy(e)}function FS(t){return es(t)&&t.L_.length<10}function US(t,e){t.L_.push(e);const n=wr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function vy(t){return es(t)&&!wr(t).i_()&&t.L_.length>0}function wy(t){wr(t).start()}async function $S(t){wr(t).w_()}async function BS(t){const e=wr(t);for(const n of t.L_)e.g_(n.mutations)}async function jS(t,e,n){const r=t.L_.shift(),s=Hu.from(r,e,n);await yy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await gl(t)}async function qS(t,e){e&&wr(t).f_&&await async function(r,s){if(function(o){return RC(o)&&o!==$.ABORTED}(s.code)){const i=r.L_.shift();wr(r).__(),await yy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await gl(r)}}(t,e),vy(t)&&wy(t)}async function Ap(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=es(n);n.k_.add(3),await po(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await pl(n)}async function WS(t,e){const n=ve(t);e?(n.k_.delete(2),await pl(n)):e||(n.k_.add(2),await po(n),n.K_.set("Unknown"))}function Qs(t){return t.W_||(t.W_=function(n,r,s){const i=ve(n);return i.b_(),new PS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:NS.bind(null,t),mo:LS.bind(null,t),po:xS.bind(null,t),R_:MS.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),eh(t)?Zu(t):t.K_.set("Unknown")):(await t.W_.stop(),_y(t))})),t.W_}function wr(t){return t.G_||(t.G_=function(n,r,s){const i=ve(n);return i.b_(),new kS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:$S.bind(null,t),po:qS.bind(null,t),p_:BS.bind(null,t),y_:jS.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await gl(t)):(await t.G_.stop(),t.L_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new th(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nh(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),Ks(t))return new re($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{static emptySet(e){return new bs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=mi(),this.sortedSet=new Ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(){this.z_=new Ge(ce.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):me():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ms{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ms(e,n,bs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ll(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class zS{constructor(){this.queries=Cp(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ve(n),i=s.queries;s.queries=Cp(),i.forEach((o,l)=>{for(const c of l.J_)c.onError(r)})})(this,new re($.ABORTED,"Firestore shutting down"))}}function Cp(){return new Zr(t=>j_(t),ll)}async function KS(t,e){const n=ve(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new HS,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=nh(o,`Initialization of query '${fs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&rh(n)}async function GS(t,e){const n=ve(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function QS(t,e){const n=ve(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.J_)l.ta(s)&&(r=!0);o.H_=s}}r&&rh(n)}function YS(t,e,n){const r=ve(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function rh(t){t.X_.forEach(e=>{e.next()})}var Gc,Sp;(Sp=Gc||(Gc={})).na="default",Sp.Cache="cache";class JS{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Gc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.key=e}}class Ty{constructor(e){this.key=e}}class XS{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ie(),this.mutatedKeys=Ie(),this.Va=q_(e),this.ma=new bs(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new bp,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),m=cl(this.query,p)?p:null,T=!!g&&this.mutatedKeys.has(g.key),S=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let P=!1;g&&m?g.data.isEqual(m.data)?T!==S&&(r.track({type:3,doc:m}),P=!0):this.ya(g,m)||(r.track({type:2,doc:m}),P=!0,(c&&this.Va(m,c)>0||u&&this.Va(m,u)<0)&&(l=!0)):!g&&m?(r.track({type:0,doc:m}),P=!0):g&&!m&&(r.track({type:1,doc:g}),P=!0,(c||u)&&(l=!0)),P&&(m?(o=o.add(m),i=S?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(m,T){const S=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return S(m)-S(T)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new Ms(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new bp,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ie(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new Ty(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new Ey(r))}),n}va(e){this.da=e.ds,this.Ra=Ie();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Ms.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class ZS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class eR{constructor(e){this.key=e,this.Fa=!1}}class tR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Zr(l=>j_(l),ll),this.Oa=new Map,this.Na=new Set,this.La=new Ge(ce.comparator),this.Ba=new Map,this.ka=new Gu,this.qa={},this.Qa=new Map,this.Ka=xs.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function nR(t,e,n=!0){const r=Ry(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await Iy(r,e,n,!0),s}async function rR(t,e){const n=Ry(t);await Iy(n,e,!0,!1)}async function Iy(t,e,n,r){const s=await TS(t.localStore,vn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await sR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&gy(t.remoteStore,s),l}async function sR(t,e,n,r,s){t.Ua=(p,g,m)=>async function(S,P,O,L){let F=P.view.ga(O);F.ss&&(F=await Ep(S.localStore,P.query,!1).then(({documents:b})=>P.view.ga(b,F)));const q=L&&L.targetChanges.get(P.targetId),H=L&&L.targetMismatches.get(P.targetId)!=null,z=P.view.applyChanges(F,S.isPrimaryClient,q,H);return Pp(S,P.targetId,z.ba),z.snapshot}(t,p,g,m);const i=await Ep(t.localStore,e,!0),o=new XS(e,i.ds),l=o.ga(i.documents),c=fo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Pp(t,n,u.ba);const d=new ZS(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function iR(t,e,n){const r=ve(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!ll(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Kc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ju(r.remoteStore,s.targetId),Qc(r,s.targetId)}).catch(zs)):(Qc(r,s.targetId),await Kc(r.localStore,s.targetId,!0))}async function oR(t,e){const n=ve(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ju(n.remoteStore,r.targetId))}async function aR(t,e,n){const r=pR(t);try{const s=await function(o,l){const c=ve(o),u=it.now(),d=l.reduce((m,T)=>m.add(T.key),Ie());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let T=Un(),S=Ie();return c.hs.getEntries(m,d).next(P=>{T=P,T.forEach((O,L)=>{L.isValidDocument()||(S=S.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,T)).next(P=>{p=P;const O=[];for(const L of l){const F=IC(L,p.get(L.key).overlayedDocument);F!=null&&O.push(new Sr(L.key,F,D_(F.value.mapValue),nn.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,O,l)}).next(P=>{g=P;const O=P.applyToLocalDocumentSet(p,S);return c.documentOverlayCache.saveOverlays(m,P.batchId,O)})}).then(()=>({batchId:g.batchId,changes:H_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Ge(Ae)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await go(r,s.changes),await gl(r.remoteStore)}catch(s){const i=nh(s,"Failed to persist write");n.reject(i)}}async function Ay(t,e){const n=ve(t);try{const r=await vS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Ne(o.Fa):s.removedDocuments.size>0&&(Ne(o.Fa),o.Fa=!1))}),await go(n,r,e)}catch(r){await zs(r)}}function Rp(t,e,n){const r=ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ve(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const g of p.J_)g.ea(l)&&(u=!0)}),u&&rh(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lR(t,e,n){const r=ve(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ge(ce.comparator);o=o.insert(i,Ct.newNoDocument(i,_e.min()));const l=Ie().add(i),c=new dl(_e.min(),new Map,new Ge(Ae),o,l);await Ay(r,c),r.La=r.La.remove(i),r.Ba.delete(e),sh(r)}else await Kc(r.localStore,e,!1).then(()=>Qc(r,e,n)).catch(zs)}async function cR(t,e){const n=ve(t),r=e.batch.batchId;try{const s=await yS(n.localStore,e);Cy(n,r,null),by(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await go(n,s)}catch(s){await zs(s)}}async function uR(t,e,n){const r=ve(t);try{const s=await function(o,l){const c=ve(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Ne(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);Cy(r,e,n),by(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await go(r,s)}catch(s){await zs(s)}}function by(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function Cy(t,e,n){const r=ve(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function Qc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||Sy(t,r)})}function Sy(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Ju(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),sh(t))}function Pp(t,e,n){for(const r of n)r instanceof Ey?(t.ka.addReference(r.key,e),hR(t,r)):r instanceof Ty?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||Sy(t,r.key)):me()}function hR(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.Na.add(r),sh(t))}function sh(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ce(qe.fromString(e)),r=t.Ka.next();t.Ba.set(r,new eR(n)),t.La=t.La.insert(n,r),gy(t.remoteStore,new or(vn($_(n.path)),r,"TargetPurposeLimboResolution",il.oe))}}async function go(t,e,n){const r=ve(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{o.push(r.Ua(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Yu.zi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,u){const d=ve(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(u,g=>U.forEach(g.Wi,m=>d.persistence.referenceDelegate.addReference(p,g.targetId,m)).next(()=>U.forEach(g.Gi,m=>d.persistence.referenceDelegate.removeReference(p,g.targetId,m)))))}catch(p){if(!Ks(p))throw p;ne("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const m=d.us.get(g),T=m.snapshotVersion,S=m.withLastLimboFreeSnapshotVersion(T);d.us=d.us.insert(g,S)}}}(r.localStore,i))}async function dR(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await hy(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new re($.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await go(n,r.Ts)}}function fR(t,e){const n=ve(t),r=n.Ba.get(e);if(r&&r.Fa)return Ie().add(r.key);{let s=Ie();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const l=n.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function Ry(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ay.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lR.bind(null,e),e.Ma.R_=QS.bind(null,e.eventManager),e.Ma.Wa=YS.bind(null,e.eventManager),e}function pR(t){const e=ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uR.bind(null,e),e}class La{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return _S(this.persistence,new gS,e.initialUser,this.serializer)}ja(e){return new uy(Qu.ei,this.serializer)}za(e){return new AS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}La.provider={build:()=>new La};class gR extends La{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ne(this.persistence.referenceDelegate instanceof Da);const r=this.persistence.referenceDelegate.garbageCollector;return new eS(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Ft.withCacheSize(this.cacheSizeBytes):Ft.DEFAULT;return new uy(r=>Da.ei(r,n),this.serializer)}}class Yc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dR.bind(null,this.syncEngine),await WS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zS}()}createDatastore(e){const n=fl(e.databaseInfo.databaseId),r=function(i){return new RS(i)}(e.databaseInfo);return function(i,o,l,c){return new VS(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new DS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Rp(this.syncEngine,n,0),function(){return Ip.p()?new Ip:new bS}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new tR(s,i,o,l,c,u);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ve(s);ne("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await po(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Yc.provider={build:()=>new Yc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=k_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ne("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ne("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=nh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lc(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await hy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function kp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yR(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ap(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ap(e.remoteStore,s)),t._onlineComponents=e}async function yR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Os("Error using user provided cache. Falling back to memory cache: "+n),await lc(t,new La)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await lc(t,new gR(void 0));return t._offlineComponents}async function Py(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await kp(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await kp(t,new Yc))),t._onlineComponents}function vR(t){return Py(t).then(e=>e.syncEngine)}async function wR(t){const e=await Py(t),n=e.eventManager;return n.onListen=nR.bind(null,e.syncEngine),n.onUnlisten=iR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=rR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=oR.bind(null,e.syncEngine),n}function ER(t,e,n={}){const r=new dr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new mR({next:g=>{d.eu(),o.enqueueAndForget(()=>GS(i,p)),g.fromCache&&c.source==="server"?u.reject(new re($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new JS(l,d,{includeMetadataChanges:!0,ua:!0});return KS(i,p)}(await wR(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t,e,n){if(!n)throw new re($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function TR(t,e,n,r){if(e===!0&&r===!0)throw new re($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Op(t){if(!ce.isDocumentKey(t))throw new re($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dp(t){if(ce.isDocumentKey(t))throw new re($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ml(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function Er(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ml(t);throw new re($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}TR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ky((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _l{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Np({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Np(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kb;switch(r.type){case"firstParty":return new Nb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Vp.get(n);r&&(ne("ComponentProvider","Removing Datastore"),Vp.delete(n),r.terminate())}(this),Promise.resolve()}}function IR(t,e,n,r={}){var s;const i=(t=Er(t,_l))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=It.MOCK_USER;else{l=wE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new re($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new It(u)}t._authCredentials=new Vb(new P_(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ts(this.firestore,e,this._query)}}class $t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class fr extends ts{constructor(e,n,r){super(e,n,$_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new ce(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function AR(t,e,...n){if(t=ht(t),Vy("collection","path",e),t instanceof _l){const r=qe.fromString(e,...n);return Dp(r),new fr(t,null,r)}{if(!(t instanceof $t||t instanceof fr))throw new re($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return Dp(r),new fr(t.firestore,null,r)}}function yl(t,e,...n){if(t=ht(t),arguments.length===1&&(e=k_.newId()),Vy("doc","path",e),t instanceof _l){const r=qe.fromString(e,...n);return Op(r),new $t(t,null,new ce(r))}{if(!(t instanceof $t||t instanceof fr))throw new re($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return Op(r),new $t(t.firestore,t instanceof fr?t.converter:null,new ce(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new fy(this,"async_queue_retry"),this.fu=()=>{const r=ac();r&&ne("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=ac();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=ac();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new dr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ks(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=th.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&me()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class mo extends _l{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Lp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lp(e),this._firestoreClient=void 0,await e}}}function _o(t,e){const n=xm(),r="(default)",s=Su(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=yE("firestore");i&&IR(s,...i)}return s}function Oy(t){if(t._terminated)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||bR(t),t._firestoreClient}function bR(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new Qb(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,ky(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new _R(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fs(_t.fromBase64String(e))}catch(n){throw new re($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fs(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=/^__.*__$/;class SR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ho(e,this.data,n,this.fieldTransforms)}}class Dy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ny(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class lh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new lh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return xa(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Ny(this.Mu)&&CR.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class RR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fl(e)}$u(e,n,r,s=!1){return new lh({Mu:e,methodName:n,Ku:r,path:gt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ch(t){const e=t._freezeSettings(),n=fl(t._databaseId);return new RR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function PR(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);uh("Data must be an object, but it was:",o,r);const l=Ly(r,o);let c,u;if(i.merge)c=new Wt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=Jc(e,p,n);if(!o.contains(g))throw new re($.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);My(d,g)||d.push(g)}c=new Wt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new SR(new Ut(l),c,u)}class wl extends ih{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wl}}function kR(t,e,n,r){const s=t.$u(1,e,n);uh("Data must be an object, but it was:",s,r);const i=[],o=Ut.empty();Cr(r,(c,u)=>{const d=hh(e,c,n);u=ht(u);const p=s.Bu(d);if(u instanceof wl)i.push(d);else{const g=yo(u,p);g!=null&&(i.push(d),o.set(d,g))}});const l=new Wt(i);return new Dy(o,l,s.fieldTransforms)}function VR(t,e,n,r,s,i){const o=t.$u(1,e,n),l=[Jc(e,r,n)],c=[s];if(i.length%2!=0)throw new re($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Jc(e,i[g])),c.push(i[g+1]);const u=[],d=Ut.empty();for(let g=l.length-1;g>=0;--g)if(!My(u,l[g])){const m=l[g];let T=c[g];T=ht(T);const S=o.Bu(m);if(T instanceof wl)u.push(m);else{const P=yo(T,S);P!=null&&(u.push(m),d.set(m,P))}}const p=new Wt(u);return new Dy(d,p,o.fieldTransforms)}function OR(t,e,n,r=!1){return yo(n,t.$u(r?4:3,e))}function yo(t,e){if(xy(t=ht(t)))return uh("Unsupported field value:",e,t),Ly(t,e);if(t instanceof ih)return function(r,s){if(!Ny(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=yo(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _C(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=it.fromDate(r);return{timestampValue:Oa(s.serializer,i)}}if(r instanceof it){const i=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Oa(s.serializer,i)}}if(r instanceof oh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fs)return{bytesValue:ry(s.serializer,r._byteString)};if(r instanceof $t){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ku(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ah)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return qu(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${ml(r)}`)}(t,e)}function Ly(t,e){const n={};return V_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(t,(r,s)=>{const i=yo(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function xy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof oh||t instanceof Fs||t instanceof $t||t instanceof ih||t instanceof ah)}function uh(t,e,n){if(!xy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ml(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function Jc(t,e,n){if((e=ht(e))instanceof vl)return e._internalPath;if(typeof e=="string")return hh(t,e);throw xa("Field path arguments must be of type string or ",t,!1,void 0,n)}const DR=new RegExp("[~\\*/\\[\\]]");function hh(t,e,n){if(e.search(DR)>=0)throw xa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vl(...e.split("."))._internalPath}catch{throw xa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new re($.INVALID_ARGUMENT,l+t+c)}function My(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NR extends Fy{data(){return super.data()}}function dh(t,e){return typeof e=="string"?hh(t,e):e instanceof vl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fh{}class Uy extends fh{}function xR(t,e,...n){let r=[];e instanceof fh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof gh).length,l=i.filter(c=>c instanceof ph).length;if(o>1||o>0&&l>0)throw new re($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ph extends Uy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ph(e,n,r)}_apply(e){const n=this._parse(e);return $y(e._query,n),new ts(e.firestore,e.converter,Bc(e._query,n))}_parse(e){const n=ch(e.firestore);return function(i,o,l,c,u,d,p){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new re($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Mp(p,d);const m=[];for(const T of p)m.push(xp(c,i,T));g={arrayValue:{values:m}}}else g=xp(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Mp(p,d),g=OR(l,o,p,d==="in"||d==="not-in");return nt.create(u,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class gh extends fh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new gh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)$y(o,c),o=Bc(o,c)}(e._query,n),new ts(e.firestore,e.converter,Bc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class mh extends Uy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new mh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new re($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new re($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Xi(i,o)}(e._query,this._field,this._direction);return new ts(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Gs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function MR(t,e="asc"){const n=e,r=dh("orderBy",t);return mh._create(r,n)}function xp(t,e,n){if(typeof(n=ht(n))=="string"){if(n==="")throw new re($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!B_(e)&&n.indexOf("/")!==-1)throw new re($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(qe.fromString(n));if(!ce.isDocumentKey(r))throw new re($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rp(t,new ce(r))}if(n instanceof $t)return rp(t,n._key);throw new re($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ml(n)}.`)}function Mp(t,e){if(!Array.isArray(t)||t.length===0)throw new re($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $y(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new re($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class FR{convertValue(e,n="none"){switch(vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ze(o.doubleValue));return new ah(i)}convertGeoPoint(e){return new oh(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=al(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qi(e));default:return null}}convertTimestamp(e){const n=_r(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Ne(cy(r));const s=new Yi(r.get(1),r.get(3)),i=new ce(r.popFirst(5));return s.isEqual(n)||Fn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $R extends Fy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new aa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class aa extends $R{data(e={}){return super.data(e)}}class BR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new zo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new aa(this._firestore,this._userDataWriter,r.key,r,new zo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new aa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new zo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new aa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new zo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:jR(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}class qR extends FR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function WR(t){t=Er(t,ts);const e=Er(t.firestore,mo),n=Oy(e),r=new qR(e);return LR(t._query),ER(n,t._query).then(s=>new BR(e,r,t,s))}function HR(t,e,n){t=Er(t,$t);const r=Er(t.firestore,mo),s=UR(t.converter,e);return _h(r,[PR(ch(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,nn.none())])}function By(t,e,n,...r){t=Er(t,$t);const s=Er(t.firestore,mo),i=ch(s);let o;return o=typeof(e=ht(e))=="string"||e instanceof vl?VR(i,"updateDoc",t._key,e,n,r):kR(i,"updateDoc",t._key,e),_h(s,[o.toMutation(t._key,nn.exists(!0))])}function zR(t){return _h(Er(t.firestore,mo),[new Wu(t._key,nn.none())])}function _h(t,e){return function(r,s){const i=new dr;return r.asyncQueue.enqueueAndForget(async()=>aR(await vR(r),s,i)),i.promise}(Oy(t),e)}(function(e,n=!0){(function(s){Hs=s})(qs),ks(new zr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new mo(new Ob(r.getProvider("auth-internal")),new xb(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yi(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),hr(Jf,"4.7.5",e),hr(Jf,"4.7.5","esm2017")})();const Ys=js("user",()=>({userId:ge("")})),Rr=js("wordsStore",()=>{const t=sl(),e=Ys(),n=_o(),r=ge([]);let s=ge(!1);async function i(){if(!s.value){if(!navigator.onLine){console.error("No internet connection.");return}try{const l=xR(AR(n,`users/${e.userId}/words`),MR("createdAt","desc")),c=await WR(l);r.value=c.docs.map(u=>u.data()),s.value=!0,t.hideLoader()}catch(l){console.error("Error fetching data from Firestore:",l)}}}async function o(){s.value=!1,t.showLoader(),await i()}return{wordsList:r,getAllIWords:i,reloadWords:o,isDataLoaded:s}}),yh=js("search",()=>{const t=ge();function e(r){t.value=r}function n(){t.value={}}return{selectedWord:t,setWord:e,clearWord:n}});function KR(){const t=Rr(),e=yh(),n=Au(),r=ge(""),s=ge(!1),i=ge(null),o=we(()=>{const p=r.value.trim().toLowerCase(),g=t.wordsList.flatMap(m=>Object.entries(m.directions).filter(([S,P])=>P).map(([S])=>({...m,direction:S})));return p?g.filter(m=>m.word.toLowerCase().includes(p)||m.category.toLowerCase().includes(p)||m.direction.toLowerCase().includes(p)):g}),l=()=>{s.value=!s.value},c=p=>{i.value&&!i.value.contains(p.target)&&(s.value=!1)},u=()=>{console.log("Search value:",r.value)},d=p=>{e.setWord(p),n.push(`/words/${encodeURIComponent(p.direction)}`)};return Jr(()=>{document.addEventListener("click",c)}),pu(()=>{document.removeEventListener("click",c)}),{searchValue:r,filteredWords:o,isOpen:s,dropdownRef:i,toggleDropdown:l,handleSubmit:u,handleWordClick:d}}const GR={class:"search__results search-results filling filling--without-focus"},QR={key:0,class:"search-results__list results-list"},YR=["onClick"],JR={key:1,class:"search-results__no-results no-results"},jy=He({__name:"Search",setup(t){const{searchValue:e,filteredWords:n,isOpen:r,dropdownRef:s,toggleDropdown:i,handleSubmit:o,handleWordClick:l}=KR();return(c,u)=>(X(),oe("div",{class:We(["search",{"search--active":Y(r)}])},[N("form",{class:"search__form search-form",ref_key:"dropdownRef",ref:s,action:"#",method:"post",onClick:u[2]||(u[2]=(...d)=>Y(i)&&Y(i)(...d))},[tn(N("input",{class:"search-form__input filling filling--without-focus",type:"text",placeholder:"Search","onUpdate:modelValue":u[0]||(u[0]=d=>Ye(e)?e.value=d:null)},null,512),[[mn,Y(e)]]),N("button",{class:"search-form__btn",type:"button",onClick:u[1]||(u[1]=(...d)=>Y(o)&&Y(o)(...d))},u[4]||(u[4]=[N("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[N("path",{d:"M6.74626 12.4959C3.56372 12.4959 1 9.93141 1 6.74794C1 3.56446 3.56372 1 6.74626 1C9.9288 1 12.4925 3.56446 12.4925 6.74794C12.4925 9.93141 9.9288 12.4959 6.74626 12.4959ZM6.74626 1.8843C4.04994 1.8843 1.88404 4.05083 1.88404 6.74794C1.88404 9.44505 4.04994 11.6116 6.74626 11.6116C9.44258 11.6116 11.6085 9.44505 11.6085 6.74794C11.6085 4.05083 9.44258 1.8843 6.74626 1.8843Z",fill:"white"}),N("path",{d:"M11.0313 10.4062L15.0006 14.3767L14.3756 15.0019L10.4062 11.0314L11.0313 10.4062Z",fill:"white"})],-1)]))],512),N("div",GR,[Y(n).length?(X(),oe("ul",QR,[(X(!0),oe(Be,null,En(Y(n),(d,p)=>(X(),oe("li",{key:p,class:"results-list__item"},[N("div",{class:"results-list__link",to:"/words/all",onClick:g=>Y(l)(d)},[N("span",null,rt(d.word),1),N("span",null,rt(d.direction+" words"),1)],8,YR)]))),128))])):(X(),oe("p",JR," Nothing found "))]),(X(),xt(Bs,{to:"body"},[de(Ya,{name:"opacity"},{default:St(()=>[Y(r)?(X(),oe("div",{class:"search__cover cover",onClick:u[3]||(u[3]=(...d)=>Y(i)&&Y(i)(...d)),key:"search-cover"})):ct("",!0)]),_:1})]))],2))}});function XR(){const t=ge([]),e=ge({all:0,repeat:0,learned:0});function n(s){return t.value.filter(i=>i.directions[s]===!0).length}function r(s){t.value=s,e.value.all=n("all"),e.value.repeat=n("repeat"),e.value.learned=n("learned")}return{coutsData:e,getCounts:r}}const ZR={class:"menu"},e2={class:"menu__list menu-list"},t2={class:"card__head card-head"},n2={class:"card-head__icon filling filling--round"},r2=["src"],s2={class:"card-head__digits digits"},i2={class:"digits__digit"},o2={class:"card__title"},a2=He({__name:"Menu",setup(t){const e=Rr(),n=we(()=>e.wordsList),{coutsData:r,getCounts:s}=XR(),i=ge([{icon:"/Re.Words//images/all-icon.svg",count:we(()=>r.value.all),title:"All",router:"/words/all"},{icon:"/Re.Words//images/repeat-icon.svg",count:we(()=>r.value.repeat),title:"Repeat",router:"/words/repeat"},{icon:"/Re.Words//images/learned-icon.svg",count:we(()=>r.value.learned),title:"Learned",router:"/words/learned"}]);return Jr(async()=>{await e.reloadWords(),s(n.value)}),mt(()=>e.wordsList,()=>{s(n.value)}),(o,l)=>{const c=gu("router-link");return X(),oe("nav",ZR,[N("ul",e2,[(X(!0),oe(Be,null,En(i.value,(u,d)=>(X(),oe("li",{key:d,class:"menu-list__item"},[de(c,{class:"menu-list__link card filling",to:u.router},{default:St(()=>[N("div",t2,[N("div",n2,[N("img",{class:"card-head__icon-img",src:u.icon,alt:"icon"},null,8,r2)]),N("div",s2,[N("div",i2,rt(u.count),1),l[0]||(l[0]=N("svg",{width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[N("path",{d:"M4.3148 4.9981L1.12138 8.36512C1.03345 8.45761 0.985075 8.58127 0.985075 8.71312C0.985075 8.84505 1.03345 8.96863 1.12138 9.06127L1.4012 9.35615C1.489 9.44893 1.60635 9.5 1.73141 9.5C1.85647 9.5 1.97369 9.44893 2.06155 9.35615L5.86383 5.34741C5.95204 5.25449 6.00035 5.13032 6 4.99832C6.00035 4.86573 5.95211 4.74171 5.86383 4.64871L2.06509 0.643854C1.97723 0.551074 1.86001 0.5 1.73488 0.5C1.60982 0.5 1.4926 0.551074 1.40467 0.643854L1.12492 0.938732C0.942879 1.13066 0.942879 1.4431 1.12492 1.63495L4.3148 4.9981Z",fill:"white"})],-1))])]),N("h2",o2,rt(u.title),1)]),_:2},1032,["to"])]))),128))])])}}});function qy(){const t=ge(!1);function e(){t.value=!t.value}return{isPopupVisible:t,togglePopup:e}}const l2={class:"popup",key:"addPopup"},c2={class:"container"},u2={class:"popup__inner"},h2={class:"popup__title"},Wy=He({__name:"Popup",props:{isShow:{type:Boolean}},setup(t){return(e,n)=>(X(),xt(Bs,{to:"body"},[de(Ya,{name:"opacity"},{default:St(()=>[e.isShow?(X(),oe("div",l2,[N("div",c2,[N("div",u2,[N("h2",h2,[Ed(e.$slots,"header")]),Ed(e.$slots,"content")])])])):ct("",!0)]),_:3})]))}});function d2(t){const e=In();let n=!0;const r={languagesStateFromError:!1,languagesStateToError:!1,wordError:!1,translateError:!1,addToError:!1};return[{field:t.languagesState.from,errorMessage:"Please select a language: from"},{field:t.languagesState.to,errorMessage:"Please select a language: to"},{field:t.word,errorMessage:"Please enter a word"},{field:t.translate,errorMessage:"Please enter a translation"},{field:t.addTo,errorMessage:"Please select a direction"}].forEach(({field:i,errorMessage:o})=>{var c;let l=(typeof i.chosenValue=="string"?!i.chosenValue:!((c=i.chosenValue)!=null&&c.longString))&&!i.value;i===t.addTo&&(l=!t.addTo.chosenValue),l&&(n=!1,e.showAlert(o,"alert--error"),i===t.languagesState.from&&(r.languagesStateFromError=!0),i===t.languagesState.to&&(r.languagesStateToError=!0),i===t.word&&(r.wordError=!0),i===t.translate&&(r.translateError=!0),i===t.addTo&&(r.addToError=!0))}),n?!0:r}const _s={Afrikaans:"af",Albanian:"sq",Amharic:"am",Arabic:"ar",Armenian:"hy",Azerbaijani:"az",Basque:"eu",Belarusian:"be",Bengali:"bn",Bosnian:"bs",Bulgarian:"bg",Catalan:"ca",Cebuano:"ceb",Chinese:"zh",Corsican:"co",Croatian:"hr",Czech:"cs",Danish:"da",Dutch:"nl",English:"en",Esperanto:"eo",Estonian:"et",Finnish:"fi",French:"fr",Frisian:"fy",Galician:"gl",Georgian:"ka",German:"de",Greek:"el",Gujarati:"gu","Haitian Creole":"ht",Hausa:"ha",Hawaiian:"haw",Hebrew:"he",Hindi:"hi",Hmong:"hmn",Hungarian:"hu",Icelandic:"is",Igbo:"ig",Indonesian:"id",Irish:"ga",Italian:"it",Japanese:"ja",Javanese:"jv",Kannada:"kn",Kazakh:"kk",Khmer:"km",Kinyarwanda:"rw",Korean:"ko",Kurdish:"ku",Kyrgyz:"ky",Lao:"lo",Latin:"la",Latvian:"lv",Lithuanian:"lt",Luxembourgish:"lb",Macedonian:"mk",Malagasy:"mg",Malay:"ms",Malayalam:"ml",Maltese:"mt",Maori:"mi",Marathi:"mr",Mongolian:"mn",Myanmar:"my",Nepali:"ne",Norwegian:"no",Odia:"or",Pashto:"ps",Persian:"fa",Polish:"pl",Portuguese:"pt",Punjabi:"pa",Romanian:"ro",Russian:"ru",Samoan:"sm","Scots Gaelic":"gd",Serbian:"sr",Sesotho:"st",Shona:"sn",Sindhi:"sd",Sinhala:"si",Slovak:"sk",Slovenian:"sl",Somali:"so",Spanish:"es",Sundanese:"su",Swahili:"sw",Swedish:"sv",Tagalog:"tl",Tajik:"tg",Tamil:"ta",Tatar:"tt",Telugu:"te",Thai:"th",Turkish:"tr",Turkmen:"tk",Ukrainian:"uk",Urdu:"ur",Uyghur:"ug",Uzbek:"uz",Vietnamese:"vi",Welsh:"cy",Xhosa:"xh",Yiddish:"yi",Yoruba:"yo",Zulu:"zu"};function Ko(t,e){return e?[...Object.keys(_s)].filter(n=>n!==t):[...Object.keys(_s)].filter(n=>n!==t)}async function f2(t){const e=Rr(),n=In(),r=Ys(),s=_o(),i={id:E_(),word:t.word.value,translate:t.translate.value,fromLanguage:t.languagesState.from.chosenValue.longString,fromLanguageCode:t.languagesState.from.chosenValue.shortString,toLanguage:t.languagesState.to.chosenValue.longString,toLanguageCode:t.languagesState.to.chosenValue.shortString,directions:{all:!0,repeat:t.addTo.chosenValue==="repeat words",learned:t.addTo.chosenValue==="learned words"},category:t.category.value!==""?t.category.value:"Uncategorized",createdAt:new Date};if(r.userId)try{await HR(yl(s,`users/${r.userId}/words`,i.id),i),n.showAlert("Word added successfully!","alert--success"),e.reloadWords()}catch(o){n.showAlert("Failed to add word: "+o.message,"alert--error")}else n.showAlert("User not authenticated","alert--error")}async function p2(t){const e=Rr(),n=In(),r=Ys(),s=_o();if(!r.userId){n.showAlert("User not authenticated","alert--error");return}try{const i=t.map(({id:o})=>zR(yl(s,`users/${r.userId}/words`,o)));await Promise.all(i),n.showAlert("Words deleted successfully!","alert--success"),e.reloadWords()}catch(i){n.showAlert("Failed to delete words: "+i.message,"alert--error")}}async function g2(t,e,n){const r=Rr(),s=In(),i=Ys(),o=_o();if(!i.userId){s.showAlert("User not authenticated","alert--error");return}try{const l=t.map(({id:c})=>By(yl(o,`users/${i.userId}/words`,c),{word:e,translate:n}));await Promise.all(l),s.showAlert("Words updated successfully!","alert--success"),r.reloadWords()}catch(l){s.showAlert("Failed to update words: "+l.message,"alert--error")}}async function Fp(t,e){const n=Rr(),r=In(),s=Ys(),i=_o();if(!s.userId){r.showAlert("User not authenticated","alert--error");return}const o=e==="repeat"?{"directions.learned":!1,"directions.repeat":!0}:{"directions.repeat":!1,"directions.learned":!0};try{const l=t.map(({id:c})=>By(yl(i,`users/${s.userId}/words`,c),o));await Promise.all(l),r.showAlert("Words updated successfully!","alert--success"),n.reloadWords()}catch(l){r.showAlert("Failed to update words: "+l.message,"alert--error")}}function m2(){const t=Rr(),e=sl(),n=ge({languagesState:{from:{langs:[...Object.keys(_s)],chosenValue:{longString:"",shortString:""},placeholder:"From",error:!1},to:{langs:[...Object.keys(_s)],chosenValue:{longString:"",shortString:""},placeholder:"To",error:!1}},word:{value:"",error:!1,placeholder:"Word"},translate:{value:"",error:!1,placeholder:"Translate"},category:{value:"",placeholder:"Category"},addTo:{directions:["all words","repeat words","learned words"],chosenValue:"all words",placeholder:"Add to:",error:!1}}),r=ge({languagesStateFromError:!1,languagesStateToError:!1,wordError:!1,translateError:!1,addToError:!1});mt(()=>n.value.languagesState.from.chosenValue.longString,l=>{const c=_s[l];n.value.languagesState.from.chosenValue.shortString=c,n.value.languagesState.to.langs=Ko(l,!0)}),mt(()=>n.value.languagesState.to.chosenValue.longString,l=>{const c=_s[l];n.value.languagesState.to.chosenValue.shortString=c,n.value.languagesState.from.langs=Ko(l,!1)});function s(){n.value.word.value="",n.value.translate.value=""}async function i(){const l=d2(n.value);if(typeof l=="object"&&l!==null)r.value=l;else{Object.keys(r.value).forEach(c=>r.value[c]=!1);try{e.showLoader(),await f2(n.value),t.reloadWords(),s()}catch(c){console.error(c)}finally{e.hideLoader()}}}function o(){const{from:l,to:c}=n.value.languagesState,u={...l};n.value.languagesState.from.chosenValue={...c.chosenValue},n.value.languagesState.from.langs=Ko(c.chosenValue.longString,!1),n.value.languagesState.to.chosenValue={...u.chosenValue},n.value.languagesState.to.langs=Ko(u.chosenValue.longString,!0)}return{form:n,formErrors:r,submitForm:i,replaceLang:o}}function _2(t){return ru()?(Jp(t),!0):!1}function Ni(t){return typeof t=="function"?t():Y(t)}const Hy=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const y2=Object.prototype.toString,v2=t=>y2.call(t)==="[object Object]",la=()=>{},w2=E2();function E2(){var t,e;return Hy&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}const zy=Hy?window:void 0;function yi(t){var e;const n=Ni(t);return(e=n==null?void 0:n.$el)!=null?e:n}function cc(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=zy):[e,n,r,s]=t,!e)return la;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(d=>d()),i.length=0},l=(d,p,g,m)=>(d.addEventListener(p,g,m),()=>d.removeEventListener(p,g,m)),c=mt(()=>[yi(e),Ni(s)],([d,p])=>{if(o(),!d)return;const g=v2(p)?{...p}:p;i.push(...n.flatMap(m=>r.map(T=>l(d,m,T,g))))},{immediate:!0,flush:"post"}),u=()=>{c(),o()};return _2(u),u}let Up=!1;function T2(t,e,n={}){const{window:r=zy,ignore:s=[],capture:i=!0,detectIframe:o=!1}=n;if(!r)return la;w2&&!Up&&(Up=!0,Array.from(r.document.body.children).forEach(S=>S.addEventListener("click",la)),r.document.documentElement.addEventListener("click",la));let l=!0;const c=S=>Ni(s).some(P=>{if(typeof P=="string")return Array.from(r.document.querySelectorAll(P)).some(O=>O===S.target||S.composedPath().includes(O));{const O=yi(P);return O&&(S.target===O||S.composedPath().includes(O))}});function u(S){const P=Ni(S);return P&&P.$.subTree.shapeFlag===16}function d(S,P){const O=Ni(S),L=O.$.subTree&&O.$.subTree.children;return L==null||!Array.isArray(L)?!1:L.some(F=>F.el===P.target||P.composedPath().includes(F.el))}const p=S=>{const P=yi(t);if(S.target!=null&&!(!(P instanceof Element)&&u(t)&&d(t,S))&&!(!P||P===S.target||S.composedPath().includes(P))){if(S.detail===0&&(l=!c(S)),!l){l=!0;return}e(S)}};let g=!1;const m=[cc(r,"click",S=>{g||(g=!0,setTimeout(()=>{g=!1},0),p(S))},{passive:!0,capture:i}),cc(r,"pointerdown",S=>{const P=yi(t);l=!c(S)&&!!(P&&!S.composedPath().includes(P))},{passive:!0}),o&&cc(r,"blur",S=>{setTimeout(()=>{var P;const O=yi(t);((P=r.document.activeElement)==null?void 0:P.tagName)==="IFRAME"&&!(O!=null&&O.contains(r.document.activeElement))&&e(S)},0)})].filter(Boolean);return()=>m.forEach(S=>S())}const I2=["placeholder"],A2=["onClick"],b2=["value"],ca=He({__name:"CustomSelect",props:{options:{},modelValue:{},filterExcludeValue:{},placeholder:{},error:{type:Boolean},withSearch:{type:Boolean}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,r=e,s=ge(!1),i=ge(null),o=ge(""),l=we({get:()=>n.modelValue,set:g=>r("update:modelValue",g)}),c=we(()=>l.value||n.placeholder),u=we(()=>{let g=n.options.filter(m=>m!==n.filterExcludeValue);return n.withSearch?g.filter(m=>m.toLowerCase().includes(o.value.toLowerCase())):g}),d=()=>{s.value=!s.value},p=g=>{l.value=g,o.value=g,s.value=!1};return T2(i,()=>s.value=!1),mt(l,g=>{o.value=g}),(g,m)=>(X(),oe("div",{class:"form__select select",ref_key:"selectRef",ref:i},[N("div",{class:We(["select__custom-select custom-select",{open:s.value,"select--search":n.withSearch}]),onClick:d},[n.withSearch?tn((X(),oe("input",{key:0,type:"text","onUpdate:modelValue":m[0]||(m[0]=T=>o.value=T),placeholder:Y(n.placeholder),class:We(["select-selected filling",{"filling--error":n.error}]),onFocus:m[1]||(m[1]=T=>s.value=!0),onClick:m[2]||(m[2]=ji(()=>{},["stop"]))},null,42,I2)),[[mn,o.value]]):(X(),oe("div",{key:1,class:We(["select-selected filling",{"filling--error":n.error}])},rt(g.placeholder)+" "+rt(c.value),3)),N("div",{class:We(["select-items filling filling--without-focus",{"filling--error":n.error}])},[(X(!0),oe(Be,null,En(u.value,T=>(X(),oe("div",{key:T,onClick:ji(S=>p(T),["stop"]),class:We({selected:T===l.value})},[N("span",null,rt(T),1)],10,A2))),128))],2)],2),tn(N("select",{"onUpdate:modelValue":m[3]||(m[3]=T=>l.value=T),class:"real-select",style:{display:"none"}},[(X(!0),oe(Be,null,En(n.options,T=>(X(),oe("option",{key:T,value:T},rt(T),9,b2))),128))],512),[[lm,l.value]])],512))}}),C2={class:"adder"},S2={class:"adder__form form"},R2={class:"form__wrapper"},P2={class:"form__box form-box"},k2=["placeholder"],V2={class:"form__box form-box"},O2=["placeholder"],D2={class:"form__box form-box"},N2=["placeholder"],L2={class:"form__buttons buttons"},x2=He({__name:"AddWordForm",emits:["updatePopupVisibility"],setup(t,{emit:e}){const{form:n,formErrors:r,submitForm:s,replaceLang:i}=m2(),o=e;return(l,c)=>(X(),oe("div",C2,[N("form",S2,[N("div",R2,[de(ca,{options:Y(n).languagesState.from.langs,modelValue:Y(n).languagesState.from.chosenValue.longString,"onUpdate:modelValue":c[0]||(c[0]=u=>Y(n).languagesState.from.chosenValue.longString=u),placeholder:Y(n).languagesState.from.placeholder,error:Y(r).languagesStateFromError,selectedOptionWithPlaceholder:!1,withSearch:!0},null,8,["options","modelValue","placeholder","error"]),N("div",{class:"form__replace filling filling--round",onClick:c[1]||(c[1]=(...u)=>Y(i)&&Y(i)(...u))},c[9]||(c[9]=[N("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[N("path",{d:"M4.42684 4.8332H12.4215L11.3328 5.85379C11.1343 6.03876 11.0174 6.295 11.0079 6.56614C10.9983 6.83729 11.0968 7.10113 11.2818 7.29963C11.4668 7.49813 11.723 7.61502 11.9942 7.62459C12.2653 7.63416 12.5291 7.53562 12.7276 7.35066L15.6874 4.56105C15.7861 4.46302 15.8645 4.34642 15.918 4.21797C15.9714 4.08952 15.999 3.95175 15.999 3.81261C15.999 3.67347 15.9714 3.53571 15.918 3.40726C15.8645 3.27881 15.7861 3.16221 15.6874 3.06418L12.7276 0.274565C12.5291 0.0896024 12.2653 -0.00893263 11.9942 0.000637268C11.723 0.0102072 11.4668 0.127098 11.2818 0.325595C11.0968 0.524091 10.9983 0.787935 11.0079 1.05908C11.0174 1.33023 11.1343 1.58647 11.3328 1.77143L12.4215 2.79202H4.42684C4.15616 2.79202 3.89657 2.89955 3.70517 3.09095C3.51378 3.28234 3.40625 3.54193 3.40625 3.81261C3.40625 4.08329 3.51378 4.34288 3.70517 4.53428C3.89657 4.72568 4.15616 4.8332 4.42684 4.8332Z",fill:"white"}),N("path",{d:"M3.27132 14.835C3.36961 14.9266 3.48497 14.9979 3.61082 15.0449C3.73667 15.0919 3.87055 15.1137 4.00481 15.109C4.13907 15.1042 4.27108 15.0731 4.3933 15.0173C4.51553 14.9616 4.62557 14.8823 4.71716 14.784C4.80874 14.6857 4.88007 14.5704 4.92707 14.4445C4.97407 14.3187 4.99582 14.1848 4.99109 14.0505C4.98635 13.9163 4.95521 13.7842 4.89945 13.662C4.8437 13.5398 4.76441 13.4298 4.66613 13.3382L3.5775 12.3176H11.5721C11.8428 12.3176 12.1024 12.2101 12.2938 12.0187C12.4852 11.8273 12.5927 11.5677 12.5927 11.297C12.5927 11.0263 12.4852 10.7667 12.2938 10.5753C12.1024 10.3839 11.8428 10.2764 11.5721 10.2764H3.5775L4.66613 9.25581C4.86463 9.07084 4.98152 8.8146 4.99109 8.54346C5.00066 8.27231 4.90212 8.00847 4.71716 7.80997C4.53219 7.61147 4.27596 7.49458 4.00481 7.48501C3.73366 7.47544 3.46982 7.57398 3.27132 7.75894L0.311609 10.5486C0.212864 10.6466 0.134494 10.7632 0.0810139 10.8916C0.0275334 11.0201 0 11.1578 0 11.297C0 11.4361 0.0275334 11.5739 0.0810139 11.7023C0.134494 11.8308 0.212864 11.9474 0.311609 12.0454L3.27132 14.835Z",fill:"white"})],-1)])),de(ca,{options:Y(n).languagesState.to.langs,modelValue:Y(n).languagesState.to.chosenValue.longString,"onUpdate:modelValue":c[2]||(c[2]=u=>Y(n).languagesState.to.chosenValue.longString=u),placeholder:Y(n).languagesState.to.placeholder,error:Y(r).languagesStateToError,selectedOptionWithPlaceholder:!1,withSearch:!0},null,8,["options","modelValue","placeholder","error"])]),N("div",P2,[tn(N("input",{class:We(["form-box__input filling filling--input filling--notblured",{"filling--error":Y(r).wordError}]),type:"text",placeholder:Y(n).word.placeholder,"onUpdate:modelValue":c[3]||(c[3]=u=>Y(n).word.value=u)},null,10,k2),[[mn,Y(n).word.value]])]),N("div",V2,[tn(N("input",{class:We(["form-box__input filling filling--input filling--notblured",{"filling--error":Y(r).translateError}]),type:"text",placeholder:Y(n).translate.placeholder,"onUpdate:modelValue":c[4]||(c[4]=u=>Y(n).translate.value=u)},null,10,O2),[[mn,Y(n).translate.value]])]),N("div",D2,[tn(N("input",{class:"form-box__input filling filling--input filling--notblured",type:"text",placeholder:Y(n).category.placeholder,"onUpdate:modelValue":c[5]||(c[5]=u=>Y(n).category.value=u)},null,8,N2),[[mn,Y(n).category.value]])]),de(ca,{options:Y(n).addTo.directions,modelValue:Y(n).addTo.chosenValue,"onUpdate:modelValue":c[6]||(c[6]=u=>Y(n).addTo.chosenValue=u),placeholder:Y(n).addTo.placeholder,error:Y(r).addToError,withSearch:!1},null,8,["options","modelValue","placeholder","error"]),N("div",L2,[N("div",{class:"buttons__btn btn btn--transparent filling--notblured",onClick:c[7]||(c[7]=u=>o("updatePopupVisibility"))}," Cancel "),N("button",{class:"buttons__btn btn btn--white",type:"button",onClick:c[8]||(c[8]=ji((...u)=>Y(s)&&Y(s)(...u),["prevent"]))}," Add ")])])]))}}),Ky=He({__name:"AddWordButton",setup(t){const{isPopupVisible:e,togglePopup:n}=qy();return(r,s)=>(X(),oe("div",{class:"add",onClick:s[0]||(s[0]=(...i)=>Y(n)&&Y(n)(...i))},[s[2]||(s[2]=N("div",{class:"add__icon filling filling--round"},[N("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[N("path",{d:"M7 1V13",stroke:"white","stroke-width":"2","stroke-linecap":"round"}),N("path",{d:"M1 7L13 7",stroke:"white","stroke-width":"2","stroke-linecap":"round"})])],-1)),de(Wy,{isShow:Y(e)},{header:St(()=>s[1]||(s[1]=[Ga("Add word")])),content:St(()=>[de(x2,{onUpdatePopupVisibility:Y(n)},null,8,["onUpdatePopupVisibility"])]),_:1},8,["isShow"])]))}}),M2={class:"home page"},F2={class:"container"},U2={class:"home__inner"},$2={class:"home__head"},B2=He({__name:"MenuView",setup(t){return(e,n)=>(X(),oe("div",M2,[N("div",F2,[N("div",U2,[N("div",$2,[de(T_,{title:"Words",isBack:!1,class:"home__head"}),de(jy,{class:"home__search"})]),de(a2,{class:"home__menu"})])]),(X(),xt(Bs,{to:"body"},[de(Ky)]))]))}}),j2={class:"tub__text"},q2={class:"tub__quantity"},$p=He({__name:"Tub",props:{item:{},index:{},isActive:{type:Boolean}},emits:["updateActiveTub"],setup(t){return(e,n)=>{var r,s;return X(),oe("div",{class:We(["tubs__tub tub filling",{"tub--active":e.isActive}]),onClick:n[0]||(n[0]=i=>e.$emit("updateActiveTub",e.index))},[N("div",j2,rt((r=e.item)==null?void 0:r.text),1),N("div",q2,rt((s=e.item)==null?void 0:s.count),1)],2)}}}),W2={class:"tubs"},H2={class:"tubs__section"},z2={class:"tubs__list"},K2={class:"tubs__section"},G2={class:"tubs__list"},Q2=He({__name:"Tubs",props:{langs:{},categories:{},activeLangTub:{},activeCategoryTub:{}},emits:["updateActiveTub"],setup(t,{emit:e}){const n=e;return(r,s)=>(X(),oe("div",W2,[N("div",H2,[N("div",z2,[(X(!0),oe(Be,null,En(r.langs,(i,o)=>(X(),xt($p,{key:o,item:i,index:o,isActive:o===r.activeLangTub,onUpdateActiveTub:l=>{n("updateActiveTub",o,"langs")}},null,8,["item","index","isActive","onUpdateActiveTub"]))),128))])]),N("div",K2,[N("div",G2,[(X(!0),oe(Be,null,En(r.categories,(i,o)=>(X(),xt($p,{key:o,item:i,index:o,isActive:o===r.activeCategoryTub,onUpdateActiveTub:l=>{n("updateActiveTub",o,"categories")}},null,8,["item","index","isActive","onUpdateActiveTub"]))),128))])])]))}});function Gy(){const t=In();async function e(r){try{const s=r.map(i=>`${i.word} - ${i.translate}`).join(`
`);if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(s);else{const i=document.createElement("textarea");i.value=s,document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i)}t.showAlert("Copied successfully!","alert--success")}catch{t.showAlert("Copy failed!","alert--error")}}async function n(r,s,i){if(s.length)switch(r){case"Copy":e(s);break;case"Add to learned":Fp(s,"learned");break;case"Add to repeat":Fp(s,"repeat");break;case"Edit":i&&g2(s,i.word,i.translation);break;case"Delete":p2(s);break}}return{handleOption:n}}function Y2(){const t=ge(!1),e=ge({});function n(i,o,l){o?e.value[i]={state:!0,word:l}:delete e.value[i],t.value=Object.keys(e.value).length>0}const r=we(()=>Object.values(e.value).map(i=>i.word));function s(){e.value={},t.value=!1}return{withCheckboxes:t,checkboxesSelectedMap:e,selectedWords:r,updateSelect:n,resetSelect:s}}function J2(t=250){const e=ge(null),n=ge(null),r=ge(0),s=ge(!1),i=ge(null),o=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),l=we(()=>r.value===0?1:1-r.value/100),c=we(()=>i.value?{top:i.value.top,translateY:window.innerHeight/2-(i.value.top+i.value.height/2)}:{top:0,translateY:0}),u=we(()=>({transform:`scale(${l.value}) translateY(${s.value?c.value.translateY+"px":"0"})`})),d=we(()=>i.value?{transform:`translateY(${c.value.translateY}px)`,top:`${c.value.top+i.value.height+12}px`,left:`${i.value.left}px`}:{transform:"translateY(0px)",top:"0px"}),p=()=>{r.value+=.5,n.value=requestAnimationFrame(p)},g=O=>{m(),S(O),s.value=!1,n.value=requestAnimationFrame(p),e.value=window.setTimeout(()=>{s.value=!0,cancelAnimationFrame(n.value),r.value=0},o?t:0)},m=()=>{if(s.value){P(),s.value=!1;return}},T=()=>{r.value>0?(r.value-=.5,n.value=requestAnimationFrame(T)):(cancelAnimationFrame(n.value),n.value=null)},S=O=>{const F=O.currentTarget.getBoundingClientRect();i.value=F},P=()=>{e.value!==null&&(clearTimeout(e.value),e.value=null),cancelAnimationFrame(n.value),n.value=null,s.value||(n.value=requestAnimationFrame(T))};return{pressTime:r,isLongPress:s,scaleValue:l,wordPosition:c,handleTouchStart:g,handleTouchEnd:P,disableLongPress:m,wordComputedPosition:u,optionsPosition:d,isMobile:o}}const X2={class:"options"},Z2={class:"options-block__list"},eP=["onPointerup"],tP={key:0,class:"options-block__text"},nP={class:"options-block__icon"},rP=["src"],Qy=He({__name:"WordOptions",props:{optionsPosition:{},isShow:{type:Boolean},variant:{}},emits:["updateOption","closeOptions"],setup(t,{emit:e}){const n=t,r=Ht("optionsType"),s=we(()=>r==="all"?[{optionName:"Add to learned",optionIcon:"/Re.Words//images/learned-icon.svg"},{optionName:"Add to repeat",optionIcon:"/Re.Words//images/repeat-icon.svg"}]:r==="repeat"?[{optionName:"Add to learned",optionIcon:"/Re.Words//images/learned-icon.svg"}]:r==="learned"?[{optionName:"Add to repeat",optionIcon:"/Re.Words//images/repeat-icon.svg"}]:[]),i=we(()=>[{optionName:"Copy",optionIcon:"/Re.Words//images/copy-icon.svg"},...s.value,{optionName:"Edit",optionIcon:"/Re.Words//images/edit-icon.svg"},{optionName:"Delete",optionIcon:"/Re.Words//images/delete-icon.svg"},{optionName:"Select",optionIcon:"/Re.Words//images/select-icon.svg"}]),o=we(()=>[{optionName:"Copy",optionIcon:"/Re.Words//images/copy-icon.svg"},...s.value,{optionName:"Delete",optionIcon:"/Re.Words//images/delete-icon.svg"}]),l=we(()=>n.variant==="single"?i.value:o.value),c=we(()=>n.variant==="single"?n.optionsPosition:{bottom:"30px",left:"50%",transform:"translateX(-50%)"}),u=e;return(d,p)=>(X(),xt(Bs,{to:"body"},[N("div",X2,[de(va,{name:"opacity"},{default:St(()=>[d.variant==="single"&&d.isShow?(X(),oe("div",{key:"options-cover",class:"options__cover cover",onPointerdown:p[0]||(p[0]=g=>u("closeOptions"))},null,32)):ct("",!0),d.isShow?(X(),oe("div",{key:"options-block",class:We(["options-block filling filling--without-focus",{"options-block--multiple":d.variant==="multiple","filling--notblured":d.variant==="single"}]),style:$s(c.value)},[N("ul",Z2,[(X(!0),oe(Be,null,En(l.value,(g,m)=>(X(),oe("li",{class:We(["options-block__item",{"options-block__item--delete":g.optionName==="Delete"}]),key:g.optionName,onPointerup:T=>u("updateOption",g.optionName)},[d.variant==="single"?(X(),oe("div",tP,rt(g.optionName),1)):ct("",!0),N("div",nP,[N("img",{src:g.optionIcon,alt:"icon"},null,8,rP)])],42,eP))),128))])],6)):ct("",!0)]),_:1})])]))}}),sP={class:"edit"},iP={class:"edit__form form"},oP={class:"form__box form-box"},aP={class:"form__box form-box"},lP={class:"form__buttons buttons"},cP=He({__name:"EditWord",emits:["updatePopupVisibility","updateWord"],setup(t,{emit:e}){const n=In(),r=e,s=ge({word:"",translation:""}),i=ge({wordError:!1,translateError:!1});function o(){return s.value.word.length===0?(i.value.wordError=!0,n.showAlert("Word is empty","alert--error")):i.value.wordError=!1,s.value.translation.length===0?(i.value.translateError=!0,n.showAlert("Translation is empty","alert--error")):i.value.translateError=!1,i.value.wordError||i.value.translateError}function l(){o()||(r("updateWord",s.value),r("updatePopupVisibility"))}return(c,u)=>(X(),oe("div",sP,[N("form",iP,[N("div",oP,[tn(N("input",{class:We(["form-box__input filling filling--input filling--notblured",{"filling--error":i.value.wordError}]),type:"text",placeholder:"New word","onUpdate:modelValue":u[0]||(u[0]=d=>s.value.word=d)},null,2),[[mn,s.value.word]])]),N("div",aP,[tn(N("input",{class:We(["form-box__input filling filling--input filling--notblured",{"filling--error":i.value.translateError}]),type:"text",placeholder:"New translation","onUpdate:modelValue":u[1]||(u[1]=d=>s.value.translation=d)},null,2),[[mn,s.value.translation]])]),N("div",lP,[N("div",{class:"buttons__btn btn btn--transparent filling--notblured",onClick:u[2]||(u[2]=d=>r("updatePopupVisibility"))}," Cancel "),N("button",{class:"buttons__btn btn btn--white",type:"button",onClick:ji(l,["prevent"])}," Apply ")])])]))}}),uP={key:0,width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},hP={class:"word__raw"},dP={class:"word__index"},fP={class:"word__translate"},pP={key:0,class:"word__dots"},gP=He({__name:"Word",props:{word:{},index:{},id:{},isSelected:{type:Boolean},withCheckbox:{type:Boolean},isActive:{type:Boolean}},emits:["updateSelect","updateActiveWordRef"],setup(t,{emit:e}){const n=t,r=e,{isPopupVisible:s,togglePopup:i}=qy(),{isLongPress:o,handleTouchStart:l,handleTouchEnd:c,disableLongPress:u,wordComputedPosition:d,optionsPosition:p,isMobile:g}=J2(),{handleOption:m}=Gy();function T(H,z){const b=[n.word];if(H==="Select")r("updateSelect",n.index,!n.isSelected,n.word);else if(H==="Edit"&&!z){i(),setTimeout(u,500);return}else m(H,b,z);u()}const S=ge(0),P=ge(!1),O=(H,z)=>{n.withCheckbox||(z==="start"&&(P.value=!1,S.value=H.clientY,l(H)),z==="end"&&c())},L=H=>{const z=H.clientY;Math.abs(z-S.value)>10&&(P.value=!0,u())},F=ge(null),q=()=>{n.isActive&&F.value&&r("updateActiveWordRef",F.value)};return Jr(()=>{q()}),mt(()=>n.isActive,H=>{H&&q()}),(H,z)=>(X(),oe("div",{class:We(["word",{"word--active":Y(o)}]),ref_key:"wordRef",ref:F},[H.withCheckbox?(X(),oe("div",{key:0,class:"word__checkbox checkbox filling filling--round",onClick:z[0]||(z[0]=b=>r("updateSelect",H.index,!H.isSelected,H.word))},[de(Ya,{name:"opacity"},{default:St(()=>[H.isSelected?(X(),oe("svg",uP,z[4]||(z[4]=[N("path",{d:"M2.25 6.0013L6.08333 9.83464L13.75 2.16797",stroke:"#EEEEEE","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))):ct("",!0)]),_:1})])):ct("",!0),N("div",{class:We(["word__inner filling",{"filling--active":H.isActive,"word__width-less":H.withCheckbox}]),onPointerdown:z[1]||(z[1]=b=>O(b,"start")),onPointerup:z[2]||(z[2]=b=>O(b,"end")),onPointermove:L,style:$s(Y(d))},[N("div",hP,[N("span",dP,rt(H.index+1+"."),1),N("span",null,rt(H.word.word),1)]),N("div",fP,rt(H.word.translate),1),Y(g)?ct("",!0):(X(),oe("div",pP,z[5]||(z[5]=[N("span",null,null,-1),N("span",null,null,-1),N("span",null,null,-1)])))],38),de(Qy,{isShow:Y(o),optionsPosition:Y(p),onUpdateOption:T,onCloseOptions:Y(u),variant:"single"},null,8,["isShow","optionsPosition","onCloseOptions"]),de(Wy,{isShow:Y(s)},{header:St(()=>z[6]||(z[6]=[Ga("Edit word")])),content:St(()=>[de(cP,{onUpdatePopupVisibility:Y(i),onUpdateWord:z[3]||(z[3]=b=>T("Edit",b))},null,8,["onUpdatePopupVisibility"])]),_:1},8,["isShow"])],2))}}),mP={class:"words"},_P={class:"words__list words-list"},yP=He({__name:"Words",props:{wordsList:{}},setup(t){const e=yh(),n=t,{handleOption:r}=Gy(),{withCheckboxes:s,selectedWords:i,resetSelect:o,updateSelect:l,checkboxesSelectedMap:c}=Y2();mt(()=>n.wordsList,()=>{o()});function u(d){d.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{e.clearWord()},2e3)}return(d,p)=>(X(),oe("div",mP,[N("ul",_P,[(X(!0),oe(Be,null,En(d.wordsList,(g,m)=>{var T,S,P;return X(),oe("li",{key:m,class:"words-list__item"},[de(gP,{word:g,index:m,id:+g.id,class:We(["words-list__word",{"is-active":g.id===((T=Y(e).selectedWord)==null?void 0:T.id)}]),onUpdateSelect:Y(l),isSelected:((S=Y(c)[m])==null?void 0:S.state)??!1,withCheckbox:Y(s),isActive:g.id===((P=Y(e).selectedWord)==null?void 0:P.id),onUpdateActiveWordRef:u},null,8,["word","index","id","class","onUpdateSelect","isSelected","withCheckbox","isActive"])])}),128))]),de(Qy,{isShow:Y(s),onUpdateOption:p[0]||(p[0]=g=>Y(r)(g,Y(i))),variant:"multiple"},null,8,["isShow"])]))}}),vP=["src"],wP={key:0,class:"filter__text"},EP=He({__name:"Filter",props:{itemData:{},filterName:{}},emits:["chooseFilter","chooseSort"],setup(t,{emit:e}){const n=t,r=ge(n.itemData.select.startedSelectedOption||""),s=e;function i(){n.itemData.select.isSelect||s("chooseFilter",n.filterName)}function o(){s("chooseSort",r.value)}return mt(()=>r.value,()=>{o()}),(l,c)=>(X(),oe("div",{class:"filter",onClick:c[1]||(c[1]=u=>i())},[N("div",{class:We(["filter__icon filling filling--round",{"filling--active":l.itemData.state.isActive}])},[N("img",{src:l.itemData.icon,alt:"icon"},null,8,vP)],2),l.itemData.select.isSelect?ct("",!0):(X(),oe("div",wP,rt(l.itemData.text),1)),l.itemData.select.isSelect?(X(),xt(ca,{key:1,options:l.itemData.select.optionsList,modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=u=>r.value=u),placeholder:l.itemData.text,selectedOptionWithPlaceholder:!0,withSearch:!1},null,8,["options","modelValue","placeholder"])):ct("",!0)]))}}),Yy=js("filtersStore",()=>{const t=ge({switchLanguage:{state:{isActive:!1}},sortBy:{state:{isActive:!0},select:{selectedOptions:{new:!0,old:!1,longest:!1,shortest:!1,alphabet:!1}}},switchMix:{state:{isActive:!1}}});function e(){t.value.switchLanguage.state.isActive=!1,t.value.switchMix.state.isActive=!1}function n(s){t.value[s].state.isActive=!t.value[s].state.isActive}function r(s){const i=t.value.sortBy.select.selectedOptions;for(let o of Object.keys(i))i[o]=!1;i[s]=!i[s]}return{filtersState:t,switchFilter:n,resetFilterState:e,switchSortOption:r}}),TP={class:"filters"},IP={class:"filters__list filters-list"},AP=He({__name:"Filters",props:{wordPair:{},withMix:{type:Boolean}},setup(t){const e=Yy(),n=t,r=ge({switchLanguage:{state:{isShowed:!0,isActive:we(()=>e.filtersState.switchLanguage.state.isActive)},select:{isSelect:!1},icon:"/Re.Words//images/replace-icon.svg",text:we(()=>`${n.wordPair.word} - ${n.wordPair.translate}`)},sortBy:{state:{isShowed:!0,isActive:we(()=>e.filtersState.sortBy.state.isActive)},select:{isSelect:!0,optionsList:["new","old","longest","shortest","alphabet"],startedSelectedOption:"new"},icon:"/Re.Words//images/sort-icon.svg",text:"Sort by:"},switchMix:{state:{isShowed:n.withMix,isActive:we(()=>e.filtersState.switchMix.state.isActive)},select:{isSelect:!1},icon:"/Re.Words//images/mix-icon.svg",text:"Mix"}});function s(o){e.switchFilter(o)}function i(o){e.switchSortOption(o)}return(o,l)=>(X(),oe("div",TP,[N("ul",IP,[(X(!0),oe(Be,null,En(r.value,(c,u)=>(X(),oe("li",{key:u,class:"filters-list__item"},[c&&c.state.isShowed?(X(),xt(EP,{key:0,class:"filters-list__filter",itemData:c,onChooseFilter:s,onChooseSort:i,filterName:u,startedSelectedOption:c.select.startedSelectedOption},null,8,["itemData","filterName","startedSelectedOption"])):ct("",!0)]))),128))])]))}}),bP={},CP={class:"empty"};function SP(t,e){return X(),oe("div",CP,e[0]||(e[0]=[N("svg",{width:"31",height:"30",viewBox:"0 0 31 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[N("path",{d:"M15.4976 12.2133L10.9235 7.63923C10.4842 7.19992 9.77182 7.19992 9.3325 7.63923L7.34375 9.62798L12.7133 14.9976L8.13923 19.5717C7.69992 20.011 7.69992 20.7233 8.13923 21.1627L10.128 23.1514L15.4976 17.7818L20.0717 22.3559C20.511 22.7952 21.2233 22.7952 21.6627 22.3559L23.6514 20.3672L18.2818 14.9976L22.8559 10.4235C23.2952 9.98415 23.2952 9.27182 22.8559 8.8325L20.8672 6.84375L15.4976 12.2133ZM15.5 29.625C7.42285 29.625 0.875 23.0771 0.875 15C0.875 6.92285 7.42285 0.375 15.5 0.375C23.5771 0.375 30.125 6.92285 30.125 15C30.125 23.0771 23.5771 29.625 15.5 29.625Z",fill:"white"})],-1),N("span",null," This is empty ",-1)]))}const RP=w_(bP,[["render",SP]]);function PP(){const t=ge([]),e=ge(),n=ge([]),r=ge([]),s=ge(0),i=ge(0);function o(T,S){var P;S==="langs"?(s.value=T,i.value=0):i.value=T,d(),p(((P=n.value[i.value])==null?void 0:P.ids)||[])}function l(T){return T.charAt(0).toUpperCase()+T.slice(1)}const c=we(()=>{const T={};return t.value.forEach(({fromLanguage:S,toLanguage:P,id:O})=>{const L=`${S.trim()} - ${P.trim()}`;T[L]||(T[L]={count:0,ids:[]}),T[L].count++,T[L].ids.push(O)}),Object.entries(T).map(([S,{count:P,ids:O}])=>({text:S,count:P,ids:O}))}),u=we(()=>{const T={};return t.value.forEach(({category:S,fromLanguage:P,toLanguage:O,id:L})=>{const F=`${S.trim().toLowerCase()}|${P.trim()}-${O.trim()}`;T[F]||(T[F]={count:0,ids:[]}),T[F].count++,T[F].ids.push(L)}),Object.entries(T).map(([S,{count:P,ids:O}])=>{const[L,F]=S.split("|");return{text:l(L),count:P,ids:O}})});function d(){var T;try{const S=u.value,P=c.value;s.value>=P.length&&(s.value=Math.max(P.length-1,0));const O=new Set(((T=P[s.value])==null?void 0:T.ids)||[]);n.value=S.filter(L=>L.ids.some(F=>O.has(F))),r.value=P,i.value>=n.value.length&&(i.value=Math.max(n.value.length-1,0))}catch(S){console.error("Ошибка при загрузке категорий и языков:",S)}}function p(T){e.value=t.value.filter(S=>T.some(P=>S.id.includes(P)))}function g(T){var S;try{const P=u.value||[],O=c.value||[],L=`${T.fromLanguage.trim()} - ${T.toLanguage.trim()}`,F=O.findIndex(b=>b.text===L);F!==-1&&(s.value=F),r.value=O;const q=new Set(((S=O[s.value])==null?void 0:S.ids)||[]);n.value=P.filter(b=>b.ids.some(v=>q.has(v)));const H=T.category.trim(),z=n.value.findIndex(b=>b.text===H);z!==-1&&(i.value=z)}catch(P){console.error("Ошибка при загрузке категорий и языков:",P)}}function m(T,S){var P;T.length>0?(t.value=T,S&&Object.keys(S).length>0?g(S):d(),i.value=n.value.length>0?i.value:0,s.value=r.value.length>0?s.value:0,n.value.length>0?p(((P=n.value[i.value])==null?void 0:P.ids)||[]):e.value=[]):(t.value=[],n.value=[],r.value=[],e.value=[],s.value=0,i.value=0)}return{categories:n,langs:r,loadCategories:d,activeLangTub:s,activeCategoryTub:i,changeActiveTub:o,categoryWords:e,refreshCategoriesAndWords:m}}function kP(){const t=Yy(),e=In(),n=ge();mt(()=>t.filtersState.switchLanguage.state.isActive,(g,m)=>{g!==m&&o(n.value)}),mt(()=>t.filtersState.switchMix.state.isActive,(g,m)=>{g!==m&&u(n.value)});const r=ge("");mt(()=>t.filtersState.sortBy.select.selectedOptions,g=>{r.value=Object.keys(g).find(m=>g[m]===!0)??"new",d(n.value,r.value)},{deep:!0});const s=g=>g[0].toUpperCase()+g.slice(1),i=we(()=>{if(!n.value)return{word:"",translate:""};const{fromLanguageCode:g,toLanguageCode:m}=n.value[0];return t.filtersState.switchLanguage.state.isActive?{word:s(m),translate:s(g)}:{word:s(g),translate:s(m)}});function o(g){n.value=g.map(m=>({...m,word:m.translate,translate:m.word}))}let l=[],c=!1;function u(g){if(l.length||(l=[...g]),c)n.value=[...l];else if(g.length<=1)n.value=[...g],e.showAlert("Not enough words to mix!","alert--error");else{let m;do m=[...g].sort(()=>Math.random()-.5);while(JSON.stringify(m)===JSON.stringify(l));n.value=m}c=!c}function d(g,m){m==="new"&&(n.value=g.sort((T,S)=>S.createdAt.seconds-T.createdAt.seconds)),m==="old"&&(n.value=g.sort((T,S)=>T.createdAt.seconds-S.createdAt.seconds)),m==="longest"&&(n.value=g.sort((T,S)=>S.word.length-T.word.length)),m==="shortest"&&(n.value=g.sort((T,S)=>T.word.length-S.word.length)),m==="alphabet"&&(n.value=g.sort((T,S)=>T.word.localeCompare(S.word)))}function p(g){n.value=g,t.resetFilterState(),d(n.value,r.value)}return{filteredWords:n,resetFilter:p,wordPair:i}}const VP={class:"wordspage page"},OP={class:"container"},DP={class:"wordspage__inner"},NP=He({__name:"WordsList",setup(t){const e=uE(),n=Rr(),r=yh(),s=we(()=>e.params.category),i=we(()=>n.wordsList.filter(P=>P.directions[s.value])),{changeActiveTub:o,activeLangTub:l,activeCategoryTub:c,langs:u,categories:d,categoryWords:p,refreshCategoriesAndWords:g}=PP(),{filteredWords:m,wordPair:T,resetFilter:S}=kP();return Jr(()=>{n.reloadWords()}),K0(()=>{g(i.value,r.selectedWord)}),mt(()=>p.value,()=>S(p.value)),Ai("optionsType",s.value),(P,O)=>(X(),oe("div",VP,[N("div",OP,[N("div",DP,[de(T_,{title:`${s.value[0].toUpperCase()+s.value.slice(1)} words`,isBack:!0,class:"wordspage__head"},null,8,["title"]),de(jy,{class:"wordspage__search"}),i.value.length>0?(X(),oe(Be,{key:0},[de(Q2,{class:"wordspage__tubs",langs:Y(u),categories:Y(d),activeLangTub:Y(l)||0,activeCategoryTub:Y(c)||0,onUpdateActiveTub:Y(o)},null,8,["langs","categories","activeLangTub","activeCategoryTub","onUpdateActiveTub"]),de(AP,{withMix:s.value==="repeat",class:"wordspage__filters",wordPair:Y(T)},null,8,["withMix","wordPair"]),de(yP,{class:"wordspage__words",wordsList:Y(m)||[]},null,8,["wordsList"])],64)):(X(),xt(RP,{key:1}))])]),(X(),xt(Bs,{to:"body"},[de(Ky)]))]))}}),Bp=(t,e,n)=>{let r=!1;Lu(Vs(),s=>{s&&!r?(r=!0,n()):!s&&!r&&(r=!0,n("/entrance"))})},LP=(t,e,n)=>{const r=Vs();Lu(r,s=>{s?n("/menu"):n()})},xP=[{path:"/",name:"greeting",component:lb,beforeEnter:LP},{path:"/menu",name:"menu",component:B2,beforeEnter:Bp},{path:"/entrance",name:"entrance",component:Ab},{path:"/words/:category",name:"words-list",component:NP,beforeEnter:Bp,props:!0}],MP=lE({history:Fw("/Re.Words/"),routes:xP});var FP="firebase",UP="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hr(FP,UP,"app");const $P={key:0,class:"loader"},BP=He({__name:"Loader",setup(t){const e=sl(),n=we(()=>e.isLoading);return(r,s)=>(X(),xt(Ya,{name:"opacity"},{default:St(()=>[n.value?(X(),oe("div",$P,s[0]||(s[0]=[N("div",{class:"loader__inner"},[N("div",{class:"loader__circle"})],-1)]))):ct("",!0)]),_:1}))}}),jP={class:"alert"},qP={class:"alert__inner"},WP={class:"icon"},HP=["src"],zP={class:"message"},KP=He({__name:"Alert",setup(t){const e=In(),n={"alert--error":"/Re.Words//images/error-icon.svg","alert--warning":"/Re.Words//images/warning-icon.svg","alert--success":"/Re.Words//images/success-icon.svg"};return(r,s)=>(X(),oe("div",jP,[N("div",qP,[de(va,{name:"fade"},{default:St(()=>[(X(!0),oe(Be,null,En(Y(e).alerts,(i,o)=>(X(),oe("div",{key:i.id,class:We(["alert__item alert-item",i.class]),style:$s({transitionDelay:`${o*50}ms`})},[N("span",WP,[N("img",{src:n[i.class],alt:"icon"},null,8,HP)]),N("span",zP,rt(i.message),1)],6))),128))]),_:1})])]))}}),GP=He({__name:"App",setup(t){const e=Ys();return Jr(()=>{Lu(Vs(),n=>{n?e.userId=n.uid:e.userId=""})}),(n,r)=>(X(),oe(Be,null,[de(Y(Cm)),(X(),xt(Bs,{to:"body"},[de(KP),de(BP)]))],64))}}),QP=tw(),vh=J1(GP);vh.use(QP);vh.use(MP);Lm({apiKey:"AIzaSyBZYNWHpi28gT9EubW4T9vOaXRuQtJ_faI",authDomain:"rewords-842b9.firebaseapp.com",projectId:"rewords-842b9",storageBucket:"rewords-842b9.firebasestorage.app",messagingSenderId:"794162625825",appId:"1:794162625825:web:c64508775c4ad103379260"});vh.mount("#app");
