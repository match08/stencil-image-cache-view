/*! Built with http://stenciljs.com */
var CameraSource,CameraResultType,FilesystemDirectory,FilesystemEncoding,HapticsImpactStyle,ActionSheetOptionStyle,PhotosAlbumType,StatusBarStyle,__extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),__generator=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};import{h}from"./cached-image.core.js";!function(e){e.Prompt="PROMPT",e.Camera="CAMERA",e.Photos="PHOTOS"}(CameraSource||(CameraSource={})),function(e){e.Uri="uri",e.Base64="base64"}(CameraResultType||(CameraResultType={})),function(e){e.Application="APPLICATION",e.Documents="DOCUMENTS",e.Data="DATA",e.Cache="CACHE",e.External="EXTERNAL",e.ExternalStorage="EXTERNAL_STORAGE"}(FilesystemDirectory||(FilesystemDirectory={})),function(e){e.UTF8="utf8",e.ASCII="ascii",e.UTF16="utf18"}(FilesystemEncoding||(FilesystemEncoding={})),function(e){e.Heavy="HEAVY",e.Medium="MEDIUM",e.Light="LIGHT"}(HapticsImpactStyle||(HapticsImpactStyle={})),function(e){e.Default="DEFAULT",e.Destructive="DESTRUCTIVE",e.Cancel="CANCEL"}(ActionSheetOptionStyle||(ActionSheetOptionStyle={})),function(e){e.Smart="smart",e.Shared="shared",e.User="user"}(PhotosAlbumType||(PhotosAlbumType={})),function(e){e.Dark="DARK",e.Light="LIGHT"}(StatusBarStyle||(StatusBarStyle={}));var CapacitorWeb=function(){function e(){var e=this;this.Plugins={},this.platform="web",this.isNative=!1,this.Plugins=new Proxy(this.Plugins,{get:function(t,n){if(void 0===t[n]){var r=e;return new Proxy({},{get:function(e,t){return void 0===e[t]?r.pluginMethodNoop.bind(r,e,t,n):e[t]}})}return t[n]}})}return e.prototype.pluginMethodNoop=function(e,t,n){return Promise.reject(n+" does not have web implementation.")},e.prototype.getPlatform=function(){return this.platform},e.prototype.isPluginAvailable=function(e){return this.Plugins.hasOwnProperty(e)},e.prototype.handleError=function(e){console.error(e)},e}(),Capacitor$1=new CapacitorWeb;Capacitor$1=window.Capacitor||Capacitor$1,window.Capacitor||(window.Capacitor=Capacitor$1);var Plugins=Capacitor$1.Plugins,WebPluginRegistry=function(){function e(){this.plugins={},this.loadedPlugins={}}return e.prototype.addPlugin=function(e){this.plugins[e.config.name]=e},e.prototype.getPlugin=function(e){return this.plugins[e]},e.prototype.loadPlugin=function(e){var t=this.getPlugin(e);t?t.load():console.error("Unable to load web plugin "+e+", no such plugin found.")},e.prototype.getPlugins=function(){var e=[];for(var t in this.plugins)e.push(this.plugins[t]);return e},e}(),WebPlugins=new WebPluginRegistry,WebPlugin=function(){function e(e,t){this.config=e,this.loaded=!1,this.listeners={},this.windowListeners={},t?t.addPlugin(this):WebPlugins.addPlugin(this)}return e.prototype.addWindowListener=function(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0},e.prototype.removeWindowListener=function(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)},e.prototype.addListener=function(e,t){var n=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);var r=this.windowListeners[e];return r&&!r.registered&&this.addWindowListener(r),{remove:function(){n.removeListener(e,t)}}},e.prototype.removeListener=function(e,t){var n=this.listeners[e];if(n){var r=n.indexOf(t);this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}},e.prototype.notifyListeners=function(e,t){this.listeners[e].forEach(function(e){return e(t)})},e.prototype.hasListeners=function(e){return!!this.listeners[e].length},e.prototype.registerWindowListener=function(e,t){var n=this;this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:function(e){n.notifyListeners(t,e)}}},e.prototype.requestPermissions=function(){return Capacitor.isNative?Capacitor.nativePromise(this.config.name,"requestPermissions",{}):Promise.resolve({results:[]})},e.prototype.load=function(){this.loaded=!0},e}(),shouldMergeWebPlugin=function(e){return e.config.platforms&&e.config.platforms.indexOf(Capacitor.platform)>=0},mergeWebPlugins=function(e){for(var t=0,n=WebPlugins.getPlugins();t<n.length;t++){var r=n[t];mergeWebPlugin(e,r)}},mergeWebPlugin=function(e,t){e.hasOwnProperty(t.config.name)&&!shouldMergeWebPlugin(t)||(e[t.config.name]=t)},extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};function __extends(e,t){function n(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function __awaiter(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,u)}s((r=r.apply(e,t||[])).next())})}function __generator(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var BrowserPluginWeb=function(e){function t(){return e.call(this,{name:"Browser",platforms:["web"]})||this}return __extends(t,e),t.prototype.open=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return this._lastWindow=window.open(e.url,e.windowName||"_blank"),[2,Promise.resolve()]})})},t.prototype.prefetch=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,Promise.resolve()]})})},t.prototype.close=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return this._lastWindow&&this._lastWindow.close(),[2,Promise.resolve()]})})},t}(WebPlugin),Browser=new BrowserPluginWeb,CameraPluginWeb=function(e){function t(){return e.call(this,{name:"Camera",platforms:["web"]})||this}return __extends(t,e),t.prototype.getPhoto=function(e){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){return[2,new Promise(function(t,n){return __awaiter(e,void 0,void 0,function(){var e,r=this;return __generator(this,function(o){switch(o.label){case 0:return e=document.createElement("ion-pwa-camera-modal"),document.body.appendChild(e),[4,e.componentOnReady()];case 1:return o.sent(),e.addEventListener("onPhoto",function(o){return __awaiter(r,void 0,void 0,function(){var r,i;return __generator(this,function(a){switch(a.label){case 0:return null!==(r=o.detail)?[3,1]:(n(),[3,3]);case 1:return i=t,[4,this._getCameraPhoto(r)];case 2:i.apply(void 0,[a.sent()]),a.label=3;case 3:return e.dismiss(),[2]}})})}),e.present(),[2]}})})})]})})},t.prototype._getCameraPhoto=function(e){return new Promise(function(t,n){var r=new FileReader;r.readAsDataURL(e),r.onloadend=function(){t({base64Data:r.result,webPath:r.result,format:"jpeg"})},r.onerror=function(e){n(e)}})},t}(WebPlugin),Camera=new CameraPluginWeb,ClipboardPluginWeb=function(e){function t(){return e.call(this,{name:"Clipboard",platforms:["web"]})||this}return __extends(t,e),t.prototype.write=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return navigator.clipboard?e.string||e.url?[4,navigator.clipboard.writeText(e.string||e.label)]:[3,2]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:return t.sent(),[3,3];case 2:if(e.image)return[2,Promise.reject("Setting images not supported on the web")];t.label=3;case 3:return[2,Promise.resolve()]}})})},t.prototype.read=function(e){return __awaiter(this,void 0,void 0,function(){var e,t,n,r;return __generator(this,function(o){switch(o.label){case 0:return navigator.clipboard?[4,navigator.clipboard.read()]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:for(e=o.sent(),t=0,n=e.items;t<n.length;t++)if("text/plain"===(r=n[t]).type)return[2,Promise.resolve(r.getAs("text/plain"))];return[2,Promise.reject("Unable to get data from clipboard")]}})})},t}(WebPlugin),Clipboard=new ClipboardPluginWeb,extend=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.forEach(function(t){if(t&&"object"==typeof t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}),e},uuid4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})},GeolocationPluginWeb=function(e){function t(){return e.call(this,{name:"Geolocation",platforms:["web"]})||this}return __extends(t,e),t.prototype.getCurrentPosition=function(e){var t=this;return new Promise(function(n,r){return t.requestPermissions().then(function(t){window.navigator.geolocation.getCurrentPosition(function(e){n(e)},function(e){r(e)},extend({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},e))})})},t.prototype.watchPosition=function(e,t){return""+window.navigator.geolocation.watchPosition(function(e){t(e)},function(e){t(null,e)},extend({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},e))},t.prototype.clearWatch=function(e){return window.navigator.geolocation.clearWatch(parseInt(e.id,10)),Promise.resolve()},t}(WebPlugin),Geolocation=new GeolocationPluginWeb,DevicePluginWeb=function(e){function t(){return e.call(this,{name:"Device",platforms:["web"]})||this}return __extends(t,e),t.prototype.getInfo=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n;return __generator(this,function(r){switch(r.label){case 0:e=navigator.userAgent,t=this.parseUa(e),n={},r.label=1;case 1:return r.trys.push([1,3,,4]),[4,navigator.getBattery()];case 2:return n=r.sent(),[3,4];case 3:return r.sent(),[3,4];case 4:return[2,Promise.resolve({model:t.model,platform:"pwa",appVersion:"",osVersion:t.osVersion,manufacturer:navigator.vendor,isVirtual:!1,batteryLevel:n.level,isCharging:n.charging,uuid:this.getUid()})]}})})},t.prototype.parseUa=function(e){var t={},n=e.indexOf("(")+1,r=e.indexOf("Apple")-2,o=e.substring(n,r);return-1!==e.indexOf("Android")?(t.model=o.replace(" wv","").split("; ").pop().split(" Build")[0],t.osVersion=o.split("; ")[1]):(t.model=o.split("; ")[0],t.osVersion=navigator.oscpu?navigator.oscpu:o.split("; ").pop().split(" ")[3].replace(/_/g,".")),t},t.prototype.getUid=function(){var e=window.localStorage.getItem("_capuid");return e||(e=uuid4(),window.localStorage.setItem("_capuid",e),e)},t}(WebPlugin),Device=new DevicePluginWeb,SharePluginWeb=function(e){function t(){return e.call(this,{name:"Share",platforms:["web"]})||this}return __extends(t,e),t.prototype.share=function(e){return navigator.share?navigator.share({title:e.title,text:e.text,url:e.url}):Promise.reject("Web Share API not available")},t}(WebPlugin),Share=new SharePluginWeb,ModalsPluginWeb=function(e){function t(){return e.call(this,{name:"Modals",platforms:["web"]})||this}return __extends(t,e),t.prototype.alert=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return window.alert(e.message),[2,Promise.resolve()]})})},t.prototype.prompt=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){return t=window.prompt(e.message,e.inputPlaceholder||""),[2,Promise.resolve({value:t,cancelled:null===t})]})})},t.prototype.confirm=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){return t=window.confirm(e.message),[2,Promise.resolve({value:t})]})})},t.prototype.showActions=function(e){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(n){return[2,new Promise(function(n,r){return __awaiter(t,void 0,void 0,function(){var t,r;return __generator(this,function(o){switch(o.label){case 0:return(t=document.querySelector("ion-action-sheet-controller"))||(t=document.createElement("ion-action-sheet-controller"),document.body.appendChild(t)),[4,t.componentOnReady()];case 1:return o.sent(),r=e.options.map(function(e,t){return{text:e.title,role:e.style&&e.style.toLowerCase()||"",icon:e.icon||"",handler:function(){n({index:t})}}}),[4,t.create({title:e.title,buttons:r})];case 2:return[4,o.sent().present()];case 3:return o.sent(),[2]}})})})]})})},t}(WebPlugin),Modals=new ModalsPluginWeb,StoragePluginWeb=function(e){function t(){var t=e.call(this,{name:"Storage",platforms:["web"]})||this;return t.KEY_PREFIX="_cap_",t}return __extends(t,e),t.prototype.get=function(e){var t=this;return new Promise(function(n,r){n({value:window.localStorage.getItem(t.makeKey(e.key))})})},t.prototype.set=function(e){var t=this;return new Promise(function(n,r){window.localStorage.setItem(t.makeKey(e.key),e.value),n()})},t.prototype.remove=function(e){var t=this;return new Promise(function(n,r){window.localStorage.removeItem(t.makeKey(e.key)),n()})},t.prototype.keys=function(){var e=this;return new Promise(function(t,n){t({keys:Object.keys(localStorage).filter(function(t){return e.isKey(t)}).map(function(t){return e.getKey(t)})})})},t.prototype.clear=function(){var e=this;return new Promise(function(t,n){Object.keys(localStorage).filter(function(t){return e.isKey(t)}).forEach(function(e){return window.localStorage.removeItem(e)}),t()})},t.prototype.makeKey=function(e){return this.KEY_PREFIX+e},t.prototype.isKey=function(e){return 0===e.indexOf(this.KEY_PREFIX)},t.prototype.getKey=function(e){return e.substr(this.KEY_PREFIX.length)},t}(WebPlugin),Storage=new StoragePluginWeb,ToastPluginWeb=function(e){function t(){return e.call(this,{name:"Toast",platforms:["web"]})||this}return __extends(t,e),t.prototype.show=function(e){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){switch(r.label){case 0:return(t=document.querySelector("ion-toast-controller"))||(t=document.createElement("ion-toast-controller"),document.body.appendChild(t)),[4,t.componentOnReady()];case 1:return r.sent(),n=3e3,e.duration&&(n="long"===e.duration?5e3:3e3),[4,t.create({position:"bottom",message:e.text,duration:n})];case 2:return[4,r.sent().present()];case 3:return[2,r.sent()]}})})},t}(WebPlugin),Toast=new ToastPluginWeb;mergeWebPlugins(Plugins);var registerWebPlugin=function(e){mergeWebPlugin(Plugins,e)},ImageCachePluginWeb=function(e){function t(){return e.call(this,{name:"ImageCachePlugin",platforms:["web"]})||this}return __extends(t,e),t.prototype.clear=function(){return new Promise(function(){})},t.prototype.clearItem=function(e){return new Promise(function(){console.log(e)})},t.prototype.hasItem=function(e){return new Promise(function(){console.log(e)})},t.prototype.get=function(e){return new Promise(function(t){t({value:e.src})})},t}(WebPlugin),ImageCachePlugin=new ImageCachePluginWeb;registerWebPlugin(ImageCachePlugin);var ImageCachePlugin$1=Plugins.ImageCachePlugin,ImageCache=function(){function e(){}return e.prototype.clear=function(){return ImageCachePlugin$1.clear()},e.prototype.clearItem=function(e){return ImageCachePlugin$1.clearItem(e)},e.prototype.hasItem=function(e){return ImageCachePlugin$1.hasItem(e)},e.prototype.get=function(e){return ImageCachePlugin$1.get(e)},e}(),__awaiter$1=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,u)}s((r=r.apply(e,t||[])).next())})};function uuid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}var CachedImage=function(){function e(){this.cache=new ImageCache,this.id=uuid()}return e.prototype.srcChanged=function(){this.loadImage()},e.prototype.render=function(){return h("div",null,h("img",{id:this.id}))},e.prototype.loadImage=function(){return __awaiter$1(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.cache.get({src:this.src})];case 1:return e=n.sent().value,this.element.shadowRoot.querySelector("img").setAttribute("src",e),[3,3];case 2:return t=n.sent(),console.log(t),[3,3];case 3:return[2]}})})},e.prototype.componentWillUpdate=function(){this.loadImage()},e.prototype.componentDidLoad=function(){this.loadImage()},Object.defineProperty(e,"is",{get:function(){return"st-cached-image"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{element:{elementRef:!0},errorHolder:{type:String,attr:"error-holder"},id:{state:!0},placeHolder:{type:String,attr:"place-holder"},src:{type:String,attr:"src",watchCallbacks:["srcChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}div{width:100%;height:100%}"},enumerable:!0,configurable:!0}),e}();export{CachedImage as StCachedImage};