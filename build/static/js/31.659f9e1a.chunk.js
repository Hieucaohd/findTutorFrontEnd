(this.webpackJsonpbaseapp=this.webpackJsonpbaseapp||[]).push([[31],{223:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),a=c(22),i=c(6),r=c(15),o=c(55),j=c(176),d=c(182),b=c(12),p=c(37),x=c(1),l=c(13),O=c(9),h=c(210),u=c(56),f=c(232),m=c(36),g=c(220),v=c(58),k=c(2),w=Object(j.a)((function(e){var t,c;return{root:{"& span":{fontWeight:300},boxShadow:"0 2px 4px 0 #ccc",backgroundColor:"white",borderRadius:8},field:{display:"flex",alignItems:"center",borderRadius:"12px","& h4":(t={color:"#3b6997",display:"flex",alignItems:"center",justifyContent:"flex-end",fontWeight:"400"},Object(o.a)(t,e.breakpoints.down("xs"),{flex:2,fontSize:"10px",marginRight:"12px"}),Object(o.a)(t,e.breakpoints.up("sm"),{flex:1,marginRight:"24px",fontSize:"12px"}),Object(o.a)(t,"& svg",{marginRight:"4px",fontSize:"24px"}),t),"& p":(c={},Object(o.a)(c,e.breakpoints.down("xs"),{flex:10}),Object(o.a)(c,e.breakpoints.up("sm"),{flex:8}),Object(o.a)(c,"fontWeight","500"),c)}}}));var y=function(e){var t,c=e.tutorInfo,n=w();return Object(k.jsxs)("div",{className:"".concat(n.root," py-2"),children:[Object(k.jsxs)("div",{className:"".concat(n.field," p-4"),children:[Object(k.jsxs)("h4",{children:[" ",Object(k.jsx)(g.e,{})]}),Object(k.jsxs)("p",{children:[" ",Object(k.jsx)("span",{children:"Sinh ng\xe0y"})," ",(t=c.birthday,t&&0!==t.length?"".concat(t.slice(-2),"-").concat(t.slice(5,7),"-").concat(t.slice(0,4)):"")]})]}),Object(k.jsxs)("div",{className:"".concat(n.field," p-4"),children:[Object(k.jsxs)("h4",{children:[" ",Object(k.jsx)(m.d,{})]}),Object(k.jsxs)("p",{children:[" ",Object(k.jsx)("span",{children:"S\u1ed1ng t\u1ea1i"})," ",c.address]})]}),Object(k.jsxs)("div",{className:"".concat(n.field," p-4"),children:[Object(k.jsxs)("h4",{children:[" ",Object(k.jsx)(f.a,{})]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{children:"H\u1ecdc t\u1ea1i "}),c.university]})]}),Object(k.jsxs)("div",{className:"".concat(n.field," p-4"),children:[Object(k.jsx)("h4",{children:Object(k.jsx)(v.d,{})}),Object(k.jsx)("p",{children:c.achievement})]}),Object(k.jsxs)("div",{className:"".concat(n.field," p-4"),children:[Object(k.jsx)("h4",{children:Object(k.jsx)(u.c,{})}),Object(k.jsx)("p",{children:c.experience})]}),Object(k.jsxs)("div",{className:"".concat(n.field," p-4"),children:[Object(k.jsx)("h4",{children:Object(k.jsx)(v.a,{})}),Object(k.jsx)("p",{children:"T\u1eebng d\u1ea1y h\u1ecdc 12 l\u1edbp"})]})]})},N=c(241),I=Object(j.a)((function(e){var t,c;return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},skeletonTop:(t={},Object(o.a)(t,e.breakpoints.down("sm"),{width:"100%",height:"180px"}),Object(o.a)(t,e.breakpoints.up("md"),{width:"820px",height:"240px"}),Object(o.a)(t,"marginTop","24px"),Object(o.a)(t,"marginBottom","12px"),Object(o.a)(t,"borderRadius","12px"),t),skeleton:(c={},Object(o.a)(c,e.breakpoints.down("sm"),{width:"100%",height:"300px"}),Object(o.a)(c,e.breakpoints.up("md"),{width:"820px",height:"320px"}),Object(o.a)(c,"marginBottom","12px"),Object(o.a)(c,"borderRadius","12px"),c)}}));var R=function(e){var t=e.isParentRoom,c=I();return Object(k.jsxs)("div",{className:c.root,children:[Object(k.jsx)(N.a,{variant:"rect",className:c.skeletonTop,style:{width:t&&"95%"}}),Object(k.jsx)(N.a,{variant:"rect",className:c.skeleton,style:{width:t&&"95%"}})]})},S=Object(j.a)((function(e){var t;return{root1:(t={display:"flex",flexDirection:"column",marginTop:"80px"},Object(o.a)(t,e.breakpoints.down("sm"),{padding:"0px 12px",marginBottom:40}),Object(o.a)(t,e.breakpoints.up("md"),{padding:"0px 220px"}),t),root2:{display:"flex",flexDirection:"column",padding:"8px 12px",position:"relative"}}}));t.default=function(e){var t=e.currentId,c=Object(O.h)("/profile/tutor/:tutorId"),n=t||Number(c.params.tutorId),o=Object(l.c)(b.g),j=S(),u=Object(x.useState)({}),f=Object(r.a)(u,2),m=f[0],g=f[1],v=Object(x.useState)(!0),w=Object(r.a)(v,2),N=w[0],I=w[1];return Object(x.useEffect)((function(){var e=function(){var e=Object(i.a)(s.a.mark((function e(){var t,c,i,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.b)(n);case 2:return(t=e.sent).address="",g(t),I(!1),e.next=8,Object(d.g)(t.province_code);case 8:if(e.t0=e.sent,e.t0){e.next=11;break}e.t0="";case 11:return c=e.t0,e.next=14,Object(d.e)({provinceCode:t.province_code,districtCode:t.district_code});case 14:if(e.t1=e.sent,e.t1){e.next=17;break}e.t1="";case 17:return i=e.t1,e.next=20,Object(d.i)({districtCode:t.district_code,wardCode:t.ward_code});case 20:r=e.sent,t.address="".concat(Object(d.c)(r),", ").concat(Object(d.a)(i),", ").concat(Object(d.b)(c)),g(Object(a.a)({},t));case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),Object(k.jsx)("div",{className:t?j.root2:j.root1,children:N?Object(k.jsx)(R,{isParentRoom:!!t}):Object(k.jsxs)("div",{children:[Object(k.jsx)(h.a,{tutorInfo:m,isUser:Number(n)===Number(o),type:"tutor"}),Object(k.jsx)(y,{tutorInfo:m})]})})}}}]);
//# sourceMappingURL=31.659f9e1a.chunk.js.map