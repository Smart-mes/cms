/*!jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*!
 * fullPage 3.1.2
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
(function( root, window, document, factory, undefined) {
    if( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define( function() {
            root.fullpage = factory(window, document);
            return root.fullpage;
        } );
    } else if( typeof exports === 'object' ) {
        // Node. Does not work with strict CommonJS.
        module.exports = factory(window, document);
    } else {
        // Browser globals.
        window.fullpage = factory(window, document);
    }
}(this, window, document, function(window, document){
    'use strict';

    // keeping central set of classnames and selectors
    var WRAPPER =               'fullpage-wrapper';
    var WRAPPER_SEL =           '.' + WRAPPER;

    // slimscroll
    var SCROLLABLE =            'fp-scrollable';
    var SCROLLABLE_SEL =        '.' + SCROLLABLE;

    // util
    var RESPONSIVE =            'fp-responsive';
    var NO_TRANSITION =         'fp-notransition';
    var DESTROYED =             'fp-destroyed';
    var ENABLED =               'fp-enabled';
    var VIEWING_PREFIX =        'fp-viewing';
    var ACTIVE =                'active';
    var ACTIVE_SEL =            '.' + ACTIVE;
    var COMPLETELY =            'fp-completely';
    var COMPLETELY_SEL =        '.' + COMPLETELY;

    // section
    var SECTION_DEFAULT_SEL =   '.section';
    var SECTION =               'fp-section';
    var SECTION_SEL =           '.' + SECTION;
    var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;
    var TABLE_CELL =            'fp-tableCell';
    var TABLE_CELL_SEL =        '.' + TABLE_CELL;
    var AUTO_HEIGHT =           'fp-auto-height';
    var AUTO_HEIGHT_SEL =       '.' + AUTO_HEIGHT;
    var AUTO_HEIGHT_RESPONSIVE = 'fp-auto-height-responsive';
    var AUTO_HEIGHT_RESPONSIVE_SEL = '.' + AUTO_HEIGHT_RESPONSIVE;
    var NORMAL_SCROLL =         'fp-normal-scroll';
    var NORMAL_SCROLL_SEL =     '.' + NORMAL_SCROLL;

    // section nav
    var SECTION_NAV =           'fp-nav';
    var SECTION_NAV_SEL =       '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP =   'fp-tooltip';
    var SECTION_NAV_TOOLTIP_SEL='.'+SECTION_NAV_TOOLTIP;
    var SHOW_ACTIVE_TOOLTIP =   'fp-show-active';

    // slide
    var SLIDE_DEFAULT_SEL =     '.slide';
    var SLIDE =                 'fp-slide';
    var SLIDE_SEL =             '.' + SLIDE;
    var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER =        'fp-slides';
    var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER =      'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL =  '.' + SLIDES_CONTAINER;
    var TABLE =                 'fp-table';

    // slide nav
    var SLIDES_NAV =            'fp-slidesNav';
    var SLIDES_NAV_SEL =        '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL =   SLIDES_NAV_SEL + ' a';
    var SLIDES_ARROW =          'fp-controlArrow';
    var SLIDES_ARROW_SEL =      '.' + SLIDES_ARROW;
    var SLIDES_PREV =           'fp-prev';
    var SLIDES_PREV_SEL =       '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV =     SLIDES_ARROW + ' ' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT =           'fp-next';
    var SLIDES_NEXT_SEL =       '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT =     SLIDES_ARROW + ' ' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

    function initialise(containerSelector, options) {
        var isOK = options && new RegExp('([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$').test(options['li'+'cen'+'seK' + 'e' + 'y']) || document.domain.indexOf('al'+'varotri' +'go' + '.' + 'com') > -1;

        // cache common elements
        var $htmlBody = $('html, body');
        var $html = $('html')[0];
        var $body = $('body')[0];

        //only once my friend!
        if(hasClass($html, ENABLED)){ displayWarnings(); return; }

        var FP = {};

        // Creating some defaults, extending them with any options that were provided
        options = deepExtend({
            //navigation
            menu: false,
            anchors:[],
            lockAnchors: false,
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: [],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollBar: false,
            hybrid: false,

            //scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: null,
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowHandler: window.fp_scrolloverflow ? window.fp_scrolloverflow.iscrollHandler : null,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            touchWrapper: typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //design
            controlArrows: true,
            controlArrowColor: '#fff',
            verticalCentered: true,
            sectionsColor : [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0, //backwards compabitility with responsiveWiddth
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,
            parallax: false,
            parallaxOptions: {
                type: 'reveal',
                percentage: 62,
                property: 'translate'
            },
            cards: false,
            cardsOptions: {
                perspective: 100,
                fadeContent: true,
                fadeBackground: true
            },

            //Custom selectors
            sectionSelector: SECTION_DEFAULT_SEL,
            slideSelector: SLIDE_DEFAULT_SEL,

            //events
            v2compatible: false,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,

            lazyLoading: true
        }, options);

        //flag to avoid very fast sliding for landscape sliders
        var slideMoving = false;

        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
        var container = typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector;
        var windowsHeight = getWindowHeight();
        var windowsWidth = getWindowWidth();
        var isResizing = false;
        var isWindowFocused = true;
        var lastScrolledDestiny;
        var lastScrolledSlide;
        var canScroll = true;
        var scrollings = [];
        var controlPressed;
        var startingSection;
        var isScrollAllowed = {};
        isScrollAllowed.m = {  'up':true, 'down':true, 'left':true, 'right':true };
        isScrollAllowed.k = deepExtend({}, isScrollAllowed.m);
        var MSPointer = getMSPointer();
        var events = {
            touchmove: 'ontouchmove' in window ? 'touchmove' :  MSPointer.move,
            touchstart: 'ontouchstart' in window ? 'touchstart' :  MSPointer.down
        };
        var scrollBarHandler;

        // taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js
        var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

        //cheks for passive event support
        var g_supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, 'passive', {
            get: function() {
              g_supportsPassive = true;
            }
          });
          window.addEventListener("testPassive", null, opts);
          window.removeEventListener("testPassive", null, opts);
        } catch (e) {}

        //timeouts
        var resizeId;
        var resizeHandlerId;
        var afterSectionLoadsId;
        var afterSlideLoadsId;
        var scrollId;
        var scrollId2;
        var keydownId;
        var g_doubleCheckHeightId;
        var originals = deepExtend({}, options); //deep copy
        var activeAnimation;
        var g_initialAnchorsInDom = false;
        var g_canFireMouseEnterNormalScroll = true;
        var g_mediaLoadedId;
        var g_transitionLapseId;
        var extensions = [
            'parallax',
            'scrollOverflowReset',
            'dragAndMove',
            'offsetSections',
            'fadingEffect',
            'responsiveSlides',
            'continuousHorizontal',
            'interlockedSlides',
            'scrollHorizontally',
            'resetSliders',
            'cards',
            'dropEffect',
            'waterEffect'
        ];

        displayWarnings();

        //easeInOutCubic animation included in the plugin
        window.fp_easings = deepExtend(window.fp_easings, {
            easeInOutCubic: function (t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;
            }
        });

        /**
        * Sets the autoScroll option.
        * It changes the scroll bar visibility and the history of the site as a result.
        */
        function setAutoScrolling(value, type){
            //removing the transformation
            if(!value){
                silentScroll(0);
            }

            setVariableState('autoScrolling', value, type);

            var element = $(SECTION_ACTIVE_SEL)[0];

            if(options.autoScrolling && !options.scrollBar){
                css($htmlBody, {
                    'overflow': 'hidden',
                    'height': '100%'
                });

                setRecordHistory(originals.recordHistory, 'internal');

                //for IE touch devices
                css(container, {
                    'msTouchAction': 'none',
                    'touchAction': 'none'
                });

                if(element != null){
                    //moving the container up
                    silentScroll(element.offsetTop);
                }
            }else{
                css($htmlBody, {
                    'overflow' : 'visible',
                    'height' : 'initial'
                });

                var recordHistory = !options.autoScrolling ? false : originals.recordHistory;
                setRecordHistory(recordHistory, 'internal');

                //for IE touch devices
                css(container, {
                    'msTouchAction': '',
                    'touchAction': ''
                });

                //scrolling the page to the section with no animation
                if (element != null) {
                    var scrollSettings = getScrollSettings(element.offsetTop);
                    scrollSettings.element.scrollTo(0, scrollSettings.options);
                }
            }
        }

        /**
        * Defines wheter to record the history for each hash change in the URL.
        */
        function setRecordHistory(value, type){
            setVariableState('recordHistory', value, type);
        }

        /**
        * Defines the scrolling speed
        */
        function setScrollingSpeed(value, type){
            setVariableState('scrollingSpeed', value, type);
        }

        /**
        * Sets fitToSection
        */
        function setFitToSection(value, type){
            setVariableState('fitToSection', value, type);
        }

        /**
        * Sets lockAnchors
        */
        function setLockAnchors(value){
            options.lockAnchors = value;
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
        */
        function setMouseWheelScrolling(value){
            if(value){
                addMouseWheelHandler();
                addMiddleWheelHandler();
            }else{
                removeMouseWheelHandler();
                removeMiddleWheelHandler();
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
        *
        * @param directions string containing the direction or directions separated by comma.
        */
        function setAllowScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                directions.forEach(function (direction){
                    setIsScrollAllowed(value, direction, 'm');
                });
            }
            else{
                setIsScrollAllowed(value, 'all', 'm');
            }
        }

        /**
        * Adds or remove the mouse wheel hijacking
        */
        function setMouseHijack(value){
            if(value){
                setMouseWheelScrolling(true);
                addTouchHandler();
            }else{
                setMouseWheelScrolling(false);
                removeTouchHandler();
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
        */
        function setKeyboardScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                directions.forEach(function(direction){
                    setIsScrollAllowed(value, direction, 'k');
                });
            }else{
                setIsScrollAllowed(value, 'all', 'k');
                options.keyboardScrolling = value;
            }
        }

        /**
        * Moves the page up one section.
        */
        function moveSectionUp(){
            var prev = prevUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);

            //looping to the bottom if there's no more sections above
            if (!prev && (options.loopTop || options.continuousVertical)) {
                prev = last($(SECTION_SEL));
            }

            if (prev != null) {
                scrollPage(prev, null, true);
            }
        }

        /**
        * Moves the page down one section.
        */
        function moveSectionDown(){
            var next = nextUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);

            //looping to the top if there's no more sections below
            if(!next &&
                (options.loopBottom || options.continuousVertical)){
                next = $(SECTION_SEL)[0];
            }

            if(next != null){
                scrollPage(next, null, false);
            }
        }

        /**
        * Moves the page to the given section and slide with no animation.
        * Anchors or index positions can be used as params.
        */
        function silentMoveTo(sectionAnchor, slideAnchor){
            setScrollingSpeed (0, 'internal');
            moveTo(sectionAnchor, slideAnchor);
            setScrollingSpeed (originals.scrollingSpeed, 'internal');
        }

        /**
        * Moves the page to the given section and slide.
        * Anchors or index positions can be used as params.
        */
        function moveTo(sectionAnchor, slideAnchor){
            var destiny = getSectionByAnchor(sectionAnchor);

            if (typeof slideAnchor !== 'undefined'){
                scrollPageAndSlide(sectionAnchor, slideAnchor);
            }else if(destiny != null){
                scrollPage(destiny);
            }
        }

        /**
        * Slides right the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideRight(section){
            moveSlide('right', section);
        }

        /**
        * Slides left the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideLeft(section){
            moveSlide('left', section);
        }

        /**
         * When resizing is finished, we adjust the slides sizes and positions
         */
        function reBuild(resizing){
            if(hasClass(container, DESTROYED)){ return; }  //nothing to do if the plugin was destroyed

            isResizing = true;

            //updating global vars
            windowsHeight = getWindowHeight();
            windowsWidth = getWindowWidth();

            var sections = $(SECTION_SEL);
            for (var i = 0; i < sections.length; ++i) {
                var section = sections[i];
                var slidesWrap = $(SLIDES_WRAPPER_SEL, section)[0];
                var slides = $(SLIDE_SEL, section);

                //adjusting the height of the table-cell for IE and Firefox
                if(options.verticalCentered){
                    css($(TABLE_CELL_SEL, section), {'height': getTableHeight(section) + 'px'});
                }

                css(section, {'height': windowsHeight + 'px'});

                //adjusting the position fo the FULL WIDTH slides...
                if (slides.length > 1) {
                    landscapeScroll(slidesWrap, $(SLIDE_ACTIVE_SEL, slidesWrap)[0]);
                }
            }

            if(options.scrollOverflow){
                scrollBarHandler.createScrollBarForAll();
            }

            var activeSection = $(SECTION_ACTIVE_SEL)[0];
            var sectionIndex = index(activeSection, SECTION_SEL);

            //isn't it the first section?
            if(sectionIndex){
                //adjusting the position for the current section
                silentMoveTo(sectionIndex + 1);
            }

            isResizing = false;

            if(isFunction( options.afterResize ) && resizing){
                options.afterResize.call(container, window.innerWidth, window.innerHeight);
            }
            if(isFunction( options.afterReBuild ) && !resizing){
                options.afterReBuild.call(container);
            }
        }

        /**
        * Determines whether fullpage.js is in responsive mode or not.
        */
        function isResponsiveMode(){
           return hasClass($body, RESPONSIVE);
        }

        /**
        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
        * are smaller than the set limit values.
        */
        function setResponsive(active){
            var isResponsive = isResponsiveMode();

            if(active){
                if(!isResponsive){
                    setAutoScrolling(false, 'internal');
                    setFitToSection(false, 'internal');
                    hide($(SECTION_NAV_SEL));
                    addClass($body, RESPONSIVE);
                    if(isFunction( options.afterResponsive )){
                        options.afterResponsive.call( container, active);
                    }

                    //when on page load, we will remove scrolloverflow if necessary
                    if(options.scrollOverflow){
                        scrollBarHandler.createScrollBarForAll();
                    }
                }
            }
            else if(isResponsive){
                setAutoScrolling(originals.autoScrolling, 'internal');
                setFitToSection(originals.autoScrolling, 'internal');
                show($(SECTION_NAV_SEL));
                removeClass($body, RESPONSIVE);
                if(isFunction( options.afterResponsive )){
                    options.afterResponsive.call( container, active);
                }
            }
        }

        if(container){
            //public functions
            FP.version = '3.1.1';
            FP.setAutoScrolling = setAutoScrolling;
            FP.setRecordHistory = setRecordHistory;
            FP.setScrollingSpeed = setScrollingSpeed;
            FP.setFitToSection = setFitToSection;
            FP.setLockAnchors = setLockAnchors;
            FP.setMouseWheelScrolling = setMouseWheelScrolling;
            FP.setAllowScrolling = setAllowScrolling;
            FP.setKeyboardScrolling = setKeyboardScrolling;
            FP.moveSectionUp = moveSectionUp;
            FP.moveSectionDown = moveSectionDown;
            FP.silentMoveTo = silentMoveTo;
            FP.moveTo = moveTo;
            FP.moveSlideRight = moveSlideRight;
            FP.moveSlideLeft = moveSlideLeft;
            FP.fitToSection = fitToSection;
            FP.reBuild = reBuild;
            FP.setResponsive = setResponsive;
            FP.getFullpageData = function(){ return options; };
            FP.destroy = destroy;
            FP.getActiveSection = getActiveSection;
            FP.getActiveSlide = getActiveSlide;

            FP.test = {
                top: '0px',
                translate3d: 'translate3d(0px, 0px, 0px)',
                translate3dH: (function(){
                    var a = [];
                    for(var i = 0; i < $(options.sectionSelector, container).length; i++){
                        a.push('translate3d(0px, 0px, 0px)');
                    }
                    return a;
                })(),
                left: (function(){
                    var a = [];
                    for(var i = 0; i < $(options.sectionSelector, container).length; i++){
                        a.push(0);
                    }
                    return a;
                })(),
                options: options,
                setAutoScrolling: setAutoScrolling
            };

            //functions we want to share across files but which are not
            //mean to be used on their own by developers
            FP.shared = {
                afterRenderActions: afterRenderActions,
                isNormalScrollElement: false
            };

            window.fullpage_api = FP;

            //using jQuery initialization? Creating the $.fn.fullpage object
            if(options.$){
                Object.keys(FP).forEach(function (key) {    
                    options.$.fn.fullpage[key] = FP[key];   
                });
            }

            init();

            bindEvents();
        }

        function init(){
            //if css3 is not supported, it will use jQuery animations
            if(options.css3){
                options.css3 = support3d();
            }

            options.scrollBar = options.scrollBar || options.hybrid;

            setOptionsFromDOM();
            prepareDom();
            setAllowScrolling(true);
            setMouseHijack(true);
            setAutoScrolling(options.autoScrolling, 'internal');
            responsive();

            //setting the class for the body element
            setBodyClass();

            if(document.readyState === 'complete'){
                scrollToAnchor();
            }
            window.addEventListener('load', scrollToAnchor);

            //if we use scrollOverflow we'll fire afterRender in the scrolloverflow file
            if(!options.scrollOverflow){
                afterRenderActions();
            }

            doubleCheckHeight();
        }

        function bindEvents(){

            //when scrolling...
            window.addEventListener('scroll', scrollHandler);

            //detecting any change on the URL to scroll to the given anchor link
            //(a way to detect back history button as we play with the hashes on the URL)
            window.addEventListener('hashchange', hashChangeHandler);
            
            // on window focus
            window.addEventListener('focus', focusHandler);

            //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
            window.addEventListener('blur', blurHandler);

            //when resizing the site, we adjust the heights of the sections, slimScroll...
            window.addEventListener('resize', resizeHandler);

            //Sliding with arrow keys, both, vertical and horizontal
            document.addEventListener('keydown', keydownHandler);

            //to prevent scrolling while zooming
            document.addEventListener('keyup', keyUpHandler);

            //Scrolls to the section when clicking the navigation bullet
            //simulating the jQuery .on('click') event using delegation
            ['click', 'touchstart'].forEach(function(eventName){
                document.addEventListener(eventName, delegatedEvents);
            });

            /**
            * Applying normalScroll elements.
            * Ignoring the scrolls over the specified selectors.
            */
            if(options.normalScrollElements){
                ['mouseenter', 'touchstart'].forEach(function(eventName){
                    forMouseLeaveOrTouch(eventName, false);
                });

                ['mouseleave', 'touchend'].forEach(function(eventName){
                   forMouseLeaveOrTouch(eventName, true);
                });
            }
        }

        function delegatedEvents(e){
            var target = e.target;

            if(target && closest(target, SECTION_NAV_SEL + ' a')){
                sectionBulletHandler.call(target, e);
            }
            else if(matches(target, SECTION_NAV_TOOLTIP_SEL)){
                tooltipTextHandler.call(target);
            }
            else if(matches(target, SLIDES_ARROW_SEL)){
                slideArrowHandler.call(target, e);
            }
            else if(matches(target, SLIDES_NAV_LINK_SEL) || closest(target, SLIDES_NAV_LINK_SEL) != null){
                slideBulletHandler.call(target, e);
            }
            else if(closest(target, options.menu + ' [data-menuanchor]')){
                menuItemsHandler.call(target, e);
            }
        }

        function forMouseLeaveOrTouch(eventName, allowScrolling){
            //a way to pass arguments to the onMouseEnterOrLeave function
            document['fp_' + eventName] = allowScrolling;
            document.addEventListener(eventName, onMouseEnterOrLeave, true); //capturing phase
        }

        function onMouseEnterOrLeave(e) {
            var type = e.type;
            var isInsideOneNormalScroll = false;
            var isUsingScrollOverflow = options.scrollOverflow;

            //onMouseLeave will use the destination target, not the one we are moving away from
            var target = type === 'mouseleave' ? e.toElement || e.relatedTarget : e.target;

            //coming from closing a normalScrollElements modal or moving outside viewport?
            if(target == document || !target){
                setMouseHijack(true);

                if(isUsingScrollOverflow){
                    options.scrollOverflowHandler.setIscroll(target, true);
                }
                return;
            }

            if(type === 'touchend'){
                g_canFireMouseEnterNormalScroll = false;
                setTimeout(function(){
                    g_canFireMouseEnterNormalScroll = true;
                }, 800);
            }

            //preventing mouseenter event to do anything when coming from a touchEnd event
            //fixing issue #3576
            if(type === 'mouseenter' && !g_canFireMouseEnterNormalScroll){
                return;
            }

            var normalSelectors = options.normalScrollElements.split(',');

            normalSelectors.forEach(function(normalSelector){
                if(!isInsideOneNormalScroll){
                    var isNormalScrollTarget = matches(target, normalSelector);

                    //leaving a child inside the normalScoll element is not leaving the normalScroll #3661
                    var isNormalScrollChildFocused = closest(target, normalSelector);

                    if(isNormalScrollTarget || isNormalScrollChildFocused){
                        if(!FP.shared.isNormalScrollElement){
                            setMouseHijack(false);

                            if(isUsingScrollOverflow){
                                options.scrollOverflowHandler.setIscroll(target, false);
                            }
                        }
                        FP.shared.isNormalScrollElement = true;
                        isInsideOneNormalScroll = true;
                    }
                }
            });

            //not inside a single normal scroll element anymore?
            if(!isInsideOneNormalScroll && FP.shared.isNormalScrollElement){
                setMouseHijack(true);
                
                if(isUsingScrollOverflow){
                    options.scrollOverflowHandler.setIscroll(target, true);
                }

                FP.shared.isNormalScrollElement = false;
            }
        }

        /**
        * Checks the viewport a few times on a define interval of time to 
        * see if it has changed in any of those. If that's the case, it resizes.
        */
        function doubleCheckHeight(){
            for(var i = 1; i < 4; i++){
                g_doubleCheckHeightId = setTimeout(adjustToNewViewport, 350 * i);
            }
        }

        /**
        * Adjusts a section to the viewport if it has changed.
        */
        function adjustToNewViewport(){
            var newWindowHeight = getWindowHeight();
            var newWindowWidth = getWindowWidth();

            if(windowsHeight !== newWindowHeight || windowsWidth !== newWindowWidth){
                windowsHeight = newWindowHeight;
                windowsWidth = newWindowWidth;
                reBuild(true);
            }
        }

        /**
        * Setting options from DOM elements if they are not provided.
        */
        function setOptionsFromDOM(){

            //no anchors option? Checking for them in the DOM attributes
            if(!options.anchors.length){
                var anchorsAttribute = '[data-anchor]';
                var anchors = $(options.sectionSelector.split(',').join(anchorsAttribute + ',') + anchorsAttribute, container);
                if(anchors.length && anchors.length === $(options.sectionSelector, container).length){
                    g_initialAnchorsInDom = true;
                    anchors.forEach(function(item){
                        options.anchors.push(item.getAttribute('data-anchor').toString());
                    });
                }
            }

            //no tooltips option? Checking for them in the DOM attributes
            if(!options.navigationTooltips.length){
                var tooltipsAttribute = '[data-tooltip]';
                var tooltips = $(options.sectionSelector.split(',').join(tooltipsAttribute + ',') + tooltipsAttribute, container);
                if(tooltips.length){
                    tooltips.forEach(function(item){
                        options.navigationTooltips.push(item.getAttribute('data-tooltip').toString());
                    });
                }
            }
        }

        /**
        * Works over the DOM structure to set it up for the current fullpage options.
        */
        function prepareDom(){
            css(container, {
                'height': '100%',
                'position': 'relative'
            });

            //adding a class to recognize the container internally in the code
            addClass(container, WRAPPER);
            addClass($html, ENABLED);

            //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
            windowsHeight = getWindowHeight();

            removeClass(container, DESTROYED); //in case it was destroyed before initializing it again

            addInternalSelectors();

            var sections = $(SECTION_SEL);

            //styling the sections / slides / menu
            for(var i = 0; i<sections.length; i++){
                var sectionIndex = i;
                var section = sections[i];
                var slides = $(SLIDE_SEL, section);
                var numSlides = slides.length;

                //caching the original styles to add them back on destroy('all')
                section.setAttribute('data-fp-styles', section.getAttribute('style'));

                styleSection(section, sectionIndex);
                styleMenu(section, sectionIndex);

                // if there's any slide
                if (numSlides > 0) {
                    styleSlides(section, slides, numSlides);
                }else{
                    if(options.verticalCentered){
                        addTableClass(section);
                    }
                }
            }

            //fixed elements need to be moved out of the plugin container due to problems with CSS3.
            if(options.fixedElements && options.css3){
                $(options.fixedElements).forEach(function(item){
                    $body.appendChild(item);
                });
            }

            //vertical centered of the navigation + active bullet
            if(options.navigation){
                addVerticalNavigation();
            }

            enableYoutubeAPI();

            if(options.scrollOverflow){
                scrollBarHandler = options.scrollOverflowHandler.init(options);
            }
        }

        /**
        * Styles the horizontal slides for a section.
        */
        function styleSlides(section, slides, numSlides){
            var sliderWidth = numSlides * 100;
            var slideWidth = 100 / numSlides;

            var slidesWrapper = document.createElement('div');
            slidesWrapper.className = SLIDES_WRAPPER; //fp-slides
            wrapAll(slides, slidesWrapper);

            var slidesContainer = document.createElement('div');
            slidesContainer.className = SLIDES_CONTAINER; //fp-slidesContainer
            wrapAll(slides, slidesContainer);

            css($(SLIDES_CONTAINER_SEL, section), {'width': sliderWidth + '%'});

            if(numSlides > 1){
                if(options.controlArrows){
                    createSlideArrows(section);
                }

                if(options.slidesNavigation){
                    addSlidesNavigation(section, numSlides);
                }
            }

            slides.forEach(function(slide) {
                css(slide, {'width': slideWidth + '%'});

                if(options.verticalCentered){
                    addTableClass(slide);
                }
            });

            var startingSlide = $(SLIDE_ACTIVE_SEL, section)[0];

            //if the slide won't be an starting point, the default will be the first one
            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
            if( startingSlide != null && (index($(SECTION_ACTIVE_SEL), SECTION_SEL) !== 0 || (index($(SECTION_ACTIVE_SEL), SECTION_SEL) === 0 && index(startingSlide) !== 0))){
                silentLandscapeScroll(startingSlide, 'internal');
            }else{
                addClass(slides[0], ACTIVE);
            }
        }

        /**
        * Styling vertical sections
        */
        function styleSection(section, index){
            //if no active section is defined, the 1st one will be the default one
            if(!index && $(SECTION_ACTIVE_SEL)[0] == null) {
                addClass(section, ACTIVE);
            }
            startingSection = $(SECTION_ACTIVE_SEL)[0];

            css(section, {'height': windowsHeight + 'px'});

            if(options.paddingTop){
                css(section, {'paddingTop': options.paddingTop});
            }

            if(options.paddingBottom){
                css(section, {'paddingBottom': options.paddingBottom});
            }

            if (typeof options.sectionsColor[index] !==  'undefined') {
                css(section, {'backgroundColor': options.sectionsColor[index]});
            }

            if (typeof options.anchors[index] !== 'undefined') {
                section.setAttribute('data-anchor', options.anchors[index]);
            }
        }

        /**
        * Sets the data-anchor attributes to the menu elements and activates the current one.
        */
        function styleMenu(section, index){
            if (typeof options.anchors[index] !== 'undefined') {
                //activating the menu / nav element on load
                if(hasClass(section, ACTIVE)){
                    activateMenuAndNav(options.anchors[index], index);
                }
            }

            //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
            if(options.menu && options.css3 && closest($(options.menu)[0], WRAPPER_SEL) != null){
                $(options.menu).forEach(function(menu) {
                    $body.appendChild(menu);
                });
            }
        }

        /**
        * Adds internal classes to be able to provide customizable selectors
        * keeping the link with the style sheet.
        */
        function addInternalSelectors(){
            addClass($(options.sectionSelector, container), SECTION);
            addClass($(options.slideSelector, container), SLIDE);
        }

        /**
        * Creates the control arrows for the given section
        */
        function createSlideArrows(section){
            var arrows = [createElementFromHTML('<div class="' + SLIDES_ARROW_PREV + '"></div>'), createElementFromHTML('<div class="' + SLIDES_ARROW_NEXT + '"></div>')];
            after($(SLIDES_WRAPPER_SEL, section)[0], arrows);

            if(options.controlArrowColor !== '#fff'){
                css($(SLIDES_ARROW_NEXT_SEL, section), {'borderColor': 'transparent transparent transparent '+options.controlArrowColor});
                css($(SLIDES_ARROW_PREV_SEL, section), {'borderColor': 'transparent '+ options.controlArrowColor + ' transparent transparent'});
            }

            if(!options.loopHorizontal){
                hide($(SLIDES_ARROW_PREV_SEL, section));
            }
        }

        /**
        * Creates a vertical navigation bar.
        */
        function addVerticalNavigation(){
            var navigation = document.createElement('div');
            navigation.setAttribute('id', SECTION_NAV);

            var divUl = document.createElement('ul');
            navigation.appendChild(divUl);

            appendTo(navigation, $body);
            var nav = $(SECTION_NAV_SEL)[0];

            addClass(nav, 'fp-' + options.navigationPosition);

            if(options.showActiveTooltip){
                addClass(nav, SHOW_ACTIVE_TOOLTIP);
            }

            var li = '';

            for (var i = 0; i < $(SECTION_SEL).length; i++) {
                var link = '';
                if (options.anchors.length) {
                    link = options.anchors[i];
                }

                li += '<li><a href="#' + link + '"><span class="fp-sr-only">' + getBulletLinkName(i, 'Section') + '</span><span></span></a>';

                // Only add tooltip if needed (defined by user)
                var tooltip = options.navigationTooltips[i];

                if (typeof tooltip !== 'undefined' && tooltip !== '') {
                    li += '<div class="' + SECTION_NAV_TOOLTIP + ' fp-' + options.navigationPosition + '">' + tooltip + '</div>';
                }

                li += '</li>';
            }
            $('ul', nav)[0].innerHTML = li;
            
            //activating the current active section

            var bullet = $('li', $(SECTION_NAV_SEL)[0])[index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL)];
            addClass($('a', bullet), ACTIVE);
        }

        /**
        * Gets the name for screen readers for a section/slide navigation bullet.
        */
        function getBulletLinkName(i, defaultName, item){
            var anchor = defaultName === 'Section' ? options.anchors[i] : item.getAttribute('data-anchor');
            return options.navigationTooltips[i]
                || anchor
                || defaultName + ' ' + (i+1);
        }

        /*
        * Enables the Youtube videos API so we can control their flow if necessary.
        */
        function enableYoutubeAPI(){
            $('iframe[src*="youtube.com/embed/"]', container).forEach(function(item){
                addURLParam(item, 'enablejsapi=1');
            });
        }

        /**
        * Adds a new parameter and its value to the `src` of a given element
        */
        function addURLParam(element, newParam){
            var originalSrc = element.getAttribute('src');
            element.setAttribute('src', originalSrc + getUrlParamSign(originalSrc) + newParam);
        }

        /*
        * Returns the prefix sign to use for a new parameter in an existen URL.
        *
        * @return {String}  ? | &
        */
        function getUrlParamSign(url){
            return ( !/\?/.test( url ) ) ? '?' : '&';
        }

        /**
        * Actions and callbacks to fire afterRender
        */
        function afterRenderActions(){
            var section = $(SECTION_ACTIVE_SEL)[0];

            addClass(section, COMPLETELY);

            lazyLoad(section);
            lazyLoadOthers();
            playMedia(section);

            if(options.scrollOverflow){
                options.scrollOverflowHandler.afterLoad();
            }

            if(isDestinyTheStartingSection() && isFunction(options.afterLoad) ){
                fireCallback('afterLoad', {
                    activeSection: section,
                    element: section,
                    direction: null,

                    //for backwards compatibility callback (to be removed in a future!)
                    anchorLink: section.getAttribute('data-anchor'),
                    sectionIndex: index(section, SECTION_SEL)
                });
            }

            if(isFunction(options.afterRender)){
                fireCallback('afterRender');
            }
        }

        /**
        * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
        */
        function isDestinyTheStartingSection(){
            var anchor = getAnchorsURL();
            var destinationSection = getSectionByAnchor(anchor.section);
            return !anchor.section || !destinationSection || typeof destinationSection !=='undefined' && index(destinationSection) === index(startingSection);
        }

        var isScrolling = false;
        var lastScroll = 0;

        //when scrolling...
        function scrollHandler(){
            var currentSection;

            if(isResizing){
                return;
            }
            
            if(!options.autoScrolling || options.scrollBar){
                var currentScroll = getScrollTop();
                var scrollDirection = getScrollDirection(currentScroll);
                var visibleSectionIndex = 0;
                var screen_mid = currentScroll + (getWindowHeight() / 2.0);
                var isAtBottom = $body.offsetHeight - getWindowHeight() === currentScroll;
                var sections =  $(SECTION_SEL);

                //when using `auto-height` for a small last section it won't be centered in the viewport
                if(isAtBottom){
                    visibleSectionIndex = sections.length - 1;
                }
                //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
                else if(!currentScroll){
                    visibleSectionIndex = 0;
                }

                //taking the section which is showing more content in the viewport
                else{
                    for (var i = 0; i < sections.length; ++i) {
                        var section = sections[i];

                        // Pick the the last section which passes the middle line of the screen.
                        if (section.offsetTop <= screen_mid)
                        {
                            visibleSectionIndex = i;
                        }
                    }
                }

                if(isCompletelyInViewPort(scrollDirection)){
                    if(!hasClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY)){
                        addClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY);
                        removeClass(siblings($(SECTION_ACTIVE_SEL)[0]), COMPLETELY);
                    }
                }

                //geting the last one, the current one on the screen
                currentSection = sections[visibleSectionIndex];

                //setting the visible section as active when manually scrolling
                //executing only once the first time we reach the section
                if(!hasClass(currentSection, ACTIVE)){
                    isScrolling = true;
                    var leavingSection = $(SECTION_ACTIVE_SEL)[0];
                    var leavingSectionIndex = index(leavingSection, SECTION_SEL) + 1;
                    var yMovement = getYmovement(currentSection);
                    var anchorLink  = currentSection.getAttribute('data-anchor');
                    var sectionIndex = index(currentSection, SECTION_SEL) + 1;
                    var activeSlide = $(SLIDE_ACTIVE_SEL, currentSection)[0];
                    var slideIndex;
                    var slideAnchorLink;
                    var callbacksParams = {
                        activeSection: leavingSection,
                        sectionIndex: sectionIndex -1,
                        anchorLink: anchorLink,
                        element: currentSection,
                        leavingSection: leavingSectionIndex,
                        direction: yMovement
                    };

                    if(activeSlide){
                        slideAnchorLink = activeSlide.getAttribute('data-anchor');
                        slideIndex = index(activeSlide);
                    }

                    if(canScroll){
                        addClass(currentSection, ACTIVE);
                        removeClass(siblings(currentSection), ACTIVE);

                        if(isFunction( options.onLeave )){
                            fireCallback('onLeave', callbacksParams);
                        }
                        if(isFunction( options.afterLoad )){
                            fireCallback('afterLoad', callbacksParams);
                        }

                        stopMedia(leavingSection);
                        lazyLoad(currentSection);
                        playMedia(currentSection);

                        activateMenuAndNav(anchorLink, sectionIndex - 1);

                        if(options.anchors.length){
                            //needed to enter in hashChange event when using the menu with anchor links
                            lastScrolledDestiny = anchorLink;
                        }
                        setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
                    }

                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                    clearTimeout(scrollId);
                    scrollId = setTimeout(function(){
                        isScrolling = false;
                    }, 100);
                }

                if(options.fitToSection){
                    //for the auto adjust of the viewport to fit a whole section
                    clearTimeout(scrollId2);

                    scrollId2 = setTimeout(function(){
                        //checking it again in case it changed during the delay
                        if(options.fitToSection &&

                            //is the destination element bigger than the viewport?
                            $(SECTION_ACTIVE_SEL)[0].offsetHeight <= windowsHeight
                        ){
                            fitToSection();
                        }
                    }, options.fitToSectionDelay);
                }
            }
        }

        /**
        * Fits the site to the nearest active section
        */
        function fitToSection(){
            //checking fitToSection again in case it was set to false before the timeout delay
            if(canScroll){
                //allows to scroll to an active section and
                //if the section is already active, we prevent firing callbacks
                isResizing = true;

                scrollPage($(SECTION_ACTIVE_SEL)[0]);
                isResizing = false;
            }
        }

        /**
        * Determines whether the active section has seen in its whole or not.
        */
        function isCompletelyInViewPort(movement){
            var top = $(SECTION_ACTIVE_SEL)[0].offsetTop;
            var bottom = top + getWindowHeight();

            if(movement == 'up'){
                return bottom >= (getScrollTop() + getWindowHeight());
            }
            return top <= getScrollTop();
        }

        /**
        * Determines whether a section is in the viewport or not.
        */
        function isSectionInViewport (el) {
            var rect = el.getBoundingClientRect();
            var top = rect.top;
            var bottom = rect.bottom;

            //sometimes there's a 1px offset on the bottom of the screen even when the 
            //section's height is the window.innerHeight one. I guess because pixels won't allow decimals.
            //using this prevents from lazyLoading the section that is not yet visible 
            //(only 1 pixel offset is)
            var pixelOffset = 2;
            
            var isTopInView = top + pixelOffset < windowsHeight && top > 0;
            var isBottomInView = bottom > pixelOffset && bottom < windowsHeight;

            return isTopInView || isBottomInView;
        }

        /**
        * Gets the directon of the the scrolling fired by the scroll event.
        */
        function getScrollDirection(currentScroll){
            var direction = currentScroll > lastScroll ? 'down' : 'up';

            lastScroll = currentScroll;

            //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
            previousDestTop = currentScroll;

            return direction;
        }

        /**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */
        function scrolling(type){
            if (!isScrollAllowed.m[type]){
                return;
            }

            var scrollSection = (type === 'down') ? moveSectionDown : moveSectionUp;

            if(options.scrollOverflow){
                var scrollable = options.scrollOverflowHandler.scrollable($(SECTION_ACTIVE_SEL)[0]);
                var check = (type === 'down') ? 'bottom' : 'top';

                if(scrollable != null ){
                    //is the scrollbar at the start/end of the scroll?
                    if(options.scrollOverflowHandler.isScrolled(check, scrollable)){
                        scrollSection();
                    }else{
                        return true;
                    }
                }else{
                    // moved up/down
                    scrollSection();
                }
            }else{
                // moved up/down
                scrollSection();
            }
        }

        /*
        * Preventing bouncing in iOS #2285
        */
        function preventBouncing(e){
            if(options.autoScrolling && isReallyTouch(e) && isScrollAllowed.m.up){
                //preventing the easing on iOS devices
                preventDefault(e);
            }
        }

        var touchStartY = 0;
        var touchStartX = 0;
        var touchEndY = 0;
        var touchEndX = 0;

        /* Detecting touch events

        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */
        function touchMoveHandler(e){
            var activeSection = closest(e.target, SECTION_SEL) || $(SECTION_ACTIVE_SEL)[0];

            if (isReallyTouch(e) ) {

                if(options.autoScrolling){
                    //preventing the easing on iOS devices
                    preventDefault(e);
                }

                var touchEvents = getEventsPage(e);

                touchEndY = touchEvents.y;
                touchEndX = touchEvents.x;

                //if movement in the X axys is greater than in the Y and the currect section has slides...
                if ($(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {

                    //is the movement greater than the minimum resistance to scroll?
                    if (!slideMoving && Math.abs(touchStartX - touchEndX) > (getWindowWidth() / 100 * options.touchSensitivity)) {
                        if (touchStartX > touchEndX) {
                            if(isScrollAllowed.m.right){
                                moveSlideRight(activeSection); //next
                            }
                        } else {
                            if(isScrollAllowed.m.left){
                                moveSlideLeft(activeSection); //prev
                            }
                        }
                    }
                }

                //vertical scrolling (only when autoScrolling is enabled)
                else if(options.autoScrolling && canScroll){

                    //is the movement greater than the minimum resistance to scroll?
                    if (Math.abs(touchStartY - touchEndY) > (window.innerHeight / 100 * options.touchSensitivity)) {
                        if (touchStartY > touchEndY) {
                            scrolling('down');
                        } else if (touchEndY > touchStartY) {
                            scrolling('up');
                        }
                    }
                }
            }
        }

        /**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */
        function isReallyTouch(e){
            //if is not IE   ||  IE is detecting `touch` or `pen`
            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
        }

        /**
        * Handler for the touch start event.
        */
        function touchStartHandler(e){

            //stopping the auto scroll to adjust to a section
            if(options.fitToSection){
                activeAnimation = false;
            }

            if(isReallyTouch(e)){
                var touchEvents = getEventsPage(e);
                touchStartY = touchEvents.y;
                touchStartX = touchEvents.x;
            }
        }

        /**
        * Gets the average of the last `number` elements of the given array.
        */
        function getAverage(elements, number){
            var sum = 0;

            //taking `number` elements from the end to make the average, if there are not enought, 1
            var lastElements = elements.slice(Math.max(elements.length - number, 1));

            for(var i = 0; i < lastElements.length; i++){
                sum = sum + lastElements[i];
            }

            return Math.ceil(sum/number);
        }

        /**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */
        var prevTime = new Date().getTime();

        function MouseWheelHandler(e) {
            var curTime = new Date().getTime();
            var isNormalScroll = hasClass($(COMPLETELY_SEL)[0], NORMAL_SCROLL);

            //is scroll allowed?
            if (!isScrollAllowed.m.down && !isScrollAllowed.m.up) {
                preventDefault(e);
                return false;
            }

            //autoscrolling and not zooming?
            if(options.autoScrolling && !controlPressed && !isNormalScroll){
                // cross-browser wheel delta
                e = e || window.event;
                var value = e.wheelDelta || -e.deltaY || -e.detail;
                var delta = Math.max(-1, Math.min(1, value));

                var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
                var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);

                //Limiting the array to 150 (lets not waste memory!)
                if(scrollings.length > 149){
                    scrollings.shift();
                }

                //keeping record of the previous scrollings
                scrollings.push(Math.abs(value));

                //preventing to scroll the site on mouse wheel when scrollbar is present
                if(options.scrollBar){
                    preventDefault(e);
                }

                //time difference between the last scroll and the current one
                var timeDiff = curTime-prevTime;
                prevTime = curTime;

                //haven't they scrolled in a while?
                //(enough to be consider a different scrolling action to scroll another section)
                if(timeDiff > 200){
                    //emptying the array, we dont care about old scrollings for our averages
                    scrollings = [];
                }

                if(canScroll){
                    var averageEnd = getAverage(scrollings, 10);
                    var averageMiddle = getAverage(scrollings, 70);
                    var isAccelerating = averageEnd >= averageMiddle;

                    //to avoid double swipes...
                    if(isAccelerating && isScrollingVertically){
                        //scrolling down?
                        if (delta < 0) {
                            scrolling('down');

                        //scrolling up?
                        }else {
                            scrolling('up');
                        }
                    }
                }

                return false;
            }

            if(options.fitToSection){
                //stopping the auto scroll to adjust to a section
                activeAnimation = false;
            }
        }

        /**
        * Slides a slider to the given direction.
        * Optional `section` param.
        */
        function moveSlide(direction, section){
            var activeSection = section == null ? $(SECTION_ACTIVE_SEL)[0] : section;
            var slides = $(SLIDES_WRAPPER_SEL, activeSection)[0];

            // more than one slide needed and nothing should be sliding
            if (slides == null || slideMoving || $(SLIDE_SEL, slides).length < 2) {
                return;
            }

            var currentSlide = $(SLIDE_ACTIVE_SEL, slides)[0];
            var destiny = null;

            if(direction === 'left'){
                destiny = prevUntil(currentSlide, SLIDE_SEL);
            }else{
                destiny = nextUntil(currentSlide, SLIDE_SEL);
            }

            //isn't there a next slide in the secuence?
            if(destiny == null){
                //respect loopHorizontal settin
                if (!options.loopHorizontal) return;

                var slideSiblings = siblings(currentSlide);
                if(direction === 'left'){
                    destiny = slideSiblings[slideSiblings.length - 1]; //last
                }else{
                    destiny = slideSiblings[0]; //first
                }
            }

            slideMoving = true && !FP.test.isTesting;
            landscapeScroll(slides, destiny, direction);
        }

        /**
        * Maintains the active slides in the viewport
        * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
        */
        function keepSlidesPosition(){
            var activeSlides = $(SLIDE_ACTIVE_SEL);
            for( var i =0; i<activeSlides.length; i++){
                silentLandscapeScroll(activeSlides[i], 'internal');
            }
        }

        var previousDestTop = 0;
        /**
        * Returns the destination Y position based on the scrolling direction and
        * the height of the section.
        */
        function getDestinationPosition(element){
            var elementHeight = element.offsetHeight;
            var elementTop = element.offsetTop;

            //top of the desination will be at the top of the viewport
            var position = elementTop;
            var isScrollingDown =  elementTop > previousDestTop;
            var sectionBottom = position - windowsHeight + elementHeight;
            var bigSectionsDestination = options.bigSectionsDestination;

            //is the destination element bigger than the viewport?
            if(elementHeight > windowsHeight){
                //scrolling up?
                if(!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom' ){
                    position = sectionBottom;
                }
            }

            //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
            else if(isScrollingDown || (isResizing && next(element) == null) ){
                //The bottom of the destination will be at the bottom of the viewport
                position = sectionBottom;
            }

            /*
            Keeping record of the last scrolled position to determine the scrolling direction.
            No conventional methods can be used as the scroll bar might not be present
            AND the section might not be active if it is auto-height and didnt reach the middle
            of the viewport.
            */
            previousDestTop = position;
            return position;
        }

        /**
        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
        */
        function scrollPage(element, callback, isMovementUp){
            if(element == null){ return; } //there's no element to scroll, leaving the function

            var dtop = getDestinationPosition(element);
            var slideAnchorLink;
            var slideIndex;

            //local variables
            var v = {
                element: element,
                callback: callback,
                isMovementUp: isMovementUp,
                dtop: dtop,
                yMovement: getYmovement(element),
                anchorLink: element.getAttribute('data-anchor'),
                sectionIndex: index(element, SECTION_SEL),
                activeSlide: $(SLIDE_ACTIVE_SEL, element)[0],
                activeSection: $(SECTION_ACTIVE_SEL)[0],
                leavingSection: index($(SECTION_ACTIVE_SEL), SECTION_SEL) + 1,

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };

            //quiting when destination scroll is the same as the current one
            if((v.activeSection == element && !isResizing) || (options.scrollBar && getScrollTop() === v.dtop && !hasClass(element, AUTO_HEIGHT) )){ return; }

            if(v.activeSlide != null){
                slideAnchorLink = v.activeSlide.getAttribute('data-anchor');
                slideIndex = index(v.activeSlide);
            }

            //callback (onLeave) if the site is not just resizing and readjusting the slides
            if(!v.localIsResizing){
                var direction = v.yMovement;

                //required for continousVertical
                if(typeof isMovementUp !== 'undefined'){
                    direction = isMovementUp ? 'up' : 'down';
                }

                //for the callback
                v.direction = direction;

                if(isFunction(options.onLeave)){
                    if(fireCallback('onLeave', v) === false){
                        return;
                    }
                }
            }

            // If continuousVertical && we need to wrap around
            if (options.autoScrolling && options.continuousVertical && typeof (v.isMovementUp) !== "undefined" &&
                ((!v.isMovementUp && v.yMovement == 'up') || // Intending to scroll down but about to go up or
                (v.isMovementUp && v.yMovement == 'down'))) { // intending to scroll up but about to go down

                v = createInfiniteSections(v);
            }

            //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)
            if(!v.localIsResizing){
                stopMedia(v.activeSection);
            }

            if(options.scrollOverflow){
                options.scrollOverflowHandler.beforeLeave();
            }

            addClass(element, ACTIVE);
            removeClass(siblings(element), ACTIVE);
            lazyLoad(element);

            if(options.scrollOverflow){
                options.scrollOverflowHandler.onLeave();
            }

            //preventing from activating the MouseWheelHandler event
            //more than once if the page is scrolling
            canScroll = false || FP.test.isTesting;

            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

            performMovement(v);

            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
            lastScrolledDestiny = v.anchorLink;

            //avoid firing it twice (as it does also on scroll)
            activateMenuAndNav(v.anchorLink, v.sectionIndex);
        }

        /**
        * Dispatch events & callbacks making sure it does it on the right format, depending on
        * whether v2compatible is being used or not.
        */
        function fireCallback(eventName, v){
            var eventData = getEventData(eventName, v);

            if(!options.v2compatible){
                trigger(container, eventName, eventData);

                if(options[eventName].apply(eventData[Object.keys(eventData)[0]], toArray(eventData)) === false){
                    return false;
                }
            }
            else{
                if(options[eventName].apply(eventData[0], eventData.slice(1)) === false){
                    return false;
                }
            }

            return true;
        }

        /**
        * Makes sure to only create a Panel object if the element exist
        */
        function nullOrSection(el){
            return el ? new Section(el) : null;
        }

        function nullOrSlide(el){
            return el ? new Slide(el) : null;
        }

        /**
        * Gets the event's data for the given event on the right format. Depending on whether
        * v2compatible is being used or not.
        */
        function getEventData(eventName, v){
            var paramsPerEvent;

            if(!options.v2compatible){

                //using functions to run only the necessary bits within the object
                paramsPerEvent = {
                    afterRender: function(){
                        return {
                            section: nullOrSection($(SECTION_ACTIVE_SEL)[0]),
                            slide: nullOrSlide($(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0])
                        };
                    },
                    onLeave: function(){
                        return {
                            origin: nullOrSection(v.activeSection),
                            destination: nullOrSection(v.element),
                            direction: v.direction
                        };
                    },

                    afterLoad: function(){
                        return paramsPerEvent.onLeave();
                    },

                    afterSlideLoad: function(){
                        return {
                            section: nullOrSection(v.section),
                            origin: nullOrSlide(v.prevSlide),
                            destination: nullOrSlide(v.destiny),
                            direction: v.direction
                        };
                    },

                    onSlideLeave: function(){
                        return paramsPerEvent.afterSlideLoad();
                    }
                };
            }
            else{
                paramsPerEvent = {
                    afterRender: function(){ return [container]; },
                    onLeave: function(){ return [v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.direction]; },
                    afterLoad: function(){ return [v.element, v.anchorLink, (v.sectionIndex + 1)]; },
                    afterSlideLoad: function(){ return [v.destiny, v.anchorLink, (v.sectionIndex + 1), v.slideAnchor, v.slideIndex]; },
                    onSlideLeave: function(){ return [v.prevSlide, v.anchorLink, (v.sectionIndex + 1), v.prevSlideIndex, v.direction, v.slideIndex]; },
                };
            }

            return paramsPerEvent[eventName]();
        }

        /**
        * Performs the vertical movement (by CSS3 or by jQuery)
        */
        function performMovement(v){
            var isFastSpeed = options.scrollingSpeed < 700;
            var transitionLapse = isFastSpeed ? 700 : options.scrollingSpeed; 

            // using CSS3 translate functionality
            if (options.css3 && options.autoScrolling && !options.scrollBar) {

                // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
                // that's why we round it to 0.
                var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
                transformContainer(translate3d, true);

                //even when the scrollingSpeed is 0 there's a little delay, which might cause the
                //scrollingSpeed to change in case of using silentMoveTo();
                if(options.scrollingSpeed){
                    clearTimeout(afterSectionLoadsId);
                    afterSectionLoadsId = setTimeout(function () {
                        afterSectionLoads(v);

                        //disabling canScroll when using fastSpeed
                        canScroll = !isFastSpeed;
                    }, options.scrollingSpeed);                   
                }else{
                    afterSectionLoads(v);
                }
            }

            // using JS to animate
            else{
                var scrollSettings = getScrollSettings(v.dtop);
                FP.test.top = -v.dtop + 'px';

                css($htmlBody, {'scrollBehavior': 'unset'});

                scrollTo(scrollSettings.element, scrollSettings.options, options.scrollingSpeed, function(){
                    if(options.scrollBar){

                        /* Hack!
                        The timeout prevents setting the most dominant section in the viewport as "active" when the user
                        scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.

                        When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
                        */
                        setTimeout(function(){
                            afterSectionLoads(v);
                        },30);
                    }else{
                        
                        afterSectionLoads(v);

                        //disabling canScroll when using fastSpeed
                        canScroll = !isFastSpeed;
                    }
                });
            }

            // enabling canScroll after the minimum transition laps
            if(isFastSpeed){
                clearTimeout(g_transitionLapseId);
                g_transitionLapseId = setTimeout(function(){
                    canScroll = true;
                }, transitionLapse);
            }
        }

        /**
        * Gets the scrolling settings depending on the plugin autoScrolling option
        */
        function getScrollSettings(top){
            var scroll = {};

            //top property animation
            if(options.autoScrolling && !options.scrollBar){
                scroll.options = -top;
                scroll.element = $(WRAPPER_SEL)[0];
            }

            //window real scrolling
            else{
                scroll.options = top;
                scroll.element = window;
            }

            return scroll;
        }

        /**
        * Adds sections before or after the current one to create the infinite effect.
        */
        function createInfiniteSections(v){
            // Scrolling down
            if (!v.isMovementUp) {
                // Move all previous sections to after the active section
                after($(SECTION_ACTIVE_SEL)[0], prevAll(v.activeSection, SECTION_SEL).reverse());
            }
            else { // Scrolling up
                // Move all next sections to before the active section
                before($(SECTION_ACTIVE_SEL)[0], nextAll(v.activeSection, SECTION_SEL));
            }

            // Maintain the displayed position (now that we changed the element order)
            silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();

            // save for later the elements that still need to be reordered
            v.wrapAroundElements = v.activeSection;

            // Recalculate animation variables
            v.dtop = v.element.offsetTop;
            v.yMovement = getYmovement(v.element);

            return v;
        }

        /**
        * Fix section order after continuousVertical changes have been animated
        */
        function continuousVerticalFixSectionOrder (v) {
            // If continuousVertical is in effect (and autoScrolling would also be in effect then),
            // finish moving the elements around so the direct navigation will function more simply
            if (v.wrapAroundElements == null) {
                return;
            }

            if (v.isMovementUp) {
                before($(SECTION_SEL)[0], v.wrapAroundElements);
            }
            else {
                after($(SECTION_SEL)[$(SECTION_SEL).length-1], v.wrapAroundElements);
            }

            silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();
        }

        /**
        * Actions to do once the section is loaded.
        */
        function afterSectionLoads (v){
            continuousVerticalFixSectionOrder(v);

            //callback (afterLoad) if the site is not just resizing and readjusting the slides
            if(isFunction(options.afterLoad) && !v.localIsResizing){
                fireCallback('afterLoad', v);
            }

            if(options.scrollOverflow){
                options.scrollOverflowHandler.afterLoad();
            }

            if(!v.localIsResizing){
                playMedia(v.element);
            }

            addClass(v.element, COMPLETELY);
            removeClass(siblings(v.element), COMPLETELY);
            lazyLoadOthers();

            canScroll = true;

            if(isFunction(v.callback)){
                v.callback();
            }
        }

        /**
        * Sets the value for the given attribute from the `data-` attribute with the same suffix
        * ie: data-srcset ==> srcset  |  data-src ==> src
        */
        function setSrc(element, attribute){
            element.setAttribute(attribute, element.getAttribute('data-' + attribute));
            element.removeAttribute('data-' + attribute);
        }

        /**
        * Makes sure lazyload is done for other sections in the viewport that are not the
        * active one. 
        */
        function lazyLoadOthers(){
            var hasAutoHeightSections = $(AUTO_HEIGHT_SEL)[0] || isResponsiveMode() && $(AUTO_HEIGHT_RESPONSIVE_SEL)[0];

            //quitting when it doesn't apply
            if (!options.lazyLoading || !hasAutoHeightSections){
                return;
            }

            //making sure to lazy load auto-height sections that are in the viewport
            $(SECTION_SEL + ':not(' + ACTIVE_SEL + ')').forEach(function(section){
                if(isSectionInViewport(section)){
                    lazyLoad(section);
                }
            });
        }

        /**
        * Lazy loads image, video and audio elements.
        */
        function lazyLoad(destiny){
            if (!options.lazyLoading){
                return;
            }

            var panel = getSlideOrSection(destiny);

            $('img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]', panel).forEach(function(element){
                ['src', 'srcset'].forEach(function(type){
                    var attribute = element.getAttribute('data-' + type);
                    if(attribute != null && attribute){
                        setSrc(element, type);
                        element.addEventListener('load', function(){
                            onMediaLoad(destiny);
                        });
                    }
                });

                if(matches(element, 'source')){
                    var elementToPlay =  closest(element, 'video, audio');
                    if(elementToPlay){
                        elementToPlay.load();
                        elementToPlay.onloadeddata = function(){
                            onMediaLoad(destiny);
                        };
                    }
                }
            });
        }

        /**
        * Callback firing when a lazy load media element has loaded.
        * Making sure it only fires one per section in normal conditions (if load time is not huge)
        */
        function onMediaLoad(section){
            if(options.scrollOverflow){
                clearTimeout(g_mediaLoadedId);
                g_mediaLoadedId = setTimeout(function(){
                    if(!hasClass($body, RESPONSIVE)){
                        scrollBarHandler.createScrollBar(section);
                    }
                }, 200);
            }
        }

        /**
        * Plays video and audio elements.
        */
        function playMedia(destiny){
            var panel = getSlideOrSection(destiny);

            //playing HTML5 media elements
            $('video, audio', panel).forEach(function(element){
                if( element.hasAttribute('data-autoplay') && typeof element.play === 'function' ) {
                    element.play();
                }
            });

            //youtube videos
            $('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element){
                if ( element.hasAttribute('data-autoplay') ){
                    playYoutube(element);
                }

                //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.
                element.onload = function() {
                    if ( element.hasAttribute('data-autoplay') ){
                        playYoutube(element);
                    }
                };
            });
        }

        /**
        * Plays a youtube video
        */
        function playYoutube(element){
            element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }

        /**
        * Stops video and audio elements.
        */
        function stopMedia(destiny){
            var panel = getSlideOrSection(destiny);

            //stopping HTML5 media elements
            $('video, audio', panel).forEach(function(element){
                if( !element.hasAttribute('data-keepplaying') && typeof element.pause === 'function' ) {
                    element.pause();
                }
            });

            //youtube videos
            $('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element){
                if( /youtube\.com\/embed\//.test(element.getAttribute('src')) && !element.hasAttribute('data-keepplaying')){
                    element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
                }
            });
        }

        /**
        * Gets the active slide (or section) for the given section
        */
        function getSlideOrSection(destiny){
            var slide = $(SLIDE_ACTIVE_SEL, destiny);
            if( slide.length ) {
                destiny = slide[0];
            }

            return destiny;
        }

        /**
        * Scrolls to the anchor in the URL when loading the site
        */
        function scrollToAnchor(){
            var anchors =  getAnchorsURL();
            var sectionAnchor = anchors.section;
            var slideAnchor = anchors.slide;

            if(sectionAnchor){  //if theres any #
                if(options.animateAnchor){
                    scrollPageAndSlide(sectionAnchor, slideAnchor);
                }else{
                    silentMoveTo(sectionAnchor, slideAnchor);
                }
            }
        }

        /**
        * Detecting any change on the URL to scroll to the given anchor link
        * (a way to detect back history button as we play with the hashes on the URL)
        */
        function hashChangeHandler(){
            if(!isScrolling && !options.lockAnchors){
                var anchors = getAnchorsURL();
                var sectionAnchor = anchors.section;
                var slideAnchor = anchors.slide;

                //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
                var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
                var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !slideMoving);

                if(sectionAnchor && sectionAnchor.length){
                    /*in order to call scrollpage() only once for each destination at a time
                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                    event is fired on every scroll too.*/
                    if ((sectionAnchor && sectionAnchor !== lastScrolledDestiny) && !isFirstSlideMove
                        || isFirstScrollMove
                        || (!slideMoving && lastScrolledSlide != slideAnchor )){

                        scrollPageAndSlide(sectionAnchor, slideAnchor);
                    }
                }
            }
        }

        //gets the URL anchors (section and slide)
        function getAnchorsURL(){
            var section;
            var slide;
            var hash = window.location.hash;

            if(hash.length){
                //getting the anchor link in the URL and deleting the `#`
                var anchorsParts =  hash.replace('#', '').split('/');

                //using / for visual reasons and not as a section/slide separator #2803
                var isFunkyAnchor = hash.indexOf('#/') > -1;

                section = isFunkyAnchor ? '/' + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);

                var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];
                if(slideAnchor && slideAnchor.length){
                    slide = decodeURIComponent(slideAnchor);
                }
            }

            return {
                section: section,
                slide: slide
            };
        }

        //Sliding with arrow keys, both, vertical and horizontal
        function keydownHandler(e) {
            clearTimeout(keydownId);

            var activeElement = document.activeElement;
            var keyCode = e.keyCode;

            //tab?
            if(keyCode === 9){
                onTab(e);
            }

            else if(!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select') &&
                activeElement.getAttribute('contentEditable') !== "true" && activeElement.getAttribute('contentEditable') !== '' &&
                options.keyboardScrolling && options.autoScrolling){

                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
                var keyControls = [40, 38, 32, 33, 34];
                if(keyControls.indexOf(keyCode) > -1){
                    preventDefault(e);
                }

                controlPressed = e.ctrlKey;

                keydownId = setTimeout(function(){
                    onkeydown(e);
                },150);
            }
        }

        function tooltipTextHandler(){
            /*jshint validthis:true */
            trigger(prev(this), 'click');
        }

        //to prevent scrolling while zooming
        function keyUpHandler(e){
            if(isWindowFocused){ //the keyup gets fired on new tab ctrl + t in Firefox
                controlPressed = e.ctrlKey;
            }
        }

        //binding the mousemove when the mouse's middle button is released
        function mouseDownHandler(e){
            //middle button
            if (e.which == 2){
                oldPageY = e.pageY;
                container.addEventListener('mousemove', mouseMoveHandler);
            }
        }

        //unbinding the mousemove when the mouse's middle button is released
        function mouseUpHandler(e){
            //middle button
            if (e.which == 2){
                container.removeEventListener('mousemove', mouseMoveHandler);
            }
        }

        /**
        * Makes sure the tab key will only focus elements within the current section/slide
        * preventing this way from breaking the page.
        * Based on "Modals and keyboard traps"
        * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
        */
        function onTab(e){
            var isShiftPressed = e.shiftKey;
            var activeElement = document.activeElement;
            var focusableElements = getFocusables(getSlideOrSection($(SECTION_ACTIVE_SEL)[0]));

            function preventAndFocusFirst(e){
                preventDefault(e);
                return focusableElements[0] ? focusableElements[0].focus() : null;
            }

            //outside any section or slide? Let's not hijack the tab!
            if(isFocusOutside(e)){
                return;
            }

            //is there an element with focus?
            if(activeElement){
                if(closest(activeElement, SECTION_ACTIVE_SEL + ',' + SECTION_ACTIVE_SEL + ' ' + SLIDE_ACTIVE_SEL) == null){
                    activeElement = preventAndFocusFirst(e);
                }
            }

            //no element if focused? Let's focus the first one of the section/slide
            else{
                preventAndFocusFirst(e);
            }

            //when reached the first or last focusable element of the section/slide
            //we prevent the tab action to keep it in the last focusable element
            if(!isShiftPressed && activeElement == focusableElements[focusableElements.length - 1] ||
                isShiftPressed && activeElement == focusableElements[0]
            ){
                preventDefault(e);
            }
        }

        /**
        * Gets all the focusable elements inside the passed element.
        */
        function getFocusables(el){
            return [].slice.call($(focusableElementsString, el)).filter(function(item) {
                    return item.getAttribute('tabindex') !== '-1'
                    //are also not hidden elements (or with hidden parents)
                    && item.offsetParent !== null;
            });
        }

        /**
        * Determines whether the focus is outside fullpage.js sections/slides or not.
        */
        function isFocusOutside(e){
            var allFocusables = getFocusables(document);
            var currentFocusIndex = allFocusables.indexOf(document.activeElement);
            var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1;
            var focusDestination = allFocusables[focusDestinationIndex];
            var destinationItemSlide = nullOrSlide(closest(focusDestination, SLIDE_SEL));
            var destinationItemSection = nullOrSection(closest(focusDestination, SECTION_SEL));

            return !destinationItemSlide && !destinationItemSection;
        }

        //Scrolling horizontally when clicking on the slider controls.
        function slideArrowHandler(){
            /*jshint validthis:true */
            var section = closest(this, SECTION_SEL);

            /*jshint validthis:true */
            if (hasClass(this, SLIDES_PREV)) {
                if(isScrollAllowed.m.left){
                    moveSlideLeft(section);
                }
            } else {
                if(isScrollAllowed.m.right){
                    moveSlideRight(section);
                }
            }
        }
        
        // changing isWindowFocused to true on focus event
        function focusHandler(){
            isWindowFocused = true;
        }

        //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
        function blurHandler(){
            isWindowFocused = false;
            controlPressed = false;
        }

        //Scrolls to the section when clicking the navigation bullet
        function sectionBulletHandler(e){
            preventDefault(e);

            /*jshint validthis:true */
            var indexBullet = index(closest(this, SECTION_NAV_SEL + ' li'));
            scrollPage($(SECTION_SEL)[indexBullet]);
        }

        //Scrolls the slider to the given slide destination for the given section
        function slideBulletHandler(e){
            preventDefault(e);

            /*jshint validthis:true */
            var slides = $(SLIDES_WRAPPER_SEL, closest(this, SECTION_SEL))[0];
            var destiny = $(SLIDE_SEL, slides)[index(closest(this, 'li'))];

            landscapeScroll(slides, destiny);
        }

        //Menu item handler when not using anchors or using lockAnchors:true
        function menuItemsHandler(e){
            if($(options.menu)[0] && (options.lockAnchors || !options.anchors.length)){
                preventDefault(e);
                /*jshint validthis:true */
                moveTo(this.getAttribute('data-menuanchor'));
            }
        }

        /**
        * Keydown event
        */
        function onkeydown(e){
            var shiftPressed = e.shiftKey;
            var activeElement = document.activeElement;
            var isMediaFocused = matches(activeElement, 'video') || matches(activeElement, 'audio');

            //do nothing if we can not scroll or we are not using horizotnal key arrows.
            if(!canScroll && [37,39].indexOf(e.keyCode) < 0){
                return;
            }

            switch (e.keyCode) {
                //up
                case 38:
                case 33:
                    if(isScrollAllowed.k.up){
                        moveSectionUp();
                    }
                    break;

                //down
                case 32: //spacebar

                    if(shiftPressed && isScrollAllowed.k.up && !isMediaFocused){
                        moveSectionUp();
                        break;
                    }
                /* falls through */
                case 40:
                case 34:
                    if(isScrollAllowed.k.down){
                        // space bar?
                        if(e.keyCode !== 32 || !isMediaFocused){
                            moveSectionDown();
                        }
                    }
                    break;

                //Home
                case 36:
                    if(isScrollAllowed.k.up){
                        moveTo(1);
                    }
                    break;

                //End
                case 35:
                     if(isScrollAllowed.k.down){
                        moveTo( $(SECTION_SEL).length );
                    }
                    break;

                //left
                case 37:
                    if(isScrollAllowed.k.left){
                        moveSlideLeft();
                    }
                    break;

                //right
                case 39:
                    if(isScrollAllowed.k.right){
                        moveSlideRight();
                    }
                    break;

                default:
                    return; // exit this handler for other keys
            }
        }

        /**
        * Detecting the direction of the mouse movement.
        * Used only for the middle button of the mouse.
        */
        var oldPageY = 0;
        function mouseMoveHandler(e){
            if(!options.autoScrolling){
                return;
            }
            if(canScroll){
                // moving up
                if (e.pageY < oldPageY && isScrollAllowed.m.up){
                    moveSectionUp();
                }

                // moving down
                else if(e.pageY > oldPageY && isScrollAllowed.m.down){
                    moveSectionDown();
                }
            }
            oldPageY = e.pageY;
        }

        /**
        * Scrolls horizontal sliders.
        */
        function landscapeScroll(slides, destiny, direction){
            var section = closest(slides, SECTION_SEL);
            var v = {
                slides: slides,
                destiny: destiny,
                direction: direction,
                destinyPos: {left: destiny.offsetLeft},
                slideIndex: index(destiny),
                section: section,
                sectionIndex: index(section, SECTION_SEL),
                anchorLink: section.getAttribute('data-anchor'),
                slidesNav: $(SLIDES_NAV_SEL, section)[0],
                slideAnchor: getAnchor(destiny),
                prevSlide: $(SLIDE_ACTIVE_SEL, section)[0],
                prevSlideIndex: index($(SLIDE_ACTIVE_SEL, section)[0]),

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };
            v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);
            v.direction = v.direction ? v.direction : v.xMovement;

            //important!! Only do it when not resizing
            if(!v.localIsResizing){
                //preventing from scrolling to the next/prev section when using scrollHorizontally
                canScroll = false;
            }

            if(options.onSlideLeave){

                //if the site is not just resizing and readjusting the slides
                if(!v.localIsResizing && v.xMovement!=='none'){
                    if(isFunction( options.onSlideLeave )){
                        if( fireCallback('onSlideLeave', v) === false){
                            slideMoving = false;
                            return;
                        }
                    }
                }
            }

            addClass(destiny, ACTIVE);
            removeClass(siblings(destiny), ACTIVE);

            if(!v.localIsResizing){
                stopMedia(v.prevSlide);
                lazyLoad(destiny);
            }

            if(!options.loopHorizontal && options.controlArrows){
                //hidding it for the fist slide, showing for the rest
                toggle($(SLIDES_ARROW_PREV_SEL, section), v.slideIndex!==0);

                //hidding it for the last slide, showing for the rest
                toggle($(SLIDES_ARROW_NEXT_SEL, section), next(destiny) != null);
            }

            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
            if(hasClass(section, ACTIVE) && !v.localIsResizing){
                setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);
            }

            performHorizontalMove(slides, v, true);
        }


        function afterSlideLoads(v){
            activeSlidesNavigation(v.slidesNav, v.slideIndex);

            //if the site is not just resizing and readjusting the slides
            if(!v.localIsResizing){
                if(isFunction( options.afterSlideLoad )){
                    fireCallback('afterSlideLoad', v);
                }

                //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
                //and to prevent double scroll right after a windows resize
                canScroll = true;

                playMedia(v.destiny);
            }

            //letting them slide again
            slideMoving = false;
        }

        /**
        * Performs the horizontal movement. (CSS3 or jQuery)
        *
        * @param fireCallback {Bool} - determines whether or not to fire the callback
        */
        function performHorizontalMove(slides, v, fireCallback){
            var destinyPos = v.destinyPos;

            if(options.css3){
                var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';

                FP.test.translate3dH[v.sectionIndex] = translate3d;
                css(addAnimation($(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));

                afterSlideLoadsId = setTimeout(function(){
                    if(fireCallback){
                        afterSlideLoads(v);
                    }
                }, options.scrollingSpeed);
            }else{
                FP.test.left[v.sectionIndex] = Math.round(destinyPos.left);

                scrollTo(slides, Math.round(destinyPos.left), options.scrollingSpeed, function(){
                    if(fireCallback){
                        afterSlideLoads(v);
                    }
                });
            }
        }

        /**
        * Sets the state for the horizontal bullet navigations.
        */
        function activeSlidesNavigation(slidesNav, slideIndex){
            if(options.slidesNavigation && slidesNav != null){
                removeClass($(ACTIVE_SEL, slidesNav), ACTIVE);
                addClass( $('a', $('li', slidesNav)[slideIndex] ), ACTIVE);
            }
        }

        var previousHeight = windowsHeight;

        /*
        * Resize event handler.
        */        
        function resizeHandler(){
            clearTimeout(resizeId);

            //in order to call the functions only when the resize is finished
            //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing    
            resizeId = setTimeout(function(){

                //issue #3336 
                //(some apps or browsers, like Chrome/Firefox for Mobile take time to report the real height)
                //so we check it 3 times with intervals in that case
                for(var i = 0; i< 4; i++){
                    resizeHandlerId = setTimeout(resizeActions, 200 * i);
                }
            }, 200);
        }

        /**
        * When resizing the site, we adjust the heights of the sections, slimScroll...
        */
        function resizeActions(){
            isResizing = true;

            //checking if it needs to get responsive
            responsive();

            // rebuild immediately on touch devices
            if (isTouchDevice) {
                var activeElement = document.activeElement;

                //if the keyboard is NOT visible
                if (!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select')) {
                    var currentHeight = getWindowHeight();

                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
                    if( Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100) ){
                        reBuild(true);
                        previousHeight = currentHeight;
                    }
                }
            }
            else{
                adjustToNewViewport();
            }

            isResizing = false;
        }

        /**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */
        function responsive(){
            var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity
            var heightLimit = options.responsiveHeight;

            //only calculating what we need. Remember its called on the resize event.
            var isBreakingPointWidth = widthLimit && window.innerWidth < widthLimit;
            var isBreakingPointHeight = heightLimit && window.innerHeight < heightLimit;

            if(widthLimit && heightLimit){
                setResponsive(isBreakingPointWidth || isBreakingPointHeight);
            }
            else if(widthLimit){
                setResponsive(isBreakingPointWidth);
            }
            else if(heightLimit){
                setResponsive(isBreakingPointHeight);
            }
        }

        /**
        * Adds transition animations for the given element
        */
        function addAnimation(element){
            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;

            removeClass(element, NO_TRANSITION);
            return css(element, {
                'webkitTransition': transition,
                'transition': transition
            });
        }

        /**
        * Remove transition animations for the given element
        */
        function removeAnimation(element){
            return addClass(element, NO_TRANSITION);
        }

        /**
        * Activating the vertical navigation bullets according to the given slide name.
        */
        function activateNavDots(name, sectionIndex){
            if(options.navigation && $(SECTION_NAV_SEL)[0] != null){
                    removeClass($(ACTIVE_SEL, $(SECTION_NAV_SEL)[0]), ACTIVE);
                if(name){
                    addClass( $('a[href="#' + name + '"]', $(SECTION_NAV_SEL)[0]), ACTIVE);
                }else{
                    addClass($('a', $('li', $(SECTION_NAV_SEL)[0])[sectionIndex]), ACTIVE);
                }
            }
        }

        /**
        * Activating the website main menu elements according to the given slide name.
        */
        function activateMenuElement(name){
            $(options.menu).forEach(function(menu) {
                if(options.menu && menu != null){
                    removeClass($(ACTIVE_SEL, menu), ACTIVE);
                    addClass($('[data-menuanchor="'+name+'"]', menu), ACTIVE);
                }
            });
        }

        /**
        * Sets to active the current menu and vertical nav items.
        */
        function activateMenuAndNav(anchor, index){
            activateMenuElement(anchor);
            activateNavDots(anchor, index);
        }

        /**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */
        function getYmovement(destiny){
            var fromIndex = index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);
            var toIndex = index(destiny, SECTION_SEL);
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'up';
            }
            return 'down';
        }

        /**
        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
        * from the current slide.
        */
        function getXmovement(fromIndex, toIndex){
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'left';
            }
            return 'right';
        }

        function addTableClass(element){
            //In case we are styling for the 2nd time as in with reponsiveSlides
            if(!hasClass(element, TABLE)){
                var wrapper = document.createElement('div');
                wrapper.className = TABLE_CELL;
                wrapper.style.height = getTableHeight(element) + 'px';

                addClass(element, TABLE);
                wrapInner(element, wrapper);
            }
        }

        function getTableHeight(element){
            var sectionHeight = windowsHeight;

            if(options.paddingTop || options.paddingBottom){
                var section = element;
                if(!hasClass(section, SECTION)){
                    section = closest(element, SECTION_SEL);
                }

                var paddings = parseInt(getComputedStyle(section)['padding-top']) + parseInt(getComputedStyle(section)['padding-bottom']);
                sectionHeight = (windowsHeight - paddings);
            }

            return sectionHeight;
        }

        /**
        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
        */
        function transformContainer(translate3d, animated){
            if(animated){
                addAnimation(container);
            }else{
                removeAnimation(container);
            }

            css(container, getTransforms(translate3d));
            FP.test.translate3d = translate3d;

            //syncronously removing the class after the animation has been applied.
            setTimeout(function(){
                removeClass(container, NO_TRANSITION);
            },10);
        }

        /**
        * Gets a section by its anchor / index
        */
        function getSectionByAnchor(sectionAnchor){
            var section = $(SECTION_SEL + '[data-anchor="'+sectionAnchor+'"]', container)[0];
            if(!section){
                var sectionIndex = typeof sectionAnchor !== 'undefined' ? sectionAnchor -1 : 0;
                section = $(SECTION_SEL)[sectionIndex];
            }

            return section;
        }

        /**
        * Gets a slide inside a given section by its anchor / index
        */
        function getSlideByAnchor(slideAnchor, section){
            var slide = $(SLIDE_SEL + '[data-anchor="'+slideAnchor+'"]', section)[0];
            if(slide == null){
                slideAnchor = typeof slideAnchor !== 'undefined' ? slideAnchor : 0;
                slide = $(SLIDE_SEL, section)[slideAnchor];
            }

            return slide;
        }

        /**
        * Scrolls to the given section and slide anchors
        */
        function scrollPageAndSlide(sectionAnchor, slideAnchor){
            var section = getSectionByAnchor(sectionAnchor);

            //do nothing if there's no section with the given anchor name
            if(section == null) return;

            var slide = getSlideByAnchor(slideAnchor, section);

            //we need to scroll to the section and then to the slide
            if (getAnchor(section) !== lastScrolledDestiny && !hasClass(section, ACTIVE)){
                scrollPage(section, function(){
                    scrollSlider(slide);
                });
            }
            //if we were already in the section
            else{
                scrollSlider(slide);
            }
        }

        /**
        * Scrolls the slider to the given slide destination for the given section
        */
        function scrollSlider(slide){
            if(slide != null){
                landscapeScroll(closest(slide, SLIDES_WRAPPER_SEL), slide);
            }
        }

        /**
        * Creates a landscape navigation bar with dots for horizontal sliders.
        */
        function addSlidesNavigation(section, numSlides){
            appendTo(createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), section);
            var nav = $(SLIDES_NAV_SEL, section)[0];

            //top or bottom
            addClass(nav, 'fp-' + options.slidesNavPosition);

            for(var i=0; i< numSlides; i++){
                var slide = $(SLIDE_SEL, section)[i];
                appendTo(createElementFromHTML('<li><a href="#"><span class="fp-sr-only">'+ getBulletLinkName(i, 'Slide', slide) +'</span><span></span></a></li>'), $('ul', nav)[0] );
            }

            //centering it
            css(nav, {'marginLeft': '-' + (nav.innerWidth/2) + 'px'});

            addClass($('a', $('li', nav)[0] ), ACTIVE);
        }


        /**
        * Sets the state of the website depending on the active section/slide.
        * It changes the URL hash when needed and updates the body class.
        */
        function setState(slideIndex, slideAnchor, anchorLink, sectionIndex){
            var sectionHash = '';

            if(options.anchors.length && !options.lockAnchors){

                //isn't it the first slide?
                if(slideIndex){
                    if(anchorLink != null){
                        sectionHash = anchorLink;
                    }

                    //slide without anchor link? We take the index instead.
                    if(slideAnchor == null){
                        slideAnchor = slideIndex;
                    }

                    lastScrolledSlide = slideAnchor;
                    setUrlHash(sectionHash + '/' + slideAnchor);

                //first slide won't have slide anchor, just the section one
                }else if(slideIndex != null){
                    lastScrolledSlide = slideAnchor;
                    setUrlHash(anchorLink);
                }

                //section without slides
                else{
                    setUrlHash(anchorLink);
                }
            }

            setBodyClass();
        }

        /**
        * Sets the URL hash.
        */
        function setUrlHash(url){
            if(options.recordHistory){
                location.hash = url;
            }else{
                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
                if(isTouchDevice || isTouch){
                    window.history.replaceState(undefined, undefined, '#' + url);
                }else{
                    var baseUrl = window.location.href.split('#')[0];
                    window.location.replace( baseUrl + '#' + url );
                }
            }
        }

        /**
        * Gets the anchor for the given slide / section. Its index will be used if there's none.
        */
        function getAnchor(element){
            if(!element){
                return null;
            }
            var anchor = element.getAttribute('data-anchor');
            var elementIndex = index(element);

            //Slide without anchor link? We take the index instead.
            if(anchor == null){
                anchor = elementIndex;
            }

            return anchor;
        }

        /**
        * Sets a class for the body of the page depending on the active section / slide
        */
        function setBodyClass(){
            var section = $(SECTION_ACTIVE_SEL)[0];
            var slide = $(SLIDE_ACTIVE_SEL, section)[0];

            var sectionAnchor = getAnchor(section);
            var slideAnchor = getAnchor(slide);

            var text = String(sectionAnchor);

            if(slide){
                text = text + '-' + slideAnchor;
            }

            //changing slash for dash to make it a valid CSS style
            text = text.replace('/', '-').replace('#','');

            //removing previous anchor classes
            var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
            $body.className = $body.className.replace(classRe, '');

            //adding the current anchor
            addClass($body, VIEWING_PREFIX + '-' + text);
        }

        /**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */
        function support3d() {
            var el = document.createElement('p'),
                has3d,
                transforms = {
                    'webkitTransform':'-webkit-transform',
                    'OTransform':'-o-transform',
                    'msTransform':'-ms-transform',
                    'MozTransform':'-moz-transform',
                    'transform':'transform'
                };

            //preventing the style p:empty{display: none;} from returning the wrong result
            el.style.display = 'block';

            // Add it to the body to get the computed style.
            document.body.insertBefore(el, null);

            for (var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] = 'translate3d(1px,1px,1px)';
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }

            document.body.removeChild(el);

            return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
        }

        /**
        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
        */
        function removeMouseWheelHandler(){
            if (document.addEventListener) {
                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
                document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
            } else {
                document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
        * Adds the auto scrolling action for the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements will scroll through sections
        * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
        */
        function addMouseWheelHandler(){
            var prefix = '';
            var _addEventListener;

            if (window.addEventListener){
                _addEventListener = "addEventListener";
            }else{
                _addEventListener = "attachEvent";
                prefix = 'on';
            }

            // detect available wheel event
            var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
                      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
                      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox
            var passiveEvent = g_supportsPassive ? {passive: false }: false;

            if(support == 'DOMMouseScroll'){
                document[ _addEventListener ](prefix + 'MozMousePixelScroll', MouseWheelHandler, passiveEvent);
            }

            //handle MozMousePixelScroll in older Firefox
            else{
                document[ _addEventListener ](prefix + support, MouseWheelHandler, passiveEvent);
            }
        }

        /**
        * Binding the mousemove when the mouse's middle button is pressed
        */
        function addMiddleWheelHandler(){
            container.addEventListener('mousedown', mouseDownHandler);
            container.addEventListener('mouseup', mouseUpHandler);
        }

        /**
        * Unbinding the mousemove when the mouse's middle button is released
        */
        function removeMiddleWheelHandler(){
            container.removeEventListener('mousedown', mouseDownHandler);
            container.removeEventListener('mouseup', mouseUpHandler);
        }

        /**
        * Adds the possibility to auto scroll through sections on touch devices.
        */
        function addTouchHandler(){
            if(isTouchDevice || isTouch){
                if(options.autoScrolling){
                    $body.removeEventListener(events.touchmove, preventBouncing, {passive: false});
                    $body.addEventListener(events.touchmove, preventBouncing, {passive: false});
                }

                var touchWrapper = options.touchWrapper;
                touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
                touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {passive: false});

                touchWrapper.addEventListener(events.touchstart, touchStartHandler);
                touchWrapper.addEventListener(events.touchmove, touchMoveHandler, {passive: false});
            }
        }

        /**
        * Removes the auto scrolling for touch devices.
        */
        function removeTouchHandler(){
            if(isTouchDevice || isTouch){
                // normalScrollElements requires it off #2691
                if(options.autoScrolling){
                    $body.removeEventListener(events.touchmove, touchMoveHandler, {passive: false});
                    $body.removeEventListener(events.touchmove, preventBouncing, {passive: false});
                }

                var touchWrapper = options.touchWrapper;
                touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
                touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {passive: false});
            }
        }

        /*
        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
        */
        function getMSPointer(){
            var pointer;

            //IE >= 11 & rest of browsers
            if(window.PointerEvent){
                pointer = { down: 'pointerdown', move: 'pointermove'};
            }

            //IE < 11
            else{
                pointer = { down: 'MSPointerDown', move: 'MSPointerMove'};
            }

            return pointer;
        }

        /**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */
        function getEventsPage(e){
            var events = [];

            events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
            events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

            //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
            if(isTouch && isReallyTouch(e) && options.scrollBar && typeof e.touches !== 'undefined'){
                events.y = e.touches[0].pageY;
                events.x = e.touches[0].pageX;
            }

            return events;
        }

        /**
        * Slides silently (with no animation) the active slider to the given slide.
        * @param noCallback {bool} true or defined -> no callbacks
        */
        function silentLandscapeScroll(activeSlide, noCallbacks){
            setScrollingSpeed(0, 'internal');

            if(typeof noCallbacks !== 'undefined'){
                //preventing firing callbacks afterSlideLoad etc.
                isResizing = true;
            }

            landscapeScroll(closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);

            if(typeof noCallbacks !== 'undefined'){
                isResizing = false;
            }

            setScrollingSpeed(originals.scrollingSpeed, 'internal');
        }

        /**
        * Scrolls silently (with no animation) the page to the given Y position.
        */
        function silentScroll(top){
            // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
            // that's why we round it to 0.
            var roundedTop = Math.round(top);

            if (options.css3 && options.autoScrolling && !options.scrollBar){
                var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
                transformContainer(translate3d, false);
            }
            else if(options.autoScrolling && !options.scrollBar){
                css(container, {'top': -roundedTop + 'px'});
                FP.test.top = -roundedTop + 'px';
            }
            else{
                var scrollSettings = getScrollSettings(roundedTop);
                setScrolling(scrollSettings.element, scrollSettings.options);
            }
        }

        /**
        * Returns the cross-browser transform string.
        */
        function getTransforms(translate3d){
            return {
                '-webkit-transform': translate3d,
                '-moz-transform': translate3d,
                '-ms-transform':translate3d,
                'transform': translate3d
            };
        }

        /**
        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
        * @type  m (mouse) or k (keyboard)
        */
        function setIsScrollAllowed(value, direction, type){
            //up, down, left, right
            if(direction !== 'all'){
                isScrollAllowed[type][direction] = value;
            }

            //all directions?
            else{
                Object.keys(isScrollAllowed[type]).forEach(function(key){
                    isScrollAllowed[type][key] = value;
                });
            }
        }

        /*
        * Destroys fullpage.js plugin events and optinally its html markup and styles
        */
        function destroy(all){
            setAutoScrolling(false, 'internal');
            setAllowScrolling(true);
            setMouseHijack(false);
            setKeyboardScrolling(false);
            addClass(container, DESTROYED);

            [
                afterSlideLoadsId, 
                afterSectionLoadsId,
                resizeId,
                scrollId,
                scrollId2,
                g_doubleCheckHeightId,
                resizeHandlerId,
                g_transitionLapseId
            ].forEach(function(timeoutId){
                clearTimeout(timeoutId);
            });

            window.removeEventListener('scroll', scrollHandler);
            window.removeEventListener('hashchange', hashChangeHandler);
            window.removeEventListener('resize', resizeHandler);

            document.removeEventListener('keydown', keydownHandler);
            document.removeEventListener('keyup', keyUpHandler);

            ['click', 'touchstart'].forEach(function(eventName){
                document.removeEventListener(eventName, delegatedEvents);
            });

            ['mouseenter', 'touchstart', 'mouseleave', 'touchend'].forEach(function(eventName){
                document.removeEventListener(eventName, onMouseEnterOrLeave, true); //true is required!
            });

            //lets make a mess!
            if(all){
                destroyStructure();
            }
        }

        /*
        * Removes inline styles added by fullpage.js
        */
        function destroyStructure(){
            //reseting the `top` or `translate` properties to 0
            silentScroll(0);

            //loading all the lazy load content
            $('img[data-src], source[data-src], audio[data-src], iframe[data-src]', container).forEach(function(item){
                setSrc(item, 'src');
            });

            $('img[data-srcset]').forEach(function(item){
                setSrc(item, 'srcset');
            });

            remove($(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL +  ', ' + SLIDES_ARROW_SEL));

            //removing inline styles
            css($(SECTION_SEL), {
                'height': '',
                'backgroundColor' : '',
                'padding': ''
            });

            css($(SLIDE_SEL), {
                'width': ''
            });

            css(container, {
                'height': '',
                'position': '',
                'msTouchAction': '',
                'touchAction': ''
            });

            css($htmlBody, {
                'overflow': '',
                'height': ''
            });

            // remove .fp-enabled class
            removeClass($html, ENABLED);

            // remove .fp-responsive class
            removeClass($body, RESPONSIVE);

            // remove all of the .fp-viewing- classes
            $body.className.split(/\s+/).forEach(function (className) {
                if (className.indexOf(VIEWING_PREFIX) === 0) {
                    removeClass($body, className);
                }
            });

            //removing added classes
            $(SECTION_SEL + ', ' + SLIDE_SEL).forEach(function(item){
                if(options.scrollOverflowHandler && options.scrollOverflow){
                    options.scrollOverflowHandler.remove(item);
                }
                removeClass(item, TABLE + ' ' + ACTIVE + ' ' + COMPLETELY);
                var previousStyles = item.getAttribute('data-fp-styles');
                if(previousStyles){
                    item.setAttribute('style', item.getAttribute('data-fp-styles'));
                }

                //removing anchors if they were not set using the HTML markup
                if(hasClass(item, SECTION) && !g_initialAnchorsInDom){
                    item.removeAttribute('data-anchor');
                }
            });

            //removing the applied transition from the fullpage wrapper
            removeAnimation(container);

            //Unwrapping content
            [TABLE_CELL_SEL, SLIDES_CONTAINER_SEL,SLIDES_WRAPPER_SEL].forEach(function(selector){
                $(selector, container).forEach(function(item){
                    //unwrap not being use in case there's no child element inside and its just text
                    unwrap(item);
                });
            });

            //removing the applied transition from the fullpage wrapper
            css(container, {
                'webkitTransition': 'none',
                'transition': 'none'
            });

            //scrolling the page to the top with no animation
            window.scrollTo(0, 0);

            //removing selectors
            var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
            usedSelectors.forEach(function(item){
                removeClass($('.' + item), item);
            });
        }

        /*
        * Sets the state for a variable with multiple states (original, and temporal)
        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
        * This function is used to keep track of both states, the original and the temporal one.
        * If type is not 'internal', then we assume the user is globally changing the variable.
        */
        function setVariableState(variable, value, type){
            options[variable] = value;
            if(type !== 'internal'){
                originals[variable] = value;
            }
        }

        /**
        * Displays warnings
        */
        function displayWarnings(){
            var l = options['li' + 'c' + 'enseK' + 'e' + 'y'];
            var msgStyle = 'font-size: 15px;background:yellow;';

            if(!isOK){
                // showError('error', 'Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:');
                // showError('error', 'https://github.com/alvarotrigo/fullPage.js#options');
            }
            else if(l && l.length < 20){
                console.warn('%c This website was made using fullPage.js slider. More info on the following website:', msgStyle);
                console.warn('%c https://alvarotrigo.com/fullPage/', msgStyle);
            }

            if(hasClass($html, ENABLED)){
                showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
                return;
            }

            // Disable mutually exclusive settings
            if (options.continuousVertical &&
                (options.loopTop || options.loopBottom)) {
                options.continuousVertical = false;
                showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if(options.scrollOverflow &&
               (options.scrollBar || !options.autoScrolling)){
                showError('warn', 'Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox');
            }

            if(options.continuousVertical && (options.scrollBar || !options.autoScrolling)){
                options.continuousVertical = false;
                showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if(options.scrollOverflow && options.scrollOverflowHandler == null){
                options.scrollOverflow = false;
                showError('error', 'The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.');
            }

            //using extensions? Wrong file!
            extensions.forEach(function(extension){
                //is the option set to true?
                if(options[extension]){
                    showError('warn', 'fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: '+ extension);
                }
            });

            //anchors can not have the same value as any element ID or NAME
            options.anchors.forEach(function(name){

                //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
                var nameAttr = [].slice.call($('[name]')).filter(function(item) {
                    return item.getAttribute('name') && item.getAttribute('name').toLowerCase() == name.toLowerCase();
                });

                var idAttr = [].slice.call($('[id]')).filter(function(item) {
                    return item.getAttribute('id') && item.getAttribute('id').toLowerCase() == name.toLowerCase();
                });

                if(idAttr.length || nameAttr.length ){
                    showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
                    var propertyName = idAttr.length ? 'id' : 'name';

                    if(idAttr.length || nameAttr.length){
                        showError('error', '"' + name + '" is is being used by another element `'+ propertyName +'` property');
                    }
                }
            });
        }

        /**
        * Getting the position of the element to scroll when using jQuery animations
        */
        function getScrolledPosition(element){
            var position;

            //is not the window element and is a slide?
            if(element.self != window && hasClass(element, SLIDES_WRAPPER)){
                position = element.scrollLeft;
            }
            else if(!options.autoScrolling  || options.scrollBar){
                position = getScrollTop();
            }
            else{
                position = element.offsetTop;
            }

            //gets the top property of the wrapper
            return position;
        }

        /**
        * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
        * http://stackoverflow.com/a/16136789/1081396
        */
        function scrollTo(element, to, duration, callback) {
            var start = getScrolledPosition(element);
            var change = to - start;
            var currentTime = 0;
            var increment = 20;
            activeAnimation = true;

            var animateScroll = function(){
                if(activeAnimation){ //in order to stope it from other function whenever we want
                    var val = to;

                    currentTime += increment;

                    if(duration){
                        val = window.fp_easings[options.easing](currentTime, start, change, duration);
                    }

                    setScrolling(element, val);

                    if(currentTime < duration) {
                        setTimeout(animateScroll, increment);
                    }else if(typeof callback !== 'undefined'){
                        callback();
                    }
                }else if (currentTime < duration){
                    callback();
                }
            };

            animateScroll();
        }

        /**
        * Scrolls the page / slider the given number of pixels.
        * It will do it one or another way dependiong on the library's config.
        */
        function setScrolling(element, val){
            if(!options.autoScrolling || options.scrollBar || (element.self != window && hasClass(element, SLIDES_WRAPPER))){

                //scrolling horizontally through the slides?
                if(element.self != window  && hasClass(element, SLIDES_WRAPPER)){
                    element.scrollLeft = val;
                }
                //vertical scroll
                else{
                    element.scrollTo(0, val);
                }
            }else{
                 element.style.top = val + 'px';
            }
        }

        /**
        * Gets the active slide.
        */
        function getActiveSlide(){
            var activeSlide = $(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0];
            return nullOrSlide(activeSlide);
        }

        /**
        * Gets the active section.
        */
        function getActiveSection(){
            return new Section($(SECTION_ACTIVE_SEL)[0]);
        }

        /**
        * Item. Slide or Section objects share the same properties.
        */
        function Item(el, selector){
            this.anchor = el.getAttribute('data-anchor');
            this.item = el;
            this.index = index(el, selector);
            this.isLast = this.index === el.parentElement.querySelectorAll(selector).length -1;
            this.isFirst = !this.index;
        }

        /**
        * Section object
        */
        function Section(el){
            Item.call(this, el, SECTION_SEL);
        }

        /**
        * Slide object
        */
        function Slide(el){
            Item.call(this, el, SLIDE_SEL);
        }

        return FP;
    } //end of $.fn.fullpage

    //utils
    /**
    * Shows a message in the console of the given type.
    */
    function showError(type, text){
        window.console && window.console[type] && window.console[type]('fullPage: ' + text);
    }

    /**
    * Equivalent of jQuery function $().
    */
    function $(selector, context){
        context = arguments.length > 1 ? context : document;
        return context ? context.querySelectorAll(selector) : null;
    }

    /**
    * Extends a given Object properties and its childs.
    */
    function deepExtend(out) {
        out = out || {};
        for (var i = 1, len = arguments.length; i < len; ++i){
            var obj = arguments[i];

            if(!obj){
              continue;
            }

            for(var key in obj){
              if (!obj.hasOwnProperty(key)){
                continue;
              }

              // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
              if (Object.prototype.toString.call(obj[key]) === '[object Object]'){
                out[key] = deepExtend(out[key], obj[key]);
                continue;
              }

              out[key] = obj[key];
            }
        }
        return out;
    }

    /**
    * Checks if the passed element contains the passed class.
    */
    function hasClass(el, className){
        if(el == null){
            return false;
        }
        if (el.classList){
            return el.classList.contains(className);
        }
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }

    /**
    * Gets the window height. Crossbrowser.
    */
    function getWindowHeight(){
        return 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    }

    /**
    * Gets the window width.
    */
    function getWindowWidth(){
        return window.innerWidth;
    }

    /**
    * Set's the CSS properties for the passed item/s.
    * @param {NodeList|HTMLElement} items
    * @param {Object} props css properties and values.
    */
    function css(items, props) {
        items = getList(items);

        var key;
        for (key in props) {
            if (props.hasOwnProperty(key)) {
                if (key !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        item.style[key] = props[key];
                    }
                }
            }
        }

        return items;
    }

    /**
    * Generic function to get the previous or next element.
    */
    function until(item, selector, fn){
        var sibling = item[fn];
        while(sibling && !matches(sibling, selector)){
            sibling = sibling[fn];
        }

        return sibling;
    }

    /**
    * Gets the previous element to the passed element that matches the passed selector.
    */
    function prevUntil(item, selector){
        return until(item, selector, 'previousElementSibling');
    }

    /**
    * Gets the next element to the passed element that matches the passed selector.
    */
    function nextUntil(item, selector){
        return until(item, selector, 'nextElementSibling');
    }

    /**
    * Gets the previous element to the passed element.
    */
    function prev(item){
        return item.previousElementSibling;
    }

    /**
    * Gets the next element to the passed element.
    */
    function next(item){
        return item.nextElementSibling;
    }

    /**
    * Gets the last element from the passed list of elements.
    */
    function last(item){
        return item[item.length-1];
    }

    /**
    * Gets index from the passed element.
    * @param {String} selector is optional.
    */
    function index(item, selector) {
        item = isArrayOrList(item) ? item[0] : item;
        var children = selector != null? $(selector, item.parentNode) : item.parentNode.childNodes;
        var num = 0;
        for (var i=0; i<children.length; i++) {
             if (children[i] == item) return num;
             if (children[i].nodeType==1) num++;
        }
        return -1;
    }

    /**
    * Gets an iterable element for the passed element/s
    */
    function getList(item){
        return !isArrayOrList(item) ? [item] : item;
    }

    /**
    * Adds the display=none property for the passed element/s
    */
    function hide(el){
        el = getList(el);

        for(var i = 0; i<el.length; i++){
            el[i].style.display = 'none';
        }
        return el;
    }

    /**
    * Adds the display=block property for the passed element/s
    */
    function show(el){
        el = getList(el);

        for(var i = 0; i<el.length; i++){
            el[i].style.display = 'block';
        }
        return el;
    }

    /**
    * Checks if the passed element is an iterable element or not
    */
    function isArrayOrList(el){
        return Object.prototype.toString.call( el ) === '[object Array]' ||
            Object.prototype.toString.call( el ) === '[object NodeList]';
    }

    /**
    * Adds the passed class to the passed element/s
    */
    function addClass(el, className) {
        el = getList(el);

        for(var i = 0; i<el.length; i++){
            var item = el[i];
            if (item.classList){
                item.classList.add(className);
            }
            else{
              item.className += ' ' + className;
            }
        }
        return el;
    }

    /**
    * Removes the passed class to the passed element/s
    * @param {String} `className` can be multiple classnames separated by whitespace
    */
    function removeClass(el, className){
        el = getList(el);

        var classNames = className.split(' ');

        for(var a = 0; a<classNames.length; a++){
            className = classNames[a];
            for(var i = 0; i<el.length; i++){
                var item = el[i];
                if (item.classList){
                    item.classList.remove(className);
                }
                else{
                    item.className = item.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                }
            }
        }
        return el;
    }

    /**
    * Appends the given element ot the given parent.
    */
    function appendTo(el, parent){
        parent.appendChild(el);
    }

    /**
    Usage:

    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/15/ (vanilla)
    https://jsfiddle.net/oya6ndka/1/ (jquery equivalent)
    */
    function wrap(toWrap, wrapper, isWrapAll) {
        var newParent;
        wrapper = wrapper || document.createElement('div');
        for(var i = 0; i < toWrap.length; i++){
            var item = toWrap[i];
            if(isWrapAll && !i || !isWrapAll){
                newParent = wrapper.cloneNode(true);
                item.parentNode.insertBefore(newParent, item);
            }
            newParent.appendChild(item);
        }
        return toWrap;
    }

    /**
    Usage:
    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/27/ (vanilla)
    https://jsfiddle.net/oya6ndka/4/ (jquery equivalent)
    */
    function wrapAll(toWrap, wrapper) {
        wrap(toWrap, wrapper, true);
    }

    /**
    * Usage:
    * wrapInner(document.querySelector('#pepe'), '<div class="test">afdas</div>');
    * wrapInner(document.querySelector('#pepe'), element);
    *
    * https://jsfiddle.net/zexxz0tw/6/
    *
    * https://stackoverflow.com/a/21817590/1081396
    */
    function wrapInner(parent, wrapper) {
        if (typeof wrapper === "string"){
            wrapper = createElementFromHTML(wrapper);
        }

        parent.appendChild(wrapper);

        while(parent.firstChild !== wrapper){
            wrapper.appendChild(parent.firstChild);
       }
    }

    /**
    * Usage:
    * unwrap(document.querySelector('#pepe'));
    * unwrap(element);
    *
    * https://jsfiddle.net/szjt0hxq/1/
    *
    */
    function unwrap(wrapper) {
        var wrapperContent = document.createDocumentFragment();
        while (wrapper.firstChild) {
            wrapperContent.appendChild(wrapper.firstChild);
        }

        wrapper.parentNode.replaceChild(wrapperContent, wrapper);
    }

    /**
    * http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation
    * Returns the element or `false` if there's none
    */
    function closest(el, selector) {
        if(el && el.nodeType === 1){
            if(matches(el, selector)){
                return el;
            }
            return closest(el.parentNode, selector);
        }
        return null;
    }

    /**
    * Places one element (rel) after another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String} el
    * https://jsfiddle.net/9s97hhzv/1/
    */
    function after(reference, el) {
        insertBefore(reference, reference.nextSibling, el);
    }

    /**
    * Places one element (rel) before another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String} el
    * https://jsfiddle.net/9s97hhzv/1/
    */
    function before(reference, el) {
        insertBefore(reference, reference, el);
    }

    /**
    * Based in https://stackoverflow.com/a/19316024/1081396
    * and https://stackoverflow.com/a/4793630/1081396
    */
    function insertBefore(reference, beforeElement, el){
        if(!isArrayOrList(el)){
            if(typeof el == 'string'){
                el = createElementFromHTML(el);
            }
            el = [el];
        }

        for(var i = 0; i<el.length; i++){
            reference.parentNode.insertBefore(el[i], beforeElement);
        }
    }

    //http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
    function getScrollTop(){
        var doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    }

    /**
    * Gets the siblings of the passed element
    */
    function siblings(el){
        return Array.prototype.filter.call(el.parentNode.children, function(child){
          return child !== el;
        });
    }

    //for IE 9 ?
    function preventDefault(event){
        if(event.preventDefault){
            event.preventDefault();
        }
        else{
            event.returnValue = false;
        }
    }

    /**
    * Determines whether the passed item is of function type.
    */
    function isFunction(item) {
      if (typeof item === 'function') {
        return true;
      }
      var type = Object.prototype.toString(item);
      return type === '[object Function]' || type === '[object GeneratorFunction]';
    }

    /**
    * Trigger custom events
    */
    function trigger(el, eventName, data){
        var event;
        data = typeof data === 'undefined' ? {} : data;

        // Native
        if(typeof window.CustomEvent === "function" ){
            event = new CustomEvent(eventName, {detail: data});
        }
        else{
            event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, data);
        }

        el.dispatchEvent(event);
    }

    /**
    * Polyfill of .matches()
    */
    function matches(el, selector) {
        return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
    }

    /**
    * Toggles the visibility of the passed element el.
    */
    function toggle(el, value){
        if(typeof value === "boolean"){
            for(var i = 0; i<el.length; i++){
                el[i].style.display = value ? 'block' : 'none';
            }
        }
        //we don't use it in other way, so no else :)

        return el;
    }

    /**
    * Creates a HTMLElement from the passed HTML string.
    * https://stackoverflow.com/a/494348/1081396
    */
    function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild;
    }

    /**
    * Removes the passed item/s from the DOM.
    */
    function remove(items){
        items = getList(items);
        for(var i = 0; i<items.length; i++){
            var item = items[i];
            if(item && item.parentElement) {
                item.parentNode.removeChild(item);
            }
        }
    }

    /**
    * Filters an array by the passed filter funtion.
    */
    function filter(el, filterFn){
        Array.prototype.filter.call(el, filterFn);
    }

    //https://jsfiddle.net/w1rktecz/
    function untilAll(item, selector, fn){
        var sibling = item[fn];
        var siblings = [];
        while(sibling){
            if(matches(sibling, selector) || selector == null) {
                siblings.push(sibling);
            }
            sibling = sibling[fn];
        }

        return siblings;
    }

    /**
    * Gets all next elements matching the passed selector.
    */
    function nextAll(item, selector){
        return untilAll(item, selector, 'nextElementSibling');
    }

    /**
    * Gets all previous elements matching the passed selector.
    */
    function prevAll(item, selector){
        return untilAll(item, selector, 'previousElementSibling');
    }

    /**
    * Converts an object to an array.
    */
    function toArray(objectData){
        return Object.keys(objectData).map(function(key) {
           return objectData[key];
        });
    }

    /**
    * forEach polyfill for IE
    * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility
    */
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }

    //utils are public, so we can use it wherever we want
    window.fp_utils = {
        $: $,
        deepExtend: deepExtend,
        hasClass: hasClass,
        getWindowHeight: getWindowHeight,
        css: css,
        until: until,
        prevUntil: prevUntil,
        nextUntil: nextUntil,
        prev: prev,
        next: next,
        last: last,
        index: index,
        getList: getList,
        hide: hide,
        show: show,
        isArrayOrList: isArrayOrList,
        addClass: addClass,
        removeClass: removeClass,
        appendTo: appendTo,
        wrap: wrap,
        wrapAll: wrapAll,
        wrapInner: wrapInner,
        unwrap: unwrap,
        closest: closest,
        after: after,
        before: before,
        insertBefore: insertBefore,
        getScrollTop: getScrollTop,
        siblings: siblings,
        preventDefault: preventDefault,
        isFunction: isFunction,
        trigger: trigger,
        matches: matches,
        toggle: toggle,
        createElementFromHTML: createElementFromHTML,
        remove: remove,
        filter: filter,
        untilAll: untilAll,
        nextAll: nextAll,
        prevAll: prevAll,
        showError: showError
    };

    return initialise;
}));

