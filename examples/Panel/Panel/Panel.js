!function(e){function t(t){for(var n,o,i=t[0],p=t[1],s=t[2],u=0,d=[];u<i.length;u++)o=i[u],r[o]&&d.push(r[o][0]),r[o]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);for(c&&c(t);d.length;)d.shift()();return a.push.apply(a,s||[]),l()}function l(){for(var e,t=0;t<a.length;t++){for(var l=a[t],n=!0,i=1;i<l.length;i++){var p=l[i];0!==r[p]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=l[0]))}return e}var n={},r={9:0},a=[];function o(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=n,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],p=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var c=p;a.push([446,1,0]),l()}({446:function(e,t,l){"use strict";var n,r=l(2),a=(n=r)&&n.__esModule?n:{default:n},o=l(17),i=l(42);(0,o.render)(a.default.createElement("div",{style:{height:"500px"}},a.default.createElement("div",{className:"example-block"},a.default.createElement("span",null,"Panels:"),a.default.createElement(i.Panel,{x:0,y:20,title:"Children"},a.default.createElement("div",{style:{padding:"5px"}},"Im a div but i can be any node.")),a.default.createElement(i.Panel,{x:250,y:20,title:"Collapsible",collapsible:!0},a.default.createElement("div",{style:{padding:"5px"}},"Content")),a.default.createElement(i.Panel,{x:420,y:20,width:160,collapsible:!0,title:"Tooltip",collapseTooltip:"Einklappen"},a.default.createElement("div",{style:{padding:"5px"}},"You can set the tooltip for the collapse icon with the prop `collapseTooltip`.")),a.default.createElement(i.Panel,{x:700,y:20,title:"resizeopts (right & bottom)",resizeOpts:{bottom:!0,bottomLeft:!1,bottomRight:!0,left:!1,right:!0,top:!1,topLeft:!1,topRight:!1}},a.default.createElement("img",{src:"http://www.koeln.de/files/images/Karnevalstrikot_Spieler_270.jpg"})),a.default.createElement(i.Panel,{x:1e3,y:20,title:"resizeopts={true}",resizeOpts:!0},a.default.createElement("img",{src:"http://www.koeln.de/files/images/Karnevalstrikot_Spieler_270.jpg"})),a.default.createElement(i.Panel,{x:0,y:220,title:"Intial size (673 * 134)",resizeOpts:!0,width:673,height:134}))),document.getElementById("exampleContainer"))}});