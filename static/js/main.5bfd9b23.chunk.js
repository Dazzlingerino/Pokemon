(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{22:function(e,t,n){e.exports={header:"Header_header__KdB4M"}},28:function(e,t,n){},29:function(e,t,n){},3:function(e,t,n){e.exports={pokemons:"Pokemons_pokemons__-wQeP",pokemonsButton:"Pokemons_pokemonsButton__2ho5y",picture:"Pokemons_picture__2jGPQ",pocIMG:"Pokemons_pocIMG__1IbXJ",pokeName:"Pokemons_pokeName__1QOp_",pokemon:"Pokemons_pokemon__18O7t",typesBox:"Pokemons_typesBox__1tIKf",gridForPok:"Pokemons_gridForPok__1K-1V",type:"Pokemons_type__3fFRx",bug:"Pokemons_bug__30Wn9",fire:"Pokemons_fire__3ap-d",psychic:"Pokemons_psychic__21m66",grass:"Pokemons_grass__3Kxt-",electric:"Pokemons_electric__3D0mk",poison:"Pokemons_poison__gYHSd",water:"Pokemons_water__2p5ZF",normal:"Pokemons_normal__3rRYo",fairy:"Pokemons_fairy__298Cl",ground:"Pokemons_ground__1hiy5",ice:"Pokemons_ice__6x8lq",flying:"Pokemons_flying__xvRZF",ghost:"Pokemons_ghost__28jNc",steel:"Pokemons_steel__gjGZ2",fighting:"Pokemons_fighting__MpDnB",rock:"Pokemons_rock__fQwk-",dark:"Pokemons_dark__oPWgT",dragon:"Pokemons_dragon__2ADaW"}},49:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(1),s=n.n(c),r=n(21),a=n.n(r),i=(n(28),n(29),n(22)),m=n.n(i),p=function(){return Object(o.jsx)("div",{className:m.a.header,children:" Pokedex"})},u=n(12),l=n(6),_=n.n(l),d=n(11),j=n(4),k=n(7),b=n.n(k),h=n(3),f=n.n(h),x=n(9),O=n.n(x),g=function(e){var t=e.currentPokemon,n=e.onClick;return Object(o.jsxs)("div",{className:O.a.item,onClick:n,children:[Object(o.jsx)("picture",{className:O.a.picturePOK,children:Object(o.jsx)("img",{className:O.a.imgItem,src:"https://pokeres.bastionbot.org/images/pokemon/".concat(t.id,".png/"),alt:"Error with showing pokemon image"})}),Object(o.jsx)("div",{style:{textAlign:"center",margin:"4px",textTransform:"capitalize",fontWeight:"700",fontSize:"2em"},children:-1!==t?"".concat(t.name," #").concat(t.id.toString().padStart(3,"0")):null}),Object(o.jsxs)("table",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Type"}),Object(o.jsxs)("td",{style:{textTransform:"capitalize"},children:[" ",t.types&&t.types.map((function(e){return"".concat(e.type.name+" ")}))]})]}),t.stats&&t.stats.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{style:{textTransform:"capitalize"},children:P(e.stat.name)}),Object(o.jsx)("td",{children:e.base_stat})]})})),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Weight"}),Object(o.jsx)("td",{children:t.weight})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Total moves"}),Object(o.jsx)("td",{children:t.moves.length})]})]})]})};function P(e){switch(e){case"special-attack":return"SP Attack";case"special-defense":return"SP Defense";case"hp":return"HP";default:return e}}function y(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([]),a=Object(j.a)(r,2),i=a[0],m=a[1],p=Object(c.useState)(0),l=Object(j.a)(p,2),k=l[0],h=l[1],x=Object(c.useState)(!1),O=Object(j.a)(x,2),P=O[0],y=O[1],v=Object(c.useState)(void 0),N=Object(j.a)(v,2),w=N[0],S=N[1];function B(){return(B=Object(d.a)(_.a.mark((function e(){var t,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()(n.next);case 2:return t=e.sent,e.next=5,Promise.all(t.data.results.map((function(e){return b()("".concat(e.url))})));case 5:o=e.sent,s(t.data),m([].concat(Object(u.a)(i),Object(u.a)(o.map((function(e){return e.data})))));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(_.a.mark((function e(){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("https://pokeapi.co/api/v2/pokemon?limit=12");case 2:return t=e.sent,e.next=5,Promise.all(t.data.results.map((function(e){return b()("".concat(e.url))})));case 5:n=e.sent,s(t.data),m(n.map((function(e){return e.data})));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(o.jsxs)("div",{className:f.a.pokemons,children:[Object(o.jsx)("div",{className:f.a.gridForPok,children:i.filter((function(e){return!w||e.types.some((function(e){return e.type.name===w}))})).sort((function(e,t){return e.id>t.id?1:-1})).map((function(e){return Object(o.jsxs)("div",{className:f.a.pokemon,onDoubleClick:function(){h(e),y(!0)},children:[Object(o.jsx)("picture",{className:f.a.picture,children:Object(o.jsx)("img",{className:f.a.pocIMG,src:"https://pokeres.bastionbot.org/images/pokemon/".concat(e.id,".png/"),alt:"Error with showing pokemon image"})}),Object(o.jsxs)("div",{className:f.a.pokeName,children:[" ",e.name]}),Object(o.jsxs)("div",{className:f.a.typesBox,children:[" ",e.types&&e.types.map((function(e){return Object(o.jsx)("span",{onClick:function(){return t=e.type.name,console.log(t),void S(t);var t},className:[f.a.type,f.a[e.type.name]].join(" "),children:"".concat(e.type.name+" ")})}))]})]},e.objectID)}))}),Object(o.jsx)("button",{className:f.a.pokemonsButton,onClick:function(){return B.apply(this,arguments)},children:"Load More"}),P?Object(o.jsx)(g,{currentPokemon:k}):null]})}var v=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"app-wrapper",children:Object(o.jsx)(p,{})}),Object(o.jsx)("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:Object(o.jsx)(y,{})})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),s(e),r(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),N()},9:function(e,t,n){e.exports={item:"Pokemon_item__e2UGp",picturePOK:"Pokemon_picturePOK__3tlAg"}}},[[49,1,2]]]);
//# sourceMappingURL=main.5bfd9b23.chunk.js.map