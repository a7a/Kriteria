/* matchPrefix.js */

(function(cxt) {
  "use strict";

  /**
  * @public
  * @function
  * @param {String} str -
  * @param {String[]} prefixes -
  * @returns {Boolean}
  */
  var matchPrefix = function matchPrefix(str, prefixes) {
    if(prefixes.length === 0) {
      return true;
    }

    for(var i = 0, l = prefixes.length; i < l; i = i + 1) {
      if(str.indexOf(prefixes[i] + ".") === 0) {
        return true;
      }
    }

    return false;
  };


  cxt.matchPrefix = matchPrefix;

}(this));
