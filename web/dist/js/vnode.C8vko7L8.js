import{a4 as E,p as T,aa as e,aq as s}from"./index.Dtsxs5-j.js";var r=(E=>(E[E.TEXT=1]="TEXT",E[E.CLASS=2]="CLASS",E[E.STYLE=4]="STYLE",E[E.PROPS=8]="PROPS",E[E.FULL_PROPS=16]="FULL_PROPS",E[E.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",E[E.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",E[E.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",E[E.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",E[E.NEED_PATCH=512]="NEED_PATCH",E[E.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",E[E.HOISTED=-1]="HOISTED",E[E.BAIL=-2]="BAIL",E))(r||{});const S=E=>{if(!T(E))return{};const r=E.props||{},S=(T(E.type)?E.type.props:void 0)||{},a={};return Object.keys(S).forEach((E=>{e(S[E],"default")&&(a[E]=S[E].default)})),Object.keys(r).forEach((E=>{a[s(E)]=r[E]})),a},a=e=>{const s=E(e)?e:[e],r=[];return s.forEach((e=>{var s;E(e)?r.push(...a(e)):T(e)&&E(e.children)?r.push(...a(e.children)):(r.push(e),T(e)&&(null==(s=e.component)?void 0:s.subTree)&&r.push(...a(e.component.subTree)))})),r};export{r as P,a as f,S as g};
