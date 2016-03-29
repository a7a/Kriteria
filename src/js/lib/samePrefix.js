/* samePrefix.js */

(function(cxt) {
  "use strict";

  /**
  * @public
  * @function
  * @param {String} str1 -
  * @param {String} str2 -
  * @param {String[]} prefixes -
  * @returns {Boolean}
  */
  var samePrefix = function samePrefix(str1, str2, prefixes) {
    if(prefixes.length === 0) {
      return false;
    }

    for(var i = 0, l = prefixes.length; i < l; i = i + 1) {
      var prefix = prefixes[i];

      if(str1.indexOf(prefix + ".") === 0 && str2.indexOf(prefix + ".") === 0) {
        return true;
      }
    }

    return false;
  };


  cxt.samePrefix = samePrefix;

}(this));
