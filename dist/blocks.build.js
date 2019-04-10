!function(e){function t(l){if(n[l])return n[l].exports;var a=n[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var l=n(2),a=(n.n(l),n(3)),u=(n.n(a),wp.i18n.__),r=wp.blocks.registerBlockType,o=wp.editor.InspectorControls,m=wp.components,p=m.PanelBody,c=m.PanelRow,i=m.TextControl;r("nucloud/map-embed",{title:u("nuCloud Map Embed"),icon:"location-alt",category:"embed",keywords:[u("map"),u("nucloud"),u("embed")],attributes:{element_id:{default:null,type:"string"},layer:{default:null,type:"string"},map_height:{default:500,type:"number"},map_id:{default:5,type:"number"},marker:{default:null,type:"number"}},edit:function(e){var t=e.attributes,n=t.element_id,l=t.map_id,a=t.map_height,r=t.marker,m=t.layer,d=e.className,s=e.setAttributes;return[wp.element.createElement(o,null,wp.element.createElement(p,{title:u("Map Settings","nucloud"),initialOpen:!0},wp.element.createElement(c,null,wp.element.createElement(i,{label:u("Map ID","nucloud"),help:u("Enter the ID for the map you would like to embed","nucloud"),onChange:function(e){s({map_id:e})},value:l,type:"number"})),wp.element.createElement(c,null,wp.element.createElement(i,{label:u("Map Height","nucloud"),help:u("Enter the height of the embed in pixels","nucloud"),onChange:function(e){s({map_height:e})},value:a,type:"number"})),wp.element.createElement(c,null,wp.element.createElement(i,{label:u("Display Marker","nucloud"),help:u("Enter a marker ID to display a stop by default. (Overrides layers)","nucloud"),onChange:function(e){s({marker:e})},value:r,type:"number"})),wp.element.createElement(c,null,wp.element.createElement(i,{label:u("Display Layers","nucloud"),help:u("Enter a comma separated list of layer names to display them by default","nucloud"),onChange:function(e){s({layer:e})},value:m})),wp.element.createElement(c,null,wp.element.createElement(i,{label:u("Custom Element ID","nucloud"),help:u("Specify an ID to apply to the iframe that renders your map. Default: 'nucloud-map'","nucloud"),onChange:function(e){s({element_id:e})},value:n})))),wp.element.createElement("div",{className:d},wp.element.createElement("iframe",{src:"https://cdn-map1.nucloud.com/nucloudmap/index.html?map="+l+"&marker="+r+"&layer="+m,height:a}))]},save:function(e){return null}})},function(e,t){},function(e,t){}]);