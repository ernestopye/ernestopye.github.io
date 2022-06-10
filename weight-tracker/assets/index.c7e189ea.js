const ve=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};ve();const A={};function Te(e){A.context=e}const Pe=(e,t)=>e===t,C=Symbol("solid-proxy"),pe=Symbol("solid-track"),M={equals:Pe};let we=Se;const E={},N=1,R=2,be={owned:null,cleanups:null,context:null,owner:null};var g=null;let H=null,d=null,v=null,y=null,w=null,z=0;function K(e,t){const n=d,s=g,i=e.length===0?be:{owned:null,cleanups:null,context:null,owner:t||s};g=i,d=null;try{return se(()=>e(()=>ie(i)),!0)}finally{d=n,g=s}}function ee(e,t){t=t?Object.assign({},M,t):M;const n={value:e,observers:null,observerSlots:null,pending:E,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.pending!==E?n.pending:n.value)),te(n,i));return[_e.bind(n),s]}function L(e,t,n){const s=ne(e,t,!1,N);I(s)}function Le(e,t,n){we=Be;const s=ne(e,t,!1,N);s.user=!0,w?w.push(s):I(s)}function Y(e,t,n){n=n?Object.assign({},M,n):M;const s=ne(e,t,!0,0);return s.pending=E,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,I(s),_e.bind(s)}function me(e){if(v)return e();let t;const n=v=[];try{t=e()}finally{v=null}return se(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==E){const o=i.pending;i.pending=E,te(i,o)}}},!1),t}function J(e){let t,n=d;return d=null,t=e(),d=n,t}function je(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function Ae(){return d}function _e(){const e=H;if(this.sources&&(this.state||e)){const t=y;y=null,this.state===N||e?I(this):W(this),y=t}if(d){const t=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(t)):(d.sources=[this],d.sourceSlots=[t]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function te(e,t,n){if(v)return e.pending===E&&v.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&se(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i];s&&H.disposed.has(o),(s&&!o.tState||!s&&!o.state)&&(o.pure?y.push(o):w.push(o),o.observers&&xe(o)),s||(o.state=N)}if(y.length>1e6)throw y=[],new Error},!1),t}function I(e){if(!e.fn)return;ie(e);const t=g,n=d,s=z;d=g=e,He(e,e.value,s),d=n,g=t}function He(e,t,n){let s;try{s=e.fn(t)}catch(i){Ne(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?te(e,s):e.value=s,e.updatedAt=n)}function ne(e,t,n,s=N,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==be&&(g.owned?g.owned.push(o):g.owned=[o]),o}function T(e){const t=H;if(e.state===0||t)return;if(e.state===R||t)return W(e);if(e.suspense&&J(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<z);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===N||t)I(e);else if(e.state===R||t){const i=y;y=null,W(e,n[0]),y=i}}function se(e,t){if(y)return e();let n=!1;t||(y=[]),w?n=!0:w=[],z++;try{const s=e();return Ie(n),s}catch(s){Ne(s)}finally{y=null,n||(w=null)}}function Ie(e){y&&(Se(y),y=null),!e&&(w.length?me(()=>{we(w),w=null}):w=null)}function Se(e){for(let t=0;t<e.length;t++)T(e[t])}function Be(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:T(i)}A.context&&Te();const s=e.length;for(t=0;t<n;t++)T(e[t]);for(t=s;t<e.length;t++)T(e[t])}function W(e,t){const n=H;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===N||n?i!==t&&T(i):(i.state===R||n)&&W(i,t))}}function xe(e){const t=H;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=R,s.pure?y.push(s):w.push(s),s.observers&&xe(s))}}function ie(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),l=n.observerSlots.pop();s<i.length&&(o.sourceSlots[l]=s,i[s]=o,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)ie(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ne(e){throw e}const Fe=Symbol("fallback");function le(e){for(let t=0;t<e.length;t++)e[t]()}function Ke(e,t,n={}){let s=[],i=[],o=[],l=0,r=t.length>1?[]:null;return je(()=>le(o)),()=>{let c=e()||[],u,f;return c[pe],J(()=>{let a=c.length,p,S,k,B,F,b,m,_,$;if(a===0)l!==0&&(le(o),o=[],s=[],i=[],l=0,r&&(r=[])),n.fallback&&(s=[Fe],i[0]=K(De=>(o[0]=De,n.fallback())),l=1);else if(l===0){for(i=new Array(a),f=0;f<a;f++)s[f]=c[f],i[f]=K(h);l=a}else{for(k=new Array(a),B=new Array(a),r&&(F=new Array(a)),b=0,m=Math.min(l,a);b<m&&s[b]===c[b];b++);for(m=l-1,_=a-1;m>=b&&_>=b&&s[m]===c[_];m--,_--)k[_]=i[m],B[_]=o[m],r&&(F[_]=r[m]);for(p=new Map,S=new Array(_+1),f=_;f>=b;f--)$=c[f],u=p.get($),S[f]=u===void 0?-1:u,p.set($,f);for(u=b;u<=m;u++)$=s[u],f=p.get($),f!==void 0&&f!==-1?(k[f]=i[u],B[f]=o[u],r&&(F[f]=r[u]),f=S[f],p.set($,f)):o[u]();for(f=b;f<a;f++)f in k?(i[f]=k[f],o[f]=B[f],r&&(r[f]=F[f],r[f](f))):i[f]=K(h);i=i.slice(0,l=a),s=c.slice(0)}return i});function h(a){if(o[f]=a,r){const[p,S]=ee(f);return r[f]=S,t(c[f],p)}return t(c[f])}}}function x(e,t){return J(()=>e(t||{}))}function Me(e){const t="fallback"in e&&{fallback:()=>e.fallback};return Y(Ke(()=>e.each,e.children,t||void 0))}function re(e){let t=!1;const n=Y(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return Y(()=>{const s=n();if(s){const i=e.children;return(t=typeof i=="function"&&i.length>0)?J(()=>i(s)):i}return e.fallback})}function Re(e,t,n){let s=n.length,i=t.length,o=s,l=0,r=0,c=t[i-1].nextSibling,u=null;for(;l<i||r<o;){if(t[l]===n[r]){l++,r++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===l){const f=o<s?r?n[r-1].nextSibling:n[o-r]:c;for(;r<o;)e.insertBefore(n[r++],f)}else if(o===r)for(;l<i;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[r]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[r++],t[l++].nextSibling),e.insertBefore(n[--o],f),t[i]=n[o]}else{if(!u){u=new Map;let h=r;for(;h<o;)u.set(n[h],h++)}const f=u.get(t[l]);if(f!=null)if(r<f&&f<o){let h=l,a=1,p;for(;++h<i&&h<o&&!((p=u.get(t[h]))==null||p!==f+a);)a++;if(a>f-r){const S=t[l];for(;r<f;)e.insertBefore(n[r++],S)}else e.replaceChild(n[r++],t[l++])}else l++;else t[l++].remove()}}}const fe="_$DX_DELEGATE";function We(e,t,n){let s;return K(i=>{s=i,t===document?e():P(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function X(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function Ue(e,t=window.document){const n=t[fe]||(t[fe]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,Ge))}}function ce(e,t){t==null?e.removeAttribute("class"):e.className=t}function qe(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let o,l;for(o=0,l=i.length;o<l;o++){const r=i[o];!r||r==="undefined"||t[r]||(ue(e,r,!1),delete n[r])}for(o=0,l=s.length;o<l;o++){const r=s[o],c=!!t[r];!r||r==="undefined"||n[r]===c||!c||(ue(e,r,!0),n[r]=c)}return n}function P(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return U(e,t,s,n);L(i=>U(e,t(),i,n),s)}function ue(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,o=s.length;i<o;i++)e.classList.toggle(s[i],n)}function Ge(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),A.registry&&!A.done&&(A.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s(i,e):s(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function U(e,t,n,s,i){for(A.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(A.context)return n;if(o==="number"&&(t=t.toString()),l){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=O(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(A.context)return n;n=O(e,n,s)}else{if(o==="function")return L(()=>{let r=t();for(;typeof r=="function";)r=r();n=U(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[];if(Q(r,t,i))return L(()=>n=U(e,r,n,s,!0)),()=>n;if(A.context){for(let c=0;c<r.length;c++)if(r[c].parentNode)return n=r}if(r.length===0){if(n=O(e,n,s),l)return n}else Array.isArray(n)?n.length===0?ae(e,r,s):Re(e,n,r):(n&&O(e),ae(e,r));n=r}else if(t instanceof Node){if(A.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=O(e,n,s,t);O(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Q(e,t,n){let s=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],r;if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))s=Q(e,l)||s;else if((r=typeof l)=="string")e.push(document.createTextNode(l));else if(r==="function")if(n){for(;typeof l=="function";)l=l();s=Q(e,Array.isArray(l)?l:[l])||s}else e.push(l),s=!0;else e.push(document.createTextNode(l.toString()))}return s}function ae(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function O(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const r=t[l];if(i!==r){const c=r.parentNode===e;!o&&!l?c?e.replaceChild(i,r):e.insertBefore(i,n):c&&r.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}const Ve="_App_9g4xh_1",Je="_logo_9g4xh_5",Xe="_header_9g4xh_11",Ye="_link_9g4xh_22";var de={App:Ve,logo:Je,"logo-spin":"_logo-spin_9g4xh_1",header:Xe,link:Ye};const $e=Symbol("store-raw"),q=Symbol("store-node"),Qe=Symbol("store-name");function Oe(e,t){let n=e[C];if(!n){Object.defineProperty(e,C,{value:n=new Proxy(e,et)});const s=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let o=0,l=s.length;o<l;o++){const r=s[o];if(i[r].get){const c=i[r].get.bind(n);Object.defineProperty(e,r,{get:c})}}}return n}function G(e){return e!=null&&typeof e=="object"&&(e[C]||!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function j(e,t=new Set){let n,s,i,o;if(n=e!=null&&e[$e])return n;if(!G(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,r=e.length;l<r;l++)i=e[l],(s=j(i,t))!==i&&(e[l]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let c=0,u=l.length;c<u;c++)o=l[c],!r[o].get&&(i=e[o],(s=j(i,t))!==i&&(e[o]=s))}return e}function oe(e){let t=e[q];return t||Object.defineProperty(e,q,{value:t={}}),t}function Z(e,t,n){return e[t]||(e[t]=Ee(n,!0))}function Ze(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===C||t===q||t===Qe||(delete n.value,delete n.writable,n.get=()=>e[C][t]),n}function Ce(e){if(Ae()){const t=oe(e);(t._||(t._=Ee()))()}}function ze(e){return Ce(e),Reflect.ownKeys(e)}function Ee(e,t){const[n,s]=ee(e,t?{internal:!0}:{equals:!1,internal:!0});return n.$=s,n}const et={get(e,t,n){if(t===$e)return e;if(t===C)return n;if(t===pe)return Ce(e);const s=oe(e),i=s[t];let o=i?s[t]():e[t];if(t===q||t==="__proto__")return o;if(!i){const l=Object.getOwnPropertyDescriptor(e,t);Ae()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(o=Z(s,t,o)())}return G(o)?Oe(o):o},set(){return!0},deleteProperty(){return!0},ownKeys:ze,getOwnPropertyDescriptor:Ze};function V(e,t,n){if(e[t]===n)return;const s=e[t],i=e.length;n===void 0?delete e[t]:e[t]=n;let o=oe(e),l;(l=Z(o,t,s))&&l.$(()=>n),Array.isArray(e)&&e.length!==i&&(l=Z(o,"length",i))&&l.$(e.length),(l=o._)&&l.$()}function ke(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const i=n[s];V(e,i,t[i])}}function tt(e,t){if(typeof t=="function"&&(t=t(e)),t=j(t),Array.isArray(t)){if(e===t)return;let n=0,s=t.length;for(;n<s;n++){const i=t[n];e[n]!==i&&V(e,n,i)}V(e,"length",s)}else ke(e,t)}function D(e,t,n=[]){let s,i=e;if(t.length>1){s=t.shift();const l=typeof s,r=Array.isArray(e);if(Array.isArray(s)){for(let c=0;c<s.length;c++)D(e,[s[c]].concat(t),n);return}else if(r&&l==="function"){for(let c=0;c<e.length;c++)s(e[c],c)&&D(e,[c].concat(t),n);return}else if(r&&l==="object"){const{from:c=0,to:u=e.length-1,by:f=1}=s;for(let h=c;h<=u;h+=f)D(e,[h].concat(t),n);return}else if(t.length>1){D(e[s],t,[s].concat(n));return}i=e[s],n=[s].concat(n)}let o=t[0];typeof o=="function"&&(o=o(i,n),o===i)||s===void 0&&o==null||(o=j(o),s===void 0||G(i)&&G(o)&&!Array.isArray(o)?ke(i,o):V(e,s,o))}function nt(e,t){const n=j(e||{}),s=Array.isArray(n),i=Oe(n);function o(...l){me(()=>{s&&l.length===1?tt(n,l[0]):D(n,l)})}return[i,o]}const he="weight-history";function st(e){const t=localStorage.getItem(he),[n,s]=nt(t?JSON.parse(t):e);return Le(()=>{localStorage.setItem(he,JSON.stringify(n))}),[n,s]}const it="_increase_11rou_1",ot="_decrease_11rou_5";var ge={increase:it,decrease:ot};const lt=X("<span></span>"),rt=e=>{const t=()=>{if(e.index>0){const s=e.weightHistory[e.index].weight-e.weightHistory[e.index-1].weight;return s<0,s}return null},n=()=>{if(e.index>1){const s=e.weightHistory[e.index].weight-e.weightHistory[0].weight;return s<0,s}return null};return[x(ye,{get weight(){return t()}}),x(ye,{get weight(){return n()}})]},ye=e=>{const t=()=>ft(e.weight);return[x(re,{get when(){return e.weight},children:n=>(()=>{const s=lt.cloneNode(!0);return P(s,t),L(i=>qe(s,{[ge.increase]:n>0,[ge.decrease]:n<0},i)),s})()}),x(re,{get when(){return e.weight===null},children:"--"})]};function ft(e){return e==null?null:e>0?"+"+e.toFixed(1):e.toFixed(1)}const ct=X('<div><header><ul></ul><form><input placeholder="Enter weight and click Add" type="number" step="0.1" required> <button type="submit">Track</button></form></header></div>'),ut=X("<p>No weight tracked yet.</p>"),at=X("<li>lbs</li>"),dt=()=>{const[e,t]=st({weightHistory:[]}),[n,s]=ee(e.weightHistory[e.weightHistory.length-1]?.weight??200),i=o=>{o.preventDefault(),t({weightHistory:[...e.weightHistory,{weight:n(),timestamp:new Date().getTime()}]})};return(()=>{const o=ct.cloneNode(!0),l=o.firstChild,r=l.firstChild,c=r.nextSibling,u=c.firstChild;return P(r,x(Me,{get each(){return e.weightHistory},get fallback(){return ut.cloneNode(!0)},children:(f,h)=>(()=>{const a=at.cloneNode(!0),p=a.firstChild;return P(a,()=>f.weight.toFixed(1),p),P(a,x(rt,{get weightHistory(){return e.weightHistory},get index(){return h()}}),null),a})()})),c.addEventListener("submit",i),u.$$input=f=>s(f.currentTarget.valueAsNumber),L(f=>{const h=de.App,a=de.header,p=n();return h!==f._v$&&ce(o,f._v$=h),a!==f._v$2&&ce(l,f._v$2=a),p!==f._v$3&&(u.value=f._v$3=p),f},{_v$:void 0,_v$2:void 0,_v$3:void 0}),o})()};Ue(["input"]);We(()=>x(dt,{}),document.getElementById("root"));
