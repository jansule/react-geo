!function(e){function r(r){for(var n,s,l=r[0],u=r[1],i=r[2],p=0,c=[];p<l.length;p++)s=l[p],a[s]&&c.push(a[s][0]),a[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(d&&d(r);c.length;)c.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,r=0;r<o.length;r++){for(var t=o[r],n=!0,l=1;l<t.length;l++){var u=t[l];0!==a[u]&&(n=!1)}n&&(o.splice(r--,1),e=s(s.s=t[0]))}return e}var n={},a={7:0},o=[];function s(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=n,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=r,l=l.slice();for(var i=0;i<l.length;i++)r(l[i]);var d=u;o.push([448,1,0]),t()}({448:function(e,r,t){"use strict";var n=d(t(2)),a=t(16),o=d(t(212)),s=d(t(48)),l=d(t(51)),u=d(t(40)),i=t(36);function d(e){return e&&e.__esModule?e:{default:e}}var p=new s.default({name:"Land/Water",source:new o.default({url:"https://geoserver.mundialis.de/geoserver/wms",params:{LAYERS:"1_8A1104",TILED:!0},serverType:"geoserver"})}),c=new s.default({name:"True Color Composite",source:new o.default({url:"https://geoserver.mundialis.de/geoserver/wms",params:{LAYERS:"1_040302",TILED:!0},serverType:"geoserver"})}),f=new s.default({name:"Color Infrared (vegetation)",source:new o.default({url:"https://geoserver.mundialis.de/geoserver/wms",params:{LAYERS:"1_080403",TILED:!0},serverType:"geoserver"})}),v=new s.default({name:"Atmospheric Penetration",source:new o.default({url:"https://geoserver.mundialis.de/geoserver/wms",params:{LAYERS:"1_12118A",TILED:!0},serverType:"geoserver"})}),m=new s.default({name:"Vegetation",source:new o.default({url:"https://geoserver.mundialis.de/geoserver/wms",params:{LAYERS:"1_118A04",TILED:!0},serverType:"geoserver"})}),g=new u.default({layers:[p,c,f,v,m],view:new l.default({center:[4100247.903296841,-456383.49866892234],zoom:13})});(0,a.render)(n.default.createElement("div",null,n.default.createElement("div",{id:"map",style:{height:"400px"}}),n.default.createElement("div",{className:"example-block"},n.default.createElement("span",null,"Move the slider to change the layer's opacity:"),n.default.createElement(i.MultiLayerSlider,{layers:[p,c,f,v,m]}))),document.getElementById("exampleContainer"),function(){g.setTarget("map")})}});