/* Kriteria.js */

(function(cxt) {
  "use strict";

  var getProperty = require("./lib/getProperty.js").getProperty,
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
  * @returns {Array<Condition>}
  */
  Kriteria.prototype.getConditionAnd = function getConditionAnd() {
    return this._conditionAnd;
  };

  /**
  * @public
  * @function
  * @returns {Array<Condition>}
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
  * @returns {Function} evaluation || {Kriteria}
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
  * @param {Object.<Array<Condition> and, Array<Condition> or>} conditions -
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
        tmp = null;

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
          tmp = getProperty(data, right_key[0]);

          if(Array.isArray(tmp)) {
            if(operator === "match" || operator === "not_match") {
              right_value = [];
              for(j = 0, l2 = tmp.length; j < l2; j = j + 1) {
                if(tmp[j] !== null && tmp[j] !== void 0 && tmp !== "") {
                  right_value[j] = new RegExp(tmp[j]);
                } else {
                  right_value[j] = tmp[j];
                }
              }
            } else {
              right_value = tmp;
            }

          } else {
            if(operator === "match" || operator === "not_match") {
              if(tmp !== null && tmp !== void 0 && tmp !== "") {
                right_value = [new RegExp(tmp)];
              } else {
                right_value = tmp;
              }
            } else {
              right_value = [tmp];
            }
          }
        }

        // valueがundefinedの場合はfalse
        if(right_value === void 0 || ~right_value.indexOf(void 0) || left_value === void 0) {
          result = false;
        } else {
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
          tmp = getProperty(data, right_key);

          if(Array.isArray(tmp)) {
            if(operator === "match" || operator === "not_match") {
              right_value = [];
              for(j = 0, l2 = tmp.length; j < l2; j = j + 1) {
                if(tmp[j] !== null && tmp[j] !== void 0 && tmp[j] !== "") {
                  right_value[j] = new RegExp(tmp[j]);
                } else {
                  right_value[j] = tmp[j];
                }
              }
            } else {
              right_value = tmp;
            }
          } else {
            if(operator === "match" || operator === "not_match") {
              if(tmp !== null && tmp !== void 0 && tmp !== "") {
                right_value = [new RegExp(tmp)];
              } else {
                right_value = tmp;
              }
            } else {
              right_value = [tmp];
            }
          }
        }

        if(~right_value.indexOf(void 0) || typeof left_value === "undefined") {
          result = false;
        } else {
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
  * @param {String|Number} value1 -
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
    /* eslint no-eval: 2 */
    return new Function("$", "return " + this.createMatchingExpression());
  };

  /**
  * @public
  * @function
  * @returns {String}
  * @description
  */
  Kriteria.prototype.createMatchingExpression = function createMatchingExpression() {
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
        expAnd[expAnd.length] = "(" + condition.criteria.createMatchingExpression() + ")";

      } else {
        expAnd[expAnd.length] =
          "(" +
          this._createJsExpressionOfKeyIsUndefined(condition.left_key) +
          " && " +
          (
            condition.key_type === "key" ?
              this._createJsExpressionOfKeyIsUndefined(condition.right_key[0]) + " && " :
              ""
          ) +
          this._createJsExpression(condition) +
          ")";
      }
    }

    for(i = 0, l = this._conditionOr.length; i < l; i = i + 1) {
      condition = this._conditionOr[i];

      if(condition.criteria instanceof Kriteria) {
        expOr[expOr.length] = "(" + condition.criteria.createMatchingExpression() + ")";

      } else {
        expOr[expOr.length] =
          "(" +
          this._createJsExpressionOfKeyIsUndefined(condition.left_key) +
          " && " +
          this._createJsExpression(condition) +
          ")";
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
      return left_key + " " + _operator + " " +
             this._toStringExpressionFromValue(right_key[0], key_type);

    } else if(operator === "in") {
      if(key_type === "value") {
        return "!!~" + this._toStringExpressionFromArray(right_key) + ".indexOf(" + left_key + ")";

      } else {
        return "(Array.isArray($." + right_key[0] + ") ? " +
               "!!~$." + right_key[0] + ".indexOf(" + left_key + "): " +
               "$." + right_key[0] + " === " + left_key + ")";
      }

    } else if(operator === "not_in") {
      if(key_type === "value") {
        return "!~" + this._toStringExpressionFromArray(right_key) + ".indexOf(" + left_key + ")";

      } else {
        return "(Array.isArray($." + right_key[0] + ") ? " +
               "!~$." + right_key[0] + ".indexOf(" + left_key + "): " +
               "$." + right_key[0] + " !== " + left_key + ")";
      }

    } else if(operator === "between") {
      return left_key + " >= " + this._toStringExpressionFromValue(right_key[0], key_type) +
             " && " +
             left_key + " <= " + this._toStringExpressionFromValue(right_key[1], key_type);

    } else if(operator === "not_between") {
      return left_key + " < " + this._toStringExpressionFromValue(right_key[0], key_type) +
             " || " +
             left_key + " > " + this._toStringExpressionFromValue(right_key[1], key_type);

    } else if(operator === "match") {
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
  Kriteria.prototype._createJsExpressionOfKeyIsUndefined =
    function _createJsExpressionOfKeyIsUndefined(key) {
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
  * @param {String|Number} value -
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


  cxt.Kriteria = Kriteria;

})((0, eval)("this").window || this);
