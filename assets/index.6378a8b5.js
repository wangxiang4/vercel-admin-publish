var e=(e,t,o)=>new Promise(((i,n)=>{var a=e=>{try{r(o.next(e))}catch(t){n(t)}},s=e=>{try{r(o.throw(e))}catch(t){n(t)}},r=e=>e.done?i(e.value):Promise.resolve(e.value).then(a,s);r((o=o.apply(e,t)).next())}));import{u as t,_ as o}from"./useTable.81787a2e.js";import{_ as i}from"./useForm.f93bccee.js";import{l as n,d as a}from"./role.33dd7932.js";import{a as s}from"./index.32a4a07a.js";import{c as r,s as d,_ as l}from"./RoleDrawer.vue_vue&type=script&setup=true&lang.5dfcfa72.js";import{a7 as c}from"./index.6a5548ea.js";import{B as u,N as m,Z as p,bE as f,D as b,E as j,w as x,a2 as h,F as g,u as y,a9 as _,t as v}from"./vendor.7c679a32.js";import"./props.df8b9a2a.js";import"./const.ba9bd2e6.js";import"./useWindowSizeFn.bec912bd.js";import"./index.1d3e54eb.js";import"./onMountedOrActivated.51a605f4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./dateUtil.839e4f2c.js";/* empty css              */import"./useSortable.7806d92e.js";/* empty css              *//* empty css              *//* empty css              */import"./index.1c4a88d9.js";/* empty css              */import"./download.38a3a81a.js";import"./index.3b2c921a.js";/* empty css              */import"./tenant.97003ced.js";import"./Tree.vue_vue&type=style&index=0&lang.a6d5c734.js";import"./menu.9d58d752.js";const w=_("新增角色"),S=_("修改角色"),C=_("删除角色");var k=u({setup(u){const _=m({ids:[],single:!0,multiple:!0}),{createConfirm:k,createMessage:R}=c(),[F,{openDrawer:T}]=s(),[D,{reload:E,clearSelectedRowKeys:I}]=t({title:"角色列表",api:n,rowKey:"id",columns:r,formConfig:{labelWidth:120,schemas:d,autoSubmitOnEnter:!0},rowSelection:{type:"checkbox"},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,clickToRowSelect:!1,actionColumn:{width:220,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1},handleSearchInfoFn:()=>I()});function O(e){const t=v(null==e?void 0:e.keys)||[];_.ids=t,_.single=1!=t.length,_.multiple=!t.length}function K(e){e=e||{id:v(_.ids)},T(!0,{_tag:"edit",record:e})}function M(t){return e(this,null,(function*(){const o=(null==t?void 0:t.id)||v(_.ids);k({iconType:"warning",title:"警告",content:`是否确认删除角色编号为${o}角色吗?`,onOk:()=>e(this,null,(function*(){yield a(o),R.success("删除成功!"),P()}))})}))}function P(){I(),E()}return(e,t)=>{const n=p("a-button"),a=f("auth");return b(),j("div",null,[x(y(o),{onRegister:y(D),onSelectionChange:O},{toolbar:h((()=>[g(x(n,{type:"primary",onClick:t[0]||(t[0]=e=>{T(!0,{_tag:"add"})})},{default:h((()=>[w])),_:1},512),[[a,["role_add"]]]),g(x(n,{type:"primary",disabled:y(_).single,onClick:t[1]||(t[1]=e=>K())},{default:h((()=>[S])),_:1},8,["disabled"]),[[a,["role_edit"]]]),g(x(n,{type:"primary",disabled:y(_).multiple,onClick:t[2]||(t[2]=e=>M())},{default:h((()=>[C])),_:1},8,["disabled"]),[[a,["role_del"]]])])),action:h((({record:e})=>[x(y(i),{actions:[{label:"编辑",icon:"fa6-regular:pen-to-square",auth:["role_edit"],onClick:K.bind(null,e)},{label:"删除",icon:"ant-design:delete-outlined",auth:["role_del"],color:"error",onClick:M.bind(null,e)}]},null,8,["actions"])])),_:1},8,["onRegister"]),x(l,{onRegister:y(F),onSuccess:P},null,8,["onRegister"])])}}});export{k as default};
