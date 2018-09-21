!function(){"use strict";function e(n){return"undefined"==typeof this||Object.getPrototypeOf(this)!==e.prototype?new e(n):(O=this,O.version="3.4.0",O.tools=new E,O.isSupported()?(O.tools.extend(O.defaults,n||{}),O.defaults.container=t(O.defaults),O.store={elements:{},containers:[]},O.sequences={},O.history=[],O.uid=0,O.initialized=!1):"undefined"!=typeof console&&null!==console,O)}function t(e){if(e&&e.container){if("string"==typeof e.container)return window.document.documentElement.querySelector(e.container);if(O.tools.isNode(e.container))return e.container}return O.defaults.container}function n(e,t){return"string"==typeof e?Array.prototype.slice.call(t.querySelectorAll(e)):O.tools.isNode(e)?[e]:O.tools.isNodeList(e)?Array.prototype.slice.call(e):Array.isArray(e)?e.filter(O.tools.isNode):[]}function i(){return++O.uid}function o(e,t,n){t.container&&(t.container=n),e.config?e.config=O.tools.extendClone(e.config,t):e.config=O.tools.extendClone(O.defaults,t),"top"===e.config.origin||"bottom"===e.config.origin?e.config.axis="Y":e.config.axis="X"}function r(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!==t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=s(e,0),e.styles.transition.delayed=s(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",a(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",a(e)}function s(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function a(e){var t,n=e.config,i=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(i.initial+=" translate"+n.axis+"("+t+")",i.target+=" translate"+n.axis+"(0)"),n.scale&&(i.initial+=" scale("+n.scale+")",i.target+=" scale(1)"),n.rotate.x&&(i.initial+=" rotateX("+n.rotate.x+"deg)",i.target+=" rotateX(0)"),n.rotate.y&&(i.initial+=" rotateY("+n.rotate.y+"deg)",i.target+=" rotateY(0)"),n.rotate.z&&(i.initial+=" rotateZ("+n.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+n.opacity+";",i.target+="; opacity: "+e.styles.computed.opacity+";"}function l(e){var t=e.config.container;t&&O.store.containers.indexOf(t)===-1&&O.store.containers.push(e.config.container),O.store.elements[e.id]=e}function c(e,t,n){var i={target:e,config:t,interval:n};O.history.push(i)}function f(){if(O.isSupported()){y();for(var e=0;e<O.store.containers.length;e++)O.store.containers[e].addEventListener("scroll",d),O.store.containers[e].addEventListener("resize",d);O.initialized||(window.addEventListener("scroll",d),window.addEventListener("resize",d),O.initialized=!0)}return O}function d(){A(y)}function u(){var e,t,n,i;O.tools.forOwn(O.sequences,function(o){i=O.sequences[o],e=!1;for(var r=0;r<i.elemIds.length;r++)n=i.elemIds[r],t=O.store.elements[n],q(t)&&!e&&(e=!0);i.active=e})}function y(){var e,t;u(),O.tools.forOwn(O.store.elements,function(n){t=O.store.elements[n],e=w(t),g(t)?(t.config.beforeReveal(t.domEl),e?t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.delayed):t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.instant),p("reveal",t,e),t.revealing=!0,t.seen=!0,t.sequence&&m(t,e)):v(t)&&(t.config.beforeReset(t.domEl),t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.initial+t.styles.transition.instant),p("reset",t),t.revealing=!1)})}function m(e,t){var n=0,i=0,o=O.sequences[e.sequence.id];o.blocked=!0,t&&"onload"===e.config.useDelay&&(i=e.config.delay),e.sequence.timer&&(n=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer)),e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){o.blocked=!1,e.sequence.timer=null,d()},Math.abs(o.interval)+i-n)}function p(e,t,n){var i=0,o=0,r="after";switch(e){case"reveal":o=t.config.duration,n&&(o+=t.config.delay),r+="Reveal";break;case"reset":o=t.config.duration,r+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[r](t.domEl),t.timer=null},o-i)}function g(e){if(e.sequence){var t=O.sequences[e.sequence.id];return t.active&&!t.blocked&&!e.revealing&&!e.disabled}return q(e)&&!e.revealing&&!e.disabled}function w(e){var t=e.config.useDelay;return"always"===t||"onload"===t&&!O.initialized||"once"===t&&!e.seen}function v(e){if(e.sequence){var t=O.sequences[e.sequence.id];return!t.active&&e.config.reset&&e.revealing&&!e.disabled}return!q(e)&&e.config.reset&&e.revealing&&!e.disabled}function b(e){return{width:e.clientWidth,height:e.clientHeight}}function h(e){if(e&&e!==window.document.documentElement){var t=x(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function x(e){var t=0,n=0,i=e.offsetHeight,o=e.offsetWidth;do isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent;while(e);return{top:t,left:n,height:i,width:o}}function q(e){function t(){var t=c+a*s,n=f+l*s,i=d-a*s,y=u-l*s,m=r.y+e.config.viewOffset.top,p=r.x+e.config.viewOffset.left,g=r.y-e.config.viewOffset.bottom+o.height,w=r.x-e.config.viewOffset.right+o.width;return t<g&&i>m&&n<w&&y>p}function n(){return"fixed"===window.getComputedStyle(e.domEl).position}var i=x(e.domEl),o=b(e.config.container),r=h(e.config.container),s=e.config.viewFactor,a=i.height,l=i.width,c=i.top,f=i.left,d=c+a,u=f+l;return t()||n()}function E(){}var O,A;e.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},e.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},e.prototype.reveal=function(e,s,a,d){var u,y,m,p,g,w;if(void 0!==s&&"number"==typeof s?(a=s,s={}):void 0!==s&&null!==s||(s={}),u=t(s),y=n(e,u),!y.length)return O;a&&"number"==typeof a&&(w=i(),g=O.sequences[w]={id:w,interval:a,elemIds:[],active:!1});for(var v=0;v<y.length;v++)p=y[v].getAttribute("data-sr-id"),p?m=O.store.elements[p]:(m={id:i(),domEl:y[v],seen:!1,revealing:!1},m.domEl.setAttribute("data-sr-id",m.id)),g&&(m.sequence={id:g.id,index:g.elemIds.length},g.elemIds.push(m.id)),o(m,s,u),r(m),l(m),O.tools.isMobile()&&!m.config.mobile||!O.isSupported()?(m.domEl.setAttribute("style",m.styles.inline),m.disabled=!0):m.revealing||m.domEl.setAttribute("style",m.styles.inline+m.styles.transform.initial);return!d&&O.isSupported()&&(c(e,s,a),O.initTimeout&&window.clearTimeout(O.initTimeout),O.initTimeout=window.setTimeout(f,0)),O},e.prototype.sync=function(){if(O.history.length&&O.isSupported()){for(var e=0;e<O.history.length;e++){var t=O.history[e];O.reveal(t.target,t.config,t.interval,!0)}f()}return O},E.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},E.prototype.isNode=function(e){return"object"==typeof window.Node?e instanceof window.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},E.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"==typeof window.NodeList?e instanceof window.NodeList:e&&"object"==typeof e&&n.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},E.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},E.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},E.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},E.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},A=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:window.ScrollReveal=e}();
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
/*!
Waypoints Sticky Element Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(s){this.options=e.extend({},i.defaults,t.defaults,s),this.element=this.options.element,this.$element=e(this.element),this.createWrapper(),this.createWaypoint()}var e=window.jQuery,i=window.Waypoint;t.prototype.createWaypoint=function(){var t=this.options.handler;this.waypoint=new i(e.extend({},this.options,{element:this.wrapper,handler:e.proxy(function(e){var i=this.options.direction.indexOf(e)>-1,s=i?this.$element.outerHeight(!0):"";this.$wrapper.height(s),this.$element.toggleClass(this.options.stuckClass,i),t&&t.call(this,e)},this)}))},t.prototype.createWrapper=function(){this.options.wrapper&&this.$element.wrap(this.options.wrapper),this.$wrapper=this.$element.parent(),this.wrapper=this.$wrapper[0]},t.prototype.destroy=function(){this.$element.parent()[0]===this.wrapper&&(this.waypoint.destroy(),this.$element.removeClass(this.options.stuckClass),this.options.wrapper&&this.$element.unwrap())},t.defaults={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"},i.Sticky=t}();
+function(n){"use strict";function t(){var i=document.createElement("gg"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var t in n)if(i.style[t]!==undefined)return{end:n[t]};return!1}n.fn.emulateTransitionEnd=function(t){var i=!1,u=this,r;n(this).one("ggTransitionEnd",function(){i=!0});return r=function(){i||n(u).trigger(n.support.transition.end)},setTimeout(r,t),this};n(function(){(n.support.transition=t(),n.support.transition)&&(n.event.special.ggTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery);+function(n){"use strict";function r(i){return this.each(function(){var u=n(this),r=u.data("gg.tooltip"),f=typeof i=="object"&&i;(r||i!="destroy")&&(r||u.data("gg.tooltip",r=new t(this,f)),typeof i=="string"&&r[i]())})}var t=function(n,t){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;this.init("tooltip",n,t)},i;t.VERSION="2.0";t.TRANSITION_DURATION=150;t.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="ggtooltip" role="tooltip"><div class="arrow-shadow"><div class="arrow"><\/div><\/div><div class="tooltip-inner"><\/div><\/div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},backcolor:"#00ffcc",textcolor:"#000000",bordercolor:"#0066cc"};t.prototype.init=function(t,i,r){var f,e,u,o,s;for(this.enabled=!0,this.type=t,this.$element=n(i),this.options=this.getOptions(r),this.$viewport=this.options.viewport&&n(this.options.viewport.selector||this.options.viewport),f=this.options.trigger.split(" "),e=f.length;e--;)if(u=f[e],u=="click")this.$element.on("click."+this.type,this.options.selector,n.proxy(this.toggle,this));else if(u!="manual"){o=u=="hover"?"mouseenter":"focusin";s=u=="hover"?"mouseleave":"focusout";this.$element.on(o+"."+this.type,this.options.selector,n.proxy(this.enter,this));this.$element.on(s+"."+this.type,this.options.selector,n.proxy(this.leave,this))}this.options.selector?this._options=n.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()};t.prototype.getDefaults=function(){return t.DEFAULTS};t.prototype.getOptions=function(t){return t=n.extend({},this.getDefaults(),this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t};t.prototype.getDelegateOptions=function(){var t={},i=this.getDefaults();return this._options&&n.each(this._options,function(n,r){i[n]!=r&&(t[n]=r)}),t};t.prototype.enter=function(t){var i=t instanceof this.constructor?t:n(t.currentTarget).data("gg."+this.type);if(i&&i.$tip&&i.$tip.is(":visible")){i.hoverState="in";return}if(i||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),n(t.currentTarget).data("gg."+this.type,i)),clearTimeout(i.timeout),i.hoverState="in",!i.options.delay||!i.options.delay.show)return i.show();i.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)};t.prototype.leave=function(t){var i=t instanceof this.constructor?t:n(t.currentTarget).data("gg."+this.type);if(i||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),n(t.currentTarget).data("gg."+this.type,i)),clearTimeout(i.timeout),i.hoverState="out",!i.options.delay||!i.options.delay.hide)return i.hide();i.timeout=setTimeout(function(){i.hoverState=="out"&&i.hide()},i.options.delay.hide)};t.prototype.show=function(){var c=n.Event("show.gg."+this.type),l,p,h;if(this.hasContent()&&this.enabled){if(this.$element.trigger(c),l=n.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]),c.isDefaultPrevented()||!l)return;var u=this,r=this.tip(),a=this.getUID(this.type);this.setContent();r.attr("id",a);this.$element.attr("aria-describedby",a);this.options.animation&&r.addClass("fade");var i=typeof this.options.placement=="function"?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,v=/\s?auto?\s?/i,y=v.test(i);y&&(i=i.replace(v,"")||"top");r.detach().css({top:0,left:0,display:"block"}).addClass(i).data("gg."+this.type,this);this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element);var f=this.getPosition(),o=r[0].offsetWidth,s=r[0].offsetHeight;if(y){var w=i,b=this.options.container?n(this.options.container):this.$element.parent(),e=this.getPosition(b);i=i=="bottom"&&f.bottom+s>e.bottom?"top":i=="top"&&f.top-s<e.top?"bottom":i=="right"&&f.right+o>e.width?"left":i=="left"&&f.left-o<e.left?"right":i;r.removeClass(w).addClass(i)}p=this.getCalculatedOffset(i,f,o,s);this.applyPlacement(p,i);h=function(){var n=u.hoverState;u.$element.trigger("shown.gg."+u.type);u.hoverState=null;n=="out"&&u.leave(u)};n.support.transition&&this.$tip.hasClass("fade")?r.one("ggTransitionEnd",h).emulateTransitionEnd(t.TRANSITION_DURATION):h()}};t.prototype.applyPlacement=function(t,i){var r=this.tip(),l=r[0].offsetWidth,e=r[0].offsetHeight,o=parseInt(r.css("margin-top"),10),s=parseInt(r.css("margin-left"),10),h,f,u;isNaN(o)&&(o=0);isNaN(s)&&(s=0);t.top=t.top+o;t.left=t.left+s;n.offset.setOffset(r[0],n.extend({using:function(n){r.css({top:Math.round(n.top),left:Math.round(n.left)})}},t),0);r.addClass("in");h=r[0].offsetWidth;f=r[0].offsetHeight;i=="top"&&f!=e&&(t.top=t.top+e-f);u=this.getViewportAdjustedDelta(i,t,h,f);u.left?t.left+=u.left:t.top+=u.top;var c=/top|bottom/.test(i),a=c?u.left*2-l+h:u.top*2-e+f,v=c?"offsetWidth":"offsetHeight";r.offset(t);this.replaceArrow(a,r[0][v],c);this.setStyles(i)};t.prototype.replaceArrow=function(n,t,i){n>0&&(this.arrow().css(i?"left":"top",50*(1-n/t)+"%").css(i?"top":"left",""),this.arrowShadow().css(i?"left":"top",50*(1-n/t)+"%").css(i?"top":"left",""))};t.prototype.setContent=function(){var n=this.tip(),t=this.getTitle();n.find(".tooltip-inner")[this.options.html?"html":"text"](t);n.removeClass("fade in top bottom left right")};t.prototype.setStyles=function(n){var t=this.tip();t.find(".tooltip-inner").css({background:this.options.backcolor,color:this.options.textcolor,"border-color":this.options.bordercolor});t.find(".arrow").css("border-"+n+"-color",this.options.backcolor);t.find(".arrow-shadow").css("border-"+n+"-color",this.options.bordercolor)};t.prototype.hide=function(i){function e(){r.hoverState!="in"&&u.detach();r.$element.removeAttr("aria-describedby").trigger("hidden.gg."+r.type);i&&i()}var r=this,u=this.tip(),f=n.Event("hide.gg."+this.type);if(this.$element.trigger(f),!f.isDefaultPrevented())return u.removeClass("in"),n.support.transition&&this.$tip.hasClass("fade")?u.one("ggTransitionEnd",e).emulateTransitionEnd(t.TRANSITION_DURATION):e(),this.hoverState=null,this};t.prototype.fixTitle=function(){var n=this.$element;(n.attr("title")||typeof n.attr("data-original-title")!="string")&&n.attr("data-original-title",n.attr("title")||"").attr("title","")};t.prototype.hasContent=function(){return this.getTitle()};t.prototype.getPosition=function(t){t=t||this.$element;var u=t[0],r=u.tagName=="BODY",i=u.getBoundingClientRect();i.width==null&&(i=n.extend({},i,{width:i.right-i.left,height:i.bottom-i.top}));var f=r?{top:0,left:0}:t.offset(),e={scroll:r?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},o=r?{width:n(window).width(),height:n(window).height()}:null;return n.extend({},i,e,o,f)};t.prototype.getCalculatedOffset=function(n,t,i,r){return n=="bottom"?{top:t.top+t.height,left:t.left+t.width/2-i/2}:n=="top"?{top:t.top-r,left:t.left+t.width/2-i/2}:n=="left"?{top:t.top+t.height/2-r/2,left:t.left-i}:{top:t.top+t.height/2-r/2,left:t.left+t.width}};t.prototype.getViewportAdjustedDelta=function(n,t,i,r){var f={top:0,left:0},e,u,o,s,h,c;return this.$viewport?(e=this.options.viewport&&this.options.viewport.padding||0,u=this.getPosition(this.$viewport),/right|left/.test(n)?(o=t.top-e-u.scroll,s=t.top+e-u.scroll+r,o<u.top?f.top=u.top-o:s>u.top+u.height&&(f.top=u.top+u.height-s)):(h=t.left-e,c=t.left+e+i,h<u.left?f.left=u.left-h:c>u.width&&(f.left=u.left+u.width-c)),f):f};t.prototype.getTitle=function(){var t=this.$element,n=this.options;return t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title)};t.prototype.getUID=function(n){do n+=~~(Math.random()*1e6);while(document.getElementById(n));return n};t.prototype.tip=function(){return this.$tip=this.$tip||n(this.options.template)};t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};t.prototype.arrowShadow=function(){return this.$arrowShadow=this.$arrowShadow||this.tip().find(".arrow-shadow")};t.prototype.enable=function(){this.enabled=!0};t.prototype.disable=function(){this.enabled=!1};t.prototype.toggleEnabled=function(){this.enabled=!this.enabled};t.prototype.toggle=function(t){var i=this;t&&(i=n(t.currentTarget).data("gg."+this.type),i||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),n(t.currentTarget).data("gg."+this.type,i)));i.tip().hasClass("in")?i.leave(i):i.enter(i)};t.prototype.destroy=function(){var n=this;clearTimeout(this.timeout);this.hide(function(){n.$element.off("."+n.type).removeData("gg."+n.type)})};i=n.fn.ggtooltip;n.fn.ggtooltip=r;n.fn.ggtooltip.Constructor=t;n.fn.ggtooltip.noConflict=function(){return n.fn.ggtooltip=i,this}}(jQuery);+function(n){"use strict";function r(i){return this.each(function(){var u=n(this),r=u.data("gg.popover"),f=typeof i=="object"&&i;(r||i!="destroy")&&(r||u.data("gg.popover",r=new t(this,f)),typeof i=="string"&&r[i]())})}var t=function(n,t){this.init("popover",n,t)},i;if(!n.fn.ggtooltip)throw new Error("ggPopover requires ggtooltip.js");t.VERSION="1.0";t.DEFAULTS=n.extend({},n.fn.ggtooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="ggpopover" role="tooltip"><div class="arrow"><div class="after"><\/div><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>',titleBackcolor:"#f7f7f7",titleBordercolor:"#ebebeb",titleTextcolor:"#000000",contentBackcolor:"#ffffff",contentTextcolor:"#000000",bordercolor:"#cccccc",arrowcolor:"#ffffff"});t.prototype=n.extend({},n.fn.ggtooltip.Constructor.prototype);t.prototype.constructor=t;t.prototype.getDefaults=function(){return t.DEFAULTS};t.prototype.setContent=function(){var n=this.tip(),i=this.getTitle(),t=this.getContent();n.find(".popover-title")[this.options.html?"html":"text"](i);n.find(".popover-content").children().detach().end()[this.options.html?typeof t=="string"?"html":"append":"text"](t);n.removeClass("fade top bottom left right in");n.find(".popover-title").html()||n.find(".popover-title").hide()};t.prototype.setStyles=function(n){var t=this.tip(),i=this.getTitle();t.find(".popover-title").css({"background-color":this.options.titleBackcolor,color:this.options.titleTextcolor,"border-bottom-color":this.options.titleBordercolor});t.find(".popover-content").css({"background-color":this.options.contentBackcolor,color:this.options.contentTextcolor});t.find(".arrow").css("border-"+n+"-color",this.options.bordercolor);t.find(".arrow > .after").css("border-"+n+"-color",this.options.arrowcolor);t.css({"border-color":this.options.bordercolor})};t.prototype.hasContent=function(){return this.getTitle()||this.getContent()};t.prototype.getContent=function(){var t=this.$element,n=this.options;return t.attr("data-content")||(typeof n.content=="function"?n.content.call(t[0]):n.content)};t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};t.prototype.tip=function(){return this.$tip||(this.$tip=n(this.options.template)),this.$tip};i=n.fn.ggpopover;n.fn.ggpopover=r;n.fn.ggpopover.Constructor=t;n.fn.ggpopover.noConflict=function(){return n.fn.ggpopover=i,this}}(jQuery);
/*
//# sourceMappingURL=ggpopover.min.js.map
*/

