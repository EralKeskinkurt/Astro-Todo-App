import{j as t}from"./jsx-runtime.b9e88e07.js";import{r}from"./index.03be2d59.js";function h(o){let s=JSON.parse(o.todos).find(e=>e.todoId===JSON.parse(o.selectedTodo));const[d,l]=r.useState(""),[n,c]=r.useState(""),a=JSON.parse(o.todos).find(e=>e.todoId!==JSON.parse(o.selectedTodo));console.log(a);const i=async()=>{let e=a.length===0?[]:[a];e.push({todoId:new Date().getMilliseconds()*39595*new Date().getTime(),todoName:d,todoDesc:n}),console.log(e),await fetch("/api/controller",{method:"POST",body:JSON.stringify(e)})};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"input-group",children:[t.jsx("input",{className:"input-item",type:"text",value:d,onChange:e=>l(e.target.value),placeholder:s.todoName}),t.jsx("textarea",{className:"textarea-item",value:n,onChange:e=>c(e.target.value),placeholder:s.todoDesc}),t.jsx("button",{onClick:i,children:t.jsx("a",{href:"/",children:"Update"})})]})})}export{h as default};