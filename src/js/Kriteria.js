/* Kriteria.js */

(function(cxt) {
  "use strict";

  var getProperty = require("./lib/getProperty.js").getProperty,
      //samePrefix = require("./lib/samePrefix.js").samePrefix,
      matchPrefix = require("./lib/matchPrefix.js").matchPrefix,
      Condition = require("./lib/Condition.js").Condition,
      evaluation = require("./lib/evaluation.js").evaluation;

  /**
  * @public
  * @class
  */
  var Kriteria = function Kriteria() {
    this._conditionAnd = [];
    this._conditionOr = [];
    this._not_flg = false;
  };
  Kriteria._name_ = "Kriteria";

  /**
  * @public
  * @function
  * @returns {Condition[]}
  */
  Kriteria.prototype.getConditionAnd = function getConditionAnd() {
    return this._conditionAnd;
  };

  /**
  * @public
  * @function
  * @returns {Condition[]}
  */
  Kriteria.prototype.getConditionOr = function getConditionAOr() {
    return this._conditionOr;
  };

  /**
  * @private
  * @property
  * @description
  */
  Kriteria._JS_OPERATOR = {
    eq: "===",
    ne: "!==",
    lt: "<",
    le: "<=",
    gt: ">",
    ge: ">="
  };

  /**
  * @public
  * @function
  * @param {Condition} condition -
  * @returns {void}
  * @description
  */
  Kriteria.prototype.addAnd = function addAnd(condition) {
    this._conditionAnd[this._conditionAnd.length] = condition;
  };

  /**
  * @public
  * @function
  * @param {Condition} condition -
  * @returns {void}
  * @description
  */
  Kriteria.prototype.addOr = function addOr(condition) {
    this._conditionOr[this._conditionOr.length] = condition;
  };

  /**
  * @public
  * @function
  * @param {Mixed(String|Kriteria|Function)} key - key name or Kriteria instance or Kriteria reqired function
  * @returns {Function} evaluation || {Kriteria}
  * @description
  */
  Kriteria.prototype.and = function and(key) {
    var key_type = typeof key,
        cri = null;

    if(
      key_type === "string" ||
      key instanceof String ||
      key_type === "number" ||
      key instanceof Number
    ) {
      return evaluation("and", key, this);

    } else if(key instanceof Kriteria) {
      cri = key;
      this.addAnd(new Condition("", "", [], "", cri));

      return this;

    } else if(typeof key === "function") {
      cri = new Kriteria();
      key(cri);
      this.addAnd(new Condition("", "", [], "", cri));

      return this;

    } else {
      throw new Error("invalid type of argument. (" + key_type + ")");
    }
  };

  /**
  * @public
  * @function
  * @param {Mixed(String|Kriteria|Function)} key - key name or Kriteria instance or Kriteria reqired function
  * @returns {Mixed(Function|Kriteria)}
  * @description
  */
  Kriteria.prototype.or = function or(key) {
    var key_type = typeof key,
        cri = null;

    if(key_type === "string" ||
       key instanceof String ||
       key_type === "number" ||
       key instanceof Number
      ) {
      return evaluation("or", key, this);

    } else if(key instanceof Kriteria) {
      cri = key;
      this.addOr(new Condition("", "", [], "", cri));

      return this;

    } else if(typeof key === "function") {
      cri = new Kriteria();
      key(cri);
      this.addOr(new Condition("", "", [], "", cri));

      return this;

    } else {
      throw new Error("invalid type of argument. (" + key_type + ")");
    }
  };

  /**
  * @public
  * @function
  * @returns {Kriteria}
  * @description
  */
  Kriteria.prototype.not = function not() {
    this._not_flg = !this._not_flg;

    return this;
  };

  /**
  * @public
  * @static
  * @function
  * @param {Object} conditions -
  *   {Condition[]} conditions.and -
  *   {Condition[]} conditions.or -
  * @returns {Kriteria}
  * @description
  */
  Kriteria.parse = function parse(conditions) {
    var ret = new Kriteria(),
        i = "";

    for(i in conditions.and) {
      ret.addAnd(conditions.and[i]);
    }
    for(i in conditions.or) {
      ret.andOr(conditions.or[i]);
    }
    if(conditions.not) {
      ret.not();
    }

    return ret;
  };

  /**
  * @public
  * @function
  * @param {String[]} prefixes -
  * @param {Number[]} types -
  *   0 - key-type is value and prefix included
  *   1 - key-type is key and prefix included
  *   2 - key-type is key and xor prefix for left and right side
  *   3 - key-type is key and same prefix for left and right side
  *   4 - other than prefixes
  * @returns {Kriteria}
  */
//  Kriteria.prototype.createOfConditionWithKeyPrefixes = function createOfConditionWithKeyPrefixes(prefixes, types) {
//    var new_kriteria = new Kriteria(),
//        kri = null,
//        condition = null,
//        left_key = "",
//        right_key = [],
//        key_type = "",
//        match1 = true,
//        match2 = true,
//        _types = [],//(type === void 0 || type === null) ? 0 : +type,
//        i = 0, l = 0;
//
//    if(types === void 0 || types === null) {
//      _types = [0, 1];
//
//    } else if(Array.isArray(types)) {
//      for(i = 0, l = types.length; i < l; i = i + 1) {
//        var type = +types[i];
//
//        if(Number.isNaN(type)) {
//          return null;
//        }
//        _types[_types.length] = type;
//      }
//    }
//
//    for(i = 0, l = this._conditionAnd.length; i < l; i = i + 1) {
//      condition = this._conditionAnd[i];
//
//      if(condition.criteria instanceof Kriteria) {
//        kri = condition.criteria.createOfConditionWithKeyPrefixes(prefixes, _types);
//
//        if(kri) {
//          new_kriteria.addAnd(kri);
//        }
//
//      } else {
//        left_key = condition.left_key;
//        right_key = condition.right_key;
//        key_type = condition.key_type;
//
//        match1 = matchPrefix(left_key, prefixes);
//
//        if(key_type === "value") {
//          if(
//            (!!~_types.indexOf(0) && match1) ||
//            (!!~_types.indexOf(4) && !match1)
//          ) {
//            new_kriteria.addAnd(condition);
//          }
//
//        } else if(key_type === "key") {
//          match2 = matchPrefix(right_key[0], prefixes);
//
//          if(
//            (!!~_types.indexOf(1) && (match1 || match2)) ||
//            (!!~_types.indexOf(2) && (match1 ^ match2)) ||
//            (!!~_types.indexOf(3) && samePrefix(left_key, right_key[0], prefixes)) ||
//            (!!~_types.indexOf(4) && (!match1 && !match2))
//          ) {
//            new_kriteria.addAnd(condition);
//          }
//        }
//      }
//    }
//
//    for(i = 0, l = this._conditionOr.length; i < l; i = i + 1) {
//      condition = this._conditionOr[i];
//
//      if(condition.criteria instanceof Kriteria) {
//        kri = condition.criteria.createOfConditionWithKeyPrefixes(prefixes, _types);
//
//        if(kri) {
//          new_kriteria.addOr(kri);
//        }
//
//      } else {
//        left_key = condition.left_key;
//        right_key = condition.right_key;
//        key_type = condition.key_type;
//
//        match1 = matchPrefix(left_key, prefixes);
//
//        if(key_type === "value") {
//          if(
//            (!!~_types.indexOf(0) && match1) ||
//            (!!~_types.indexOf(4) && !match1)
//          ) {
//            new_kriteria.addOr(condition);
//          }
//
//        } else if(key_type === "key") {
//          match2 = matchPrefix(right_key[0], prefixes);
//
//          if(
//            (!!~_types.indexOf(1) && (match1 || match2)) ||
//            (!!~_types.indexOf(2) && (match1 ^ match2)) ||
//            (!!~_types.indexOf(3) && samePrefix(left_key, right_key[0], prefixes)) ||
//            (!!~_types.indexOf(4) && (!match1 && !match2))
//          ) {
//            new_kriteria.addOr(condition);
//          }
//        }
//      }
//    }
//
//    new_kriteria._not_flg = this._not_flg;
//
//    return new_kriteria.getConditionAnd().length > 0 || new_kriteria.getConditionOr().length > 0 ?
//      new_kriteria : null;
//  };

  /**
  * @public
  * @function
  * @param {Object} data -
  * @returns {Boolean}
  * @description
  */
  Kriteria.prototype.match = function match(data) {
    var i = 0, l = 0,
        j = 0, l2 = 0,
        left_key = "",
        operator = "",
        right_key = [],
        key_type = "",
        left_value = null,
        right_value = [],
        result = false,
        condition = null,
        tmp_right_value = null;

    for(i = 0, l = this._conditionAnd.length; i < l; i = i + 1) {
      condition = this._conditionAnd[i];

      if(condition.criteria instanceof Kriteria) {
        result = condition.criteria.match(data);

        // and条件は1つでもfalseがあったら、結果はfalse
        if(!result) {
          break;
        }

      } else {
        left_key = condition.left_key;
        operator = condition.operator;
        right_key = condition.right_key;
        key_type = condition.key_type;
        left_value = getProperty(data, left_key);

        if(key_type === "value") {
          right_value = right_key;

        } else if(key_type === "key") {
          tmp_right_value = getProperty(data, right_key[0]);

          if(Array.isArray(tmp_right_value)) {
            if(operator === "match" || operator === "not_match") {
              right_value = [];

              for(j = 0, l2 = tmp_right_value.length; j < l2; j = j + 1) {
                if(tmp_right_value[j] === null
                   || tmp_right_value[j] === void 0
                   || tmp_right_value[j] === "") {
                  right_value[j] = tmp_right_value[j];

                } else {
                  right_value[j] = new RegExp(tmp_right_value[j]);
                }
              }

            } else {
              right_value = tmp_right_value;
            }

          } else {
            if(operator === "match" || operator === "not_match") {
              if(tmp_right_value === null
                 || tmp_right_value === void 0
                 || tmp_right_value === "") {
                right_value = tmp_right_value;

              } else {
                right_value = [new RegExp(tmp_right_value)];
              }

            } else {
              right_value = [tmp_right_value];
            }
          }
        }

        if(
          right_value === void 0
          || !!~right_value.indexOf(void 0)
          || left_value === void 0
        ) {
          // valueがundefinedの場合はfalse
          result = false;

        } else {
          // 上記以外は比較演算
          result = this._compare(left_value, operator, right_value);
        }

        // and条件は1つでもfalseがあったら、結果はfalse
        if(!result) {
          break;
        }
      }
    }

    // and条件ですべて一致した場合
    if(result) {
      return !!(true ^ this._not_flg);
    }

    for(i = 0, l = this._conditionOr.length; i < l; i = i + 1) {
      condition = this._conditionOr[i];

      if(condition.criteria instanceof Kriteria) {
        result = condition.criteria.match(data);
        if(result) {
          return !!(true ^ this._not_flg);
        }

      } else {
        left_key = condition.left_key;
        operator = condition.operator;
        right_key = condition.right_key;
        key_type = condition.key_type;
        left_value = getProperty(data, left_key);

        if(key_type === "value") {
          right_value = right_key;

        } else if(key_type === "key") {
          tmp_right_value = getProperty(data, right_key[0]);

          if(Array.isArray(tmp_right_value)) {
            if(operator === "match" || operator === "not_match") {
              right_value = [];

              for(j = 0, l2 = tmp_right_value.length; j < l2; j = j + 1) {
                if(tmp_right_value[j] === null
                   || tmp_right_value[j] === void 0
                   || tmp_right_value[j] === "") {
                  right_value[j] = tmp_right_value[j];

                } else {
                  right_value[j] = new RegExp(tmp_right_value[j]);
                }
              }

            } else {
              right_value = tmp_right_value;
            }
          } else {
            if(operator === "match" || operator === "not_match") {
              if(tmp_right_value === null
                 || tmp_right_value === void 0
                 || tmp_right_value !== "") {
                right_value = tmp_right_value;

              } else {
                right_value = [new RegExp(tmp_right_value)];
              }

            } else {
              right_value = [tmp_right_value];
            }
          }
        }

        if(
          right_value === void 0
          || !!~right_value.indexOf(void 0)
          || left_value === void 0
        ) {
          // valueがundefinedの場合はfalse
          result = false;

        } else {
          // 上記以外は比較演算
          result = this._compare(left_value, operator, right_value);
        }

        // or条件は1つでもtrueがあったら、結果はtrue
        if(result) {
          return !!(true ^ this._not_flg);
        }
      }
    }

    // 上記以外はfalse
    return !!(false ^ this._not_flg);
  };

  /**
  * @private
  * @function
  * @param {Mixed(String|Number)} value1 -
  * @param {String} operator -
  * @param {Array} value2 -
  * @returns {Boolean}
  * @description
  */
  Kriteria.prototype._compare = function _compare(value1, operator, value2) {
    var result = false;

    switch(operator) {
      case "eq":
        result = (value2[0] === value1);
        break;

      case "ne":
        result = (value2[0] !== value1);
        break;

      case "lt":
        result = (value2[0] > value1);
        break;

      case "le":
        result = (value2[0] >= value1);
        break;

      case "gt":
        result = (value2[0] < value1);
        break;

      case "ge":
        result = (value2[0] <= value1);
        break;

      case "in":
        result = !!~value2.indexOf(value1);
        break;

      case "not_in":
        result = !~value2.indexOf(value1);
        break;

      case "between":
        result = (value2[0] <= value1 && value2[1] >= value1);
        break;

      case "not_between":
        result = (value2[0] > value1 || value2[1] < value1);
        break;

      case "match":
        if(value2[0] === null) {
          if(value1 === null || value1 === void 0) {
            result = true;
          } else {
            result = false;
          }

        } else if(value1 === null) {
          result = false;

        } else if(value2[0] === "") {
          result = value1 === "" ? true : false;

        } else {
          result = value2[0].test(value1);
        }
        break;

      case "not_match":
        if(value2[0] === null) {
          if(value1 === null || value1 === void 0) {
            result = false;
          } else {
            result = true;
          }

        } else if(value1 === null) {
          result = true;

        } else if(value2[0] === "") {
          result = value1 === "" ? false : true;

        } else {
          result = !value2[0].test(value1);
        }
        break;
    }

    return result;
  };

  /**
  * @public
  * @function
  * @returns {Function}
  * @description
  */
  Kriteria.prototype.matcher = function matcher() {
    /* eslint no-new-func: 0 */
    return new Function("$", "return " + this._createMatchingExpression());
  };

  /**
  * @private
  * @function
  * @returns {String}
  * @description
  */
  Kriteria.prototype._createMatchingExpression = function _createMatchingExpression() {
    var i = 0, l = 0,
        expAnd = [],
        expOr = [],
        retAnd = "",
        retOr = "",
        condition = null,
        ret = "";

    for(i = 0, l = this._conditionAnd.length; i < l; i = i + 1) {
      condition = this._conditionAnd[i];

      if(condition.criteria instanceof Kriteria) {
        expAnd[expAnd.length] = "(" + condition.criteria._createMatchingExpression() + ")";

      } else {
        expAnd[expAnd.length] = this._createExpression(condition);
      }
    }

    for(i = 0, l = this._conditionOr.length; i < l; i = i + 1) {
      condition = this._conditionOr[i];

      if(condition.criteria instanceof Kriteria) {
        expOr[expOr.length] = "(" + condition.criteria._createMatchingExpression() + ")";

      } else {
        expOr[expOr.length] = this._createExpression(condition);
      }
    }

    retAnd = expAnd.join(" && ");
    retOr = expOr.join(" || ");

    if(retAnd && retOr) {
      ret = retAnd + " || " + retOr + " ";
    } else if(!retOr) {
      ret = retAnd;
    } else if(!retAnd) {
      ret = retOr;
    }

    if(this._not_flg) {
      ret = "!(" + ret + ")";
    }

    return ret;
  };

  /**
  * @private
  * @function
  * @param {Condition} condition -
  * @returns {String}
  * @description
  */
  Kriteria.prototype._createExpression = function _createExpression(condition) {
    return "(" +
      this._createJsExpressionOfKeyIsNotUndefined(condition.left_key) +
      " && " +
      (
        condition.key_type === "key" ?
          this._createJsExpressionOfKeyIsNotUndefined(condition.right_key[0]) + " && " :
          ""
      ) +
      this._createJsExpression(condition) +
      ")";
  };

  /**
  * @private
  * @function
  * @param {Condition}
  * @returns {String}
  * @description
  */
  Kriteria.prototype._createJsExpression = function _createJsExpression(condition) {
    var left_key = "$." + condition.left_key,
        operator = condition.operator,
        right_key = condition.right_key,
        key_type = condition.key_type,
        _operator = Kriteria._JS_OPERATOR[operator];

    if(_operator) {
      /* 演算子が eq, ne, lt, le, gt, ge のいずれか
           [left_key] [operator] "[right_key]"
           [left_key] [operator] $.[right_key]
      */
      return left_key + " " + _operator + " " +
             this._toStringExpressionFromValue(right_key[0], key_type);

    } else if(operator === "in") {
      /* in 演算子
           !!~[[right_key]].indexOf([left_key])
           (Array.isArray($.[right_key]) ? !!~$.[right_key].indexOf([left_key]) : $.[right_key] === [left_key])
      */
      if(key_type === "value") {
        return "!!~" + this._toStringExpressionFromArray(right_key) + ".indexOf(" + left_key + ")";

      } else {
        return "(Array.isArray($." + right_key[0] + ") ? " +
               "!!~$." + right_key[0] + ".indexOf(" + left_key + "): " +
               "$." + right_key[0] + " === " + left_key + ")";
      }

    } else if(operator === "not_in") {
      /* not_in 演算子
      */
      if(key_type === "value") {
        return "!~" + this._toStringExpressionFromArray(right_key) + ".indexOf(" + left_key + ")";

      } else {
        return "(Array.isArray($." + right_key[0] + ") ? " +
               "!~$." + right_key[0] + ".indexOf(" + left_key + "): " +
               "$." + right_key[0] + " !== " + left_key + ")";
      }

    } else if(operator === "between") {
      /* between 演算子
      */
      return left_key + " >= " + this._toStringExpressionFromValue(right_key[0], key_type) +
             " && " +
             left_key + " <= " + this._toStringExpressionFromValue(right_key[1], key_type);

    } else if(operator === "not_between") {
      /* not_between 演算子
      */
      return left_key + " < " + this._toStringExpressionFromValue(right_key[0], key_type) +
             " || " +
             left_key + " > " + this._toStringExpressionFromValue(right_key[1], key_type);

    } else if(operator === "match") {
      /* match 演算子
      */
      if(right_key[0] === void 0) {
        return false;

      } else if(right_key[0] === null) {
        return "(" + left_key + " === null ? true : false)";

      } else if(right_key[0] === "") {
        return "(" + left_key + " === '' ? true : false)";

      } else {
        //return "(" + left_key + " !== null && " + right_key[0] + ".test(" + left_key + "))";
        return "(" + right_key[0] + ".test(" + left_key + "))";
      }

    } else if(operator === "not_match") {
      /* not_match 演算子
      */
      if(right_key[0] === void 0) {
        return false;

      } else if(right_key[0] === null) {
        return "(" + left_key + " === null ? false : true)";

      } else if(right_key[0] === "") {
        return "(" + left_key + " === '' ? false : true)";

      } else {
        //return "(" + left_key + " !== null && !" + right_key[0] + ".test(" + left_key + "))";
        return "(!" + right_key[0] + ".test(" + left_key + "))";
      }

    } else {
      return null;
    }
  };

  /**
  * @private
  * @function
  * @param {String} key -
  * @returns {String}
  * @description
  */
  Kriteria.prototype._createJsExpressionOfKeyIsNotUndefined =
    function _createJsExpressionOfKeyIsNotUndefined(key) {
    var keys = key.split("."),
        work_keys = [],
        ret = [];

    for(var i = 0, l = keys.length; i < l; i = i + 1) {
      work_keys[work_keys.length] = keys[i];
      ret[ret.length] = "$." + work_keys.join(".") + " !== void 0";
    }

    return ret.join(" && ");
  };

  /**
  * @private
  * @function
  * @param {String} key -
  * @returns {String}
  * @description
  */
  Kriteria.prototype._createJSExpressionOfKeyIsUndefined =
    function _createJSExpressionOfKeyIsUndefined(key) {
    var keys = key.split("."),
        work_keys = [],
        ret = [];

    for(var i = 0, l = keys.length; i < l; i = i + 1) {
      work_keys[work_keys.length] = keys[i];
      ret[ret.length] = "$." + work_keys.join(".") + " === void 0";
      ret[ret.length] = "$." + work_keys.join(".") + " === null";
    }

    return ret.join(" || ");
  };

  /**
  * @private
  * @function
  * @param {Array} arr -
  * @returns {String}
  * @description
  */
  Kriteria.prototype._toStringExpressionFromArray = function _toStringExpressionFromArray(arr) {
    var ret = [];

    for(var i = 0, l = arr.length; i < l; i = i + 1) {
      ret[ret.length] = this._toStringExpressionFromValue(arr[i], "value");
    }

    return "[" + ret.join(", ") + "]";
  };

  /**
  * @private
  * @function
  * @param {Mixed(String|Number)} value -
  * @param {String} type -
  * @returns {String}
  * @description
  */
  Kriteria.prototype._toStringExpressionFromValue =
    function _toStringExpressionFromValue(value, type) {
    if(type === "value" && (typeof value === "string" || value instanceof String)) {
      return '"' + value + '"';
    } else if(type === "key") {
      return "$." + value;
    } else {
      return value + '';
    }
  };

  /**
  * @public
  * @function
  * @param {String[]} prefixes -
  * @returns {Object.<Kriteria>}
  */
  Kriteria.prototype.splitByKeyPrefixes = function splitByKeyPrefixes(prefixes) {
    if(!Array.isArray(prefixes) || prefixes.length === 0) {
      return null;
    }

    var ret = {},
        condition = null,
        splited_criteria = null,
        matchPrefixes = [],
        left_key = "",
        right_key = "",
        key_type = "",
        match1 = true,
        match2 = true,
        added = true,
        key = "",
        i = 0, l = 0,
        j = 0, l2 = 0;

    for(i = 0, l = prefixes.length; i < l; i = i + 1) {
      ret[prefixes[i]] = new Kriteria();
    }
    ret.else = new Kriteria();

    for(i = 0, l = this._conditionAnd.length; i < l; i = i + 1) {
      condition = this._conditionAnd[i];

      if(condition.criteria instanceof Kriteria) {
        splited_criteria = condition.criteria.splitByKeyPrefixes(prefixes);

        for(key in splited_criteria) {
          if(splited_criteria[key] !== null) {
            ret[key].and(splited_criteria[key]);
          }
        }

      } else {
        matchPrefixes = [];
        left_key = condition.left_key;
        right_key = condition.right_key[0];
        key_type = condition.key_type;
        added = false;

        for(j = 0, l2 = prefixes.length; j < l2; j = j + 1) {
          matchPrefixes[matchPrefixes.length] = prefixes[j];

          match1 = matchPrefix(left_key, matchPrefixes);
          if(key_type === "key") {
            match2 = matchPrefix(right_key, matchPrefixes);
          }

          if(
            (key_type === "value" && match1) ||
            (key_type === "key" && match1 && match2)
          ) {
            ret[prefixes[j]].addAnd(condition);
            added = true;
            break;
          }
        }

        if(!added) {
          ret.else.addAnd(condition);
        }
      }
    }

    for(i = 0, l = this._conditionOr.length; i < l; i = i + 1) {
      condition = this._conditionOr[i];

      if(condition.criteria instanceof Kriteria) {
        splited_criteria = condition.criteria.splitByKeyPrefixes(prefixes);

        for(key in splited_criteria) {
          if(splited_criteria[key] !== null) {
            ret[key].or(splited_criteria[key]);
          }
        }

      } else {
        matchPrefixes = [];
        left_key = condition.left_key;
        right_key = condition.right_key[0];
        key_type = condition.key_type;
        added = false;

        for(j = 0, l2 = prefixes.length; j < l2; j = j + 1) {
          matchPrefixes[matchPrefixes.length] = prefixes[j];

          match1 = matchPrefix(left_key, matchPrefixes);
          if(key_type === "key") {
            match2 = matchPrefix(right_key, matchPrefixes);
          }

          if(
            (key_type === "value" && match1) ||
            (key_type === "key" && match1 && match2)
          ) {
            ret[prefixes[j]].addOr(condition);
            added = true;
            break;
          }
        }

        if(!added) {
          ret.else.addOr(condition);
        }
      }
    }

    for(key in ret) {
      if(ret[key].getConditionAnd().length > 0 || ret[key].getConditionOr().length > 0) {
        ret[key]._not_flg = this._not_flg;
      } else {
        ret[key] = null;
      }
    }
    return ret;
  };

  /**
  * @public
  * @function
  * @param {Kriteria} kri -
  * @param {Boolean} unique -
  * @returns {Kriteria}
  */
  Kriteria.prototype.merge = function merge(kri, unique) {
    var new_kriteria = new Kriteria(),
        kri_cond_and = kri.getConditionAnd(),
        kri_cond_or = kri.getConditionOr(),
        cond1 = null,
        match = false,
        i = 0, l = 0,
        j = 0, l2 = 0;

    if(this._not_flg !== kri._not_flg) {
      throw new Error("Kriteria#merge - collision to not flag.");
    }

    for(i = 0, l = this._conditionAnd.length; i < l; i = i + 1) {
      new_kriteria.addAnd(this._conditionAnd[i]);
    }

    for(i = 0, l = this._conditionOr.length; i < l; i = i + 1) {
      new_kriteria.addOr(this._conditionOr[i]);
    }

    if(!unique) {
      for(i = 0, l = kri_cond_and.length; i < l; i = i + 1) {
        new_kriteria.addAnd(kri_cond_and[i]);
      }

      for(i = 0, l = kri_cond_or.length; i < l; i = i + 1) {
        new_kriteria.addOr(kri_cond_or[i]);
      }

    } else {
      for(i = 0, l = kri_cond_and.length; i < l; i = i + 1) {
        cond1 = kri_cond_and[i];
        match = false;

        for(j = 0, l2 = this._conditionAnd.length; j < l2; j = j + 1) {
          if(cond1.compareTo(this._conditionAnd[j]) === 0) {
            match = true;
            break;
          }
        }

        if(!match) {
          new_kriteria.addAnd(cond1);
        }
      }

      for(i = 0, l = kri_cond_or.length; i < l; i = i + 1) {
        cond1 = kri_cond_or[i];
        match = false;

        for(j = 0, l2 = this._conditionOr.length; j < l2; j = j + 1) {
          if(cond1.compareTo(this._conditionOr[j]) === 0) {
            match = true;
            break;
          }
        }

        if(!match) {
          new_kriteria.addOr(cond1);
        }
      }
    }

    return new_kriteria;
  };

  /**
  * @public
  * @function
  * @param {Kriteria} kri -
  * @returns {Number}
  *    0 - equal
  *    1 - greater
  *   -1 - less
  */
  Kriteria.prototype.compareTo = function compareTo(kri) {
    var sort_func = function(a, b) {
          return a.compareTo(b);
        },
        kri_cond_and = kri.getConditionAnd(),
        kri_cond_or = kri.getConditionOr(),
        cond1 = null,
        cond2 = null,
        compared = true,
        len1 = 0, len2 = 0,
        i = 0, l = 0;

    this._conditionAnd.sort(sort_func);
    kri_cond_and.sort(sort_func);
    this._conditionOr.sort(sort_func);
    kri_cond_or.sort(sort_func);

    if(this._not_flg && !kri._not_flg) {
      return -1;
    } else if(!this._not_flg && kri._not_flg) {
      return 1;
    }

    len1 = this._conditionAnd.length;
    len2 = kri_cond_and.length;
    l = len1 > len2 ? len1 : len2;
    for(i = 0; i < l; i = i + 1) {
      cond1 = this._conditionAnd[i];
      cond2 = kri_cond_and[i];

      if(!cond1) {
        return -1;
      } else if(!cond2) {
        return 1;
      }

      compared = cond1.compareTo(cond2);

      if(compared !== 0) {
        return compared;
      }
    }

    len1 = this._conditionOr.length;
    len2 = kri_cond_or.length;
    l = len1 > len2 ? len1 : len2;
    for(i = 0; i < l; i = i + 1) {
      cond1 = this._conditionOr[i];
      cond2 = kri_cond_or[i];

      if(!cond1) {
        return -1;
      } else if(!cond2) {
        return 1;
      }

      compared = cond1.compareTo(cond2);

      if(compared !== 0) {
        return compared;
      }
    }

    return 0;
  };

  /**
  * @public
  * @function
  * @param {String[]} prefixes -
  * @returns {Kriteria}
  */
  Kriteria.prototype.removePrefixes = function removePrefixes(prefixes) {
    var rex = null,
        condition = null,
        i = 0, l = 0;

    if(prefixes === null || prefixes === void 0 || !Array.isArray(prefixes) || prefixes.length === 0) {
      return this;
    }

    rex = new RegExp("^(" + prefixes.join("|") + ").");

    for(i = 0, l = this._conditionAnd.length; i < l; i = i + 1) {
      condition = this._conditionAnd[i];

      if(condition.criteria instanceof Kriteria) {
        condition.criteria.removePrefixes(prefixes);

      } else {
        condition.left_key = condition.left_key.replace(rex, "");
        if(condition.key_type === "key") {
          condition.right_key[0] = condition.right_key[0].replace(rex, "");
        }
      }
    }

    for(i = 0, l = this._conditionOr.length; i < l; i = i + 1) {
      condition = this._conditionOr[i];

      if(condition.criteria instanceof Kriteria) {
        condition.criteria.removePrefixes(prefixes);

      } else {
        condition.left_key = condition.left_key.replace(rex, "");
        if(condition.key_type === "key") {
          condition.right_key[0] = condition.right_key[0].replace(rex, "");
        }
      }
    }

    return this;
  };


  cxt.Kriteria = Kriteria;

})((0, eval)("this").window || this);
