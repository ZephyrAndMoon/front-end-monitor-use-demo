(function(e){function r(r){for(var n,a,c=r[0],s=r[1],u=r[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(r);while(d.length)d.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,r=0;r<i.length;r++){for(var t=i[r],n=!0,c=1;c<t.length;c++){var s=t[c];0!==o[s]&&(n=!1)}n&&(i.splice(r--,1),e=a(a.s=t[0]))}return e}var n={},o={app:0},i=[];function a(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,r,t){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,r){if(1&r&&(e=a(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)a.d(t,n,function(r){return e[r]}.bind(null,n));return t},a.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=r,c=c.slice();for(var u=0;u<c.length;u++)r(c[u]);var f=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},4146:function(e,r,t){"use strict";t("bf6c")},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("Type",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"hello"},[t("el-button",{staticClass:"btn",on:{click:e.vueErrorOccurHandler}},[e._v("Vue类型报错")]),t("el-button",{staticClass:"btn",on:{click:e.promiseErrorOccurHandler}},[e._v("promise未捕获异常信息")]),t("el-button",{staticClass:"btn",on:{click:e.consoleErrorOccurHandler}},[e._v("console.error错误信息捕获")]),t("el-button",{staticClass:"btn",on:{click:e.jsErrorOccurHandler}},[e._v("JavaScript错误信息监控")]),t("el-button",{staticClass:"btn",on:{click:e.URLErrorOccurHandler}},[e._v("URL JavaScript错误信息监控")]),t("el-button",{staticClass:"btn",on:{click:e.resourceErrorOccurHandler}},[e._v("资源错误信息捕获")])],1),t("el-button",{staticClass:"btn",staticStyle:{display:"block",margin:"40px auto 0px"},on:{click:e.reset}},[e._v("重置图片")]),t("img",{staticStyle:{"margin-top":"10px"},attrs:{src:e.src,alt:"测试图片",width:"300",height:"200"}})],1)},c=[],s=t("b1f8"),u=(t("d3b7"),{name:"Type",data:function(){return{tempSrc:"https://i.ytimg.com/vi/88Z0MKYH_Ns/maxresdefault.jpg",src:"https://i.ytimg.com/vi/88Z0MKYH_Ns/maxresdefault.jpg"}},methods:{vueErrorOccurHandler:function(){vueError()},promiseErrorOccurHandler:function(){fetch("https://no-such-server.blabla").then((function(e){return e.json()})).catch((function(e){throw new Error(e)}))},consoleErrorOccurHandler:function(){console.Error("A printing error occurred...")},jsErrorOccurHandler:function(){setTimeout((function(){Object(s["a"])("a")}),1e3)},URLErrorOccurHandler:function(){setTimeout((function(){decodeURI("%2")}),0)},resourceErrorOccurHandler:function(){this.src=""},reset:function(){this.src=this.tempSrc}}}),f=u,l=(t("4146"),t("2877")),d=Object(l["a"])(f,a,c,!1,null,"a51d6308",null),p=d.exports,h={name:"App",components:{Type:p},mounted:function(){}},g=h,m=(t("5c0b"),Object(l["a"])(g,o,i,!1,null,null,null)),v=m.exports,O=(t("0fae"),t("5c96")),E=t.n(O),y=t("d4ec"),b=t("bee2"),w=t("2909"),x=t("262e"),S=t("2caf"),R=(t("a15b"),t("159b"),t("b64b"),t("ac1f"),t("5319"),t("1276"),t("25f0"),t("fb6a"),t("99af"),void 0),I=t("83dc"),k=function(){var e="undefined"!==typeof self?self:R,r=e||{},t={navigator:"undefined"!==typeof e.navigator?e.navigator:{},infoMap:{engine:["WebKit","Trident","Gecko","Presto"],browser:["Safari","Chrome","Edge","IE","Firefox","Firefox Focus","Chromium","Opera","Vivaldi","Yandex","Arora","Lunascape","QupZilla","Coc Coc","Kindle","Iceweasel","Konqueror","Iceape","SeaMonkey","Epiphany","360","360SE","360EE","UC","QQBrowser","QQ","Baidu","Maxthon","Sogou","LBBROWSER","2345Explorer","TheWorld","XiaoMi","Quark","Qiyu","Wechat","Taobao","Alipay","Weibo","Douban","Suning","iQiYi"],os:["Windows","Linux","Mac OS","Android","Ubuntu","FreeBSD","Debian","iOS","Windows Phone","BlackBerry","MeeGo","Symbian","Chrome OS","WebOS"],device:["Mobile","Tablet","iPad"]}},n=t.navigator.userAgent||{},o=new I(n),i=function(){return{getMatchMap:function(e){return{Trident:e.indexOf("Trident")>-1||e.indexOf("NET CLR")>-1,Presto:e.indexOf("Presto")>-1,WebKit:e.indexOf("AppleWebKit")>-1,Gecko:e.indexOf("Gecko")>-1,Safari:e.indexOf("Safari")>-1,Chrome:e.indexOf("Chrome")>-1||e.indexOf("CriOS")>-1,IE:e.indexOf("MSIE")>-1||e.indexOf("Trident")>-1,Edge:e.indexOf("Edge")>-1,Firefox:e.indexOf("Firefox")>-1||e.indexOf("FxiOS")>-1,"Firefox Focus":e.indexOf("Focus")>-1,Chromium:e.indexOf("Chromium")>-1,Opera:e.indexOf("Opera")>-1||e.indexOf("OPR")>-1,Vivaldi:e.indexOf("Vivaldi")>-1,Yandex:e.indexOf("YaBrowser")>-1,Arora:e.indexOf("Arora")>-1,Lunascape:e.indexOf("Lunascape")>-1,QupZilla:e.indexOf("QupZilla")>-1,"Coc Coc":e.indexOf("coc_coc_browser")>-1,Kindle:e.indexOf("Kindle")>-1||e.indexOf("Silk/")>-1,Iceweasel:e.indexOf("Iceweasel")>-1,Konqueror:e.indexOf("Konqueror")>-1,Iceape:e.indexOf("Iceape")>-1,SeaMonkey:e.indexOf("SeaMonkey")>-1,Epiphany:e.indexOf("Epiphany")>-1,360:e.indexOf("QihooBrowser")>-1||e.indexOf("QHBrowser")>-1,"360EE":e.indexOf("360EE")>-1,"360SE":e.indexOf("360SE")>-1,UC:e.indexOf("UC")>-1||e.indexOf(" UBrowser")>-1,QQBrowser:e.indexOf("QQBrowser")>-1,QQ:e.indexOf("QQ/")>-1,Baidu:e.indexOf("Baidu")>-1||e.indexOf("BIDUBrowser")>-1,Maxthon:e.indexOf("Maxthon")>-1,Sogou:e.indexOf("MetaSr")>-1||e.indexOf("Sogou")>-1,LBBROWSER:e.indexOf("LBBROWSER")>-1,"2345Explorer":e.indexOf("2345Explorer")>-1,TheWorld:e.indexOf("TheWorld")>-1,XiaoMi:e.indexOf("MiuiBrowser")>-1,Quark:e.indexOf("Quark")>-1,Qiyu:e.indexOf("Qiyu")>-1,Wechat:e.indexOf("MicroMessenger")>-1,Taobao:e.indexOf("AliApp(TB")>-1,Alipay:e.indexOf("AliApp(AP")>-1,Weibo:e.indexOf("Weibo")>-1,Douban:e.indexOf("com.douban.frodo")>-1,Suning:e.indexOf("SNEBUY-APP")>-1,iQiYi:e.indexOf("IqiyiApp")>-1,Windows:e.indexOf("Windows")>-1,Linux:e.indexOf("Linux")>-1||e.indexOf("X11")>-1,"Mac OS":e.indexOf("Macintosh")>-1,Android:e.indexOf("Android")>-1||e.indexOf("Adr")>-1,Ubuntu:e.indexOf("Ubuntu")>-1,FreeBSD:e.indexOf("FreeBSD")>-1,Debian:e.indexOf("Debian")>-1,"Windows Phone":e.indexOf("IEMobile")>-1||e.indexOf("Windows Phone")>-1,BlackBerry:e.indexOf("BlackBerry")>-1||e.indexOf("RIM")>-1,MeeGo:e.indexOf("MeeGo")>-1,Symbian:e.indexOf("Symbian")>-1,iOS:e.indexOf("like Mac OS X")>-1,"Chrome OS":e.indexOf("CrOS")>-1,WebOS:e.indexOf("hpwOS")>-1,Mobile:e.indexOf("Mobi")>-1||e.indexOf("iPh")>-1||e.indexOf("480")>-1,Tablet:e.indexOf("Tablet")>-1||e.indexOf("Nexus 7")>-1,iPad:e.indexOf("iPad")>-1}},matchInfoMap:function(){var e=this,r=t.navigator.userAgent||{},n=i.getMatchMap(r);return Object.keys(t.infoMap).forEach((function(r){for(var o=0;o<t.infoMap[r].length;o+=1){var i=t.infoMap[r][o];n[i]&&(e[r]=i)}})),e},getOS:function(){return this.os},getOSVersion:function(){var e=t.navigator.userAgent||{};this.osVersion="";var r={Windows:function(){var r=e.replace(/^.*Windows NT ([\d.]+);.*$/,"$1"),t={6.4:"10",6.3:"8.1",6.2:"8",6.1:"7","6.0":"Vista",5.2:"XP",5.1:"XP","5.0":"2000"};return t[r]||r},Android:function(){return e.replace(/^.*Android ([\d.]+);.*$/,"$1")},iOS:function(){return e.replace(/^.*OS ([\d_]+) like.*$/,"$1").replace(/_/g,".")},Debian:function(){return e.replace(/^.*Debian\/([\d.]+).*$/,"$1")},"Windows Phone":function(){return e.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/,"$2")},"Mac OS":function(){return e.replace(/^.*Mac OS X ([\d_]+).*$/,"$1").replace(/_/g,".")},WebOS:function(){return e.replace(/^.*hpwOS\/([\d.]+);.*$/,"$1")}};return r[this.os]&&(this.osVersion=r[this.os](),this.osVersion===e&&(this.osVersion="")),this.osVersion},getOrientationStatus:function(){var e="",r=window.matchMedia("(orientation: portrait)");return e=r.matches?"竖屏":"横屏",e},getDeviceType:function(){return this.device||"PC"},getNetwork:function(){var e=navigator&&navigator.connection&&navigator.connection.effectiveType;return e},getLanguage:function(){return this.language=function(){var e=t.navigator.browserLanguage||t.navigator.language,r=e.split("-");return r[1]&&(r[1]=r[1].toUpperCase()),r.join("_")}(),this.language},createFingerprint:function(e){function r(e){var r,t,n,o="",i=e;for(r=0,t=i.length;r<t;r+=1)n=i.charCodeAt(r).toString(16),o+=n.length<2?"0".concat(n):n;return o}var t=document.createElement("canvas"),n=t.getContext("2d"),o=e||window.location.host;n.textBaseline="top",n.font="14px 'Arial'",n.textBaseline="tencent",n.fillStyle="#f60",n.fillRect(125,1,62,20),n.fillStyle="#069",n.fillText(o,2,15),n.fillStyle="rgba(102, 204, 0, 0.7)",n.fillText(o,4,17);var i=t.toDataURL().replace("data:image/png;base64,",""),a=atob(i),c=r(a.slice(-16,-12)),s=c;return s},getBrowserInfo:function(){var e=this,n=t.navigator.userAgent||{},o=function(e,r){var n=t.navigator.mimeTypes;return Object.keys(n).some((function(t){return n[t][e]===r}))},a=i.getMatchMap(n),c=!1;if(r.chrome){var s=n.replace(/^.*Chrome\/([\d]+).*$/,"$1");s>36&&r.showModalDialog?c=!0:s>45&&(c=o("type","application/vnd.chromium.remoting-viewer"))}if(a.Baidu&&a.Opera&&(a.Baidu=!1),a.Mobile&&(a.Mobile=!(n.indexOf("iPad")>-1)),c&&(o("type","application/gameplugin")||t.navigator&&"undefined"===typeof t.navigator.connection.saveData?a["360SE"]=!0:a["360EE"]=!0),a.IE||a.Edge){var u=window.screenTop-window.screenY;switch(u){case 71:break;case 74:break;case 99:break;case 102:a["360EE"]=!0;break;case 75:break;case 105:break;case 104:a["360SE"]=!0;break;default:break}}var f={Safari:function(){return n.replace(/^.*Version\/([\d.]+).*$/,"$1")},Chrome:function(){return n.replace(/^.*Chrome\/([\d.]+).*$/,"$1").replace(/^.*CriOS\/([\d.]+).*$/,"$1")},IE:function(){return n.replace(/^.*MSIE ([\d.]+).*$/,"$1").replace(/^.*rv:([\d.]+).*$/,"$1")},Edge:function(){return n.replace(/^.*Edge\/([\d.]+).*$/,"$1")},Firefox:function(){return n.replace(/^.*Firefox\/([\d.]+).*$/,"$1").replace(/^.*FxiOS\/([\d.]+).*$/,"$1")},"Firefox Focus":function(){return n.replace(/^.*Focus\/([\d.]+).*$/,"$1")},Chromium:function(){return n.replace(/^.*Chromium\/([\d.]+).*$/,"$1")},Opera:function(){return n.replace(/^.*Opera\/([\d.]+).*$/,"$1").replace(/^.*OPR\/([\d.]+).*$/,"$1")},Vivaldi:function(){return n.replace(/^.*Vivaldi\/([\d.]+).*$/,"$1")},Yandex:function(){return n.replace(/^.*YaBrowser\/([\d.]+).*$/,"$1")},Arora:function(){return n.replace(/^.*Arora\/([\d.]+).*$/,"$1")},Lunascape:function(){return n.replace(/^.*Lunascape[/\s]([\d.]+).*$/,"$1")},QupZilla:function(){return n.replace(/^.*QupZilla[/\s]([\d.]+).*$/,"$1")},"Coc Coc":function(){return n.replace(/^.*coc_coc_browser\/([\d.]+).*$/,"$1")},Kindle:function(){return n.replace(/^.*Version\/([\d.]+).*$/,"$1")},Iceweasel:function(){return n.replace(/^.*Iceweasel\/([\d.]+).*$/,"$1")},Konqueror:function(){return n.replace(/^.*Konqueror\/([\d.]+).*$/,"$1")},Iceape:function(){return n.replace(/^.*Iceape\/([\d.]+).*$/,"$1")},SeaMonkey:function(){return n.replace(/^.*SeaMonkey\/([\d.]+).*$/,"$1")},Epiphany:function(){return n.replace(/^.*Epiphany\/([\d.]+).*$/,"$1")},360:function(){return n.replace(/^.*QihooBrowser\/([\d.]+).*$/,"$1")},"360SE":function(){var e={63:"10.0",55:"9.1",45:"8.1",42:"8.0",31:"7.0",21:"6.3"},r=n.replace(/^.*Chrome\/([\d]+).*$/,"$1");return e[r]||""},"360EE":function(){var e={69:"11.0",63:"9.5",55:"9.0",50:"8.7",30:"7.5"},r=n.replace(/^.*Chrome\/([\d]+).*$/,"$1");return e[r]||""},Maxthon:function(){return n.replace(/^.*Maxthon\/([\d.]+).*$/,"$1")},QQBrowser:function(){return n.replace(/^.*QQBrowser\/([\d.]+).*$/,"$1")},QQ:function(){return n.replace(/^.*QQ\/([\d.]+).*$/,"$1")},Baidu:function(){return n.replace(/^.*BIDUBrowser[\s/]([\d.]+).*$/,"$1")},UC:function(){return n.replace(/^.*UC?Browser\/([\d.]+).*$/,"$1")},Sogou:function(){return n.replace(/^.*SE ([\d.X]+).*$/,"$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/,"$1")},LBBROWSER:function(){var e={57:"6.5",49:"6.0",46:"5.9",42:"5.3",39:"5.2",34:"5.0",29:"4.5",21:"4.0"},r=navigator.userAgent.replace(/^.*Chrome\/([\d]+).*$/,"$1");return e[r]||""},"2345Explorer":function(){return n.replace(/^.*2345Explorer\/([\d.]+).*$/,"$1")},TheWorld:function(){return n.replace(/^.*TheWorld ([\d.]+).*$/,"$1")},XiaoMi:function(){return n.replace(/^.*MiuiBrowser\/([\d.]+).*$/,"$1")},Quark:function(){return n.replace(/^.*Quark\/([\d.]+).*$/,"$1")},Qiyu:function(){return n.replace(/^.*Qiyu\/([\d.]+).*$/,"$1")},Wechat:function(){return n.replace(/^.*MicroMessenger\/([\d.]+).*$/,"$1")},Taobao:function(){return n.replace(/^.*AliApp\(TB\/([\d.]+).*$/,"$1")},Alipay:function(){return n.replace(/^.*AliApp\(AP\/([\d.]+).*$/,"$1")},Weibo:function(){return n.replace(/^.*weibo__([\d.]+).*$/,"$1")},Douban:function(){return n.replace(/^.*com.douban.frodo\/([\d.]+).*$/,"$1")},Suning:function(){return n.replace(/^.*SNEBUY-APP([\d.]+).*$/,"$1")},iQiYi:function(){return n.replace(/^.*IqiyiVersion\/([\d.]+).*$/,"$1")}};return e.browserVersion="",f[e.browser]&&(e.browserVersion=f[e.browser](),e.browserVersion===n&&(e.browserVersion="")),"Edge"===e.browser&&(e.engine="EdgeHTML"),"Chrome"===e.browser&&parseInt(e.browserVersion,10)>27&&(e.engine="Blink"),"Opera"===e.browser&&parseInt(e.browserVersion,10)>12&&(e.engine="Blink"),"Yandex"===e.browser&&(e.engine="Blink"),"".concat(e.browser,"（版本: ").concat(e.browserVersion,"&nbsp;&nbsp;内核: ").concat(e.engine,"）")}}}(),a=function(){return{DeviceInfoObj:function(e){var n=e||{domain:""};i.matchInfoMap();var a={deviceType:i.getDeviceType(),browserInfo:o.browser,deviceInfo:o.device,engineInfo:o.engine,OSInfo:o.os,screenWidth:r.screen.width,screenHeight:r.screen.height,netWork:i.getNetwork(),orientation:i.getOrientationStatus(),language:i.getLanguage(),fingerprint:i.createFingerprint(n.domain),userAgent:t.navigator.userAgent};if(!n.info||0===n.info.length)return a;var c={};return Object.keys(a).forEach((function(e){n.info.forEach((function(r){r.toLowerCase()===e.toLowerCase()&&(c[e]=a[e])}))})),c}}}();return{getDeviceInfo:a.DeviceInfoObj}}(),$=k,_=$,M=function(){function e(r,t){Object(y["a"])(this,e),this.url=r,this.reportMethod=t}return Object(b["a"])(e,[{key:"report",value:function(e){if(this._checkUrl(this.url)){console.log("上报地址：".concat(this.url));var r=this.reportMethod,t=r.useImg,n=r.useFetch,o=r.useBeacon;t?this._sendInfoByImg(e):n?this._sendInfoByFetch(e):o?this._sendInfoByNavigator(e):this._sendInfoByXHR(e)}else console.log("上报信息url地址格式不正确,url=",this.url)}},{key:"_sendInfoByXHR",value:function(e){var r=JSON.stringify(e);try{var t=new XMLHttpRequest;t.open("POST",this.url,!0),t.setRequestHeader("Content-Type","application/json"),t.send(r)}catch(n){console.log("XHR请求异常",n)}}},{key:"_sendInfoByFetch",value:function(e){var r=JSON.stringify(e);try{if(fetch)return void fetch(this.url,{headers:{"Content-Type":"application/json"},method:"POST",body:r,mode:"same-origin",keepalive:!0});console.warn("当前浏览器不支持fetch，采用默认方式XHR上报数据"),this._sendInfoByXHR(e)}catch(t){console.log("fetch请求异常",t)}}},{key:"_sendInfoByImg",value:function(e){if(this._checkUrl(this.url))try{var r=new Image;r.src="".concat(this.url,"?v=").concat((new Date).getTime(),"&").concat(this._formatParams(e))}catch(t){console.log("img请求异常",t)}else console.log("上报信息url地址格式不正确,url=",this.url)}},{key:"_sendInfoByNavigator",value:function(e){var r=new FormData;Object.keys(e).forEach((function(t){r.append(t,e[t])})),navigator.sendBeacon&&navigator.sendBeacon(this.url,r)}},{key:"_formatParams",value:function(e){var r=[];return Object.keys(e).forEach((function(t){return r.push("".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t])))})),r.join("&")}},{key:"_checkUrl",value:function(e){if(!e)return!1;var r=/^[hH][tT][tT][pP]([sS]?):\/\//;return r.test(e)}}]),e}(),T=M,j=function(){function e(){Object(y["a"])(this,e),this.isStop=!0,this.queues=[]}return Object(b["a"])(e,[{key:"add",value:function(e,r,t){this.queues.push({reportUrl:e,reportMethod:r,data:t})}},{key:"fire",value:function(){if(0!==this.queues.length){this.isStop=!1;var e=this.queues.shift();e.reportUrl&&new T(e.reportUrl,e.reportMethod).report(e.data),this.fire()}else this.isStop=!0}}]),e}(),C=j,B={JS_ERROR:"js_error",RESOURCE_ERROR:"resource_error",CROSS_SCRIPT_ERROR:"cross_script_error",VUE_ERROR:"vue_error",PROMISE_ERROR:"promise_error",CONSOLE_INFO:"console_info",CONSOLE_WARN:"console_warn",CONSOLE_ERROR:"console_error",UNKNOWN_ERROR:"unknown_error",PERFORMANCE:"performance",NETWORK_SPEED:"network_speed"},N={ERROR:"Error",WARN:"Warning",INFO:"Info"},F=new C,U=function(){function e(r){var t=r.reportUrl,n=r.extendsInfo,o=r.reportMethod;Object(y["a"])(this,e),this.category=B.UNKNOWN_ERROR,this.level=N.INFO,this.msg={},this.url="",this.stack=[],this.otherErrorInfo={},this.reportUrl=t,this.extendsInfo=n,this.reportMethod=o}return Object(b["a"])(e,[{key:"recordError",value:function(){this._handleRecordError(),setTimeout((function(){F.isStop&&F.fire()}),100)}},{key:"_handleRecordError",value:function(){try{if(!this.msg)return;if(this.reportUrl&&this.url&&this.url.toLowerCase().indexOf(this.reportUrl.toLowerCase())>=0)return void console.log("统计错误接口异常",this.msg);var e=this._handleErrorInfo();console.log("\nIt's ".concat(this.category),e),F.add(this.reportUrl,this.reportMethod,e)}catch(r){console.log(r)}}},{key:"_handleErrorInfo",value:function(){var e={url:this.url,errorInfo:this.msg,otherErrorInfo:this.otherErrorInfo,stack:this.stack},r=this._getDeviceInfo(),t={time:(new Date).format("yyyy-MM-dd HH:mm:ss"),logType:this.level,category:this.category,logInfo:JSON.stringify(e),deviceInfo:JSON.stringify(r),extendsInfo:JSON.stringify(this.extendsInfo)};return console.log("错误信息: ",t),t}},{key:"_getDeviceInfo",value:function(){try{var e=_.getDeviceInfo();return e}catch(r){return console.log(r),""}}}]),e}(),A=U,L=function(e){Object(x["a"])(t,e);var r=Object(S["a"])(t);function t(){return Object(y["a"])(this,t),r.apply(this,arguments)}return Object(b["a"])(t,[{key:"handleRegisterErrorCaptureEvents",value:function(){this.registerInfo(),this.registerWarn(),this.registerError()}},{key:"registerInfo",value:function(){var e=this;console.Info=function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];e.handleLog(N.INFO,B.CONSOLE_INFO,t)}}},{key:"registerWarn",value:function(){var e=this;console.Warn=function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];e.handleLog(N.WARN,B.CONSOLE_WARN,t)}}},{key:"registerError",value:function(){var e=this;console.Error=function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];e.handleLog(N.ERROR,B.CONSOLE_ERROR,t)}}},{key:"handleLog",value:function(e,r,t){try{this.level=e;var n=Object(w["a"])(t);this.msg=n.join("\r\n"),this.url=location.href,this.category=r,this.recordError()}catch(o){console.log("console统计错误异常",e,o)}}}]),t}(A);(function(){window.console||(window.console={});var e=["tInfo","tWarn","tError"];e.forEach((function(e){console[e]||(console[e]=function(){})}))})();var P=L,W=function(e){Object(x["a"])(t,e);var r=Object(S["a"])(t);function t(){return Object(y["a"])(this,t),r.apply(this,arguments)}return Object(b["a"])(t,[{key:"handleRegisterErrorCaptureEvents",value:function(){var e=this;window.onerror=function(r,t,n,o,i){try{e.level=N.WARN,e.category=B.JS_ERROR,e.msg=r,e.url=t,e.errorObj=i,e.stack=i.stack,e.recordError()}catch(a){console.log("js错误异常",a)}return!0}}}]),t}(A),D=W,H=(t("b0c0"),{type:function(e){return Object.prototype.toString.call(e).replace(/\[object\s|\]/g,"")},isFunction:function(e){return"Function"===this.type(e)},isArray:function(e){return"Array"===this.type(e)},isNull:function(e){return void 0===e||""===e||null==e},objectIsNull:function(e){return"{}"===JSON.stringify(e)},isObject:function(e){return"Object"===this.type(e)},formatComponentInfo:function(e){if(e.$root===e)return"root";var r=e._isVue?e.$options&&e.$options.name||e.$options&&e.$options._componentTag:e.name;return(r?"component <".concat(r,">"):"anonymous component")+(e._isVue&&e.$options&&e.$options.__file?" at ".concat(e.$options&&e.$options.__file):"")},getErrorUrl:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=0;r<e.length;r+=1){var t=e[r].FILE_NAME;if(t)return t}return""}}),Q=function(e){Object(x["a"])(t,e);var r=Object(S["a"])(t);function t(){return Object(y["a"])(this,t),r.apply(this,arguments)}return Object(b["a"])(t,[{key:"handleRegisterErrorCaptureEvents",value:function(){var e=this;window.addEventListener("unhandledrejection",(function(r){try{if(!r||!r.reason)return;var t=r.reason,n=t.message,o=t.stack;e.level=N.ERROR,e.category=B.PROMISE_ERROR,e.url=H.getErrorUrl(o),e.msg=n||r.reason,e.stack=o,e.recordError()}catch(i){console.log(i)}r.preventDefault()}),!0)}}]),t}(A),V=Q,q=function(e){Object(x["a"])(t,e);var r=Object(S["a"])(t);function t(){return Object(y["a"])(this,t),r.apply(this,arguments)}return Object(b["a"])(t,[{key:"handleRegisterErrorCaptureEvents",value:function(){var e=this;window.addEventListener("error",(function(r){try{if(!r)return;var t=r.target||r.srcElement,n=t instanceof HTMLScriptElement||t instanceof HTMLLinkElement||t instanceof HTMLImageElement;if(!n)return;e.level=N.ERROR,e.category=B.RESOURCE_ERROR,e.url=t.src||t.href,e.msg="加载 ".concat(t.tagName," 资源错误"),e.recordError()}catch(o){console.log("资源加载收集异常",o)}r.preventDefault()}),!0)}}]),t}(A),K=q,X=function(e){Object(x["a"])(t,e);var r=Object(S["a"])(t);function t(){return Object(y["a"])(this,t),r.apply(this,arguments)}return Object(b["a"])(t,[{key:"handleRegisterErrorCaptureEvents",value:function(e){var r=this;e&&(e.config.errorHandler=function(e,t){try{var n=e.message,o=e.stack,i=void 0===o?[]:o;"[object Object]"===Object.prototype.toString.call(t)&&(r.otherErrorInfo={componentPosition:H.formatComponentInfo(t),propsData:t.$options.propsData}),r.level=N.ERROR,r.category=B.VUE_ERROR,r.url=H.getErrorUrl(i),r.msg=n,r.stack=i,r.recordError()}catch(a){console.log("vue错误异常",a)}})}}]),t}(A),Y=X,J=t("5530"),G=(t("b680"),{getTiming:function(){try{if(!window.performance||!window.performance.getEntriesByType)throw Error("你的浏览器不支持 performance 操作");var e=window.performance.getEntriesByType("navigation")[0],r={};return r.tcpTime=(e.connectEnd-e.connectStart).toFixed(2),r.dnsTime=(e.domainLookupEnd-e.domainLookupStart).toFixed(2),r.dnsCacheTime=(e.domainLookupStart-e.fetchStart).toFixed(2),r.redirectTime=(e.redirectEnd-e.redirectStart).toFixed(2),r.resTime=(e.responseEnd-e.responseStart).toFixed(2),r.ttfbTime=(e.responseStart-e.fetchStart).toFixed(2),r.blankTime=(e.responseStart-e.fetchStart).toFixed(2),r.analysisTime=(e.domComplete-e.domInteractive).toFixed(2),r.domReadyTime=(e.domContentLoadedEventEnd-e.fetchStart).toFixed(2),r.firstInteractTime=(e.domInteractive-e.fetchStart).toFixed(2),r.loadPageTime=(e.loadEventStart-e.fetchStart).toFixed(2),r.unloadTime=(e.unloadEventEnd-e.unloadEventStart).toFixed(2),Object.keys(r).forEach((function(e){r[e]="".concat(r[e],"ms")})),r}catch(t){throw Error(t)}},getEntries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!window.performance||!window.performance.getEntries)throw Error("该浏览器不支持performance.getEntries方法");var r=[],t=window.performance.getEntries();return t&&0!==t.length?(t.forEach((function(t){var n={};e.indexOf(t.initiatorType)>-1&&(n.name=t.name,n.initiatorType=t.initiatorType,n.nextHopProtocol=t.nextHopProtocol,n.redirectTime=(t.redirectEnd-t.redirectStart).toFixed(2),n.dnsTime=(t.domainLookupEnd-t.domainLookupStart).toFixed(2),n.tcpTime=(t.connectEnd-t.connectStart).toFixed(2),n.ttfbTime=(t.responseStart-t.requestStart).toFixed(2),n.responseTime=(t.responseEnd-t.responseStart).toFixed(2),n.reqTotalTime=(t.responseEnd-t.requestStart).toFixed(2),r.push(n))})),r):r}}),Z=G,z=function(e){Object(x["a"])(t,e);var r=Object(S["a"])(t);function t(e){var n;return Object(y["a"])(this,t),n=r.call(this,e||{}),n.url=e.url||"",n.pageId=e.pageId||"",n.category=B.PERFORMANCE,n.reportMethod=e.reportMethod||{},n.usePerf=!!e.usePerf,n.useResource=!!e.useResource,n.usefulResourceType=n._getResourceType(e.usefulResourceType),n.performanceInfo={resource:[],performance:{}},n}return Object(b["a"])(t,[{key:"record",value:function(){try{this.usePerf&&(this.performanceInfo.performance=Z.getTiming()),this.useResource&&(this.performanceInfo.resource=Z.getEntries(this.usefulResourceType));var e={pageId:this.pageId,time:(new Date).format("yyyy-MM-dd HH:mm:ss"),performance:this.performanceInfo.performance,resource:this.performanceInfo.resource,markUser:this._generateMarkUser(),markUv:this._generateMarkUv(),deviceInfo:this._getDeviceInfo()},r=Object(J["a"])(Object(J["a"])({},this.extendsInfo),{},{category:this.category,logType:N.INFO,logInfo:JSON.stringify(e)});console.log("性能监控信息：",r),sessionStorage.setItem("page_performance",JSON.stringify(r)),new T(this.url,this.reportMethod).report(r),this._clearPerformance()}catch(t){console.log("性能监控信息上报异常：",t)}}},{key:"_getResourceType",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.keys(e).length>0;if(!r)return["script","css","fetch","xmlhttprequest","link","img"];var t=e.useRScript,n=e.useRCSS,o=e.useRFetch,i=e.useRXHR,a=e.useRLink,c=e.useRImg,s=[];return t&&s.push("script"),n&&s.push("css"),o&&s.push("fetch"),i&&s.push("xmlhttprequest"),a&&s.push("link"),c&&s.push("img"),s}},{key:"_randomString",value:function(e){for(var r=e||10,t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789",n=t.length,o="",i=0;i<r;i+=1)o+=t.charAt(Math.floor(Math.random()*n));return o+(new Date).getTime()}},{key:"_generateMarkUser",value:function(){var e=sessionStorage.getItem("ps_markUser")||"";return e||(e=this._randomString(),sessionStorage.setItem("ps_markUser",e)),e}},{key:"_generateMarkUv",value:function(){var e=new Date,r=sessionStorage.getItem("ps_markUv")||"",t=sessionStorage.getItem("ps_markUvTime")||"",n=e.format("yyyy/MM/dd 23:59:59");return(!r&&!t||e.getTime()>1*t)&&(r=this._randomString(),sessionStorage.setItem("ps_markUv",r),sessionStorage.setItem("ps_markUvTime",new Date(n).getTime())),r}},{key:"_clearPerformance",value:function(){window.performance&&window.performance.clearResourceTimings&&(performance.clearResourceTimings(),this.performanceInfo.performance={},this.performanceInfo.resource=[])}}]),t}(A),ee=z,re=function(e){Object(x["a"])(t,e);var r=Object(S["a"])(t);function t(e){var n;return Object(y["a"])(this,t),n=r.call(this,e||{}),n.category=B.NETWORK_SPEED,n.pageId=e.pageId||"",n.url=e.url||"",n.reportMethod=e.reportMethod||{},n.timeInterval=e.timeInterval||6e4,n.startTime=0,n.endTime=0,n.downloadSize=67185,n.filePath="https://markdowncun.oss-cn-beijing.aliyuncs.com/20210909211826.png",n}return Object(b["a"])(t,[{key:"reportNetworkSpeed",value:function(){var e=this;this._getSpeed(),setInterval((function(){e._getSpeed()}),this.timeInterval)}},{key:"_now",value:function(){return performance.now()||performance.webkitNow()||performance.msNow()||performance.oNow()||performance.mozNow()||(new Date).getTime()}},{key:"_getSpeed",value:function(){var e=this;try{var r,t=new XMLHttpRequest;t.onreadystatechange=function(){if(2===t.readyState&&(e.startTime=Date.now()),4===t.readyState&&200===t.status){e.endTime=Date.now(),r=t.responseText.length;var n=(r/((e.endTime-e.startTime)/1e3)/1024).toFixed(2),o=Object(J["a"])(Object(J["a"])({},e.extendsInfo),{},{category:e.category,logType:N.INFO,logInfo:JSON.stringify({time:(new Date).format("yyyy-MM-dd HH:mm:ss"),pageId:e.pageId,networkSpeed:n,deviceInfo:e._getDeviceInfo()})});console.log("网速测试信息：",o),new T(e.url,e.reportMethod).report(o)}},t.open("GET","".concat(this.filePath,"?rand=").concat(Math.random()),!0),t.send()}catch(n){console.log("网速测试失败：",n)}}},{key:"_getSpeedByImg",value:function(){var e=this,r=new Image;r.onload=function(){e.endTime=e._now(),e._calcSpeed()},this.startTime=this._now(),r.src="".concat(this.filePath,"?rand=").concat(this.startTime)}},{key:"_calcSpeed",value:function(){var e=(this.endTime-this.startTime)/1e3,r=8*this.downloadSize,t=(r/e).toFixed(2),n=(t/1024).toFixed(2),o=(n/1024).toFixed(2);return{speedKbps:n,speedMbps:o}}}]),t}(A),te=re,ne=(t("b7ee"),function(){function e(){Object(y["a"])(this,e),this.jsError=!0,this.vueError=!1,this.promiseError=!0,this.resourceError=!0,this.consoleError=!1}return Object(b["a"])(e,[{key:"init",value:function(e){var r=e||{};this.vueError=r.vueError,this.consoleError=r.consoleError,this.jsError=!(!1===r.jsError),this.promiseError=!(!1===r.promiseError),this.resourceError=!(!1===r.resourceError);var t=r.url,n=r.extendsInfo||{},o=r.reportMethod||{},i={reportUrl:t,extendsInfo:n,reportMethod:o};this.jsError&&new D(i).handleRegisterErrorCaptureEvents(),this.promiseError&&new V(i).handleRegisterErrorCaptureEvents(),this.resourceError&&new K(i).handleRegisterErrorCaptureEvents(),this.consoleError&&new P(i).handleRegisterErrorCaptureEvents(),this.vueError&&r.vue&&new Y(i).handleRegisterErrorCaptureEvents(r.vue)}},{key:"monitorPerformance",value:function(e){var r=e||{};new te(r).reportNetworkSpeed();var t=function(){return new ee(r).record()};window.removeEventListener("unload",t),window.addEventListener("load",t)}}]),e}()),oe=ne,ie=oe;window.FEMonitor=oe,n["default"].config.productionTip=!1,n["default"].use(E.a),(new ie).init({url:"http://localhost:3000/monitor",consoleError:!0,vueError:!0,vue:n["default"],extendsInfo:{}}),new n["default"]({render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,r,t){"use strict";t("9c0c")},"9c0c":function(e,r,t){},b7ee:function(e,r,t){t("ac1f"),t("5319"),t("4d63"),t("25f0"),t("159b"),t("b64b"),t("d81d"),Date.prototype.format=function(e){var r=e,t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours()%12===0?12:this.getHours()%12,"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()},n={0:"/u65e5",1:"/u4e00",2:"/u4e8c",3:"/u4e09",4:"/u56db",5:"/u4e94",6:"/u516d"};if(/(y+)/.test(r)&&(r=r.replace(RegExp.$1,"".concat(this.getFullYear()).substr(4-RegExp.$1.length))),/(E+)/.test(r)){var o=RegExp.$1.length>2?"/u661f/u671f":"/u5468",i=RegExp.$1.length>1?o:"";r=r.replace(RegExp.$1,i+n["".concat(this.getDay())])}return Object.keys(t).forEach((function(e){new RegExp("(".concat(e,")")).test(r)&&(r=r.replace(RegExp.$1,1===RegExp.$1.length?t[e]:"00".concat(t[e]).substr("".concat(t[e]).length)))})),r},Error.prepareStackTrace=function(e,r){return r.map((function(e){return{FILE_NAME:e.getFileName(),FUNC_NAME:e.getFunctionName(),COLUMN_NUMBER:e.getColumnNumber(),LINE_NUMBER:e.getLineNumber()}}))}},bf6c:function(e,r,t){}});
//# sourceMappingURL=app.a66a4753.js.map