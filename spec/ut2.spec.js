var Kriteria = require("../dist/js/node/Kriteria.js").Kriteria;

describe('test - Kriteria.js', function() {

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
        data: { key1: 51, key3: 200 }
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
        data: { key1: 100, key2: undefined }
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
        data: { key1: 100, key2: undefined }
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
        data: { key1: 100, key2: undefined }
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
        data: { key1: 100, key2: undefined }
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

  var match_prefix = function match_prefix(str, prefixes) {
    if(prefixes.length === 0) {
      return true;
    }

    for(var i = 0, l = prefixes.length; i < l; i = i + 1) {
      if((str + "").indexOf(prefixes[i]) === 0) {
        return true;
      }
    }

    return false;
  };

  var hasPrefix = function hasPrefix(conditions, prefixes) {
    var condition = null,
        result = false;

    for(var i = 0, l = conditions.length; i < l; i = i + 1) {
      condition = conditions[i];

      if(condition instanceof Kriteria) {
        result = hasPrefix(condition.getConditionAnd(), prefixes)
               || hasPrefix(condition.getConditionOr(), prefixes);

      } else {
        result = match_prefix(condition.left_key, prefixes) || match_prefix(condition.right_key[0], prefixes);
      }

      if(result) {
        return true;
      }
    }

    return false;
  };




  it('101 - and key(0) eq value 0', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": 0 }
      },
      { result: false,
       data: { "0": 1 }
      },
      { result: false,
       data: { "1": 0 }
      },
      { result: false,
       data: { "0": null }
      },
      { result: false,
       data: { "0": void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").eq.value(0);
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

  it('102 - and key(0) eq value 1', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": 1 }
      },
      { result: false,
       data: { "0": 0 }
      },
      { result: false,
       data: { "1": 1 }
      },
      { result: false,
       data: { "0": null }
      },
      { result: false,
       data: { "0": void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").eq.value(1);
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

  it('103 - and key(0) eq value ""', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": "" }
      },
      { result: false,
       data: { "0": "a" }
      },
      { result: false,
       data: { "0": 0 }
      },
      { result: false,
       data: { "1": "" }
      },
      { result: false,
       data: { "0": null }
      },
      { result: false,
       data: { "0": void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").eq.value("");
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

  it('104 - and key(0) eq value "a"', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": "a" }
      },
      { result: false,
       data: { "0": "b" }
      },
      { result: false,
       data: { "0": "" }
      },
      { result: false,
       data: { "1": "a" }
      },
      { result: false,
       data: { "0": null }
      },
      { result: false,
       data: { "0": void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").eq.value("a");
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

  it('105 - and key(0) eq value null', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": null }
      },
      { result: false,
       data: { "0": 0 }
      },
      { result: false,
       data: { "0": 1 }
      },
      { result: false,
       data: { "1": null }
      },
      { result: false,
       data: { "0": void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").eq.value(null);
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

  it('106 - and key(0) eq value undefined', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
       data: { "0": undefined }
      },
      { result: false,
       data: { "0": 0 }
      },
      { result: false,
       data: { "0": 1 }
      },
      { result: false,
       data: { "1": undefined }
      },
      { result: false,
       data: { "0": null }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").eq.value(undefined);
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

  it('107 - and key1(0) eq value "a", and key2(1) eq value "b"', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": "a", "1": "b" }
      },
      { result: false,
       data: { "0": "a", "1": "a" }
      },
      { result: false,
       data: { "0": "b", "1": "b" }
      },
      { result: false,
       data: { "0": "a" }
      },
      { result: false,
       data: { "1": "b" }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").eq.value("a")
      .and("1").eq.value("b");
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

  it('108 - or key1(0) eq value "a", or key2(1) eq value "b"', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": "a", "1": "b" }
      },
      { result: true,
       data: { "0": "a", "1": "c" }
      },
      { result: true,
       data: { "0": "c", "1": "b" }
      },
      { result: true,
       data: { "0": "a" }
      },
      { result: true,
       data: { "1": "b" }
      },
      { result: false,
       data: { "2": "a" }
      },
      { result: false,
       data: { "0": "c" }
      },
      { result: false,
       data: { "1": "c" }
      },
      { result: false,
       data: {}
      }
    ];

    cri.or("0").eq.value("a")
      .or("1").eq.value("b");
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

  it('109 - or key1(0) eq value "a", or key2(1) eq value "b", or key1(0) eq value"c"', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": "a", "1": "b" }
      },
      { result: false,
       data: { "0": "a", "1": "c" }
      },
      { result: true,
       data: { "0": "c", "1": "b" }
      },
      { result: false,
       data: { "0": "a" }
      },
      { result: false,
       data: { "1": "b" }
      },
      { result: true,
       data: { "0": "c" }
      },
      { result: false,
       data: { "100": "c" }
      },
      { result: false,
       data: { "1": "c" }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").eq.value("a")
      .and("1").eq.value("b")
      .or("0").eq.value("c");
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

  it('110 - and key(0) ne value "a"', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": "b" }
      },
      { result: true,
       data: { "0": "c" }
      },
      { result: false,
       data: { "0": "a" }
      },
      { result: false,
       data: { "1": "b" }
      },
      { result: true,
       data: { "0": "" }
      },
      { result: true,
       data: { "0": null }
      },
      { result: false,
       data: { "0": undefined }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").ne.value("a");
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

  it('111 - and key(0) lt value 100', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": 99 }
      },
      { result: false,
       data: { "0": 100 }
      },
      { result: false,
       data: { "0": 101 }
      },
      { result: false,
       data: { "1": 99 }
      },
      { result: true,
       data: { "0": "" }
      },
      { result: true,
       data: { "0": null }
      },
      { result: false,
       data: { "0": undefined }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").lt.value(100);
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

  it('112 - and key(0) le value 100', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": 99 }
      },
      { result: true,
       data: { "0": 100 }
      },
      { result: false,
       data: { "0": 101 }
      },
      { result: false,
       data: { "1": 99 }
      },
      { result: true,
       data: { "0": "" }
      },
      { result: true,
       data: { "0": null }
      },
      { result: false,
       data: { "0": undefined }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").le.value(100);
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

  it('113 - and key(0) gt value 100', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
       data: { "0": 99 }
      },
      { result: false,
       data: { "0": 100 }
      },
      { result: true,
       data: { "0": 101 }
      },
      { result: false,
       data: { "1": 101 }
      },
      { result: false,
       data: { "0": "" }
      },
      { result: false,
       data: { "0": null }
      },
      { result: false,
       data: { "0": undefined }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").gt.value(100);
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

  it('114 - and key(0) ge value 100', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
       data: { "0": 99 }
      },
      { result: true,
       data: { "0": 100 }
      },
      { result: true,
       data: { "0": 101 }
      },
      { result: false,
       data: { "1": 101 }
      },
      { result: false,
       data: { "0": "" }
      },
      { result: false,
       data: { "0": null }
      },
      { result: false,
       data: { "0": undefined }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").ge.value(100);
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

  it('115 - and key(0) in value ("a", "s", "d")', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": "a" }
      },
      { result: true,
       data: { "0": "s" }
      },
      { result: true,
       data: { "0": "d" }
      },
      { result: false,
       data: { "0": 0 }
      },
      { result: false,
       data: { "0": 1 }
      },
      { result: false,
       data: { "0": "aa" }
      },
      { result: false,
       data: { "0": "f" }
      },
      { result: false,
       data: { "0": null }
      },
      { result: false,
       data: { "0": undefined }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").in.value("a", "s", "d");
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

  it('116 - and key(0) not_in value ("a", "s", "d")', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
       data: { "0": "a" }
      },
      { result: false,
       data: { "0": "s" }
      },
      { result: false,
       data: { "0": "d" }
      },
      { result: true,
       data: { "0": 0 }
      },
      { result: true,
       data: { "0": 1 }
      },
      { result: true,
       data: { "0": "aa" }
      },
      { result: true,
       data: { "0": "f" }
      },
      { result: true,
       data: { "0": null }
      },
      { result: false,
       data: { "0": undefined }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").not_in.value("a", "s", "d");
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

  it('117 - and key(0) between 100 and 200', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
       data: { "0": 99 }
      },
      { result: true,
       data: { "0": 100 }
      },
      { result: true,
       data: { "0": 101 }
      },
      { result: true,
       data: { "0": 199 }
      },
      { result: true,
       data: { "0": 200 }
      },
      { result: false,
       data: { "0": 201 }
      },
      { result: false,
       data: { "0": null }
      },
      { result: false,
       data: { "0": undefined }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").between(100, 200);
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

  it('118 - and key1(0) eq value 50 and (or key2(1) eq value 100 or key3(2) eq value 200)', function(done) {
    var cri1 = new Kriteria(),
        cri2 = new Kriteria();
    var test = [
      { result: true,
       data: { "0": 50, "1": 100 }
      },
      { result: true,
       data: { "0": 50, "2": 200 }
      },
      { result: true,
       data: { "0": 50, "1": 100, "2": 200 }
      },
      { result: false,
       data: { "0": 50, "1": 99 }
      },
      { result: false,
       data: { "0": 50, "2": 199 }
      },
      { result: false,
       data: { "0": 49, "1": 100 }
      },
      { result: false,
       data: { "0": 51, "2": 200 }
      },
      { result: false,
       data: {}
      }
    ];
    cri2.or("1").eq.value(100)
      .or("2").eq.value(200);
    cri1.and("0").eq.value(50)
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

  it('130 - and ns1.key(0.1) eq value 100', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": { "1": 100 } }
      },
      { result: false,
       data: { "0": { "1": "100" } }
      },
      { result: false,
       data: { "0": { "1": 0 } }
      },
      { result: false,
       data: { "0": { "3": 100 } }
      },
      { result: false,
       data: { "2": { "1": 100 } }
      },
      { result: false,
       data: { "1": 100 }
      },
      { result: false,
       data: { "0": 100 }
      },
      { result: false,
       data: { "0": { "1": null } }
      },
      { result: false,
       data: { "0": { "1": undefined } }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0.1").eq.value(100);
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

  it('131 - and ns1.ns2.key(0.1.2) eq value 100', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": { "1": { "2": 100 } } }
      },
      { result: false,
       data: { "0": { "1": { "2": "100" } } }
      },
      { result: false,
       data: { "0": { "1": { "2": 0 } } }
      },
      { result: false,
       data: { "0": { "1": { "4": 100 } } }
      },
      { result: false,
       data: { "3": { "1": { "2": 100 } } }
      },
      { result: false,
       data: { "0": { "3": { "2": 100 } } }
      },
      { result: false,
       data: { "0": 100 }
      },
      { result: false,
       data: { "0": { "1": 100 } }
      },
      { result: false,
       data: { "0": { "1": { "2": null } } }
      },
      { result: false,
       data: { "0": { "1": { "2": undefined } } }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0.1.2").eq.value(100);
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

  it('140 - and key1(0) eq key key2(1)', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": 100, "1": 100 }
      },
      { result: false,
       data: { "0": 100, "1": "100" }
      },
      { result: false,
       data: { "0": "100", "1": 100 }
      },
      { result: false,
       data: { "0": 100, "1": null }
      },
      { result: false,
       data: { "0": 100, "1": undefined }
      },
      { result: false,
       data: { "0": 100 }
      },
      { result: false,
       data: { "0": null, "1": 100 }
      },
      { result: false,
       data: { "0": undefined, "1": 100 }
      },
      { result: false,
       data: { "1": 100 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").eq.key("1");
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

  it('141 - and key1(0) ne key key2(1)', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": 100, "1": 200 }
      },
      { result: true,
       data: { "0": 100, "1": "100" }
      },
      { result: true,
       data: { "0": "100", "1": 100 }
      },
      { result: true,
       data: { "0": 100, "1": null }
      },
      { result: false,
       data: { "0": 100, "1": undefined }
      },
      { result: false,
       data: { "0": 100 }
      },
      { result: true,
       data: { "0": null, "1": 200 }
      },
      { result: false,
       data: { "0": undefined, "1": 200 }
      },
      { result: false,
       data: { "1": 200 }
      },
      { result: false,
       data: { "0": null, "1": null }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").ne.key("1");
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

  it('142 - and key1(0) lt key key2(1)', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": 99, "1": 100 }
      },
      { result: false,
       data: { "0": 100, "1": 100 }
      },
      { result: false,
       data: { "0": 101, "1": 100 }
      },
      { result: false,
       data: { "0": 100, "1": null }
      },
      { result: false,
       data: { "0": 100, "1": undefined }
      },
      { result: true,
       data: { "0": null, "1": 100 }
      },
      { result: false,
       data: { "0": undefined, "1": 100 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").lt.key("1");
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

  it('143 - and key1(0) le key key2(2)', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": 99, "1": 100 }
      },
      { result: true,
       data: { "0": 100, "1": 100 }
      },
      { result: false,
       data: { "0": 101, "1": 100 }
      },
      { result: false,
       data: { "0": 100, "1": null }
      },
      { result: false,
       data: { "0": 100, "1": undefined }
      },
      { result: true,
       data: { "0": null, "1": 100 }
      },
      { result: false,
       data: { "0": undefined, "1": 100 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").le.key("1");
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

  it('144 - and key1(0) gt key key2(1)', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
       data: { "0": 99, "1": 100 }
      },
      { result: false,
       data: { "0": 100, "1": 100 }
      },
      { result: true,
       data: { "0": 101, "1": 100 }
      },
      { result: true,
       data: { "0": 100, "1": null }
      },
      { result: false,
       data: { "0": 100, "1": undefined }
      },
      { result: false,
       data: { "0": null, "1": 100 }
      },
      { result: false,
       data: { "0": undefined, "1": 100 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").gt.key("1");
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

  it('145 - and key1(0) ge key key2(1)', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
       data: { "0": 99, "1": 100 }
      },
      { result: true,
       data: { "0": 100, "1": 100 }
      },
      { result: true,
       data: { "0": 101, "1": 100 }
      },
      { result: true,
       data: { "0": 100, "1": null }
      },
      { result: false,
       data: { "0": 100, "1": undefined }
      },
      { result: false,
       data: { "0": null, "1": 100 }
      },
      { result: false,
       data: { "0": undefined, "1": 100 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").ge.key("1");
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

  it('146 - and key1(0) in key key2(1)', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": 100, "1": [100, 200, 300] }
      },
      { result: true,
       data: { "0": 200, "1": [100, 200, 300] }
      },
      { result: true,
       data: { "0": 300, "1": [100, 200, 300] }
      },
      { result: true,
       data: { "0": 100, "1": 100 }
      },
      { result: false,
       data: { "0": 100, "1": [200, 300, 400] }
      },
      { result: false,
       data: { "0": 100, "1": 200 }
      },
      { result: false,
       data: { "0": 100, "3": [100, 200, 300] }
      },
      { result: false,
       data: { "3": 100, "1": [100, 200, 300] }
      },
      { result: false,
       data: { "0": 100, "1": [] }
      },
      { result: false,
       data: { "0": 100, "1": null }
      },
      { result: false,
       data: { "0": 100, "1": undefined }
      },
      { result: false,
       data: { "0": null, "1": [100, 200, 300] }
      },
      { result: false,
       data: { "0": undefined, "1": [100, 200, 300] }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").in.key("1");
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

  it('147 - and key1(0) not_in key key2(1)', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
       data: { "0": 100, "1": [100, 200, 300] }
      },
      { result: false,
       data: { "0": 200, "1": [100, 200, 300] }
      },
      { result: false,
       data: { "0": 300, "1": [100, 200, 300] }
      },
      { result: false,
       data: { "0": 100, "1": 100 }
      },
      { result: true,
       data: { "0": 100, "1": [200, 300, 400] }
      },
      { result: true,
       data: { "0": 100, "1": 200 }
      },
      { result: false,
       data: { "0": 100, "3": [100, 200, 300] }
      },
      { result: false,
       data: { "3": 100, "1": [100, 200, 300] }
      },
      { result: true,
       data: { "0": 100, "1": [] }
      },
      { result: true,
       data: { "0": 100, "1": null }
      },
      { result: false,
       data: { "0": 100, "1": undefined }
      },
      { result: true,
       data: { "0": null, "1": [100, 200, 300] }
      },
      { result: false,
       data: { "0": undefined, "1": [100, 200, 300] }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").not_in.key("1");
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

  it('148 - and ns1.key1(0.1) eq key ns2.key2(2.3)', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": { "1": 100 }, "2": { "3": 100 } }
      },
      { result: false,
       data: { "0": { "1": 100 }, "2": { "3": 200 } }
      },
      { result: false,
       data: { "0": { "1": 100 }, "2": { "4": 100 } }
      },
      { result: false,
       data: { "0": { "1": 100 }, "5": { "3": 100 } }
      },
      { result: false,
       data: { "0": { "4": 100 }, "2": { "3": 100 } }
      },
      { result: false,
       data: { "5": { "1": 100 }, "2": { "3": 100 } }
      },
      { result: false,
       data: { "0": { "1": 100, "3": 100 } }
      },
      { result: false,
       data: { "0": { "1": 100 }, "2": { "3": null } }
      },
      { result: false,
       data: { "0": { "1": 100 }, "2": { "3": undefined } }
      },
      { result: false,
       data: { "0": { "1": null }, "2": { "3": 100 } }
      },
      { result: false,
       data: { "0": { "1": undefined }, "2": { "3": 100 } }
      },
      { result: true,
       data: { "0": { "1": null }, "2": { "3": null } }
      },
      { result: false,
       data: { "0": { "1": null }, "2": { "3": undefined } }
      },
      { result: false,
       data: { "0": { "1": undefined }, "2": { "3": null } }
      },
      { result: false,
       data: { "0": {}, "2": {} }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0.1").eq.key("2.3");
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

  it('149 - and ns1.key1(0.1) eq key ns1.key2(1.2)', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": { "1": 100, "2": 100 } }
      },
      { result: false,
       data: { "0": { "1": 100, "2": 200 } }
      },
      { result: false,
       data: { "0": { "1": 100, "4": 100 } }
      },
      { result: false,
       data: { "0": { "4": 100, "2": 100 } }
      },
      { result: false,
       data: { "3": { "1": 100, "2": 100 } }
      },
      { result: false,
       data: { "0": { "1": 100, "2": null } }
      },
      { result: false,
       data: { "0": { "1": 100, "2": undefined } }
      },
      { result: false,
       data: { "0": { "1": null, "2": 100 } }
      },
      { result: false,
       data: { "0": { "1": undefined, "2": 100 } }
      },
      { result: true,
       data: { "0": { "1": null, "2": null } }
      },
      { result: false,
       data: { "0": { "1": null, "2": undefined } }
      },
      { result: false,
       data: { "0": { "1": undefined, "2": null } }
      },
      { result: false,
       data: { "0": { "1": undefined, "2": undefined } }
      },
      { result: false,
       data: { "0": {} }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0.1").eq.key("0.2");
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

  it('150 - and key(0) match value 0', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": 0 }
      },
      { result: false,
       data: { "0": 1 }
      },
      { result: false,
       data: { "1": 0 }
      },
      { result: false,
       data: { "0": null }
      },
      { result: false,
       data: { "0": void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").match(0);
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

  it('151 - and key(0) match ""', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": "" }
      },
      { result: false,
       data: { "0": "a" }
      },
      { result: false,
       data: { "0": 0 }
      },
      { result: false,
       data: { "1": "" }
      },
      { result: false,
       data: { "0": null }
      },
      { result: false,
       data: { "0": void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").match("");
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

  it('152 - and key(0) match "a"', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": "a" }
      },
      { result: false,
       data: { "0": "b" }
      },
      { result: false,
       data: { "0": "" }
      },
      { result: false,
       data: { "1": "a" }
      },
      { result: false,
       data: { "0": null }
      },
      { result: false,
       data: { "0": void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").match("a");
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

  if('153 - and key(0) match /^abc/', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": "abcd" }
      },
      { result: true,
       data: { "0": "abc" }
      },
      { result: false,
       data: { "0": "aabc" }
      },
      { result: false,
       data: { "0": "" }
      },
      { result: false,
       data: { "0": 0 }
      },
      { result: false,
       data: { "1": "abc" }
      },
      { result: false,
       data: { "0": null }
      },
      { result: false,
       data: { "0": void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").match(/^abc/);
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

  it('154 - and key(0) match null', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: true,
       data: { "0": null }
      },
      { result: false,
       data: { "0": "null" }
      },
      { result: false,
       data: { "0": 0 }
      },
      { result: false,
       data: { "0": 1 }
      },
      { result: false,
       data: { "1": null }
      },
      { result: false,
       data: { "0": void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").match(null);
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

  it('155 - and key(0) match undefined', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
       data: { "0": undefined }
      },
      { result: false,
       data: { "0": 0 }
      },
      { result: false,
       data: { "0": 1 }
      },
      { result: false,
       data: { "1": undefined }
      },
      { result: false,
       data: { "0": null }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").match(undefined);
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



  it('!56 - and key(0) not_match value 0', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
       data: { "0": 0 }
      },
      { result: true,
       data: { "0": 1 }
      },
      { result: false,
       data: { "1": 0 }
      },
      { result: true,
       data: { "0": null }
      },
      { result: false,
       data: { "0": void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").not_match(0);
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

  it('157 - and key(0) not_match ""', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
       data: { "0": "" }
      },
      { result: true,
       data: { "0": "a" }
      },
      { result: true,
       data: { "0": 0 }
      },
      { result: false,
       data: { "1": "" }
      },
      { result: true,
       data: { "0": null }
      },
      { result: false,
       data: { "0": void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").not_match("");
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

  it('158 - and key(0) not_match "a"', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
       data: { "0": "a" }
      },
      { result: true,
       data: { "0": "b" }
      },
      { result: true,
       data: { "0": "" }
      },
      { result: false,
       data: { "1": "a" }
      },
      { result: true,
       data: { "0": null }
      },
      { result: false,
       data: { "0": void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").not_match("a");
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

  if('159 - and key(0) not_match /^abc/', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
       data: { "0": "abcd" }
      },
      { result: false,
       data: { "0": "abc" }
      },
      { result: true,
       data: { "0": "aabc" }
      },
      { result: true,
       data: { "0": "" }
      },
      { result: true,
       data: { "0": 0 }
      },
      { result: false,
       data: { "1": "abc" }
      },
      { result: true,
       data: { "0": null }
      },
      { result: false,
       data: { "0": void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").not_match(/^abc/);
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

  it('160 - and key(0) not_match null', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
       data: { "0": null }
      },
      { result: true,
       data: { "0": "null" }
      },
      { result: true,
       data: { "0": 0 }
      },
      { result: true,
       data: { "0": 1 }
      },
      { result: false,
       data: { "1": null }
      },
      { result: false,
       data: { "0": void 0 }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").not_match(null);
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

  it('161 - and key(0) not_match undefined', function(done) {
    var cri = new Kriteria();
    var test = [
      { result: false,
       data: { "0": undefined }
      },
      { result: false,
       data: { "0": 0 }
      },
      { result: false,
       data: { "0": 1 }
      },
      { result: false,
       data: { "1": undefined }
      },
      { result: false,
       data: { "0": null }
      },
      { result: false,
       data: {}
      }
    ];

    cri.and("0").not_match(undefined);
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


// *****************************************

  it("400 - compareTo", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.and("key1").eq.value(100);
    kri2.and("key1").eq.value(100);

    expect(kri1.compareTo(kri2)).toEqual(0);

    done();
  });

  it("500 - compareTo", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.and("key1").eq.value(100)
        .and("key2").eq.value(200);
    kri2.and("key2").eq.value(200)
        .and("key1").eq.value(100);

    expect(kri1.compareTo(kri2)).toEqual(0);

    done();
  });

  it("501 - compareTo", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.and("key1").eq.value(100)
        .and("key2").eq.value(200);
    kri2.and("key1").eq.value(100);

    expect(kri1.compareTo(kri2)).toEqual(1);

    done();
  });

  it("502 - compareTo", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.and("key1").eq.value(100)
        .and("key2").eq.value(200);
    kri2.and("key2").eq.value(200);

    expect(kri1.compareTo(kri2)).toEqual(-1);

    done();
  });

  it("503 - compareTo", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.and("key1").eq.value(100);
    kri2.and("key2").eq.value(200)
        .and("key1").eq.value(100);

    expect(kri1.compareTo(kri2)).toEqual(-1);

    done();
  });

  it("504 - compareTo", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.and("key2").eq.value(200);
    kri2.and("key2").eq.value(200)
        .and("key1").eq.value(100);

    expect(kri1.compareTo(kri2)).toEqual(1);

    done();
  });

  it("505 - compareTo", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.or("key1").eq.value(100)
        .or("key2").eq.value(200);
    kri2.or("key2").eq.value(200)
        .or("key1").eq.value(100);

    expect(kri1.compareTo(kri2)).toEqual(0);

    done();
  });

  it("506 - compareTo", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.or("key1").eq.value(100)
        .or("key2").eq.value(200);
    kri2.or("key1").eq.value(100);

    expect(kri1.compareTo(kri2)).toEqual(1);

    done();
  });

  it("507 - compareTo", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.or("key1").eq.value(100)
        .or("key2").eq.value(200);
    kri2.or("key2").eq.value(200);

    expect(kri1.compareTo(kri2)).toEqual(-1);

    done();
  });

  it("508 - compareTo", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.or("key1").eq.value(100);
    kri2.or("key2").eq.value(200)
        .or("key1").eq.value(100);

    expect(kri1.compareTo(kri2)).toEqual(-1);

    done();
  });

  it("509 - compareTo", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.or("key2").eq.value(200);
    kri2.or("key2").eq.value(200)
        .or("key1").eq.value(100);

    expect(kri1.compareTo(kri2)).toEqual(1);

    done();
  });

  it("600 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null;

    kri1.and("key1").eq.value(100);
    kri2.and("key1").eq.value(100);

    kri3 = kri1.merge(kri2);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 2 &&
        k3or.length === 0 &&
        k3and[0].left_key === "key1" &&
        k3and[0].operator === "eq" &&
        k3and[0].key_type === "value" &&
        k3and[0].right_key[0] === 100 &&
        k3and[1].left_key === "key1" &&
        k3and[1].operator === "eq" &&
        k3and[1].key_type === "value" &&
        k3and[1].right_key[0] === 100;

    expect(test_result).toEqual(true);

    done();
  });

  it("601 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null;

    kri1.and("key1").eq.value(100);
    kri2.and("key1").eq.value(100);

    kri3 = kri1.merge(kri2, true);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 1 &&
        k3or.length === 0 &&
        k3and[0].left_key === "key1" &&
        k3and[0].operator === "eq" &&
        k3and[0].key_type === "value" &&
        k3and[0].right_key[0] === 100;

    expect(test_result).toEqual(true);

    done();
  });

  it("602 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null;

    kri1.and("key1").eq.value(100);
    kri2.and("key1").eq.value(200);

    kri3 = kri1.merge(kri2);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 2 &&
        k3or.length === 0 &&
        k3and[0].left_key === "key1" &&
        k3and[0].operator === "eq" &&
        k3and[0].key_type === "value" &&
        k3and[0].right_key[0] === 100 &&
        k3and[1].left_key === "key1" &&
        k3and[1].operator === "eq" &&
        k3and[1].key_type === "value" &&
        k3and[1].right_key[0] === 200;

    expect(test_result).toEqual(true);

    done();
  });

  it("603 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null;

    kri1.and("key1").eq.value(100);
    kri2.and("key1").eq.value(200);

    kri3 = kri1.merge(kri2, true);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 2 &&
        k3or.length === 0 &&
        k3and[0].left_key === "key1" &&
        k3and[0].operator === "eq" &&
        k3and[0].key_type === "value" &&
        k3and[0].right_key[0] === 100 &&
        k3and[1].left_key === "key1" &&
        k3and[1].operator === "eq" &&
        k3and[1].key_type === "value" &&
        k3and[1].right_key[0] === 200;

    expect(test_result).toEqual(true);

    done();
  });

  it("604 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null;

    kri1.and("key2").eq.value(100)
        .and("key1").eq.value(100)
        .and("key1").eq.value(200);
    kri2.and("key1").eq.value(100);

    kri3 = kri1.merge(kri2);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 4 &&
        k3or.length === 0 &&
        k3and[0].left_key === "key2" &&
        k3and[0].operator === "eq" &&
        k3and[0].key_type === "value" &&
        k3and[0].right_key[0] === 100 &&
        k3and[1].left_key === "key1" &&
        k3and[1].operator === "eq" &&
        k3and[1].key_type === "value" &&
        k3and[1].right_key[0] === 100 &&
        k3and[2].left_key === "key1" &&
        k3and[2].operator === "eq" &&
        k3and[2].key_type === "value" &&
        k3and[2].right_key[0] === 200 &&
        k3and[3].left_key === "key1" &&
        k3and[3].operator === "eq" &&
        k3and[3].key_type === "value" &&
        k3and[3].right_key[0] === 100;

    expect(test_result).toEqual(true);

    done();
  });

  it("605 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null;

    kri1.and("key2").eq.value(100)
        .and("key1").eq.value(100)
        .and("key1").eq.value(200);
    kri2.and("key1").eq.value(100);

    kri3 = kri1.merge(kri2, true);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 3 &&
        k3or.length === 0 &&
        k3and[0].left_key === "key2" &&
        k3and[0].operator === "eq" &&
        k3and[0].key_type === "value" &&
        k3and[0].right_key[0] === 100 &&
        k3and[1].left_key === "key1" &&
        k3and[1].operator === "eq" &&
        k3and[1].key_type === "value" &&
        k3and[1].right_key[0] === 100 &&
        k3and[2].left_key === "key1" &&
        k3and[2].operator === "eq" &&
        k3and[2].key_type === "value" &&
        k3and[2].right_key[0] === 200;

    expect(test_result).toEqual(true);

    done();
  });

  it("606 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null;

    kri1.and("key2").eq.value(100)
        .and("key1").eq.value(100)
        .and("key1").eq.value(200);
    kri2.and("key1").eq.value(100);

    kri3 = kri2.merge(kri1);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 4 &&
        k3or.length === 0 &&
        k3and[0].left_key === "key1" &&
        k3and[0].operator === "eq" &&
        k3and[0].key_type === "value" &&
        k3and[0].right_key[0] === 100 &&
        k3and[1].left_key === "key2" &&
        k3and[1].operator === "eq" &&
        k3and[1].key_type === "value" &&
        k3and[1].right_key[0] === 100 &&
        k3and[2].left_key === "key1" &&
        k3and[2].operator === "eq" &&
        k3and[2].key_type === "value" &&
        k3and[2].right_key[0] === 100 &&
        k3and[3].left_key === "key1" &&
        k3and[3].operator === "eq" &&
        k3and[3].key_type === "value" &&
        k3and[3].right_key[0] === 200;

    expect(test_result).toEqual(true);

    done();
  });

  it("607 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null;

    kri1.and("key2").eq.value(100)
        .and("key1").eq.value(100)
        .and("key1").eq.value(200);
    kri2.and("key1").eq.value(100);

    kri3 = kri2.merge(kri1, true);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 3 &&
        k3or.length === 0 &&
        k3and[0].left_key === "key1" &&
        k3and[0].operator === "eq" &&
        k3and[0].key_type === "value" &&
        k3and[0].right_key[0] === 100 &&
        k3and[1].left_key === "key2" &&
        k3and[1].operator === "eq" &&
        k3and[1].key_type === "value" &&
        k3and[1].right_key[0] === 100 &&
        k3and[2].left_key === "key1" &&
        k3and[2].operator === "eq" &&
        k3and[2].key_type === "value" &&
        k3and[2].right_key[0] === 200;

    expect(test_result).toEqual(true);

    done();
  });

  it("608 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null,
        kri4 = new Kriteria(),
        kri5 = new Kriteria();

    kri1.and("key1").eq.value(100);
    kri2.and("key1").eq.value(100);
    kri4.and(kri1);
    kri5.and(kri2);

    kri3 = kri4.merge(kri5);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 2 &&
        k3or.length === 0 &&
        k3and[0].criteria.getConditionAnd()[0].left_key === "key1" &&
        k3and[0].criteria.getConditionAnd()[0].operator === "eq" &&
        k3and[0].criteria.getConditionAnd()[0].key_type === "value" &&
        k3and[0].criteria.getConditionAnd()[0].right_key[0] === 100 &&
        k3and[1].criteria.getConditionAnd()[0].left_key === "key1" &&
        k3and[1].criteria.getConditionAnd()[0].operator === "eq" &&
        k3and[1].criteria.getConditionAnd()[0].key_type === "value" &&
        k3and[1].criteria.getConditionAnd()[0].right_key[0] === 100;

    expect(test_result).toEqual(true);

    done();
  });

  it("609 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null,
        kri4 = new Kriteria(),
        kri5 = new Kriteria();

    kri1.and("key1").eq.value(100);
    kri2.and("key1").eq.value(100);
    kri4.and(kri1);
    kri5.and(kri2);

    kri3 = kri4.merge(kri5, true);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 1 &&
        k3or.length === 0 &&
        k3and[0].criteria.getConditionAnd()[0].left_key === "key1" &&
        k3and[0].criteria.getConditionAnd()[0].operator === "eq" &&
        k3and[0].criteria.getConditionAnd()[0].key_type === "value" &&
        k3and[0].criteria.getConditionAnd()[0].right_key[0] === 100;

    expect(test_result).toEqual(true);

    done();
  });

  it("610 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null,
        kri4 = new Kriteria(),
        kri5 = new Kriteria();

    kri1.and("key1").eq.value(100);
    kri2.and("key1").eq.value(200);
    kri4.and(kri1);
    kri5.and(kri2);

    kri3 = kri4.merge(kri5);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 2 &&
        k3or.length === 0 &&
        k3and[0].criteria.getConditionAnd()[0].left_key === "key1" &&
        k3and[0].criteria.getConditionAnd()[0].operator === "eq" &&
        k3and[0].criteria.getConditionAnd()[0].key_type === "value" &&
        k3and[0].criteria.getConditionAnd()[0].right_key[0] === 100 &&
        k3and[1].criteria.getConditionAnd()[0].left_key === "key1" &&
        k3and[1].criteria.getConditionAnd()[0].operator === "eq" &&
        k3and[1].criteria.getConditionAnd()[0].key_type === "value" &&
        k3and[1].criteria.getConditionAnd()[0].right_key[0] === 200;

    expect(test_result).toEqual(true);

    done();
  });

  it("611 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null,
        kri4 = new Kriteria(),
        kri5 = new Kriteria();

    kri1.and("key1").eq.value(100);
    kri2.and("key1").eq.value(200);
    kri4.and(kri1);
    kri5.and(kri2);

    kri3 = kri4.merge(kri5, true);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 2 &&
        k3or.length === 0 &&
        k3and[0].criteria.getConditionAnd()[0].left_key === "key1" &&
        k3and[0].criteria.getConditionAnd()[0].operator === "eq" &&
        k3and[0].criteria.getConditionAnd()[0].key_type === "value" &&
        k3and[0].criteria.getConditionAnd()[0].right_key[0] === 100 &&
        k3and[1].criteria.getConditionAnd()[0].left_key === "key1" &&
        k3and[1].criteria.getConditionAnd()[0].operator === "eq" &&
        k3and[1].criteria.getConditionAnd()[0].key_type === "value" &&
        k3and[1].criteria.getConditionAnd()[0].right_key[0] === 200;

    expect(test_result).toEqual(true);

    done();
  });

  it("612 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null,
        kri4 = new Kriteria(),
        kri5 = new Kriteria();

    kri1.and("key2").eq.value(100)
        .and("key1").eq.value(100)
        .and("key1").eq.value(200);
    kri2.and("key1").eq.value(100);
    kri4.and(kri1);
    kri5.and(kri2);

    kri3 = kri4.merge(kri5);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 2 &&
        k3or.length === 0 &&
        k3and[0].criteria.getConditionAnd()[0].left_key === "key2" &&
        k3and[0].criteria.getConditionAnd()[0].operator === "eq" &&
        k3and[0].criteria.getConditionAnd()[0].key_type === "value" &&
        k3and[0].criteria.getConditionAnd()[0].right_key[0] === 100 &&
        k3and[0].criteria.getConditionAnd()[1].left_key === "key1" &&
        k3and[0].criteria.getConditionAnd()[1].operator === "eq" &&
        k3and[0].criteria.getConditionAnd()[1].key_type === "value" &&
        k3and[0].criteria.getConditionAnd()[1].right_key[0] === 100 &&
        k3and[0].criteria.getConditionAnd()[2].left_key === "key1" &&
        k3and[0].criteria.getConditionAnd()[2].operator === "eq" &&
        k3and[0].criteria.getConditionAnd()[2].key_type === "value" &&
        k3and[0].criteria.getConditionAnd()[2].right_key[0] === 200 &&
        k3and[1].criteria.getConditionAnd()[0].left_key === "key1" &&
        k3and[1].criteria.getConditionAnd()[0].operator === "eq" &&
        k3and[1].criteria.getConditionAnd()[0].key_type === "value" &&
        k3and[1].criteria.getConditionAnd()[0].right_key[0] === 100;

    expect(test_result).toEqual(true);

    done();
  });

  it("613 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null,
        kri4 = new Kriteria(),
        kri5 = new Kriteria();

    kri1.and("key2").eq.value(100)
        .and("key1").eq.value(100)
        .and("key1").eq.value(200);
    kri2.and("key1").eq.value(100);
    kri4.and(kri1);
    kri5.and(kri2);

    kri3 = kri4.merge(kri5, true);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 2 &&
        k3or.length === 0 &&
        k3and[0].criteria.getConditionAnd()[0].left_key === "key1" &&
        k3and[0].criteria.getConditionAnd()[0].operator === "eq" &&
        k3and[0].criteria.getConditionAnd()[0].key_type === "value" &&
        k3and[0].criteria.getConditionAnd()[0].right_key[0] === 100 &&
        k3and[0].criteria.getConditionAnd()[1].left_key === "key1" &&
        k3and[0].criteria.getConditionAnd()[1].operator === "eq" &&
        k3and[0].criteria.getConditionAnd()[1].key_type === "value" &&
        k3and[0].criteria.getConditionAnd()[1].right_key[0] === 200 &&
        k3and[0].criteria.getConditionAnd()[2].left_key === "key2" &&
        k3and[0].criteria.getConditionAnd()[2].operator === "eq" &&
        k3and[0].criteria.getConditionAnd()[2].key_type === "value" &&
        k3and[0].criteria.getConditionAnd()[2].right_key[0] === 100 &&
        k3and[1].criteria.getConditionAnd()[0].left_key === "key1" &&
        k3and[1].criteria.getConditionAnd()[0].operator === "eq" &&
        k3and[1].criteria.getConditionAnd()[0].key_type === "value" &&
        k3and[1].criteria.getConditionAnd()[0].right_key[0] === 100;

    expect(test_result).toEqual(true);

    done();
  });

  it("614 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null,
        kri4 = new Kriteria(),
        kri5 = new Kriteria();

    kri1.and("key2").eq.value(100)
　　     .and("key1").eq.value(100)
   　　  .and("key1").eq.value(200);
    kri2.and("key1").eq.value(100);
    kri4.and(kri1);
    kri5.and(kri2);

    kri3 = kri4.merge(kri5);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 2 &&
        k3or.length === 0 &&
        k3and[0].criteria.getConditionAnd()[0].left_key === "key2" &&
        k3and[0].criteria.getConditionAnd()[0].operator === "eq" &&
        k3and[0].criteria.getConditionAnd()[0].key_type === "value" &&
        k3and[0].criteria.getConditionAnd()[0].right_key[0] === 100 &&
        k3and[0].criteria.getConditionAnd()[1].left_key === "key1" &&
        k3and[0].criteria.getConditionAnd()[1].operator === "eq" &&
        k3and[0].criteria.getConditionAnd()[1].key_type === "value" &&
        k3and[0].criteria.getConditionAnd()[1].right_key[0] === 100 &&
        k3and[0].criteria.getConditionAnd()[2].left_key === "key1" &&
        k3and[0].criteria.getConditionAnd()[2].operator === "eq" &&
        k3and[0].criteria.getConditionAnd()[2].key_type === "value" &&
        k3and[0].criteria.getConditionAnd()[2].right_key[0] === 200 &&
        k3and[1].criteria.getConditionAnd()[0].left_key === "key1" &&
        k3and[1].criteria.getConditionAnd()[0].operator === "eq" &&
        k3and[1].criteria.getConditionAnd()[0].key_type === "value" &&
        k3and[1].criteria.getConditionAnd()[0].right_key[0] === 100;

    expect(test_result).toEqual(true);

    done();
  });

 it("615 - merge", function(done) {
   var kri1 = new Kriteria(),
       kri2 = new Kriteria(),
       kri3 = null,
       kri4 = new Kriteria(),
       kri5 = new Kriteria();

   kri1.and("key2").eq.value(100)
       .and("key1").eq.value(100)
       .and("key1").eq.value(200);
   kri2.and("key1").eq.value(100);
   kri4.and(kri1);
   kri5.and(kri2);

   kri3 = kri4.merge(kri5, true);

   var k3and = kri3.getConditionAnd(),
       k3or = kri3.getConditionOr();

   var test_result =
       k3and.length === 2 &&
       k3or.length === 0 &&
       k3and[0].criteria.getConditionAnd()[0].left_key === "key1" &&
       k3and[0].criteria.getConditionAnd()[0].operator === "eq" &&
       k3and[0].criteria.getConditionAnd()[0].key_type === "value" &&
       k3and[0].criteria.getConditionAnd()[0].right_key[0] === 100 &&
       k3and[0].criteria.getConditionAnd()[1].left_key === "key1" &&
       k3and[0].criteria.getConditionAnd()[1].operator === "eq" &&
       k3and[0].criteria.getConditionAnd()[1].key_type === "value" &&
       k3and[0].criteria.getConditionAnd()[1].right_key[0] === 200 &&
       k3and[0].criteria.getConditionAnd()[2].left_key === "key2" &&
       k3and[0].criteria.getConditionAnd()[2].operator === "eq" &&
       k3and[0].criteria.getConditionAnd()[2].key_type === "value" &&
       k3and[0].criteria.getConditionAnd()[2].right_key[0] === 100 &&
       k3and[1].criteria.getConditionAnd()[0].left_key === "key1" &&
       k3and[1].criteria.getConditionAnd()[0].operator === "eq" &&
       k3and[1].criteria.getConditionAnd()[0].key_type === "value" &&
       k3and[1].criteria.getConditionAnd()[0].right_key[0] === 100;

   expect(test_result).toEqual(true);

   done();
 });

 it("616 - merge", function(done) {
   var kri1 = new Kriteria(),
       kri2 = new Kriteria(),
       kri3 = null;

   kri1.or("key1").eq.value(100);
   kri2.or("key1").eq.value(100);

   kri3 = kri1.merge(kri2);

   var k3and = kri3.getConditionAnd(),
       k3or = kri3.getConditionOr();

   var test_result =
       k3and.length === 0 &&
       k3or.length === 2 &&
       k3or[0].left_key === "key1" &&
       k3or[0].operator === "eq" &&
       k3or[0].key_type === "value" &&
       k3or[0].right_key[0] === 100 &&
       k3or[1].left_key === "key1" &&
       k3or[1].operator === "eq" &&
       k3or[1].key_type === "value" &&
       k3or[1].right_key[0] === 100;

   expect(test_result).toEqual(true);

   done();
 });

 it("617 - merge", function(done) {
   var kri1 = new Kriteria(),
       kri2 = new Kriteria(),
       kri3 = null;

   kri1.or("key1").eq.value(100);
   kri2.or("key1").eq.value(100);

   kri3 = kri1.merge(kri2, true);

   var k3and = kri3.getConditionAnd(),
       k3or = kri3.getConditionOr();

   var test_result =
       k3and.length === 0 &&
       k3or.length === 1 &&
       k3or[0].left_key === "key1" &&
       k3or[0].operator === "eq" &&
       k3or[0].key_type === "value" &&
       k3or[0].right_key[0] === 100;

   expect(test_result).toEqual(true);

   done();
 });

 it("618 - merge", function(done) {
   var kri1 = new Kriteria(),
       kri2 = new Kriteria(),
       kri3 = null;

   kri1.or("key1").eq.value(100);
   kri2.or("key1").eq.value(200);

   kri3 = kri1.merge(kri2);

   var k3and = kri3.getConditionAnd(),
       k3or = kri3.getConditionOr();

   var test_result =
       k3and.length === 0 &&
       k3or.length === 2 &&
       k3or[0].left_key === "key1" &&
       k3or[0].operator === "eq" &&
       k3or[0].key_type === "value" &&
       k3or[0].right_key[0] === 100 &&
       k3or[1].left_key === "key1" &&
       k3or[1].operator === "eq" &&
       k3or[1].key_type === "value" &&
       k3or[1].right_key[0] === 200;

   expect(test_result).toEqual(true);

   done();
 });

 it("619 - merge", function(done) {
   var kri1 = new Kriteria(),
       kri2 = new Kriteria(),
       kri3 = null;

   kri1.or("key1").eq.value(100);
   kri2.or("key1").eq.value(200);

   kri3 = kri1.merge(kri2, true);

   var k3and = kri3.getConditionAnd(),
       k3or = kri3.getConditionOr();

   var test_result =
       k3and.length === 0 &&
       k3or.length === 2 &&
       k3or[0].left_key === "key1" &&
       k3or[0].operator === "eq" &&
       k3or[0].key_type === "value" &&
       k3or[0].right_key[0] === 100 &&
       k3or[1].left_key === "key1" &&
       k3or[1].operator === "eq" &&
       k3or[1].key_type === "value" &&
       k3or[1].right_key[0] === 200;

   expect(test_result).toEqual(true);

   done();
 });

 it("620 - merge", function(done) {
   var kri1 = new Kriteria(),
       kri2 = new Kriteria(),
       kri3 = null;

   kri1.or("key2").eq.value(100)
       .or("key1").eq.value(100)
       .or("key1").eq.value(200);
   kri2.or("key1").eq.value(100);

   kri3 = kri1.merge(kri2);

   var k3and = kri3.getConditionAnd(),
       k3or = kri3.getConditionOr();

   var test_result =
       k3and.length === 0 &&
       k3or.length === 4 &&
       k3or[0].left_key === "key2" &&
       k3or[0].operator === "eq" &&
       k3or[0].key_type === "value" &&
       k3or[0].right_key[0] === 100 &&
       k3or[1].left_key === "key1" &&
       k3or[1].operator === "eq" &&
       k3or[1].key_type === "value" &&
       k3or[1].right_key[0] === 100 &&
       k3or[2].left_key === "key1" &&
       k3or[2].operator === "eq" &&
       k3or[2].key_type === "value" &&
       k3or[2].right_key[0] === 200 &&
       k3or[3].left_key === "key1" &&
       k3or[3].operator === "eq" &&
       k3or[3].key_type === "value" &&
       k3or[3].right_key[0] === 100;

   expect(test_result).toEqual(true);

   done();
 });

 it("621 - merge", function(done) {
   var kri1 = new Kriteria(),
       kri2 = new Kriteria(),
       kri3 = null;

   kri1.or("key2").eq.value(100)
       .or("key1").eq.value(100)
       .or("key1").eq.value(200);
   kri2.or("key1").eq.value(100);

   kri3 = kri1.merge(kri2, true);

   var k3and = kri3.getConditionAnd(),
       k3or = kri3.getConditionOr();

   var test_result =
       k3and.length === 0 &&
       k3or.length === 3 &&
       k3or[0].left_key === "key2" &&
       k3or[0].operator === "eq" &&
       k3or[0].key_type === "value" &&
       k3or[0].right_key[0] === 100 &&
       k3or[1].left_key === "key1" &&
       k3or[1].operator === "eq" &&
       k3or[1].key_type === "value" &&
       k3or[1].right_key[0] === 100 &&
       k3or[2].left_key === "key1" &&
       k3or[2].operator === "eq" &&
       k3or[2].key_type === "value" &&
       k3or[2].right_key[0] === 200;

   expect(test_result).toEqual(true);

   done();
 });

 it("622 - merge", function(done) {
   var kri1 = new Kriteria(),
       kri2 = new Kriteria(),
       kri3 = null;

   kri1.or("key2").eq.value(100)
       .or("key1").eq.value(100)
       .or("key1").eq.value(200);
   kri2.or("key1").eq.value(100);

   kri3 = kri2.merge(kri1);

   var k3and = kri3.getConditionAnd(),
       k3or = kri3.getConditionOr();

   var test_result =
       k3and.length === 0 &&
       k3or.length === 4 &&
       k3or[0].left_key === "key1" &&
       k3or[0].operator === "eq" &&
       k3or[0].key_type === "value" &&
       k3or[0].right_key[0] === 100 &&
       k3or[1].left_key === "key2" &&
       k3or[1].operator === "eq" &&
       k3or[1].key_type === "value" &&
       k3or[1].right_key[0] === 100 &&
       k3or[2].left_key === "key1" &&
       k3or[2].operator === "eq" &&
       k3or[2].key_type === "value" &&
       k3or[2].right_key[0] === 100 &&
       k3or[3].left_key === "key1" &&
       k3or[3].operator === "eq" &&
       k3or[3].key_type === "value" &&
       k3or[3].right_key[0] === 200;

   expect(test_result).toEqual(true);

   done();
 });

 it("623 - merge", function(done) {
   var kri1 = new Kriteria(),
       kri2 = new Kriteria(),
       kri3 = null;

   kri1.or("key2").eq.value(100)
       .or("key1").eq.value(100)
       .or("key1").eq.value(200);
   kri2.or("key1").eq.value(100);

   kri3 = kri2.merge(kri1, true);

   var k3and = kri3.getConditionAnd(),
       k3or = kri3.getConditionOr();

   var test_result =
       k3and.length === 0 &&
       k3or.length === 3 &&
       k3or[0].left_key === "key1" &&
       k3or[0].operator === "eq" &&
       k3or[0].key_type === "value" &&
       k3or[0].right_key[0] === 100 &&
       k3or[1].left_key === "key2" &&
       k3or[1].operator === "eq" &&
       k3or[1].key_type === "value" &&
       k3or[1].right_key[0] === 100 &&
       k3or[2].left_key === "key1" &&
       k3or[2].operator === "eq" &&
       k3or[2].key_type === "value" &&
       k3or[2].right_key[0] === 200;

   expect(test_result).toEqual(true);

   done();
 });

 it("624 - merge", function(done) {
   var kri1 = new Kriteria(),
       kri2 = new Kriteria(),
       kri3 = null,
       kri4 = new Kriteria(),
       kri5 = new Kriteria();

   kri1.or("key1").eq.value(100);
   kri2.or("key1").eq.value(100);
   kri4.or(kri1);
   kri5.or(kri2);

   kri3 = kri4.merge(kri5);

   var k3and = kri3.getConditionAnd(),
       k3or = kri3.getConditionOr();

   var test_result =
       k3and.length === 0 &&
       k3or.length === 2 &&
       k3or[0].criteria.getConditionOr()[0].left_key === "key1" &&
       k3or[0].criteria.getConditionOr()[0].operator === "eq" &&
       k3or[0].criteria.getConditionOr()[0].key_type === "value" &&
       k3or[0].criteria.getConditionOr()[0].right_key[0] === 100 &&
       k3or[1].criteria.getConditionOr()[0].left_key === "key1" &&
       k3or[1].criteria.getConditionOr()[0].operator === "eq" &&
       k3or[1].criteria.getConditionOr()[0].key_type === "value" &&
       k3or[1].criteria.getConditionOr()[0].right_key[0] === 100;

   expect(test_result).toEqual(true);

   done();
 });

 it("625 - merge", function(done) {
   var kri1 = new Kriteria(),
       kri2 = new Kriteria(),
       kri3 = null,
       kri4 = new Kriteria(),
       kri5 = new Kriteria();

   kri1.or("key1").eq.value(100);
   kri2.or("key1").eq.value(100);
   kri4.or(kri1);
   kri5.or(kri2);

   kri3 = kri4.merge(kri5, true);

   var k3and = kri3.getConditionAnd(),
       k3or = kri3.getConditionOr();

   var test_result =
       k3and.length === 0 &&
       k3or.length === 1 &&
       k3or[0].criteria.getConditionOr()[0].left_key === "key1" &&
       k3or[0].criteria.getConditionOr()[0].operator === "eq" &&
       k3or[0].criteria.getConditionOr()[0].key_type === "value" &&
       k3or[0].criteria.getConditionOr()[0].right_key[0] === 100;

   expect(test_result).toEqual(true);

   done();
 });

 it("626 - merge", function(done) {
   var kri1 = new Kriteria(),
       kri2 = new Kriteria(),
       kri3 = null,
       kri4 = new Kriteria(),
       kri5 = new Kriteria();

   kri1.or("key1").eq.value(100);
   kri2.or("key1").eq.value(200);
   kri4.or(kri1);
   kri5.or(kri2);

   kri3 = kri4.merge(kri5);

   var k3and = kri3.getConditionAnd(),
       k3or = kri3.getConditionOr();

   var test_result =
       k3and.length === 0 &&
       k3or.length === 2 &&
       k3or[0].criteria.getConditionOr()[0].left_key === "key1" &&
       k3or[0].criteria.getConditionOr()[0].operator === "eq" &&
       k3or[0].criteria.getConditionOr()[0].key_type === "value" &&
       k3or[0].criteria.getConditionOr()[0].right_key[0] === 100 &&
       k3or[1].criteria.getConditionOr()[0].left_key === "key1" &&
       k3or[1].criteria.getConditionOr()[0].operator === "eq" &&
       k3or[1].criteria.getConditionOr()[0].key_type === "value" &&
       k3or[1].criteria.getConditionOr()[0].right_key[0] === 200;

   expect(test_result).toEqual(true);

   done();
 });

 it("627 - merge", function(done) {
   var kri1 = new Kriteria(),
       kri2 = new Kriteria(),
       kri3 = null,
       kri4 = new Kriteria(),
       kri5 = new Kriteria();

   kri1.or("key1").eq.value(100);
   kri2.or("key1").eq.value(200);
   kri4.or(kri1);
   kri5.or(kri2);

   kri3 = kri4.merge(kri5, true);

   var k3and = kri3.getConditionAnd(),
       k3or = kri3.getConditionOr();

   var test_result =
       k3and.length === 0 &&
       k3or.length === 2 &&
       k3or[0].criteria.getConditionOr()[0].left_key === "key1" &&
       k3or[0].criteria.getConditionOr()[0].operator === "eq" &&
       k3or[0].criteria.getConditionOr()[0].key_type === "value" &&
       k3or[0].criteria.getConditionOr()[0].right_key[0] === 100 &&
       k3or[1].criteria.getConditionOr()[0].left_key === "key1" &&
       k3or[1].criteria.getConditionOr()[0].operator === "eq" &&
       k3or[1].criteria.getConditionOr()[0].key_type === "value" &&
       k3or[1].criteria.getConditionOr()[0].right_key[0] === 200;

   expect(test_result).toEqual(true);

   done();
 });

 it("628 - merge", function(done) {
   var kri1 = new Kriteria(),
       kri2 = new Kriteria(),
       kri3 = null,
       kri4 = new Kriteria(),
       kri5 = new Kriteria();

   kri1.or("key2").eq.value(100)
       .or("key1").eq.value(100)
       .or("key1").eq.value(200);
   kri2.or("key1").eq.value(100);
   kri4.or(kri1);
   kri5.or(kri2);

   kri3 = kri4.merge(kri5);

   var k3and = kri3.getConditionAnd(),
       k3or = kri3.getConditionOr();

   var test_result =
       k3and.length === 0 &&
       k3or.length === 2 &&
       k3or[0].criteria.getConditionOr()[0].left_key === "key2" &&
       k3or[0].criteria.getConditionOr()[0].operator === "eq" &&
       k3or[0].criteria.getConditionOr()[0].key_type === "value" &&
       k3or[0].criteria.getConditionOr()[0].right_key[0] === 100 &&
       k3or[0].criteria.getConditionOr()[1].left_key === "key1" &&
       k3or[0].criteria.getConditionOr()[1].operator === "eq" &&
       k3or[0].criteria.getConditionOr()[1].key_type === "value" &&
       k3or[0].criteria.getConditionOr()[1].right_key[0] === 100 &&
       k3or[0].criteria.getConditionOr()[2].left_key === "key1" &&
       k3or[0].criteria.getConditionOr()[2].operator === "eq" &&
       k3or[0].criteria.getConditionOr()[2].key_type === "value" &&
       k3or[0].criteria.getConditionOr()[2].right_key[0] === 200 &&
       k3or[1].criteria.getConditionOr()[0].left_key === "key1" &&
       k3or[1].criteria.getConditionOr()[0].operator === "eq" &&
       k3or[1].criteria.getConditionOr()[0].key_type === "value" &&
       k3or[1].criteria.getConditionOr()[0].right_key[0] === 100;

   expect(test_result).toEqual(true);

   done();
 });

 it("629 - merge", function(done) {
   var kri1 = new Kriteria(),
       kri2 = new Kriteria(),
       kri3 = null,
       kri4 = new Kriteria(),
       kri5 = new Kriteria();

   kri1.or("key2").eq.value(100)
       .or("key1").eq.value(100)
       .or("key1").eq.value(200);
   kri2.or("key1").eq.value(100);
   kri4.or(kri1);
   kri5.or(kri2);

   kri3 = kri4.merge(kri5, true);

   var k3and = kri3.getConditionAnd(),
       k3or = kri3.getConditionOr();

   var test_result =
       k3and.length === 0 &&
       k3or.length === 2 &&
       k3or[0].criteria.getConditionOr()[0].left_key === "key1" &&
       k3or[0].criteria.getConditionOr()[0].operator === "eq" &&
       k3or[0].criteria.getConditionOr()[0].key_type === "value" &&
       k3or[0].criteria.getConditionOr()[0].right_key[0] === 100 &&
       k3or[0].criteria.getConditionOr()[1].left_key === "key1" &&
       k3or[0].criteria.getConditionOr()[1].operator === "eq" &&
       k3or[0].criteria.getConditionOr()[1].key_type === "value" &&
       k3or[0].criteria.getConditionOr()[1].right_key[0] === 200 &&
       k3or[0].criteria.getConditionOr()[2].left_key === "key2" &&
       k3or[0].criteria.getConditionOr()[2].operator === "eq" &&
       k3or[0].criteria.getConditionOr()[2].key_type === "value" &&
       k3or[0].criteria.getConditionOr()[2].right_key[0] === 100 &&
       k3or[1].criteria.getConditionOr()[0].left_key === "key1" &&
       k3or[1].criteria.getConditionOr()[0].operator === "eq" &&
       k3or[1].criteria.getConditionOr()[0].key_type === "value" &&
       k3or[1].criteria.getConditionOr()[0].right_key[0] === 100;

   expect(test_result).toEqual(true);

   done();
 });

 it("630 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null,
        kri4 = new Kriteria(),
        kri5 = new Kriteria();

   kri1.or("key2").eq.value(100)
       .or("key1").eq.value(100)
       .or("key1").eq.value(200);
   kri2.or("key1").eq.value(100);
   kri4.or(kri1);
   kri5.or(kri2);

   kri3 = kri4.merge(kri5);

   var k3and = kri3.getConditionAnd(),
       k3or = kri3.getConditionOr();

   var test_result =
       k3and.length === 0 &&
       k3or.length === 2 &&
       k3or[0].criteria.getConditionOr()[0].left_key === "key2" &&
       k3or[0].criteria.getConditionOr()[0].operator === "eq" &&
       k3or[0].criteria.getConditionOr()[0].key_type === "value" &&
       k3or[0].criteria.getConditionOr()[0].right_key[0] === 100 &&
       k3or[0].criteria.getConditionOr()[1].left_key === "key1" &&
       k3or[0].criteria.getConditionOr()[1].operator === "eq" &&
       k3or[0].criteria.getConditionOr()[1].key_type === "value" &&
       k3or[0].criteria.getConditionOr()[1].right_key[0] === 100 &&
       k3or[0].criteria.getConditionOr()[2].left_key === "key1" &&
       k3or[0].criteria.getConditionOr()[2].operator === "eq" &&
       k3or[0].criteria.getConditionOr()[2].key_type === "value" &&
       k3or[0].criteria.getConditionOr()[2].right_key[0] === 200 &&
       k3or[1].criteria.getConditionOr()[0].left_key === "key1" &&
       k3or[1].criteria.getConditionOr()[0].operator === "eq" &&
       k3or[1].criteria.getConditionOr()[0].key_type === "value" &&
       k3or[1].criteria.getConditionOr()[0].right_key[0] === 100;

   expect(test_result).toEqual(true);

   done();
 });

  it("631 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null,
        kri4 = new Kriteria(),
        kri5 = new Kriteria();

    kri1.or("key2").eq.value(100)
        .or("key1").eq.value(100)
        .or("key1").eq.value(200);
    kri2.or("key1").eq.value(100);
    kri4.or(kri1);
    kri5.or(kri2);

    kri3 = kri4.merge(kri5, true);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 0 &&
        k3or.length === 2 &&
        k3or[0].criteria.getConditionOr()[0].left_key === "key1" &&
        k3or[0].criteria.getConditionOr()[0].operator === "eq" &&
        k3or[0].criteria.getConditionOr()[0].key_type === "value" &&
        k3or[0].criteria.getConditionOr()[0].right_key[0] === 100 &&
        k3or[0].criteria.getConditionOr()[1].left_key === "key1" &&
        k3or[0].criteria.getConditionOr()[1].operator === "eq" &&
        k3or[0].criteria.getConditionOr()[1].key_type === "value" &&
        k3or[0].criteria.getConditionOr()[1].right_key[0] === 200 &&
        k3or[0].criteria.getConditionOr()[2].left_key === "key2" &&
        k3or[0].criteria.getConditionOr()[2].operator === "eq" &&
        k3or[0].criteria.getConditionOr()[2].key_type === "value" &&
        k3or[0].criteria.getConditionOr()[2].right_key[0] === 100 &&
        k3or[1].criteria.getConditionOr()[0].left_key === "key1" &&
        k3or[1].criteria.getConditionOr()[0].operator === "eq" &&
        k3or[1].criteria.getConditionOr()[0].key_type === "value" &&
        k3or[1].criteria.getConditionOr()[0].right_key[0] === 100;

    expect(test_result).toEqual(true);

    done();
  });

  it("632 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null,
        kri4 = new Kriteria(),
        kri5 = new Kriteria();;

    kri1.and("key1").eq.value(100);
    kri2.and("key1").eq.value(100);
    kri4.and(kri1);
    kri5.and(kri2);

    kri3 = kri4.merge(kri5);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 2 &&
        k3or.length === 0 &&
        k3and[0].criteria.getConditionAnd()[0].left_key === "key1" &&
        k3and[0].criteria.getConditionAnd()[0].operator === "eq" &&
        k3and[0].criteria.getConditionAnd()[0].key_type === "value" &&
        k3and[0].criteria.getConditionAnd()[0].right_key[0] === 100 &&
        k3and[1].criteria.getConditionAnd()[0].left_key === "key1" &&
        k3and[1].criteria.getConditionAnd()[0].operator === "eq" &&
        k3and[1].criteria.getConditionAnd()[0].key_type === "value" &&
        k3and[1].criteria.getConditionAnd()[0].right_key[0] === 100;

    expect(test_result).toEqual(true);

    done();
  });

  it("633 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null,
        kri4 = new Kriteria(),
        kri5 = new Kriteria();;

    kri1.and("key1").eq.value(100);
    kri2.and("key1").eq.value(100);
    kri4.and(kri1);
    kri5.and(kri2);

    kri3 = kri4.merge(kri5,true);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 1 &&
        k3or.length === 0 &&
        k3and[0].criteria.getConditionAnd()[0].left_key === "key1" &&
        k3and[0].criteria.getConditionAnd()[0].operator === "eq" &&
        k3and[0].criteria.getConditionAnd()[0].key_type === "value" &&
        k3and[0].criteria.getConditionAnd()[0].right_key[0] === 100;

    expect(test_result).toEqual(true);

    done();
  });

  it("634 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null,
        kri4 = new Kriteria(),
        kri5 = new Kriteria();;

    kri1.or("key1").eq.value(100);
    kri2.or("key1").eq.value(100);
    kri4.or(kri1);
    kri5.or(kri2);

    kri3 = kri4.merge(kri5);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 0 &&
        k3or.length === 2 &&
        k3or[0].criteria.getConditionOr()[0].left_key === "key1" &&
        k3or[0].criteria.getConditionOr()[0].operator === "eq" &&
        k3or[0].criteria.getConditionOr()[0].key_type === "value" &&
        k3or[0].criteria.getConditionOr()[0].right_key[0] === 100 &&
        k3or[1].criteria.getConditionOr()[0].left_key === "key1" &&
        k3or[1].criteria.getConditionOr()[0].operator === "eq" &&
        k3or[1].criteria.getConditionOr()[0].key_type === "value" &&
        k3or[1].criteria.getConditionOr()[0].right_key[0] === 100;

    expect(test_result).toEqual(true);

    done();
  });

  it("635 - merge", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = null,
        kri4 = new Kriteria(),
        kri5 = new Kriteria();;

    kri1.or("key1").eq.value(100);
    kri2.or("key1").eq.value(100);
    kri4.or(kri1);
    kri5.or(kri2);

    kri3 = kri4.merge(kri5,true);

    var k3and = kri3.getConditionAnd(),
        k3or = kri3.getConditionOr();

    var test_result =
        k3and.length === 0 &&
        k3or.length === 1 &&
        k3or[0].criteria.getConditionOr()[0].left_key === "key1" &&
        k3or[0].criteria.getConditionOr()[0].operator === "eq" &&
        k3or[0].criteria.getConditionOr()[0].key_type === "value" &&
        k3or[0].criteria.getConditionOr()[0].right_key[0] === 100;

    expect(test_result).toEqual(true);

    done();
  });

  it("700 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.and("t1").eq.value("t1");
    kri1.or("t1").eq.key("t1");
    kri1.removePrefixes(["t1"]);

    kri2.and("t1").eq.value("t1");
    kri2.or("t1").eq.key("t1");

    expect(kri1.compareTo(kri2)).toEqual(0);

    done();
  });

  it("701 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.and("t1").eq.key("t1");
    kri1.or("t1").eq.key("t1");
    kri1.removePrefixes(["t1"]);

    kri2.and("t1").eq.key("t1");
    kri2.or("t1").eq.key("t1");

    expect(kri1.compareTo(kri2)).toEqual(0);

    done();
  });

  it("702 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.and("t1.key1").eq.value("t1.key1");
    kri1.or("t1.key1").eq.value("t1.key1");
    kri1.removePrefixes(["t1"]);

    kri2.and("key1").eq.value("t1.key1");
    kri2.or("key1").eq.value("t1.key1");

    expect(kri1.compareTo(kri2)).toEqual(0);

    done();
  });

  it("703 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.and("t1.key1").eq.key("t1.key1");
    kri1.or("t1.key1").eq.key("t1.key1");
    kri1.removePrefixes(["t1"]);

    kri2.and("key1").eq.key("key1");
    kri2.or("key1").eq.key("key1");

    expect(kri1.compareTo(kri2)).toEqual(0);

    done();
  });

  it("704 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.and("t1.key1").eq.value("t1.key1");
    kri1.or("t1.key1").eq.value("t1.key1");
    kri1.removePrefixes(["t2"]);

    kri2.and("t1.key1").eq.value("t1.key1");
    kri2.or("t1.key1").eq.value("t1.key1");

    expect(kri1.compareTo(kri2)).toEqual(0);

    done();
  });

  it("705 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.and("t1.key1").eq.key("t1.key1");
    kri1.or("t1.key1").eq.key("t1.key1");
    kri1.removePrefixes(["t2"]);

    kri2.and("t1.key1").eq.key("t1.key1");
    kri2.or("t1.key1").eq.key("t1.key1");

    expect(kri1.compareTo(kri2)).toEqual(0);

    done();
  });

  it("706 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.and("t1.key1").eq.value("t1.key1");
    kri1.or("t1.key1").eq.value("t1.key1");
    kri1.removePrefixes(["t1", "t2"]);

    kri2.and("key1").eq.value("t1.key1");
    kri2.or("key1").eq.value("t1.key1");

    expect(kri1.compareTo(kri2)).toEqual(0);

    done();
  });

  it("707 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.and("t1.key1").eq.key("t1.key1");
    kri1.or("t1.key1").eq.key("t1.key1");
    kri1.removePrefixes(["t1", "t2"]);

    kri2.and("key1").eq.key("key1");
    kri2.or("key1").eq.key("key1");

    expect(kri1.compareTo(kri2)).toEqual(0);

    done();
  });



  it("710 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = new Kriteria(),
        kri4 = new Kriteria();

    kri1.and("t1").eq.value("t1");
    kri1.or("t1").eq.key("t1");
    kri1.removePrefixes(["t1"]);

    kri2.and("t1").eq.value("t1");
    kri2.or("t1").eq.key("t1");

    kri3.and(kri1);
    kri4.and(kri2);

    expect(kri3.compareTo(kri4)).toEqual(0);

    done();
  });

  it("711 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = new Kriteria(),
        kri4 = new Kriteria();

    kri1.and("t1").eq.value("t1");
    kri1.or("t1").eq.key("t1");
    kri1.removePrefixes(["t1"]);

    kri2.and("t1").eq.value("t1");
    kri2.or("t1").eq.key("t1");

    kri3.or(kri1);
    kri4.or(kri2);

    expect(kri3.compareTo(kri4)).toEqual(0);

    done();
  });

  it("712 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = new Kriteria(),
        kri4 = new Kriteria();

    kri1.and("t1").eq.key("t1");
    kri1.or("t1").eq.key("t1");
    kri1.removePrefixes(["t1"]);

    kri2.and("t1").eq.key("t1");
    kri2.or("t1").eq.key("t1");

    kri3.and(kri1);
    kri4.and(kri2);

    expect(kri3.compareTo(kri4)).toEqual(0);

    done();
  });

  it("713 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = new Kriteria(),
        kri4 = new Kriteria();

    kri1.and("t1").eq.key("t1");
    kri1.or("t1").eq.key("t1");
    kri1.removePrefixes(["t1"]);

    kri2.and("t1").eq.key("t1");
    kri2.or("t1").eq.key("t1");

    kri3.or(kri1);
    kri4.or(kri2);

    expect(kri3.compareTo(kri4)).toEqual(0);

    done();
  });

  it("714 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = new Kriteria(),
        kri4 = new Kriteria();

    kri1.and("t1.key1").eq.value("t1.key1");
    kri1.or("t1.key1").eq.value("t1.key1");
    kri1.removePrefixes(["t1"]);

    kri2.and("key1").eq.value("t1.key1");
    kri2.or("key1").eq.value("t1.key1");

    kri3.and(kri1);
    kri4.and(kri2);

    expect(kri3.compareTo(kri4)).toEqual(0);

    done();
  });

  it("715 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = new Kriteria(),
        kri4 = new Kriteria();

    kri1.and("t1.key1").eq.value("t1.key1");
    kri1.or("t1.key1").eq.value("t1.key1");
    kri1.removePrefixes(["t1"]);

    kri2.and("key1").eq.value("t1.key1");
    kri2.or("key1").eq.value("t1.key1");

    kri3.or(kri1);
    kri4.or(kri2);

    expect(kri3.compareTo(kri4)).toEqual(0);

    done();
  });

  it("716 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = new Kriteria(),
        kri4 = new Kriteria();

    kri1.and("t1.key1").eq.key("t1.key1");
    kri1.or("t1.key1").eq.key("t1.key1");
    kri1.removePrefixes(["t1"]);

    kri2.and("key1").eq.key("key1");
    kri2.or("key1").eq.key("key1");

    kri3.and(kri1);
    kri4.and(kri2);

    expect(kri3.compareTo(kri4)).toEqual(0);

    done();
  });

  it("717 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = new Kriteria(),
        kri4 = new Kriteria();

    kri1.and("t1.key1").eq.key("t1.key1");
    kri1.or("t1.key1").eq.key("t1.key1");
    kri1.removePrefixes(["t1"]);

    kri2.and("key1").eq.key("key1");
    kri2.or("key1").eq.key("key1");

    kri3.or(kri1);
    kri4.or(kri2);

    expect(kri3.compareTo(kri4)).toEqual(0);

    done();
  });

  it("718 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = new Kriteria(),
        kri4 = new Kriteria();

    kri1.and("t1.key1").eq.value("t1.key1");
    kri1.or("t1.key1").eq.value("t1.key1");
    kri1.removePrefixes(["t2"]);

    kri2.and("t1.key1").eq.value("t1.key1");
    kri2.or("t1.key1").eq.value("t1.key1");

    kri3.and(kri1);
    kri4.and(kri2);

    expect(kri3.compareTo(kri4)).toEqual(0);

    done();
  });

  it("719 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = new Kriteria(),
        kri4 = new Kriteria();

    kri1.and("t1.key1").eq.value("t1.key1");
    kri1.or("t1.key1").eq.value("t1.key1");
    kri1.removePrefixes(["t2"]);

    kri2.and("t1.key1").eq.value("t1.key1");
    kri2.or("t1.key1").eq.value("t1.key1");

    kri3.or(kri1);
    kri4.or(kri2);

    expect(kri3.compareTo(kri4)).toEqual(0);

    done();
  });

  it("720 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = new Kriteria(),
        kri4 = new Kriteria();

    kri1.and("t1.key1").eq.key("t1.key1");
    kri1.or("t1.key1").eq.key("t1.key1");
    kri1.removePrefixes(["t2"]);

    kri2.and("t1.key1").eq.key("t1.key1");
    kri2.or("t1.key1").eq.key("t1.key1");

    kri3.and(kri1);
    kri4.and(kri2);

    expect(kri3.compareTo(kri4)).toEqual(0);

    done();
  });

  it("721 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = new Kriteria(),
        kri4 = new Kriteria();

    kri1.and("t1.key1").eq.key("t1.key1");
    kri1.or("t1.key1").eq.key("t1.key1");
    kri1.removePrefixes(["t2"]);

    kri2.and("t1.key1").eq.key("t1.key1");
    kri2.or("t1.key1").eq.key("t1.key1");

    kri3.or(kri1);
    kri4.or(kri2);

    expect(kri3.compareTo(kri4)).toEqual(0);

    done();
  });

  it("722 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = new Kriteria(),
        kri4 = new Kriteria();

    kri1.and("t1.key1").eq.value("t1.key1");
    kri1.or("t1.key1").eq.value("t1.key1");
    kri1.removePrefixes(["t1", "t2"]);

    kri2.and("key1").eq.value("t1.key1");
    kri2.or("key1").eq.value("t1.key1");

    kri3.and(kri1);
    kri4.and(kri2);

    expect(kri3.compareTo(kri4)).toEqual(0);

    done();
  });

  it("723 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = new Kriteria(),
        kri4 = new Kriteria();

    kri1.and("t1.key1").eq.value("t1.key1");
    kri1.or("t1.key1").eq.value("t1.key1");
    kri1.removePrefixes(["t1", "t2"]);

    kri2.and("key1").eq.value("t1.key1");
    kri2.or("key1").eq.value("t1.key1");

    kri3.or(kri1);
    kri4.or(kri2);

    expect(kri3.compareTo(kri4)).toEqual(0);

    done();
  });

  it("724 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = new Kriteria(),
        kri4 = new Kriteria();

    kri1.and("t1.key1").eq.key("t1.key1");
    kri1.or("t1.key1").eq.key("t1.key1");
    kri1.removePrefixes(["t1", "t2"]);

    kri2.and("key1").eq.key("key1");
    kri2.or("key1").eq.key("key1");

    kri3.and(kri1);
    kri4.and(kri2);

    expect(kri3.compareTo(kri4)).toEqual(0);

    done();
  });

  it("725 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria(),
        kri3 = new Kriteria(),
        kri4 = new Kriteria();

    kri1.and("t1.key1").eq.key("t1.key1");
    kri1.or("t1.key1").eq.key("t1.key1");
    kri1.removePrefixes(["t1", "t2"]);

    kri2.and("key1").eq.key("key1");
    kri2.or("key1").eq.key("key1");

    kri3.or(kri1);
    kri4.or(kri2);

    expect(kri3.compareTo(kri4)).toEqual(0);

    done();
  });

  it("730 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.and("t1.key1").eq.key("t1.key1");
    kri1.removePrefixes();

    kri2.and("t1.key1").eq.key("t1.key1");

    expect(kri1.compareTo(kri2)).toEqual(0);

    done();
  });

  it("731 - removePrefixes", function(done) {
    var kri1 = new Kriteria(),
        kri2 = new Kriteria();

    kri1.and("t1.key1").eq.key("t1.key1");
    kri1.removePrefixes(null);

    kri2.and("t1.key1").eq.key("t1.key1");

    expect(kri1.compareTo(kri2)).toEqual(0);

    done();
  });

});
