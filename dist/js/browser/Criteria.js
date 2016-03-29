(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(t){"use strict";var e=require("./lib/getProperty.js").getProperty,n=require("./lib/Condition.js").Condition,r=require("./lib/evaluation.js").evaluation,i=function(){this._conditionAnd=[],this._conditionOr=[],this._not_flg=!1};i._JS_OPERATOR={eq:"===",ne:"!==",lt:"<",le:"<=",gt:">",ge:">="},i.prototype.addAnd=function(t){this._conditionAnd[this._conditionAnd.length]=t},i.prototype.addOr=function(t){this._conditionOr[this._conditionOr.length]=t},i.prototype.and=function(t){var e=typeof t;if("string"===e||t instanceof String||"number"===e||t instanceof Number)return r("and",t,this);if(t instanceof i)return this.addAnd(new n("","",[],"",t)),this;throw new Error("invalid type of argument. ("+e+")")},i.prototype.or=function(t){var e=typeof t;if("string"===e||"number"===e)return r("or",t,this);if(t instanceof i)return this.addOr(new n("","",[],"",t)),this;throw new Error("invalid type of argument. ("+e+")")},i.prototype.not=function(){return this._not_flg=!this._not_flg,this},i.parse=function(t){var e=new i,n="";for(n in t.and)e.addAnd(t.and[n]);for(n in t.or)e.andOr(t.or[n]);return t.not&&e.not(),e},i.prototype.match=function(t){var n=0,r=0,o="",s="",a=[],c="",f=null,h=null,_=!1,d=null,p=null;for(n=0,r=this._conditionAnd.length;r>n;n+=1)if(d=this._conditionAnd[n],d.criteria instanceof i){if(_=d.criteria.match(t),!_)break}else if(o=d.left_key,s=d.operator,a=d.right_key,c=d.key_type,f=e(t,o),"value"===c?h=a:"key"===c&&(p=e(t,a[0]),h=Array.isArray(p)?p:[p]),_=void 0===h||~h.indexOf(void 0)||void 0===f?!1:this._compare(f,s,h),!_)break;if(_)return!!(!0^this._not_flg);for(n=0,r=this._conditionOr.length;r>n;n+=1)if(d=this._conditionOr[n],d.criteria instanceof i){if(_=d.criteria.match(t))return!!(!0^this._not_flg)}else if(o=d.left_key,s=d.operator,a=d.right_key,c=d.key_type,f=e(t,o),"value"===c?h=a:"key"===c&&(p=e(t,a),h=Array.isArray(p)?p:[p]),_=~h.indexOf(void 0)||"undefined"==typeof f?!1:this._compare(f,s,h))return!!(!0^this._not_flg);return!!(!1^this._not_flg)},i.prototype._compare=function(t,e,n){var r=!1;switch(e){case"eq":r=n[0]===t;break;case"ne":r=n[0]!==t;break;case"lt":r=n[0]>t;break;case"le":r=n[0]>=t;break;case"gt":r=n[0]<t;break;case"ge":r=n[0]<=t;break;case"in":r=!!~n.indexOf(t);break;case"not_in":r=!~n.indexOf(t);break;case"between":r=n[0]<=t&&n[1]>=t;break;case"not_between":r=n[0]>t||n[1]<t}return r},i.prototype.matcher=function(){return new Function("$","return "+this.createMatchingExpression())},i.prototype.createMatchingExpression=function(){var t=0,e=0,n=[],r=[],o="",s="",a=null,c="";for(t=0,e=this._conditionAnd.length;e>t;t+=1)a=this._conditionAnd[t],n[n.length]=a.criteria instanceof i?"("+a.criteria.createMatchingExpression()+")":"("+this._createJsExpressionOfKeyIsUndefined(a.left_key)+" && "+("key"===a.key_type?this._createJsExpressionOfKeyIsUndefined(a.right_key[0])+" && ":"")+this._createJsExpression(a)+")";for(t=0,e=this._conditionOr.length;e>t;t+=1)a=this._conditionOr[t],r[r.length]=a.criteria instanceof i?"("+a.criteria.createMatchingExpression()+")":"("+this._createJsExpressionOfKeyIsUndefined(a.left_key)+" && "+this._createJsExpression(a)+")";return o=n.join(" && "),s=r.join(" || "),o&&s?c=o+" || "+s+" ":s?o||(c=s):c=o,this._not_flg&&(c="!("+c+")"),c},i.prototype._createJsExpression=function(t){var e="$."+t.left_key,n=t.operator,r=t.right_key,o=t.key_type,s=i._JS_OPERATOR[n];return s?e+" "+s+" "+this._toStringExpressionFromValue(r[0],o):"in"===n?"value"===o?"!!~"+this._toStringExpressionFromArray(r)+".indexOf("+e+")":"(Array.isArray($."+r[0]+") ? !!~$."+r[0]+".indexOf("+e+"): $."+r[0]+" === "+e+")":"not_in"===n?"value"===o?"!~"+this._toStringExpressionFromArray(r)+".indexOf("+e+")":"(Array.isArray($."+r[0]+") ? !~$."+r[0]+".indexOf("+e+"): $."+r[0]+" !== "+e+")":"between"===n?e+" >= "+this._toStringExpressionFromValue(r[0],o)+" && "+e+" <= "+this._toStringExpressionFromValue(r[1],o):"not_between"===n?e+" < "+this._toStringExpressionFromValue(r[0],o)+" || "+e+" > "+this._toStringExpressionFromValue(r[1],o):null},i.prototype._createJsExpressionOfKeyIsUndefined=function(t){for(var e=t.split("."),n=[],r=[],i=0,o=e.length;o>i;i+=1)n[n.length]=e[i],r[r.length]="$."+n.join(".")+" !== void 0";return r.join(" && ")},i.prototype._toStringExpressionFromArray=function(t){for(var e=[],n=0,r=t.length;r>n;n+=1)e[e.length]=this._toStringExpressionFromValue(t[n],"value");return"["+e.join(", ")+"]"},i.prototype._toStringExpressionFromValue=function(t,e){return"value"===e&&("string"==typeof t||t instanceof String)?'"'+t+'"':"key"===e?"$."+t:t+""},t.Criteria=i}((0,eval)("this").window||this);
},{"./lib/Condition.js":2,"./lib/evaluation.js":3,"./lib/getProperty.js":4}],2:[function(require,module,exports){
!function(e){"use strict";var t=function(e,t,r,i,h){this.left_key=e,this.operator=t,this.right_key=Array.isArray(r)||void 0===r||null===r?r:[r],this.key_type=i,this.criteria=h};t.prototype.clone=function(){return new t(this.left_key,this.operator,this.right_key.concat(),this.key_type,this.criteria)},t.prototype.not=function(){switch(this.operator){case"eq":this.operator="ne";break;case"ne":this.operator="eq";break;case"lt":this.operator="ge";break;case"le":this.operator="gt";break;case"gt":this.operator="le";break;case"ge":this.operator="lt";break;case"in":this.operator="not_in";break;case"not_in":this.operator="in";break;case"between":this.operator="not_between";break;case"not_between":this.operator="between";break;case"match":this.operator="not_match";break;case"not_match":this.operator="match"}return this},t.prototype.normalize=function(){var e=[],r=0,i=0;if("value"===this.key_type)switch(this.operator){case"in":for(r=0,i=this.right_key.length;i>r;r+=1)e[e.length]=new t(this.left_key,"eq",[this.right_key[r]],this.key_type,null);break;case"not_in":for(r=0,i=this.right_key.length;i>r;r+=1)e[e.length]=new t(this.left_key,"ne",[this.right_key[r]],this.key_type,null);break;case"between":e[e.length]=new t(this.left_key,"ge",[this.right_key[0]],this.key_type,null),e[e.length]=new t(this.left_key,"le",[this.right_key[1]],this.key_type,null);break;case"not_between":e[e.length]=new t(this.left_key,"lt",[this.right_key[0]],this.key_type,null),e[e.length]=new t(this.left_key,"gt",[this.right_key[1]],this.key_type,null);break;default:e[e.length]=this.clone()}else e[e.length]=this.clone();return e},t.prototype.compareTo=function(e){if(this.criteria&&!e.criteria)return 1;if(!this.criteria&&e.criteria)return-1;if(this.criteria&&e.criteria)return this.criteria.compareTo(e.criteria);if(this.left_key>e.left_key)return 1;if(this.left_key<e.left_key)return-1;if(this.operator>e.operator)return 1;if(this.operator<e.operator)return-1;if(this.key_type>e.key_type)return 1;if(this.key_type<e.key_type)return-1;for(var t=0,r=this.right_key.length;r>t;t+=1){if(this.right_key[t]>e.right_key[t])return 1;if(this.right_key[t]<e.right_key[t])return-1}return 0},e.Condition=t}(this);
},{}],3:[function(require,module,exports){
!function(e){"use strict";var n=require("./Condition.js").Condition,t=function(e,n,t){return{eq:{key:function(r){return u(t,e,"eq",n,"key",[r]),t},value:function(r){return u(t,e,"eq",n,"value",[r]),t}},ne:{key:function(r){return u(t,e,"ne",n,"key",[r]),t},value:function(r){return u(t,e,"ne",n,"value",[r]),t}},lt:{key:function(r){return u(t,e,"lt",n,"key",[r]),t},value:function(r){return u(t,e,"lt",n,"value",[r]),t}},le:{key:function(r){return u(t,e,"le",n,"key",[r]),t},value:function(r){return u(t,e,"le",n,"value",[r]),t}},gt:{key:function(r){return u(t,e,"gt",n,"key",[r]),t},value:function(r){return u(t,e,"gt",n,"value",[r]),t}},ge:{key:function(r){return u(t,e,"ge",n,"key",[r]),t},value:function(r){return u(t,e,"ge",n,"value",[r]),t}},"in":{key:function(){return u(t,e,"in",n,"key",[].slice.apply(arguments)),t},value:function(){return u(t,e,"in",n,"value",[].slice.apply(arguments)),t}},not_in:{key:function(){return u(t,e,"not_in",n,"key",[].slice.apply(arguments)),t},value:function(){return u(t,e,"not_in",n,"value",[].slice.apply(arguments)),t}},between:function(r,i){return u(t,e,"between",n,"value",[r,i]),t},not_between:function(r,i){return u(t,e,"not_between",n,"value",[r,i]),t},match:function(r){var i=r instanceof RegExp?r:null===r?null:void 0===r?void 0:""===r?"":new RegExp(r);return u(t,e,"match",n,"value",[i]),t},not_match:function(r){var i=r instanceof RegExp?r:null===r?null:void 0===r?void 0:""===r?"":new RegExp(r);return u(t,e,"not_match",n,"value",[i]),t}}},u=function(e,t,u,r,i,o){if("and"===t.toLowerCase())e.addAnd(new n(r,u,o,i,null));else{if("or"!==t.toLowerCase())throw new Error("invalid type: "+t+"(at key_name:"+r+", key_type: "+i+", operator:"+u+")");e.addOr(new n(r,u,o,i,null))}};e.evaluation=t}(this);
},{"./Condition.js":2}],4:[function(require,module,exports){
!function(t){"use strict";var n=function(t,n){for(var r=n.split("."),e=t,i=0,f=r.length;f>i;i+=1){if("string"==typeof e||e instanceof String||"number"==typeof e||e instanceof Number)return;if(!(r[i]in e))return;e=e[r[i]]}return e};t.getProperty=n}(this);
},{}]},{},[1])