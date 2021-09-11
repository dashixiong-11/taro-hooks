(self["webpackChunk"]=self["webpackChunk"]||[]).push([[9475],{31695:function(){},52597:function(e,t,l){"use strict";l.r(t);var n=l(67294),a=l(96089),r=l(27832),c=l(63263),o=l(607),u=n.memo(o.default["pages-useaudio"].component);t["default"]=e=>(n.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,n.createElement("div",{className:"markdown"},n.createElement("h1",{id:"useaudio"},n.createElement(a.AnchorLink,{to:"#useaudio","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"useAudio"),n.createElement("p",null,"\u97f3\u9891\u64cd\u4f5c\u7b49."),n.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},n.createElement(a.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),n.createElement("p",null,"\u5f53\u9700\u8981\u8fdb\u884c\u97f3\u9891\u64cd\u4f5c\u65f6"),n.createElement("h2",{id:"api"},n.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"API"),n.createElement(c.Z,{code:"const [\n  audioContext,\n  audioSource,\n  {\n    create: createAudioContext,\n    setOption: setAudioOption,\n    getAudioSource: getAudioSourceAsync,\n    play,\n    pause,\n    stop,\n    seek,\n    destory,\n    onCanPlay,\n    onEnded,\n    onError,\n    onPause,\n    onPlay,\n    onSeeked,\n    onSeeking,\n    onStop,\n    onTimeUpdate,\n    onWaiting,\n    offCanPlay,\n    offEnded,\n    offError,\n    offPause,\n    offPlay,\n    offSeeked,\n    offSeeking,\n    offStop,\n    offTimeUpdate,\n    offWaiting,\n  },\n] = useAudio(initOptions);",lang:"jsx"}),n.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},n.createElement(a.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),n.createElement("h5",{id:"\u4ee5\u4e0b\u5747\u4e3ainitoptions"},n.createElement(a.AnchorLink,{to:"#\u4ee5\u4e0b\u5747\u4e3ainitoptions","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4ee5\u4e0b\u5747\u4e3a",n.createElement("code",null,"initOptions")),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u8bf4\u660e"),n.createElement("th",null,"\u7c7b\u578b"),n.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"autoplay"),n.createElement("td",null,"\u662f\u5426\u81ea\u52a8\u5f00\u59cb\u64ad\u653e(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,n.createElement("code",null,"false"))),n.createElement("tr",null,n.createElement("td",null,"loop"),n.createElement("td",null,"\u662f\u5426\u5faa\u73af\u64ad\u653e(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,n.createElement("code",null,"false"))),n.createElement("tr",null,n.createElement("td",null,"src"),n.createElement("td",null,"\u97f3\u9891\u8d44\u6e90\u7684\u5730\u5740(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"-")),n.createElement("tr",null,n.createElement("td",null,"volume"),n.createElement("td",null,"\u97f3\u91cf\u3002\u8303\u56f4 0~1(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),n.createElement("td",null,n.createElement("code",null,"number")),n.createElement("td",null,n.createElement("code",null,"1"))),n.createElement("tr",null,n.createElement("td",null,"startTime"),n.createElement("td",null,"\u5f00\u59cb\u64ad\u653e\u7684\u4f4d\u7f6e\uff08\u5355\u4f4d\uff1as\uff09(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),n.createElement("td",null,n.createElement("code",null,"number")),n.createElement("td",null,n.createElement("code",null,"0"))),n.createElement("tr",null,n.createElement("td",null,"mixWithOther"),n.createElement("td",null,"\u662f\u5426\u4e0e\u5176\u4ed6\u97f3\u9891\u6df7\u64ad(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"-")),n.createElement("tr",null,n.createElement("td",null,"obeyMuteSwitch"),n.createElement("td",null,"\u662f\u5426\u9075\u5faa\u7cfb\u7edf\u9759\u97f3\u5f00\u5173(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,n.createElement("code",null,"true"))))),n.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},n.createElement(a.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u8fd4\u56de\u503c"),n.createElement("th",null,"\u8bf4\u660e"),n.createElement("th",null,"\u7c7b\u578b"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"audioContext"),n.createElement("td",null,"\u5168\u5c40\u552f\u4e00\u97f3\u9891\u5b9e\u4f8b"),n.createElement("td",null,n.createElement("code",null,"InnerAudioContext | undefined"))),n.createElement("tr",null,n.createElement("td",null,"audioSource"),n.createElement("td",null,"\u5f53\u524d\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90"),n.createElement("td",null,n.createElement("code",null,"getAvailableAudioSources.SuccessCallbackResult['audioSources'] | undefined"))),n.createElement("tr",null,n.createElement("td",null,"create"),n.createElement("td",null,"\u521b\u5efa\u5168\u5c40\u552f\u4e00\u97f3\u9891\u5b9e\u4f8b"),n.createElement("td",null,n.createElement("code",null,"(initOptions?: Partial<initOptions>) => IAudioContext"))),n.createElement("tr",null,n.createElement("td",null,"setOption"),n.createElement("td",null,"\u8bbe\u7f6e\u97f3\u9891\u5b9e\u4f8b"),n.createElement("td",null,n.createElement("code",null,"(option?: Partial<initOptions>, instance?: InnerAudioContext,) => Promise<General.CallbackResult>"))),n.createElement("tr",null,n.createElement("td",null,"getAudioSource"),n.createElement("td",null,"\u83b7\u53d6\u5f53\u524d\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90"),n.createElement("td",null,n.createElement("code",null,"() => Promise<getAvailableAudioSources.SuccessCallbackResult>"))),n.createElement("tr",null,n.createElement("td",null,"play"),n.createElement("td",null,"\u64ad\u653e(\u53ef\u6307\u5b9a\u64ad\u653e\u6587\u4ef6 src)"),n.createElement("td",null,n.createElement("code",null,"(src?: string) => void"))),n.createElement("tr",null,n.createElement("td",null,"pause"),n.createElement("td",null,"\u6682\u505c"),n.createElement("td",null,n.createElement("code",null,"() => void"))),n.createElement("tr",null,n.createElement("td",null,"stop"),n.createElement("td",null,"\u505c\u6b62"),n.createElement("td",null,n.createElement("code",null,"() => void"))),n.createElement("tr",null,n.createElement("td",null,"seek"),n.createElement("td",null,"\u8df3\u8f6c\u5230\u6307\u5b9a\u4f4d\u7f6e\uff0c\u5355\u4f4d s"),n.createElement("td",null,n.createElement("code",null,"(position: number) => void"))),n.createElement("tr",null,n.createElement("td",null,"destory"),n.createElement("td",null,"\u9500\u6bc1\u5f53\u524d\u5b9e\u4f8b"),n.createElement("td",null,n.createElement("code",null,"() => void"))),n.createElement("tr",null,n.createElement("td",null,"onCanPlay"),n.createElement("td",null,"\u97f3\u9891\u8fdb\u5165\u53ef\u4ee5\u64ad\u653e\u72b6\u6001\uff0c\u4f46\u4e0d\u4fdd\u8bc1\u540e\u9762\u53ef\u4ee5\u6d41\u7545\u64ad\u653e"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"onEnded"),n.createElement("td",null,"\u97f3\u9891\u81ea\u7136\u64ad\u653e\u7ed3\u675f\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"onError"),n.createElement("td",null,"\u97f3\u9891\u64ad\u653e\u9519\u8bef\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: (res: InnerAudioContext.onErrorDetail) => void,) => void"))),n.createElement("tr",null,n.createElement("td",null,"onPlay"),n.createElement("td",null,"\u97f3\u9891\u64ad\u653e\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"onPause"),n.createElement("td",null,"\u97f3\u9891\u6682\u505c\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"onSeeked"),n.createElement("td",null,"\u97f3\u9891\u5b8c\u6210 seek \u64cd\u4f5c\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"onSeeking"),n.createElement("td",null,"\u97f3\u9891\u8fdb\u884c seek \u64cd\u4f5c\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"onStop"),n.createElement("td",null,"\u97f3\u9891\u505c\u6b62\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"onTimeUpdate"),n.createElement("td",null,"\u97f3\u9891\u64ad\u653e\u8fdb\u5ea6\u66f4\u65b0\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"onWaiting"),n.createElement("td",null,"\u97f3\u9891\u52a0\u8f7d\u4e2d\u4e8b\u4ef6\uff0c\u5f53\u97f3\u9891\u56e0\u4e3a\u6570\u636e\u4e0d\u8db3\uff0c\u9700\u8981\u505c\u4e0b\u6765\u52a0\u8f7d\u65f6\u4f1a\u89e6\u53d1"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"offCanPlay"),n.createElement("td",null,"\u53d6\u6d88\u76d1\u542c onCanplay \u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"offEnded"),n.createElement("td",null,"\u53d6\u6d88\u76d1\u542c onEnded \u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"offError"),n.createElement("td",null,"\u53d6\u6d88\u76d1\u542c onError \u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"offPause"),n.createElement("td",null,"\u53d6\u6d88\u76d1\u542c onPause \u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"offPlay"),n.createElement("td",null,"\u53d6\u6d88\u76d1\u542c onPlay \u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"offSeeked"),n.createElement("td",null,"\u53d6\u6d88\u76d1\u542c onSeeked \u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"offSeeking"),n.createElement("td",null,"\u53d6\u6d88\u76d1\u542c onSeeking \u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"offStop"),n.createElement("td",null,"\u53d6\u6d88\u76d1\u542c onStop \u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"offTimeUpdate"),n.createElement("td",null,"\u53d6\u6d88\u76d1\u542c onTimeUpdate \u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))),n.createElement("tr",null,n.createElement("td",null,"offWaiting"),n.createElement("td",null,"\u53d6\u6d88\u76d1\u542c onWaiting \u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback: INormalAction) => void"))))),n.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},n.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),n.createElement(r.default,o.default["pages-useaudio"].previewerProps,n.createElement(u,null)),n.createElement("div",{className:"markdown"},n.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},n.createElement(a.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),n.createElement("th",{align:"center"},"H5"),n.createElement("th",{align:"center"},"ReactNative"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",{align:"center"},"\u2714\ufe0f"),n.createElement("td",{align:"center"},"\u2714\ufe0f"),n.createElement("td",{align:"center"},"\u2714\ufe0f"))))))))},63263:function(e,t,l){"use strict";var n=l(67294),a=l(4649),r=l(96089);l(31695);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},c.apply(this,arguments)}function o(e,t){return i(e)||E(e,t)||m(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return d(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function E(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,o=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(u){o=!0,a=u}finally{try{c||null==l["return"]||l["return"]()}finally{if(o)throw a}}return r}}function i(e){if(Array.isArray(e))return e}t["Z"]=function(e){var t=e.code,l=e.lang,u=e.showCopy,m=void 0===u||u,d=(0,r.useCopy)(),E=o(d,2),i=E[0],s=E[1];return n.createElement("div",{className:"__dumi-default-code-block"},n.createElement(a.ZP,c({},a.lG,{code:t,language:l,theme:void 0}),(function(e){var l=e.className,a=e.style,r=e.tokens,c=e.getLineProps,o=e.getTokenProps;return n.createElement("pre",{className:l,style:a},m&&n.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":s,onClick:function(){return i(t)}}),r.map((function(e,t){return n.createElement("div",c({line:e,key:t}),e.map((function(e,t){return n.createElement("span",o({token:e,key:t}))})))})))})))}}}]);