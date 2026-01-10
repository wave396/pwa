(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,B=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),G=new WeakMap;let ae=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(B&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=G.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&G.set(t,e))}return e}toString(){return this.cssText}};const ue=r=>new ae(typeof r=="string"?r:r+"",void 0,q),J=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new ae(t,r,q)},fe=(r,e)=>{if(B)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=z.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},Q=B?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return ue(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ge,defineProperty:$e,getOwnPropertyDescriptor:me,getOwnPropertyNames:ve,getOwnPropertySymbols:be,getPrototypeOf:xe}=Object,j=globalThis,Y=j.trustedTypes,ye=Y?Y.emptyScript:"",_e=j.reactiveElementPolyfillSupport,E=(r,e)=>r,N={toAttribute(r,e){switch(e){case Boolean:r=r?ye:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},V=(r,e)=>!ge(r,e),ee={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:V};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ee){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&$e(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:o}=me(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get(){return i?.call(this)},set(n){const h=i?.call(this);o.call(this,n),this.requestUpdate(e,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ee}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const e=xe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const t=this.properties,s=[...ve(t),...be(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(Q(i))}else e!==void 0&&t.push(Q(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:N).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:N;this._$Em=i,this[i]=n.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??=this.constructor.getPropertyOptions(e),!(s.hasChanged??V)(this[e],t))return;this.P(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(e){}firstUpdated(e){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[E("elementProperties")]=new Map,_[E("finalized")]=new Map,_e?.({ReactiveElement:_}),(j.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis,R=W.trustedTypes,te=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,ce="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,he="?"+g,Ae=`<${he}>`,x=document,P=()=>x.createComment(""),C=r=>r===null||typeof r!="object"&&typeof r!="function",K=Array.isArray,we=r=>K(r)||typeof r?.[Symbol.iterator]=="function",I=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,se=/-->/g,ie=/>/g,$=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),re=/'/g,oe=/"/g,le=/^(?:script|style|textarea|title)$/i,Se=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),v=Se(1),A=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ne=new WeakMap,m=x.createTreeWalker(x,129);function de(r,e){if(!K(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return te!==void 0?te.createHTML(e):e}const Ee=(r,e)=>{const t=r.length-1,s=[];let i,o=e===2?"<svg>":e===3?"<math>":"",n=S;for(let h=0;h<t;h++){const a=r[h];let l,p,c=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===S?p[1]==="!--"?n=se:p[1]!==void 0?n=ie:p[2]!==void 0?(le.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=$):p[3]!==void 0&&(n=$):n===$?p[0]===">"?(n=i??S,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,l=p[1],n=p[3]===void 0?$:p[3]==='"'?oe:re):n===oe||n===re?n=$:n===se||n===ie?n=S:(n=$,i=void 0);const f=n===$&&r[h+1].startsWith("/>")?" ":"";o+=n===S?a+Ae:c>=0?(s.push(l),a.slice(0,c)+ce+a.slice(c)+g+f):a+g+(c===-2?h:f)}return[de(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class k{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let o=0,n=0;const h=e.length-1,a=this.parts,[l,p]=Ee(e,t);if(this.el=k.createElement(l,s),m.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=m.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(ce)){const u=p[n++],f=i.getAttribute(c).split(g),M=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:M[2],strings:f,ctor:M[1]==="."?Ce:M[1]==="?"?ke:M[1]==="@"?Oe:D}),i.removeAttribute(c)}else c.startsWith(g)&&(a.push({type:6,index:o}),i.removeAttribute(c));if(le.test(i.tagName)){const c=i.textContent.split(g),u=c.length-1;if(u>0){i.textContent=R?R.emptyScript:"";for(let f=0;f<u;f++)i.append(c[f],P()),m.nextNode(),a.push({type:2,index:++o});i.append(c[u],P())}}}else if(i.nodeType===8)if(i.data===he)a.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(g,c+1))!==-1;)a.push({type:7,index:o}),c+=g.length-1}o++}}static createElement(e,t){const s=x.createElement("template");return s.innerHTML=e,s}}function w(r,e,t=r,s){if(e===A)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl;const o=C(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??=[])[s]=i:t._$Cl=i),i!==void 0&&(e=w(r,i._$AS(r,e.values),i,s)),e}class Pe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??x).importNode(t,!0);m.currentNode=i;let o=m.nextNode(),n=0,h=0,a=s[0];for(;a!==void 0;){if(n===a.index){let l;a.type===2?l=new U(o,o.nextSibling,this,e):a.type===1?l=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(l=new Ue(o,this,e)),this._$AV.push(l),a=s[++h]}n!==a?.index&&(o=m.nextNode(),n++)}return m.currentNode=x,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class U{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=w(this,e,t),C(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==A&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):we(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&C(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=k.createElement(de(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{const o=new Pe(i,this),n=o.u(this.options);o.p(t),this.T(n),this._$AH=o}}_$AC(e){let t=ne.get(e.strings);return t===void 0&&ne.set(e.strings,t=new k(e)),t}k(e){K(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const o of e)i===t.length?t.push(s=new U(this.O(P()),this.O(P()),this,this.options)):s=t[i],s._$AI(o),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class D{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(e,t=this,s,i){const o=this.strings;let n=!1;if(o===void 0)e=w(this,e,t,0),n=!C(e)||e!==this._$AH&&e!==A,n&&(this._$AH=e);else{const h=e;let a,l;for(e=o[0],a=0;a<o.length-1;a++)l=w(this,h[s+a],t,a),l===A&&(l=this._$AH[a]),n||=!C(l)||l!==this._$AH[a],l===d?e=d:e!==d&&(e+=(l??"")+o[a+1]),this._$AH[a]=l}n&&!i&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ce extends D{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class ke extends D{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class Oe extends D{constructor(e,t,s,i,o){super(e,t,s,i,o),this.type=5}_$AI(e,t=this){if((e=w(this,e,t,0)??d)===A)return;const s=this._$AH,i=e===d&&s!==d||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ue{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){w(this,e)}}const Te=W.litHtmlPolyfillSupport;Te?.(k,U),(W.litHtmlVersions??=[]).push("3.2.1");const He=(r,e,t)=>{const s=t?.renderBefore??e;let i=s._$litPart$;if(i===void 0){const o=t?.renderBefore??null;s._$litPart$=i=new U(e.insertBefore(P(),o),o,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let b=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=He(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};b._$litElement$=!0,b.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:b});const Me=globalThis.litElementPolyfillSupport;Me?.({LitElement:b});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:V},Ne=(r=ze,e,t)=>{const{kind:s,metadata:i}=t;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(t.name,r),s==="accessor"){const{name:n}=t;return{set(h){const a=e.get.call(this);e.set.call(this,h),this.requestUpdate(n,a,r)},init(h){return h!==void 0&&this.P(n,void 0,r),h}}}if(s==="setter"){const{name:n}=t;return function(h){const a=this[n];e.call(this,h),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+s)};function Z(r){return(e,t)=>typeof t=="object"?Ne(r,e,t):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(r){return Z({...r,state:!0,attribute:!1})}var Re=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,X=(r,e,t,s)=>{for(var i=s>1?void 0:s?Le(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Re(e,t,i),i};let O=class extends b{constructor(){super(...arguments),this.selectedChar="Jake",this.selectedLv="1"}render(){return v`
      <div class="container">
        <div class="header-card">
          <h1>Интеллектуальные расследования</h1>
          <div class="intro-text">
            Погрузитесь в мир логики и дедукции. Выберите своего наставника.
          </div>
        </div>

        <div class="section-card">
          <h2>Выберите детектива</h2>
          <div class="option-group">
            <label class="choice-label">
              <input type="radio" name="char" value="Jake" 
                ?checked=${this.selectedChar==="Jake"} 
                @change=${()=>this.selectedChar="Jake"}>
              <div class="choice-info">
                <b>Джейк Трент</b>
                <span>Нуарный стиль, прямой подход, суровая логика.</span>
              </div>
            </label>

            <label class="choice-label">
              <input type="radio" name="char" value="Henri" 
                ?checked=${this.selectedChar==="Henri"} 
                @change=${()=>this.selectedChar="Henri"}>
              <div class="choice-info">
                <b>Анри Делакруа</b>
                <span>Французская школа, ирония, внимание к деталям.</span>
              </div>
            </label>
          </div>
        </div>

        <div class="section-card">
          <h2>Уровень сложности</h2>
          <div class="option-group">
            <label class="choice-label">
              <input type="radio" name="lv" value="1" 
                ?checked=${this.selectedLv==="1"} 
                @change=${()=>this.selectedLv="1"}>
              <div class="choice-info">
                <b>Базовый анализ</b>
                <span>Помощь в расследовании и подсказки.</span>
              </div>
            </label>

            <label class="choice-label">
              <input type="radio" name="lv" value="2" 
                ?checked=${this.selectedLv==="2"} 
                @change=${()=>this.selectedLv="2"}>
              <div class="choice-info">
                <b>Мастер логики</b>
                <span>Детектив не прощает ошибок. Только факты.</span>
              </div>
            </label>
          </div>
        </div>

        <a href="/chat?char=${this.selectedChar}&lv=${this.selectedLv}" class="start-btn">
          Начать расследование
        </a>
      </div>
    `}};O.styles=J`
    :host {
      display: block;
      min-height: 100vh;
      background: #f5f7fa;
      font-family: 'Segoe UI', Roboto, sans-serif;
      color: #1a1c1e;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 24px 16px;
    }

    .header-card {
      background: #ffffff;
      padding: 32px 24px;
      border-radius: 28px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      margin-bottom: 24px;
      text-align: center;
    }

    h1   {
      font-size: clamp(22px, 7vw, 32px); /* Адаптивный размер */
      color: #0061a4;
      margin: 0 0 16px 0;
      font-weight: 400;
      line-height: 1.1;
      text-align: center;
      overflow-wrap: break-word; /* Инженерная защита от вылета текста */
      word-wrap: break-word;
    }


    .intro-text {
      font-size: 18px;
      line-height: 1.6;
      color: #44474e;
    }

    .section-card {
      background: #ffffff;
      border-radius: 20px;
      padding: 20px;
      margin-bottom: 16px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }

    h2 {
      font-size: 20px;
      margin-top: 0;
      color: #0061a4;
      font-weight: 500;
    }

    /* Стили для выбора персонажа */
    .option-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 16px;
    }

    .choice-label {
      display: flex;
      align-items: center;
      padding: 16px;
      border: 2px solid #e0e2e6;
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .choice-label:has(input:checked) {
      border-color: #0061a4;
      background: #d1e4ff;
    }

    input[type="radio"] {
      width: 20px;
      height: 20px;
      margin-right: 12px;
      accent-color: #0061a4;
    }

    .choice-info b {
      display: block;
      font-size: 17px;
    }

    .choice-info span {
      font-size: 14px;
      color: #44474e;
    }

    /* Кнопка запуска */
    .start-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0061a4;
      color: white;
      text-decoration: none;
      padding: 18px;
      border-radius: 100px;
      font-size: 18px;
      font-weight: 500;
      margin-top: 32px;
      box-shadow: 0 4px 12px rgba(0,97,164,0.3);
      transition: transform 0.1s;
    }

    .start-btn:active {
      transform: scale(0.97);
    }

    @media (prefers-color-scheme: dark) {
      :host { background: #1a1c1e; color: #e2e2e6; }
      .header-card, .section-card { background: #2f3033; color: #e2e2e6; }
      h1, h2 { color: #d1e4ff; }
      .intro-text { color: #c4c6cf; }
      .choice-label { border-color: #44474e; }
      .choice-label:has(input:checked) { background: #004a7d; border-color: #d1e4ff; }
      .choice-info span { color: #c4c6cf; }
    }
  `;X([T()],O.prototype,"selectedChar",2);X([T()],O.prototype,"selectedLv",2);O=X([F("app-home")],O);var je=Object.defineProperty,De=Object.getOwnPropertyDescriptor,H=(r,e,t,s)=>{for(var i=s>1?void 0:s?De(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&je(e,t,i),i};let y=class extends b{constructor(){super(...arguments),this.char="Jake",this.lv="1",this.messages=[],this.isTyping=!1}firstUpdated(){const r=new URLSearchParams(window.location.search);this.char=r.get("char")||"Jake",this.lv=r.get("lv")||"1";const e=this.char==="Jake"?"Слушаю. Трент на проводе. Что у вас стряслось?":"Добрый вечер. Анри Делакруа к вашим услугам. Какая загадка привела вас ко мне?";this.messages=[{text:e,type:"received"}]}async sendMessage(){const r=this.shadowRoot?.querySelector("textarea"),e=r?.value.trim();if(!(!e||this.isTyping)){this.messages=[...this.messages,{text:e,type:"sent"}],r.value="",r.style.height="auto",this.isTyping=!0,setTimeout(()=>this.scrollToBottom(),50);try{const s=await(await fetch("https://logic-q6qn.onrender.com/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({char_id:this.char+this.lv,history:this.messages.slice(-10)})})).json();this.messages=[...this.messages,{text:s.reply,type:"received"}]}catch{this.messages=[...this.messages,{text:"Связь прервалась... Попробуйте еще раз.",type:"received"}]}finally{this.isTyping=!1,setTimeout(()=>this.scrollToBottom(),100)}}}scrollToBottom(){const r=this.shadowRoot?.querySelector(".chat-container");r&&(r.scrollTop=r.scrollHeight)}render(){return v`
      <div class="header">
        <a href="/" class="back-btn">←</a>
        <div style="line-height: 1.2">
          <div style="font-size: 18px; font-weight: 500">${this.char==="Jake"?"Джейк Трент":"Анри Делакруа"}</div>
          <div style="font-size: 12px; opacity: 0.7">Сложность: ${this.lv==="1"?"Базовая":"Профи"}</div>
        </div>
      </div>
      
      <div class="chat-container">
        ${this.messages.map(r=>v`
          <div class="message ${r.type}">${r.text}</div>
        `)}
        ${this.isTyping?v`
          <div style="padding: 8px 16px; opacity: 0.6; font-size: 14px; font-style: italic;">
            Детектив обдумывает ответ...
          </div>
        `:""}
      </div>

      <div class="input-area-container">
        <div class="input-bar">
          <textarea 
            placeholder="Напишите детективу..." 
            rows="1"
            @input=${r=>{r.target.style.height="auto",r.target.style.height=r.target.scrollHeight+"px"}}
            @keydown=${r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),this.sendMessage())}}
          ></textarea>
          <button class="send-btn" @click=${this.sendMessage}>➤</button>
        </div>
      </div>
    `}};y.styles=J`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
      background: #f5f7fa;
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }

    /* Шапка Material 3 */
    .header {
      padding: 12px 16px;
      background: #ffffff;
      color: #1a1c1e;
      display: flex;
      align-items: center;
      box-shadow: 0 1px 2px rgba(0,0,0,0.1);
      z-index: 10;
    }

    .back-btn {
      margin-right: 16px;
      text-decoration: none;
      font-size: 24px;
      color: #0061a4;
      font-weight: bold;
    }

    .chat-container {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    /* Сообщения */
    .message {
      max-width: 88%;
      padding: 12px 16px;
      font-size: 17px;
      line-height: 1.5;
    }

    .received {
      align-self: flex-start;
      background: #ffffff;
      color: #1a1c1e;
      border-radius: 4px 20px 20px 20px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      width: 92%;
    }

    .sent {
      align-self: flex-end;
      background: #0061a4;
      color: white;
      border-radius: 20px 20px 4px 20px;
      box-shadow: 0 2px 5px rgba(0,97,164,0.3);
    }

    /* Островное поле ввода */
    .input-area-container {
      padding: 8px 16px 20px 16px;
      background: transparent;
    }

    .input-bar {
      display: flex;
      align-items: center;
      background: #ffffff;
      border-radius: 28px;
      padding: 4px 8px 4px 16px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    textarea {
      flex: 1;
      border: none;
      background: transparent;
      padding: 10px 0;
      font-size: 16px;
      outline: none;
      resize: none;
      max-height: 120px;
      font-family: inherit;
    }

    .send-btn {
      background: #0061a4;
      color: white;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-left: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.2s;
    }

    .send-btn:active {
      background: #004a7d;
    }

    /* Поддержка темной темы */
    @media (prefers-color-scheme: dark) {
      :host { background: #1a1c1e; }
      .header { background: #1a1c1e; color: #e2e2e6; box-shadow: 0 1px 0 #444; }
      .back-btn { color: #d1e4ff; }
      .received { background: #2f3033; color: #e2e2e6; box-shadow: 0 1px 2px rgba(0,0,0,0.3); }
      .input-bar { background: #2f3033; }
      textarea { color: #e2e2e6; }
      .send-btn { background: #d1e4ff; color: #00315a; }
    }
  `;H([Z({type:String})],y.prototype,"char",2);H([Z({type:String})],y.prototype,"lv",2);H([T()],y.prototype,"messages",2);H([T()],y.prototype,"isTyping",2);y=H([F("app-chat")],y);const Ie={render:()=>window.location.pathname.includes("/chat")?v`<app-chat></app-chat>`:v`<app-home></app-home>`,goto:r=>{window.history.pushState({},"",r),window.dispatchEvent(new PopStateEvent("popstate"))}};window.addEventListener("popstate",()=>{const r=document.querySelector("app-index");r&&r.requestUpdate()});var Be=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,pe=(r,e,t,s)=>{for(var i=s>1?void 0:s?qe(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Be(e,t,i),i};let L=class extends b{constructor(){super(...arguments),this.menuOpen=!1}toggleMenu(){this.menuOpen=!this.menuOpen}render(){return v`
      <button class="menu-trigger" @click=${this.toggleMenu}>☰</button>

      <div class="overlay ${this.menuOpen?"open":""}" @click=${this.toggleMenu}></div>

      <nav class="drawer ${this.menuOpen?"open":""}">
        <h2>Меню</h2>
        <a class="nav-item" href="/" @click=${this.toggleMenu}>🏠 Главная</a>
        <a class="nav-item" href="#" @click=${()=>alert("Скоро: История дел")}>📜 История расследований</a>
        <a class="nav-item" href="#" @click=${()=>alert("Скоро: Настройки")}>⚙️ Настройки</a>
      </nav>

      <main>
        ${Ie.render()}
      </main>
    `}};L.styles=J`
    :host {
      display: block;
      --drawer-width: 280px;
    }

    /* Бургер-кнопка (плавающая) */
    .menu-trigger {
      position: fixed;
      top: 12px;
      left: 12px;
      z-index: 100;
      background: #ffffff;
      border: none;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      cursor: pointer;
      font-size: 24px;
    }

    /* Оверлей (затемнение при открытии меню) */
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.5);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s;
      z-index: 150;
    }
    .overlay.open {
      opacity: 1;
      pointer-events: auto;
    }

    /* Сама панель */
    .drawer {
      position: fixed;
      top: 0;
      left: calc(-1 * var(--drawer-width));
      width: var(--drawer-width);
      height: 100%;
      background: #ffffff;
      z-index: 200;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 2px 0 12px rgba(0,0,0,0.1);
      padding: 24px 16px;
      box-sizing: border-box;
    }
    .drawer.open {
      transform: translateX(var(--drawer-width));
    }

    .drawer h2 {
      color: #0061a4;
      font-size: 22px;
      margin-bottom: 32px;
    }

    .nav-item {
      display: block;
      padding: 12px 16px;
      color: #1a1c1e;
      text-decoration: none;
      font-size: 16px;
      border-radius: 8px;
      margin-bottom: 8px;
    }
    .nav-item:hover {
      background: #f0f3f8;
    }

    @media (prefers-color-scheme: dark) {
      .menu-trigger, .drawer { background: #2f3033; color: #e2e2e6; }
      .drawer h2 { color: #d1e4ff; }
      .nav-item { color: #e2e2e6; }
      .nav-item:hover { background: #3f4043; }
    }
  `;pe([T()],L.prototype,"menuOpen",2);L=pe([F("app-index")],L);
//# sourceMappingURL=index-CxHMEzpi.js.map
