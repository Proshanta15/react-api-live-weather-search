(this["webpackJsonpreact-weather-application"]=this["webpackJsonpreact-weather-application"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(5),s=a.n(n),r=a(3),i=a.n(r),j=a(6),l=a(4),h=(a(12),a(0)),u=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("Dhaka"),r=Object(l.a)(s,2),u=r[0],o=r[1];return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){var t,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://api.openweathermap.org/data/2.5/weather?q=".concat(u,"&units=metric&appid=69e20ac86db4f7a545b2d9bcb3c740f8"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,n(c.main);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"title",children:Object(h.jsx)("h1",{children:"Live Search Weather"})}),Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("div",{className:"inputData",children:Object(h.jsx)("input",{type:"search",value:u,className:"inputField",onChange:function(e){o(e.target.value)}})}),a?Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("h2",{className:"location",children:[Object(h.jsx)("i",{className:"fas fa-street-view"})," ",u]}),Object(h.jsxs)("h1",{className:"temp",children:[a.temp,"\xb0Cel"]}),Object(h.jsxs)("h3",{className:"tempmin_max",children:[" Min : ",a.temp_min,"\xb0Cel | Max :  ",a.temp_max,"\xb0Cel  "]})]})}):Object(h.jsx)("p",{className:"errorMsg",children:" No Data Found"})]})]})},o=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(u,{})})};a(14);s.a.render(Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(o,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9a990880.chunk.js.map