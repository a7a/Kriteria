var Condition = require("../dist/js/node/lib/Condition.js").Condition;
var Kriteria = require("../dist/js/node/Kriteria.js").Kriteria;

describe('test - Condition.js', function() {

  var not_operator = {
    "eq": "ne",
    "ne": "eq",
    "lt": "ge",
    "le": "gt",
    "gt": "le",
    "ge": "lt",
    "in": "not_in",
    "not_in": "in",
    "between": "not_between",
    "not_between": "between",
    "match": "not_match",
    "not_match": "match"
  };
  var normalize_operator = {
    "eq": ["eq"],
    "ne": ["ne"],
    "lt": ["lt"],
    "le": ["le"],
    "gt": ["gt"],
    "ge": ["ge"],
    "in": ["eq"],
    "not_in": ["ne"],
    "between": ["between"],
    "not_between": ["lt", "gt"],
    "match": ["match"],
    "not_match": ["not_match"]
  };



  it("101 - Condition eq", function(done) {
    var test = {
      left_key: "key1",
      operator: "eq",
      right_key: ["key2"],
      key_type: "value",
      criteria: null
    };
    var cond = new Condition(
      test.left_key, test.operator, test.right_key, test.key_type, test.criteria
    ),
        cond1 = cond.clone(),
        cond2 = cond.clone().not(),
        cond3 = cond.normalize(),
        cond4 = cond.clone().not().not();

    expect(cond1.left_key).toEqual(test.left_key);
    expect(cond1.operator).toEqual(test.operator);
    expect(cond1.right_key).toEqual(test.right_key);
    expect(cond1.key_type).toEqual(test.key_type);
    expect(cond1.criteria).toEqual(test.criteria);

    expect(cond2.left_key).toEqual(test.left_key);
    expect(cond2.operator).toEqual(not_operator[test.operator]);
    expect(cond2.right_key).toEqual(test.right_key);
    expect(cond2.key_type).toEqual(test.key_type);
    expect(cond2.criteria).toEqual(test.criteria);

    for(var i = 0, l = cond3.length; i < l; i = i + 1) {
      expect(cond3[i].left_key).toEqual(test.left_key);
      expect(cond3[i].operator).toEqual(normalize_operator[test.operator][i]);
      expect(cond3[i].right_key).toEqual([test.right_key[i]]);
      expect(cond3[i].key_type).toEqual(test.key_type);
      expect(cond3[i].criteria).toEqual(test.criteria);
    }

    expect(cond4.left_key).toEqual(test.left_key);
    expect(cond4.operator).toEqual(test.operator);
    expect(cond4.right_key).toEqual(test.right_key);
    expect(cond4.key_type).toEqual(test.key_type);
    expect(cond4.criteria).toEqual(test.criteria);

    done();
  });

  it("102 - Condition ne", function(done) {
    var test = {
      left_key: "key1",
      operator: "ne",
      right_key: ["key2"],
      key_type: "value",
      criteria: null
    };
    var cond = new Condition(
      test.left_key, test.operator, test.right_key, test.key_type, test.criteria
    ),
        cond1 = cond.clone(),
        cond2 = cond.clone().not(),
        cond3 = cond.normalize(),
        cond4 = cond.clone().not().not();

    expect(cond1.left_key).toEqual(test.left_key);
    expect(cond1.operator).toEqual(test.operator);
    expect(cond1.right_key).toEqual(test.right_key);
    expect(cond1.key_type).toEqual(test.key_type);
    expect(cond1.criteria).toEqual(test.criteria);

    expect(cond2.left_key).toEqual(test.left_key);
    expect(cond2.operator).toEqual(not_operator[test.operator]);
    expect(cond2.right_key).toEqual(test.right_key);
    expect(cond2.key_type).toEqual(test.key_type);
    expect(cond2.criteria).toEqual(test.criteria);

    for(var i = 0, l = cond3.length; i < l; i = i + 1) {
      expect(cond3[i].left_key).toEqual(test.left_key);
      expect(cond3[i].operator).toEqual(normalize_operator[test.operator][i]);
      expect(cond3[i].right_key).toEqual([test.right_key[i]]);
      expect(cond3[i].key_type).toEqual(test.key_type);
      expect(cond3[i].criteria).toEqual(test.criteria);
    }

    expect(cond4.left_key).toEqual(test.left_key);
    expect(cond4.operator).toEqual(test.operator);
    expect(cond4.right_key).toEqual(test.right_key);
    expect(cond4.key_type).toEqual(test.key_type);
    expect(cond4.criteria).toEqual(test.criteria);

    done();
  });

  it("103 - Condition lt", function(done) {
    var test = {
      left_key: "key1",
      operator: "lt",
      right_key: ["key2"],
      key_type: "value",
      criteria: null
    };
    var cond = new Condition(
      test.left_key, test.operator, test.right_key, test.key_type, test.criteria
    ),
        cond1 = cond.clone(),
        cond2 = cond.clone().not(),
        cond3 = cond.normalize(),
        cond4 = cond.clone().not().not();

    expect(cond1.left_key).toEqual(test.left_key);
    expect(cond1.operator).toEqual(test.operator);
    expect(cond1.right_key).toEqual(test.right_key);
    expect(cond1.key_type).toEqual(test.key_type);
    expect(cond1.criteria).toEqual(test.criteria);

    expect(cond2.left_key).toEqual(test.left_key);
    expect(cond2.operator).toEqual(not_operator[test.operator]);
    expect(cond2.right_key).toEqual(test.right_key);
    expect(cond2.key_type).toEqual(test.key_type);
    expect(cond2.criteria).toEqual(test.criteria);

    for(var i = 0, l = cond3.length; i < l; i = i + 1) {
      expect(cond3[i].left_key).toEqual(test.left_key);
      expect(cond3[i].operator).toEqual(normalize_operator[test.operator][i]);
      expect(cond3[i].right_key).toEqual([test.right_key[i]]);
      expect(cond3[i].key_type).toEqual(test.key_type);
      expect(cond3[i].criteria).toEqual(test.criteria);
    }

    expect(cond4.left_key).toEqual(test.left_key);
    expect(cond4.operator).toEqual(test.operator);
    expect(cond4.right_key).toEqual(test.right_key);
    expect(cond4.key_type).toEqual(test.key_type);
    expect(cond4.criteria).toEqual(test.criteria);

    done();
  });

  it("104 - Condition le", function(done) {
    var test = {
      left_key: "key1",
      operator: "le",
      right_key: ["key2"],
      key_type: "value",
      criteria: null
    };
    var cond = new Condition(
      test.left_key, test.operator, test.right_key, test.key_type, test.criteria
    ),
        cond1 = cond.clone(),
        cond2 = cond.clone().not(),
        cond3 = cond.normalize(),
        cond4 = cond.clone().not().not();

    expect(cond1.left_key).toEqual(test.left_key);
    expect(cond1.operator).toEqual(test.operator);
    expect(cond1.right_key).toEqual(test.right_key);
    expect(cond1.key_type).toEqual(test.key_type);
    expect(cond1.criteria).toEqual(test.criteria);

    expect(cond2.left_key).toEqual(test.left_key);
    expect(cond2.operator).toEqual(not_operator[test.operator]);
    expect(cond2.right_key).toEqual(test.right_key);
    expect(cond2.key_type).toEqual(test.key_type);
    expect(cond2.criteria).toEqual(test.criteria);

    for(var i = 0, l = cond3.length; i < l; i = i + 1) {
      expect(cond3[i].left_key).toEqual(test.left_key);
      expect(cond3[i].operator).toEqual(normalize_operator[test.operator][i]);
      expect(cond3[i].right_key).toEqual([test.right_key[i]]);
      expect(cond3[i].key_type).toEqual(test.key_type);
      expect(cond3[i].criteria).toEqual(test.criteria);
    }

    expect(cond4.left_key).toEqual(test.left_key);
    expect(cond4.operator).toEqual(test.operator);
    expect(cond4.right_key).toEqual(test.right_key);
    expect(cond4.key_type).toEqual(test.key_type);
    expect(cond4.criteria).toEqual(test.criteria);

    done();
  });

  it("105 - Condition gt", function(done) {
    var test = {
      left_key: "key1",
      operator: "gt",
      right_key: ["key2"],
      key_type: "value",
      criteria: null
    };
    var cond = new Condition(
      test.left_key, test.operator, test.right_key, test.key_type, test.criteria
    ),
        cond1 = cond.clone(),
        cond2 = cond.clone().not(),
        cond3 = cond.normalize(),
        cond4 = cond.clone().not().not();

    expect(cond1.left_key).toEqual(test.left_key);
    expect(cond1.operator).toEqual(test.operator);
    expect(cond1.right_key).toEqual(test.right_key);
    expect(cond1.key_type).toEqual(test.key_type);
    expect(cond1.criteria).toEqual(test.criteria);

    expect(cond2.left_key).toEqual(test.left_key);
    expect(cond2.operator).toEqual(not_operator[test.operator]);
    expect(cond2.right_key).toEqual(test.right_key);
    expect(cond2.key_type).toEqual(test.key_type);
    expect(cond2.criteria).toEqual(test.criteria);

    for(var i = 0, l = cond3.length; i < l; i = i + 1) {
      expect(cond3[i].left_key).toEqual(test.left_key);
      expect(cond3[i].operator).toEqual(normalize_operator[test.operator][i]);
      expect(cond3[i].right_key).toEqual([test.right_key[i]]);
      expect(cond3[i].key_type).toEqual(test.key_type);
      expect(cond3[i].criteria).toEqual(test.criteria);
    }

    expect(cond4.left_key).toEqual(test.left_key);
    expect(cond4.operator).toEqual(test.operator);
    expect(cond4.right_key).toEqual(test.right_key);
    expect(cond4.key_type).toEqual(test.key_type);
    expect(cond4.criteria).toEqual(test.criteria);

    done();
  });

  it("106 - Condition ge", function(done) {
    var test = {
      left_key: "key1",
      operator: "ge",
      right_key: ["key2"],
      key_type: "value",
      criteria: null
    };
    var cond = new Condition(
      test.left_key, test.operator, test.right_key, test.key_type, test.criteria
    ),
        cond1 = cond.clone(),
        cond2 = cond.clone().not(),
        cond3 = cond.normalize(),
        cond4 = cond.clone().not().not();

    expect(cond1.left_key).toEqual(test.left_key);
    expect(cond1.operator).toEqual(test.operator);
    expect(cond1.right_key).toEqual(test.right_key);
    expect(cond1.key_type).toEqual(test.key_type);
    expect(cond1.criteria).toEqual(test.criteria);

    expect(cond2.left_key).toEqual(test.left_key);
    expect(cond2.operator).toEqual(not_operator[test.operator]);
    expect(cond2.right_key).toEqual(test.right_key);
    expect(cond2.key_type).toEqual(test.key_type);
    expect(cond2.criteria).toEqual(test.criteria);

    for(var i = 0, l = cond3.length; i < l; i = i + 1) {
      expect(cond3[i].left_key).toEqual(test.left_key);
      expect(cond3[i].operator).toEqual(normalize_operator[test.operator][i]);
      expect(cond3[i].right_key).toEqual([test.right_key[i]]);
      expect(cond3[i].key_type).toEqual(test.key_type);
      expect(cond3[i].criteria).toEqual(test.criteria);
    }

    expect(cond4.left_key).toEqual(test.left_key);
    expect(cond4.operator).toEqual(test.operator);
    expect(cond4.right_key).toEqual(test.right_key);
    expect(cond4.key_type).toEqual(test.key_type);
    expect(cond4.criteria).toEqual(test.criteria);

    done();
  });

  it("107 - Condition in", function(done) {
    var test = {
      left_key: "key1",
      operator: "in",
      right_key: ["key2"],
      key_type: "value",
      criteria: null
    };
    var cond = new Condition(
      test.left_key, test.operator, test.right_key, test.key_type, test.criteria
    ),
        cond1 = cond.clone(),
        cond2 = cond.clone().not(),
        cond3 = cond.normalize(),
        cond4 = cond.clone().not().not();

    expect(cond1.left_key).toEqual(test.left_key);
    expect(cond1.operator).toEqual(test.operator);
    expect(cond1.right_key).toEqual(test.right_key);
    expect(cond1.key_type).toEqual(test.key_type);
    expect(cond1.criteria).toEqual(test.criteria);

    expect(cond2.left_key).toEqual(test.left_key);
    expect(cond2.operator).toEqual(not_operator[test.operator]);
    expect(cond2.right_key).toEqual(test.right_key);
    expect(cond2.key_type).toEqual(test.key_type);
    expect(cond2.criteria).toEqual(test.criteria);

    for(var i = 0, l = cond3.length; i < l; i = i + 1) {
      expect(cond3[i].left_key).toEqual(test.left_key);
      expect(cond3[i].operator).toEqual(normalize_operator[test.operator][i]);
      expect(cond3[i].right_key).toEqual([test.right_key[i]]);
      expect(cond3[i].key_type).toEqual(test.key_type);
      expect(cond3[i].criteria).toEqual(test.criteria);
    }

    expect(cond4.left_key).toEqual(test.left_key);
    expect(cond4.operator).toEqual(test.operator);
    expect(cond4.right_key).toEqual(test.right_key);
    expect(cond4.key_type).toEqual(test.key_type);
    expect(cond4.criteria).toEqual(test.criteria);

    done();
  });

  it("108 - Condition not_in", function(done) {
    var test = {
      left_key: "key1",
      operator: "not_in",
      right_key: ["key2"],
      key_type: "value",
      criteria: null
    };
    var cond = new Condition(
      test.left_key, test.operator, test.right_key, test.key_type, test.criteria
    ),
        cond1 = cond.clone(),
        cond2 = cond.clone().not(),
        cond3 = cond.normalize(),
        cond4 = cond.clone().not().not();

    expect(cond1.left_key).toEqual(test.left_key);
    expect(cond1.operator).toEqual(test.operator);
    expect(cond1.right_key).toEqual(test.right_key);
    expect(cond1.key_type).toEqual(test.key_type);
    expect(cond1.criteria).toEqual(test.criteria);

    expect(cond2.left_key).toEqual(test.left_key);
    expect(cond2.operator).toEqual(not_operator[test.operator]);
    expect(cond2.right_key).toEqual(test.right_key);
    expect(cond2.key_type).toEqual(test.key_type);
    expect(cond2.criteria).toEqual(test.criteria);

    for(var i = 0, l = cond3.length; i < l; i = i + 1) {
      expect(cond3[i].left_key).toEqual(test.left_key);
      expect(cond3[i].operator).toEqual(normalize_operator[test.operator][i]);
      expect(cond3[i].right_key).toEqual([test.right_key[i]]);
      expect(cond3[i].key_type).toEqual(test.key_type);
      expect(cond3[i].criteria).toEqual(test.criteria);
    }

    expect(cond4.left_key).toEqual(test.left_key);
    expect(cond4.operator).toEqual(test.operator);
    expect(cond4.right_key).toEqual(test.right_key);
    expect(cond4.key_type).toEqual(test.key_type);
    expect(cond4.criteria).toEqual(test.criteria);

    done();
  });

  it("109 - Condition between", function(done) {
    var test = {
      left_key: "key1",
      operator: "between",
      right_key: ["key2"],
      key_type: "value",
      criteria: null
    };
    var test2 = [
      { left_key: "key1",
       operator: "ge",
       right_key: ["key2"],
       key_type: "value",
       criteria: null
      },
      { left_key: "key1",
       operator: "le",
       right_key: ["key2"],
       key_type: "value",
       criteria: null
      }
    ];
    var cond = new Condition(
      test.left_key, test.operator, test.right_key, test.key_type, test.criteria
    ),
        cond1 = cond.clone(),
        cond2 = cond.clone().not(),
        cond3 = cond.normalize(),
        cond4 = cond.clone().not().not();

    expect(cond1.left_key).toEqual(test.left_key);
    expect(cond1.operator).toEqual(test.operator);
    expect(cond1.right_key).toEqual(test.right_key);
    expect(cond1.key_type).toEqual(test.key_type);
    expect(cond1.criteria).toEqual(test.criteria);

    expect(cond2.left_key).toEqual(test.left_key);
    expect(cond2.operator).toEqual(not_operator[test.operator]);
    expect(cond2.right_key).toEqual(test.right_key);
    expect(cond2.key_type).toEqual(test.key_type);
    expect(cond2.criteria).toEqual(test.criteria);

    for(var i = 0, l = cond3.length; i < l; i = i + 1) {
      expect(cond3[i].left_key).toEqual(test2[i].left_key);
      expect(cond3[i].operator).toEqual(test2[i].operator);
      expect(cond3[i].right_key).toEqual([test2[i].right_key[i]]);
      expect(cond3[i].key_type).toEqual(test2[i].key_type);
      expect(cond3[i].criteria).toEqual(test2[i].criteria);
    }

    expect(cond4.left_key).toEqual(test.left_key);
    expect(cond4.operator).toEqual(test.operator);
    expect(cond4.right_key).toEqual(test.right_key);
    expect(cond4.key_type).toEqual(test.key_type);
    expect(cond4.criteria).toEqual(test.criteria);

    done();
  });

  it("110 - Condition not_between", function(done) {
    var test = {
      left_key: "key1",
      operator: "not_between",
      right_key: ["key2"],
      key_type: "value",
      criteria: null
    };
    var cond = new Condition(
      test.left_key, test.operator, test.right_key, test.key_type, test.criteria
    ),
        cond1 = cond.clone(),
        cond2 = cond.clone().not(),
        cond3 = cond.normalize(),
        cond4 = cond.clone().not().not();

    expect(cond1.left_key).toEqual(test.left_key);
    expect(cond1.operator).toEqual(test.operator);
    expect(cond1.right_key).toEqual(test.right_key);
    expect(cond1.key_type).toEqual(test.key_type);
    expect(cond1.criteria).toEqual(test.criteria);

    expect(cond2.left_key).toEqual(test.left_key);
    expect(cond2.operator).toEqual(not_operator[test.operator]);
    expect(cond2.right_key).toEqual(test.right_key);
    expect(cond2.key_type).toEqual(test.key_type);
    expect(cond2.criteria).toEqual(test.criteria);

    for(var i = 0, l = cond3.length; i < l; i = i + 1) {
      expect(cond3[i].left_key).toEqual(test.left_key);
      expect(cond3[i].operator).toEqual(normalize_operator[test.operator][i]);
      expect(cond3[i].right_key).toEqual([test.right_key[i]]);
      expect(cond3[i].key_type).toEqual(test.key_type);
      expect(cond3[i].criteria).toEqual(test.criteria);
    }

    expect(cond4.left_key).toEqual(test.left_key);
    expect(cond4.operator).toEqual(test.operator);
    expect(cond4.right_key).toEqual(test.right_key);
    expect(cond4.key_type).toEqual(test.key_type);
    expect(cond4.criteria).toEqual(test.criteria);

    done();
  });

  it("111 - Condition match", function(done) {
    var test = {
      left_key: "key1",
      operator: "match",
      right_key: ["key2"],
      key_type: "value",
      criteria: null};
    var cond = new Condition(
      test.left_key, test.operator, test.right_key, test.key_type, test.criteria
    ),
        cond1 = cond.clone(),
        cond2 = cond.clone().not(),
        cond3 = cond.normalize(),
        cond4 = cond.clone().not().not();

    expect(cond1.left_key).toEqual(test.left_key);
    expect(cond1.operator).toEqual(test.operator);
    expect(cond1.right_key).toEqual(test.right_key);
    expect(cond1.key_type).toEqual(test.key_type);
    expect(cond1.criteria).toEqual(test.criteria);

    expect(cond2.left_key).toEqual(test.left_key);
    expect(cond2.operator).toEqual(not_operator[test.operator]);
    expect(cond2.right_key).toEqual(test.right_key);
    expect(cond2.key_type).toEqual(test.key_type);
    expect(cond2.criteria).toEqual(test.criteria);

    for(var i = 0, l = cond3.length; i < l; i = i + 1) {
      expect(cond3[i].left_key).toEqual(test.left_key);
      expect(cond3[i].operator).toEqual(normalize_operator[test.operator][i]);
      expect(cond3[i].right_key).toEqual([test.right_key[i]]);
      expect(cond3[i].key_type).toEqual(test.key_type);
      expect(cond3[i].criteria).toEqual(test.criteria);
    }

    expect(cond4.left_key).toEqual(test.left_key);
    expect(cond4.operator).toEqual(test.operator);
    expect(cond4.right_key).toEqual(test.right_key);
    expect(cond4.key_type).toEqual(test.key_type);
    expect(cond4.criteria).toEqual(test.criteria);

    done();
  });

  it("200 - Condition compareTo", function(done) {
    var c1 = new Condition("key1", "eq", [100], "value", null),
        c2 = new Condition("key1", "eq", [100], "value", null);

    expect(c1.compareTo(c2)).toEqual(0);

    done();
  });

  it("201 - Condition compareTo", function(done) {
    var c1 = new Condition("key1", "eq", [100], "value", null),
        c2 = new Condition("key2", "eq", [100], "value", null);

    expect(c1.compareTo(c2)).toEqual(-1);

    done();
  });

  it("202 - Condition compareTo", function(done) {
    var c1 = new Condition("key1", "eq", [100], "value", null),
        c2 = new Condition("key0", "eq", [100], "value", null);

    expect(c1.compareTo(c2)).toEqual(1);

    done();
  });

  it("203 - Condition compareTo", function(done) {
    var c1 = new Condition("key1", "eq", [100], "value", null),
        c2 = new Condition("key1", "ne", [100], "value", null);

    expect(c1.compareTo(c2)).toEqual(-1);

    done();
  });

  it("204 - Condition compareTo", function(done) {
    var c1 = new Condition("key1", "lt", [100], "value", null),
        c2 = new Condition("key1", "gt", [100], "value", null);

    expect(c1.compareTo(c2)).toEqual(1);

    done();
  });

  it("205 - Condition compareTo", function(done) {
    var c1 = new Condition("key1", "eq", [100], "value", null),
        c2 = new Condition("key1", "eq", [200], "value", null);

    expect(c1.compareTo(c2)).toEqual(-1);

    done();
  });

  it("206 - Condition compareTo", function(done) {
    var c1 = new Condition("key1", "eq", [100], "value", null),
        c2 = new Condition("key1", "eq", [90], "value", null);

    expect(c1.compareTo(c2)).toEqual(1);

    done();
  });

  it("207 - Condition compareTo", function(done) {
    var c1 = new Condition("key1", "eq", [100], "key", null),
        c2 = new Condition("key1", "eq", [100], "value", null);

    expect(c1.compareTo(c2)).toEqual(-1);

    done();
  });

  it("208 - Condition compareTo", function(done) {
    var c1 = new Condition("key1", "eq", [100], "value", null),
        c2 = new Condition("key1", "eq", [100], "key", null);

    expect(c1.compareTo(c2)).toEqual(1);

    done();
  });

  it("209 - Condition compareTo", function(done) {
    var k1 = new Kriteria();

    k1.and("key1").eq.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, null);

    expect(c1.compareTo(c2)).toEqual(1);

    done();
  });

  it("210 - Condition compareTo", function(done) {
    var k1 = new Kriteria();

    k1.and("key1").eq.value(100);

    var c1 = new Condition(null, null, null, null, null),
        c2 = new Condition(null, null, null, null, k1);

    expect(c1.compareTo(c2)).toEqual(-1);

    done();
  });

  it("211 - Condition compareTo", function(done) {
    var k1 = new Kriteria();

    k1.and("key1").eq.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k1);

    expect(c1.compareTo(c2)).toEqual(0);

    done();
  });

  it("212 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.and("key1").eq.value(100);
    k2.and("key1").eq.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(0);

    done();
  });

  it("213 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.and("key1").eq.value(100);
    k2.and("key2").eq.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(-1);

    done();
  });

  it("214 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.and("key2").eq.value(100);
    k2.and("key1").eq.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(1);

    done();
  });

  it("215 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.and("key1").eq.value(100);
    k2.and("key1").ne.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(-1);

    done();
  });

  it("216 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.and("key1").between(100, 100);
    k2.and("key1").eq.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(-1);

    done();
  });

  it("217 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.and("key1").eq.key(100);
    k2.and("key1").eq.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(-1);

    done();
  });

  it("218 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.and("key1").eq.value(100);
    k2.and("key1").eq.key(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(1);

    done();
  });

  it("219 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.and("key1").eq.value(100);
    k2.and("key1").eq.value(101);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(-1);

    done();
  });

  it("220 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.and("key2").eq.value(101);
    k2.and("key1").eq.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(1);

    done();
  });

  it("221 - Condition compareTo", function(done) {
    var k1 = new Kriteria();

    k1.or("key1").eq.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, null);

    expect(c1.compareTo(c2)).toEqual(1);

    done();
  });

  it("222 - Condition compareTo", function(done) {
    var k1 = new Kriteria();

    k1.or("key1").eq.value(100);

    var c1 = new Condition(null, null, null, null, null),
        c2 = new Condition(null, null, null, null, k1);

    expect(c1.compareTo(c2)).toEqual(-1);

    done();
  });

  it("223 - Condition compareTo", function(done) {
    var k1 = new Kriteria();

    k1.or("key1").eq.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k1);

    expect(c1.compareTo(c2)).toEqual(0);

    done();
  });

  it("224 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.or("key1").eq.value(100);
    k2.or("key1").eq.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(0);

    done();
  });

  it("225 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.or("key1").eq.value(100);
    k2.or("key2").eq.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(-1);

    done();
  });

  it("226 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.or("key2").eq.value(100);
    k2.or("key1").eq.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(1);

    done();
  });

  it("227 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.or("key1").eq.value(100);
    k2.or("key1").ne.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(-1);

    done();
  });

  it("228 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.or("key1").between(100, 100);
    k2.or("key1").eq.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(-1);

    done();
  });

  it("229 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.or("key1").eq.key(100);
    k2.or("key1").eq.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(-1);

    done();
  });

  it("230 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.or("key1").eq.value(100);
    k2.or("key1").eq.key(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(1);

    done();
  });

  it("231 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.or("key1").eq.value(100);
    k2.or("key1").eq.value(101);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(-1);

    done();
  });

  it("232 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.or("key2").eq.value(101);
    k2.or("key1").eq.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(1);

    done();
  });

  it("233 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.or("key1").eq.value(100).not();
    k2.or("key1").eq.value(100);

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(-1);

    done();
  });

  it("234 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.or("key1").eq.value(100);
    k2.or("key1").eq.value(100).not();

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(1);

    done();
  });

  it("235 - Condition compareTo", function(done) {
    var k1 = new Kriteria(),
        k2 = new Kriteria();

    k1.or("key1").eq.value(100).not();
    k2.or("key1").eq.value(100).not();

    var c1 = new Condition(null, null, null, null, k1),
        c2 = new Condition(null, null, null, null, k2);

    expect(c1.compareTo(c2)).toEqual(0);

    done();
  });

});
