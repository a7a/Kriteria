/* evaluation.js */

(function (cxt){
  "use strict";

  var Condition = require('./Condition.js').Condition;

  /**
  * @public
  * @function
  * @param {String} type -
  * @param {String} left_key -
  * @param {Kriteria} criteria -
  * @returns {Object<[eq|ne|lt|le|gt|ge|in|not_in].[key|value]>|between}
  * @description
  */
  var evaluation = function evaluation(type, left_key, criteria) {
    return {
      eq: {
        key: function(value) {
          _setToCriteria(criteria, type, "eq", left_key, "key", [value]);
          return criteria;
        },
        value: function(value) {
          _setToCriteria(criteria, type, "eq", left_key, "value", [value]);
          return criteria;
        }
      },
      ne: {
        key: function(value) {
          _setToCriteria(criteria, type, "ne", left_key, "key", [value]);
          return criteria;
        },
        value: function(value) {
          _setToCriteria(criteria, type, "ne", left_key, "value", [value]);
          return criteria;
        }
      },
      lt: {
        key: function(value) {
          _setToCriteria(criteria, type, "lt", left_key, "key", [value]);
          return criteria;
        },
        value: function(value) {
          _setToCriteria(criteria, type, "lt", left_key, "value", [value]);
          return criteria;
        }
      },
      le: {
        key: function(value) {
          _setToCriteria(criteria, type, "le", left_key, "key", [value]);
          return criteria;
        },
        value: function(value) {
          _setToCriteria(criteria, type, "le", left_key, "value", [value]);
          return criteria;
        }
      },
      gt: {
        key: function(value) {
          _setToCriteria(criteria, type, "gt", left_key, "key", [value]);
          return criteria;
        },
        value: function(value) {
          _setToCriteria(criteria, type, "gt", left_key, "value", [value]);
          return criteria;
        }
      },
      ge: {
        key: function(value) {
          _setToCriteria(criteria, type, "ge", left_key, "key", [value]);
          return criteria;
        },
        value: function(value) {
          _setToCriteria(criteria, type, "ge", left_key, "value", [value]);
          return criteria;
        }
      },
      in: {
        key: function() {
          _setToCriteria(criteria, type, "in", left_key, "key", [].slice.apply(arguments));
          return criteria;
        },
        value: function() {
          _setToCriteria(criteria, type, "in", left_key, "value", [].slice.apply(arguments));
          return criteria;
        }
      },
      not_in: {
        key: function() {
          _setToCriteria(criteria, type, "not_in", left_key, "key", [].slice.apply(arguments));
          return criteria;
        },
        value: function() {
          _setToCriteria(criteria, type, "not_in", left_key, "value", [].slice.apply(arguments));
          return criteria;
        }
      },
      between: function(value1, value2) {
        _setToCriteria(criteria, type, "between", left_key, "value", [value1, value2]);
        return criteria;
      },
      not_between: function(value1, value2) {
        _setToCriteria(criteria, type, "not_between", left_key, "value", [value1, value2]);
        return criteria;
      },
      match: function(value) {
        var _value = value instanceof RegExp ? value :
                     value === null ? null :
                     value === void 0 ? void 0 : new RegExp(value);
        _setToCriteria(criteria, type, "match", left_key, "value", [_value]);
        return criteria;
      },
      not_match: function(value) {
        var _value = value instanceof RegExp ? value :
                     value === null ? null :
                     value === void 0 ? void 0 : new RegExp(value);
        _setToCriteria(criteria, type, "not_match", left_key, "value", [_value]);
        return criteria;
      }
    };
  };

  /**
  * @private
  * @function
  * @param {Kriteria} criteria -
  * @param {String} type -
  * @param {String} operator -
  * @param {String} key_name -
  * @param {Array<String>} values -
  * @returns {void}
  * @description
  */
  var _setToCriteria = function _setToCriteria(criteria, type, operator, key_name, key_type, values) {
    if(type.toLowerCase() === "and") {
      criteria.addAnd(new Condition(key_name, operator, values, key_type, null));

    } else if(type.toLowerCase() === "or") {
      criteria.addOr(new Condition(key_name, operator, values, key_type, null));

    } else {
      throw new Error(
        "invalid type: " + type +
        "(at key_name:" + key_name + ", key_type: " + key_type + ", operator:" + operator + ")"
      );
    }
  };


  cxt.evaluation = evaluation;

})(this);
