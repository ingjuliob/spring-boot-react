(this["webpackJsonphsbc-app"]=this["webpackJsonphsbc-app"]||[]).push([[0],{477:function(e,t,a){},484:function(e,t,a){"use strict";a.r(t);a(279),a(289);var n=a(0),r=a.n(n),o=a(22),c=a.n(o),i=(a(477),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,577)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))}),s=a(60),l=a(27),d=a(61),j=a.n(d),u=a(93),b=a(10),m=a.p+"static/media/logo.a1dd3a73.svg",p=a(540),O=a(544),x=a(152),h=a(543),g=a(545),f=a(1),C=Object(p.a)((function(e){return{root:{flexGrow:1,borderRadius:0},appbar:{background:"white",paddingTop:10,paddingBottom:10,marginBottom:25,color:"black"},navbarTitle:{flexGrow:1,textAlign:"right",fontStyle:"uppercase"}}}));function v(){var e=Object(l.f)().option,t=r.a.useState(""),a=Object(b.a)(t,2),n=a[0],o=a[1],c=C();return r.a.useEffect((function(){"ReimprimirDiferida"===e?o("Reimpresi\xf3n Diferida de Tarjeta Banelco"):"ReimprimirTarjeta"===e?o("Reimpresi\xf3n Com\xfan de Tarjeta Banelco"):"BajaBanelco"===e?o("Baja de Tarjeta Banelco"):"BlanqueoPin"===e?o("Blanqueo de PIN"):"CambioCierre"!==e&&"CambioCierreTC"!==e&&"CbioCierreCartera"!==e||o("Cambio de Cierre TC")}),[e]),Object(f.jsx)("div",{className:c.root,children:Object(f.jsx)(h.a,{position:"static",className:c.appbar,children:Object(f.jsx)(O.a,{maxWidth:"lg",children:Object(f.jsxs)(g.a,{children:[Object(f.jsx)("img",{src:m,className:"App-logo",alt:"logo"}),Object(f.jsx)(x.a,{variant:"h6",className:c.navbarTitle,children:n})]})})})})}var S=a(572),N=a(546),y={URL:function(){return"http://ard032vlncap.ar.hsbc:21228/sacweb/control"},_call_get:function(e){return fetch(e,{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},_call_post:function(e,t){return fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},_call_post_blob:function(e,t){var a=t.option+"_"+t.requestNumber+".pdf";return fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)}).then((function(e){return e.blob()})).then((function(e){var t=window.URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.setAttribute("download",a),document.body.appendChild(n),n.click()})).catch((function(e){return console.log(e)}))},getCommonParams:function(e,t,a,n,r,o,c,i,s,l,d,j,u,b,m,p,O){var x={};return x.operationId=e,x.documentType=r,x.documentNumber=o,x.productNumber=c,x.user=s,x.origin=i,x.option=l,x.contactMode=d,x.productCode=t,x.causeCode=a,x.reasoncode=j,x.companyCode=n,x.responsibleSector=u,x.registerSector=b,x.initContact=m,x.closeContact=p,x.requestNumber=O,x.retry=!!O,x}},T={getHelp:function(e,t,a,n,r){return y._call_get(y.URL()+"/transaccional/parametros/ayuda?operationId="+e+"&productCode="+t+"&causeCode="+a+"&reasonCode="+n+"&companyCode="+r)},saveData:function(e){return y._call_post(y.URL()+"/transaccional/grabar",e)},printData:function(e){return y._call_post_blob(y.URL()+"/transaccional/imprimir",e)}},B=Object(p.a)((function(e){return{root:{flexGrow:1,borderRadius:0}}}));function I(){var e=Object(l.f)(),t=e.operationId,a=e.productCode,n=e.causeCode,o=e.reasonCode,c=e.companyCode,i=r.a.useState(""),s=Object(b.a)(i,2),d=s[0],m=s[1],p=B();return r.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T.getHelp(t,a,n,o,c).then((function(e){m(e.message)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,a,n,o,c]),Object(f.jsx)("div",{className:p.root,children:Object(f.jsxs)(S.a,{severity:"info",children:[Object(f.jsx)(N.a,{children:Object(f.jsx)("strong",{children:"Tener en cuenta"})}),d]})})}var R=a(547),D=a(261),k=a.n(D),E=a(117),w=a.n(E),P=Object(p.a)((function(){return{root:{flexGrow:1,borderRadius:0},button:{margin:10,marginTop:25,marginBottom:30,textTransform:"capitalize",backgroundColor:"#DB0011",borderRadius:"0"},buttonOutlined:{margin:10,marginTop:25,marginBottom:30,textTransform:"capitalize",color:"#DB0011",borderRadius:"0"},alignItems:{textAlign:"right"}}}));function A(e){var t=e.getConfirmation,a=e.disable,n=e.valueButton,r=P();return Object(f.jsx)("div",{className:r.root,children:Object(f.jsxs)("div",{className:r.alignItems,children:[Object(f.jsx)(R.a,{variant:"contained",color:"secondary",size:"large",className:r.button,disabled:a,startIcon:Object(f.jsx)(k.a,{}),onClick:t,children:n}),Object(f.jsx)(R.a,{variant:"contained",color:"secondary",size:"large",className:r.button,onClick:function(){window.close()},startIcon:Object(f.jsx)(w.a,{}),children:"Salir"})]})})}var z=a(151),L=a(548),M=a(487),q=Object(p.a)((function(e){return{root:{flexGrow:1,borderRadius:0},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"},buttonProgress:{color:z.a[500],position:"absolute",top:"50%",left:"50%",margin:e.spacing(1),display:"flex",alignItems:"center"}}}));var _=function(e){var t=e.loading,a=q();return Object(f.jsx)("div",{className:a.root,children:t&&Object(f.jsx)(M.a,{className:a.backdrop,open:t,children:Object(f.jsx)(L.a,{size:40,className:a.buttonProgress})})})},G=a(265),U=a(574);function F(e){return Object(f.jsx)(S.a,Object(G.a)({elevation:6,variant:"filled"},e))}var W=Object(p.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function H(e){var t=e.openSnackbar,a=e.severity,n=e.message,r=e.setOpenSnackbar,o=W(),c=function(e){"clickaway"!==e&&r(!1)};return Object(f.jsx)("div",{className:o.root,children:Object(f.jsx)(U.a,{open:t,autoHideDuration:2e3,onClose:c,children:Object(f.jsx)(F,{onClose:c,severity:a,children:n})})})}var J=a(57),$=a(551),V=a(555),Q=a(553),X=a(554),Z=a(552),K=a(550),Y=a(263),ee=a.n(Y),te=a(264),ae=a.n(te),ne=a(262),re=a.n(ne),oe=Object(p.a)((function(e){return{root:{flexGrow:1,borderRadius:0},button:{margin:10,marginTop:25,marginBottom:30,textTransform:"capitalize",backgroundColor:"#DB0011",borderRadius:"0"},buttonOutlined:{margin:10,marginTop:25,marginBottom:30,textTransform:"capitalize",color:"#DB0011",borderRadius:"0"},alignItems:{textAlign:"right"}}}));function ce(e){var t=e.saveData,a=e.resultRequest,n=e.resultStatus,r=e.resultMsg,o=e.firstOpen,c=e.setFirstOpen,i=e.secondOpen,s=e.setSecondOpen,d=e.printScreen,j=Object(l.f)(),u=j.option,b=j.origin,m=Object(J.a)(),p=Object(K.a)(m.breakpoints.down("sm"));function O(){return"ReimprimirDiferida"===u?Object(f.jsxs)(x.a,{gutterBottom:!0,children:["\xbfEst\xe1 seguro que desea hacer una ",Object(f.jsx)("strong",{variant:"h5",component:"h2",children:"REIMPRESI\xd3N DIFERIDA"})," de tarjeta de d\xe9bito?"]}):"ReimprimirTarjeta"===u?Object(f.jsxs)(x.a,{gutterBottom:!0,children:["\xbfEst\xe1 seguro que desea hacer una ",Object(f.jsx)("strong",{variant:"h5",component:"h2",children:"REIMPRESI\xd3N"})," de tarjeta de d\xe9bito?"]}):"BajaBanelco"===u?Object(f.jsxs)(x.a,{gutterBottom:!0,children:["\xbfEst\xe1 seguro que desea ",Object(f.jsx)("strong",{variant:"h5",component:"h2",children:"DAR DE BAJA"})," la tarjeta de d\xe9bito?"]}):"BlanqueoPin"===u?Object(f.jsxs)(x.a,{gutterBottom:!0,children:["\xbfEst\xe1 seguro que desea ",Object(f.jsx)("strong",{variant:"h5",component:"h2",children:"BLANQUEAR EL PIN"})," de la tarjeta de d\xe9bito?"]}):"CambioCierre"===u||"CambioCierreTC"===u||"CbioCierreCartera"===u?Object(f.jsxs)(x.a,{gutterBottom:!0,children:["\xbfEst\xe1 seguro que desea ",Object(f.jsx)("strong",{variant:"h5",component:"h2",children:"CAMBIAR EL CIERRE DE CARTERA"})," de la tarjeta de cr\xe9dito?"]}):void 0}var h=function(){c(!1)},g=function(){s(!1),window.close()},C=oe();return Object(f.jsxs)("div",{className:C.root,children:[Object(f.jsxs)($.a,{fullScreen:p,open:o,onClose:h,"aria-labelledby":"responsive-dialog-title",children:[Object(f.jsx)(Z.a,{id:"responsive-dialog-title",children:"Confirmaci\xf3n"}),Object(f.jsx)(Q.a,{children:Object(f.jsx)(X.a,{children:Object(f.jsx)(O,{})})}),Object(f.jsxs)(V.a,{children:[Object(f.jsx)(R.a,{variant:"contained",color:"secondary",size:"large",className:C.button,startIcon:Object(f.jsx)(re.a,{}),onClick:t,children:"Aceptar"}),Object(f.jsx)(R.a,{onClick:h,variant:"contained",color:"secondary",size:"large",className:C.button,startIcon:Object(f.jsx)(w.a,{}),children:"Cancelar"})]})]}),Object(f.jsxs)($.a,{fullScreen:p,open:i,onClose:g,"aria-labelledby":"responsive-dialog-title",children:[Object(f.jsx)(Z.a,{id:"responsive-dialog-title",children:"Registraci\xf3n"}),Object(f.jsx)(Q.a,{children:Object(f.jsxs)(X.a,{children:[Object(f.jsxs)(x.a,{gutterBottom:!0,children:["Se ha generado el pedido: ",Object(f.jsx)("strong",{children:a})," con estado ",Object(f.jsx)("u",{children:Object(f.jsx)("strong",{children:n})})]}),Object(f.jsx)(x.a,{gutterBottom:!0,children:r})]})}),Object(f.jsxs)(V.a,{children:[Object(f.jsx)(R.a,{variant:"contained",color:"secondary",size:"large",className:C.button,startIcon:Object(f.jsx)(ee.a,{}),onClick:d,children:"Imprimir"}),Object(f.jsx)(R.a,{onClick:function(){t(!0)},variant:"outlined",color:"secondary",size:"large",className:C.buttonOutlined,startIcon:Object(f.jsx)(ae.a,{}),style:{display:"BANCA"===b&&"Resuelto"!==n?"inherit":"none"},children:"Reintentar"}),Object(f.jsx)(R.a,{onClick:g,variant:"contained",color:"secondary",size:"large",className:C.button,startIcon:Object(f.jsx)(w.a,{}),children:"Cerrar"})]})]})]})}var ie=a(6),se=a(561),le=a(558),de=a(559),je=a(560),ue=a(571),be=a(575),me=a(563),pe=a(562),Oe=a(573),xe=a(556),he=a(557),ge=a(570),fe=a(576),Ce={getEmbozos:function(e,t){return y._call_get(y.URL()+"/reimpresion/tarjetas/embozos?operationId="+e+"&codigo="+t)},getCardDetails:function(e,t){return y._call_get(y.URL()+"/reimpresion/tarjetas/detalle?operationId="+e+"&numero="+t)},getBranchDetails:function(e){return y._call_get(y.URL()+"/transaccional/sucursales?operationId="+e)}},ve=Object(p.a)((function(){return{root:{flexGrow:1,borderRadius:0},pos:{marginBottom:12},divider:{marginTop:25,marginBottom:25},formControl:{width:"95%"}}})),Se=Object(ie.a)({root:{boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(Oe.a),Ne=Object(ie.a)({root:{marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(xe.a),ye=Object(ie.a)((function(e){return{root:{padding:e.spacing(2)}}}))(he.a);function Te(){var e=Object(l.f)(),t=e.operationId,a=e.option,n=e.documentType,o=e.documentNumber,c=e.businessName,i=e.contactModeCode,s=e.productCode,d=e.causeCode,m=e.reasonCode,p=e.companyCode,h=e.responsibleSector,g=e.registerSector,C=e.user,S=e.origin,N=e.initContact,B=e.closeContact,R=e.productNumber,D=r.a.useState([]),k=Object(b.a)(D,2),E=k[0],w=k[1],P=r.a.useState([]),z=Object(b.a)(P,2),L=z[0],M=z[1],q=r.a.useState(!0),G=Object(b.a)(q,2),U=G[0],F=G[1],W=r.a.useState(""),J=Object(b.a)(W,2),$=J[0],V=J[1],Q=r.a.useState(""),X=Object(b.a)(Q,2),Z=X[0],K=X[1],Y=r.a.useState(""),ee=Object(b.a)(Y,2),te=ee[0],ae=ee[1],ne=r.a.useState(""),re=Object(b.a)(ne,2),oe=re[0],ie=re[1],Oe=r.a.useState(!1),xe=Object(b.a)(Oe,2),he=xe[0],Te=xe[1],Be=r.a.useState(!1),Ie=Object(b.a)(Be,2),Re=Ie[0],De=Ie[1],ke=r.a.useState(""),Ee=Object(b.a)(ke,2),we=Ee[0],Pe=Ee[1],Ae=r.a.useState(""),ze=Object(b.a)(Ae,2),Le=ze[0],Me=ze[1],qe=r.a.useState(""),_e=Object(b.a)(qe,2),Ge=_e[0],Ue=_e[1],Fe=r.a.useState(!0),We=Object(b.a)(Fe,2),He=We[0],Je=We[1],$e=r.a.useState(!1),Ve=Object(b.a)($e,2),Qe=Ve[0],Xe=Ve[1],Ze=r.a.useState(!1),Ke=Object(b.a)(Ze,2),Ye=Ke[0],et=Ke[1],tt=r.a.useState(!1),at=Object(b.a)(tt,2),nt=at[0],rt=at[1],ot=r.a.useState(!1),ct=Object(b.a)(ot,2),it=ct[0],st=ct[1],lt=r.a.useState(""),dt=Object(b.a)(lt,2),jt=dt[0],ut=dt[1],bt=r.a.useState(""),mt=Object(b.a)(bt,2),pt=mt[0],Ot=mt[1],xt=r.a.useRef(null),ht=r.a.useRef(null),gt=r.a.useRef(null),ft=r.a.useRef(null),Ct=r.a.useRef(null),vt=r.a.useRef(null),St=ve(),Nt=function(e){return function(a,n){"panelSucursal"===e?(Je(!0),Ce.getBranchDetails(t).then((function(e){M(e.branches),Je(!1)})),ae("SUCURSAL"),F(!0)):(ie("-"),ae("panelDomicilio"===e?"DOMICILIO":"EXTERIOR")),K(!!n&&e),V(a.target.value)}};r.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ce.getCardDetails(t,R).then((function(e){Ce.getEmbozos(t,e.detalleTarjeta.reprint).then((function(e){w(e.embozos),Je(!1),e.embozos.map((function(e){"Domicilio"===e.destino&&Xe(!0),"Sucursal"===e.destino&&et(!0),"Exterior"===e.destino&&rt(!0)}))}))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,R,Xe,et,rt]);var yt=function(e,t,a,n){var r={};return r.embozo=e,r.category=t,r.domicilio=a,r.sucursal=n,r};return Object(f.jsxs)("div",{className:St.root,children:[Object(f.jsx)(v,{}),Object(f.jsx)(H,{openSnackbar:it,severity:jt,message:pt,setOpenSnackbar:st}),Object(f.jsxs)(O.a,{maxWidth:"lg",children:[Object(f.jsx)(le.a,{container:!0,spacing:3,children:Object(f.jsx)(le.a,{item:!0,lg:12,children:Object(f.jsx)(de.a,{className:St.root,variant:"outlined",children:Object(f.jsxs)(je.a,{children:[Object(f.jsx)(x.a,{variant:"h5",component:"h2",children:"Cliente"}),Object(f.jsx)("br",{}),Object(f.jsxs)(le.a,{container:!0,spacing:3,children:[Object(f.jsxs)(le.a,{item:!0,lg:5,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Apellido y Nombre"}),Object(f.jsx)(x.a,{className:St.pos,color:"textSecondary",children:c})]}),Object(f.jsxs)(le.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Tipo y N\xba de Documento"}),Object(f.jsxs)(x.a,{className:St.pos,color:"textSecondary",children:[n," - ",o]})]}),Object(f.jsxs)(le.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"N\xba Banelco"}),Object(f.jsx)(x.a,{className:St.pos,color:"textSecondary",children:R})]}),Object(f.jsxs)(le.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Tipo Tarjeta"}),Object(f.jsx)(x.a,{className:St.pos,color:"textSecondary",children:"P.TIT.ELECTRON"})]})]}),Object(f.jsx)(se.a,{variant:"middle",className:St.divider}),Object(f.jsx)(x.a,{variant:"h5",component:"h2",children:"Destino"}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{children:[Object(f.jsxs)(Se,{square:!0,expanded:"panelDomicilio"===Z,style:{display:Qe?"inherit":"none"},children:[Object(f.jsx)(Ne,{"aria-controls":"panelDomiciliod-content",id:"panelDomiciliod-header",children:Object(f.jsx)(pe.a,{component:"fieldset",children:Object(f.jsx)(be.a,{"aria-label":"destino",name:"domicilio",value:$,onChange:Nt("panelDomicilio"),onClick:function(){return F(!1)},children:Object(f.jsx)(me.a,{value:"panelDomicilio",control:Object(f.jsx)(ue.a,{}),label:"Domicilio"})})})}),Object(f.jsx)(ye,{children:Object(f.jsxs)(le.a,{container:!0,spacing:3,children:[Object(f.jsxs)(le.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Domicilio"}),Object(f.jsx)(x.a,{className:St.pos,color:"textSecondary"})]}),Object(f.jsxs)(le.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Embozo"}),E.filter((function(e){return"Domicilio"===e.destino})).map((function(e){return Object(f.jsx)(x.a,{ref:xt,className:St.pos,color:"textSecondary",children:e.embozo},"domicilioEmbozo")}))]}),Object(f.jsxs)(le.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Categor\xeda"}),E.filter((function(e){return"Domicilio"===e.destino})).map((function(e){return Object(f.jsx)(x.a,{ref:ht,className:St.pos,color:"textSecondary",children:e.categoria},"domicilioCategoria")}))]})]})})]},"acc-domicilio"),Object(f.jsxs)(Se,{square:!0,expanded:"panelSucursal"===Z,style:{display:Ye?"inherit":"none"},children:[Object(f.jsx)(Ne,{"aria-controls":"panelSucursald-content",id:"panelSucursald-header",children:Object(f.jsx)(pe.a,{component:"fieldset",children:Object(f.jsx)(be.a,{"aria-label":"destino",name:"sucursal",value:$,onChange:Nt("panelSucursal"),children:Object(f.jsx)(me.a,{value:"panelSucursal",control:Object(f.jsx)(ue.a,{}),label:"Sucursal"})})})}),Object(f.jsx)(ye,{children:Object(f.jsxs)(le.a,{container:!0,spacing:3,children:[Object(f.jsxs)(le.a,{item:!0,lg:2,xs:6,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Sucursal"}),Object(f.jsx)(pe.a,{className:St.formControl,children:Object(f.jsx)(ge.a,{onChange:function(e,t){ie(t.props.label+" ("+t.props.value+")")},children:L.map((function(e){return Object(f.jsx)(fe.a,{onClick:function(){return F(!1)},value:e.numBranch,label:e.branch,children:e.branch})}))})})]}),Object(f.jsxs)(le.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Embozo"}),E.filter((function(e){return"Sucursal"===e.destino})).map((function(e){return Object(f.jsx)(x.a,{ref:gt,className:St.pos,color:"textSecondary",children:e.embozo},"sucursalEmbozo")}))]}),Object(f.jsxs)(le.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Categor\xeda"}),E.filter((function(e){return"Sucursal"===e.destino})).map((function(e){return Object(f.jsx)(x.a,{ref:ft,className:St.pos,color:"textSecondary",children:e.categoria},"sucursalCategoria")}))]})]})})]},"acc-sucursal"),Object(f.jsxs)(Se,{square:!0,expanded:"panelExterior"===Z,style:{display:nt?"inherit":"none"},children:[Object(f.jsx)(Ne,{"aria-controls":"panelExteriord-content",id:"panelExteriord-header",children:Object(f.jsx)(pe.a,{component:"fieldset",children:Object(f.jsx)(be.a,{"aria-label":"destino",name:"exterior",value:$,onChange:Nt("panelExterior"),onClick:function(){return F(!1)},children:Object(f.jsx)(me.a,{value:"panelExterior",control:Object(f.jsx)(ue.a,{}),label:"Exterior"})})})}),Object(f.jsx)(ye,{children:Object(f.jsxs)(le.a,{container:!0,spacing:3,children:[Object(f.jsxs)(le.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Exterior"}),Object(f.jsx)(x.a,{className:St.pos,color:"textSecondary"})]}),Object(f.jsxs)(le.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Embozo"}),E.filter((function(e){return"Exterior"===e.destino})).map((function(e){return Object(f.jsx)(x.a,{ref:Ct,className:St.pos,color:"textSecondary",children:e.embozo},"exteriorEmbozo")}))]}),Object(f.jsxs)(le.a,{item:!0,lg:2,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Categor\xeda"}),E.filter((function(e){return"Exterior"===e.destino})).map((function(e){return Object(f.jsx)(x.a,{ref:vt,className:St.pos,color:"textSecondary",children:e.categoria},"exteriorCategoria")}))]})]})})]},"acc-exterior")]}),Object(f.jsx)("br",{}),Object(f.jsx)(I,{})]})})})}),Object(f.jsx)(_,{loading:He}),Object(f.jsx)(ce,{saveData:function(e){Te(!1);var r="DOMICILIO"===te?xt.current.outerText:gt.current.outerText,c="DOMICILIO"===te?ht.current.outerText:ft.current.outerText;if("SIN DATOS"===r)return ut("error"),Ot("EMBOZO SIN VALOR"),void st(!0);if("SIN DATOS"===c)return ut("error"),Ot("CATEGOR\xcdA SIN VALOR"),void st(!0);F(!0),Je(!0);var l=y.getCommonParams(t,s,d,p,n,o,R,S,C,a,i,m,h,g,N,B,e?we:null),j=yt(r,c,"-",oe),u={};u.commonParams=l,u.reprintTdParams=j,T.saveData(u).then((function(e){var t=e.registration.requestNumber,a=e.registration.message,n=e.registration.status;De(!0),Pe(t),Me(n),Ue(a),Je(!1)}))},resultRequest:we,resultStatus:Le,resultMsg:Ge,firstOpen:he,setFirstOpen:Te,printScreen:function(){var e="DOMICILIO"===te?xt.current.outerText:gt.current.outerText,r="DOMICILIO"===te?ht.current.outerText:ft.current.outerText;Je(!0);var c=y.getCommonParams(t,s,d,p,n,o,R,S,C,a,i,m,h,g,N,B,we),l=yt(e,r,"-",oe),j={};j.commonParams=c,j.reprintTdParams=l,T.printData(j).then((function(e){Je(!1)}))},secondOpen:Re,setSecondOpen:De}),Object(f.jsx)(A,{disable:U,getConfirmation:function(){Te(!0)},valueButton:"Guardar"})]})]})}var Be=Object(p.a)((function(){return{root:{flexGrow:1,borderRadius:0},pos:{marginBottom:12},divider:{marginTop:25,marginBottom:25},formControl:{width:"95%"}}}));function Ie(){var e=Object(l.f)(),t=e.operationId,a=e.option,n=e.documentType,o=e.documentNumber,c=e.businessName,i=e.contactModeCode,s=e.productCode,d=e.causeCode,j=e.reasonCode,u=e.companyCode,m=e.responsibleSector,p=e.registerSector,h=e.user,g=e.origin,C=e.initContact,S=e.closeContact,N=e.productNumber,B=r.a.useState(!1),I=Object(b.a)(B,2),R=I[0],D=I[1],k=r.a.useState(!1),E=Object(b.a)(k,2),w=E[0],P=E[1],z=r.a.useState(!1),L=Object(b.a)(z,2),M=L[0],q=L[1],G=r.a.useState(""),U=Object(b.a)(G,2),F=U[0],W=U[1],H=r.a.useState(""),J=Object(b.a)(H,2),$=J[0],V=J[1],Q=r.a.useState(""),X=Object(b.a)(Q,2),Z=X[0],K=X[1],Y=r.a.useState(!1),ee=Object(b.a)(Y,2),te=ee[0],ae=ee[1],ne=Be();return Object(f.jsxs)("div",{className:ne.root,children:[Object(f.jsx)(v,{}),Object(f.jsxs)(O.a,{maxWidth:"lg",children:[Object(f.jsx)(le.a,{container:!0,spacing:3,children:Object(f.jsx)(le.a,{item:!0,lg:12,children:Object(f.jsx)(de.a,{className:ne.root,variant:"outlined",children:Object(f.jsxs)(je.a,{children:[Object(f.jsx)(x.a,{variant:"h5",component:"h2",children:"Cliente"}),Object(f.jsx)("br",{}),Object(f.jsxs)(le.a,{container:!0,spacing:6,children:[Object(f.jsxs)(le.a,{item:!0,lg:4,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Apellido y Nombre"}),Object(f.jsx)(x.a,{className:ne.pos,color:"textSecondary",children:c})]}),Object(f.jsxs)(le.a,{item:!0,lg:4,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Tipo y N\xba de Documento"}),Object(f.jsxs)(x.a,{className:ne.pos,color:"textSecondary",children:[n," - ",o]})]})]}),Object(f.jsx)(se.a,{variant:"middle",className:ne.divider}),Object(f.jsxs)(le.a,{container:!0,spacing:6,children:[Object(f.jsxs)(le.a,{item:!0,lg:4,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"N\xba Banelco"}),Object(f.jsx)(x.a,{className:ne.pos,color:"textSecondary",children:N})]}),Object(f.jsxs)(le.a,{item:!0,lg:4,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Tipo Tarjeta"}),Object(f.jsx)(x.a,{className:ne.pos,color:"textSecondary",children:"P.TIT.ELECTRON"})]})]})]})})})}),Object(f.jsx)(_,{loading:te}),Object(f.jsx)(ce,{saveData:function(e){P(!1),D(!0),ae(!0);var r=y.getCommonParams(t,s,d,u,n,o,N,g,h,a,i,j,m,p,C,S,e?F:null),c={};c.commonParams=r,T.saveData(c).then((function(e){var t=e.registration.requestNumber,a=e.registration.message,n=e.registration.status;q(!0),W(t),V(n),K(a),ae(!1)}))},resultRequest:F,resultStatus:$,resultMsg:Z,firstOpen:w,setFirstOpen:P,printScreen:function(){ae(!0);var e=y.getCommonParams(t,s,d,u,n,o,N,g,h,a,i,j,m,p,C,S,F),r={};r.commonParams=e,T.printData(r).then((function(e){console.log(e),ae(!1)}))},secondOpen:M,setSecondOpen:q}),Object(f.jsx)(A,{disable:R,getConfirmation:function(){P(!0)},valueButton:"Guardar"})]})]})}var Re=Object(p.a)((function(){return{root:{flexGrow:1,borderRadius:0},pos:{marginBottom:12},divider:{marginTop:25,marginBottom:25},formControl:{width:"95%"}}}));function De(){var e=Object(l.f)(),t=e.operationId,a=e.option,n=e.documentType,o=e.documentNumber,c=e.businessName,i=e.contactModeCode,s=e.productCode,d=e.causeCode,j=e.reasonCode,u=e.companyCode,m=e.responsibleSector,p=e.registerSector,h=e.user,g=e.origin,C=e.initContact,S=e.closeContact,N=e.productNumber,B=r.a.useState(!1),I=Object(b.a)(B,2),R=I[0],D=I[1],k=r.a.useState(!1),E=Object(b.a)(k,2),w=E[0],P=E[1],z=r.a.useState(!1),L=Object(b.a)(z,2),M=L[0],q=L[1],G=r.a.useState(""),U=Object(b.a)(G,2),F=U[0],W=U[1],H=r.a.useState(""),J=Object(b.a)(H,2),$=J[0],V=J[1],Q=r.a.useState(""),X=Object(b.a)(Q,2),Z=X[0],K=X[1],Y=r.a.useState(!1),ee=Object(b.a)(Y,2),te=ee[0],ae=ee[1],ne=Re();return Object(f.jsxs)("div",{className:ne.root,children:[Object(f.jsx)(v,{}),Object(f.jsxs)(O.a,{maxWidth:"lg",children:[Object(f.jsx)(le.a,{container:!0,spacing:3,children:Object(f.jsx)(le.a,{item:!0,lg:12,children:Object(f.jsx)(de.a,{className:ne.root,variant:"outlined",children:Object(f.jsxs)(je.a,{children:[Object(f.jsx)(x.a,{variant:"h5",component:"h2",children:"Cliente"}),Object(f.jsx)("br",{}),Object(f.jsxs)(le.a,{container:!0,spacing:6,children:[Object(f.jsxs)(le.a,{item:!0,lg:4,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Apellido y Nombre"}),Object(f.jsx)(x.a,{className:ne.pos,color:"textSecondary",children:c})]}),Object(f.jsxs)(le.a,{item:!0,lg:4,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Tipo y N\xba de Documento"}),Object(f.jsxs)(x.a,{className:ne.pos,color:"textSecondary",children:[n," - ",o]})]})]}),Object(f.jsx)(se.a,{variant:"middle",className:ne.divider}),Object(f.jsxs)(le.a,{container:!0,spacing:6,children:[Object(f.jsxs)(le.a,{item:!0,lg:4,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"N\xba Banelco"}),Object(f.jsx)(x.a,{className:ne.pos,color:"textSecondary",children:N})]}),Object(f.jsxs)(le.a,{item:!0,lg:4,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Tipo Tarjeta"}),Object(f.jsx)(x.a,{className:ne.pos,color:"textSecondary",children:"P.TIT.ELECTRON"})]})]})]})})})}),Object(f.jsx)(_,{loading:te}),Object(f.jsx)(ce,{saveData:function(e){P(!1),D(!0),ae(!0);var r=y.getCommonParams(t,s,d,u,n,o,N,g,h,a,i,j,m,p,C,S,e?F:null),c={};c.commonParams=r,T.saveData(c).then((function(e){var t=e.registration.requestNumber,a=e.registration.message,n=e.registration.status;q(!0),W(t),V(n),K(a),ae(!1)}))},resultRequest:F,resultStatus:$,resultMsg:Z,firstOpen:w,setFirstOpen:P,printScreen:function(){ae(!0),T.printData(t,s,d,u,n,o,N,g,h,a,i,j,m,p,C,S,"","","","",F).then((function(e){ae(!1)}))},secondOpen:M,setSecondOpen:q}),Object(f.jsx)(A,{disable:R,getConfirmation:function(){P(!0)},valueButton:"Blanquear PIN"})]})]})}var ke=a(565),Ee=a(569),we=a(568),Pe=a(564),Ae=a(566),ze=a(567),Le=a(189),Me={getTarjetas:function(e,t,a){return y._call_get(y.URL()+"/cambioCierre/tarjetas?operationId="+e+"&docType="+t+"&docNum="+a)}},qe=Object(p.a)((function(e){return{root:{flexGrow:1,borderRadius:0},pos:{marginBottom:12},divider:{marginTop:25,marginBottom:25},formControl:{width:"95%"},formControl2:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),_e=Object(p.a)((function(){return{table:{minWidth:650}}}));function Ge(){var e=Object(l.f)(),t=e.operationId,a=e.option,n=e.documentType,o=e.documentNumber,c=e.businessName,i=e.contactModeCode,s=e.productCode,d=e.causeCode,m=e.reasonCode,p=e.companyCode,h=e.responsibleSector,g=e.registerSector,C=e.user,S=e.origin,N=e.initContact,B=e.closeContact,I=e.productNumber,R=r.a.useState(!0),D=Object(b.a)(R,2),k=D[0],E=D[1],w=r.a.useState(!1),P=Object(b.a)(w,2),z=P[0],L=P[1],M=r.a.useState(!1),q=Object(b.a)(M,2),G=q[0],U=q[1],F=r.a.useState(""),W=Object(b.a)(F,2),H=W[0],J=W[1],$=r.a.useState(""),V=Object(b.a)($,2),Q=V[0],X=V[1],Z=r.a.useState(""),K=Object(b.a)(Z,2),Y=K[0],ee=K[1],te=r.a.useState(!0),ae=Object(b.a)(te,2),ne=ae[0],re=ae[1],oe=r.a.useState(""),ie=Object(b.a)(oe,2),ue=ie[0],be=ie[1],me=r.a.useState([]),Oe=Object(b.a)(me,2),xe=Oe[0],he=Oe[1],Ce=qe(),ve=_e();r.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Me.getTarjetas(t,n,o).then((function(e){he(e.cardAccArr),re(!1)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,n,o]);var Se=function(e){var t={tipoCliente:"Titular"};return t.apellidoNombre=e.cardhName,t.nroTarjeta=e.cardNum,t.estado=e.primAcctInfo.statDesc,t.cartera=ue,t};return Object(f.jsxs)("div",{className:Ce.root,children:[Object(f.jsx)(v,{}),Object(f.jsxs)(O.a,{maxWidth:"lg",children:[Object(f.jsx)(le.a,{container:!0,spacing:3,children:Object(f.jsx)(le.a,{item:!0,lg:12,children:Object(f.jsx)(de.a,{className:Ce.root,variant:"outlined",children:Object(f.jsxs)(je.a,{children:[Object(f.jsx)(x.a,{variant:"h5",component:"h2",children:"Cliente"}),Object(f.jsx)("br",{}),Object(f.jsxs)(le.a,{container:!0,spacing:6,children:[Object(f.jsxs)(le.a,{item:!0,lg:4,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Apellido y Nombre"}),Object(f.jsx)(x.a,{className:Ce.pos,color:"textSecondary",children:c})]}),Object(f.jsxs)(le.a,{item:!0,lg:4,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Tipo y N\xba de Documento"}),Object(f.jsxs)(x.a,{className:Ce.pos,color:"textSecondary",children:[n," - ",o]})]})]}),Object(f.jsx)(se.a,{variant:"middle",className:Ce.divider}),Object(f.jsx)(le.a,{container:!0,spacing:6,children:Object(f.jsx)(Pe.a,{component:Le.a,children:Object(f.jsxs)(ke.a,{className:ve.table,size:"small","aria-label":"a dense table",children:[Object(f.jsx)(Ae.a,{children:Object(f.jsxs)(ze.a,{children:[Object(f.jsx)(we.a,{align:"left",children:"Tipo"}),Object(f.jsx)(we.a,{align:"left",children:"Tipo Doc."}),Object(f.jsx)(we.a,{align:"left",children:"Numero Doc."}),Object(f.jsx)(we.a,{align:"left",children:"Apellido y Nombre"}),Object(f.jsx)(we.a,{align:"left",children:"Numero"}),Object(f.jsx)(we.a,{align:"left",children:"Estado"})]})}),Object(f.jsx)(Ee.a,{children:xe.map((function(e){return Object(f.jsxs)(ze.a,{children:[Object(f.jsx)(we.a,{component:"th",scope:"row",children:"Titular"}),Object(f.jsx)(we.a,{align:"left",children:e.typeIdfcCde}),Object(f.jsx)(we.a,{align:"left",children:e.idfcNum}),Object(f.jsx)(we.a,{align:"left",children:e.cardhName}),Object(f.jsx)(we.a,{align:"left",children:e.cardNum}),Object(f.jsx)(we.a,{align:"left",children:e.primAcctInfo.statDesc})]},e.cardNum)}))})]})})}),Object(f.jsx)(se.a,{variant:"middle",className:Ce.divider}),Object(f.jsx)(le.a,{container:!0,spacing:6,children:Object(f.jsxs)(le.a,{item:!0,lg:2,xs:6,children:[Object(f.jsx)(x.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Cartera"}),Object(f.jsx)(pe.a,{className:Ce.formControl,children:Object(f.jsxs)(ge.a,{onChange:function(e,t){be(t.props.value)},value:ue,children:[Object(f.jsx)(fe.a,{value:"01",onClick:function(){return E(!1)},children:"Cartera 1"}),Object(f.jsx)(fe.a,{value:"02",onClick:function(){return E(!1)},children:"Cartera 2"}),Object(f.jsx)(fe.a,{value:"03",onClick:function(){return E(!1)},children:"Cartera 3"}),Object(f.jsx)(fe.a,{value:"04",onClick:function(){return E(!1)},children:"Cartera 4"})]})})]})})]})})})}),Object(f.jsx)(_,{loading:ne}),Object(f.jsx)(ce,{saveData:function(e){L(!1),E(!0),re(!0);var r=y.getCommonParams(t,s,d,p,n,o,I,S,C,a,i,m,h,g,N,B,e?H:null),c=Se(xe[0]),l={};l.commonParams=r,l.closeChangeParams=c,T.saveData(l).then((function(e){var t=e.registration.requestNumber,a=e.registration.message,n=e.registration.status;U(!0),J(t),X(n),ee(a),re(!1)}))},resultRequest:H,resultStatus:Q,resultMsg:Y,firstOpen:z,setFirstOpen:L,printScreen:function(){re(!0);var e=y.getCommonParams(t,s,d,p,n,o,I,S,C,a,i,m,h,g,N,B,H),r=Se(xe[0]),c={};c.commonParams=e,c.closeChangeParams=r,T.printData(c).then((function(e){re(!1)}))},secondOpen:G,setSecondOpen:U}),Object(f.jsx)(A,{disable:k,getConfirmation:function(){L(!0)},valueButton:"Guardar"})]})]})}var Ue=function(){return Object(f.jsx)(s.a,{basename:"/sactran",children:Object(f.jsx)("div",{children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{path:"".concat("","/reprint/:operationId/:option/:documentType/:documentNumber/:businessName/:contactModeCode/:productCode/:causeCode/:reasonCode/:companyCode/:responsibleSector/:registerSector/:user/:origin/:initContact/:closeContact/:productNumber"),component:Fe}),Object(f.jsx)(l.a,{path:"".concat("","/discharge/:operationId/:option/:documentType/:documentNumber/:businessName/:contactModeCode/:productCode/:causeCode/:reasonCode/:companyCode/:responsibleSector/:registerSector/:user/:origin/:initContact/:closeContact/:productNumber"),component:We}),Object(f.jsx)(l.a,{path:"".concat("","/resetPin/:operationId/:option/:documentType/:documentNumber/:businessName/:contactModeCode/:productCode/:causeCode/:reasonCode/:companyCode/:responsibleSector/:registerSector/:user/:origin/:initContact/:closeContact/:productNumber"),component:He}),Object(f.jsx)(l.a,{path:"".concat("","/closeChange/:operationId/:option/:documentType/:documentNumber/:businessName/:contactModeCode/:productCode/:causeCode/:reasonCode/:companyCode/:responsibleSector/:registerSector/:user/:origin/:initContact/:closeContact/:productNumber"),component:Je})]})})})};function Fe(){return Object(f.jsx)(Te,{})}function We(){return Object(f.jsx)(Ie,{})}function He(){return Object(f.jsx)(De,{})}function Je(){return Object(f.jsx)(Ge,{})}c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(Ue,{})}),document.getElementById("root")),i()}},[[484,1,2]]]);
//# sourceMappingURL=main.05388c14.chunk.js.map