var e,a,l=(e,a,l)=>new Promise(((s,t)=>{var r=e=>{try{o(l.next(e))}catch(a){t(a)}},d=e=>{try{o(l.throw(e))}catch(a){t(a)}},o=e=>e.done?s(e.value):Promise.resolve(e.value).then(r,d);o((l=l.apply(e,a)).next())}));import{B as s,bJ as t,ak as r,co as d,r as o,N as i,Z as u,D as n,_ as m,a2 as f,w as v,u as c,bK as p,a1 as y,a9 as g,bT as _,bS as R}from"./vendor.7c679a32.js";/* empty css              *//* empty css              *//* empty css              */import{a as h,B as b}from"./index.1d3e54eb.js";import{af as w}from"./index.6a5548ea.js";(a=e||(e={})).list="/system_proxy/system/config/list",a.add="/system_proxy/system/config/save",a.get="/system_proxy/system/config",a.edit="/system_proxy/system/config/update",a.del="/system_proxy/system/config/remove",a.getByKey="/system_proxy/system/config/getByKey";const x=a=>w.get({url:e.list,params:a},{isReturnResultResponse:!0}),k=a=>w.delete({url:`${e.del}/${a}`}),j=g("是"),C=g("否");var T=s({emits:["success","register"],setup(a,{emit:s}){const g=t,x=t.Item,k=r.TextArea,T=d,U=d.Group,K=_,S=R,$=o(),B=i({tag:"",modelRef:{id:void 0,name:void 0,key:void 0,value:void 0,isSys:"0",remarks:void 0},rulesRef:{name:[{required:!0,whitespace:!0,message:"参数名称不能为空",validateTrigger:"blur"}],key:[{required:!0,whitespace:!0,message:"参数键名不能为空",validateTrigger:"blur"}],value:[{required:!0,whitespace:!0,message:"参数键值不能为空",validateTrigger:"blur"}]}}),[q,{setModalProps:L,closeModal:P}]=h(((...a)=>l(this,[...a],(function*(a={_tag:""}){var l;$.value.resetFields(),$.value.clearValidate(),B.tag=a._tag;const s=null==(l=a.record)?void 0:l.id,t={confirmLoading:!1};switch(B.tag){case"add":t.title="新增配置参数";break;case"edit":t.title="编辑配置参数";const a=yield(r=s,w.get({url:`${e.get}/${r}`}));B.modelRef=a}var r;L(t)}))));function E(){return l(this,null,(function*(){try{const l=yield $.value.validate();switch(console.log(l),L({confirmLoading:!0}),B.tag){case"add":yield(a=l,w.post({url:e.add,data:a}));break;case"edit":yield(a=>w.put({url:e.edit,data:a}))(l)}P(),s("success")}finally{L({confirmLoading:!1})}var a}))}return(e,a)=>{const l=u("a-input");return n(),m(c(b),y(e.$attrs,{width:720,height:500,onRegister:c(q),onOk:E}),{default:f((()=>[v(c(g),{ref:(e,a)=>{a.formElRef=e,$.value=e},labelCol:{style:{width:"120px"}},wrapperCol:{style:{width:"100%"}},model:c(B).modelRef,rules:c(B).rulesRef,scrollToFirstError:!0,onKeypress:p(E,["enter"])},{default:f((()=>[v(c(x),{name:"id"},{default:f((()=>[v(c(r),{value:c(B).modelRef.id,"onUpdate:value":a[0]||(a[0]=e=>c(B).modelRef.id=e),hidden:!0},null,8,["value"])])),_:1}),v(c(K),{justify:"center"},{default:f((()=>[v(c(S),{span:12},{default:f((()=>[v(c(x),{label:"参数名称",name:"name"},{default:f((()=>[v(l,{value:c(B).modelRef.name,"onUpdate:value":a[1]||(a[1]=e=>c(B).modelRef.name=e),placeholder:"请输入参数名称",allowClear:""},null,8,["value"])])),_:1})])),_:1}),v(c(S),{span:12},{default:f((()=>[v(c(x),{label:"参数键名",name:"key"},{default:f((()=>[v(l,{value:c(B).modelRef.key,"onUpdate:value":a[2]||(a[2]=e=>c(B).modelRef.key=e),placeholder:"请输入参数键名",allowClear:""},null,8,["value"])])),_:1})])),_:1}),v(c(S),{span:12},{default:f((()=>[v(c(x),{label:"参数键值",name:"value"},{default:f((()=>[v(l,{value:c(B).modelRef.value,"onUpdate:value":a[3]||(a[3]=e=>c(B).modelRef.value=e),placeholder:"请输入参数键值",allowClear:""},null,8,["value"])])),_:1})])),_:1}),v(c(S),{span:12},{default:f((()=>[v(c(x),{label:"系统内置",name:"isSys"},{default:f((()=>[v(c(U),{value:c(B).modelRef.isSys,"onUpdate:value":a[4]||(a[4]=e=>c(B).modelRef.isSys=e)},{default:f((()=>[v(c(T),{value:"0"},{default:f((()=>[j])),_:1}),v(c(T),{value:"1"},{default:f((()=>[C])),_:1})])),_:1},8,["value"])])),_:1})])),_:1}),v(c(S),null,{default:f((()=>[v(c(x),{label:"备注",name:"remarks"},{default:f((()=>[v(c(k),{value:c(B).modelRef.remarks,"onUpdate:value":a[5]||(a[5]=e=>c(B).modelRef.remarks=e),placeholder:"请输入备注",rows:6,allowClear:""},null,8,["value"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules","onKeypress"])])),_:1},16,["onRegister"])}}});export{T as _,k as d,x as l};
