(self["webpackChunk"]=self["webpackChunk"]||[]).push([[2152],{2224:function(){},27832:function(e,t,n){"use strict";n.r(t);var l=n(13378),r=n(3911),a=n(67294),c=n(18629);t["default"]=e=>{var t=e.hidden,n=(0,r.Z)(e,["hidden"]);return a.createElement(c.Z,(0,l.Z)({className:t?"__dumi_taro-hook-hidden":""},n))}},73602:function(e,t,n){"use strict";n.d(t,{m:function(){return l.m}});var l=n(67624);n(93142)},64992:function(e,t,n){"use strict";n.r(t);var l=n(67294),r=n(96089),a=n(27832),c=n(65659),i=n(4187),o=l.memo((e=>{var t=e.demos,n=t["pages-useevent"].component;return l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"useevent"},l.createElement(r.AnchorLink,{to:"#useevent","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useEvent"),l.createElement("p",null,"\u6d88\u606f\u673a\u5236"),l.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.createElement(r.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.createElement("p",null,"\u5f53\u9700\u8981\u5168\u5c40\u6d88\u606f\u673a\u5236\u65f6"),l.createElement("h2",{id:"api"},l.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(c.Z,{code:"const [\n  state,\n  {\n    dispatch,\n    setListener,\n    setListenerOnce,\n    removeListener,\n    emitEvent,\n    clearListener,\n  },\n] = useEvent(namespace: string);",lang:"jsx"}),l.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},l.createElement(r.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),l.createElement(i.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u8fd4\u56de\u503c"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"state"),l.createElement("td",null,"\u5f53\u524d\u6240\u6709\u4e8b\u4ef6\u540d\u79f0\u548c\u4e8b\u4ef6\u6620\u5c04"),l.createElement("td",null,l.createElement("code",null,"IState"))),l.createElement("tr",null,l.createElement("td",null,"dispatch"),l.createElement("td",null,"\u66b4\u9732\u526f\u4f5c\u7528\u65b9\u6cd5"),l.createElement("td",null,l.createElement("code",null,"Dispatch"))))),l.createElement("h3",{id:"\u65b9\u6cd5"},l.createElement(r.AnchorLink,{to:"#\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd5"),l.createElement(c.Z,{code:"// \u8bbe\u7f6e\u76d1\u542c\u652f\u6301\u540c\u65f6\u7ed1\u5b9a\u591a\u4e2a\u65b9\u6cd5\nsetListener(eventName: string, handler1: () => void, handler2: () => void, ...);\n// \u76d1\u542c\u4e00\u6b21\nsetListener(eventName: string, handler: () => void);\n// \u79fb\u9664\u76d1\u542c\nremoveListener(eventName: string, handler: () => void);\n// \u89e6\u53d1\u4e8b\u4ef6\nemitEvent(eventName: string, arg1: any, arg2?: any, ...)\n// \u6e05\u7a7a\u4e8b\u4ef6\u76d1\u542c\nclearListener(eventName?: string);",lang:"tsx"}),l.createElement("h3",{id:"istate"},l.createElement(r.AnchorLink,{to:"#istate","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"IState"),l.createElement(i.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u8fd4\u56de\u503c"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"eventQueue"),l.createElement("td",null,"\u6240\u6709\u4e8b\u4ef6\u540d\u79f0\u548c\u4e8b\u4ef6\u6620\u5c04"),l.createElement("td",null,l.createElement("code",null,"IEventQueue"))),l.createElement("tr",null,l.createElement("td",null,"eventNameQueue"),l.createElement("td",null,"\u6240\u6709\u4e8b\u4ef6\u540d\u79f0"),l.createElement("td",null,l.createElement("code",null," string[]"))))),l.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.createElement(r.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.createElement(a.default,t["pages-useevent"].previewerProps,l.createElement(n,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},l.createElement(r.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),l.createElement(i.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),l.createElement("th",{align:"center"},"H5"),l.createElement("th",{align:"center"},"ReactNative"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f")))))))}));t["default"]=e=>{var t=l.useContext(r.context),n=t.demos;return l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(o,{demos:n})}},4187:function(e,t,n){"use strict";var l=n(67294),r=n(97397),a=n.n(r);n(2224);function c(e,t){return d(e)||u(e,t)||o(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function u(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,a=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(a.push(l.value),t&&a.length===t)break}catch(o){i=!0,r=o}finally{try{c||null==n["return"]||n["return"]()}finally{if(i)throw r}}return a}}function d(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=(0,l.useRef)(),r=(0,l.useState)(!1),i=c(r,2),o=i[0],m=i[1],u=(0,l.useState)(!1),d=c(u,2),s=d[0],E=d[1];return(0,l.useEffect)((function(){var e=n.current,t=a()((function(){m(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.createElement("div",{className:"__dumi-default-table"},l.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":o||void 0,"data-right-folded":s||void 0},l.createElement("table",null,t)))};t["Z"]=s}}]);