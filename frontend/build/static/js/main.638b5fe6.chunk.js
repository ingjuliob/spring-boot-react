(this["webpackJsonphsbc-app"]=this["webpackJsonphsbc-app"]||[]).push([[0],{473:function(e,t,a){},480:function(e,t,a){"use strict";a.r(t);a(275),a(285);var n=a(0),o=a.n(n),r=a(21),c=a.n(r),i=(a(473),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,563)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),r(e),c(e)}))}),s=a(55),l=a(27),d=a(93),j=a.n(d),u=a(137),b=a(16),p=a.p+"static/media/logo.a1dd3a73.svg",m=a(532),O=a(536),x=a(149),h=a(535),g=a(537),f=a(2),v=Object(m.a)((function(e){return{root:{flexGrow:1,borderRadius:0},appbar:{background:"white",paddingTop:10,paddingBottom:10,marginBottom:25,color:"black"},navbarTitle:{flexGrow:1,textAlign:"right",fontStyle:"uppercase"}}}));function C(){var e=Object(l.f)().option,t=o.a.useState(""),a=Object(b.a)(t,2),n=a[0],r=a[1],c=v();return o.a.useEffect((function(){"ReimprimirDiferida"===e?r("Reimpresi\xf3n Diferida de Tarjeta Banelco"):"ReimprimirTarjeta"===e?r("Reimpresi\xf3n Com\xfan de Tarjeta Banelco"):"BajaBanelco"===e&&r("Baja de Tarjeta Banelco")}),[e]),Object(f.jsx)("div",{className:c.root,children:Object(f.jsx)(h.a,{position:"static",className:c.appbar,children:Object(f.jsx)(O.a,{maxWidth:"lg",children:Object(f.jsxs)(g.a,{children:[Object(f.jsx)("img",{src:p,className:"App-logo",alt:"logo"}),Object(f.jsx)(x.a,{variant:"h6",className:c.navbarTitle,children:n})]})})})})}var S=a(558),y=a(538),N={URL:function(){return"http://ard032vlncap.ar.hsbc:21228/sacweb"},_call_get:function(e){return fetch(e).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},_call_post:function(e,t){return fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},_call_post_test:function(e,t){var a=t.option+"_"+t.requestNumber+".pdf";return fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.blob()})).then((function(e){var t=window.URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).catch((function(e){return console.log(e)}))},getHelp:function(e,t,a,n,o){return this._call_get(this.URL()+"/transaccional/parametros/ayuda?operationId="+e+"&productCode="+t+"&causeCode="+a+"&reasonCode="+n+"&companyCode="+o)},saveData:function(e,t,a,n,o,r,c,i,s,l,d,j,u,b,p,m,O,x,h,g){var f={};return f.operationId=e,f.documentType=o,f.documentNumber=r,f.productNumber=c,f.user=s,f.origin=i,f.option=l,f.contactMode=d,f.productCode=t,f.causeCode=a,f.reasoncode=j,f.companyCode=n,f.responsibleSector=u,f.registerSector=b,f.initContact=p,f.closeContact=m,f.embozo=O,f.category=x,f.domicilio=h,f.sucursal=g,this._call_post(this.URL()+"/transaccional/grabar",f)},printData:function(e,t,a,n,o,r,c,i,s,l,d,j,u,b,p,m,O,x,h,g,f){var v={};return v.operationId=e,v.documentType=o,v.documentNumber=r,v.productNumber=c,v.user=s,v.origin=i,v.option=l,v.contactMode=d,v.productCode=t,v.causeCode=a,v.reasoncode=j,v.companyCode=n,v.responsibleSector=u,v.registerSector=b,v.initContact=p,v.closeContact=m,v.embozo=O,v.category=x,v.domicilio=h,v.sucursal=g,v.requestNumber=f,this._call_post_test(this.URL()+"/transaccional/imprimir",v)}},B=Object(m.a)((function(e){return{root:{flexGrow:1,borderRadius:0}}}));function I(){var e=Object(l.f)(),t=e.operationId,a=e.productCode,n=e.causeCode,r=e.reasonCode,c=e.companyCode,i=o.a.useState(""),s=Object(b.a)(i,2),d=s[0],p=s[1],m=B();return o.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.getHelp(t,a,n,r,c).then((function(e){p(e.message)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,a,n,r,c]),Object(f.jsx)("div",{className:m.root,children:Object(f.jsxs)(S.a,{severity:"info",children:[Object(f.jsx)(y.a,{children:Object(f.jsx)("strong",{children:"Tener en cuenta"})}),d]})})}var T=a(539),R=a(254),D=a.n(R),E=a(115),k=a.n(E),z=Object(m.a)((function(){return{root:{flexGrow:1,borderRadius:0},button:{margin:10,marginTop:25,marginBottom:30,textTransform:"capitalize",backgroundColor:"#DB0011",borderRadius:"0"},buttonOutlined:{margin:10,marginTop:25,marginBottom:30,textTransform:"capitalize",color:"#DB0011",borderRadius:"0"},alignItems:{textAlign:"right"}}}));function A(e){var t=e.getConfirmation,a=e.disable,n=z();return Object(f.jsx)("div",{className:n.root,children:Object(f.jsxs)("div",{className:n.alignItems,children:[Object(f.jsx)(T.a,{variant:"contained",color:"secondary",size:"large",className:n.button,disabled:a,startIcon:Object(f.jsx)(D.a,{}),onClick:t,children:"Guardar"}),Object(f.jsx)(T.a,{variant:"contained",color:"secondary",size:"large",className:n.button,startIcon:Object(f.jsx)(k.a,{}),children:"Salir"})]})})}var w=a(148),L=a(540),_=a(483),M=Object(m.a)((function(e){return{root:{flexGrow:1,borderRadius:0},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"},buttonProgress:{color:w.a[500],position:"absolute",top:"50%",left:"50%",margin:e.spacing(1),display:"flex",alignItems:"center"}}}));var U=function(e){var t=e.loading,a=M();return Object(f.jsx)("div",{className:a.root,children:t&&Object(f.jsx)(_.a,{className:a.backdrop,open:t,children:Object(f.jsx)(L.a,{size:40,className:a.buttonProgress})})})},q=a(258),G=a(560);function P(e){return Object(f.jsx)(S.a,Object(q.a)({elevation:6,variant:"filled"},e))}var F=Object(m.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function H(e){var t=e.openSnackbar,a=e.severity,n=e.message,o=e.setOpenSnackbar,r=F(),c=function(e){"clickaway"!==e&&o(!1)};return Object(f.jsx)("div",{className:r.root,children:Object(f.jsx)(G.a,{open:t,autoHideDuration:2e3,onClose:c,children:Object(f.jsx)(P,{onClose:c,severity:a,children:n})})})}var J=a(57),W=a(543),$=a(547),V=a(545),X=a(546),Z=a(544),K=a(542),Q=a(256),Y=a.n(Q),ee=a(257),te=a.n(ee),ae=a(255),ne=a.n(ae),oe=Object(m.a)((function(e){return{root:{flexGrow:1,borderRadius:0},button:{margin:10,marginTop:25,marginBottom:30,textTransform:"capitalize",backgroundColor:"#DB0011",borderRadius:"0"},buttonOutlined:{margin:10,marginTop:25,marginBottom:30,textTransform:"capitalize",color:"#DB0011",borderRadius:"0"},alignItems:{textAlign:"right"}}}));function re(e){var t=e.saveData,a=e.resultRequest,n=e.resultStatus,o=e.resultMsg,r=e.firstOpen,c=e.setFirstOpen,i=e.secondOpen,s=e.setSecondOpen,d=e.printScreen,j=Object(l.f)(),u=j.option,b=j.origin,p=Object(J.a)(),m=Object(K.a)(p.breakpoints.down("sm"));function O(){return"ReimprimirDiferida"===u?Object(f.jsxs)(x.a,{gutterBottom:!0,children:["\xbfEst\xe1 seguro que desea hacer una ",Object(f.jsx)("strong",{variant:"h5",component:"h2",children:"REIMPRESI\xd3N DIFERIDA"})," de tarjeta de d\xe9bito?"]}):"ReimprimirTarjeta"===u?Object(f.jsxs)(x.a,{gutterBottom:!0,children:["\xbfEst\xe1 seguro que desea hacer una ",Object(f.jsx)("strong",{variant:"h5",component:"h2",children:"REIMPRESI\xd3N"})," de tarjeta de d\xe9bito?"]}):"BajaBanelco"===u?Object(f.jsxs)(x.a,{gutterBottom:!0,children:["\xbfEst\xe1 seguro que desea ",Object(f.jsx)("strong",{variant:"h5",component:"h2",children:"DAR DE BAJA"})," la tarjeta de d\xe9bito?"]}):void 0}var h=function(){c(!1)},g=function(){s(!1)},v=oe();return Object(f.jsxs)("div",{className:v.root,children:[Object(f.jsxs)(W.a,{fullScreen:m,open:r,onClose:h,"aria-labelledby":"responsive-dialog-title",children:[Object(f.jsx)(Z.a,{id:"responsive-dialog-title",children:"Confirmaci\xf3n"}),Object(f.jsx)(V.a,{children:Object(f.jsx)(X.a,{children:Object(f.jsx)(O,{})})}),Object(f.jsxs)($.a,{children:[Object(f.jsx)(T.a,{variant:"contained",color:"secondary",size:"large",className:v.button,startIcon:Object(f.jsx)(ne.a,{}),onClick:t,children:"Aceptar"}),Object(f.jsx)(T.a,{onClick:h,variant:"contained",color:"secondary",size:"large",className:v.button,startIcon:Object(f.jsx)(k.a,{}),children:"Cancelar"})]})]}),Object(f.jsxs)(W.a,{fullScreen:m,open:i,onClose:g,"aria-labelledby":"responsive-dialog-title",children:[Object(f.jsx)(Z.a,{id:"responsive-dialog-title",children:"Registraci\xf3n"}),Object(f.jsx)(V.a,{children:Object(f.jsxs)(X.a,{children:[Object(f.jsxs)(x.a,{gutterBottom:!0,children:["Se ha generado el pedido: ",Object(f.jsx)("strong",{children:a})," con estado ",Object(f.jsx)("u",{children:Object(f.jsx)("strong",{children:n})})]}),Object(f.jsx)(x.a,{gutterBottom:!0,children:o})]})}),Object(f.jsxs)($.a,{children:[Object(f.jsx)(T.a,{variant:"contained",color:"secondary",size:"large",className:v.button,startIcon:Object(f.jsx)(Y.a,{}),onClick:d,children:"Imprimir"}),Object(f.jsx)(T.a,{onClick:t,variant:"outlined",color:"secondary",size:"large",className:v.buttonOutlined,startIcon:Object(f.jsx)(te.a,{}),style:{display:"SUCURSAL"===b&&"Resuelto"!==n?"inherit":"none"},children:"Reintentar"}),Object(f.jsx)(T.a,{onClick:g,variant:"contained",color:"secondary",size:"large",className:v.button,startIcon:Object(f.jsx)(k.a,{}),children:"Cerrar"})]})]})]})}var ce=a(6),ie=a(553),se=a(550),le=a(551),de=a(552),je=a(557),ue=a(561),be=a(555),pe=a(554),me=a(559),Oe=a(548),xe=a(549),he=a(556),ge=a(562),fe={_call_get:function(e){return fetch(e).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},getEmbozos:function(e,t){return this._call_get(N.URL()+"/reimpresion/tarjetas/embozos?operationId="+e+"&codigo="+t)},getCardDetails:function(e,t){return this._call_get(N.URL()+"/reimpresion/tarjetas/detalle?operationId="+e+"&numero="+t)},getBranchDetails:function(e){return this._call_get(N.URL()+"/transaccional/sucursales?operationId="+e)}},ve=Object(m.a)((function(){return{root:{flexGrow:1,borderRadius:0},pos:{marginBottom:12},divider:{marginTop:25,marginBottom:25},formControl:{width:"95%"}}})),Ce=Object(ce.a)({root:{boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(me.a),Se=Object(ce.a)({root:{marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(Oe.a),ye=Object(ce.a)((function(e){return{root:{padding:e.spacing(2)}}}))(xe.a);function Ne(){var e=Object(l.f)(),t=e.operationId,a=e.option,n=e.documentType,r=e.documentNumber,c=e.businessName,i=e.contactModeCode,s=e.productCode,d=e.causeCode,p=e.reasonCode,m=e.companyCode,h=e.responsibleSector,g=e.registerSector,v=e.user,S=e.origin,y=e.initContact,B=e.closeContact,T=e.productNumber,R=o.a.useState([]),D=Object(b.a)(R,2),E=D[0],k=D[1],z=o.a.useState([]),w=Object(b.a)(z,2),L=w[0],_=w[1],M=o.a.useState(!0),q=Object(b.a)(M,2),G=q[0],P=q[1],F=o.a.useState(""),J=Object(b.a)(F,2),W=J[0],$=J[1],V=o.a.useState(""),X=Object(b.a)(V,2),Z=X[0],K=X[1],Q=o.a.useState(""),Y=Object(b.a)(Q,2),ee=Y[0],te=Y[1],ae=o.a.useState(""),ne=Object(b.a)(ae,2),oe=ne[0],ce=ne[1],me=o.a.useState(!1),Oe=Object(b.a)(me,2),xe=Oe[0],Ne=Oe[1],Be=o.a.useState(!1),Ie=Object(b.a)(Be,2),Te=Ie[0],Re=Ie[1],De=o.a.useState(""),Ee=Object(b.a)(De,2),ke=Ee[0],ze=Ee[1],Ae=o.a.useState(""),we=Object(b.a)(Ae,2),Le=we[0],_e=we[1],Me=o.a.useState(""),Ue=Object(b.a)(Me,2),qe=Ue[0],Ge=Ue[1],Pe=o.a.useState(!0),Fe=Object(b.a)(Pe,2),He=Fe[0],Je=Fe[1],We=o.a.useState(!1),$e=Object(b.a)(We,2),Ve=$e[0],Xe=$e[1],Ze=o.a.useState(!1),Ke=Object(b.a)(Ze,2),Qe=Ke[0],Ye=Ke[1],et=o.a.useState(!1),tt=Object(b.a)(et,2),at=tt[0],nt=tt[1],ot=o.a.useState(!1),rt=Object(b.a)(ot,2),ct=rt[0],it=rt[1],st=o.a.useState(""),lt=Object(b.a)(st,2),dt=lt[0],jt=lt[1],ut=o.a.useState(""),bt=Object(b.a)(ut,2),pt=bt[0],mt=bt[1],Ot=o.a.useRef(null),xt=o.a.useRef(null),ht=o.a.useRef(null),gt=o.a.useRef(null),ft=o.a.useRef(null),vt=o.a.useRef(null),Ct=ve(),St=function(e){return function(a,n){"panelSucursal"===e?(Je(!0),fe.getBranchDetails(t).then((function(e){_(e.branches),Je(!1)})),te("SUCURSAL"),P(!0)):(ce("-"),te("panelDomicilio"===e?"DOMICILIO":"EXTERIOR")),K(!!n&&e),$(a.target.value)}};o.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fe.getCardDetails(t,T).then((function(e){fe.getEmbozos(t,e.detalleTarjeta.reprint).then((function(e){k(e.embozos),Je(!1),e.embozos.map((function(e){"Domicilio"===e.destino&&Xe(!0),"Sucursal"===e.destino&&Ye(!0),"Exterior"===e.destino&&nt(!0)}))}))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,T,Xe,Ye,nt]);return Object(f.jsxs)("div",{className:Ct.root,children:[Object(f.jsx)(C,{}),Object(f.jsx)(H,{openSnackbar:ct,severity:dt,message:pt,setOpenSnackbar:it}),Object(f.jsxs)(O.a,{maxWidth:"lg",children:[Object(f.jsx)(se.a,{container:!0,spacing:3,children:Object(f.jsx)(se.a,{item:!0,lg:12,children:Object(f.jsx)(le.a,{className:Ct.root,variant:"outlined",children:Object(f.jsxs)(de.a,{children:[Object(f.jsx)(x.a,{variant:"h5",component:"h2",children:"Cliente"}),Object(f.jsx)("br",{}),Object(f.jsxs)(se.a,{container:!0,spacing:3,children:[Object(f.jsxs)(se.a,{item:!0,lg:5,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Apellido y Nombre"}),Object(f.jsx)(x.a,{className:Ct.pos,color:"textSecondary",children:c})]}),Object(f.jsxs)(se.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Tipo y N\xba de Documento"}),Object(f.jsxs)(x.a,{className:Ct.pos,color:"textSecondary",children:[n," - ",r]})]}),Object(f.jsxs)(se.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"N\xba Banelco"}),Object(f.jsx)(x.a,{className:Ct.pos,color:"textSecondary",children:T})]}),Object(f.jsxs)(se.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Tipo Tarjeta"}),Object(f.jsx)(x.a,{className:Ct.pos,color:"textSecondary",children:"P.TIT.ELECTRON"})]})]}),Object(f.jsx)(ie.a,{variant:"middle",className:Ct.divider}),Object(f.jsx)(x.a,{variant:"h5",component:"h2",children:"Destino"}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{children:[Object(f.jsxs)(Ce,{square:!0,expanded:"panelDomicilio"===Z,style:{display:Ve?"inherit":"none"},children:[Object(f.jsx)(Se,{"aria-controls":"panelDomiciliod-content",id:"panelDomiciliod-header",children:Object(f.jsx)(pe.a,{component:"fieldset",children:Object(f.jsx)(ue.a,{"aria-label":"destino",name:"domicilio",value:W,onChange:St("panelDomicilio"),onClick:function(){return P(!1)},children:Object(f.jsx)(be.a,{value:"panelDomicilio",control:Object(f.jsx)(je.a,{}),label:"Domicilio"})})})}),Object(f.jsx)(ye,{children:Object(f.jsxs)(se.a,{container:!0,spacing:3,children:[Object(f.jsxs)(se.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Domicilio"}),Object(f.jsx)(x.a,{className:Ct.pos,color:"textSecondary"})]}),Object(f.jsxs)(se.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Embozo"}),E.filter((function(e){return"Domicilio"===e.destino})).map((function(e){return Object(f.jsx)(x.a,{ref:Ot,className:Ct.pos,color:"textSecondary",children:e.embozo},"domicilioEmbozo")}))]}),Object(f.jsxs)(se.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Categor\xeda"}),E.filter((function(e){return"Domicilio"===e.destino})).map((function(e){return Object(f.jsx)(x.a,{ref:xt,className:Ct.pos,color:"textSecondary",children:e.categoria},"domicilioCategoria")}))]})]})})]},"acc-domicilio"),Object(f.jsxs)(Ce,{square:!0,expanded:"panelSucursal"===Z,style:{display:Qe?"inherit":"none"},children:[Object(f.jsx)(Se,{"aria-controls":"panelSucursald-content",id:"panelSucursald-header",children:Object(f.jsx)(pe.a,{component:"fieldset",children:Object(f.jsx)(ue.a,{"aria-label":"destino",name:"sucursal",value:W,onChange:St("panelSucursal"),children:Object(f.jsx)(be.a,{value:"panelSucursal",control:Object(f.jsx)(je.a,{}),label:"Sucursal"})})})}),Object(f.jsx)(ye,{children:Object(f.jsxs)(se.a,{container:!0,spacing:3,children:[Object(f.jsxs)(se.a,{item:!0,lg:2,xs:6,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Sucursal"}),Object(f.jsx)(pe.a,{className:Ct.formControl,children:Object(f.jsx)(he.a,{onChange:function(e,t){ce(t.props.label+" ("+t.props.value+")")},children:L.map((function(e){return Object(f.jsx)(ge.a,{onClick:function(){return P(!1)},value:e.numBranch,label:e.branch,children:e.branch})}))})})]}),Object(f.jsxs)(se.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Embozo"}),E.filter((function(e){return"Sucursal"===e.destino})).map((function(e){return Object(f.jsx)(x.a,{ref:ht,className:Ct.pos,color:"textSecondary",children:e.embozo},"sucursalEmbozo")}))]}),Object(f.jsxs)(se.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Categor\xeda"}),E.filter((function(e){return"Sucursal"===e.destino})).map((function(e){return Object(f.jsx)(x.a,{ref:gt,className:Ct.pos,color:"textSecondary",children:e.categoria},"sucursalCategoria")}))]})]})})]},"acc-sucursal"),Object(f.jsxs)(Ce,{square:!0,expanded:"panelExterior"===Z,style:{display:at?"inherit":"none"},children:[Object(f.jsx)(Se,{"aria-controls":"panelExteriord-content",id:"panelExteriord-header",children:Object(f.jsx)(pe.a,{component:"fieldset",children:Object(f.jsx)(ue.a,{"aria-label":"destino",name:"exterior",value:W,onChange:St("panelExterior"),onClick:function(){return P(!1)},children:Object(f.jsx)(be.a,{value:"panelExterior",control:Object(f.jsx)(je.a,{}),label:"Exterior"})})})}),Object(f.jsx)(ye,{children:Object(f.jsxs)(se.a,{container:!0,spacing:3,children:[Object(f.jsxs)(se.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Exterior"}),Object(f.jsx)(x.a,{className:Ct.pos,color:"textSecondary"})]}),Object(f.jsxs)(se.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Embozo"}),E.filter((function(e){return"Exterior"===e.destino})).map((function(e){return Object(f.jsx)(x.a,{ref:ft,className:Ct.pos,color:"textSecondary",children:e.embozo},"exteriorEmbozo")}))]}),Object(f.jsxs)(se.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Categor\xeda"}),E.filter((function(e){return"Exterior"===e.destino})).map((function(e){return Object(f.jsx)(x.a,{ref:vt,className:Ct.pos,color:"textSecondary",children:e.categoria},"exteriorCategoria")}))]})]})})]},"acc-exterior")]}),Object(f.jsx)("br",{}),Object(f.jsx)(I,{})]})})})}),Object(f.jsx)(U,{loading:He}),Object(f.jsx)(re,{saveData:function(){Ne(!1);var e="DOMICILIO"===ee?Ot.current.outerText:ht.current.outerText,o="DOMICILIO"===ee?xt.current.outerText:gt.current.outerText;return"SIN DATOS"===e?(jt("error"),mt("EMBOZO SIN VALOR"),void it(!0)):"SIN DATOS"===o?(jt("error"),mt("CATEGOR\xcdA SIN VALOR"),void it(!0)):(P(!0),Je(!0),void N.saveData(t,s,d,m,n,r,T,S,v,a,i,p,h,g,y,B,e,o,"-",oe).then((function(e){var t=e.registration.requestNumber,a=e.registration.message,n=e.registration.status;Re(!0),ze(t),_e(n),Ge(a),Je(!1)})))},resultRequest:ke,resultStatus:Le,resultMsg:qe,firstOpen:xe,setFirstOpen:Ne,printScreen:function(){var e="DOMICILIO"===ee?Ot.current.outerText:ht.current.outerText,o="DOMICILIO"===ee?xt.current.outerText:gt.current.outerText;Je(!0),N.printData(t,s,d,m,n,r,T,S,v,a,i,p,h,g,y,B,e,o,"-",oe,ke).then((function(e){Je(!1)}))},secondOpen:Te,setSecondOpen:Re}),Object(f.jsx)(A,{disable:G,getConfirmation:function(){Ne(!0)}})]})]})}var Be=Object(m.a)((function(){return{root:{flexGrow:1,borderRadius:0},pos:{marginBottom:12},divider:{marginTop:25,marginBottom:25},formControl:{width:"95%"}}}));function Ie(){var e=Object(l.f)(),t=e.operationId,a=e.option,n=e.documentType,r=e.documentNumber,c=e.businessName,i=e.contactModeCode,s=e.productCode,d=e.causeCode,j=e.reasonCode,u=e.companyCode,p=e.responsibleSector,m=e.registerSector,h=e.user,g=e.origin,v=e.initContact,S=e.closeContact,y=e.productNumber,B=o.a.useState(!1),I=Object(b.a)(B,2),T=I[0],R=I[1],D=o.a.useState(!1),E=Object(b.a)(D,2),k=E[0],z=E[1],w=o.a.useState(!1),L=Object(b.a)(w,2),_=L[0],M=L[1],q=o.a.useState(""),G=Object(b.a)(q,2),P=G[0],F=G[1],H=o.a.useState(""),J=Object(b.a)(H,2),W=J[0],$=J[1],V=o.a.useState(""),X=Object(b.a)(V,2),Z=X[0],K=X[1],Q=o.a.useState(!1),Y=Object(b.a)(Q,2),ee=Y[0],te=Y[1],ae=Be();return Object(f.jsxs)("div",{className:ae.root,children:[Object(f.jsx)(C,{}),Object(f.jsxs)(O.a,{maxWidth:"lg",children:[Object(f.jsx)(se.a,{container:!0,spacing:3,children:Object(f.jsx)(se.a,{item:!0,lg:12,children:Object(f.jsx)(le.a,{className:ae.root,variant:"outlined",children:Object(f.jsxs)(de.a,{children:[Object(f.jsx)(x.a,{variant:"h5",component:"h2",children:"Cliente"}),Object(f.jsx)("br",{}),Object(f.jsxs)(se.a,{container:!0,spacing:6,children:[Object(f.jsxs)(se.a,{item:!0,lg:4,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Apellido y Nombre"}),Object(f.jsx)(x.a,{className:ae.pos,color:"textSecondary",children:c})]}),Object(f.jsxs)(se.a,{item:!0,lg:4,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Tipo y N\xba de Documento"}),Object(f.jsxs)(x.a,{className:ae.pos,color:"textSecondary",children:[n," - ",r]})]})]}),Object(f.jsx)(ie.a,{variant:"middle",className:ae.divider}),Object(f.jsxs)(se.a,{container:!0,spacing:6,children:[Object(f.jsxs)(se.a,{item:!0,lg:4,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"N\xba Banelco"}),Object(f.jsx)(x.a,{className:ae.pos,color:"textSecondary",children:y})]}),Object(f.jsxs)(se.a,{item:!0,lg:4,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Tipo Tarjeta"}),Object(f.jsx)(x.a,{className:ae.pos,color:"textSecondary",children:"P.TIT.ELECTRON"})]})]})]})})})}),Object(f.jsx)(U,{loading:ee}),Object(f.jsx)(re,{saveData:function(){z(!1),R(!0),te(!0),N.saveData(t,s,d,u,n,r,y,g,h,a,i,j,p,m,v,S,"","").then((function(e){var t=e.registration.requestNumber,a=e.registration.message,n=e.registration.status;M(!0),F(t),$(n),K(a),te(!1)}))},resultRequest:P,resultStatus:W,resultMsg:Z,firstOpen:k,setFirstOpen:z,printScreen:function(){te(!0),N.printData(t,s,d,u,n,r,y,g,h,a,i,j,p,m,v,S,"","","","",P).then((function(e){te(!1)}))},secondOpen:_,setSecondOpen:M}),Object(f.jsx)(A,{disable:T,getConfirmation:function(){z(!0)}})]})]})}var Te=function(){return console.log("URL"),console.log("".concat("")),console.log("".concat("production")),Object(f.jsx)(s.a,{basename:"/transaccional",children:Object(f.jsxs)("div",{children:[Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(s.b,{to:"".concat("","/reprint/1509090912980128785211/ReimprimirTarjeta/DNI/10266305/BRINGIOTTI,%20MANUEL/Email/B/P/34/2/955/041/43275857/BANCA/Email/Email/4517610097274041"),children:"Reimpresi\xf3n Com\xfan de Tarjeta Banelco"})}),Object(f.jsx)("li",{children:Object(f.jsx)(s.b,{to:"".concat("","/reprint/1509090912980128785211/ReimprimirDiferida/DNI/10266305/BRINGIOTTI,%20MANUEL/Email/B/P/34/2/955/041/43275857/BANCA/Email/Email/4517610097274041"),children:" Reimpresi\xf3n Diferida de Tarjeta Banelco"})}),Object(f.jsx)("li",{children:Object(f.jsx)(s.b,{to:"".concat("","/discharge/1509090912980128785211/BajaBanelco/DNI/10266305/BRINGIOTTI,%20MANUEL/Email/B/P/34/2/955/041/43275857/BANCA/Email/Email/4517610097274041"),children:" Baja de Tarjeta Banelco"})})]})}),Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{path:"".concat("","/reprint/:operationId/:option/:documentType/:documentNumber/:businessName/:contactModeCode/:productCode/:causeCode/:reasonCode/:companyCode/:responsibleSector/:registerSector/:user/:origin/:initContact/:closeContact/:productNumber"),component:Re}),Object(f.jsx)(l.a,{path:"".concat("","/discharge/:operationId/:option/:documentType/:documentNumber/:businessName/:contactModeCode/:productCode/:causeCode/:reasonCode/:companyCode/:responsibleSector/:registerSector/:user/:origin/:initContact/:closeContact/:productNumber"),component:De})]})]})})};function Re(){return Object(f.jsx)(Ne,{})}function De(){return Object(f.jsx)(Ie,{})}c.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(Te,{})}),document.getElementById("root")),i()}},[[480,1,2]]]);
//# sourceMappingURL=main.638b5fe6.chunk.js.map