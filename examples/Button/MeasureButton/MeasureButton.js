!function(e){function t(t){for(var a,u,o=t[0],s=t[1],p=t[2],c=0,f=[];c<o.length;c++)u=o[c],r[u]&&f.push(r[u][0]),r[u]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(i&&i(t);f.length;)f.shift()();return l.push.apply(l,p||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(l.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={27:0},l=[];function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var p=0;p<o.length;p++)t(o[p]);var i=s;l.push([470,1,0]),n()}({470:function(e,t,n){"use strict";var a=c(n(2)),r=n(16),l=c(n(40)),u=c(n(51)),o=c(n(48)),s=c(n(64)),p=c(n(19)),i=n(36);function c(e){return e&&e.__esModule?e:{default:e}}var f=new l.default({layers:[new o.default({name:"OSM",source:new s.default})],view:new u.default({center:p.default.fromLonLat([37.4057,8.81566]),zoom:4})});(0,r.render)(a.default.createElement("div",null,a.default.createElement("div",{id:"map",style:{height:"400px"}}),a.default.createElement("div",{className:"example-block"},a.default.createElement("span",null,"Select a measure type:"),a.default.createElement(i.ToggleGroup,null,a.default.createElement(i.MeasureButton,{name:"line",map:f,measureType:"line"},"Distance"),a.default.createElement(i.MeasureButton,{name:"steps",map:f,measureType:"line",showMeasureInfoOnClickedPoints:!0},"Distance with step labels"),a.default.createElement(i.MeasureButton,{name:"multi",map:f,measureType:"line",multipleDrawing:!0},"Distance with multiple drawing"),a.default.createElement(i.MeasureButton,{name:"poly",map:f,measureType:"polygon"},"Area"),a.default.createElement(i.MeasureButton,{name:"angle",map:f,measureType:"angle"},"Angle")))),document.getElementById("exampleContainer"),function(){f.setTarget("map")})}});