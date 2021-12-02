(self["webpackChunk"]=self["webpackChunk"]||[]).push([[2152],{27832:function(e,t,n){"use strict";n.r(t);var l=n(13378),a=n(3911),r=n(67294),c=n(67219);t["default"]=e=>{var t=e.hidden,n=(0,a.Z)(e,["hidden"]);return r.createElement(c.Z,(0,l.Z)({className:t?"__dumi_taro-hook-hidden":""},n))}},73602:function(e,t,n){"use strict";n.d(t,{m:function(){return l.m}});var l=n(67624);n(93142)},64992:function(e,t,n){"use strict";n.r(t);var l=n(67294),a=n(96089),r=n(27832),c=n(65659);t["default"]=e=>{var t=l.useContext(a.context),n=t.demos,m=l.memo(n["pages-useevent"].component);return l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"useevent"},l.createElement(a.AnchorLink,{to:"#useevent","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useEvent"),l.createElement("p",null,"\u6d88\u606f\u673a\u5236"),l.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.createElement(a.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.createElement("p",null,"\u5f53\u9700\u8981\u5168\u5c40\u6d88\u606f\u673a\u5236\u65f6"),l.createElement("h2",{id:"api"},l.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(c.Z,{code:"const [\n  state,\n  {\n    dispatch,\n    setListener,\n    setListenerOnce,\n    removeListener,\n    emitEvent,\n    clearListener,\n  },\n] = useEvent(namespace: string);",lang:"jsx"}),l.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u8fd4\u56de\u503c"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"state"),l.createElement("td",null,"\u5f53\u524d\u6240\u6709\u4e8b\u4ef6\u540d\u79f0\u548c\u4e8b\u4ef6\u6620\u5c04"),l.createElement("td",null,l.createElement("code",null,"IState"))),l.createElement("tr",null,l.createElement("td",null,"dispatch"),l.createElement("td",null,"\u66b4\u9732\u526f\u4f5c\u7528\u65b9\u6cd5"),l.createElement("td",null,l.createElement("code",null,"Dispatch"))))),l.createElement("h3",{id:"\u65b9\u6cd5"},l.createElement(a.AnchorLink,{to:"#\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd5"),l.createElement(c.Z,{code:"// \u8bbe\u7f6e\u76d1\u542c\u652f\u6301\u540c\u65f6\u7ed1\u5b9a\u591a\u4e2a\u65b9\u6cd5\nsetListener(eventName: string, handler1: () => void, handler2: () => void, ...);\n// \u76d1\u542c\u4e00\u6b21\nsetListener(eventName: string, handler: () => void);\n// \u79fb\u9664\u76d1\u542c\nremoveListener(eventName: string, handler: () => void);\n// \u89e6\u53d1\u4e8b\u4ef6\nemitEvent(eventName: string, arg1: any, arg2?: any, ...)\n// \u6e05\u7a7a\u4e8b\u4ef6\u76d1\u542c\nclearListener(eventName?: string);",lang:"tsx"}),l.createElement("h3",{id:"istate"},l.createElement(a.AnchorLink,{to:"#istate","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"IState"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u8fd4\u56de\u503c"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"eventQueue"),l.createElement("td",null,"\u6240\u6709\u4e8b\u4ef6\u540d\u79f0\u548c\u4e8b\u4ef6\u6620\u5c04"),l.createElement("td",null,l.createElement("code",null,"IEventQueue"))),l.createElement("tr",null,l.createElement("td",null,"eventNameQueue"),l.createElement("td",null,"\u6240\u6709\u4e8b\u4ef6\u540d\u79f0"),l.createElement("td",null,l.createElement("code",null," string[]"))))),l.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.createElement(r.default,n["pages-useevent"].previewerProps,l.createElement(m,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},l.createElement(a.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),l.createElement("th",{align:"center"},"H5"),l.createElement("th",{align:"center"},"ReactNative"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f")))))))}}}]);