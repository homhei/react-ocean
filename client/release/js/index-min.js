!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(3),u=r(o),i=n(61),f=r(i),c=n(67),a=r(c),l=n(42),s=(r(l),n(68)),p=r(s);n(122),(0,f["default"])(p["default"],u["default"].createElement(a["default"],null))},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(35)("wks"),o=n(25),u=n(5).Symbol,i="function"==typeof u,f=t.exports=function(t){return r[t]||(r[t]=i&&u[t]||(i?u:o)("Symbol."+t))};f.store=r},function(t,e){t.exports=React},function(t,e,n){var r=n(5),o=n(1),u=n(27),i=n(17),f="prototype",c=function(t,e,n){var a,l,s,p=t&c.F,d=t&c.G,y=t&c.S,v=t&c.P,h=t&c.B,_=t&c.W,b=d?o:o[e]||(o[e]={}),O=b[f],m=d?r:y?r[e]:(r[e]||{})[f];d&&(n=e);for(a in n)l=!p&&m&&void 0!==m[a],l&&a in b||(s=l?m[a]:n[a],b[a]=d&&"function"!=typeof m[a]?n[a]:h&&l?u(s,r):_&&m[a]==s?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[f]=t[f],e}(s):v&&"function"==typeof s?u(Function.call,s):s,v&&((b.virtual||(b.virtual={}))[a]=s,t&c.R&&O&&!O[a]&&i(O,a,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(12),o=n(47),u=n(37),i=Object.defineProperty;e.f=n(13)?Object.defineProperty:function(t,e,n){if(r(t),e=u(e,!0),r(n),o)try{return i(t,e,n)}catch(f){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports={"default":n(83),__esModule:!0}},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(72),u=r(o);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u["default"])(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(74),u=r(o),i=n(71),f=r(i),c=n(45),a=r(c);e["default"]=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":(0,a["default"])(e)));t.prototype=(0,f["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(u["default"]?(0,u["default"])(t,e):t.__proto__=e)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(45),u=r(o);e["default"]=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":(0,u["default"])(e))&&"function"!=typeof e?t:e}},function(t,e,n){var r=n(20);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(48),o=n(28);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var r=n(6),o=n(22);t.exports=n(13)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(53),o=n(29);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t){if(null==t)return t;var e={},n=(0,b["default"])(t),r=!0,o=!1,u=void 0;try{for(var i,f=(0,h["default"])(n);!(r=(i=f.next()).done);r=!0){var c=i.value;"function"!=typeof t[c]&&(e[c]=t[c])}}catch(a){o=!0,u=a}finally{try{!r&&f["return"]&&f["return"]()}finally{if(o)throw u}}return e}Object.defineProperty(e,"__esModule",{value:!0});var u=n(7),i=r(u),f=n(8),c=r(f),a=n(9),l=r(a),s=n(11),p=r(s),d=n(10),y=r(d),v=n(70),h=r(v),_=n(73),b=r(_),O=n(3),m=(r(O),n(125)),x=r(m),g=function(t){function e(t,n){return(0,c["default"])(this,e),(0,p["default"])(this,(0,i["default"])(e).call(this,t,n))}return(0,y["default"])(e,t),(0,l["default"])(e,[{key:"shouldComponentUpdate",value:function(t,e){var n={props:o(this.props),state:o(this.state)};return(0,x["default"])(n,o(t),o(e))}}]),e}(O.Component);e["default"]=g},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(28);t.exports=function(t){return Object(r(t))}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(88);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports=!0},function(t,e,n){var r=n(12),o=n(104),u=n(29),i=n(34)("IE_PROTO"),f=function(){},c="prototype",a=function(){var t,e=n(46)("iframe"),r=u.length,o=">";for(e.style.display="none",n(94).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),a=t.F;r--;)delete a[c][u[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(f[c]=r(t),n=new f,f[c]=null,n[i]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(6).f,o=n(14),u=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,u)&&r(t,u,{configurable:!0,value:e})}},function(t,e,n){var r=n(35)("keys"),o=n(25);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(5),o="__core-js_shared__",u=r[o]||(r[o]={});t.exports=function(t){return u[t]||(u[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(20);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(5),o=n(1),u=n(30),i=n(39),f=n(6).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=u?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||f(e,t,{value:i.f(t)})}},function(t,e,n){e.f=n(2)},function(t,e,n){"use strict";var r=n(107)(!0);n(49)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e){"use strict";function n(t){return{type:u,text:t}}function r(t){return{type:i,index:t}}function o(t){return{type:f,filter:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.addTodo=n,e.completeTodo=r,e.setVisibilityFilter=o;var u=e.ADD_TODO="ADD_TODO",i=e.COMPLETE_TODO="COMPLETE_TODO",f=e.SET_VISIBILITY_FILTER="SET_VISIBILITY_FILTER";e.VisibilityFilters={SHOW_ALL:"SHOW_ALL",SHOW_COMPLETED:"SHOW_COMPLETED",SHOW_ACTIVE:"SHOW_ACTIVE"}},function(t,e,n){(function(t){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){var n=s(e,t);return n}Object.defineProperty(e,"__esModule",{value:!0});var u=n(44),i=r(u);e["default"]=o;var f=n(60),c=n(128),a=r(c),l=function(){var e=(0,f.applyMiddleware)(a["default"]);t.browser;var n=[e];return t.browser,n},s=f.compose.apply(void 0,(0,i["default"])(l()))(f.createStore)}).call(e,n(124))},function(t,e,n){t.exports={"default":n(80),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(69),u=r(o);e["default"]=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,u["default"])(t)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(76),u=r(o),i=n(75),f=r(i),c="function"==typeof f["default"]&&"symbol"==typeof u["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":typeof t};e["default"]="function"==typeof f["default"]&&"symbol"===c(u["default"])?function(t){return"undefined"==typeof t?"undefined":c(t)}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":"undefined"==typeof t?"undefined":c(t)}},function(t,e,n){var r=n(20),o=n(5).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,e,n){t.exports=!n(13)&&!n(16)(function(){return 7!=Object.defineProperty(n(46)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(26);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var r=n(30),o=n(4),u=n(55),i=n(17),f=n(14),c=n(21),a=n(98),l=n(33),s=n(52),p=n(2)("iterator"),d=!([].keys&&"next"in[].keys()),y="@@iterator",v="keys",h="values",_=function(){return this};t.exports=function(t,e,n,b,O,m,x){a(n,e,b);var g,T,S,w=function(t){if(!d&&t in M)return M[t];switch(t){case v:return function(){return new n(this,t)};case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},E=e+" Iterator",P=O==h,j=!1,M=t.prototype,k=M[p]||M[y]||O&&M[O],A=k||w(O),C=O?P?w("entries"):A:void 0,F="Array"==e?M.entries||k:k;if(F&&(S=s(F.call(new t)),S!==Object.prototype&&(l(S,E,!0),r||f(S,p)||i(S,p,_))),P&&k&&k.name!==h&&(j=!0,A=function(){return k.call(this)}),r&&!x||!d&&!j&&M[p]||i(M,p,A),c[e]=A,c[E]=_,O)if(g={values:P?A:w(h),keys:m?A:w(v),entries:C},x)for(T in g)T in M||u(M,T,g[T]);else o(o.P+o.F*(d||j),e,g);return g}},function(t,e,n){var r=n(24),o=n(22),u=n(15),i=n(37),f=n(14),c=n(47),a=Object.getOwnPropertyDescriptor;e.f=n(13)?a:function(t,e){if(t=u(t),e=i(e,!0),c)try{return a(t,e)}catch(n){}return f(t,e)?o(!r.f.call(t,e),t[e]):void 0}},function(t,e,n){var r=n(53),o=n(29).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(14),o=n(23),u=n(34)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,e,n){var r=n(14),o=n(15),u=n(90)(!1),i=n(34)("IE_PROTO");t.exports=function(t,e){var n,f=o(t),c=0,a=[];for(n in f)n!=i&&r(f,n)&&a.push(n);for(;e.length>c;)r(f,n=e[c++])&&(~u(a,n)||a.push(n));return a}},function(t,e,n){var r=n(4),o=n(1),u=n(16);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*u(function(){n(1)}),"Object",i)}},function(t,e,n){t.exports=n(17)},function(t,e,n){var r=n(36),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(91),o=n(2)("iterator"),u=n(21);t.exports=n(1).getIteratorMethod=function(t){return void 0!=t?t[o]||t["@@iterator"]||u[r(t)]:void 0}},function(t,e,n){n(111);for(var r=n(5),o=n(17),u=n(21),i=n(2)("toStringTag"),f=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;5>c;c++){var a=f[c],l=r[a],s=l&&l.prototype;s&&!s[i]&&o(s,i,a),u[a]=u.Array}},function(t,e){t.exports=ReactRedux},function(t,e){t.exports=Redux},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){var n=(0,y["default"])(window.__INITIAL_STATE__,t);(0,f.render)(i["default"].createElement(c.Provider,{store:n},i["default"].createElement(p["default"],null,e)),document.getElementById("page")),l["default"].attach(document.body)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o;var u=n(3),i=r(u),f=n(127),c=n(59),a=n(126),l=r(a),s=n(62),p=r(s),d=n(42),y=r(d)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),u=r(o),i=n(8),f=r(i),c=n(9),a=r(c),l=n(11),s=r(l),p=n(10),d=r(p),y=n(3),v=r(y),h=function(t){function e(t,n){return(0,f["default"])(this,e),(0,s["default"])(this,(0,u["default"])(e).call(this,t,n))}return(0,d["default"])(e,t),(0,a["default"])(e,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return v["default"].createElement("div",null,this.props.children)}}]),e}(y.Component);e["default"]=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),u=r(o),i=n(8),f=r(i),c=n(9),a=r(c),l=n(11),s=r(l),p=n(10),d=r(p),y=n(3),v=r(y),h=n(19),_=r(h),b=function(t){function e(t,n){return(0,f["default"])(this,e),(0,s["default"])(this,(0,u["default"])(e).call(this,t,n))}return(0,d["default"])(e,t),(0,a["default"])(e,[{key:"render",value:function(){var t=this;return v["default"].createElement("div",null,v["default"].createElement("input",{type:"text",ref:"input"}),v["default"].createElement("button",{onClick:function(e){return t.handleClick(e)}},"Add"))}},{key:"handleClick",value:function(t){var e=this.refs.input,n=e.value.trim();this.props.onAddClick(n),e.value=""}}]),e}(_["default"]);e["default"]=b,b.propTypes={onAddClick:y.PropTypes.func.isRequired}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),u=r(o),i=n(8),f=r(i),c=n(9),a=r(c),l=n(11),s=r(l),p=n(10),d=r(p),y=n(3),v=r(y),h=n(19),_=r(h),b=function(t){function e(t,n){return(0,f["default"])(this,e),(0,s["default"])(this,(0,u["default"])(e).call(this,t,n))}return(0,d["default"])(e,t),(0,a["default"])(e,[{key:"renderFilter",value:function(t,e){var n=this;return t===this.props.filter?e:v["default"].createElement("a",{href:"#",onClick:function(e){e.preventDefault(),n.props.onFilterChange(t)}},e)}},{key:"render",value:function(){return v["default"].createElement("p",null,"Show:"," ",this.renderFilter("SHOW_ALL","All"),", ",this.renderFilter("SHOW_COMPLETED","Completed"),", ",this.renderFilter("SHOW_ACTIVE","Active"),".")}}]),e}(_["default"]);e["default"]=b,b.propTypes={onFilterChange:y.PropTypes.func.isRequired,filter:y.PropTypes.oneOf(["SHOW_ALL","SHOW_COMPLETED","SHOW_ACTIVE"]).isRequired}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),u=r(o),i=n(8),f=r(i),c=n(9),a=r(c),l=n(11),s=r(l),p=n(10),d=r(p),y=n(3),v=r(y),h=n(19),_=r(h),b=function(t){function e(t,n){return(0,f["default"])(this,e),(0,s["default"])(this,(0,u["default"])(e).call(this,t,n))}return(0,d["default"])(e,t),(0,a["default"])(e,[{key:"render",value:function(){return v["default"].createElement("li",{onClick:this.props.onClick,style:{textDecoration:this.props.completed?"line-through":"none",cursor:this.props.completed?"default":"pointer"}},this.props.text)}}]),e}(_["default"]);e["default"]=b,b.propTypes={onClick:y.PropTypes.func.isRequired,text:y.PropTypes.string.isRequired,completed:y.PropTypes.bool.isRequired}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(77),u=r(o),i=n(7),f=r(i),c=n(8),a=r(c),l=n(9),s=r(l),p=n(11),d=r(p),y=n(10),v=r(y),h=n(3),_=r(h),b=n(65),O=r(b),m=n(19),x=r(m),g=function(t){function e(t,n){return(0,a["default"])(this,e),(0,d["default"])(this,(0,f["default"])(e).call(this,t,n))}return(0,v["default"])(e,t),(0,s["default"])(e,[{key:"render",value:function(){var t=this;return _["default"].createElement("ul",null,this.props.todos.map(function(e,n){return _["default"].createElement(O["default"],(0,u["default"])({},e,{key:n,onClick:function(){return t.props.onTodoClick(n)}}))}))}}]),e}(x["default"]);e["default"]=g,g.propTypes={onTodoClick:h.PropTypes.func.isRequired,todos:h.PropTypes.arrayOf(h.PropTypes.shape({text:h.PropTypes.string.isRequired,completed:h.PropTypes.bool.isRequired}).isRequired).isRequired}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){switch(e){case x.VisibilityFilters.SHOW_ALL:return t;case x.VisibilityFilters.SHOW_COMPLETED:return t.filter(function(t){return t.completed});case x.VisibilityFilters.SHOW_ACTIVE:return t.filter(function(t){return!t.completed})}}function u(t){return{visibleTodos:o(t.todos,t.visibilityFilter),visibilityFilter:t.visibilityFilter}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),f=r(i),c=n(8),a=r(c),l=n(9),s=r(l),p=n(11),d=r(p),y=n(10),v=r(y),h=n(3),_=r(h),b=n(59),O=n(19),m=r(O),x=n(41),g=n(63),T=r(g),S=n(66),w=r(S),E=n(64),P=r(E),j=function(t){function e(t,n){return(0,a["default"])(this,e),(0,d["default"])(this,(0,f["default"])(e).call(this,t,n))}return(0,v["default"])(e,t),(0,s["default"])(e,[{key:"render",value:function(){var t=this.props,e=t.dispatch,n=t.visibleTodos,r=t.visibilityFilter;return _["default"].createElement("div",null,_["default"].createElement(T["default"],{onAddClick:function(t){return e((0,x.addTodo)(t))}}),_["default"].createElement(w["default"],{todos:n,onTodoClick:function(t){return e((0,x.completeTodo)(t))}}),_["default"].createElement(P["default"],{filter:r,onFilterChange:function(t){return e((0,x.setVisibilityFilter)(t))}}))}}]),e}(m["default"]);j.propTypes={visibleTodos:h.PropTypes.arrayOf(h.PropTypes.shape({text:h.PropTypes.string.isRequired,completed:h.PropTypes.bool.isRequired}).isRequired).isRequired,visibilityFilter:h.PropTypes.oneOf(["SHOW_ALL","SHOW_COMPLETED","SHOW_ACTIVE"]).isRequired},e["default"]=(0,b.connect)(u)(j)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){var t=arguments.length<=0||void 0===arguments[0]?p:arguments[0],e=arguments[1];switch(e.type){case s.SET_VISIBILITY_FILTER:return e.filter;default:return t}}function u(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],e=arguments[1];switch(e.type){case s.ADD_TODO:return[].concat((0,a["default"])(t),[{text:e.text,completed:!1}]);case s.COMPLETE_TODO:return[].concat((0,a["default"])(t.slice(0,e.index)),[(0,f["default"])({},t[e.index],{completed:!0})],(0,a["default"])(t.slice(e.index+1)));default:return t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(43),f=r(i),c=n(44),a=r(c),l=n(60),s=n(41),p=s.VisibilityFilters.SHOW_ALL,d=(0,l.combineReducers)({visibilityFilter:o,todos:u});e["default"]=d},function(t,e,n){t.exports={"default":n(78),__esModule:!0}},function(t,e,n){t.exports={"default":n(79),__esModule:!0}},function(t,e,n){t.exports={"default":n(81),__esModule:!0}},function(t,e,n){t.exports={"default":n(82),__esModule:!0}},function(t,e,n){t.exports={"default":n(84),__esModule:!0}},function(t,e,n){t.exports={"default":n(85),__esModule:!0}},function(t,e,n){t.exports={"default":n(86),__esModule:!0}},function(t,e,n){t.exports={"default":n(87),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(43),u=r(o);e["default"]=u["default"]||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){n(40),n(110),t.exports=n(1).Array.from},function(t,e,n){n(58),n(40),t.exports=n(109)},function(t,e,n){n(112),t.exports=n(1).Object.assign},function(t,e,n){n(113);var r=n(1).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){n(114);var r=n(1).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(115),t.exports=n(1).Object.getPrototypeOf},function(t,e,n){n(116),t.exports=n(1).Object.keys},function(t,e,n){n(117),t.exports=n(1).Object.setPrototypeOf},function(t,e,n){n(119),n(118),n(120),n(121),t.exports=n(1).Symbol},function(t,e,n){n(40),n(58),t.exports=n(39).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(15),o=n(56),u=n(108);t.exports=function(t){return function(e,n,i){var f,c=r(e),a=o(c.length),l=u(i,a);if(t&&n!=n){for(;a>l;)if(f=c[l++],f!=f)return!0}else for(;a>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(26),o=n(2)("toStringTag"),u="Arguments"==r(function(){return arguments}()),i=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,f;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=i(e=Object(t),o))?n:u?r(e):"Object"==(f=r(e))&&"function"==typeof e.callee?"Arguments":f}},function(t,e,n){"use strict";var r=n(6),o=n(22);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){var r=n(18),o=n(32),u=n(24);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var i,f=n(t),c=u.f,a=0;f.length>a;)c.call(t,i=f[a++])&&e.push(i);return e}},function(t,e,n){t.exports=n(5).document&&document.documentElement},function(t,e,n){var r=n(21),o=n(2)("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||u[o]===t)}},function(t,e,n){var r=n(26);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(12);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(u){var i=t["return"];throw void 0!==i&&r(i.call(t)),u}}},function(t,e,n){"use strict";var r=n(31),o=n(22),u=n(33),i={};n(17)(i,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(i,{next:o(1,n)}),u(t,e+" Iterator")}},function(t,e,n){var r=n(2)("iterator"),o=!1;try{var u=[7][r]();u["return"]=function(){o=!0},Array.from(u,function(){throw 2})}catch(i){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var u=[7],i=u[r]();i.next=function(){return{done:n=!0}},u[r]=function(){return i},t(u)}catch(f){}return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(18),o=n(15);t.exports=function(t,e){for(var n,u=o(t),i=r(u),f=i.length,c=0;f>c;)if(u[n=i[c++]]===e)return n}},function(t,e,n){var r=n(25)("meta"),o=n(20),u=n(14),i=n(6).f,f=0,c=Object.isExtensible||function(){return!0},a=!n(16)(function(){return c(Object.preventExtensions({}))}),l=function(t){i(t,r,{value:{i:"O"+ ++f,w:{}}})},s=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!u(t,r)){if(!c(t))return"F";if(!e)return"E";l(t)}return t[r].i},p=function(t,e){if(!u(t,r)){if(!c(t))return!0;if(!e)return!1;l(t)}return t[r].w},d=function(t){return a&&y.NEED&&c(t)&&!u(t,r)&&l(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:s,getWeak:p,onFreeze:d}},function(t,e,n){"use strict";var r=n(18),o=n(32),u=n(24),i=n(23),f=n(48),c=Object.assign;t.exports=!c||n(16)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=i(t),c=arguments.length,a=1,l=o.f,s=u.f;c>a;)for(var p,d=f(arguments[a++]),y=l?r(d).concat(l(d)):r(d),v=y.length,h=0;v>h;)s.call(d,p=y[h++])&&(n[p]=d[p]);return n}:c},function(t,e,n){var r=n(6),o=n(12),u=n(18);t.exports=n(13)?Object.defineProperties:function(t,e){o(t);for(var n,i=u(e),f=i.length,c=0;f>c;)r.f(t,n=i[c++],e[n]);return t}},function(t,e,n){var r=n(15),o=n(51).f,u={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==u.call(t)?f(t):o(r(t))}},function(t,e,n){var r=n(20),o=n(12),u=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(27)(Function.call,n(50).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return u(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:u}},function(t,e,n){var r=n(36),o=n(28);t.exports=function(t){return function(e,n){var u,i,f=String(o(e)),c=r(n),a=f.length;return 0>c||c>=a?t?"":void 0:(u=f.charCodeAt(c),55296>u||u>56319||c+1===a||(i=f.charCodeAt(c+1))<56320||i>57343?t?f.charAt(c):u:t?f.slice(c,c+2):(u-55296<<10)+(i-56320)+65536)}}},function(t,e,n){var r=n(36),o=Math.max,u=Math.min;t.exports=function(t,e){return t=r(t),0>t?o(t+e,0):u(t,e)}},function(t,e,n){var r=n(12),o=n(57);t.exports=n(1).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){"use strict";var r=n(27),o=n(4),u=n(23),i=n(97),f=n(95),c=n(56),a=n(92),l=n(57);o(o.S+o.F*!n(99)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,s,p=u(t),d="function"==typeof this?this:Array,y=arguments.length,v=y>1?arguments[1]:void 0,h=void 0!==v,_=0,b=l(p);if(h&&(v=r(v,y>2?arguments[2]:void 0,2)),void 0==b||d==Array&&f(b))for(e=c(p.length),n=new d(e);e>_;_++)a(n,_,h?v(p[_],_):p[_]);else for(s=b.call(p),n=new d;!(o=s.next()).done;_++)a(n,_,h?i(s,v,[o.value,_],!0):o.value);return n.length=_,n}})},function(t,e,n){"use strict";var r=n(89),o=n(100),u=n(21),i=n(15);t.exports=n(49)(Array,"Array",function(t,e){this._t=i(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),u.Arguments=u.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(4);r(r.S+r.F,"Object",{assign:n(103)})},function(t,e,n){var r=n(4);r(r.S,"Object",{create:n(31)})},function(t,e,n){var r=n(4);r(r.S+r.F*!n(13),"Object",{defineProperty:n(6).f})},function(t,e,n){var r=n(23),o=n(52);n(54)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(23),o=n(18);n(54)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(4);r(r.S,"Object",{setPrototypeOf:n(106).set})},function(t,e){},function(t,e,n){"use strict";var r=n(5),o=n(14),u=n(13),i=n(4),f=n(55),c=n(102).KEY,a=n(16),l=n(35),s=n(33),p=n(25),d=n(2),y=n(39),v=n(38),h=n(101),_=n(93),b=n(96),O=n(12),m=n(15),x=n(37),g=n(22),T=n(31),S=n(105),w=n(50),E=n(6),P=n(18),j=w.f,M=E.f,k=S.f,A=r.Symbol,C=r.JSON,F=C&&C.stringify,I="prototype",L=d("_hidden"),R=d("toPrimitive"),D={}.propertyIsEnumerable,W=l("symbol-registry"),H=l("symbols"),q=l("op-symbols"),V=Object[I],N="function"==typeof A,B=r.QObject,U=!B||!B[I]||!B[I].findChild,Y=u&&a(function(){return 7!=T(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=j(V,e);r&&delete V[e],M(t,e,n),r&&t!==V&&M(V,e,r)}:M,J=function(t){var e=H[t]=T(A[I]);return e._k=t,e},G=N&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},K=function(t,e,n){return t===V&&K(q,e,n),O(t),e=x(e,!0),O(n),o(H,e)?(n.enumerable?(o(t,L)&&t[L][e]&&(t[L][e]=!1),n=T(n,{enumerable:g(0,!1)})):(o(t,L)||M(t,L,g(1,{})),t[L][e]=!0),Y(t,e,n)):M(t,e,n)},z=function(t,e){O(t);for(var n,r=_(e=m(e)),o=0,u=r.length;u>o;)K(t,n=r[o++],e[n]);return t},Q=function(t,e){return void 0===e?T(t):z(T(t),e)},X=function(t){var e=D.call(this,t=x(t,!0));return this===V&&o(H,t)&&!o(q,t)?!1:e||!o(this,t)||!o(H,t)||o(this,L)&&this[L][t]?e:!0},Z=function(t,e){if(t=m(t),e=x(e,!0),t!==V||!o(H,e)||o(q,e)){var n=j(t,e);return!n||!o(H,e)||o(t,L)&&t[L][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=k(m(t)),r=[],u=0;n.length>u;)o(H,e=n[u++])||e==L||e==c||r.push(e);return r},tt=function(t){for(var e,n=t===V,r=k(n?q:m(t)),u=[],i=0;r.length>i;)o(H,e=r[i++])&&(n?o(V,e):!0)&&u.push(H[e]);return u};N||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===V&&e.call(q,n),o(this,L)&&o(this[L],t)&&(this[L][t]=!1),Y(this,t,g(1,n))};return u&&U&&Y(V,t,{configurable:!0,set:e}),J(t)},f(A[I],"toString",function(){return this._k}),w.f=Z,E.f=K,n(51).f=S.f=$,n(24).f=X,n(32).f=tt,u&&!n(30)&&f(V,"propertyIsEnumerable",X,!0),y.f=function(t){return J(d(t))}),i(i.G+i.W+i.F*!N,{Symbol:A});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)d(et[nt++]);for(var et=P(d.store),nt=0;et.length>nt;)v(et[nt++]);i(i.S+i.F*!N,"Symbol",{"for":function(t){return o(W,t+="")?W[t]:W[t]=A(t)},keyFor:function(t){if(G(t))return h(W,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){U=!0},useSimple:function(){U=!1}}),i(i.S+i.F*!N,"Object",{create:Q,defineProperty:K,defineProperties:z,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt}),C&&i(i.S+i.F*(!N||a(function(){var t=A();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!G(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&b(e)||(e=function(t,e){return n&&(e=n.call(this,t,e)),G(e)?void 0:e}),r[1]=e,F.apply(C,r)}}}),A[I][R]||n(17)(A[I],R,A[I].valueOf),s(A,"Symbol"),s(Math,"Math",!0),s(r.JSON,"JSON",!0)},function(t,e,n){n(38)("asyncIterator")},function(t,e,n){n(38)("observable")},function(t,e){},function(t,e){"use strict";function n(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}function r(t,e){if(n(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var r=Object.keys(t),u=Object.keys(e);if(r.length!==u.length)return!1;for(var i=0;i<r.length;i++)if(!o.call(e,r[i])||!n(t[r[i]],e[r[i]]))return!1;return!0}var o=Object.prototype.hasOwnProperty;t.exports=r},function(t,e){function n(){a&&i&&(a=!1,i.length?c=i.concat(c):l=-1,c.length&&r())}function r(){if(!a){var t=setTimeout(n);a=!0;for(var e=c.length;e;){for(i=c,c=[];++l<e;)i&&i[l].run();l=-1,e=c.length}i=null,a=!1,clearTimeout(t)}}function o(t,e){this.fun=t,this.array=e}function u(){}var i,f=t.exports={},c=[],a=!1,l=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new o(t,e)),1!==c.length||a||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,n){"use strict";function r(t,e,n){return!o(t.props,e)||!o(t.state,n)}var o=n(123);t.exports=r},function(t,e){t.exports=Fastclick},function(t,e){t.exports=ReactDOM},function(t,e){t.exports=ReduxThunk}]);