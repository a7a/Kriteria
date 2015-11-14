!function(t){"use strict";var e=require("./lib/getProperty.js").getProperty,n=require("./lib/Condition.js").Condition,i=require("./lib/evaluation.js").evaluation,r=function(){this._conditionAnd=[],this._conditionOr=[],this._not_flg=!1};r._name_="Kriteria",r.prototype.getConditionAnd=function(){return this._conditionAnd},r.prototype.getConditionOr=function(){return this._conditionOr},r._JS_OPERATOR={eq:"===",ne:"!==",lt:"<",le:"<=",gt:">",ge:">="},r.prototype.addAnd=function(t){this._conditionAnd[this._conditionAnd.length]=t},r.prototype.addOr=function(t){this._conditionOr[this._conditionOr.length]=t},r.prototype.and=function(t){var e=typeof t,o=null;if("string"===e||t instanceof String||"number"===e||t instanceof Number)return i("and",t,this);if(t instanceof r)return o=t,this.addAnd(new n("","",[],"",o)),this;if("function"==typeof t)return o=new r,t(o),this.addAnd(new n("","",[],"",o)),this;throw new Error("invalid type of argument. ("+e+")")},r.prototype.or=function(t){var e=typeof t,o=null;if("string"===e||t instanceof String||"number"===e||t instanceof Number)return i("or",t,this);if(t instanceof r)return o=t,this.addOr(new n("","",[],"",o)),this;if("function"==typeof t)return o=new r,t(o),this.addOr(new n("","",[],"",o)),this;throw new Error("invalid type of argument. ("+e+")")},r.prototype.not=function(){return this._not_flg=!this._not_flg,this},r.parse=function(t){var e=new r,n="";for(n in t.and)e.addAnd(t.and[n]);for(n in t.or)e.andOr(t.or[n]);return t.not&&e.not(),e},r.prototype.match=function(t){var n=0,i=0,o=0,s=0,a="",l="",c=[],f="",h=null,u=[],d=!1,_=null,p=null;for(n=0,i=this._conditionAnd.length;i>n;n+=1)if(_=this._conditionAnd[n],_.criteria instanceof r){if(d=_.criteria.match(t),!d)break}else{if(a=_.left_key,l=_.operator,c=_.right_key,f=_.key_type,h=e(t,a),"value"===f)u=c;else if("key"===f)if(p=e(t,c[0]),Array.isArray(p))if("match"===l||"not_match"===l)for(u=[],o=0,s=p.length;s>o;o+=1)null!==p[o]&&void 0!==p[o]&&""!==p?u[o]=new RegExp(p[o]):u[o]=p[o];else u=p;else u="match"===l||"not_match"===l?null!==p&&void 0!==p&&""!==p?[new RegExp(p)]:p:[p];if(d=void 0===u||~u.indexOf(void 0)||void 0===h?!1:this._compare(h,l,u),!d)break}if(d)return!!(!0^this._not_flg);for(n=0,i=this._conditionOr.length;i>n;n+=1)if(_=this._conditionOr[n],_.criteria instanceof r){if(d=_.criteria.match(t))return!!(!0^this._not_flg)}else{if(a=_.left_key,l=_.operator,c=_.right_key,f=_.key_type,h=e(t,a),"value"===f)u=c;else if("key"===f)if(p=e(t,c),Array.isArray(p))if("match"===l||"not_match"===l)for(u=[],o=0,s=p.length;s>o;o+=1)null!==p[o]&&void 0!==p[o]&&""!==p[o]?u[o]=new RegExp(p[o]):u[o]=p[o];else u=p;else u="match"===l||"not_match"===l?null!==p&&void 0!==p&&""!==p?[new RegExp(p)]:p:[p];if(d=~u.indexOf(void 0)||"undefined"==typeof h?!1:this._compare(h,l,u))return!!(!0^this._not_flg)}return!!(!1^this._not_flg)},r.prototype._compare=function(t,e,n){var i=!1;switch(e){case"eq":i=n[0]===t;break;case"ne":i=n[0]!==t;break;case"lt":i=n[0]>t;break;case"le":i=n[0]>=t;break;case"gt":i=n[0]<t;break;case"ge":i=n[0]<=t;break;case"in":i=!!~n.indexOf(t);break;case"not_in":i=!~n.indexOf(t);break;case"between":i=n[0]<=t&&n[1]>=t;break;case"not_between":i=n[0]>t||n[1]<t;break;case"match":i=null===n[0]?null===t||void 0===t?!0:!1:null===t?!1:""===n[0]?""===t?!0:!1:n[0].test(t);break;case"not_match":i=null===n[0]?null===t||void 0===t?!1:!0:null===t?!0:""===n[0]?""===t?!1:!0:!n[0].test(t)}return i},r.prototype.matcher=function(){return new Function("$","return "+this.createMatchingExpression())},r.prototype.createMatchingExpression=function(){var t=0,e=0,n=[],i=[],o="",s="",a=null,l="";for(t=0,e=this._conditionAnd.length;e>t;t+=1)a=this._conditionAnd[t],a.criteria instanceof r?n[n.length]="("+a.criteria.createMatchingExpression()+")":n[n.length]="("+this._createJsExpressionOfKeyIsUndefined(a.left_key)+" && "+("key"===a.key_type?this._createJsExpressionOfKeyIsUndefined(a.right_key[0])+" && ":"")+this._createJsExpression(a)+")";for(t=0,e=this._conditionOr.length;e>t;t+=1)a=this._conditionOr[t],a.criteria instanceof r?i[i.length]="("+a.criteria.createMatchingExpression()+")":i[i.length]="("+this._createJsExpressionOfKeyIsUndefined(a.left_key)+" && "+this._createJsExpression(a)+")";return o=n.join(" && "),s=i.join(" || "),o&&s?l=o+" || "+s+" ":s?o||(l=s):l=o,this._not_flg&&(l="!("+l+")"),l},r.prototype._createJsExpression=function(t){var e="$."+t.left_key,n=t.operator,i=t.right_key,o=t.key_type,s=r._JS_OPERATOR[n];return s?e+" "+s+" "+this._toStringExpressionFromValue(i[0],o):"in"===n?"value"===o?"!!~"+this._toStringExpressionFromArray(i)+".indexOf("+e+")":"(Array.isArray($."+i[0]+") ? !!~$."+i[0]+".indexOf("+e+"): $."+i[0]+" === "+e+")":"not_in"===n?"value"===o?"!~"+this._toStringExpressionFromArray(i)+".indexOf("+e+")":"(Array.isArray($."+i[0]+") ? !~$."+i[0]+".indexOf("+e+"): $."+i[0]+" !== "+e+")":"between"===n?e+" >= "+this._toStringExpressionFromValue(i[0],o)+" && "+e+" <= "+this._toStringExpressionFromValue(i[1],o):"not_between"===n?e+" < "+this._toStringExpressionFromValue(i[0],o)+" || "+e+" > "+this._toStringExpressionFromValue(i[1],o):"match"===n?void 0===i[0]?!1:null===i[0]?"("+e+" === null ? true : false)":""===i[0]?"("+e+" === '' ? true : false)":"("+i[0]+".test("+e+"))":"not_match"===n?void 0===i[0]?!1:null===i[0]?"("+e+" === null ? false : true)":""===i[0]?"("+e+" === '' ? false : true)":"(!"+i[0]+".test("+e+"))":null},r.prototype._createJsExpressionOfKeyIsUndefined=function(t){for(var e=t.split("."),n=[],i=[],r=0,o=e.length;o>r;r+=1)n[n.length]=e[r],i[i.length]="$."+n.join(".")+" !== void 0";return i.join(" && ")},r.prototype._toStringExpressionFromArray=function(t){for(var e=[],n=0,i=t.length;i>n;n+=1)e[e.length]=this._toStringExpressionFromValue(t[n],"value");return"["+e.join(", ")+"]"},r.prototype._toStringExpressionFromValue=function(t,e){return"value"===e&&("string"==typeof t||t instanceof String)?'"'+t+'"':"key"===e?"$."+t:t+""},t.Kriteria=r}((0,eval)("this").window||this);