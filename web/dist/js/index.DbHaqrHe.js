import"./el-button.Bf-OVv06.js";import{E as e}from"./el-drawer.--C-lpCR.js";import{i as r}from"./message.ohA7tZs1.js";import{a as l,E as a}from"./el-form-item.M-ghQCfn.js";import{E as s}from"./el-card.vZ36OKf6.js";import{E as o,a as t}from"./el-descriptions-item.Doyu0KGy.js";import{_ as i}from"./index.DcE9Scjy.js";import{r as d}from"./index.Ct-vKfEQ.js";import{E as p}from"./index.eDhpYl8G.js";import{E as m}from"./index.7fU9QC-V.js";import{d as u,o as n,r as c,x as f,k as v,f as _,m as j,w as V,u as b,X as w,F as y,a as g,A as h,t as x,_ as C}from"./index.Dtsxs5-j.js";import"./use-dialog.CS3h8_eu.js";import"./vnode.C8vko7L8.js";import"./event.BwRzfsZt.js";import"./use-form-item.vgwZ2Rnc.js";import"./index.DhER-06O.js";import"./scroll.BeZ43HJL.js";import"./focus-trap.BiItK6l-.js";import"./castArray.B6kcHc-f.js";import"./_baseClone.Cjz58nAh.js";import"./_Uint8Array.DZ6GMUyG.js";import"./_initCloneObject.L1lxMjk_.js";const k={class:"am-alarm-title"},U={class:"am-alarm-mail-test"},z={class:"am-alamr-edit-mail"},E=C(u({__name:"index",setup(u){n((async()=>{const{data:e}=await d.get("/api/v1/mail/mail_query",{});A.id=e.id,A.server=e.server,A.port=e.port,A.sender=e.sender,A.receiver=e.receiver}));const C=c(!1),E=()=>C.value=!0,q=c(),A=f({id:0,server:"",port:465,sender:"",password:"******",receiver:""}),N=f({server:[{required:!0,message:"请输入邮箱服务器地址",trigger:"blur"}],port:[{required:!0,message:"请输入邮箱服务器端口",trigger:"blur"}],sender:[{required:!0,message:"请输入发信邮箱账号",trigger:"blur"}],password:[{required:!0,message:"请输入发信邮箱密码",trigger:"blur"}]}),$=()=>{C.value=!1},B=()=>{if(0==A.id){(function(e){return d.post("/api/v1/mail/mail_create",e)})({server:A.server,port:Number(A.port),sender:A.sender,password:A.password,receiver:A.receiver}).finally((()=>{r("邮件设置创建成功"),C.value=!1}))}else{(function(e){return d.post("/api/v1/mail/mail_update",e)})({id:A.id,server:A.server,port:Number(A.port),sender:A.sender,password:A.password,receiver:A.receiver}).finally((()=>{r("邮件设置更新成功"),C.value=!1}))}},F=c(""),G=()=>{let e={receiver:F.value};var l;(l=e,d.post("/api/v1/mail/mail_test",l)).finally((()=>{r("邮件发送成功")}))};return(r,d)=>{const u=i,n=o,c=p,f=m,I=t,J=s,K=l,O=a,R=e;return g(),v(y,null,[_("div",k,[_("span",{onClick:d[0]||(d[0]=e=>r.$router.push("/alarm/mail"))},"告警配置"),_("span",{onClick:d[1]||(d[1]=e=>r.$router.push("/alarm/threshold"))},"告警阈值")]),j(J,{shadow:"never"},{default:V((()=>[j(I,{title:"发信邮箱服务配置",column:1},{default:V((()=>[j(n,{label:"告警邮箱"},{default:V((()=>[h(x(b(A).sender)+" ",1),j(u,{"icon-class":"edit",style:{cursor:"pointer"},onClick:E})])),_:1}),_("div",U,[j(n,{label:"发信测试"},{default:V((()=>[j(c,{modelValue:b(F),"onUpdate:modelValue":d[2]||(d[2]=e=>w(F)?F.value=e:null),style:{width:"240px"},size:"small",placeholder:"请输入收信邮箱"},null,8,["modelValue"]),j(f,{style:{"margin-left":"8px"},size:"small",plain:"",type:"primary",onClick:G},{default:V((()=>[h("测试")])),_:1})])),_:1})])])),_:1})])),_:1}),_("div",z,[j(R,{modelValue:b(C),"onUpdate:modelValue":d[8]||(d[8]=e=>w(C)?C.value=e:null),size:"540",title:"发信邮箱服务设置"},{default:V((()=>[j(O,{ref_key:"mailSettingRef",ref:q,model:b(A),rules:b(N),"label-width":"120px","label-position":"left"},{default:V((()=>[j(K,{prop:"server",label:"邮箱服务器"},{default:V((()=>[j(c,{modelValue:b(A).server,"onUpdate:modelValue":d[3]||(d[3]=e=>b(A).server=e),placeholder:"请输入邮箱服务器地址"},null,8,["modelValue"])])),_:1}),j(K,{prop:"port",label:"邮箱服务端口"},{default:V((()=>[j(c,{modelValue:b(A).port,"onUpdate:modelValue":d[4]||(d[4]=e=>b(A).port=e),placeholder:"请输入邮箱服务器端口"},null,8,["modelValue"])])),_:1}),j(K,{prop:"sender",label:"发信邮箱账号"},{default:V((()=>[j(c,{modelValue:b(A).sender,"onUpdate:modelValue":d[5]||(d[5]=e=>b(A).sender=e),placeholder:"请输入发信邮箱账号"},null,8,["modelValue"])])),_:1}),j(K,{prop:"password",label:"发信邮箱密码"},{default:V((()=>[j(c,{modelValue:b(A).password,"onUpdate:modelValue":d[6]||(d[6]=e=>b(A).password=e),type:"password",placeholder:"请输入发信邮箱密码","show-password":""},null,8,["modelValue"])])),_:1}),j(K,{prop:"receiver",label:"收信邮箱"},{default:V((()=>[j(c,{modelValue:b(A).receiver,"onUpdate:modelValue":d[7]||(d[7]=e=>b(A).receiver=e),placeholder:"请输入收信邮箱(多个用,分割)"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"]),j(f,{type:"default",size:"default",plain:"",onClick:$},{default:V((()=>[h("取消")])),_:1}),j(f,{type:"primary",size:"default",plain:"",onClick:B},{default:V((()=>[h("确定")])),_:1})])),_:1},8,["modelValue"])])],64)}}}),[["__scopeId","data-v-596baa04"]]);export{E as default};
