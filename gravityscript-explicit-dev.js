/*!
 * GravityScript
 * http://josephpcohen.com
 * http://gravityscript.googlecode.com/
 *
 * Copyright 2011, Joseph Paul Cohen
 * Veronica Carrillo-Marquez
 * Fabio Elia
 * Released under the GPLv3 License
 *
 * Based off of Mr. Doobs code for Google Gravity
 */

if (window.jQuery != 'undefined'){
	/*! jQuery v1.7.2 jquery.com | jquery.org/license */
	(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test("Â ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
	a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
	.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
	
}


/*! jQuery Mobile v1.1.1 1981b3f5ec22675ae47df8f0bdf9622e7780e90e jquerymobile.com | jquery.org/license */
(function(l,t,k){typeof define==="function"&&define.amd?define(["jquery"],function(E){k(E,l,t);return E.mobile}):k(l.jQuery,l,t)})(this,document,function(l,t,k,E){(function(a,c,b,d){function e(a){for(;a&&typeof a.originalEvent!=="undefined";)a=a.originalEvent;return a}function g(b){for(var e={},g,d;b;){g=a.data(b,s);for(d in g)if(g[d])e[d]=e.hasVirtualBinding=true;b=b.parentNode}return e}function f(){y&&(clearTimeout(y),y=0);y=setTimeout(function(){G=y=0;A.length=0;F=false;H=true},a.vmouse.resetTimerDuration)}
function j(b,g,c){var f,h;if(!(h=c&&c[b])){if(c=!c)a:{for(c=g.target;c;){if((h=a.data(c,s))&&(!b||h[b]))break a;c=c.parentNode}c=null}h=c}if(h){f=g;var c=f.type,j,F;f=a.Event(f);f.type=b;h=f.originalEvent;j=a.event.props;c.search(/^(mouse|click)/)>-1&&(j=w);if(h)for(F=j.length;F;)b=j[--F],f[b]=h[b];if(c.search(/mouse(down|up)|click/)>-1&&!f.which)f.which=1;if(c.search(/^touch/)!==-1&&(b=e(h),c=b.touches,b=b.changedTouches,c=c&&c.length?c[0]:b&&b.length?b[0]:d))for(h=0,len=x.length;h<len;h++)b=x[h],
f[b]=c[b];a(g.target).trigger(f)}return f}function h(b){var e=a.data(b.target,u);if(!F&&(!G||G!==e))if(e=j("v"+b.type,b))e.isDefaultPrevented()&&b.preventDefault(),e.isPropagationStopped()&&b.stopPropagation(),e.isImmediatePropagationStopped()&&b.stopImmediatePropagation()}function q(b){var c=e(b).touches,d;if(c&&c.length===1&&(d=b.target,c=g(d),c.hasVirtualBinding))G=N++,a.data(d,u,G),y&&(clearTimeout(y),y=0),z=H=false,d=e(b).touches[0],t=d.pageX,C=d.pageY,j("vmouseover",b,c),j("vmousedown",b,c)}
function o(a){H||(z||j("vmousecancel",a,g(a.target)),z=true,f())}function m(b){if(!H){var c=e(b).touches[0],d=z,h=a.vmouse.moveDistanceThreshold;z=z||Math.abs(c.pageX-t)>h||Math.abs(c.pageY-C)>h;flags=g(b.target);z&&!d&&j("vmousecancel",b,flags);j("vmousemove",b,flags);f()}}function v(a){if(!H){H=true;var b=g(a.target),c;j("vmouseup",a,b);if(!z&&(c=j("vclick",a,b))&&c.isDefaultPrevented())c=e(a).changedTouches[0],A.push({touchID:G,x:c.clientX,y:c.clientY}),F=true;j("vmouseout",a,b);z=false;f()}}function n(b){var b=
a.data(b,s),e;if(b)for(e in b)if(b[e])return true;return false}function k(){}function p(b){var e=b.substr(1);return{setup:function(){n(this)||a.data(this,s,{});a.data(this,s)[b]=true;l[b]=(l[b]||0)+1;l[b]===1&&J.bind(e,h);a(this).bind(e,k);if(M)l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&J.bind("touchstart",q).bind("touchend",v).bind("touchmove",m).bind("scroll",o)},teardown:function(){--l[b];l[b]||J.unbind(e,h);M&&(--l.touchstart,l.touchstart||J.unbind("touchstart",q).unbind("touchmove",m).unbind("touchend",
v).unbind("scroll",o));var g=a(this),c=a.data(this,s);c&&(c[b]=false);g.unbind(e,k);n(this)||g.removeData(s)}}}var s="virtualMouseBindings",u="virtualTouchID",c="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),x="clientX clientY pageX pageY screenX screenY".split(" "),w=a.event.props.concat(a.event.mouseHooks?a.event.mouseHooks.props:[]),l={},y=0,t=0,C=0,z=false,A=[],F=false,H=false,M="addEventListener"in b,J=a(b),N=1,G=0;a.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,
resetTimerDuration:1500};for(var K=0;K<c.length;K++)a.event.special[c[K]]=p(c[K]);M&&b.addEventListener("click",function(b){var e=A.length,g=b.target,c,d,f,h,j;if(e){c=b.clientX;d=b.clientY;threshold=a.vmouse.clickDistanceThreshold;for(f=g;f;){for(h=0;h<e;h++)if(j=A[h],f===g&&Math.abs(j.x-c)<threshold&&Math.abs(j.y-d)<threshold||a.data(f,u)===j.touchID){b.preventDefault();b.stopPropagation();return}f=f.parentNode}}},true)})(l,t,k);(function(a,c,b){function d(a){a=a||location.href;return"#"+a.replace(/^[^#]*#?(.*)$/,
"$1")}var e="hashchange",g=k,f,j=a.event.special,h=g.documentMode,q="on"+e in c&&(h===b||h>7);a.fn[e]=function(a){return a?this.bind(e,a):this.trigger(e)};a.fn[e].delay=50;j[e]=a.extend(j[e],{setup:function(){if(q)return false;a(f.start)},teardown:function(){if(q)return false;a(f.stop)}});f=function(){function f(){var b=d(),g=s(n);if(b!==n)p(n=b,g),a(c).trigger(e);else if(g!==n)location.href=location.href.replace(/#.*/,"")+g;j=setTimeout(f,a.fn[e].delay)}var h={},j,n=d(),k=function(a){return a},p=
k,s=k;h.start=function(){j||f()};h.stop=function(){j&&clearTimeout(j);j=b};a.browser.msie&&!q&&function(){var b,c;h.start=function(){if(!b)c=(c=a.fn[e].src)&&c+d(),b=a('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){c||p(d());f()}).attr("src",c||"javascript:0").insertAfter("body")[0].contentWindow,g.onpropertychange=function(){try{if(event.propertyName==="title")b.document.title=g.title}catch(a){}}};h.stop=k;s=function(){return d(b.location.href)};p=function(c,d){var f=b.document,
h=a.fn[e].domain;if(c!==d)f.title=g.title,f.open(),h&&f.write('<script>document.domain="'+h+'"<\/script>'),f.close(),b.location.hash=c}}();return h}()})(l,this);(function(a,c){if(a.cleanData){var b=a.cleanData;a.cleanData=function(e){for(var c=0,f;(f=e[c])!=null;c++)a(f).triggerHandler("remove");b(e)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){a(this).triggerHandler("remove")});return d.call(a(this),
b,c)})}}a.widget=function(b,c,f){var d=b.split(".")[0],h,b=b.split(".")[1];h=d+"-"+b;if(!f)f=c,c=a.Widget;a.expr[":"][h]=function(c){return!!a.data(c,b)};a[d]=a[d]||{};a[d][b]=function(a,b){arguments.length&&this._createWidget(a,b)};c=new c;c.options=a.extend(true,{},c.options);a[d][b].prototype=a.extend(true,c,{namespace:d,widgetName:b,widgetEventPrefix:a[d][b].prototype.widgetEventPrefix||b,widgetBaseClass:h},f);a.widget.bridge(b,a[d][b])};a.widget.bridge=function(b,g){a.fn[b]=function(d){var j=
typeof d==="string",h=Array.prototype.slice.call(arguments,1),q=this,d=!j&&h.length?a.extend.apply(null,[true,d].concat(h)):d;if(j&&d.charAt(0)==="_")return q;j?this.each(function(){var g=a.data(this,b);if(!g)throw"cannot call methods on "+b+" prior to initialization; attempted to call method '"+d+"'";if(!a.isFunction(g[d]))throw"no such method '"+d+"' for "+b+" widget instance";var j=g[d].apply(g,h);if(j!==g&&j!==c)return q=j,false}):this.each(function(){var c=a.data(this,b);c?c.option(d||{})._init():
a.data(this,b,new g(d,this))});return q}};a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(b,c){a.data(c,this.widgetName,this);this.element=a(c);this.options=a.extend(true,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){var b=
{};a.metadata&&(b=a.metadata.get(element)[this.widgetName]);return b},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(b,d){var f=b;if(arguments.length===0)return a.extend({},this.options);if(typeof b==="string"){if(d===c)return this.options[b];
f={};f[b]=d}this._setOptions(f);return this},_setOptions:function(b){var c=this;a.each(b,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,b){this.options[a]=b;a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",b);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(b,c,d){var j=this.options[b],c=a.Event(c);
c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase();d=d||{};if(c.originalEvent)for(var b=a.event.props.length,h;b;)h=a.event.props[--b],c[h]=c.originalEvent[h];this.element.trigger(c,d);return!(a.isFunction(j)&&j.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(l);(function(a,c){a.widget("mobile.widget",{_createWidget:function(){a.Widget.prototype._createWidget.apply(this,arguments);this._trigger("init")},_getCreateOptions:function(){var b=this.element,d={};
a.each(this.options,function(a){var g=b.jqmData(a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}));g!==c&&(d[a]=g)});return d},enhanceWithin:function(b,c){this.enhance(a(this.options.initSelector,a(b)),c)},enhance:function(b,c){var e,g=a(b),g=a.mobile.enhanceable(g);c&&g.length&&(e=(e=a.mobile.closestPageData(g))&&e.keepNativeSelector()||"",g=g.not(e));g[this.widgetName]()},raise:function(a){throw"Widget ["+this.widgetName+"]: "+a;}})})(l);(function(a,c){var b={};a.mobile=a.extend({},{version:"1.1.1",
ns:"",subPageUrlKey:"ui-page",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:true,hashListeningEnabled:true,linkBindingEnabled:true,defaultPageTransition:"fade",maxTransitionWidth:false,minScrollBack:250,touchOverflowEnabled:false,defaultDialogTransition:"pop",loadingMessage:"loading",pageLoadErrorMessage:"Error Loading Page",loadingMessageTextVisible:false,loadingMessageTheme:"a",pageLoadErrorMessageTheme:"e",autoInitializePage:true,pushStateEnabled:true,
ignoreContentEnabled:false,orientationChangeEnabled:true,buttonMarkup:{hoverDelay:200},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},silentScroll:function(b){if(a.type(b)!==
"number")b=a.mobile.defaultHomeScroll;a.event.special.scrollstart.enabled=false;setTimeout(function(){c.scrollTo(0,b);a(k).trigger("silentscroll",{x:0,y:b})},20);setTimeout(function(){a.event.special.scrollstart.enabled=true},150)},nsNormalizeDict:b,nsNormalize:function(c){return!c?void 0:b[c]||(b[c]=a.camelCase(a.mobile.ns+c))},getInheritedTheme:function(a,b){for(var c=a[0],d="",e=/ui-(bar|body|overlay)-([a-z])\b/,o,m;c;){if((o=c.className||"")&&(m=e.exec(o))&&(d=m[2]))break;c=c.parentNode}return d||
b||"a"},closestPageData:function(a){return a.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("page")},enhanceable:function(a){return this.haveParents(a,"enhance")},hijackable:function(a){return this.haveParents(a,"ajax")},haveParents:function(b,c){if(!a.mobile.ignoreContentEnabled)return b;for(var d=b.length,e=a(),q,o,m,v=0;v<d;v++){o=b.eq(v);m=false;for(q=b[v];q;){if((q.getAttribute?q.getAttribute("data-"+a.mobile.ns+c):"")==="false"){m=true;break}q=q.parentNode}m||(e=e.add(o))}return e},
getScreenHeight:function(){return c.innerHeight||a(c).height()}},a.mobile);a.fn.jqmData=function(b,c){var d;typeof b!="undefined"&&(b&&(b=a.mobile.nsNormalize(b)),d=this.data.apply(this,arguments.length<2?[b]:[b,c]));return d};a.jqmData=function(b,c,d){var e;typeof c!="undefined"&&(e=a.data(b,c?a.mobile.nsNormalize(c):c,d));return e};a.fn.jqmRemoveData=function(b){return this.removeData(a.mobile.nsNormalize(b))};a.jqmRemoveData=function(b,c){return a.removeData(b,a.mobile.nsNormalize(c))};a.fn.removeWithDependents=
function(){a.removeWithDependents(this)};a.removeWithDependents=function(b){b=a(b);(b.jqmData("dependents")||a()).remove();b.remove()};a.fn.addDependents=function(b){a.addDependents(a(this),b)};a.addDependents=function(b,c){var d=a(b).jqmData("dependents")||a();a(b).jqmData("dependents",a.merge(d,c))};a.fn.getEncodedText=function(){return a("<div/>").text(a(this).text()).html()};a.fn.jqmEnhanceable=function(){return a.mobile.enhanceable(this)};a.fn.jqmHijackable=function(){return a.mobile.hijackable(this)};
var d=a.find,e=/:jqmData\(([^)]*)\)/g;a.find=function(b,c,j,h){b=b.replace(e,"[data-"+(a.mobile.ns||"")+"$1]");return d.call(this,b,c,j,h)};a.extend(a.find,d);a.find.matches=function(b,c){return a.find(b,null,null,c)};a.find.matchesSelector=function(b,c){return a.find(c,null,null,[b]).length>0}})(l,this);(function(a){a(t);var c=a("html");a.mobile.media=function(){var b={},d=a("<div id='jquery-mediatest'></div>"),e=a("<body>").append(d);return function(a){if(!(a in b)){var f=k.createElement("style"),
j="@media "+a+" { #jquery-mediatest { position:absolute; } }";f.type="text/css";f.styleSheet?f.styleSheet.cssText=j:f.appendChild(k.createTextNode(j));c.prepend(e).prepend(f);b[a]=d.css("position")==="absolute";e.add(f).remove()}return b[a]}}()})(l);(function(a,c){function b(a){var b=a.charAt(0).toUpperCase()+a.substr(1),a=(a+" "+f.join(b+" ")+b).split(" "),d;for(d in a)if(g[a[d]]!==c)return true}function d(a,b,c){var d=k.createElement("div"),c=c?[c]:f,e;for(i=0;i<c.length;i++){var h=c[i],j="-"+h.charAt(0).toLowerCase()+
h.substr(1)+"-"+a+": "+b+";",h=h.charAt(0).toUpperCase()+h.substr(1)+(a.charAt(0).toUpperCase()+a.substr(1));d.setAttribute("style",j);d.style[h]&&(e=true)}return!!e}var e=a("<body>").prependTo("html"),g=e[0].style,f=["Webkit","Moz","O"],j="palmGetResource"in t,h=t.opera,q=t.operamini&&{}.toString.call(t.operamini)==="[object OperaMini]",o=t.blackberry;a.extend(a.mobile,{browser:{}});a.mobile.browser.ie=function(){for(var a=3,b=k.createElement("div"),c=b.all||[];b.innerHTML="<\!--[if gt IE "+ ++a+
"]><br><![endif]--\>",c[0];);return a>4?a:!a}();a.extend(a.support,{orientation:"orientation"in t&&"onorientationchange"in t,touch:"ontouchend"in k,cssTransitions:"WebKitTransitionEvent"in t||d("transition","height 100ms linear")&&!h,pushState:"pushState"in history&&"replaceState"in history,mediaquery:a.mobile.media("only all"),cssPseudoElement:!!b("content"),touchOverflow:!!b("overflowScrolling"),cssTransform3d:d("perspective","10px","moz")||a.mobile.media("(-"+f.join("-transform-3d),(-")+"-transform-3d),(transform-3d)"),
boxShadow:!!b("boxShadow")&&!o,scrollTop:("pageXOffset"in t||"scrollTop"in k.documentElement||"scrollTop"in e[0])&&!j&&!q,dynamicBaseTag:function(){var b=location.protocol+"//"+location.host+location.pathname+"ui-dir/",c=a("head base"),d=null,h="",f;c.length?h=c.attr("href"):c=d=a("<base>",{href:b}).appendTo("head");f=a("<a href='testurl' />").prependTo(e)[0].href;c[0].href=h||location.pathname;d&&d.remove();return f.indexOf(b)===0}(),cssPointerEvents:function(){var a=k.createElement("x"),b=k.documentElement,
c=t.getComputedStyle;if(!("pointerEvents"in a.style))return false;a.style.pointerEvents="auto";a.style.pointerEvents="x";b.appendChild(a);c=c&&c(a,"").pointerEvents==="auto";b.removeChild(a);return!!c}()});e.remove();j=function(){var a=t.navigator.userAgent;return a.indexOf("Nokia")>-1&&(a.indexOf("Symbian/3")>-1||a.indexOf("Series60/5")>-1)&&a.indexOf("AppleWebKit")>-1&&a.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)}();a.mobile.gradeA=function(){return a.support.mediaquery||a.mobile.browser.ie&&a.mobile.browser.ie>=
7};a.mobile.ajaxBlacklist=t.blackberry&&!t.WebKitPoint||q||j;j&&a(function(){a("head link[rel='stylesheet']").attr("rel","alternate stylesheet").attr("rel","stylesheet")});a.support.boxShadow||a("html").addClass("ui-mobile-nosupport-boxshadow")})(l);(function(a,c,b){function d(b,c,d){var e=d.type;d.type=c;a.event.handle.call(b,d);d.type=e}a.each("touchstart touchmove touchend orientationchange throttledresize tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(b,c){a.fn[c]=
function(a){return a?this.bind(c,a):this.trigger(c)};a.attrFn[c]=true});var e=a.support.touch,g=e?"touchstart":"mousedown",f=e?"touchend":"mouseup",j=e?"touchmove":"mousemove";a.event.special.scrollstart={enabled:true,setup:function(){function b(a,h){e=h;d(c,e?"scrollstart":"scrollstop",a)}var c=this,e,f;a(c).bind("touchmove scroll",function(c){a.event.special.scrollstart.enabled&&(e||b(c,true),clearTimeout(f),f=setTimeout(function(){b(c,false)},50))})}};a.event.special.tap={setup:function(){var b=
this,c=a(b);c.bind("vmousedown",function(e){function f(){clearTimeout(p)}function j(){f();c.unbind("vclick",g).unbind("vmouseup",f);a(k).unbind("vmousecancel",j)}function g(a){j();r==a.target&&d(b,"tap",a)}if(e.which&&e.which!==1)return false;var r=e.target,p;c.bind("vmouseup",f).bind("vclick",g);a(k).bind("vmousecancel",j);p=setTimeout(function(){d(b,"taphold",a.Event("taphold",{target:r}))},750)})}};a.event.special.swipe={scrollSupressionThreshold:10,durationThreshold:1E3,horizontalDistanceThreshold:30,
verticalDistanceThreshold:75,setup:function(){var c=a(this);c.bind(g,function(d){function e(b){if(k){var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;n={time:(new Date).getTime(),coords:[c.pageX,c.pageY]};Math.abs(k.coords[0]-n.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&b.preventDefault()}}var g=d.originalEvent.touches?d.originalEvent.touches[0]:d,k={time:(new Date).getTime(),coords:[g.pageX,g.pageY],origin:a(d.target)},n;c.bind(j,e).one(f,function(){c.unbind(j,e);k&&n&&
n.time-k.time<a.event.special.swipe.durationThreshold&&Math.abs(k.coords[0]-n.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(k.coords[1]-n.coords[1])<a.event.special.swipe.verticalDistanceThreshold&&k.origin.trigger("swipe").trigger(k.coords[0]>n.coords[0]?"swipeleft":"swiperight");k=n=b})})}};(function(a,b){function c(){var a=e();a!==f&&(f=a,d.trigger("orientationchange"))}var d=a(b),e,f,j,g,l={0:true,180:true};if(a.support.orientation&&(j=b.innerWidth||a(b).width(),g=b.innerHeight||
a(b).height(),j=j>g&&j-g>50,g=l[b.orientation],j&&g||!j&&!g))l={"-90":true,90:true};a.event.special.orientationchange={setup:function(){if(a.support.orientation&&a.mobile.orientationChangeEnabled)return false;f=e();d.bind("throttledresize",c)},teardown:function(){if(a.support.orientation&&a.mobile.orientationChangeEnabled)return false;d.unbind("throttledresize",c)},add:function(a){var b=a.handler;a.handler=function(a){a.orientation=e();return b.apply(this,arguments)}}};a.event.special.orientationchange.orientation=
e=function(){var c=true,c=k.documentElement;return(c=a.support.orientation?l[b.orientation]:c&&c.clientWidth/c.clientHeight<1.1)?"portrait":"landscape"}})(l,c);(function(){a.event.special.throttledresize={setup:function(){a(this).bind("resize",b)},teardown:function(){a(this).unbind("resize",b)}};var b=function(){e=(new Date).getTime();f=e-c;f>=250?(c=e,a(this).trigger("throttledresize")):(d&&clearTimeout(d),d=setTimeout(b,250-f))},c=0,d,e,f})();a.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",
swiperight:"swipe"},function(b,c){a.event.special[b]={setup:function(){a(this).bind(c,a.noop)}}})})(l,this);(function(a){a.widget("mobile.page",a.mobile.widget,{options:{theme:"c",domCache:false,keepNativeDefault:":jqmData(role='none'), :jqmData(role='nojs')"},_create:function(){var a=this;if(a._trigger("beforecreate")===false)return false;a.element.attr("tabindex","0").addClass("ui-page ui-body-"+a.options.theme).bind("pagebeforehide",function(){a.removeContainerBackground()}).bind("pagebeforeshow",
function(){a.setContainerBackground()})},removeContainerBackground:function(){a.mobile.pageContainer.removeClass("ui-overlay-"+a.mobile.getInheritedTheme(this.element.parent()))},setContainerBackground:function(c){this.options.theme&&a.mobile.pageContainer.addClass("ui-overlay-"+(c||this.options.theme))},keepNativeSelector:function(){var c=this.options;return c.keepNative&&a.trim(c.keepNative)&&c.keepNative!==c.keepNativeDefault?[c.keepNative,c.keepNativeDefault].join(", "):c.keepNativeDefault}})})(l);
(function(a,c,b){var d=function(d){d===b&&(d=true);return function(b,e,h,q){var k=new a.Deferred,m=e?" reverse":"",l=a.mobile.urlHistory.getActive().lastScroll||a.mobile.defaultHomeScroll,n=a.mobile.getScreenHeight(),r=a.mobile.maxTransitionWidth!==false&&a(c).width()>a.mobile.maxTransitionWidth,p=!a.support.cssTransitions||r||!b||b==="none"||Math.max(a(c).scrollTop(),l)>a.mobile.getMaxScrollForTransition(),s=function(){a.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-"+
b)},u=function(){a.event.special.scrollstart.enabled=false;c.scrollTo(0,l);setTimeout(function(){a.event.special.scrollstart.enabled=true},150)},x=function(){q.removeClass(a.mobile.activePageClass+" out in reverse "+b).height("")},r=function(){q&&d&&x();h.addClass(a.mobile.activePageClass);a.mobile.focusPage(h);h.height(n+l);u();p||h.animationComplete(w);h.addClass(b+" in"+m);p&&w()},w=function(){d||q&&x();h.removeClass("out in reverse "+b).height("");s();a(c).scrollTop()!==l&&u();k.resolve(b,e,h,
q,true)};s();q&&!p?(d?q.animationComplete(r):r(),q.height(n+a(c).scrollTop()).addClass(b+" out"+m)):r();return k.promise()}},e=d(),d=d(false);a.mobile.defaultTransitionHandler=e;a.mobile.transitionHandlers={"default":a.mobile.defaultTransitionHandler,sequential:e,simultaneous:d};a.mobile.transitionFallbacks={};a.mobile.getMaxScrollForTransition=a.mobile.getMaxScrollForTransition||function(){return a.mobile.getScreenHeight()*3}})(l,this);(function(a,c){function b(b){l&&(!l.closest(".ui-page-active").length||
b)&&l.removeClass(a.mobile.activeBtnClass);l=null}function d(){p=false;r.length>0&&a.mobile.changePage.apply(null,r.pop())}function e(b,c,d,e){c&&c.data("page")._trigger("beforehide",null,{nextPage:b});b.data("page")._trigger("beforeshow",null,{prevPage:c||a("")});a.mobile.hidePageLoadingMsg();d&&!a.support.cssTransform3d&&a.mobile.transitionFallbacks[d]&&(d=a.mobile.transitionFallbacks[d]);d=(a.mobile.transitionHandlers[d||"default"]||a.mobile.defaultTransitionHandler)(d,e,b,c);d.done(function(){c&&
c.data("page")._trigger("hide",null,{nextPage:b});b.data("page")._trigger("show",null,{prevPage:c||a("")})});return d}function g(){var b=a("."+a.mobile.activePageClass),c=parseFloat(b.css("padding-top")),d=parseFloat(b.css("padding-bottom")),e=parseFloat(b.css("border-top-width")),f=parseFloat(b.css("border-bottom-width"));b.css("min-height",y()-c-d-e-f)}function f(b,c){c&&b.attr("data-"+a.mobile.ns+"role",c);b.page()}function j(a){for(;a;){if(typeof a.nodeName==="string"&&a.nodeName.toLowerCase()==
"a")break;a=a.parentNode}return a}function h(b){var b=a(b).closest(".ui-page").jqmData("url"),c=w.hrefNoHash;if(!b||!m.isPath(b))b=c;return m.makeUrlAbsolute(b,c)}var q=a(t);a("html");var o=a("head"),m={urlParseRE:/^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,parseUrl:function(b){if(a.type(b)==="object")return b;b=m.urlParseRE.exec(b||"")||[];return{href:b[0]||"",hrefNoHash:b[1]||
"",hrefNoSearch:b[2]||"",domain:b[3]||"",protocol:b[4]||"",doubleSlash:b[5]||"",authority:b[6]||"",username:b[8]||"",password:b[9]||"",host:b[10]||"",hostname:b[11]||"",port:b[12]||"",pathname:b[13]||"",directory:b[14]||"",filename:b[15]||"",search:b[16]||"",hash:b[17]||""}},makePathAbsolute:function(a,b){if(a&&a.charAt(0)==="/")return a;for(var a=a||"",c=(b=b?b.replace(/^\/|(\/[^\/]*|[^\/]+)$/g,""):"")?b.split("/"):[],d=a.split("/"),e=0;e<d.length;e++){var f=d[e];switch(f){case ".":break;case "..":c.length&&
c.pop();break;default:c.push(f)}}return"/"+c.join("/")},isSameDomain:function(a,b){return m.parseUrl(a).domain===m.parseUrl(b).domain},isRelativeUrl:function(a){return m.parseUrl(a).protocol===""},isAbsoluteUrl:function(a){return m.parseUrl(a).protocol!==""},makeUrlAbsolute:function(a,b){if(!m.isRelativeUrl(a))return a;var c=m.parseUrl(a),d=m.parseUrl(b),e=c.protocol||d.protocol,f=c.protocol?c.doubleSlash:c.doubleSlash||d.doubleSlash,h=c.authority||d.authority,j=c.pathname!=="",g=m.makePathAbsolute(c.pathname||
d.filename,d.pathname);return e+f+h+g+(c.search||!j&&d.search||"")+c.hash},addSearchParams:function(b,c){var d=m.parseUrl(b),e=typeof c==="object"?a.param(c):c,f=d.search||"?";return d.hrefNoSearch+f+(f.charAt(f.length-1)!=="?"?"&":"")+e+(d.hash||"")},convertUrlToDataUrl:function(a){var b=m.parseUrl(a);if(m.isEmbeddedPage(b))return b.hash.split(s)[0].replace(/^#/,"");else if(m.isSameDomain(b,w))return b.hrefNoHash.replace(w.domain,"").split(s)[0];return a},get:function(a){if(a===c)a=location.hash;
return m.stripHash(a).replace(/[^\/]*\.[^\/*]+$/,"")},getFilePath:function(b){var c="&"+a.mobile.subPageUrlKey;return b&&b.split(c)[0].split(s)[0]},set:function(a){location.hash=a},isPath:function(a){return/\//.test(a)},clean:function(a){return a.replace(w.domain,"")},stripHash:function(a){return a.replace(/^#/,"")},cleanHash:function(a){return m.stripHash(a.replace(/\?.*$/,"").replace(s,""))},isHashValid:function(a){return/^#[^#]+$/.test(a)},isExternal:function(a){a=m.parseUrl(a);return a.protocol&&
a.domain!==x.domain?true:false},hasProtocol:function(a){return/^(:?\w+:)/.test(a)},isFirstPageUrl:function(b){var b=m.parseUrl(m.makeUrlAbsolute(b,w)),d=a.mobile.firstPage,d=d&&d[0]?d[0].id:c;return(b.hrefNoHash===x.hrefNoHash||D&&b.hrefNoHash===w.hrefNoHash)&&(!b.hash||b.hash==="#"||d&&b.hash.replace(/^#/,"")===d)},isEmbeddedPage:function(a){a=m.parseUrl(a);return a.protocol!==""?a.hash&&(a.hrefNoHash===x.hrefNoHash||D&&a.hrefNoHash===w.hrefNoHash):/^#/.test(a.href)},isPermittedCrossDomainRequest:function(b,
c){return a.mobile.allowCrossDomainPages&&b.protocol==="file:"&&c.search(/^https?:/)!=-1}},l=null,n={stack:[],activeIndex:0,getActive:function(){return n.stack[n.activeIndex]},getPrev:function(){return n.stack[n.activeIndex-1]},getNext:function(){return n.stack[n.activeIndex+1]},addNew:function(a,b,c,d,e){n.getNext()&&n.clearForward();n.stack.push({url:a,transition:b,title:c,pageUrl:d,role:e});n.activeIndex=n.stack.length-1},clearForward:function(){n.stack=n.stack.slice(0,n.activeIndex+1)},directHashChange:function(b){var d,
e,f;this.getActive();a.each(n.stack,function(a,c){b.currentUrl===c.url&&(d=a<n.activeIndex,e=!d,f=a)});this.activeIndex=f!==c?f:this.activeIndex;d?(b.either||b.isBack)(true):e&&(b.either||b.isForward)(false)},ignoreNextHashChange:false},r=[],p=false,s="&ui-state=dialog",u=o.children("base"),x=m.parseUrl(location.href),w=u.length?m.parseUrl(m.makeUrlAbsolute(u.attr("href"),x.href)):x,D=x.hrefNoHash!==w.hrefNoHash,y=a.mobile.getScreenHeight,B=a.support.dynamicBaseTag?{element:u.length?u:a("<base>",
{href:w.hrefNoHash}).prependTo(o),set:function(a){B.element.attr("href",m.makeUrlAbsolute(a,w))},reset:function(){B.element.attr("href",w.hrefNoHash)}}:c;a.mobile.focusPage=function(a){var b=a.find("[autofocus]"),c=a.find(".ui-title:eq(0)");b.length?b.focus():c.length?c.focus():a.focus()};var C=true,z,A;z=function(){if(C){var b=a.mobile.urlHistory.getActive();if(b){var c=q.scrollTop();b.lastScroll=c<a.mobile.minScrollBack?a.mobile.defaultHomeScroll:c}}};A=function(){setTimeout(z,100)};q.bind(a.support.pushState?
"popstate":"hashchange",function(){C=false});q.one(a.support.pushState?"popstate":"hashchange",function(){C=true});q.one("pagecontainercreate",function(){a.mobile.pageContainer.bind("pagechange",function(){C=true;q.unbind("scrollstop",A);q.bind("scrollstop",A)})});q.bind("scrollstop",A);a.fn.animationComplete=function(b){return a.support.cssTransitions?a(this).one("webkitAnimationEnd animationend",b):(setTimeout(b,0),a(this))};a.mobile.path=m;a.mobile.base=B;a.mobile.urlHistory=n;a.mobile.dialogHashKey=
s;a.mobile.allowCrossDomainPages=false;a.mobile.getDocumentUrl=function(b){return b?a.extend({},x):x.href};a.mobile.getDocumentBase=function(b){return b?a.extend({},w):w.href};a.mobile._bindPageRemove=function(){var b=a(this);!b.data("page").options.domCache&&b.is(":jqmData(external-page='true')")&&b.bind("pagehide.remove",function(){var b=a(this),c=new a.Event("pageremove");b.trigger(c);c.isDefaultPrevented()||b.removeWithDependents()})};a.mobile.loadPage=function(b,d){var e=a.Deferred(),j=a.extend({},
a.mobile.loadPage.defaults,d),g=null,q=null,k=m.makeUrlAbsolute(b,a.mobile.activePage&&h(a.mobile.activePage)||w.hrefNoHash);if(j.data&&j.type==="get")k=m.addSearchParams(k,j.data),j.data=c;if(j.data&&j.type==="post")j.reloadPage=true;var n=m.getFilePath(k),o=m.convertUrlToDataUrl(k);j.pageContainer=j.pageContainer||a.mobile.pageContainer;g=j.pageContainer.children(":jqmData(url='"+o+"')");g.length===0&&o&&!m.isPath(o)&&(g=j.pageContainer.children("#"+o).attr("data-"+a.mobile.ns+"url",o));if(g.length===
0)if(a.mobile.firstPage&&m.isFirstPageUrl(n))a.mobile.firstPage.parent().length&&(g=a(a.mobile.firstPage));else if(m.isEmbeddedPage(n))return e.reject(k,d),e.promise();B&&B.reset();if(g.length){if(!j.reloadPage)return f(g,j.role),e.resolve(k,d,g),e.promise();q=g}var l=j.pageContainer,u=new a.Event("pagebeforeload"),p={url:b,absUrl:k,dataUrl:o,deferred:e,options:j};l.trigger(u,p);if(u.isDefaultPrevented())return e.promise();if(j.showLoadMsg)var r=setTimeout(function(){a.mobile.showPageLoadingMsg()},
j.loadMsgDelay);!a.mobile.allowCrossDomainPages&&!m.isSameDomain(x,k)?e.reject(k,d):a.ajax({url:n,type:j.type,data:j.data,dataType:"html",success:function(c,h,x){var l=a("<div></div>"),u=c.match(/<title[^>]*>([^<]*)/)&&RegExp.$1,w=RegExp("\\bdata-"+a.mobile.ns+"url=[\"']?([^\"'>]*)[\"']?");RegExp("(<[^>]+\\bdata-"+a.mobile.ns+"role=[\"']?page[\"']?[^>]*>)").test(c)&&RegExp.$1&&w.test(RegExp.$1)&&RegExp.$1&&(b=n=m.getFilePath(RegExp.$1));B&&B.set(n);l.get(0).innerHTML=c;g=l.find(":jqmData(role='page'), :jqmData(role='dialog')").first();
g.length||(g=a("<div data-"+a.mobile.ns+"role='page'>"+c.split(/<\/?body[^>]*>/gmi)[1]+"</div>"));u&&!g.jqmData("title")&&(~u.indexOf("&")&&(u=a("<div>"+u+"</div>").text()),g.jqmData("title",u));if(!a.support.dynamicBaseTag){var s=m.get(n);g.find("[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]").each(function(){var b=a(this).is("[href]")?"href":a(this).is("[src]")?"src":"action",c=a(this).attr(b),c=c.replace(location.protocol+"//"+location.host+location.pathname,"");/^(\w+:|#|\/)/.test(c)||
a(this).attr(b,s+c)})}g.attr("data-"+a.mobile.ns+"url",m.convertUrlToDataUrl(n)).attr("data-"+a.mobile.ns+"external-page",true).appendTo(j.pageContainer);g.one("pagecreate",a.mobile._bindPageRemove);f(g,j.role);k.indexOf("&"+a.mobile.subPageUrlKey)>-1&&(g=j.pageContainer.children(":jqmData(url='"+o+"')"));j.showLoadMsg&&(clearTimeout(r),a.mobile.hidePageLoadingMsg());p.xhr=x;p.textStatus=h;p.page=g;j.pageContainer.trigger("pageload",p);e.resolve(k,d,g,q)},error:function(b,c,f){B&&B.set(m.get());p.xhr=
b;p.textStatus=c;p.errorThrown=f;b=new a.Event("pageloadfailed");j.pageContainer.trigger(b,p);b.isDefaultPrevented()||(j.showLoadMsg&&(clearTimeout(r),a.mobile.hidePageLoadingMsg(),a.mobile.showPageLoadingMsg(a.mobile.pageLoadErrorMessageTheme,a.mobile.pageLoadErrorMessage,true),setTimeout(a.mobile.hidePageLoadingMsg,1500)),e.reject(k,d))}});return e.promise()};a.mobile.loadPage.defaults={type:"get",data:c,reloadPage:false,role:c,showLoadMsg:false,pageContainer:c,loadMsgDelay:50};a.mobile.changePage=
function(j,g){if(p)r.unshift(arguments);else{var h=a.extend({},a.mobile.changePage.defaults,g);h.pageContainer=h.pageContainer||a.mobile.pageContainer;h.fromPage=h.fromPage||a.mobile.activePage;var q=h.pageContainer,o=new a.Event("pagebeforechange"),l={toPage:j,options:h};q.trigger(o,l);if(!o.isDefaultPrevented())if(j=l.toPage,p=true,typeof j=="string")a.mobile.loadPage(j,h).done(function(b,c,d,e){p=false;c.duplicateCachedPage=e;a.mobile.changePage(d,c)}).fail(function(){p=false;b(true);d();h.pageContainer.trigger("pagechangefailed",
l)});else{if(j[0]===a.mobile.firstPage[0]&&!h.dataUrl)h.dataUrl=x.hrefNoHash;var o=h.fromPage,u=h.dataUrl&&m.convertUrlToDataUrl(h.dataUrl)||j.jqmData("url"),w=u;m.getFilePath(u);var v=n.getActive(),t=n.activeIndex===0,y=0,D=k.title,B=h.role==="dialog"||j.jqmData("role")==="dialog";if(o&&o[0]===j[0]&&!h.allowSamePageTransition)p=false,q.trigger("pagechange",l),h.fromHashChange&&n.directHashChange({currentUrl:u,isBack:function(){},isForward:function(){}});else{f(j,h.role);h.fromHashChange&&n.directHashChange({currentUrl:u,
isBack:function(){y=-1},isForward:function(){y=1}});try{k.activeElement&&k.activeElement.nodeName.toLowerCase()!="body"?a(k.activeElement).blur():a("input:focus, textarea:focus, select:focus").blur()}catch(z){}var C=false;if(B&&v){if(v.url.indexOf(s)>-1&&!a.mobile.activePage.is(".ui-dialog"))h.changeHash=false,C=true;u=(v.url||"")+s;n.activeIndex===0&&u===n.initialDst&&(u+=s)}if(h.changeHash!==false&&u)n.ignoreNextHashChange=true,m.set(u);var A=!v?D:j.jqmData("title")||j.children(":jqmData(role='header')").find(".ui-title").getEncodedText();
A&&D==k.title&&(D=A);j.jqmData("title")||j.jqmData("title",D);h.transition=h.transition||(y&&!t?v.transition:c)||(B?a.mobile.defaultDialogTransition:a.mobile.defaultPageTransition);!y&&!C&&n.addNew(u,h.transition,D,w,h.role);k.title=n.getActive().title;a.mobile.activePage=j;h.reverse=h.reverse||y<0;e(j,o,h.transition,h.reverse).done(function(c,e,f,g,m){b();h.duplicateCachedPage&&h.duplicateCachedPage.remove();m||a.mobile.focusPage(j);d();q.trigger("pagechange",l)})}}}};a.mobile.changePage.defaults=
{transition:c,reverse:false,changeHash:true,fromHashChange:false,role:c,duplicateCachedPage:c,pageContainer:c,showLoadMsg:true,dataUrl:c,fromPage:c,allowSamePageTransition:false};a.mobile.navreadyDeferred=a.Deferred();a.mobile.navreadyDeferred.done(function(){a(k).delegate("form","submit",function(b){var c=a(this);if(a.mobile.ajaxEnabled&&!c.is(":jqmData(ajax='false')")&&c.jqmHijackable().length){var d=c.attr("method"),e=c.attr("target"),j=c.attr("action");if(!j&&(j=h(c),j===w.hrefNoHash))j=x.hrefNoSearch;
j=m.makeUrlAbsolute(j,h(c));m.isExternal(j)&&!m.isPermittedCrossDomainRequest(x,j)||e||(a.mobile.changePage(j,{type:d&&d.length&&d.toLowerCase()||"get",data:c.serialize(),transition:c.jqmData("transition"),direction:c.jqmData("direction"),reloadPage:true}),b.preventDefault())}});a(k).bind("vclick",function(c){if(!(c.which>1)&&a.mobile.linkBindingEnabled&&(c=j(c.target),a(c).jqmHijackable().length&&c&&m.parseUrl(c.getAttribute("href")||"#").hash!=="#"))b(true),l=a(c).closest(".ui-btn").not(".ui-disabled"),
l.addClass(a.mobile.activeBtnClass)});a(k).bind("click",function(d){if(a.mobile.linkBindingEnabled){var e=j(d.target),f=a(e),g;if(e&&!(d.which>1)&&f.jqmHijackable().length){g=function(){t.setTimeout(function(){b(true)},200)};if(f.is(":jqmData(rel='back')"))return t.history.back(),false;var k=h(f),e=m.makeUrlAbsolute(f.attr("href")||"#",k);if(!a.mobile.ajaxEnabled&&!m.isEmbeddedPage(e))g();else{if(e.search("#")!=-1)if(e=e.replace(/[^#]*#/,""))e=m.isPath(e)?m.makeUrlAbsolute(e,k):m.makeUrlAbsolute("#"+
e,x.hrefNoHash);else{d.preventDefault();return}f.is("[rel='external']")||f.is(":jqmData(ajax='false')")||f.is("[target]")||m.isExternal(e)&&!m.isPermittedCrossDomainRequest(x,e)?g():(g=f.jqmData("transition"),k=(k=f.jqmData("direction"))&&k==="reverse"||f.jqmData("back"),f=f.attr("data-"+a.mobile.ns+"rel")||c,a.mobile.changePage(e,{transition:g,reverse:k,role:f}),d.preventDefault())}}}});a(k).delegate(".ui-page","pageshow.prefetch",function(){var b=[];a(this).find("a:jqmData(prefetch)").each(function(){var c=
a(this),d=c.attr("href");d&&a.inArray(d,b)===-1&&(b.push(d),a.mobile.loadPage(d,{role:c.attr("data-"+a.mobile.ns+"rel")}))})});a.mobile._handleHashChange=function(b){var d=m.stripHash(b),e={transition:a.mobile.urlHistory.stack.length===0?"none":c,changeHash:false,fromHashChange:true};if(0===n.stack.length)n.initialDst=d;if(!a.mobile.hashListeningEnabled||n.ignoreNextHashChange)n.ignoreNextHashChange=false;else{if(n.stack.length>1&&d.indexOf(s)>-1&&n.initialDst!==d)if(a.mobile.activePage.is(".ui-dialog"))n.directHashChange({currentUrl:d,
either:function(b){var c=a.mobile.urlHistory.getActive();d=c.pageUrl;a.extend(e,{role:c.role,transition:c.transition,reverse:b})}});else{n.directHashChange({currentUrl:d,isBack:function(){t.history.back()},isForward:function(){t.history.forward()}});return}d?(d=typeof d==="string"&&!m.isPath(d)?m.makeUrlAbsolute("#"+d,w):d,a.mobile.changePage(d,e)):a.mobile.changePage(a.mobile.firstPage,e)}};q.bind("hashchange",function(){a.mobile._handleHashChange(location.hash)});a(k).bind("pageshow",g);a(t).bind("throttledresize",
g)})})(l);(function(a,c){var b={},d=a(c),e=a.mobile.path.parseUrl(location.href),g=a.Deferred(),f=a.Deferred();a(k).ready(a.proxy(f,"resolve"));a(k).one("mobileinit",a.proxy(g,"resolve"));a.extend(b,{initialFilePath:e.pathname+e.search,hashChangeTimeout:200,hashChangeEnableTimer:E,initialHref:e.hrefNoHash,state:function(){return{hash:location.hash||"#"+b.initialFilePath,title:k.title,initialHref:b.initialHref}},resetUIKeys:function(b){var c="&"+a.mobile.subPageUrlKey,d=b.indexOf(a.mobile.dialogHashKey);
d>-1?b=b.slice(0,d)+"#"+b.slice(d):b.indexOf(c)>-1&&(b=b.split(c).join("#"+c));return b},nextHashChangePrevented:function(c){a.mobile.urlHistory.ignoreNextHashChange=c;b.onHashChangeDisabled=c},onHashChange:function(){if(!b.onHashChangeDisabled){var c,d;c=location.hash;var e=a.mobile.path.isPath(c),f=e?location.href:a.mobile.getDocumentUrl();c=e?c.replace("#",""):c;d=b.state();c=a.mobile.path.makeUrlAbsolute(c,f);e&&(c=b.resetUIKeys(c));history.replaceState(d,k.title,c)}},onPopState:function(c){if(c=
c.originalEvent.state)clearTimeout(b.hashChangeEnableTimer),b.nextHashChangePrevented(false),a.mobile._handleHashChange(c.hash),b.nextHashChangePrevented(true),b.hashChangeEnableTimer=setTimeout(function(){b.nextHashChangePrevented(false)},b.hashChangeTimeout)},init:function(){d.bind("hashchange",b.onHashChange);d.bind("popstate",b.onPopState);location.hash===""&&history.replaceState(b.state(),k.title,location.href)}});a.when(f,g,a.mobile.navreadyDeferred).done(function(){a.mobile.pushStateEnabled&&
a.support.pushState&&b.init()})})(l,this);l.mobile.transitionFallbacks.pop="fade";(function(a){a.mobile.transitionHandlers.slide=a.mobile.transitionHandlers.simultaneous;a.mobile.transitionFallbacks.slide="fade"})(l,this);l.mobile.transitionFallbacks.slidedown="fade";l.mobile.transitionFallbacks.slideup="fade";l.mobile.transitionFallbacks.flip="fade";l.mobile.transitionFallbacks.flow="fade";l.mobile.transitionFallbacks.turn="fade";(function(a){a.mobile.page.prototype.options.degradeInputs={color:false,
date:false,datetime:false,"datetime-local":false,email:false,month:false,number:false,range:"number",search:"text",tel:false,time:false,url:false,week:false};a(k).bind("pagecreate create",function(c){var b=a.mobile.closestPageData(a(c.target)),d;if(b)d=b.options,a(c.target).find("input").not(b.keepNativeSelector()).each(function(){var b=a(this),c=this.getAttribute("type"),f=d.degradeInputs[c]||"text";if(d.degradeInputs[c]){var j=a("<div>").html(b.clone()).html(),h=j.indexOf(" type=")>-1;b.replaceWith(j.replace(h?
/\s+type=["']?\w+['"]?/:/\/?>/,' type="'+f+'" data-'+a.mobile.ns+'type="'+c+'"'+(h?"":">")))}})})})(l);(function(a,c){a.widget("mobile.dialog",a.mobile.widget,{options:{closeBtnText:"Close",overlayTheme:"a",initSelector:":jqmData(role='dialog')"},_create:function(){var b=this,c=this.element,e=a("<a href='#' data-"+a.mobile.ns+"icon='delete' data-"+a.mobile.ns+"iconpos='notext'>"+this.options.closeBtnText+"</a>"),g=a("<div/>",{role:"dialog","class":"ui-dialog-contain ui-corner-all ui-overlay-shadow"});
c.addClass("ui-dialog ui-overlay-"+this.options.overlayTheme);c.wrapInner(g).children().find(":jqmData(role='header')").prepend(e).end().children(":first-child").addClass("ui-corner-top").end().children(":last-child").addClass("ui-corner-bottom");e.bind("click",function(){b.close()});c.bind("vclick submit",function(b){var b=a(b.target).closest(b.type==="vclick"?"a":"form"),c;b.length&&!b.jqmData("transition")&&(c=a.mobile.urlHistory.getActive()||{},b.attr("data-"+a.mobile.ns+"transition",c.transition||
a.mobile.defaultDialogTransition).attr("data-"+a.mobile.ns+"direction","reverse"))}).bind("pagehide",function(){b._isClosed=false;a(this).find("."+a.mobile.activeBtnClass).not(".ui-slider-bg").removeClass(a.mobile.activeBtnClass)}).bind("pagebeforeshow",function(){b.options.overlayTheme&&b.element.page("removeContainerBackground").page("setContainerBackground",b.options.overlayTheme)})},close:function(){if(!this._isClosed)this._isClosed=true,a.mobile.hashListeningEnabled?c.history.back():a.mobile.changePage(a.mobile.urlHistory.getPrev().url)}});
a(k).delegate(a.mobile.dialog.prototype.options.initSelector,"pagecreate",function(){a.mobile.dialog.prototype.enhance(this)})})(l,this);(function(a){a.mobile.page.prototype.options.backBtnText="Back";a.mobile.page.prototype.options.addBackBtn=false;a.mobile.page.prototype.options.backBtnTheme=null;a.mobile.page.prototype.options.headerTheme="a";a.mobile.page.prototype.options.footerTheme="a";a.mobile.page.prototype.options.contentTheme=null;a(k).bind("pagecreate",function(c){var b=a(c.target),d=
b.data("page").options,e=b.jqmData("role"),g=d.theme;a(":jqmData(role='header'), :jqmData(role='footer'), :jqmData(role='content')",b).jqmEnhanceable().each(function(){var c=a(this),j=c.jqmData("role"),h=c.jqmData("theme"),k=h||d.contentTheme||e==="dialog"&&g,o;c.addClass("ui-"+j);if(j==="header"||j==="footer"){var m=h||(j==="header"?d.headerTheme:d.footerTheme)||g;c.addClass("ui-bar-"+m).attr("role",j==="header"?"banner":"contentinfo");j==="header"&&(h=c.children("a"),o=h.hasClass("ui-btn-left"),
k=h.hasClass("ui-btn-right"),o=o||h.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length,k||h.eq(1).addClass("ui-btn-right"));d.addBackBtn&&j==="header"&&a(".ui-page").length>1&&b.jqmData("url")!==a.mobile.path.stripHash(location.hash)&&!o&&a("<a href='javascript:void(0);' class='ui-btn-left' data-"+a.mobile.ns+"rel='back' data-"+a.mobile.ns+"icon='arrow-l'>"+d.backBtnText+"</a>").attr("data-"+a.mobile.ns+"theme",d.backBtnTheme||m).prependTo(c);c.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({role:"heading",
"aria-level":"1"})}else j==="content"&&(k&&c.addClass("ui-body-"+k),c.attr("role","main"))})})})(l);(function(a){a.fn.fieldcontain=function(){return this.addClass("ui-field-contain ui-body ui-br").contents().filter(function(){return this.nodeType===3&&!/\S/.test(this.nodeValue)}).remove()};a(k).bind("pagecreate create",function(c){a(":jqmData(role='fieldcontain')",c.target).jqmEnhanceable().fieldcontain()})})(l);(function(a){a.fn.grid=function(c){return this.each(function(){var b=a(this),d=a.extend({grid:null},
c),e=b.children(),g={solo:1,a:2,b:3,c:4,d:5},d=d.grid;if(!d)if(e.length<=5)for(var f in g)g[f]===e.length&&(d=f);else d="a",b.addClass("ui-grid-duo");g=g[d];b.addClass("ui-grid-"+d);e.filter(":nth-child("+g+"n+1)").addClass("ui-block-a");g>1&&e.filter(":nth-child("+g+"n+2)").addClass("ui-block-b");g>2&&e.filter(":nth-child(3n+3)").addClass("ui-block-c");g>3&&e.filter(":nth-child(4n+4)").addClass("ui-block-d");g>4&&e.filter(":nth-child(5n+5)").addClass("ui-block-e")})}})(l);(function(a){a(k).bind("pagecreate create",
function(c){a(":jqmData(role='nojs')",c.target).addClass("ui-nojs")})})(l);(function(a,c){function b(a){for(var b;a;){if((b=typeof a.className==="string"&&a.className+" ")&&b.indexOf("ui-btn ")>-1&&b.indexOf("ui-disabled ")<0)break;a=a.parentNode}return a}a.fn.buttonMarkup=function(b){for(var b=b&&a.type(b)=="object"?b:{},g=0;g<this.length;g++){var f=this.eq(g),j=f[0],h=a.extend({},a.fn.buttonMarkup.defaults,{icon:b.icon!==c?b.icon:f.jqmData("icon"),iconpos:b.iconpos!==c?b.iconpos:f.jqmData("iconpos"),
theme:b.theme!==c?b.theme:f.jqmData("theme")||a.mobile.getInheritedTheme(f,"c"),inline:b.inline!==c?b.inline:f.jqmData("inline"),shadow:b.shadow!==c?b.shadow:f.jqmData("shadow"),corners:b.corners!==c?b.corners:f.jqmData("corners"),iconshadow:b.iconshadow!==c?b.iconshadow:f.jqmData("iconshadow"),mini:b.mini!==c?b.mini:f.jqmData("mini")},b),q="ui-btn-inner",o,m,l,n,r,p;a.each(h,function(b,c){j.setAttribute("data-"+a.mobile.ns+b,c);f.jqmData(b,c)});(p=a.data(j.tagName==="INPUT"||j.tagName==="BUTTON"?
j.parentNode:j,"buttonElements"))?(j=p.outer,f=a(j),l=p.inner,n=p.text,a(p.icon).remove(),p.icon=null):(l=k.createElement(h.wrapperEls),n=k.createElement(h.wrapperEls));r=h.icon?k.createElement("span"):null;d&&!p&&d();if(!h.theme)h.theme=a.mobile.getInheritedTheme(f,"c");o="ui-btn ui-btn-up-"+h.theme;o+=h.inline?" ui-btn-inline":"";o+=h.shadow?" ui-shadow":"";o+=h.corners?" ui-btn-corner-all":"";h.mini!==c&&(o+=h.mini?" ui-mini":" ui-fullsize");h.inline!==c&&(o+=h.inline===false?" ui-btn-block":" ui-btn-inline");
if(h.icon)h.icon="ui-icon-"+h.icon,h.iconpos=h.iconpos||"left",m="ui-icon "+h.icon,h.iconshadow&&(m+=" ui-icon-shadow");h.iconpos&&(o+=" ui-btn-icon-"+h.iconpos,h.iconpos=="notext"&&!f.attr("title")&&f.attr("title",f.getEncodedText()));q+=h.corners?" ui-btn-corner-all":"";h.iconpos&&h.iconpos==="notext"&&!f.attr("title")&&f.attr("title",f.getEncodedText());p&&f.removeClass(p.bcls||"");f.removeClass("ui-link").addClass(o);l.className=q;n.className="ui-btn-text";p||l.appendChild(n);if(r&&(r.className=
m,!p||!p.icon))r.appendChild(k.createTextNode("\u00a0")),l.appendChild(r);for(;j.firstChild&&!p;)n.appendChild(j.firstChild);p||j.appendChild(l);p={bcls:o,outer:j,inner:l,text:n,icon:r};a.data(j,"buttonElements",p);a.data(l,"buttonElements",p);a.data(n,"buttonElements",p);r&&a.data(r,"buttonElements",p)}return this};a.fn.buttonMarkup.defaults={corners:true,shadow:true,iconshadow:true,wrapperEls:"span"};var d=function(){var c=a.mobile.buttonMarkup.hoverDelay,g,f;a(k).bind({"vmousedown vmousecancel vmouseup vmouseover vmouseout focus blur scrollstart":function(d){var h,
k=a(b(d.target)),d=d.type;if(k.length)if(h=k.attr("data-"+a.mobile.ns+"theme"),d==="vmousedown")a.support.touch?g=setTimeout(function(){k.removeClass("ui-btn-up-"+h).addClass("ui-btn-down-"+h)},c):k.removeClass("ui-btn-up-"+h).addClass("ui-btn-down-"+h);else if(d==="vmousecancel"||d==="vmouseup")k.removeClass("ui-btn-down-"+h).addClass("ui-btn-up-"+h);else if(d==="vmouseover"||d==="focus")a.support.touch?f=setTimeout(function(){k.removeClass("ui-btn-up-"+h).addClass("ui-btn-hover-"+h)},c):k.removeClass("ui-btn-up-"+
h).addClass("ui-btn-hover-"+h);else if(d==="vmouseout"||d==="blur"||d==="scrollstart")k.removeClass("ui-btn-hover-"+h+" ui-btn-down-"+h).addClass("ui-btn-up-"+h),g&&clearTimeout(g),f&&clearTimeout(f)},"focusin focus":function(c){a(b(c.target)).addClass(a.mobile.focusClass)},"focusout blur":function(c){a(b(c.target)).removeClass(a.mobile.focusClass)}});d=null};a(k).bind("pagecreate create",function(b){a(":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a, .ui-bar > :jqmData(role='controlgroup') > a",
b.target).not(".ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").buttonMarkup()})})(l);(function(a){a.widget("mobile.collapsible",a.mobile.widget,{options:{expandCueText:" click to expand contents",collapseCueText:" click to collapse contents",collapsed:true,heading:"h1,h2,h3,h4,h5,h6,legend",theme:null,contentTheme:null,iconTheme:"d",mini:false,initSelector:":jqmData(role='collapsible')"},_create:function(){var c=this.element,b=this.options,d=c.addClass("ui-collapsible"),e=c.children(b.heading).first(),
g=d.wrapInner("<div class='ui-collapsible-content'></div>").find(".ui-collapsible-content"),f=c.closest(":jqmData(role='collapsible-set')").addClass("ui-collapsible-set");e.is("legend")&&(e=a("<div role='heading'>"+e.html()+"</div>").insertBefore(e),e.next().remove());if(f.length){if(!b.theme)b.theme=f.jqmData("theme")||a.mobile.getInheritedTheme(f,"c");if(!b.contentTheme)b.contentTheme=f.jqmData("content-theme");if(!b.iconPos)b.iconPos=f.jqmData("iconpos");if(!b.mini)b.mini=f.jqmData("mini")}g.addClass(b.contentTheme?
"ui-body-"+b.contentTheme:"");e.insertBefore(g).addClass("ui-collapsible-heading").append("<span class='ui-collapsible-heading-status'></span>").wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().buttonMarkup({shadow:false,corners:false,iconpos:c.jqmData("iconpos")||b.iconPos||"left",icon:"plus",mini:b.mini,theme:b.theme}).add(".ui-btn-inner",c).addClass("ui-corner-top ui-corner-bottom");d.bind("expand collapse",function(c){if(!c.isDefaultPrevented()){c.preventDefault();
var h=a(this),c=c.type==="collapse",k=b.contentTheme;e.toggleClass("ui-collapsible-heading-collapsed",c).find(".ui-collapsible-heading-status").text(c?b.expandCueText:b.collapseCueText).end().find(".ui-icon").toggleClass("ui-icon-minus",!c).toggleClass("ui-icon-plus",c).end().find("a").first().removeClass(a.mobile.activeBtnClass);h.toggleClass("ui-collapsible-collapsed",c);g.toggleClass("ui-collapsible-content-collapsed",c).attr("aria-hidden",c);if(k&&(!f.length||d.jqmData("collapsible-last")))e.find("a").first().add(e.find(".ui-btn-inner")).toggleClass("ui-corner-bottom",
c),g.toggleClass("ui-corner-bottom",!c);g.trigger("updatelayout")}}).trigger(b.collapsed?"collapse":"expand");e.bind("tap",function(){e.find("a").first().addClass(a.mobile.activeBtnClass)}).bind("click",function(a){var b=e.is(".ui-collapsible-heading-collapsed")?"expand":"collapse";d.trigger(b);a.preventDefault();a.stopPropagation()})}});a(k).bind("pagecreate create",function(c){a.mobile.collapsible.prototype.enhanceWithin(c.target)})})(l);(function(a,c){a.widget("mobile.collapsibleset",a.mobile.widget,
{options:{initSelector:":jqmData(role='collapsible-set')"},_create:function(){var b=this.element.addClass("ui-collapsible-set"),d=this.options;if(!d.theme)d.theme=a.mobile.getInheritedTheme(b,"c");if(!d.contentTheme)d.contentTheme=b.jqmData("content-theme");if(!d.corners)d.corners=b.jqmData("corners")===c?true:false;b.jqmData("collapsiblebound")||b.jqmData("collapsiblebound",true).bind("expand collapse",function(b){var c=b.type==="collapse",b=a(b.target).closest(".ui-collapsible"),d=b.data("collapsible");
d.options.contentTheme&&b.jqmData("collapsible-last")&&(b.find(d.options.heading).first().find("a").first().toggleClass("ui-corner-bottom",c).find(".ui-btn-inner").toggleClass("ui-corner-bottom",c),b.find(".ui-collapsible-content").toggleClass("ui-corner-bottom",!c))}).bind("expand",function(b){a(b.target).closest(".ui-collapsible").siblings(".ui-collapsible").trigger("collapse")})},_init:function(){this.refresh()},refresh:function(){var b=this.options,c=this.element.children(":jqmData(role='collapsible')");
a.mobile.collapsible.prototype.enhance(c.not(".ui-collapsible"));c.each(function(){a(this).find(a.mobile.collapsible.prototype.options.heading).find("a").first().removeClass("ui-corner-top ui-corner-bottom").find(".ui-btn-inner").removeClass("ui-corner-top ui-corner-bottom")});c.first().find("a").first().addClass(b.corners?"ui-corner-top":"").find(".ui-btn-inner").addClass("ui-corner-top");c.last().jqmData("collapsible-last",true).find("a").first().addClass(b.corners?"ui-corner-bottom":"").find(".ui-btn-inner").addClass("ui-corner-bottom")}});
a(k).bind("pagecreate create",function(b){a.mobile.collapsibleset.prototype.enhanceWithin(b.target)})})(l);(function(a,c){a.widget("mobile.navbar",a.mobile.widget,{options:{iconpos:"top",grid:null,initSelector:":jqmData(role='navbar')"},_create:function(){var b=this.element,d=b.find("a"),e=d.filter(":jqmData(icon)").length?this.options.iconpos:c;b.addClass("ui-navbar ui-mini").attr("role","navigation").find("ul").jqmEnhanceable().grid({grid:this.options.grid});d.buttonMarkup({corners:false,shadow:false,
inline:true,iconpos:e});b.delegate("a","vclick",function(b){a(b.target).hasClass("ui-disabled")||(d.removeClass(a.mobile.activeBtnClass),a(this).addClass(a.mobile.activeBtnClass))});b.closest(".ui-page").bind("pagebeforeshow",function(){d.filter(".ui-state-persist").addClass(a.mobile.activeBtnClass)})}});a(k).bind("pagecreate create",function(b){a.mobile.navbar.prototype.enhanceWithin(b.target)})})(l);(function(a){var c={};a.widget("mobile.listview",a.mobile.widget,{options:{theme:null,countTheme:"c",
headerTheme:"b",dividerTheme:"b",splitIcon:"arrow-r",splitTheme:"b",inset:false,initSelector:":jqmData(role='listview')"},_create:function(){var a="";a+=this.options.inset?" ui-listview-inset ui-corner-all ui-shadow ":"";this.element.addClass(function(c,e){return e+" ui-listview "+a});this.refresh(true)},_removeCorners:function(a,c){a=a.add(a.find(".ui-btn-inner, .ui-li-link-alt, .ui-li-thumb"));c==="top"?a.removeClass("ui-corner-top ui-corner-tr ui-corner-tl"):c==="bottom"?a.removeClass("ui-corner-bottom ui-corner-br ui-corner-bl"):
a.removeClass("ui-corner-top ui-corner-tr ui-corner-tl ui-corner-bottom ui-corner-br ui-corner-bl")},_refreshCorners:function(a){var c,e;this.options.inset&&(c=this.element.children("li"),e=a?c.not(".ui-screen-hidden"):c.filter(":visible"),this._removeCorners(c),c=e.first().addClass("ui-corner-top"),c.add(c.find(".ui-btn-inner").not(".ui-li-link-alt span:first-child")).addClass("ui-corner-top").end().find(".ui-li-link-alt, .ui-li-link-alt span:first-child").addClass("ui-corner-tr").end().find(".ui-li-thumb").not(".ui-li-icon").addClass("ui-corner-tl"),
e=e.last().addClass("ui-corner-bottom"),e.add(e.find(".ui-btn-inner")).find(".ui-li-link-alt").addClass("ui-corner-br").end().find(".ui-li-thumb").not(".ui-li-icon").addClass("ui-corner-bl"));a||this.element.trigger("updatelayout")},_findFirstElementByTagName:function(a,c,e,g){var f={};for(f[e]=f[g]=true;a;){if(f[a.nodeName])return a;a=a[c]}return null},_getChildrenByTagName:function(b,c,e){var g=[],f={};f[c]=f[e]=true;for(b=b.firstChild;b;)f[b.nodeName]&&g.push(b),b=b.nextSibling;return a(g)},_addThumbClasses:function(b){var c,
e,g=b.length;for(c=0;c<g;c++)e=a(this._findFirstElementByTagName(b[c].firstChild,"nextSibling","img","IMG")),e.length&&(e.addClass("ui-li-thumb"),a(this._findFirstElementByTagName(e[0].parentNode,"parentNode","li","LI")).addClass(e.is(".ui-li-icon")?"ui-li-has-icon":"ui-li-has-thumb"))},refresh:function(b){this.parentPage=this.element.closest(".ui-page");this._createSubPages();var c=this.options,e=this.element,g=e.jqmData("dividertheme")||c.dividerTheme,f=e.jqmData("splittheme"),j=e.jqmData("spliticon"),
h=this._getChildrenByTagName(e[0],"li","LI"),l=a.support.cssPseudoElement||!a.nodeName(e[0],"ol")?0:1,o={},m,v,n,r,p,s,u;l&&e.find(".ui-li-dec").remove();if(!c.theme)c.theme=a.mobile.getInheritedTheme(this.element,"c");for(var x=0,w=h.length;x<w;x++){m=h.eq(x);v="ui-li";if(b||!m.hasClass("ui-li"))n=m.jqmData("theme")||c.theme,r=this._getChildrenByTagName(m[0],"a","A"),s=m.jqmData("role")==="list-divider",r.length&&!s?(s=m.jqmData("icon"),m.buttonMarkup({wrapperEls:"div",shadow:false,corners:false,
iconpos:"right",icon:r.length>1||s===false?false:s||"arrow-r",theme:n}),s!=false&&r.length==1&&m.addClass("ui-li-has-arrow"),r.first().removeClass("ui-link").addClass("ui-link-inherit"),r.length>1&&(v+=" ui-li-has-alt",r=r.last(),p=f||r.jqmData("theme")||c.splitTheme,u=r.jqmData("icon"),r.appendTo(m).attr("title",r.getEncodedText()).addClass("ui-li-link-alt").empty().buttonMarkup({shadow:false,corners:false,theme:n,icon:false,iconpos:"notext"}).find(".ui-btn-inner").append(a(k.createElement("span")).buttonMarkup({shadow:true,
corners:true,theme:p,iconpos:"notext",icon:u||s||j||c.splitIcon})))):s?(v+=" ui-li-divider ui-bar-"+g,m.attr("role","heading"),l&&(l=1)):v+=" ui-li-static ui-body-"+n;l&&v.indexOf("ui-li-divider")<0&&(n=m.is(".ui-li-static:first")?m:m.find(".ui-link-inherit"),n.addClass("ui-li-jsnumbering").prepend("<span class='ui-li-dec'>"+l++ +". </span>"));o[v]||(o[v]=[]);o[v].push(m[0])}for(v in o)a(o[v]).addClass(v).children(".ui-btn-inner").addClass(v);e.find("h1, h2, h3, h4, h5, h6").addClass("ui-li-heading").end().find("p, dl").addClass("ui-li-desc").end().find(".ui-li-aside").each(function(){var b=
a(this);b.prependTo(b.parent())}).end().find(".ui-li-count").each(function(){a(this).closest("li").addClass("ui-li-has-count")}).addClass("ui-btn-up-"+(e.jqmData("counttheme")||this.options.countTheme)+" ui-btn-corner-all");this._addThumbClasses(h);this._addThumbClasses(e.find(".ui-link-inherit"));this._refreshCorners(b)},_idStringEscape:function(a){return a.replace(/[^a-zA-Z0-9]/g,"-")},_createSubPages:function(){var b=this.element,d=b.closest(".ui-page"),e=d.jqmData("url"),g=e||d[0][a.expando],
f=b.attr("id"),j=this.options,h="data-"+a.mobile.ns,k=this,l=d.find(":jqmData(role='footer')").jqmData("id"),m;typeof c[g]==="undefined"&&(c[g]=-1);f=f||++c[g];a(b.find("li>ul, li>ol").toArray().reverse()).each(function(c){var d=a(this),g=d.attr("id")||f+"-"+c,c=d.parent(),k=a(d.prevAll().toArray().reverse()),k=k.length?k:a("<span>"+a.trim(c.contents()[0].nodeValue)+"</span>"),q=k.first().getEncodedText(),g=(e||"")+"&"+a.mobile.subPageUrlKey+"="+g,u=d.jqmData("theme")||j.theme,x=d.jqmData("counttheme")||
b.jqmData("counttheme")||j.countTheme;m=true;d.detach().wrap("<div "+h+"role='page' "+h+"url='"+g+"' "+h+"theme='"+u+"' "+h+"count-theme='"+x+"'><div "+h+"role='content'></div></div>").parent().before("<div "+h+"role='header' "+h+"theme='"+j.headerTheme+"'><div class='ui-title'>"+q+"</div></div>").after(l?a("<div "+h+"role='footer' "+h+"id='"+l+"'>"):"").parent().appendTo(a.mobile.pageContainer).page();d=c.find("a:first");d.length||(d=a("<a/>").html(k||q).prependTo(c.empty()));d.attr("href","#"+g)}).listview();
m&&d.is(":jqmData(external-page='true')")&&d.data("page").options.domCache===false&&d.unbind("pagehide.remove").bind("pagehide.remove",function(b,c){var f=c.nextPage,h=new a.Event("pageremove");c.nextPage&&(f=f.jqmData("url"),f.indexOf(e+"&"+a.mobile.subPageUrlKey)!==0&&(k.childPages().remove(),d.trigger(h),h.isDefaultPrevented()||d.removeWithDependents()))})},childPages:function(){var b=this.parentPage.jqmData("url");return a(":jqmData(url^='"+b+"&"+a.mobile.subPageUrlKey+"')")}});a(k).bind("pagecreate create",
function(b){a.mobile.listview.prototype.enhanceWithin(b.target)})})(l);(function(a,c){a.widget("mobile.checkboxradio",a.mobile.widget,{options:{theme:null,initSelector:"input[type='checkbox'],input[type='radio']"},_create:function(){var b=this,d=this.element,e=a(d).closest("label"),g=e.length?e:a(d).closest("form,fieldset,:jqmData(role='page'),:jqmData(role='dialog')").find("label").filter("[for='"+d[0].id+"']"),f=d[0].type,e=d.jqmData("mini")||d.closest("form,fieldset").jqmData("mini"),j=f+"-on",
h=f+"-off",l=d.parents(":jqmData(type='horizontal')").length?c:h,o=d.jqmData("iconpos")||d.closest("form,fieldset").jqmData("iconpos");if(!(f!=="checkbox"&&f!=="radio")){a.extend(this,{label:g,inputtype:f,checkedClass:"ui-"+j+(l?"":" "+a.mobile.activeBtnClass),uncheckedClass:"ui-"+h,checkedicon:"ui-icon-"+j,uncheckedicon:"ui-icon-"+h});if(!this.options.theme)this.options.theme=a.mobile.getInheritedTheme(this.element,"c");g.buttonMarkup({theme:this.options.theme,icon:l,shadow:false,mini:e,iconpos:o});
e=k.createElement("div");e.className="ui-"+f;d.add(g).wrapAll(e);g.bind({vmouseover:function(b){a(this).parent().is(".ui-disabled")&&b.stopPropagation()},vclick:function(a){if(d.is(":disabled"))a.preventDefault();else return b._cacheVals(),d.prop("checked",f==="radio"&&true||!d.prop("checked")),d.triggerHandler("click"),b._getInputSet().not(d).prop("checked",false),b._updateAll(),false}});d.bind({vmousedown:function(){b._cacheVals()},vclick:function(){var c=a(this);c.is(":checked")?(c.prop("checked",
true),b._getInputSet().not(c).prop("checked",false)):c.prop("checked",false);b._updateAll()},focus:function(){g.addClass(a.mobile.focusClass)},blur:function(){g.removeClass(a.mobile.focusClass)}});this.refresh()}},_cacheVals:function(){this._getInputSet().each(function(){a(this).jqmData("cacheVal",this.checked)})},_getInputSet:function(){return this.inputtype==="checkbox"?this.element:this.element.closest("form,fieldset,:jqmData(role='page')").find("input[name='"+this.element[0].name+"'][type='"+
this.inputtype+"']")},_updateAll:function(){var b=this;this._getInputSet().each(function(){var c=a(this);(this.checked||b.inputtype==="checkbox")&&c.trigger("change")}).checkboxradio("refresh")},refresh:function(){var a=this.element[0],c=this.label,e=c.find(".ui-icon");a.checked?(c.addClass(this.checkedClass).removeClass(this.uncheckedClass),e.addClass(this.checkedicon).removeClass(this.uncheckedicon)):(c.removeClass(this.checkedClass).addClass(this.uncheckedClass),e.removeClass(this.checkedicon).addClass(this.uncheckedicon));
a.disabled?this.disable():this.enable()},disable:function(){this.element.prop("disabled",true).parent().addClass("ui-disabled")},enable:function(){this.element.prop("disabled",false).parent().removeClass("ui-disabled")}});a(k).bind("pagecreate create",function(b){a.mobile.checkboxradio.prototype.enhanceWithin(b.target,true)})})(l);(function(a,c){a.widget("mobile.button",a.mobile.widget,{options:{theme:null,icon:null,iconpos:null,inline:false,corners:true,shadow:true,iconshadow:true,initSelector:"button, [type='button'], [type='submit'], [type='reset'], [type='image']",
mini:false},_create:function(){var b=this.element,d,e=this.options,g;g="";var f;if(b[0].tagName==="A")!b.hasClass("ui-btn")&&b.buttonMarkup();else{if(!this.options.theme)this.options.theme=a.mobile.getInheritedTheme(this.element,"c");~b[0].className.indexOf("ui-btn-left")&&(g="ui-btn-left");~b[0].className.indexOf("ui-btn-right")&&(g="ui-btn-right");if(b.attr("type")==="submit"||b.attr("type")==="reset")g?g+=" ui-submit":g="ui-submit";a("label[for='"+b.attr("id")+"']").addClass("ui-submit");d=this.button=
a("<div></div>").text(b.text()||b.val()).insertBefore(b).buttonMarkup({theme:e.theme,icon:e.icon,iconpos:e.iconpos,inline:e.inline,corners:e.corners,shadow:e.shadow,iconshadow:e.iconshadow,mini:e.mini}).addClass(g).append(b.addClass("ui-btn-hidden"));e=b.attr("type");g=b.attr("name");e!=="button"&&e!=="reset"&&g&&b.bind("vclick",function(){f===c&&(f=a("<input>",{type:"hidden",name:b.attr("name"),value:b.attr("value")}).insertBefore(b),a(k).one("submit",function(){f.remove();f=c}))});b.bind({focus:function(){d.addClass(a.mobile.focusClass)},
blur:function(){d.removeClass(a.mobile.focusClass)}});this.refresh()}},enable:function(){this.element.attr("disabled",false);this.button.removeClass("ui-disabled").attr("aria-disabled",false);return this._setOption("disabled",false)},disable:function(){this.element.attr("disabled",true);this.button.addClass("ui-disabled").attr("aria-disabled",true);return this._setOption("disabled",true)},refresh:function(){var b=this.element;b.prop("disabled")?this.disable():this.enable();a(this.button.data("buttonElements").text).text(b.text()||
b.val())}});a(k).bind("pagecreate create",function(b){a.mobile.button.prototype.enhanceWithin(b.target,true)})})(l);(function(a){a.fn.controlgroup=function(c){function b(a,b){a.removeClass("ui-btn-corner-all ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-controlgroup-last ui-shadow").eq(0).addClass(b[0]).end().last().addClass(b[1]).addClass("ui-controlgroup-last")}return this.each(function(){var d=a(this),e=a.extend({direction:d.jqmData("type")||"vertical",shadow:false,excludeInvisible:true,
mini:d.jqmData("mini")},c),g=d.children("legend"),f=e.direction=="horizontal"?["ui-corner-left","ui-corner-right"]:["ui-corner-top","ui-corner-bottom"];d.find("input").first().attr("type");d.wrapInner("<div class='ui-controlgroup-controls'></div>");g.length&&(a("<div role='heading' class='ui-controlgroup-label'>"+g.html()+"</div>").insertBefore(d.children(0)),g.remove());d.addClass("ui-corner-all ui-controlgroup ui-controlgroup-"+e.direction);b(d.find(".ui-btn"+(e.excludeInvisible?":visible":"")).not(".ui-slider-handle"),
f);b(d.find(".ui-btn-inner"),f);e.shadow&&d.addClass("ui-shadow");e.mini&&d.addClass("ui-mini")})}})(l);(function(a){a(k).bind("pagecreate create",function(c){a(c.target).find("a").jqmEnhanceable().not(".ui-btn, .ui-link-inherit, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link")})})(l);(function(a){var c=a("meta[name=viewport]"),b=c.attr("content"),d=b+",maximum-scale=1, user-scalable=no",e=b+",maximum-scale=10, user-scalable=yes",g=/(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(b);
a.mobile.zoom=a.extend({},{enabled:!g,locked:false,disable:function(b){if(!g&&!a.mobile.zoom.locked)c.attr("content",d),a.mobile.zoom.enabled=false,a.mobile.zoom.locked=b||false},enable:function(b){if(!g&&(!a.mobile.zoom.locked||b===true))c.attr("content",e),a.mobile.zoom.enabled=true,a.mobile.zoom.locked=false},restore:function(){if(!g)c.attr("content",b),a.mobile.zoom.enabled=true}})})(l);(function(a){a.widget("mobile.textinput",a.mobile.widget,{options:{theme:null,preventFocusZoom:/iPhone|iPad|iPod/.test(navigator.platform)&&
navigator.userAgent.indexOf("AppleWebKit")>-1,initSelector:"input[type='text'], input[type='search'], :jqmData(type='search'), input[type='number'], :jqmData(type='number'), input[type='password'], input[type='email'], input[type='url'], input[type='tel'], textarea, input[type='time'], input[type='date'], input[type='month'], input[type='week'], input[type='datetime'], input[type='datetime-local'], input[type='color'], input:not([type])",clearSearchButtonText:"clear text"},_create:function(){var c=
this.element,b=this.options,d=b.theme||a.mobile.getInheritedTheme(this.element,"c"),e=" ui-body-"+d,g=c.jqmData("mini")==true,f=g?" ui-mini":"",j,h;a("label[for='"+c.attr("id")+"']").addClass("ui-input-text");j=c.addClass("ui-input-text ui-body-"+d);typeof c[0].autocorrect!=="undefined"&&!a.support.touchOverflow&&(c[0].setAttribute("autocorrect","off"),c[0].setAttribute("autocomplete","off"));c.is("[type='search'],:jqmData(type='search')")?(j=c.wrap("<div class='ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield"+
e+f+"'></div>").parent(),h=a("<a href='#' class='ui-input-clear' title='"+b.clearSearchButtonText+"'>"+b.clearSearchButtonText+"</a>").bind("click",function(a){c.val("").focus().trigger("change");h.addClass("ui-input-clear-hidden");a.preventDefault()}).appendTo(j).buttonMarkup({icon:"delete",iconpos:"notext",corners:true,shadow:true,mini:g}),d=function(){setTimeout(function(){h.toggleClass("ui-input-clear-hidden",!c.val())},0)},d(),c.bind("paste cut keyup focus change blur",d)):c.addClass("ui-corner-all ui-shadow-inset"+
e+f);c.focus(function(){j.addClass(a.mobile.focusClass)}).blur(function(){j.removeClass(a.mobile.focusClass)}).bind("focus",function(){b.preventFocusZoom&&a.mobile.zoom.disable(true)}).bind("blur",function(){b.preventFocusZoom&&a.mobile.zoom.enable(true)});if(c.is("textarea")){var l=function(){var a=c[0].scrollHeight;c[0].clientHeight<a&&c.height(a+15)},o;c.keyup(function(){clearTimeout(o);o=setTimeout(l,100)});a(k).one("pagechange",l);a.trim(c.val())&&a(t).load(l)}},disable:function(){(this.element.attr("disabled",
true).is("[type='search'],:jqmData(type='search')")?this.element.parent():this.element).addClass("ui-disabled")},enable:function(){(this.element.attr("disabled",false).is("[type='search'],:jqmData(type='search')")?this.element.parent():this.element).removeClass("ui-disabled")}});a(k).bind("pagecreate create",function(c){a.mobile.textinput.prototype.enhanceWithin(c.target,true)})})(l);(function(a){a.mobile.listview.prototype.options.filter=false;a.mobile.listview.prototype.options.filterPlaceholder=
"Filter items...";a.mobile.listview.prototype.options.filterTheme="c";a.mobile.listview.prototype.options.filterCallback=function(a,b){return a.toLowerCase().indexOf(b)===-1};a(k).delegate(":jqmData(role='listview')","listviewcreate",function(){var c=a(this),b=c.data("listview");if(b.options.filter){var d=a("<form>",{"class":"ui-listview-filter ui-bar-"+b.options.filterTheme,role:"search"});a("<input>",{placeholder:b.options.filterPlaceholder}).attr("data-"+a.mobile.ns+"type","search").jqmData("lastval",
"").bind("keyup change",function(){var d=a(this),g=this.value.toLowerCase(),f=null,f=d.jqmData("lastval")+"",j=false,h="";d.jqmData("lastval",g);f=g.length<f.length||g.indexOf(f)!==0?c.children():c.children(":not(.ui-screen-hidden)");if(g){for(var k=f.length-1;k>=0;k--)d=a(f[k]),h=d.jqmData("filtertext")||d.text(),d.is("li:jqmData(role=list-divider)")?(d.toggleClass("ui-filter-hidequeue",!j),j=false):b.options.filterCallback(h,g)?d.toggleClass("ui-filter-hidequeue",true):j=true;f.filter(":not(.ui-filter-hidequeue)").toggleClass("ui-screen-hidden",
false);f.filter(".ui-filter-hidequeue").toggleClass("ui-screen-hidden",true).toggleClass("ui-filter-hidequeue",false)}else f.toggleClass("ui-screen-hidden",false);b._refreshCorners()}).appendTo(d).textinput();b.options.inset&&d.addClass("ui-listview-filter-inset");d.bind("submit",function(){return false}).insertBefore(c)}})})(l);(function(a,c){a.widget("mobile.slider",a.mobile.widget,{options:{theme:null,trackTheme:null,disabled:false,initSelector:"input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",
mini:false},_create:function(){var b=this,d=this.element,e=a.mobile.getInheritedTheme(d,"c"),g=this.options.theme||e,e=this.options.trackTheme||e,f=d[0].nodeName.toLowerCase(),j=f=="select"?"ui-slider-switch":"",h=d.attr("id"),l=a("[for='"+h+"']"),o=l.attr("id")||h+"-label",l=l.attr("id",o),m=function(){return f=="input"?parseFloat(d.val()):d[0].selectedIndex},v=f=="input"?parseFloat(d.attr("min")):0,n=f=="input"?parseFloat(d.attr("max")):d.find("option").length-1,r=t.parseFloat(d.attr("step")||1),
p=this.options.inline||d.jqmData("inline")==true?" ui-slider-inline":"",s=this.options.mini||d.jqmData("mini")?" ui-slider-mini":"",u=k.createElement("a"),x=a(u),h=k.createElement("div"),w=a(h),D=d.jqmData("highlight")&&f!="select"?function(){var b=k.createElement("div");b.className="ui-slider-bg "+a.mobile.activeBtnClass+" ui-btn-corner-all";return a(b).prependTo(w)}():false;u.setAttribute("href","#");h.setAttribute("role","application");h.className=["ui-slider ",j," ui-btn-down-",e," ui-btn-corner-all",
p,s].join("");u.className="ui-slider-handle";h.appendChild(u);x.buttonMarkup({corners:true,theme:g,shadow:true}).attr({role:"slider","aria-valuemin":v,"aria-valuemax":n,"aria-valuenow":m(),"aria-valuetext":m(),title:m(),"aria-labelledby":o});a.extend(this,{slider:w,handle:x,valuebg:D,dragging:false,beforeStart:null,userModified:false,mouseMoved:false});if(f=="select"){g=k.createElement("div");g.className="ui-slider-inneroffset";j=0;for(o=h.childNodes.length;j<o;j++)g.appendChild(h.childNodes[j]);
h.appendChild(g);x.addClass("ui-slider-handle-snapping");g=d.find("option");h=0;for(j=g.length;h<j;h++)o=!h?"b":"a",p=!h?" ui-btn-down-"+e:" "+a.mobile.activeBtnClass,k.createElement("div"),s=k.createElement("span"),s.className=["ui-slider-label ui-slider-label-",o,p," ui-btn-corner-all"].join(""),s.setAttribute("role","img"),s.appendChild(k.createTextNode(g[h].innerHTML)),a(s).prependTo(w);b._labels=a(".ui-slider-label",w)}l.addClass("ui-slider");d.addClass(f==="input"?"ui-slider-input":"ui-slider-switch").change(function(){b.mouseMoved||
b.refresh(m(),true)}).keyup(function(){b.refresh(m(),true,true)}).blur(function(){b.refresh(m(),true)});a(k).bind("vmousemove",function(a){if(b.dragging)return b.mouseMoved=true,f==="select"&&x.removeClass("ui-slider-handle-snapping"),b.refresh(a),b.userModified=b.beforeStart!==d[0].selectedIndex,false});w.bind("vmousedown",function(a){b.dragging=true;b.userModified=false;b.mouseMoved=false;if(f==="select")b.beforeStart=d[0].selectedIndex;b.refresh(a);return false}).bind("vclick",false);w.add(k).bind("vmouseup",
function(){if(b.dragging)return b.dragging=false,f==="select"&&(x.addClass("ui-slider-handle-snapping"),b.mouseMoved?b.userModified?b.refresh(b.beforeStart==0?1:0):b.refresh(b.beforeStart):b.refresh(b.beforeStart==0?1:0)),b.mouseMoved=false});w.insertAfter(d);f=="select"&&this.handle.bind({focus:function(){w.addClass(a.mobile.focusClass)},blur:function(){w.removeClass(a.mobile.focusClass)}});this.handle.bind({vmousedown:function(){a(this).focus()},vclick:false,keydown:function(c){var d=m();if(!b.options.disabled){switch(c.keyCode){case a.mobile.keyCode.HOME:case a.mobile.keyCode.END:case a.mobile.keyCode.PAGE_UP:case a.mobile.keyCode.PAGE_DOWN:case a.mobile.keyCode.UP:case a.mobile.keyCode.RIGHT:case a.mobile.keyCode.DOWN:case a.mobile.keyCode.LEFT:if(c.preventDefault(),
!b._keySliding)b._keySliding=true,a(this).addClass("ui-state-active")}switch(c.keyCode){case a.mobile.keyCode.HOME:b.refresh(v);break;case a.mobile.keyCode.END:b.refresh(n);break;case a.mobile.keyCode.PAGE_UP:case a.mobile.keyCode.UP:case a.mobile.keyCode.RIGHT:b.refresh(d+r);break;case a.mobile.keyCode.PAGE_DOWN:case a.mobile.keyCode.DOWN:case a.mobile.keyCode.LEFT:b.refresh(d-r)}}},keyup:function(){if(b._keySliding)b._keySliding=false,a(this).removeClass("ui-state-active")}});this.refresh(c,c,true)},
refresh:function(b,c,e){(this.options.disabled||this.element.attr("disabled"))&&this.disable();var g=this.element,f=g[0].nodeName.toLowerCase(),j=f==="input"?parseFloat(g.attr("min")):0,h=f==="input"?parseFloat(g.attr("max")):g.find("option").length-1,k=f==="input"&&parseFloat(g.attr("step"))>0?parseFloat(g.attr("step")):1;if(typeof b==="object"){if(!this.dragging||b.pageX<this.slider.offset().left-8||b.pageX>this.slider.offset().left+this.slider.width()+8)return;b=Math.round((b.pageX-this.slider.offset().left)/
this.slider.width()*100)}else b==null&&(b=f==="input"?parseFloat(g.val()||0):g[0].selectedIndex),b=(parseFloat(b)-j)/(h-j)*100;if(!isNaN(b)){b<0&&(b=0);b>100&&(b=100);var l=b/100*(h-j)+j,m=(l-j)%k;l-=m;Math.abs(m)*2>=k&&(l+=m>0?k:-k);l=parseFloat(l.toFixed(5));l<j&&(l=j);l>h&&(l=h);this.handle.css("left",b+"%");this.handle.attr({"aria-valuenow":f==="input"?l:g.find("option").eq(l).attr("value"),"aria-valuetext":f==="input"?l:g.find("option").eq(l).getEncodedText(),title:f==="input"?l:g.find("option").eq(l).getEncodedText()});
this.valuebg&&this.valuebg.css("width",b+"%");if(this._labels){var j=this.handle.width()/this.slider.width()*100,t=b&&j+(100-j)*b/100,n=b===100?0:Math.min(j+100-t,100);this._labels.each(function(){var b=a(this).is(".ui-slider-label-a");a(this).width((b?t:n)+"%")})}if(!e)e=false,f==="input"?(e=g.val()!==l,g.val(l)):(e=g[0].selectedIndex!==l,g[0].selectedIndex=l),!c&&e&&g.trigger("change")}},enable:function(){this.element.attr("disabled",false);this.slider.removeClass("ui-disabled").attr("aria-disabled",
false);return this._setOption("disabled",false)},disable:function(){this.element.attr("disabled",true);this.slider.addClass("ui-disabled").attr("aria-disabled",true);return this._setOption("disabled",true)}});a(k).bind("pagecreate create",function(b){a.mobile.slider.prototype.enhanceWithin(b.target,true)})})(l);(function(a){a.widget("mobile.selectmenu",a.mobile.widget,{options:{theme:null,disabled:false,icon:"arrow-d",iconpos:"right",inline:false,corners:true,shadow:true,iconshadow:true,overlayTheme:"a",
hidePlaceholderMenuItems:true,closeText:"Close",nativeMenu:true,preventFocusZoom:/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,initSelector:"select:not(:jqmData(role='slider'))",mini:false},_button:function(){return a("<div/>")},_setDisabled:function(a){this.element.attr("disabled",a);this.button.attr("aria-disabled",a);return this._setOption("disabled",a)},_focusButton:function(){var a=this;setTimeout(function(){a.button.focus()},40)},_selectOptions:function(){return this.select.find("option")},
_preExtension:function(){var c="";~this.element[0].className.indexOf("ui-btn-left")&&(c=" ui-btn-left");~this.element[0].className.indexOf("ui-btn-right")&&(c=" ui-btn-right");this.select=this.element.wrap("<div class='ui-select"+c+"'>");this.selectID=this.select.attr("id");this.label=a("label[for='"+this.selectID+"']").addClass("ui-select");this.isMultiple=this.select[0].multiple;if(!this.options.theme)this.options.theme=a.mobile.getInheritedTheme(this.select,"c")},_create:function(){this._preExtension();
this._trigger("beforeCreate");this.button=this._button();var c=this,b=this.options,d=b.inline||this.select.jqmData("inline"),e=b.mini||this.select.jqmData("mini"),g=b.icon?b.iconpos||this.select.jqmData("iconpos"):false,d=this.button.text(a(this.select[0].options.item(this.select[0].selectedIndex==-1?0:this.select[0].selectedIndex)).text()).insertBefore(this.select).buttonMarkup({theme:b.theme,icon:b.icon,iconpos:g,inline:d,corners:b.corners,shadow:b.shadow,iconshadow:b.iconshadow,mini:e});b.nativeMenu&&
t.opera&&t.opera.version&&d.addClass("ui-select-nativeonly");if(this.isMultiple)this.buttonCount=a("<span>").addClass("ui-li-count ui-btn-up-c ui-btn-corner-all").hide().appendTo(d.addClass("ui-li-has-count"));(b.disabled||this.element.attr("disabled"))&&this.disable();this.select.change(function(){c.refresh()});this.build()},build:function(){var c=this;this.select.appendTo(c.button).bind("vmousedown",function(){c.button.addClass(a.mobile.activeBtnClass)}).bind("focus",function(){c.button.addClass(a.mobile.focusClass)}).bind("blur",
function(){c.button.removeClass(a.mobile.focusClass)}).bind("focus vmouseover",function(){c.button.trigger("vmouseover")}).bind("vmousemove",function(){c.button.removeClass(a.mobile.activeBtnClass)}).bind("change blur vmouseout",function(){c.button.trigger("vmouseout").removeClass(a.mobile.activeBtnClass)}).bind("change blur",function(){c.button.removeClass("ui-btn-down-"+c.options.theme)});c.button.bind("vmousedown",function(){c.options.preventFocusZoom&&a.mobile.zoom.disable(true)}).bind("mouseup",
function(){c.options.preventFocusZoom&&a.mobile.zoom.enable(true)})},selected:function(){return this._selectOptions().filter(":selected")},selectedIndices:function(){var a=this;return this.selected().map(function(){return a._selectOptions().index(this)}).get()},setButtonText:function(){var c=this,b=this.selected();this.button.find(".ui-btn-text").text(function(){return!c.isMultiple?b.text():b.length?b.map(function(){return a(this).text()}).get().join(", "):c.placeholder})},setButtonCount:function(){var a=
this.selected();this.isMultiple&&this.buttonCount[a.length>1?"show":"hide"]().text(a.length)},refresh:function(){this.setButtonText();this.setButtonCount()},open:a.noop,close:a.noop,disable:function(){this._setDisabled(true);this.button.addClass("ui-disabled")},enable:function(){this._setDisabled(false);this.button.removeClass("ui-disabled")}});a(k).bind("pagecreate create",function(c){a.mobile.selectmenu.prototype.enhanceWithin(c.target,true)})})(l);(function(a){var c=function(b){var c=b.selectID,
e=b.label,g=b.select.closest(".ui-page"),f=a("<div>",{"class":"ui-selectmenu-screen ui-screen-hidden"}).appendTo(g),j=b._selectOptions(),h=b.isMultiple=b.select[0].multiple,l=c+"-button",o=c+"-menu",m=a("<div data-"+a.mobile.ns+"role='dialog' data-"+a.mobile.ns+"theme='"+b.options.theme+"' data-"+a.mobile.ns+"overlay-theme='"+b.options.overlayTheme+"'><div data-"+a.mobile.ns+"role='header'><div class='ui-title'>"+e.getEncodedText()+"</div></div><div data-"+a.mobile.ns+"role='content'></div></div>"),
v=a("<div>",{"class":"ui-selectmenu ui-selectmenu-hidden ui-overlay-shadow ui-corner-all ui-body-"+b.options.overlayTheme+" "+a.mobile.defaultDialogTransition}).insertAfter(f),n=a("<ul>",{"class":"ui-selectmenu-list",id:o,role:"listbox","aria-labelledby":l}).attr("data-"+a.mobile.ns+"theme",b.options.theme).appendTo(v),r=a("<div>",{"class":"ui-header ui-bar-"+b.options.theme}).prependTo(v),p=a("<h1>",{"class":"ui-title"}).appendTo(r),s;b.isMultiple&&(s=a("<a>",{text:b.options.closeText,href:"#","class":"ui-btn-left"}).attr("data-"+
a.mobile.ns+"iconpos","notext").attr("data-"+a.mobile.ns+"icon","delete").appendTo(r).buttonMarkup());a.extend(b,{select:b.select,selectID:c,buttonId:l,menuId:o,thisPage:g,menuPage:m,label:e,screen:f,selectOptions:j,isMultiple:h,theme:b.options.theme,listbox:v,list:n,header:r,headerTitle:p,headerClose:s,menuPageContent:void 0,menuPageClose:void 0,placeholder:"",build:function(){var c=this;c.refresh();c.select.attr("tabindex","-1").focus(function(){a(this).blur();c.button.focus()});c.button.bind("vclick keydown",
function(b){if(b.type=="vclick"||b.keyCode&&(b.keyCode===a.mobile.keyCode.ENTER||b.keyCode===a.mobile.keyCode.SPACE))c.open(),b.preventDefault()});c.list.attr("role","listbox").bind("focusin",function(b){a(b.target).attr("tabindex","0").trigger("vmouseover")}).bind("focusout",function(b){a(b.target).attr("tabindex","-1").trigger("vmouseout")}).delegate("li:not(.ui-disabled, .ui-li-divider)","click",function(d){var e=c.select[0].selectedIndex,f=c.list.find("li:not(.ui-li-divider)").index(this),h=c._selectOptions().eq(f)[0];
h.selected=c.isMultiple?!h.selected:true;c.isMultiple&&a(this).find(".ui-icon").toggleClass("ui-icon-checkbox-on",h.selected).toggleClass("ui-icon-checkbox-off",!h.selected);(c.isMultiple||e!==f)&&c.select.trigger("change");c.isMultiple?c.list.find("li:not(.ui-li-divider)").eq(f).addClass("ui-btn-down-"+b.options.theme).find("a").first().focus():c.close();d.preventDefault()}).keydown(function(c){var d=a(c.target),e=d.closest("li");switch(c.keyCode){case 38:return c=e.prev().not(".ui-selectmenu-placeholder"),
c.is(".ui-li-divider")&&(c=c.prev()),c.length&&(d.blur().attr("tabindex","-1"),c.addClass("ui-btn-down-"+b.options.theme).find("a").first().focus()),false;case 40:return c=e.next(),c.is(".ui-li-divider")&&(c=c.next()),c.length&&(d.blur().attr("tabindex","-1"),c.addClass("ui-btn-down-"+b.options.theme).find("a").first().focus()),false;case 13:case 32:return d.trigger("click"),false}});c.menuPage.bind("pagehide",function(){c.list.appendTo(c.listbox);c._focusButton();a.mobile._bindPageRemove.call(c.thisPage)});
c.screen.bind("vclick",function(){c.close()});c.isMultiple&&c.headerClose.click(function(){if(c.menuType=="overlay")return c.close(),false});c.thisPage.addDependents(this.menuPage)},_isRebuildRequired:function(){var a=this.list.find("li");return this._selectOptions().text()!==a.text()},selected:function(){return this._selectOptions().filter(":selected:not(:jqmData(placeholder='true'))")},refresh:function(b){var c=this,d;(b||this._isRebuildRequired())&&c._buildList();d=this.selectedIndices();c.setButtonText();
c.setButtonCount();c.list.find("li:not(.ui-li-divider)").removeClass(a.mobile.activeBtnClass).attr("aria-selected",false).each(function(b){a.inArray(b,d)>-1&&(b=a(this),b.attr("aria-selected",true),c.isMultiple?b.find(".ui-icon").removeClass("ui-icon-checkbox-off").addClass("ui-icon-checkbox-on"):b.is(".ui-selectmenu-placeholder")?b.next().addClass(a.mobile.activeBtnClass):b.addClass(a.mobile.activeBtnClass))})},close:function(){if(!this.options.disabled&&this.isOpen)this.menuType=="page"?t.history.back():
(this.screen.addClass("ui-screen-hidden"),this.listbox.addClass("ui-selectmenu-hidden").removeAttr("style").removeClass("in"),this.list.appendTo(this.listbox),this._focusButton()),this.isOpen=false},open:function(){function c(){var e=d.list.find("."+a.mobile.activeBtnClass+" a");e.length===0&&(e=d.list.find("li.ui-btn:not(:jqmData(placeholder='true')) a"));e.first().focus().closest("li").addClass("ui-btn-down-"+b.options.theme)}if(!this.options.disabled){var d=this,e=a(t),f=d.list.parent(),h=f.outerHeight(),
f=f.outerWidth();a(".ui-page-active");var g=e.scrollTop(),j=d.button.offset().top,l=e.height(),e=e.width();d.button.addClass(a.mobile.activeBtnClass);setTimeout(function(){d.button.removeClass(a.mobile.activeBtnClass)},300);if(h>l-80||!a.support.scrollTop){d.menuPage.appendTo(a.mobile.pageContainer).page();d.menuPageContent=m.find(".ui-content");d.menuPageClose=m.find(".ui-header a");d.thisPage.unbind("pagehide.remove");if(g==0&&j>l)d.thisPage.one("pagehide",function(){a(this).jqmData("lastScroll",
j)});d.menuPage.one("pageshow",function(){c();d.isOpen=true});d.menuType="page";d.menuPageContent.append(d.list);d.menuPage.find("div .ui-title").text(d.label.text());a.mobile.changePage(d.menuPage,{transition:a.mobile.defaultDialogTransition})}else{d.menuType="overlay";d.screen.height(a(k).height()).removeClass("ui-screen-hidden");var n=j-g,o=g+l-j,q=h/2,p=parseFloat(d.list.parent().css("max-width")),h=n>h/2&&o>h/2?j+d.button.outerHeight()/2-q:n>o?g+l-h-30:g+30;f<p?g=(e-f)/2:(g=d.button.offset().left+
d.button.outerWidth()/2-f/2,g<30?g=30:g+f>e&&(g=e-f-30));d.listbox.append(d.list).removeClass("ui-selectmenu-hidden").css({top:h,left:g}).addClass("in");c();d.isOpen=true}}},_buildList:function(){var b=this.options,c=this.placeholder,d=true,e=this.isMultiple?"checkbox-off":"false";this.list.empty().filter(".ui-listview").listview("destroy");var f=this.select.find("option"),h=f.length,g=this.select[0],j="data-"+a.mobile.ns,l=j+"option-index",m=j+"icon",n=j+"role";j+="placeholder";for(var o=k.createDocumentFragment(),
q=false,p,t=0;t<h;t++,q=false){var s=f[t],r=a(s),v=s.parentNode,E=r.text(),I=k.createElement("a"),L=[];I.setAttribute("href","#");I.appendChild(k.createTextNode(E));v!==g&&v.nodeName.toLowerCase()==="optgroup"&&(v=v.getAttribute("label"),v!=p&&(p=k.createElement("li"),p.setAttribute(n,"list-divider"),p.setAttribute("role","option"),p.setAttribute("tabindex","-1"),p.appendChild(k.createTextNode(v)),o.appendChild(p),p=v));if(d&&(!s.getAttribute("value")||E.length==0||r.jqmData("placeholder")))if(d=
false,q=true,s.setAttribute(j,true),b.hidePlaceholderMenuItems&&L.push("ui-selectmenu-placeholder"),!c)c=this.placeholder=E;r=k.createElement("li");s.disabled&&(L.push("ui-disabled"),r.setAttribute("aria-disabled",true));r.setAttribute(l,t);r.setAttribute(m,e);q&&r.setAttribute(j,true);r.className=L.join(" ");r.setAttribute("role","option");I.setAttribute("tabindex","-1");r.appendChild(I);o.appendChild(r)}this.list[0].appendChild(o);!this.isMultiple&&!c.length?this.header.hide():this.headerTitle.text(this.placeholder);
this.list.listview()},_button:function(){return a("<a>",{href:"#",role:"button",id:this.buttonId,"aria-haspopup":"true","aria-owns":this.menuId})}})};a(k).bind("selectmenubeforecreate",function(b){b=a(b.target).data("selectmenu");b.options.nativeMenu||c(b)})})(l);(function(a){a.widget("mobile.fixedtoolbar",a.mobile.widget,{options:{visibleOnPageShow:true,disablePageZoom:true,transition:"slide",fullscreen:false,tapToggle:true,tapToggleBlacklist:"a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed",
hideDuringFocus:"input, textarea, select",updatePagePadding:true,trackPersistentToolbars:true,supportBlacklist:function(){var a=navigator.userAgent,b=navigator.platform,d=a.match(/AppleWebKit\/([0-9]+)/),d=!!d&&d[1],e=a.match(/Fennec\/([0-9]+)/),e=!!e&&e[1],g=a.match(/Opera Mobi\/([0-9]+)/),f=!!g&&g[1];return(b.indexOf("iPhone")>-1||b.indexOf("iPad")>-1||b.indexOf("iPod")>-1)&&d&&d<534||t.operamini&&{}.toString.call(t.operamini)==="[object OperaMini]"||g&&f<7458||a.indexOf("Android")>-1&&d&&d<533||
e&&e<6||"palmGetResource"in t&&d&&d<534||a.indexOf("MeeGo")>-1&&a.indexOf("NokiaBrowser/8.5.0")>-1?true:false},initSelector:":jqmData(position='fixed')"},_create:function(){var a=this.options,b=this.element,d=b.is(":jqmData(role='header')")?"header":"footer",e=b.closest(".ui-page");a.supportBlacklist()?this.destroy():(b.addClass("ui-"+d+"-fixed"),a.fullscreen?(b.addClass("ui-"+d+"-fullscreen"),e.addClass("ui-page-"+d+"-fullscreen")):e.addClass("ui-page-"+d+"-fixed"),this._addTransitionClass(),this._bindPageEvents(),
this._bindToggleHandlers())},_addTransitionClass:function(){var a=this.options.transition;a&&a!=="none"&&(a==="slide"&&(a=this.element.is(".ui-header")?"slidedown":"slideup"),this.element.addClass(a))},_bindPageEvents:function(){var c=this,b=c.options;c.element.closest(".ui-page").bind("pagebeforeshow",function(){b.disablePageZoom&&a.mobile.zoom.disable(true);b.visibleOnPageShow||c.hide(true)}).bind("webkitAnimationStart animationstart updatelayout",function(){b.updatePagePadding&&c.updatePagePadding(this)}).bind("pageshow",
function(){var d=this;c.updatePagePadding(d);b.updatePagePadding&&a(t).bind("throttledresize."+c.widgetName,function(){c.updatePagePadding(d)})}).bind("pagebeforehide",function(d,e){b.disablePageZoom&&a.mobile.zoom.enable(true);b.updatePagePadding&&a(t).unbind("throttledresize."+c.widgetName);if(b.trackPersistentToolbars){var g=a(".ui-footer-fixed:jqmData(id)",this),f=a(".ui-header-fixed:jqmData(id)",this),j=g.length&&e.nextPage&&a(".ui-footer-fixed:jqmData(id='"+g.jqmData("id")+"')",e.nextPage),
h=f.length&&e.nextPage&&a(".ui-header-fixed:jqmData(id='"+f.jqmData("id")+"')",e.nextPage),j=j||a();if(j.length||h.length)j.add(h).appendTo(a.mobile.pageContainer),e.nextPage.one("pageshow",function(){j.add(h).appendTo(this)})}})},_visible:true,updatePagePadding:function(c){var b=this.element,d=b.is(".ui-header");this.options.fullscreen||(c=c||b.closest(".ui-page"),a(c).css("padding-"+(d?"top":"bottom"),b.outerHeight()))},_useTransition:function(c){var b=this.element,d=a(t).scrollTop(),e=b.height(),
g=b.closest(".ui-page").height(),f=a.mobile.getScreenHeight(),b=b.is(":jqmData(role='header')")?"header":"footer";return!c&&(this.options.transition&&this.options.transition!=="none"&&(b==="header"&&!this.options.fullscreen&&d>e||b==="footer"&&!this.options.fullscreen&&d+f<g-e)||this.options.fullscreen)},show:function(a){var b=this.element;this._useTransition(a)?b.removeClass("out ui-fixed-hidden").addClass("in"):b.removeClass("ui-fixed-hidden");this._visible=true},hide:function(a){var b=this.element,
d="out"+(this.options.transition==="slide"?" reverse":"");this._useTransition(a)?b.addClass(d).removeClass("in").animationComplete(function(){b.addClass("ui-fixed-hidden").removeClass(d)}):b.addClass("ui-fixed-hidden").removeClass(d);this._visible=false},toggle:function(){this[this._visible?"hide":"show"]()},_bindToggleHandlers:function(){var c=this,b=c.options;c.element.closest(".ui-page").bind("vclick",function(d){b.tapToggle&&!a(d.target).closest(b.tapToggleBlacklist).length&&c.toggle()}).bind("focusin focusout",
function(d){if(screen.width<500&&a(d.target).is(b.hideDuringFocus)&&!a(d.target).closest(".ui-header-fixed, .ui-footer-fixed").length)c[d.type==="focusin"&&c._visible?"hide":"show"]()})},destroy:function(){this.element.removeClass("ui-header-fixed ui-footer-fixed ui-header-fullscreen ui-footer-fullscreen in out fade slidedown slideup ui-fixed-hidden");this.element.closest(".ui-page").removeClass("ui-page-header-fixed ui-page-footer-fixed ui-page-header-fullscreen ui-page-footer-fullscreen")}});a(k).bind("pagecreate create",
function(c){a(c.target).jqmData("fullscreen")&&a(a.mobile.fixedtoolbar.prototype.options.initSelector,c.target).not(":jqmData(fullscreen)").jqmData("fullscreen",true);a.mobile.fixedtoolbar.prototype.enhanceWithin(c.target)})})(l);(function(a,c){if(/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1){var b=a.mobile.zoom,d,e,g,f,j;a(c).bind("orientationchange.iosorientationfix",b.enable).bind("devicemotion.iosorientationfix",function(a){d=a.originalEvent;j=d.accelerationIncludingGravity;
e=Math.abs(j.x);g=Math.abs(j.y);f=Math.abs(j.z);!c.orientation&&(e>7||(f>6&&g<8||f<8&&g>6)&&e>5)?b.enabled&&b.disable():b.enabled||b.enable()})}})(l,this);(function(a,c){function b(){var b=a("."+a.mobile.activeBtnClass).first();j.css({top:a.support.scrollTop&&f.scrollTop()+f.height()/2||b.length&&b.offset().top||100})}function d(){var c=j.offset(),e=f.scrollTop(),g=a.mobile.getScreenHeight();if(c.top<e||c.top-e>g)j.addClass("ui-loader-fakefix"),b(),f.unbind("scroll",d).bind("scroll",b)}function e(){g.removeClass("ui-mobile-rendering")}
var g=a("html");a("head");var f=a(c);a(c.document).trigger("mobileinit");if(a.mobile.gradeA()){if(a.mobile.ajaxBlacklist)a.mobile.ajaxEnabled=false;g.addClass("ui-mobile ui-mobile-rendering");setTimeout(e,5E3);var j=a("<div class='ui-loader'><span class='ui-icon ui-icon-loading'></span><h1></h1></div>");a.extend(a.mobile,{showPageLoadingMsg:function(b,c,e){g.addClass("ui-loading");if(a.mobile.loadingMessage){var k=e||a.mobile.loadingMessageTextVisible;b=b||a.mobile.loadingMessageTheme;j.attr("class",
"ui-loader ui-corner-all ui-body-"+(b||"a")+" ui-loader-"+(k?"verbose":"default")+(e?" ui-loader-textonly":"")).find("h1").text(c||a.mobile.loadingMessage).end().appendTo(a.mobile.pageContainer);d();f.bind("scroll",d)}},hidePageLoadingMsg:function(){g.removeClass("ui-loading");a.mobile.loadingMessage&&j.removeClass("ui-loader-fakefix");a(c).unbind("scroll",b);a(c).unbind("scroll",d)},initializePage:function(){var b=a(":jqmData(role='page'), :jqmData(role='dialog')");b.length||(b=a("body").wrapInner("<div data-"+
a.mobile.ns+"role='page'></div>").children(0));b.each(function(){var b=a(this);b.jqmData("url")||b.attr("data-"+a.mobile.ns+"url",b.attr("id")||location.pathname+location.search)});a.mobile.firstPage=b.first();a.mobile.pageContainer=b.first().parent().addClass("ui-mobile-viewport");f.trigger("pagecontainercreate");a.mobile.showPageLoadingMsg();e();!a.mobile.hashListeningEnabled||!a.mobile.path.isHashValid(location.hash)||!a(location.hash+':jqmData(role="page")').length&&!a.mobile.path.isPath(location.hash)?
a.mobile.changePage(a.mobile.firstPage,{transition:"none",reverse:true,changeHash:false,fromHashChange:true}):f.trigger("hashchange",[true])}});a.mobile.navreadyDeferred.resolve();a(function(){c.scrollTo(0,1);a.mobile.defaultHomeScroll=!a.support.scrollTop||a(c).scrollTop()===1?0:1;a.fn.controlgroup&&a(k).bind("pagecreate create",function(b){a(":jqmData(role='controlgroup')",b.target).jqmEnhanceable().controlgroup({excludeInvisible:false})});a.mobile.autoInitializePage&&a.mobile.initializePage();
f.load(a.mobile.silentScroll);a.support.cssPointerEvents||a(k).delegate(".ui-disabled","vclick",function(a){a.preventDefault();a.stopImmediatePropagation()})})}})(l,this)});





$("body").addClass("gbar");


/* Based on Alex Arnell's inheritance implementation. */
var Class = {
  create: function() {
    var parent = null, properties = $A(arguments);
    if (Object.isFunction(properties[0]))
      parent = properties.shift();

    function klass() {
      this.initialize.apply(this, arguments);
    }

    Object.extend(klass, Class.Methods);
    klass.superclass = parent;
    klass.subclasses = [];

    if (parent) {
      var subclass = function() { };
      subclass.prototype = parent.prototype;
      klass.prototype = new subclass;
      parent.subclasses.push(klass);
    }

    for (var i = 0; i < properties.length; i++)
      klass.addMethods(properties[i]);

    if (!klass.prototype.initialize)
      klass.prototype.initialize = this.emptyFunction;

    klass.prototype.constructor = klass;

    return klass;
  },
  emptyFunction:function () {},

};

Class.Methods = {
  addMethods: function(source) {
    var ancestor   = this.superclass && this.superclass.prototype;
    var properties = Object.keys(source);

    if (!Object.keys({ toString: true }).length)
      properties.push("toString", "valueOf");

    for (var i = 0, length = properties.length; i < length; i++) {
      var property = properties[i], value = source[property];
      if (ancestor && Object.isFunction(value) &&
          value.argumentNames().first() == "$super") {
        var method = value, value = Object.extend((function(m) {
          return function() { return ancestor[m].apply(this, arguments) };
        })(property).wrap(method), {
          valueOf:  function() { return method },
          toString: function() { return method.toString() }
        });
      }
      this.prototype[property] = value;
    }

    return this;
  }
};

Object.extend = function(destination, source) {
  for (var property in source)
    destination[property] = source[property];
  return destination;
};

Object.extend(Object, {
  inspect: function(object) {
    try {
      if (Object.isUndefined(object)) return 'undefined';
      if (object === null) return 'null';
      return object.inspect ? object.inspect() : String(object);
    } catch (e) {
      if (e instanceof RangeError) return '...';
      throw e;
    }
  },

  toJSON: function(object) {
    var type = typeof object;
    switch (type) {
      case 'undefined':
      case 'function':
      case 'unknown': return;
      case 'boolean': return object.toString();
    }

    if (object === null) return 'null';
    if (object.toJSON) return object.toJSON();
    if (Object.isElement(object)) return;

    var results = [];
    for (var property in object) {
      var value = Object.toJSON(object[property]);
      if (!Object.isUndefined(value))
        results.push(property.toJSON() + ': ' + value);
    }

    return '{' + results.join(', ') + '}';
  },

  toQueryString: function(object) {
    return $H(object).toQueryString();
  },

  toHTML: function(object) {
    return object && object.toHTML ? object.toHTML() : String.interpret(object);
  },

  keys: function(object) {
    var keys = [];
    for (var property in object)
      keys.push(property);
    return keys;
  },

  values: function(object) {
    var values = [];
    for (var property in object)
      values.push(object[property]);
    return values;
  },

  clone: function(object) {
    return Object.extend({ }, object);
  },

  isElement: function(object) {
    return object && object.nodeType == 1;
  },

  isArray: function(object) {
    return object != null && typeof object == "object" &&
      'splice' in object && 'join' in object;
  },

  isHash: function(object) {
    return object instanceof Hash;
  },

  isFunction: function(object) {
    return typeof object == "function";
  },

  isString: function(object) {
    return typeof object == "string";
  },

  isNumber: function(object) {
    return typeof object == "number";
  },

  isUndefined: function(object) {
    return typeof object == "undefined";
  }
});

function $A(iterable) {
  if (!iterable) return [];
  if (iterable.toArray) return iterable.toArray();
  var length = iterable.length || 0, results = new Array(length);
  while (length--) results[length] = iterable[length];
  return results;
}

if (WebKit = navigator.userAgent.indexOf('AppleWebKit/') > -1) {
  $A = function(iterable) {
    if (!iterable) return [];
    if (!(Object.isFunction(iterable) && iterable == '[object NodeList]') &&
        iterable.toArray) return iterable.toArray();
    var length = iterable.length || 0, results = new Array(length);
    while (length--) results[length] = iterable[length];
    return results;
  };
}






/* 
 * Box2Djs (port of Box2DFlash 1.4.3.1) - http://box2d-js.sourceforge.net/
 * Single-filed and jsmined ( http://code.google.com/p/jsmin-php/ ) by Mr.doob
 */
var b2Settings=Class.create();b2Settings.prototype={initialize:function(){}}
b2Settings.USHRT_MAX=0x0000ffff;b2Settings.b2_pi=Math.PI;b2Settings.b2_massUnitsPerKilogram=1.0;b2Settings.b2_timeUnitsPerSecond=1.0;b2Settings.b2_lengthUnitsPerMeter=30.0;b2Settings.b2_maxManifoldPoints=2;b2Settings.b2_maxShapesPerBody=64;b2Settings.b2_maxPolyVertices=8;b2Settings.b2_maxProxies=1024;b2Settings.b2_maxPairs=8*b2Settings.b2_maxProxies;b2Settings.b2_linearSlop=0.005*b2Settings.b2_lengthUnitsPerMeter;b2Settings.b2_angularSlop=2.0/180.0*b2Settings.b2_pi;b2Settings.b2_velocityThreshold=1.0*b2Settings.b2_lengthUnitsPerMeter/b2Settings.b2_timeUnitsPerSecond;b2Settings.b2_maxLinearCorrection=0.2*b2Settings.b2_lengthUnitsPerMeter;b2Settings.b2_maxAngularCorrection=8.0/180.0*b2Settings.b2_pi;b2Settings.b2_contactBaumgarte=0.2;b2Settings.b2_timeToSleep=0.5*b2Settings.b2_timeUnitsPerSecond;b2Settings.b2_linearSleepTolerance=0.01*b2Settings.b2_lengthUnitsPerMeter/b2Settings.b2_timeUnitsPerSecond;b2Settings.b2_angularSleepTolerance=2.0/180.0/b2Settings.b2_timeUnitsPerSecond;b2Settings.b2Assert=function(a)
{if(!a){var nullVec;nullVec.x++;}};
var b2Vec2=Class.create();b2Vec2.prototype={initialize:function(x_,y_){this.x=x_;this.y=y_;},SetZero:function(){this.x=0.0;this.y=0.0;},Set:function(x_,y_){this.x=x_;this.y=y_;},SetV:function(v){this.x=v.x;this.y=v.y;},Negative:function(){return new b2Vec2(-this.x,-this.y);},Copy:function(){return new b2Vec2(this.x,this.y);},Add:function(v)
{this.x+=v.x;this.y+=v.y;},Subtract:function(v)
{this.x-=v.x;this.y-=v.y;},Multiply:function(a)
{this.x*=a;this.y*=a;},MulM:function(A)
{var tX=this.x;this.x=A.col1.x*tX+A.col2.x*this.y;this.y=A.col1.y*tX+A.col2.y*this.y;},MulTM:function(A)
{var tX=b2Math.b2Dot(this,A.col1);this.y=b2Math.b2Dot(this,A.col2);this.x=tX;},CrossVF:function(s)
{var tX=this.x;this.x=s*this.y;this.y=-s*tX;},CrossFV:function(s)
{var tX=this.x;this.x=-s*this.y;this.y=s*tX;},MinV:function(b)
{this.x=this.x<b.x?this.x:b.x;this.y=this.y<b.y?this.y:b.y;},MaxV:function(b)
{this.x=this.x>b.x?this.x:b.x;this.y=this.y>b.y?this.y:b.y;},Abs:function()
{this.x=Math.abs(this.x);this.y=Math.abs(this.y);},Length:function()
{return Math.sqrt(this.x*this.x+this.y*this.y);},Normalize:function()
{var length=this.Length();if(length<Number.MIN_VALUE)
{return 0.0;}
var invLength=1.0/length;this.x*=invLength;this.y*=invLength;return length;},IsValid:function()
{return b2Math.b2IsValid(this.x)&&b2Math.b2IsValid(this.y);},x:null,y:null};b2Vec2.Make=function(x_,y_)
{return new b2Vec2(x_,y_);};
var b2Mat22=Class.create();b2Mat22.prototype={initialize:function(angle,c1,c2)
{if(angle==null)angle=0;this.col1=new b2Vec2();this.col2=new b2Vec2();if(c1!=null&&c2!=null){this.col1.SetV(c1);this.col2.SetV(c2);}
else{var c=Math.cos(angle);var s=Math.sin(angle);this.col1.x=c;this.col2.x=-s;this.col1.y=s;this.col2.y=c;}},Set:function(angle)
{var c=Math.cos(angle);var s=Math.sin(angle);this.col1.x=c;this.col2.x=-s;this.col1.y=s;this.col2.y=c;},SetVV:function(c1,c2)
{this.col1.SetV(c1);this.col2.SetV(c2);},Copy:function(){return new b2Mat22(0,this.col1,this.col2);},SetM:function(m)
{this.col1.SetV(m.col1);this.col2.SetV(m.col2);},AddM:function(m)
{this.col1.x+=m.col1.x;this.col1.y+=m.col1.y;this.col2.x+=m.col2.x;this.col2.y+=m.col2.y;},SetIdentity:function()
{this.col1.x=1.0;this.col2.x=0.0;this.col1.y=0.0;this.col2.y=1.0;},SetZero:function()
{this.col1.x=0.0;this.col2.x=0.0;this.col1.y=0.0;this.col2.y=0.0;},Invert:function(out)
{var a=this.col1.x;var b=this.col2.x;var c=this.col1.y;var d=this.col2.y;var det=a*d-b*c;det=1.0/det;out.col1.x=det*d;out.col2.x=-det*b;out.col1.y=-det*c;out.col2.y=det*a;return out;},Solve:function(out,bX,bY)
{var a11=this.col1.x;var a12=this.col2.x;var a21=this.col1.y;var a22=this.col2.y;var det=a11*a22-a12*a21;det=1.0/det;out.x=det*(a22*bX-a12*bY);out.y=det*(a11*bY-a21*bX);return out;},Abs:function()
{this.col1.Abs();this.col2.Abs();},col1:new b2Vec2(),col2:new b2Vec2()};
var b2Math=Class.create();b2Math.prototype={initialize:function(){}}
b2Math.b2IsValid=function(x)
{return isFinite(x);};b2Math.b2Dot=function(a,b)
{return a.x*b.x+a.y*b.y;};b2Math.b2CrossVV=function(a,b)
{return a.x*b.y-a.y*b.x;};b2Math.b2CrossVF=function(a,s)
{var v=new b2Vec2(s*a.y,-s*a.x);return v;};b2Math.b2CrossFV=function(s,a)
{var v=new b2Vec2(-s*a.y,s*a.x);return v;};b2Math.b2MulMV=function(A,v)
{var u=new b2Vec2(A.col1.x*v.x+A.col2.x*v.y,A.col1.y*v.x+A.col2.y*v.y);return u;};b2Math.b2MulTMV=function(A,v)
{var u=new b2Vec2(b2Math.b2Dot(v,A.col1),b2Math.b2Dot(v,A.col2));return u;};b2Math.AddVV=function(a,b)
{var v=new b2Vec2(a.x+b.x,a.y+b.y);return v;};b2Math.SubtractVV=function(a,b)
{var v=new b2Vec2(a.x-b.x,a.y-b.y);return v;};b2Math.MulFV=function(s,a)
{var v=new b2Vec2(s*a.x,s*a.y);return v;};b2Math.AddMM=function(A,B)
{var C=new b2Mat22(0,b2Math.AddVV(A.col1,B.col1),b2Math.AddVV(A.col2,B.col2));return C;};b2Math.b2MulMM=function(A,B)
{var C=new b2Mat22(0,b2Math.b2MulMV(A,B.col1),b2Math.b2MulMV(A,B.col2));return C;};b2Math.b2MulTMM=function(A,B)
{var c1=new b2Vec2(b2Math.b2Dot(A.col1,B.col1),b2Math.b2Dot(A.col2,B.col1));var c2=new b2Vec2(b2Math.b2Dot(A.col1,B.col2),b2Math.b2Dot(A.col2,B.col2));var C=new b2Mat22(0,c1,c2);return C;};b2Math.b2Abs=function(a)
{return a>0.0?a:-a;};b2Math.b2AbsV=function(a)
{var b=new b2Vec2(b2Math.b2Abs(a.x),b2Math.b2Abs(a.y));return b;};b2Math.b2AbsM=function(A)
{var B=new b2Mat22(0,b2Math.b2AbsV(A.col1),b2Math.b2AbsV(A.col2));return B;};b2Math.b2Min=function(a,b)
{return a<b?a:b;};b2Math.b2MinV=function(a,b)
{var c=new b2Vec2(b2Math.b2Min(a.x,b.x),b2Math.b2Min(a.y,b.y));return c;};b2Math.b2Max=function(a,b)
{return a>b?a:b;};b2Math.b2MaxV=function(a,b)
{var c=new b2Vec2(b2Math.b2Max(a.x,b.x),b2Math.b2Max(a.y,b.y));return c;};b2Math.b2Clamp=function(a,low,high)
{return b2Math.b2Max(low,b2Math.b2Min(a,high));};b2Math.b2ClampV=function(a,low,high)
{return b2Math.b2MaxV(low,b2Math.b2MinV(a,high));};b2Math.b2Swap=function(a,b)
{var tmp=a[0];a[0]=b[0];b[0]=tmp;};b2Math.b2Random=function()
{return Math.random()*2-1;};b2Math.b2NextPowerOfTwo=function(x)
{x|=(x>>1)&0x7FFFFFFF;x|=(x>>2)&0x3FFFFFFF;x|=(x>>4)&0x0FFFFFFF;x|=(x>>8)&0x00FFFFFF;x|=(x>>16)&0x0000FFFF;return x+1;};b2Math.b2IsPowerOfTwo=function(x)
{var result=x>0&&(x&(x-1))==0;return result;};b2Math.tempVec2=new b2Vec2();b2Math.tempVec3=new b2Vec2();b2Math.tempVec4=new b2Vec2();b2Math.tempVec5=new b2Vec2();b2Math.tempMat=new b2Mat22();
var b2AABB=Class.create();b2AABB.prototype={IsValid:function(){var dX=this.maxVertex.x;var dY=this.maxVertex.y;dX=this.maxVertex.x;dY=this.maxVertex.y;dX-=this.minVertex.x;dY-=this.minVertex.y;var valid=dX>=0.0&&dY>=0.0;valid=valid&&this.minVertex.IsValid()&&this.maxVertex.IsValid();return valid;},minVertex:new b2Vec2(),maxVertex:new b2Vec2(),initialize:function(){this.minVertex=new b2Vec2();this.maxVertex=new b2Vec2();}};
var b2Bound=Class.create();b2Bound.prototype={IsLower:function(){return(this.value&1)==0;},IsUpper:function(){return(this.value&1)==1;},Swap:function(b){var tempValue=this.value;var tempProxyId=this.proxyId;var tempStabbingCount=this.stabbingCount;this.value=b.value;this.proxyId=b.proxyId;this.stabbingCount=b.stabbingCount;b.value=tempValue;b.proxyId=tempProxyId;b.stabbingCount=tempStabbingCount;},value:0,proxyId:0,stabbingCount:0,initialize:function(){}}

var b2BoundValues=Class.create();b2BoundValues.prototype={lowerValues:[0,0],upperValues:[0,0],initialize:function(){this.lowerValues=[0,0];this.upperValues=[0,0];}}

var b2Pair=Class.create();b2Pair.prototype={SetBuffered:function(){this.status|=b2Pair.e_pairBuffered;},ClearBuffered:function(){this.status&=~b2Pair.e_pairBuffered;},IsBuffered:function(){return(this.status&b2Pair.e_pairBuffered)==b2Pair.e_pairBuffered;},SetRemoved:function(){this.status|=b2Pair.e_pairRemoved;},ClearRemoved:function(){this.status&=~b2Pair.e_pairRemoved;},IsRemoved:function(){return(this.status&b2Pair.e_pairRemoved)==b2Pair.e_pairRemoved;},SetFinal:function(){this.status|=b2Pair.e_pairFinal;},IsFinal:function(){return(this.status&b2Pair.e_pairFinal)==b2Pair.e_pairFinal;},userData:null,proxyId1:0,proxyId2:0,next:0,status:0,initialize:function(){}};b2Pair.b2_nullPair=b2Settings.USHRT_MAX;b2Pair.b2_nullProxy=b2Settings.USHRT_MAX;b2Pair.b2_tableCapacity=b2Settings.b2_maxPairs;b2Pair.b2_tableMask=b2Pair.b2_tableCapacity-1;b2Pair.e_pairBuffered=0x0001;b2Pair.e_pairRemoved=0x0002;b2Pair.e_pairFinal=0x0004;
var b2PairCallback=Class.create();b2PairCallback.prototype={PairAdded:function(proxyUserData1,proxyUserData2){return null},PairRemoved:function(proxyUserData1,proxyUserData2,pairUserData){},initialize:function(){}};
var b2BufferedPair=Class.create();b2BufferedPair.prototype={proxyId1:0,proxyId2:0,initialize:function(){}}

var b2PairManager=Class.create();b2PairManager.prototype={initialize:function(){var i=0;this.m_hashTable=new Array(b2Pair.b2_tableCapacity);for(i=0;i<b2Pair.b2_tableCapacity;++i)
{this.m_hashTable[i]=b2Pair.b2_nullPair;}
this.m_pairs=new Array(b2Settings.b2_maxPairs);for(i=0;i<b2Settings.b2_maxPairs;++i)
{this.m_pairs[i]=new b2Pair();}
this.m_pairBuffer=new Array(b2Settings.b2_maxPairs);for(i=0;i<b2Settings.b2_maxPairs;++i)
{this.m_pairBuffer[i]=new b2BufferedPair();}
for(i=0;i<b2Settings.b2_maxPairs;++i)
{this.m_pairs[i].proxyId1=b2Pair.b2_nullProxy;this.m_pairs[i].proxyId2=b2Pair.b2_nullProxy;this.m_pairs[i].userData=null;this.m_pairs[i].status=0;this.m_pairs[i].next=(i+1);}
this.m_pairs[b2Settings.b2_maxPairs-1].next=b2Pair.b2_nullPair;this.m_pairCount=0;},Initialize:function(broadPhase,callback){this.m_broadPhase=broadPhase;this.m_callback=callback;},AddBufferedPair:function(proxyId1,proxyId2){var pair=this.AddPair(proxyId1,proxyId2);if(pair.IsBuffered()==false)
{pair.SetBuffered();this.m_pairBuffer[this.m_pairBufferCount].proxyId1=pair.proxyId1;this.m_pairBuffer[this.m_pairBufferCount].proxyId2=pair.proxyId2;++this.m_pairBufferCount;}
pair.ClearRemoved();if(b2BroadPhase.s_validate)
{this.ValidateBuffer();}},RemoveBufferedPair:function(proxyId1,proxyId2){var pair=this.Find(proxyId1,proxyId2);if(pair==null)
{return;}
if(pair.IsBuffered()==false)
{pair.SetBuffered();this.m_pairBuffer[this.m_pairBufferCount].proxyId1=pair.proxyId1;this.m_pairBuffer[this.m_pairBufferCount].proxyId2=pair.proxyId2;++this.m_pairBufferCount;}
pair.SetRemoved();if(b2BroadPhase.s_validate)
{this.ValidateBuffer();}},Commit:function(){var i=0;var removeCount=0;var proxies=this.m_broadPhase.m_proxyPool;for(i=0;i<this.m_pairBufferCount;++i)
{var pair=this.Find(this.m_pairBuffer[i].proxyId1,this.m_pairBuffer[i].proxyId2);pair.ClearBuffered();var proxy1=proxies[pair.proxyId1];var proxy2=proxies[pair.proxyId2];if(pair.IsRemoved())
{if(pair.IsFinal()==true)
{this.m_callback.PairRemoved(proxy1.userData,proxy2.userData,pair.userData);}
this.m_pairBuffer[removeCount].proxyId1=pair.proxyId1;this.m_pairBuffer[removeCount].proxyId2=pair.proxyId2;++removeCount;}
else
{if(pair.IsFinal()==false)
{pair.userData=this.m_callback.PairAdded(proxy1.userData,proxy2.userData);pair.SetFinal();}}}
for(i=0;i<removeCount;++i)
{this.RemovePair(this.m_pairBuffer[i].proxyId1,this.m_pairBuffer[i].proxyId2);}
this.m_pairBufferCount=0;if(b2BroadPhase.s_validate)
{this.ValidateTable();}},AddPair:function(proxyId1,proxyId2){if(proxyId1>proxyId2){var temp=proxyId1;proxyId1=proxyId2;proxyId2=temp;}
var hash=b2PairManager.Hash(proxyId1,proxyId2)&b2Pair.b2_tableMask;var pair=pair=this.FindHash(proxyId1,proxyId2,hash);if(pair!=null)
{return pair;}
var pIndex=this.m_freePair;pair=this.m_pairs[pIndex];this.m_freePair=pair.next;pair.proxyId1=proxyId1;pair.proxyId2=proxyId2;pair.status=0;pair.userData=null;pair.next=this.m_hashTable[hash];this.m_hashTable[hash]=pIndex;++this.m_pairCount;return pair;},RemovePair:function(proxyId1,proxyId2){if(proxyId1>proxyId2){var temp=proxyId1;proxyId1=proxyId2;proxyId2=temp;}
var hash=b2PairManager.Hash(proxyId1,proxyId2)&b2Pair.b2_tableMask;var node=this.m_hashTable[hash];var pNode=null;while(node!=b2Pair.b2_nullPair)
{if(b2PairManager.Equals(this.m_pairs[node],proxyId1,proxyId2))
{var index=node;if(pNode){pNode.next=this.m_pairs[node].next;}
else{this.m_hashTable[hash]=this.m_pairs[node].next;}
var pair=this.m_pairs[index];var userData=pair.userData;pair.next=this.m_freePair;pair.proxyId1=b2Pair.b2_nullProxy;pair.proxyId2=b2Pair.b2_nullProxy;pair.userData=null;pair.status=0;this.m_freePair=index;--this.m_pairCount;return userData;}
else
{pNode=this.m_pairs[node];node=pNode.next;}}
return null;},Find:function(proxyId1,proxyId2){if(proxyId1>proxyId2){var temp=proxyId1;proxyId1=proxyId2;proxyId2=temp;}
var hash=b2PairManager.Hash(proxyId1,proxyId2)&b2Pair.b2_tableMask;return this.FindHash(proxyId1,proxyId2,hash);},FindHash:function(proxyId1,proxyId2,hash){var index=this.m_hashTable[hash];while(index!=b2Pair.b2_nullPair&&b2PairManager.Equals(this.m_pairs[index],proxyId1,proxyId2)==false)
{index=this.m_pairs[index].next;}
if(index==b2Pair.b2_nullPair)
{return null;}
return this.m_pairs[index];},ValidateBuffer:function(){},ValidateTable:function(){},m_broadPhase:null,m_callback:null,m_pairs:null,m_freePair:0,m_pairCount:0,m_pairBuffer:null,m_pairBufferCount:0,m_hashTable:null};b2PairManager.Hash=function(proxyId1,proxyId2)
{var key=((proxyId2<<16)&0xffff0000)|proxyId1;key=~key+((key<<15)&0xFFFF8000);key=key^((key>>12)&0x000fffff);key=key+((key<<2)&0xFFFFFFFC);key=key^((key>>4)&0x0fffffff);key=key*2057;key=key^((key>>16)&0x0000ffff);return key;};b2PairManager.Equals=function(pair,proxyId1,proxyId2)
{return(pair.proxyId1==proxyId1&&pair.proxyId2==proxyId2);};b2PairManager.EqualsPair=function(pair1,pair2)
{return pair1.proxyId1==pair2.proxyId1&&pair1.proxyId2==pair2.proxyId2;};
var b2BroadPhase=Class.create();b2BroadPhase.prototype={initialize:function(worldAABB,callback){this.m_pairManager=new b2PairManager();this.m_proxyPool=new Array(b2Settings.b2_maxPairs);this.m_bounds=new Array(2*b2Settings.b2_maxProxies);this.m_queryResults=new Array(b2Settings.b2_maxProxies);this.m_quantizationFactor=new b2Vec2();var i=0;this.m_pairManager.Initialize(this,callback);this.m_worldAABB=worldAABB;this.m_proxyCount=0;for(i=0;i<b2Settings.b2_maxProxies;i++){this.m_queryResults[i]=0;}
this.m_bounds=new Array(2);for(i=0;i<2;i++){this.m_bounds[i]=new Array(2*b2Settings.b2_maxProxies);for(var j=0;j<2*b2Settings.b2_maxProxies;j++){this.m_bounds[i][j]=new b2Bound();}}
var dX=worldAABB.maxVertex.x;var dY=worldAABB.maxVertex.y;dX-=worldAABB.minVertex.x;dY-=worldAABB.minVertex.y;this.m_quantizationFactor.x=b2Settings.USHRT_MAX/dX;this.m_quantizationFactor.y=b2Settings.USHRT_MAX/dY;var tProxy;for(i=0;i<b2Settings.b2_maxProxies-1;++i)
{tProxy=new b2Proxy();this.m_proxyPool[i]=tProxy;tProxy.SetNext(i+1);tProxy.timeStamp=0;tProxy.overlapCount=b2BroadPhase.b2_invalid;tProxy.userData=null;}
tProxy=new b2Proxy();this.m_proxyPool[b2Settings.b2_maxProxies-1]=tProxy;tProxy.SetNext(b2Pair.b2_nullProxy);tProxy.timeStamp=0;tProxy.overlapCount=b2BroadPhase.b2_invalid;tProxy.userData=null;this.m_freeProxy=0;this.m_timeStamp=1;this.m_queryResultCount=0;},InRange:function(aabb){var dX;var dY;var d2X;var d2Y;dX=aabb.minVertex.x;dY=aabb.minVertex.y;dX-=this.m_worldAABB.maxVertex.x;dY-=this.m_worldAABB.maxVertex.y;d2X=this.m_worldAABB.minVertex.x;d2Y=this.m_worldAABB.minVertex.y;d2X-=aabb.maxVertex.x;d2Y-=aabb.maxVertex.y;dX=b2Math.b2Max(dX,d2X);dY=b2Math.b2Max(dY,d2Y);return b2Math.b2Max(dX,dY)<0.0;},GetProxy:function(proxyId){if(proxyId==b2Pair.b2_nullProxy||this.m_proxyPool[proxyId].IsValid()==false)
{return null;}
return this.m_proxyPool[proxyId];},CreateProxy:function(aabb,userData){var index=0;var proxy;var proxyId=this.m_freeProxy;proxy=this.m_proxyPool[proxyId];this.m_freeProxy=proxy.GetNext();proxy.overlapCount=0;proxy.userData=userData;var boundCount=2*this.m_proxyCount;var lowerValues=new Array();var upperValues=new Array();this.ComputeBounds(lowerValues,upperValues,aabb);for(var axis=0;axis<2;++axis)
{var bounds=this.m_bounds[axis];var lowerIndex=0;var upperIndex=0;var lowerIndexOut=[lowerIndex];var upperIndexOut=[upperIndex];this.Query(lowerIndexOut,upperIndexOut,lowerValues[axis],upperValues[axis],bounds,boundCount,axis);lowerIndex=lowerIndexOut[0];upperIndex=upperIndexOut[0];var tArr=new Array();var j=0;var tEnd=boundCount-upperIndex
var tBound1;var tBound2;for(j=0;j<tEnd;j++){tArr[j]=new b2Bound();tBound1=tArr[j];tBound2=bounds[upperIndex+j];tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
tEnd=tArr.length;var tIndex=upperIndex+2;for(j=0;j<tEnd;j++){tBound2=tArr[j];tBound1=bounds[tIndex+j]
tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
tArr=new Array();tEnd=upperIndex-lowerIndex;for(j=0;j<tEnd;j++){tArr[j]=new b2Bound();tBound1=tArr[j];tBound2=bounds[lowerIndex+j];tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
tEnd=tArr.length;tIndex=lowerIndex+1;for(j=0;j<tEnd;j++){tBound2=tArr[j];tBound1=bounds[tIndex+j]
tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
++upperIndex;bounds[lowerIndex].value=lowerValues[axis];bounds[lowerIndex].proxyId=proxyId;bounds[upperIndex].value=upperValues[axis];bounds[upperIndex].proxyId=proxyId;bounds[lowerIndex].stabbingCount=lowerIndex==0?0:bounds[lowerIndex-1].stabbingCount;bounds[upperIndex].stabbingCount=bounds[upperIndex-1].stabbingCount;for(index=lowerIndex;index<upperIndex;++index)
{bounds[index].stabbingCount++;}
for(index=lowerIndex;index<boundCount+2;++index)
{var proxy2=this.m_proxyPool[bounds[index].proxyId];if(bounds[index].IsLower())
{proxy2.lowerBounds[axis]=index;}
else
{proxy2.upperBounds[axis]=index;}}}
++this.m_proxyCount;for(var i=0;i<this.m_queryResultCount;++i)
{this.m_pairManager.AddBufferedPair(proxyId,this.m_queryResults[i]);}
this.m_pairManager.Commit();this.m_queryResultCount=0;this.IncrementTimeStamp();return proxyId;},DestroyProxy:function(proxyId){var proxy=this.m_proxyPool[proxyId];var boundCount=2*this.m_proxyCount;for(var axis=0;axis<2;++axis)
{var bounds=this.m_bounds[axis];var lowerIndex=proxy.lowerBounds[axis];var upperIndex=proxy.upperBounds[axis];var lowerValue=bounds[lowerIndex].value;var upperValue=bounds[upperIndex].value;var tArr=new Array();var j=0;var tEnd=upperIndex-lowerIndex-1;var tBound1;var tBound2;for(j=0;j<tEnd;j++){tArr[j]=new b2Bound();tBound1=tArr[j];tBound2=bounds[lowerIndex+1+j];tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
tEnd=tArr.length;var tIndex=lowerIndex;for(j=0;j<tEnd;j++){tBound2=tArr[j];tBound1=bounds[tIndex+j]
tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
tArr=new Array();tEnd=boundCount-upperIndex-1;for(j=0;j<tEnd;j++){tArr[j]=new b2Bound();tBound1=tArr[j];tBound2=bounds[upperIndex+1+j];tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
tEnd=tArr.length;tIndex=upperIndex-1;for(j=0;j<tEnd;j++){tBound2=tArr[j];tBound1=bounds[tIndex+j]
tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
tEnd=boundCount-2;for(var index=lowerIndex;index<tEnd;++index)
{var proxy2=this.m_proxyPool[bounds[index].proxyId];if(bounds[index].IsLower())
{proxy2.lowerBounds[axis]=index;}
else
{proxy2.upperBounds[axis]=index;}}
tEnd=upperIndex-1;for(var index2=lowerIndex;index2<tEnd;++index2)
{bounds[index2].stabbingCount--;}
this.Query([0],[0],lowerValue,upperValue,bounds,boundCount-2,axis);}
for(var i=0;i<this.m_queryResultCount;++i)
{this.m_pairManager.RemoveBufferedPair(proxyId,this.m_queryResults[i]);}
this.m_pairManager.Commit();this.m_queryResultCount=0;this.IncrementTimeStamp();proxy.userData=null;proxy.overlapCount=b2BroadPhase.b2_invalid;proxy.lowerBounds[0]=b2BroadPhase.b2_invalid;proxy.lowerBounds[1]=b2BroadPhase.b2_invalid;proxy.upperBounds[0]=b2BroadPhase.b2_invalid;proxy.upperBounds[1]=b2BroadPhase.b2_invalid;proxy.SetNext(this.m_freeProxy);this.m_freeProxy=proxyId;--this.m_proxyCount;},MoveProxy:function(proxyId,aabb){var axis=0;var index=0;var bound;var prevBound
var nextBound
var nextProxyId=0;var nextProxy;if(proxyId==b2Pair.b2_nullProxy||b2Settings.b2_maxProxies<=proxyId)
{return;}
if(aabb.IsValid()==false)
{return;}
var boundCount=2*this.m_proxyCount;var proxy=this.m_proxyPool[proxyId];var newValues=new b2BoundValues();this.ComputeBounds(newValues.lowerValues,newValues.upperValues,aabb);var oldValues=new b2BoundValues();for(axis=0;axis<2;++axis)
{oldValues.lowerValues[axis]=this.m_bounds[axis][proxy.lowerBounds[axis]].value;oldValues.upperValues[axis]=this.m_bounds[axis][proxy.upperBounds[axis]].value;}
for(axis=0;axis<2;++axis)
{var bounds=this.m_bounds[axis];var lowerIndex=proxy.lowerBounds[axis];var upperIndex=proxy.upperBounds[axis];var lowerValue=newValues.lowerValues[axis];var upperValue=newValues.upperValues[axis];var deltaLower=lowerValue-bounds[lowerIndex].value;var deltaUpper=upperValue-bounds[upperIndex].value;bounds[lowerIndex].value=lowerValue;bounds[upperIndex].value=upperValue;if(deltaLower<0)
{index=lowerIndex;while(index>0&&lowerValue<bounds[index-1].value)
{bound=bounds[index];prevBound=bounds[index-1];var prevProxyId=prevBound.proxyId;var prevProxy=this.m_proxyPool[prevBound.proxyId];prevBound.stabbingCount++;if(prevBound.IsUpper()==true)
{if(this.TestOverlap(newValues,prevProxy))
{this.m_pairManager.AddBufferedPair(proxyId,prevProxyId);}
prevProxy.upperBounds[axis]++;bound.stabbingCount++;}
else
{prevProxy.lowerBounds[axis]++;bound.stabbingCount--;}
proxy.lowerBounds[axis]--;bound.Swap(prevBound);--index;}}
if(deltaUpper>0)
{index=upperIndex;while(index<boundCount-1&&bounds[index+1].value<=upperValue)
{bound=bounds[index];nextBound=bounds[index+1];nextProxyId=nextBound.proxyId;nextProxy=this.m_proxyPool[nextProxyId];nextBound.stabbingCount++;if(nextBound.IsLower()==true)
{if(this.TestOverlap(newValues,nextProxy))
{this.m_pairManager.AddBufferedPair(proxyId,nextProxyId);}
nextProxy.lowerBounds[axis]--;bound.stabbingCount++;}
else
{nextProxy.upperBounds[axis]--;bound.stabbingCount--;}
proxy.upperBounds[axis]++;bound.Swap(nextBound);index++;}}
if(deltaLower>0)
{index=lowerIndex;while(index<boundCount-1&&bounds[index+1].value<=lowerValue)
{bound=bounds[index];nextBound=bounds[index+1];nextProxyId=nextBound.proxyId;nextProxy=this.m_proxyPool[nextProxyId];nextBound.stabbingCount--;if(nextBound.IsUpper())
{if(this.TestOverlap(oldValues,nextProxy))
{this.m_pairManager.RemoveBufferedPair(proxyId,nextProxyId);}
nextProxy.upperBounds[axis]--;bound.stabbingCount--;}
else
{nextProxy.lowerBounds[axis]--;bound.stabbingCount++;}
proxy.lowerBounds[axis]++;bound.Swap(nextBound);index++;}}
if(deltaUpper<0)
{index=upperIndex;while(index>0&&upperValue<bounds[index-1].value)
{bound=bounds[index];prevBound=bounds[index-1];prevProxyId=prevBound.proxyId;prevProxy=this.m_proxyPool[prevProxyId];prevBound.stabbingCount--;if(prevBound.IsLower()==true)
{if(this.TestOverlap(oldValues,prevProxy))
{this.m_pairManager.RemoveBufferedPair(proxyId,prevProxyId);}
prevProxy.lowerBounds[axis]++;bound.stabbingCount--;}
else
{prevProxy.upperBounds[axis]++;bound.stabbingCount++;}
proxy.upperBounds[axis]--;bound.Swap(prevBound);index--;}}}},Commit:function(){this.m_pairManager.Commit();},QueryAABB:function(aabb,userData,maxCount){var lowerValues=new Array();var upperValues=new Array();this.ComputeBounds(lowerValues,upperValues,aabb);var lowerIndex=0;var upperIndex=0;var lowerIndexOut=[lowerIndex];var upperIndexOut=[upperIndex];this.Query(lowerIndexOut,upperIndexOut,lowerValues[0],upperValues[0],this.m_bounds[0],2*this.m_proxyCount,0);this.Query(lowerIndexOut,upperIndexOut,lowerValues[1],upperValues[1],this.m_bounds[1],2*this.m_proxyCount,1);var count=0;for(var i=0;i<this.m_queryResultCount&&count<maxCount;++i,++count)
{var proxy=this.m_proxyPool[this.m_queryResults[i]];userData[i]=proxy.userData;}
this.m_queryResultCount=0;this.IncrementTimeStamp();return count;},Validate:function(){var pair;var proxy1;var proxy2;var overlap;for(var axis=0;axis<2;++axis)
{var bounds=this.m_bounds[axis];var boundCount=2*this.m_proxyCount;var stabbingCount=0;for(var i=0;i<boundCount;++i)
{var bound=bounds[i];if(bound.IsLower()==true)
{stabbingCount++;}
else
{stabbingCount--;}}}},ComputeBounds:function(lowerValues,upperValues,aabb)
{var minVertexX=aabb.minVertex.x;var minVertexY=aabb.minVertex.y;minVertexX=b2Math.b2Min(minVertexX,this.m_worldAABB.maxVertex.x);minVertexY=b2Math.b2Min(minVertexY,this.m_worldAABB.maxVertex.y);minVertexX=b2Math.b2Max(minVertexX,this.m_worldAABB.minVertex.x);minVertexY=b2Math.b2Max(minVertexY,this.m_worldAABB.minVertex.y);var maxVertexX=aabb.maxVertex.x;var maxVertexY=aabb.maxVertex.y;maxVertexX=b2Math.b2Min(maxVertexX,this.m_worldAABB.maxVertex.x);maxVertexY=b2Math.b2Min(maxVertexY,this.m_worldAABB.maxVertex.y);maxVertexX=b2Math.b2Max(maxVertexX,this.m_worldAABB.minVertex.x);maxVertexY=b2Math.b2Max(maxVertexY,this.m_worldAABB.minVertex.y);lowerValues[0]=(this.m_quantizationFactor.x*(minVertexX-this.m_worldAABB.minVertex.x))&(b2Settings.USHRT_MAX-1);upperValues[0]=((this.m_quantizationFactor.x*(maxVertexX-this.m_worldAABB.minVertex.x))&0x0000ffff)|1;lowerValues[1]=(this.m_quantizationFactor.y*(minVertexY-this.m_worldAABB.minVertex.y))&(b2Settings.USHRT_MAX-1);upperValues[1]=((this.m_quantizationFactor.y*(maxVertexY-this.m_worldAABB.minVertex.y))&0x0000ffff)|1;},TestOverlapValidate:function(p1,p2){for(var axis=0;axis<2;++axis)
{var bounds=this.m_bounds[axis];if(bounds[p1.lowerBounds[axis]].value>bounds[p2.upperBounds[axis]].value)
return false;if(bounds[p1.upperBounds[axis]].value<bounds[p2.lowerBounds[axis]].value)
return false;}
return true;},TestOverlap:function(b,p)
{for(var axis=0;axis<2;++axis)
{var bounds=this.m_bounds[axis];if(b.lowerValues[axis]>bounds[p.upperBounds[axis]].value)
return false;if(b.upperValues[axis]<bounds[p.lowerBounds[axis]].value)
return false;}
return true;},Query:function(lowerQueryOut,upperQueryOut,lowerValue,upperValue,bounds,boundCount,axis){var lowerQuery=b2BroadPhase.BinarySearch(bounds,boundCount,lowerValue);var upperQuery=b2BroadPhase.BinarySearch(bounds,boundCount,upperValue);for(var j=lowerQuery;j<upperQuery;++j)
{if(bounds[j].IsLower())
{this.IncrementOverlapCount(bounds[j].proxyId);}}
if(lowerQuery>0)
{var i=lowerQuery-1;var s=bounds[i].stabbingCount;while(s)
{if(bounds[i].IsLower())
{var proxy=this.m_proxyPool[bounds[i].proxyId];if(lowerQuery<=proxy.upperBounds[axis])
{this.IncrementOverlapCount(bounds[i].proxyId);--s;}}
--i;}}
lowerQueryOut[0]=lowerQuery;upperQueryOut[0]=upperQuery;},IncrementOverlapCount:function(proxyId){var proxy=this.m_proxyPool[proxyId];if(proxy.timeStamp<this.m_timeStamp)
{proxy.timeStamp=this.m_timeStamp;proxy.overlapCount=1;}
else
{proxy.overlapCount=2;this.m_queryResults[this.m_queryResultCount]=proxyId;++this.m_queryResultCount;}},IncrementTimeStamp:function(){if(this.m_timeStamp==b2Settings.USHRT_MAX)
{for(var i=0;i<b2Settings.b2_maxProxies;++i)
{this.m_proxyPool[i].timeStamp=0;}
this.m_timeStamp=1;}
else
{++this.m_timeStamp;}},m_pairManager:new b2PairManager(),m_proxyPool:new Array(b2Settings.b2_maxPairs),m_freeProxy:0,m_bounds:new Array(2*b2Settings.b2_maxProxies),m_queryResults:new Array(b2Settings.b2_maxProxies),m_queryResultCount:0,m_worldAABB:null,m_quantizationFactor:new b2Vec2(),m_proxyCount:0,m_timeStamp:0};b2BroadPhase.s_validate=false;b2BroadPhase.b2_invalid=b2Settings.USHRT_MAX;b2BroadPhase.b2_nullEdge=b2Settings.USHRT_MAX;b2BroadPhase.BinarySearch=function(bounds,count,value)
{var low=0;var high=count-1;while(low<=high)
{var mid=Math.floor((low+high)/2);if(bounds[mid].value>value)
{high=mid-1;}
else if(bounds[mid].value<value)
{low=mid+1;}
else
{return(mid);}}
return(low);};
var b2Collision=Class.create();b2Collision.prototype={initialize:function(){}}
b2Collision.b2_nullFeature=0x000000ff;b2Collision.ClipSegmentToLine=function(vOut,vIn,normal,offset)
{var numOut=0;var vIn0=vIn[0].v;var vIn1=vIn[1].v;var distance0=b2Math.b2Dot(normal,vIn[0].v)-offset;var distance1=b2Math.b2Dot(normal,vIn[1].v)-offset;if(distance0<=0.0)vOut[numOut++]=vIn[0];if(distance1<=0.0)vOut[numOut++]=vIn[1];if(distance0*distance1<0.0)
{var interp=distance0/(distance0-distance1);var tVec=vOut[numOut].v;tVec.x=vIn0.x+interp*(vIn1.x-vIn0.x);tVec.y=vIn0.y+interp*(vIn1.y-vIn0.y);if(distance0>0.0)
{vOut[numOut].id=vIn[0].id;}
else
{vOut[numOut].id=vIn[1].id;}
++numOut;}
return numOut;};b2Collision.EdgeSeparation=function(poly1,edge1,poly2)
{var vert1s=poly1.m_vertices;var count2=poly2.m_vertexCount;var vert2s=poly2.m_vertices;var normalX=poly1.m_normals[edge1].x;var normalY=poly1.m_normals[edge1].y;var tX=normalX;var tMat=poly1.m_R;normalX=tMat.col1.x*tX+tMat.col2.x*normalY;normalY=tMat.col1.y*tX+tMat.col2.y*normalY;var normalLocal2X=normalX;var normalLocal2Y=normalY;tMat=poly2.m_R;tX=normalLocal2X*tMat.col1.x+normalLocal2Y*tMat.col1.y;normalLocal2Y=normalLocal2X*tMat.col2.x+normalLocal2Y*tMat.col2.y;normalLocal2X=tX;var vertexIndex2=0;var minDot=Number.MAX_VALUE;for(var i=0;i<count2;++i)
{var tVec=vert2s[i];var dot=tVec.x*normalLocal2X+tVec.y*normalLocal2Y;if(dot<minDot)
{minDot=dot;vertexIndex2=i;}}
tMat=poly1.m_R;var v1X=poly1.m_position.x+(tMat.col1.x*vert1s[edge1].x+tMat.col2.x*vert1s[edge1].y)
var v1Y=poly1.m_position.y+(tMat.col1.y*vert1s[edge1].x+tMat.col2.y*vert1s[edge1].y)
tMat=poly2.m_R;var v2X=poly2.m_position.x+(tMat.col1.x*vert2s[vertexIndex2].x+tMat.col2.x*vert2s[vertexIndex2].y)
var v2Y=poly2.m_position.y+(tMat.col1.y*vert2s[vertexIndex2].x+tMat.col2.y*vert2s[vertexIndex2].y)
v2X-=v1X;v2Y-=v1Y;var separation=v2X*normalX+v2Y*normalY;return separation;};b2Collision.FindMaxSeparation=function(edgeIndex,poly1,poly2,conservative)
{var count1=poly1.m_vertexCount;var dX=poly2.m_position.x-poly1.m_position.x;var dY=poly2.m_position.y-poly1.m_position.y;var dLocal1X=(dX*poly1.m_R.col1.x+dY*poly1.m_R.col1.y);var dLocal1Y=(dX*poly1.m_R.col2.x+dY*poly1.m_R.col2.y);var edge=0;var maxDot=-Number.MAX_VALUE;for(var i=0;i<count1;++i)
{var dot=(poly1.m_normals[i].x*dLocal1X+poly1.m_normals[i].y*dLocal1Y);if(dot>maxDot)
{maxDot=dot;edge=i;}}
var s=b2Collision.EdgeSeparation(poly1,edge,poly2);if(s>0.0&&conservative==false)
{return s;}
var prevEdge=edge-1>=0?edge-1:count1-1;var sPrev=b2Collision.EdgeSeparation(poly1,prevEdge,poly2);if(sPrev>0.0&&conservative==false)
{return sPrev;}
var nextEdge=edge+1<count1?edge+1:0;var sNext=b2Collision.EdgeSeparation(poly1,nextEdge,poly2);if(sNext>0.0&&conservative==false)
{return sNext;}
var bestEdge=0;var bestSeparation;var increment=0;if(sPrev>s&&sPrev>sNext)
{increment=-1;bestEdge=prevEdge;bestSeparation=sPrev;}
else if(sNext>s)
{increment=1;bestEdge=nextEdge;bestSeparation=sNext;}
else
{edgeIndex[0]=edge;return s;}
while(true)
{if(increment==-1)
edge=bestEdge-1>=0?bestEdge-1:count1-1;else
edge=bestEdge+1<count1?bestEdge+1:0;s=b2Collision.EdgeSeparation(poly1,edge,poly2);if(s>0.0&&conservative==false)
{return s;}
if(s>bestSeparation)
{bestEdge=edge;bestSeparation=s;}
else
{break;}}
edgeIndex[0]=bestEdge;return bestSeparation;};b2Collision.FindIncidentEdge=function(c,poly1,edge1,poly2)
{var count1=poly1.m_vertexCount;var vert1s=poly1.m_vertices;var count2=poly2.m_vertexCount;var vert2s=poly2.m_vertices;var vertex11=edge1;var vertex12=edge1+1==count1?0:edge1+1;var tVec=vert1s[vertex12];var normal1Local1X=tVec.x;var normal1Local1Y=tVec.y;tVec=vert1s[vertex11];normal1Local1X-=tVec.x;normal1Local1Y-=tVec.y;var tX=normal1Local1X;normal1Local1X=normal1Local1Y;normal1Local1Y=-tX;var invLength=1.0/Math.sqrt(normal1Local1X*normal1Local1X+normal1Local1Y*normal1Local1Y);normal1Local1X*=invLength;normal1Local1Y*=invLength;var normal1X=normal1Local1X;var normal1Y=normal1Local1Y;tX=normal1X;var tMat=poly1.m_R;normal1X=tMat.col1.x*tX+tMat.col2.x*normal1Y;normal1Y=tMat.col1.y*tX+tMat.col2.y*normal1Y;var normal1Local2X=normal1X;var normal1Local2Y=normal1Y;tMat=poly2.m_R;tX=normal1Local2X*tMat.col1.x+normal1Local2Y*tMat.col1.y;normal1Local2Y=normal1Local2X*tMat.col2.x+normal1Local2Y*tMat.col2.y;normal1Local2X=tX;var vertex21=0;var vertex22=0;var minDot=Number.MAX_VALUE;for(var i=0;i<count2;++i)
{var i1=i;var i2=i+1<count2?i+1:0;tVec=vert2s[i2];var normal2Local2X=tVec.x;var normal2Local2Y=tVec.y;tVec=vert2s[i1];normal2Local2X-=tVec.x;normal2Local2Y-=tVec.y;tX=normal2Local2X;normal2Local2X=normal2Local2Y;normal2Local2Y=-tX;invLength=1.0/Math.sqrt(normal2Local2X*normal2Local2X+normal2Local2Y*normal2Local2Y);normal2Local2X*=invLength;normal2Local2Y*=invLength;var dot=normal2Local2X*normal1Local2X+normal2Local2Y*normal1Local2Y;if(dot<minDot)
{minDot=dot;vertex21=i1;vertex22=i2;}}
var tClip;tClip=c[0];tVec=tClip.v;tVec.SetV(vert2s[vertex21]);tVec.MulM(poly2.m_R);tVec.Add(poly2.m_position);tClip.id.features.referenceFace=edge1;tClip.id.features.incidentEdge=vertex21;tClip.id.features.incidentVertex=vertex21;tClip=c[1];tVec=tClip.v;tVec.SetV(vert2s[vertex22]);tVec.MulM(poly2.m_R);tVec.Add(poly2.m_position);tClip.id.features.referenceFace=edge1;tClip.id.features.incidentEdge=vertex21;tClip.id.features.incidentVertex=vertex22;};b2Collision.b2CollidePolyTempVec=new b2Vec2();b2Collision.b2CollidePoly=function(manifold,polyA,polyB,conservative)
{manifold.pointCount=0;var edgeA=0;var edgeAOut=[edgeA];var separationA=b2Collision.FindMaxSeparation(edgeAOut,polyA,polyB,conservative);edgeA=edgeAOut[0];if(separationA>0.0&&conservative==false)
return;var edgeB=0;var edgeBOut=[edgeB];var separationB=b2Collision.FindMaxSeparation(edgeBOut,polyB,polyA,conservative);edgeB=edgeBOut[0];if(separationB>0.0&&conservative==false)
return;var poly1;var poly2;var edge1=0;var flip=0;var k_relativeTol=0.98;var k_absoluteTol=0.001;if(separationB>k_relativeTol*separationA+k_absoluteTol)
{poly1=polyB;poly2=polyA;edge1=edgeB;flip=1;}
else
{poly1=polyA;poly2=polyB;edge1=edgeA;flip=0;}
var incidentEdge=[new ClipVertex(),new ClipVertex()];b2Collision.FindIncidentEdge(incidentEdge,poly1,edge1,poly2);var count1=poly1.m_vertexCount;var vert1s=poly1.m_vertices;var v11=vert1s[edge1];var v12=edge1+1<count1?vert1s[edge1+1]:vert1s[0];var dvX=v12.x-v11.x;var dvY=v12.y-v11.y;var sideNormalX=v12.x-v11.x;var sideNormalY=v12.y-v11.y;var tX=sideNormalX;var tMat=poly1.m_R;sideNormalX=tMat.col1.x*tX+tMat.col2.x*sideNormalY;sideNormalY=tMat.col1.y*tX+tMat.col2.y*sideNormalY;var invLength=1.0/Math.sqrt(sideNormalX*sideNormalX+sideNormalY*sideNormalY);sideNormalX*=invLength;sideNormalY*=invLength;var frontNormalX=sideNormalX;var frontNormalY=sideNormalY;tX=frontNormalX;frontNormalX=frontNormalY;frontNormalY=-tX;var v11X=v11.x;var v11Y=v11.y;tX=v11X;tMat=poly1.m_R;v11X=tMat.col1.x*tX+tMat.col2.x*v11Y;v11Y=tMat.col1.y*tX+tMat.col2.y*v11Y;v11X+=poly1.m_position.x;v11Y+=poly1.m_position.y;var v12X=v12.x;var v12Y=v12.y;tX=v12X;tMat=poly1.m_R;v12X=tMat.col1.x*tX+tMat.col2.x*v12Y;v12Y=tMat.col1.y*tX+tMat.col2.y*v12Y;v12X+=poly1.m_position.x;v12Y+=poly1.m_position.y;var frontOffset=frontNormalX*v11X+frontNormalY*v11Y;var sideOffset1=-(sideNormalX*v11X+sideNormalY*v11Y);var sideOffset2=sideNormalX*v12X+sideNormalY*v12Y;var clipPoints1=[new ClipVertex(),new ClipVertex()];var clipPoints2=[new ClipVertex(),new ClipVertex()];var np=0;b2Collision.b2CollidePolyTempVec.Set(-sideNormalX,-sideNormalY);np=b2Collision.ClipSegmentToLine(clipPoints1,incidentEdge,b2Collision.b2CollidePolyTempVec,sideOffset1);if(np<2)
return;b2Collision.b2CollidePolyTempVec.Set(sideNormalX,sideNormalY);np=b2Collision.ClipSegmentToLine(clipPoints2,clipPoints1,b2Collision.b2CollidePolyTempVec,sideOffset2);if(np<2)
return;if(flip){manifold.normal.Set(-frontNormalX,-frontNormalY);}
else{manifold.normal.Set(frontNormalX,frontNormalY);}
var pointCount=0;for(var i=0;i<b2Settings.b2_maxManifoldPoints;++i)
{var tVec=clipPoints2[i].v;var separation=(frontNormalX*tVec.x+frontNormalY*tVec.y)-frontOffset;if(separation<=0.0||conservative==true)
{var cp=manifold.points[pointCount];cp.separation=separation;cp.position.SetV(clipPoints2[i].v);cp.id.Set(clipPoints2[i].id);cp.id.features.flip=flip;++pointCount;}}
manifold.pointCount=pointCount;};b2Collision.b2CollideCircle=function(manifold,circle1,circle2,conservative)
{manifold.pointCount=0;var dX=circle2.m_position.x-circle1.m_position.x;var dY=circle2.m_position.y-circle1.m_position.y;var distSqr=dX*dX+dY*dY;var radiusSum=circle1.m_radius+circle2.m_radius;if(distSqr>radiusSum*radiusSum&&conservative==false)
{return;}
var separation;if(distSqr<Number.MIN_VALUE)
{separation=-radiusSum;manifold.normal.Set(0.0,1.0);}
else
{var dist=Math.sqrt(distSqr);separation=dist-radiusSum;var a=1.0/dist;manifold.normal.x=a*dX;manifold.normal.y=a*dY;}
manifold.pointCount=1;var tPoint=manifold.points[0];tPoint.id.set_key(0);tPoint.separation=separation;tPoint.position.x=circle2.m_position.x-(circle2.m_radius*manifold.normal.x);tPoint.position.y=circle2.m_position.y-(circle2.m_radius*manifold.normal.y);};b2Collision.b2CollidePolyAndCircle=function(manifold,poly,circle,conservative)
{manifold.pointCount=0;var tPoint;var dX;var dY;var xLocalX=circle.m_position.x-poly.m_position.x;var xLocalY=circle.m_position.y-poly.m_position.y;var tMat=poly.m_R;var tX=xLocalX*tMat.col1.x+xLocalY*tMat.col1.y;xLocalY=xLocalX*tMat.col2.x+xLocalY*tMat.col2.y;xLocalX=tX;var dist;var normalIndex=0;var separation=-Number.MAX_VALUE;var radius=circle.m_radius;for(var i=0;i<poly.m_vertexCount;++i)
{var s=poly.m_normals[i].x*(xLocalX-poly.m_vertices[i].x)+poly.m_normals[i].y*(xLocalY-poly.m_vertices[i].y);if(s>radius)
{return;}
if(s>separation)
{separation=s;normalIndex=i;}}
if(separation<Number.MIN_VALUE)
{manifold.pointCount=1;var tVec=poly.m_normals[normalIndex];manifold.normal.x=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y;manifold.normal.y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y;tPoint=manifold.points[0];tPoint.id.features.incidentEdge=normalIndex;tPoint.id.features.incidentVertex=b2Collision.b2_nullFeature;tPoint.id.features.referenceFace=b2Collision.b2_nullFeature;tPoint.id.features.flip=0;tPoint.position.x=circle.m_position.x-radius*manifold.normal.x;tPoint.position.y=circle.m_position.y-radius*manifold.normal.y;tPoint.separation=separation-radius;return;}
var vertIndex1=normalIndex;var vertIndex2=vertIndex1+1<poly.m_vertexCount?vertIndex1+1:0;var eX=poly.m_vertices[vertIndex2].x-poly.m_vertices[vertIndex1].x;var eY=poly.m_vertices[vertIndex2].y-poly.m_vertices[vertIndex1].y;var length=Math.sqrt(eX*eX+eY*eY);eX/=length;eY/=length;if(length<Number.MIN_VALUE)
{dX=xLocalX-poly.m_vertices[vertIndex1].x;dY=xLocalY-poly.m_vertices[vertIndex1].y;dist=Math.sqrt(dX*dX+dY*dY);dX/=dist;dY/=dist;if(dist>radius)
{return;}
manifold.pointCount=1;manifold.normal.Set(tMat.col1.x*dX+tMat.col2.x*dY,tMat.col1.y*dX+tMat.col2.y*dY);tPoint=manifold.points[0];tPoint.id.features.incidentEdge=b2Collision.b2_nullFeature;tPoint.id.features.incidentVertex=vertIndex1;tPoint.id.features.referenceFace=b2Collision.b2_nullFeature;tPoint.id.features.flip=0;tPoint.position.x=circle.m_position.x-radius*manifold.normal.x;tPoint.position.y=circle.m_position.y-radius*manifold.normal.y;tPoint.separation=dist-radius;return;}
var u=(xLocalX-poly.m_vertices[vertIndex1].x)*eX+(xLocalY-poly.m_vertices[vertIndex1].y)*eY;tPoint=manifold.points[0];tPoint.id.features.incidentEdge=b2Collision.b2_nullFeature;tPoint.id.features.incidentVertex=b2Collision.b2_nullFeature;tPoint.id.features.referenceFace=b2Collision.b2_nullFeature;tPoint.id.features.flip=0;var pX,pY;if(u<=0.0)
{pX=poly.m_vertices[vertIndex1].x;pY=poly.m_vertices[vertIndex1].y;tPoint.id.features.incidentVertex=vertIndex1;}
else if(u>=length)
{pX=poly.m_vertices[vertIndex2].x;pY=poly.m_vertices[vertIndex2].y;tPoint.id.features.incidentVertex=vertIndex2;}
else
{pX=eX*u+poly.m_vertices[vertIndex1].x;pY=eY*u+poly.m_vertices[vertIndex1].y;tPoint.id.features.incidentEdge=vertIndex1;}
dX=xLocalX-pX;dY=xLocalY-pY;dist=Math.sqrt(dX*dX+dY*dY);dX/=dist;dY/=dist;if(dist>radius)
{return;}
manifold.pointCount=1;manifold.normal.Set(tMat.col1.x*dX+tMat.col2.x*dY,tMat.col1.y*dX+tMat.col2.y*dY);tPoint.position.x=circle.m_position.x-radius*manifold.normal.x;tPoint.position.y=circle.m_position.y-radius*manifold.normal.y;tPoint.separation=dist-radius;};b2Collision.b2TestOverlap=function(a,b)
{var t1=b.minVertex;var t2=a.maxVertex;var d1X=t1.x-t2.x;var d1Y=t1.y-t2.y;t1=a.minVertex;t2=b.maxVertex;var d2X=t1.x-t2.x;var d2Y=t1.y-t2.y;if(d1X>0.0||d1Y>0.0)
return false;if(d2X>0.0||d2Y>0.0)
return false;return true;};
var Features=Class.create();Features.prototype={set_referenceFace:function(value){this._referenceFace=value;this._m_id._key=(this._m_id._key&0xffffff00)|(this._referenceFace&0x000000ff)},get_referenceFace:function(){return this._referenceFace;},_referenceFace:0,set_incidentEdge:function(value){this._incidentEdge=value;this._m_id._key=(this._m_id._key&0xffff00ff)|((this._incidentEdge<<8)&0x0000ff00)},get_incidentEdge:function(){return this._incidentEdge;},_incidentEdge:0,set_incidentVertex:function(value){this._incidentVertex=value;this._m_id._key=(this._m_id._key&0xff00ffff)|((this._incidentVertex<<16)&0x00ff0000)},get_incidentVertex:function(){return this._incidentVertex;},_incidentVertex:0,set_flip:function(value){this._flip=value;this._m_id._key=(this._m_id._key&0x00ffffff)|((this._flip<<24)&0xff000000)},get_flip:function(){return this._flip;},_flip:0,_m_id:null,initialize:function(){}};
var b2ContactID=Class.create();b2ContactID.prototype={initialize:function(){this.features=new Features();this.features._m_id=this;},Set:function(id){this.set_key(id._key);},Copy:function(){var id=new b2ContactID();id.set_key(this._key);return id;},get_key:function(){return this._key;},set_key:function(value){this._key=value;this.features._referenceFace=this._key&0x000000ff;this.features._incidentEdge=((this._key&0x0000ff00)>>8)&0x000000ff;this.features._incidentVertex=((this._key&0x00ff0000)>>16)&0x000000ff;this.features._flip=((this._key&0xff000000)>>24)&0x000000ff;},features:new Features(),_key:0};
var b2ContactPoint=Class.create();b2ContactPoint.prototype={position:new b2Vec2(),separation:null,normalImpulse:null,tangentImpulse:null,id:new b2ContactID(),initialize:function(){this.position=new b2Vec2();this.id=new b2ContactID();}};var b2Distance=Class.create();b2Distance.prototype={initialize:function(){}};b2Distance.ProcessTwo=function(p1Out,p2Out,p1s,p2s,points)
{var rX=-points[1].x;var rY=-points[1].y;var dX=points[0].x-points[1].x;var dY=points[0].y-points[1].y;var length=Math.sqrt(dX*dX+dY*dY);dX/=length;dY/=length;var lambda=rX*dX+rY*dY;if(lambda<=0.0||length<Number.MIN_VALUE)
{p1Out.SetV(p1s[1]);p2Out.SetV(p2s[1]);p1s[0].SetV(p1s[1]);p2s[0].SetV(p2s[1]);points[0].SetV(points[1]);return 1;}
lambda/=length;p1Out.x=p1s[1].x+lambda*(p1s[0].x-p1s[1].x);p1Out.y=p1s[1].y+lambda*(p1s[0].y-p1s[1].y);p2Out.x=p2s[1].x+lambda*(p2s[0].x-p2s[1].x);p2Out.y=p2s[1].y+lambda*(p2s[0].y-p2s[1].y);return 2;};b2Distance.ProcessThree=function(p1Out,p2Out,p1s,p2s,points)
{var aX=points[0].x;var aY=points[0].y;var bX=points[1].x;var bY=points[1].y;var cX=points[2].x;var cY=points[2].y;var abX=bX-aX;var abY=bY-aY;var acX=cX-aX;var acY=cY-aY;var bcX=cX-bX;var bcY=cY-bY;var sn=-(aX*abX+aY*abY);var sd=(bX*abX+bY*abY);var tn=-(aX*acX+aY*acY);var td=(cX*acX+cY*acY);var un=-(bX*bcX+bY*bcY);var ud=(cX*bcX+cY*bcY);if(td<=0.0&&ud<=0.0)
{p1Out.SetV(p1s[2]);p2Out.SetV(p2s[2]);p1s[0].SetV(p1s[2]);p2s[0].SetV(p2s[2]);points[0].SetV(points[2]);return 1;}
var n=abX*acY-abY*acX;var vc=n*(aX*bY-aY*bX);var va=n*(bX*cY-bY*cX);if(va<=0.0&&un>=0.0&&ud>=0.0)
{var lambda=un/(un+ud);p1Out.x=p1s[1].x+lambda*(p1s[2].x-p1s[1].x);p1Out.y=p1s[1].y+lambda*(p1s[2].y-p1s[1].y);p2Out.x=p2s[1].x+lambda*(p2s[2].x-p2s[1].x);p2Out.y=p2s[1].y+lambda*(p2s[2].y-p2s[1].y);p1s[0].SetV(p1s[2]);p2s[0].SetV(p2s[2]);points[0].SetV(points[2]);return 2;}
var vb=n*(cX*aY-cY*aX);if(vb<=0.0&&tn>=0.0&&td>=0.0)
{var lambda=tn/(tn+td);p1Out.x=p1s[0].x+lambda*(p1s[2].x-p1s[0].x);p1Out.y=p1s[0].y+lambda*(p1s[2].y-p1s[0].y);p2Out.x=p2s[0].x+lambda*(p2s[2].x-p2s[0].x);p2Out.y=p2s[0].y+lambda*(p2s[2].y-p2s[0].y);p1s[1].SetV(p1s[2]);p2s[1].SetV(p2s[2]);points[1].SetV(points[2]);return 2;}
var denom=va+vb+vc;denom=1.0/denom;var u=va*denom;var v=vb*denom;var w=1.0-u-v;p1Out.x=u*p1s[0].x+v*p1s[1].x+w*p1s[2].x;p1Out.y=u*p1s[0].y+v*p1s[1].y+w*p1s[2].y;p2Out.x=u*p2s[0].x+v*p2s[1].x+w*p2s[2].x;p2Out.y=u*p2s[0].y+v*p2s[1].y+w*p2s[2].y;return 3;};b2Distance.InPoinsts=function(w,points,pointCount)
{for(var i=0;i<pointCount;++i)
{if(w.x==points[i].x&&w.y==points[i].y)
{return true;}}
return false;};b2Distance.Distance=function(p1Out,p2Out,shape1,shape2)
{var p1s=new Array(3);var p2s=new Array(3);var points=new Array(3);var pointCount=0;p1Out.SetV(shape1.m_position);p2Out.SetV(shape2.m_position);var vSqr=0.0;var maxIterations=20;for(var iter=0;iter<maxIterations;++iter)
{var vX=p2Out.x-p1Out.x;var vY=p2Out.y-p1Out.y;var w1=shape1.Support(vX,vY);var w2=shape2.Support(-vX,-vY);vSqr=(vX*vX+vY*vY);var wX=w2.x-w1.x;var wY=w2.y-w1.y;var vw=(vX*wX+vY*wY);if(vSqr-b2Dot(vX*wX+vY*wY)<=0.01*vSqr)
{if(pointCount==0)
{p1Out.SetV(w1);p2Out.SetV(w2);}
b2Distance.g_GJK_Iterations=iter;return Math.sqrt(vSqr);}
switch(pointCount)
{case 0:p1s[0].SetV(w1);p2s[0].SetV(w2);points[0]=w;p1Out.SetV(p1s[0]);p2Out.SetV(p2s[0]);++pointCount;break;case 1:p1s[1].SetV(w1);p2s[1].SetV(w2);points[1].x=wX;points[1].y=wY;pointCount=b2Distance.ProcessTwo(p1Out,p2Out,p1s,p2s,points);break;case 2:p1s[2].SetV(w1);p2s[2].SetV(w2);points[2].x=wX;points[2].y=wY;pointCount=b2Distance.ProcessThree(p1Out,p2Out,p1s,p2s,points);break;}
if(pointCount==3)
{b2Distance.g_GJK_Iterations=iter;return 0.0;}
var maxSqr=-Number.MAX_VALUE;for(var i=0;i<pointCount;++i)
{maxSqr=b2Math.b2Max(maxSqr,(points[i].x*points[i].x+points[i].y*points[i].y));}
if(pointCount==3||vSqr<=100.0*Number.MIN_VALUE*maxSqr)
{b2Distance.g_GJK_Iterations=iter;return Math.sqrt(vSqr);}}
b2Distance.g_GJK_Iterations=maxIterations;return Math.sqrt(vSqr);};b2Distance.g_GJK_Iterations=0;
var b2Manifold=Class.create();b2Manifold.prototype={initialize:function(){this.points=new Array(b2Settings.b2_maxManifoldPoints);for(var i=0;i<b2Settings.b2_maxManifoldPoints;i++){this.points[i]=new b2ContactPoint();}
this.normal=new b2Vec2();},points:null,normal:null,pointCount:0};
var b2OBB=Class.create();b2OBB.prototype={R:new b2Mat22(),center:new b2Vec2(),extents:new b2Vec2(),initialize:function(){this.R=new b2Mat22();this.center=new b2Vec2();this.extents=new b2Vec2();}};
var b2Proxy=Class.create();b2Proxy.prototype={GetNext:function(){return this.lowerBounds[0];},SetNext:function(next){this.lowerBounds[0]=next;},IsValid:function(){return this.overlapCount!=b2BroadPhase.b2_invalid;},lowerBounds:[(0),(0)],upperBounds:[(0),(0)],overlapCount:0,timeStamp:0,userData:null,initialize:function(){this.lowerBounds=[(0),(0)];this.upperBounds=[(0),(0)];}}

var ClipVertex=Class.create();ClipVertex.prototype={v:new b2Vec2(),id:new b2ContactID(),initialize:function(){this.v=new b2Vec2();this.id=new b2ContactID();}};var b2Shape=Class.create();b2Shape.prototype={TestPoint:function(p){return false},GetUserData:function(){return this.m_userData;},GetType:function(){return this.m_type;},GetBody:function(){return this.m_body;},GetPosition:function(){return this.m_position;},GetRotationMatrix:function(){return this.m_R;},ResetProxy:function(broadPhase){},GetNext:function(){return this.m_next;},initialize:function(def,body){this.m_R=new b2Mat22();this.m_position=new b2Vec2();this.m_userData=def.userData;this.m_friction=def.friction;this.m_restitution=def.restitution;this.m_body=body;this.m_proxyId=b2Pair.b2_nullProxy;this.m_maxRadius=0.0;this.m_categoryBits=def.categoryBits;this.m_maskBits=def.maskBits;this.m_groupIndex=def.groupIndex;},DestroyProxy:function()
{if(this.m_proxyId!=b2Pair.b2_nullProxy)
{this.m_body.m_world.m_broadPhase.DestroyProxy(this.m_proxyId);this.m_proxyId=b2Pair.b2_nullProxy;}},Synchronize:function(position1,R1,position2,R2){},QuickSync:function(position,R){},Support:function(dX,dY,out){},GetMaxRadius:function(){return this.m_maxRadius;},m_next:null,m_R:new b2Mat22(),m_position:new b2Vec2(),m_type:0,m_userData:null,m_body:null,m_friction:null,m_restitution:null,m_maxRadius:null,m_proxyId:0,m_categoryBits:0,m_maskBits:0,m_groupIndex:0};b2Shape.Create=function(def,body,center){switch(def.type)
{case b2Shape.e_circleShape:{return new b2CircleShape(def,body,center);}
case b2Shape.e_boxShape:case b2Shape.e_polyShape:{return new b2PolyShape(def,body,center);}}
return null;};b2Shape.Destroy=function(shape)
{if(shape.m_proxyId!=b2Pair.b2_nullProxy)
shape.m_body.m_world.m_broadPhase.DestroyProxy(shape.m_proxyId);};b2Shape.e_unknownShape=-1;b2Shape.e_circleShape=0;b2Shape.e_boxShape=1;b2Shape.e_polyShape=2;b2Shape.e_meshShape=3;b2Shape.e_shapeTypeCount=4;b2Shape.PolyMass=function(massData,vs,count,rho)
{var center=new b2Vec2();center.SetZero();var area=0.0;var I=0.0;var pRef=new b2Vec2(0.0,0.0);var inv3=1.0/3.0;for(var i=0;i<count;++i)
{var p1=pRef;var p2=vs[i];var p3=i+1<count?vs[i+1]:vs[0];var e1=b2Math.SubtractVV(p2,p1);var e2=b2Math.SubtractVV(p3,p1);var D=b2Math.b2CrossVV(e1,e2);var triangleArea=0.5*D;area+=triangleArea;var tVec=new b2Vec2();tVec.SetV(p1);tVec.Add(p2);tVec.Add(p3);tVec.Multiply(inv3*triangleArea);center.Add(tVec);var px=p1.x;var py=p1.y;var ex1=e1.x;var ey1=e1.y;var ex2=e2.x;var ey2=e2.y;var intx2=inv3*(0.25*(ex1*ex1+ex2*ex1+ex2*ex2)+(px*ex1+px*ex2))+0.5*px*px;var inty2=inv3*(0.25*(ey1*ey1+ey2*ey1+ey2*ey2)+(py*ey1+py*ey2))+0.5*py*py;I+=D*(intx2+inty2);}
massData.mass=rho*area;center.Multiply(1.0/area);massData.center=center;I=rho*(I-area*b2Math.b2Dot(center,center));massData.I=I;};b2Shape.PolyCentroid=function(vs,count,out)
{var cX=0.0;var cY=0.0;var area=0.0;var pRefX=0.0;var pRefY=0.0;var inv3=1.0/3.0;for(var i=0;i<count;++i)
{var p1X=pRefX;var p1Y=pRefY;var p2X=vs[i].x;var p2Y=vs[i].y;var p3X=i+1<count?vs[i+1].x:vs[0].x;var p3Y=i+1<count?vs[i+1].y:vs[0].y;var e1X=p2X-p1X;var e1Y=p2Y-p1Y;var e2X=p3X-p1X;var e2Y=p3Y-p1Y;var D=(e1X*e2Y-e1Y*e2X);var triangleArea=0.5*D;area+=triangleArea;cX+=triangleArea*inv3*(p1X+p2X+p3X);cY+=triangleArea*inv3*(p1Y+p2Y+p3Y);}
cX*=1.0/area;cY*=1.0/area;out.Set(cX,cY);};
var b2ShapeDef=Class.create();b2ShapeDef.prototype={initialize:function()
{this.type=b2Shape.e_unknownShape;this.userData=null;this.localPosition=new b2Vec2(0.0,0.0);this.localRotation=0.0;this.friction=0.2;this.restitution=0.0;this.density=0.0;this.categoryBits=0x0001;this.maskBits=0xFFFF;this.groupIndex=0;},ComputeMass:function(massData)
{massData.center=new b2Vec2(0.0,0.0)
if(this.density==0.0)
{massData.mass=0.0;massData.center.Set(0.0,0.0);massData.I=0.0;};switch(this.type)
{case b2Shape.e_circleShape:{var circle=this;massData.mass=this.density*b2Settings.b2_pi*circle.radius*circle.radius;massData.center.Set(0.0,0.0);massData.I=0.5*(massData.mass)*circle.radius*circle.radius;}
break;case b2Shape.e_boxShape:{var box=this;massData.mass=4.0*this.density*box.extents.x*box.extents.y;massData.center.Set(0.0,0.0);massData.I=massData.mass/3.0*b2Math.b2Dot(box.extents,box.extents);}
break;case b2Shape.e_polyShape:{var poly=this;b2Shape.PolyMass(massData,poly.vertices,poly.vertexCount,this.density);}
break;default:massData.mass=0.0;massData.center.Set(0.0,0.0);massData.I=0.0;break;}},type:0,userData:null,localPosition:null,localRotation:null,friction:null,restitution:null,density:null,categoryBits:0,maskBits:0,groupIndex:0};
var b2BoxDef=Class.create();Object.extend(b2BoxDef.prototype,b2ShapeDef.prototype);Object.extend(b2BoxDef.prototype,{initialize:function()
{this.type=b2Shape.e_unknownShape;this.userData=null;this.localPosition=new b2Vec2(0.0,0.0);this.localRotation=0.0;this.friction=0.2;this.restitution=0.0;this.density=0.0;this.categoryBits=0x0001;this.maskBits=0xFFFF;this.groupIndex=0;this.type=b2Shape.e_boxShape;this.extents=new b2Vec2(1.0,1.0);},extents:null});
var b2CircleDef=Class.create();Object.extend(b2CircleDef.prototype,b2ShapeDef.prototype);Object.extend(b2CircleDef.prototype,{initialize:function()
{this.type=b2Shape.e_unknownShape;this.userData=null;this.localPosition=new b2Vec2(0.0,0.0);this.localRotation=0.0;this.friction=0.2;this.restitution=0.0;this.density=0.0;this.categoryBits=0x0001;this.maskBits=0xFFFF;this.groupIndex=0;this.type=b2Shape.e_circleShape;this.radius=1.0;},radius:null});var b2CircleShape=Class.create();Object.extend(b2CircleShape.prototype,b2Shape.prototype);Object.extend(b2CircleShape.prototype,{TestPoint:function(p){var d=new b2Vec2();d.SetV(p);d.Subtract(this.m_position);return b2Math.b2Dot(d,d)<=this.m_radius*this.m_radius;},initialize:function(def,body,localCenter){this.m_R=new b2Mat22();this.m_position=new b2Vec2();this.m_userData=def.userData;this.m_friction=def.friction;this.m_restitution=def.restitution;this.m_body=body;this.m_proxyId=b2Pair.b2_nullProxy;this.m_maxRadius=0.0;this.m_categoryBits=def.categoryBits;this.m_maskBits=def.maskBits;this.m_groupIndex=def.groupIndex;this.m_localPosition=new b2Vec2();var circle=def;this.m_localPosition.Set(def.localPosition.x-localCenter.x,def.localPosition.y-localCenter.y);this.m_type=b2Shape.e_circleShape;this.m_radius=circle.radius;this.m_R.SetM(this.m_body.m_R);var rX=this.m_R.col1.x*this.m_localPosition.x+this.m_R.col2.x*this.m_localPosition.y;var rY=this.m_R.col1.y*this.m_localPosition.x+this.m_R.col2.y*this.m_localPosition.y;this.m_position.x=this.m_body.m_position.x+rX;this.m_position.y=this.m_body.m_position.y+rY;this.m_maxRadius=Math.sqrt(rX*rX+rY*rY)+this.m_radius;var aabb=new b2AABB();aabb.minVertex.Set(this.m_position.x-this.m_radius,this.m_position.y-this.m_radius);aabb.maxVertex.Set(this.m_position.x+this.m_radius,this.m_position.y+this.m_radius);var broadPhase=this.m_body.m_world.m_broadPhase;if(broadPhase.InRange(aabb))
{this.m_proxyId=broadPhase.CreateProxy(aabb,this);}
else
{this.m_proxyId=b2Pair.b2_nullProxy;}
if(this.m_proxyId==b2Pair.b2_nullProxy)
{this.m_body.Freeze();}},Synchronize:function(position1,R1,position2,R2){this.m_R.SetM(R2);this.m_position.x=(R2.col1.x*this.m_localPosition.x+R2.col2.x*this.m_localPosition.y)+position2.x;this.m_position.y=(R2.col1.y*this.m_localPosition.x+R2.col2.y*this.m_localPosition.y)+position2.y;if(this.m_proxyId==b2Pair.b2_nullProxy)
{return;}
var p1X=position1.x+(R1.col1.x*this.m_localPosition.x+R1.col2.x*this.m_localPosition.y);var p1Y=position1.y+(R1.col1.y*this.m_localPosition.x+R1.col2.y*this.m_localPosition.y);var lowerX=Math.min(p1X,this.m_position.x);var lowerY=Math.min(p1Y,this.m_position.y);var upperX=Math.max(p1X,this.m_position.x);var upperY=Math.max(p1Y,this.m_position.y);var aabb=new b2AABB();aabb.minVertex.Set(lowerX-this.m_radius,lowerY-this.m_radius);aabb.maxVertex.Set(upperX+this.m_radius,upperY+this.m_radius);var broadPhase=this.m_body.m_world.m_broadPhase;if(broadPhase.InRange(aabb))
{broadPhase.MoveProxy(this.m_proxyId,aabb);}
else
{this.m_body.Freeze();}},QuickSync:function(position,R){this.m_R.SetM(R);this.m_position.x=(R.col1.x*this.m_localPosition.x+R.col2.x*this.m_localPosition.y)+position.x;this.m_position.y=(R.col1.y*this.m_localPosition.x+R.col2.y*this.m_localPosition.y)+position.y;},ResetProxy:function(broadPhase)
{if(this.m_proxyId==b2Pair.b2_nullProxy)
{return;}
var proxy=broadPhase.GetProxy(this.m_proxyId);broadPhase.DestroyProxy(this.m_proxyId);proxy=null;var aabb=new b2AABB();aabb.minVertex.Set(this.m_position.x-this.m_radius,this.m_position.y-this.m_radius);aabb.maxVertex.Set(this.m_position.x+this.m_radius,this.m_position.y+this.m_radius);if(broadPhase.InRange(aabb))
{this.m_proxyId=broadPhase.CreateProxy(aabb,this);}
else
{this.m_proxyId=b2Pair.b2_nullProxy;}
if(this.m_proxyId==b2Pair.b2_nullProxy)
{this.m_body.Freeze();}},Support:function(dX,dY,out)
{var len=Math.sqrt(dX*dX+dY*dY);dX/=len;dY/=len;out.Set(this.m_position.x+this.m_radius*dX,this.m_position.y+this.m_radius*dY);},m_localPosition:new b2Vec2(),m_radius:null});
var b2MassData=Class.create();b2MassData.prototype={mass:0.0,center:new b2Vec2(0,0),I:0.0,initialize:function(){this.center=new b2Vec2(0,0);}}

var b2PolyDef=Class.create();Object.extend(b2PolyDef.prototype,b2ShapeDef.prototype);Object.extend(b2PolyDef.prototype,{initialize:function()
{this.type=b2Shape.e_unknownShape;this.userData=null;this.localPosition=new b2Vec2(0.0,0.0);this.localRotation=0.0;this.friction=0.2;this.restitution=0.0;this.density=0.0;this.categoryBits=0x0001;this.maskBits=0xFFFF;this.groupIndex=0;this.vertices=new Array(b2Settings.b2_maxPolyVertices);this.type=b2Shape.e_polyShape;this.vertexCount=0;for(var i=0;i<b2Settings.b2_maxPolyVertices;i++){this.vertices[i]=new b2Vec2();}},vertices:new Array(b2Settings.b2_maxPolyVertices),vertexCount:0});var b2PolyShape=Class.create();Object.extend(b2PolyShape.prototype,b2Shape.prototype);Object.extend(b2PolyShape.prototype,{TestPoint:function(p){var pLocal=new b2Vec2();pLocal.SetV(p);pLocal.Subtract(this.m_position);pLocal.MulTM(this.m_R);for(var i=0;i<this.m_vertexCount;++i)
{var tVec=new b2Vec2();tVec.SetV(pLocal);tVec.Subtract(this.m_vertices[i]);var dot=b2Math.b2Dot(this.m_normals[i],tVec);if(dot>0.0)
{return false;}}
return true;},initialize:function(def,body,newOrigin){this.m_R=new b2Mat22();this.m_position=new b2Vec2();this.m_userData=def.userData;this.m_friction=def.friction;this.m_restitution=def.restitution;this.m_body=body;this.m_proxyId=b2Pair.b2_nullProxy;this.m_maxRadius=0.0;this.m_categoryBits=def.categoryBits;this.m_maskBits=def.maskBits;this.m_groupIndex=def.groupIndex;this.syncAABB=new b2AABB();this.syncMat=new b2Mat22();this.m_localCentroid=new b2Vec2();this.m_localOBB=new b2OBB();var i=0;var hX;var hY;var tVec;var aabb=new b2AABB();this.m_vertices=new Array(b2Settings.b2_maxPolyVertices);this.m_coreVertices=new Array(b2Settings.b2_maxPolyVertices);this.m_normals=new Array(b2Settings.b2_maxPolyVertices);this.m_type=b2Shape.e_polyShape;var localR=new b2Mat22(def.localRotation);if(def.type==b2Shape.e_boxShape)
{this.m_localCentroid.x=def.localPosition.x-newOrigin.x;this.m_localCentroid.y=def.localPosition.y-newOrigin.y;var box=def;this.m_vertexCount=4;hX=box.extents.x;hY=box.extents.y;var hcX=Math.max(0.0,hX-2.0*b2Settings.b2_linearSlop);var hcY=Math.max(0.0,hY-2.0*b2Settings.b2_linearSlop);tVec=this.m_vertices[0]=new b2Vec2();tVec.x=localR.col1.x*hX+localR.col2.x*hY;tVec.y=localR.col1.y*hX+localR.col2.y*hY;tVec=this.m_vertices[1]=new b2Vec2();tVec.x=localR.col1.x*-hX+localR.col2.x*hY;tVec.y=localR.col1.y*-hX+localR.col2.y*hY;tVec=this.m_vertices[2]=new b2Vec2();tVec.x=localR.col1.x*-hX+localR.col2.x*-hY;tVec.y=localR.col1.y*-hX+localR.col2.y*-hY;tVec=this.m_vertices[3]=new b2Vec2();tVec.x=localR.col1.x*hX+localR.col2.x*-hY;tVec.y=localR.col1.y*hX+localR.col2.y*-hY;tVec=this.m_coreVertices[0]=new b2Vec2();tVec.x=localR.col1.x*hcX+localR.col2.x*hcY;tVec.y=localR.col1.y*hcX+localR.col2.y*hcY;tVec=this.m_coreVertices[1]=new b2Vec2();tVec.x=localR.col1.x*-hcX+localR.col2.x*hcY;tVec.y=localR.col1.y*-hcX+localR.col2.y*hcY;tVec=this.m_coreVertices[2]=new b2Vec2();tVec.x=localR.col1.x*-hcX+localR.col2.x*-hcY;tVec.y=localR.col1.y*-hcX+localR.col2.y*-hcY;tVec=this.m_coreVertices[3]=new b2Vec2();tVec.x=localR.col1.x*hcX+localR.col2.x*-hcY;tVec.y=localR.col1.y*hcX+localR.col2.y*-hcY;}
else
{var poly=def;this.m_vertexCount=poly.vertexCount;b2Shape.PolyCentroid(poly.vertices,poly.vertexCount,b2PolyShape.tempVec);var centroidX=b2PolyShape.tempVec.x;var centroidY=b2PolyShape.tempVec.y;this.m_localCentroid.x=def.localPosition.x+(localR.col1.x*centroidX+localR.col2.x*centroidY)-newOrigin.x;this.m_localCentroid.y=def.localPosition.y+(localR.col1.y*centroidX+localR.col2.y*centroidY)-newOrigin.y;for(i=0;i<this.m_vertexCount;++i)
{this.m_vertices[i]=new b2Vec2();this.m_coreVertices[i]=new b2Vec2();hX=poly.vertices[i].x-centroidX;hY=poly.vertices[i].y-centroidY;this.m_vertices[i].x=localR.col1.x*hX+localR.col2.x*hY;this.m_vertices[i].y=localR.col1.y*hX+localR.col2.y*hY;var uX=this.m_vertices[i].x;var uY=this.m_vertices[i].y;var length=Math.sqrt(uX*uX+uY*uY);if(length>Number.MIN_VALUE)
{uX*=1.0/length;uY*=1.0/length;}
this.m_coreVertices[i].x=this.m_vertices[i].x-2.0*b2Settings.b2_linearSlop*uX;this.m_coreVertices[i].y=this.m_vertices[i].y-2.0*b2Settings.b2_linearSlop*uY;}}
var minVertexX=Number.MAX_VALUE;var minVertexY=Number.MAX_VALUE;var maxVertexX=-Number.MAX_VALUE;var maxVertexY=-Number.MAX_VALUE;this.m_maxRadius=0.0;for(i=0;i<this.m_vertexCount;++i)
{var v=this.m_vertices[i];minVertexX=Math.min(minVertexX,v.x);minVertexY=Math.min(minVertexY,v.y);maxVertexX=Math.max(maxVertexX,v.x);maxVertexY=Math.max(maxVertexY,v.y);this.m_maxRadius=Math.max(this.m_maxRadius,v.Length());}
this.m_localOBB.R.SetIdentity();this.m_localOBB.center.Set((minVertexX+maxVertexX)*0.5,(minVertexY+maxVertexY)*0.5);this.m_localOBB.extents.Set((maxVertexX-minVertexX)*0.5,(maxVertexY-minVertexY)*0.5);var i1=0;var i2=0;for(i=0;i<this.m_vertexCount;++i)
{this.m_normals[i]=new b2Vec2();i1=i;i2=i+1<this.m_vertexCount?i+1:0;this.m_normals[i].x=this.m_vertices[i2].y-this.m_vertices[i1].y;this.m_normals[i].y=-(this.m_vertices[i2].x-this.m_vertices[i1].x);this.m_normals[i].Normalize();}
for(i=0;i<this.m_vertexCount;++i)
{i1=i;i2=i+1<this.m_vertexCount?i+1:0;}
this.m_R.SetM(this.m_body.m_R);this.m_position.x=this.m_body.m_position.x+(this.m_R.col1.x*this.m_localCentroid.x+this.m_R.col2.x*this.m_localCentroid.y);this.m_position.y=this.m_body.m_position.y+(this.m_R.col1.y*this.m_localCentroid.x+this.m_R.col2.y*this.m_localCentroid.y);b2PolyShape.tAbsR.col1.x=this.m_R.col1.x*this.m_localOBB.R.col1.x+this.m_R.col2.x*this.m_localOBB.R.col1.y;b2PolyShape.tAbsR.col1.y=this.m_R.col1.y*this.m_localOBB.R.col1.x+this.m_R.col2.y*this.m_localOBB.R.col1.y;b2PolyShape.tAbsR.col2.x=this.m_R.col1.x*this.m_localOBB.R.col2.x+this.m_R.col2.x*this.m_localOBB.R.col2.y;b2PolyShape.tAbsR.col2.y=this.m_R.col1.y*this.m_localOBB.R.col2.x+this.m_R.col2.y*this.m_localOBB.R.col2.y;b2PolyShape.tAbsR.Abs()
hX=b2PolyShape.tAbsR.col1.x*this.m_localOBB.extents.x+b2PolyShape.tAbsR.col2.x*this.m_localOBB.extents.y;hY=b2PolyShape.tAbsR.col1.y*this.m_localOBB.extents.x+b2PolyShape.tAbsR.col2.y*this.m_localOBB.extents.y;var positionX=this.m_position.x+(this.m_R.col1.x*this.m_localOBB.center.x+this.m_R.col2.x*this.m_localOBB.center.y);var positionY=this.m_position.y+(this.m_R.col1.y*this.m_localOBB.center.x+this.m_R.col2.y*this.m_localOBB.center.y);aabb.minVertex.x=positionX-hX;aabb.minVertex.y=positionY-hY;aabb.maxVertex.x=positionX+hX;aabb.maxVertex.y=positionY+hY;var broadPhase=this.m_body.m_world.m_broadPhase;if(broadPhase.InRange(aabb))
{this.m_proxyId=broadPhase.CreateProxy(aabb,this);}
else
{this.m_proxyId=b2Pair.b2_nullProxy;}
if(this.m_proxyId==b2Pair.b2_nullProxy)
{this.m_body.Freeze();}},syncAABB:new b2AABB(),syncMat:new b2Mat22(),Synchronize:function(position1,R1,position2,R2){this.m_R.SetM(R2);this.m_position.x=this.m_body.m_position.x+(R2.col1.x*this.m_localCentroid.x+R2.col2.x*this.m_localCentroid.y);this.m_position.y=this.m_body.m_position.y+(R2.col1.y*this.m_localCentroid.x+R2.col2.y*this.m_localCentroid.y);if(this.m_proxyId==b2Pair.b2_nullProxy)
{return;}
var hX;var hY;var v1=R1.col1;var v2=R1.col2;var v3=this.m_localOBB.R.col1;var v4=this.m_localOBB.R.col2;this.syncMat.col1.x=v1.x*v3.x+v2.x*v3.y;this.syncMat.col1.y=v1.y*v3.x+v2.y*v3.y;this.syncMat.col2.x=v1.x*v4.x+v2.x*v4.y;this.syncMat.col2.y=v1.y*v4.x+v2.y*v4.y;this.syncMat.Abs();hX=this.m_localCentroid.x+this.m_localOBB.center.x;hY=this.m_localCentroid.y+this.m_localOBB.center.y;var centerX=position1.x+(R1.col1.x*hX+R1.col2.x*hY);var centerY=position1.y+(R1.col1.y*hX+R1.col2.y*hY);hX=this.syncMat.col1.x*this.m_localOBB.extents.x+this.syncMat.col2.x*this.m_localOBB.extents.y;hY=this.syncMat.col1.y*this.m_localOBB.extents.x+this.syncMat.col2.y*this.m_localOBB.extents.y;this.syncAABB.minVertex.x=centerX-hX;this.syncAABB.minVertex.y=centerY-hY;this.syncAABB.maxVertex.x=centerX+hX;this.syncAABB.maxVertex.y=centerY+hY;v1=R2.col1;v2=R2.col2;v3=this.m_localOBB.R.col1;v4=this.m_localOBB.R.col2;this.syncMat.col1.x=v1.x*v3.x+v2.x*v3.y;this.syncMat.col1.y=v1.y*v3.x+v2.y*v3.y;this.syncMat.col2.x=v1.x*v4.x+v2.x*v4.y;this.syncMat.col2.y=v1.y*v4.x+v2.y*v4.y;this.syncMat.Abs();hX=this.m_localCentroid.x+this.m_localOBB.center.x;hY=this.m_localCentroid.y+this.m_localOBB.center.y;centerX=position2.x+(R2.col1.x*hX+R2.col2.x*hY);centerY=position2.y+(R2.col1.y*hX+R2.col2.y*hY);hX=this.syncMat.col1.x*this.m_localOBB.extents.x+this.syncMat.col2.x*this.m_localOBB.extents.y;hY=this.syncMat.col1.y*this.m_localOBB.extents.x+this.syncMat.col2.y*this.m_localOBB.extents.y;this.syncAABB.minVertex.x=Math.min(this.syncAABB.minVertex.x,centerX-hX);this.syncAABB.minVertex.y=Math.min(this.syncAABB.minVertex.y,centerY-hY);this.syncAABB.maxVertex.x=Math.max(this.syncAABB.maxVertex.x,centerX+hX);this.syncAABB.maxVertex.y=Math.max(this.syncAABB.maxVertex.y,centerY+hY);var broadPhase=this.m_body.m_world.m_broadPhase;if(broadPhase.InRange(this.syncAABB))
{broadPhase.MoveProxy(this.m_proxyId,this.syncAABB);}
else
{this.m_body.Freeze();}},QuickSync:function(position,R){this.m_R.SetM(R);this.m_position.x=position.x+(R.col1.x*this.m_localCentroid.x+R.col2.x*this.m_localCentroid.y);this.m_position.y=position.y+(R.col1.y*this.m_localCentroid.x+R.col2.y*this.m_localCentroid.y);},ResetProxy:function(broadPhase){if(this.m_proxyId==b2Pair.b2_nullProxy)
{return;}
var proxy=broadPhase.GetProxy(this.m_proxyId);broadPhase.DestroyProxy(this.m_proxyId);proxy=null;var R=b2Math.b2MulMM(this.m_R,this.m_localOBB.R);var absR=b2Math.b2AbsM(R);var h=b2Math.b2MulMV(absR,this.m_localOBB.extents);var position=b2Math.b2MulMV(this.m_R,this.m_localOBB.center);position.Add(this.m_position);var aabb=new b2AABB();aabb.minVertex.SetV(position);aabb.minVertex.Subtract(h);aabb.maxVertex.SetV(position);aabb.maxVertex.Add(h);if(broadPhase.InRange(aabb))
{this.m_proxyId=broadPhase.CreateProxy(aabb,this);}
else
{this.m_proxyId=b2Pair.b2_nullProxy;}
if(this.m_proxyId==b2Pair.b2_nullProxy)
{this.m_body.Freeze();}},Support:function(dX,dY,out)
{var dLocalX=(dX*this.m_R.col1.x+dY*this.m_R.col1.y);var dLocalY=(dX*this.m_R.col2.x+dY*this.m_R.col2.y);var bestIndex=0;var bestValue=(this.m_coreVertices[0].x*dLocalX+this.m_coreVertices[0].y*dLocalY);for(var i=1;i<this.m_vertexCount;++i)
{var value=(this.m_coreVertices[i].x*dLocalX+this.m_coreVertices[i].y*dLocalY);if(value>bestValue)
{bestIndex=i;bestValue=value;}}
out.Set(this.m_position.x+(this.m_R.col1.x*this.m_coreVertices[bestIndex].x+this.m_R.col2.x*this.m_coreVertices[bestIndex].y),this.m_position.y+(this.m_R.col1.y*this.m_coreVertices[bestIndex].x+this.m_R.col2.y*this.m_coreVertices[bestIndex].y));},m_localCentroid:new b2Vec2(),m_localOBB:new b2OBB(),m_vertices:null,m_coreVertices:null,m_vertexCount:0,m_normals:null});b2PolyShape.tempVec=new b2Vec2();b2PolyShape.tAbsR=new b2Mat22();
var b2Body=Class.create();b2Body.prototype={SetOriginPosition:function(position,rotation){if(this.IsFrozen())
{return;}
this.m_rotation=rotation;this.m_R.Set(this.m_rotation);this.m_position=b2Math.AddVV(position,b2Math.b2MulMV(this.m_R,this.m_center));this.m_position0.SetV(this.m_position);this.m_rotation0=this.m_rotation;for(var s=this.m_shapeList;s!=null;s=s.m_next)
{s.Synchronize(this.m_position,this.m_R,this.m_position,this.m_R);}
this.m_world.m_broadPhase.Commit();},GetOriginPosition:function(){return b2Math.SubtractVV(this.m_position,b2Math.b2MulMV(this.m_R,this.m_center));},SetCenterPosition:function(position,rotation){if(this.IsFrozen())
{return;}
this.m_rotation=rotation;this.m_R.Set(this.m_rotation);this.m_position.SetV(position);this.m_position0.SetV(this.m_position);this.m_rotation0=this.m_rotation;for(var s=this.m_shapeList;s!=null;s=s.m_next)
{s.Synchronize(this.m_position,this.m_R,this.m_position,this.m_R);}
this.m_world.m_broadPhase.Commit();},GetCenterPosition:function(){return this.m_position;},GetRotation:function(){return this.m_rotation;},GetRotationMatrix:function(){return this.m_R;},SetLinearVelocity:function(v){this.m_linearVelocity.SetV(v);},GetLinearVelocity:function(){return this.m_linearVelocity;},SetAngularVelocity:function(w){this.m_angularVelocity=w;},GetAngularVelocity:function(){return this.m_angularVelocity;},ApplyForce:function(force,point)
{if(this.IsSleeping()==false)
{this.m_force.Add(force);this.m_torque+=b2Math.b2CrossVV(b2Math.SubtractVV(point,this.m_position),force);}},ApplyTorque:function(torque)
{if(this.IsSleeping()==false)
{this.m_torque+=torque;}},ApplyImpulse:function(impulse,point)
{if(this.IsSleeping()==false)
{this.m_linearVelocity.Add(b2Math.MulFV(this.m_invMass,impulse));this.m_angularVelocity+=(this.m_invI*b2Math.b2CrossVV(b2Math.SubtractVV(point,this.m_position),impulse));}},GetMass:function(){return this.m_mass;},GetInertia:function(){return this.m_I;},GetWorldPoint:function(localPoint){return b2Math.AddVV(this.m_position,b2Math.b2MulMV(this.m_R,localPoint));},GetWorldVector:function(localVector){return b2Math.b2MulMV(this.m_R,localVector);},GetLocalPoint:function(worldPoint){return b2Math.b2MulTMV(this.m_R,b2Math.SubtractVV(worldPoint,this.m_position));},GetLocalVector:function(worldVector){return b2Math.b2MulTMV(this.m_R,worldVector);},IsStatic:function(){return(this.m_flags&b2Body.e_staticFlag)==b2Body.e_staticFlag;},IsFrozen:function()
{return(this.m_flags&b2Body.e_frozenFlag)==b2Body.e_frozenFlag;},IsSleeping:function(){return(this.m_flags&b2Body.e_sleepFlag)==b2Body.e_sleepFlag;},AllowSleeping:function(flag)
{if(flag)
{this.m_flags|=b2Body.e_allowSleepFlag;}
else
{this.m_flags&=~b2Body.e_allowSleepFlag;this.WakeUp();}},WakeUp:function(){this.m_flags&=~b2Body.e_sleepFlag;this.m_sleepTime=0.0;},GetShapeList:function(){return this.m_shapeList;},GetContactList:function()
{return this.m_contactList;},GetJointList:function()
{return this.m_jointList;},GetNext:function(){return this.m_next;},GetUserData:function(){return this.m_userData;},initialize:function(bd,world){this.sMat0=new b2Mat22();this.m_position=new b2Vec2();this.m_R=new b2Mat22(0);this.m_position0=new b2Vec2();var i=0;var sd;var massData;this.m_flags=0;this.m_position.SetV(bd.position);this.m_rotation=bd.rotation;this.m_R.Set(this.m_rotation);this.m_position0.SetV(this.m_position);this.m_rotation0=this.m_rotation;this.m_world=world;this.m_linearDamping=b2Math.b2Clamp(1.0-bd.linearDamping,0.0,1.0);this.m_angularDamping=b2Math.b2Clamp(1.0-bd.angularDamping,0.0,1.0);this.m_force=new b2Vec2(0.0,0.0);this.m_torque=0.0;this.m_mass=0.0;var massDatas=new Array(b2Settings.b2_maxShapesPerBody);for(i=0;i<b2Settings.b2_maxShapesPerBody;i++){massDatas[i]=new b2MassData();}
this.m_shapeCount=0;this.m_center=new b2Vec2(0.0,0.0);for(i=0;i<b2Settings.b2_maxShapesPerBody;++i)
{sd=bd.shapes[i];if(sd==null)break;massData=massDatas[i];sd.ComputeMass(massData);this.m_mass+=massData.mass;this.m_center.x+=massData.mass*(sd.localPosition.x+massData.center.x);this.m_center.y+=massData.mass*(sd.localPosition.y+massData.center.y);++this.m_shapeCount;}
if(this.m_mass>0.0)
{this.m_center.Multiply(1.0/this.m_mass);this.m_position.Add(b2Math.b2MulMV(this.m_R,this.m_center));}
else
{this.m_flags|=b2Body.e_staticFlag;}
this.m_I=0.0;for(i=0;i<this.m_shapeCount;++i)
{sd=bd.shapes[i];massData=massDatas[i];this.m_I+=massData.I;var r=b2Math.SubtractVV(b2Math.AddVV(sd.localPosition,massData.center),this.m_center);this.m_I+=massData.mass*b2Math.b2Dot(r,r);}
if(this.m_mass>0.0)
{this.m_invMass=1.0/this.m_mass;}
else
{this.m_invMass=0.0;}
if(this.m_I>0.0&&bd.preventRotation==false)
{this.m_invI=1.0/this.m_I;}
else
{this.m_I=0.0;this.m_invI=0.0;}
this.m_linearVelocity=b2Math.AddVV(bd.linearVelocity,b2Math.b2CrossFV(bd.angularVelocity,this.m_center));this.m_angularVelocity=bd.angularVelocity;this.m_jointList=null;this.m_contactList=null;this.m_prev=null;this.m_next=null;this.m_shapeList=null;for(i=0;i<this.m_shapeCount;++i)
{sd=bd.shapes[i];var shape=b2Shape.Create(sd,this,this.m_center);shape.m_next=this.m_shapeList;this.m_shapeList=shape;}
this.m_sleepTime=0.0;if(bd.allowSleep)
{this.m_flags|=b2Body.e_allowSleepFlag;}
if(bd.isSleeping)
{this.m_flags|=b2Body.e_sleepFlag;}
if((this.m_flags&b2Body.e_sleepFlag)||this.m_invMass==0.0)
{this.m_linearVelocity.Set(0.0,0.0);this.m_angularVelocity=0.0;}
this.m_userData=bd.userData;},Destroy:function(){var s=this.m_shapeList;while(s)
{var s0=s;s=s.m_next;b2Shape.Destroy(s0);}},sMat0:new b2Mat22(),SynchronizeShapes:function(){this.sMat0.Set(this.m_rotation0);for(var s=this.m_shapeList;s!=null;s=s.m_next)
{s.Synchronize(this.m_position0,this.sMat0,this.m_position,this.m_R);}},QuickSyncShapes:function(){for(var s=this.m_shapeList;s!=null;s=s.m_next)
{s.QuickSync(this.m_position,this.m_R);}},IsConnected:function(other){for(var jn=this.m_jointList;jn!=null;jn=jn.next)
{if(jn.other==other)
return jn.joint.m_collideConnected==false;}
return false;},Freeze:function(){this.m_flags|=b2Body.e_frozenFlag;this.m_linearVelocity.SetZero();this.m_angularVelocity=0.0;for(var s=this.m_shapeList;s!=null;s=s.m_next)
{s.DestroyProxy();}},m_flags:0,m_position:new b2Vec2(),m_rotation:null,m_R:new b2Mat22(0),m_position0:new b2Vec2(),m_rotation0:null,m_linearVelocity:null,m_angularVelocity:null,m_force:null,m_torque:null,m_center:null,m_world:null,m_prev:null,m_next:null,m_shapeList:null,m_shapeCount:0,m_jointList:null,m_contactList:null,m_mass:null,m_invMass:null,m_I:null,m_invI:null,m_linearDamping:null,m_angularDamping:null,m_sleepTime:null,m_userData:null};b2Body.e_staticFlag=0x0001;b2Body.e_frozenFlag=0x0002;b2Body.e_islandFlag=0x0004;b2Body.e_sleepFlag=0x0008;b2Body.e_allowSleepFlag=0x0010;b2Body.e_destroyFlag=0x0020;
var b2BodyDef=Class.create();b2BodyDef.prototype={initialize:function()
{this.shapes=new Array();this.userData=null;for(var i=0;i<b2Settings.b2_maxShapesPerBody;i++){this.shapes[i]=null;}
this.position=new b2Vec2(0.0,0.0);this.rotation=0.0;this.linearVelocity=new b2Vec2(0.0,0.0);this.angularVelocity=0.0;this.linearDamping=0.0;this.angularDamping=0.0;this.allowSleep=true;this.isSleeping=false;this.preventRotation=false;},userData:null,shapes:new Array(),position:null,rotation:null,linearVelocity:null,angularVelocity:null,linearDamping:null,angularDamping:null,allowSleep:null,isSleeping:null,preventRotation:null,AddShape:function(shape)
{for(var i=0;i<b2Settings.b2_maxShapesPerBody;++i)
{if(this.shapes[i]==null)
{this.shapes[i]=shape;break;}}}};
var b2CollisionFilter=Class.create();b2CollisionFilter.prototype={ShouldCollide:function(shape1,shape2){if(shape1.m_groupIndex==shape2.m_groupIndex&&shape1.m_groupIndex!=0)
{return shape1.m_groupIndex>0;}
var collide=(shape1.m_maskBits&shape2.m_categoryBits)!=0&&(shape1.m_categoryBits&shape2.m_maskBits)!=0;return collide;},initialize:function(){}};b2CollisionFilter.b2_defaultFilter=new b2CollisionFilter;
var b2Island=Class.create();b2Island.prototype={initialize:function(bodyCapacity,contactCapacity,jointCapacity,allocator)
{var i=0;this.m_bodyCapacity=bodyCapacity;this.m_contactCapacity=contactCapacity;this.m_jointCapacity=jointCapacity;this.m_bodyCount=0;this.m_contactCount=0;this.m_jointCount=0;this.m_bodies=new Array(bodyCapacity);for(i=0;i<bodyCapacity;i++)
this.m_bodies[i]=null;this.m_contacts=new Array(contactCapacity);for(i=0;i<contactCapacity;i++)
this.m_contacts[i]=null;this.m_joints=new Array(jointCapacity);for(i=0;i<jointCapacity;i++)
this.m_joints[i]=null;this.m_allocator=allocator;},Clear:function()
{this.m_bodyCount=0;this.m_contactCount=0;this.m_jointCount=0;},Solve:function(step,gravity)
{var i=0;var b;for(i=0;i<this.m_bodyCount;++i)
{b=this.m_bodies[i];if(b.m_invMass==0.0)
continue;b.m_linearVelocity.Add(b2Math.MulFV(step.dt,b2Math.AddVV(gravity,b2Math.MulFV(b.m_invMass,b.m_force))));b.m_angularVelocity+=step.dt*b.m_invI*b.m_torque;b.m_linearVelocity.Multiply(b.m_linearDamping);b.m_angularVelocity*=b.m_angularDamping;b.m_position0.SetV(b.m_position);b.m_rotation0=b.m_rotation;}
var contactSolver=new b2ContactSolver(this.m_contacts,this.m_contactCount,this.m_allocator);contactSolver.PreSolve();for(i=0;i<this.m_jointCount;++i)
{this.m_joints[i].PrepareVelocitySolver();}
for(i=0;i<step.iterations;++i)
{contactSolver.SolveVelocityConstraints();for(var j=0;j<this.m_jointCount;++j)
{this.m_joints[j].SolveVelocityConstraints(step);}}
for(i=0;i<this.m_bodyCount;++i)
{b=this.m_bodies[i];if(b.m_invMass==0.0)
continue;b.m_position.x+=step.dt*b.m_linearVelocity.x;b.m_position.y+=step.dt*b.m_linearVelocity.y;b.m_rotation+=step.dt*b.m_angularVelocity;b.m_R.Set(b.m_rotation);}
for(i=0;i<this.m_jointCount;++i)
{this.m_joints[i].PreparePositionSolver();}
if(b2World.s_enablePositionCorrection)
{for(b2Island.m_positionIterationCount=0;b2Island.m_positionIterationCount<step.iterations;++b2Island.m_positionIterationCount)
{var contactsOkay=contactSolver.SolvePositionConstraints(b2Settings.b2_contactBaumgarte);var jointsOkay=true;for(i=0;i<this.m_jointCount;++i)
{var jointOkay=this.m_joints[i].SolvePositionConstraints();jointsOkay=jointsOkay&&jointOkay;}
if(contactsOkay&&jointsOkay)
{break;}}}
contactSolver.PostSolve();for(i=0;i<this.m_bodyCount;++i)
{b=this.m_bodies[i];if(b.m_invMass==0.0)
continue;b.m_R.Set(b.m_rotation);b.SynchronizeShapes();b.m_force.Set(0.0,0.0);b.m_torque=0.0;}},UpdateSleep:function(dt)
{var i=0;var b;var minSleepTime=Number.MAX_VALUE;var linTolSqr=b2Settings.b2_linearSleepTolerance*b2Settings.b2_linearSleepTolerance;var angTolSqr=b2Settings.b2_angularSleepTolerance*b2Settings.b2_angularSleepTolerance;for(i=0;i<this.m_bodyCount;++i)
{b=this.m_bodies[i];if(b.m_invMass==0.0)
{continue;}
if((b.m_flags&b2Body.e_allowSleepFlag)==0)
{b.m_sleepTime=0.0;minSleepTime=0.0;}
if((b.m_flags&b2Body.e_allowSleepFlag)==0||b.m_angularVelocity*b.m_angularVelocity>angTolSqr||b2Math.b2Dot(b.m_linearVelocity,b.m_linearVelocity)>linTolSqr)
{b.m_sleepTime=0.0;minSleepTime=0.0;}
else
{b.m_sleepTime+=dt;minSleepTime=b2Math.b2Min(minSleepTime,b.m_sleepTime);}}
if(minSleepTime>=b2Settings.b2_timeToSleep)
{for(i=0;i<this.m_bodyCount;++i)
{b=this.m_bodies[i];b.m_flags|=b2Body.e_sleepFlag;}}},AddBody:function(body)
{this.m_bodies[this.m_bodyCount++]=body;},AddContact:function(contact)
{this.m_contacts[this.m_contactCount++]=contact;},AddJoint:function(joint)
{this.m_joints[this.m_jointCount++]=joint;},m_allocator:null,m_bodies:null,m_contacts:null,m_joints:null,m_bodyCount:0,m_jointCount:0,m_contactCount:0,m_bodyCapacity:0,m_contactCapacity:0,m_jointCapacity:0,m_positionError:null};b2Island.m_positionIterationCount=0;
var b2TimeStep=Class.create();b2TimeStep.prototype={dt:null,inv_dt:null,iterations:0,initialize:function(){}};
var b2ContactNode=Class.create();b2ContactNode.prototype={other:null,contact:null,prev:null,next:null,initialize:function(){}};
var b2Contact=Class.create();b2Contact.prototype={GetManifolds:function(){return null},GetManifoldCount:function()
{return this.m_manifoldCount;},GetNext:function(){return this.m_next;},GetShape1:function(){return this.m_shape1;},GetShape2:function(){return this.m_shape2;},initialize:function(s1,s2)
{this.m_node1=new b2ContactNode();this.m_node2=new b2ContactNode();this.m_flags=0;if(!s1||!s2){this.m_shape1=null;this.m_shape2=null;return;}
this.m_shape1=s1;this.m_shape2=s2;this.m_manifoldCount=0;this.m_friction=Math.sqrt(this.m_shape1.m_friction*this.m_shape2.m_friction);this.m_restitution=b2Math.b2Max(this.m_shape1.m_restitution,this.m_shape2.m_restitution);this.m_prev=null;this.m_next=null;this.m_node1.contact=null;this.m_node1.prev=null;this.m_node1.next=null;this.m_node1.other=null;this.m_node2.contact=null;this.m_node2.prev=null;this.m_node2.next=null;this.m_node2.other=null;},Evaluate:function(){},m_flags:0,m_prev:null,m_next:null,m_node1:new b2ContactNode(),m_node2:new b2ContactNode(),m_shape1:null,m_shape2:null,m_manifoldCount:0,m_friction:null,m_restitution:null};b2Contact.e_islandFlag=0x0001;b2Contact.e_destroyFlag=0x0002;b2Contact.AddType=function(createFcn,destroyFcn,type1,type2)
{b2Contact.s_registers[type1][type2].createFcn=createFcn;b2Contact.s_registers[type1][type2].destroyFcn=destroyFcn;b2Contact.s_registers[type1][type2].primary=true;if(type1!=type2)
{b2Contact.s_registers[type2][type1].createFcn=createFcn;b2Contact.s_registers[type2][type1].destroyFcn=destroyFcn;b2Contact.s_registers[type2][type1].primary=false;}};b2Contact.InitializeRegisters=function(){b2Contact.s_registers=new Array(b2Shape.e_shapeTypeCount);for(var i=0;i<b2Shape.e_shapeTypeCount;i++){b2Contact.s_registers[i]=new Array(b2Shape.e_shapeTypeCount);for(var j=0;j<b2Shape.e_shapeTypeCount;j++){b2Contact.s_registers[i][j]=new b2ContactRegister();}}
b2Contact.AddType(b2CircleContact.Create,b2CircleContact.Destroy,b2Shape.e_circleShape,b2Shape.e_circleShape);b2Contact.AddType(b2PolyAndCircleContact.Create,b2PolyAndCircleContact.Destroy,b2Shape.e_polyShape,b2Shape.e_circleShape);b2Contact.AddType(b2PolyContact.Create,b2PolyContact.Destroy,b2Shape.e_polyShape,b2Shape.e_polyShape);};b2Contact.Create=function(shape1,shape2,allocator){if(b2Contact.s_initialized==false)
{b2Contact.InitializeRegisters();b2Contact.s_initialized=true;}
var type1=shape1.m_type;var type2=shape2.m_type;var createFcn=b2Contact.s_registers[type1][type2].createFcn;if(createFcn)
{if(b2Contact.s_registers[type1][type2].primary)
{return createFcn(shape1,shape2,allocator);}
else
{var c=createFcn(shape2,shape1,allocator);for(var i=0;i<c.GetManifoldCount();++i)
{var m=c.GetManifolds()[i];m.normal=m.normal.Negative();}
return c;}}
else
{return null;}};b2Contact.Destroy=function(contact,allocator){if(contact.GetManifoldCount()>0)
{contact.m_shape1.m_body.WakeUp();contact.m_shape2.m_body.WakeUp();}
var type1=contact.m_shape1.m_type;var type2=contact.m_shape2.m_type;var destroyFcn=b2Contact.s_registers[type1][type2].destroyFcn;destroyFcn(contact,allocator);};b2Contact.s_registers=null;b2Contact.s_initialized=false;
var b2ContactConstraint=Class.create();b2ContactConstraint.prototype={initialize:function(){this.normal=new b2Vec2();this.points=new Array(b2Settings.b2_maxManifoldPoints);for(var i=0;i<b2Settings.b2_maxManifoldPoints;i++){this.points[i]=new b2ContactConstraintPoint();}},points:null,normal:new b2Vec2(),manifold:null,body1:null,body2:null,friction:null,restitution:null,pointCount:0};
var b2ContactConstraintPoint=Class.create();b2ContactConstraintPoint.prototype={localAnchor1:new b2Vec2(),localAnchor2:new b2Vec2(),normalImpulse:null,tangentImpulse:null,positionImpulse:null,normalMass:null,tangentMass:null,separation:null,velocityBias:null,initialize:function(){this.localAnchor1=new b2Vec2();this.localAnchor2=new b2Vec2();}};
var b2ContactRegister=Class.create();b2ContactRegister.prototype={createFcn:null,destroyFcn:null,primary:null,initialize:function(){}};
var b2ContactSolver=Class.create();b2ContactSolver.prototype={initialize:function(contacts,contactCount,allocator){this.m_constraints=new Array();this.m_allocator=allocator;var i=0;var tVec;var tMat;this.m_constraintCount=0;for(i=0;i<contactCount;++i)
{this.m_constraintCount+=contacts[i].GetManifoldCount();}
for(i=0;i<this.m_constraintCount;i++){this.m_constraints[i]=new b2ContactConstraint();}
var count=0;for(i=0;i<contactCount;++i)
{var contact=contacts[i];var b1=contact.m_shape1.m_body;var b2=contact.m_shape2.m_body;var manifoldCount=contact.GetManifoldCount();var manifolds=contact.GetManifolds();var friction=contact.m_friction;var restitution=contact.m_restitution;var v1X=b1.m_linearVelocity.x;var v1Y=b1.m_linearVelocity.y;var v2X=b2.m_linearVelocity.x;var v2Y=b2.m_linearVelocity.y;var w1=b1.m_angularVelocity;var w2=b2.m_angularVelocity;for(var j=0;j<manifoldCount;++j)
{var manifold=manifolds[j];var normalX=manifold.normal.x;var normalY=manifold.normal.y;var c=this.m_constraints[count];c.body1=b1;c.body2=b2;c.manifold=manifold;c.normal.x=normalX;c.normal.y=normalY;c.pointCount=manifold.pointCount;c.friction=friction;c.restitution=restitution;for(var k=0;k<c.pointCount;++k)
{var cp=manifold.points[k];var ccp=c.points[k];ccp.normalImpulse=cp.normalImpulse;ccp.tangentImpulse=cp.tangentImpulse;ccp.separation=cp.separation;var r1X=cp.position.x-b1.m_position.x;var r1Y=cp.position.y-b1.m_position.y;var r2X=cp.position.x-b2.m_position.x;var r2Y=cp.position.y-b2.m_position.y;tVec=ccp.localAnchor1;tMat=b1.m_R;tVec.x=r1X*tMat.col1.x+r1Y*tMat.col1.y;tVec.y=r1X*tMat.col2.x+r1Y*tMat.col2.y;tVec=ccp.localAnchor2;tMat=b2.m_R;tVec.x=r2X*tMat.col1.x+r2Y*tMat.col1.y;tVec.y=r2X*tMat.col2.x+r2Y*tMat.col2.y;var r1Sqr=r1X*r1X+r1Y*r1Y;var r2Sqr=r2X*r2X+r2Y*r2Y;var rn1=r1X*normalX+r1Y*normalY;var rn2=r2X*normalX+r2Y*normalY;var kNormal=b1.m_invMass+b2.m_invMass;kNormal+=b1.m_invI*(r1Sqr-rn1*rn1)+b2.m_invI*(r2Sqr-rn2*rn2);ccp.normalMass=1.0/kNormal;var tangentX=normalY
var tangentY=-normalX;var rt1=r1X*tangentX+r1Y*tangentY;var rt2=r2X*tangentX+r2Y*tangentY;var kTangent=b1.m_invMass+b2.m_invMass;kTangent+=b1.m_invI*(r1Sqr-rt1*rt1)+b2.m_invI*(r2Sqr-rt2*rt2);ccp.tangentMass=1.0/kTangent;ccp.velocityBias=0.0;if(ccp.separation>0.0)
{ccp.velocityBias=-60.0*ccp.separation;}
var tX=v2X+(-w2*r2Y)-v1X-(-w1*r1Y);var tY=v2Y+(w2*r2X)-v1Y-(w1*r1X);var vRel=c.normal.x*tX+c.normal.y*tY;if(vRel<-b2Settings.b2_velocityThreshold)
{ccp.velocityBias+=-c.restitution*vRel;}}
++count;}}},PreSolve:function(){var tVec;var tVec2;var tMat;for(var i=0;i<this.m_constraintCount;++i)
{var c=this.m_constraints[i];var b1=c.body1;var b2=c.body2;var invMass1=b1.m_invMass;var invI1=b1.m_invI;var invMass2=b2.m_invMass;var invI2=b2.m_invI;var normalX=c.normal.x;var normalY=c.normal.y;var tangentX=normalY;var tangentY=-normalX;var j=0;var tCount=0;if(b2World.s_enableWarmStarting)
{tCount=c.pointCount;for(j=0;j<tCount;++j)
{var ccp=c.points[j];var PX=ccp.normalImpulse*normalX+ccp.tangentImpulse*tangentX;var PY=ccp.normalImpulse*normalY+ccp.tangentImpulse*tangentY;tMat=b1.m_R;tVec=ccp.localAnchor1;var r1X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y;var r1Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y;tMat=b2.m_R;tVec=ccp.localAnchor2;var r2X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y;var r2Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y;b1.m_angularVelocity-=invI1*(r1X*PY-r1Y*PX);b1.m_linearVelocity.x-=invMass1*PX;b1.m_linearVelocity.y-=invMass1*PY;b2.m_angularVelocity+=invI2*(r2X*PY-r2Y*PX);b2.m_linearVelocity.x+=invMass2*PX;b2.m_linearVelocity.y+=invMass2*PY;ccp.positionImpulse=0.0;}}
else{tCount=c.pointCount;for(j=0;j<tCount;++j)
{var ccp2=c.points[j];ccp2.normalImpulse=0.0;ccp2.tangentImpulse=0.0;ccp2.positionImpulse=0.0;}}}},SolveVelocityConstraints:function(){var j=0;var ccp;var r1X;var r1Y;var r2X;var r2Y;var dvX;var dvY;var lambda;var newImpulse;var PX;var PY;var tMat;var tVec;for(var i=0;i<this.m_constraintCount;++i)
{var c=this.m_constraints[i];var b1=c.body1;var b2=c.body2;var b1_angularVelocity=b1.m_angularVelocity;var b1_linearVelocity=b1.m_linearVelocity;var b2_angularVelocity=b2.m_angularVelocity;var b2_linearVelocity=b2.m_linearVelocity;var invMass1=b1.m_invMass;var invI1=b1.m_invI;var invMass2=b2.m_invMass;var invI2=b2.m_invI;var normalX=c.normal.x;var normalY=c.normal.y;var tangentX=normalY;var tangentY=-normalX;var tCount=c.pointCount;for(j=0;j<tCount;++j)
{ccp=c.points[j];tMat=b1.m_R;tVec=ccp.localAnchor1;r1X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y
r1Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y
tMat=b2.m_R;tVec=ccp.localAnchor2;r2X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y
r2Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y
dvX=b2_linearVelocity.x+(-b2_angularVelocity*r2Y)-b1_linearVelocity.x-(-b1_angularVelocity*r1Y);dvY=b2_linearVelocity.y+(b2_angularVelocity*r2X)-b1_linearVelocity.y-(b1_angularVelocity*r1X);var vn=dvX*normalX+dvY*normalY;lambda=-ccp.normalMass*(vn-ccp.velocityBias);newImpulse=b2Math.b2Max(ccp.normalImpulse+lambda,0.0);lambda=newImpulse-ccp.normalImpulse;PX=lambda*normalX;PY=lambda*normalY;b1_linearVelocity.x-=invMass1*PX;b1_linearVelocity.y-=invMass1*PY;b1_angularVelocity-=invI1*(r1X*PY-r1Y*PX);b2_linearVelocity.x+=invMass2*PX;b2_linearVelocity.y+=invMass2*PY;b2_angularVelocity+=invI2*(r2X*PY-r2Y*PX);ccp.normalImpulse=newImpulse;dvX=b2_linearVelocity.x+(-b2_angularVelocity*r2Y)-b1_linearVelocity.x-(-b1_angularVelocity*r1Y);dvY=b2_linearVelocity.y+(b2_angularVelocity*r2X)-b1_linearVelocity.y-(b1_angularVelocity*r1X);var vt=dvX*tangentX+dvY*tangentY;lambda=ccp.tangentMass*(-vt);var maxFriction=c.friction*ccp.normalImpulse;newImpulse=b2Math.b2Clamp(ccp.tangentImpulse+lambda,-maxFriction,maxFriction);lambda=newImpulse-ccp.tangentImpulse;PX=lambda*tangentX;PY=lambda*tangentY;b1_linearVelocity.x-=invMass1*PX;b1_linearVelocity.y-=invMass1*PY;b1_angularVelocity-=invI1*(r1X*PY-r1Y*PX);b2_linearVelocity.x+=invMass2*PX;b2_linearVelocity.y+=invMass2*PY;b2_angularVelocity+=invI2*(r2X*PY-r2Y*PX);ccp.tangentImpulse=newImpulse;}
b1.m_angularVelocity=b1_angularVelocity;b2.m_angularVelocity=b2_angularVelocity;}},SolvePositionConstraints:function(beta){var minSeparation=0.0;var tMat;var tVec;for(var i=0;i<this.m_constraintCount;++i)
{var c=this.m_constraints[i];var b1=c.body1;var b2=c.body2;var b1_position=b1.m_position;var b1_rotation=b1.m_rotation;var b2_position=b2.m_position;var b2_rotation=b2.m_rotation;var invMass1=b1.m_invMass;var invI1=b1.m_invI;var invMass2=b2.m_invMass;var invI2=b2.m_invI;var normalX=c.normal.x;var normalY=c.normal.y;var tangentX=normalY;var tangentY=-normalX;var tCount=c.pointCount;for(var j=0;j<tCount;++j)
{var ccp=c.points[j];tMat=b1.m_R;tVec=ccp.localAnchor1;var r1X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y
var r1Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y
tMat=b2.m_R;tVec=ccp.localAnchor2;var r2X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y
var r2Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y
var p1X=b1_position.x+r1X;var p1Y=b1_position.y+r1Y;var p2X=b2_position.x+r2X;var p2Y=b2_position.y+r2Y;var dpX=p2X-p1X;var dpY=p2Y-p1Y;var separation=(dpX*normalX+dpY*normalY)+ccp.separation;minSeparation=b2Math.b2Min(minSeparation,separation);var C=beta*b2Math.b2Clamp(separation+b2Settings.b2_linearSlop,-b2Settings.b2_maxLinearCorrection,0.0);var dImpulse=-ccp.normalMass*C;var impulse0=ccp.positionImpulse;ccp.positionImpulse=b2Math.b2Max(impulse0+dImpulse,0.0);dImpulse=ccp.positionImpulse-impulse0;var impulseX=dImpulse*normalX;var impulseY=dImpulse*normalY;b1_position.x-=invMass1*impulseX;b1_position.y-=invMass1*impulseY;b1_rotation-=invI1*(r1X*impulseY-r1Y*impulseX);b1.m_R.Set(b1_rotation);b2_position.x+=invMass2*impulseX;b2_position.y+=invMass2*impulseY;b2_rotation+=invI2*(r2X*impulseY-r2Y*impulseX);b2.m_R.Set(b2_rotation);}
b1.m_rotation=b1_rotation;b2.m_rotation=b2_rotation;}
return minSeparation>=-b2Settings.b2_linearSlop;},PostSolve:function(){for(var i=0;i<this.m_constraintCount;++i)
{var c=this.m_constraints[i];var m=c.manifold;for(var j=0;j<c.pointCount;++j)
{var mPoint=m.points[j];var cPoint=c.points[j];mPoint.normalImpulse=cPoint.normalImpulse;mPoint.tangentImpulse=cPoint.tangentImpulse;}}},m_allocator:null,m_constraints:new Array(),m_constraintCount:0};
var b2CircleContact=Class.create();Object.extend(b2CircleContact.prototype,b2Contact.prototype);Object.extend(b2CircleContact.prototype,{initialize:function(s1,s2){this.m_node1=new b2ContactNode();this.m_node2=new b2ContactNode();this.m_flags=0;if(!s1||!s2){this.m_shape1=null;this.m_shape2=null;return;}
this.m_shape1=s1;this.m_shape2=s2;this.m_manifoldCount=0;this.m_friction=Math.sqrt(this.m_shape1.m_friction*this.m_shape2.m_friction);this.m_restitution=b2Math.b2Max(this.m_shape1.m_restitution,this.m_shape2.m_restitution);this.m_prev=null;this.m_next=null;this.m_node1.contact=null;this.m_node1.prev=null;this.m_node1.next=null;this.m_node1.other=null;this.m_node2.contact=null;this.m_node2.prev=null;this.m_node2.next=null;this.m_node2.other=null;this.m_manifold=[new b2Manifold()];this.m_manifold[0].pointCount=0;this.m_manifold[0].points[0].normalImpulse=0.0;this.m_manifold[0].points[0].tangentImpulse=0.0;},Evaluate:function(){b2Collision.b2CollideCircle(this.m_manifold[0],this.m_shape1,this.m_shape2,false);if(this.m_manifold[0].pointCount>0)
{this.m_manifoldCount=1;}
else
{this.m_manifoldCount=0;}},GetManifolds:function()
{return this.m_manifold;},m_manifold:[new b2Manifold()]});b2CircleContact.Create=function(shape1,shape2,allocator){return new b2CircleContact(shape1,shape2);};b2CircleContact.Destroy=function(contact,allocator){};
var b2Conservative=Class.create();b2Conservative.prototype={initialize:function(){}}
b2Conservative.R1=new b2Mat22();b2Conservative.R2=new b2Mat22();b2Conservative.x1=new b2Vec2();b2Conservative.x2=new b2Vec2();b2Conservative.Conservative=function(shape1,shape2){var body1=shape1.GetBody();var body2=shape2.GetBody();var v1X=body1.m_position.x-body1.m_position0.x;var v1Y=body1.m_position.y-body1.m_position0.y;var omega1=body1.m_rotation-body1.m_rotation0;var v2X=body2.m_position.x-body2.m_position0.x;var v2Y=body2.m_position.y-body2.m_position0.y;var omega2=body2.m_rotation-body2.m_rotation0;var r1=shape1.GetMaxRadius();var r2=shape2.GetMaxRadius();var p1StartX=body1.m_position0.x;var p1StartY=body1.m_position0.y;var a1Start=body1.m_rotation0;var p2StartX=body2.m_position0.x;var p2StartY=body2.m_position0.y;var a2Start=body2.m_rotation0;var p1X=p1StartX;var p1Y=p1StartY;var a1=a1Start;var p2X=p2StartX;var p2Y=p2StartY;var a2=a2Start;b2Conservative.R1.Set(a1);b2Conservative.R2.Set(a2);shape1.QuickSync(p1,b2Conservative.R1);shape2.QuickSync(p2,b2Conservative.R2);var s1=0.0;var maxIterations=10;var dX;var dY;var invRelativeVelocity=0.0;var hit=true;for(var iter=0;iter<maxIterations;++iter)
{var distance=b2Distance.Distance(b2Conservative.x1,b2Conservative.x2,shape1,shape2);if(distance<b2Settings.b2_linearSlop)
{if(iter==0)
{hit=false;}
else
{hit=true;}
break;}
if(iter==0)
{dX=b2Conservative.x2.x-b2Conservative.x1.x;dY=b2Conservative.x2.y-b2Conservative.x1.y;var dLen=Math.sqrt(dX*dX+dY*dY);var relativeVelocity=(dX*(v1X-v2X)+dY*(v1Y-v2Y))+Math.abs(omega1)*r1+Math.abs(omega2)*r2;if(Math.abs(relativeVelocity)<Number.MIN_VALUE)
{hit=false;break;}
invRelativeVelocity=1.0/relativeVelocity;}
var ds=distance*invRelativeVelocity;var s2=s1+ds;if(s2<0.0||1.0<s2)
{hit=false;break;}
if(s2<(1.0+100.0*Number.MIN_VALUE)*s1)
{hit=true;break;}
s1=s2;p1X=p1StartX+s1*v1.x;p1Y=p1StartY+s1*v1.y;a1=a1Start+s1*omega1;p2X=p2StartX+s1*v2.x;p2Y=p2StartY+s1*v2.y;a2=a2Start+s1*omega2;b2Conservative.R1.Set(a1);b2Conservative.R2.Set(a2);shape1.QuickSync(p1,b2Conservative.R1);shape2.QuickSync(p2,b2Conservative.R2);}
if(hit)
{dX=b2Conservative.x2.x-b2Conservative.x1.x;dY=b2Conservative.x2.y-b2Conservative.x1.y;var length=Math.sqrt(dX*dX+dY*dY);if(length>FLT_EPSILON)
{d*=b2_linearSlop/length;}
if(body1.IsStatic())
{body1.m_position.x=p1X;body1.m_position.y=p1Y;}
else
{body1.m_position.x=p1X-dX;body1.m_position.y=p1Y-dY;}
body1.m_rotation=a1;body1.m_R.Set(a1);body1.QuickSyncShapes();if(body2.IsStatic())
{body2.m_position.x=p2X;body2.m_position.y=p2Y;}
else
{body2.m_position.x=p2X+dX;body2.m_position.y=p2Y+dY;}
body2.m_position.x=p2X+dX;body2.m_position.y=p2Y+dY;body2.m_rotation=a2;body2.m_R.Set(a2);body2.QuickSyncShapes();return true;}
shape1.QuickSync(body1.m_position,body1.m_R);shape2.QuickSync(body2.m_position,body2.m_R);return false;};
var b2NullContact=Class.create();Object.extend(b2NullContact.prototype,b2Contact.prototype);Object.extend(b2NullContact.prototype,{initialize:function(s1,s2){this.m_node1=new b2ContactNode();this.m_node2=new b2ContactNode();this.m_flags=0;if(!s1||!s2){this.m_shape1=null;this.m_shape2=null;return;}
this.m_shape1=s1;this.m_shape2=s2;this.m_manifoldCount=0;this.m_friction=Math.sqrt(this.m_shape1.m_friction*this.m_shape2.m_friction);this.m_restitution=b2Math.b2Max(this.m_shape1.m_restitution,this.m_shape2.m_restitution);this.m_prev=null;this.m_next=null;this.m_node1.contact=null;this.m_node1.prev=null;this.m_node1.next=null;this.m_node1.other=null;this.m_node2.contact=null;this.m_node2.prev=null;this.m_node2.next=null;this.m_node2.other=null;},Evaluate:function(){},GetManifolds:function(){return null;}});
var b2PolyAndCircleContact=Class.create();Object.extend(b2PolyAndCircleContact.prototype,b2Contact.prototype);Object.extend(b2PolyAndCircleContact.prototype,{initialize:function(s1,s2){this.m_node1=new b2ContactNode();this.m_node2=new b2ContactNode();this.m_flags=0;if(!s1||!s2){this.m_shape1=null;this.m_shape2=null;return;}
this.m_shape1=s1;this.m_shape2=s2;this.m_manifoldCount=0;this.m_friction=Math.sqrt(this.m_shape1.m_friction*this.m_shape2.m_friction);this.m_restitution=b2Math.b2Max(this.m_shape1.m_restitution,this.m_shape2.m_restitution);this.m_prev=null;this.m_next=null;this.m_node1.contact=null;this.m_node1.prev=null;this.m_node1.next=null;this.m_node1.other=null;this.m_node2.contact=null;this.m_node2.prev=null;this.m_node2.next=null;this.m_node2.other=null;this.m_manifold=[new b2Manifold()];b2Settings.b2Assert(this.m_shape1.m_type==b2Shape.e_polyShape);b2Settings.b2Assert(this.m_shape2.m_type==b2Shape.e_circleShape);this.m_manifold[0].pointCount=0;this.m_manifold[0].points[0].normalImpulse=0.0;this.m_manifold[0].points[0].tangentImpulse=0.0;},Evaluate:function(){b2Collision.b2CollidePolyAndCircle(this.m_manifold[0],this.m_shape1,this.m_shape2,false);if(this.m_manifold[0].pointCount>0)
{this.m_manifoldCount=1;}
else
{this.m_manifoldCount=0;}},GetManifolds:function()
{return this.m_manifold;},m_manifold:[new b2Manifold()]})
b2PolyAndCircleContact.Create=function(shape1,shape2,allocator){return new b2PolyAndCircleContact(shape1,shape2);};b2PolyAndCircleContact.Destroy=function(contact,allocator){};
var b2PolyContact=Class.create();Object.extend(b2PolyContact.prototype,b2Contact.prototype);Object.extend(b2PolyContact.prototype,{initialize:function(s1,s2){this.m_node1=new b2ContactNode();this.m_node2=new b2ContactNode();this.m_flags=0;if(!s1||!s2){this.m_shape1=null;this.m_shape2=null;return;}
this.m_shape1=s1;this.m_shape2=s2;this.m_manifoldCount=0;this.m_friction=Math.sqrt(this.m_shape1.m_friction*this.m_shape2.m_friction);this.m_restitution=b2Math.b2Max(this.m_shape1.m_restitution,this.m_shape2.m_restitution);this.m_prev=null;this.m_next=null;this.m_node1.contact=null;this.m_node1.prev=null;this.m_node1.next=null;this.m_node1.other=null;this.m_node2.contact=null;this.m_node2.prev=null;this.m_node2.next=null;this.m_node2.other=null;this.m0=new b2Manifold();this.m_manifold=[new b2Manifold()];this.m_manifold[0].pointCount=0;},m0:new b2Manifold(),Evaluate:function(){var tMani=this.m_manifold[0];var tPoints=this.m0.points;for(var k=0;k<tMani.pointCount;k++){var tPoint=tPoints[k];var tPoint0=tMani.points[k];tPoint.normalImpulse=tPoint0.normalImpulse;tPoint.tangentImpulse=tPoint0.tangentImpulse;tPoint.id=tPoint0.id.Copy();}
this.m0.pointCount=tMani.pointCount;b2Collision.b2CollidePoly(tMani,this.m_shape1,this.m_shape2,false);if(tMani.pointCount>0)
{var match=[false,false];for(var i=0;i<tMani.pointCount;++i)
{var cp=tMani.points[i];cp.normalImpulse=0.0;cp.tangentImpulse=0.0;var idKey=cp.id.key;for(var j=0;j<this.m0.pointCount;++j)
{if(match[j]==true)
continue;var cp0=this.m0.points[j];var id0=cp0.id;if(id0.key==idKey)
{match[j]=true;cp.normalImpulse=cp0.normalImpulse;cp.tangentImpulse=cp0.tangentImpulse;break;}}}
this.m_manifoldCount=1;}
else
{this.m_manifoldCount=0;}},GetManifolds:function()
{return this.m_manifold;},m_manifold:[new b2Manifold()]});b2PolyContact.Create=function(shape1,shape2,allocator){return new b2PolyContact(shape1,shape2);};b2PolyContact.Destroy=function(contact,allocator){};
var b2ContactManager=Class.create();Object.extend(b2ContactManager.prototype,b2PairCallback.prototype);Object.extend(b2ContactManager.prototype,{initialize:function(){this.m_nullContact=new b2NullContact();this.m_world=null;this.m_destroyImmediate=false;},PairAdded:function(proxyUserData1,proxyUserData2){var shape1=proxyUserData1;var shape2=proxyUserData2;var body1=shape1.m_body;var body2=shape2.m_body;if(body1.IsStatic()&&body2.IsStatic())
{return this.m_nullContact;}
if(shape1.m_body==shape2.m_body)
{return this.m_nullContact;}
if(body2.IsConnected(body1))
{return this.m_nullContact;}
if(this.m_world.m_filter!=null&&this.m_world.m_filter.ShouldCollide(shape1,shape2)==false)
{return this.m_nullContact;}
if(body2.m_invMass==0.0)
{var tempShape=shape1;shape1=shape2;shape2=tempShape;var tempBody=body1;body1=body2;body2=tempBody;}
var contact=b2Contact.Create(shape1,shape2,this.m_world.m_blockAllocator);if(contact==null)
{return this.m_nullContact;}
else
{contact.m_prev=null;contact.m_next=this.m_world.m_contactList;if(this.m_world.m_contactList!=null)
{this.m_world.m_contactList.m_prev=contact;}
this.m_world.m_contactList=contact;this.m_world.m_contactCount++;}
return contact;},PairRemoved:function(proxyUserData1,proxyUserData2,pairUserData){if(pairUserData==null)
{return;}
var c=pairUserData;if(c!=this.m_nullContact)
{if(this.m_destroyImmediate==true)
{this.DestroyContact(c);c=null;}
else
{c.m_flags|=b2Contact.e_destroyFlag;}}},DestroyContact:function(c)
{if(c.m_prev)
{c.m_prev.m_next=c.m_next;}
if(c.m_next)
{c.m_next.m_prev=c.m_prev;}
if(c==this.m_world.m_contactList)
{this.m_world.m_contactList=c.m_next;}
if(c.GetManifoldCount()>0)
{var body1=c.m_shape1.m_body;var body2=c.m_shape2.m_body;var node1=c.m_node1;var node2=c.m_node2;body1.WakeUp();body2.WakeUp();if(node1.prev)
{node1.prev.next=node1.next;}
if(node1.next)
{node1.next.prev=node1.prev;}
if(node1==body1.m_contactList)
{body1.m_contactList=node1.next;}
node1.prev=null;node1.next=null;if(node2.prev)
{node2.prev.next=node2.next;}
if(node2.next)
{node2.next.prev=node2.prev;}
if(node2==body2.m_contactList)
{body2.m_contactList=node2.next;}
node2.prev=null;node2.next=null;}
b2Contact.Destroy(c,this.m_world.m_blockAllocator);--this.m_world.m_contactCount;},CleanContactList:function()
{var c=this.m_world.m_contactList;while(c!=null)
{var c0=c;c=c.m_next;if(c0.m_flags&b2Contact.e_destroyFlag)
{this.DestroyContact(c0);c0=null;}}},Collide:function()
{var body1;var body2;var node1;var node2;for(var c=this.m_world.m_contactList;c!=null;c=c.m_next)
{if(c.m_shape1.m_body.IsSleeping()&&c.m_shape2.m_body.IsSleeping())
{continue;}
var oldCount=c.GetManifoldCount();c.Evaluate();var newCount=c.GetManifoldCount();if(oldCount==0&&newCount>0)
{body1=c.m_shape1.m_body;body2=c.m_shape2.m_body;node1=c.m_node1;node2=c.m_node2;node1.contact=c;node1.other=body2;node1.prev=null;node1.next=body1.m_contactList;if(node1.next!=null)
{node1.next.prev=c.m_node1;}
body1.m_contactList=c.m_node1;node2.contact=c;node2.other=body1;node2.prev=null;node2.next=body2.m_contactList;if(node2.next!=null)
{node2.next.prev=node2;}
body2.m_contactList=node2;}
else if(oldCount>0&&newCount==0)
{body1=c.m_shape1.m_body;body2=c.m_shape2.m_body;node1=c.m_node1;node2=c.m_node2;if(node1.prev)
{node1.prev.next=node1.next;}
if(node1.next)
{node1.next.prev=node1.prev;}
if(node1==body1.m_contactList)
{body1.m_contactList=node1.next;}
node1.prev=null;node1.next=null;if(node2.prev)
{node2.prev.next=node2.next;}
if(node2.next)
{node2.next.prev=node2.prev;}
if(node2==body2.m_contactList)
{body2.m_contactList=node2.next;}
node2.prev=null;node2.next=null;}}},m_world:null,m_nullContact:new b2NullContact(),m_destroyImmediate:null});
var b2World=Class.create();b2World.prototype={initialize:function(worldAABB,gravity,doSleep){this.step=new b2TimeStep();this.m_contactManager=new b2ContactManager();this.m_listener=null;this.m_filter=b2CollisionFilter.b2_defaultFilter;this.m_bodyList=null;this.m_contactList=null;this.m_jointList=null;this.m_bodyCount=0;this.m_contactCount=0;this.m_jointCount=0;this.m_bodyDestroyList=null;this.m_allowSleep=doSleep;this.m_gravity=gravity;this.m_contactManager.m_world=this;this.m_broadPhase=new b2BroadPhase(worldAABB,this.m_contactManager);var bd=new b2BodyDef();this.m_groundBody=this.CreateBody(bd);},SetListener:function(listener){this.m_listener=listener;},SetFilter:function(filter){this.m_filter=filter;},CreateBody:function(def){var b=new b2Body(def,this);b.m_prev=null;b.m_next=this.m_bodyList;if(this.m_bodyList)
{this.m_bodyList.m_prev=b;}
this.m_bodyList=b;++this.m_bodyCount;return b;},DestroyBody:function(b)
{if(b.m_flags&b2Body.e_destroyFlag)
{return;}
if(b.m_prev)
{b.m_prev.m_next=b.m_next;}
if(b.m_next)
{b.m_next.m_prev=b.m_prev;}
if(b==this.m_bodyList)
{this.m_bodyList=b.m_next;}
b.m_flags|=b2Body.e_destroyFlag;--this.m_bodyCount;b.m_prev=null;b.m_next=this.m_bodyDestroyList;this.m_bodyDestroyList=b;},CleanBodyList:function()
{this.m_contactManager.m_destroyImmediate=true;var b=this.m_bodyDestroyList;while(b)
{var b0=b;b=b.m_next;var jn=b0.m_jointList;while(jn)
{var jn0=jn;jn=jn.next;if(this.m_listener)
{this.m_listener.NotifyJointDestroyed(jn0.joint);}
this.DestroyJoint(jn0.joint);}
b0.Destroy();}
this.m_bodyDestroyList=null;this.m_contactManager.m_destroyImmediate=false;},CreateJoint:function(def){var j=b2Joint.Create(def,this.m_blockAllocator);j.m_prev=null;j.m_next=this.m_jointList;if(this.m_jointList)
{this.m_jointList.m_prev=j;}
this.m_jointList=j;++this.m_jointCount;j.m_node1.joint=j;j.m_node1.other=j.m_body2;j.m_node1.prev=null;j.m_node1.next=j.m_body1.m_jointList;if(j.m_body1.m_jointList)j.m_body1.m_jointList.prev=j.m_node1;j.m_body1.m_jointList=j.m_node1;j.m_node2.joint=j;j.m_node2.other=j.m_body1;j.m_node2.prev=null;j.m_node2.next=j.m_body2.m_jointList;if(j.m_body2.m_jointList)j.m_body2.m_jointList.prev=j.m_node2;j.m_body2.m_jointList=j.m_node2;if(def.collideConnected==false)
{var b=def.body1.m_shapeCount<def.body2.m_shapeCount?def.body1:def.body2;for(var s=b.m_shapeList;s;s=s.m_next)
{s.ResetProxy(this.m_broadPhase);}}
return j;},DestroyJoint:function(j)
{var collideConnected=j.m_collideConnected;if(j.m_prev)
{j.m_prev.m_next=j.m_next;}
if(j.m_next)
{j.m_next.m_prev=j.m_prev;}
if(j==this.m_jointList)
{this.m_jointList=j.m_next;}
var body1=j.m_body1;var body2=j.m_body2;body1.WakeUp();body2.WakeUp();if(j.m_node1.prev)
{j.m_node1.prev.next=j.m_node1.next;}
if(j.m_node1.next)
{j.m_node1.next.prev=j.m_node1.prev;}
if(j.m_node1==body1.m_jointList)
{body1.m_jointList=j.m_node1.next;}
j.m_node1.prev=null;j.m_node1.next=null;if(j.m_node2.prev)
{j.m_node2.prev.next=j.m_node2.next;}
if(j.m_node2.next)
{j.m_node2.next.prev=j.m_node2.prev;}
if(j.m_node2==body2.m_jointList)
{body2.m_jointList=j.m_node2.next;}
j.m_node2.prev=null;j.m_node2.next=null;b2Joint.Destroy(j,this.m_blockAllocator);--this.m_jointCount;if(collideConnected==false)
{var b=body1.m_shapeCount<body2.m_shapeCount?body1:body2;for(var s=b.m_shapeList;s;s=s.m_next)
{s.ResetProxy(this.m_broadPhase);}}},GetGroundBody:function(){return this.m_groundBody;},step:new b2TimeStep(),Step:function(dt,iterations){var b;var other;this.step.dt=dt;this.step.iterations=iterations;if(dt>0.0)
{this.step.inv_dt=1.0/dt;}
else
{this.step.inv_dt=0.0;}
this.m_positionIterationCount=0;this.m_contactManager.CleanContactList();this.CleanBodyList();this.m_contactManager.Collide();var island=new b2Island(this.m_bodyCount,this.m_contactCount,this.m_jointCount,this.m_stackAllocator);for(b=this.m_bodyList;b!=null;b=b.m_next)
{b.m_flags&=~b2Body.e_islandFlag;}
for(var c=this.m_contactList;c!=null;c=c.m_next)
{c.m_flags&=~b2Contact.e_islandFlag;}
for(var j=this.m_jointList;j!=null;j=j.m_next)
{j.m_islandFlag=false;}
var stackSize=this.m_bodyCount;var stack=new Array(this.m_bodyCount);for(var k=0;k<this.m_bodyCount;k++)
stack[k]=null;for(var seed=this.m_bodyList;seed!=null;seed=seed.m_next)
{if(seed.m_flags&(b2Body.e_staticFlag|b2Body.e_islandFlag|b2Body.e_sleepFlag|b2Body.e_frozenFlag))
{continue;}
island.Clear();var stackCount=0;stack[stackCount++]=seed;seed.m_flags|=b2Body.e_islandFlag;;while(stackCount>0)
{b=stack[--stackCount];island.AddBody(b);b.m_flags&=~b2Body.e_sleepFlag;if(b.m_flags&b2Body.e_staticFlag)
{continue;}
for(var cn=b.m_contactList;cn!=null;cn=cn.next)
{if(cn.contact.m_flags&b2Contact.e_islandFlag)
{continue;}
island.AddContact(cn.contact);cn.contact.m_flags|=b2Contact.e_islandFlag;other=cn.other;if(other.m_flags&b2Body.e_islandFlag)
{continue;}
stack[stackCount++]=other;other.m_flags|=b2Body.e_islandFlag;}
for(var jn=b.m_jointList;jn!=null;jn=jn.next)
{if(jn.joint.m_islandFlag==true)
{continue;}
island.AddJoint(jn.joint);jn.joint.m_islandFlag=true;other=jn.other;if(other.m_flags&b2Body.e_islandFlag)
{continue;}
stack[stackCount++]=other;other.m_flags|=b2Body.e_islandFlag;}}
island.Solve(this.step,this.m_gravity);this.m_positionIterationCount=b2Math.b2Max(this.m_positionIterationCount,b2Island.m_positionIterationCount);if(this.m_allowSleep)
{island.UpdateSleep(dt);}
for(var i=0;i<island.m_bodyCount;++i)
{b=island.m_bodies[i];if(b.m_flags&b2Body.e_staticFlag)
{b.m_flags&=~b2Body.e_islandFlag;}
if(b.IsFrozen()&&this.m_listener)
{var response=this.m_listener.NotifyBoundaryViolated(b);if(response==b2WorldListener.b2_destroyBody)
{this.DestroyBody(b);b=null;island.m_bodies[i]=null;}}}}
this.m_broadPhase.Commit();},Query:function(aabb,shapes,maxCount){var results=new Array();var count=this.m_broadPhase.QueryAABB(aabb,results,maxCount);for(var i=0;i<count;++i)
{shapes[i]=results[i];}
return count;},GetBodyList:function(){return this.m_bodyList;},GetJointList:function(){return this.m_jointList;},GetContactList:function(){return this.m_contactList;},m_blockAllocator:null,m_stackAllocator:null,m_broadPhase:null,m_contactManager:new b2ContactManager(),m_bodyList:null,m_contactList:null,m_jointList:null,m_bodyCount:0,m_contactCount:0,m_jointCount:0,m_bodyDestroyList:null,m_gravity:null,m_allowSleep:null,m_groundBody:null,m_listener:null,m_filter:null,m_positionIterationCount:0};b2World.s_enablePositionCorrection=1;b2World.s_enableWarmStarting=1;
var b2WorldListener=Class.create();b2WorldListener.prototype={NotifyJointDestroyed:function(joint){},NotifyBoundaryViolated:function(body)
{return b2WorldListener.b2_freezeBody;},initialize:function(){}};b2WorldListener.b2_freezeBody=0;b2WorldListener.b2_destroyBody=1;
var b2JointNode=Class.create();b2JointNode.prototype={other:null,joint:null,prev:null,next:null,initialize:function(){}}

var b2Joint=Class.create();b2Joint.prototype={GetType:function(){return this.m_type;},GetAnchor1:function(){return null},GetAnchor2:function(){return null},GetReactionForce:function(invTimeStep){return null},GetReactionTorque:function(invTimeStep){return 0.0},GetBody1:function()
{return this.m_body1;},GetBody2:function()
{return this.m_body2;},GetNext:function(){return this.m_next;},GetUserData:function(){return this.m_userData;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;},PrepareVelocitySolver:function(){},SolveVelocityConstraints:function(step){},PreparePositionSolver:function(){},SolvePositionConstraints:function(){return false},m_type:0,m_prev:null,m_next:null,m_node1:new b2JointNode(),m_node2:new b2JointNode(),m_body1:null,m_body2:null,m_islandFlag:null,m_collideConnected:null,m_userData:null};b2Joint.Create=function(def,allocator){var joint=null;switch(def.type)
{case b2Joint.e_distanceJoint:{joint=new b2DistanceJoint(def);}
break;case b2Joint.e_mouseJoint:{joint=new b2MouseJoint(def);}
break;case b2Joint.e_prismaticJoint:{joint=new b2PrismaticJoint(def);}
break;case b2Joint.e_revoluteJoint:{joint=new b2RevoluteJoint(def);}
break;case b2Joint.e_pulleyJoint:{joint=new b2PulleyJoint(def);}
break;case b2Joint.e_gearJoint:{joint=new b2GearJoint(def);}
break;default:break;}
return joint;};b2Joint.Destroy=function(joint,allocator){};b2Joint.e_unknownJoint=0;b2Joint.e_revoluteJoint=1;b2Joint.e_prismaticJoint=2;b2Joint.e_distanceJoint=3;b2Joint.e_pulleyJoint=4;b2Joint.e_mouseJoint=5;b2Joint.e_gearJoint=6;b2Joint.e_inactiveLimit=0;b2Joint.e_atLowerLimit=1;b2Joint.e_atUpperLimit=2;b2Joint.e_equalLimits=3;
var b2JointDef=Class.create();b2JointDef.prototype={initialize:function()
{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;},type:0,userData:null,body1:null,body2:null,collideConnected:null}

var b2DistanceJoint=Class.create();Object.extend(b2DistanceJoint.prototype,b2Joint.prototype);Object.extend(b2DistanceJoint.prototype,{initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.m_localAnchor1=new b2Vec2();this.m_localAnchor2=new b2Vec2();this.m_u=new b2Vec2();var tMat;var tX;var tY;tMat=this.m_body1.m_R;tX=def.anchorPoint1.x-this.m_body1.m_position.x;tY=def.anchorPoint1.y-this.m_body1.m_position.y;this.m_localAnchor1.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor1.y=tX*tMat.col2.x+tY*tMat.col2.y;tMat=this.m_body2.m_R;tX=def.anchorPoint2.x-this.m_body2.m_position.x;tY=def.anchorPoint2.y-this.m_body2.m_position.y;this.m_localAnchor2.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor2.y=tX*tMat.col2.x+tY*tMat.col2.y;tX=def.anchorPoint2.x-def.anchorPoint1.x;tY=def.anchorPoint2.y-def.anchorPoint1.y;this.m_length=Math.sqrt(tX*tX+tY*tY);this.m_impulse=0.0;},PrepareVelocitySolver:function(){var tMat;tMat=this.m_body1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=this.m_body2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;this.m_u.x=this.m_body2.m_position.x+r2X-this.m_body1.m_position.x-r1X;this.m_u.y=this.m_body2.m_position.y+r2Y-this.m_body1.m_position.y-r1Y;var length=Math.sqrt(this.m_u.x*this.m_u.x+this.m_u.y*this.m_u.y);if(length>b2Settings.b2_linearSlop)
{this.m_u.Multiply(1.0/length);}
else
{this.m_u.SetZero();}
var cr1u=(r1X*this.m_u.y-r1Y*this.m_u.x);var cr2u=(r2X*this.m_u.y-r2Y*this.m_u.x);this.m_mass=this.m_body1.m_invMass+this.m_body1.m_invI*cr1u*cr1u+this.m_body2.m_invMass+this.m_body2.m_invI*cr2u*cr2u;this.m_mass=1.0/this.m_mass;if(b2World.s_enableWarmStarting)
{var PX=this.m_impulse*this.m_u.x;var PY=this.m_impulse*this.m_u.y;this.m_body1.m_linearVelocity.x-=this.m_body1.m_invMass*PX;this.m_body1.m_linearVelocity.y-=this.m_body1.m_invMass*PY;this.m_body1.m_angularVelocity-=this.m_body1.m_invI*(r1X*PY-r1Y*PX);this.m_body2.m_linearVelocity.x+=this.m_body2.m_invMass*PX;this.m_body2.m_linearVelocity.y+=this.m_body2.m_invMass*PY;this.m_body2.m_angularVelocity+=this.m_body2.m_invI*(r2X*PY-r2Y*PX);}
else
{this.m_impulse=0.0;}},SolveVelocityConstraints:function(step){var tMat;tMat=this.m_body1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=this.m_body2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var v1X=this.m_body1.m_linearVelocity.x+(-this.m_body1.m_angularVelocity*r1Y);var v1Y=this.m_body1.m_linearVelocity.y+(this.m_body1.m_angularVelocity*r1X);var v2X=this.m_body2.m_linearVelocity.x+(-this.m_body2.m_angularVelocity*r2Y);var v2Y=this.m_body2.m_linearVelocity.y+(this.m_body2.m_angularVelocity*r2X);var Cdot=(this.m_u.x*(v2X-v1X)+this.m_u.y*(v2Y-v1Y));var impulse=-this.m_mass*Cdot;this.m_impulse+=impulse;var PX=impulse*this.m_u.x;var PY=impulse*this.m_u.y;this.m_body1.m_linearVelocity.x-=this.m_body1.m_invMass*PX;this.m_body1.m_linearVelocity.y-=this.m_body1.m_invMass*PY;this.m_body1.m_angularVelocity-=this.m_body1.m_invI*(r1X*PY-r1Y*PX);this.m_body2.m_linearVelocity.x+=this.m_body2.m_invMass*PX;this.m_body2.m_linearVelocity.y+=this.m_body2.m_invMass*PY;this.m_body2.m_angularVelocity+=this.m_body2.m_invI*(r2X*PY-r2Y*PX);},SolvePositionConstraints:function(){var tMat;tMat=this.m_body1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=this.m_body2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var dX=this.m_body2.m_position.x+r2X-this.m_body1.m_position.x-r1X;var dY=this.m_body2.m_position.y+r2Y-this.m_body1.m_position.y-r1Y;var length=Math.sqrt(dX*dX+dY*dY);dX/=length;dY/=length;var C=length-this.m_length;C=b2Math.b2Clamp(C,-b2Settings.b2_maxLinearCorrection,b2Settings.b2_maxLinearCorrection);var impulse=-this.m_mass*C;this.m_u.Set(dX,dY);var PX=impulse*this.m_u.x;var PY=impulse*this.m_u.y;this.m_body1.m_position.x-=this.m_body1.m_invMass*PX;this.m_body1.m_position.y-=this.m_body1.m_invMass*PY;this.m_body1.m_rotation-=this.m_body1.m_invI*(r1X*PY-r1Y*PX);this.m_body2.m_position.x+=this.m_body2.m_invMass*PX;this.m_body2.m_position.y+=this.m_body2.m_invMass*PY;this.m_body2.m_rotation+=this.m_body2.m_invI*(r2X*PY-r2Y*PX);this.m_body1.m_R.Set(this.m_body1.m_rotation);this.m_body2.m_R.Set(this.m_body2.m_rotation);return b2Math.b2Abs(C)<b2Settings.b2_linearSlop;},GetAnchor1:function(){return b2Math.AddVV(this.m_body1.m_position,b2Math.b2MulMV(this.m_body1.m_R,this.m_localAnchor1));},GetAnchor2:function(){return b2Math.AddVV(this.m_body2.m_position,b2Math.b2MulMV(this.m_body2.m_R,this.m_localAnchor2));},GetReactionForce:function(invTimeStep)
{var F=new b2Vec2();F.SetV(this.m_u);F.Multiply(this.m_impulse*invTimeStep);return F;},GetReactionTorque:function(invTimeStep)
{return 0.0;},m_localAnchor1:new b2Vec2(),m_localAnchor2:new b2Vec2(),m_u:new b2Vec2(),m_impulse:null,m_mass:null,m_length:null});
var b2DistanceJointDef=Class.create();Object.extend(b2DistanceJointDef.prototype,b2JointDef.prototype);Object.extend(b2DistanceJointDef.prototype,{initialize:function()
{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;this.anchorPoint1=new b2Vec2();this.anchorPoint2=new b2Vec2();this.type=b2Joint.e_distanceJoint;},anchorPoint1:new b2Vec2(),anchorPoint2:new b2Vec2()});
var b2Jacobian=Class.create();b2Jacobian.prototype={linear1:new b2Vec2(),angular1:null,linear2:new b2Vec2(),angular2:null,SetZero:function(){this.linear1.SetZero();this.angular1=0.0;this.linear2.SetZero();this.angular2=0.0;},Set:function(x1,a1,x2,a2){this.linear1.SetV(x1);this.angular1=a1;this.linear2.SetV(x2);this.angular2=a2;},Compute:function(x1,a1,x2,a2){return(this.linear1.x*x1.x+this.linear1.y*x1.y)+this.angular1*a1+(this.linear2.x*x2.x+this.linear2.y*x2.y)+this.angular2*a2;},initialize:function(){this.linear1=new b2Vec2();this.linear2=new b2Vec2();}};
var b2GearJoint=Class.create();Object.extend(b2GearJoint.prototype,b2Joint.prototype);Object.extend(b2GearJoint.prototype,{GetAnchor1:function(){var tMat=this.m_body1.m_R;return new b2Vec2(this.m_body1.m_position.x+(tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y),this.m_body1.m_position.y+(tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y));},GetAnchor2:function(){var tMat=this.m_body2.m_R;return new b2Vec2(this.m_body2.m_position.x+(tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y),this.m_body2.m_position.y+(tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y));},GetReactionForce:function(invTimeStep){return new b2Vec2();},GetReactionTorque:function(invTimeStep){return 0.0;},GetRatio:function(){return this.m_ratio;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.m_groundAnchor1=new b2Vec2();this.m_groundAnchor2=new b2Vec2();this.m_localAnchor1=new b2Vec2();this.m_localAnchor2=new b2Vec2();this.m_J=new b2Jacobian();this.m_revolute1=null;this.m_prismatic1=null;this.m_revolute2=null;this.m_prismatic2=null;var coordinate1;var coordinate2;this.m_ground1=def.joint1.m_body1;this.m_body1=def.joint1.m_body2;if(def.joint1.m_type==b2Joint.e_revoluteJoint)
{this.m_revolute1=def.joint1;this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1);this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2);coordinate1=this.m_revolute1.GetJointAngle();}
else
{this.m_prismatic1=def.joint1;this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1);this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2);coordinate1=this.m_prismatic1.GetJointTranslation();}
this.m_ground2=def.joint2.m_body1;this.m_body2=def.joint2.m_body2;if(def.joint2.m_type==b2Joint.e_revoluteJoint)
{this.m_revolute2=def.joint2;this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1);this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2);coordinate2=this.m_revolute2.GetJointAngle();}
else
{this.m_prismatic2=def.joint2;this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1);this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2);coordinate2=this.m_prismatic2.GetJointTranslation();}
this.m_ratio=def.ratio;this.m_constant=coordinate1+this.m_ratio*coordinate2;this.m_impulse=0.0;},PrepareVelocitySolver:function(){var g1=this.m_ground1;var g2=this.m_ground2;var b1=this.m_body1;var b2=this.m_body2;var ugX;var ugY;var rX;var rY;var tMat;var tVec;var crug;var K=0.0;this.m_J.SetZero();if(this.m_revolute1)
{this.m_J.angular1=-1.0;K+=b1.m_invI;}
else
{tMat=g1.m_R;tVec=this.m_prismatic1.m_localXAxis1;ugX=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y;ugY=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y;tMat=b1.m_R;rX=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;rY=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;crug=rX*ugY-rY*ugX;this.m_J.linear1.Set(-ugX,-ugY);this.m_J.angular1=-crug;K+=b1.m_invMass+b1.m_invI*crug*crug;}
if(this.m_revolute2)
{this.m_J.angular2=-this.m_ratio;K+=this.m_ratio*this.m_ratio*b2.m_invI;}
else
{tMat=g2.m_R;tVec=this.m_prismatic2.m_localXAxis1;ugX=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y;ugY=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y;tMat=b2.m_R;rX=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;rY=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;crug=rX*ugY-rY*ugX;this.m_J.linear2.Set(-this.m_ratio*ugX,-this.m_ratio*ugY);this.m_J.angular2=-this.m_ratio*crug;K+=this.m_ratio*this.m_ratio*(b2.m_invMass+b2.m_invI*crug*crug);}
this.m_mass=1.0/K;b1.m_linearVelocity.x+=b1.m_invMass*this.m_impulse*this.m_J.linear1.x;b1.m_linearVelocity.y+=b1.m_invMass*this.m_impulse*this.m_J.linear1.y;b1.m_angularVelocity+=b1.m_invI*this.m_impulse*this.m_J.angular1;b2.m_linearVelocity.x+=b2.m_invMass*this.m_impulse*this.m_J.linear2.x;b2.m_linearVelocity.y+=b2.m_invMass*this.m_impulse*this.m_J.linear2.y;b2.m_angularVelocity+=b2.m_invI*this.m_impulse*this.m_J.angular2;},SolveVelocityConstraints:function(step){var b1=this.m_body1;var b2=this.m_body2;var Cdot=this.m_J.Compute(b1.m_linearVelocity,b1.m_angularVelocity,b2.m_linearVelocity,b2.m_angularVelocity);var impulse=-this.m_mass*Cdot;this.m_impulse+=impulse;b1.m_linearVelocity.x+=b1.m_invMass*impulse*this.m_J.linear1.x;b1.m_linearVelocity.y+=b1.m_invMass*impulse*this.m_J.linear1.y;b1.m_angularVelocity+=b1.m_invI*impulse*this.m_J.angular1;b2.m_linearVelocity.x+=b2.m_invMass*impulse*this.m_J.linear2.x;b2.m_linearVelocity.y+=b2.m_invMass*impulse*this.m_J.linear2.y;b2.m_angularVelocity+=b2.m_invI*impulse*this.m_J.angular2;},SolvePositionConstraints:function(){var linearError=0.0;var b1=this.m_body1;var b2=this.m_body2;var coordinate1;var coordinate2;if(this.m_revolute1)
{coordinate1=this.m_revolute1.GetJointAngle();}
else
{coordinate1=this.m_prismatic1.GetJointTranslation();}
if(this.m_revolute2)
{coordinate2=this.m_revolute2.GetJointAngle();}
else
{coordinate2=this.m_prismatic2.GetJointTranslation();}
var C=this.m_constant-(coordinate1+this.m_ratio*coordinate2);var impulse=-this.m_mass*C;b1.m_position.x+=b1.m_invMass*impulse*this.m_J.linear1.x;b1.m_position.y+=b1.m_invMass*impulse*this.m_J.linear1.y;b1.m_rotation+=b1.m_invI*impulse*this.m_J.angular1;b2.m_position.x+=b2.m_invMass*impulse*this.m_J.linear2.x;b2.m_position.y+=b2.m_invMass*impulse*this.m_J.linear2.y;b2.m_rotation+=b2.m_invI*impulse*this.m_J.angular2;b1.m_R.Set(b1.m_rotation);b2.m_R.Set(b2.m_rotation);return linearError<b2Settings.b2_linearSlop;},m_ground1:null,m_ground2:null,m_revolute1:null,m_prismatic1:null,m_revolute2:null,m_prismatic2:null,m_groundAnchor1:new b2Vec2(),m_groundAnchor2:new b2Vec2(),m_localAnchor1:new b2Vec2(),m_localAnchor2:new b2Vec2(),m_J:new b2Jacobian(),m_constant:null,m_ratio:null,m_mass:null,m_impulse:null});
var b2GearJointDef=Class.create();Object.extend(b2GearJointDef.prototype,b2JointDef.prototype);Object.extend(b2GearJointDef.prototype,{initialize:function()
{this.type=b2Joint.e_gearJoint;this.joint1=null;this.joint2=null;this.ratio=1.0;},joint1:null,joint2:null,ratio:null});
var b2MouseJoint=Class.create();Object.extend(b2MouseJoint.prototype,b2Joint.prototype);Object.extend(b2MouseJoint.prototype,{GetAnchor1:function(){return this.m_target;},GetAnchor2:function(){var tVec=b2Math.b2MulMV(this.m_body2.m_R,this.m_localAnchor);tVec.Add(this.m_body2.m_position);return tVec;},GetReactionForce:function(invTimeStep)
{var F=new b2Vec2();F.SetV(this.m_impulse);F.Multiply(invTimeStep);return F;},GetReactionTorque:function(invTimeStep)
{return 0.0;},SetTarget:function(target){this.m_body2.WakeUp();this.m_target=target;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.K=new b2Mat22();this.K1=new b2Mat22();this.K2=new b2Mat22();this.m_localAnchor=new b2Vec2();this.m_target=new b2Vec2();this.m_impulse=new b2Vec2();this.m_ptpMass=new b2Mat22();this.m_C=new b2Vec2();this.m_target.SetV(def.target);var tX=this.m_target.x-this.m_body2.m_position.x;var tY=this.m_target.y-this.m_body2.m_position.y;this.m_localAnchor.x=(tX*this.m_body2.m_R.col1.x+tY*this.m_body2.m_R.col1.y);this.m_localAnchor.y=(tX*this.m_body2.m_R.col2.x+tY*this.m_body2.m_R.col2.y);this.m_maxForce=def.maxForce;this.m_impulse.SetZero();var mass=this.m_body2.m_mass;var omega=2.0*b2Settings.b2_pi*def.frequencyHz;var d=2.0*mass*def.dampingRatio*omega;var k=mass*omega*omega;this.m_gamma=1.0/(d+def.timeStep*k);this.m_beta=def.timeStep*k/(d+def.timeStep*k);},K:new b2Mat22(),K1:new b2Mat22(),K2:new b2Mat22(),PrepareVelocitySolver:function(){var b=this.m_body2;var tMat;tMat=b.m_R;var rX=tMat.col1.x*this.m_localAnchor.x+tMat.col2.x*this.m_localAnchor.y;var rY=tMat.col1.y*this.m_localAnchor.x+tMat.col2.y*this.m_localAnchor.y;var invMass=b.m_invMass;var invI=b.m_invI;this.K1.col1.x=invMass;this.K1.col2.x=0.0;this.K1.col1.y=0.0;this.K1.col2.y=invMass;this.K2.col1.x=invI*rY*rY;this.K2.col2.x=-invI*rX*rY;this.K2.col1.y=-invI*rX*rY;this.K2.col2.y=invI*rX*rX;this.K.SetM(this.K1);this.K.AddM(this.K2);this.K.col1.x+=this.m_gamma;this.K.col2.y+=this.m_gamma;this.K.Invert(this.m_ptpMass);this.m_C.x=b.m_position.x+rX-this.m_target.x;this.m_C.y=b.m_position.y+rY-this.m_target.y;b.m_angularVelocity*=0.98;var PX=this.m_impulse.x;var PY=this.m_impulse.y;b.m_linearVelocity.x+=invMass*PX;b.m_linearVelocity.y+=invMass*PY;b.m_angularVelocity+=invI*(rX*PY-rY*PX);},SolveVelocityConstraints:function(step){var body=this.m_body2;var tMat;tMat=body.m_R;var rX=tMat.col1.x*this.m_localAnchor.x+tMat.col2.x*this.m_localAnchor.y;var rY=tMat.col1.y*this.m_localAnchor.x+tMat.col2.y*this.m_localAnchor.y;var CdotX=body.m_linearVelocity.x+(-body.m_angularVelocity*rY);var CdotY=body.m_linearVelocity.y+(body.m_angularVelocity*rX);tMat=this.m_ptpMass;var tX=CdotX+(this.m_beta*step.inv_dt)*this.m_C.x+this.m_gamma*this.m_impulse.x;var tY=CdotY+(this.m_beta*step.inv_dt)*this.m_C.y+this.m_gamma*this.m_impulse.y;var impulseX=-(tMat.col1.x*tX+tMat.col2.x*tY);var impulseY=-(tMat.col1.y*tX+tMat.col2.y*tY);var oldImpulseX=this.m_impulse.x;var oldImpulseY=this.m_impulse.y;this.m_impulse.x+=impulseX;this.m_impulse.y+=impulseY;var length=this.m_impulse.Length();if(length>step.dt*this.m_maxForce)
{this.m_impulse.Multiply(step.dt*this.m_maxForce/length);}
impulseX=this.m_impulse.x-oldImpulseX;impulseY=this.m_impulse.y-oldImpulseY;body.m_linearVelocity.x+=body.m_invMass*impulseX;body.m_linearVelocity.y+=body.m_invMass*impulseY;body.m_angularVelocity+=body.m_invI*(rX*impulseY-rY*impulseX);},SolvePositionConstraints:function(){return true;},m_localAnchor:new b2Vec2(),m_target:new b2Vec2(),m_impulse:new b2Vec2(),m_ptpMass:new b2Mat22(),m_C:new b2Vec2(),m_maxForce:null,m_beta:null,m_gamma:null});
var b2MouseJointDef=Class.create();Object.extend(b2MouseJointDef.prototype,b2JointDef.prototype);Object.extend(b2MouseJointDef.prototype,{initialize:function()
{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;this.target=new b2Vec2();this.type=b2Joint.e_mouseJoint;this.maxForce=0.0;this.frequencyHz=5.0;this.dampingRatio=0.7;this.timeStep=1.0/60.0;},target:new b2Vec2(),maxForce:null,frequencyHz:null,dampingRatio:null,timeStep:null});
var b2PrismaticJoint=Class.create();Object.extend(b2PrismaticJoint.prototype,b2Joint.prototype);Object.extend(b2PrismaticJoint.prototype,{GetAnchor1:function(){var b1=this.m_body1;var tVec=new b2Vec2();tVec.SetV(this.m_localAnchor1);tVec.MulM(b1.m_R);tVec.Add(b1.m_position);return tVec;},GetAnchor2:function(){var b2=this.m_body2;var tVec=new b2Vec2();tVec.SetV(this.m_localAnchor2);tVec.MulM(b2.m_R);tVec.Add(b2.m_position);return tVec;},GetJointTranslation:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var p1X=b1.m_position.x+r1X;var p1Y=b1.m_position.y+r1Y;var p2X=b2.m_position.x+r2X;var p2Y=b2.m_position.y+r2Y;var dX=p2X-p1X;var dY=p2Y-p1Y;tMat=b1.m_R;var ax1X=tMat.col1.x*this.m_localXAxis1.x+tMat.col2.x*this.m_localXAxis1.y;var ax1Y=tMat.col1.y*this.m_localXAxis1.x+tMat.col2.y*this.m_localXAxis1.y;var translation=ax1X*dX+ax1Y*dY;return translation;},GetJointSpeed:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var p1X=b1.m_position.x+r1X;var p1Y=b1.m_position.y+r1Y;var p2X=b2.m_position.x+r2X;var p2Y=b2.m_position.y+r2Y;var dX=p2X-p1X;var dY=p2Y-p1Y;tMat=b1.m_R;var ax1X=tMat.col1.x*this.m_localXAxis1.x+tMat.col2.x*this.m_localXAxis1.y;var ax1Y=tMat.col1.y*this.m_localXAxis1.x+tMat.col2.y*this.m_localXAxis1.y;var v1=b1.m_linearVelocity;var v2=b2.m_linearVelocity;var w1=b1.m_angularVelocity;var w2=b2.m_angularVelocity;var speed=(dX*(-w1*ax1Y)+dY*(w1*ax1X))+(ax1X*(((v2.x+(-w2*r2Y))-v1.x)-(-w1*r1Y))+ax1Y*(((v2.y+(w2*r2X))-v1.y)-(w1*r1X)));return speed;},GetMotorForce:function(invTimeStep){return invTimeStep*this.m_motorImpulse;},SetMotorSpeed:function(speed)
{this.m_motorSpeed=speed;},SetMotorForce:function(force)
{this.m_maxMotorForce=force;},GetReactionForce:function(invTimeStep)
{var tImp=invTimeStep*this.m_limitImpulse;var tMat;tMat=this.m_body1.m_R;var ax1X=tImp*(tMat.col1.x*this.m_localXAxis1.x+tMat.col2.x*this.m_localXAxis1.y);var ax1Y=tImp*(tMat.col1.y*this.m_localXAxis1.x+tMat.col2.y*this.m_localXAxis1.y);var ay1X=tImp*(tMat.col1.x*this.m_localYAxis1.x+tMat.col2.x*this.m_localYAxis1.y);var ay1Y=tImp*(tMat.col1.y*this.m_localYAxis1.x+tMat.col2.y*this.m_localYAxis1.y);return new b2Vec2(ax1X+ay1X,ax1Y+ay1Y);},GetReactionTorque:function(invTimeStep)
{return invTimeStep*this.m_angularImpulse;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.m_localAnchor1=new b2Vec2();this.m_localAnchor2=new b2Vec2();this.m_localXAxis1=new b2Vec2();this.m_localYAxis1=new b2Vec2();this.m_linearJacobian=new b2Jacobian();this.m_motorJacobian=new b2Jacobian();var tMat;var tX;var tY;tMat=this.m_body1.m_R;tX=(def.anchorPoint.x-this.m_body1.m_position.x);tY=(def.anchorPoint.y-this.m_body1.m_position.y);this.m_localAnchor1.Set((tX*tMat.col1.x+tY*tMat.col1.y),(tX*tMat.col2.x+tY*tMat.col2.y));tMat=this.m_body2.m_R;tX=(def.anchorPoint.x-this.m_body2.m_position.x);tY=(def.anchorPoint.y-this.m_body2.m_position.y);this.m_localAnchor2.Set((tX*tMat.col1.x+tY*tMat.col1.y),(tX*tMat.col2.x+tY*tMat.col2.y));tMat=this.m_body1.m_R;tX=def.axis.x;tY=def.axis.y;this.m_localXAxis1.Set((tX*tMat.col1.x+tY*tMat.col1.y),(tX*tMat.col2.x+tY*tMat.col2.y));this.m_localYAxis1.x=-this.m_localXAxis1.y;this.m_localYAxis1.y=this.m_localXAxis1.x;this.m_initialAngle=this.m_body2.m_rotation-this.m_body1.m_rotation;this.m_linearJacobian.SetZero();this.m_linearMass=0.0;this.m_linearImpulse=0.0;this.m_angularMass=0.0;this.m_angularImpulse=0.0;this.m_motorJacobian.SetZero();this.m_motorMass=0.0;this.m_motorImpulse=0.0;this.m_limitImpulse=0.0;this.m_limitPositionImpulse=0.0;this.m_lowerTranslation=def.lowerTranslation;this.m_upperTranslation=def.upperTranslation;this.m_maxMotorForce=def.motorForce;this.m_motorSpeed=def.motorSpeed;this.m_enableLimit=def.enableLimit;this.m_enableMotor=def.enableMotor;},PrepareVelocitySolver:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var invMass1=b1.m_invMass;var invMass2=b2.m_invMass;var invI1=b1.m_invI;var invI2=b2.m_invI;tMat=b1.m_R;var ay1X=tMat.col1.x*this.m_localYAxis1.x+tMat.col2.x*this.m_localYAxis1.y;var ay1Y=tMat.col1.y*this.m_localYAxis1.x+tMat.col2.y*this.m_localYAxis1.y;var eX=b2.m_position.x+r2X-b1.m_position.x;var eY=b2.m_position.y+r2Y-b1.m_position.y;this.m_linearJacobian.linear1.x=-ay1X;this.m_linearJacobian.linear1.y=-ay1Y;this.m_linearJacobian.linear2.x=ay1X;this.m_linearJacobian.linear2.y=ay1Y;this.m_linearJacobian.angular1=-(eX*ay1Y-eY*ay1X);this.m_linearJacobian.angular2=r2X*ay1Y-r2Y*ay1X;this.m_linearMass=invMass1+invI1*this.m_linearJacobian.angular1*this.m_linearJacobian.angular1+
invMass2+invI2*this.m_linearJacobian.angular2*this.m_linearJacobian.angular2;this.m_linearMass=1.0/this.m_linearMass;this.m_angularMass=1.0/(invI1+invI2);if(this.m_enableLimit||this.m_enableMotor)
{tMat=b1.m_R;var ax1X=tMat.col1.x*this.m_localXAxis1.x+tMat.col2.x*this.m_localXAxis1.y;var ax1Y=tMat.col1.y*this.m_localXAxis1.x+tMat.col2.y*this.m_localXAxis1.y;this.m_motorJacobian.linear1.x=-ax1X;this.m_motorJacobian.linear1.y=-ax1Y;this.m_motorJacobian.linear2.x=ax1X;this.m_motorJacobian.linear2.y=ax1Y;this.m_motorJacobian.angular1=-(eX*ax1Y-eY*ax1X);this.m_motorJacobian.angular2=r2X*ax1Y-r2Y*ax1X;this.m_motorMass=invMass1+invI1*this.m_motorJacobian.angular1*this.m_motorJacobian.angular1+
invMass2+invI2*this.m_motorJacobian.angular2*this.m_motorJacobian.angular2;this.m_motorMass=1.0/this.m_motorMass;if(this.m_enableLimit)
{var dX=eX-r1X;var dY=eY-r1Y;var jointTranslation=ax1X*dX+ax1Y*dY;if(b2Math.b2Abs(this.m_upperTranslation-this.m_lowerTranslation)<2.0*b2Settings.b2_linearSlop)
{this.m_limitState=b2Joint.e_equalLimits;}
else if(jointTranslation<=this.m_lowerTranslation)
{if(this.m_limitState!=b2Joint.e_atLowerLimit)
{this.m_limitImpulse=0.0;}
this.m_limitState=b2Joint.e_atLowerLimit;}
else if(jointTranslation>=this.m_upperTranslation)
{if(this.m_limitState!=b2Joint.e_atUpperLimit)
{this.m_limitImpulse=0.0;}
this.m_limitState=b2Joint.e_atUpperLimit;}
else
{this.m_limitState=b2Joint.e_inactiveLimit;this.m_limitImpulse=0.0;}}}
if(this.m_enableMotor==false)
{this.m_motorImpulse=0.0;}
if(this.m_enableLimit==false)
{this.m_limitImpulse=0.0;}
if(b2World.s_enableWarmStarting)
{var P1X=this.m_linearImpulse*this.m_linearJacobian.linear1.x+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.linear1.x;var P1Y=this.m_linearImpulse*this.m_linearJacobian.linear1.y+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.linear1.y;var P2X=this.m_linearImpulse*this.m_linearJacobian.linear2.x+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.linear2.x;var P2Y=this.m_linearImpulse*this.m_linearJacobian.linear2.y+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.linear2.y;var L1=this.m_linearImpulse*this.m_linearJacobian.angular1-this.m_angularImpulse+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.angular1;var L2=this.m_linearImpulse*this.m_linearJacobian.angular2+this.m_angularImpulse+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.angular2;b1.m_linearVelocity.x+=invMass1*P1X;b1.m_linearVelocity.y+=invMass1*P1Y;b1.m_angularVelocity+=invI1*L1;b2.m_linearVelocity.x+=invMass2*P2X;b2.m_linearVelocity.y+=invMass2*P2Y;b2.m_angularVelocity+=invI2*L2;}
else
{this.m_linearImpulse=0.0;this.m_angularImpulse=0.0;this.m_limitImpulse=0.0;this.m_motorImpulse=0.0;}
this.m_limitPositionImpulse=0.0;},SolveVelocityConstraints:function(step){var b1=this.m_body1;var b2=this.m_body2;var invMass1=b1.m_invMass;var invMass2=b2.m_invMass;var invI1=b1.m_invI;var invI2=b2.m_invI;var oldLimitImpulse;var linearCdot=this.m_linearJacobian.Compute(b1.m_linearVelocity,b1.m_angularVelocity,b2.m_linearVelocity,b2.m_angularVelocity);var linearImpulse=-this.m_linearMass*linearCdot;this.m_linearImpulse+=linearImpulse;b1.m_linearVelocity.x+=(invMass1*linearImpulse)*this.m_linearJacobian.linear1.x;b1.m_linearVelocity.y+=(invMass1*linearImpulse)*this.m_linearJacobian.linear1.y;b1.m_angularVelocity+=invI1*linearImpulse*this.m_linearJacobian.angular1;b2.m_linearVelocity.x+=(invMass2*linearImpulse)*this.m_linearJacobian.linear2.x;b2.m_linearVelocity.y+=(invMass2*linearImpulse)*this.m_linearJacobian.linear2.y;b2.m_angularVelocity+=invI2*linearImpulse*this.m_linearJacobian.angular2;var angularCdot=b2.m_angularVelocity-b1.m_angularVelocity;var angularImpulse=-this.m_angularMass*angularCdot;this.m_angularImpulse+=angularImpulse;b1.m_angularVelocity-=invI1*angularImpulse;b2.m_angularVelocity+=invI2*angularImpulse;if(this.m_enableMotor&&this.m_limitState!=b2Joint.e_equalLimits)
{var motorCdot=this.m_motorJacobian.Compute(b1.m_linearVelocity,b1.m_angularVelocity,b2.m_linearVelocity,b2.m_angularVelocity)-this.m_motorSpeed;var motorImpulse=-this.m_motorMass*motorCdot;var oldMotorImpulse=this.m_motorImpulse;this.m_motorImpulse=b2Math.b2Clamp(this.m_motorImpulse+motorImpulse,-step.dt*this.m_maxMotorForce,step.dt*this.m_maxMotorForce);motorImpulse=this.m_motorImpulse-oldMotorImpulse;b1.m_linearVelocity.x+=(invMass1*motorImpulse)*this.m_motorJacobian.linear1.x;b1.m_linearVelocity.y+=(invMass1*motorImpulse)*this.m_motorJacobian.linear1.y;b1.m_angularVelocity+=invI1*motorImpulse*this.m_motorJacobian.angular1;b2.m_linearVelocity.x+=(invMass2*motorImpulse)*this.m_motorJacobian.linear2.x;b2.m_linearVelocity.y+=(invMass2*motorImpulse)*this.m_motorJacobian.linear2.y;b2.m_angularVelocity+=invI2*motorImpulse*this.m_motorJacobian.angular2;}
if(this.m_enableLimit&&this.m_limitState!=b2Joint.e_inactiveLimit)
{var limitCdot=this.m_motorJacobian.Compute(b1.m_linearVelocity,b1.m_angularVelocity,b2.m_linearVelocity,b2.m_angularVelocity);var limitImpulse=-this.m_motorMass*limitCdot;if(this.m_limitState==b2Joint.e_equalLimits)
{this.m_limitImpulse+=limitImpulse;}
else if(this.m_limitState==b2Joint.e_atLowerLimit)
{oldLimitImpulse=this.m_limitImpulse;this.m_limitImpulse=b2Math.b2Max(this.m_limitImpulse+limitImpulse,0.0);limitImpulse=this.m_limitImpulse-oldLimitImpulse;}
else if(this.m_limitState==b2Joint.e_atUpperLimit)
{oldLimitImpulse=this.m_limitImpulse;this.m_limitImpulse=b2Math.b2Min(this.m_limitImpulse+limitImpulse,0.0);limitImpulse=this.m_limitImpulse-oldLimitImpulse;}
b1.m_linearVelocity.x+=(invMass1*limitImpulse)*this.m_motorJacobian.linear1.x;b1.m_linearVelocity.y+=(invMass1*limitImpulse)*this.m_motorJacobian.linear1.y;b1.m_angularVelocity+=invI1*limitImpulse*this.m_motorJacobian.angular1;b2.m_linearVelocity.x+=(invMass2*limitImpulse)*this.m_motorJacobian.linear2.x;b2.m_linearVelocity.y+=(invMass2*limitImpulse)*this.m_motorJacobian.linear2.y;b2.m_angularVelocity+=invI2*limitImpulse*this.m_motorJacobian.angular2;}},SolvePositionConstraints:function(){var limitC;var oldLimitImpulse;var b1=this.m_body1;var b2=this.m_body2;var invMass1=b1.m_invMass;var invMass2=b2.m_invMass;var invI1=b1.m_invI;var invI2=b2.m_invI;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var p1X=b1.m_position.x+r1X;var p1Y=b1.m_position.y+r1Y;var p2X=b2.m_position.x+r2X;var p2Y=b2.m_position.y+r2Y;var dX=p2X-p1X;var dY=p2Y-p1Y;tMat=b1.m_R;var ay1X=tMat.col1.x*this.m_localYAxis1.x+tMat.col2.x*this.m_localYAxis1.y;var ay1Y=tMat.col1.y*this.m_localYAxis1.x+tMat.col2.y*this.m_localYAxis1.y;var linearC=ay1X*dX+ay1Y*dY;linearC=b2Math.b2Clamp(linearC,-b2Settings.b2_maxLinearCorrection,b2Settings.b2_maxLinearCorrection);var linearImpulse=-this.m_linearMass*linearC;b1.m_position.x+=(invMass1*linearImpulse)*this.m_linearJacobian.linear1.x;b1.m_position.y+=(invMass1*linearImpulse)*this.m_linearJacobian.linear1.y;b1.m_rotation+=invI1*linearImpulse*this.m_linearJacobian.angular1;b2.m_position.x+=(invMass2*linearImpulse)*this.m_linearJacobian.linear2.x;b2.m_position.y+=(invMass2*linearImpulse)*this.m_linearJacobian.linear2.y;b2.m_rotation+=invI2*linearImpulse*this.m_linearJacobian.angular2;var positionError=b2Math.b2Abs(linearC);var angularC=b2.m_rotation-b1.m_rotation-this.m_initialAngle;angularC=b2Math.b2Clamp(angularC,-b2Settings.b2_maxAngularCorrection,b2Settings.b2_maxAngularCorrection);var angularImpulse=-this.m_angularMass*angularC;b1.m_rotation-=b1.m_invI*angularImpulse;b1.m_R.Set(b1.m_rotation);b2.m_rotation+=b2.m_invI*angularImpulse;b2.m_R.Set(b2.m_rotation);var angularError=b2Math.b2Abs(angularC);if(this.m_enableLimit&&this.m_limitState!=b2Joint.e_inactiveLimit)
{tMat=b1.m_R;r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;p1X=b1.m_position.x+r1X;p1Y=b1.m_position.y+r1Y;p2X=b2.m_position.x+r2X;p2Y=b2.m_position.y+r2Y;dX=p2X-p1X;dY=p2Y-p1Y;tMat=b1.m_R;var ax1X=tMat.col1.x*this.m_localXAxis1.x+tMat.col2.x*this.m_localXAxis1.y;var ax1Y=tMat.col1.y*this.m_localXAxis1.x+tMat.col2.y*this.m_localXAxis1.y;var translation=(ax1X*dX+ax1Y*dY);var limitImpulse=0.0;if(this.m_limitState==b2Joint.e_equalLimits)
{limitC=b2Math.b2Clamp(translation,-b2Settings.b2_maxLinearCorrection,b2Settings.b2_maxLinearCorrection);limitImpulse=-this.m_motorMass*limitC;positionError=b2Math.b2Max(positionError,b2Math.b2Abs(angularC));}
else if(this.m_limitState==b2Joint.e_atLowerLimit)
{limitC=translation-this.m_lowerTranslation;positionError=b2Math.b2Max(positionError,-limitC);limitC=b2Math.b2Clamp(limitC+b2Settings.b2_linearSlop,-b2Settings.b2_maxLinearCorrection,0.0);limitImpulse=-this.m_motorMass*limitC;oldLimitImpulse=this.m_limitPositionImpulse;this.m_limitPositionImpulse=b2Math.b2Max(this.m_limitPositionImpulse+limitImpulse,0.0);limitImpulse=this.m_limitPositionImpulse-oldLimitImpulse;}
else if(this.m_limitState==b2Joint.e_atUpperLimit)
{limitC=translation-this.m_upperTranslation;positionError=b2Math.b2Max(positionError,limitC);limitC=b2Math.b2Clamp(limitC-b2Settings.b2_linearSlop,0.0,b2Settings.b2_maxLinearCorrection);limitImpulse=-this.m_motorMass*limitC;oldLimitImpulse=this.m_limitPositionImpulse;this.m_limitPositionImpulse=b2Math.b2Min(this.m_limitPositionImpulse+limitImpulse,0.0);limitImpulse=this.m_limitPositionImpulse-oldLimitImpulse;}
b1.m_position.x+=(invMass1*limitImpulse)*this.m_motorJacobian.linear1.x;b1.m_position.y+=(invMass1*limitImpulse)*this.m_motorJacobian.linear1.y;b1.m_rotation+=invI1*limitImpulse*this.m_motorJacobian.angular1;b1.m_R.Set(b1.m_rotation);b2.m_position.x+=(invMass2*limitImpulse)*this.m_motorJacobian.linear2.x;b2.m_position.y+=(invMass2*limitImpulse)*this.m_motorJacobian.linear2.y;b2.m_rotation+=invI2*limitImpulse*this.m_motorJacobian.angular2;b2.m_R.Set(b2.m_rotation);}
return positionError<=b2Settings.b2_linearSlop&&angularError<=b2Settings.b2_angularSlop;},m_localAnchor1:new b2Vec2(),m_localAnchor2:new b2Vec2(),m_localXAxis1:new b2Vec2(),m_localYAxis1:new b2Vec2(),m_initialAngle:null,m_linearJacobian:new b2Jacobian(),m_linearMass:null,m_linearImpulse:null,m_angularMass:null,m_angularImpulse:null,m_motorJacobian:new b2Jacobian(),m_motorMass:null,m_motorImpulse:null,m_limitImpulse:null,m_limitPositionImpulse:null,m_lowerTranslation:null,m_upperTranslation:null,m_maxMotorForce:null,m_motorSpeed:null,m_enableLimit:null,m_enableMotor:null,m_limitState:0});
var b2PrismaticJointDef=Class.create();Object.extend(b2PrismaticJointDef.prototype,b2JointDef.prototype);Object.extend(b2PrismaticJointDef.prototype,{initialize:function()
{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;this.type=b2Joint.e_prismaticJoint;this.anchorPoint=new b2Vec2(0.0,0.0);this.axis=new b2Vec2(0.0,0.0);this.lowerTranslation=0.0;this.upperTranslation=0.0;this.motorForce=0.0;this.motorSpeed=0.0;this.enableLimit=false;this.enableMotor=false;},anchorPoint:null,axis:null,lowerTranslation:null,upperTranslation:null,motorForce:null,motorSpeed:null,enableLimit:null,enableMotor:null});
var b2PulleyJoint=Class.create();Object.extend(b2PulleyJoint.prototype,b2Joint.prototype);Object.extend(b2PulleyJoint.prototype,{GetAnchor1:function(){var tMat=this.m_body1.m_R;return new b2Vec2(this.m_body1.m_position.x+(tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y),this.m_body1.m_position.y+(tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y));},GetAnchor2:function(){var tMat=this.m_body2.m_R;return new b2Vec2(this.m_body2.m_position.x+(tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y),this.m_body2.m_position.y+(tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y));},GetGroundPoint1:function(){return new b2Vec2(this.m_ground.m_position.x+this.m_groundAnchor1.x,this.m_ground.m_position.y+this.m_groundAnchor1.y);},GetGroundPoint2:function(){return new b2Vec2(this.m_ground.m_position.x+this.m_groundAnchor2.x,this.m_ground.m_position.y+this.m_groundAnchor2.y);},GetReactionForce:function(invTimeStep){return new b2Vec2();},GetReactionTorque:function(invTimeStep){return 0.0;},GetLength1:function(){var tMat;tMat=this.m_body1.m_R;var pX=this.m_body1.m_position.x+(tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y);var pY=this.m_body1.m_position.y+(tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y);var dX=pX-(this.m_ground.m_position.x+this.m_groundAnchor1.x);var dY=pY-(this.m_ground.m_position.y+this.m_groundAnchor1.y);return Math.sqrt(dX*dX+dY*dY);},GetLength2:function(){var tMat;tMat=this.m_body2.m_R;var pX=this.m_body2.m_position.x+(tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y);var pY=this.m_body2.m_position.y+(tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y);var dX=pX-(this.m_ground.m_position.x+this.m_groundAnchor2.x);var dY=pY-(this.m_ground.m_position.y+this.m_groundAnchor2.y);return Math.sqrt(dX*dX+dY*dY);},GetRatio:function(){return this.m_ratio;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.m_groundAnchor1=new b2Vec2();this.m_groundAnchor2=new b2Vec2();this.m_localAnchor1=new b2Vec2();this.m_localAnchor2=new b2Vec2();this.m_u1=new b2Vec2();this.m_u2=new b2Vec2();var tMat;var tX;var tY;this.m_ground=this.m_body1.m_world.m_groundBody;this.m_groundAnchor1.x=def.groundPoint1.x-this.m_ground.m_position.x;this.m_groundAnchor1.y=def.groundPoint1.y-this.m_ground.m_position.y;this.m_groundAnchor2.x=def.groundPoint2.x-this.m_ground.m_position.x;this.m_groundAnchor2.y=def.groundPoint2.y-this.m_ground.m_position.y;tMat=this.m_body1.m_R;tX=def.anchorPoint1.x-this.m_body1.m_position.x;tY=def.anchorPoint1.y-this.m_body1.m_position.y;this.m_localAnchor1.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor1.y=tX*tMat.col2.x+tY*tMat.col2.y;tMat=this.m_body2.m_R;tX=def.anchorPoint2.x-this.m_body2.m_position.x;tY=def.anchorPoint2.y-this.m_body2.m_position.y;this.m_localAnchor2.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor2.y=tX*tMat.col2.x+tY*tMat.col2.y;this.m_ratio=def.ratio;tX=def.groundPoint1.x-def.anchorPoint1.x;tY=def.groundPoint1.y-def.anchorPoint1.y;var d1Len=Math.sqrt(tX*tX+tY*tY);tX=def.groundPoint2.x-def.anchorPoint2.x;tY=def.groundPoint2.y-def.anchorPoint2.y;var d2Len=Math.sqrt(tX*tX+tY*tY);var length1=b2Math.b2Max(0.5*b2PulleyJoint.b2_minPulleyLength,d1Len);var length2=b2Math.b2Max(0.5*b2PulleyJoint.b2_minPulleyLength,d2Len);this.m_constant=length1+this.m_ratio*length2;this.m_maxLength1=b2Math.b2Clamp(def.maxLength1,length1,this.m_constant-this.m_ratio*b2PulleyJoint.b2_minPulleyLength);this.m_maxLength2=b2Math.b2Clamp(def.maxLength2,length2,(this.m_constant-b2PulleyJoint.b2_minPulleyLength)/this.m_ratio);this.m_pulleyImpulse=0.0;this.m_limitImpulse1=0.0;this.m_limitImpulse2=0.0;},PrepareVelocitySolver:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var p1X=b1.m_position.x+r1X;var p1Y=b1.m_position.y+r1Y;var p2X=b2.m_position.x+r2X;var p2Y=b2.m_position.y+r2Y;var s1X=this.m_ground.m_position.x+this.m_groundAnchor1.x;var s1Y=this.m_ground.m_position.y+this.m_groundAnchor1.y;var s2X=this.m_ground.m_position.x+this.m_groundAnchor2.x;var s2Y=this.m_ground.m_position.y+this.m_groundAnchor2.y;this.m_u1.Set(p1X-s1X,p1Y-s1Y);this.m_u2.Set(p2X-s2X,p2Y-s2Y);var length1=this.m_u1.Length();var length2=this.m_u2.Length();if(length1>b2Settings.b2_linearSlop)
{this.m_u1.Multiply(1.0/length1);}
else
{this.m_u1.SetZero();}
if(length2>b2Settings.b2_linearSlop)
{this.m_u2.Multiply(1.0/length2);}
else
{this.m_u2.SetZero();}
if(length1<this.m_maxLength1)
{this.m_limitState1=b2Joint.e_inactiveLimit;this.m_limitImpulse1=0.0;}
else
{this.m_limitState1=b2Joint.e_atUpperLimit;this.m_limitPositionImpulse1=0.0;}
if(length2<this.m_maxLength2)
{this.m_limitState2=b2Joint.e_inactiveLimit;this.m_limitImpulse2=0.0;}
else
{this.m_limitState2=b2Joint.e_atUpperLimit;this.m_limitPositionImpulse2=0.0;}
var cr1u1=r1X*this.m_u1.y-r1Y*this.m_u1.x;var cr2u2=r2X*this.m_u2.y-r2Y*this.m_u2.x;this.m_limitMass1=b1.m_invMass+b1.m_invI*cr1u1*cr1u1;this.m_limitMass2=b2.m_invMass+b2.m_invI*cr2u2*cr2u2;this.m_pulleyMass=this.m_limitMass1+this.m_ratio*this.m_ratio*this.m_limitMass2;this.m_limitMass1=1.0/this.m_limitMass1;this.m_limitMass2=1.0/this.m_limitMass2;this.m_pulleyMass=1.0/this.m_pulleyMass;var P1X=(-this.m_pulleyImpulse-this.m_limitImpulse1)*this.m_u1.x;var P1Y=(-this.m_pulleyImpulse-this.m_limitImpulse1)*this.m_u1.y;var P2X=(-this.m_ratio*this.m_pulleyImpulse-this.m_limitImpulse2)*this.m_u2.x;var P2Y=(-this.m_ratio*this.m_pulleyImpulse-this.m_limitImpulse2)*this.m_u2.y;b1.m_linearVelocity.x+=b1.m_invMass*P1X;b1.m_linearVelocity.y+=b1.m_invMass*P1Y;b1.m_angularVelocity+=b1.m_invI*(r1X*P1Y-r1Y*P1X);b2.m_linearVelocity.x+=b2.m_invMass*P2X;b2.m_linearVelocity.y+=b2.m_invMass*P2Y;b2.m_angularVelocity+=b2.m_invI*(r2X*P2Y-r2Y*P2X);},SolveVelocityConstraints:function(step){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var v1X;var v1Y;var v2X;var v2Y;var P1X;var P1Y;var P2X;var P2Y;var Cdot;var impulse;var oldLimitImpulse;v1X=b1.m_linearVelocity.x+(-b1.m_angularVelocity*r1Y);v1Y=b1.m_linearVelocity.y+(b1.m_angularVelocity*r1X);v2X=b2.m_linearVelocity.x+(-b2.m_angularVelocity*r2Y);v2Y=b2.m_linearVelocity.y+(b2.m_angularVelocity*r2X);Cdot=-(this.m_u1.x*v1X+this.m_u1.y*v1Y)-this.m_ratio*(this.m_u2.x*v2X+this.m_u2.y*v2Y);impulse=-this.m_pulleyMass*Cdot;this.m_pulleyImpulse+=impulse;P1X=-impulse*this.m_u1.x;P1Y=-impulse*this.m_u1.y;P2X=-this.m_ratio*impulse*this.m_u2.x;P2Y=-this.m_ratio*impulse*this.m_u2.y;b1.m_linearVelocity.x+=b1.m_invMass*P1X;b1.m_linearVelocity.y+=b1.m_invMass*P1Y;b1.m_angularVelocity+=b1.m_invI*(r1X*P1Y-r1Y*P1X);b2.m_linearVelocity.x+=b2.m_invMass*P2X;b2.m_linearVelocity.y+=b2.m_invMass*P2Y;b2.m_angularVelocity+=b2.m_invI*(r2X*P2Y-r2Y*P2X);if(this.m_limitState1==b2Joint.e_atUpperLimit)
{v1X=b1.m_linearVelocity.x+(-b1.m_angularVelocity*r1Y);v1Y=b1.m_linearVelocity.y+(b1.m_angularVelocity*r1X);Cdot=-(this.m_u1.x*v1X+this.m_u1.y*v1Y);impulse=-this.m_limitMass1*Cdot;oldLimitImpulse=this.m_limitImpulse1;this.m_limitImpulse1=b2Math.b2Max(0.0,this.m_limitImpulse1+impulse);impulse=this.m_limitImpulse1-oldLimitImpulse;P1X=-impulse*this.m_u1.x;P1Y=-impulse*this.m_u1.y;b1.m_linearVelocity.x+=b1.m_invMass*P1X;b1.m_linearVelocity.y+=b1.m_invMass*P1Y;b1.m_angularVelocity+=b1.m_invI*(r1X*P1Y-r1Y*P1X);}
if(this.m_limitState2==b2Joint.e_atUpperLimit)
{v2X=b2.m_linearVelocity.x+(-b2.m_angularVelocity*r2Y);v2Y=b2.m_linearVelocity.y+(b2.m_angularVelocity*r2X);Cdot=-(this.m_u2.x*v2X+this.m_u2.y*v2Y);impulse=-this.m_limitMass2*Cdot;oldLimitImpulse=this.m_limitImpulse2;this.m_limitImpulse2=b2Math.b2Max(0.0,this.m_limitImpulse2+impulse);impulse=this.m_limitImpulse2-oldLimitImpulse;P2X=-impulse*this.m_u2.x;P2Y=-impulse*this.m_u2.y;b2.m_linearVelocity.x+=b2.m_invMass*P2X;b2.m_linearVelocity.y+=b2.m_invMass*P2Y;b2.m_angularVelocity+=b2.m_invI*(r2X*P2Y-r2Y*P2X);}},SolvePositionConstraints:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;var s1X=this.m_ground.m_position.x+this.m_groundAnchor1.x;var s1Y=this.m_ground.m_position.y+this.m_groundAnchor1.y;var s2X=this.m_ground.m_position.x+this.m_groundAnchor2.x;var s2Y=this.m_ground.m_position.y+this.m_groundAnchor2.y;var r1X;var r1Y;var r2X;var r2Y;var p1X;var p1Y;var p2X;var p2Y;var length1;var length2;var C;var impulse;var oldLimitPositionImpulse;var linearError=0.0;{tMat=b1.m_R;r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;p1X=b1.m_position.x+r1X;p1Y=b1.m_position.y+r1Y;p2X=b2.m_position.x+r2X;p2Y=b2.m_position.y+r2Y;this.m_u1.Set(p1X-s1X,p1Y-s1Y);this.m_u2.Set(p2X-s2X,p2Y-s2Y);length1=this.m_u1.Length();length2=this.m_u2.Length();if(length1>b2Settings.b2_linearSlop)
{this.m_u1.Multiply(1.0/length1);}
else
{this.m_u1.SetZero();}
if(length2>b2Settings.b2_linearSlop)
{this.m_u2.Multiply(1.0/length2);}
else
{this.m_u2.SetZero();}
C=this.m_constant-length1-this.m_ratio*length2;linearError=b2Math.b2Max(linearError,Math.abs(C));C=b2Math.b2Clamp(C,-b2Settings.b2_maxLinearCorrection,b2Settings.b2_maxLinearCorrection);impulse=-this.m_pulleyMass*C;p1X=-impulse*this.m_u1.x;p1Y=-impulse*this.m_u1.y;p2X=-this.m_ratio*impulse*this.m_u2.x;p2Y=-this.m_ratio*impulse*this.m_u2.y;b1.m_position.x+=b1.m_invMass*p1X;b1.m_position.y+=b1.m_invMass*p1Y;b1.m_rotation+=b1.m_invI*(r1X*p1Y-r1Y*p1X);b2.m_position.x+=b2.m_invMass*p2X;b2.m_position.y+=b2.m_invMass*p2Y;b2.m_rotation+=b2.m_invI*(r2X*p2Y-r2Y*p2X);b1.m_R.Set(b1.m_rotation);b2.m_R.Set(b2.m_rotation);}
if(this.m_limitState1==b2Joint.e_atUpperLimit)
{tMat=b1.m_R;r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;p1X=b1.m_position.x+r1X;p1Y=b1.m_position.y+r1Y;this.m_u1.Set(p1X-s1X,p1Y-s1Y);length1=this.m_u1.Length();if(length1>b2Settings.b2_linearSlop)
{this.m_u1.x*=1.0/length1;this.m_u1.y*=1.0/length1;}
else
{this.m_u1.SetZero();}
C=this.m_maxLength1-length1;linearError=b2Math.b2Max(linearError,-C);C=b2Math.b2Clamp(C+b2Settings.b2_linearSlop,-b2Settings.b2_maxLinearCorrection,0.0);impulse=-this.m_limitMass1*C;oldLimitPositionImpulse=this.m_limitPositionImpulse1;this.m_limitPositionImpulse1=b2Math.b2Max(0.0,this.m_limitPositionImpulse1+impulse);impulse=this.m_limitPositionImpulse1-oldLimitPositionImpulse;p1X=-impulse*this.m_u1.x;p1Y=-impulse*this.m_u1.y;b1.m_position.x+=b1.m_invMass*p1X;b1.m_position.y+=b1.m_invMass*p1Y;b1.m_rotation+=b1.m_invI*(r1X*p1Y-r1Y*p1X);b1.m_R.Set(b1.m_rotation);}
if(this.m_limitState2==b2Joint.e_atUpperLimit)
{tMat=b2.m_R;r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;p2X=b2.m_position.x+r2X;p2Y=b2.m_position.y+r2Y;this.m_u2.Set(p2X-s2X,p2Y-s2Y);length2=this.m_u2.Length();if(length2>b2Settings.b2_linearSlop)
{this.m_u2.x*=1.0/length2;this.m_u2.y*=1.0/length2;}
else
{this.m_u2.SetZero();}
C=this.m_maxLength2-length2;linearError=b2Math.b2Max(linearError,-C);C=b2Math.b2Clamp(C+b2Settings.b2_linearSlop,-b2Settings.b2_maxLinearCorrection,0.0);impulse=-this.m_limitMass2*C;oldLimitPositionImpulse=this.m_limitPositionImpulse2;this.m_limitPositionImpulse2=b2Math.b2Max(0.0,this.m_limitPositionImpulse2+impulse);impulse=this.m_limitPositionImpulse2-oldLimitPositionImpulse;p2X=-impulse*this.m_u2.x;p2Y=-impulse*this.m_u2.y;b2.m_position.x+=b2.m_invMass*p2X;b2.m_position.y+=b2.m_invMass*p2Y;b2.m_rotation+=b2.m_invI*(r2X*p2Y-r2Y*p2X);b2.m_R.Set(b2.m_rotation);}
return linearError<b2Settings.b2_linearSlop;},m_ground:null,m_groundAnchor1:new b2Vec2(),m_groundAnchor2:new b2Vec2(),m_localAnchor1:new b2Vec2(),m_localAnchor2:new b2Vec2(),m_u1:new b2Vec2(),m_u2:new b2Vec2(),m_constant:null,m_ratio:null,m_maxLength1:null,m_maxLength2:null,m_pulleyMass:null,m_limitMass1:null,m_limitMass2:null,m_pulleyImpulse:null,m_limitImpulse1:null,m_limitImpulse2:null,m_limitPositionImpulse1:null,m_limitPositionImpulse2:null,m_limitState1:0,m_limitState2:0});b2PulleyJoint.b2_minPulleyLength=b2Settings.b2_lengthUnitsPerMeter;
var b2PulleyJointDef=Class.create();Object.extend(b2PulleyJointDef.prototype,b2JointDef.prototype);Object.extend(b2PulleyJointDef.prototype,{initialize:function()
{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;this.groundPoint1=new b2Vec2();this.groundPoint2=new b2Vec2();this.anchorPoint1=new b2Vec2();this.anchorPoint2=new b2Vec2();this.type=b2Joint.e_pulleyJoint;this.groundPoint1.Set(-1.0,1.0);this.groundPoint2.Set(1.0,1.0);this.anchorPoint1.Set(-1.0,0.0);this.anchorPoint2.Set(1.0,0.0);this.maxLength1=0.5*b2PulleyJoint.b2_minPulleyLength;this.maxLength2=0.5*b2PulleyJoint.b2_minPulleyLength;this.ratio=1.0;this.collideConnected=true;},groundPoint1:new b2Vec2(),groundPoint2:new b2Vec2(),anchorPoint1:new b2Vec2(),anchorPoint2:new b2Vec2(),maxLength1:null,maxLength2:null,ratio:null});
var b2RevoluteJoint=Class.create();Object.extend(b2RevoluteJoint.prototype,b2Joint.prototype);Object.extend(b2RevoluteJoint.prototype,{GetAnchor1:function(){var tMat=this.m_body1.m_R;return new b2Vec2(this.m_body1.m_position.x+(tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y),this.m_body1.m_position.y+(tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y));},GetAnchor2:function(){var tMat=this.m_body2.m_R;return new b2Vec2(this.m_body2.m_position.x+(tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y),this.m_body2.m_position.y+(tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y));},GetJointAngle:function(){return this.m_body2.m_rotation-this.m_body1.m_rotation;},GetJointSpeed:function(){return this.m_body2.m_angularVelocity-this.m_body1.m_angularVelocity;},GetMotorTorque:function(invTimeStep){return invTimeStep*this.m_motorImpulse;},SetMotorSpeed:function(speed)
{this.m_motorSpeed=speed;},SetMotorTorque:function(torque)
{this.m_maxMotorTorque=torque;},GetReactionForce:function(invTimeStep)
{var tVec=this.m_ptpImpulse.Copy();tVec.Multiply(invTimeStep);return tVec;},GetReactionTorque:function(invTimeStep)
{return invTimeStep*this.m_limitImpulse;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.K=new b2Mat22();this.K1=new b2Mat22();this.K2=new b2Mat22();this.K3=new b2Mat22();this.m_localAnchor1=new b2Vec2();this.m_localAnchor2=new b2Vec2();this.m_ptpImpulse=new b2Vec2();this.m_ptpMass=new b2Mat22();var tMat;var tX;var tY;tMat=this.m_body1.m_R;tX=def.anchorPoint.x-this.m_body1.m_position.x;tY=def.anchorPoint.y-this.m_body1.m_position.y;this.m_localAnchor1.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor1.y=tX*tMat.col2.x+tY*tMat.col2.y;tMat=this.m_body2.m_R;tX=def.anchorPoint.x-this.m_body2.m_position.x;tY=def.anchorPoint.y-this.m_body2.m_position.y;this.m_localAnchor2.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor2.y=tX*tMat.col2.x+tY*tMat.col2.y;this.m_intialAngle=this.m_body2.m_rotation-this.m_body1.m_rotation;this.m_ptpImpulse.Set(0.0,0.0);this.m_motorImpulse=0.0;this.m_limitImpulse=0.0;this.m_limitPositionImpulse=0.0;this.m_lowerAngle=def.lowerAngle;this.m_upperAngle=def.upperAngle;this.m_maxMotorTorque=def.motorTorque;this.m_motorSpeed=def.motorSpeed;this.m_enableLimit=def.enableLimit;this.m_enableMotor=def.enableMotor;},K:new b2Mat22(),K1:new b2Mat22(),K2:new b2Mat22(),K3:new b2Mat22(),PrepareVelocitySolver:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var invMass1=b1.m_invMass;var invMass2=b2.m_invMass;var invI1=b1.m_invI;var invI2=b2.m_invI;this.K1.col1.x=invMass1+invMass2;this.K1.col2.x=0.0;this.K1.col1.y=0.0;this.K1.col2.y=invMass1+invMass2;this.K2.col1.x=invI1*r1Y*r1Y;this.K2.col2.x=-invI1*r1X*r1Y;this.K2.col1.y=-invI1*r1X*r1Y;this.K2.col2.y=invI1*r1X*r1X;this.K3.col1.x=invI2*r2Y*r2Y;this.K3.col2.x=-invI2*r2X*r2Y;this.K3.col1.y=-invI2*r2X*r2Y;this.K3.col2.y=invI2*r2X*r2X;this.K.SetM(this.K1);this.K.AddM(this.K2);this.K.AddM(this.K3);this.K.Invert(this.m_ptpMass);this.m_motorMass=1.0/(invI1+invI2);if(this.m_enableMotor==false)
{this.m_motorImpulse=0.0;}
if(this.m_enableLimit)
{var jointAngle=b2.m_rotation-b1.m_rotation-this.m_intialAngle;if(b2Math.b2Abs(this.m_upperAngle-this.m_lowerAngle)<2.0*b2Settings.b2_angularSlop)
{this.m_limitState=b2Joint.e_equalLimits;}
else if(jointAngle<=this.m_lowerAngle)
{if(this.m_limitState!=b2Joint.e_atLowerLimit)
{this.m_limitImpulse=0.0;}
this.m_limitState=b2Joint.e_atLowerLimit;}
else if(jointAngle>=this.m_upperAngle)
{if(this.m_limitState!=b2Joint.e_atUpperLimit)
{this.m_limitImpulse=0.0;}
this.m_limitState=b2Joint.e_atUpperLimit;}
else
{this.m_limitState=b2Joint.e_inactiveLimit;this.m_limitImpulse=0.0;}}
else
{this.m_limitImpulse=0.0;}
if(b2World.s_enableWarmStarting)
{b1.m_linearVelocity.x-=invMass1*this.m_ptpImpulse.x;b1.m_linearVelocity.y-=invMass1*this.m_ptpImpulse.y;b1.m_angularVelocity-=invI1*((r1X*this.m_ptpImpulse.y-r1Y*this.m_ptpImpulse.x)+this.m_motorImpulse+this.m_limitImpulse);b2.m_linearVelocity.x+=invMass2*this.m_ptpImpulse.x;b2.m_linearVelocity.y+=invMass2*this.m_ptpImpulse.y;b2.m_angularVelocity+=invI2*((r2X*this.m_ptpImpulse.y-r2Y*this.m_ptpImpulse.x)+this.m_motorImpulse+this.m_limitImpulse);}
else{this.m_ptpImpulse.SetZero();this.m_motorImpulse=0.0;this.m_limitImpulse=0.0;}
this.m_limitPositionImpulse=0.0;},SolveVelocityConstraints:function(step){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var oldLimitImpulse;var ptpCdotX=b2.m_linearVelocity.x+(-b2.m_angularVelocity*r2Y)-b1.m_linearVelocity.x-(-b1.m_angularVelocity*r1Y);var ptpCdotY=b2.m_linearVelocity.y+(b2.m_angularVelocity*r2X)-b1.m_linearVelocity.y-(b1.m_angularVelocity*r1X);var ptpImpulseX=-(this.m_ptpMass.col1.x*ptpCdotX+this.m_ptpMass.col2.x*ptpCdotY);var ptpImpulseY=-(this.m_ptpMass.col1.y*ptpCdotX+this.m_ptpMass.col2.y*ptpCdotY);this.m_ptpImpulse.x+=ptpImpulseX;this.m_ptpImpulse.y+=ptpImpulseY;b1.m_linearVelocity.x-=b1.m_invMass*ptpImpulseX;b1.m_linearVelocity.y-=b1.m_invMass*ptpImpulseY;b1.m_angularVelocity-=b1.m_invI*(r1X*ptpImpulseY-r1Y*ptpImpulseX);b2.m_linearVelocity.x+=b2.m_invMass*ptpImpulseX;b2.m_linearVelocity.y+=b2.m_invMass*ptpImpulseY;b2.m_angularVelocity+=b2.m_invI*(r2X*ptpImpulseY-r2Y*ptpImpulseX);if(this.m_enableMotor&&this.m_limitState!=b2Joint.e_equalLimits)
{var motorCdot=b2.m_angularVelocity-b1.m_angularVelocity-this.m_motorSpeed;var motorImpulse=-this.m_motorMass*motorCdot;var oldMotorImpulse=this.m_motorImpulse;this.m_motorImpulse=b2Math.b2Clamp(this.m_motorImpulse+motorImpulse,-step.dt*this.m_maxMotorTorque,step.dt*this.m_maxMotorTorque);motorImpulse=this.m_motorImpulse-oldMotorImpulse;b1.m_angularVelocity-=b1.m_invI*motorImpulse;b2.m_angularVelocity+=b2.m_invI*motorImpulse;}
if(this.m_enableLimit&&this.m_limitState!=b2Joint.e_inactiveLimit)
{var limitCdot=b2.m_angularVelocity-b1.m_angularVelocity;var limitImpulse=-this.m_motorMass*limitCdot;if(this.m_limitState==b2Joint.e_equalLimits)
{this.m_limitImpulse+=limitImpulse;}
else if(this.m_limitState==b2Joint.e_atLowerLimit)
{oldLimitImpulse=this.m_limitImpulse;this.m_limitImpulse=b2Math.b2Max(this.m_limitImpulse+limitImpulse,0.0);limitImpulse=this.m_limitImpulse-oldLimitImpulse;}
else if(this.m_limitState==b2Joint.e_atUpperLimit)
{oldLimitImpulse=this.m_limitImpulse;this.m_limitImpulse=b2Math.b2Min(this.m_limitImpulse+limitImpulse,0.0);limitImpulse=this.m_limitImpulse-oldLimitImpulse;}
b1.m_angularVelocity-=b1.m_invI*limitImpulse;b2.m_angularVelocity+=b2.m_invI*limitImpulse;}},SolvePositionConstraints:function(){var oldLimitImpulse;var limitC;var b1=this.m_body1;var b2=this.m_body2;var positionError=0.0;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var p1X=b1.m_position.x+r1X;var p1Y=b1.m_position.y+r1Y;var p2X=b2.m_position.x+r2X;var p2Y=b2.m_position.y+r2Y;var ptpCX=p2X-p1X;var ptpCY=p2Y-p1Y;positionError=Math.sqrt(ptpCX*ptpCX+ptpCY*ptpCY);var invMass1=b1.m_invMass;var invMass2=b2.m_invMass;var invI1=b1.m_invI;var invI2=b2.m_invI;this.K1.col1.x=invMass1+invMass2;this.K1.col2.x=0.0;this.K1.col1.y=0.0;this.K1.col2.y=invMass1+invMass2;this.K2.col1.x=invI1*r1Y*r1Y;this.K2.col2.x=-invI1*r1X*r1Y;this.K2.col1.y=-invI1*r1X*r1Y;this.K2.col2.y=invI1*r1X*r1X;this.K3.col1.x=invI2*r2Y*r2Y;this.K3.col2.x=-invI2*r2X*r2Y;this.K3.col1.y=-invI2*r2X*r2Y;this.K3.col2.y=invI2*r2X*r2X;this.K.SetM(this.K1);this.K.AddM(this.K2);this.K.AddM(this.K3);this.K.Solve(b2RevoluteJoint.tImpulse,-ptpCX,-ptpCY);var impulseX=b2RevoluteJoint.tImpulse.x;var impulseY=b2RevoluteJoint.tImpulse.y;b1.m_position.x-=b1.m_invMass*impulseX;b1.m_position.y-=b1.m_invMass*impulseY;b1.m_rotation-=b1.m_invI*(r1X*impulseY-r1Y*impulseX);b1.m_R.Set(b1.m_rotation);b2.m_position.x+=b2.m_invMass*impulseX;b2.m_position.y+=b2.m_invMass*impulseY;b2.m_rotation+=b2.m_invI*(r2X*impulseY-r2Y*impulseX);b2.m_R.Set(b2.m_rotation);var angularError=0.0;if(this.m_enableLimit&&this.m_limitState!=b2Joint.e_inactiveLimit)
{var angle=b2.m_rotation-b1.m_rotation-this.m_intialAngle;var limitImpulse=0.0;if(this.m_limitState==b2Joint.e_equalLimits)
{limitC=b2Math.b2Clamp(angle,-b2Settings.b2_maxAngularCorrection,b2Settings.b2_maxAngularCorrection);limitImpulse=-this.m_motorMass*limitC;angularError=b2Math.b2Abs(limitC);}
else if(this.m_limitState==b2Joint.e_atLowerLimit)
{limitC=angle-this.m_lowerAngle;angularError=b2Math.b2Max(0.0,-limitC);limitC=b2Math.b2Clamp(limitC+b2Settings.b2_angularSlop,-b2Settings.b2_maxAngularCorrection,0.0);limitImpulse=-this.m_motorMass*limitC;oldLimitImpulse=this.m_limitPositionImpulse;this.m_limitPositionImpulse=b2Math.b2Max(this.m_limitPositionImpulse+limitImpulse,0.0);limitImpulse=this.m_limitPositionImpulse-oldLimitImpulse;}
else if(this.m_limitState==b2Joint.e_atUpperLimit)
{limitC=angle-this.m_upperAngle;angularError=b2Math.b2Max(0.0,limitC);limitC=b2Math.b2Clamp(limitC-b2Settings.b2_angularSlop,0.0,b2Settings.b2_maxAngularCorrection);limitImpulse=-this.m_motorMass*limitC;oldLimitImpulse=this.m_limitPositionImpulse;this.m_limitPositionImpulse=b2Math.b2Min(this.m_limitPositionImpulse+limitImpulse,0.0);limitImpulse=this.m_limitPositionImpulse-oldLimitImpulse;}
b1.m_rotation-=b1.m_invI*limitImpulse;b1.m_R.Set(b1.m_rotation);b2.m_rotation+=b2.m_invI*limitImpulse;b2.m_R.Set(b2.m_rotation);}
return positionError<=b2Settings.b2_linearSlop&&angularError<=b2Settings.b2_angularSlop;},m_localAnchor1:new b2Vec2(),m_localAnchor2:new b2Vec2(),m_ptpImpulse:new b2Vec2(),m_motorImpulse:null,m_limitImpulse:null,m_limitPositionImpulse:null,m_ptpMass:new b2Mat22(),m_motorMass:null,m_intialAngle:null,m_lowerAngle:null,m_upperAngle:null,m_maxMotorTorque:null,m_motorSpeed:null,m_enableLimit:null,m_enableMotor:null,m_limitState:0});b2RevoluteJoint.tImpulse=new b2Vec2();
var b2RevoluteJointDef=Class.create();Object.extend(b2RevoluteJointDef.prototype,b2JointDef.prototype);Object.extend(b2RevoluteJointDef.prototype,{initialize:function()
{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;this.type=b2Joint.e_revoluteJoint;this.anchorPoint=new b2Vec2(0.0,0.0);this.lowerAngle=0.0;this.upperAngle=0.0;this.motorTorque=0.0;this.motorSpeed=0.0;this.enableLimit=false;this.enableMotor=false;},anchorPoint:null,lowerAngle:null,upperAngle:null,motorTorque:null,motorSpeed:null,enableLimit:null,enableMotor:null});







// ieee8023

$(function(){




	
	
	// main
	
	var canvas;
	
	var delta = [0,0];
	var stage = [window.screenX,window.screenY,window.innerWidth,window.innerHeight];
	getBrowserDimensions();
	
	var isRunning = false;
	var isMouseDown = false;
	
	var worldAABB;
	var world;
	var iterations = 1;
	var timeStep = 1/25; 
	
	var walls = new Array();
	var wall_thickness = 200;
	var wallsSetted = false;
	
	var mouseJoint;
	var mouseX = 0;
	var mouseY = 0;
	
	var mouseOnClick = new Array();
	
	var timer = 0;
	
	var elements = new Array();
	var solidelements = new Array();
	var bodies = new Array();
	var solids = new Array();
	var properties = new Array();
	var solidproperties = new Array();
	
	var gWebSearch;
	var imFeelingLuckyMode = false;
	var resultBodies = new Array();
	
	var orientation = { x: 0, y: 1 };
	
	init();
	
	function init()
	{
		canvas = document.getElementById('canvas');
	
		window.addEventListener( 'deviceorientation', onWindowDeviceOrientation, false );
	
		// init box2d
		
		worldAABB = new b2AABB();
		worldAABB.minVertex.Set(-200, -200);
		worldAABB.maxVertex.Set( screen.width + 200, screen.height + 200);
	
		world = new b2World(worldAABB, new b2Vec2(0, 0), true);
		
		// walls	
		setWalls();
	
		// Get box2d elements
		
		elements = getElementsByClass("grav");
			
		for (i = 0; i < elements.length; i++) {
	
			var element = elements[i];
			properties[i] = findPos(element);
			properties[i][2] = element.offsetWidth;
			properties[i][3] = element.offsetHeight;
		}
		
		for (i = 0; i < elements.length; i++) {
			var element = elements[i];
			element.style.position = 'absolute';
			element.style.left = properties[i][0] + 'px';
			element.style.top = properties[i][1] + 'px';
			//element.style.backgroundColor = '#ffff00';
			element.onmousedown = onElementMouseDown;
			element.onmouseup = onElementMouseUp;
			element.onclick = onElementClick;
			
			bodies[i] = createBox(world, properties[i][0] + (properties[i][2] >> 1), properties[i][1] + (properties[i][3] >> 1), properties[i][2] / 2, properties[i][3] / 2, false);		
		}
		
		solidelements = getElementsByClass("solid");
		
		
		for (i = 0; i < solidelements.length; i++) {
	
			var element = solidelements[i];
			solidproperties[i] = findPos(element);
			solidproperties[i][2] = element.offsetWidth;
			solidproperties[i][3] = element.offsetHeight;
		}
		
		for (i = 0; i < solidelements.length; i++) {
			var element = solidelements[i];
			element.style.position = 'absolute';
			element.style.left = solidproperties[i][0] + 'px';
			element.style.top = solidproperties[i][1] + 'px';
			// element.style.backgroundColor = '#ffff00';
			element.onmousedown = onElementMouseDown;
			element.onmouseup = onElementMouseUp;
			element.onclick = onElementClick;
			
			
			// like walls   = createBox(world, stage[2] / 2, - wall_thickness, stage[2], wall_thickness);
			solids[i] = createBox(world, solidproperties[i][0] + (solidproperties[i][2] >> 1), solidproperties[i][1] + (solidproperties[i][3] >> 1), solidproperties[i][2] / 2, solidproperties[i][3] / 2, true);		
		}
		
		
		
	}
	
	function run() {
	
		isRunning = true;
		setInterval(loop, 25);	
	}
	
	$(document).ready(function(){
	
		$(document).on('vmousedown',function() {
		  	isMouseDown = true;
			return false;
		});
	
		$(document).on('vmouseup',function() {
			isMouseDown = false;
			return false;
		});
	
		$(document).on('vmousemove',function(e) {
	
			if (!isRunning)
				run();
	
			mouseX = e.pageX;
			mouseY = e.pageY;
		});
	
		$(document).keypress(function(e) {
	
			if (e.charCode == 13)
				search();
		});
	});
	
	
	
	function onWindowDeviceOrientation( event ) {
	
		if ( event.beta ) {
	
			orientation.x = Math.sin( event.gamma * Math.PI / 180 );
			orientation.y = Math.sin( ( Math.PI / 4 ) + event.beta * Math.PI / 180 );
	
		}
	
	}
	
	//
	
	function onElementMouseDown() {
	
		mouseOnClick[0] = window.event.clientX;
		mouseOnClick[1] = window.event.clientY;	
		return false;
	}
	
	function onElementMouseUp() {
	
		return false;
	}
	
	function onElementClick() {
	
		var range = 5;
		
		if (mouseOnClick[0] > window.event.clientX + range || mouseOnClick[0] < window.event.clientX - range && mouseOnClick[1] > window.event.clientY + range || mouseOnClick[1] < window.event.clientY - range)
			return false;
		
		if (this == document.getElementById('btnG')) search();
		if (this == document.getElementById('btnI')) imFeelingLucky();
		if (this == document.getElementById('q')) document.f.q.focus();
	}
	
	// API STUFF
	
	function search() {
	
		if (!isRunning)
			run();
		
		onDocumentDoubleClick(); // clean
		gWebSearch.execute(document.getElementById('q').value);
		return false;
	}
	
	function imFeelingLucky() {
	
		imFeelingLuckyMode = true;
		gWebSearch.execute(document.getElementById('q').value);
		return false;	
	}
	
	function addResult(data) {
	
		var element = document.createElement('div');
		element.innerHTML = '<div><h3 class=r><a href="' + data.unescapedUrl + '" class=l onmousedown="return clk(this.href,\'\',\'\',\'res\',\'1\',\'&amp;sig2=3Ti89FTuSYfE6a-5k1jjKQ\')">' + data.title + '</a></h3><span style=display:inline-block><button class=w10 title="Promote"></button><button class=w20 title="Remove"></button></span><div class="s">' + data.content + '<br><cite>' + data.visibleUrl + '</cite></div>';
		
		canvas.appendChild(element);
		properties.push([Math.random() * (window.innerWidth / 2),-200,600,element.offsetHeight]);
		
		var i = properties.length - 1;
	
		element.style.position = 'absolute';
		element.style.left = 0 + 'px';
		element.style.top = -100 + 'px';
		element.style.backgroundColor = '#ffffff';
		element.onmousedown = onElementMouseDown;
		element.onmouseup = onElementMouseUp;
		element.onclick = onElementClick;
	
		elements[i] = element;
	
		resultBodies.push( bodies[i] = createBox(world, properties[i][0] + (properties[i][2] >> 1), properties[i][1] + (properties[i][3] >> 1), properties[i][2] / 2, properties[i][3] / 2, false, element) );
		
	}
	
	function reset() {
	
		for (i = 0; i < resultBodies.length; i++) {
	
			var body = resultBodies[i]
			canvas.removeChild( body.GetUserData().element );
			world.DestroyBody(body);
			body = null;
		}
		
		resultBodies = new Array();
	}
	
	//
	
	function loop() {
	
		if (getBrowserDimensions()){
			setWalls();
			//setBottoms();
		}
	
		delta[0] += (0 - delta[0]) * .5;
		delta[1] += (0 - delta[1]) * .5;
		
		world.m_gravity.x = orientation.x * 350 + delta[0];
		world.m_gravity.y = orientation.y * 350 + delta[1];
	
		mouseDrag();
		world.Step(timeStep, iterations);	
		
		for (i = 0; i < elements.length; i++) {
	
			var body = bodies[i];
			var element = elements[i];
			
			element.style.left = (body.m_position0.x - (properties[i][2] >> 1)) + 'px';
			element.style.top = (body.m_position0.y - (properties[i][3] >> 1)) + 'px';
	
			var rotationStyle = 'rotate(' + (body.m_rotation0 * 57.2957795) + 'deg)';
	
			element.style.WebkitTransform = rotationStyle;
			element.style.MozTransform = rotationStyle;
			element.style.OTransform = rotationStyle;
		}
	}
	
	
	// .. BOX2D UTILS
	
	function createBox(world, x, y, width, height, fixed, element) {
	
		if (typeof(fixed) == 'undefined')
			fixed = true;
	
		var boxSd = new b2BoxDef();
	
		if (!fixed)
			boxSd.density = 1.0;
	
		boxSd.extents.Set(width, height);
	
		var boxBd = new b2BodyDef();
		boxBd.AddShape(boxSd);
		boxBd.position.Set(x,y);
		boxBd.userData = {element: element};
	
		return world.CreateBody(boxBd)
	}
	
	function mouseDrag() {
	
		// mouse press
		if (isMouseDown && !mouseJoint) {
	
			var body = getBodyAtMouse();
			
			if (body) {
	
				var md = new b2MouseJointDef();
				md.body1 = world.m_groundBody;
				md.body2 = body;
				md.target.Set(mouseX, mouseY);
				md.maxForce = 30000.0 * body.m_mass;
				md.timeStep = timeStep;
				mouseJoint = world.CreateJoint(md);
				body.WakeUp();
			}
		}
		
		// mouse release
		if (!isMouseDown) {
	
			if (mouseJoint) {
	
				world.DestroyJoint(mouseJoint);
				mouseJoint = null;
			}
		}
		
		// mouse move
		if (mouseJoint) {
	
			var p2 = new b2Vec2(mouseX, mouseY);
			mouseJoint.SetTarget(p2);
		}
	}
	
	function getBodyAtMouse() {
	
		// Make a small box.
		var mousePVec = new b2Vec2();
		mousePVec.Set(mouseX, mouseY);
		
		var aabb = new b2AABB();
		aabb.minVertex.Set(mouseX - 1, mouseY - 1);
		aabb.maxVertex.Set(mouseX + 1, mouseY + 1);
	
		// Query the world for overlapping shapes.
		var k_maxCount = 10;
		var shapes = new Array();
		var count = world.Query(aabb, shapes, k_maxCount);
		var body = null;
		
		for (var i = 0; i < count; ++i) {
	
			if (shapes[i].m_body.IsStatic() == false) {
	
				if ( shapes[i].TestPoint(mousePVec) ) {
	
					body = shapes[i].m_body;
					break;
				}
			}
		}
	
		return body;
	}
	
	function setWalls() {
	
		if (wallsSetted) {
	
			world.DestroyBody(walls[0]);
			world.DestroyBody(walls[1]);
			world.DestroyBody(walls[2]);
			world.DestroyBody(walls[3]);
			
			walls[0] = null; 
			walls[1] = null;
			walls[2] = null;
			walls[3] = null;
		}
		
		walls[0] = createBox(world, stage[2] / 2, - wall_thickness, stage[2], wall_thickness);
		walls[1] = createBox(world, stage[2] / 2, stage[3] + wall_thickness, stage[2], wall_thickness);
		walls[2] = createBox(world, - wall_thickness, stage[3] / 2, wall_thickness, stage[3]);
		walls[3] = createBox(world, stage[2] + wall_thickness, stage[3] / 2, wall_thickness, stage[3]);	
		
		wallsSetted = true;
	}
	
	// .. UTILS
	
	function getElementsByClass( searchClass ) {
	
		var classElements = new Array();
		var els = document.getElementsByTagName('*');
		var elsLen = els.length
	
		for (i = 0, j = 0; i < elsLen; i++) {
	
			var classes = els[i].className.split(' ');
			for (k = 0; k < classes.length; k++)
				if ( classes[k] == searchClass )
					classElements[j++] = els[i];
		}
	
		return classElements;
	}
	
	function findPos(obj) {
	
		var curleft = curtop = 0;
	
		if (obj.offsetParent) {
	
			do {
	
				curleft += obj.offsetLeft;
				curtop += obj.offsetTop;
	
			} while (obj = obj.offsetParent);
		}
	
		return [curleft,curtop];
	}
	
	function getBrowserDimensions() {
	
		var changed = false;
			
		if (stage[0] != window.screenX) {
	
			delta[0] = (window.screenX - stage[0]) * 50;
			stage[0] = window.screenX;
			changed = true;
		}
		
		if (stage[1] != window.screenY) {
	
			delta[1] = (window.screenY - stage[1]) * 50;
			stage[1] = window.screenY;
			changed = true;
		}
		
		if (stage[2] != window.innerWidth) {
	
			stage[2] = window.innerWidth;
			changed = true;
		}
		
		if (stage[3] != window.innerHeight) {
	
			stage[3] = window.innerHeight;
			changed = true;
		}
		
		return changed;
	}
	
	}


);
