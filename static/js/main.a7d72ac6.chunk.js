(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{27:function(e,a,t){e.exports=t(40)},32:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),n=t(10),r=t.n(n),s=(t(32),t(16)),m=t(2);var o=function(){return c.a.createElement("div",{className:"d-flex justify-content-center align-items-center min-vh-100"},c.a.createElement(s.b,{className:"btn btn-primary btn-lg",to:"/create"},"Register"))},i=t(3),d=t(7);t(37);var u=function(e){return c.a.createElement("div",{className:"slidecontainer"},c.a.createElement("input",{type:"range",min:e.min,max:e.max,value:e.age,onChange:function(a){return t=a.target.value,void e.changeParentValue(t);var t},className:"slider",id:"myRange"}))},v=t(14),E=(t(38),[{value:"Hockey",label:"Hockey"},{value:"Football",label:"Football"},{value:"Reading",label:"Reading"}]),b=[{value:"India",label:"India"},{value:"United States of America",label:"United States of America"}],p=[{countryID:"India",states:[{value:"Andra Pradesh",label:"Andra Pradesh"},{value:"Kerala",label:"Kerala"}]},{countryID:"United States of America",states:[{value:"Texas",label:"Texas"},{value:"New Mexico",label:"New Mexico"}]}],N=[{value:"Home",label:"Home"},{value:"Company",label:"Company"}],g=t(12);var f=function(){var e,a=Object(l.useState)(13),t=Object(d.a)(a,2),n=t[0],r=t[1],s=Object(l.useState)({firstName:"",secondName:""}),o=Object(d.a)(s,2),f=o[0],h=o[1],y=Object(l.useState)({address1:"",address2:""}),j=Object(d.a)(y,2),O=j[0],x=j[1],w=Object(l.useState)(),C=Object(d.a)(w,2),A=C[0],S=C[1],k=Object(l.useState)(),D=Object(d.a)(k,2),P=D[0],U=D[1],I=Object(l.useState)(),R=Object(d.a)(I,2),T=R[0],q=R[1],F=Object(l.useState)(),M=Object(d.a)(F,2),H=M[0],_=M[1],B=Object(l.useState)([]),L=Object(d.a)(B,2),V=L[0],J=L[1],K=Object(l.useState)(),W=Object(d.a)(K,2),$=W[0],z=W[1],G=Object(l.useState)(!1),Q=Object(d.a)(G,2),X=Q[0],Y=Q[1],Z=Object(l.useState)(null),ee=Object(d.a)(Z,2),ae=ee[0],te=ee[1],le=Object(l.useState)(!1),ce=Object(d.a)(le,2),ne=ce[0],re=ce[1],se=Object(l.useState)(!1),me=Object(d.a)(se,2),oe=me[0],ie=me[1],de=Object(g.c)((function(e){return e.formData})),ue=Object(m.f)(),ve=Object(g.b)();function Ee(e){e.preventDefault()}function be(e){te(URL.createObjectURL(e.target.files[0]))}return Object(l.useEffect)((function(){de&&(r(de.age),h(de.name),S(de.email),x(de.address),U(de.telephone),q(de.country),_(de.state),J(de.interests),z(de.addressType),Y(de.subscribe),te(de.image))}),[]),c.a.createElement("div",{className:"container d-flex justify-content-center align-items-center min-vh-100"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("Validation form"),ve({type:"UPDATE_FORM_DATA",payload:{age:n,name:f,address:O,email:A,telephone:P,country:T,state:H,interests:V,addressType:$,subscribe:X,image:ae}}),T&&H&&V.length>0&&$&&ae?(ue.push("/submit"),re(!1),ie(!1)):ae?re(!0):ie(!0)}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3 text-center"},ae&&c.a.createElement("div",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("img",{src:ae,alt:"",height:"150px",width:"150px"})),c.a.createElement("input",{type:"file",accept:"image/*",className:"form-control",placeholder:"Upload your photo",onChange:be}),c.a.createElement("button",{onClick:Ee,className:"btn btn-link"},"Edit Photo")),!ae&&c.a.createElement("div",null,c.a.createElement("div",{className:"upload-button"},c.a.createElement("input",{type:"file",accept:"image/*",className:"form-control",placeholder:"Upload your photo",onChange:be}),c.a.createElement("button",{onClick:Ee,className:"btn btn-link text-white"},"Upload your photo")),c.a.createElement("div",{className:"upload-photo",onClick:Ee})),oe&&!ae&&c.a.createElement("div",{style:{color:"red"}},"Photo is required")),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row form-group"},ne&&c.a.createElement("div",{style:{color:"red"},class:"col-sm-12 offset-sm-3"},"All field in '*' are mandatory")),c.a.createElement("div",{className:"row form-group"},c.a.createElement("div",{className:"col-sm-3 text-right"},c.a.createElement("span",{className:"badge badge-default"},"Name")),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("input",{required:!0,type:"text",placeholder:"First Name",className:"form-control",value:f.firstName,onChange:function(e){return h(Object(i.a)(Object(i.a)({},f),{},{firstName:e.target.value}))}})),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("input",{required:!0,type:"text",placeholder:"Second Name",className:"form-control",value:f.secondName,onChange:function(e){return h(Object(i.a)(Object(i.a)({},f),{},{secondName:e.target.value}))}}))))),c.a.createElement("div",{className:"row form-group"},c.a.createElement("div",{className:"col-sm-3 text-right"},c.a.createElement("span",{className:"badge"},"Age")),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement(u,{age:n,min:13,max:45,changeParentValue:function(e){return r(e)}}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"row form-group"},c.a.createElement("div",{className:"col-sm-3 text-right"},c.a.createElement("span",{className:"badge badge-default"},"Email")),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("input",{required:!0,type:"email",className:"form-control",value:A,onChange:function(e){return S(e.target.value)}}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"row form-group"},c.a.createElement("div",{className:"col-sm-3 text-right"},c.a.createElement("span",{className:"badge badge-default"},"Telephone")),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("input",{required:!0,type:"text",className:"form-control",value:P,onChange:function(e){return U(e.target.value)}}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"row form-group"},c.a.createElement("div",{className:"col-sm-3 text-right"},c.a.createElement("span",{className:"badge badge-default"},"State")),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement(v.a,{className:"basic-single",value:{value:H,label:H},classNamePrefix:"select",name:"State",options:null===(e=p.filter((function(e){return e.countryID===T}))[0])||void 0===e?void 0:e.states,onChange:function(e){return _(e.value)}}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"row form-group"},c.a.createElement("div",{className:"col-sm-3 text-right"},c.a.createElement("span",{className:"badge badge-default"},"Country")),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement(v.a,{className:"basic-single",value:{value:T,label:T},classNamePrefix:"select",name:"Country",options:b,onChange:function(e){return q(e.value)}}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"row form-group"},c.a.createElement("div",{className:"col-sm-3 text-right"},c.a.createElement("span",{className:"badge badge-default"},"Address")),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement(v.a,{className:"basic-single",value:{value:$,label:$},classNamePrefix:"select",placeholder:"Select country",name:"Country",options:N,onChange:function(e){return z(e.value)}}))))),"Home"===$&&c.a.createElement("div",{className:"row form-group"},c.a.createElement("div",{className:"col-sm-3 text-right"},c.a.createElement("span",{className:"badge badge-default"},"Home Address")),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("input",{required:!0,type:"text",placeholder:"Address 1",className:"form-control",value:O.address1,onChange:function(e){return x(Object(i.a)(Object(i.a)({},O),{},{address1:e.target.value}))}})),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("input",{required:!0,type:"text",placeholder:"Address 2",className:"form-control",value:O.address2,onChange:function(e){return x(Object(i.a)(Object(i.a)({},O),{},{address2:e.target.value}))}}))))),"Company"===$&&c.a.createElement("div",{className:"row form-group"},c.a.createElement("div",{className:"col-sm-3 text-right"},c.a.createElement("span",{className:"badge badge-default"},"Company Address")),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("input",{required:!0,type:"text",placeholder:"Company Address 1",className:"form-control",value:O.address1,onChange:function(e){return x(Object(i.a)(Object(i.a)({},O),{},{address1:e.target.value}))}})),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("input",{required:!0,type:"text",placeholder:"Company Address 2",className:"form-control",value:O.address2,onChange:function(e){return x(Object(i.a)(Object(i.a)({},O),{},{address2:e.target.value}))}}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"row form-group"},c.a.createElement("div",{className:"col-sm-3 text-right"},c.a.createElement("span",{className:"badge badge-default"},"Interests")),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement(v.a,{className:"basic-single",classNamePrefix:"select",name:"Country",value:V,options:E,isMulti:!0,onChange:function(e){J(e)}}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3 text-right"},c.a.createElement("input",{type:"checkbox",checked:X,onChange:function(e){return Y(e.target.checked)}})),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("span",null,"Subscribe to the news letter"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary btn-lg",type:"submit"},"Submit")))))))))};var h=function(){var e=Object(g.b)(),a=Object(g.c)((function(e){return e.formData})),t=Object(m.f)();function l(){t.goBack()}return a||t.goBack(),c.a.createElement("div",{className:"container d-flex justify-content-center align-items-center min-vh-100"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3 text-center"},a.image&&c.a.createElement("div",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("img",{src:a.image,alt:"",height:"150px",width:"150px"})),c.a.createElement("input",{type:"file",accept:"image/*",className:"form-control",placeholder:"Upload your photo",onChange:function(t){e({type:"UPDATE_FORM_DATA",payload:Object(i.a)(Object(i.a)({},a),{},{image:URL.createObjectURL(t.target.files[0])})})}}),c.a.createElement("button",{className:"btn btn-link",onClick:function(e){e.preventDefault()}},"Edit photo")),c.a.createElement("button",{className:"btn btn-link",onClick:l},"Edit profile")),c.a.createElement("div",{className:"col-sm-9"},"I am ",a.name.firstName," ",a.name.secondName," and I am above ",a.age," years and you can send your emails to ",a.email,", I lives in the state of ",a.state," .I likes to play",a.interests.map((function(e,a){return c.a.createElement("span",null,e.label,",")})),".",a.subscribe&&c.a.createElement("span",null,"And please send me the news letters.")," Please reach out to me on my phone ",a.telephone,".",c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"text-center mt-5"},c.a.createElement("button",{className:"btn btn-primary btn-lg",type:"button",onClick:l},"Agree")))))))};var y=function(){return c.a.createElement("div",{className:"d-flex justify-content-center align-items-center min-vh-100"},c.a.createElement("h1",null,"404. Not Found!"))};var j=function(){return c.a.createElement(s.a,null,c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",component:o,exact:!0}),c.a.createElement(m.a,{path:"/create",component:f}),c.a.createElement(m.a,{path:"/submit",component:h}),c.a.createElement(m.a,{component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=t(17),x={formData:void 0};var w=Object(O.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,a=arguments.length>1?arguments[1]:void 0;switch(console.log("Action data : ",a),a.type){case"UPDATE_FORM_DATA":return Object(i.a)(Object(i.a)({},e),{},{formData:a.payload});default:return e}}));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g.a,{store:w},c.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.a7d72ac6.chunk.js.map