/**
 * jQuery adapter for fullPage.js 3.0.0
 */
if(window.jQuery && window.fullpage){
    (function ($, fullpage) {
        'use strict';

        // No jQuery No Go
        if (!$ || !fullpage) {
            window.fp_utils.showError('error', 'jQuery is required to use the jQuery fullpage adapter!');
            return;
        }

        $.fn.fullpage = function(options) {
            options = $.extend({}, options, {'$': $});
            var instance = new fullpage(this[0], options);
        };
    })(window.jQuery, window.fullpage);
}

/**
 * Swiper 4.0.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2017 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 7, 2017
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Swiper=t()}(this,function(){"use strict";function e(e,t){var a=[],i=0;if(e&&!t&&e instanceof r)return e;if(e)if("string"==typeof e){var s,n,o=e.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),0!==o.indexOf("<td")&&0!==o.indexOf("<th")||(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),(n=document.createElement(l)).innerHTML=o,i=0;i<n.childNodes.length;i+=1)a.push(n.childNodes[i])}else for(s=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||document).querySelectorAll(e.trim()):[document.getElementById(e.trim().split("#")[1])],i=0;i<s.length;i+=1)s[i]&&a.push(s[i])}else if(e.nodeType||e===window||e===document)a.push(e);else if(e.length>0&&e[0].nodeType)for(i=0;i<e.length;i+=1)a.push(e[i]);return new r(a)}function t(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}function a(){var e="onwheel"in d;if(!e){var t=d.createElement("div");t.setAttribute("onwheel","return;"),e="function"==typeof t.onwheel}return!e&&d.implementation&&d.implementation.hasFeature&&!0!==d.implementation.hasFeature("","")&&(e=d.implementation.hasFeature("Events.wheel","3.0")),e}var i,s=i="undefined"==typeof window?{navigator:{userAgent:""},location:{},history:{},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{}},Image:function(){},Date:function(){}}:window,r=function(e){for(var t=this,a=0;a<e.length;a+=1)t[a]=e[a];return t.length=e.length,this};e.fn=r.prototype,e.Class=r,e.Dom7=r;"resize scroll".split(" ");var n={addClass:function(e){var t=this;if(void 0===e)return this;for(var a=e.split(" "),i=0;i<a.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==t[s].classList&&t[s].classList.add(a[i]);return this},removeClass:function(e){for(var t=this,a=e.split(" "),i=0;i<a.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==t[s].classList&&t[s].classList.remove(a[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=this,a=e.split(" "),i=0;i<a.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==t[s].classList&&t[s].classList.toggle(a[i]);return this},attr:function(e,t){var a=arguments,i=this;if(1!==arguments.length||"string"!=typeof e){for(var s=0;s<this.length;s+=1)if(2===a.length)i[s].setAttribute(e,t);else for(var r in e)i[s][r]=e[r],i[s].setAttribute(r,e[r]);return this}if(this[0])return this[0].getAttribute(e)},removeAttr:function(e){for(var t=this,a=0;a<this.length;a+=1)t[a].removeAttribute(e);return this},data:function(e,t){var a,i=this;if(void 0!==t){for(var s=0;s<this.length;s+=1)(a=i[s]).dom7ElementDataStorage||(a.dom7ElementDataStorage={}),a.dom7ElementDataStorage[e]=t;return this}if(a=this[0]){if(a.dom7ElementDataStorage&&e in a.dom7ElementDataStorage)return a.dom7ElementDataStorage[e];var r=a.getAttribute("data-"+e);if(r)return r}},transform:function(e){for(var t=this,a=0;a<this.length;a+=1){var i=t[a].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){var t=this;"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a+=1){var i=t[a].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){function t(t){var a=t.target;if(a){var i=t.target.dom7EventData||[];if(i.unshift(t),e(a).is(o))l.apply(a,i);else for(var s=e(a).parents(),r=0;r<s.length;r+=1)e(s[r]).is(o)&&l.apply(s[r],i)}}function a(e){var t=e&&e.target?e.target.dom7EventData||[]:[];t.unshift(e),l.apply(this,t)}for(var i=this,s=[],r=arguments.length;r--;)s[r]=arguments[r];var n=s[0],o=s[1],l=s[2],d=s[3];if("function"==typeof s[1]){var p;n=(p=s)[0],l=p[1],d=p[2],o=void 0}d||(d=!1);for(var c,u=n.split(" "),h=0;h<this.length;h+=1){var v=i[h];if(o)for(c=0;c<u.length;c+=1)v.dom7LiveListeners||(v.dom7LiveListeners=[]),v.dom7LiveListeners.push({type:n,listener:l,proxyListener:t}),v.addEventListener(u[c],t,d);else for(c=0;c<u.length;c+=1)v.dom7Listeners||(v.dom7Listeners=[]),v.dom7Listeners.push({type:n,listener:l,proxyListener:a}),v.addEventListener(u[c],a,d)}return this},off:function(){for(var e=this,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];if("function"==typeof t[1]){var o;i=(o=t)[0],r=o[1],n=o[2],s=void 0}n||(n=!1);for(var l=i.split(" "),d=0;d<l.length;d+=1)for(var p=0;p<this.length;p+=1){var c=e[p];if(s){if(c.dom7LiveListeners)for(var u=0;u<c.dom7LiveListeners.length;u+=1)r?c.dom7LiveListeners[u].listener===r&&c.removeEventListener(l[d],c.dom7LiveListeners[u].proxyListener,n):c.dom7LiveListeners[u].type===l[d]&&c.removeEventListener(l[d],c.dom7LiveListeners[u].proxyListener,n)}else if(c.dom7Listeners)for(var h=0;h<c.dom7Listeners.length;h+=1)r?c.dom7Listeners[h].listener===r&&c.removeEventListener(l[d],c.dom7Listeners[h].proxyListener,n):c.dom7Listeners[h].type===l[d]&&c.removeEventListener(l[d],c.dom7Listeners[h].proxyListener,n)}return this},trigger:function(){for(var e=this,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i=t[0].split(" "),s=t[1],r=0;r<i.length;r+=1)for(var n=0;n<this.length;n+=1){var o=void 0;try{o=new window.CustomEvent(i[r],{detail:s,bubbles:!0,cancelable:!0})}catch(e){(o=document.createEvent("Event")).initEvent(i[r],!0,!0),o.detail=s}e[n].dom7EventData=t.filter(function(e,t){return t>0}),e[n].dispatchEvent(o),e[n].dom7EventData=[],delete e[n].dom7EventData}return this},transitionEnd:function(e){function t(r){if(r.target===this)for(e.call(this,r),a=0;a<i.length;a+=1)s.off(i[a],t)}var a,i=["webkitTransitionEnd","transitionend"],s=this;if(e)for(a=0;a<i.length;a+=1)s.on(i[a],t);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var e=this[0],t=e.getBoundingClientRect(),a=document.body,i=e.clientTop||a.clientTop||0,s=e.clientLeft||a.clientLeft||0,r=e===window?window.scrollY:e.scrollTop,n=e===window?window.scrollX:e.scrollLeft;return{top:t.top+r-i,left:t.left+n-s}}return null},css:function(e,t){var a,i=this;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var s in e)i[a].style[s]=e[s];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)i[a].style[e]=t;return this}return this},each:function(e){var t=this;if(!e)return this;for(var a=0;a<this.length;a+=1)if(!1===e.call(t[a],a,t[a]))return t;return this},html:function(e){var t=this;if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a+=1)t[a].innerHTML=e;return this},text:function(e){var t=this;if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var a=0;a<this.length;a+=1)t[a].textContent=e;return this},is:function(t){var a,i,s=this[0];if(!s||void 0===t)return!1;if("string"==typeof t){if(s.matches)return s.matches(t);if(s.webkitMatchesSelector)return s.webkitMatchesSelector(t);if(s.msMatchesSelector)return s.msMatchesSelector(t);for(a=e(t),i=0;i<a.length;i+=1)if(a[i]===s)return!0;return!1}if(t===document)return s===document;if(t===window)return s===window;if(t.nodeType||t instanceof r){for(a=t.nodeType?[t]:t,i=0;i<a.length;i+=1)if(a[i]===s)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,a=this.length;return e>a-1?new r([]):e<0?(t=a+e,new r(t<0?[]:[this[t]])):new r([this[e]])},append:function(){for(var e=this,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i,s=0;s<t.length;s+=1){i=t[s];for(var n=0;n<this.length;n+=1)if("string"==typeof i){var o=document.createElement("div");for(o.innerHTML=i;o.firstChild;)e[n].appendChild(o.firstChild)}else if(i instanceof r)for(var l=0;l<i.length;l+=1)e[n].appendChild(i[l]);else e[n].appendChild(i)}return this},prepend:function(e){var t,a,i=this;for(t=0;t<this.length;t+=1)if("string"==typeof e){var s=document.createElement("div");for(s.innerHTML=e,a=s.childNodes.length-1;a>=0;a-=1)i[t].insertBefore(s.childNodes[a],i[t].childNodes[0])}else if(e instanceof r)for(a=0;a<e.length;a+=1)i[t].insertBefore(e[a],i[t].childNodes[0]);else i[t].insertBefore(e,i[t].childNodes[0]);return this},next:function(t){return new r(this.length>0?t?this[0].nextElementSibling&&e(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var a=[],i=this[0];if(!i)return new r([]);for(;i.nextElementSibling;){var s=i.nextElementSibling;t?e(s).is(t)&&a.push(s):a.push(s),i=s}return new r(a)},prev:function(t){if(this.length>0){var a=this[0];return new r(t?a.previousElementSibling&&e(a.previousElementSibling).is(t)?[a.previousElementSibling]:[]:a.previousElementSibling?[a.previousElementSibling]:[])}return new r([])},prevAll:function(t){var a=[],i=this[0];if(!i)return new r([]);for(;i.previousElementSibling;){var s=i.previousElementSibling;t?e(s).is(t)&&a.push(s):a.push(s),i=s}return new r(a)},parent:function(a){for(var i=this,s=[],r=0;r<this.length;r+=1)null!==i[r].parentNode&&(a?e(i[r].parentNode).is(a)&&s.push(i[r].parentNode):s.push(i[r].parentNode));return e(t(s))},parents:function(a){for(var i=this,s=[],r=0;r<this.length;r+=1)for(var n=i[r].parentNode;n;)a?e(n).is(a)&&s.push(n):s.push(n),n=n.parentNode;return e(t(s))},closest:function(e){var t=this;return void 0===e?new r([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=this,a=[],i=0;i<this.length;i+=1)for(var s=t[i].querySelectorAll(e),n=0;n<s.length;n+=1)a.push(s[n]);return new r(a)},children:function(a){for(var i=this,s=[],n=0;n<this.length;n+=1)for(var o=i[n].childNodes,l=0;l<o.length;l+=1)a?1===o[l].nodeType&&e(o[l]).is(a)&&s.push(o[l]):1===o[l].nodeType&&s.push(o[l]);return new r(t(s))},remove:function(){for(var e=this,t=0;t<this.length;t+=1)e[t].parentNode&&e[t].parentNode.removeChild(e[t]);return this},add:function(){for(var t=[],a=arguments.length;a--;)t[a]=arguments[a];var i,s,r=this;for(i=0;i<t.length;i+=1){var n=e(t[i]);for(s=0;s<n.length;s+=1)r[r.length]=n[s],r.length+=1}return r},styles:function(){return this[0]?window.getComputedStyle(this[0],null):{}}};Object.keys(n).forEach(function(t){e.fn[t]=n[t]});var o,l={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){void 0===t&&(t="x");var a,i,r,n=s.getComputedStyle(e,null);return s.WebKitCSSMatrix?((i=n.transform||n.webkitTransform).split(",").length>6&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),r=new s.WebKitCSSMatrix("none"===i?"":i)):a=(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=s.WebKitCSSMatrix?r.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?r.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0},parseUrlQuery:function(e){var t,a,i,r,n={},o=e||s.location.href;if("string"==typeof o&&o.length)for(r=(a=(o=o.indexOf("?")>-1?o.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,t=0;t<r;t+=1)i=a[t].replace(/#\S+/g,"").split("="),n[decodeURIComponent(i[0])]=void 0===i[1]?void 0:decodeURIComponent(i[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=Object(e[0]),i=1;i<e.length;i+=1){var s=e[i];if(void 0!==s&&null!==s)for(var r=Object.keys(Object(s)),n=0,o=r.length;n<o;n+=1){var d=r[n],p=Object.getOwnPropertyDescriptor(s,d);void 0!==p&&p.enumerable&&(l.isObject(a[d])&&l.isObject(s[d])?l.extend(a[d],s[d]):!l.isObject(a[d])&&l.isObject(s[d])?(a[d]={},l.extend(a[d],s[d])):a[d]=s[d])}}return a}},d=o="undefined"==typeof document?{addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return{}},querySelectorAll:function(){return[]},createElement:function(){return{style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,p={touch:s.Modernizr&&!0===s.Modernizr.touch||!!("ontouchstart"in s||s.DocumentTouch&&d instanceof s.DocumentTouch),transforms3d:s.Modernizr&&!0===s.Modernizr.csstransforms3d||function(){var e=d.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=d.createElement("div").style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a+=1)if(t[a]in e)return!0;return!1}(),observer:"MutationObserver"in s||"WebkitMutationObserver"in s,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});s.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in s},c=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},u={components:{}};c.prototype.on=function(e,t){var a=this;return"function"!=typeof t?a:(e.split(" ").forEach(function(e){a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e].push(t)}),a)},c.prototype.once=function(e,t){function a(){for(var s=[],r=arguments.length;r--;)s[r]=arguments[r];t.apply(i,s),i.off(e,a)}var i=this;return"function"!=typeof t?i:i.on(e,a)},c.prototype.off=function(e,t){var a=this;return e.split(" ").forEach(function(e){void 0===t?a.eventsListeners[e]=[]:a.eventsListeners[e].forEach(function(i,s){i===t&&a.eventsListeners[e].splice(s,1)})}),a},c.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=this;if(!a.eventsListeners)return a;var i,s,r;return"string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),r=a):(i=e[0].events,s=e[0].data,r=e[0].context||a),(Array.isArray(i)?i:i.split(" ")).forEach(function(e){if(a.eventsListeners[e]){var t=[];a.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(r,s)})}}),a},c.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach(function(a){var i=t.modules[a];i.params&&l.extend(e,i.params)})},c.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach(function(a){var i=t.modules[a],s=e[a]||{};i.instance&&Object.keys(i.instance).forEach(function(e){var a=i.instance[e];t[e]="function"==typeof a?a.bind(t):a}),i.on&&t.on&&Object.keys(i.on).forEach(function(e){t.on(e,i.on[e])}),i.create&&i.create.bind(t)(s)})},u.components.set=function(e){var t=this;t.use&&t.use(e)},c.installModule=function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];var i=this;i.prototype.modules||(i.prototype.modules={});var s=e.name||Object.keys(i.prototype.modules).length+"_"+l.now();return i.prototype.modules[s]=e,e.proto&&Object.keys(e.proto).forEach(function(t){i.prototype[t]=e.proto[t]}),e.static&&Object.keys(e.static).forEach(function(t){i[t]=e.static[t]}),e.install&&e.install.apply(i,t),i},c.use=function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];var i=this;return Array.isArray(e)?(e.forEach(function(e){return i.installModule(e)}),i):i.installModule.apply(i,[e].concat(t))},Object.defineProperties(c,u);var h={updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),l.extend(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=e.params,a=e.$wrapperEl,i=e.size,s=e.rtl,r=e.wrongRTL,n=a.children("."+e.params.slideClass),o=e.virtual&&t.virtual.enabled?e.virtual.slides.length:n.length,d=[],c=[],u=[],h=t.slidesOffsetBefore;"function"==typeof h&&(h=t.slidesOffsetBefore.call(e));var v=t.slidesOffsetAfter;"function"==typeof v&&(v=t.slidesOffsetAfter.call(e));var f=o,m=e.snapGrid.length,g=e.snapGrid.length,b=t.spaceBetween,w=-h,y=0,x=0;if(void 0!==i){"string"==typeof b&&b.indexOf("%")>=0&&(b=parseFloat(b.replace("%",""))/100*i),e.virtualSize=-b,s?n.css({marginLeft:"",marginTop:""}):n.css({marginRight:"",marginBottom:""});var T;t.slidesPerColumn>1&&(T=Math.floor(o/t.slidesPerColumn)===o/e.params.slidesPerColumn?o:Math.ceil(o/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(T=Math.max(T,t.slidesPerView*t.slidesPerColumn)));for(var E,S=t.slidesPerColumn,C=T/S,M=C-(t.slidesPerColumn*C-o),z=0;z<o;z+=1){E=0;var P=n.eq(z);if(t.slidesPerColumn>1){var k=void 0,$=void 0,I=void 0;"column"===t.slidesPerColumnFill?(I=z-($=Math.floor(z/S))*S,($>M||$===M&&I===S-1)&&(I+=1)>=S&&(I=0,$+=1),k=$+I*T/S,P.css({"-webkit-box-ordinal-group":k,"-moz-box-ordinal-group":k,"-ms-flex-order":k,"-webkit-order":k,order:k})):$=z-(I=Math.floor(z/C))*C,P.css("margin-"+(e.isHorizontal()?"top":"left"),0!==I&&t.spaceBetween&&t.spaceBetween+"px").attr("data-swiper-column",$).attr("data-swiper-row",I)}"none"!==P.css("display")&&("auto"===t.slidesPerView?(E=e.isHorizontal()?P.outerWidth(!0):P.outerHeight(!0),t.roundLengths&&(E=Math.floor(E))):(E=(i-(t.slidesPerView-1)*b)/t.slidesPerView,t.roundLengths&&(E=Math.floor(E)),n[z]&&(e.isHorizontal()?n[z].style.width=E+"px":n[z].style.height=E+"px")),n[z]&&(n[z].swiperSlideSize=E),u.push(E),t.centeredSlides?(w=w+E/2+y/2+b,0===y&&0!==z&&(w=w-i/2-b),0===z&&(w=w-i/2-b),Math.abs(w)<.001&&(w=0),x%t.slidesPerGroup==0&&d.push(w),c.push(w)):(x%t.slidesPerGroup==0&&d.push(w),c.push(w),w=w+E+b),e.virtualSize+=E+b,y=E,x+=1)}e.virtualSize=Math.max(e.virtualSize,i)+v;var L;if(s&&r&&("slide"===t.effect||"coverflow"===t.effect)&&a.css({width:e.virtualSize+t.spaceBetween+"px"}),p.flexbox&&!t.setWrapperSize||(e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"})),t.slidesPerColumn>1&&(e.virtualSize=(E+t.spaceBetween)*T,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){L=[];for(var D=0;D<d.length;D+=1)d[D]<e.virtualSize+d[0]&&L.push(d[D]);d=L}if(!t.centeredSlides){L=[];for(var O=0;O<d.length;O+=1)d[O]<=e.virtualSize-i&&L.push(d[O]);d=L,Math.floor(e.virtualSize-i)-Math.floor(d[d.length-1])>1&&d.push(e.virtualSize-i)}0===d.length&&(d=[0]),0!==t.spaceBetween&&(e.isHorizontal()?s?n.css({marginLeft:b+"px"}):n.css({marginRight:b+"px"}):n.css({marginBottom:b+"px"})),l.extend(e,{slides:n,snapGrid:d,slidesGrid:c,slidesSizesGrid:u}),o!==f&&e.emit("slidesLengthChange"),d.length!==m&&e.emit("snapGridLengthChange"),c.length!==g&&e.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(){var e,t=this,a=[],i=0;if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)for(e=0;e<Math.ceil(t.params.slidesPerView);e+=1){var s=t.activeIndex+e;if(s>t.slides.length)break;a.push(t.slides.eq(s)[0])}else a.push(t.slides.eq(t.activeIndex)[0]);for(e=0;e<a.length;e+=1)if(void 0!==a[e]){var r=a[e].offsetHeight;i=r>i?r:i}i&&t.$wrapperEl.css("height",i+"px")},updateSlidesOffset:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1)t[a].swiperSlideOffset=e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtl;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass);for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility){var d=-(r-o.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(d>=0&&d<t.size||p>0&&p<=t.size||d<=0&&p>=t.size)&&i.eq(n).addClass(a.slideVisibleClass)}o.progress=s?-l:l}}},updateProgress:function(e){void 0===e&&(e=this.translate||0);var t=this,a=t.params,i=t.maxTranslate()-t.minTranslate(),s=t.progress,r=t.isBeginning,n=t.isEnd,o=r,d=n;0===i?(s=0,r=!0,n=!0):(r=(s=(e-t.minTranslate())/i)<=0,n=s>=1),l.extend(t,{progress:s,isBeginning:r,isEnd:n}),(a.watchSlidesProgress||a.watchSlidesVisibility)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!d&&t.emit("reachEnd toEdge"),(o&&!r||d&&!n)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){var e=this,t=e.slides,a=e.params,i=e.$wrapperEl,s=e.activeIndex,r=e.realIndex,n=e.virtual&&a.virtual.enabled;t.removeClass(a.slideActiveClass+" "+a.slideNextClass+" "+a.slidePrevClass+" "+a.slideDuplicateActiveClass+" "+a.slideDuplicateNextClass+" "+a.slideDuplicatePrevClass);var o;(o=n?e.$wrapperEl.find("."+a.slideClass+'[data-swiper-slide-index="'+s+'"]'):t.eq(s)).addClass(a.slideActiveClass),a.loop&&(o.hasClass(a.slideDuplicateClass)?i.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(a.slideDuplicateActiveClass):i.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(a.slideDuplicateActiveClass));var l=o.nextAll("."+a.slideClass).eq(0).addClass(a.slideNextClass);a.loop&&0===l.length&&(l=t.eq(0)).addClass(a.slideNextClass);var d=o.prevAll("."+a.slideClass).eq(0).addClass(a.slidePrevClass);a.loop&&0===d.length&&(d=t.eq(-1)).addClass(a.slidePrevClass),a.loop&&(l.hasClass(a.slideDuplicateClass)?i.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicateNextClass):i.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicateNextClass),d.hasClass(a.slideDuplicateClass)?i.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicatePrevClass):i.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,a=this,i=a.rtl?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,o=a.activeIndex,d=a.realIndex,p=a.snapIndex,c=e;if(void 0===c){for(var u=0;u<s.length;u+=1)void 0!==s[u+1]?i>=s[u]&&i<s[u+1]-(s[u+1]-s[u])/2?c=u:i>=s[u]&&i<s[u+1]&&(c=u+1):i>=s[u]&&(c=u);n.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if((t=r.indexOf(i)>=0?r.indexOf(i):Math.floor(c/n.slidesPerGroup))>=r.length&&(t=r.length-1),c!==o){var h=parseInt(a.slides.eq(c).attr("data-swiper-slide-index")||c,10);l.extend(a,{snapIndex:t,realIndex:h,previousIndex:o,activeIndex:c}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),d!==h&&a.emit("realIndexChange"),a.emit("slideChange")}else t!==p&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(t){var a=this,i=a.params,s=e(t.target).closest("."+i.slideClass)[0],r=!1;if(s)for(var n=0;n<a.slides.length;n+=1)a.slides[n]===s&&(r=!0);if(!s||!r)return a.clickedSlide=void 0,void(a.clickedIndex=void 0);a.clickedSlide=s,a.virtual&&a.params.virtual.enabled?a.clickedIndex=parseInt(e(s).attr("data-swiper-slide-index"),10):a.clickedIndex=e(s).index(),i.slideToClickedSlide&&void 0!==a.clickedIndex&&a.clickedIndex!==a.activeIndex&&a.slideToClickedSlide()}},v={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this,a=t.params,i=t.rtl,s=t.translate,r=t.$wrapperEl;if(a.virtualTranslate)return i?-s:s;var n=l.getTranslate(r[0],e);return i&&(n=-n),n||0},setTranslate:function(e,t){var a=this,i=a.rtl,s=a.params,r=a.$wrapperEl,n=a.progress,o=0,l=0;a.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.virtualTranslate||(p.transforms3d?r.transform("translate3d("+o+"px, "+l+"px, 0px)"):r.transform("translate("+o+"px, "+l+"px)")),a.translate=a.isHorizontal()?o:l;var d=a.maxTranslate()-a.minTranslate();(0===d?0:(e-a.minTranslate())/d)!==n&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}},f={setTransition:function(e,t){var a=this;a.$wrapperEl.transition(e),a.emit("setTransition",e,t)},transitionStart:function(e){void 0===e&&(e=!0);var t=this,a=t.activeIndex,i=t.params,s=t.previousIndex;i.autoHeight&&t.updateAutoHeight(),t.emit("transitionStart"),e&&a!==s&&(t.emit("slideChangeTransitionStart"),a>s?t.emit("slideNextTransitionStart"):t.emit("slidePrevTransitionStart"))},transitionEnd:function(e){void 0===e&&(e=!0);var t=this,a=t.activeIndex,i=t.previousIndex;t.animating=!1,t.setTransition(0),t.emit("transitionEnd"),e&&a!==i&&(t.emit("slideChangeTransitionEnd"),a>i?t.emit("slideNextTransitionEnd"):t.emit("slidePrevTransitionEnd"))}},m=function(){return{isSafari:function(){var e=s.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),ie:s.navigator.pointerEnabled||s.navigator.msPointerEnabled,ieTouch:s.navigator.msPointerEnabled&&s.navigator.msMaxTouchPoints>1||s.navigator.pointerEnabled&&s.navigator.maxTouchPoints>1,lteIE9:function(){var e=d.createElement("div");return e.innerHTML="\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",1===e.getElementsByTagName("i").length}()}}(),g={slideTo:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;r<0&&(r=0);var n=s.params,o=s.snapGrid,l=s.slidesGrid,d=s.previousIndex,p=s.activeIndex,c=s.rtl,u=s.$wrapperEl,h=Math.floor(r/n.slidesPerGroup);h>=o.length&&(h=o.length-1),(p||n.initialSlide||0)===(d||0)&&a&&s.emit("beforeSlideChangeStart");var v=-o[h];if(s.updateProgress(v),n.normalizeSlideIndex)for(var f=0;f<l.length;f+=1)-Math.floor(100*v)>=Math.floor(100*l[f])&&(r=f);return!(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate()||!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(p||0)!==r||(c&&-v===s.translate||!c&&v===s.translate?(s.updateActiveIndex(r),n.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==n.effect&&s.setTranslate(v),1):(0===t||m.lteIE9?(s.setTransition(0),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a),s.transitionEnd(a)):(s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a),s.animating||(s.animating=!0,u.transitionEnd(function(){s&&!s.destroyed&&s.transitionEnd(a)}))),0)))},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)):i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex-1,e,t,a)):i.slideTo(i.activeIndex-1,e,t,a)},slideReset:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this;return i.slideTo(i.activeIndex,e,t,a)},slideToClickedSlide:function(){var t,a=this,i=a.params,s=a.$wrapperEl,r="auto"===i.slidesPerView?a.slidesPerViewDynamic():i.slidesPerView,n=a.clickedIndex;if(i.loop){if(a.animating)return;t=parseInt(e(a.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?n<a.loopedSlides-r/2||n>a.slides.length-a.loopedSlides+r/2?(a.loopFix(),n=s.children("."+i.slideClass+'[data-swiper-slide-index="'+t+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),l.nextTick(function(){a.slideTo(n)})):a.slideTo(n):n>a.slides.length-r?(a.loopFix(),n=s.children("."+i.slideClass+'[data-swiper-slide-index="'+t+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),l.nextTick(function(){a.slideTo(n)})):a.slideTo(n)}else a.slideTo(n)}},b={loopCreate:function(){var t=this,a=t.params,i=t.$wrapperEl;i.children("."+a.slideClass+"."+a.slideDuplicateClass).remove();var s=i.children("."+a.slideClass);if(a.loopFillGroupWithBlank){var r=a.slidesPerGroup-s.length%a.slidesPerGroup;if(r!==a.slidesPerGroup){for(var n=0;n<r;n+=1){var o=e(d.createElement("div")).addClass(a.slideClass+" "+a.slideBlankClass);i.append(o)}s=i.children("."+a.slideClass)}}"auto"!==a.slidesPerView||a.loopedSlides||(a.loopedSlides=s.length),t.loopedSlides=parseInt(a.loopedSlides||a.slidesPerView,10),t.loopedSlides+=a.loopAdditionalSlides,t.loopedSlides>s.length&&(t.loopedSlides=s.length);var l=[],p=[];s.each(function(a,i){var r=e(i);a<t.loopedSlides&&p.push(i),a<s.length&&a>=s.length-t.loopedSlides&&l.push(i),r.attr("data-swiper-slide-index",a)});for(var c=0;c<p.length;c+=1)i.append(e(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass));for(var u=l.length-1;u>=0;u-=1)i.prepend(e(l[u].cloneNode(!0)).addClass(a.slideDuplicateClass))},loopFix:function(){var e,t=this,a=t.params,i=t.activeIndex,s=t.slides,r=t.loopedSlides,n=t.allowSlidePrev,o=t.allowSlideNext;t.allowSlidePrev=!0,t.allowSlideNext=!0,i<r?(e=s.length-3*r+i,e+=r,t.slideTo(e,0,!1,!0)):("auto"===a.slidesPerView&&i>=2*r||i>s.length-2*a.slidesPerView)&&(e=-s.length+i+r,e+=r,t.slideTo(e,0,!1,!0)),t.allowSlidePrev=n,t.allowSlideNext=o},loopDestroy:function(){var e=this,t=e.$wrapperEl,a=e.params,i=e.slides;t.children("."+a.slideClass+"."+a.slideDuplicateClass).remove(),i.removeAttr("data-swiper-slide-index")}},w={setGrabCursor:function(e){var t=this;if(!p.touch&&t.params.simulateTouch){var a=t.el;a.style.cursor="move",a.style.cursor=e?"-webkit-grabbing":"-webkit-grab",a.style.cursor=e?"-moz-grabbin":"-moz-grab",a.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){var e=this;p.touch||(e.el.style.cursor="")}},y={appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&p.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&p.observer||t.update(),t.slideTo(r,0,!1)},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var o=0;o<e.length;o+=1)r=e[o],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&p.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=this,t=[],a=0;a<e.slides.length;a+=1)t.push(a);e.removeSlide(t)}},x=function(){var e=s.navigator.userAgent,t={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:s.cordova||s.phonegap,phonegap:s.cordova||s.phonegap},a=e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),r=e.match(/(iPad).*OS\s([\d_]+)/),n=e.match(/(iPod)(.*OS\s([\d_]+))?/),o=!r&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(t.os="windows",t.osVersion=a[2],t.windows=!0),i&&!a&&(t.os="android",t.osVersion=i[2],t.android=!0,t.androidChrome=e.toLowerCase().indexOf("chrome")>=0),(r||o||n)&&(t.os="ios",t.ios=!0),o&&!n&&(t.osVersion=o[2].replace(/_/g,"."),t.iphone=!0),r&&(t.osVersion=r[2].replace(/_/g,"."),t.ipad=!0),n&&(t.osVersion=n[3]?n[3].replace(/_/g,"."):null,t.iphone=!0),t.ios&&t.osVersion&&e.indexOf("Version/")>=0&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.desktop=!(t.os||t.android||t.webView),t.webView=(o||r||n)&&e.match(/.*AppleWebKit(?!.*Safari)/i),t.os&&"ios"===t.os){var l=t.osVersion.split("."),p=d.querySelector('meta[name="viewport"]');t.minimalUi=!t.webView&&(n||o)&&(1*l[0]==7?1*l[1]>=1:1*l[0]>7)&&p&&p.getAttribute("content").indexOf("minimal-ui")>=0}return t.pixelRatio=s.devicePixelRatio||1,t}(),T=function(t){var a=this,i=a.touchEventsData,s=a.params,r=a.touches,n=t;if(n.originalEvent&&(n=n.originalEvent),i.isTouchEvent="touchstart"===n.type,(i.isTouchEvent||!("which"in n)||3!==n.which)&&(!i.isTouched||!i.isMoved))if(s.noSwiping&&e(n.target).closest("."+s.noSwipingClass)[0])a.allowClick=!0;else if(!s.swipeHandler||e(n).closest(s.swipeHandler)[0]){r.currentX="touchstart"===n.type?n.targetTouches[0].pageX:n.pageX,r.currentY="touchstart"===n.type?n.targetTouches[0].pageY:n.pageY;var o=r.currentX,p=r.currentY;if(!(x.ios&&s.iOSEdgeSwipeDetection&&o<=s.iOSEdgeSwipeThreshold)){if(l.extend(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=o,r.startY=p,i.touchStartTime=l.now(),a.allowClick=!0,a.updateSize(),a.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1),"touchstart"!==n.type){var c=!0;e(n.target).is(i.formElements)&&(c=!1),d.activeElement&&e(d.activeElement).is(i.formElements)&&d.activeElement.blur(),c&&n.preventDefault()}a.emit("touchStart",n)}}},E=function(t){var a=this,i=a.touchEventsData,s=a.params,r=a.touches,n=a.rtl,o=t;if(o.originalEvent&&(o=o.originalEvent),!i.isTouchEvent||"mousemove"!==o.type){var p="touchmove"===o.type?o.targetTouches[0].pageX:o.pageX,c="touchmove"===o.type?o.targetTouches[0].pageY:o.pageY;if(o.preventedByNestedSwiper)return r.startX=p,void(r.startY=c);if(!a.allowTouchMove)return a.allowClick=!1,void(i.isTouched&&(l.extend(r,{startX:p,startY:c,currentX:p,currentY:c}),i.touchStartTime=l.now()));if(i.isTouchEvent&&s.touchReleaseOnEdges&&!s.loop)if(a.isVertical()){if(r.currentY<r.startY&&a.translate<=a.maxTranslate()||r.currentY>r.startY&&a.translate>=a.minTranslate())return}else if(r.currentX<r.startX&&a.translate<=a.maxTranslate()||r.currentX>r.startX&&a.translate>=a.minTranslate())return;if(i.isTouchEvent&&d.activeElement&&o.target===d.activeElement&&e(o.target).is(i.formElements))return i.isMoved=!0,void(a.allowClick=!1);if(i.allowTouchCallbacks&&a.emit("touchMove",o),!(o.targetTouches&&o.targetTouches.length>1)){if(r.currentX="touchmove"===o.type?o.targetTouches[0].pageX:o.pageX,r.currentY="touchmove"===o.type?o.targetTouches[0].pageY:o.pageY,void 0===i.isScrolling){var u;a.isHorizontal()&&r.currentY===r.startY||a.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:(u=180*Math.atan2(Math.abs(r.currentY-r.startY),Math.abs(r.currentX-r.startX))/Math.PI,i.isScrolling=a.isHorizontal()?u>s.touchAngle:90-u>s.touchAngle)}if(i.isScrolling&&a.emit("touchMoveOpposite",o),"undefined"==typeof startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isTouched)if(i.isScrolling)i.isTouched=!1;else if(i.startMoving){a.allowClick=!1,o.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&o.stopPropagation(),i.isMoved||(s.loop&&a.loopFix(),i.startTranslate=a.getTranslate(),a.setTransition(0),a.animating&&a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!s.grabCursor||!0!==a.allowSlideNext&&!0!==a.allowSlidePrev||a.setGrabCursor(!0),a.emit("sliderFirstMove",o)),a.emit("sliderMove",o),i.isMoved=!0;var h=a.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;r.diff=h,h*=s.touchRatio,n&&(h=-h),a.swipeDirection=h>0?"prev":"next",i.currentTranslate=h+i.startTranslate;var v=!0,f=s.resistanceRatio;if(s.touchReleaseOnEdges&&(f=0),h>0&&i.currentTranslate>a.minTranslate()?(v=!1,s.resistance&&(i.currentTranslate=a.minTranslate()-1+Math.pow(-a.minTranslate()+i.startTranslate+h,f))):h<0&&i.currentTranslate<a.maxTranslate()&&(v=!1,s.resistance&&(i.currentTranslate=a.maxTranslate()+1-Math.pow(a.maxTranslate()-i.startTranslate-h,f))),v&&(o.preventedByNestedSwiper=!0),!a.allowSlideNext&&"next"===a.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!a.allowSlidePrev&&"prev"===a.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.threshold>0){if(!(Math.abs(h)>s.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=a.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}s.followFinger&&((s.freeMode||s.watchSlidesProgress||s.watchSlidesVisibility)&&(a.updateActiveIndex(),a.updateSlidesClasses()),s.freeMode&&(0===i.velocities.length&&i.velocities.push({position:r[a.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:r[a.isHorizontal()?"currentX":"currentY"],time:l.now()})),a.updateProgress(i.currentTranslate),a.setTranslate(i.currentTranslate))}}}},S=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtl,n=t.$wrapperEl,o=t.slidesGrid,d=t.snapGrid,p=e;if(p.originalEvent&&(p=p.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",p),a.allowTouchCallbacks=!1,a.isTouched){i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var c=l.now(),u=c-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(p),t.emit("tap",p),u<300&&c-a.lastClickTime>300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),a.clickTimeout=l.nextTick(function(){t&&!t.destroyed&&t.emit("click",p)},300)),u<300&&c-a.lastClickTime<300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),t.emit("doubleTap",p))),a.lastClickTime=l.now(),l.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var h;if(h=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,i.freeMode){if(h<-t.minTranslate())return void t.slideTo(t.activeIndex);if(h>-t.maxTranslate())return void(t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(a.velocities.length>1){var v=a.velocities.pop(),f=a.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(g>150||l.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var b=1e3*i.freeModeMomentumRatio,w=t.velocity*b,y=t.translate+w;r&&(y=-y);var x,T=!1,E=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(y<t.maxTranslate())i.freeModeMomentumBounce?(y+t.maxTranslate()<-E&&(y=t.maxTranslate()-E),x=t.maxTranslate(),T=!0,a.allowMomentumBounce=!0):y=t.maxTranslate();else if(y>t.minTranslate())i.freeModeMomentumBounce?(y-t.minTranslate()>E&&(y=t.minTranslate()+E),x=t.minTranslate(),T=!0,a.allowMomentumBounce=!0):y=t.minTranslate();else if(i.freeModeSticky){for(var S,C=0;C<d.length;C+=1)if(d[C]>-y){S=C;break}y=Math.abs(d[S]-y)<Math.abs(d[S-1]-y)||"next"===t.swipeDirection?d[S]:d[S-1],r||(y=-y)}if(0!==t.velocity)b=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity);else if(i.freeModeSticky)return void t.slideReset();i.freeModeMomentumBounce&&T?(t.updateProgress(x),t.setTransition(b),t.setTranslate(y),t.transitionStart(),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),t.setTranslate(x),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(y),t.setTransition(b),t.setTranslate(y),t.transitionStart(),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}(!i.freeModeMomentum||u>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var M=0,z=t.slidesSizesGrid[0],P=0;P<o.length;P+=i.slidesPerGroup)void 0!==o[P+i.slidesPerGroup]?h>=o[P]&&h<o[P+i.slidesPerGroup]&&(M=P,z=o[P+i.slidesPerGroup]-o[P]):h>=o[P]&&(M=P,z=o[o.length-1]-o[o.length-2]);var k=(h-o[M])/z;if(u>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(k>=i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M)),"prev"===t.swipeDirection&&(k>1-i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(M+i.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(M)}}}},C=function(){var e=this,t=e.params,a=e.el,i=e.allowSlideNext,s=e.allowSlidePrev;if(!a||0!==a.offsetWidth){if(t.breakpoints&&e.setBreakpoint(),e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),t.freeMode){var r=Math.min(Math.max(e.translate,e.maxTranslate()),e.minTranslate());e.setTranslate(r),e.updateActiveIndex(),e.updateSlidesClasses(),t.autoHeight&&e.updateAutoHeight()}else e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.allowSlidePrev=s,e.allowSlideNext=i}},M=function(e){var t=this;t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},z={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},P={update:h,translate:v,transition:f,slide:g,loop:b,grabCursor:w,manipulation:y,events:{attachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl;e.onTouchStart=T.bind(e),e.onTouchMove=E.bind(e),e.onTouchEnd=S.bind(e),e.onClick=M.bind(e);var r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(m.ie)r.addEventListener(a.start,e.onTouchStart,!1),(p.touch?r:d).addEventListener(a.move,e.onTouchMove,n),(p.touch?r:d).addEventListener(a.end,e.onTouchEnd,!1);else{if(p.touch){var o=!("onTouchStart"!==a.start||!p.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.addEventListener(a.start,e.onTouchStart,o),r.addEventListener(a.move,e.onTouchMove,n),r.addEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!x.ios&&!x.android||t.simulateTouch&&!p.touch&&x.ios)&&(r.addEventListener("mousedown",e.onTouchStart,!1),d.addEventListener("mousemove",e.onTouchMove,n),d.addEventListener("mouseup",e.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&r.addEventListener("click",e.onClick,!0),e.on("resize observerUpdate",C)},detachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl,r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(m.ie)r.removeEventListener(a.start,e.onTouchStart,!1),(p.touch?r:d).removeEventListener(a.move,e.onTouchMove,n),(p.touch?r:d).removeEventListener(a.end,e.onTouchEnd,!1);else{if(p.touch){var o=!("onTouchStart"!==a.start||!p.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(a.start,e.onTouchStart,o),r.removeEventListener(a.move,e.onTouchMove,n),r.removeEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!x.ios&&!x.android||t.simulateTouch&&!p.touch&&x.ios)&&(r.removeEventListener("mousedown",e.onTouchStart,!1),d.removeEventListener("mousemove",e.onTouchMove,n),d.removeEventListener("mouseup",e.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",e.onClick,!0),e.off("resize observerUpdate",C)}},breakpoints:{setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.loopedSlides;void 0===a&&(a=0);var i=e.params,s=i.breakpoints;if(s&&(!s||0!==Object.keys(s).length)){var r=e.getBreakpoint(s);if(r&&e.currentBreakpoint!==r){var n=r in s?s[r]:e.originalParams,o=i.loop&&n.slidesPerView!==i.slidesPerView;if(l.extend(e.params,n),l.extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=r,o){var d=t-a;e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(d+a,0,!1)}}}},getBreakpoint:function(e){if(e){var t=!1,a=[];Object.keys(e).forEach(function(e){a.push(e)}),a.sort(function(e,t){return parseInt(e,10)>parseInt(t,10)});for(var i=0;i<a.length;i+=1){var r=a[i];r>=s.innerWidth&&!t&&(t=r)}return t||"max"}}},classes:{addClasses:function(){var e=this,t=e.classNames,a=e.params,i=e.rtl,r=e.$el,n=[];n.push(a.direction),a.freeMode&&n.push("free-mode"),p.flexbox||n.push("no-flexbox"),a.autoHeight&&n.push("autoheight"),i&&n.push("rtl"),a.slidesPerColumn>1&&n.push("multirow"),x.android&&n.push("android"),x.ios&&n.push("ios"),(s.navigator.pointerEnabled||s.navigator.msPointerEnabled)&&n.push("wp8-"+a.direction),n.forEach(function(e){t.push(a.containerModifierClass+e)}),r.addClass(t.join(" "))},removeClasses:function(){var e=this,t=e.$el,a=e.classNames;t.removeClass(a.join(" "))}},images:{loadImage:function(e,t,a,i,r,n){function o(){n&&n()}var l;e.complete&&r?o():t?((l=new s.Image).onload=o,l.onerror=o,i&&(l.sizes=i),a&&(l.srcset=a),t&&(l.src=t)):o()},preloadImages:function(){var e=this;e.imagesToLoad=e.$el.find("img");for(var t=0;t<e.imagesToLoad.length;t+=1){var a=e.imagesToLoad[t];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,function(){void 0!==e&&null!==e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))})}}}},k={},$=function(t){function a(){for(var i=[],r=arguments.length;r--;)i[r]=arguments[r];var n,o;if(1===i.length&&i[0].constructor&&i[0].constructor===Object)o=i[0];else{var d;n=(d=i)[0],o=d[1]}o||(o={}),o=l.extend({},o),n&&!o.el&&(o.el=n),t.call(this,o),Object.keys(P).forEach(function(e){Object.keys(P[e]).forEach(function(t){a.prototype[t]||(a.prototype[t]=P[e][t])})});var c=this;Object.keys(c.modules).forEach(function(e){var t=c.modules[e];if(t.params){var a=Object.keys(t.params)[0],i=t.params[a];if("object"!=typeof i)return;if(!(a in o&&"enabled"in i))return;!0===o[a]&&(o[a]={enabled:!0}),"object"!=typeof o[a]||"enabled"in o[a]||(o[a].enabled=!0),o[a]||(o[a]={enabled:!1})}});var u=l.extend({},z);c.useModulesParams(u),c.params=l.extend({},u,k,o),c.originalParams=l.extend({},c.params),c.passedParams=l.extend({},o);var h=e(c.params.el);if(n=h[0]){if(h.length>1){var v=[];return h.each(function(e,t){var i=l.extend({},o,{el:t});v.push(new a(i))}),v}n.swiper=c,h.data("swiper",c);var f=h.children("."+c.params.wrapperClass);return l.extend(c,{$el:h,el:n,$wrapperEl:f,wrapperEl:f[0],classNames:[],slides:e(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===c.params.direction},isVertical:function(){return"vertical"===c.params.direction},rtl:"horizontal"===c.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===h.css("direction")),wrongRTL:"-webkit-box"===f.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,progress:0,velocity:0,animating:!1,allowSlideNext:c.params.allowSlideNext,allowSlidePrev:c.params.allowSlidePrev,touchEvents:function(){var e=["touchstart","touchmove","touchend"],t=["mousedown","mousemove","mouseup"];return s.navigator.pointerEnabled?t=["pointerdown","pointermove","pointerup"]:s.navigator.msPointerEnabled&&(t=["MSPointerDown","MsPointerMove","MsPointerUp"]),{start:p.touch||!c.params.simulateTouch?e[0]:t[0],move:p.touch||!c.params.simulateTouch?e[1]:t[1],end:p.touch||!c.params.simulateTouch?e[2]:t[2]}}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:l.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:c.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),c.useModules(),c.params.init&&c.init(),c}}t&&(a.__proto__=t),a.prototype=Object.create(t&&t.prototype),a.prototype.constructor=a;var i={extendedDefaults:{},defaults:{},Class:{},$:{}};return a.prototype.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var o,l=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!o&&(n+=1,(l+=a[d].swiperSlideSize)>s&&(o=!0));for(var p=r-1;p>=0;p-=1)a[p]&&!o&&(n+=1,(l+=a[p].swiperSlideSize)>s&&(o=!0))}else for(var c=r+1;c<a.length;c+=1)i[c]-i[r]<s&&(n+=1);return n},a.prototype.update=function(){function e(){a=Math.min(Math.max(t.translate,t.maxTranslate()),t.minTranslate()),t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}var t=this;if(t&&!t.destroyed){t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();var a;t.params.freeMode?(e(),t.params.autoHeight&&t.updateAutoHeight()):(("auto"===t.params.slidesPerView||t.params.slidesPerView>1)&&t.isEnd&&!t.params.centeredSlides?t.slideTo(t.slides.length-1,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0))||e(),t.emit("update")}},a.prototype.init=function(){var e=this;e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"))},a.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a=this,i=a.params,s=a.$el,r=a.$wrapperEl,n=a.slides;a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),i.loop&&a.loopDestroy(),t&&(a.removeClasses(),s.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(function(e){a.off(e)}),!1!==e&&(a.$el[0].swiper=null,a.$el.data("swiper",null),l.deleteProps(a)),a.destroyed=!0},a.extendDefaults=function(e){l.extend(k,e)},i.extendedDefaults.get=function(){return k},i.defaults.get=function(){return z},i.Class.get=function(){return t},i.$.get=function(){return e},Object.defineProperties(a,i),a}(c),I={name:"device",proto:{device:x},static:{device:x}},L={name:"support",proto:{support:p},static:{support:p}},D={name:"browser",proto:{browser:m},static:{browser:m}},O={name:"resize",create:function(){var e=this;l.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){var e=this;s.addEventListener("resize",e.resize.resizeHandler),s.addEventListener("orientationchange",e.resize.orientationChangeHandler)},destroy:function(){var e=this;s.removeEventListener("resize",e.resize.resizeHandler),s.removeEventListener("orientationchange",e.resize.orientationChangeHandler)}}},A={func:s.MutationObserver||s.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var a=this,i=new(0,A.func)(function(e){e.forEach(function(e){a.emit("observerUpdate",e)})});i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),a.observer.observers.push(i)},init:function(){var e=this;if(p.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:!1}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){var e=this;e.observer.observers.forEach(function(e){e.disconnect()}),e.observer.observers=[]}},H={name:"observer",params:{observer:!1,observeParents:!1},create:function(){var e=this;l.extend(e,{observer:{init:A.init.bind(e),attach:A.attach.bind(e),destroy:A.destroy.bind(e),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},X={update:function(e){function t(){a.updateSlides(),a.updateProgress(),a.updateSlidesClasses(),a.lazy&&a.params.lazy.enabled&&a.lazy.load()}var a=this,i=a.params,s=i.slidesPerView,r=i.slidesPerGroup,n=i.centeredSlides,o=a.virtual,d=o.from,p=o.to,c=o.slides,u=o.slidesGrid,h=o.renderSlide,v=o.offset;a.updateActiveIndex();var f,m=a.activeIndex||0;f=a.rtl&&a.isHorizontal()?"right":a.isHorizontal()?"left":"top";var g,b;n?(g=Math.floor(s/2)+r,b=Math.floor(s/2)+r):(g=s+(r-1),b=r);var w=Math.max((m||0)-b,0),y=Math.min((m||0)+g,c.length-1),x=(a.slidesGrid[w]||0)-(a.slidesGrid[0]||0);if(l.extend(a.virtual,{from:w,to:y,offset:x,slidesGrid:a.slidesGrid}),d===w&&p===y&&!e)return a.slidesGrid!==u&&x!==v&&a.slides.css(f,x+"px"),void a.updateProgress();if(a.params.virtual.renderExternal)return a.params.virtual.renderExternal.call(a,{offset:x,from:w,to:y,slides:function(){for(var e=[],t=w;t<=y;t+=1)e.push(c[t]);return e}()}),void t();var T=[],E=[];if(e)a.$wrapperEl.find("."+a.params.slideClass).remove();else for(var S=d;S<=p;S+=1)(S<w||S>y)&&a.$wrapperEl.find("."+a.params.slideClass+'[data-swiper-slide-index="'+S+'"]').remove();for(var C=0;C<c.length;C+=1)C>=w&&C<=y&&(void 0===p||e?E.push(C):(C>p&&E.push(C),C<d&&T.push(C)));E.forEach(function(e){a.$wrapperEl.append(h(c[e],e))}),T.sort(function(e,t){return e<t}).forEach(function(e){a.$wrapperEl.prepend(h(c[e],e))}),a.$wrapperEl.children(".swiper-slide").css(f,x+"px"),t()},renderSlide:function(t,a){var i=this,s=i.params.virtual;if(s.cache&&i.virtual.cache[a])return i.virtual.cache[a];var r=e(s.renderSlide?s.renderSlide.call(i,t,a):'<div class="'+i.params.slideClass+'" data-swiper-slide-index="'+a+'">'+t+"</div>");return r.attr("data-swiper-slide-index")||r.attr("data-swiper-slide-index",a),s.cache&&(i.virtual.cache[a]=r),r},appendSlide:function(e){var t=this;t.virtual.slides.push(e),t.virtual.update(!0)},prependSlide:function(e){var t=this;if(t.virtual.slides.unshift(e),t.params.virtual.cache){var a=t.virtual.cache,i={};Object.keys(a).forEach(function(e){i[e+1]=a[e]}),t.virtual.cache=i}t.virtual.update(!0),t.slideNext(0)}},N={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null}},create:function(){var e=this;l.extend(e,{virtual:{update:X.update.bind(e),appendSlide:X.appendSlide.bind(e),prependSlide:X.prependSlide.bind(e),renderSlide:X.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){var e=this;if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};l.extend(e.params,t),l.extend(e.originalParams,t),e.virtual.update()}},setTranslate:function(){var e=this;e.params.virtual.enabled&&e.virtual.update()}}},Y={handle:function(e){var t=this,a=e;a.originalEvent&&(a=a.originalEvent);var i=a.keyCode||a.charCode;if(!t.allowSlideNext&&(t.isHorizontal()&&39===i||t.isVertical()&&40===i))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&37===i||t.isVertical()&&38===i))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||d.activeElement&&d.activeElement.nodeName&&("input"===d.activeElement.nodeName.toLowerCase()||"textarea"===d.activeElement.nodeName.toLowerCase()))){if(37===i||39===i||38===i||40===i){var r=!1;if(t.$el.parents("."+t.params.slideClass).length>0&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var n={left:s.pageXOffset,top:s.pageYOffset},o=s.innerWidth,l=s.innerHeight,p=t.$el.offset();t.rtl&&(p.left-=t.$el[0].scrollLeft);for(var c=[[p.left,p.top],[p.left+t.width,p.top],[p.left,p.top+t.height],[p.left+t.width,p.top+t.height]],u=0;u<c.length;u+=1){var h=c[u];h[0]>=n.left&&h[0]<=n.left+o&&h[1]>=n.top&&h[1]<=n.top+l&&(r=!0)}if(!r)return}t.isHorizontal()?(37!==i&&39!==i||(a.preventDefault?a.preventDefault():a.returnValue=!1),(39===i&&!t.rtl||37===i&&t.rtl)&&t.slideNext(),(37===i&&!t.rtl||39===i&&t.rtl)&&t.slidePrev()):(38!==i&&40!==i||(a.preventDefault?a.preventDefault():a.returnValue=!1),40===i&&t.slideNext(),38===i&&t.slidePrev()),t.emit("keyPress",i)}},enable:function(){var t=this;t.keyboard.enabled||(e(d).on("keydown",t.keyboard.handle),t.keyboard.enabled=!0)},disable:function(){var t=this;t.keyboard.enabled&&(e(d).off("keydown",t.keyboard.handle),t.keyboard.enabled=!1)}},G={name:"keyboard",params:{keyboard:{enabled:!1}},create:function(){var e=this;l.extend(e,{keyboard:{enabled:!1,enable:Y.enable.bind(e),disable:Y.disable.bind(e),handle:Y.handle.bind(e)}})},on:{init:function(){var e=this;e.params.keyboard.enabled&&e.keyboard.enable()},destroy:function(){var e=this;e.keyboard.enabled&&e.keyboard.disable()}}},B={lastScrollTime:l.now(),event:s.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":a()?"wheel":"mousewheel",normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handle:function(e){var t=e,a=this,i=a.params.mousewheel;t.originalEvent&&(t=t.originalEvent);var r=0,n=a.rtl?-1:1,o=B.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(o.pixelX)>Math.abs(o.pixelY)))return!0;r=o.pixelX*n}else{if(!(Math.abs(o.pixelY)>Math.abs(o.pixelX)))return!0;r=o.pixelY}else r=Math.abs(o.pixelX)>Math.abs(o.pixelY)?-o.pixelX*n:-o.pixelY;if(0===r)return!0;if(i.invert&&(r=-r),a.params.freeMode){var d=a.getTranslate()+r*i.sensitivity,p=a.isBeginning,c=a.isEnd;if(d>=a.minTranslate()&&(d=a.minTranslate()),d<=a.maxTranslate()&&(d=a.maxTranslate()),a.setTransition(0),a.setTranslate(d),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!p&&a.isBeginning||!c&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky&&(clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=l.nextTick(function(){a.slideReset()},300)),a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.stopAutoplay(),0===d||d===a.maxTranslate())return!0}else{if(l.now()-a.mousewheel.lastScrollTime>60)if(r<0)if(a.isEnd&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slideNext(),a.emit("scroll",t);else if(a.isBeginning&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slidePrev(),a.emit("scroll",t);a.mousewheel.lastScrollTime=(new s.Date).getTime()}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},enable:function(){var t=this;if(!B.event)return!1;if(t.mousewheel.enabled)return!1;var a=t.$el;return"container"!==t.params.mousewheel.eventsTarged&&(a=e(t.params.mousewheel.eventsTarged)),a.on(B.event,t.mousewheel.handle),t.mousewheel.enabled=!0,!0},disable:function(){var t=this;if(!B.event)return!1;if(!t.mousewheel.enabled)return!1;var a=t.$el;return"container"!==t.params.mousewheel.eventsTarged&&(a=e(t.params.mousewheel.eventsTarged)),a.off(B.event,t.mousewheel.handle),t.mousewheel.enabled=!1,!0}},V={name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){var e=this;l.extend(e,{mousewheel:{enabled:!1,enable:B.enable.bind(e),disable:B.disable.bind(e),handle:B.handle.bind(e),lastScrollTime:l.now()}})},on:{init:function(){var e=this;e.params.mousewheel.enabled&&e.mousewheel.enable()},destroy:function(){var e=this;e.mousewheel.enabled&&e.mousewheel.disable()}}},R={update:function(){var e=this,t=e.params.navigation;if(!e.params.loop){var a=e.navigation,i=a.$nextEl,s=a.$prevEl;s&&s.length>0&&(e.isBeginning?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)),i&&i.length>0&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass))}},init:function(){var t=this,a=t.params.navigation;if(a.nextEl||a.prevEl){var i,s;a.nextEl&&(i=e(a.nextEl),t.params.uniqueNavElements&&"string"==typeof a.nextEl&&i.length>1&&1===t.$el.find(a.nextEl).length&&(i=t.$el.find(a.nextEl))),a.prevEl&&(s=e(a.prevEl),t.params.uniqueNavElements&&"string"==typeof a.prevEl&&s.length>1&&1===t.$el.find(a.prevEl).length&&(s=t.$el.find(a.prevEl))),i&&i.length>0&&i.on("click",function(e){e.preventDefault(),t.isEnd&&!t.params.loop||t.slideNext()}),s&&s.length>0&&s.on("click",function(e){e.preventDefault(),t.isBeginning&&!t.params.loop||t.slidePrev()}),l.extend(t.navigation,{$nextEl:i,nextEl:i&&i[0],$prevEl:s,prevEl:s&&s[0]})}},destroy:function(){var e=this,t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a.length&&(a.off("click"),a.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click"),i.removeClass(e.params.navigation.disabledClass))}},W={name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden"}},create:function(){var e=this;l.extend(e,{navigation:{init:R.init.bind(e),update:R.update.bind(e),destroy:R.destroy.bind(e)}})},on:{init:function(){var e=this;e.navigation.init(),e.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(t){var a=this,i=a.navigation,s=i.$nextEl,r=i.$prevEl;!a.params.navigation.hideOnClick||e(t.target).is(r)||e(t.target).is(s)||(s&&s.toggleClass(a.params.navigation.hiddenClass),r&&r.toggleClass(a.params.navigation.hiddenClass))}}},F={update:function(){var t=this,a=t.rtl,i=t.params.pagination;if(i.el&&t.pagination.el&&t.pagination.$el&&0!==t.pagination.$el.length){var s,r=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,n=t.pagination.$el,o=t.params.loop?Math.ceil((r-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?((s=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup))>r-1-2*t.loopedSlides&&(s-=r-2*t.loopedSlides),s>o-1&&(s-=o),s<0&&"bullets"!==t.params.paginationType&&(s=o+s)):s=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===i.type&&t.pagination.bullets&&t.pagination.bullets.length>0){var l=t.pagination.bullets;if(i.dynamicBullets&&(t.pagination.bulletSize=l.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),n.css(t.isHorizontal()?"width":"height",5*t.pagination.bulletSize+"px")),l.removeClass(i.bulletActiveClass+" "+i.bulletActiveClass+"-next "+i.bulletActiveClass+"-next-next "+i.bulletActiveClass+"-prev "+i.bulletActiveClass+"-prev-prev"),n.length>1)l.each(function(t,a){var r=e(a);r.index()===s&&(r.addClass(i.bulletActiveClass),i.dynamicBullets&&(r.prev().addClass(i.bulletActiveClass+"-prev").prev().addClass(i.bulletActiveClass+"-prev-prev"),r.next().addClass(i.bulletActiveClass+"-next").next().addClass(i.bulletActiveClass+"-next-next")))});else{var d=l.eq(s);d.addClass(i.bulletActiveClass),i.dynamicBullets&&(d.prev().addClass(i.bulletActiveClass+"-prev").prev().addClass(i.bulletActiveClass+"-prev-prev"),d.next().addClass(i.bulletActiveClass+"-next").next().addClass(i.bulletActiveClass+"-next-next"))}if(i.dynamicBullets){var p=Math.min(l.length,5),c=(t.pagination.bulletSize*p-t.pagination.bulletSize)/2-s*t.pagination.bulletSize,u=a?"right":"left";l.css(t.isHorizontal()?u:"top",c+"px")}}if("fraction"===i.type&&(n.find("."+i.currentClass).text(s+1),n.find("."+i.totalClass).text(o)),"progressbar"===i.type){var h=(s+1)/o,v=h,f=1;t.isHorizontal()||(f=h,v=1),n.find("."+i.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+v+") scaleY("+f+")").transition(t.params.speed)}"custom"===i.type&&i.renderCustom?(n.html(i.renderCustom(t,s+1,o)),t.emit("paginationRender",t,n[0])):t.emit("paginationUpdate",t,n[0])}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){for(var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find("."+t.bulletClass)}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var t=this,a=t.params.pagination;if(a.el){var i=e(a.el);0!==i.length&&(t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===t.$el.find(a.el).length&&(i=t.$el.find(a.el)),"bullets"===a.type&&a.clickable&&i.addClass(a.clickableClass),i.addClass(a.modifierClass+a.type),"bullets"===a.type&&a.dynamicBullets&&i.addClass(""+a.modifierClass+a.type+"-dynamic"),a.clickable&&i.on("click","."+a.bulletClass,function(a){a.preventDefault();var i=e(this).index()*t.params.slidesPerGroup;t.params.loop&&(i+=t.loopedSlides),t.slideTo(i)}),l.extend(t.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click","."+t.bulletClass)}}},j={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,type:"bullets",dynamicBullets:!1,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",clickableClass:"swiper-pagination-clickable"}},create:function(){var e=this;l.extend(e,{pagination:{init:F.init.bind(e),render:F.render.bind(e),update:F.update.bind(e),destroy:F.destroy.bind(e)}})},on:{init:function(){var e=this;e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(){var e=this;e.params.loop?e.pagination.update():void 0===e.snapIndex&&e.pagination.update()},snapIndexChange:function(){var e=this;e.params.loop||e.pagination.update()},slidesLengthChange:function(){var e=this;e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(){var e=this;e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(t){var a=this;a.params.pagination.el&&a.params.pagination.hideOnClick&&a.pagination.$el.length>0&&!e(t.target).hasClass(a.params.pagination.bulletClass)&&a.pagination.$el.toggleClass(a.params.pagination.hiddenClass)}}},q={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtl,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,o=t.$el,l=e.params.scrollbar,d=s,c=(r-s)*i;a&&e.isHorizontal()?(c=-c)>0?(d=s-c,c=0):-c+s>r&&(d=r+c):c<0?(d=s+c,c=0):c+s>r&&(d=r-c),e.isHorizontal()?(p.transforms3d?n.transform("translate3d("+c+"px, 0, 0)"):n.transform("translateX("+c+"px)"),n[0].style.width=d+"px"):(p.transforms3d?n.transform("translate3d(0px, "+c+"px, 0)"):n.transform("translateY("+c+"px)"),n[0].style.height=d+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),o[0].style.opacity=1,e.scrollbar.timeout=setTimeout(function(){o[0].style.opacity=0,o.transition(400)},1e3))}},setTransition:function(e){var t=this;t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,o=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=n>=1?"none":"",e.params.scrollbarHide&&(i[0].style.opacity=0),l.extend(t,{trackSize:r,divider:n,moveDivider:o,dragSize:s})}},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=i.$el,r=i.dragSize,n=i.moveDivider,o=(t=a.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-s.offset()[a.isHorizontal()?"left":"top"]-r/2,l=-a.minTranslate()*n,d=-a.maxTranslate()*n;o<l?o=l:o>d&&(o=d),a.rtl&&(o=d-o),o=-o/n,a.updateProgress(o),a.setTranslate(o),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this,a=t.scrollbar,i=t.$wrapperEl,s=a.$el,r=a.$dragEl;t.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),i.transition(0),s.transition(0),r.transition(0),t.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=l.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideReset())},enableDraggable:function(){var t=this;if(t.params.scrollbar.el){var a=t.scrollbar.$el,i=p.touch?a[0]:document;a.on(t.scrollbar.dragEvents.start,t.scrollbar.onDragStart),e(i).on(t.scrollbar.dragEvents.move,t.scrollbar.onDragMove),e(i).on(t.scrollbar.dragEvents.end,t.scrollbar.onDragEnd)}},disableDraggable:function(){var t=this;if(t.params.scrollbar.el){var a=t.scrollbar.$el,i=p.touch?a[0]:document;a.off(t.scrollbar.dragEvents.start),e(i).off(t.scrollbar.dragEvents.move),e(i).off(t.scrollbar.dragEvents.end)}},init:function(){var t=this;if(t.params.scrollbar.el){var a=t.scrollbar,i=t.$el,s=t.touchEvents,r=t.params.scrollbar,n=e(r.el);t.params.uniqueNavElements&&"string"==typeof r.el&&n.length>1&&1===i.find(r.el).length&&(n=i.find(r.el));var o=n.find(".swiper-scrollbar-drag");0===o.length&&(o=e('<div class="swiper-scrollbar-drag"></div>'),n.append(o)),t.scrollbar.dragEvents=!1!==t.params.simulateTouch||p.touch?s:{start:"mousedown",move:"mousemove",end:"mouseup"},l.extend(a,{$el:n,el:n[0],$dragEl:o,dragEl:o[0]}),r.draggable&&a.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},K={name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0}},create:function(){var e=this;l.extend(e,{scrollbar:{init:q.init.bind(e),destroy:q.destroy.bind(e),updateSize:q.updateSize.bind(e),setTranslate:q.setTranslate.bind(e),setTransition:q.setTransition.bind(e),enableDraggable:q.enableDraggable.bind(e),disableDraggable:q.disableDraggable.bind(e),setDragPosition:q.setDragPosition.bind(e),onDragStart:q.onDragStart.bind(e),onDragMove:q.onDragMove.bind(e),onDragEnd:q.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){var e=this;e.scrollbar.init(),e.scrollbar.updateSize(),e.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},U={setTransform:function(t,a){var i=this,s=i.rtl,r=e(t),n=s?-1:1,o=r.attr("data-swiper-parallax")||"0",l=r.attr("data-swiper-parallax-x"),d=r.attr("data-swiper-parallax-y"),p=r.attr("data-swiper-parallax-scale"),c=r.attr("data-swiper-parallax-opacity");if(l||d?(l=l||"0",d=d||"0"):i.isHorizontal()?(l=o,d="0"):(d=o,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*a*n+"%":l*a*n+"px",d=d.indexOf("%")>=0?parseInt(d,10)*a+"%":d*a+"px",void 0!==c&&null!==c){var u=c-(c-1)*(1-Math.abs(a));r[0].style.opacity=u}if(void 0===p||null===p)r.transform("translate3d("+l+", "+d+", 0px)");else{var h=p-(p-1)*(1-Math.abs(a));r.transform("translate3d("+l+", "+d+", 0px) scale("+h+")")}},setTranslate:function(){var t=this,a=t.$el,i=t.slides,s=t.progress,r=t.snapGrid;a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,a){t.parallax.setTransform(a,s)}),i.each(function(a,i){var n=i.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(n+=Math.ceil(a/2)-s*(r.length-1)),n=Math.min(Math.max(n,-1),1),e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,a){t.parallax.setTransform(a,n)})})},setTransition:function(t){void 0===t&&(t=this.params.speed),this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(a,i){var s=e(i),r=parseInt(s.attr("data-swiper-parallax-duration"),10)||t;0===t&&(r=0),s.transition(r)})}},_={name:"parallax",params:{parallax:{enabled:!1}},create:function(){var e=this;l.extend(e,{parallax:{setTransform:U.setTransform.bind(e),setTranslate:U.setTranslate.bind(e),setTransition:U.setTransition.bind(e)}})},on:{beforeInit:function(){this.params.watchSlidesProgress=!0},init:function(){var e=this;e.params.parallax&&e.parallax.setTranslate()},setTranslate:function(){var e=this;e.params.parallax&&e.parallax.setTranslate()},setTransition:function(e){var t=this;t.params.parallax&&t.parallax.setTransition(e)}}},Z={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(t){var a=this,i=a.params.zoom,s=a.zoom,r=s.gesture;if(s.fakeGestureTouched=!1,s.fakeGestureMoved=!1,!p.gestures){if("touchstart"!==t.type||"touchstart"===t.type&&t.targetTouches.length<2)return;s.fakeGestureTouched=!0,r.scaleStart=Z.getDistanceBetweenTouches(t)}r.$slideEl&&r.$slideEl.length||(r.$slideEl=e(this),0===r.$slideEl.length&&(r.$slideEl=a.slides.eq(a.activeIndex)),r.$imageEl=r.$slideEl.find("img, svg, canvas"),r.$imageWrapEl=r.$imageEl.parent("."+i.containerClass),r.maxRatio=r.$imageWrapEl.attr("data-swiper-zoom")||i.maxRatio,0!==r.$imageWrapEl.length)?(r.$imageEl.transition(0),a.zoom.isScaling=!0):r.$imageEl=void 0},onGestureChange:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(!p.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;i.fakeGestureMoved=!0,s.scaleMove=Z.getDistanceBetweenTouches(e)}s.$imageEl&&0!==s.$imageEl.length&&(p.gestures?t.zoom.scale=e.scale*i.currentScale:i.scale=s.scaleMove/s.scaleStart*i.currentScale,i.scale>s.maxRatio&&(i.scale=s.maxRatio-1+Math.pow(i.scale-s.maxRatio+1,.5)),i.scale<a.minRatio&&(i.scale=a.minRatio+1-Math.pow(a.minRatio-i.scale+1,.5)),s.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))},onGestureEnd:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(!p.gestures){if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!x.android)return;i.fakeGestureTouched=!1,i.fakeGestureMoved=!1}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,s.maxRatio),a.minRatio),s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(s.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,a=t.gesture,i=t.image;a.$imageEl&&0!==a.$imageEl.length&&(i.isTouched||(x.android&&e.preventDefault(),i.isTouched=!0,i.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=l.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=l.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX),t.rtl&&(s.startY=-s.startY));var n=s.width*a.scale,o=s.height*a.scale;if(!(n<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,o=a.currentX+n,l=i.y*r,d=a.currentY+l;0!==i.x&&(s=Math.abs((o-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=o,a.currentY=d;var c=a.width*e.scale,u=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-c/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-u/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this,t=e.zoom,a=t.gesture;a.$slideEl&&e.previousIndex!==e.activeIndex&&(a.$imageEl.transform("translate3d(0,0,0) scale(1)"),a.$imageWrapEl.transform("translate3d(0,0,0)"),a.$slideEl=void 0,a.$imageEl=void 0,a.$imageWrapEl=void 0,t.scale=1,t.currentScale=1)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(t){var a=this,i=a.zoom,s=a.params.zoom,r=i.gesture,n=i.image;if(r.$slideEl||(r.$slideEl=a.clickedSlide?e(a.clickedSlide):a.slides.eq(a.activeIndex),r.$imageEl=r.$slideEl.find("img, svg, canvas"),r.$imageWrapEl=r.$imageEl.parent("."+s.containerClass)),r.$imageEl&&0!==r.$imageEl.length){r.$slideEl.addClass(""+s.zoomedSlideClass);var o,l,d,p,c,u,h,v,f,m,g,b,w,y,x,T;void 0===n.touchesStart.x&&t?(o="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,l="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(o=n.touchesStart.x,l=n.touchesStart.y),i.scale=r.$imageWrapEl.attr("data-swiper-zoom")||s.maxRatio,i.currentScale=r.$imageWrapEl.attr("data-swiper-zoom")||s.maxRatio,t?(x=r.$slideEl[0].offsetWidth,T=r.$slideEl[0].offsetHeight,d=r.$slideEl.offset().left+x/2-o,p=r.$slideEl.offset().top+T/2-l,h=r.$imageEl[0].offsetWidth,v=r.$imageEl[0].offsetHeight,f=h*i.scale,m=v*i.scale,w=-(g=Math.min(x/2-f/2,0)),y=-(b=Math.min(T/2-m/2,0)),c=d*i.scale,u=p*i.scale,c<g&&(c=g),c>w&&(c=w),u<b&&(u=b),u>y&&(u=y)):(c=0,u=0),r.$imageWrapEl.transition(300).transform("translate3d("+c+"px, "+u+"px,0)"),r.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+i.scale+")")}},out:function(){var t=this,a=t.zoom,i=t.params.zoom,s=a.gesture;s.$slideEl||(s.$slideEl=t.clickedSlide?e(t.clickedSlide):t.slides.eq(t.activeIndex),s.$imageEl=s.$slideEl.find("img, svg, canvas"),s.$imageWrapEl=s.$imageEl.parent("."+i.containerClass)),s.$imageEl&&0!==s.$imageEl.length&&(a.scale=1,a.currentScale=1,s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),s.$slideEl.removeClass(""+i.zoomedSlideClass),s.$slideEl=void 0)},enable:function(){var t=this,a=t.zoom;if(!a.enabled){a.enabled=!0;var i=t.slides,s=!("touchstart"!==t.touchEvents.start||!p.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};p.gestures?(i.on("gesturestart",a.onGestureStart,s),i.on("gesturechange",a.onGestureChange,s),i.on("gestureend",a.onGestureEnd,s)):"touchstart"===t.touchEvents.start&&(i.on(t.touchEvents.start,a.onGestureStart,s),i.on(t.touchEvents.move,a.onGestureChange,s),i.on(t.touchEvents.end,a.onGestureEnd,s)),t.slides.each(function(i,s){var r=e(s);r.find("."+t.params.zoom.containerClass).length>0&&r.on(t.touchEvents.move,a.onTouchMove)})}},disable:function(){var t=this,a=t.zoom;if(a.enabled){t.zoom.enabled=!1;var i=t.slides,s=!("touchstart"!==t.touchEvents.start||!p.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};p.gestures?(i.off("gesturestart",a.onGestureStart,s),i.off("gesturechange",a.onGestureChange,s),i.off("gestureend",a.onGestureEnd,s)):"touchstart"===t.touchEvents.start&&(i.off(t.touchEvents.start,a.onGestureStart,s),i.off(t.touchEvents.move,a.onGestureChange,s),i.off(t.touchEvents.end,a.onGestureEnd,s)),t.slides.each(function(i,s){var r=e(s);r.find("."+t.params.zoom.containerClass).length>0&&r.off(t.touchEvents.move,a.onTouchMove)})}}},Q={name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(a){t[a]=Z[a].bind(e)}),l.extend(e,{zoom:t})},on:{init:function(){var e=this;e.params.zoom.enabled&&e.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){var t=this;t.zoom.enabled&&t.zoom.onTouchStart(e)},touchEnd:function(e){var t=this;t.zoom.enabled&&t.zoom.onTouchEnd(e)},doubleTap:function(e){var t=this;t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&t.zoom.toggle(e)},transitionEnd:function(){var e=this;e.zoom.enabled&&e.params.zoom.enabled&&e.zoom.onTransitionEnd()}}},J={loadInSlide:function(t,a){void 0===a&&(a=!0);var i=this,s=i.params.lazy;if(void 0!==t&&0!==i.slides.length){var r=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+t+'"]'):i.slides.eq(t),n=r.find("."+s.elementClass+":not(."+s.loadedClass+"):not(."+s.loadingClass+")");!r.hasClass(s.elementClass)||r.hasClass(s.loadedClass)||r.hasClass(s.loadingClass)||(n=n.add(r[0])),0!==n.length&&n.each(function(t,n){var o=e(n);o.addClass(s.loadingClass);var l=o.attr("data-background"),d=o.attr("data-src"),p=o.attr("data-srcset"),c=o.attr("data-sizes");i.loadImage(o[0],d||l,p,c,!1,function(){if(void 0!==i&&null!==i&&i&&(!i||i.params)&&!i.destroyed){if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(p&&(o.attr("srcset",p),o.removeAttr("data-srcset")),c&&(o.attr("sizes",c),o.removeAttr("data-sizes")),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(s.loadedClass).removeClass(s.loadingClass),r.find("."+s.preloaderClass).remove(),i.params.loop&&a){var e=r.attr("data-swiper-slide-index");if(r.hasClass(i.params.slideDuplicateClass)){var t=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(t.index(),!1)}else{var n=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(n.index(),!1)}}i.emit("lazyImageReady",r[0],o[0])}}),i.emit("lazyImageLoad",r[0],o[0])})}},load:function(){function t(e){if(l){if(s.children("."+r.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(n[e])return!0;return!1}function a(t){return l?e(t).attr("data-swiper-slide-index"):e(t).index()}var i=this,s=i.$wrapperEl,r=i.params,n=i.slides,o=i.activeIndex,l=i.virtual&&r.virtual.enabled,d=r.lazy,p=r.slidesPerView;if("auto"===p&&(p=0),i.lazy.initialImageLoaded||(i.lazy.initialImageLoaded=!0),i.params.watchSlidesVisibility)s.children("."+r.slideVisibleClass).each(function(t,a){var s=l?e(a).attr("data-swiper-slide-index"):e(a).index();i.lazy.loadInSlide(s)});else if(p>1)for(var c=o;c<o+p;c+=1)t(c)&&i.lazy.loadInSlide(c);else i.lazy.loadInSlide(o);if(d.loadPrevNext)if(p>1||d.loadPrevNextAmount&&d.loadPrevNextAmount>1){for(var u=d.loadPrevNextAmount,h=p,v=Math.min(o+h+Math.max(u,h),n.length),f=Math.max(o-Math.max(h,u),0),m=o+p;m<v;m+=1)t(m)&&i.lazy.loadInSlide(m);for(var g=f;g<o;g+=1)t(g)&&i.lazy.loadInSlide(g)}else{var b=s.children("."+r.slideNextClass);b.length>0&&i.lazy.loadInSlide(a(b));var w=s.children("."+r.slidePrevClass);w.length>0&&i.lazy.loadInSlide(a(w))}}},ee={name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){var e=this;l.extend(e,{lazy:{initialImageLoaded:!1,load:J.load.bind(e),loadInSlide:J.loadInSlide.bind(e)}})},on:{beforeInit:function(){var e=this;e.params.preloadImages&&(e.params.preloadImages=!1)},init:function(){var e=this;e.params.lazy.enabled&&!e.params.loop&&0===e.params.initialSlide&&e.lazy.load()},scroll:function(){var e=this;e.params.freeMode&&!e.params.freeModeSticky&&e.lazy.load()},resize:function(){var e=this;e.params.lazy.enabled&&e.lazy.load()},scrollbarDragMove:function(){var e=this;e.params.lazy.enabled&&e.lazy.load()},transitionStart:function(){var e=this;e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(){var e=this;e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&e.lazy.load()}}},te={LinearSpline:function(e,t){var a=function(){var e,t,a;return function(i,s){for(t=-1,e=i.length;e-t>1;)i[a=e+t>>1]<=s?t=a:e=a;return e}}();this.x=e,this.y=t,this.lastIndex=e.length-1;var i,s;return this.interpolate=function(e){return e?(s=a(this.x,e),i=s-1,(e-this.x[i])*(this.y[s]-this.y[i])/(this.x[s]-this.x[i])+this.y[i]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new te.LinearSpline(t.slidesGrid,e.slidesGrid):new te.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){function a(e){var t=e.rtl&&"horizontal"===e.params.direction?-r.translate:r.translate;"slide"===r.params.controller.by&&(r.controller.getInterpolateFunction(e),s=-r.controller.spline.interpolate(-t)),s&&"container"!==r.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(r.maxTranslate()-r.minTranslate()),s=(t-r.minTranslate())*i+e.minTranslate()),r.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,r),e.updateActiveIndex(),e.updateSlidesClasses()}var i,s,r=this,n=r.controller.control;if(Array.isArray(n))for(var o=0;o<n.length;o+=1)n[o]!==t&&n[o]instanceof $&&a(n[o]);else n instanceof $&&t!==n&&a(n)},setTransition:function(e,t){function a(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.$wrapperEl.transitionEnd(function(){r&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())}))}var i,s=this,r=s.controller.control;if(Array.isArray(r))for(i=0;i<r.length;i+=1)r[i]!==t&&r[i]instanceof $&&a(r[i]);else r instanceof $&&t!==r&&a(r)}},ae={name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){var e=this;l.extend(e,{controller:{control:e.params.controller.control,getInterpolateFunction:te.getInterpolateFunction.bind(e),setTranslate:te.setTranslate.bind(e),setTransition:te.setTransition.bind(e)}})},on:{update:function(){var e=this;e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},resize:function(){var e=this;e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},observerUpdate:function(){var e=this;e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},setTranslate:function(e,t){var a=this;a.controller.control&&a.controller.setTranslate(e,t)},setTransition:function(e,t){var a=this;a.controller.control&&a.controller.setTransition(e,t)}}},ie={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(t){var a=this,i=a.params.a11y;if(13===t.keyCode){var s=e(t.target);a.navigation&&a.navigation.$nextEl&&s.is(a.navigation.$nextEl)&&(a.isEnd&&!a.params.loop||a.slideNext(),a.isEnd?a.a11y.notify(i.lastSlideMessage):a.a11y.notify(i.nextSlideMessage)),a.navigation&&a.navigation.$prevEl&&s.is(a.navigation.$prevEl)&&(a.isBeginning&&!a.params.loop||a.slidePrev(),a.isBeginning?a.a11y.notify(i.firstSlideMessage):a.a11y.notify(i.prevSlideMessage)),a.pagination&&s.is("."+a.params.pagination.bulletClass)&&s[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&i.length>0&&(e.isBeginning?e.a11y.disableEl(i):e.a11y.enableEl(i)),a&&a.length>0&&(e.isEnd?e.a11y.disableEl(a):e.a11y.enableEl(a))}},updatePagination:function(){var t=this,a=t.params.a11y;t.pagination&&t.params.pagination.clickable&&t.pagination.bullets&&t.pagination.bullets.length&&t.pagination.bullets.each(function(i,s){var r=e(s);t.a11y.makeElFocusable(r),t.a11y.addElRole(r,"button"),t.a11y.addElLabel(r,a.paginationBulletMessage.replace(/{{index}}/,r.index()+1))})},init:function(){var e=this;e.$el.append(e.a11y.liveRegion);var t,a,i=e.params.a11y;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&(e.a11y.makeElFocusable(t),e.a11y.addElRole(t,"button"),e.a11y.addElLabel(t,i.nextSlideMessage),t.on("keydown",e.a11y.onEnterKey)),a&&(e.a11y.makeElFocusable(a),e.a11y.addElRole(a,"button"),e.a11y.addElLabel(a,i.prevSlideMessage),a.on("keydown",e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e=this;e.a11y.liveRegion&&e.a11y.liveRegion.length>0&&e.a11y.liveRegion.remove();var t,a;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&t.off("keydown",e.a11y.onEnterKey),a&&a.off("keydown",e.a11y.onEnterKey),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.off("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)}},se={name:"a11y",params:{a11y:{enabled:!1,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var t=this;l.extend(t,{a11y:{liveRegion:e('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(ie).forEach(function(e){t.a11y[e]=ie[e].bind(t)})},on:{init:function(){var e=this;e.params.a11y.enabled&&(e.a11y.init(),e.a11y.updateNavigation())},toEdge:function(){var e=this;e.params.a11y.enabled&&e.a11y.updateNavigation()},fromEdge:function(){var e=this;e.params.a11y.enabled&&e.a11y.updateNavigation()},paginationUpdate:function(){var e=this;e.params.a11y.enabled&&e.a11y.updatePagination()},destroy:function(){var e=this;e.params.a11y.enabled&&e.a11y.destroy()}}},re={init:function(){var e=this;if(e.params.history){if(!s.history||!s.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var t=e.history;t.initialized=!0,t.paths=re.getPathValues(),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||s.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){var e=this;e.params.history.replaceState||s.removeEventListener("popstate",e.history.setHistoryPopState)},setHistoryPopState:function(){var e=this;e.history.paths=re.getPathValues(),e.history.scrollToSlide(e.params.speed,e.history.paths.value,!1)},getPathValues:function(){var e=s.location.pathname.slice(1).split("/"),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){var a=this;if(a.history.initialized&&a.params.history.enabled){var i=a.slides.eq(t),r=re.slugify(i.attr("data-history"));s.location.pathname.includes(e)||(r=e+"/"+r);var n=s.history.state;n&&n.value===r||(a.params.history.replaceState?s.history.replaceState({value:r},null,r):s.history.pushState({value:r},null,r))}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(re.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var o=n.index();i.slideTo(o,e,a)}}else i.slideTo(0,e,a)}},ne={name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){var e=this;l.extend(e,{history:{init:re.init.bind(e),setHistory:re.setHistory.bind(e),setHistoryPopState:re.setHistoryPopState.bind(e),scrollToSlide:re.scrollToSlide.bind(e)}})},on:{init:function(){var e=this;e.params.history.enabled&&e.history.init()},destroy:function(){var e=this;e.params.history.enabled&&e.history.destroy()},transitionEnd:function(){var e=this;e.history.initialized&&e.history.setHistory(e.params.history.key,e.activeIndex)}}},oe={onHashCange:function(){var e=this,t=d.location.hash.replace("#","");t!==e.slides.eq(e.activeIndex).attr("data-hash")&&e.slideTo(e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+t+'"]').index())},setHash:function(){var e=this;if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&s.history&&s.history.replaceState)s.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||"");else{var t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");d.location.hash=a||""}},init:function(){var t=this;if(!(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)){t.hashNavigation.initialized=!0;var a=d.location.hash.replace("#","");if(a)for(var i=0,r=t.slides.length;i<r;i+=1){var n=t.slides.eq(i);if((n.attr("data-hash")||n.attr("data-history"))===a&&!n.hasClass(t.params.slideDuplicateClass)){var o=n.index();t.slideTo(o,0,t.params.runCallbacksOnInit,!0)}}t.params.hashNavigation.watchState&&e(s).on("hashchange",t.hashNavigation.onHashCange)}},destroy:function(){var t=this;t.params.hashNavigation.watchState&&e(s).off("hashchange",t.hashNavigation.onHashCange)}},le={name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){var e=this;l.extend(e,{hashNavigation:{initialized:!1,init:oe.init.bind(e),destroy:oe.destroy.bind(e),setHash:oe.setHash.bind(e),onHashCange:oe.onHashCange.bind(e)}})},on:{init:function(){var e=this;e.params.hashNavigation.enabled&&e.hashNavigation.init()},destroy:function(){var e=this;e.params.hashNavigation.enabled&&e.hashNavigation.destroy()},transitionEnd:function(){var e=this;e.hashNavigation.initialized&&e.hashNavigation.setHash()}}},de={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=l.nextTick(function(){e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0===e?(t.autoplay.paused=!1,t.autoplay.run()):t.$wrapperEl.transitionEnd(function(){t&&!t.destroyed&&(t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())})))}},pe={name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,disableOnInteraction:!0,stopOnLastSlide:!1}},create:function(){var e=this;l.extend(e,{autoplay:{running:!1,paused:!1,run:de.run.bind(e),start:de.start.bind(e),stop:de.stop.bind(e),pause:de.pause.bind(e)}})},on:{init:function(){var e=this;e.params.autoplay.enabled&&e.autoplay.start()},beforeTransitionStart:function(e,t){var a=this;a.autoplay.running&&(t||!a.params.autoplay.disableOnInteraction?a.autoplay.pause(e):a.autoplay.stop())},sliderFirstMove:function(){var e=this;e.autoplay.running&&(e.params.autoplay.disableOnInteraction?e.autoplay.stop():e.autoplay.pause())},destroy:function(){var e=this;e.autoplay.running&&e.autoplay.stop()}}},ce={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var t=this,a=t.slides,i=t.$wrapperEl;if(a.transition(e),t.params.virtualTranslate&&0!==e){var s=!1;a.transitionEnd(function(){if(!s&&t&&!t.destroyed){s=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],a=0;a<e.length;a+=1)i.trigger(e[a])}})}}},ue={name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){var e=this;l.extend(e,{fadeEffect:{setTranslate:ce.setTranslate.bind(e),setTransition:ce.setTransition.bind(e)}})},on:{beforeInit:function(){var e=this;if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};l.extend(e.params,t),l.extend(e.originalParams,t)}},setTranslate:function(){var e=this;"fade"===e.params.effect&&e.fadeEffect.setTranslate()},setTransition:function(e){var t=this;"fade"===t.params.effect&&t.fadeEffect.setTransition(e)}}},he={setTranslate:function(){var t,a=this,i=a.$el,s=a.$wrapperEl,r=a.slides,n=a.width,o=a.height,l=a.rtl,d=a.size,p=a.params.cubeEffect,c=a.isHorizontal(),u=a.virtual&&a.params.virtual.enabled,h=0;p.shadow&&(c?(0===(t=s.find(".swiper-cube-shadow")).length&&(t=e('<div class="swiper-cube-shadow"></div>'),s.append(t)),t.css({height:n+"px"})):0===(t=i.find(".swiper-cube-shadow")).length&&(t=e('<div class="swiper-cube-shadow"></div>'),i.append(t)));for(var v=0;v<r.length;v+=1){var f=r.eq(v),g=v;u&&(g=parseInt(f.attr("data-swiper-slide-index"),10));var b=90*g,w=Math.floor(b/360);l&&(b=-b,w=Math.floor(-b/360));var y=Math.max(Math.min(f[0].progress,1),-1),x=0,T=0,E=0;g%4==0?(x=4*-w*d,E=0):(g-1)%4==0?(x=0,E=4*-w*d):(g-2)%4==0?(x=d+4*w*d,E=d):(g-3)%4==0&&(x=-d,E=3*d+4*d*w),l&&(x=-x),c||(T=x,x=0);var S="rotateX("+(c?0:-b)+"deg) rotateY("+(c?b:0)+"deg) translate3d("+x+"px, "+T+"px, "+E+"px)";if(y<=1&&y>-1&&(h=90*g+90*y,l&&(h=90*-g-90*y)),f.transform(S),p.slideShadows){var C=c?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=c?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===C.length&&(C=e('<div class="swiper-slide-shadow-'+(c?"left":"top")+'"></div>'),f.append(C)),0===M.length&&(M=e('<div class="swiper-slide-shadow-'+(c?"right":"bottom")+'"></div>'),f.append(M)),C.length&&(C[0].style.opacity=Math.max(-y,0)),M.length&&(M[0].style.opacity=Math.max(y,0))}}if(s.css({"-webkit-transform-origin":"50% 50% -"+d/2+"px","-moz-transform-origin":"50% 50% -"+d/2+"px","-ms-transform-origin":"50% 50% -"+d/2+"px","transform-origin":"50% 50% -"+d/2+"px"}),p.shadow)if(c)t.transform("translate3d(0px, "+(n/2+p.shadowOffset)+"px, "+-n/2+"px) rotateX(90deg) rotateZ(0deg) scale("+p.shadowScale+")");else{var z=Math.abs(h)-90*Math.floor(Math.abs(h)/90),P=1.5-(Math.sin(2*z*Math.PI/360)/2+Math.cos(2*z*Math.PI/360)/2),k=p.shadowScale,$=p.shadowScale/P,I=p.shadowOffset;t.transform("scale3d("+k+", 1, "+$+") translate3d(0px, "+(o/2+I)+"px, "+-o/2/$+"px) rotateX(-90deg)")}var L=m.isSafari||m.isUiWebView?-d/2:0;s.transform("translate3d(0px,0,"+L+"px) rotateX("+(a.isHorizontal()?0:h)+"deg) rotateY("+(a.isHorizontal()?-h:0)+"deg)")},setTransition:function(e){var t=this,a=t.$el;t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&a.find(".swiper-cube-shadow").transition(e)}},ve={name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){var e=this;l.extend(e,{cubeEffect:{setTranslate:he.setTranslate.bind(e),setTransition:he.setTransition.bind(e)}})},on:{beforeInit:function(){var e=this;if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};l.extend(e.params,t),l.extend(e.originalParams,t)}},setTranslate:function(){var e=this;"cube"===e.params.effect&&e.cubeEffect.setTranslate()},setTransition:function(e){var t=this;"cube"===t.params.effect&&t.cubeEffect.setTransition(e)}}},fe={setTranslate:function(){for(var t=this,a=t.slides,i=0;i<a.length;i+=1){var s=a.eq(i),r=s[0].progress;t.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,o=0,l=-s[0].swiperSlideOffset,d=0;if(t.isHorizontal()?t.rtl&&(n=-n):(d=l,l=0,o=-n,n=0),s[0].style.zIndex=-Math.abs(Math.round(r))+a.length,t.params.flipEffect.slideShadows){var p=t.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),c=t.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=e('<div class="swiper-slide-shadow-'+(t.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===c.length&&(c=e('<div class="swiper-slide-shadow-'+(t.isHorizontal()?"right":"bottom")+'"></div>'),s.append(c)),p.length&&(p[0].style.opacity=Math.max(-r,0)),c.length&&(c[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,a=t.slides,i=t.activeIndex,s=t.$wrapperEl;if(a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;a.eq(i).transitionEnd(function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],a=0;a<e.length;a+=1)s.trigger(e[a])}})}}},me={name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){var e=this;l.extend(e,{flipEffect:{setTranslate:fe.setTranslate.bind(e),setTransition:fe.setTransition.bind(e)}})},on:{beforeInit:function(){var e=this;if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};l.extend(e.params,t),l.extend(e.originalParams,t)}},setTranslate:function(){var e=this;"flip"===e.params.effect&&e.flipEffect.setTranslate()},setTransition:function(e){var t=this;"flip"===t.params.effect&&t.flipEffect.setTransition(e)}}},ge={setTranslate:function(){for(var t=this,a=t.width,i=t.height,s=t.slides,r=t.$wrapperEl,n=t.slidesSizesGrid,o=t.params.coverflowEffect,l=t.isHorizontal(),d=t.translate,p=l?a/2-d:i/2-d,c=l?o.rotate:-o.rotate,u=o.depth,h=0,v=s.length;h<v;h+=1){var f=s.eq(h),g=n[h],b=(p-f[0].swiperSlideOffset-g/2)/g*o.modifier,w=l?c*b:0,y=l?0:c*b,x=-u*Math.abs(b),T=l?0:o.stretch*b,E=l?o.stretch*b:0;Math.abs(E)<.001&&(E=0),Math.abs(T)<.001&&(T=0),Math.abs(x)<.001&&(x=0),Math.abs(w)<.001&&(w=0),Math.abs(y)<.001&&(y=0);var S="translate3d("+E+"px,"+T+"px,"+x+"px)  rotateX("+y+"deg) rotateY("+w+"deg)";if(f.transform(S),f[0].style.zIndex=1-Math.abs(Math.round(b)),o.slideShadows){var C=l?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=l?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===C.length&&(C=e('<div class="swiper-slide-shadow-'+(l?"left":"top")+'"></div>'),f.append(C)),0===M.length&&(M=e('<div class="swiper-slide-shadow-'+(l?"right":"bottom")+'"></div>'),f.append(M)),C.length&&(C[0].style.opacity=b>0?b:0),M.length&&(M[0].style.opacity=-b>0?-b:0)}}m.ie&&(r[0].style.perspectiveOrigin=p+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},be={name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){var e=this;l.extend(e,{coverflowEffect:{setTranslate:ge.setTranslate.bind(e),setTransition:ge.setTransition.bind(e)}})},on:{beforeInit:function(){var e=this;"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0)},setTranslate:function(){var e=this;"coverflow"===e.params.effect&&e.coverflowEffect.setTranslate()},setTransition:function(e){var t=this;"coverflow"===t.params.effect&&t.coverflowEffect.setTransition(e)}}};return $.components=[I,L,D,O,H,N,G,V,W,j,K,_,Q,ee,ae,se,ne,le,pe,ue,ve,me,be],$});
//# sourceMappingURL=swiper.min.js.map
