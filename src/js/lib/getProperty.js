/* getProperty.js */

(function (cxt) {
  'use strict';

  var getProperty = function getProperty(obj, key) {
    var keys = key.split('.'),
        ret = obj;

    for(var i = 0, l = keys.length; i < l; i += 1) {
      if(
        typeof ret === "string" ||
        ret instanceof String ||
        typeof ret === "number" ||
        ret instanceof Number
      ) {
        return void 0;

      } else if(keys[i] in ret) {
        ret = ret[keys[i]];

      } else {
        return void 0;
      }
    }

    return ret;
  };

  cxt.getProperty = getProperty;

})(this);
