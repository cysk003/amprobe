import"./el-button.BjoBO7gr.js";import{E as e}from"./el-drawer.BU6O2wLC.js";import"./message.CGCr1_ri.js";import{E as a}from"./el-card.L05dtrPJ.js";import{_ as s}from"./index.BWKbS7n9.js";import{E as t}from"./el-divider.DYmMvdHB.js";import{k as r,S as l}from"./index.cucq6WIU.js";import{E as o}from"./index.Bnc2yDHC.js";import{E as i}from"./index.uJQQwVZH.js";import{d as n,r as d,o as m,k as u,f as p,m as c,w as f,u as j,X as v,F as _,a as k,A as g,R as y,S as w,_ as x}from"./index.uYlXueq8.js";import"./use-dialog.BQbW5qj8.js";import"./vnode.nPexdVgf.js";import"./event.BwRzfsZt.js";import"./use-form-item.BK24vgth.js";import"./index.DYXx8Gyw.js";import"./scroll.D6lis9rj.js";import"./focus-trap.DFYIA1qy.js";import"./index.CSTJ0c2Y.js";const h=e=>(y("data-v-d4e73c6f"),e=e(),w(),e),V={class:"am-settings-title"},C=h((()=>p("h4",null,"镜像加速设置",-1))),E=h((()=>p("p",null,"优先使用加速 URL 执行操作，设置为空则取消镜像加速。",-1))),z={class:"am-settings-drawer"},U={class:"am-settings-drawer__input"},$={class:"am-settings-drawer__operator"},b=x(n({__name:"index",setup(n){const y=d(""),w=d(!1),x=async()=>{const{data:e}=await r();y.value=e.registry_mirrors.join("\n")},h=()=>{w.value=!1},b=async()=>{let e={registry_mirrors:y.value.split("\n").map((e=>e.trim()))};await l(e),x(),w.value=!1};return m((()=>{x()})),(r,l)=>{const n=t,d=o,m=s,x=i,R=a,S=e;return k(),u(_,null,[p("div",V,[p("span",{onClick:l[0]||(l[0]=e=>r.$router.push("/docker/container"))},"容器"),p("span",{onClick:l[1]||(l[1]=e=>r.$router.push("/docker/image"))},"镜像"),p("span",{onClick:l[2]||(l[2]=e=>r.$router.push("/docker/network"))},"网络"),p("span",{onClick:l[3]||(l[3]=e=>r.$router.push("/docker/settings"))},"设置")]),c(R,{shadow:"never",class:"am-settings-image"},{default:f((()=>[C,c(n),c(d,{modelValue:j(y),"onUpdate:modelValue":l[4]||(l[4]=e=>v(y)?y.value=e:null),style:{width:"240px"},rows:6,type:"textarea",placeholder:"https://docker.nju.edu.cn\nhttps://mirror.baidubce.com"},null,8,["modelValue"]),E,c(x,{type:"primary",plain:"",onClick:l[5]||(l[5]=e=>w.value=!0)},{default:f((()=>[c(m,{"icon-class":"settings"}),g(" 设置")])),_:1})])),_:1}),p("div",z,[c(S,{modelValue:j(w),"onUpdate:modelValue":l[7]||(l[7]=e=>v(w)?w.value=e:null),size:"540",title:"镜像加速"},{default:f((()=>[p("div",U,[c(d,{modelValue:j(y),"onUpdate:modelValue":l[6]||(l[6]=e=>v(y)?y.value=e:null),rows:6,type:"textarea"},null,8,["modelValue"])]),p("div",$,[c(x,{type:"default",size:"default",plain:"",onClick:h},{default:f((()=>[g("取消")])),_:1}),c(x,{type:"primary",size:"default",plain:"",onClick:b},{default:f((()=>[g(" 确定 ")])),_:1})])])),_:1},8,["modelValue"])])],64)}}}),[["__scopeId","data-v-d4e73c6f"]]);export{b as default};
