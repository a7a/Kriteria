/* Condition.js */

(function (cxt) {
  "use strict";

  /**
  * @public
  * @class
  * @param {String} left_key -
  * @param {String} operator -
  * @param {Array<String>} right_key -
  * @param {String} key_type -
  * @param {Kriteria} criteria
  * @description
  */
  var Condition = function Condition(left_key, operator, right_key, key_type, criteria) {
    this.left_key = left_key;
    this.operator = operator;
    this.right_key = right_key;
    this.key_type = key_type;
    this.criteria = criteria;
  };

  /**
  * @public
  * @function
  * @returns {Condition}
  * @description
  */
  Condition.prototype.clone = function clone() {
    return new Condition(this.left_key, this.operator, this.right_key.concat(), this.key_type, this.criteria);
  };

  /**
  * @public
  * @function
  * @returns {Conditons}
  * @description
  */
  Condition.prototype.not = function not() {
    switch(this.operator) {
      case "eq":
        this.operator = "ne";
        break;

      case "ne":
        this.operator = "eq";
        break;

      case "lt":
        this.operator = "ge";
        break;

      case "le":
        this.operator = "gt";
        break;

      case "gt":
        this.operator = "le";
        break;

      case "ge":
        this.operator = "lt";
        break;

      case "in":
        this.operator = "not_in";
        break;

      case "not_in":
        this.operator = "in";
        break;

      case "between":
        this.operator = "not_between";
        break;

      case "not_between":
        this.operator = "between";
        break;
    }

    return this;
  };

  /**
  * @public
  * @function
  * @returns Array<Condition>
  */
  Condition.prototype.normalize = function normalize() {
    var ret = [],
        i = 0, l = 0;

    if(this.key_type === "value") {
      switch(this.operator) {
        case "in":
          for(i = 0, l = this.right_key.length; i < l; i = i + 1) {
            ret[ret.length] = new Condition(
              this.left_key, "eq", [this.right_key[i]], this.key_type, null)
            ;
          }
          break;

        case "not_in":
          for(i = 0, l = this.right_key.length; i < l; i = i + 1) {
            ret[ret.length] = new Condition(
              this.left_key, "ne", [this.right_key[i]], this.key_type, null
            );
          }
          break;

        case "between":
          ret[ret.length] = new Condition(
            this.left_key, "ge", [this.right_key[0]], this.key_type, null
          );
          ret[ret.length] = new Condition(
            this.left_key, "le", [this.right_key[1]], this.key_type, null
          );
          break;

        case "not_between":
          ret[ret.length] = new Condition(
            this.left_key, "lt", [this.right_key[0]], this.key_type, null
          );
          ret[ret.length] = new Condition(
            this.left_key, "gt", [this.right_key[1]], this.key_type, null
          );
          break;

        default:
          ret[ret.length] = this.clone();
          break;
      }

    } else {
      ret[ret.length] = this.clone();
    }

    return ret;
  };


  cxt.Condition = Condition;

})(this);
