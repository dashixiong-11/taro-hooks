(self["webpackChunk"]=self["webpackChunk"]||[]).push([[1463],{63465:function(){},69157:function(){},27832:function(e,t,n){"use strict";n.r(t);var l=n(13378),c=n(3911),o=n(67294),r=n(9790);t["default"]=e=>{var t=e.hidden,n=(0,c.Z)(e,["hidden"]);return o.createElement(r.Z,(0,l.Z)({className:t?"__dumi_taro-hook-hidden":""},n))}},74853:function(e,t,n){"use strict";n.r(t);var l=n(67294),c=n(96089),o=(n(27832),n(35713)),r=n(24758),a=n(65659);n(67563);t["default"]=e=>(l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement(o.Z,{type:"info"},"\u6574\u7406\u90e8\u5206\u5e38\u89c1\u95ee\u9898, \u5e2e\u52a9\u5feb\u901f\u89e3\u51b3\u95ee\u9898"),l.createElement("h3",{id:"1-useselectorquery-\u53cc\u7aef\u8868\u73b0\u4e0d\u4e00\u81f4"},l.createElement(c.AnchorLink,{to:"#1-useselectorquery-\u53cc\u7aef\u8868\u73b0\u4e0d\u4e00\u81f4","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"1. useSelectorQuery \u53cc\u7aef\u8868\u73b0\u4e0d\u4e00\u81f4"),l.createElement("p",null,"\u53d7\u9650\u4e8e",l.createElement("code",null,"taro"),". \u5c0f\u7a0b\u5e8f\u7aef\u7684",l.createElement("code",null,"NodeRef"),"\u9700\u8981\u5728",l.createElement("code",null,"useReady"),"\u6216\u8005",l.createElement("code",null,"onReady"),"\u4e2d\u624d\u80fd\u83b7\u53d6\u5230\u3002\u800c",l.createElement("code",null,"h5"),"\u7aef\u53ef\u4ee5\u76f4\u63a5\u5728",l.createElement("code",null,"useEffect"),"\u6216\u8005",l.createElement("code",null,"componentDidMount"),"\u4e2d\u83b7\u53d6\u5230\u3002\u6b64\u5916\uff0c\u90e8\u5206",l.createElement("code",null,"api"),"\u4e0d\u652f\u6301",l.createElement("code",null,"h5"),"\u7aef\u3002\u6bd4\u5982",l.createElement("code",null,"context"),"\u3002\u81ea\u7136\u5728",l.createElement("code",null,"getFields"),"\u4e2d\u8bbe\u7f6e\u4e86",l.createElement("code",null,"{","context: true","}"," h5"),"\u8fd4\u56de\u7ed3\u679c\u4e2d\u4e5f\u4e0d\u4f1a\u5b58\u5728",l.createElement("code",null,"context"),"\u3002\u4ee5\u6b64\u7c7b\u63a8\u3002"),l.createElement("h3",{id:"2-\u65e2\u7136\u5f88\u591aapi\u7b80\u5316\u589e\u52a0\u4e86\u76f4\u63a5\u7684\u65b9\u6cd5\u652f\u51fa\u4e3a\u4ec0\u4e48\u8fd8\u8981\u8fd4\u56de\u57fa\u7840\u5b9e\u4f8b"},l.createElement(c.AnchorLink,{to:"#2-\u65e2\u7136\u5f88\u591aapi\u7b80\u5316\u589e\u52a0\u4e86\u76f4\u63a5\u7684\u65b9\u6cd5\u652f\u51fa\u4e3a\u4ec0\u4e48\u8fd8\u8981\u8fd4\u56de\u57fa\u7840\u5b9e\u4f8b","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"2. \u65e2\u7136\u5f88\u591a",l.createElement("code",null,"api"),"\u7b80\u5316\u589e\u52a0\u4e86\u76f4\u63a5\u7684\u65b9\u6cd5\u652f\u51fa\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u8981\u8fd4\u56de\u57fa\u7840\u5b9e\u4f8b\uff1f"),l.createElement("p",null,"\u8fd8\u662f\u6cbf\u7528\u4e0a\u9762\u7684",l.createElement("code",null,"useSelectorQuery"),"\u6765\u8bf4\u660e\u3002 \u867d\u7136",l.createElement("code",null,"taro-hooks"),"\u63d0\u4f9b\u4e86\u5927\u91cf\u7684\u65b9\u6cd5\u7b80\u5199\u4ee5\u53ca",l.createElement("code",null,"Promise"),"\u5316, \u4f46\u662f\u8986\u76d6\u4e0d\u5230\u591a\u6837\u5316\u7684\u7ec4\u5408\u5f00\u53d1\u3002\u6545\u4f1a\u5c06\u5b9e\u4f8b\u8fd4\u56de\u51fa\u6765\u3002\u6bd4\u5982: ",l.createElement("code",null,"useSelectorQuery"),"\u7684\u94fe\u5f0f\u8c03\u7528\u3002"),l.createElement(a.Z,{code:"const [query] = useSelectorQuery();\nquery\n  .selectViewport()\n  .scrollOffset((res) => console.log(res))\n  .exec();",lang:"javascript"}),l.createElement("h3",{id:"3-\u54ea\u4e9b\u7248\u672c\u7684taro\u53ef\u4ee5\u4f7f\u7528"},l.createElement(c.AnchorLink,{to:"#3-\u54ea\u4e9b\u7248\u672c\u7684taro\u53ef\u4ee5\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"3. \u54ea\u4e9b\u7248\u672c\u7684",l.createElement("code",null,"taro"),"\u53ef\u4ee5\u4f7f\u7528\uff1f"),l.createElement("p",null,"\u7406\u8bba\u652f\u6301",l.createElement("code",null,"react hooks"),"\u4ee5\u53ca",l.createElement("code",null,"taro hooks"),"\u7248\u672c(\u5373",l.createElement("code",null,"3.x"),")\u7684",l.createElement("code",null,"taro"),"\u5747\u53ef\u4f7f\u7528\u672c\u5e93."),l.createElement("h3",{id:"4-error_multiple_callback\u95ee\u9898"},l.createElement(c.AnchorLink,{to:"#4-error_multiple_callback\u95ee\u9898","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"4. ",l.createElement("code",null,"ERROR_MULTIPLE_CALLBACK"),"\u95ee\u9898"),l.createElement("p",null,"\u95ee\u9898\u8868\u73b0\u4e3a: \u9875\u9762\u70b9\u51fb\u8df3\u8f6c\u5bfc\u81f4\u7ec8\u7aef\u62a5\u9519\u800c\u7ec8\u7aef\u7a0b\u5e8f. \u539f\u56e0\u4e3a",l.createElement("code",null,"node https"),"\u6a21\u5757\u5bfc\u81f4\u7684\u95ee\u9898. \u7531\u4e8e\u6587\u6863\u4e2d\u6709\u90e8\u5206",l.createElement("code",null,"mock api"),"\u662f",l.createElement("code",null,"https"),"\u8bf7\u6c42. \u6545\u5f00\u53d1\u670d\u52a1\u5668\u542f\u52a8\u9ed8\u8ba4\u5f00\u542f\u4e86",l.createElement("code",null,"https"),"\u529f\u80fd. \u82e5\u60a8\u5728",l.createElement("code",null,"fork"),"\u672c\u5e93\u540e\u542f\u52a8\u9047\u5230\u6b64\u95ee\u9898\u53ef\u5c1d\u8bd5\u5c06",l.createElement("code",null,"node"),"\u5347\u81f3",l.createElement("code",null,"14+"),"\u7248\u672c\u6216\u5c06",l.createElement(c.Link,{to:"https://github.com/innocces/taro-hooks/blob/main/.umirc.ts#L18"},".umirc.ts"),"\u4e2d",l.createElement("code",null,"https"),"\u9009\u9879\u53bb\u6389\u5373\u53ef. \u76f8\u5173",l.createElement(c.Link,{to:"https://github.com/umijs/umi/issues/5901"},"issue")),l.createElement("h3",{id:"5-\u5982\u4f55\u5728taro-2x\u4f7f\u7528taro-hooks"},l.createElement(c.AnchorLink,{to:"#5-\u5982\u4f55\u5728taro-2x\u4f7f\u7528taro-hooks","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"5. \u5982\u4f55\u5728",l.createElement("code",null,"taro 2.x"),"\u4f7f\u7528",l.createElement("code",null,"taro-hooks"),"?"),l.createElement("p",null,"\u539f\u5219\u4e0a\u4e0d\u63a8\u8350\u5728\u5c0f\u4e8e",l.createElement("code",null,"3.x"),"\u7684",l.createElement("code",null,"taro"),"\u9879\u76ee\u4e2d\u4f7f\u7528",l.createElement("code",null,"taro-hooks"),". \u4f46\u82e5\u6709\u5e0c\u671b\u53ef\u4ee5\u4f7f\u7528\u7684, \u8fd8\u662f\u63d0\u4f9b\u4e86\u63a5\u5165\u65b9\u5f0f, \u4f46\u662f\u5e76\u4e0d\u662f\u5b8c\u5168\u53ef\u7528, \u90e8\u5206",l.createElement("code",null,"hook"),"\u8fd8\u662f\u53d7\u5230\u9650\u5236.",l.createElement("br",null),"\u5177\u4f53\u4f7f\u7528\u65b9\u5f0f\u53ef\u53c2\u8003",l.createElement(c.Link,{to:"https://github.com/taro-hooks/taro-hooks-demo-for-taro2.x"},"taro-hooks-demo-for-taro2.x")),l.createElement("h3",{id:"6-\u4e3a\u4ec0\u4e48\u6709\u4e9b\u7c7b\u578b\u4f1a\u62a5\u4e0d\u5b58\u5728"},l.createElement(c.AnchorLink,{to:"#6-\u4e3a\u4ec0\u4e48\u6709\u4e9b\u7c7b\u578b\u4f1a\u62a5\u4e0d\u5b58\u5728","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"6. \u4e3a\u4ec0\u4e48\u6709\u4e9b\u7c7b\u578b\u4f1a\u62a5\u4e0d\u5b58\u5728?",l.createElement(r.Z,null,">= v1.4.8")),l.createElement("p",null,"\u56e0\u4e3a\u90e8\u5206",l.createElement("code",null,"hook"),"\u4e3a\u90e8\u5206\u7aef\u4e13\u5c5e, \u82e5\u4f7f\u7528\u4e86\u6b64\u7c7b",l.createElement("code",null,"hook"),"\u4ea7\u51fa\u7684\u503c\u9700\u8981\u505a\u5224\u7a7a\u5904\u7406\u6765\u907f\u89c4\u5f53\u524d\u7684\u7c7b\u578b\u9519\u8bef.\u5982:"),l.createElement(a.Z,{code:"const rect = useMenuButtonBoundingClientRect(); // \u8be5hook\u4e3a\u5c0f\u7a0b\u5e8f\u4e13\u5c5e, \u6545\u521d\u59cb\u503c\u4e3a`undefined`\nif (rect) {\n  const { top, ... } = rect;\n}\n\n// \u6216\u4f7f\u7528\u5f3a\u5236\nconst { top, ... } = useMenuButtonBoundingClientRect()!;",lang:"tsx"}))))},35713:function(e,t,n){"use strict";var l=n(67294);n(63465);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}t["Z"]=function(e){return l.createElement("div",c({className:"__dumi-default-alert"},e))}},24758:function(e,t,n){"use strict";var l=n(67294);n(69157);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}t["Z"]=function(e){return l.createElement("span",c({className:"__dumi-default-badge"},e))}}}]);