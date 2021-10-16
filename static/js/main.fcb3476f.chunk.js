(this["webpackJsonptest-for-insart"]=this["webpackJsonptest-for-insart"]||[]).push([[0],{14:function(e,t,n){e.exports={converter:"CurrencyConverter_converter__gdxIa",btn:"CurrencyConverter_btn__1Kylh",icon:"CurrencyConverter_icon__1Lc5x"}},15:function(e,t,n){e.exports={footer:"Footer_footer__20diX",symbol:"Footer_symbol__3QIpz"}},20:function(e,t,n){e.exports={input:"Currency_input__2GI3z",select:"Currency_select__2ztKE"}},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(12),s=n.n(a),u=n(3),i=n(21),o=n(19),l=n.n(o),j=n(22),b=n(4),d=Object(b.c)("exchRates/getExchRates",function(){var e=Object(j.a)(l.a.mark((function e(t,n){var c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,fetch("".concat("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No exchange rates found"))}));case 4:return r=e.sent,e.abrupt("return",Array.isArray(r)?r:[]);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",c(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),h=function(e){return e.exchangeRates.exchRates},O=function(e){return e.exchangeRates.isLoading},f=function(e){return e.requestCounter.requestCounter},x=Object(b.b)("requestCounter/increase"),m=n(6),y=n.n(m),g=n(0),_=function(){var e=Object(u.c)(h),t=Object(u.c)(O);return Object(g.jsx)("div",{className:"container",children:t?Object(g.jsx)("h3",{className:"message",children:"Loading... "}):Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("table",{className:y.a.table,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{className:y.a.thead,children:[Object(g.jsx)("th",{className:y.a.thText,children:"Exchange rates"}),Object(g.jsx)("th",{className:y.a.thText,children:"Buy"}),Object(g.jsx)("th",{className:y.a.thText,children:"Sell"})]})}),Object(g.jsx)("tbody",{children:e.map((function(e){var t=e.ccy,n=e.base_ccy,c=e.buy,r=e.sale;return Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{className:y.a.tdText,children:[t," / ",n]}),Object(g.jsx)("td",{className:y.a.tdText,children:Math.round(100*c)/100}),Object(g.jsx)("td",{className:y.a.tdText,children:Math.round(100*r)/100})]},t)}))})]})})})},v=n(10),p=n(9),C=n(20),N=n.n(C),T=function(e){var t=e.selectedCurrency,n=e.onChangeCurrency,c=e.amount,r=e.onChangeAmount,a=Object(u.c)(h),s=Object(p.a)(new Set([].concat(Object(p.a)(a.map((function(e){return e.ccy}))),Object(p.a)(a.map((function(e){return e.base_ccy}))))));return Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{type:"number",className:N.a.input,value:c,onChange:r}),Object(g.jsx)("select",{value:t,onChange:n,className:N.a.select,children:s.map((function(e){return Object(g.jsx)("option",{value:e,children:e},e)}))})]})},E=n.p+"static/media/sprite.61e7aa6e.svg",R=n(14),S=n.n(R),B=function(){var e=Object(u.c)(h),t=Object(c.useState)(e[0].ccy),n=Object(v.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(e[0].base_ccy),i=Object(v.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)(e[0].buy),b=Object(v.a)(j,2),d=b[0],O=b[1],f=Object(c.useState)(1e3),x=Object(v.a)(f,2),m=x[0],y=x[1],_=Object(c.useState)(1e3*d),p=Object(v.a)(_,2),C=p[0],N=p[1];function R(){return 1*e.find((function(e){return"BTC"===e.ccy})).buy*e.find((function(e){return"USD"===e.ccy})).buy}return Object(c.useEffect)((function(){N(Math.round(m*d*100)/100)}),[d]),Object(c.useEffect)((function(){r!==o?"UAH"!==r||"BTC"!==o?"EUR"!==r&&"RUR"!==r||"BTC"!==o?"BTC"!==r||"UAH"!==o?"BTC"!==r||"EUR"!==o&&"RUR"!==o?"UAH"===r||"UAH"===o||"BTC"===r||"BTC"===o?e.forEach((function(e){r===e.ccy&&o===e.base_ccy&&O(e.buy),r===e.base_ccy&&o===e.ccy&&O(1/e.sale)})):O(function(){var t=e.find((function(e){return r===e.ccy})).buy,n=e.find((function(e){return o===e.ccy})).sale;return t/n}()):O(function(){var t=R(),n=e.find((function(e){return o===e.ccy})).sale;return t/n}()):O(R()):O(function(){var t=e.find((function(e){return r===e.ccy})).buy,n=e.find((function(e){return"USD"===e.ccy})).sale,c=e.find((function(e){return"BTC"===e.ccy})).sale;return t/n/c}()):O(function(){var t=e.find((function(e){return"USD"===e.ccy})).sale,n=e.find((function(e){return"BTC"===e.ccy})).sale;return 1/t/n}()):O(1)}),[r,o]),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:S.a.converter,children:[Object(g.jsx)(T,{selectedCurrency:r,onChangeCurrency:function(e){return a(e.target.value)},amount:m,onChangeAmount:function(e){y(Math.round(100*e.target.value)/100),N(Math.round(e.target.value*d*100)/100)}}),Object(g.jsx)("button",{className:S.a.btn,type:"button",onClick:function(){var e=r;a(o),l(e)},children:Object(g.jsx)("svg",{className:S.a.icon,children:Object(g.jsx)("use",{href:E+"#icontransfer"})})}),Object(g.jsx)(T,{selectedCurrency:o,onChangeCurrency:function(e){return l(e.target.value)},amount:C,onChangeAmount:function(e){N(Math.round(100*e.target.value)/100),y(Math.round(e.target.value/d*100)/100)}})]})})},A=n(15),H=n.n(A);function U(){return Object(g.jsx)("footer",{className:H.a.footer,children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("p",{className:H.a.text,children:[Object(g.jsx)("span",{className:H.a.symbol,children:"\xa9"})," 2021 All rights reserved"]})})})}var w=n(8),k=n.n(w),q=function(){return Object(g.jsx)("header",{className:k.a.header,children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:k.a.flexContainer,children:[Object(g.jsx)("svg",{className:k.a.icon,children:Object(g.jsx)("use",{href:E+"#iconcalculator"})}),Object(g.jsxs)("div",{className:k.a.logo,children:[Object(g.jsx)("p",{className:k.a.text,children:"Currency"}),Object(g.jsx)("p",{className:k.a.text,children:"Exchange"})]}),Object(g.jsx)("p",{className:k.a.date,children:(new Date).toLocaleDateString()})]})})})};function M(){var e=Object(u.b)(),t=Object(u.c)(h),n=Object(u.c)(f);return Object(c.useEffect)((function(){t.length>0||(e(d()),e(x()))}),[e]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(q,{}),5===n&&Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("div",{className:"body",children:Object(g.jsx)("h4",{className:"message",children:"You have exceeded the allowed number of requests, try using the service a little later"})})}),t.length>0&&n<5&&Object(g.jsxs)("div",{className:"body",children:[Object(g.jsx)(_,{})," ",Object(g.jsx)(B,{})]}),Object(g.jsx)(U,{})]})}var L,z,D=n(7),F=n(23),I=n.n(F),K=n(5),J=n(2),V=Object(b.d)(0,Object(K.a)({},x,(function(e,t){t.payload;return 5===e?1:e+=1}))),X=Object(J.b)({requestCounter:V}),Y=Object(b.d)([],Object(K.a)({},d.fulfilled,(function(e,t){return t.payload}))),G=Object(b.d)(!1,(L={},Object(K.a)(L,d.pending,(function(){return!0})),Object(K.a)(L,d.fulfilled,(function(){return!1})),Object(K.a)(L,d.rejected,(function(){return!1})),L)),P=Object(b.d)(null,(z={},Object(K.a)(z,d.pending,(function(){return null})),Object(K.a)(z,d.rejected,(function(e,t){return t.payload})),z)),Q=Object(J.b)({exchRates:Y,isLoading:G,error:P}),W=Object(p.a)(Object(b.e)({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}})),Z={key:"requestCounter",storage:I.a,whitelist:["requestCounter"]},$=Object(b.a)({reducer:{exchangeRates:Q,requestCounter:Object(D.g)(Z,X)},middleware:W,devTools:!1}),ee=Object(D.h)($);n(36);s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(i.a,{loading:null,persistor:ee,children:Object(g.jsx)(u.a,{store:$,children:Object(g.jsx)(M,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={table:"ExchangeTable_table__1sCud",thText:"ExchangeTable_thText__1j9LK",tdText:"ExchangeTable_tdText__3RKt5"}},8:function(e,t,n){e.exports={header:"Header_header__1hZro",flexContainer:"Header_flexContainer__2T-s9",logo:"Header_logo__HSCnC",text:"Header_text__28zE1",icon:"Header_icon__2VEX1",date:"Header_date__2YOgB"}}},[[37,1,2]]]);
//# sourceMappingURL=main.fcb3476f.chunk.js.map