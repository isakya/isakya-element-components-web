import{d as h,r as A,a as p,o as D,c as v,b as o,w as u,u as l,i as _,e as i,f as C,E as c}from"./index-99e05a2b.js";const y=i("open"),f=i("\u53D6\u6D88"),B=i("\u786E\u8BA4"),k=i("\u4E0A\u4F20"),x=C("div",{style:{color:"#ccc","font-size":"12px","margin-left":"10px"}}," jpg/png files with a size less than 500KB. ",-1),N=h({__name:"index",setup(w){let a=A(!1),d=()=>{a.value=!0},g=[{type:"input",value:"",label:"\u7528\u6237\u540D",prop:"username",rules:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u53EF\u4E3A\u7A7A",trigger:"blur"},{min:2,max:6,message:"\u7528\u6237\u540D\u57282-6\u4F4D\u4E4B\u95F4"}]},{type:"input",value:"",label:"\u5BC6\u7801",prop:"password",rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u53EF\u4E3A\u7A7A",trigger:"blur"},{min:6,max:15,message:"\u5BC6\u7801\u57286-15\u4F4D\u4E4B\u95F4",trigger:"blur"}],attrs:{showPassword:!0,clearable:!0}},{type:"select",value:"",placeholder:"\u8BF7\u9009\u62E9\u804C\u4F4D",prop:"role",label:"\u804C\u4F4D",attrs:{style:{width:"100%"}},rules:[{required:!0,message:"\u804C\u4F4D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"option",label:"\u7ECF\u7406",value:"1"},{type:"option",label:"\u4E3B\u7BA1",value:"2"},{type:"option",label:"\u5458\u5DE5",value:"3"}]},{type:"checkbox-group",value:[],prop:"like",label:"\u7231\u597D",rules:[{required:!0,message:"\u7231\u597D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"checkbox",label:"\u8DB3\u7403",value:"1"},{type:"checkbox",label:"\u7BEE\u7403",value:"2"},{type:"checkbox",label:"\u6392\u7403",value:"3"}]},{type:"radio-group",value:"",prop:"gender",label:"\u6027\u522B",rules:[{required:!0,message:"\u6027\u522B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"radio",label:"\u7537",value:"male"},{type:"radio",label:"\u5973",value:"female"},{type:"radio",label:"\u672A\u77E5",value:"not"}]},{type:"upload",label:"\u4E0A\u4F20",prop:"pic",uploadAttrs:{action:"https://www.fastmock.site/mock/d3a3f89bb4f7a78cde5517e167d4e750/api/upload",multiple:!0,limit:3,method:"post"},rules:[{required:!0,message:"\u56FE\u7247\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},{type:"editor",value:"",prop:"desc",label:"\u63CF\u8FF0",placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0",rules:[{required:!0,message:"\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}],m=e=>{let r=e.validate(),t=e.getFormData;r(n=>{n?(c.success("\u9A8C\u8BC1\u6210\u529F"),console.log(t())):c.error("\u9A8C\u8BC1\u5931\u8D25")})},F=()=>{},b=e=>{console.log("handleSuccess"),console.log(e)},E=e=>{console.log("handleChange"),console.log(e)};return(e,r)=>{const t=p("el-button"),n=p("modalForm");return D(),v("div",null,[o(t,{type:"primary",onClick:l(d)},{default:u(()=>[y]),_:1},8,["onClick"]),o(n,{isScroll:!0,"on-change":l(E),"on-success":l(b),options:l(g),visible:l(a),"onUpdate:visible":r[0]||(r[0]=s=>_(a)?a.value=s:a=s),title:"\u7F16\u8F91\u7528\u6237"},{footer:u(({form:s})=>[o(t,{onClick:l(F)},{default:u(()=>[f]),_:1},8,["onClick"]),o(t,{type:"primary",onClick:q=>l(m)(s)},{default:u(()=>[B]),_:2},1032,["onClick"])]),uploadArea:u(()=>[o(t,{size:"small",type:"primary"},{default:u(()=>[k]),_:1})]),uploadTip:u(()=>[x]),_:1},8,["on-change","on-success","options","visible"])])}}});export{N as default};
