"use strict";(self.webpackChunkKinopoisk=self.webpackChunkKinopoisk||[]).push([[860],{860:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(439),c=e(791),u=e(689),a=e(41),o={},s=e(184),i=function(n){var t=n.author,e=n.content;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("h4",{children:["Author: ",t]}),(0,s.jsx)("p",{className:o.p,children:e})]})},f=function(n){var t=n.reviews;return(0,s.jsx)("ul",{children:t.map((function(n){return(0,s.jsx)("li",{children:(0,s.jsx)(i,{author:n.author,content:n.content})},n.id)}))})},p=function(){var n=(0,u.UO)().id,t=(0,c.useState)([]),e=(0,r.Z)(t,2),o=e[0],i=e[1],p=(0,c.useState)(""),h=(0,r.Z)(p,2),v=h[0],d=h[1];return(0,c.useEffect)((function(){d("Loading..."),(0,a.Jh)(n).then((function(n){0===n.length?d("We don't have any reviews for this movie."):(d(""),i(n))})).catch((function(){return d("Something went wrong")}))}),[n]),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("p",{children:v}),(0,s.jsx)(f,{reviews:o})]})}},41:function(n,t,e){function r(n,t,e,r,c,u,a){try{var o=n[u](a),s=o.value}catch(i){return void e(i)}o.done?t(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,u){var a=n.apply(t,e);function o(n){r(a,c,u,o,s,"next",n)}function s(n){r(a,c,u,o,s,"throw",n)}o(void 0)}))}}e.d(t,{IQ:function(){return f},s_:function(){return i},XT:function(){return h},Jh:function(){return p},Hg:function(){return s}});var u=e(757),a=e.n(u),o="0a3a4e00d84de20a8f1b6dfc8a7cdfd5",s=function(){var n=c(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o,"&per_page=10&page=1"));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,console.log(e.results),n.abrupt("return",e.results);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=c(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=c(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.cast);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=c(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=c(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=860.99ee647d.chunk.js.map