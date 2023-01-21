var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,i=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&o(e,r,t[r]);if(n)for(var r of n(t))l.call(t,r)&&o(e,r,t[r]);return e},u=(e,n)=>t(e,r(n));import{B as s,cI as c,r as d,a as m,ai as p,Z as v,D as h,E as f,w as b,a2 as y,_ as g,a8 as C,J as O,a9 as w,K as x}from"./vendor.7c679a32.js";/* empty css              */import{_ as I,p as j,b as k,D as P,u as B,c as M,a8 as R,R as A,A as D,h as S,aK as $}from"./index.6a5548ea.js";var _=s({name:"LayoutBreadcrumb",components:{Icon:I,[c.name]:c},props:{theme:j.oneOf(["dark","light"])},setup(){const e=d([]),{currentRoute:t}=m(),{prefixCls:r}=k("layout-breadcrumb"),{getShowBreadCrumbIcon:n}=P(),a=B(),{t:l}=M();function o(e,t){const r=[];return e.forEach((e=>{var n,a;t.includes(e.path)&&r.push(u(i({},e),{name:(null==(n=e.meta)?void 0:n.title)||e.name})),(null==(a=e.children)?void 0:a.length)&&r.push(...o(e.children,t))})),r}return p((()=>{return r=this,n=null,a=function*(){var r,n,a;if(t.value.name===A)return;const l=yield D(),s=t.value.matched,c=null==s?void 0:s[s.length-1];let d=t.value.path;c&&(null==(r=null==c?void 0:c.meta)?void 0:r.currentActiveMenu)&&(d=c.meta.currentActiveMenu);const m=S(l,d),p=o(l.filter((e=>e.path===m[0])),m);if(!p||0===p.length)return;const v=$(p,(e=>{const{meta:t,name:r}=e;if(!t)return!!r;const{title:n,hideBreadcrumb:a,hideMenu:l}=t;return!(!n||a||l)})).filter((e=>{var t,r;return!(null==(t=e.meta)?void 0:t.hideBreadcrumb)||!(null==(r=e.meta)?void 0:r.hideMenu)}));(null==(n=t.value.meta)?void 0:n.currentActiveMenu)&&v.push(u(i({},t.value),{name:(null==(a=t.value.meta)?void 0:a.title)||t.value.name})),e.value=v},new Promise(((e,t)=>{var l=e=>{try{i(a.next(e))}catch(r){t(r)}},o=e=>{try{i(a.throw(e))}catch(r){t(r)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(l,o);i((a=a.apply(r,n)).next())}));var r,n,a})),{routes:e,t:l,prefixCls:r,getIcon:function(e){var t;return e.icon||(null==(t=e.meta)?void 0:t.icon)},getShowBreadCrumbIcon:n,handleClick:function(e,t,r){null==r||r.preventDefault();const{children:n,redirect:l,meta:o}=e;if(!(null==n?void 0:n.length)||l){if(!(null==o?void 0:o.carryParam))if(l&&R(l))a(l);else{let e="";if(1===t.length)e=t[0];else{e=`${t.slice(1).pop()||""}`}e=/^\//.test(e)?e:`/${e}`,a(e)}}else null==r||r.stopPropagation()},hasRedirect:function(e,t){return e.indexOf(t)!==e.length-1}}}});const E={key:1};_.render=function(e,t,r,n,a,l){const o=v("Icon"),i=v("router-link"),u=v("a-breadcrumb");return h(),f("div",{class:x([e.prefixCls,`${e.prefixCls}--${e.theme}`])},[b(u,{routes:e.routes},{itemRender:y((({route:t,routes:r,paths:n})=>[e.getShowBreadCrumbIcon&&e.getIcon(t)?(h(),g(o,{key:0,icon:e.getIcon(t)},null,8,["icon"])):C("",!0),e.hasRedirect(r,t)?(h(),g(i,{key:2,to:"",onClick:r=>e.handleClick(t,n,r)},{default:y((()=>[w(O(e.t(t.name||t.meta.title)),1)])),_:2},1032,["onClick"])):(h(),f("span",E,O(e.t(t.name||t.meta.title)),1))])),_:1},8,["routes"])],2)};export{_ as default};
