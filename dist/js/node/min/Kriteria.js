!function(t,n){"use strict";var e=require("./lib/getProperty.js").getProperty,i=require("./lib/matchPrefix.js").matchPrefix,r=require("./lib/Condition.js").Condition,o=require("./lib/evaluation.js").evaluation,s=function(){this._conditionAnd=[],this._conditionOr=[],this._not_flg=!1};s._name_="Kriteria",s.prototype.getConditionAnd=function(){return this._conditionAnd},s.prototype.getConditionOr=function(){return this._conditionOr},s._JS_OPERATOR={eq:"===",ne:"!==",lt:"<",le:"<=",gt:">",ge:">="},s.prototype.addAnd=function(t){this._conditionAnd[this._conditionAnd.length]=t},s.prototype.addOr=function(t){this._conditionOr[this._conditionOr.length]=t},s.prototype.and=function(t){var n=typeof t,e=null;if("string"===n||t instanceof String||"number"===n||t instanceof Number)return o("and",t,this);if(t instanceof s)return e=t,this.addAnd(new r("","",[],"",e)),this;if("function"==typeof t)return e=new s,t(e),this.addAnd(new r("","",[],"",e)),this;throw new Error("invalid type of argument. ("+n+")")},s.prototype.or=function(t){var n=typeof t,e=null;if("string"===n||t instanceof String||"number"===n||t instanceof Number)return o("or",t,this);if(t instanceof s)return e=t,this.addOr(new r("","",[],"",e)),this;if("function"==typeof t)return e=new s,t(e),this.addOr(new r("","",[],"",e)),this;throw new Error("invalid type of argument. ("+n+")")},s.prototype.not=function(){return this._not_flg=!this._not_flg,this},s.parse=function(t){var n=new s,e="";for(e in t.and)n.addAnd(t.and[e]);for(e in t.or)n.andOr(t.or[e]);return t.not&&n.not(),n},s.prototype.match=function(t){var n=0,i=0,r=0,o=0,a="",l="",f=[],h="",c=null,d=[],_=!1,u=null,g=null;for(n=0,i=this._conditionAnd.length;i>n;n+=1)if(u=this._conditionAnd[n],u.criteria instanceof s){if(_=u.criteria.match(t),!_)break}else{if(a=u.left_key,l=u.operator,f=u.right_key,h=u.key_type,c=e(t,a),"value"===h)d=f;else if("key"===h)if(g=e(t,f[0]),Array.isArray(g))if("match"===l||"not_match"===l)for(d=[],r=0,o=g.length;o>r;r+=1)null===g[r]||void 0===g[r]||""===g[r]?d[r]=g[r]:d[r]=new RegExp(g[r]);else d=g;else d="match"===l||"not_match"===l?null===g||void 0===g||""===g?g:[new RegExp(g)]:[g];if(_=void 0===d||~d.indexOf(void 0)||void 0===c?!1:this._compare(c,l,d),!_)break}if(_)return!!(!0^this._not_flg);for(n=0,i=this._conditionOr.length;i>n;n+=1)if(u=this._conditionOr[n],u.criteria instanceof s){if(_=u.criteria.match(t))return!!(!0^this._not_flg)}else{if(a=u.left_key,l=u.operator,f=u.right_key,h=u.key_type,c=e(t,a),"value"===h)d=f;else if("key"===h)if(g=e(t,f[0]),Array.isArray(g))if("match"===l||"not_match"===l)for(d=[],r=0,o=g.length;o>r;r+=1)null===g[r]||void 0===g[r]||""===g[r]?d[r]=g[r]:d[r]=new RegExp(g[r]);else d=g;else d="match"===l||"not_match"===l?null===g||void 0===g||""!==g?g:[new RegExp(g)]:[g];if(_=void 0===d||~d.indexOf(void 0)||void 0===c?!1:this._compare(c,l,d))return!!(!0^this._not_flg)}return!!(!1^this._not_flg)},s.prototype._compare=function(t,n,e){var i=!1;switch(n){case"eq":i=e[0]===t;break;case"ne":i=e[0]!==t;break;case"lt":i=e[0]>t;break;case"le":i=e[0]>=t;break;case"gt":i=e[0]<t;break;case"ge":i=e[0]<=t;break;case"in":i=!!~e.indexOf(t);break;case"not_in":i=!~e.indexOf(t);break;case"between":i=e[0]<=t&&e[1]>=t;break;case"not_between":i=e[0]>t||e[1]<t;break;case"match":i=null===e[0]?null===t||void 0===t?!0:!1:null===t?!1:""===e[0]?""===t?!0:!1:e[0].test(t);break;case"not_match":i=null===e[0]?null===t||void 0===t?!1:!0:null===t?!0:""===e[0]?""===t?!1:!0:!e[0].test(t)}return i},s.prototype.matcher=function(){return new Function("$","return "+this._createMatchingExpression())},s.prototype._createMatchingExpression=function(){var t=0,n=0,e=[],i=[],r="",o="",a=null,l="";for(t=0,n=this._conditionAnd.length;n>t;t+=1)a=this._conditionAnd[t],a.criteria instanceof s?e[e.length]="("+a.criteria._createMatchingExpression()+")":e[e.length]=this._createExpression(a);for(t=0,n=this._conditionOr.length;n>t;t+=1)a=this._conditionOr[t],a.criteria instanceof s?i[i.length]="("+a.criteria._createMatchingExpression()+")":i[i.length]=this._createExpression(a);return r=e.join(" && "),o=i.join(" || "),r&&o?l=r+" || "+o+" ":o?r||(l=o):l=r,this._not_flg&&(l="!("+l+")"),l},s.prototype._createExpression=function(t){return"("+this._createJsExpressionOfKeyIsNotUndefined(t.left_key)+" && "+("key"===t.key_type?this._createJsExpressionOfKeyIsNotUndefined(t.right_key[0])+" && ":"")+this._createJsExpression(t)+")"},s.prototype._createJsExpression=function(t){var n="$."+t.left_key,e=t.operator,i=t.right_key,r=t.key_type,o=s._JS_OPERATOR[e];return o?n+" "+o+" "+this._toStringExpressionFromValue(i[0],r):"in"===e?"value"===r?"!!~"+this._toStringExpressionFromArray(i)+".indexOf("+n+")":"(Array.isArray($."+i[0]+") ? !!~$."+i[0]+".indexOf("+n+"): $."+i[0]+" === "+n+")":"not_in"===e?"value"===r?"!~"+this._toStringExpressionFromArray(i)+".indexOf("+n+")":"(Array.isArray($."+i[0]+") ? !~$."+i[0]+".indexOf("+n+"): $."+i[0]+" !== "+n+")":"between"===e?n+" >= "+this._toStringExpressionFromValue(i[0],r)+" && "+n+" <= "+this._toStringExpressionFromValue(i[1],r):"not_between"===e?n+" < "+this._toStringExpressionFromValue(i[0],r)+" || "+n+" > "+this._toStringExpressionFromValue(i[1],r):"match"===e?void 0===i[0]?!1:null===i[0]?"("+n+" === null ? true : false)":""===i[0]?"("+n+" === '' ? true : false)":"("+i[0]+".test("+n+"))":"not_match"===e?void 0===i[0]?!1:null===i[0]?"("+n+" === null ? false : true)":""===i[0]?"("+n+" === '' ? false : true)":"(!"+i[0]+".test("+n+"))":null},s.prototype._createJsExpressionOfKeyIsNotUndefined=function(t){for(var n=t.split("."),e=[],i=[],r=0,o=n.length;o>r;r+=1)e[e.length]=n[r],i[i.length]="$."+e.join(".")+" !== void 0";return i.join(" && ")},s.prototype._createJSExpressionOfKeyIsUndefined=function(t){for(var n=t.split("."),e=[],i=[],r=0,o=n.length;o>r;r+=1)e[e.length]=n[r],i[i.length]="$."+e.join(".")+" === void 0",i[i.length]="$."+e.join(".")+" === null";return i.join(" || ")},s.prototype._toStringExpressionFromArray=function(t){for(var n=[],e=0,i=t.length;i>e;e+=1)n[n.length]=this._toStringExpressionFromValue(t[e],"value");return"["+n.join(", ")+"]"},s.prototype._toStringExpressionFromValue=function(t,n){return"value"===n&&("string"==typeof t||t instanceof String)?'"'+t+'"':"key"===n?"$."+t:t+""},s.prototype.splitByKeyPrefixes=function(t){if(!Array.isArray(t)||0===t.length)return null;var n={},e=null,r=null,o=[],a="",l="",f="",h=!0,c=!0,d=!0,_="",u=0,g=0,p=0,y=0;for(u=0,g=t.length;g>u;u+=1)n[t[u]]=new s;for(n["else"]=new s,u=0,g=this._conditionAnd.length;g>u;u+=1)if(e=this._conditionAnd[u],e.criteria instanceof s){r=e.criteria.splitByKeyPrefixes(t);for(_ in r)null!==r[_]&&n[_].and(r[_])}else{for(o=[],a=e.left_key,l=e.right_key[0],f=e.key_type,d=!1,p=0,y=t.length;y>p;p+=1)if(o[o.length]=t[p],h=i(a,o),"key"===f&&(c=i(l,o)),"value"===f&&h||"key"===f&&h&&c){n[t[p]].addAnd(e),d=!0;break}d||n["else"].addAnd(e)}for(u=0,g=this._conditionOr.length;g>u;u+=1)if(e=this._conditionOr[u],e.criteria instanceof s){r=e.criteria.splitByKeyPrefixes(t);for(_ in r)null!==r[_]&&n[_].or(r[_])}else{for(o=[],a=e.left_key,l=e.right_key[0],f=e.key_type,d=!1,p=0,y=t.length;y>p;p+=1)if(o[o.length]=t[p],h=i(a,o),"key"===f&&(c=i(l,o)),"value"===f&&h||"key"===f&&h&&c){n[t[p]].addOr(e),d=!0;break}d||n["else"].addOr(e)}for(_ in n)n[_].getConditionAnd().length>0||n[_].getConditionOr().length>0?n[_]._not_flg=this._not_flg:n[_]=null;return n},s.prototype.merge=function(t,n){var e=new s,i=t.getConditionAnd(),r=t.getConditionOr(),o=null,a=!1,l=0,f=0,h=0,c=0;if(this._not_flg!==t._not_flg)throw new Error("Kriteria#merge - collision to not flag.");for(l=0,f=this._conditionAnd.length;f>l;l+=1)e.addAnd(this._conditionAnd[l]);for(l=0,f=this._conditionOr.length;f>l;l+=1)e.addOr(this._conditionOr[l]);if(n){for(l=0,f=i.length;f>l;l+=1){for(o=i[l],a=!1,h=0,c=this._conditionAnd.length;c>h;h+=1)if(0===o.compareTo(this._conditionAnd[h])){a=!0;break}a||e.addAnd(o)}for(l=0,f=r.length;f>l;l+=1){for(o=r[l],a=!1,h=0,c=this._conditionOr.length;c>h;h+=1)if(0===o.compareTo(this._conditionOr[h])){a=!0;break}a||e.addOr(o)}}else{for(l=0,f=i.length;f>l;l+=1)e.addAnd(i[l]);for(l=0,f=r.length;f>l;l+=1)e.addOr(r[l])}return e},s.prototype.compareTo=function(t){var n=function(t,n){return t.compareTo(n)},e=t.getConditionAnd(),i=t.getConditionOr(),r=null,o=null,s=!0,a=0,l=0,f=0,h=0;if(this._conditionAnd.sort(n),e.sort(n),this._conditionOr.sort(n),i.sort(n),this._not_flg&&!t._not_flg)return-1;if(!this._not_flg&&t._not_flg)return 1;for(a=this._conditionAnd.length,l=e.length,h=a>l?a:l,f=0;h>f;f+=1){if(r=this._conditionAnd[f],o=e[f],!r)return-1;if(!o)return 1;if(s=r.compareTo(o),0!==s)return s}for(a=this._conditionOr.length,l=i.length,h=a>l?a:l,f=0;h>f;f+=1){if(r=this._conditionOr[f],o=i[f],!r)return-1;if(!o)return 1;if(s=r.compareTo(o),0!==s)return s}return 0},s.prototype.removePrefixes=function(t){var n=null,e=null,i=0,r=0;if(null===t||void 0===t||!Array.isArray(t)||0===t.length)return this;for(n=new RegExp("^("+t.join("|")+")."),i=0,r=this._conditionAnd.length;r>i;i+=1)e=this._conditionAnd[i],e.criteria instanceof s?e.criteria.removePrefixes(t):(e.left_key=e.left_key.replace(n,""),"key"===e.key_type&&(e.right_key[0]=e.right_key[0].replace(n,"")));for(i=0,r=this._conditionOr.length;r>i;i+=1)e=this._conditionOr[i],e.criteria instanceof s?e.criteria.removePrefixes(t):(e.left_key=e.left_key.replace(n,""),"key"===e.key_type&&(e.right_key[0]=e.right_key[0].replace(n,"")));return this},t.Kriteria=s,n.Kriteria=s}(this,(0,eval)("this").window||this);