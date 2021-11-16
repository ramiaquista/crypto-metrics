(this["webpackJsonpcovid-metrics"]=this["webpackJsonpcovid-metrics"]||[]).push([[0],{89:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(14),s=c.n(r),i=c(100),l=c(102),o=c(99),j=c(30),d=c(26),b=c(6),u=c(41),h=c(57),m=c.n(h),p=c(58),O=c(28),x=c.n(O),f=c(35),v=c(36),y=c.n(v),g="FETCH_COINS_DATA",C=[],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type===g?t.payload:e},N="FETCH_GLOBAL_DATA",S=[],w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return t.type===N?t.payload:e},I=Object(u.b)({globalCryptoReducer:w,coinsReducer:k}),B=Object(u.c)(I,Object(u.a)(m.a,p.a)),_=c(8),T=c(98),U=c(101),A=c(103),L=c.p+"static/media/crypto.e9cd8bc9.png",M=(c(89),c(1)),R=function(e){var t=e.id,c=e.name,a=e.symbol,n=e.priceUsd,r=e.priceBtc,s=e.mC,i=e.tSp,l=e.rank,o=Object(b.f)(),j=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return Object(M.jsx)(A.a.Item,{onClick:function(){o("details",{state:{id:t,name:c,symbol:a,priceUsd:n,priceBtc:r,mC:s,tSp:i,rank:l}})},"data-testid":"list-group-item",children:Object(M.jsxs)("div",{className:"d-flex",id:"data-container",children:[Object(M.jsxs)("div",{className:"bottom-data d-flex",children:[Object(M.jsx)("img",{src:L,alt:"eth",className:"eth-icon"}),Object(M.jsx)("i",{className:"far fa-arrow-alt-circle-right"})]}),Object(M.jsx)("h3",{children:c.toUpperCase()}),Object(M.jsxs)("p",{children:[" ( ",a," ) "]}),Object(M.jsx)("p",{children:j.format(n)})]})},t)},D=c.p+"static/media/blockchain.886e8c36.png",F=(c(91),function(e){var t=e.coinsCount,c=e.activeMarkets,a=e.volumeChange;return Object(M.jsxs)("div",{className:"global-data-container d-flex","data-testid":"global-crypto-data-container",children:[Object(M.jsx)("div",{className:"d1",children:Object(M.jsx)("img",{src:D,alt:"blockchain",className:"blockchain-icon"})}),Object(M.jsxs)("div",{className:"d2",children:[Object(M.jsx)("h2",{children:"GLOBAL STATS "}),Object(M.jsxs)("p",{children:["Total coins on market: ",t]}),Object(M.jsxs)("p",{children:["Total active markets: ",c]}),Object(M.jsxs)("p",{children:["Volume of change: ",a]})]})]})}),E=function(){var e=Object(j.c)((function(e){return e})),t=Object(j.b)();Object(a.useEffect)((function(){0===e.coinsReducer.length&&0===e.globalCryptoReducer.length&&(t(function(){var e=Object(f.a)(x.a.mark((function e(t){var c,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://api.coinlore.net/api/tickers/");case 2:c=e.sent,a=c.data.data.map((function(e){return{id:e.id,name:e.name,symbol:e.symbol,priceUsd:e.price_usd,priceBtc:e.price_btc,marketCap:e.market_cap_usd,totalSupply:e.tsupply,rank:e.rank}})),t({type:g,payload:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t(function(){var e=Object(f.a)(x.a.mark((function e(t){var c,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://api.coinlore.net/api/global/");case 2:c=e.sent,a=c.data.map((function(e){return{coinsCount:e.coins_count,activeMarkets:e.active_markets,totalMcap:e.total_mcap,totalVolume:e.total_volume,volumeChange:e.volume_change}})),t({type:N,payload:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[]);var c=e.coinsReducer,n=e.globalCryptoReducer,r=Object(a.useState)(""),s=Object(_.a)(r,2),i=s[0],l=s[1],o=c.filter((function(e){return""===i||e.name.toLowerCase().includes(i)}));return Object(M.jsxs)(T.a,{children:[n.map((function(e){return Object(M.jsx)(F,{coinsCount:e.coinsCount,activeMarkets:e.activeMarkets,volumeChange:e.volumeChange},e.coinsCount)})),Object(M.jsx)(U.a.Control,{value:i,onInput:function(e){return l(e.target.value)},type:"text",required:!0,placeholder:"Search by Crypto name",id:"name-input"}),Object(M.jsx)("div",{id:"home-tag",children:Object(M.jsx)("p",{children:"MOST POPULAR COINS"})}),Object(M.jsx)(A.a,{"data-testid":"list-container",children:o.map((function(e){return Object(M.jsx)(R,{id:e.id,name:e.name,symbol:e.symbol,priceUsd:e.priceUsd,priceBtc:e.priceBtc,mC:e.marketCap,tSp:e.totalSupply,rank:e.rank},e.id)}))})]})},P=(c(92),function(){var e=Object(b.e)().state,t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return Object(M.jsxs)("div",{className:"full-details-container d-flex",children:[Object(M.jsxs)("div",{className:"title-container",children:[Object(M.jsx)("img",{src:L,alt:"eth",id:"eth-logo"}),Object(M.jsxs)("div",{className:"alias",children:[Object(M.jsx)("h2",{children:e.name}),Object(M.jsxs)("h3",{children:[" ( ",e.symbol," ) "]})]})]}),Object(M.jsx)("div",{id:"detail-tag",children:Object(M.jsxs)("h4",{children:[e.name," Data "]})}),Object(M.jsxs)(A.a,{className:"data-container",children:[Object(M.jsx)(A.a.Item,{className:"row",children:Object(M.jsxs)("h3",{children:["Full-Name: ",e.name]})}),Object(M.jsx)(A.a.Item,{className:"row",children:Object(M.jsxs)("h3",{children:["Symbol: ",e.symbol]})}),Object(M.jsx)(A.a.Item,{className:"row",children:Object(M.jsxs)("h3",{children:["Price: ",t.format(e.priceUsd)]})}),Object(M.jsx)(A.a.Item,{className:"row",children:Object(M.jsxs)("h3",{children:["BTC Price: ( ",e.priceBtc," ) BTC"]})}),Object(M.jsx)(A.a.Item,{className:"row",children:Object(M.jsxs)("h3",{children:["Marketcap: ",t.format(e.mC)]})}),Object(M.jsx)(A.a.Item,{className:"row",children:Object(M.jsxs)("h3",{children:["Total Supply: ",e.tSp]})}),Object(M.jsx)(A.a.Item,{className:"row",children:Object(M.jsxs)("h3",{children:["Rank: ",e.rank]})})]})]})}),G=(c(93),function(){return Object(M.jsx)(j.a,{store:B,children:Object(M.jsxs)(d.a,{children:[Object(M.jsx)("header",{children:Object(M.jsxs)(i.a,{bg:"light",variant:"light",children:[Object(M.jsx)(l.a.Link,{as:d.b,to:"/",children:Object(M.jsx)(o.a,{children:Object(M.jsx)("i",{className:"fas fa-arrow-left"})})}),Object(M.jsx)(l.a.Link,{as:d.b,to:"/",children:Object(M.jsx)(i.a.Brand,{children:"Crypto Currencies"})}),Object(M.jsx)(i.a.Brand,{children:"2021"})]})}),Object(M.jsxs)(b.c,{children:[Object(M.jsx)(b.a,{path:"/",element:Object(M.jsx)(E,{})}),Object(M.jsx)(b.a,{path:"/details",element:Object(M.jsx)(P,{})})]})]})})});s.a.render(Object(M.jsx)(n.a.StrictMode,{children:Object(M.jsx)(G,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.c7f0a84d.chunk.js.map