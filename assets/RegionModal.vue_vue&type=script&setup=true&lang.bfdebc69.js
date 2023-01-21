var e=(e,t,a)=>new Promise(((n,o)=>{var s=e=>{try{r(a.next(e))}catch(t){o(t)}},l=e=>{try{r(a.throw(e))}catch(t){o(t)}},r=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,l);r((a=a.apply(e,t)).next())}));import{d as t,c as a}from"./useForm.f93bccee.js";import{a as n,B as o}from"./index.1d3e54eb.js";import{af as s}from"./index.6a5548ea.js";import{B as l,N as r,D as d,_ as i,a2 as p,w as c,u as m,a1 as u}from"./vendor.7c679a32.js";const y=[{title:"区域名称",dataIndex:"name",align:"left"},{title:"区域编码",dataIndex:"code"},{title:"区域排序",dataIndex:"sort"},{title:"创建时间",dataIndex:"createTime",width:200},{title:"备注",dataIndex:"remarks"}],g=[{field:"name",label:"区域名称",component:"Input",componentProps:{placeholder:"请输入区域名称"},colProps:{span:8}},{field:"code",label:"区域编码",component:"Input",componentProps:{placeholder:"请输入区域编码"},colProps:{span:7}},{field:"dateRange",label:"创建时间",component:"RangePicker",componentProps:{style:{width:"100%"},valueFormat:"YYYY-MM-DD",placeholder:["开始日期","结束日期"]},colProps:{span:8}}],f=[{field:"id",label:"ID",component:"Input",show:!1},{field:"parentId",label:"上级区域",component:"TreeSelect",defaultValue:"0",componentProps:{replaceFields:{title:"name",key:"id",value:"id"},getPopupContainer:()=>document.body}},{field:"name",label:"区域名称",component:"Input",required:!0,colProps:{span:12}},{field:"code",label:"区域编码",component:"Input",colProps:{span:12}},{field:"sort",label:"区域排序",component:"InputNumber",componentProps:{style:{width:"100%"},min:0},required:!0,colProps:{span:12}},{label:"备注",field:"remarks",component:"InputTextArea"}];var h,v;(v=h||(h={})).list="/system_proxy/system/region/list",v.lazyList="/system_proxy/system/region/lazyList",v.get="/system_proxy/system/region",v.add="/system_proxy/system/region/save",v.edit="/system_proxy/system/region/update",v.del="/system_proxy/system/region/remove";const I=e=>{let t=h.lazyList;return((null==e?void 0:e.name)||(null==e?void 0:e.code)||(null==e?void 0:e.beginTime)||(null==e?void 0:e.endTime))&&(t=h.list),s.get({url:t,params:e})},x=e=>s.delete({url:`${h.del}/${e}`});var b=l({emits:["success","register"],setup(l,{emit:y}){const g=r({tag:"",parentId:"",topRegion:[{id:"0",name:"顶级区域",children:[]}]}),[v,{resetFields:x,setFieldsValue:b,updateSchema:P,validate:w,clearValidate:_}]=t({labelWidth:100,schemas:f,showActionButtonGroup:!1,baseColProps:{span:24}}),[R,{setModalProps:L,closeModal:k,changeLoading:D}]=n(((...t)=>e(this,[...t],(function*(e={_tag:""}){var t,a;D(!0),yield x(),yield _(),g.tag=e._tag,yield P({field:"parentId",componentProps:{treeData:g.topRegion,onChange:e=>{e&&(g.parentId=e)},loadData:e=>{const{id:t}=e.dataRef;return I({parentId:t}).then((t=>{var a;e.dataRef.children=null==(a=t||[])?void 0:a.map((e=>(e.hasOwnProperty("children")?e.isLeaf=!1:e.isLeaf=!0,e)))}))}}});const n=null==(t=e.record)?void 0:t.id,o={confirmLoading:!1};switch(g.tag){case"add":o.title="新增区域",n&&(g.parentId=n,yield b({parentId:null==(a=e.record)?void 0:a.name}));break;case"edit":o.title="编辑区域";const t=yield(l=n,s.get({url:`${h.get}/${l}`})),r=t.result;g.parentId=r.parentId,(null==t?void 0:t.extend)&&(r.parentId=null==t?void 0:t.extend.name),yield b(r)}var l;L(o),D(!1)}))));function C(){return e(this,null,(function*(){try{const t=yield w();switch(L({confirmLoading:!0}),t.parentId=g.parentId,g.tag){case"add":yield(e=t,s.post({url:h.add,data:e}));break;case"edit":yield(e=>s.put({url:h.edit,data:e}))(t)}k(),y("success")}finally{L({confirmLoading:!1})}var e}))}return(e,t)=>(d(),i(m(o),u(e.$attrs,{width:"720px",maskClosable:!1,destroyOnClose:!0,onOk:C,onRegister:m(R)}),{default:p((()=>[c(m(a),{onRegister:m(v)},null,8,["onRegister"])])),_:1},16,["onRegister"]))}});export{b as _,y as c,x as d,I as l,g as s};
