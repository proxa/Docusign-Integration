(this["webpackJsonpdocusign-client"]=this["webpackJsonpdocusign-client"]||[]).push([[0],{43:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(0),j=c.n(n),r=c(12),s=c.n(r),i=c(25),o=c(61),l=(c(43),c(63)),a=c(64),d=c(2),b=function(e){return Object(d.jsx)(l.a,{m:1,display:"inline-block",children:Object(d.jsx)(a.a,{variant:"contained",color:"primary",href:e.link,type:e.type,onClick:e.clickfn,children:e.text})})};function x(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{text:"Homeowner",link:"/login"}),Object(d.jsx)(b,{text:"Builder",link:"/login"})]})}var O=c(32),h=c(23),u=c(27),p=function(e){var t={projectName:""},c=Object(n.useState)(t),j=Object(i.a)(c,2),r=j[0],s=j[1];return Object(d.jsxs)("form",{onSubmit:function(c){c.preventDefault(),r.projectName&&(e.addProject(r),s(t))},children:[Object(d.jsx)("label",{children:"Name"}),Object(d.jsx)("input",{type:"text",name:"projectName",value:r.projectName,onChange:function(e){var t=e.target,c=t.name,n=t.value;s(Object(u.a)(Object(u.a)({},r),{},Object(h.a)({},c,n)))},placeholder:"Project name"}),Object(d.jsx)(b,{type:"submit",text:"Submit",link:""})]})},f=function(e){return Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Id"}),Object(d.jsx)("th",{children:"Actions"})]})}),Object(d.jsx)("tbody",{children:e.projects.length>0?e.projects.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.projectName}),Object(d.jsx)("td",{children:t.projectId}),Object(d.jsxs)("td",{children:[Object(d.jsx)(b,{text:"Edit",link:""}),Object(d.jsx)(b,{text:"Delete",clickfn:function(){return e.deleteProject(t.projectName)},link:""})]})]},t.projectId)})):Object(d.jsx)("tr",{children:Object(d.jsx)("td",{colSpan:3,children:"No projects"})})})]})},m=function(e){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Manage Projects"}),Object(d.jsxs)("div",{className:"flex-row",children:[Object(d.jsxs)("div",{className:"flex-large",children:[Object(d.jsx)("h2",{children:"Create"}),Object(d.jsx)(p,{addProject:function(t){e.setProjects([].concat(Object(O.a)(e.projects),[t]))}})]}),Object(d.jsxs)("div",{className:"flex-large",children:[Object(d.jsx)("h2",{children:"Projects"}),Object(d.jsx)(f,{projects:e.projects,deleteProject:function(t){e.setProjects(e.projects.filter((function(e){return e.projectName!==t})))}})]})]})]})};var v=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],j=t[1];return Object(n.useEffect)((function(){fetch("/api/projects/100",{method:"GET",redirect:"manual"}).then((function(e){return e.json()})).then((function(e){j(e)})).catch(console.log)}),[j]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Docusign Prototype"}),Object(d.jsx)(x,{}),Object(d.jsx)(o.a,{}),Object(d.jsx)(m,{projects:c,setProjects:j})]})};c(49);s.a.render(Object(d.jsx)(j.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.c8c6ab97.chunk.js.map