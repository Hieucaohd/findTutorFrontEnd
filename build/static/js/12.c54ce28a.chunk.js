(this.webpackJsonpbaseapp=this.webpackJsonpbaseapp||[]).push([[12],{201:function(e,t,n){},204:function(e,t,n){"use strict";var a=n(8),i=n(5),r=n.n(i),c=n(7),s=n(13),o=n(187),l=n(100),d=n(1),b=n(62),u=n(198),j=(n(201),n(2));var p=function(e){e.typeCurrentAvatar;var t=e.onSubmit,n=void 0===t?null:t,a=e.onClose,i=void 0===a?null:a,l=Object(d.useState)(!1),p=Object(s.a)(l,2),x=p[0],f=p[1],h=Object(d.useState)(null),O=Object(s.a)(h,2),v=O[0],m=O[1],g=Object(d.useRef)(null),k=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:n(g.current.files[0]);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){i&&i()};return Object(j.jsxs)("div",{className:"uploadimage",children:[Object(j.jsx)("div",{className:"uploadimage__overlay",onClick:w}),Object(j.jsxs)("div",{className:"uploadimage__content",children:[Object(j.jsx)(b.b,{className:"uploadimage__close",onClick:w}),Object(j.jsxs)("div",{className:"uploadimage__drop",onClick:function(){g&&g.current.click()},children:[Object(j.jsx)("input",{type:"file",multiple:!1,hidden:!0,onChange:function(e){return function(e){if(e.target.files&&e.target.files[0]){var t=new FileReader;t.onload=function(e){m(e.target.result)},t.readAsDataURL(e.target.files[0]),f(!0)}}(e)},ref:g}),Object(j.jsx)(u.b,{}),Object(j.jsx)("span",{children:"T\u1ea3i \u1ea3nh l\xean"})]}),x&&Object(j.jsx)(o.a,{className:"uploadimage__preview",alt:"yourimage",src:v}),x&&Object(j.jsx)("button",{onClick:k,className:"uploadimage__submit",children:"Thay \u1ea3nh \u0111\u1ea1i di\u1ec7n"})]})]})},x=n(18),f=n(197),h=n.n(f),O=n(22),v=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.typeCurrent,n=t.token,a=t.file,i=a,e.prev=2,e.next=5,h()({method:"PUT",url:"".concat(O.server_name,"/findTutor/imagePrivateUserDetail/"),headers:{"Content-Type":"application/json",Authorization:"".concat(O.token_prefix," ").concat(n)},data:i});case 5:return e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(2),console.log("Failed to update image ",e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),m=n(19),g=n(25),k=n(193),w=n.n(k),y=n(69),N=n(40);var C=Object(l.a)((function(e){var t,n,i,r,c,s,o,l;return{wallpaper:(t={flex:1,display:"flex",backgroundColor:"#E9E8EB",border:"0.5px solid rgba(0, 0, 0, 0.1)",borderRadius:"12px",position:"relative","& h5":{margin:0},"& h4":{margin:0},"& h3":{margin:0},"& p":{margin:0}},Object(a.a)(t,e.breakpoints.down("xs"),{padding:"12px 8px"}),Object(a.a)(t,e.breakpoints.up("sm"),{padding:"24px 16px"}),t),fix:{color:"white",borderRadius:"50%",position:"absolute",zindex:2,backgroundColor:"#7f98fa",top:8,right:8,padding:8,"&:hover":{cursor:"pointer",backgroundColor:"#5472EA"}},name:{"& h3":(n={fontWeight:600},Object(a.a)(n,e.breakpoints.down("xs"),{fontSize:"20px",margin:0}),Object(a.a)(n,e.breakpoints.up("sm"),{fontSize:"28px"}),n),"& h5":{color:"#3b6997"}},avatarContainer:(i={flex:1,display:"flex",justifyContent:"flex-end",position:"relative"},Object(a.a)(i,e.breakpoints.down("xs"),{marginRight:"12px"}),Object(a.a)(i,e.breakpoints.up("sm"),{marginRight:"56px"}),i),camera:{position:"absolute",zIndex:2,bottom:-8,right:-8,backgroundColor:"#ee6464",color:"white",border:"none",borderRadius:"50%",fontSize:16,width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{backgroundColor:"#ff0000",cursor:"pointer"}},avatar:(r={},Object(a.a)(r,e.breakpoints.down("xs"),{width:"102px",height:"172px"}),Object(a.a)(r,e.breakpoints.up("sm"),{width:"160px",height:"200px"}),r),info:{flex:4,display:"flex",flexDirection:"column",justifyContent:"space-around","& p":{color:"#5f5d5d",fontStyle:"italic"}},generalInfo:Object(a.a)({display:"flex"},e.breakpoints.down("xs"),{flexDirection:"column-reverse"}),birth:(s={"& h4":(c={},Object(a.a)(c,e.breakpoints.down("xs"),{fontSize:"14px"}),Object(a.a)(c,e.breakpoints.up("sm"),{fontSize:"16px"}),c)},Object(a.a)(s,e.breakpoints.down("xs"),{marginRight:"16px"}),Object(a.a)(s,e.breakpoints.up("sm"),{marginRight:"40px"}),Object(a.a)(s,"& span",{color:"#3b6997",fontSize:"12px",fontWeight:"400"}),s),address:{"& h4":(o={},Object(a.a)(o,e.breakpoints.down("xs"),{fontSize:"14px"}),Object(a.a)(o,e.breakpoints.up("sm"),{fontSize:"16px"}),o),"& span":{color:"#3b6997",fontSize:"12px",fontWeight:"400"}},social:{"& a":(l={opacity:"0.6",color:"black"},Object(a.a)(l,e.breakpoints.down("xs"),{fontSize:"24px"}),Object(a.a)(l,e.breakpoints.up("sm"),{fontSize:"32px"}),Object(a.a)(l,"&:hover",{color:"#3b6997",opacity:1}),Object(a.a)(l,"marginRight","8px"),l)}}}));t.a=function(e){var t,n,a,i,l,u,f,h,O,k,_,S,z,I,R,T,A,B=e.tutorInfo,E=e.isUser,U=void 0!==E&&E,W=e.type,D=C(),H=Object(d.useState)(!1),q=Object(s.a)(H,2),F=q[0],G=q[1],V=Object(m.c)(x.i),Y=Object(d.useState)(!1),J=Object(s.a)(Y,2),P=J[0],K=J[1],L=Object(d.useState)(!1),Z=Object(s.a)(L,2),M=Z[0],Q=Z[1],X=Object(d.useState)(!1),$=Object(s.a)(X,2),ee=$[0],te=$[1],ne=function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return te(!0),(n=new w.a).append("avatar",t),e.next=5,v({token:V,file:n});case 5:e.sent?(te(!1),Q(!0)):(K(!0),te(!1));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:D.wallpaper,children:[U&&Object(j.jsxs)(g.b,{to:"/settings/profile/".concat(W),children:[Object(j.jsx)(b.k,{className:D.fix})," "]}),Object(j.jsxs)("div",{className:D.avatarContainer,children:[U&&Object(j.jsx)("button",{className:D.camera,onClick:function(){return G(!0)},children:Object(j.jsx)(b.a,{})}),Object(j.jsx)(o.a,{alt:"Travis Howard",variant:"square",className:D.avatar,src:(null===(t=B.imageprivateusermodel)||void 0===t?void 0:t.avatar)||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3I4Y2ydmFBosgWcdoqVBBCsYZksWAhHtjg&usqp=CAU"})]}),Object(j.jsxs)("div",{className:D.info,children:[Object(j.jsxs)("div",{className:D.name,children:[Object(j.jsxs)("h3",{className:D.name,children:[null===(n=B.first_name)||void 0===n?void 0:n.toUpperCase()," ",null===(a=B.last_name)||void 0===a?void 0:a.toUpperCase()]}),Object(j.jsx)("h5",{children:(A=B.profession,A?"sv"===A?"Sinh Vi\xean":"gv"===A?"Gi\xe1o Vi\xean":"Kh\xe1c":"")})]}),Object(j.jsxs)("div",{className:D.generalInfo,children:[Object(j.jsxs)("div",{className:D.birth,children:[Object(j.jsx)("h4",{children:(T=B.birthday,T&&0!==T.length?"".concat(T.slice(-2),"-").concat(T.slice(5,7),"-").concat(T.slice(0,4)):"")}),Object(j.jsx)("span",{children:"NG\xc0Y SINH"})]}),Object(j.jsxs)("div",{className:D.address,children:[Object(j.jsx)("h4",{children:B.address}),Object(j.jsx)("span",{children:"\u0110\u1ecaA CH\u1ec8"})]})]}),Object(j.jsxs)("div",{className:D.social,children:[(null===B||void 0===B||null===(i=B.linkmodel_set)||void 0===i||null===(l=i.find((function(e){return"facebook"===(null===e||void 0===e?void 0:e.name)})))||void 0===l?void 0:l.url)&&Object(j.jsx)("a",{href:null===B||void 0===B||null===(u=B.linkmodel_set)||void 0===u||null===(f=u.find((function(e){return"facebook"===(null===e||void 0===e?void 0:e.name)})))||void 0===f?void 0:f.url,children:Object(j.jsx)(b.g,{})}),(null===B||void 0===B||null===(h=B.linkmodel_set)||void 0===h||null===(O=h.find((function(e){return"instagram"===(null===e||void 0===e?void 0:e.name)})))||void 0===O?void 0:O.url)&&Object(j.jsx)("a",{href:null===B||void 0===B||null===(k=B.linkmodel_set)||void 0===k||null===(_=k.find((function(e){return"instagram"===(null===e||void 0===e?void 0:e.name)})))||void 0===_?void 0:_.url,children:Object(j.jsx)(b.h,{})}),(null===B||void 0===B||null===(S=B.linkmodel_set)||void 0===S||null===(z=S.find((function(e){return"linkedln"===(null===e||void 0===e?void 0:e.name)})))||void 0===z?void 0:z.url)&&Object(j.jsx)("a",{href:null===B||void 0===B||null===(I=B.linkmodel_set)||void 0===I||null===(R=I.find((function(e){return"linkedln"===(null===e||void 0===e?void 0:e.name)})))||void 0===R?void 0:R.url,children:Object(j.jsx)(b.i,{})})]})]}),F&&Object(j.jsx)(p,{onClose:function(){return G(!1)},onSubmit:ne}),P&&Object(j.jsx)(y.a,{typeIcon:"fail",text:"Thay Avatar kh\xf4ng th\xe0nh c\xf4ng",onAgree:function(){return K(!1)}}),M&&Object(j.jsx)(y.a,{typeIcon:"check",text:"Thay Avatar th\xe0nh c\xf4ng",onAgree:function(){return window.location.reload()}}),ee&&Object(j.jsx)(N.a,{})]})}},247:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n.n(a),r=n(7),c=n(13),s=n(8),o=n(100),l=n(51),d=n(18),b=n(81),u=n(1),j=n(19),p=n(11),x=n(204),f=n(62),h=n(244),O=n(31),v=n(85),m=n(2),g=Object(o.a)((function(e){var t,n;return{root:{"& span":{fontWeight:300}},field:{display:"flex",alignItems:"center",backgroundColor:"#E9E8EB",border:"0.5px solid rgba(0, 0, 0, 0.1)",margin:"12px 0px",borderRadius:"12px","& h4":(t={color:"#3b6997",display:"flex",alignItems:"center",justifyContent:"flex-end",fontWeight:"400"},Object(s.a)(t,e.breakpoints.down("xs"),{flex:2,fontSize:"10px",marginRight:"12px"}),Object(s.a)(t,e.breakpoints.up("sm"),{flex:1,marginRight:"56px",fontSize:"12px"}),Object(s.a)(t,"& svg",{marginRight:"4px",fontSize:"24px"}),t),"& p":(n={},Object(s.a)(n,e.breakpoints.down("xs"),{flex:10}),Object(s.a)(n,e.breakpoints.up("sm"),{flex:8}),Object(s.a)(n,"fontWeight","500"),n)}}}));var k=function(e){var t=e.tutorInfo,n=g();return Object(m.jsxs)("div",{className:n.root,children:[Object(m.jsxs)("div",{className:n.field,children:[Object(m.jsxs)("h4",{children:[" ",Object(m.jsx)(h.a,{})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{children:"H\u1ecdc t\u1ea1i "}),t.university]})]}),Object(m.jsxs)("div",{className:n.field,children:[Object(m.jsx)("h4",{children:Object(m.jsx)(v.c,{})}),Object(m.jsx)("p",{children:t.achievement})]}),Object(m.jsxs)("div",{className:n.field,children:[Object(m.jsx)("h4",{children:Object(m.jsx)(f.c,{})}),Object(m.jsx)("p",{children:t.experience})]}),Object(m.jsxs)("div",{className:n.field,children:[Object(m.jsx)("h4",{children:Object(m.jsx)(O.d,{})}),Object(m.jsxs)("p",{children:[" ",Object(m.jsx)("span",{children:"D\u1ea1y h\u1ecdc t\u1ea1i"})," ",t.khu_vuc_day]})]})]})},w=n(183),y=Object(o.a)((function(e){var t,n;return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},skeletonTop:(t={width:"820px"},Object(s.a)(t,e.breakpoints.down("xs"),{width:"90%",height:"180px"}),Object(s.a)(t,e.breakpoints.up("sm"),{width:"820px",height:"240px"}),Object(s.a)(t,"marginTop","24px"),Object(s.a)(t,"marginBottom","12px"),Object(s.a)(t,"borderRadius","12px"),t),skeleton:(n={},Object(s.a)(n,e.breakpoints.down("xs"),{width:"90%",height:"48px"}),Object(s.a)(n,e.breakpoints.up("sm"),{width:"820px",height:"58px"}),Object(s.a)(n,"marginBottom","12px"),Object(s.a)(n,"borderRadius","12px"),n)}}));var N=function(e){var t=y();return Object(m.jsxs)("div",{className:t.root,children:[Object(m.jsx)(w.a,{variant:"rect",className:t.skeletonTop}),Object(m.jsx)(w.a,{variant:"rect",className:t.skeleton}),Object(m.jsx)(w.a,{variant:"rect",className:t.skeleton}),Object(m.jsx)(w.a,{variant:"rect",className:t.skeleton}),Object(m.jsx)(w.a,{variant:"rect",className:t.skeleton}),Object(m.jsx)(w.a,{variant:"rect",className:t.skeleton}),Object(m.jsx)(w.a,{variant:"rect",className:t.skeleton}),Object(m.jsx)(w.a,{variant:"rect",className:t.skeleton})]})},C=Object(o.a)((function(e){var t;return{root:(t={display:"flex",flexDirection:"column",marginTop:"80px"},Object(s.a)(t,e.breakpoints.down("sm"),{padding:"0px 12px",marginBottom:40}),Object(s.a)(t,e.breakpoints.up("md"),{padding:"0px 220px"}),t)}}));t.default=function(e){var t=Object(p.h)("/profile/tutor/:tutorId"),n=Number(t.params.tutorId),a=Object(j.c)(d.f),s=C(),o=Object(u.useState)({}),f=Object(c.a)(o,2),h=f[0],O=f[1],v=Object(u.useState)(!0),g=Object(c.a)(v,2),w=g[0],y=g[1];return Object(u.useEffect)((function(){var e=function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)(n);case 2:return t=e.sent,e.next=5,Object(l.g)(t.province_code);case 5:if(e.t0=e.sent,e.t0){e.next=8;break}e.t0="";case 8:return a=e.t0,e.next=11,Object(l.e)({provinceCode:t.province_code,districtCode:t.district_code});case 11:if(e.t1=e.sent,e.t1){e.next=14;break}e.t1="";case 14:return r=e.t1,e.next=17,Object(l.i)({districtCode:t.district_code,wardCode:t.ward_code});case 17:c=e.sent,t.address="".concat(Object(l.c)(c),", ").concat(Object(l.a)(r),", ").concat(Object(l.b)(a)),O(t),y(!1);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),Object(m.jsx)("div",{className:s.root,children:w?Object(m.jsx)(N,{}):Object(m.jsxs)("div",{children:[Object(m.jsx)(x.a,{tutorInfo:h,isUser:Number(n)===Number(a),type:"tutor"}),Object(m.jsx)(k,{tutorInfo:h})]})})}}}]);
//# sourceMappingURL=12.c54ce28a.chunk.js.map