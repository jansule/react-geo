!function(e){function t(t){for(var n,o,u=t[0],i=t[1],c=t[2],f=0,p=[];f<u.length;f++)o=u[f],a[o]&&p.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);p.length;)p.shift()();return r.push.apply(r,c||[]),l()}function l(){for(var e,t=0;t<r.length;t++){for(var l=r[t],n=!0,u=1;u<l.length;u++){var i=l[u];0!==a[i]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=l[0]))}return e}var n={},a={9:0},r=[];function o(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=n,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=i;r.push([450,1,0]),l()}({450:function(e,t,l){"use strict";var n,a=l(2),r=(n=a)&&n.__esModule?n:{default:n},o=l(16),u=l(36);(0,o.render)(r.default.createElement("div",null,r.default.createElement("div",{className:"example-block"},r.default.createElement("span",null,"Just a Titlebar:"),r.default.createElement(u.Titlebar,null)),r.default.createElement("div",{className:"example-block"},r.default.createElement("span",null,"A Titlebar with a title:"),r.default.createElement(u.Titlebar,null,"Title")),r.default.createElement("div",{className:"example-block"},r.default.createElement("span",null,"A Titlebar with a title and tools"),r.default.createElement(u.Titlebar,{tools:[r.default.createElement(u.SimpleButton,{icon:"globe",tooltip:"globe-tool",key:"globe-tool",size:"small"})]},"A Titlebar with a title and tools"))),document.getElementById("exampleContainer"))}});