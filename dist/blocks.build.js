!function(e){function t(l){if(n[l])return n[l].exports;var a=n[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var l=n(2),a=(n.n(l),n(3)),r=(n.n(a),wp.i18n.__),u=wp.blocks.registerBlockType,o=wp.editor.InspectorControls,p=wp.components,i=p.PanelBody,c=p.PanelRow,m=p.TextControl;u("nucloud/map-embed",{title:r("nuCloud Map Embed"),icon:"location-alt",category:"embed",keywords:[r("map"),r("nucloud"),r("embed")],attributes:{layer:{type:"string"},map_height:{default:500,type:"integer"},map_id:{default:5,type:"integer"},marker:{type:"integer"}},edit:function(e){var t=e.attributes,n=t.map_id,l=t.map_height,a=t.marker,u=t.layer,p=e.className,d=e.setAttributes;return[wp.element.createElement(o,null,wp.element.createElement(i,{title:r("Map Settings","nucloud"),initialOpen:!0},wp.element.createElement(c,null,wp.element.createElement(m,{label:r("Map ID","nucloud"),help:r("Enter the ID for the map you would like to embed","nucloud"),onChange:function(e){d({map_id:e})},value:n,type:"number"})),wp.element.createElement(c,null,wp.element.createElement(m,{label:r("Map Height","nucloud"),help:r("Enter the height of the embed in pixels","nucloud"),onChange:function(e){d({map_height:e})},value:l,type:"number"})),wp.element.createElement(c,null,wp.element.createElement(m,{label:r("Display Marker","nucloud"),help:r("Enter a marker ID to display a stop by default. (Overrides layers)","nucloud"),onChange:function(e){d({marker:e})},value:a,type:"number"})),wp.element.createElement(c,null,wp.element.createElement(m,{label:r("Display Layers","nucloud"),help:r("Enter a comma separated list of layer names to display them by default","nucloud"),onChange:function(e){d({layer:e})},value:u})))),wp.element.createElement("div",{className:p},wp.element.createElement("iframe",{src:"https://cdn-map1.nucloud.com/nucloudmap/index.html?map="+n+"&marker="+a+"&layer="+u,height:{map_height:l}}))]},save:function(e){return null}})},function(e,t){},function(e,t){}]);