!function ($) {

  "use strict"; // jshint ;_;

  var ggTooltip = function (element, options) {
      this.init('ggtooltip', element, options)
  }

  ggTooltip.prototype = {
      constructor: ggTooltip,

      init: function (type, element, options) {
          var eventIn, eventOut;

          this.type = type;
          this.$element = $(element);
          this.options = this.getOptions(options);
          this.enabled = true;

          if (this.options.trigger == 'click') {
              this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
          } else if (this.options.trigger != 'manual') {
              eventIn = this.options.trigger == 'hover' ? 'mouseenter' : 'focus';
              eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur';
              this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
              this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));;
          }

          this.options.selector ?
            (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
            this.fixTitle();
      },

      getOptions: function (options) {
          options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data());

          if (options.delay && typeof options.delay == 'number') {
              options.delay = {
                  show: options.delay
              , hide: options.delay
              };
          }

          return options;
      },

      enter: function (e) {
          var self = $(e.currentTarget)[this.type](this._options).data(this.type);

          if (!self.options.delay || !self.options.delay.show) return self.show();

          clearTimeout(this.timeout);
          self.hoverState = 'in';
          this.timeout = setTimeout(function () {
              if (self.hoverState == 'in') self.show();
          }, self.options.delay.show);
      },

      leave: function (e) {
          var self = $(e.currentTarget)[this.type](this._options).data(this.type);

          if (this.timeout) clearTimeout(this.timeout);
          if (!self.options.delay || !self.options.delay.hide) return self.hide();

          self.hoverState = 'out';
          this.timeout = setTimeout(function () {
              if (self.hoverState == 'out') self.hide();
          }, self.options.delay.hide);
      },

      show: function () {
          var $tip
            , inside
            , pos
            , actualWidth
            , actualHeight
            , placement
            , tp;

          if (this.hasContent() && this.enabled) {
              $tip = this.tip();
              this.setContent();

              if (this.options.animation) {
                  $tip.addClass('fade');
              }

              placement = typeof this.options.placement == 'function' ?
                this.options.placement.call(this, $tip[0], this.$element[0]) :
                  this.options.placement;

              inside = /in/.test(placement);

              $tip
                .detach()
                .css({ top: 0, left: 0, display: 'block' })
                .insertAfter(this.$element);

              pos = this.getPosition(inside);

              actualWidth = $tip[0].offsetWidth;
              actualHeight = $tip[0].offsetHeight;

              switch (inside ? placement.split(' ')[1] : placement) {
                  case 'bottom':
                      tp = { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 }
                      break;
                  case 'top':
                      tp = { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 }
                      break;
                  case 'left':
                      tp = { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth }
                      break;
                  case 'right':
                      tp = { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }
                      break;
              }

              $tip
                .offset(tp)
                .addClass(placement)
                .addClass('in');
          }
      },

      setContent: function () {
          var $tip = this.tip(), title = this.getTitle();

          $tip.find('.ggtooltip-inner').css({ 'background': this.options.backcolor, 'color': this.options.textcolor, 'border-color' : this.options.bordercolor  });
          $tip.find('.ggtooltip-arrow').css('border-' + this.options.placement + '-color', this.options.backcolor);
          $tip.find('.ggtooltip-arrow-shadow').css('border-' + this.options.placement + '-color', this.options.bordercolor);
          $tip.find('.ggtooltip-inner')[this.options.html ? 'html' : 'text'](title);
          $tip.removeClass('fade in top bottom left right');
      },

      hide: function () {
          var that = this
            , $tip = this.tip();

          $tip.removeClass('in');

          function removeWithAnimation() {
              var timeout = setTimeout(function () {
                  $tip.off($.support.transition.end).detach();
              }, 500);

              $tip.one($.support.transition.end, function () {
                  clearTimeout(timeout);
                  $tip.detach();
              });
          }

          $.support.transition && this.$tip.hasClass('fade') ?
            removeWithAnimation() :
            $tip.detach();

          return this;
      },

      fixTitle: function () {
          var $e = this.$element;
          if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
              $e.attr('data-original-title', $e.attr('title') || '').removeAttr('title');
          }
      },

      hasContent: function () {
          return this.getTitle();
      },

      getPosition: function (inside) {
          return $.extend({}, (inside ? { top: 0, left: 0 } : this.$element.offset()), {
              width: this.$element[0].offsetWidth
          , height: this.$element[0].offsetHeight
          });
      },

      getTitle: function () {
          var title
            , $e = this.$element
            , o = this.options;

          title = $e.attr('data-original-title')
            || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);

          return title;
      },

      tip: function () {
          return this.$tip = this.$tip || $(this.options.template);
      },

      validate: function () {
          if (!this.$element[0].parentNode) {
              this.hide();
              this.$element = null;
              this.options = null;
          }
      },

      enable: function () {
          this.enabled = true;
      },

      disable: function () {
          this.enabled = false;
      },

      toggleEnabled: function () {
          this.enabled = !this.enabled;
      },

      toggle: function (e) {
          var self = $(e.currentTarget)[this.type](this._options).data(this.type);
          self[self.tip().hasClass('in') ? 'hide' : 'show']();
      },

      destroy: function () {
          this.hide().$element.off('.' + this.type).removeData(this.type);
      }
  }

  var old = $.fn.ggtooltip;

  $.fn.ggtooltip = function (option) {
      return this.each(function () {
          var $this = $(this)
            , data = $this.data('ggtooltip')
            , options = typeof option == 'object' && option
          if (!data) $this.data('ggtooltip', (data = new ggTooltip(this, options)))
          if (typeof option == 'string') data[option]()
      });
  }

  $.fn.ggtooltip.Constructor = ggTooltip;

  $.fn.ggtooltip.defaults = {
      animation: true,
      placement: 'top',
      selector: false,
      template: '<div class="ggtooltip"><div class="ggtooltip-arrow-shadow"></div><div class="ggtooltip-arrow"></div><div class="ggtooltip-inner"></div></div>',
      trigger: 'hover',
      title: '',
      delay: 0,
      html: false,
      backcolor: '#00ffcc',
      textcolor: '#000000',
      bordercolor: '#0066cc'
  }


  $.fn.ggtooltip.noConflict = function () {
      $.fn.ggtooltip = old;
      return this;
  }

}(window.jQuery);
!function(t,e){t.fn.extend({scrollspy:function(n){var a={namespace:"scrollspy",activeClass:"active",animate:!1,offset:0,container:e};n=t.extend({},a,n);var o=function(t,e){return parseInt(t,10)+parseInt(e,10)},r=function(e){for(var n=[],a=0;a<e.length;a++){var o=e[a],r=t(o).attr("href"),f=t(r);if(f.length>0){var s=Math.floor(f.offset().top),i=s+Math.floor(f.outerHeight());n.push({element:f,hash:r,top:s,bottom:i})}}return n},f=function(e,n){for(var a=0;a<e.length;a++){var o=t(e[a]);if(o.attr("href")===n)return o}},s=function(e){for(var a=0;a<e.length;a++){var o=t(e[a]);o.parent().removeClass(n.activeClass)}};return this.each(function(){for(var a=this,i=t(n.container),l=t(a).find("a"),c=0;c<l.length;c++){var h=l[c];t(h).on("click",function(a){var r=t(this).attr("href"),f=t(r);if(f.length>0){var s=o(f.offset().top,n.offset);n.animate?t("html, body").animate({scrollTop:s},1e3):e.scrollTo(0,s),a.preventDefault()}})}var v=r(l);i.bind("scroll."+n.namespace,function(){for(var e,r={top:o(t(this).scrollTop(),Math.abs(n.offset)),left:t(this).scrollLeft()},i=0;i<v.length;i++){var c=v[i];if(r.top>=c.top&&r.top<c.bottom){var h=c.hash;if(e=f(l,h)){n.onChange&&n.onChange(c.element,t(a),r),s(l),e.parent().addClass(n.activeClass);break}}}!e&&n.onExit&&n.onExit(t(a),r)})})}})}(jQuery,window,document,void 0);

