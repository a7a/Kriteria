/* keys_reference.js */

(function(global, cxt) {
  "use strict";

  var KeysReferenceInstance = function KeysReferenceInstance(target) {
    this._target = target;
    this._q = "'";
    this._keys = [];
  };

  KeysReferenceInstance.prototype.toString = function toString() {
    var ret = this._target,
        keys = this._keys,
        q = this._q;

    for(var i = 0, l = keys.length; i < l; i = i + 1) {
      ret = ret + "[" + q + keys[i] + q + "]";
    }

    return ret;
  };

  KeysReferenceInstance.prototype.setQuote = function setQuote(q) {
    if(isString(q)) {
      this._q = q;
    }
  };

  KeysReferenceInstance.prototype.add = function add(key) {
    this._keys[this._keys.length] = key;
  };

  var keysReference = function keysReference(obj, keys, opt) {
    var ins = new KeysReferenceInstance(obj);

    if(opt && isString(opt.q)) {
      ins.setQuote(opt.q);
    }

    if(Array.isArray(keys)) {
      for(var i = 0, l = keys.length; i < l; i = i + 1) {
        ins.add(keys[i]);
      }

    } else {
      ins.add(keys);
    }

    return ins;
  };

  var isString = function isString(obj) {
    return typeof obj === "string" || obj instanceof String;
  };


  //global.keysReference = keysReference;
  cxt.keysReference = keysReference;

}((0, eval)("this"), this));

