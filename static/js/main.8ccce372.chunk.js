(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},3:function(e,t,n){e.exports={pokemons:"Pokemons_pokemons__-wQeP",pokemonsButton:"Pokemons_pokemonsButton__2ho5y",pokeName:"Pokemons_pokeName__1QOp_",pokemon:"Pokemons_pokemon__18O7t",typesBox:"Pokemons_typesBox__1tIKf",gridForPok:"Pokemons_gridForPok__1K-1V",type:"Pokemons_type__3fFRx",bug:"Pokemons_bug__30Wn9",fire:"Pokemons_fire__3ap-d",psychic:"Pokemons_psychic__21m66",grass:"Pokemons_grass__3Kxt-",electric:"Pokemons_electric__3D0mk",poison:"Pokemons_poison__gYHSd",water:"Pokemons_water__2p5ZF",normal:"Pokemons_normal__3rRYo",fairy:"Pokemons_fairy__298Cl",ground:"Pokemons_ground__1hiy5",ice:"Pokemons_ice__6x8lq",flying:"Pokemons_flying__xvRZF",ghost:"Pokemons_ghost__28jNc",steel:"Pokemons_steel__gjGZ2",fighting:"Pokemons_fighting__MpDnB",rock:"Pokemons_rock__fQwk-",dark:"Pokemons_dark__oPWgT",dragon:"Pokemons_dragon__2ADaW"}},48:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n(2),a=n.n(s),c=n(21),r=n.n(c),i=(n(27),n(28),n(12)),m=n(6),p=n.n(m),d=n(11),u=n(4),l=n(7),_=n.n(l),j=n(3),k=n.n(j),h=n(9),x=n.n(h),b=function(e){var t=e.currentPokemon;return Object(o.jsxs)("div",{className:x.a.item,children:[Object(o.jsx)("img",{style:{maxWidth:"100%"},src:"https://pokeres.bastionbot.org/images/pokemon/".concat(t.id,".png/"),alt:"Error with showing pokemon"}),Object(o.jsx)("div",{className:x.a.pokeName,children:-1!==t?"".concat(t.name," #").concat(t.id.toString().padStart(3,"0")):null}),Object(o.jsxs)("table",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Type"}),Object(o.jsxs)("td",{style:{textTransform:"capitalize"},children:[" ",t.types&&t.types.map((function(e){return"".concat(e.type.name+" ")}))]})]}),t.stats&&t.stats.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{style:{textTransform:"capitalize"},children:f(e.stat.name)},e.id),Object(o.jsx)("td",{children:e.base_stat},e.id)]},e.id)})),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Weight"}),Object(o.jsx)("td",{children:t.weight})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Total moves"}),Object(o.jsx)("td",{children:t.moves.length})]})]})]})};function f(e){switch(e){case"special-attack":return"SP Attack";case"special-defense":return"SP Defense";case"hp":return"HP";default:return e}}function O(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)([]),r=Object(u.a)(c,2),m=r[0],l=r[1],j=Object(s.useState)(0),h=Object(u.a)(j,2),x=h[0],f=h[1],O=Object(s.useState)(!1),g=Object(u.a)(O,2),P=g[0],y=g[1],v=Object(s.useState)(void 0),N=Object(u.a)(v,2),w=N[0],S=N[1];function B(){return(B=Object(d.a)(p.a.mark((function e(){var t,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()(n.next);case 2:return t=e.sent,e.next=5,Promise.all(t.data.results.map((function(e){return _()("".concat(e.url))})));case 5:o=e.sent,a(t.data),l([].concat(Object(i.a)(m),Object(i.a)(o.map((function(e){return e.data})))));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){(function(){var e=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()("https://pokeapi.co/api/v2/pokemon?limit=12");case 2:return t=e.sent,e.next=5,Promise.all(t.data.results.map((function(e){return _()("".concat(e.url))})));case 5:n=e.sent,a(t.data),l(n.map((function(e){return e.data})));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(o.jsxs)("div",{className:k.a.pokemons,children:[Object(o.jsx)("div",{className:k.a.gridForPok,children:m.filter((function(e){return!w||e.types.some((function(e){return e.type.name===w}))})).sort((function(e,t){return e.id>t.id?1:-1})).map((function(e,t){return Object(o.jsxs)("div",{className:k.a.pokemon,onClick:function(){f(e),y(!0)},children:[Object(o.jsx)("img",{style:{maxWidth:"100%"},src:"https://pokeres.bastionbot.org/images/pokemon/".concat(e.id,".png/"),alt:"Error with showing pokemon"},e.index),Object(o.jsxs)("div",{className:k.a.pokeName,children:[" ",e.name]},e.index),Object(o.jsxs)("div",{className:k.a.typesBox,children:[" ",e.types&&e.types.map((function(e,t){return Object(o.jsx)("span",{onClick:function(){return t=e.type.name,void S(t);var t},className:[k.a.type,k.a[e.type.name]].join(" "),children:"".concat(e.type.name+" ")},e.index)}))]},e.index)]},e.index)}))}),Object(o.jsx)("button",{className:k.a.pokemonsButton,onClick:function(){return B.apply(this,arguments)},children:"Load More"}),P?Object(o.jsx)(b,{currentPokemon:x}):null]})}var g=function(){return Object(o.jsxs)("div",{className:"app-wrapper",style:{maxWidth:"1200px",margin:"0 auto",padding:"0 15px"},children:[Object(o.jsx)("header",{className:"header",children:" Pokedex"}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(O,{})})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),o(e),s(e),a(e),c(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),P()},9:function(e,t,n){e.exports={item:"Pokemon_item__e2UGp",pokeName:"Pokemon_pokeName__39B4B"}}},[[48,1,2]]]);
//# sourceMappingURL=main.8ccce372.chunk.js.map