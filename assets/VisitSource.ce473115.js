import{B as e,c2 as a,r as t,Q as i,Z as n,D as o,_ as r,a2 as s,H as l,U as d}from"./vendor.7c679a32.js";/* empty css              *//* empty css              *//* empty css              */import{u as m}from"./useECharts.38f11fc0.js";import"./index.6a5548ea.js";var p=e({components:{Card:a},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=t(null),{setOptions:n}=m(a);return i((()=>e.loading),(()=>{e.loading||n({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center"},series:[{color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],name:"访问来源",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"搜索引擎"},{value:735,name:"直接访问"},{value:580,name:"邮件营销"},{value:484,name:"联盟广告"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return 100*Math.random()}}]})}),{immediate:!0}),{chartRef:a}}});p.render=function(e,a,t,i,m,p){const f=n("Card");return o(),r(f,{title:"访问来源",loading:e.loading},{default:s((()=>[l("div",{ref:"chartRef",style:d({width:e.width,height:e.height})},null,4)])),_:1},8,["loading"])};export{p as default};
