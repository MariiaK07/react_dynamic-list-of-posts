(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(8),s=n.n(c),a=n(4),r=n(2),o=n(3),i=n.n(o),u=n(1),l=(n(15),n(16),n(17),n(0)),j=function(t){var e=t.posts,n=t.postId,c=t.selectPost;return Object(l.jsxs)("div",{className:"PostsList",children:[Object(l.jsx)("h2",{children:"Posts:"}),Object(l.jsx)("ul",{className:"PostsList__list",children:e.map((function(t){return Object(l.jsxs)("li",{className:"PostsList__item",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"[User #".concat(t.userId,"]: ")}),t.title]}),n===t.id?Object(l.jsx)("button",{type:"button",className:"button PostsList__button",onClick:function(){return c(0)},children:"Close"}):Object(l.jsx)("button",{type:"button",className:"button PostsList__button",onClick:function(){return c(t.id)},children:"Open"})]},t.id)}))})]})},b=n(9),d=(n(19),function(t){var e=t.postId,n=t.addComment,c=Object(u.useState)(""),s=Object(r.a)(c,2),a=s[0],o=s[1],i=Object(u.useState)(""),j=Object(r.a)(i,2),b=j[0],d=j[1],m=Object(u.useState)(""),p=Object(r.a)(m,2),h=p[0],O=p[1];return Object(l.jsxs)("form",{className:"NewCommentForm",onSubmit:function(t){t.preventDefault(),n({id:Number(new Date),postId:e,name:a,email:b,body:h}),o(""),d(""),O("")},children:[Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("input",{type:"text",name:"name",value:a,placeholder:"Your name",className:"NewCommentForm__input",onChange:function(t){return o(t.target.value)},required:!0})}),Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("input",{type:"email",name:"email",value:b,placeholder:"Your email",className:"NewCommentForm__input",onChange:function(t){return d(t.target.value)},required:!0})}),Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("textarea",{name:"body",value:h,placeholder:"Type comment here",className:"NewCommentForm__input",onChange:function(t){return O(t.target.value)},required:!0})}),Object(l.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),m=(n(20),"https://mate.academy/students-api"),p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch("".concat(m).concat(t),e).then((function(t){if(!t.ok)throw new Error("".concat(t.status,"-").concat(t.statusText));return t.json()}))},h=function(t){return p("/posts?userId=".concat(t))},O=function(t){return p("/posts?id=".concat(t))},f=function(t){return p("/comments?postId=".concat(t))},x=function(t){return p("/comments/".concat(t),{method:"DELETE"})},v=function(t){return p("/comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)})},_=function(t){var e=t.postId,n=Object(u.useState)({}),c=Object(r.a)(n,2),s=c[0],o=c[1],j=Object(u.useState)([]),m=Object(r.a)(j,2),p=m[0],h=m[1],_=Object(u.useState)(!1),N=Object(r.a)(_,2),y=N[0],w=N[1],P=Object(u.useState)(!0),C=Object(r.a)(P,2),S=C[0],k=C[1];Object(u.useEffect)((function(){var t=function(){var t=Object(a.a)(i.a.mark((function t(){var n,c,s,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([O(e),f(e)]);case 2:n=t.sent,c=Object(r.a)(n,2),s=c[0],a=c[1],o(s[0]),h(a);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]);var D=function(){var t=Object(a.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:h((function(t){return t.filter((function(t){return t.id!==e}))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(a.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:n=t.sent,h((function(t){return[].concat(Object(b.a)(t),[n])}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"PostDetails",children:[Object(l.jsx)("h2",{children:"Post details:"}),Object(l.jsx)("section",{className:"PostDetails__post",children:null!==s&&Object(l.jsx)("p",{children:s.body})}),Object(l.jsxs)("section",{className:"PostDetails__comments",children:[y?Object(l.jsx)("button",{type:"button",className:"button PostDetails__button",onClick:function(){k(!0),w(!1)},children:"Show comments"}):Object(l.jsx)("button",{type:"button",className:"button PostDetails__button",onClick:function(){w(!0),k(!1)},disabled:p.length<1,children:"Hide comments"}),S&&Object(l.jsx)("ul",{className:"PostDetails__list",children:p.map((function(t){return Object(l.jsxs)("li",{className:"PostDetails__list-item",children:[Object(l.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return D(t.id)},children:"X"}),Object(l.jsx)("p",{children:t.body})]},t.id)}))})]}),Object(l.jsx)("section",{children:Object(l.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(l.jsx)(d,{postId:e,addComment:g})})})]})},N=function(){var t=Object(u.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1],s=Object(u.useState)(0),o=Object(r.a)(s,2),b=o[0],d=o[1],m=Object(u.useState)(0),O=Object(r.a)(m,2),f=O[0],x=O[1];return Object(u.useEffect)((function(){var t=function(){var t=Object(a.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(f);case 2:if(e=t.sent,0!==f){t.next=7;break}return t.next=6,p("/posts");case 6:e=t.sent;case 7:c(e);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[f]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App__header",children:Object(l.jsxs)("label",{htmlFor:"select",children:["Select a user: \xa0",Object(l.jsxs)("select",{id:"select",className:"App__user-selector",onChange:function(t){return x(Number(t.target.value))},children:[Object(l.jsx)("option",{value:"0",children:"All users"}),Object(l.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(l.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(l.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(l.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(l.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(l.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(l.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(l.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(l.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(l.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})}),Object(l.jsxs)("main",{className:"App__main",children:[Object(l.jsx)("div",{className:"App__sidebar",children:Object(l.jsx)(j,{posts:n,postId:b,selectPost:function(t){d(t)}})}),Object(l.jsx)("div",{className:"App__content",children:b>0&&Object(l.jsx)(_,{postId:b})})]})]})};s.a.render(Object(l.jsx)(N,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.6ce3aa43.chunk.js.map