(function(d,a){function c(){var b=d.createElement("script");b.async=!0;b.type="text/javascript";b.src=a._settings.messengerUrl;b.crossOrigin="anonymous";var c=d.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}window.kayako=a;a.readyQueue=[];a.newEmbedCode=!0;a.ready=function(b){a.readyQueue.push(b)};a._settings={apiUrl:"https://organic-man.kayako.com/api/v1",messengerUrl:"https://organic-man.kayakocdn.com/messenger",realtimeUrl:"wss://kre.kayako.net/socket"};window.attachEvent?window.attachEvent("onload",c):window.addEventListener("load",c,!1)})(document,window.kayako||{});

// 3 Month Prepay
(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'organic-beard-supply.myshopify.com',
        storefrontAccessToken: '048a2b8ac7ebbafa330efd4f238726e7', // Storefront access tokens are not secret. You can place them in a JavaScript file or any public HTML document. https://help.shopify.com/en/api/reference/access/storefrontaccesstoken#properties
        appId: '6',
      });

      ShopifyBuy.UI.onReady(client).then(function (ui) {
        const $buyButtons = $('.buy-button')

        if ($buyButtons.length) {
          $buyButtons.map(function() {
            createComponent(ui, this);
          })
        } else {
          createComponent(ui);
        }
      })
    }

    function createComponent(ui, element) {
      const $element = $(element),
          variantId = $element.attr('data-variant-id') || 'all',
          productSettings = getProductSettings($element, variantId),
          cartSettings = getCartSettings(),
          toggleSettings = getToggleSettings(),
          moneyFormat = '%24%7B%7Bamount%7D%7D',
          id = [1397481242720];

      ui.createComponent('product', {
        id,
        variantId,
        node: element,
        moneyFormat,
        options: {
          product: productSettings,
          cart: cartSettings,
          toggle: toggleSettings
        }
      })
    }

    function getProductSettings($element, variantId) {
      const buttonText = $element.attr('data-button-text') || 'Buy Now',
            buttonClasses = $element.attr('data-variant-button-class') || 'shopify-buy__btn';
      return {
        iframe: false,
        variantId,
        buttonDestination: "cart",
        contents: {
          img: false,
          imgWithCarousel: false,
          title: false,
          variantTitle: false,
          options: false,
          price: false,
          description: false,
          buttonWithQuantity: false,
          quantity: false
        },
        text: {
          button: buttonText
        },
        classes: {
          button: buttonClasses
        }
      }
    }

    function getCartSettings() {
      return {
        contents: {
          button: true,
        },
        styles: {
          button: {
            "font-family": "BlinkMacSystemFont,-apple-system,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','Helvetica','Arial',sans-serif",
            "background-color": "#159097",
            "border-color": "#159097",
            "outline": "none",
            "transition": "all 0.5s",
            "color": "#ffffff",
            "border-radius": "4px",
            "padding": "22px 40px",
            "border-width": "1px",
            "font-size": "1rem",
            "height": "2.25em",
            "text-transform": "none",
            "line-height": "0",
            ":hover": {
              "background-color": "#e6e6e6",
              "color": "#000000"
            },
            ":focus": {
              "background-color": "#e6e6e6"
            }
          },
          header: {
            "border-bottom": "1px solid #EFF4F7"
          },
          footer: {
            "background-color": "#EFF4F7"
          }
        }
      }
    }

    function getToggleSettings() {
      return {
        styles: {
          toggle: {
            "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
            "background-color": "#159097",
            ":hover": {
              "background-color": "#127b81"
            },
            ":focus": {
              "background-color": "#127b81"
            }
          },
          count: {
            "color": "#ffffff",
            ":hover": {
              "color": "#ffffff"
            },
            "font-size": "1rem"
          },
          iconPath: {
            "fill": "#ffffff"
          }
        }
      }
    } 
  }
)();

(function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.src=o;j.dataset.sumoSiteId='6c86e8a6b50ee3198b375a7ae3c243658f590f24f5852bda74461478fe684159';v.parentNode.insertBefore(j,v)})(window,document,'script','//load.sumo.com/');