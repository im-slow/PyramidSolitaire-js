!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=4)}([function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",r=e[3];if(!r)return i;if(t&&"function"==typeof btoa){var n=(d=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(d)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(a," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[i].concat(o).concat([n]).join("\n")}var d,s,a;return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,r){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(r)for(var o=0;o<this.length;o++){var d=this[o][0];null!=d&&(n[d]=!0)}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);r&&n[a[0]]||(i&&(a[2]?a[2]="".concat(i," and ").concat(a[2]):a[2]=i),t.push(a))}},t}},function(e,t,i){var r=i(2),n=i(3);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};r(n,o);e.exports=n.locals||{}},function(e,t,i){"use strict";var r,n=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),d=[];function s(e){for(var t=-1,i=0;i<d.length;i++)if(d[i].identifier===e){t=i;break}return t}function a(e,t){for(var i={},r=[],n=0;n<e.length;n++){var o=e[n],a=t.base?o[0]+t.base:o[0],c=i[a]||0,l="".concat(a," ").concat(c);i[a]=c+1;var u=s(l),h={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(d[u].references++,d[u].updater(h)):d.push({identifier:l,updater:b(h,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var n=i.nc;n&&(r.nonce=n)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var d=o(e.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function h(e,t,i,r){var n=i?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,n);else{var o=document.createTextNode(n),d=e.childNodes;d[t]&&e.removeChild(d[t]),d.length?e.insertBefore(o,d[t]):e.appendChild(o)}}function p(e,t,i){var r=i.css,n=i.media,o=i.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,g=0;function b(e,t){var i,r,n;if(t.singleton){var o=g++;i=f||(f=c(t)),r=h.bind(null,i,o,!1),n=h.bind(null,i,o,!0)}else i=c(t),r=p.bind(null,i,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var i=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<i.length;r++){var n=s(i[r]);d[n].references--}for(var o=a(e,t),c=0;c<i.length;c++){var l=s(i[c]);0===d[l].references&&(d[l].updater(),d.splice(l,1))}i=o}}}},function(e,t,i){"use strict";i.r(t);var r=i(0),n=i.n(r)()(!1);n.push([e.i,"",""]),t.default=n},function(e,t,i){"use strict";i.r(t);let r=function(e,t){for(let i in t)e.style[i]=t[i]},n=function(e){return e.substr(1)+e.substr(0,1)},o=function(e){let t=[1,3,6,10,15,21,28,40];for(var i=0;i<t.length;i++)if(e<=t[i])return i+1},d=function(e){let t=[1,3,6,10,15,21,28,40];switch(e){case 8:return[0,0];default:return[t[e-2]+1,t[e-1]]}};class s{constructor(e,t,i="bg",r=!0,n=!1,o=0,d=!1){let s;var c=this;let l=function(){s=document.createElement("div"),this.id=e,this.value=t,this.flip=r,this.focus=n,this.position=o,this.removed=d,s.setAttribute("id",e),s.setAttribute("value",t),this.setStyle(s,a.card),this.setStyle(s,{backgroundImage:"url('./src/images/"+i+".png')"}),s.addEventListener("mouseover",e=>{e.target===s&&!0!==this.flip&&this.setStyle(s,a.mouseover)}),s.addEventListener("mouseout",e=>{e.target===s&&!0!==this.focus&&!0!==this.flip&&this.setStyle(s,a.mouseout)}),s.addEventListener("click",e=>{if(e.target!==s||!0===s.flip)return;e.stopPropagation();let t=new CustomEvent("clickedCard",{bubbles:!0,detail:c});s.dispatchEvent(t)})}.bind(this);this.getCard=function(){return s},this.attach=function(e){e.appendChild(s)},this.detach=function(){s.parentElement.removeChild(s)},this.setHidden=function(e){this.setStyle(e,a.hidden)},this.setNoBorder=function(e){this.setStyle(e,a.no_border)},this.setBorder=function(e){this.setStyle(e,a.border)},this.handleEvent=function(e,t){s.addEventListener(e,t.bind(null,c))},l()}}s.prototype.setStyle=r;const a={card:{height:"113px",width:"65px",display:"inline-block",marginBottom:"-50px",marginLeft:"5px",marginRight:"5px",borderStyle:"solid",borderColor:"#d1d1d1",borderWidth:"2px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius:"12px",position:"relative",verticalAlign:"middle",textAlign:"center"},mouseover:{boxShadow:"0px 0px 2px 2px rgba(197,239,247,1)"},mouseout:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},no_border:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderColor:"#d1d1d1"},border:{borderColor:"#19b5fe"},hidden:{visibility:"hidden"}};class c{constructor(e){this.sidebar=e,this.deck=document.createElement("div"),this.side=document.createElement("div"),this.init(),this.side.addEventListener("click",e=>{e.stopPropagation();let t=new Event("clickedSideDeck");this.side.dispatchEvent(t)}),this.side.addEventListener("mouseover",e=>{e.target===this.side&&r(this.side,l.mouseover)}),this.side.addEventListener("mouseout",e=>{e.target===this.side&&r(this.side,l.mouseout)}),this.deck.addEventListener("click",e=>{e.stopPropagation();let t=new Event("clickedCardDeck",{bubbles:!0});this.deck.dispatchEvent(t)}),this.side.addEventListener("click",e=>{e.stopPropagation();let t=new Event("clickedCardSide",{bubbles:!0});this.side.dispatchEvent(t)})}init(){this.side.setAttribute("id","side"),this.deck.setAttribute("id","deck"),r(this.deck,l.card),r(this.side,l.card),r(this.deck,{backgroundImage:"url('./src/images/bg.png')"}),this.sidebar.appendChild(this.side),this.sidebar.appendChild(this.deck)}getSide(){return this.side}getDeck(){return this.deck}}c.prototype.setStyle=r();const l={card:{height:"113px",width:"65px",display:"inline-block",marginBottom:"-50px",marginLeft:"5px",marginRight:"5px",borderStyle:"solid",borderColor:"#d1d1d1",borderWidth:"2px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius:"12px",position:"relative",verticalAlign:"middle",textAlign:"center"},mouseover:{boxShadow:"0px 0px 2px 2px rgba(197,239,247,1)"},mouseout:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},no_border:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderColor:"#d1d1d1"},border:{borderColor:"#19b5fe"},hidden:{visibility:"hidden"}};class u{constructor(e,t){this.deck=[],this.hand=[],this.sideHand=[],this.clickedCard=0,this.content=e,this.sidebar=t,this.sidebar.addEventListener("clickedCardDeck",e=>{if(0===this.hand.length)return;this.sideHand.push(this.hand.pop());let t=this.sideHand.length;if(0===t)return;let i=n(this.sideHand[t-1].id);r(this.sidebar.childNodes[0],{backgroundImage:"url('./src/images/"+i+".png')"}),0===this.hand.length&&r(this.sidebar.childNodes[1],{backgroundImage:"none"})}),this.sidebar.addEventListener("clickedCardSide",e=>{let t=this.sideHand.length;0!==t&&this.clickedCard!==this.sideHand[t-1]&&(0===this.clickedCard&&r(this.sidebar.childNodes[0],h.border),this.cardEvent(this.sideHand[t-1]))}),this.content.addEventListener("clickedCard",e=>{this.cardEvent(e.detail)})}newGame(){let e=new p(this.content);new c(this.sidebar);e.newDeck(),e.shuffle(),this.deck=e.list.slice(0,28),this.hand=e.list.slice(28,40)}generateCard(e){let t=0;for(var i=0;i<6;i++){for(var o=0;o<i+1;o++){let e=this.deck[t];e.position=++t,this.appendToPyramid(e)}let r=document.createElement("br");e.appendChild(r)}for(o=0;o<7;o++){let e=this.deck[t];e.flip=!1,e.position=++t,this.appendToPyramid(e);let i=n(e.id);r(e.getCard(),{backgroundImage:"url('./src/images/"+i+".png')"})}for(o=0;o<12;o++){let e=this.hand[o];if(0===o){e.flip=!0;let t=n(e.id);r(e.getCard(),{backgroundImage:"url('./src/images/"+t+".png')"})}e.flip=!1,e.position=++t}}appendToPyramid(e){e.attach(this.content)}appendToSidebar(e){e.attach(this.sidebar)}getHand(){return this.sidebar.childNodes[1]}getSideHand(){return this.sidebar.childNodes[0]}cardEvent(e){if(!0===e.flip)return;if(!0===e.focus)return this.clickedCard=0,e.focus=!1,void e.setNoBorder(e.getCard());let t=o(e.position),i=d(t-1),r=d(t);if(console.log("sup",r),console.log("inf",i),0===this.clickedCard)10===e.value?(e.setHidden(e.getCard()),this.checkParent(i,r),e.removed=!0):(e.focus=!0,e.setBorder(e.getCard()),this.clickedCard=e);else{if(this.clickedCard.value+e.value===10){e.setHidden(e.getCard()),this.clickedCard.setHidden(this.clickedCard.getCard()),this.clickedCard.removed=!0,e.removed=!0;let t=o(this.clickedCard.position),n=d(t-1),s=d(t);this.checkParent(n,s),this.checkParent(i,r)}else e.focus=!1,this.clickedCard.focus=!1,e.setNoBorder(e.getCard()),this.clickedCard.setNoBorder(this.clickedCard.getCard());this.clickedCard=0}}checkParent(e,t){if(0===t[0]){this.sideHand.pop();let e=this.sideHand.length;if(0!==e){let t=n(this.sideHand[e-1].id);r(this.sidebar.childNodes[0],{backgroundImage:"url('./src/images/"+t+".png')"})}else r(this.sidebar.childNodes[0],{backgroundImage:none});return}let i=this.deck.filter((function(t){return t.position<=e[1]&&t.position>=e[0]}));console.log(i.length);let o=this.deck.filter((function(e){return e.position<=t[1]&&e.position>=t[0]}));for(var d=0;d<i.length;d++)if(o[d].removed&&o[d+1].removed){i[d].flip=!1;let e=n(i[d].id);r(i[d].getCard(),{backgroundImage:"url('./src/images/"+e+".png')"})}}}const h={no_border:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderColor:"#d1d1d1"},border:{borderColor:"#19b5fe"}};class p{constructor(){this.list=[]}newDeck(){let e=["b","c","d","s"],t=e.length;for(var i=0;i<t;i++)for(var r=1;r<=10;r++)this.list.push(new s(e[i]+r,r))}shuffle(){for(let e=this.list.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[this.list[e],this.list[t]]=[this.list[t],this.list[e]]}return this.list}}i(1);{let e=function(){let e=document.getElementById("root");r(e,f.context);let t=document.createElement("sidebar");r(t,f.sidebar),e.appendChild(t);let i=document.createElement("section");r(i,f.content),e.appendChild(i);let n=new u(i,t);n.newGame(),n.generateCard(i)};window.addEventListener("load",e,!1)}const f={context:{position:"fixed",top:0,left:0,right:0,bottom:0,minHeight:"360px",minWidth:"740px"},sidebar:{position:"absolute",top:"80%",right:0,left:0,bottom:0,backgroundImage:"url('./src/images/sidebar.png')",padding:"15px",textAlign:"center",vspace:100},content:{position:"absolute",top:0,right:0,left:0,bottom:"20%",background:"url('./src/images/green_felt.jpg')",padding:"15px",paddingTop:"3%",textAlign:"center"},card:{height:"113px",width:"65px",display:"inline-block",marginBottom:"-50px",marginLeft:"5px",marginRight:"5px",borderStyle:"solid",borderColor:"#d1d1d1",borderWidth:"2px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius:"12px",position:"relative",verticalAlign:"middle",textAlign:"center"}}}]);