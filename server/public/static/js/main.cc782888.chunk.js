(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{31:function(e,t,r){},32:function(e,t,r){},34:function(e,t,r){},35:function(e,t,r){},42:function(e,t,r){},52:function(e,t,r){},53:function(e,t,r){},54:function(e,t,r){},55:function(e,t,r){},56:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r(10),s=r.n(n),i=(r(31),r(13)),a=r(2),o=(r(32),r(0)),d=function(){return Object(o.jsx)("div",{className:"navbar",children:Object(o.jsxs)("nav",{children:[Object(o.jsx)("span",{children:"Shopping"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"orders",children:"Order"})})]})]})})},j=(r(34),"Shopping Cart"),l="\xa9 CopyRight Abdelhak Mehda @2022";var u=function(){return Object(o.jsxs)("footer",{children:[" ",l," "]})},O=r(5),b=(r(35),r(6)),h=r(14),p=r.n(h),f=r(21),x="FETCH_PRODUCTS",m="FILTER_SIZE",v="FILTER_ORDER",g="ADD_TO_CART",N="REMOVE_FROM_CART",y="ADD_ORDER",C="REMOVE_ORDER",S="FETCH_ORDERS";r(42);var I=function(e){var t=e.label,r=e.type,c=e.name,n=e.handleChange;return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:t}),Object(o.jsx)("input",{type:r,required:!0,name:c,onChange:n})]})},E=r(15),_=r(7),w=function(e){return function(t){e((function(e){return Object(_.a)(Object(_.a)({},e),{},Object(E.a)({},t.target.name,t.target.value))}))}},R=function(e,t,r){return function(c){c.preventDefault();var n={name:e.name,email:e.email};t(n),r(!0)}};var L=Object(b.b)((function(e){return{}}),{addOrder:function(e){return function(){var t=Object(f.a)(p.a.mark((function t(r){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){r({type:y,data:{order:e}})}));case 2:localStorage.clear("cartItems"),r({type:"CLEAR_CART"});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.setShowForm,r=e.setIsOpen,n=e.addOrder,s=Object(c.useState)(""),i=Object(O.a)(s,2),a=i[0],d=i[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"checkout-form",children:[Object(o.jsx)("span",{className:"close-icon",onClick:function(){return t(!1)},children:"\xd7"}),Object(o.jsxs)("form",{onSubmit:R(a,n,r),children:[Object(o.jsx)(I,{name:"name",label:"Name",type:"text",handleChange:w(d)}),Object(o.jsx)(I,{name:"email",label:"Email",type:"email",handleChange:w(d)}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"checkout"})})]})]})})})),P=r(12),T=r(16),F=r.n(T),k=Object(b.b)((function(e){return{productsCart:e.cart.cartItems,order:e.order.order}}),{})((function(e){var t=e.isOpen,r=e.order,c=e.productsCart,n=e.setIsOpen,s=e.setShowForm;return Object(o.jsxs)(F.a,{isOpen:t,onRequestClose:function(){return n(!1)},ariaHideApp:!1,children:[Object(o.jsx)("span",{className:"icon-times",onClick:function(){n(!1),s(!1)},children:"\xd7 "}),Object(o.jsxs)("div",{className:"order-info",children:[Object(o.jsx)("p",{className:"alert-success",children:" Order Done  Success"}),Object(o.jsxs)("table",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Name:"}),Object(o.jsx)("td",{children:r&&r.name})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Email:"}),Object(o.jsx)("td",{children:r&&r.email})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Total:"}),Object(o.jsxs)("td",{children:["$",r&&c.reduce((function(e,t){return t.price*t.qty+e}),0)]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Selected Products:"}),Object(o.jsx)("td",{children:c.map((function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("p",{children:["Product Name: ",e.title," "]}),Object(o.jsxs)("p",{children:["Quentity:",e.qty," "]})]})}))})]})]})]})]})}));var A=Object(b.b)((function(e){return{productsCart:e.cart.cartItems}}),{removeProductCart:function(e){return function(t,r){var c=r().cart.cartItems,n=Object(P.a)(c).filter((function(t){return t._id!==e}));t({type:N,cartItems:n}),localStorage.setItem("cartItems",JSON.stringify(n))}}})((function(e){var t=e.productsCart,r=e.removeProductCart,n=Object(c.useState)(!1),s=Object(O.a)(n,2),i=s[0],a=s[1],d=Object(c.useState)(!1),j=Object(O.a)(d,2),l=j[0],u=j[1];return Object(o.jsxs)("div",{className:"cart-wrapper",children:[Object(o.jsx)("div",{className:"cart-title",children:Object(o.jsxs)("p",{children:[t.length?"you have ".concat(t.length," product").concat(1===t.length?"":"s"," "):"Your Cart is Empty"," "]})}),Object(o.jsx)(k,{productsCart:t,isOpen:l,setIsOpen:u,setShowForm:a}),t.map((function(e){return Object(o.jsxs)("div",{className:"cart-info",children:[Object(o.jsx)("img",{src:e.imageUrl,alt:e.title}),Object(o.jsxs)("div",{className:"cart-desc",children:[Object(o.jsx)("span",{children:e.title}),Object(o.jsxs)("span",{children:["quntity : ",e.qty," "]}),Object(o.jsxs)("span",{children:["price : ",e.price,"$ "]})]}),Object(o.jsx)("button",{onClick:function(){return r(e._id,t)},children:"Remove"})]},e.id)})),t.length>0&&Object(o.jsxs)("div",{className:"cart-footer",children:[Object(o.jsxs)("div",{className:"total",children:["Total : $",t.reduce((function(e,t){return e+t.price*t.qty}),0)," "]}),Object(o.jsx)("button",{onClick:function(){return a(!0)},children:" select products "})]}),i&&Object(o.jsx)(L,{setIsOpen:u,showForm:i,setShowForm:a,productsCart:t})]})})),D=(r(52),function(e,t){return function(r){var c=r.target.value;e(t,c)}}),q=function(e,t){return function(r){var c=r.target.value;e(t,c)}};var z=Object(b.b)((function(e){return{products:e.products.products,filteredProducts:e.products.filterProducts,size:e.products.size,sort:e.products.sort}}),{filteredSize:function(e,t){return function(r){var c=e.filter((function(e){return e.sizes.includes(t)}));r({type:m,data:{size:t,products:"ALL"===t?e:c}})}},filteredSort:function(e,t){return function(r){var c=Object(P.a)(e).sort((function(e,r){return"lowest"===t?e.price-r.price:"highest"===t?r.price-e.price:e.id<r.id?1:-1}));r({type:v,data:{sort:t,products:c}})}}})((function(e){var t=e.filteredSort,r=e.filteredSize,c=e.filteredProducts,n=e.products,s=e.size,i=e.sort;return Object(o.jsx)(o.Fragment,{children:c&&Object(o.jsxs)("div",{className:"filter-wrapper",children:[Object(o.jsx)("h2",{className:"filter-title",children:"Filter"}),Object(o.jsxs)("div",{className:"products-Number",children:["Number of Products : ",c.length," "]}),Object(o.jsxs)("div",{className:"filter-by-size",children:[Object(o.jsx)("span",{children:"Filter"}),Object(o.jsxs)("select",{value:s,onChange:D(r,n),className:"filter-select",children:[Object(o.jsx)("option",{value:"ALL",children:"ALL"}),Object(o.jsx)("option",{value:"XS",children:"XS"}),Object(o.jsx)("option",{value:"S",children:"S"}),Object(o.jsx)("option",{value:"M",children:"M"}),Object(o.jsx)("option",{value:"L",children:"L"}),Object(o.jsx)("option",{value:"XL",children:"XL"}),Object(o.jsx)("option",{value:"XXL",children:"XXL"})]})]}),Object(o.jsxs)("div",{className:"filter-by-sort",children:[Object(o.jsx)("span",{children:"Order"}),Object(o.jsxs)("select",{value:i,onChange:q(t,c),className:"filter-select",children:[Object(o.jsx)("option",{value:"latest",children:"Latest"}),Object(o.jsx)("option",{value:"lowest",children:"Lowest"}),Object(o.jsx)("option",{value:"highest",children:"Highest"})]})]})]})})}));r(53);var X=function(){return Object(o.jsx)("header",{children:j})};r(54);var M=function(e){var t=e.isOpen,r=e.setIsOpen,c=e.product;return Object(o.jsxs)(F.a,{isOpen:t,onRequestClose:function(){return r(!1)},className:"model-product",ariaHideApp:!1,children:[Object(o.jsx)("span",{className:"icon-times",onClick:function(){return r(!1)},children:"\xd7 "}),Object(o.jsxs)("div",{className:"product-info",children:[Object(o.jsx)("img",{src:c.imageUrl,alt:c.title}),Object(o.jsx)("p",{children:c.title}),Object(o.jsx)("p",{children:c.desc}),Object(o.jsxs)("p",{children:["$",c.price]})]})]})};var H=Object(b.b)((function(e){return{products:e.products.filterProducts}}),{fetchProducts:function(){return function(e){fetch("/api/products").then((function(e){return e.json()})).then((function(t){e({type:x,data:t})}))}},addToCart:function(e){return function(t,r){var c=r().cart.cartItems,n=Object(P.a)(c),s=0;n.some((function(t){return t._id===e._id}))?s=n.filter((function(t){return t._id===e._id}))[0].qty++:(s=1,n.push(Object(_.a)(Object(_.a)({},e),{},{qty:s}))),t({type:g,data:{cartItems:n}}),localStorage.setItem("cartItems",JSON.stringify(n))}}})((function(e){var t=e.fetchProducts,r=e.addToCart,n=e.products,s=Object(c.useState)(""),i=Object(O.a)(s,2),a=i[0],d=i[1],j=Object(c.useState)(!1),l=Object(O.a)(j,2),u=l[0],b=l[1],h=n?0===n.length?Object(o.jsx)("h4",{children:"ther is no Productions"}):n.map((function(e){return Object(o.jsxs)("div",{className:"product-item",children:[Object(o.jsx)("a",{onClick:function(){!function(e){d(e),b(!0)}(e)},href:"#",children:Object(o.jsx)("img",{src:e.imageUrl,alt:e.item})}),Object(o.jsxs)("div",{className:"product-desc",children:[Object(o.jsx)("p",{children:e.title}),Object(o.jsxs)("span",{children:[e.price,"$"]})]}),Object(o.jsx)("button",{onClick:function(){return r(e)},children:"Add to Cart"})]},e.id)})):"Loading";return Object(c.useEffect)((function(){t()}),[]),Object(o.jsxs)("div",{className:"products-wrapper",children:[h,Object(o.jsx)(M,{product:a,isOpen:u,setIsOpen:b})]})})),J=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(X,{}),Object(o.jsxs)("main",{children:[Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(H,{}),Object(o.jsx)(z,{})]}),Object(o.jsx)(A,{})]})]})},U=(r(55),Object(b.b)((function(e){return{orders:e.order.orders}}),{fetchOrder:function(){return function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/orders").then((function(e){return e.json()})).then((function(e){t({type:S,data:{orders:e}})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.orders,r=e.fetchOrder;return Object(c.useEffect)((function(){return r()}),[]),Object(o.jsx)("div",{className:"orders",children:t?0===t.length?Object(o.jsx)("p",{children:"There is no Orders "}):Object(o.jsxs)("table",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name "}),Object(o.jsx)("th",{children:"Email "}),Object(o.jsx)("th",{children:"Date "})]}),t.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.email}),Object(o.jsx)("td",{children:e.createdAt.slice(0,10)})]})}))]}):Object(o.jsx)("p",{children:"Loading"})})})));var $=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)("div",{className:"layout",children:[Object(o.jsx)(a.c,{children:Object(o.jsxs)(a.a,{path:"/",children:[Object(o.jsx)(a.a,{index:!0,element:Object(o.jsx)(J,{})}),Object(o.jsx)(a.a,{path:"orders",element:Object(o.jsx)(U,{})})]})}),Object(o.jsx)(u,{})]})]})},V=r(9),B={cartItems:JSON.parse(localStorage.getItem("cartItems"))||[]},Q=Object(V.b)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{products:t.data,filterProducts:t.data};case m:return Object(_.a)(Object(_.a)({},e),{},{size:t.data.size,filterProducts:t.data.products});case v:return Object(_.a)(Object(_.a)({},e),{},{sort:t.data.sort,filterProducts:t.data.products});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{cartItems:t.data.cartItems};case N:return{cartItems:t.cartItems};default:return e}},order:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{order:t.data.order};case C:return{order:!1};case S:return{orders:t.data.orders};default:return e}}}),Y=r(26),Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.c,G=Object(V.d)(Q,{},Z(Object(V.a)(Y.a)));s.a.render(Object(o.jsx)(b.a,{store:G,children:Object(o.jsx)($,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.cc782888.chunk.js.map