(this["webpackJsonponline-shopping-cart"]=this["webpackJsonponline-shopping-cart"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(17),a=c.n(s),i=(c(24),c(2)),d=(c(25),c(8)),j=c(18),l=c.n(j).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).DOMAIN,withCredentials:!0}),o=c(4),u=c(0);var b=function(e){var t=Object(n.useContext)(f),c=Object(i.a)(t,2),r=c[0],s=c[1],a=e.product;return Object(u.jsx)("div",{className:"product shadow",children:Object(u.jsxs)("button",{className:"item",onClick:function(){return e=a.pid,void(r.some((function(t){return t.pid===e}))||l.get("/api/products/addCart",{params:{pid:e}}).then((function(e){s((function(t){return[].concat(Object(o.a)(t),[e.data])}))})));var e},children:[Object(u.jsx)("div",{className:"parent",children:Object(u.jsx)("img",{className:"pic",src:"/images/".concat(a.image),alt:a.name})}),Object(u.jsx)("table",{style:{width:"100%"},children:Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{className:"price",children:["PKR ",a.price]}),Object(u.jsxs)("td",{qty:a.pid,className:"stock",children:["Qty ",a.qty]})]})})}),Object(u.jsx)("div",{className:"des",children:a.name})]})})};var O=function(e){var t=e.searchedItem,c=e.updatedProducts,r=e.setUpdatedProducts,s=Object(n.useState)([]),a=Object(i.a)(s,2),j=a[0],o=a[1];return Object(n.useEffect)((function(){var e=!1,t=[];if(0!==c.length){var n,s=Object(d.a)(j);try{for(s.s();!(n=s.n()).done;){var a,i=n.value,l=Object(d.a)(c);try{for(l.s();!(a=l.n()).done;){var u=a.value;i.pid===u.pid&&(e=!0,t.push(u))}}catch(b){l.e(b)}finally{l.f()}e||t.push(i),e=!1}}catch(b){s.e(b)}finally{s.f()}o(t),r([])}}),[c,r,j]),Object(n.useEffect)((function(){""===t?l.get("/api/products/all").then((function(e){o(e.data)})):l.get("/api/products/search",{params:{search:t}}).then((function(e){o(e.data)}))}),[t]),Object(u.jsx)("div",{children:j.map((function(e){return Object(u.jsx)(b,{product:e},e._id)}))})};var h=function(e){var t=e.product,c=e.i,n=e.handleQtyChange,r=e.value;return Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"number",value:r,min:1,max:t.qty,onChange:function(e){return n(e.target.value,c)}})})},x=c(19);var p=function(){var e=Object(n.useContext)(f),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(n.useContext)(v),a=Object(i.a)(s,2),d=a[0],j=a[1],l=Object(n.useState)(0),b=Object(i.a)(l,2),O=b[0],p=b[1],m=function(e,t){j((function(c){var n=Object(o.a)(c);return n[t]=Number(e),n}))};return Object(n.useEffect)((function(){var e=0;d.map((function(t,n){return e+=Number(c[n].price*t),null})),p(e)}),[d,c]),Object(n.useEffect)((function(){c.length!==d.length&&j((function(e){var t=Object(o.a)(e);return t.push(1),t}))}),[c,j,d.length]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("table",{style:{width:"540px"},children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Sno"}),Object(u.jsx)("th",{style:{width:"70px"},children:"Product"}),Object(u.jsx)("th",{style:{width:"200px"},children:"Name"}),Object(u.jsx)("th",{children:"Price"}),Object(u.jsx)("th",{children:"Qty"}),Object(u.jsx)("th",{children:"Total"})]})}),Object(u.jsx)("tbody",{className:"cart",children:c.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t+1}),Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:"/images/".concat(e.image),width:"75",style:{margin:"auto"},alt:e.name})}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.price}),Object(u.jsx)("td",{children:Object(u.jsx)(h,{product:e,i:t,value:d[t]||1,handleQtyChange:m})}),Object(u.jsx)("td",{children:String(d[t]*e.price)}),Object(u.jsx)("td",{children:Object(u.jsx)(x.a,{onClick:function(){!function(e){j((function(t){var c=Object(o.a)(t);return c.splice(e,1),c})),r((function(t){var c=Object(o.a)(t);return c.splice(e,1),c}))}(t)},style:{cursor:"pointer",color:"red"},size:28})})]},e._id)}))}),Object(u.jsx)("tfoot",{children:Object(u.jsxs)("tr",{style:{borderTop:"2px solid #585858"},children:[Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{className:"totalAll",children:O})]})})]}),Object(u.jsx)("div",{children:Object(u.jsx)("pre",{children:JSON.stringify(d,null,2)})})]})},f=r.a.createContext([[],function(){return[]}]),v=r.a.createContext([[],function(){return[]}]);var m=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(i.a)(s,2),d=a[0],j=a[1],o=Object(n.useState)(!1),b=Object(i.a)(o,2),h=b[0],x=b[1],m=Object(n.useState)([]),g=Object(i.a)(m,2),y=g[0],S=g[1],C=Object(n.useState)([]),N=Object(i.a)(C,2),P=N[0],E=N[1],w=Object(n.useState)([]),T=Object(i.a)(w,2),_=T[0],k=T[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h2",{className:"logo",children:"CHASE UP"}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("input",{className:"form-control",type:"text",placeholder:"Search Products",name:"searchInput",value:c,onChange:function(e){return r(e.target.value)},onKeyDown:function(e){13===e.which&&(j(c),x(!0))}}),Object(u.jsx)("div",{className:"button-control",children:Object(u.jsx)("button",{className:"order-btn",onClick:function(){y.length>0&&l.patch("/api/products/updateQ",{selectedProducts:y,quantities:P}).then((function(e){k(e.data),l.post("/api/orders/add",{selectedProducts:y,quantities:P}).then((function(e){console.log("res :>> ",e),S([]),E([])}))}))},children:"Check Out"})})]}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{className:"content",children:h?Object(u.jsx)(f.Provider,{value:[y,S],children:Object(u.jsx)(O,{searchedItem:d,updatedProducts:_,setUpdatedProducts:k})}):""}),Object(u.jsx)("div",{id:"bill",className:"bill",children:0===y.length?"":Object(u.jsx)(f.Provider,{value:[y,S],children:Object(u.jsx)(v.Provider,{value:[P,E],children:Object(u.jsx)(p,{})})})})]})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),g()}},[[45,1,2]]]);
//# sourceMappingURL=main.5b982de6.chunk.js.map