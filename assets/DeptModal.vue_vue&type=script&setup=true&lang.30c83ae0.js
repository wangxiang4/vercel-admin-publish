var e=(e,a,t)=>new Promise(((o,l)=>{var n=e=>{try{r(t.next(e))}catch(a){l(a)}},s=e=>{try{r(t.throw(e))}catch(a){l(a)}},r=e=>e.done?o(e.value):Promise.resolve(e.value).then(n,s);r((t=t.apply(e,a)).next())}));import{d as a,c as t}from"./useForm.f93bccee.js";import{af as o,c1 as l,B as n,r as s,u as r,D as d,_ as i,a2 as p,w as c,a1 as m}from"./vendor.7c679a32.js";/* empty css              */import{a as u,B as f}from"./index.1d3e54eb.js";import{l as g,g as b,e as h,a as P}from"./dept.5ad51f22.js";import{aG as I}from"./index.6a5548ea.js";const y=[{title:"部门名称",dataIndex:"name",align:"left"},{title:"部门编码",dataIndex:"code"},{title:"排序",dataIndex:"sort"},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const a=0==~~e.status,t=a?"正常":"停用";return o(l,{color:a?"green":"red"},(()=>t))}},{title:"创建时间",dataIndex:"createTime"}],v=[{field:"name",label:"部门名称",component:"Input",componentProps:{placeholder:"请输入部门名称"},colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"正常",value:"0"},{label:"停用",value:"1"}]},colProps:{span:7}},{field:"dateRange",label:"创建时间",component:"RangePicker",componentProps:{style:{width:"100%"},valueFormat:"YYYY-MM-DD",placeholder:["开始日期","结束日期"]},colProps:{span:8}}],x=[{field:"deptId",label:"ID",component:"Input",show:!1},{field:"parentId",label:"上级部门",component:"TreeSelect",defaultValue:"0",componentProps:{replaceFields:{title:"name",key:"deptId",value:"deptId"},getPopupContainer:()=>document.body}},{field:"name",label:"部门名称",component:"Input",required:!0,colProps:{span:12}},{field:"code",label:"部门代码",component:"Input",required:!0,colProps:{span:12}},{field:"contacts",label:"联系人",component:"Input",colProps:{span:12}},{field:"phone",label:"联系人电话",component:"Input",rules:[{pattern:new RegExp("^1[3|4|5|6|7|8|9][0-9]\\d{8}$"),message:"请输入正确的手机号码!",validateTrigger:"change"}],colProps:{span:12}},{field:"sort",label:"部门排序",component:"InputNumber",componentProps:{style:{width:"100%"},min:0},required:!0,colProps:{span:12}},{field:"email",label:"邮箱",component:"Input",rules:[{type:"email",message:"请输入正确的邮箱地址!",validateTrigger:"change"}],colProps:{span:12}},{field:"status",label:"状态",component:"RadioGroup",defaultValue:"0",componentProps:{options:[{label:"正常",value:"0"},{label:"停用",value:"1"}]},required:!0,colProps:{span:12}}];var w=n({emits:["success","register"],setup(o,{emit:l}){const n=s(""),[y,{resetFields:v,setFieldsValue:w,updateSchema:R,validate:j,clearValidate:k}]=a({labelWidth:100,schemas:x,showActionButtonGroup:!1,baseColProps:{span:24}}),[D,{setModalProps:F,closeModal:_}]=u(((...a)=>e(this,[...a],(function*(e={_tag:""}){var a;yield v(),yield k(),n.value=e._tag;const t={deptId:"0",name:"顶级部门",children:[]};t.children=I(yield g()),yield R({field:"parentId",componentProps:{treeData:[t]}});const o=null==(a=e.record)?void 0:a.deptId,l={confirmLoading:!1};switch(r(n)){case"add":l.title="新增部门",o&&(yield w({parentId:o}));break;case"edit":l.title="编辑部门",yield w(yield b(o))}F(l)}))));function q(){return e(this,null,(function*(){try{const e=yield j();switch(F({confirmLoading:!0}),r(n)){case"add":yield P(e);break;case"edit":yield h(e)}_(),l("success")}finally{F({confirmLoading:!1})}}))}return(e,a)=>(d(),i(r(f),m(e.$attrs,{width:"720px",onOk:q,onRegister:r(D)}),{default:p((()=>[c(r(t),{onRegister:r(y)},null,8,["onRegister"])])),_:1},16,["onRegister"]))}});export{w as _,y as c,v as s};
