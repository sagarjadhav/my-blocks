!function(){"use strict";var e,n={816:function(){var e=window.wp.blocks,n=window.wp.element;const{Path:r,SVG:t}=wp.components;var o=(0,n.createElement)(t,{className:"components-ainoblocks-svg","aria-hidden":!0,role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,n.createElement)(r,{fill:"#4caeab",d:"M0 8h16v11h-11.72l-4.28 4z"}),(0,n.createElement)(r,{fill:"#7bd9d6",d:"M24 1h-16v11h11.72l4.28 4z"}),(0,n.createElement)(r,{fill:"#216f6d",d:"M8 8h8v4h-8v-4z"})),c=window.wp.blockEditor,l=JSON.parse('{"u2":"create-block/accordion"}');(0,e.registerBlockType)(l.u2,{icon:o,edit:function(){return(0,n.createElement)("div",(0,c.useBlockProps)({className:"accordion"}),(0,n.createElement)(c.InnerBlocks,{allowedBlocks:["create-block/accordion-item"],template:[["create-block/accordion-item"]],templateLock:!1}))},save:function(){return(0,n.createElement)("div",c.useBlockProps.save({className:"accordion"}),(0,n.createElement)(c.InnerBlocks.Content,null))}})}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var c=r[e]={exports:{}};return n[e](c,c.exports,t),c.exports}t.m=n,e=[],t.O=function(n,r,o,c){if(!r){var l=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],c=e[u][2];for(var i=!0,a=0;a<r.length;a++)(!1&c||l>=c)&&Object.keys(t.O).every((function(e){return t.O[e](r[a])}))?r.splice(a--,1):(i=!1,c<l&&(l=c));if(i){e.splice(u--,1);var s=o();void 0!==s&&(n=s)}}return n}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[r,o,c]},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={166:0,82:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,c,l=r[0],i=r[1],a=r[2],s=0;if(l.some((function(n){return 0!==e[n]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(a)var u=a(t)}for(n&&n(r);s<l.length;s++)c=l[s],t.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return t.O(u)},r=self.webpackChunkmy_blocks=self.webpackChunkmy_blocks||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var o=t.O(void 0,[82],(function(){return t(816)}));o=t.O(o)}();