(self["webpackChunk"]=self["webpackChunk"]||[]).push([[4208],{77444:function(t,e,r){"use strict";function a(t,e,r){return r={path:e,exports:{},require:function(t,e){return o()}},t(r,r.exports),r.exports}function o(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}r.d(e,{c:function(){return n}});var n=a((function(t){(function(){var e={}.hasOwnProperty;function r(){for(var t=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var n=typeof o;if("string"===n||"number"===n)t.push(o);else if(Array.isArray(o)){if(o.length){var i=r.apply(null,o);i&&t.push(i)}}else if("object"===n)if(o.toString===Object.prototype.toString)for(var s in o)e.call(o,s)&&o[s]&&t.push(s);else t.push(o.toString())}}return t.join(" ")}t.exports?(r["default"]=r,t.exports=r):window.classNames=r})()}))},14208:function(t,e,r){"use strict";r.r(e),r.d(e,{taro_tabbar:function(){return T}});var a=r(66402),o=r(77444);function n(t){return"/"===t.charAt(0)}function i(t,e){for(var r=e,a=r+1,o=t.length;a<o;r+=1,a+=1)t[r]=t[a];t.pop()}function s(t,e){void 0===e&&(e="");var r,a=t&&t.split("/")||[],o=e&&e.split("/")||[],s=t&&n(t),l=e&&n(e),b=s||l;if(t&&n(t)?o=a:a.length&&(o.pop(),o=o.concat(a)),!o.length)return"/";if(o.length){var h=o[o.length-1];r="."===h||".."===h||""===h}else r=!1;for(var d=0,u=o.length;u>=0;u--){var c=o[u];"."===c?i(o,u):".."===c?(i(o,u),d++):d&&(i(o,u),d--)}if(!b)for(;d--;d)o.unshift("..");!b||""===o[0]||o[0]&&n(o[0])||o.unshift("");var f=o.join("/");return r&&"/"!==f.substr(-1)&&(f+="/"),f}var l=function(t){var e,r=t||"",a={path:null,query:null,fragment:null};return e=r.indexOf("#"),e>-1&&(a.fragment=r.substring(e+1),r=r.substring(0,e)),e=r.indexOf("?"),e>-1&&(a.query=r.substring(e+1),r=r.substring(0,e)),a.path=r,a},b=function(t){var e=t.index,r=t.isSelected,n=void 0!==r&&r,i=t.textColor,s=t.iconPath,l=t.badgeText,b=t.showRedDot,h=void 0!==b&&b,d=t.text,u=t.onSelect,c=(0,o.c)("weui-tabbar__item",{"weui-bar__item_on":n}),f={position:"absolute",top:"-2px",right:"-13px"},g={position:"absolute",top:"0",right:"-6px"};function p(){u(e)}return(0,a.h)("a",{key:e,href:"javascript:;",class:c,onClick:p},(0,a.h)("span",{style:{display:"inline-block",position:"relative"}},(0,a.h)("img",{src:s,alt:"",class:"weui-tabbar__icon"}),!!l&&(0,a.h)("span",{class:"weui-badge taro-tabbar-badge",style:f},l),h&&(0,a.h)("span",{class:"weui-badge weui-badge_dot",style:g})),(0,a.h)("p",{class:"weui-tabbar__label",style:{color:i}},d))},h="html,body{height:100%}#app{height:100%}.taro-tabbar__border-white::before{border-top-color:#fff !important}.taro-tabbar__container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.taro-tabbar__panel{-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}.taro-tabbar__tabbar{position:relative;height:50px;width:100%;-webkit-transition:bottom 0.2s, top 0.2s;transition:bottom 0.2s, top 0.2s}.taro-tabbar__tabbar-top{top:0}.taro-tabbar__tabbar-bottom{bottom:0}.taro-tabbar__tabbar-hide{display:none}.taro-tabbar__tabbar-slideout{top:-52px;-ms-flex:0 0;flex:0 0}.taro-tabbar__panel+.taro-tabbar__tabbar-slideout{top:auto;bottom:-52px}",d=r(69327),u=function(t){return"/"===t[0]?t:"/"+t},c=function(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)},f=function(t,e){return c(t,e)?t.substr(e.length):t},g=0,p=1,v=2,_="taro-tabbar__tabbar",m="taro-tabbar__tabbar-hide",w="taro-tabbar__tabbar-slideout",T=function(){function t(t){var e=this;(0,a.r)(this,t),this.onLongPress=(0,a.c)(this,"longpress",7),this.homePage="",this.customRoutes=[],this.tabbarPos="bottom",this.selectedIndex=-1,this.status=g,this.getOriginUrl=function(t){var r=e.customRoutes.filter((function(e){var r=e[1],a=l(r).path,o=l(t).path;return a===o}));return r.length?r[0][0]:t},this.getSelectedIndex=function(t){var r=-1;return e.list.forEach((function(e,a){var o=e.pagePath,n=l(t).path,i=l(o).path;n===i&&(r=a)})),r},this.switchTab=function(t){e.selectedIndex=t,d.switchTab({url:e.list[t].pagePath})},this.switchTabHandler=function(t){var r=t.url,a=t.successHandler,o=t.errorHandler,n=e.getOriginUrl(e.getCurrentUrl()||e.homePage),i=s(r,n),l=e.getSelectedIndex(i);l>-1?(e.switchTab(l),a({errMsg:"switchTab:ok"})):o({errMsg:'switchTab:fail page "'+i+'" is not found'})},this.routerChangeHandler=function(t){var r,a;if(t&&(r=t.toLocation),r&&r.path){var o=u(r.path);a=f("/"===o?e.homePage:o,e.conf.basename||"/")}else a=e.getCurrentUrl();e.selectedIndex=e.getSelectedIndex(e.getOriginUrl(a))},this.setTabBarBadgeHandler=function(t){var r=t.index,a=t.text,o=t.errorHandler,n=e.list;r in n?(e.list[r].showRedDot=!1,e.list[r].badgeText=a):o({errMsg:"setTabBarBadge:fail tabbar item not found"})},this.removeTabBarBadgeHandler=function(t){var r=t.index,a=t.successHandler,o=t.errorHandler,n=e.list;r in n?(e.list[r].badgeText=null,e.list[r].badgeText=null,a({errMsg:"removeTabBarBadge:ok"})):o({errMsg:"removeTabBarBadge:fail tabbar item not found"})},this.showTabBarRedDotHandler=function(t){var r=t.index,a=t.successHandler,o=t.errorHandler,n=e.list;r in n?(n[r].badgeText=null,n[r].showRedDot=!0,a({errMsg:"showTabBarRedDot:ok"})):o({errMsg:"showTabBarRedDot:fail tabbar item not found"})},this.hideTabBarRedDotHandler=function(t){var r=t.index,a=t.successHandler,o=t.errorHandler,n=e.list;r in n?(n[r].showRedDot=!1,a({errMsg:"hideTabBarRedDot:ok"})):o({errMsg:"hideTabBarRedDot:fail tabbar item not found"})},this.showTabBarHandler=function(t){var r=t.successHandler;e.status=g,r({errMsg:"showTabBar:ok"})},this.hideTabBarHandler=function(t){var r=t.animation,a=t.successHandler;e.status=r?v:p,a({errMsg:"hideTabBar:ok"})};var r=this.conf.list,o=this.conf.customRoutes;if("[object Array]"!==Object.prototype.toString.call(r)||r.length<2||r.length>5)throw new Error("tabBar \u914d\u7f6e\u9519\u8bef");for(var n in this.homePage=u(this.conf.homePage),o)this.customRoutes.push([n,o[n]]);r.forEach((function(t){0!==t.pagePath.indexOf("/")&&(t.pagePath="/"+t.pagePath)})),this.list=r}return t.prototype.getCurrentUrl=function(){var t,e=this.conf.mode,r=this.conf.basename||"/";if("hash"===e){var a=window.location.href,o=a.indexOf("#");t=-1===o?"":a.substring(o+1)}else t=location.pathname;var n=u(f(t,r));return"/"===n?this.homePage:n},t.prototype.bindEvent=function(){d.eventCenter.on("__taroRouterChange",this.routerChangeHandler),d.eventCenter.on("__taroSwitchTab",this.switchTabHandler),d.eventCenter.on("__taroSetTabBarBadge",this.setTabBarBadgeHandler),d.eventCenter.on("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),d.eventCenter.on("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),d.eventCenter.on("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),d.eventCenter.on("__taroShowTabBar",this.showTabBarHandler),d.eventCenter.on("__taroHideTabBar",this.hideTabBarHandler)},t.prototype.removeEvent=function(){d.eventCenter.off("__taroRouterChange",this.routerChangeHandler),d.eventCenter.off("__taroSwitchTab",this.switchTabHandler),d.eventCenter.off("__taroSetTabBarBadge",this.setTabBarBadgeHandler),d.eventCenter.off("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),d.eventCenter.off("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),d.eventCenter.off("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),d.eventCenter.off("__taroShowTabBar",this.showTabBarHandler),d.eventCenter.off("__taroHideTabBar",this.hideTabBarHandler)},t.prototype.componentDidLoad=function(){this.tabbarPos=this.tabbar.nextElementSibling?"top":"bottom",this.bindEvent(),this.routerChangeHandler()},t.prototype.disconnectedCallback=function(){this.removeEvent()},t.prototype.render=function(){var t,e,r=this,n=this,i=n.conf,s=n.tabbarPos,l=void 0===s?"bottom":s,h=this.status,d=(0,o.c)("weui-tabbar",(t={},t["taro-tabbar__border-"+(i.borderStyle||"black")]=!0,t)),u=-1===this.selectedIndex||h===p,c=h===v;return(0,a.h)(a.H,{class:(0,o.c)(_,_+"-"+l,(e={},e[m]=u,e[w]=c,e))},(0,a.h)("div",{class:d,style:{backgroundColor:i.backgroundColor||""}},this.list.map((function(t,e){var o,n,s=r.selectedIndex===e;return s?(o=i.selectedColor,n=t.selectedIconPath):(o=i.color||"",n=t.iconPath),(0,a.h)(b,{index:e,onSelect:r.switchTab.bind(r),isSelected:s,textColor:o,iconPath:n,text:t.text,badgeText:t.badgeText,showRedDot:t.showRedDot})}))))},Object.defineProperty(t.prototype,"tabbar",{get:function(){return(0,a.g)(this)},enumerable:!1,configurable:!0}),t}();T.style=h}}]);