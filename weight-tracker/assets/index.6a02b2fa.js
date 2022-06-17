const Be=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};Be();const m={};function Me(e){m.context=e}const qe=(e,t)=>e===t,T=Symbol("solid-proxy"),me=Symbol("solid-track"),V={equals:qe};let ve=Ne;const D={},E=1,G=2,$e={owned:null,cleanups:null,context:null,owner:null};var g=null;let M=null,a=null,I=null,y=null,w=null,se=0;function U(e,t){const n=a,i=g,s=e.length===0?$e:{owned:null,cleanups:null,context:null,owner:t||i};g=s,a=null;try{return fe(()=>e(()=>ue(s)),!0)}finally{a=n,g=i}}function oe(e,t){t=t?Object.assign({},V,t):V;const n={value:e,observers:null,observerSlots:null,pending:D,comparator:t.equals||void 0},i=s=>(typeof s=="function"&&(s=s(n.pending!==D?n.pending:n.value)),le(n,s));return[xe.bind(n),i]}function x(e,t,n){const i=ce(e,t,!1,E);F(i)}function re(e,t,n){ve=Ve;const i=ce(e,t,!1,E),s=de&&Ce(g,de.id);s&&(i.suspense=s),i.user=!0,w?w.push(i):F(i)}function te(e,t,n){n=n?Object.assign({},V,n):V;const i=ce(e,t,!0,0);return i.pending=D,i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,F(i),xe.bind(i)}function Ae(e){if(I)return e();let t;const n=I=[];try{t=e()}finally{I=null}return fe(()=>{for(let i=0;i<n.length;i+=1){const s=n[i];if(s.pending!==D){const o=s.pending;s.pending=D,le(s,o)}}},!1),t}function q(e){let t,n=a;return a=null,t=e(),a=n,t}function Fe(e){re(()=>q(e))}function Ke(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function Se(){return a}let de;function xe(){const e=M;if(this.sources&&(this.state||e)){const t=y;y=null,this.state===E||e?F(this):J(this),y=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function le(e,t,n){if(I)return e.pending===D&&I.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let i=!1;return e.value=t,e.observers&&e.observers.length&&fe(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s];i&&M.disposed.has(o),(i&&!o.tState||!i&&!o.state)&&(o.pure?y.push(o):w.push(o),o.observers&&Oe(o)),i||(o.state=E)}if(y.length>1e6)throw y=[],new Error},!1),t}function F(e){if(!e.fn)return;ue(e);const t=g,n=a,i=se;a=g=e,Re(e,e.value,i),a=n,g=t}function Re(e,t,n){let i;try{i=e.fn(t)}catch(s){Ee(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?le(e,i):e.value=i,e.updatedAt=n)}function ce(e,t,n,i=E,s){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==$e&&(g.owned?g.owned.push(o):g.owned=[o]),o}function W(e){const t=M;if(e.state===0||t)return;if(e.state===G||t)return J(e);if(e.suspense&&q(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<se);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===E||t)F(e);else if(e.state===G||t){const s=y;y=null,J(e,n[0]),y=s}}function fe(e,t){if(y)return e();let n=!1;t||(y=[]),w?n=!0:w=[],se++;try{const i=e();return Ue(n),i}catch(i){Ee(i)}finally{y=null,n||(w=null)}}function Ue(e){y&&(Ne(y),y=null),!e&&(w.length?Ae(()=>{ve(w),w=null}):w=null)}function Ne(e){for(let t=0;t<e.length;t++)W(e[t])}function Ve(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:W(s)}m.context&&Me();const i=e.length;for(t=0;t<n;t++)W(e[t]);for(t=i;t<e.length;t++)W(e[t])}function J(e,t){const n=M;e.state=0;for(let i=0;i<e.sources.length;i+=1){const s=e.sources[i];s.sources&&(s.state===E||n?s!==t&&W(s):(s.state===G||n)&&J(s,t))}}function Oe(e){const t=M;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=G,i.pure?y.push(i):w.push(i),i.observers&&Oe(i))}}function ue(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),r=n.observerSlots.pop();i<s.length&&(o.sourceSlots[r]=i,s[i]=o,n.observerSlots[i]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)ue(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ee(e){throw e}function Ce(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Ce(e.owner,t):void 0}const Ge=Symbol("fallback");function ge(e){for(let t=0;t<e.length;t++)e[t]()}function Je(e,t,n={}){let i=[],s=[],o=[],r=0,l=t.length>1?[]:null;return Ke(()=>ge(o)),()=>{let f=e()||[],u,c;return f[me],q(()=>{let d=f.length,p,N,P,K,R,b,_,$,C;if(d===0)r!==0&&(ge(o),o=[],i=[],s=[],r=0,l&&(l=[])),n.fallback&&(i=[Ge],s[0]=U(We=>(o[0]=We,n.fallback())),r=1);else if(r===0){for(s=new Array(d),c=0;c<d;c++)i[c]=f[c],s[c]=U(h);r=d}else{for(P=new Array(d),K=new Array(d),l&&(R=new Array(d)),b=0,_=Math.min(r,d);b<_&&i[b]===f[b];b++);for(_=r-1,$=d-1;_>=b&&$>=b&&i[_]===f[$];_--,$--)P[$]=s[_],K[$]=o[_],l&&(R[$]=l[_]);for(p=new Map,N=new Array($+1),c=$;c>=b;c--)C=f[c],u=p.get(C),N[c]=u===void 0?-1:u,p.set(C,c);for(u=b;u<=_;u++)C=i[u],c=p.get(C),c!==void 0&&c!==-1?(P[c]=s[u],K[c]=o[u],l&&(R[c]=l[u]),c=N[c],p.set(C,c)):o[u]();for(c=b;c<d;c++)c in P?(s[c]=P[c],o[c]=K[c],l&&(l[c]=R[c],l[c](c))):s[c]=U(h);s=s.slice(0,r=d),i=f.slice(0)}return s});function h(d){if(o[c]=d,l){const[p,N]=oe(c);return l[c]=N,t(f[c],p)}return t(f[c])}}}function v(e,t){return q(()=>e(t||{}))}function Xe(e){const t="fallback"in e&&{fallback:()=>e.fallback};return te(Je(()=>e.each,e.children,t||void 0))}function he(e){let t=!1;const n=te(()=>e.when,void 0,{equals:(i,s)=>t?i===s:!i==!s});return te(()=>{const i=n();if(i){const s=e.children;return(t=typeof s=="function"&&s.length>0)?q(()=>s(i)):s}return e.fallback})}function Ye(e,t,n){let i=n.length,s=t.length,o=i,r=0,l=0,f=t[s-1].nextSibling,u=null;for(;r<s||l<o;){if(t[r]===n[l]){r++,l++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===r){const c=o<i?l?n[l-1].nextSibling:n[o-l]:f;for(;l<o;)e.insertBefore(n[l++],c)}else if(o===l)for(;r<s;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[o-1]&&n[l]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[l++],t[r++].nextSibling),e.insertBefore(n[--o],c),t[s]=n[o]}else{if(!u){u=new Map;let h=l;for(;h<o;)u.set(n[h],h++)}const c=u.get(t[r]);if(c!=null)if(l<c&&c<o){let h=r,d=1,p;for(;++h<s&&h<o&&!((p=u.get(t[h]))==null||p!==c+d);)d++;if(d>c-l){const N=t[r];for(;l<c;)e.insertBefore(n[l++],N)}else e.replaceChild(n[l++],t[r++])}else r++;else t[r++].remove()}}}const ye="_$DX_DELEGATE";function Qe(e,t,n){let i;return U(s=>{i=s,t===document?e():O(t,e(),t.firstChild?null:void 0,n)}),()=>{i(),t.textContent=""}}function L(e,t,n){const i=document.createElement("template");i.innerHTML=e;let s=i.content.firstChild;return n&&(s=s.firstChild),s}function Ze(e,t=window.document){const n=t[ye]||(t[ye]=new Set);for(let i=0,s=e.length;i<s;i++){const o=e[i];n.has(o)||(n.add(o),t.addEventListener(o,ze))}}function X(e,t){t==null?e.removeAttribute("class"):e.className=t}function j(e,t,n={}){const i=Object.keys(t||{}),s=Object.keys(n);let o,r;for(o=0,r=s.length;o<r;o++){const l=s[o];!l||l==="undefined"||t[l]||(we(e,l,!1),delete n[l])}for(o=0,r=i.length;o<r;o++){const l=i[o],f=!!t[l];!l||l==="undefined"||n[l]===f||!f||(we(e,l,!0),n[l]=f)}return n}function O(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return Y(e,t,i,n);x(s=>Y(e,t(),s,n),i)}function we(e,t,n){const i=t.trim().split(/\s+/);for(let s=0,o=i.length;s<o;s++)e.classList.toggle(i[s],n)}function ze(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),m.registry&&!m.done&&(m.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>i.remove()));n!==null;){const i=n[t];if(i&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?i(s,e):i(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function Y(e,t,n,i,s){for(m.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,r=i!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(m.context)return n;if(o==="number"&&(t=t.toString()),r){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=k(e,n,i,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(m.context)return n;n=k(e,n,i)}else{if(o==="function")return x(()=>{let l=t();for(;typeof l=="function";)l=l();n=Y(e,l,n,i)}),()=>n;if(Array.isArray(t)){const l=[];if(ne(l,t,s))return x(()=>n=Y(e,l,n,i,!0)),()=>n;if(m.context){for(let f=0;f<l.length;f++)if(l[f].parentNode)return n=l}if(l.length===0){if(n=k(e,n,i),r)return n}else Array.isArray(n)?n.length===0?pe(e,l,i):Ye(e,n,l):(n&&k(e),pe(e,l));n=l}else if(t instanceof Node){if(m.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=k(e,n,i,t);k(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ne(e,t,n){let i=!1;for(let s=0,o=t.length;s<o;s++){let r=t[s],l;if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))i=ne(e,r)||i;else if((l=typeof r)=="string")e.push(document.createTextNode(r));else if(l==="function")if(n){for(;typeof r=="function";)r=r();i=ne(e,Array.isArray(r)?r:[r])||i}else e.push(r),i=!0;else e.push(document.createTextNode(r.toString()))}return i}function pe(e,t,n){for(let i=0,s=t.length;i<s;i++)e.insertBefore(t[i],n)}function k(e,t,n,i){if(n===void 0)return e.textContent="";const s=i||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(s!==l){const f=l.parentNode===e;!o&&!r?f?e.replaceChild(s,l):e.insertBefore(s,n):f&&l.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const et="_header_1f7t8_1",tt="_footer_1f7t8_16";var be={header:et,footer:tt};function ke(e){!e||(e.scrollTop=e.scrollHeight)}const Te=Symbol("store-raw"),Q=Symbol("store-node"),nt=Symbol("store-name");function De(e,t){let n=e[T];if(!n){Object.defineProperty(e,T,{value:n=new Proxy(e,ot)});const i=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let o=0,r=i.length;o<r;o++){const l=i[o];if(s[l].get){const f=s[l].get.bind(n);Object.defineProperty(e,l,{get:f})}}}return n}function Z(e){return e!=null&&typeof e=="object"&&(e[T]||!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function B(e,t=new Set){let n,i,s,o;if(n=e!=null&&e[Te])return n;if(!Z(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let r=0,l=e.length;r<l;r++)s=e[r],(i=B(s,t))!==s&&(e[r]=i)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const r=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let f=0,u=r.length;f<u;f++)o=r[f],!l[o].get&&(s=e[o],(i=B(s,t))!==s&&(e[o]=i))}return e}function ae(e){let t=e[Q];return t||Object.defineProperty(e,Q,{value:t={}}),t}function ie(e,t,n){return e[t]||(e[t]=Pe(n,!0))}function it(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===T||t===Q||t===nt||(delete n.value,delete n.writable,n.get=()=>e[T][t]),n}function Le(e){if(Se()){const t=ae(e);(t._||(t._=Pe()))()}}function st(e){return Le(e),Reflect.ownKeys(e)}function Pe(e,t){const[n,i]=oe(e,t?{internal:!0}:{equals:!1,internal:!0});return n.$=i,n}const ot={get(e,t,n){if(t===Te)return e;if(t===T)return n;if(t===me)return Le(e);const i=ae(e),s=i[t];let o=s?i[t]():e[t];if(t===Q||t==="__proto__")return o;if(!s){const r=Object.getOwnPropertyDescriptor(e,t);Se()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(r&&r.get)&&(o=ie(i,t,o)())}return Z(o)?De(o):o},set(){return!0},deleteProperty(){return!0},ownKeys:st,getOwnPropertyDescriptor:it};function z(e,t,n){if(e[t]===n)return;const i=e[t],s=e.length;n===void 0?delete e[t]:e[t]=n;let o=ae(e),r;(r=ie(o,t,i))&&r.$(()=>n),Array.isArray(e)&&e.length!==s&&(r=ie(o,"length",s))&&r.$(e.length),(r=o._)&&r.$()}function je(e,t){const n=Object.keys(t);for(let i=0;i<n.length;i+=1){const s=n[i];z(e,s,t[s])}}function rt(e,t){if(typeof t=="function"&&(t=t(e)),t=B(t),Array.isArray(t)){if(e===t)return;let n=0,i=t.length;for(;n<i;n++){const s=t[n];e[n]!==s&&z(e,n,s)}z(e,"length",i)}else je(e,t)}function H(e,t,n=[]){let i,s=e;if(t.length>1){i=t.shift();const r=typeof i,l=Array.isArray(e);if(Array.isArray(i)){for(let f=0;f<i.length;f++)H(e,[i[f]].concat(t),n);return}else if(l&&r==="function"){for(let f=0;f<e.length;f++)i(e[f],f)&&H(e,[f].concat(t),n);return}else if(l&&r==="object"){const{from:f=0,to:u=e.length-1,by:c=1}=i;for(let h=f;h<=u;h+=c)H(e,[h].concat(t),n);return}else if(t.length>1){H(e[i],t,[i].concat(n));return}s=e[i],n=[i].concat(n)}let o=t[0];typeof o=="function"&&(o=o(s,n),o===s)||i===void 0&&o==null||(o=B(o),i===void 0||Z(s)&&Z(o)&&!Array.isArray(o)?je(s,o):z(e,i,o))}function lt(e,t){const n=B(e||{}),i=Array.isArray(n),s=De(n);function o(...r){Ae(()=>{i&&r.length===1?rt(n,r[0]):H(n,r)})}return[s,o]}const He="weight-history",_e=localStorage.getItem(He),[A,ct]=lt(_e?JSON.parse(_e):{weightHistory:[]});re(()=>{console.debug("Saving weight tracking data."),localStorage.setItem(He,JSON.stringify(A))});const ft="_container_1wo08_1";var ut={container:ft};const at=L('<form><input placeholder="Enter weight and click Add" type="number" step="0.1" required><button type="submit">Add</button></form>'),dt=({trackingEl:e})=>{const[t,n]=oe(A.weightHistory[A.weightHistory.length-1]?.weight??200),i=s=>{s.preventDefault(),console.debug("Adding weight."),ct({weightHistory:[...A.weightHistory,{weight:t(),timestamp:new Date().getTime()}]}),ke(e)};return(()=>{const s=at.cloneNode(!0),o=s.firstChild;return s.addEventListener("submit",i),o.$$input=r=>n(r.currentTarget.valueAsNumber),x(r=>{const l=ut.container,f=t();return l!==r._v$&&X(s,r._v$=l),f!==r._v$2&&(o.value=r._v$2=f),r},{_v$:void 0,_v$2:void 0}),s})()};Ze(["input"]);const gt="_increase_1s7lc_1",ht="_decrease_1s7lc_5",yt="_no_value_1s7lc_9";var ee={increase:gt,decrease:ht,no_value:yt};const wt=L("<span>--</span>"),pt=L("<span></span>"),bt=e=>{const t=()=>{if(e.index>0){const n=e.weightHistory[e.index].weight-e.weightHistory[e.index-1].weight;return n<0,n}return null};return v(Ie,{get weight(){return t()}})},_t=e=>{const t=()=>{if(e.index>1){const n=e.weightHistory[e.index].weight-e.weightHistory[0].weight;return n<0,n}return null};return v(Ie,{get weight(){return t()}})},Ie=e=>{const t=()=>mt(e.weight);return[v(he,{get when(){return e.weight},children:n=>(()=>{const i=pt.cloneNode(!0);return O(i,t),x(s=>j(i,{[ee.increase]:n>0,[ee.decrease]:n<0},s)),i})()}),v(he,{get when(){return e.weight===null},get children(){const n=wt.cloneNode(!0);return x(()=>X(n,ee.no_value)),n}})]};function mt(e){return e==null?null:e>0?"+"+e.toFixed(1):e.toFixed(1)}const vt="_container_jgyqb_1",$t="_divider_jgyqb_19",At="_weight_jgyqb_27",St="_cell_jgyqb_35",xt="_delta_jgyqb_43";var S={container:vt,divider:$t,weight:At,cell:St,delta:xt};const Nt=L("<p>No weight tracked yet.</p>"),Ot=L("<div><div>lbs</div><div></div><div></div></div>"),Et=()=>(re(()=>{console.debug("Weight history change:",A.weightHistory.length)}),v(Xe,{get each(){return A.weightHistory},get fallback(){return Nt.cloneNode(!0)},children:(e,t)=>(()=>{const n=Ot.cloneNode(!0),i=n.firstChild,s=i.firstChild,o=i.nextSibling,r=o.nextSibling;return O(i,()=>e.weight.toFixed(1),s),O(o,v(bt,{get weightHistory(){return A.weightHistory},get index(){return t()}})),O(r,v(_t,{get weightHistory(){return A.weightHistory},get index(){return t()}})),x(l=>{const f={[S.container]:!0,[S.divider]:t()>0},u={[S.cell]:!0,[S.weight]:!0},c={[S.cell]:!0,[S.delta]:!0},h={[S.cell]:!0,[S.delta]:!0};return l._v$=j(n,f,l._v$),l._v$2=j(i,u,l._v$2),l._v$3=j(o,c,l._v$3),l._v$4=j(r,h,l._v$4),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),n})()})),Ct=L('<div class="container"><header><h1>\u{1F4C8} Weight Tracker \u{1F4C9}</h1></header><section class="tracking"></section><footer></footer></div>'),kt=()=>{let e;return Fe(()=>{ke(e)}),(()=>{const t=Ct.cloneNode(!0),n=t.firstChild,i=n.nextSibling,s=i.nextSibling,o=e;return typeof o=="function"?o(i):e=i,O(i,v(Et,{get weightHistory(){return A.weightHistory}})),O(s,v(dt,{trackingEl:e})),x(r=>{const l=be.header,f=be.footer;return l!==r._v$&&X(n,r._v$=l),f!==r._v$2&&X(s,r._v$2=f),r},{_v$:void 0,_v$2:void 0}),t})()};Qe(()=>v(kt,{}),document.getElementById("root"));
