(this["webpackJsonpfriday-project"]=this["webpackJsonpfriday-project"]||[]).push([[0],{10:function(e,n,t){e.exports={inputWrap:"SuperInputText_inputWrap__3-vJ3",superInput:"SuperInputText_superInput__3bIrW",placeHolder:"SuperInputText_placeHolder__jNWZW",hidePlaceHolder:"SuperInputText_hidePlaceHolder__mg2sB",errorInput:"SuperInputText_errorInput__yMflc",error:"SuperInputText_error__3fTGJ"}},14:function(e,n,t){e.exports={wrap:"Error404_wrap__1IT3M",notfound:"Error404_notfound__1iP_a",notfound404:"Error404_notfound404__1xmNg",navLink:"Error404_navLink__3nnfZ"}},20:function(e,n,t){e.exports={default:"SuperButton_default__2tZIj","focus-visible":"SuperButton_focus-visible__9h7-y",red:"SuperButton_red__HzRdF","button-24":"SuperButton_button-24__1nia5"}},21:function(e,n,t){e.exports={checkbox:"SuperCheckbox_checkbox__1MDne",spanClassName:"SuperCheckbox_spanClassName__12xAq"}},31:function(e,n,t){},32:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),a=t(15),s=t.n(a),o=(t(31),t(32),t(3)),j=t(1);var i=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Login Page"})})};var u=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Sign Up Page"})})},d=t(6);var l=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Profile Page"}),Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(j.jsx)(d.b,{to:y.TEST,children:"Test Page"}),Object(j.jsx)(d.b,{to:y.SIGN_UP,children:"Sign Up Page"}),Object(j.jsx)(d.b,{to:y.LOGIN,children:"Login Page"}),Object(j.jsx)(d.b,{to:y.NEW_PASSWORD,children:"New Password Page"}),Object(j.jsx)(d.b,{to:y.FORGOT_PASSWORD,children:"Forgot Password Page"}),Object(j.jsx)(d.b,{to:y.ERROR_404,children:"404 Error Page"})]})]})},b=t(14),O=t.n(b);var p=function(){return Object(j.jsx)("div",{className:O.a.wrap,children:Object(j.jsxs)("div",{className:O.a.notfound,children:[Object(j.jsx)("div",{className:O.a.notfound404,children:Object(j.jsx)("h1",{children:"404"})}),Object(j.jsx)("h2",{children:"Oops! This Page Could Not Be Found"}),Object(j.jsx)("p",{children:"Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable"}),Object(j.jsx)(d.b,{className:O.a.navLink,to:y.PROFILE,children:"Go To Homepage"})]})})};var h=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Forgot Password Page"})})};var x=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"New Password Page"})})},f=t(9),_=t(12),g=t(20),m=t.n(g),P=function(e){var n=e.red,t=e.className,r=Object(_.a)(e,["red","className"]),c="".concat(n?m.a.red:m.a.default," ").concat(t);return Object(j.jsx)("button",Object(f.a)({className:c},r))},v=t(21),N=t.n(v),S=function(e){e.type;var n=e.onChange,t=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(_.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(N.a.checkbox," ").concat(r||"");return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",Object(f.a)({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),n&&n(e)},className:s},a)),c&&Object(j.jsx)("span",{className:N.a.spanClassName,children:c})]})},T=t(10),I=t.n(T),C=function(e){e.type;var n=e.onChange,t=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,s=e.className,o=e.spanClassName,i=Object(_.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(I.a.error," ").concat(o||""),d="".concat(I.a.input," ").concat(a?I.a.errorInput:I.a.superInput," ").concat(s);return Object(j.jsxs)("div",{className:I.a.inputWrap,children:[Object(j.jsxs)("label",{htmlFor:"name",children:[Object(j.jsx)("input",Object(f.a)({type:"text",autoComplete:"off",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:d,name:"name",id:"name"},i)),Object(j.jsx)("span",{className:""===i.value?I.a.placeHolder:I.a.hidePlaceHolder,children:"Type here"})]}),a&&Object(j.jsx)("span",{className:u,children:a})]})};var E=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Test Page"}),Object(j.jsx)(C,{}),Object(j.jsx)(P,{children:"Test"}),Object(j.jsx)(S,{})]})},y={LOGIN:"/login",SIGN_UP:"/signup",PROFILE:"/profile",ERROR_404:"/error404",FORGOT_PASSWORD:"/forgotpassword",NEW_PASSWORD:"/newpassword",TEST:"/test"};var R=function(){return Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{path:"/",exact:!0,render:function(){return Object(j.jsx)(o.a,{to:y.PROFILE})}}),Object(j.jsx)(o.b,{path:y.LOGIN,render:function(){return Object(j.jsx)(i,{})}}),Object(j.jsx)(o.b,{path:y.SIGN_UP,render:function(){return Object(j.jsx)(u,{})}}),Object(j.jsx)(o.b,{path:y.PROFILE,render:function(){return Object(j.jsx)(l,{})}}),Object(j.jsx)(o.b,{path:y.FORGOT_PASSWORD,render:function(){return Object(j.jsx)(h,{})}}),Object(j.jsx)(o.b,{path:y.NEW_PASSWORD,render:function(){return Object(j.jsx)(x,{})}}),Object(j.jsx)(o.b,{path:y.TEST,render:function(){return Object(j.jsx)(E,{})}}),Object(j.jsx)(o.b,{render:function(){return Object(j.jsx)(p,{})}})]})};var k=function(){return Object(j.jsx)(d.a,{children:Object(j.jsx)(R,{})})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),r(e),c(e),a(e),s(e)}))},F=t(26),L=t(16),W={name:"Aleksandr",age:23},G=t(25),D=Object(L.b)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET-PROFILE":return Object(f.a)(Object(f.a)({},e),{},{name:n.name,age:n.age});default:return e}}}),A=Object(L.c)(D,Object(L.a)(G.a)),B=A;window.store=A,s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(F.a,{store:B,children:Object(j.jsx)(k,{})})}),document.getElementById("root")),w()}},[[40,1,2]]]);
//# sourceMappingURL=main.788e7edc.chunk.js.map