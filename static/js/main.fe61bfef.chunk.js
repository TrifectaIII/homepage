(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{105:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=105},106:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=106},110:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),o=n(47);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(32),l=n(14),j=n(82),u=n(175),d=n(176),h=n(177),m=n(137),b=n(178),g=n(43),O=n(141),p=n(142),x=n(112),f=n(143),v=n(144),y=n(145),k=n(146),w=n(147),N=function(){return Object(o.b)()},I=o.c,S=n(60),C={darkMode:Boolean(localStorage.getItem("darkMode")),menuDrawerOpen:!1},T=Object(S.b)({name:"global",initialState:C,reducers:{toggleDarkMode:function(e){e.darkMode=!e.darkMode,localStorage.setItem("darkMode",e.darkMode?"on":"")},openMenuDrawer:function(e){e.menuDrawerOpen=!0},closeMenuDrawer:function(e){e.menuDrawerOpen=!1}}}),D=T.actions,M=D.toggleDarkMode,B=D.openMenuDrawer,R=D.closeMenuDrawer,P=function(e){return e.global.darkMode},E=function(e){return e.global.menuDrawerOpen},J=T.reducer,F=n(22),G=n(180),L=n(2),q=Object(m.a)((function(e){return{root:{},icon:{marginRight:"0.5rem"}}})),U=function(e){var t=q(),n=Object(a.useRef)(0),c=Object(a.useState)(!1),r=Object(F.a)(c,2),i=r[0],o=r[1],s=Object(a.useState)(!0),l=Object(F.a)(s,2),j=l[0],u=l[1],d=function(){o(!0),null!==n.current&&clearTimeout(n.current),n.current=window.setTimeout((function(){return o(!1)}),1e3)};return Object(L.jsx)(G.a,{title:j?"Copied!":"Copy failed, please reload page and try again.",arrow:!0,open:i,children:Object(L.jsxs)(x.a,{onClick:function(){navigator.clipboard.writeText(e.contents).then((function(){u(!0),d()}),(function(){u(!1),d()}))},style:{textTransform:"none"},variant:e.variant,size:e.size,color:e.color,children:[Object(L.jsx)(e.icon,{className:t.icon})," ",e.contents]})})},A=n(55),z=n.p+"static/media/dakotamaddenfong_resume.b64abce8.pdf",W=Object(m.a)((function(e){return{root:{marginTop:"3rem"},text:{marginTop:"3rem"},mainbuttons:{marginTop:"3rem"},contactheader:{marginTop:"2rem"},contactbuttons:{marginTop:"1rem"},divider:{width:"50%",margin:"10px"},icon:{marginRight:"0.5rem"}}})),_=function(e){var t=W(),n=I(P);return Object(L.jsxs)(b.a,{alignItems:"center",display:"flex",flexDirection:"column",className:t.root,children:[Object(L.jsx)(g.a,{variant:"h2",align:"center",children:"Dakota Madden-Fong"}),Object(L.jsx)(O.a,{variant:"fullWidth",className:t.divider}),Object(L.jsx)(g.a,{variant:"h2",align:"center",children:"TrifectaIII"}),Object(L.jsx)(g.a,{variant:"body1",className:t.text,children:"A coder living and working in San Francisco, CA. I focus on software and web development."}),Object(L.jsxs)(p.a,{orientation:"vertical",className:t.mainbuttons,variant:"contained",size:"large",children:[Object(L.jsxs)(x.a,{href:z,color:"primary",children:[Object(L.jsx)(f.a,{className:t.icon})," Resume"]}),Object(L.jsxs)(x.a,{onClick:function(){return e.history.push("/portfolio")},color:"secondary",children:[Object(L.jsx)(v.a,{className:t.icon}),"  Portfolio"]}),Object(L.jsxs)(x.a,{href:A.github,color:"primary",children:[Object(L.jsx)(y.a,{className:t.icon}),"  GitHub"]})]}),Object(L.jsx)(g.a,{variant:"h3",className:t.contactheader,children:"Contact Info"}),Object(L.jsxs)(p.a,{orientation:"vertical",className:t.contactbuttons,variant:"text",color:n?"secondary":"primary",children:[Object(L.jsx)(U,{icon:k.a,contents:"maddenfong@gmail.com"}),Object(L.jsx)(U,{icon:w.a,contents:"+1 415 810 0334"})]})]})},H=n(148),Q=n(149),V=Object(m.a)((function(e){return{root:{marginTop:"3rem"},topGap:{marginTop:"3rem"},route:{backgroundColor:"rgba(128, 128, 128, 0.3)",padding:"0.5rem",borderRadius:"0.5rem"}}})),$=function(e){var t=V();return Object(L.jsxs)(b.a,{alignItems:"center",display:"flex",flexDirection:"column",className:t.root,children:[Object(L.jsx)(g.a,{variant:"h2",align:"center",children:"404: Not Found"}),Object(L.jsxs)(g.a,{variant:"body1",align:"center",className:t.topGap,children:[Object(L.jsx)("code",{className:t.route,children:e.location.pathname})," could not be found."]}),Object(L.jsxs)(p.a,{variant:"contained",className:t.topGap,children:[Object(L.jsxs)(x.a,{onClick:e.history.goBack,color:"secondary",children:[Object(L.jsx)(H.a,{})," Back"]}),Object(L.jsxs)(x.a,{onClick:function(){return e.history.push("/")},color:"primary",children:[Object(L.jsx)(Q.a,{})," Home"]})]})]})},Z=n(150),K=n(151),X=n(152),Y=n(153),ee=n(183),te=n(154),ne=n(155),ae=n(59),ce=function(e){var t={};return e.keys().forEach((function(n){var a=n.replace("./","").replace(/_/g," ");t[a]=e(n).default})),t}(n(105).context("./",!1,Object(ae.a)(/\.(png|gif)$/,{image:1}))),re=Object(m.a)((function(e){return{root:{},card:{maxWidth:"100%"},avatar:{marginBottom:"1rem"}}})),ie=function(e){var t=re(),n="".concat(A.page,"/").concat(e.info.link);return Object(L.jsx)(Z.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:t.root,children:Object(L.jsxs)(K.a,{className:t.card,raised:!0,children:[Object(L.jsx)(X.a,{href:n,children:Object(L.jsxs)(Y.a,{children:[Object(L.jsx)(ee.a,{src:ce[e.info.logo],variant:"rounded",className:t.avatar}),Object(L.jsx)(g.a,{variant:"h5",gutterBottom:!0,children:e.name}),Object(L.jsx)(g.a,{color:"textSecondary",children:e.info.description})]})}),Object(L.jsxs)(te.a,{children:[Object(L.jsx)(x.a,{href:n,children:"Visit"}),Object(L.jsx)(ne.a,{href:e.info.github,children:Object(L.jsx)(y.a,{})})]})]})})},oe=n(163),se=n(83),le=n(156),je=n(157),ue=n(158),de=n(159),he=n(160),me=n(161),be=n(162),ge=function(e){var t={};return e.keys().forEach((function(n){var a=n.replace("./","").replace(/_/g," ");t[a]=e(n).default})),t}(n(106).context("./",!1,Object(ae.a)(/\.(png|gif)$/,{image:1}))),Oe=function(e,t){return Object(L.jsx)(le.a,Object(se.a)({direction:"up",ref:t},e))},pe=c.a.forwardRef(Oe),xe=Object(m.a)((function(e){return{root:{},closeButton:{},visitButton:{marginRight:"1rem"}}})),fe=function(e){var t=xe();return Object(L.jsxs)(je.a,{open:e.open,TransitionComponent:pe,keepMounted:!0,onClose:e.closer,className:t.root,children:[Object(L.jsx)("img",{src:ge[e.info.image]}),Object(L.jsx)(ue.a,{children:e.name}),Object(L.jsxs)(de.a,{children:[Object(L.jsx)(he.a,{children:e.info.description}),Object(L.jsxs)(he.a,{children:[Object(L.jsx)("b",{children:"Languages:"}),"\xa0",e.info.languages.join(", ")]}),Object(L.jsxs)(he.a,{children:[Object(L.jsx)("b",{children:"Techniques:"}),"\xa0",e.info.techniques.join(", ")]})]}),Object(L.jsxs)(me.a,{children:[Object(L.jsx)(x.a,{href:e.info.link,color:"primary",variant:"contained",className:t.visitButton,children:"Visit"}),Object(L.jsx)(ne.a,{href:e.info.github,children:Object(L.jsx)(y.a,{})}),Object(L.jsx)(ne.a,{onClick:e.closer,color:"secondary",className:t.closeButton,children:Object(L.jsx)(be.a,{})})]})]})},ve=Object(m.a)((function(e){return{root:{},card:{maxWidth:"100%"},image:{height:"10rem"}}})),ye=function(e){var t=ve(),n=Object(a.useState)(!1),c=Object(F.a)(n,2),r=c[0],i=c[1];return Object(L.jsxs)(Z.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:t.root,children:[Object(L.jsxs)(K.a,{className:t.card,raised:!0,children:[Object(L.jsxs)(X.a,{onClick:function(){return i(!0)},children:[Object(L.jsx)(oe.a,{className:t.image,image:ge[e.info.image]}),Object(L.jsxs)(Y.a,{children:[Object(L.jsx)(g.a,{variant:"h5",gutterBottom:!0,children:e.name}),Object(L.jsx)(g.a,{color:"textSecondary",children:e.info.description})]})]}),Object(L.jsxs)(te.a,{children:[Object(L.jsx)(x.a,{href:e.info.link,children:"Visit"}),Object(L.jsx)(x.a,{onClick:function(){return i(!0)},children:"More Info"})]})]}),Object(L.jsx)(fe,{open:r,name:e.name,info:e.info,closer:function(){return i(!1)}})]})},ke=n(61),we=n(62),Ne=Object(m.a)((function(e){return{root:{marginTop:"3rem"},subheader:{marginTop:"3rem",marginBottom:"3rem"}}})),Ie=function(e){var t,n=Ne(),a=[];for(t in we)if(Object.prototype.hasOwnProperty.call(we,t)){var c=we[t];a.push(Object(L.jsx)(ye,{name:t,info:c},t))}var r,i=[];for(r in ke)if(Object.prototype.hasOwnProperty.call(ke,r)){var o=ke[r];i.push(Object(L.jsx)(ie,{name:r,info:o},r))}return Object(L.jsxs)(b.a,{alignItems:"center",display:"flex",flexDirection:"column",className:n.root,children:[Object(L.jsx)(g.a,{variant:"h2",children:"Portfolio"}),Object(L.jsx)(g.a,{variant:"h3",className:n.subheader,children:"Projects"}),Object(L.jsx)(Z.a,{container:!0,spacing:3,children:a}),Object(L.jsx)(g.a,{variant:"h3",className:n.subheader,children:"Tools"}),Object(L.jsx)(Z.a,{container:!0,spacing:3,children:i})]})},Se=n(182),Ce=n(168),Te=n(169),De=n(170),Me=n(171),Be=n(172),Re=n(164),Pe=n(165),Ee=n(166),Je=n(173),Fe=n(4),Ge={Portfolio:{icon:v.a,route:"/portfolio"}},Le=n(179),qe=function(e){return Object(L.jsx)(Le.a,{mdUp:!0,children:e.children})},Ue=function(e){return Object(L.jsx)(Le.a,{smDown:!0,children:e.children})},Ae=Object(m.a)((function(e){return{root:{},white:{color:e.palette.common.white},textcolor:{color:e.palette.text.primary},noDec:{textDecoration:"none"},rightSide:{marginLeft:"auto"},spaceRight:{marginRight:"0.5rem"},navButton:{color:e.palette.common.white,textTransform:"none",marginRight:"1rem"}}})),ze=function(e){var t=Ae(),n=N(),r=I(P),i=r?Re.a:Pe.a,o={};Object.entries(Ge).forEach((function(e){var t=Object(F.a)(e,2),n=t[0];if("children"in t[1]){var c=Object(a.useState)(null),r=Object(F.a)(c,2),i=r[0],s=r[1];o[n]={value:i,setter:s}}}));var l=[];return Object.entries(Ge).forEach((function(e){var n=Object(F.a)(e,2),a=n[0],r=n[1];"route"in r?l.push(Object(L.jsx)(s.b,{to:r.route,className:Object(Fe.a)(t.white,t.noDec),children:Object(L.jsxs)(x.a,{className:t.navButton,children:[Object(L.jsx)(r.icon,{className:t.spaceRight}),Object(L.jsx)(g.a,{variant:"body1",children:a})]})},a)):l.push(Object(L.jsxs)(c.a.Fragment,{children:[Object(L.jsxs)(x.a,{onClick:function(e){return o[a].setter(e.currentTarget)},className:t.navButton,children:[Object(L.jsx)(r.icon,{className:t.spaceRight}),Object(L.jsx)(g.a,{variant:"body1",children:a}),Object(L.jsx)(Ee.a,{})]}),Object(L.jsx)(Se.a,{getContentAnchorEl:null,anchorEl:o[a].value,open:Boolean(o[a].value),onClose:function(){return o[a].setter(null)},elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},keepMounted:!0,children:Object.entries(r.children).map((function(e){var n=Object(F.a)(e,2),c=n[0],r=n[1];return Object(L.jsx)(s.b,{to:r.route,className:Object(Fe.a)(t.noDec,t.textcolor),children:Object(L.jsxs)(Ce.a,{onClick:function(){return o[a].setter(null)},children:[Object(L.jsx)(Te.a,{children:Object(L.jsx)(r.icon,{})}),Object(L.jsx)(De.a,{primary:c})]})},c)}))})]},a))})),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(Me.a,{position:"fixed",className:t.root,children:Object(L.jsxs)(Be.a,{children:[Object(L.jsx)(qe,{children:Object(L.jsx)(ne.a,{edge:"start",className:t.white,onClick:function(){return n(B())},children:Object(L.jsx)(Je.a,{color:"inherit"})})}),Object(L.jsx)(s.b,{to:"/",className:Object(Fe.a)(t.noDec,t.white),children:Object(L.jsx)(x.a,{className:t.navButton,children:Object(L.jsx)(g.a,{variant:"h5",children:"Dakota Madden-Fong"})})}),Object(L.jsx)(Ue,{children:Object(L.jsx)(b.a,{display:"flex",children:l})}),Object(L.jsx)(G.a,{title:r?"Light Mode":"Dark Mode",className:t.rightSide,children:Object(L.jsx)(ne.a,{edge:"end",className:t.white,onClick:function(){return n(M())},children:Object(L.jsx)(i,{})})})]})}),Object(L.jsx)(Be.a,{})]})},We=n(116),_e=n(181),He=n(167),Qe=n(174),Ve=Object(m.a)((function(e){return{root:{padding:"1rem"},linkText:{textDecoration:"none",color:e.palette.text.primary,"&:hover":{textDecoration:"underline"}},inactive:{color:e.palette.text.secondary},hidden:{color:e.palette.background.paper}}})),$e=function(e){var t=Ve(),n=N(),a=I(E),c=[];return Object.entries(Ge).forEach((function(e,a){var r=Object(F.a)(e,2),i=r[0],o=r[1];"route"in o?c.push(Object(L.jsx)(s.b,{to:o.route,className:t.linkText,onClick:function(){return n(R())},children:Object(L.jsxs)(We.a,{children:[Object(L.jsx)(Te.a,{children:Object(L.jsx)(o.icon,{})}),Object(L.jsx)(De.a,{primary:i})]})},i)):(c.push(Object(L.jsxs)(We.a,{className:t.inactive,children:[Object(L.jsx)(Te.a,{className:t.inactive,children:Object(L.jsx)(o.icon,{})}),Object(L.jsx)(De.a,{primary:i})]},i)),Object.entries(o.children).forEach((function(e){var a=Object(F.a)(e,2),r=a[0],i=a[1];c.push(Object(L.jsx)(s.b,{to:i.route,className:t.linkText,onClick:function(){return n(R())},children:Object(L.jsxs)(We.a,{children:[Object(L.jsx)(Te.a,{children:Object(L.jsx)(Qe.a,{className:t.hidden})}),Object(L.jsx)(Te.a,{children:Object(L.jsx)(i.icon,{})}),Object(L.jsx)(De.a,{primary:r})]})},r))}))),a<Object.keys(Ge).length-1&&c.push(Object(L.jsx)(O.a,{},"div".concat(a)))})),Object(L.jsx)(qe,{children:Object(L.jsx)(_e.a,{anchor:"left",open:a,onOpen:function(){return n(B())},onClose:function(){return n(R())},children:Object(L.jsx)(b.a,{className:t.root,children:Object(L.jsxs)(He.a,{children:[Object(L.jsx)(s.b,{to:"/",className:t.linkText,onClick:function(){return n(R())},children:Object(L.jsxs)(We.a,{children:[Object(L.jsx)(Te.a,{children:Object(L.jsx)(Q.a,{})}),Object(L.jsx)(De.a,{primary:"Home"})]})}),c]})})})})},Ze={palette:{type:"light",primary:{main:"#794BC4"},secondary:{main:"#e65100"}}},Ke={palette:{type:"dark",primary:{main:"#794BC4"},secondary:{main:"#e65100"}}},Xe=function(){var e=I(P),t=Object(j.a)(Ze),n=Object(j.a)(Ke),a=e?n:t;return Object(L.jsxs)(u.a,{theme:a,children:[Object(L.jsx)(d.a,{}),Object(L.jsxs)(s.a,{children:[Object(L.jsx)(ze,{}),Object(L.jsx)($e,{}),Object(L.jsx)(h.a,{children:Object(L.jsxs)(l.c,{children:[Object(L.jsx)(l.a,{exact:!0,path:"/",component:_}),Object(L.jsx)(l.a,{exact:!0,path:"/",component:_}),Object(L.jsx)(l.a,{exact:!0,path:"/portfolio",component:Ie}),Object(L.jsx)(l.a,{component:$})]})})]})]})},Ye=Object(S.a)({reducer:{global:J}});i.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(o.a,{store:Ye,children:Object(L.jsx)(Xe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e){e.exports=JSON.parse('{"github":"https://github.com/TrifectaIII","page":"https://trifectaiii.github.io"}')},61:function(e){e.exports=JSON.parse('{"Popdown":{"description":"Responsive, lightweight, easy-to-use alternatives for prompt(), alert(), and confirm().","link":"Popdown/","github":"https://github.com/TrifectaIII/Popdown","logo":"js.png"},"JavaScript Practice":{"description":"A tool to practice JavaScript, with problems to solve.","link":"JavaScript-Practice/","github":"https://github.com/TrifectaIII/JavaScript-Practice","logo":"js.png"},"MTG Guessing Game":{"description":"A simple Magic: The Gathering card recognition game, build with react-redux, typescript, and SASS.","link":"mtg-guessing-game/","github":"https://github.com/TrifectaIII/mtg-guessing-game","logo":"mtg.png"},"MC Farm Info":{"description":"A info site about the various farms on our minecraft server, built with React/Redux.","link":"mc-farm-info/","github":"https://github.com/TrifectaIII/mc-farm-info","logo":"mc.png"},"DS1 Soul Level Calculator":{"description":"A tool to calculate the souls necessary to level up in Dark Souls 1.","link":"DS1-Soul-Level-Calculator/","github":"https://github.com/TrifectaIII/DS1-Soul-Level-Calculator","logo":"ds.png"},"DS1 Class Calculator":{"description":"A tool to calculate the best starting class based on build goals in Dark Souls 1.","link":"DS1-Class-Calculator/","github":"https://github.com/TrifectaIII/DS1-Class-Calculator","logo":"ds.png"}}')},62:function(e){e.exports=JSON.parse('{"MTG Card Reader":{"link":"https://www.mtg-cr.tk/","github":"https://github.com/TrifectaIII/MTG-Card-Reader-Web","languages":["Python","HTML","CSS","JS"],"techniques":["Image Classification","Feature Detection","Computer Vision","UI Design","Full-Stack Development"],"description":"Use your webcam to identify Magic: The Gathering cards! MTG Card Reader allows you to build decklists and manage your collection easily by identifying cards using a live webcam feed.","image":"mtgcr.png"},"Immunity":{"link":"https://www.immunity.ml/","github":"https://github.com/TrifectaIII/Immunity","languages":["Node.js","HTML","CSS","JS","SQL"],"techniques":["Websockets","Real-Time Communication","UI Design","Full-Stack Development","Custom Game Engine","SQLite Database"],"description":"Built with a custom server-side engine, Immunity is a multiplayer class-based action game! Join a game with your friends and blast waves of enemies away! (Note: In active development, Immunity is not yet feature complete and will be prone to bugs.)","image":"immunity.png"},"MusiQ":{"link":"https://musiq--trifectaiii.repl.co/","github":"https://github.com/TrifectaIII/replit-music-jam","languages":["Node.js","HTML","CSS","JS"],"techniques":["Websockets","Real-Time Communication","UI Design","Full-Stack Development"],"description":"MusiQ is a multiplayer music quiz game! Share your lobby link with others so they can join your game, then compete to see who can get the most questions right!","image":"musiq.png"},"ZPS 2020":{"link":"https://zanderian-prince-simulator-2020--yaboigraves.repl.co/","github":"https://github.com/yaboigraves/replit-game-jam","languages":["JS"],"techniques":["UI Design"],"description":"In Zanderian Prince Simulator 2020, you are a scammer trying to scam unwitting foreigners out of their money! Try and convince them to wire you money in an email, and if you are successful, you\'ll see their transfer to your bank account!","image":"zps2020.png"}}')}},[[110,1,2]]]);
//# sourceMappingURL=main.fe61bfef.chunk.js.map