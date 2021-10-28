(this.webpackJsonpbaseapp=this.webpackJsonpbaseapp||[]).push([[17],{155:function(e,t,n){"use strict";var r=n(150),c=(n(1),n(159)),a=n(314),i=n(2);var s=Object(r.a)({root:{position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.5)","z-index":"899","& svg":{fontSize:80}},modal:{width:"308px",height:"172px",backgroundColor:"white",borderRadius:"4px",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",padding:8},text:{fontSize:"16px",margin:0},buttonGroup:{"& button":{border:"none",fontSize:"16px",opacity:"0.6",margin:"0 8px",padding:"4px 8px",borderRadius:4,color:"white","&:hover":{cursor:"pointer",opacity:"1"}}},delete:{color:"red"},check:{color:"#00AA85"},agree:{backgroundColor:"#0061FF"},disagree:{backgroundColor:"#AAAAAA"}});t.a=function(e){var t=e.typeIcon,n=e.text,r=e.onAgree,o=void 0===r?null:r,u=e.onDisagree,l=void 0===u?null:u,p=s();return Object(i.jsx)("div",{className:p.root,children:Object(i.jsxs)(a.a.div,{animate:{scale:1.1},transition:{duration:.1},className:p.modal,children:["delete"===t&&Object(i.jsx)(c.a,{className:p.delete}),"check"===t&&Object(i.jsx)(c.c,{className:p.check}),"fail"===t&&Object(i.jsx)(c.b,{className:p.delete}),Object(i.jsx)("p",{className:p.text,children:n}),Object(i.jsxs)("div",{className:p.buttonGroup,children:[o&&Object(i.jsx)("button",{className:p.agree,onClick:function(){o()},children:"Ti\u1ebfp t\u1ee5c"}),l&&Object(i.jsx)("button",{className:p.disagree,onClick:function(){l()},children:"H\u1ee7y"})]})]})})}},156:function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"h",(function(){return o})),n.d(t,"g",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"i",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return h}));var r=n(4),c=n.n(r),a=n(6),i=function(){var e=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://provinces.open-api.vn/api/");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log("error to get province list: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://provinces.open-api.vn/api/p/".concat(t,"?depth=2"));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log("error to get district list: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://provinces.open-api.vn/api/d/".concat(t,"?depth=2"));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log("error to get ward list: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://provinces.open-api.vn/api/");case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.next=9,r.find((function(e){return e.code===t}));case 9:return a=e.sent,e.abrupt("return",a.name);case 13:e.prev=13,e.t0=e.catch(0),console.log("Failed to get province name: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.provinceCode,r=t.districtCode,e.prev=1,e.next=4,fetch("https://provinces.open-api.vn/api/p/".concat(n,"?depth=2"));case 4:return a=e.sent,e.next=7,a.json();case 7:return i=e.sent,e.next=10,i.districts.find((function(e){return e.code===r}));case 10:return s=e.sent,e.abrupt("return",s.name);case 14:e.prev=14,e.t0=e.catch(1),console.log("Failed to get district name: ",e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.districtCode,r=t.wardCode,e.prev=1,e.next=4,fetch("https://provinces.open-api.vn/api/d/".concat(n,"?depth=2"));case 4:return a=e.sent,e.next=7,a.json();case 7:return i=e.sent,e.next=10,i.wards.find((function(e){return e.code===r}));case 10:return s=e.sent,e.abrupt("return",s.name);case 14:e.prev=14,e.t0=e.catch(1),console.log("Failed to get ward name: ",e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),d=function(e){return e?-1!==e.search("Th\xe0nh ph\u1ed1")?e.slice(10):-1!==e.search("T\u1ec9nh")?e.slice(5):e:""},f=function(e){return e?-1!==e.search("Qu\u1eadn")?e.replace("Qu\u1eadn","Q."):-1!==e.search("Huy\u1ec7n")?e.replace("Huy\u1ec7n","H."):-1!==e.search("Th\xe0nh ph\u1ed1")?e.replace("Th\xe0nh ph\u1ed1","TP."):-1!==e.search("Th\u1ecb x\xe3")?e.replace("Th\u1ecb x\xe3","TX."):e:""},h=function(e){return e?-1!==e.search("Ph\u01b0\u1eddng")?e.replace("Ph\u01b0\u1eddng","P."):e:""}},169:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},177:function(e,t,n){"use strict";var r=n(4),c=n.n(r),a=n(6),i=n(14),s=n(150),o=n(1),u=n(156),l=n(2),p=Object(s.a)({root:{display:"flex",flexDirection:"column","& select":{"&:focus-visible":{outline:"none"}}},field:{padding:"8px 2px",backgroundColor:"#fff",border:"1px solid #ccc",marginBottom:"2px",borderRadius:"8px"}});t.a=function(e){var t=e.onChange,n=void 0===t?null:t,r=p(),s=Object(o.useState)([]),d=Object(i.a)(s,2),f=d[0],h=d[1],b=Object(o.useState)(0),j=Object(i.a)(b,2),v=j[0],m=j[1],x=Object(o.useState)([]),O=Object(i.a)(x,2),_=O[0],g=O[1],y=Object(o.useState)(0),k=Object(i.a)(y,2),w=k[0],N=k[1],C=Object(o.useState)([]),S=Object(i.a)(C,2),T=S[0],A=S[1],F=Object(o.useRef)(),P=Object(o.useRef)(),D=Object(o.useRef)();return Object(o.useEffect)((function(){var e=function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.f)();case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(o.useEffect)((function(){var e=function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.d)(v);case 2:t=e.sent,g(t.districts);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();0!==v&&e()}),[v]),Object(o.useEffect)((function(){var e=function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.h)(w);case 2:t=e.sent,A(t.wards);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();0!==w&&e()}),[w]),Object(l.jsxs)("div",{className:r.root,children:[Object(l.jsxs)("select",{className:r.field,name:"province",onChange:function(){F.current.value&&(n({province:F.current.value,district:0,ward:0}),m(F.current.value))},ref:F,children:[Object(l.jsx)("option",{value:0,children:"--T\u1ec9nh, th\xe0nh ph\u1ed1--"},0),null===f||void 0===f?void 0:f.map((function(e){return Object(l.jsx)("option",{value:e.code,children:e.name},e.code)}))]}),Object(l.jsxs)("select",{className:r.field,name:"district",onChange:function(){P.current.value&&(n({province:v,district:P.current.value,ward:0}),N(P.current.value))},ref:P,children:[Object(l.jsx)("option",{value:0,children:"--Qu\u1eadn, huy\u1ec7n--"},0),null===_||void 0===_?void 0:_.map((function(e){return Object(l.jsx)("option",{value:e.code,children:e.name},e.code)}))]}),Object(l.jsxs)("select",{className:r.field,name:"ward",onChange:function(){D.current.value&&(n({province:v,district:w,ward:D.current.value}),N(P.current.value))},ref:D,children:[Object(l.jsx)("option",{value:0,children:"--X\xe3 Ph\u01b0\u1eddng--"},0),null===T||void 0===T?void 0:T.map((function(e){return Object(l.jsx)("option",{value:e.code,children:e.name},e.code)}))]})]})}},198:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return d}));var r=n(4),c=n.n(r),a=n(6),i=n(176),s=n.n(i),o=n(10),u=n(16),l=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.token,r=t.tutorInfor,a=t.dispatch,e.prev=1,e.next=4,fetch("".concat(u.server_name,"/findTutor/tutorList/"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"".concat(u.token_prefix," ").concat(n)},body:JSON.stringify(r)});case 4:return a(Object(o.n)()),e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(1),console.log("Failed to resgister tutor",e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.token,r=t.parentInfor,a=t.dispatch,e.prev=1,e.next=4,fetch("".concat(u.server_name,"/findTutor/parentList/"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"".concat(u.token_prefix," ").concat(n)},body:JSON.stringify(r)});case 4:return a(Object(o.m)()),e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(1),console.log("Failed to resgister tutor",e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.token,r=t.file,e.prev=1,a=r,s()({method:"POST",url:"".concat(u.server_name,"/findTutor/imagePrivateUserList/"),headers:{"Content-Type":"application/json",Authorization:"".concat(u.token_prefix," ").concat(n)},data:a}),e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(1),console.log("Failed to register image ",e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},289:function(e,t,n){"use strict";n.r(t);var r=n(21),c=n(4),a=n.n(c),i=n(6),s=n(14),o=n(20),u=n(177),l=n(155),p=n(169),d=n.n(p),f=n(1),h=n(162),b=n(11),j=n(8),v=n(10),m=n(198),x=n(2);t.default=function(e){var t=Object(b.c)(v.i),n=Object(j.f)(),c=Object(h.a)(),p=c.register,O=c.formState.errors,_=c.handleSubmit,g=c.watch;Object(f.useRef)({}).current=g("password","");var y=Object(b.b)(),k=Object(f.useState)(!1),w=Object(s.a)(k,2),N=w[0],C=w[1],S=Object(f.useState)({province:0,district:0,ward:0}),T=Object(s.a)(S,2),A=T[0],F=T[1],P=Object(f.useState)(!1),D=Object(s.a)(P,2),I=D[0],L=D[1],z=Object(f.useState)(!1),R=Object(s.a)(z,2),H=R[0],J=R[1],Q=function(e){return{first_name:e.slice(0,e.indexOf(" ")),last_name:e.slice(e.indexOf(" ")+1)}},q=function(e){var t=[];return e.cap1&&t.push(1),e.cap2&&t.push(2),e.cap3&&t.push(3),e.cap4&&t.push(4),t},E=function(){var e=Object(i.a)(a.a.mark((function e(r){var c,i,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),c={profession:r.profession||null,university:r.university||null,experience:r.experience||null,achievement:r.achievement||null,khu_vuc_day:r.teachLocation||null,number_phone:r.telephone||null,number_of_identity_card:r.identitycard||null,first_name:Q(r.name).first_name||null,last_name:Q(r.name).last_name||null,lop_day:[1],cap_day:q(r)||null,birthday:r.birthday||null,avatar:null,province_code:Number(A.province),district_code:Number(A.district),ward_code:Number(A.ward),detail_location:r.detailLocation||null,link:[{name:"facebook",url:r.facebook.replace(/^\s+|\s+$/g,"")?r.facebook:""},{name:"instagram",url:r.instagram.replace(/^\s+|\s+$/g,"")?r.instagram:""},{name:"linkedln",url:r.linkedln.replace(/^\s+|\s+$/g,"")?r.linkedln:""}]},e.next=4,Object(m.c)({token:t,tutorInfor:c,dispatch:y});case 4:if(i=e.sent,(s=new d.a).append("avatar",r.avatar[0]),s.append("identity_card",r.cccd[0]),s.append("student_card",r.thesv[0]),!i){e.next=15;break}return e.next=12,Object(m.a)({token:t,file:s});case 12:e.t0=e.sent,e.next=16;break;case 15:e.t0=!1;case 16:o=e.t0,C(!1),o?(L(!0),n.push("/")):J(!0);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"role",children:[Object(x.jsxs)("form",{className:"role__form",onSubmit:_(E),children:[Object(x.jsx)("p",{children:"\u0110\u0103ng k\xed l\xe0m gia s\u01b0"}),Object(x.jsxs)("div",{className:"role__form__field",children:[Object(x.jsx)("label",{children:"H\u1ecd v\xe0 T\xean"}),Object(x.jsx)("input",Object(r.a)({name:"text",type:"name"},p("name",{required:!0}))),O.name&&Object(x.jsx)("span",{className:"role__form__error",children:"Nh\u1eadp \u0111\xfang t\xean c\u1ee7a b\u1ea1n"})]}),Object(x.jsxs)("div",{className:"role__form__field",children:[Object(x.jsx)("label",{children:"Ng\xe0y sinh"}),Object(x.jsx)("input",Object(r.a)({name:"birthday",type:"date"},p("birthday",{required:!0}))),O.birthday&&Object(x.jsx)("span",{className:"role__form__error",children:"C\u1ea7n nh\u1eadp ng\xe0y sinh"})]}),Object(x.jsxs)("div",{className:"role__form__field",children:[Object(x.jsx)("label",{children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),Object(x.jsx)("input",Object(r.a)({name:"telephone",type:"number"},p("telephone",{required:!0,minLength:8}))),O.telephone&&Object(x.jsx)("span",{className:"role__form__error",children:"C\u1ea7n nh\u1eadp \u0111\xfang s\u1ed1 \u0111i\u1ec7n tho\u1ea1i"})]}),Object(x.jsxs)("div",{className:"role__form__field",children:[Object(x.jsx)("label",{children:"S\u1ed1 CMND/CCCD (kh\xf4ng b\u1eaft bu\u1ed9c)"}),Object(x.jsx)("input",Object(r.a)({name:"identitycard",type:"number"},p("identitycard")))]}),Object(x.jsxs)("div",{className:"role__form__field",children:[Object(x.jsx)("label",{children:"\u0110\u1ecba ch\u1ec9"}),Object(x.jsx)(u.a,{onChange:function(e){F(e)}})]}),Object(x.jsxs)("div",{className:"role__form__field",children:[Object(x.jsx)("label",{children:"Chi ti\u1ebft \u0111\u1ecba ch\u1ec9"}),Object(x.jsx)("input",Object(r.a)({name:"detailLocation",type:"text"},p("detailLocation")))]}),Object(x.jsxs)("div",{className:"role__form__field",children:[Object(x.jsx)("label",{children:"\u1ea2nh \u0111\u1ea1i di\u1ec7n"}),Object(x.jsx)("input",Object(r.a)({type:"file",name:"avatar"},p("avatar")))]}),Object(x.jsxs)("div",{className:"role__form__field",children:[Object(x.jsx)("label",{children:"\u1ea2nh CCCD"}),Object(x.jsx)("input",Object(r.a)({type:"file",name:"avatar"},p("cccd")))]}),Object(x.jsxs)("div",{className:"role__form__field",children:[Object(x.jsx)("label",{children:"Ngh\u1ec1 nghi\u1ec7p hi\u1ec7n t\u1ea1i"}),Object(x.jsxs)("select",Object(r.a)(Object(r.a)({className:"role__form__profession",name:"profession"},p("profession")),{},{children:[Object(x.jsx)("option",{value:"sv",children:"Sinh Vi\xean"}),Object(x.jsx)("option",{value:"gv",children:"Gi\xe1o Vi\xean"}),Object(x.jsx)("option",{value:"khac",children:"Kh\xe1c"})]}))]}),Object(x.jsxs)("div",{className:"role__form__field",children:[Object(x.jsx)("label",{children:"\u1ea2nh th\u1ebb sinh vi\xean"}),Object(x.jsx)("input",Object(r.a)({type:"file",name:"avatar"},p("thesv")))]}),Object(x.jsx)("div",{className:"role__form__field",children:Object(x.jsx)("button",{className:"role__form__submit",variant:"contained",color:"primary",type:"submit",children:"\u0110\u0103ng k\xed"})})]}),N&&Object(x.jsx)(o.a,{}),I&&Object(x.jsx)(l.a,{typeIcon:"check",text:"\u0110\u0103ng k\xed l\xe0m gia s\u01b0 th\xe0nh c\xf4ng",onAgree:function(){return n.push("/")}}),H&&Object(x.jsx)(l.a,{typeIcon:"fail",text:"\u0110\u0103ng k\xed l\xe0m gia s\u01b0 kh\xf4ng th\xe0nh c\xf4ng",onAgree:function(){return J(!1)}})]})}}}]);
//# sourceMappingURL=17.4a2339a3.chunk.js.map