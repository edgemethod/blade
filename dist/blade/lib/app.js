
// minified
/^u/.test(typeof define)&&function(a){var b=this.require=function(b){return a[b]};this.define=function(c,d){a[c]=a[c]||d(b)}}({}),define("minified",function(){function a(a){return a!=z?""+a:""}function b(a){return/^str/.test(typeof a)}function c(a){return a&&a.nodeType}function d(a){return a}function e(a,b){j(a,function(a){a(b)})}function f(a,b){for(var c in a)b(c,a[c])}function g(a,b){var c=[];return j(a,function(d,e){b.call(a,d,e)&&c.push(d)}),c}function h(a,b,c){var d=[];return a(b,function(a,e){j(c.call(b,a,e),function(a){d.push(a)})}),d}function i(b,c,d){return a(b).replace(c,d||"")}function j(a,b){if(l(a))for(var c=0;c<a.length;c++)b.call(a,a[c],c);else a!=z&&b(a,0);return a}function k(a){return"function"==typeof a&&!a.item}function l(a){return a&&a.length!=z&&!b(a)&&!c(a)&&!k(a)&&a!==A}function m(a){return parseFloat(i(a,/^[^\d-]+/))}function n(a){return a.Nia=a.Nia||++D}function o(a,b){var c,d=[],e={};return j(a,function(a){j(b(a),function(a){e[c=n(a)]||(d.push(a),e[c]=!0)})}),d}function p(a,b){var c={$position:"absolute",$visibility:"hidden",$display:"block",$height:z},d=a.get(c),c=a.set(c).get("clientHeight");return a.set(d),c*b+"px"}function q(a){E?E.push(a):setTimeout(a,0)}function r(a){return h(j,a,function(a){return l(a)?r(a):(c(a)&&(a=a.cloneNode(!0),a.removeAttribute&&a.removeAttribute("id")),a)})}function s(a,b,c){return k(a)?q(a):new x(t(a,b,c))}function t(a,d,e){function f(a){return l(a)?h(j,a,f):a}function i(a){return g(h(j,a,f),function(a){for(;a=a.parentNode;)if(a==d[0]||e)return a==d[0]})}return d?1!=(d=t(d)).length?o(d,function(b){return t(a,b,e)}):b(a)?1!=c(d[0])?[]:e?i(d[0].querySelectorAll(a)):d[0].querySelectorAll(a):i(a):b(a)?document.querySelectorAll(a):h(j,a,f)}function u(a,d){function e(a,b){var c=RegExp("(^|\\s+)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):!0}}var f,g,h={},i=h;return k(a)?a:/^num/.test(typeof a)?function(b,c){return c==a}:!a||"*"==a||b(a)&&(i=/^([\w-]*)\.?([\w-]*)$/.exec(a))?(f=e(i[1],"tagName"),g=e(i[2],"className"),function(a){return 1==c(a)&&f(a)&&g(a)}):d?function(b){return s(a,d).find(b)!=z}:(s(a).each(function(a){h[n(a)]=!0}),function(a){return h[n(a)]})}function v(a){var b=u(a);return function(a){return b(a)?z:!0}}function w(){function a(a,e){function f(){var d=b?a:e;k(d)?(d=d.apply(y,c))&&d.then?d.then(function(a){g.fire(!0,[a])},function(a){g.fire(!1,[a])}):g.fire(!0,[d]):g.fire(b,c)}var g=w();return b==z?d.push(f):setTimeout(f,0),g}var b,c,d=[];return{fire:function(a,f){b==z&&(b=a,c=f,setTimeout(function(){e(d)},0))},then:a,error:function(b){return a(0,b)}}}function x(a){for(var b=this.length=a.length,c=0;b>c;c++)this[c]=a[c]}var y,z=null,A=window,B={},C={},D=1,E=/^[ic]/.test(document.readyState)?z:[],F={},G=0;return f({each:function(a){return j(this,a)},filter:function(a){return new x(g(this,a))},collect:function(a){return new x(h(j,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=b>=0?b:this.length+(b||0);return new x(g(this,function(a,b){return b>=c&&d>b}))},find:function(a,b){for(var c,d=k(a)?a:function(b,c){return a===b?c:void 0},e=b||0;e<this.length;e++)if((c=d.call(this,this[e],e))!=z)return c},remove:function(){j(this,function(a){a.parentNode.removeChild(a)})},text:function(){return h(j,this,function(a){return a.textContent}).join("")},trav:function(a,b,c){var d=/^num/.test(typeof b),e=u(d?z:b),f=d?b:c;return new x(o(this,function(b){for(var c=[];(b=b[a])&&c.length!=f;)e(b)&&c.push(b);return c}))},next:function(a,b){return this.trav("nextSibling",a,b||1)},up:function(a,b){return this.trav("parentNode",a,b||1)},select:function(a,b){return s(a,this,b)},is:function(a){return!this.find(v(a))},only:function(a){return new x(g(this,u(a)))},not:function(a){return new x(g(this,v(a)))},get:function(a,c){var d,e,g,h=this,k=h[0];return k?b(a)?(d=/^(\W*)(.*)/.exec(i(a,/^%/,"@data-")),e=d[1],k=C[e]?C[e](this,d[2]):"$"==a?h.get("className"):"$$"==a?h.get("@style"):"$$slide"==a?h.get("$height"):"$$fade"==a||"$$show"==a?"hidden"==h.get("$visibility")||"none"==h.get("$display")?0:"$$fade"==a?isNaN(h.get("$opacity",!0))?1:h.get("$opacity",!0):1:"$"==e?A.getComputedStyle(k,z).getPropertyValue(i(d[2],/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):"@"==e?k.getAttribute(d[2]):k[d[2]],c?m(k):k):(g={},(l(a)?j:f)(a,function(a){g[a]=h.get(a,c)}),g):void 0},set:function(a,c){var d,e,g=this;return c!==y?(d=/^(\W*)(.*)/.exec(i(i(a,/^\$float$/,"cssFloat"),/^%/,"@data-")),e=d[1],B[e]?B[e](this,d[2],c):"$$fade"==a?this.set({$visibility:c?"visible":"hidden",$opacity:c}):"$$slide"==a?g.set({$visibility:c?"visible":"hidden",$overflow:"hidden",$height:/px/.test(c)?c:function(a,b,d){return p(s(d),c)}}):"$$show"==a?c?g.set({$visibility:c?"visible":"hidden",$display:""}).set({$display:function(a){return"none"==a?"block":a}}):g.set({$display:"none"}):"$$"==a?g.set("@style",c):j(this,function(b,f){var g=k(c)?c(s(b).get(a),f,b):c;"$"==e?d[2]?b.style[d[2]]=g:j(g&&g.split(/\s+/),function(a){var c=i(a,/^[+-]/),d=b.className||"",e=i(d,RegExp("(^|\\s+)"+c+"(?=$|\\s)"));(/^\+/.test(a)||c==a&&d==e)&&(e+=" "+c),b.className=i(e,/^\s+/g)}):"$$scrollX"==a?b.scroll(g,s(b).get("$$scrollY")):"$$scrollY"==a?b.scroll(s(b).get("$$scrollX"),g):"@"==e?g==z?b.removeAttribute(d[2]):b.setAttribute(d[2],g):b[d[2]]=g})):b(a)||k(a)?g.set("$",a):f(a,function(a,b){g.set(a,b)}),g},show:function(){return this.set("$$show",1)},hide:function(){return this.set("$$show",0)},add:function(a,b){return this.each(function(d,e){function f(a){l(a)?j(a,f):k(a)?f(a(d,e)):a!=z&&(a=c(a)?a:document.createTextNode(a),g?g.parentNode.insertBefore(a,g.nextSibling):b?b(a,d,d.parentNode):d.appendChild(a),g=a)}var g;f(e&&!k(a)?r(a):a)})},fill:function(a){return this.each(function(a){s(a.childNodes).remove()}).add(a)},addAfter:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b.nextSibling)})},addBefore:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,c){c.replaceChild(a,b)})},clone:function(){return new x(r(this))},animate:function(a,b,c){var d,g=w(),i=this,l=h(j,this,function(b,d){var e,g=s(b),h={};return f(e=g.get(a),function(c,e){var f=a[c];h[c]=k(f)?f(e,d,b):"$$slide"==c?p(g,f):f}),g.dial(e,h,c)}),m=b||500;return g.stop=function(){return g.fire(!1),d()},d=s.loop(function(a){e(l,a/m),a>=m&&(d(),g.fire(!0,[i]))}),g},dial:function(b,c,d){function e(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(2*b+1,2):(a=a.charAt(b+1))+a,16):m(a.split(",")[b])}var g=this,h=d||0,j=k(h)?h:function(a,b,c){return c*(b-a)*(h+(1-h)*c*(3-2*c))+a};return function(d){f(b,function(b,f){var h=c[b],k=0;g.set(b,0>=d?f:d>=1?h:/^#|rgb\(/.test(h)?"rgb("+Math.round(j(e(f,k),e(h,k++),d))+","+Math.round(j(e(f,k),e(h,k++),d))+","+Math.round(j(e(f,k),e(h,k++),d))+")":i(h,/-?[\d.]+/,a(j(m(f),m(h),d))))})}},toggle:function(a,b,c,d){var e,f,g=this,h=!1;return b?(g.set(a),function(i){i!==h&&(f=(h=!0===i||!1===i?i:!h)?b:a,c?(e=g.animate(f,e?e.stop():c,d)).then(function(){e=z}):g.set(f))}):g.toggle(i(a,/\b(?=\w)/g,"-"),i(a,/\b(?=\w)/g,"+"))},values:function(b){var c=b||{};return this.each(function(b){var e=b.name||b.id,f=a(b.value);if(/form/i.test(b.tagName))for(e=0;e<b.elements.length;e++)s(b.elements[e]).values(c);else!e||/ox|io/i.test(b.type)&&!b.checked||(c[e]=c[e]==z?f:h(j,[c[e],f],d))}),c},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(c,e,f,g,l){return k(e)?this.on(z,c,e,f,g):b(g)?this.on(c,e,f,z,g):this.each(function(b,k){j(c?t(c,b):b,function(b){j(a(e).split(/\s/),function(a){function c(a,c,d){var e,h=!l;if(d=l?d:b,l)for(e=u(l,b);d&&d!=b&&!(h=e(d));)d=d.parentNode;return!h||m!=a||f.apply(s(d),g||[c,k])&&"?"==n||"|"==n}function e(a){c(m,a,a.target)||(a.preventDefault(),a.stopPropagation())}var m=i(a,/[?|]/g),n=i(a,/[^?|]/g),o=("blur"==m||"focus"==m)&&!!l,p=D++;b.addEventListener(m,e,o),b.M||(b.M={}),b.M[p]=c,f.M=h(j,[f.M,function(){b.removeEventListener(m,e,o),delete b.M[p]}],d)})})})},onOver:function(a,b){var c=this,d=[];return k(b)?this.on(a,"|mouseover |mouseout",function(a,e){var f=a.relatedTarget||a.toElement,g="mouseout"!=a.type;d[e]===g||!g&&f&&(f==c[e]||s(f).up(c[e]).length)||(d[e]=g,b.call(this,g,a))}):this.onOver(z,a)},onFocus:function(a,b,c){return k(b)?this.on(a,"|blur",b,[!1],c).on(a,"|focus",b,[!0],c):this.onFocus(z,a,b)},onChange:function(a,b,c){return k(b)?this.on(a,"|input |change |click",function(a,c){var d=this[0],e=/ox|io/i.test(d.type)?d.checked:d.value;d.NiaP!=e&&b.call(this,d.NiaP=e,c)},c):this.onChange(z,a,b)},onClick:function(a,b,c,d){return k(b)?this.on(a,"click",b,c,d):this.onClick(z,a,b,c)},trigger:function(a,b){return this.each(function(c){for(var d=!0,e=c;e&&d;)f(e.M,function(e,f){d=d&&f(a,b,c)}),e=e.parentNode})}},function(a,b){x.prototype[a]=b}),f({request:function(b,c,d,e){e=e||{};var g,i=0,k=w(),l=d&&d.constructor==e.constructor;try{k.xhr=g=new XMLHttpRequest,k.stop=function(){g.abort()},l&&(d=h(f,d,function(a,b){return h(j,b,function(b){return encodeURIComponent(a)+(b!=z?"="+encodeURIComponent(b):"")})}).join("&")),d==z||/post/i.test(b)||(c+="?"+d,d=z),g.open(b,c,!0,e.user,e.pass),l&&/post/i.test(b)&&g.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),f(e.headers,function(a,b){g.setRequestHeader(a,b)}),f(e.xhr,function(a,b){g[a]=b}),g.onreadystatechange=function(){4!=g.readyState||i++||(200<=g.status&&300>g.status?k.fire(!0,[g.responseText,g]):k.fire(!1,[g.status,g.responseText,g]))},g.send(d)}catch(m){i||k.fire(!1,[0,z,a(m)])}return k},toJSON:JSON.stringify,parseJSON:JSON.parse,ready:q,loop:function(a){function b(a){f(F,function(b,c){c(a)}),G&&h(b)}function c(){return F[g]&&(delete F[g],G--),e}var d,e=0,g=D++,h=A.requestAnimationFrame||function(a){setTimeout(function(){a(+new Date)},33)};return F[g]=function(b){d=d||b,a(e=b-d,c)},G++||h(b),c},off:function(a){e(a.M),a.M=z}},function(a,b){s[a]=b}),document.addEventListener("DOMContentLoaded",function(){e(E),E=z},!1),{$:s,$$:function(a,b,c){return t(a,b,c)[0]},EE:function(a,b,c){return a=s(document.createElement(a)),l(b)||!/^ob/.test(typeof b)?a.add(b):a.set(b).add(c)},M:x,getter:C,setter:B}});

// isMobile
!function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/IEMobile/i,h=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,i=/BlackBerry/i,j=/BB10/i,k=/Opera Mini/i,l=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,m=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),n=function(a,b){return a.test(b)},o=function(a){var o=a||navigator.userAgent,p=o.split("[FBAN");return"undefined"!=typeof p[1]&&(o=p[0]),this.apple={phone:n(b,o),ipod:n(c,o),tablet:!n(b,o)&&n(d,o),device:n(b,o)||n(c,o)||n(d,o)},this.android={phone:n(e,o),tablet:!n(e,o)&&n(f,o),device:n(e,o)||n(f,o)},this.windows={phone:n(g,o),tablet:n(h,o),device:n(g,o)||n(h,o)},this.other={blackberry:n(i,o),blackberry10:n(j,o),opera:n(k,o),firefox:n(l,o),device:n(i,o)||n(j,o)||n(k,o)||n(l,o)},this.seven_inch=n(m,o),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},p=function(){var a=new o;return a.Class=o,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=o:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=p():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=p()):a.isMobile=p()}(this);

var MINI = require('minified'); 
var $ = MINI.$, $$ = MINI.$$, EE = MINI.EE;

siteWidth = 1200;
siteHeight = 3964;
mobileBreakpoint = 480;

proportion = 1; 
minProportion = 0.6;
maxProportion = 1;

reFrame = function() {
  
  var browserWidth = document.documentElement.clientWidth;

  
  $('.mobile-hide').each(function(item, index) {
    if (isMobile.phone) { $(item).set('+' + 'hide'); }
    else $(item).set('-hide');
  });
  
  $('.mobile-only').each(function(item, index) {
    if (isMobile.phone) { $(item).set('-hide'); }
    else $(item).set('+hide');
  });
  
  

  
  proportion = (document.documentElement.clientWidth / siteWidth ).toFixed(2);


  if (proportion < minProportion) { proportion = minProportion; } // limit to max proportion
  if (proportion > maxProportion) { proportion = maxProportion; } // limit to max proportion
  

   
    var newTopPos = ( document.documentElement.clientHeight / 2 ) * (1 - proportion);
  
    var newLeftPos = Math.floor(((siteWidth * proportion) - siteWidth ) / 2);
    
    if($('#wrapper').is('.scaling') && (browserWidth > mobileBreakpoint)) {
      $('body').set({'$transform': 'scale(' + proportion + ')'});
      if (proportion < 1 ) {
        $('body').set({'$position': 'relative'}).set({'$margin': '0px ' + newLeftPos + "px"});
        $('body').set({'$top':  '-' + newTopPos + "px"});
    
      } else {
        $('body').set({'$margin': '0', '$top': '0'});
      }      
      
    }
  
};


var handleMobileSite = function() {
    
    
    var MOBILE_SITE = 'mobile/', // site to redirect to
        NO_REDIRECT = 'noredirect'; // cookie to prevent redirect
    
    // I only want to redirect iPhones, Android phones and a handful of 7" devices
    if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {

        // Only redirect if the user didn't previously choose
        // to explicitly view the full site. This is validated
        // by checking if a "noredirect" cookie exists
        if ( document.cookie.indexOf(NO_REDIRECT) === -1 ) {
            document.location = MOBILE_SITE;
        }
    }
    
    
}

var handleResponsive = function() {
    
  var browserWidth = document.documentElement.clientWidth;
  
  $('[data-mobile-width]').each(function(item, index) {
    var w =  $(item).get('@data-mobile-width');
    if (browserWidth < mobileBreakpoint)  $(item).set({'$width': w});
    else $(item).set({'$width': $(item).get('@data-width')});        
  });
  

  $('[data-mobile-scale]').each(function(item, index) {
    var scale =  $(item).get('@data-mobile-scale');
    if (browserWidth < mobileBreakpoint)  $(item).set({'$transform': 'scale(' + scale + ')'});
    else $(item).set({'$transform': ''});        
  });
  
  $('[data-mobile-float]').each(function(item, index) {
    var flt = $(item).get('@data-mobile-float');    
    if (browserWidth < mobileBreakpoint) { $(item).set('+' + flt); }
    else $(item).set('-' + flt);
  });
  

}

$(function() {
  
  reFrame();
  
  if ( $("#wrapper").is('.has-mobile-alt')) { handleMobileSite(); }
  if ( $("#wrapper").is('.responsive')) { handleResponsive(); }
  
});


$(window).on('resize',function() {
  reFrame();
});
