(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{88:function(e,t,a){},89:function(e,t,a){},94:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a(0),n=a.n(s),i=a(10),r=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,158)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))},l=(a(88),a(52)),o=a(11),d=a(26),j=a(27),b=a(32),p=a(29),u=(a(89),a(141)),m=a(71),h=a.n(m),O=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"Home",children:[Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("p",{className:"titletext",children:"Pokedex"})}),Object(c.jsx)("div",{className:"Image",children:Object(c.jsx)("img",{className:"img",src:"./assets/img/pikachuphone.gif",alt:"Pikachu"})}),Object(c.jsx)("div",{className:"buttongoto",children:Object(c.jsx)(u.a,{variant:"contained",color:"primary",href:"/pokedex",endIcon:Object(c.jsx)(h.a,{}),children:"Go to Pokedex"})})]})}}]),a}(s.Component),x=(a(94),function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"About",children:Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("p",{className:"titletext",children:"About"})})})}}]),a}(s.Component)),f=a(34),k=a(146),y=a(148),v=a(149),g=a(147),N=a(156);function P(){var e,t,a,c;for(e=document.getElementById("searchinput").value.toUpperCase(),t=document.getElementById("pokegallery").getElementsByClassName("card"),a=0;a<t.length;a++)(c=t[a]).getElementsByClassName("name")[0].innerText.toUpperCase().indexOf(e)>-1?c.style.display="":c.style.display="none"}function C(e){document.getElementById("searchinput").value=e,P()}var S=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(c.jsx)(N.a,{InputLabelProps:{shrink:!0},variant:"outlined",type:"text",id:"searchinput",onKeyUp:P,label:"Search for Names, ID or Types.."})}}]),a}(s.Component),w=(a(97),a(72)),_=a.n(w),B={normal:"a4acaf",fighting:"d56723",flying:"90e7ff",poison:"b97fc9",ground:"afa268",rock:"a38c21",bug:"729f3f",ghost:"7b62a3",steel:"7b7b85",fire:"fd7d24",water:"4592c4",grass:"9bcc50",electric:"efd636",psychic:"f366b9",ice:"51c4e7",dragon:"dd533a",dark:"616161",fairy:"febaea"};function I(e){if(e)return"#"+B[e]}function E(e){if(e.Pokedetail.types[1]){var t=I(e.Pokedetail.types[0].type.name),a=I(e.Pokedetail.types[1].type.name);return"linear-gradient(90deg, ".concat(t," 50%, ").concat(a," 50%)")}return I(e.Pokedetail.types[0].type.name)}a(98);var T=function(e){return Object(c.jsx)("div",{className:"pokemondet",style:{background:E(e)},children:Object(c.jsxs)("div",{className:"detail",children:[Object(c.jsx)("div",{className:"Cont-detail",children:Object(c.jsx)("div",{className:"spec-flip-container",children:Object(c.jsxs)("div",{className:"spec-flipper",children:[Object(c.jsx)("div",{className:"spec-front",children:Object(c.jsx)("img",{className:"imgfront",src:e.Pokedetail.sprites.front_default,alt:"pokemon"})}),Object(c.jsx)("div",{className:"spec-back",children:Object(c.jsx)("img",{className:"imgback",src:e.Pokedetail.sprites.back_default,alt:"pokemon"})})]})})}),Object(c.jsxs)("div",{className:"spec-container",children:[Object(c.jsxs)("div",{className:"Specs",children:["N\xb0",e.Pokedetail.id," ",e.Pokedetail.name]}),Object(c.jsxs)("div",{className:"Specs1",children:["Exp:",e.Pokedetail.base_experience," Height:",e.Pokedetail.height/10,"m Weight:",e.Pokedetail.weight/10,"Kg"]}),Object(c.jsxs)("div",{className:"Specs1",children:["Tipo: ",Object(c.jsx)("br",{}),"  ",e.Pokedetail.types[0].type.name," ",e.Pokedetail.types[1]&&e.Pokedetail.types[1].type.name]}),Object(c.jsxs)("div",{className:"Specs1",children:["Abilities: ",Object(c.jsx)("br",{})," ",e.Pokedetail.abilities[0].ability.name," ",e.Pokedetail.abilities[1]&&e.Pokedetail.abilities[1].ability.name]}),Object(c.jsxs)("div",{className:"Specs1",children:["Stats: ",Object(c.jsx)("br",{}),e.Pokedetail.stats[0].stat.name,":",e.Pokedetail.stats[0].base_stat," ",e.Pokedetail.stats[1].stat.name,":",e.Pokedetail.stats[1].base_stat," ",e.Pokedetail.stats[2].stat.name,":",e.Pokedetail.stats[2].base_stat," ",e.Pokedetail.stats[3].stat.name,":",e.Pokedetail.stats[3].base_stat," ",e.Pokedetail.stats[4].stat.name,":",e.Pokedetail.stats[4].base_stat," ",e.Pokedetail.stats[5].stat.name,":",e.Pokedetail.stats[5].base_stat]})]})]})})};var A=function(){var e=n.a.useState([]),t=Object(f.a)(e,2),a=(t[0],t[1]),i=n.a.useState(!1),r=Object(f.a)(i,2),l=r[0],o=r[1],d=n.a.useState([]),j=Object(f.a)(d,2),b=j[0],p=j[1],m=n.a.useState("true"),h=Object(f.a)(m,2),O=h[0],x=h[1],N=[],P=n.a.useState([]),w=Object(f.a)(P,2),B=w[0],E=w[1],A=function(){o(!1)};return Object(s.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon/?limit=151").then((function(e){return e.json()})).then((function(e){return a(e.results.map((function(e){fetch(e.url).then((function(e){return e.json()})).then((function(e){return N.push(e)})),p(N)})))}))}),[]),setTimeout((function(){x(!1)}),2e3),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"search",children:Object(c.jsx)(S,{})}),Object(c.jsx)("div",{className:"pokegallery",id:"pokegallery",children:O?Object(c.jsx)("div",{className:"Loading",children:Object(c.jsx)("p",{className:"image-holder",children:Object(c.jsx)("img",{src:"./assets/img/pokeloading.gif",alt:"Loading"})})}):b.map((function(e,t){return Object(c.jsxs)("div",{id:e.id,className:"card",children:[Object(c.jsx)("div",{className:"flip-container",onClick:function(){return function(e){var t=b[e];E(t),o(!0)}(t)},children:Object(c.jsxs)("div",{className:"flipper",children:[Object(c.jsx)("div",{className:"front",children:Object(c.jsx)("img",{src:e.sprites.front_default,alt:"pokemon"})}),Object(c.jsx)("div",{className:"back",children:Object(c.jsx)("img",{src:e.sprites.back_default,alt:"pokemon"})})]})}),Object(c.jsx)("h5",{className:"num",children:"N\xb0"}),Object(c.jsxs)("div",{className:"name",children:[e.id," ",e.name,Object(c.jsxs)("div",{className:"types",style:{background:I(e.types[0].type.name)},onClick:function(){return C(e.types[0].type.name)},children:["   ",e.types[0].type.name]}),e.types[1]&&Object(c.jsxs)("div",{className:"types",style:{background:I(e.types[1].type.name)},onClick:function(){return C(e.types[1].type.name)},children:["  ",e.types[1].type.name," "]})]})]},e.id)}))}),Object(c.jsxs)(k.a,{fullScreen:!0,open:l,onClose:A,"aria-labelledby":"max-width-dialog-title",PaperProps:{style:{backgroundColor:"transparent",boxShadow:"none"}},children:[Object(c.jsx)(g.a,{id:"max-width-dialog-title",children:Object(c.jsx)(y.a,{children:Object(c.jsx)(u.a,{onClick:A,variant:"contained",color:"primary",children:Object(c.jsx)(_.a,{})})})}),Object(c.jsx)(v.a,{children:Object(c.jsx)(T,{Pokedetail:B})})]})]})},L=function(){return Object(c.jsx)(l.a,{children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/pokedex-react",component:O}),Object(c.jsx)(o.a,{path:"/pokedex-react/home",component:O}),Object(c.jsx)(o.a,{path:"/pokedex-react/about",component:x}),Object(c.jsx)(o.a,{path:"/pokedex-react/pokedex",component:A})]})})},F=a(54),D=a(55),G=a(150),H=a(153),K=a(154),U=a(44),J=a(155),q=a(73),R=a.n(q),W=a(157),z=a(145),M=a(151),Q=a(152),V=Object(G.a)((function(e){return{header:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250}}}));function X(){var e=V(),t=n.a.useState({left:!1}),a=Object(f.a)(t,2),s=a[0],i=a[1];function r(e){return Object(c.jsx)(M.a,Object(D.a)({button:!0,component:"a"},e))}var l,o=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&i(Object(D.a)(Object(D.a)({},s),{},Object(F.a)({},e,t)))}};return Object(c.jsx)("div",{className:e.header,children:Object(c.jsx)(H.a,{position:"static",children:Object(c.jsxs)(K.a,{children:[Object(c.jsx)(J.a,{edge:"start",className:e.menuButton,onClick:o("left",!0),color:"inherit","aria-label":"menu",children:Object(c.jsx)(R.a,{})}),Object(c.jsx)(W.a,{anchor:"left",open:s.left,onClose:o("left",!1),children:(l="left",Object(c.jsx)("div",{className:e.list,role:"presentation",onClick:o(l,!1),onKeyDown:o(l,!1),children:Object(c.jsxs)(z.a,{children:[Object(c.jsx)(r,{href:"/home",children:Object(c.jsx)(Q.a,{primary:"Home"})}),Object(c.jsx)(r,{href:"/pokedex",children:Object(c.jsx)(Q.a,{primary:"Pokedex"})}),Object(c.jsx)(r,{href:"/about",children:Object(c.jsx)(Q.a,{primary:"About"})})]})}))}),Object(c.jsx)(U.a,{variant:"h6",className:e.title,children:"Pokedex"})]})})})}var Y=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(X,{})})}}]),a}(s.Component),Z=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(Y,{}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(L,{})})]})};Object(i.render)(Object(c.jsx)(Z,{}),document.querySelector("#root")),r()}},[[99,1,2]]]);
//# sourceMappingURL=main.2297abed.chunk.js.map