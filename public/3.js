(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),s=a(15),i=a.n(s),o=a(16),m=a.n(o),u=function(e){return r.a.createElement(i.a,{editor:m.a,data:e.content,onChange:function(t,a){e.setData(a.getData())},config:{toolbar:["heading","|","bold","italic","link","bulletedList","numberedList","|","blockQuote","imageUpload","imageStyle:full","imageStyle:side","insertTable","|","undo","redo"],language:"pt",heading:{options:[{model:"paragraph",title:"Parágrafo",class:"ck-heading_paragraph"},{model:"heading1",view:"h2",title:"Título 1",class:"ck-heading_heading1"},{model:"heading2",view:"h3",title:"Título 2",class:"ck-heading_heading2"},{model:"heading3",view:"h4",title:"Título 3",class:"ck-heading_heading3"}]},height:"400px"}})};u.propTypes={content:c.a.any,setData:c.a.func};var d=u,p=function(e){var t=e.tags,a=e.setTags,l=Object(n.useRef)(),c=function(e){var n=t.filter((function(t,a){return e!=a}));a(n)};return r.a.createElement("div",{className:"input-tag"},r.a.createElement("ul",{className:"input-tag__tags"},t.map((function(e,t){return r.a.createElement("li",{key:e},e,r.a.createElement("button",{type:"button",onClick:function(){c(t)}},r.a.createElement("i",{className:"material-icons"},"clear")))})),r.a.createElement("li",{className:"input-tag__tags__input"},r.a.createElement("input",{type:"text",onKeyDown:function(e){var n=e.target.value;if("Enter"===e.key&&n){if(t.find((function(e){return e.toLowerCase()===n.toLowerCase()})))return;a(t.concat([n])),l.current.value=""}else"Backspace"!==e.key||n||c(t.length-1)},ref:l}))))};p.propTypes={setTags:c.a.func,tags:c.a.array};var E=p,v=a(8),f=a.n(v),h=a(11),b=function(e){return r.a.createElement("div",null,r.a.createElement("h5",{className:"red-text"},"Um erro inesperado aconteceu"),r.a.createElement("p",null,e.message))};b.propTypes={message:c.a.string};var g=r.a.memo(b);function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var S=function(){var e=N(Object(n.useState)(),2),t=e[0],a=e[1],l=N(Object(n.useState)(),2),c=l[0],s=l[1],i=N(Object(n.useState)(),2),o=i[0],m=i[1],u=N(Object(n.useState)(),2),p=u[0],v=u[1],b=N(Object(n.useState)(),2),y=b[0],S=b[1],T=N(Object(n.useState)(),2),A=T[0],O=T[1],k=N(Object(n.useState)(),2),w=k[0],j=k[1],x=N(Object(n.useState)(),2),q=x[0],C=x[1],D=Object(n.useRef)(),L=Object(n.useRef)(),Q=N(Object(n.useState)([]),2),_=Q[0],H=Q[1],B=N(Object(n.useState)([]),2),R=B[0],U=B[1],F=N(Object(n.useState)(),2),I=F[0],J=F[1];Object(n.useEffect)((function(){a(!0),f.a.get("/subjects").then((function(e){H(e.data.data);var t=document.querySelector("#modal"),a=M.Modal.init(t,{});J(a)})).catch((function(e){console.error(e),s(e)})).finally((function(){a(!1)}))}),[f.a]);var P=function(e,t,a){var n=document.querySelector("#modal h4");n.innerHTML=e,n.className=t,document.querySelector("#modal p").innerHTML=a},z=null;return z=t?r.a.createElement(h.a,null):c?r.a.createElement(g,{message:c.message}):r.a.createElement("div",null,r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"label"},"Conteúdo"),r.a.createElement(d,{data:o,setData:m})),r.a.createElement("div",{className:"alternative"},r.a.createElement("p",{className:"label"},"Alternativa A"),r.a.createElement(d,{data:p,setData:v})),r.a.createElement("div",{className:"alternative"},r.a.createElement("p",{className:"label"},"Alternativa B"),r.a.createElement(d,{data:y,setData:S})),r.a.createElement("div",{className:"alternative"},r.a.createElement("p",{className:"label"},"Alternativa C"),r.a.createElement(d,{data:A,setData:O})),r.a.createElement("div",{className:"alternative"},r.a.createElement("p",{className:"label"},"Alternativa D"),r.a.createElement(d,{data:w,setData:j})),r.a.createElement("div",{className:"alternative"},r.a.createElement("p",{className:"label"},"Alternativa E (Opcional)"),r.a.createElement(d,{data:q,setData:C})),r.a.createElement("div",null,r.a.createElement("p",{className:"label"},"Alternativa Correta"),r.a.createElement("select",{className:"browser-default",ref:D},r.a.createElement("option",{disabled:!0,selected:!0,value:""},"Selecione uma Alternativa"),r.a.createElement("option",{value:"A"},"A"),r.a.createElement("option",{value:"B"},"B"),r.a.createElement("option",{value:"C"},"C"),r.a.createElement("option",{value:"D"},"D"),r.a.createElement("option",{value:"E"},"E"))),r.a.createElement("div",null,r.a.createElement("p",{className:"label"},"Matéria"),r.a.createElement("select",{ref:L,className:"browser-default"},r.a.createElement("option",{disabled:!0,selected:!0,value:""},"Selecione uma Matéria"),_.map((function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)})))),r.a.createElement("div",null,r.a.createElement("p",{className:"label"},"Tags"),r.a.createElement(E,{tags:R,setTags:U})),r.a.createElement("button",{className:"btn green",onClick:function(){var e=document.createElement("div"),t=!1,n=null;if(e.innerHTML=o,o&&e.innerText.trim()||(t=!0,n="O campo 'Conteúdo' precisa ser preenchido"),e.innerHTML=p,t||p&&e.innerText.trim()||(t=!0,n="O campo 'Alternativa A' precisa ser preenchido"),e.innerHTML=y,t||y&&e.innerText.trim()||(t=!0,n="O campo 'Alternativa B' precisa ser preenchido"),e.innerHTML=A,t||A&&e.innerText.trim()||(t=!0,n="O campo 'Alternativa C' precisa ser preenchido"),e.innerHTML=w,t||w&&e.innerText.trim()||(t=!0,n="O campo 'Alternativa D' precisa ser preenchido"),t||D.current.value||(t=!0,n="Uma alternativa correta precisa ser selecionada"),t||L.current.value||(t=!0,n="Uma matéria precisa ser selecionada"),e.innerHTML=q,t||q&&e.innerText.trim()||"E"!==D.current.value||(t=!0,n="A alternativa correta não pode ser 'E' pois esta não está preenchida"),t)P("Erro no formulário","red-text",n),I.open();else{var r={content:o,alternativeA:p,alternativeB:y,alternativeC:A,alternativeD:w,alternativeE:q,correctAlternative:D.current.value,subject:L.current.value,tags:R};a(!0),f.a.post("/questions",r).then((function(e){200===e.status&&(P("Questão criada com Sucesso!","green-text","Sua questão foi criada e já está disponível na sessão 'Minhas Questões'"),I.open())})).catch((function(e){s(e),console.error(e)})).finally((function(){a(!1)}))}}},"Criar")),r.a.createElement("div",null,z)},T=a(1),A=a(9);t.default=function(){return r.a.createElement("section",{className:"questions container"},r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/questions/bookmarked",render:function(){return r.a.createElement("h3",null,"Favoritos")}}),r.a.createElement(T.a,{path:"/questions/answered",render:function(){return r.a.createElement("h3",null,"Questões Respondidas")}}),r.a.createElement(T.a,{path:"/questions/create",render:function(){return r.a.createElement("h3",null,"Nova Questão")}}),r.a.createElement(T.a,{path:"/questions",render:function(){return r.a.createElement("h3",null,"Minhas Questões")}})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m5"},r.a.createElement("ul",{className:"collection"},r.a.createElement("li",{className:"collection-item flex"},r.a.createElement("input",{type:"text",placeholder:"Procurar Questões"}),r.a.createElement("button",{className:"btn btn-primary z-depth-0"},r.a.createElement("i",{className:"material-icons"},"search"))),r.a.createElement(A.c,{to:"/questions",className:"collection-item",activeClassName:"active",exact:!0},"Minhas Questões",r.a.createElement("span",{className:"secondary-content blue-text"},r.a.createElement("i",{className:"material-icons"},"person"))),r.a.createElement(A.c,{to:"/questions/bookmarked",className:"collection-item",activeClassName:"active",exact:!0},"Favoritos",r.a.createElement("span",{className:"secondary-content yellow-text text-darken-1"},r.a.createElement("i",{className:"material-icons"},"star"))),r.a.createElement(A.c,{to:"/questions/answered",className:"collection-item",activeClassName:"active",exact:!0},"Questões Respondidas",r.a.createElement("span",{className:"secondary-content green-text"},r.a.createElement("i",{className:"material-icons"},"check")))),r.a.createElement("div",{className:"my-3"},r.a.createElement(A.b,{to:"/questions/create",className:"btn green"},"Nova Questão"))),r.a.createElement("div",{className:"col s12 m7 card"},r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/questions/bookmarked",render:function(){return r.a.createElement("p",null,"Favoritos")}}),r.a.createElement(T.a,{path:"/questions/answered",render:function(){return r.a.createElement("p",null,"Respondidas")}}),r.a.createElement(T.a,{path:"/questions/create",component:S}),r.a.createElement(T.a,{path:"/questions",render:function(){return r.a.createElement("p",null,"Minhas Questões")}})))))}}}]);