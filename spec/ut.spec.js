var Kriteria = require("../dist/js/node/Kriteria.js").Kriteria;
var Condition = require("../dist/js/node/lib/Condition.js").Condition;

describe('test1 - Kriteria.js', function() {

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

  if("111 - Condition match", function(done) {
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

  it('201 - ', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { t1: { key1: 100 },
                t2: { key1: 100 }
              }
      },
      { result: false,
        data: { t1: { key1: 100 },
                t2: { key1: 200 }
              }
      }
    ];

    cri.and("t1.key1").eq.key("t2.key1");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i = i + 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    done();
  });

  it('001 - and key eq value 0', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key: 0 }
      },
      { result: false,
        data: { key: 1 }
      },
      { result: false,
        data: { key1: 0 }
      },
      { result: false,
        data: { key: null }
      },
      { result: false,
        data: { key: void 0 }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").eq.value(0);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('002 - and key eq value 1', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key: 1 }
      },
      { result: false,
        data: { key: 0 }
      },
      { result: false,
        data: { key1: 1 }
      },
      { result: false,
        data: { key: null }
      },
      { result: false,
        data: { key: void 0 }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").eq.value(1);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('003 - and key eq value ""', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key: "" }
      },
      { result: false,
        data: { key: "a" }
      },
      { result: false,
        data: { key: 0 }
      },
      { result: false,
        data: { key1: "" }
      },
      { result: false,
        data: { key: null }
      },
      { result: false,
        data: { key: void 0 }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").eq.value("");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('004 - and key eq value "a"', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key: "a" }
      },
      { result: false,
        data: { key: "b" }
      },
      { result: false,
        data: { key: "" }
      },
      { result: false,
        data: { key1: "a" }
      },
      { result: false,
        data: { key: null }
      },
      { result: false,
        data: { key: void 0 }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").eq.value("a");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('005 - and key eq value null', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key: null }
      },
      { result: false,
        data: { key: 0 }
      },
      { result: false,
        data: { key: 1 }
      },
      { result: false,
        data: { key1: null }
      },
      { result: false,
        data: { key: void 0 }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").eq.value(null);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('006 - and key eq value undefined', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
        data: { key: undefined }
      },
      { result: false,
        data: { key: 0 }
      },
      { result: false,
        data: { key: 1 }
      },
      { result: false,
        data: { key1: undefined }
      },
      { result: false,
        data: { key: null }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").eq.value(undefined);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('007 - and key1 eq value "a", and key2 eq value "b"', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key1: "a", key2: "b" }
      },
      { result: false,
        data: { key1: "a", key2: "a" }
      },
      { result: false,
        data: { key1: "b", key2: "b" }
      },
      { result: false,
        data: { key1: "a" }
      },
      { result: false,
        data: { key2: "b" }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key1").eq.value("a")
       .and("key2").eq.value("b");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('008 - or key1 eq value "a", or key2 eq value "b"', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key1: "a", key2: "b" }
      },
      { result: true,
        data: { key1: "a", key2: "c" }
      },
      { result: true,
        data: { key1: "c", key2: "b" }
      },
      { result: true,
        data: { key1: "a" }
      },
      { result: true,
        data: { key2: "b" }
      },
      { result: false,
        data: { key: "a" }
      },
      { result: false,
        data: { key1: "c" }
      },
      { result: false,
        data: { key2: "c" }
      },
      { result: false,
        data: {}
      }
    ];

    cri.or("key1").eq.value("a")
       .or("key2").eq.value("b");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('009 - or key1 eq value "a", or key2 eq value "b", or key1 eq value"c"', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key1: "a", key2: "b" }
      },
      { result: false,
        data: { key1: "a", key2: "c" }
      },
      { result: true,
        data: { key1: "c", key2: "b" }
      },
      { result: false,
        data: { key1: "a" }
      },
      { result: false,
        data: { key2: "b" }
      },
      { result: true,
        data: { key1: "c" }
      },
      { result: false,
        data: { key: "c" }
      },
      { result: false,
        data: { key2: "c" }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key1").eq.value("a")
       .and("key2").eq.value("b")
       .or("key1").eq.value("c");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('010 - and key ne value "a"', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key: "b" }
      },
      { result: true,
        data: { key: "c" }
      },
      { result: false,
        data: { key: "a" }
      },
      { result: false,
        data: { key1: "b" }
      },
      { result: true,
        data: { key: "" }
      },
      { result: true,
        data: { key: null }
      },
      { result: false,
        data: { key: undefined }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").ne.value("a");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('011 - and key lt value 100', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key: 99 }
      },
      { result: false,
        data: { key: 100 }
      },
      { result: false,
        data: { key: 101 }
      },
      { result: false,
        data: { key1: 99 }
      },
      { result: true,
        data: { key: "" }
      },
      { result: true,
        data: { key: null }
      },
      { result: false,
        data: { key: undefined }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").lt.value(100);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('012 - and key le value 100', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key: 99 }
      },
      { result: true,
        data: { key: 100 }
      },
      { result: false,
        data: { key: 101 }
      },
      { result: false,
        data: { key1: 99 }
      },
      { result: true,
        data: { key: "" }
      },
      { result: true,
        data: { key: null }
      },
      { result: false,
        data: { key: undefined }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").le.value(100);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('013 - and key gt value 100', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
        data: { key: 99 }
      },
      { result: false,
        data: { key: 100 }
      },
      { result: true,
        data: { key: 101 }
      },
      { result: false,
        data: { key1: 101 }
      },
      { result: false,
        data: { key: "" }
      },
      { result: false,
        data: { key: null }
      },
      { result: false,
        data: { key: undefined }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").gt.value(100);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('014 - and key ge value 100', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
        data: { key: 99 }
      },
      { result: true,
        data: { key: 100 }
      },
      { result: true,
        data: { key: 101 }
      },
      { result: false,
        data: { key1: 101 }
      },
      { result: false,
        data: { key: "" }
      },
      { result: false,
        data: { key: null }
      },
      { result: false,
        data: { key: undefined }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").ge.value(100);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('015 - and key in value ("a", "s", "d")', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key: "a" }
      },
      { result: true,
        data: { key: "s" }
      },
      { result: true,
        data: { key: "d" }
      },
      { result: false,
        data: { key: 0 }
      },
      { result: false,
        data: { key: 1 }
      },
      { result: false,
        data: { key: "aa" }
      },
      { result: false,
        data: { key: "f" }
      },
      { result: false,
        data: { key: null }
      },
      { result: false,
        data: { key: undefined }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").in.value("a", "s", "d");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('016 - and key not_in value ("a", "s", "d")', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
        data: { key: "a" }
      },
      { result: false,
        data: { key: "s" }
      },
      { result: false,
        data: { key: "d" }
      },
      { result: true,
        data: { key: 0 }
      },
      { result: true,
        data: { key: 1 }
      },
      { result: true,
        data: { key: "aa" }
      },
      { result: true,
        data: { key: "f" }
      },
      { result: true,
        data: { key: null }
      },
      { result: false,
        data: { key: undefined }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").not_in.value("a", "s", "d");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('017 - and key between 100 and 200', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
        data: { key: 99 }
      },
      { result: true,
        data: { key: 100 }
      },
      { result: true,
        data: { key: 101 }
      },
      { result: true,
        data: { key: 199 }
      },
      { result: true,
        data: { key: 200 }
      },
      { result: false,
        data: { key: 201 }
      },
      { result: false,
        data: { key: null }
      },
      { result: false,
        data: { key: undefined }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").between(100, 200);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('018 - and key1 eq value 50 and (or key2 eq value 100 or key3 eq value 200)', function(done) {
    var cri1 = new Kriteria(),
        cri2 = new Kriteria();
    var test = [
      { result: true,
        data: { key1: 50, key2: 100 }
      },
      { result: true,
        data: { key1: 50, key3: 200 }
      },
      { result: true,
        data: { key1: 50, key2: 100, key3: 200 }
      },
      { result: false,
        data: { key1: 50, key2: 99 }
      },
      { result: false,
        data: { key1: 50, key3: 199 }
      },
      { result: false,
        data: { key1: 49, key2: 100 }
      },
      { result: false,
        data: { key1: 51, kye3: 200 }
      },
      { result: false,
        data: {}
      }
    ];
    cri2.or("key2").eq.value(100)
        .or("key3").eq.value(200);
    cri1.and("key1").eq.value(50)
        .and(cri2);
    var matcher = cri1.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri1.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri1.not();
    matcher = cri1.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri1.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('030 - and ns1.key eq value 100', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { ns1: { key: 100 } }
      },
      { result: false,
        data: { ns1: { key: "100" } }
      },
      { result: false,
        data: { ns1: { key: 0 } }
      },
      { result: false,
        data: { ns1: { key1: 100 } }
      },
      { result: false,
        data: { ns: { key: 100 } }
      },
      { result: false,
        data: { key: 100 }
      },
      { result: false,
        data: { ns1: 100 }
      },
      { result: false,
        data: { ns1: { key: null } }
      },
      { result: false,
        data: { ns1: { key: undefined } }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("ns1.key").eq.value(100);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('031 - and ns1.ns2.key eq value 100', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { ns1: { ns2: { key1: 100 } } }
      },
      { result: false,
        data: { ns1: { ns2: { key1: "100" } } }
      },
      { result: false,
        data: { ns1: { ns2: { key1: 0 } } }
      },
      { result: false,
        data: { ns1: { ns2: { key: 100 } } }
      },
      { result: false,
        data: { ns: { ns2: { key1: 100 } } }
      },
      { result: false,
        data: { ns1: { ns: { key1: 100 } } }
      },
      { result: false,
        data: { ns1: 100 }
      },
      { result: false,
        data: { ns1: { ns2: 100 } }
      },
      { result: false,
        data: { ns1: { ns2: { key1: null } } }
      },
      { result: false,
        data: { ns1: { ns2: { key1: undefined } } }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("ns1.ns2.key1").eq.value(100);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('040 - and key1 eq key key2', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key1: 100, key2: 100 }
      },
      { result: false,
        data: { key1: 100, key2: "100" }
      },
      { result: false,
        data: { key1: "100", key2: 100 }
      },
      { result: false,
        data: { key1: 100, key2: null }
      },
      { result: false,
        data: { key1: 100, key2: undefined }
      },
      { result: false,
        data: { key1: 100 }
      },
      { result: false,
        data: { key1: null, key2: 100 }
      },
      { result: false,
        data: { key1: undefined, key2: 100 }
      },
      { result: false,
        data: { key2: 100 }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key1").eq.key("key2");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('041 - and key1 ne key key2', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key1: 100, key2: 200 }
      },
      { result: true,
        data: { key1: 100, key2: "100" }
      },
      { result: true,
        data: { key1: "100", key2: 100 }
      },
      { result: true,
        data: { key1: 100, key2: null }
      },
      { result: false,
        data: { key1: 100, key2: undefined }
      },
      { result: false,
        data: { key1: 100 }
      },
      { result: true,
        data: { key1: null, key2: 200 }
      },
      { result: false,
        data: { key1: undefined, key2: 200 }
      },
      { result: false,
        data: { key2: 200 }
      },
      { result: false,
        data: { key1: null, key2: null }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key1").ne.key("key2");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('042 - and key1 lt key key2', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key1: 99, key2: 100 }
      },
      { result: false,
        data: { key1: 100, key2: 100 }
      },
      { result: false,
        data: { key1: 101, key2: 100 }
      },
      { result: false,
        data: { key1: 100, key2: null }
      },
      { result: false,
        data: { key1: 100, kye2: undefined }
      },
      { result: true,
        data: { key1: null, key2: 100 }
      },
      { result: false,
        data: { key1: undefined, key2: 100 }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key1").lt.key("key2");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('043 - and key1 le key key2', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key1: 99, key2: 100 }
      },
      { result: true,
        data: { key1: 100, key2: 100 }
      },
      { result: false,
        data: { key1: 101, key2: 100 }
      },
      { result: false,
        data: { key1: 100, key2: null }
      },
      { result: false,
        data: { key1: 100, kye2: undefined }
      },
      { result: true,
        data: { key1: null, key2: 100 }
      },
      { result: false,
        data: { key1: undefined, key2: 100 }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key1").le.key("key2");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('044 - and key1 gt key key2', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
        data: { key1: 99, key2: 100 }
      },
      { result: false,
        data: { key1: 100, key2: 100 }
      },
      { result: true,
        data: { key1: 101, key2: 100 }
      },
      { result: true,
        data: { key1: 100, key2: null }
      },
      { result: false,
        data: { key1: 100, kye2: undefined }
      },
      { result: false,
        data: { key1: null, key2: 100 }
      },
      { result: false,
        data: { key1: undefined, key2: 100 }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key1").gt.key("key2");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('045 - and key1 ge key key2', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
        data: { key1: 99, key2: 100 }
      },
      { result: true,
        data: { key1: 100, key2: 100 }
      },
      { result: true,
        data: { key1: 101, key2: 100 }
      },
      { result: true,
        data: { key1: 100, key2: null }
      },
      { result: false,
        data: { key1: 100, kye2: undefined }
      },
      { result: false,
        data: { key1: null, key2: 100 }
      },
      { result: false,
        data: { key1: undefined, key2: 100 }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key1").ge.key("key2");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('046 - and key1 in key key2', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key1: 100, key2: [100, 200, 300] }
      },
      { result: true,
        data: { key1: 200, key2: [100, 200, 300] }
      },
      { result: true,
        data: { key1: 300, key2: [100, 200, 300] }
      },
      { result: true,
        data: { key1: 100, key2: 100 }
      },
      { result: false,
        data: { key1: 100, key2: [200, 300, 400] }
      },
      { result: false,
        data: { key1: 100, key2: 200 }
      },
      { result: false,
        data: { key1: 100, key: [100, 200, 300] }
      },
      { result: false,
        data: { key: 100, key2: [100, 200, 300] }
      },
      { result: false,
        data: { key1: 100, key2: [] }
      },
      { result: false,
        data: { key1: 100, key2: null }
      },
      { result: false,
        data: { key1: 100, key2: undefined }
      },
      { result: false,
        data: { key1: null, key2: [100, 200, 300] }
      },
      { result: false,
        data: { key1: undefined, key2: [100, 200, 300] }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key1").in.key("key2");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('047 - and key1 not_in key key2', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
        data: { key1: 100, key2: [100, 200, 300] }
      },
      { result: false,
        data: { key1: 200, key2: [100, 200, 300] }
      },
      { result: false,
        data: { key1: 300, key2: [100, 200, 300] }
      },
      { result: false,
        data: { key1: 100, key2: 100 }
      },
      { result: true,
        data: { key1: 100, key2: [200, 300, 400] }
      },
      { result: true,
        data: { key1: 100, key2: 200 }
      },
      { result: false,
        data: { key1: 100, key: [100, 200, 300] }
      },
      { result: false,
        data: { key: 100, key2: [100, 200, 300] }
      },
      { result: true,
        data: { key1: 100, key2: [] }
      },
      { result: true,
        data: { key1: 100, key2: null }
      },
      { result: false,
        data: { key1: 100, key2: undefined }
      },
      { result: true,
        data: { key1: null, key2: [100, 200, 300] }
      },
      { result: false,
        data: { key1: undefined, key2: [100, 200, 300] }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key1").not_in.key("key2");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('048 - and ns1.key1 eq key ns2.key2', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { ns1: { key1: 100 }, ns2: { key2: 100 } }
      },
      { result: false,
        data: { ns1: { key1: 100 }, ns2: { key2: 200 } }
      },
      { result: false,
        data: { ns1: { key1: 100 }, ns2: { key: 100 } }
      },
      { result: false,
        data: { ns1: { key1: 100 }, ns: { key2: 100 } }
      },
      { result: false,
        data: { ns1: { key: 100 }, ns2: { key2: 100 } }
      },
      { result: false,
        data: { ns: { key1: 100 }, ns2: { key2: 100 } }
      },
      { result: false,
        data: { ns1: { key1: 100, key2: 100 } }
      },
      { result: false,
        data: { ns1: { key1: 100 }, ns2: { key2: null } }
      },
      { result: false,
        data: { ns1: { key1: 100 }, ns2: { key2: undefined } }
      },
      { result: false,
        data: { ns1: { key1: null }, ns2: { key2: 100 } }
      },
      { result: false,
        data: { ns1: { key1: undefined }, ns2: { key2: 100 } }
      },
      { result: true,
        data: { ns1: { key1: null }, ns2: { key2: null } }
      },
      { result: false,
        data: { ns1: { key1: null }, ns2: { key2: undefined } }
      },
      { result: false,
        data: { ns1: { key1: undefined }, ns2: { key2: null } }
      },
      { result: false,
        data: { ns1: {}, ns2: {} }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("ns1.key1").eq.key("ns2.key2");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('049 - and ns1.key1 eq key ns1.key2', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { ns1: { key1: 100, key2: 100 } }
      },
      { result: false,
        data: { ns1: { key1: 100, key2: 200 } }
      },
      { result: false,
        data: { ns1: { key1: 100, key: 100 } }
      },
      { result: false,
        data: { ns1: { key: 100, key2: 100 } }
      },
      { result: false,
        data: { ns: { key1: 100, key2: 100 } }
      },
      { result: false,
        data: { ns1: { key1: 100, key2: null } }
      },
      { result: false,
        data: { ns1: { key1: 100, key2: undefined } }
      },
      { result: false,
        data: { ns1: { key1: null, key2: 100 } }
      },
      { result: false,
        data: { ns1: { key1: undefined, key2: 100 } }
      },
      { result: true,
        data: { ns1: { key1: null, key2: null } }
      },
      { result: false,
        data: { ns1: { key1: null, key2: undefined } }
      },
      { result: false,
        data: { ns1: { key1: undefined, key2: null } }
      },
      { result: false,
        data: { ns1: { key1: undefined, key2: undefined } }
      },
      { result: false,
        data: { ns1: {} }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("ns1.key1").eq.key("ns1.key2");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('050 - and key match value 0', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key: 0 }
      },
      { result: false,
        data: { key: 1 }
      },
      { result: false,
        data: { key1: 0 }
      },
      { result: false,
        data: { key: null }
      },
      { result: false,
        data: { key: void 0 }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").match(0);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('051 - and key match ""', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key: "" }
      },
      { result: false,
        data: { key: "a" }
      },
      { result: false,
        data: { key: 0 }
      },
      { result: false,
        data: { key1: "" }
      },
      { result: false,
        data: { key: null }
      },
      { result: false,
        data: { key: void 0 }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").match("");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('052 - and key match "a"', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key: "a" }
      },
      { result: false,
        data: { key: "b" }
      },
      { result: false,
        data: { key: "" }
      },
      { result: false,
        data: { key1: "a" }
      },
      { result: false,
        data: { key: null }
      },
      { result: false,
        data: { key: void 0 }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").match("a");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  if('053 - and key match /^abc/', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key: "abcd" }
      },
      { result: true,
        data: { key: "abc" }
      },
      { result: false,
        data: { key: "aabc" }
      },
      { result: false,
        data: { key: "" }
      },
      { result: false,
        data: { key: 0 }
      },
      { result: false,
        data: { key1: "abc" }
      },
      { result: false,
        data: { key: null }
      },
      { result: false,
        data: { key: void 0 }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").match(/^abc/);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('054 - and key match null', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
        data: { key: null }
      },
      { result: false,
        data: { key: "null" }
      },
      { result: false,
        data: { key: 0 }
      },
      { result: false,
        data: { key: 1 }
      },
      { result: false,
        data: { key1: null }
      },
      { result: false,
        data: { key: void 0 }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").match(null);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('055 - and key match undefined', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
        data: { key: undefined }
      },
      { result: false,
        data: { key: 0 }
      },
      { result: false,
        data: { key: 1 }
      },
      { result: false,
        data: { key1: undefined }
      },
      { result: false,
        data: { key: null }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").match(undefined);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });



  it('056 - and key not_match value 0', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
        data: { key: 0 }
      },
      { result: true,
        data: { key: 1 }
      },
      { result: false,
        data: { key1: 0 }
      },
      { result: true,
        data: { key: null }
      },
      { result: false,
       data: { key: void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("key").not_match(0);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('057 - and key not_match ""', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
        data: { key: "" }
      },
      { result: true,
        data: { key: "a" }
      },
      { result: true,
        data: { key: 0 }
      },
      { result: false,
        data: { key1: "" }
      },
      { result: true,
        data: { key: null }
      },
      { result: false,
        data: { key: void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("key").not_match("");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('058 - and key not_match "a"', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
        data: { key: "a" }
      },
      { result: true,
        data: { key: "b" }
      },
      { result: true,
        data: { key: "" }
      },
      { result: false,
        data: { key1: "a" }
      },
      { result: true,
        data: { key: null }
      },
      { result: false,
       data: { key: void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("key").not_match("a");
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  if('059 - and key not_match /^abc/', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
        data: { key: "abcd" }
      },
      { result: false,
       data: { key: "abc" }
      },
      { result: true,
       data: { key: "aabc" }
      },
      { result: true,
       data: { key: "" }
      },
      { result: true,
       data: { key: 0 }
      },
      { result: false,
       data: { key1: "abc" }
      },
      { result: true,
        data: { key: null }
      },
      { result: false,
        data: { key: void 0 }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").not_match(/^abc/);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('060 - and key not_match null', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
        data: { key: null }
      },
      { result: true,
        data: { key: "null" }
      },
      { result: true,
        data: { key: 0 }
      },
      { result: true,
        data: { key: 1 }
      },
      { result: false,
       data: { key1: null }
      },
      { result: false,
        data: { key: void 0 }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").not_match(null);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

  it('061 - and key not_match undefined', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
        data: { key: undefined }
      },
      { result: false,
        data: { key: 0 }
      },
      { result: false,
        data: { key: 1 }
      },
      { result: false,
        data: { key1: undefined }
      },
      { result: false,
        data: { key: null }
      },
      { result: false,
        data: {}
      }
    ];

    cri.and("key").not_match(undefined);
    var matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(test[i].result);
      expect(matcher(test[i].data)).toEqual(test[i].result);
    }

    cri.not();
    matcher = cri.matcher();

    for(var i = 0, l = test.length; i < l; i += 1) {
      expect(cri.match(test[i].data)).toEqual(!test[i].result);
      expect(matcher(test[i].data)).toEqual(!test[i].result);
    }

    done();
  });

});
