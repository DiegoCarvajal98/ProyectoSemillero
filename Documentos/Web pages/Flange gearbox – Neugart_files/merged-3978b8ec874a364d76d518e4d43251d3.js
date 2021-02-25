
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csscalc-flexbox-objectfit-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,o,i,a;for(var f in C)if(C.hasOwnProperty(f)){if(e=[],n=C[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),g.push((s?"":"no-")+a.join("-"))}}function o(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?_.className.baseVal=n:_.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){return!!~(""+e).indexOf(n)}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var s;for(var o in e)if(e[o]in n)return t===!1?e[o]:(s=n[e[o]],r(s,"function")?l(s,t||n):s);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(){var e=n.body;return e||(e=i(w?"svg":"body"),e.fake=!0),e}function d(e,t,r,s){var o,a,f,l,u="modernizr",c=i("div"),d=p();if(parseInt(r,10))for(;r--;)f=i("div"),f.id=s?s[r]:u+(r+1),c.appendChild(f);return o=i("style"),o.type="text/css",o.id="s"+u,(d.fake?d:c).appendChild(o),d.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),c.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",l=_.style.overflow,_.style.overflow="hidden",_.appendChild(d)),a=t(c,e),d.fake?(d.parentNode.removeChild(d),_.style.overflow=l,_.offsetHeight):c.parentNode.removeChild(c),!!a}function m(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+c(n[s])+":"+r+")");return o=o.join(" or "),d("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,s,o){function l(){c&&(delete z.style,delete z.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var u=m(e,s);if(!r(u,"undefined"))return u}for(var c,p,d,v,h,y=["modernizr","tspan","samp"];!z.style&&y.length;)c=!0,z.modElem=i(y.shift()),z.style=z.modElem.style;for(d=e.length,p=0;d>p;p++)if(v=e[p],h=z.style[v],f(v,"-")&&(v=a(v)),z.style[v]!==t){if(o||r(s,"undefined"))return l(),"pfx"==n?v:!0;try{z.style[v]=s}catch(g){}if(z.style[v]!=h)return l(),"pfx"==n?v:!0}return l(),!1}function h(e,n,t,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+j.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,s,o):(a=(e+" "+P.join(i+" ")+i).split(" "),u(a,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var g=[],C=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var _=n.documentElement,w="svg"===_.nodeName.toLowerCase(),S=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=S,Modernizr.addTest("csscalc",function(){var e="width:",n="calc(10px);",t=i("a");return t.style.cssText=e+S.join(n+e),!!t.style.length});var b="Moz O ms Webkit",j=x._config.usePrefixes?b.split(" "):[];x._cssomPrefixes=j;var E=function(n){var r,s=S.length,o=e.CSSRule;if("undefined"==typeof o)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+n;for(var i=0;s>i;i++){var a=S[i],f=a.toUpperCase()+"_"+r;if(f in o)return"@-"+a.toLowerCase()+"-"+n}return!1};x.atRule=E;var P=x._config.usePrefixes?b.toLowerCase().split(" "):[];x._domPrefixes=P;var T={elem:i("modernizr")};Modernizr._q.push(function(){delete T.elem});var z={style:T.elem.style};Modernizr._q.unshift(function(){delete z.style}),x.testAllProps=h,x.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0));var N=x.prefixed=function(e,n,t){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=a(e)),n?h(e,n,t):h(e,"pfx"))};Modernizr.addTest("objectfit",!!N("objectFit"),{aliases:["object-fit"]}),s(),o(g),delete x.addTest,delete x.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
  "use strict";

  var H = $("html"),
    W = $(window),
    D = $(document),
    F = $.fancybox = function () {
      F.open.apply( this, arguments );
    },
    IE =  navigator.userAgent.match(/msie/i),
    didUpdate  = null,
    isTouch    = document.createTouch !== undefined,

    isQuery  = function(obj) {
      return obj && obj.hasOwnProperty && obj instanceof $;
    },
    isString = function(str) {
      return str && $.type(str) === "string";
    },
    isPercentage = function(str) {
      return isString(str) && str.indexOf('%') > 0;
    },
    isScrollable = function(el) {
      return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
    },
    getScalar = function(orig, dim) {
      var value = parseInt(orig, 10) || 0;

      if (dim && isPercentage(orig)) {
        value = F.getViewport()[ dim ] / 100 * value;
      }

      return Math.ceil(value);
    },
    getValue = function(value, dim) {
      return getScalar(value, dim) + 'px';
    };

  $.extend(F, {
    // The current version of fancyBox
    version: '2.1.5',

    defaults: {
      padding : 15,
      margin  : 20,

      width     : 800,
      height    : 600,
      minWidth  : 100,
      minHeight : 100,
      maxWidth  : 9999,
      maxHeight : 9999,
      pixelRatio: 1, // Set to 2 for retina display support

      autoSize   : true,
      autoHeight : false,
      autoWidth  : false,

      autoResize  : true,
      autoCenter  : !isTouch,
      fitToView   : true,
      aspectRatio : false,
      topRatio    : 0.5,
      leftRatio   : 0.5,

      scrolling : 'auto', // 'auto', 'yes' or 'no'
      wrapCSS   : '',

      arrows     : true,
      closeBtn   : true,
      closeClick : false,
      nextClick  : false,
      mouseWheel : true,
      autoPlay   : false,
      playSpeed  : 3000,
      preload    : 3,
      modal      : false,
      loop       : true,

      ajax  : {
        dataType : 'html',
        headers  : { 'X-fancyBox': true }
      },
      iframe : {
        scrolling : 'auto',
        preload   : true
      },
      swf : {
        wmode: 'transparent',
        allowfullscreen   : 'true',
        allowscriptaccess : 'always'
      },

      keys  : {
        next : {
          13 : 'left', // enter
          34 : 'up',   // page down
          39 : 'left', // right arrow
          40 : 'up'    // down arrow
        },
        prev : {
          8  : 'right',  // backspace
          33 : 'down',   // page up
          37 : 'right',  // left arrow
          38 : 'down'    // up arrow
        },
        close  : [27], // escape key
        play   : [32], // space - start/stop slideshow
        toggle : [70]  // letter "f" - toggle fullscreen
      },

      direction : {
        next : 'left',
        prev : 'right'
      },

      scrollOutside  : true,

      // Override some properties
      index   : 0,
      type    : null,
      href    : null,
      content : null,
      title   : null,

      // HTML templates
      tpl: {
        wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image    : '<img class="fancybox-image" src="{href}" alt="" />',
        iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
        error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
        next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
        prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
      },

      // Properties for each animation type
      // Opening fancyBox
      openEffect  : 'fade', // 'elastic', 'fade' or 'none'
      openSpeed   : 250,
      openEasing  : 'swing',
      openOpacity : true,
      openMethod  : 'zoomIn',

      // Closing fancyBox
      closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
      closeSpeed   : 250,
      closeEasing  : 'swing',
      closeOpacity : true,
      closeMethod  : 'zoomOut',

      // Changing next gallery item
      nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
      nextSpeed  : 250,
      nextEasing : 'swing',
      nextMethod : 'changeIn',

      // Changing previous gallery item
      prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
      prevSpeed  : 250,
      prevEasing : 'swing',
      prevMethod : 'changeOut',

      // Enable default helpers
      helpers : {
        overlay : true,
        title   : true
      },

      // Callbacks
      onCancel     : $.noop, // If canceling
      beforeLoad   : $.noop, // Before loading
      afterLoad    : $.noop, // After loading
      beforeShow   : $.noop, // Before changing in current item
      afterShow    : $.noop, // After opening
      beforeChange : $.noop, // Before changing gallery item
      beforeClose  : $.noop, // Before closing
      afterClose   : $.noop  // After closing
    },

    //Current state
    group    : {}, // Selected group
    opts     : {}, // Group options
    previous : null,  // Previous element
    coming   : null,  // Element being loaded
    current  : null,  // Currently loaded element
    isActive : false, // Is activated
    isOpen   : false, // Is currently open
    isOpened : false, // Have been fully opened at least once

    wrap  : null,
    skin  : null,
    outer : null,
    inner : null,

    player : {
      timer    : null,
      isActive : false
    },

    // Loaders
    ajaxLoad   : null,
    imgPreload : null,

    // Some collections
    transitions : {},
    helpers     : {},

    /*
     *  Static methods
     */

    open: function (group, opts) {
      if (!group) {
        return;
      }

      if (!$.isPlainObject(opts)) {
        opts = {};
      }

      // Close if already active
      if (false === F.close(true)) {
        return;
      }

      // Normalize group
      if (!$.isArray(group)) {
        group = isQuery(group) ? $(group).get() : [group];
      }

      // Recheck if the type of each element is `object` and set content type (image, ajax, etc)
      $.each(group, function(i, element) {
        var obj = {},
          href,
          title,
          content,
          type,
          rez,
          hrefParts,
          selector;

        if ($.type(element) === "object") {
          // Check if is DOM element
          if (element.nodeType) {
            element = $(element);
          }

          if (isQuery(element)) {
            obj = {
              href    : element.data('fancybox-href') || element.attr('href'),
              title   : element.data('fancybox-title') || element.attr('title'),
              isDom   : true,
              element : element
            };

            if ($.metadata) {
              $.extend(true, obj, element.metadata());
            }

          } else {
            obj = element;
          }
        }

        href  = opts.href  || obj.href || (isString(element) ? element : null);
        title = opts.title !== undefined ? opts.title : obj.title || '';

        content = opts.content || obj.content;
        type    = content ? 'html' : (opts.type  || obj.type);

        if (!type && obj.isDom) {
          type = element.data('fancybox-type');

          if (!type) {
            rez  = element.prop('class').match(/fancybox\.(\w+)/);
            type = rez ? rez[1] : null;
          }
        }

        if (isString(href)) {
          // Try to guess the content type
          if (!type) {
            if (F.isImage(href)) {
              type = 'image';

            } else if (F.isSWF(href)) {
              type = 'swf';

            } else if (href.charAt(0) === '#') {
              type = 'inline';

            } else if (isString(element)) {
              type    = 'html';
              content = element;
            }
          }

          // Split url into two pieces with source url and content selector, e.g,
          // "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
          if (type === 'ajax') {
            hrefParts = href.split(/\s+/, 2);
            href      = hrefParts.shift();
            selector  = hrefParts.shift();
          }
        }

        if (!content) {
          if (type === 'inline') {
            if (href) {
              content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

            } else if (obj.isDom) {
              content = element;
            }

          } else if (type === 'html') {
            content = href;

          } else if (!type && !href && obj.isDom) {
            type    = 'inline';
            content = element;
          }
        }

        $.extend(obj, {
          href     : href,
          type     : type,
          content  : content,
          title    : title,
          selector : selector
        });

        group[ i ] = obj;
      });

      // Extend the defaults
      F.opts = $.extend(true, {}, F.defaults, opts);

      // All options are merged recursive except keys
      if (opts.keys !== undefined) {
        F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
      }

      F.group = group;

      return F._start(F.opts.index);
    },

    // Cancel image loading or abort ajax request
    cancel: function () {
      var coming = F.coming;

      if (!coming || false === F.trigger('onCancel')) {
        return;
      }

      F.hideLoading();

      if (F.ajaxLoad) {
        F.ajaxLoad.abort();
      }

      F.ajaxLoad = null;

      if (F.imgPreload) {
        F.imgPreload.onload = F.imgPreload.onerror = null;
      }

      if (coming.wrap) {
        coming.wrap.stop(true, true).trigger('onReset').remove();
      }

      F.coming = null;

      // If the first item has been canceled, then clear everything
      if (!F.current) {
        F._afterZoomOut( coming );
      }
    },

    // Start closing animation if is open; remove immediately if opening/closing
    close: function (event) {
      F.cancel();

      if (false === F.trigger('beforeClose')) {
        return;
      }

      F.unbindEvents();

      if (!F.isActive) {
        return;
      }

      if (!F.isOpen || event === true) {
        $('.fancybox-wrap').stop(true).trigger('onReset').remove();

        F._afterZoomOut();

      } else {
        F.isOpen = F.isOpened = false;
        F.isClosing = true;

        $('.fancybox-item, .fancybox-nav').remove();

        F.wrap.stop(true, true).removeClass('fancybox-opened');

        F.transitions[ F.current.closeMethod ]();
      }
    },

    // Manage slideshow:
    //   $.fancybox.play(); - toggle slideshow
    //   $.fancybox.play( true ); - start
    //   $.fancybox.play( false ); - stop
    play: function ( action ) {
      var clear = function () {
          clearTimeout(F.player.timer);
        },
        set = function () {
          clear();

          if (F.current && F.player.isActive) {
            F.player.timer = setTimeout(F.next, F.current.playSpeed);
          }
        },
        stop = function () {
          clear();

          D.unbind('.player');

          F.player.isActive = false;

          F.trigger('onPlayEnd');
        },
        start = function () {
          if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
            F.player.isActive = true;

            D.bind({
              'onCancel.player beforeClose.player' : stop,
              'onUpdate.player'   : set,
              'beforeLoad.player' : clear
            });

            set();

            F.trigger('onPlayStart');
          }
        };

      if (action === true || (!F.player.isActive && action !== false)) {
        start();
      } else {
        stop();
      }
    },

    // Navigate to next gallery item
    next: function ( direction ) {
      var current = F.current;

      if (current) {
        if (!isString(direction)) {
          direction = current.direction.next;
        }

        F.jumpto(current.index + 1, direction, 'next');
      }
    },

    // Navigate to previous gallery item
    prev: function ( direction ) {
      var current = F.current;

      if (current) {
        if (!isString(direction)) {
          direction = current.direction.prev;
        }

        F.jumpto(current.index - 1, direction, 'prev');
      }
    },

    // Navigate to gallery item by index
    jumpto: function ( index, direction, router ) {
      var current = F.current;

      if (!current) {
        return;
      }

      index = getScalar(index);

      F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
      F.router    = router || 'jumpto';

      if (current.loop) {
        if (index < 0) {
          index = current.group.length + (index % current.group.length);
        }

        index = index % current.group.length;
      }

      if (current.group[ index ] !== undefined) {
        F.cancel();

        F._start(index);
      }
    },

    // Center inside viewport and toggle position type to fixed or absolute if needed
    reposition: function (e, onlyAbsolute) {
      var current = F.current,
        wrap    = current ? current.wrap : null,
        pos;

      if (wrap) {
        pos = F._getPosition(onlyAbsolute);

        if (e && e.type === 'scroll') {
          delete pos.position;

          wrap.stop(true, true).animate(pos, 200);

        } else {
          wrap.css(pos);

          current.pos = $.extend({}, current.dim, pos);
        }
      }
    },

    update: function (e) {
      var type = (e && e.type),
        anyway = !type || type === 'orientationchange';

      if (anyway) {
        clearTimeout(didUpdate);

        didUpdate = null;
      }

      if (!F.isOpen || didUpdate) {
        return;
      }

      didUpdate = setTimeout(function() {
        var current = F.current;

        if (!current || F.isClosing) {
          return;
        }

        F.wrap.removeClass('fancybox-tmp');

        if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
          F._setDimension();
        }

        if (!(type === 'scroll' && current.canShrink)) {
          F.reposition(e);
        }

        F.trigger('onUpdate');

        didUpdate = null;

      }, (anyway && !isTouch ? 0 : 300));
    },

    // Shrink content to fit inside viewport or restore if resized
    toggle: function ( action ) {
      if (F.isOpen) {
        F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

        // Help browser to restore document dimensions
        if (isTouch) {
          F.wrap.removeAttr('style').addClass('fancybox-tmp');

          F.trigger('onUpdate');
        }

        F.update();
      }
    },

    hideLoading: function () {
      D.unbind('.loading');

      $('#fancybox-loading').remove();
    },

    showLoading: function () {
      var el, viewport;

      F.hideLoading();

      el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

      // If user will press the escape-button, the request will be canceled
      D.bind('keydown.loading', function(e) {
        if ((e.which || e.keyCode) === 27) {
          e.preventDefault();

          F.cancel();
        }
      });

      if (!F.defaults.fixed) {
        viewport = F.getViewport();

        el.css({
          position : 'absolute',
          top  : (viewport.h * 0.5) + viewport.y,
          left : (viewport.w * 0.5) + viewport.x
        });
      }
    },

    getViewport: function () {
      var locked = (F.current && F.current.locked) || false,
        rez    = {
          x: W.scrollLeft(),
          y: W.scrollTop()
        };

      if (locked) {
        rez.w = locked[0].clientWidth;
        rez.h = locked[0].clientHeight;

      } else {
        // See http://bugs.jquery.com/ticket/6724
        rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
        rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
      }

      return rez;
    },

    // Unbind the keyboard / clicking actions
    unbindEvents: function () {
      if (F.wrap && isQuery(F.wrap)) {
        F.wrap.unbind('.fb');
      }

      D.unbind('.fb');
      W.unbind('.fb');
    },

    bindEvents: function () {
      var current = F.current,
        keys;

      if (!current) {
        return;
      }

      // Changing document height on iOS devices triggers a 'resize' event,
      // that can change document height... repeating infinitely
      W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

      keys = current.keys;

      if (keys) {
        D.bind('keydown.fb', function (e) {
          var code   = e.which || e.keyCode,
            target = e.target || e.srcElement;

          // Skip esc key if loading, because showLoading will cancel preloading
          if (code === 27 && F.coming) {
            return false;
          }

          // Ignore key combinations and key events within form elements
          if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
            $.each(keys, function(i, val) {
              if (current.group.length > 1 && val[ code ] !== undefined) {
                F[ i ]( val[ code ] );

                e.preventDefault();
                return false;
              }

              if ($.inArray(code, val) > -1) {
                F[ i ] ();

                e.preventDefault();
                return false;
              }
            });
          }
        });
      }

      if ($.fn.mousewheel && current.mouseWheel) {
        F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
          var target = e.target || null,
            parent = $(target),
            canScroll = false;

          while (parent.length) {
            if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
              break;
            }

            canScroll = isScrollable( parent[0] );
            parent    = $(parent).parent();
          }

          if (delta !== 0 && !canScroll) {
            if (F.group.length > 1 && !current.canShrink) {
              if (deltaY > 0 || deltaX > 0) {
                F.prev( deltaY > 0 ? 'down' : 'left' );

              } else if (deltaY < 0 || deltaX < 0) {
                F.next( deltaY < 0 ? 'up' : 'right' );
              }

              e.preventDefault();
            }
          }
        });
      }
    },

    trigger: function (event, o) {
      var ret, obj = o || F.coming || F.current;

      if (!obj) {
        return;
      }

      if ($.isFunction( obj[event] )) {
        ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
      }

      if (ret === false) {
        return false;
      }

      if (obj.helpers) {
        $.each(obj.helpers, function (helper, opts) {
          if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
            F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
          }
        });
      }

      D.trigger(event);
    },

    isImage: function (str) {
      return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
    },

    isSWF: function (str) {
      return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
    },

    _start: function (index) {
      var coming = {},
        obj,
        href,
        type,
        margin,
        padding;

      index = getScalar( index );
      obj   = F.group[ index ] || null;

      if (!obj) {
        return false;
      }

      coming = $.extend(true, {}, F.opts, obj);

      // Convert margin and padding properties to array - top, right, bottom, left
      margin  = coming.margin;
      padding = coming.padding;

      if ($.type(margin) === 'number') {
        coming.margin = [margin, margin, margin, margin];
      }

      if ($.type(padding) === 'number') {
        coming.padding = [padding, padding, padding, padding];
      }

      // 'modal' propery is just a shortcut
      if (coming.modal) {
        $.extend(true, coming, {
          closeBtn   : false,
          closeClick : false,
          nextClick  : false,
          arrows     : false,
          mouseWheel : false,
          keys       : null,
          helpers: {
            overlay : {
              closeClick : false
            }
          }
        });
      }

      // 'autoSize' property is a shortcut, too
      if (coming.autoSize) {
        coming.autoWidth = coming.autoHeight = true;
      }

      if (coming.width === 'auto') {
        coming.autoWidth = true;
      }

      if (coming.height === 'auto') {
        coming.autoHeight = true;
      }

      /*
       * Add reference to the group, so it`s possible to access from callbacks, example:
       * afterLoad : function() {
       *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
       * }
       */

      coming.group  = F.group;
      coming.index  = index;

      // Give a chance for callback or helpers to update coming item (type, title, etc)
      F.coming = coming;

      if (false === F.trigger('beforeLoad')) {
        F.coming = null;

        return;
      }

      type = coming.type;
      href = coming.href;

      if (!type) {
        F.coming = null;

        //If we can not determine content type then drop silently or display next/prev item if looping through gallery
        if (F.current && F.router && F.router !== 'jumpto') {
          F.current.index = index;

          return F[ F.router ]( F.direction );
        }

        return false;
      }

      F.isActive = true;

      if (type === 'image' || type === 'swf') {
        coming.autoHeight = coming.autoWidth = false;
        coming.scrolling  = 'visible';
      }

      if (type === 'image') {
        coming.aspectRatio = true;
      }

      if (type === 'iframe' && isTouch) {
        coming.scrolling = 'scroll';
      }

      // Build the neccessary markup
      coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

      $.extend(coming, {
        skin  : $('.fancybox-skin',  coming.wrap),
        outer : $('.fancybox-outer', coming.wrap),
        inner : $('.fancybox-inner', coming.wrap)
      });

      $.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
        coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
      });

      F.trigger('onReady');

      // Check before try to load; 'inline' and 'html' types need content, others - href
      if (type === 'inline' || type === 'html') {
        if (!coming.content || !coming.content.length) {
          return F._error( 'content' );
        }

      } else if (!href) {
        return F._error( 'href' );
      }

      if (type === 'image') {
        F._loadImage();

      } else if (type === 'ajax') {
        F._loadAjax();

      } else if (type === 'iframe') {
        F._loadIframe();

      } else {
        F._afterLoad();
      }
    },

    _error: function ( type ) {
      $.extend(F.coming, {
        type       : 'html',
        autoWidth  : true,
        autoHeight : true,
        minWidth   : 0,
        minHeight  : 0,
        scrolling  : 'no',
        hasError   : type,
        content    : F.coming.tpl.error
      });

      F._afterLoad();
    },

    _loadImage: function () {
      // Reset preload image so it is later possible to check "complete" property
      var img = F.imgPreload = new Image();

      img.onload = function () {
        this.onload = this.onerror = null;

        F.coming.width  = this.width / F.opts.pixelRatio;
        F.coming.height = this.height / F.opts.pixelRatio;

        F._afterLoad();
      };

      img.onerror = function () {
        this.onload = this.onerror = null;

        F._error( 'image' );
      };

      img.src = F.coming.href;

      if (img.complete !== true) {
        F.showLoading();
      }
    },

    _loadAjax: function () {
      var coming = F.coming;

      F.showLoading();

      F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
        url: coming.href,
        error: function (jqXHR, textStatus) {
          if (F.coming && textStatus !== 'abort') {
            F._error( 'ajax', jqXHR );

          } else {
            F.hideLoading();
          }
        },
        success: function (data, textStatus) {
          if (textStatus === 'success') {
            coming.content = data;

            F._afterLoad();
          }
        }
      }));
    },

    _loadIframe: function() {
      var coming = F.coming,
        iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
          .attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
          .attr('src', coming.href);

      // This helps IE
      $(coming.wrap).bind('onReset', function () {
        try {
          $(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
        } catch (e) {}
      });

      if (coming.iframe.preload) {
        F.showLoading();

        iframe.one('load', function() {
          $(this).data('ready', 1);

          // iOS will lose scrolling if we resize
          if (!isTouch) {
            $(this).bind('load.fb', F.update);
          }

          // Without this trick:
          //   - iframe won't scroll on iOS devices
          //   - IE7 sometimes displays empty iframe
          $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

          F._afterLoad();
        });
      }

      coming.content = iframe.appendTo( coming.inner );

      if (!coming.iframe.preload) {
        F._afterLoad();
      }
    },

    _preloadImages: function() {
      var group   = F.group,
        current = F.current,
        len     = group.length,
        cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
        item,
        i;

      for (i = 1; i <= cnt; i += 1) {
        item = group[ (current.index + i ) % len ];

        if (item.type === 'image' && item.href) {
          new Image().src = item.href;
        }
      }
    },

    _afterLoad: function () {
      var coming   = F.coming,
        previous = F.current,
        placeholder = 'fancybox-placeholder',
        current,
        content,
        type,
        scrolling,
        href,
        embed;

      F.hideLoading();

      if (!coming || F.isActive === false) {
        return;
      }

      if (false === F.trigger('afterLoad', coming, previous)) {
        coming.wrap.stop(true).trigger('onReset').remove();

        F.coming = null;

        return;
      }

      if (previous) {
        F.trigger('beforeChange', previous);

        previous.wrap.stop(true).removeClass('fancybox-opened')
          .find('.fancybox-item, .fancybox-nav')
          .remove();
      }

      F.unbindEvents();

      current   = coming;
      content   = coming.content;
      type      = coming.type;
      scrolling = coming.scrolling;

      $.extend(F, {
        wrap  : current.wrap,
        skin  : current.skin,
        outer : current.outer,
        inner : current.inner,
        current  : current,
        previous : previous
      });

      href = current.href;

      switch (type) {
        case 'inline':
        case 'ajax':
        case 'html':
          if (current.selector) {
            content = $('<div>').html(content).find(current.selector);

          } else if (isQuery(content)) {
            if (!content.data(placeholder)) {
              content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
            }

            content = content.show().detach();

            current.wrap.bind('onReset', function () {
              if ($(this).find(content).length) {
                content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
              }
            });
          }
        break;

        case 'image':
          content = current.tpl.image.replace('{href}', href);
        break;

        case 'swf':
          content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
          embed   = '';

          $.each(current.swf, function(name, val) {
            content += '<param name="' + name + '" value="' + val + '"></param>';
            embed   += ' ' + name + '="' + val + '"';
          });

          content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
        break;
      }

      if (!(isQuery(content) && content.parent().is(current.inner))) {
        current.inner.append( content );
      }

      // Give a chance for helpers or callbacks to update elements
      F.trigger('beforeShow');

      // Set scrolling before calculating dimensions
      current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

      // Set initial dimensions and start position
      F._setDimension();

      F.reposition();

      F.isOpen = false;
      F.coming = null;

      F.bindEvents();

      if (!F.isOpened) {
        $('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

      } else if (previous.prevMethod) {
        F.transitions[ previous.prevMethod ]();
      }

      F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

      F._preloadImages();
    },

    _setDimension: function () {
      var viewport   = F.getViewport(),
        steps      = 0,
        canShrink  = false,
        canExpand  = false,
        wrap       = F.wrap,
        skin       = F.skin,
        inner      = F.inner,
        current    = F.current,
        width      = current.width,
        height     = current.height,
        minWidth   = current.minWidth,
        minHeight  = current.minHeight,
        maxWidth   = current.maxWidth,
        maxHeight  = current.maxHeight,
        scrolling  = current.scrolling,
        scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
        margin     = current.margin,
        wMargin    = getScalar(margin[1] + margin[3]),
        hMargin    = getScalar(margin[0] + margin[2]),
        wPadding,
        hPadding,
        wSpace,
        hSpace,
        origWidth,
        origHeight,
        origMaxWidth,
        origMaxHeight,
        ratio,
        width_,
        height_,
        maxWidth_,
        maxHeight_,
        iframe,
        body;

      // Reset dimensions so we could re-check actual size
      wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

      wPadding = getScalar(skin.outerWidth(true)  - skin.width());
      hPadding = getScalar(skin.outerHeight(true) - skin.height());

      // Any space between content and viewport (margin, padding, border, title)
      wSpace = wMargin + wPadding;
      hSpace = hMargin + hPadding;

      origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
      origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

      if (current.type === 'iframe') {
        iframe = current.content;

        if (current.autoHeight && iframe.data('ready') === 1) {
          try {
            if (iframe[0].contentWindow.document.location) {
              inner.width( origWidth ).height(9999);

              body = iframe.contents().find('body');

              if (scrollOut) {
                body.css('overflow-x', 'hidden');
              }

              origHeight = body.outerHeight(true);
            }

          } catch (e) {}
        }

      } else if (current.autoWidth || current.autoHeight) {
        inner.addClass( 'fancybox-tmp' );

        // Set width or height in case we need to calculate only one dimension
        if (!current.autoWidth) {
          inner.width( origWidth );
        }

        if (!current.autoHeight) {
          inner.height( origHeight );
        }

        if (current.autoWidth) {
          origWidth = inner.width();
        }

        if (current.autoHeight) {
          origHeight = inner.height();
        }

        inner.removeClass( 'fancybox-tmp' );
      }

      width  = getScalar( origWidth );
      height = getScalar( origHeight );

      ratio  = origWidth / origHeight;

      // Calculations for the content
      minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
      maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

      minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
      maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

      // These will be used to determine if wrap can fit in the viewport
      origMaxWidth  = maxWidth;
      origMaxHeight = maxHeight;

      if (current.fitToView) {
        maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
        maxHeight = Math.min(viewport.h - hSpace, maxHeight);
      }

      maxWidth_  = viewport.w - wMargin;
      maxHeight_ = viewport.h - hMargin;

      if (current.aspectRatio) {
        if (width > maxWidth) {
          width  = maxWidth;
          height = getScalar(width / ratio);
        }

        if (height > maxHeight) {
          height = maxHeight;
          width  = getScalar(height * ratio);
        }

        if (width < minWidth) {
          width  = minWidth;
          height = getScalar(width / ratio);
        }

        if (height < minHeight) {
          height = minHeight;
          width  = getScalar(height * ratio);
        }

      } else {
        width = Math.max(minWidth, Math.min(width, maxWidth));

        if (current.autoHeight && current.type !== 'iframe') {
          inner.width( width );

          height = inner.height();
        }

        height = Math.max(minHeight, Math.min(height, maxHeight));
      }

      // Try to fit inside viewport (including the title)
      if (current.fitToView) {
        inner.width( width ).height( height );

        wrap.width( width + wPadding );

        // Real wrap dimensions
        width_  = wrap.width();
        height_ = wrap.height();

        if (current.aspectRatio) {
          while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
            if (steps++ > 19) {
              break;
            }

            height = Math.max(minHeight, Math.min(maxHeight, height - 10));
            width  = getScalar(height * ratio);

            if (width < minWidth) {
              width  = minWidth;
              height = getScalar(width / ratio);
            }

            if (width > maxWidth) {
              width  = maxWidth;
              height = getScalar(width / ratio);
            }

            inner.width( width ).height( height );

            wrap.width( width + wPadding );

            width_  = wrap.width();
            height_ = wrap.height();
          }

        } else {
          width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
          height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
        }
      }

      if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
        width += scrollOut;
      }

      inner.width( width ).height( height );

      wrap.width( width + wPadding );

      width_  = wrap.width();
      height_ = wrap.height();

      canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
      canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

      $.extend(current, {
        dim : {
          width  : getValue( width_ ),
          height  : getValue( height_ )
        },
        origWidth  : origWidth,
        origHeight : origHeight,
        canShrink  : canShrink,
        canExpand  : canExpand,
        wPadding   : wPadding,
        hPadding   : hPadding,
        wrapSpace  : height_ - skin.outerHeight(true),
        skinSpace  : skin.height() - height
      });

      if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
        inner.height('auto');
      }
    },

    _getPosition: function (onlyAbsolute) {
      var current  = F.current,
        viewport = F.getViewport(),
        margin   = current.margin,
        width    = F.wrap.width()  + margin[1] + margin[3],
        height   = F.wrap.height() + margin[0] + margin[2],
        rez      = {
          position: 'absolute',
          top  : margin[0],
          left : margin[3]
        };

      if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
        rez.position = 'fixed';

      } else if (!current.locked) {
        rez.top  += viewport.y;
        rez.left += viewport.x;
      }

      rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
      rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

      return rez;
    },

    _afterZoomIn: function () {
      var current = F.current;

      if (!current) {
        return;
      }

      F.isOpen = F.isOpened = true;

      F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

      F.update();

      // Assign a click event
      if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
        F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
          if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
            e.preventDefault();

            F[ current.closeClick ? 'close' : 'next' ]();
          }
        });
      }

      // Create a close button
      if (current.closeBtn) {
        $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
          e.preventDefault();

          F.close();
        });
      }

      // Create navigation arrows
      if (current.arrows && F.group.length > 1) {
        if (current.loop || current.index > 0) {
          $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
        }

        if (current.loop || current.index < F.group.length - 1) {
          $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
        }
      }

      F.trigger('afterShow');

      // Stop the slideshow if this is the last item
      if (!current.loop && current.index === current.group.length - 1) {
        F.play( false );

      } else if (F.opts.autoPlay && !F.player.isActive) {
        F.opts.autoPlay = false;

        F.play();
      }
    },

    _afterZoomOut: function ( obj ) {
      obj = obj || F.current;

      $('.fancybox-wrap').trigger('onReset').remove();

      $.extend(F, {
        group  : {},
        opts   : {},
        router : false,
        current   : null,
        isActive  : false,
        isOpened  : false,
        isOpen    : false,
        isClosing : false,
        wrap   : null,
        skin   : null,
        outer  : null,
        inner  : null
      });

      F.trigger('afterClose', obj);
    }
  });

  /*
   *  Default transitions
   */

  F.transitions = {
    getOrigPosition: function () {
      var current  = F.current,
        element  = current.element,
        orig     = current.orig,
        pos      = {},
        width    = 50,
        height   = 50,
        hPadding = current.hPadding,
        wPadding = current.wPadding,
        viewport = F.getViewport();

      if (!orig && current.isDom && element.is(':visible')) {
        orig = element.find('img:first');

        if (!orig.length) {
          orig = element;
        }
      }

      if (isQuery(orig)) {
        pos = orig.offset();

        if (orig.is('img')) {
          width  = orig.outerWidth();
          height = orig.outerHeight();
        }

      } else {
        pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
        pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
      }

      if (F.wrap.css('position') === 'fixed' || current.locked) {
        pos.top  -= viewport.y;
        pos.left -= viewport.x;
      }

      pos = {
        top     : getValue(pos.top  - hPadding * current.topRatio),
        left    : getValue(pos.left - wPadding * current.leftRatio),
        width   : getValue(width  + wPadding),
        height  : getValue(height + hPadding)
      };

      return pos;
    },

    step: function (now, fx) {
      var ratio,
        padding,
        value,
        prop       = fx.prop,
        current    = F.current,
        wrapSpace  = current.wrapSpace,
        skinSpace  = current.skinSpace;

      if (prop === 'width' || prop === 'height') {
        ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

        if (F.isClosing) {
          ratio = 1 - ratio;
        }

        padding = prop === 'width' ? current.wPadding : current.hPadding;
        value   = now - padding;

        F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
        F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
      }
    },

    zoomIn: function () {
      var current  = F.current,
        startPos = current.pos,
        effect   = current.openEffect,
        elastic  = effect === 'elastic',
        endPos   = $.extend({opacity : 1}, startPos);

      // Remove "position" property that breaks older IE
      delete endPos.position;

      if (elastic) {
        startPos = this.getOrigPosition();

        if (current.openOpacity) {
          startPos.opacity = 0.1;
        }

      } else if (effect === 'fade') {
        startPos.opacity = 0.1;
      }

      F.wrap.css(startPos).animate(endPos, {
        duration : effect === 'none' ? 0 : current.openSpeed,
        easing   : current.openEasing,
        step     : elastic ? this.step : null,
        complete : F._afterZoomIn
      });
    },

    zoomOut: function () {
      var current  = F.current,
        effect   = current.closeEffect,
        elastic  = effect === 'elastic',
        endPos   = {opacity : 0.1};

      if (elastic) {
        endPos = this.getOrigPosition();

        if (current.closeOpacity) {
          endPos.opacity = 0.1;
        }
      }

      F.wrap.animate(endPos, {
        duration : effect === 'none' ? 0 : current.closeSpeed,
        easing   : current.closeEasing,
        step     : elastic ? this.step : null,
        complete : F._afterZoomOut
      });
    },

    changeIn: function () {
      var current   = F.current,
        effect    = current.nextEffect,
        startPos  = current.pos,
        endPos    = { opacity : 1 },
        direction = F.direction,
        distance  = 200,
        field;

      startPos.opacity = 0.1;

      if (effect === 'elastic') {
        field = direction === 'down' || direction === 'up' ? 'top' : 'left';

        if (direction === 'down' || direction === 'right') {
          startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
          endPos[ field ]   = '+=' + distance + 'px';

        } else {
          startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
          endPos[ field ]   = '-=' + distance + 'px';
        }
      }

      // Workaround for http://bugs.jquery.com/ticket/12273
      if (effect === 'none') {
        F._afterZoomIn();

      } else {
        F.wrap.css(startPos).animate(endPos, {
          duration : current.nextSpeed,
          easing   : current.nextEasing,
          complete : F._afterZoomIn
        });
      }
    },

    changeOut: function () {
      var previous  = F.previous,
        effect    = previous.prevEffect,
        endPos    = { opacity : 0.1 },
        direction = F.direction,
        distance  = 200;

      if (effect === 'elastic') {
        endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
      }

      previous.wrap.animate(endPos, {
        duration : effect === 'none' ? 0 : previous.prevSpeed,
        easing   : previous.prevEasing,
        complete : function () {
          $(this).trigger('onReset').remove();
        }
      });
    }
  };

  /*
   *  Overlay helper
   */

  F.helpers.overlay = {
    defaults : {
      closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
      speedOut   : 200,       // duration of fadeOut animation
      showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
      css        : {},        // custom CSS properties
      locked     : !isTouch,  // if true, the content will be locked into overlay
      fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
    },

    overlay : null,      // current handle
    fixed   : false,     // indicates if the overlay has position "fixed"
    el      : $('html'), // element that contains "the lock"

    // Public methods
    create : function(opts) {
      opts = $.extend({}, this.defaults, opts);

      if (this.overlay) {
        this.close();
      }

      this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( F.coming ? F.coming.parent : opts.parent );
      this.fixed   = false;

      if (opts.fixed && F.defaults.fixed) {
        this.overlay.addClass('fancybox-overlay-fixed');

        this.fixed = true;
      }
    },

    open : function(opts) {
      var that = this;

      opts = $.extend({}, this.defaults, opts);

      if (this.overlay) {
        this.overlay.unbind('.overlay').width('auto').height('auto');

      } else {
        this.create(opts);
      }

      if (!this.fixed) {
        W.bind('resize.overlay', $.proxy( this.update, this) );

        this.update();
      }

      if (opts.closeClick) {
        this.overlay.bind('click.overlay', function(e) {
          if ($(e.target).hasClass('fancybox-overlay')) {
            if (F.isActive) {
              F.close();
            } else {
              that.close();
            }

            return false;
          }
        });
      }

      this.overlay.css( opts.css ).show();
    },

    close : function() {
      var scrollV, scrollH;

      W.unbind('resize.overlay');

      if (this.el.hasClass('fancybox-lock')) {
        $('.fancybox-margin').removeClass('fancybox-margin');

        scrollV = W.scrollTop();
        scrollH = W.scrollLeft();

        this.el.removeClass('fancybox-lock');

        W.scrollTop( scrollV ).scrollLeft( scrollH );
      }

      $('.fancybox-overlay').remove().hide();

      $.extend(this, {
        overlay : null,
        fixed   : false
      });
    },

    // Private, callbacks

    update : function () {
      var width = '100%', offsetWidth;

      // Reset width/height so it will not mess
      this.overlay.width(width).height('100%');

      // jQuery does not return reliable result for IE
      if (IE) {
        offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

        if (D.width() > offsetWidth) {
          width = D.width();
        }

      } else if (D.width() > W.width()) {
        width = D.width();
      }

      this.overlay.width(width).height(D.height());
    },

    // This is where we can manipulate DOM, because later it would cause iframes to reload
    onReady : function (opts, obj) {
      var overlay = this.overlay;

      $('.fancybox-overlay').stop(true, true);

      if (!overlay) {
        this.create(opts);
      }

      if (opts.locked && this.fixed && obj.fixed) {
        if (!overlay) {
          this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
        }

        obj.locked = this.overlay.append( obj.wrap );
        obj.fixed  = false;
      }

      if (opts.showEarly === true) {
        this.beforeShow.apply(this, arguments);
      }
    },

    beforeShow : function(opts, obj) {
      var scrollV, scrollH;

      if (obj.locked) {
        if (this.margin !== false) {
          $('*').filter(function(){
            return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
          }).addClass('fancybox-margin');

          this.el.addClass('fancybox-margin');
        }

        scrollV = W.scrollTop();
        scrollH = W.scrollLeft();

        this.el.addClass('fancybox-lock');

        W.scrollTop( scrollV ).scrollLeft( scrollH );
      }

      this.open(opts);
    },

    onUpdate : function() {
      if (!this.fixed) {
        this.update();
      }
    },

    afterClose: function (opts) {
      // Remove overlay if exists and fancyBox is not opening
      // (e.g., it is not being open using afterClose callback)
      //if (this.overlay && !F.isActive) {
      if (this.overlay && !F.coming) {
        this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
      }
    }
  };

  /*
   *  Title helper
   */

  F.helpers.title = {
    defaults : {
      type     : 'float', // 'float', 'inside', 'outside' or 'over',
      position : 'bottom' // 'top' or 'bottom'
    },

    beforeShow: function (opts) {
      var current = F.current,
        text    = current.title,
        type    = opts.type,
        title,
        target;

      if ($.isFunction(text)) {
        text = text.call(current.element, current);
      }

      if (!isString(text) || $.trim(text) === '') {
        return;
      }

      title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

      switch (type) {
        case 'inside':
          target = F.skin;
        break;

        case 'outside':
          target = F.wrap;
        break;

        case 'over':
          target = F.inner;
        break;

        default: // 'float'
          target = F.skin;

          title.appendTo('body');

          if (IE) {
            title.width( title.width() );
          }

          title.wrapInner('<span class="child"></span>');

          //Increase bottom margin so this title will also fit into viewport
          F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
        break;
      }

      title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
    }
  };

  // jQuery plugin initialization
  $.fn.fancybox = function (options) {
    var index,
      that     = $(this),
      selector = this.selector || '',
      run      = function(e) {
        var what = $(this).blur(), idx = index, relType, relVal;

        if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
          relType = options.groupAttr || 'data-fancybox-group';
          relVal  = what.attr(relType);

          if (!relVal) {
            relType = 'rel';
            relVal  = what.get(0)[ relType ];
          }

          if (relVal && relVal !== '' && relVal !== 'nofollow') {
            what = selector.length ? $(selector) : that;
            what = what.filter('[' + relType + '="' + relVal + '"]');
            idx  = what.index(this);
          }

          options.index = idx;

          // Stop an event from bubbling if everything is fine
          if (F.open(what, options) !== false) {
            e.preventDefault();
          }
        }
      };

    options = options || {};
    index   = options.index || 0;

    if (!selector || options.live === false) {
      that.unbind('click.fb-start').bind('click.fb-start', run);

    } else {
      D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
    }

    this.filter('[data-fancybox-start=1]').trigger('click');

    return this;
  };

  // Tests that need a body at doc ready
  D.ready(function() {
    var w1, w2;

    if ( $.scrollbarWidth === undefined ) {
      // http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
      $.scrollbarWidth = function() {
        var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
          child  = parent.children(),
          width  = child.innerWidth() - child.height( 99 ).innerWidth();

        parent.remove();

        return width;
      };
    }

    if ( $.support.fixedPosition === undefined ) {
      $.support.fixedPosition = (function() {
        var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
          fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

        elem.remove();

        return fixed;
      }());
    }

    $.extend(F.defaults, {
      scrollbarWidth : $.scrollbarWidth(),
      fixed  : $.support.fixedPosition,
      parent : $('body')
    });

    //Get real width of page scroll-bar
    w1 = $(window).width();

    H.addClass('fancybox-lock-test');

    w2 = $(window).width();

    H.removeClass('fancybox-lock-test');

    $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
  });

}(window, document, jQuery));
/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *			http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
(function ($) {
	"use strict";

	//Shortcut for fancyBox object
	var F = $.fancybox,
		format = function( url, rez, params ) {
			params = params || '';

			if ( $.type( params ) === "object" ) {
				params = $.param(params, true);
			}

			$.each(rez, function(key, value) {
				url = url.replace( '$' + key, value || '' );
			});

			if (params.length) {
				url += ( url.indexOf('?') > 0 ? '&' : '?' ) + params;
			}

			return url;
		};

	//Add helper object
	F.helpers.media = {
		defaults : {
			youtube : {
				matcher : /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
				params  : {
					autoplay    : 1,
					autohide    : 1,
					fs          : 1,
					rel         : 0,
					hd          : 1,
					wmode       : 'opaque',
					enablejsapi : 1
				},
				type : 'iframe',
				url  : '//www.youtube.com/embed/$3'
			},
			vimeo : {
				matcher : /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
				params  : {
					autoplay      : 1,
					hd            : 1,
					show_title    : 1,
					show_byline   : 1,
					show_portrait : 0,
					fullscreen    : 1
				},
				type : 'iframe',
				url  : '//player.vimeo.com/video/$1'
			},
			metacafe : {
				matcher : /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
				params  : {
					autoPlay : 'yes'
				},
				type : 'swf',
				url  : function( rez, params, obj ) {
					obj.swf.flashVars = 'playerVars=' + $.param( params, true );

					return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
				}
			},
			dailymotion : {
				matcher : /dailymotion.com\/video\/(.*)\/?(.*)/,
				params  : {
					additionalInfos : 0,
					autoStart : 1
				},
				type : 'swf',
				url  : '//www.dailymotion.com/swf/video/$1'
			},
			twitvid : {
				matcher : /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
				params  : {
					autoplay : 0
				},
				type : 'iframe',
				url  : '//www.twitvid.com/embed.php?guid=$1'
			},
			twitpic : {
				matcher : /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
				type : 'image',
				url  : '//twitpic.com/show/full/$1/'
			},
			instagram : {
				matcher : /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
				type : 'image',
				url  : '//$1/p/$2/media/?size=l'
			},
			google_maps : {
				matcher : /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
				type : 'iframe',
				url  : function( rez ) {
					return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
				}
			}
		},

		beforeLoad : function(opts, obj) {
			var url   = obj.href || '',
				type  = false,
				what,
				item,
				rez,
				params;

			for (what in opts) {
				if (opts.hasOwnProperty(what)) {
					item = opts[ what ];
					rez  = url.match( item.matcher );

					if (rez) {
						type   = item.type;
						params = $.extend(true, {}, item.params, obj[ what ] || ($.isPlainObject(opts[ what ]) ? opts[ what ].params : null));

						url = $.type( item.url ) === "function" ? item.url.call( this, rez, params, obj ) : format( item.url, rez, params );

						break;
					}
				}
			}

			if (type) {
				obj.href = url;
				obj.type = type;

				obj.autoHeight = false;
			}
		}
	};

}(jQuery));
/*! jQuery UI - v1.12.0 - 2016-08-26
* http://jqueryui.com
* Includes: widget.js, position.js, keycode.js, unique-id.js, widgets/autocomplete.js, widgets/menu.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){t.ui=t.ui||{},t.ui.version="1.12.0";var e=0,i=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var s,n,o=i.call(arguments,1),a=0,r=o.length;r>a;a++)for(s in o[a])n=o[a][s],o[a].hasOwnProperty(s)&&void 0!==n&&(e[s]=t.isPlainObject(n)?t.isPlainObject(e[s])?t.widget.extend({},e[s],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,s){var n=s.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=i.call(arguments,1),l=this;return a?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new s(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(i,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o,a=Math.max,r=Math.abs,l=Math.round,h=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;o=function(){var e=t("<div>").css("position","absolute").appendTo("body").offset({top:1.5,left:1.5}),i=1.5===e.offset().top;return e.remove(),o=function(){return i},i},t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=t.extend({},n);var p,g,m,_,v,b,y=t(n.of),w=t.position.getWithinInfo(n.within),k=t.position.getScrollInfo(w),x=(n.collision||"flip").split(" "),C={};return b=s(y),y[0].preventDefault&&(n.at="left top"),g=b.width,m=b.height,_=b.offset,v=t.extend({},_),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=h.test(i[0])?i.concat(["center"]):c.test(i[0])?["center"].concat(i):["center","center"]),i[0]=h.test(i[0])?i[0]:"center",i[1]=c.test(i[1])?i[1]:"center",t=u.exec(i[0]),e=u.exec(i[1]),C[this]=[t?t[0]:0,e?e[0]:0],n[this]=[d.exec(i[0])[0],d.exec(i[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===n.at[0]?v.left+=g:"center"===n.at[0]&&(v.left+=g/2),"bottom"===n.at[1]?v.top+=m:"center"===n.at[1]&&(v.top+=m/2),p=e(C.at,g,m),v.left+=p[0],v.top+=p[1],this.each(function(){var s,h,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=u+f+i(this,"marginRight")+k.width,T=d+b+i(this,"marginBottom")+k.height,I=t.extend({},v),M=e(C.my,c.outerWidth(),c.outerHeight());"right"===n.my[0]?I.left-=u:"center"===n.my[0]&&(I.left-=u/2),"bottom"===n.my[1]?I.top-=d:"center"===n.my[1]&&(I.top-=d/2),I.left+=M[0],I.top+=M[1],o()||(I.left=l(I.left),I.top=l(I.top)),s={marginLeft:f,marginTop:b},t.each(["left","top"],function(e,i){t.ui.position[x[e]]&&t.ui.position[x[e]][i](I,{targetWidth:g,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:s,collisionWidth:D,collisionHeight:T,offset:[p[0]+M[0],p[1]+M[1]],my:n.my,at:n.at,within:w,elem:c})}),n.using&&(h=function(t){var e=_.left-I.left,i=e+g-u,s=_.top-I.top,o=s+m-d,l={target:{element:y,left:_.left,top:_.top,width:g,height:m},element:{element:c,left:I.left,top:I.top,width:u,height:d},horizontal:0>i?"left":e>0?"right":"center",vertical:0>o?"top":s>0?"bottom":"middle"};u>g&&g>r(e+i)&&(l.horizontal="center"),d>m&&m>r(s+o)&&(l.vertical="middle"),l.important=a(r(e),r(i))>a(r(s),r(o))?"horizontal":"vertical",n.using.call(this,t,l)}),c.offset(t.extend(I,{using:h}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,o=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-o-n;e.collisionWidth>o?l>0&&0>=h?(i=t.left+l+e.collisionWidth-o-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+o-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=a(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,o=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-o-n;e.collisionHeight>o?l>0&&0>=h?(i=t.top+l+e.collisionHeight-o-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+o-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=a(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,a=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-a-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-a-o,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,a=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-a-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-a-o,(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.widget("ui.menu",{version:"1.12.0",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||"",n=String.fromCharCode(e.keyCode),o=!1,clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,o,a=this,r=this.options.icons.submenu,l=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=l.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=l.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content")}),n=i.not(".ui-menu-item, .ui-menu-divider"),o=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.0",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s})),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete});
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!! */
/* THIS FILE IS CHANGED TO SET "background-size" with !important to fix the bug caused by common/_media.scss line 9ff
/* DO NOT UPDATE THIS FILE */
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!! */
var objectFitImages=function(){"use strict";var t="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";var e=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;var i="object-fit"in document.documentElement.style;var n=document.documentElement.getAttribute;var r=document.documentElement.setAttribute;var c=false;function o(t){var i=getComputedStyle(t).fontFamily;var n;var r={};while((n=e.exec(i))!==null){r[n[1]]=n[2]}return r}function a(e,i){var r=o(e);if(!r["object-fit"]||r["object-fit"]==="fill"){return}var c=i||e.currentSrc||e.src;if(e.srcset){e.srcset=""}if(e[t]){e[t].s=c;if(i){e[t].a=i}}else{e[t]={s:c,a:i||n.call(e,"src")};e.src=t;s(e)}e.style.backgroundImage='url("'+c+'")';e.style.backgroundPosition=r["object-position"]||"center";e.style.backgroundRepeat="no-repeat";if(/scale-down/.test(r["object-fit"])){if(!e[t].i){e[t].i=new Image;e[t].i.src=c}(function a(){if(e[t].i.naturalWidth){if(e[t].i.naturalWidth>e.width||e[t].i.naturalHeight>e.height){e.style.backgroundSize="contain !important"}else{e.style.backgroundSize="auto !important"}return}setTimeout(a,100)})()}else{e.style.backgroundSize=r["object-fit"].replace("none","auto")+' !important'}}function s(e){var i={get:function(){return e[t].s},set:function(i){delete e[t].i;a(e,i);return i}};Object.defineProperty(e,"src",i);Object.defineProperty(e,"currentSrc",{get:i.get})}function u(t,e){window.addEventListener("resize",A.bind(null,t,e))}function l(t){if(t.target.tagName==="IMG"){a(t.target)}}function f(){if(!i){HTMLImageElement.prototype.getAttribute=function(e){if(this[t]&&e==="src"){return this[t].a}return n.call(this,e)};HTMLImageElement.prototype.setAttribute=function(e,i){if(this[t]&&e==="src"){this.src=String(i)}else{r.call(this,e,i)}}}}function A(t,e){var n=!c&&!t;e=e||{};t=t||"img";if(i&&!e.skipTest){return false}if(typeof t==="string"){t=document.querySelectorAll("img")}else if(!t.length){t=[t]}for(var r=0;r<t.length;r++){a(t[r])}if(n){document.body.addEventListener("load",l,true);c=true;t="img"}if(e.watchMQ){delete e.watchMQ;u(t,e)}}A.supportsObjectFit=i;f();return A}();
/**
 *  Ajax Autocomplete for jQuery, version 1.4.2
 *  (c) 2017 Tomas Kirda
 *
 *  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
 *  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports&&"function"==typeof require?require("jquery"):jQuery)}(function(a){"use strict";function b(c,d){var e=this;e.element=c,e.el=a(c),e.suggestions=[],e.badQueries=[],e.selectedIndex=-1,e.currentValue=e.element.value,e.timeoutId=null,e.cachedResponse={},e.onChangeTimeout=null,e.onChange=null,e.isLocal=!1,e.suggestionsContainer=null,e.noSuggestionsContainer=null,e.options=a.extend({},b.defaults,d),e.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"},e.hint=null,e.hintValue="",e.selection=null,e.initialize(),e.setOptions(d)}function c(a,b,c){return-1!==a.value.toLowerCase().indexOf(c)}function d(b){return"string"==typeof b?a.parseJSON(b):b}function e(a,b){if(!b)return a.value;var c="("+g.escapeRegExChars(b)+")";return a.value.replace(new RegExp(c,"gi"),"<strong>$1</strong>").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/&lt;(\/?strong)&gt;/g,"<$1>")}function f(a,b){return'<div class="autocomplete-group">'+b+"</div>"}var g=function(){return{escapeRegExChars:function(a){return a.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},createNode:function(a){var b=document.createElement("div");return b.className=a,b.style.position="absolute",b.style.display="none",b}}}(),h={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40},i=a.noop;b.utils=g,a.Autocomplete=b,b.defaults={ajaxSettings:{},autoSelectFirst:!1,appendTo:"body",serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:e,formatGroup:f,delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:i,onSearchComplete:i,onSearchError:i,preserveInput:!1,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",currentRequest:null,triggerSelectOnValidInput:!0,preventBadQueries:!0,lookupFilter:c,paramName:"query",transformResult:d,showNoSuggestionNotice:!1,noSuggestionNotice:"No results",orientation:"bottom",forceFixPosition:!1},b.prototype={initialize:function(){var c,d=this,e="."+d.classes.suggestion,f=d.classes.selected,g=d.options;d.element.setAttribute("autocomplete","off"),d.noSuggestionsContainer=a('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),d.suggestionsContainer=b.utils.createNode(g.containerClass),c=a(d.suggestionsContainer),c.appendTo(g.appendTo||"body"),"auto"!==g.width&&c.css("width",g.width),c.on("mouseover.autocomplete",e,function(){d.activate(a(this).data("index"))}),c.on("mouseout.autocomplete",function(){d.selectedIndex=-1,c.children("."+f).removeClass(f)}),c.on("click.autocomplete",e,function(){d.select(a(this).data("index"))}),c.on("click.autocomplete",function(){clearTimeout(d.blurTimeoutId)}),d.fixPositionCapture=function(){d.visible&&d.fixPosition()},a(window).on("resize.autocomplete",d.fixPositionCapture),d.el.on("keydown.autocomplete",function(a){d.onKeyPress(a)}),d.el.on("keyup.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("blur.autocomplete",function(){d.onBlur()}),d.el.on("focus.autocomplete",function(){d.onFocus()}),d.el.on("change.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("input.autocomplete",function(a){d.onKeyUp(a)})},onFocus:function(){var a=this;a.fixPosition(),a.el.val().length>=a.options.minChars&&a.onValueChange()},onBlur:function(){var a=this;a.blurTimeoutId=setTimeout(function(){a.hide()},200)},abortAjax:function(){var a=this;a.currentRequest&&(a.currentRequest.abort(),a.currentRequest=null)},setOptions:function(b){var c=this,d=c.options;this.options=a.extend({},d,b),c.isLocal=Array.isArray(d.lookup),c.isLocal&&(d.lookup=c.verifySuggestionsFormat(d.lookup)),d.orientation=c.validateOrientation(d.orientation,"bottom"),a(c.suggestionsContainer).css({"max-height":d.maxHeight+"px",width:d.width+"px","z-index":d.zIndex})},clearCache:function(){this.cachedResponse={},this.badQueries=[]},clear:function(){this.clearCache(),this.currentValue="",this.suggestions=[]},disable:function(){var a=this;a.disabled=!0,clearTimeout(a.onChangeTimeout),a.abortAjax()},enable:function(){this.disabled=!1},fixPosition:function(){var b=this,c=a(b.suggestionsContainer),d=c.parent().get(0);if(d===document.body||b.options.forceFixPosition){var e=b.options.orientation,f=c.outerHeight(),g=b.el.outerHeight(),h=b.el.offset(),i={top:h.top,left:h.left};if("auto"===e){var j=a(window).height(),k=a(window).scrollTop(),l=-k+h.top-f,m=k+j-(h.top+g+f);e=Math.max(l,m)===l?"top":"bottom"}if("top"===e?i.top+=-f:i.top+=g,d!==document.body){var n,o=c.css("opacity");b.visible||c.css("opacity",0).show(),n=c.offsetParent().offset(),i.top-=n.top,i.left-=n.left,b.visible||c.css("opacity",o).hide()}"auto"===b.options.width&&(i.width=b.el.outerWidth()+"px"),c.css(i)}},isCursorAtEnd:function(){var a,b=this,c=b.el.val().length,d=b.element.selectionStart;return"number"==typeof d?d===c:document.selection?(a=document.selection.createRange(),a.moveStart("character",-c),c===a.text.length):!0},onKeyPress:function(a){var b=this;if(!b.disabled&&!b.visible&&a.which===h.DOWN&&b.currentValue)return void b.suggest();if(!b.disabled&&b.visible){switch(a.which){case h.ESC:b.el.val(b.currentValue),b.hide();break;case h.RIGHT:if(b.hint&&b.options.onHint&&b.isCursorAtEnd()){b.selectHint();break}return;case h.TAB:if(b.hint&&b.options.onHint)return void b.selectHint();if(-1===b.selectedIndex)return void b.hide();if(b.select(b.selectedIndex),b.options.tabDisabled===!1)return;break;case h.RETURN:if(-1===b.selectedIndex)return void b.hide();b.select(b.selectedIndex);break;case h.UP:b.moveUp();break;case h.DOWN:b.moveDown();break;default:return}a.stopImmediatePropagation(),a.preventDefault()}},onKeyUp:function(a){var b=this;if(!b.disabled){switch(a.which){case h.UP:case h.DOWN:return}clearTimeout(b.onChangeTimeout),b.currentValue!==b.el.val()&&(b.findBestHint(),b.options.deferRequestBy>0?b.onChangeTimeout=setTimeout(function(){b.onValueChange()},b.options.deferRequestBy):b.onValueChange())}},onValueChange:function(){var b=this,c=b.options,d=b.el.val(),e=b.getQuery(d);return b.selection&&b.currentValue!==e&&(b.selection=null,(c.onInvalidateSelection||a.noop).call(b.element)),clearTimeout(b.onChangeTimeout),b.currentValue=d,b.selectedIndex=-1,c.triggerSelectOnValidInput&&b.isExactMatch(e)?void b.select(0):void(e.length<c.minChars?b.hide():b.getSuggestions(e))},isExactMatch:function(a){var b=this.suggestions;return 1===b.length&&b[0].value.toLowerCase()===a.toLowerCase()},getQuery:function(b){var c,d=this.options.delimiter;return d?(c=b.split(d),a.trim(c[c.length-1])):b},getSuggestionsLocal:function(b){var c,d=this,e=d.options,f=b.toLowerCase(),g=e.lookupFilter,h=parseInt(e.lookupLimit,10);return c={suggestions:a.grep(e.lookup,function(a){return g(a,b,f)})},h&&c.suggestions.length>h&&(c.suggestions=c.suggestions.slice(0,h)),c},getSuggestions:function(b){var c,d,e,f,g=this,h=g.options,i=h.serviceUrl;if(h.params[h.paramName]=b,h.onSearchStart.call(g.element,h.params)!==!1){if(d=h.ignoreParams?null:h.params,a.isFunction(h.lookup))return void h.lookup(b,function(a){g.suggestions=a.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,a.suggestions)});g.isLocal?c=g.getSuggestionsLocal(b):(a.isFunction(i)&&(i=i.call(g.element,b)),e=i+"?"+a.param(d||{}),c=g.cachedResponse[e]),c&&Array.isArray(c.suggestions)?(g.suggestions=c.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,c.suggestions)):g.isBadQuery(b)?h.onSearchComplete.call(g.element,b,[]):(g.abortAjax(),f={url:i,data:d,type:h.type,dataType:h.dataType},a.extend(f,h.ajaxSettings),g.currentRequest=a.ajax(f).done(function(a){var c;g.currentRequest=null,c=h.transformResult(a,b),g.processResponse(c,b,e),h.onSearchComplete.call(g.element,b,c.suggestions)}).fail(function(a,c,d){h.onSearchError.call(g.element,b,a,c,d)}))}},isBadQuery:function(a){if(!this.options.preventBadQueries)return!1;for(var b=this.badQueries,c=b.length;c--;)if(0===a.indexOf(b[c]))return!0;return!1},hide:function(){var b=this,c=a(b.suggestionsContainer);a.isFunction(b.options.onHide)&&b.visible&&b.options.onHide.call(b.element,c),b.visible=!1,b.selectedIndex=-1,clearTimeout(b.onChangeTimeout),a(b.suggestionsContainer).hide(),b.signalHint(null)},suggest:function(){if(!this.suggestions.length)return void(this.options.showNoSuggestionNotice?this.noSuggestions():this.hide());var b,c=this,d=c.options,e=d.groupBy,f=d.formatResult,g=c.getQuery(c.currentValue),h=c.classes.suggestion,i=c.classes.selected,j=a(c.suggestionsContainer),k=a(c.noSuggestionsContainer),l=d.beforeRender,m="",n=function(a,c){var f=a.data[e];return b===f?"":(b=f,d.formatGroup(a,b))};return d.triggerSelectOnValidInput&&c.isExactMatch(g)?void c.select(0):(a.each(c.suggestions,function(a,b){e&&(m+=n(b,g,a)),m+='<div class="'+h+'" data-index="'+a+'">'+f(b,g,a)+"</div>"}),this.adjustContainerWidth(),k.detach(),j.html(m),a.isFunction(l)&&l.call(c.element,j,c.suggestions),c.fixPosition(),j.show(),d.autoSelectFirst&&(c.selectedIndex=0,j.scrollTop(0),j.children("."+h).first().addClass(i)),c.visible=!0,void c.findBestHint())},noSuggestions:function(){var b=this,c=b.options.beforeRender,d=a(b.suggestionsContainer),e=a(b.noSuggestionsContainer);this.adjustContainerWidth(),e.detach(),d.empty(),d.append(e),a.isFunction(c)&&c.call(b.element,d,b.suggestions),b.fixPosition(),d.show(),b.visible=!0},adjustContainerWidth:function(){var b,c=this,d=c.options,e=a(c.suggestionsContainer);"auto"===d.width?(b=c.el.outerWidth(),e.css("width",b>0?b:300)):"flex"===d.width&&e.css("width","")},findBestHint:function(){var b=this,c=b.el.val().toLowerCase(),d=null;c&&(a.each(b.suggestions,function(a,b){var e=0===b.value.toLowerCase().indexOf(c);return e&&(d=b),!e}),b.signalHint(d))},signalHint:function(b){var c="",d=this;b&&(c=d.currentValue+b.value.substr(d.currentValue.length)),d.hintValue!==c&&(d.hintValue=c,d.hint=b,(this.options.onHint||a.noop)(c))},verifySuggestionsFormat:function(b){return b.length&&"string"==typeof b[0]?a.map(b,function(a){return{value:a,data:null}}):b},validateOrientation:function(b,c){return b=a.trim(b||"").toLowerCase(),-1===a.inArray(b,["auto","bottom","top"])&&(b=c),b},processResponse:function(a,b,c){var d=this,e=d.options;a.suggestions=d.verifySuggestionsFormat(a.suggestions),e.noCache||(d.cachedResponse[c]=a,e.preventBadQueries&&!a.suggestions.length&&d.badQueries.push(b)),b===d.getQuery(d.currentValue)&&(d.suggestions=a.suggestions,d.suggest())},activate:function(b){var c,d=this,e=d.classes.selected,f=a(d.suggestionsContainer),g=f.find("."+d.classes.suggestion);return f.find("."+e).removeClass(e),d.selectedIndex=b,-1!==d.selectedIndex&&g.length>d.selectedIndex?(c=g.get(d.selectedIndex),a(c).addClass(e),c):null},selectHint:function(){var b=this,c=a.inArray(b.hint,b.suggestions);b.select(c)},select:function(a){var b=this;b.hide(),b.onSelect(a)},moveUp:function(){var b=this;if(-1!==b.selectedIndex)return 0===b.selectedIndex?(a(b.suggestionsContainer).children().first().removeClass(b.classes.selected),b.selectedIndex=-1,b.el.val(b.currentValue),void b.findBestHint()):void b.adjustScroll(b.selectedIndex-1)},moveDown:function(){var a=this;a.selectedIndex!==a.suggestions.length-1&&a.adjustScroll(a.selectedIndex+1)},adjustScroll:function(b){var c=this,d=c.activate(b);if(d){var e,f,g,h=a(d).outerHeight();e=d.offsetTop,f=a(c.suggestionsContainer).scrollTop(),g=f+c.options.maxHeight-h,f>e?a(c.suggestionsContainer).scrollTop(e):e>g&&a(c.suggestionsContainer).scrollTop(e-c.options.maxHeight+h),c.options.preserveInput||c.el.val(c.getValue(c.suggestions[b].value)),c.signalHint(null)}},onSelect:function(b){var c=this,d=c.options.onSelect,e=c.suggestions[b];c.currentValue=c.getValue(e.value),c.currentValue===c.el.val()||c.options.preserveInput||c.el.val(c.currentValue),c.signalHint(null),c.suggestions=[],c.selection=e,a.isFunction(d)&&d.call(c.element,e)},getValue:function(a){var b,c,d=this,e=d.options.delimiter;return e?(b=d.currentValue,c=b.split(e),1===c.length?a:b.substr(0,b.length-c[c.length-1].length)+a):a},dispose:function(){var b=this;b.el.off(".autocomplete").removeData("autocomplete"),a(window).off("resize.autocomplete",b.fixPositionCapture),a(b.suggestionsContainer).remove()}},a.fn.devbridgeAutocomplete=function(c,d){var e="autocomplete";return arguments.length?this.each(function(){var f=a(this),g=f.data(e);"string"==typeof c?g&&"function"==typeof g[c]&&g[c](d):(g&&g.dispose&&g.dispose(),g=new b(this,c),f.data(e,g))}):this.first().data(e)},a.fn.autocomplete||(a.fn.autocomplete=a.fn.devbridgeAutocomplete)});
function SuggestController() {

  this.init = function () {

    jQuery('form[data-suggest]').each(function () {
      var $form = $(this), $searchBox = $form.find('.tx-solr-suggest');

      $form.find('.tx-solr-suggest-focus').focus();

      jQuery.ajaxSetup({jsonp: "tx_solr[callback]"});

      // when no specific container found, use the form as container
      if ($searchBox.length === 0) {
        $searchBox = $form;
      }
      $searchBox.css('position', 'relative');

      // Prevent submit of empty search form
      $form.on('submit', function (e) {
        if ($form.find('.tx-solr-suggest').val() === '') {
          e.preventDefault();
          $form.find('.tx-solr-suggest').focus();
        }
      });

      var width=0;

      if($searchBox.is('[data-header]'))
      {
        width = jQuery('nav.header__menu').outerWidth();
      }

      if(!width)
      {
        width = $searchBox.outerWidth();
      }

      var $headerSearch = jQuery('#header-search');
      var tdfUrl = $headerSearch.attr('data-tdf-url');
      var tdfAdvice = $headerSearch.attr('data-tdf-advice');
      var isTdfPage = 'p'+$headerSearch.attr('data-tdf-page') === jQuery('body').attr('id');
      var translationToProduct = $headerSearch.attr('data-to-product');
      var tdfHash = '';
      var isTdfSearch = false;

      $form.find('.tx-solr-suggest').devbridgeAutocomplete({
        serviceUrl: $form.data('suggest'),
        dataType: 'jsonp',
        paramName: 'tx_solr[queryString]',
        groupBy: 'category',
        maxHeight: 1000,
        autoSelectFirst: false,
        triggerSelectOnValidInput: false,
        width: width,
        onSearchStart: function(params) {
          var pattern = new RegExp("^[a-zA-Z]+[0-9]{3}.*");

          isTdfSearch = pattern.test(params['tx_solr[queryString]']);

          if(isTdfSearch)
          {
            tdfHash = '#'+params['tx_solr[queryString]'];
          }
        },
        onSelect: function (suggestion) {
          // go to link when selecting found result
          if (suggestion.data.link) {
            // Open youtube in overlay
            if (suggestion.data.link.indexOf('https://www.youtube.com') === 0) {
              openVideoOverlay(suggestion.data.link);
            } else {
              location.href = suggestion.data.link;
            }
            // else trigger form submit (do search)
          } else {
            $form.trigger('submit');
          }

          if(isTdfPage)
          {
            location.reload();
          }
        },
        transformResult: function (response) {
          var result = {
            suggestions: [],
            documents: response.documents !== undefined ? response.documents : []
          };

          if(isTdfSearch)
          {
            result.documents.push({
              link: tdfUrl + tdfHash,
              title: '',
              tdfAdvice: tdfAdvice,
              type: 'tdf'
            });
          }

          if (result.documents.length === 0) return result;

          $.each(result.documents, function (key, value) {
            if(value.type === "tx_avneugart_domain_model_download")
            {
              value.link = $form.attr('action')+encodeURI('?tx_solr[q]='+ value.title);
            }

            result.suggestions.push(
              {
                value: value.title,
                data: value,
                type: value.type
              }
            );
          });

          return result;
        },
        beforeRender: function (container) {
          // remove first group header
          container.find('.autocomplete-group:first').remove();
          container.addClass('tx-solr-autosuggest');

          // add active class to container
          $searchBox.parent().addClass('autocomplete-active').fadeIn();
        },
        formatResult: function (suggestion, currentValue) {
          // Do not replace anything if there current value is empty
          if (!currentValue) {
            return suggestion.value;
          }

          var pattern = '(' + $.Autocomplete.utils.escapeRegExChars(currentValue.trim()) + ')';
          // normal suggestion
          if (suggestion.data.category === 'suggestion') {
            return suggestion.value
              .replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>')
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/&lt;(\/?strong)&gt;/g, '<$1>');

            // results
          } else {
            var title = suggestion.data.title
              .replace(new RegExp(pattern, 'gi'), '<em>$1<\/em>')
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/&lt;(\/?em)&gt;/g, '<$1>');


            if(suggestion.data.doktype_stringS == 150)
            {
              var frameSizeSelection = '';

              if(suggestion.data.frameSizes_stringM)
              {
                for(var i in suggestion.data.frameSizes_stringM)
                {
                  frameSizeSelection += '<div class="framesize" >' +
                    '<a class="btn button--white" href="' + suggestion.data.link + '#'+ suggestion.data.title + suggestion.data.frameSizes_stringM[i] +'">' + suggestion.data.frameSizes_stringM[i]+ '</a> ' +
                    '</div> '
                }
              }

              return '<div class="result product-page ' + suggestion.data.type + '"><div class="products">' +
                '<article class="col-xs-12 list_product" data-product="66">'+
                  '<div class="tilecontainer clearfix">'+
                    '<div class="list_product__wrapper">'+
                      '<div class="list_product__image">'+
                        '<a href="' + suggestion.data.link + '">'+
                          (suggestion.data.previewImage_stringS ? '<img src="'+ suggestion.data.previewImage_stringS +'" >' : '')+
                        '</a>'+
                      '</div>'+
                      '<div class="list_product__description">'+
                        '<h4>'+
                          title+
                        '</h4>'+
                        '<p>'+
                          suggestion.data.teaser_stringS+
                        '</p>'+
                      '</div>'+
                      '<div class="list_product__framesizes">'+
                        '<div class="text-center">'+
                          '<div class="framesizes__elements">'+ frameSizeSelection+'</div>'+
                          '<div class="list_product__more_link">'+
                            '<a class="button button--sm button--white product__more" href="' + suggestion.data.link + '">'+
                              translationToProduct+
                            '</a>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                '</article>'+
              '</div></div>';
            }
            else if(suggestion.data.type === 'tdf')
            {
              return '<div class="module_list result ' + suggestion.data.type + '"><div class="result module_list_item module_list_item_info module_list_item_tdf clearfix">' +
                '<img src="/typo3conf/ext/av_neugart/Resources/Public/Img/logo-tdf.jpg"/><a href="' + suggestion.data.link + '" class="internal-link">' + suggestion.data.tdfAdvice + '</a>' +
                '</div></div>';
            }
            else
            {
              return '<div class="result ' + suggestion.data.type + '">' +
                (!!suggestion.data.previewImage ? '<figure ' + (!!suggestion.data.hasVideo ? 'class="hasVideo"' : '') + '><img src="' + suggestion.data.previewImage + '" /></figure>' : '') +
                '<a href="' + suggestion.data.link + '" class="internal-link">' + title + '</a>' +
                '</div>';
            }
          }

        }
      }).on('blur', function () {
        $searchBox.parent().removeClass('autocomplete-active');
        var $box = $(this);
        setTimeout(function () {
          $box.devbridgeAutocomplete('hide');
        }, 200);
      });
    });
  };
}

jQuery(document).ready(function() {
  /** solr search autocomplete **/
  var solrSuggestController = new SuggestController();
  solrSuggestController.init();

  jQuery("body").on("tx_solr_updated", function() {
    solrSuggestController.init();
  });
});

