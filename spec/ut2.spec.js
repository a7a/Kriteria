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


  // **************************

//  it('100 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//        .and("table2.key1").eq.value(200)
//        .and("table1.key1").eq.key("table1.key2")
//        .and("table1.key1").eq.key("table2.key1")
//        .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t1cri = cri1.createOfConditionWithKeyPrefixes(prefixes1, [0]),
//        t1and = t1cri.getConditionAnd(),
//        t1or = t1cri.getConditionOr();
//
//    var test_result =
//        t1and.length === 1 &&
//        t1or.length === 0 &&
//        t1and[0].left_key === "table1.key1" &&
//        t1and[0].key_type === "value";
//
//    expect(test_result).toEqual(true);
//
//    var t1cri = cri2.createOfConditionWithKeyPrefixes(prefixes1, [0]),
//        t1and = t1cri.getConditionAnd()[0].getConditionAnd(),
//        t1or = t1cri.getConditionOr();
//
//    var test_result2 =
//        t1and.length === 1 &&
//        t1or.length === 0 &&
//        t1and[0].left_key === "table1.key1" &&
//        t1and[0].key_type === "value";
//
//    expect(test_result2).toEqual(true);
//
//    var t1cri = cri3.createOfConditionWithKeyPrefixes(prefixes1, [0]),
//        t1and = t1cri.getConditionAnd(),
//        t1or = t1cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t1and.length === 0 &&
//        t1or.length === 1 &&
//        t1or[0].left_key === "table1.key1" &&
//        t1or[0].key_type === "value";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('101 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t2cri = cri1.createOfConditionWithKeyPrefixes(prefixes1, [1]),
//        t2and = t2cri.getConditionAnd(),
//        t2or = t2cri.getConditionOr();
//
//    var test_result =
//        t2and.length === 3 &&
//        t2or.length === 0 &&
//        t2and[0].left_key === "table1.key1" &&
//        t2and[0].right_key[0] === "table1.key2" &&
//        t2and[0].key_type === "key" &&
//        t2and[1].left_key === "table1.key1" &&
//        t2and[1].right_key[0] === "table2.key1" &&
//        t2and[1].key_type === "key" &&
//        t2and[2].left_key === "table1.key1" &&
//        t2and[2].right_key[0] === "table3.key1" &&
//        t2and[2].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t2cri = cri2.createOfConditionWithKeyPrefixes(prefixes1, [1]),
//        t2and = t2cri.getConditionAnd()[0].getConditionAnd(),
//        t2or = t2cri.getConditionOr();
//
//    var test_result2 =
//        t2and.length === 3 &&
//        t2or.length === 0 &&
//        t2and[0].left_key === "table1.key1" &&
//        t2and[0].right_key[0] === "table1.key2" &&
//        t2and[0].key_type === "key" &&
//        t2and[1].left_key === "table1.key1" &&
//        t2and[1].right_key[0] === "table2.key1" &&
//        t2and[1].key_type === "key" &&
//        t2and[2].left_key === "table1.key1" &&
//        t2and[2].right_key[0] === "table3.key1" &&
//        t2and[2].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t2cri = cri3.createOfConditionWithKeyPrefixes(prefixes1, [1]),
//        t2and = t2cri.getConditionAnd(),
//        t2or = t2cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t2and.length === 0 &&
//        t2or.length === 3 &&
//        t2or[0].left_key === "table1.key1" &&
//        t2or[0].right_key[0] === "table1.key2" &&
//        t2or[0].key_type === "key" &&
//        t2or[1].left_key === "table1.key1" &&
//        t2or[1].right_key[0] === "table2.key1" &&
//        t2or[1].key_type === "key" &&
//        t2or[2].left_key === "table1.key1" &&
//        t2or[2].right_key[0] === "table3.key1" &&
//        t2or[2].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('102 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t3cri = cri1.createOfConditionWithKeyPrefixes(prefixes1, [2]),
//        t3and = t3cri.getConditionAnd(),
//        t3or = t3cri.getConditionOr();
//
//    var test_result =
//        t3and.length === 2 &&
//        t3or.length === 0 &&
//        t3and[0].left_key === "table1.key1" &&
//        t3and[0].right_key[0] === "table2.key1" &&
//        t3and[0].key_type === "key" &&
//        t3and[1].left_key === "table1.key1" &&
//        t3and[1].right_key[0] === "table3.key1" &&
//        t3and[1].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t3cri = cri2.createOfConditionWithKeyPrefixes(prefixes1, [2]),
//        t3and = t3cri.getConditionAnd()[0].getConditionAnd(),
//        t3or = t3cri.getConditionOr();
//
//    var test_result2 =
//        t3and.length === 2 &&
//        t3or.length === 0 &&
//        t3and[0].left_key === "table1.key1" &&
//        t3and[0].right_key[0] === "table2.key1" &&
//        t3and[0].key_type === "key" &&
//        t3and[1].left_key === "table1.key1" &&
//        t3and[1].right_key[0] === "table3.key1" &&
//        t3and[1].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t3cri = cri3.createOfConditionWithKeyPrefixes(prefixes1, [2]),
//        t3and = t3cri.getConditionAnd(),
//        t3or = t3cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t3and.length === 0 &&
//        t3or.length === 2 &&
//        t3or[0].left_key === "table1.key1" &&
//        t3or[0].right_key[0] === "table2.key1" &&
//        t3or[0].key_type === "key" &&
//        t3or[1].left_key === "table1.key1" &&
//        t3or[1].right_key[0] === "table3.key1" &&
//        t3or[1].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('103 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t4cri = cri1.createOfConditionWithKeyPrefixes(prefixes1, [3]),
//        t4and = t4cri.getConditionAnd(),
//        t4or = t4cri.getConditionOr();
//
//    var test_result =
//        t4and.length === 1 &&
//        t4or.length === 0 &&
//        t4and[0].left_key === "table1.key1" &&
//        t4and[0].right_key[0] === "table1.key2" &&
//        t4and[0].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t4cri = cri2.createOfConditionWithKeyPrefixes(prefixes1, [3]),
//        t4and = t4cri.getConditionAnd()[0].getConditionAnd(),
//        t4or = t4cri.getConditionOr();
//
//    var test_result2 =
//        t4and.length === 1 &&
//        t4or.length === 0 &&
//        t4and[0].left_key === "table1.key1" &&
//        t4and[0].right_key[0] === "table1.key2" &&
//        t4and[0].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t4cri = cri3.createOfConditionWithKeyPrefixes(prefixes1, [3]),
//        t4and = t4cri.getConditionAnd(),
//        t4or = t4cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t4and.length === 0 &&
//        t4or.length === 1 &&
//        t4or[0].left_key === "table1.key1" &&
//        t4or[0].right_key[0] === "table1.key2" &&
//        t4or[0].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('104 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t5cri = cri1.createOfConditionWithKeyPrefixes(prefixes1, [0, 1]),
//        t5and = t5cri.getConditionAnd(),
//        t5or = t5cri.getConditionOr();
//
//    var test_result =
//        t5and.length === 4 &&
//        t5or.length === 0 &&
//        t5and[0].left_key === "table1.key1" &&
//        t5and[0].key_type === "value" &&
//        t5and[1].left_key === "table1.key1" &&
//        t5and[1].right_key[0] === "table1.key2" &&
//        t5and[1].key_type === "key" &&
//        t5and[2].left_key === "table1.key1" &&
//        t5and[2].right_key[0] === "table2.key1" &&
//        t5and[2].key_type === "key" &&
//        t5and[3].left_key === "table1.key1" &&
//        t5and[3].right_key[0] === "table3.key1" &&
//        t5and[3].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t5cri = cri2.createOfConditionWithKeyPrefixes(prefixes1, [0, 1]),
//        t5and = t5cri.getConditionAnd()[0].getConditionAnd(),
//        t5or = t5cri.getConditionOr();
//
//    var test_result2 =
//        t5and.length === 4 &&
//        t5or.length === 0 &&
//        t5and[0].left_key === "table1.key1" &&
//        t5and[0].key_type === "value" &&
//        t5and[1].left_key === "table1.key1" &&
//        t5and[1].right_key[0] === "table1.key2" &&
//        t5and[1].key_type === "key" &&
//        t5and[2].left_key === "table1.key1" &&
//        t5and[2].right_key[0] === "table2.key1" &&
//        t5and[2].key_type === "key" &&
//        t5and[3].left_key === "table1.key1" &&
//        t5and[3].right_key[0] === "table3.key1" &&
//        t5and[3].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t5cri = cri3.createOfConditionWithKeyPrefixes(prefixes1, [0, 1]),
//        t5and = t5cri.getConditionAnd(),
//        t5or = t5cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t5and.length === 0 &&
//        t5or.length === 4 &&
//        t5or[0].left_key === "table1.key1" &&
//        t5or[0].key_type === "value" &&
//        t5or[1].left_key === "table1.key1" &&
//        t5or[1].right_key[0] === "table1.key2" &&
//        t5or[1].key_type === "key" &&
//        t5or[2].left_key === "table1.key1" &&
//        t5or[2].right_key[0] === "table2.key1" &&
//        t5or[2].key_type === "key" &&
//        t5or[3].left_key === "table1.key1" &&
//        t5or[3].right_key[0] === "table3.key1" &&
//        t5or[3].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('105 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t6cri = cri1.createOfConditionWithKeyPrefixes(prefixes1, [0, 2]),
//        t6and = t6cri.getConditionAnd(),
//        t6or = t6cri.getConditionOr();
//
//    var test_result =
//        t6and.length === 3 &&
//        t6or.length === 0 &&
//        t6and[0].left_key === "table1.key1" &&
//        t6and[0].key_type === "value" &&
//        t6and[1].left_key === "table1.key1" &&
//        t6and[1].right_key[0] === "table2.key1" &&
//        t6and[1].key_type === "key" &&
//        t6and[2].left_key === "table1.key1" &&
//        t6and[2].right_key[0] === "table3.key1" &&
//        t6and[2].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t6cri = cri2.createOfConditionWithKeyPrefixes(prefixes1, [0, 2]),
//        t6and = t6cri.getConditionAnd()[0].getConditionAnd(),
//        t6or = t6cri.getConditionOr();
//
//    var test_result2 =
//        t6and.length === 3 &&
//        t6or.length === 0 &&
//        t6and[0].left_key === "table1.key1" &&
//        t6and[0].key_type === "value" &&
//        t6and[1].left_key === "table1.key1" &&
//        t6and[1].right_key[0] === "table2.key1" &&
//        t6and[1].key_type === "key" &&
//        t6and[2].left_key === "table1.key1" &&
//        t6and[2].right_key[0] === "table3.key1" &&
//        t6and[2].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t6cri = cri3.createOfConditionWithKeyPrefixes(prefixes1, [0, 2]),
//        t6and = t6cri.getConditionAnd(),
//        t6or = t6cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t6and.length === 0 &&
//        t6or.length === 3 &&
//        t6or[0].left_key === "table1.key1" &&
//        t6or[0].key_type === "value" &&
//        t6or[1].left_key === "table1.key1" &&
//        t6or[1].right_key[0] === "table2.key1" &&
//        t6or[1].key_type === "key" &&
//        t6or[2].left_key === "table1.key1" &&
//        t6or[2].right_key[0] === "table3.key1" &&
//        t6or[2].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('106 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t7cri = cri1.createOfConditionWithKeyPrefixes(prefixes1, [0, 3]),
//        t7and = t7cri.getConditionAnd(),
//        t7or = t7cri.getConditionOr();
//
//    var test_result =
//        t7and.length === 2 &&
//        t7or.length === 0 &&
//        t7and[0].left_key === "table1.key1" &&
//        t7and[0].key_type === "value" &&
//        t7and[1].left_key === "table1.key1" &&
//        t7and[1].right_key[0] === "table1.key2" &&
//        t7and[1].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t7cri = cri2.createOfConditionWithKeyPrefixes(prefixes1, [0, 3]),
//        t7and = t7cri.getConditionAnd()[0].getConditionAnd(),
//        t7or = t7cri.getConditionOr();
//
//    var test_result2 =
//        t7and.length === 2 &&
//        t7or.length === 0 &&
//        t7and[0].left_key === "table1.key1" &&
//        t7and[0].key_type === "value" &&
//        t7and[1].left_key === "table1.key1" &&
//        t7and[1].right_key[0] === "table1.key2" &&
//        t7and[1].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t7cri = cri3.createOfConditionWithKeyPrefixes(prefixes1, [0, 3]),
//        t7and = t7cri.getConditionAnd(),
//        t7or = t7cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t7and.length === 0 &&
//        t7or.length === 2 &&
//        t7or[0].left_key === "table1.key1" &&
//        t7or[0].key_type === "value" &&
//        t7or[1].left_key === "table1.key1" &&
//        t7or[1].right_key[0] === "table1.key2" &&
//        t7or[1].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('107 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t8cri = cri1.createOfConditionWithKeyPrefixes(prefixes2, [0]),
//        t8and = t8cri.getConditionAnd(),
//        t8or = t8cri.getConditionOr();
//
//    var test_result =
//        t8and.length === 1 &&
//        t8or.length === 0 &&
//        t8and[0].left_key === "table2.key1" &&
//        t8and[0].key_type === "value";
//
//    expect(test_result).toEqual(true);
//
//    var t8cri = cri2.createOfConditionWithKeyPrefixes(prefixes2, [0]),
//        t8and = t8cri.getConditionAnd()[0].getConditionAnd(),
//        t8or = t8cri.getConditionOr();
//
//    var test_result2 =
//        t8and.length === 1 &&
//        t8or.length === 0 &&
//        t8and[0].left_key === "table2.key1" &&
//        t8and[0].key_type === "value";
//
//    expect(test_result2).toEqual(true);
//
//    var t8cri = cri3.createOfConditionWithKeyPrefixes(prefixes2, [0]),
//        t8and = t8cri.getConditionAnd(),
//        t8or = t8cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t8and.length === 0 &&
//        t8or.length === 1 &&
//        t8or[0].left_key === "table2.key1" &&
//        t8or[0].key_type === "value";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('108 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t9cri = cri1.createOfConditionWithKeyPrefixes(prefixes2, [1]),
//        t9and = t9cri.getConditionAnd(),
//        t9or = t9cri.getConditionOr();
//
//    var test_result =
//        t9and.length === 1 &&
//        t9or.length === 0 &&
//        t9and[0].left_key === "table1.key1" &&
//        t9and[0].right_key[0] === "table2.key1" &&
//        t9and[0].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t9cri = cri2.createOfConditionWithKeyPrefixes(prefixes2, [1]),
//        t9and = t9cri.getConditionAnd()[0].getConditionAnd(),
//        t9or = t9cri.getConditionOr();
//
//    var test_result2 =
//        t9and.length === 1 &&
//        t9or.length === 0 &&
//        t9and[0].left_key === "table1.key1" &&
//        t9and[0].right_key[0] === "table2.key1" &&
//        t9and[0].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t9cri = cri3.createOfConditionWithKeyPrefixes(prefixes2, [1]),
//        t9and = t9cri.getConditionAnd(),
//        t9or = t9cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t9and.length === 0 &&
//        t9or.length === 1 &&
//        t9or[0].left_key === "table1.key1" &&
//        t9or[0].right_key[0] === "table2.key1" &&
//        t9or[0].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('109 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t10cri = cri1.createOfConditionWithKeyPrefixes(prefixes2, [2]),
//        t10and = t10cri.getConditionAnd(),
//        t10or = t10cri.getConditionOr();
//
//    var test_result =
//        t10and.length === 1 &&
//        t10or.length === 0 &&
//        t10and[0].left_key === "table1.key1" &&
//        t10and[0].right_key[0] === "table2.key1" &&
//        t10and[0].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t10cri = cri2.createOfConditionWithKeyPrefixes(prefixes2, [2]),
//        t10and = t10cri.getConditionAnd()[0].getConditionAnd(),
//        t10or = t10cri.getConditionOr();
//
//    var test_result2 =
//        t10and.length === 1 &&
//        t10or.length === 0 &&
//        t10and[0].left_key === "table1.key1" &&
//        t10and[0].right_key[0] === "table2.key1" &&
//        t10and[0].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t10cri = cri3.createOfConditionWithKeyPrefixes(prefixes2, [2]),
//        t10and = t10cri.getConditionAnd(),
//        t10or = t10cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t10and.length === 0 &&
//        t10or.length === 1 &&
//        t10or[0].left_key === "table1.key1" &&
//        t10or[0].right_key[0] === "table2.key1" &&
//        t10or[0].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('110 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1)
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t11cri = cri1.createOfConditionWithKeyPrefixes(prefixes2, [3]);
//        //        t11and = t11cri.getConditionAnd(),
//        //        t11or = t11cri.getConditionOr(),
//
//    var test_result = t11cri === null;
//
//    expect(test_result).toEqual(true);
//
//    var t11cri = cri2.createOfConditionWithKeyPrefixes(prefixes2, [3]);
//    //        t11and = t11cri.getConditionAnd(),
//    //        t11or = t11cri.getConditionOr(),
//
//    var test_result2 = t11cri === null;
//
//    expect(test_result2).toEqual(true);
//
//    var t11cri = cri3.createOfConditionWithKeyPrefixes(prefixes2, [3]);
//    //        t11and = t11cri.getConditionAnd(),
//    //        t11or = t11cri.getConditionOr(),
//
//    var test_result3 = t11cri === null;
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('111 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t12cri = cri1.createOfConditionWithKeyPrefixes(prefixes2, [0, 1]),
//        t12and = t12cri.getConditionAnd(),
//        t12or = t12cri.getConditionOr();
//
//    var test_result =
//        t12and.length === 2 &&
//        t12or.length === 0 &&
//        t12and[0].left_key === "table2.key1" &&
//        t12and[0].key_type === "value" &&
//        t12and[1].left_key === "table1.key1" &&
//        t12and[1].right_key[0] === "table2.key1" &&
//        t12and[1].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t12cri = cri2.createOfConditionWithKeyPrefixes(prefixes2, [0, 1]),
//        t12and = t12cri.getConditionAnd()[0].getConditionAnd(),
//        t12or = t12cri.getConditionOr();
//
//    var test_result2 =
//        t12and.length === 2 &&
//        t12or.length === 0 &&
//        t12and[0].left_key === "table2.key1" &&
//        t12and[0].key_type === "value" &&
//        t12and[1].left_key === "table1.key1" &&
//        t12and[1].right_key[0] === "table2.key1" &&
//        t12and[1].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t12cri = cri3.createOfConditionWithKeyPrefixes(prefixes2, [0, 1]),
//        t12and = t12cri.getConditionAnd(),
//        t12or = t12cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t12and.length === 0 &&
//        t12or.length === 2 &&
//        t12or[0].left_key === "table2.key1" &&
//        t12or[0].key_type === "value" &&
//        t12or[1].left_key === "table1.key1" &&
//        t12or[1].right_key[0] === "table2.key1" &&
//        t12or[1].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('112 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t13cri = cri1.createOfConditionWithKeyPrefixes(prefixes2, [0, 2]),
//        t13and = t13cri.getConditionAnd(),
//        t13or = t13cri.getConditionOr();
//
//    var test_result =
//        t13and.length === 2 &&
//        t13or.length === 0 &&
//        t13and[0].left_key === "table2.key1" &&
//        t13and[0].key_type === "value" &&
//        t13and[1].left_key === "table1.key1" &&
//        t13and[1].right_key[0] === "table2.key1" &&
//        t13and[1].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t13cri = cri2.createOfConditionWithKeyPrefixes(prefixes2, [0, 2]),
//        t13and = t13cri.getConditionAnd()[0].getConditionAnd(),
//        t13or = t13cri.getConditionOr();
//
//    var test_result2 =
//        t13and.length === 2 &&
//        t13or.length === 0 &&
//        t13and[0].left_key === "table2.key1" &&
//        t13and[0].key_type === "value" &&
//        t13and[1].left_key === "table1.key1" &&
//        t13and[1].right_key[0] === "table2.key1" &&
//        t13and[1].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t13cri = cri3.createOfConditionWithKeyPrefixes(prefixes2, [0, 2]),
//        t13and = t13cri.getConditionAnd(),
//        t13or = t13cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t13and.length === 0 &&
//        t13or.length === 2 &&
//        t13or[0].left_key === "table2.key1" &&
//        t13or[0].key_type === "value" &&
//        t13or[1].left_key === "table1.key1" &&
//        t13or[1].right_key[0] === "table2.key1" &&
//        t13or[1].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('113 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t14cri = cri1.createOfConditionWithKeyPrefixes(prefixes2, [0, 3]),
//        t14and = t14cri.getConditionAnd(),
//        t14or = t14cri.getConditionOr();
//
//    var test_result =
//        t14and.length === 1 &&
//        t14or.length === 0 &&
//        t14and[0].left_key === "table2.key1" &&
//        t14and[0].key_type === "value";
//
//    expect(test_result).toEqual(true);
//
//    var t14cri = cri2.createOfConditionWithKeyPrefixes(prefixes2, [0, 3]),
//        t14and = t14cri.getConditionAnd()[0].getConditionAnd(),
//        t14or = t14cri.getConditionOr();
//
//    var test_result2 =
//        t14and.length === 1 &&
//        t14or.length === 0 &&
//        t14and[0].left_key === "table2.key1" &&
//        t14and[0].key_type === "value";
//
//    expect(test_result2).toEqual(true);
//
//    var t14cri = cri3.createOfConditionWithKeyPrefixes(prefixes2, [0, 3]),
//        t14and = t14cri.getConditionAnd(),
//        t14or = t14cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t14and.length === 0 &&
//        t14or.length === 1 &&
//        t14or[0].left_key === "table2.key1" &&
//        t14or[0].key_type === "value";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('114 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t15cri = cri1.createOfConditionWithKeyPrefixes(prefixes3, [0]),
//        t15and = t15cri.getConditionAnd(),
//        t15or = t15cri.getConditionOr();
//
//    var test_result =
//        t15and.length === 2 &&
//        t15or.length === 0 &&
//        t15and[0].left_key === "table1.key1" &&
//        t15and[0].key_type === "value" &&
//        t15and[1].left_key === "table2.key1" &&
//        t15and[1].key_type === "value";
//
//    expect(test_result).toEqual(true);
//
//    var t15cri = cri2.createOfConditionWithKeyPrefixes(prefixes3, [0]),
//        t15and = t15cri.getConditionAnd()[0].getConditionAnd(),
//        t15or = t15cri.getConditionOr();
//
//    var test_result2 =
//        t15and.length === 2 &&
//        t15or.length === 0 &&
//        t15and[0].left_key === "table1.key1" &&
//        t15and[0].key_type === "value" &&
//        t15and[1].left_key === "table2.key1" &&
//        t15and[1].key_type === "value";
//
//    expect(test_result2).toEqual(true);
//
//    var t15cri = cri3.createOfConditionWithKeyPrefixes(prefixes3, [0]),
//        t15and = t15cri.getConditionAnd(),
//        t15or = t15cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t15and.length === 0 &&
//        t15or.length === 2 &&
//        t15or[0].left_key === "table1.key1" &&
//        t15or[0].key_type === "value" &&
//        t15or[1].left_key === "table2.key1" &&
//        t15or[1].key_type === "value";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('115 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t16cri = cri1.createOfConditionWithKeyPrefixes(prefixes3, [1]),
//        t16and = t16cri.getConditionAnd(),
//        t16or = t16cri.getConditionOr();
//
//    var test_result =
//        t16and.length === 3 &&
//        t16or.length === 0 &&
//        t16and[0].left_key === "table1.key1" &&
//        t16and[0].right_key[0] === "table1.key2" &&
//        t16and[0].key_type === "key" &&
//        t16and[1].left_key === "table1.key1" &&
//        t16and[1].right_key[0] === "table2.key1" &&
//        t16and[1].key_type === "key" &&
//        t16and[2].left_key === "table1.key1" &&
//        t16and[2].right_key[0] === "table3.key1" &&
//        t16and[2].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t16cri = cri2.createOfConditionWithKeyPrefixes(prefixes3, [1]),
//        t16and = t16cri.getConditionAnd()[0].getConditionAnd(),
//        t16or = t16cri.getConditionOr();
//
//    var test_result2 =
//        t16and.length === 3 &&
//        t16or.length === 0 &&
//        t16and[0].left_key === "table1.key1" &&
//        t16and[0].right_key[0] === "table1.key2" &&
//        t16and[0].key_type === "key" &&
//        t16and[1].left_key === "table1.key1" &&
//        t16and[1].right_key[0] === "table2.key1" &&
//        t16and[1].key_type === "key" &&
//        t16and[2].left_key === "table1.key1" &&
//        t16and[2].right_key[0] === "table3.key1" &&
//        t16and[2].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t16cri = cri3.createOfConditionWithKeyPrefixes(prefixes3, [1]),
//        t16and = t16cri.getConditionAnd(),
//        t16or = t16cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t16and.length === 0 &&
//        t16or.length === 3 &&
//        t16or[0].left_key === "table1.key1" &&
//        t16or[0].right_key[0] === "table1.key2" &&
//        t16or[0].key_type === "key" &&
//        t16or[1].left_key === "table1.key1" &&
//        t16or[1].right_key[0] === "table2.key1" &&
//        t16or[1].key_type === "key" &&
//        t16or[2].left_key === "table1.key1" &&
//        t16or[2].right_key[0] === "table3.key1" &&
//        t16or[2].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('116 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t17cri = cri1.createOfConditionWithKeyPrefixes(prefixes3, [2]),
//        t17and = t17cri.getConditionAnd(),
//        t17or = t17cri.getConditionOr();
//
//    var test_result =
//        t17and.length === 1 &&
//        t17or.length === 0 &&
//        t17and[0].left_key === "table1.key1" &&
//        t17and[0].right_key[0] === "table3.key1" &&
//        t17and[0].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t17cri = cri2.createOfConditionWithKeyPrefixes(prefixes3, [2]),
//        t17and = t17cri.getConditionAnd()[0].getConditionAnd(),
//        t17or = t17cri.getConditionOr();
//
//    var test_result2 =
//        t17and.length === 1 &&
//        t17or.length === 0 &&
//        t17and[0].left_key === "table1.key1" &&
//        t17and[0].right_key[0] === "table3.key1" &&
//        t17and[0].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t17cri = cri3.createOfConditionWithKeyPrefixes(prefixes3, [2]),
//        t17and = t17cri.getConditionAnd(),
//        t17or = t17cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t17and.length === 0 &&
//        t17or.length === 1 &&
//        t17or[0].left_key === "table1.key1" &&
//        t17or[0].right_key[0] === "table3.key1" &&
//        t17or[0].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('117 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t18cri = cri1.createOfConditionWithKeyPrefixes(prefixes3, [3]),
//        t18and = t18cri.getConditionAnd(),
//        t18or = t18cri.getConditionOr();
//
//    var test_result =
//        t18and.length === 1 &&
//        t18or.length === 0 &&
//        t18and[0].left_key === "table1.key1" &&
//        t18and[0].right_key[0] === "table1.key2" &&
//        t18and[0].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t18cri = cri2.createOfConditionWithKeyPrefixes(prefixes3, [3]),
//        t18and = t18cri.getConditionAnd()[0].getConditionAnd(),
//        t18or = t18cri.getConditionOr();
//
//    var test_result2 =
//        t18and.length === 1 &&
//        t18or.length === 0 &&
//        t18and[0].left_key === "table1.key1" &&
//        t18and[0].right_key[0] === "table1.key2" &&
//        t18and[0].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t18cri = cri3.createOfConditionWithKeyPrefixes(prefixes3, [3]),
//        t18and = t18cri.getConditionAnd(),
//        t18or = t18cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t18and.length === 0 &&
//        t18or.length === 1 &&
//        t18or[0].left_key === "table1.key1" &&
//        t18or[0].right_key[0] === "table1.key2" &&
//        t18or[0].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('118 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t19cri = cri1.createOfConditionWithKeyPrefixes(prefixes3, [0, 1]),
//        t19and = t19cri.getConditionAnd(),
//        t19or = t19cri.getConditionOr();
//
//    var test_result =
//        t19and.length === 5 &&
//        t19or.length === 0 &&
//        t19and[0].left_key === "table1.key1" &&
//        t19and[0].key_type === "value" &&
//        t19and[1].left_key === "table2.key1" &&
//        t19and[1].key_type === "value" &&
//        t19and[2].left_key === "table1.key1" &&
//        t19and[2].right_key[0] === "table1.key2" &&
//        t19and[2].key_type === "key" &&
//        t19and[3].left_key === "table1.key1" &&
//        t19and[3].right_key[0] === "table2.key1" &&
//        t19and[3].key_type === "key" &&
//        t19and[4].left_key === "table1.key1" &&
//        t19and[4].right_key[0] === "table3.key1" &&
//        t19and[4].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t19cri = cri2.createOfConditionWithKeyPrefixes(prefixes3, [0, 1]),
//        t19and = t19cri.getConditionAnd()[0].getConditionAnd(),
//        t19or = t19cri.getConditionOr();
//
//    var test_result2 =
//        t19and.length === 5 &&
//        t19or.length === 0 &&
//        t19and[0].left_key === "table1.key1" &&
//        t19and[0].key_type === "value" &&
//        t19and[1].left_key === "table2.key1" &&
//        t19and[1].key_type === "value" &&
//        t19and[2].left_key === "table1.key1" &&
//        t19and[2].right_key[0] === "table1.key2" &&
//        t19and[2].key_type === "key" &&
//        t19and[3].left_key === "table1.key1" &&
//        t19and[3].right_key[0] === "table2.key1" &&
//        t19and[3].key_type === "key" &&
//        t19and[4].left_key === "table1.key1" &&
//        t19and[4].right_key[0] === "table3.key1" &&
//        t19and[4].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t19cri = cri3.createOfConditionWithKeyPrefixes(prefixes3, [0, 1]),
//        t19and = t19cri.getConditionAnd(),
//        t19or = t19cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t19and.length === 0 &&
//        t19or.length === 5 &&
//        t19or[0].left_key === "table1.key1" &&
//        t19or[0].key_type === "value" &&
//        t19or[1].left_key === "table2.key1" &&
//        t19or[1].key_type === "value" &&
//        t19or[2].left_key === "table1.key1" &&
//        t19or[2].right_key[0] === "table1.key2" &&
//        t19or[2].key_type === "key" &&
//        t19or[3].left_key === "table1.key1" &&
//        t19or[3].right_key[0] === "table2.key1" &&
//        t19or[3].key_type === "key" &&
//        t19or[4].left_key === "table1.key1" &&
//        t19or[4].right_key[0] === "table3.key1" &&
//        t19or[4].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('119 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t13cri = cri1.createOfConditionWithKeyPrefixes(prefixes3, [0, 2]),
//        t13and = t13cri.getConditionAnd(),
//        t13or = t13cri.getConditionOr();
//
//    var test_result =
//        t13and.length === 3 &&
//        t13or.length === 0 &&
//        t13and[0].left_key === "table1.key1" &&
//        t13and[0].key_type === "value" &&
//        t13and[1].left_key === "table2.key1" &&
//        t13and[1].key_type === "value" &&
//        t13and[2].left_key === "table1.key1" &&
//        t13and[2].right_key[0] === "table3.key1" &&
//        t13and[2].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t13cri = cri2.createOfConditionWithKeyPrefixes(prefixes3, [0, 2]),
//        t13and = t13cri.getConditionAnd()[0].getConditionAnd(),
//        t13or = t13cri.getConditionOr();
//
//    var test_result2 =
//        t13and.length === 3 &&
//        t13or.length === 0 &&
//        t13and[0].left_key === "table1.key1" &&
//        t13and[0].key_type === "value" &&
//        t13and[1].left_key === "table2.key1" &&
//        t13and[1].key_type === "value" &&
//        t13and[2].left_key === "table1.key1" &&
//        t13and[2].right_key[0] === "table3.key1" &&
//        t13and[2].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t13cri = cri3.createOfConditionWithKeyPrefixes(prefixes3, [0, 2]),
//        t13and = t13cri.getConditionAnd(),
//        t13or = t13cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t13and.length === 0 &&
//        t13or.length === 3 &&
//        t13or[0].left_key === "table1.key1" &&
//        t13or[0].key_type === "value" &&
//        t13or[1].left_key === "table2.key1" &&
//        t13or[1].key_type === "value" &&
//        t13or[2].left_key === "table1.key1" &&
//        t13or[2].right_key[0] === "table3.key1" &&
//        t13or[2].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('120 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.and("table1.key1").eq.value(100)
//      .and("table2.key1").eq.value(200)
//      .and("table1.key1").eq.key("table1.key2")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t14cri = cri1.createOfConditionWithKeyPrefixes(prefixes3, [0, 3]),
//        t14and = t14cri.getConditionAnd(),
//        t14or = t14cri.getConditionOr();
//
//    var test_result =
//        t14and.length === 3 &&
//        t14or.length === 0 &&
//        t14and[0].left_key === "table1.key1" &&
//        t14and[0].key_type === "value" &&
//        t14and[1].left_key === "table2.key1" &&
//        t14and[1].key_type === "value" &&
//        t14and[2].left_key === "table1.key1" &&
//        t14and[2].right_key[0] === "table1.key2" &&
//        t14and[2].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t14cri = cri2.createOfConditionWithKeyPrefixes(prefixes3, [0, 3]),
//        t14and = t14cri.getConditionAnd()[0].getConditionAnd(),
//        t14or = t14cri.getConditionOr();
//
//    var test_result2 =
//        t14and.length === 3 &&
//        t14or.length === 0 &&
//        t14and[0].left_key === "table1.key1" &&
//        t14and[0].key_type === "value" &&
//        t14and[1].left_key === "table2.key1" &&
//        t14and[1].key_type === "value" &&
//        t14and[2].left_key === "table1.key1" &&
//        t14and[2].right_key[0] === "table1.key2" &&
//        t14and[2].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t14cri = cri3.createOfConditionWithKeyPrefixes(prefixes3, [0, 3]),
//        t14and = t14cri.getConditionAnd(),
//        t14or = t14cri.getConditionOr()[0].getConditionAnd();
//
//    var test_result3 =
//        t14and.length === 0 &&
//        t14or.length === 3 &&
//        t14or[0].left_key === "table1.key1" &&
//        t14or[0].key_type === "value" &&
//        t14or[1].left_key === "table2.key1" &&
//        t14or[1].key_type === "value" &&
//        t14or[2].left_key === "table1.key1" &&
//        t14or[2].right_key[0] === "table1.key2" &&
//        t14or[2].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('121 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t1cri = cri1.createOfConditionWithKeyPrefixes(prefixes1, [0]),
//        t1and = t1cri.getConditionAnd(),
//        t1or = t1cri.getConditionOr();
//
//    var test_result =
//        t1and.length === 0 &&
//        t1or.length === 1 &&
//        t1or[0].left_key === "table1.key1" &&
//        t1or[0].key_type === "value";
//
//    expect(test_result).toEqual(true);
//
//    var t1cri = cri2.createOfConditionWithKeyPrefixes(prefixes1, [0]),
//        t1and = t1cri.getConditionAnd()[0].getConditionOr(),
//        t1or = t1cri.getConditionOr();
//
//    var test_result2 =
//        t1and.length === 1 &&
//        t1or.length === 0 &&
//        t1and[0].left_key === "table1.key1" &&
//        t1and[0].key_type === "value";
//
//    expect(test_result2).toEqual(true);
//
//    var t1cri = cri3.createOfConditionWithKeyPrefixes(prefixes1, [0]),
//        t1and = t1cri.getConditionAnd(),
//        t1or = t1cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t1and.length === 0 &&
//        t1or.length === 1 &&
//        t1or[0].left_key === "table1.key1" &&
//        t1or[0].key_type === "value";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('122 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t2cri = cri1.createOfConditionWithKeyPrefixes(prefixes1, [1]),
//        t2and = t2cri.getConditionAnd(),
//        t2or = t2cri.getConditionOr();
//
//    var test_result =
//        t2and.length === 0 &&
//        t2or.length === 3 &&
//        t2or[0].left_key === "table1.key1" &&
//        t2or[0].right_key[0] === "table1.key2" &&
//        t2or[0].key_type === "key" &&
//        t2or[1].left_key === "table1.key1" &&
//        t2or[1].right_key[0] === "table2.key1" &&
//        t2or[1].key_type === "key" &&
//        t2or[2].left_key === "table1.key1" &&
//        t2or[2].right_key[0] === "table3.key1" &&
//        t2or[2].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t2cri = cri2.createOfConditionWithKeyPrefixes(prefixes1, [1]),
//        t2and = t2cri.getConditionAnd()[0].getConditionOr(),
//        t2or = t2cri.getConditionOr();
//
//    var test_result2 =
//        t2and.length === 3 &&
//        t2or.length === 0 &&
//        t2and[0].left_key === "table1.key1" &&
//        t2and[0].right_key[0] === "table1.key2" &&
//        t2and[0].key_type === "key" &&
//        t2and[1].left_key === "table1.key1" &&
//        t2and[1].right_key[0] === "table2.key1" &&
//        t2and[1].key_type === "key" &&
//        t2and[2].left_key === "table1.key1" &&
//        t2and[2].right_key[0] === "table3.key1" &&
//        t2and[2].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t2cri = cri3.createOfConditionWithKeyPrefixes(prefixes1, [1]),
//        t2and = t2cri.getConditionAnd(),
//        t2or = t2cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t2and.length === 0 &&
//        t2or.length === 3 &&
//        t2or[0].left_key === "table1.key1" &&
//        t2or[0].right_key[0] === "table1.key2" &&
//        t2or[0].key_type === "key" &&
//        t2or[1].left_key === "table1.key1" &&
//        t2or[1].right_key[0] === "table2.key1" &&
//        t2or[1].key_type === "key" &&
//        t2or[2].left_key === "table1.key1" &&
//        t2or[2].right_key[0] === "table3.key1" &&
//        t2or[2].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('123 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t3cri = cri1.createOfConditionWithKeyPrefixes(prefixes1, [2]),
//        t3and = t3cri.getConditionAnd(),
//        t3or = t3cri.getConditionOr();
//
//    var test_result =
//        t3and.length === 0 &&
//        t3or.length === 2 &&
//        t3or[0].left_key === "table1.key1" &&
//        t3or[0].right_key[0] === "table2.key1" &&
//        t3or[0].key_type === "key" &&
//        t3or[1].left_key === "table1.key1" &&
//        t3or[1].right_key[0] === "table3.key1" &&
//        t3or[1].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t3cri = cri2.createOfConditionWithKeyPrefixes(prefixes1, [2]),
//        t3and = t3cri.getConditionAnd()[0].getConditionOr(),
//        t3or = t3cri.getConditionOr();
//
//    var test_result2 =
//        t3and.length === 2 &&
//        t3or.length === 0 &&
//        t3and[0].left_key === "table1.key1" &&
//        t3and[0].right_key[0] === "table2.key1" &&
//        t3and[0].key_type === "key" &&
//        t3and[1].left_key === "table1.key1" &&
//        t3and[1].right_key[0] === "table3.key1" &&
//        t3and[1].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t3cri = cri3.createOfConditionWithKeyPrefixes(prefixes1, [2]),
//        t3and = t3cri.getConditionAnd(),
//        t3or = t3cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t3and.length === 0 &&
//        t3or.length === 2 &&
//        t3or[0].left_key === "table1.key1" &&
//        t3or[0].right_key[0] === "table2.key1" &&
//        t3or[0].key_type === "key" &&
//        t3or[1].left_key === "table1.key1" &&
//        t3or[1].right_key[0] === "table3.key1" &&
//        t3or[1].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('124 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t4cri = cri1.createOfConditionWithKeyPrefixes(prefixes1, [3]),
//        t4and = t4cri.getConditionAnd(),
//        t4or = t4cri.getConditionOr();
//
//    var test_result =
//        t4and.length === 0 &&
//        t4or.length === 1 &&
//        t4or[0].left_key === "table1.key1" &&
//        t4or[0].right_key[0] === "table1.key2" &&
//        t4or[0].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t4cri = cri2.createOfConditionWithKeyPrefixes(prefixes1, [3]),
//        t4and = t4cri.getConditionAnd()[0].getConditionOr(),
//        t4or = t4cri.getConditionOr();
//
//    var test_result2 =
//        t4and.length === 1 &&
//        t4or.length === 0 &&
//        t4and[0].left_key === "table1.key1" &&
//        t4and[0].right_key[0] === "table1.key2" &&
//        t4and[0].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t4cri = cri3.createOfConditionWithKeyPrefixes(prefixes1, [3]),
//        t4and = t4cri.getConditionAnd(),
//        t4or = t4cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t4and.length === 0 &&
//        t4or.length === 1 &&
//        t4or[0].left_key === "table1.key1" &&
//        t4or[0].right_key[0] === "table1.key2" &&
//        t4or[0].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('125 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t5cri = cri1.createOfConditionWithKeyPrefixes(prefixes1, [0, 1]),
//        t5and = t5cri.getConditionAnd(),
//        t5or = t5cri.getConditionOr();
//
//    var test_result =
//        t5and.length === 0 &&
//        t5or.length === 4 &&
//        t5or[0].left_key === "table1.key1" &&
//        t5or[0].key_type === "value" &&
//        t5or[1].left_key === "table1.key1" &&
//        t5or[1].right_key[0] === "table1.key2" &&
//        t5or[1].key_type === "key" &&
//        t5or[2].left_key === "table1.key1" &&
//        t5or[2].right_key[0] === "table2.key1" &&
//        t5or[2].key_type === "key" &&
//        t5or[3].left_key === "table1.key1" &&
//        t5or[3].right_key[0] === "table3.key1" &&
//        t5or[3].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t5cri = cri2.createOfConditionWithKeyPrefixes(prefixes1, [0, 1]),
//        t5and = t5cri.getConditionAnd()[0].getConditionOr(),
//        t5or = t5cri.getConditionOr();
//
//    var test_result2 =
//        t5and.length === 4 &&
//        t5or.length === 0 &&
//        t5and[0].left_key === "table1.key1" &&
//        t5and[0].key_type === "value" &&
//        t5and[1].left_key === "table1.key1" &&
//        t5and[1].right_key[0] === "table1.key2" &&
//        t5and[1].key_type === "key" &&
//        t5and[2].left_key === "table1.key1" &&
//        t5and[2].right_key[0] === "table2.key1" &&
//        t5and[2].key_type === "key" &&
//        t5and[3].left_key === "table1.key1" &&
//        t5and[3].right_key[0] === "table3.key1" &&
//        t5and[3].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t5cri = cri3.createOfConditionWithKeyPrefixes(prefixes1, [0, 1]),
//        t5and = t5cri.getConditionAnd(),
//        t5or = t5cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t5and.length === 0 &&
//        t5or.length === 4 &&
//        t5or[0].left_key === "table1.key1" &&
//        t5or[0].key_type === "value" &&
//        t5or[1].left_key === "table1.key1" &&
//        t5or[1].right_key[0] === "table1.key2" &&
//        t5or[1].key_type === "key" &&
//        t5or[2].left_key === "table1.key1" &&
//        t5or[2].right_key[0] === "table2.key1" &&
//        t5or[2].key_type === "key" &&
//        t5or[3].left_key === "table1.key1" &&
//        t5or[3].right_key[0] === "table3.key1" &&
//        t5or[3].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('126 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t6cri = cri1.createOfConditionWithKeyPrefixes(prefixes1, [0, 2]),
//        t6and = t6cri.getConditionAnd(),
//        t6or = t6cri.getConditionOr();
//
//    var test_result =
//        t6and.length === 0 &&
//        t6or.length === 3 &&
//        t6or[0].left_key === "table1.key1" &&
//        t6or[0].key_type === "value" &&
//        t6or[1].left_key === "table1.key1" &&
//        t6or[1].right_key[0] === "table2.key1" &&
//        t6or[1].key_type === "key" &&
//        t6or[2].left_key === "table1.key1" &&
//        t6or[2].right_key[0] === "table3.key1" &&
//        t6or[2].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t6cri = cri2.createOfConditionWithKeyPrefixes(prefixes1, [0, 2]),
//        t6and = t6cri.getConditionAnd()[0].getConditionOr(),
//        t6or = t6cri.getConditionOr();
//
//    var test_result2 =
//        t6and.length === 3 &&
//        t6or.length === 0 &&
//        t6and[0].left_key === "table1.key1" &&
//        t6and[0].key_type === "value" &&
//        t6and[1].left_key === "table1.key1" &&
//        t6and[1].right_key[0] === "table2.key1" &&
//        t6and[1].key_type === "key" &&
//        t6and[2].left_key === "table1.key1" &&
//        t6and[2].right_key[0] === "table3.key1" &&
//        t6and[2].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t6cri = cri3.createOfConditionWithKeyPrefixes(prefixes1, [0, 2]),
//        t6and = t6cri.getConditionAnd(),
//        t6or = t6cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t6and.length === 0 &&
//        t6or.length === 3 &&
//        t6or[0].left_key === "table1.key1" &&
//        t6or[0].key_type === "value" &&
//        t6or[1].left_key === "table1.key1" &&
//        t6or[1].right_key[0] === "table2.key1" &&
//        t6or[1].key_type === "key" &&
//        t6or[2].left_key === "table1.key1" &&
//        t6or[2].right_key[0] === "table3.key1" &&
//        t6or[2].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('127 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t7cri = cri1.createOfConditionWithKeyPrefixes(prefixes1, [0, 3]),
//        t7and = t7cri.getConditionAnd(),
//        t7or = t7cri.getConditionOr();
//
//    var test_result =
//        t7and.length === 0 &&
//        t7or.length === 2 &&
//        t7or[0].left_key === "table1.key1" &&
//        t7or[0].key_type === "value" &&
//        t7or[1].left_key === "table1.key1" &&
//        t7or[1].right_key[0] === "table1.key2" &&
//        t7or[1].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t7cri = cri2.createOfConditionWithKeyPrefixes(prefixes1, [0, 3]),
//        t7and = t7cri.getConditionAnd()[0].getConditionOr(),
//        t7or = t7cri.getConditionOr();
//
//    var test_result2 =
//        t7and.length === 2 &&
//        t7or.length === 0 &&
//        t7and[0].left_key === "table1.key1" &&
//        t7and[0].key_type === "value" &&
//        t7and[1].left_key === "table1.key1" &&
//        t7and[1].right_key[0] === "table1.key2" &&
//        t7and[1].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t7cri = cri3.createOfConditionWithKeyPrefixes(prefixes1, [0, 3]),
//        t7and = t7cri.getConditionAnd(),
//        t7or = t7cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t7and.length === 0 &&
//        t7or.length === 2 &&
//        t7or[0].left_key === "table1.key1" &&
//        t7or[0].key_type === "value" &&
//        t7or[1].left_key === "table1.key1" &&
//        t7or[1].right_key[0] === "table1.key2" &&
//        t7or[1].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('128 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t8cri = cri1.createOfConditionWithKeyPrefixes(prefixes2, [0]),
//        t8and = t8cri.getConditionAnd(),
//        t8or = t8cri.getConditionOr();
//
//    var test_result =
//        t8and.length === 0 &&
//        t8or.length === 1 &&
//        t8or[0].left_key === "table2.key1" &&
//        t8or[0].key_type === "value";
//
//    expect(test_result).toEqual(true);
//
//    var t8cri = cri2.createOfConditionWithKeyPrefixes(prefixes2, [0]),
//        t8and = t8cri.getConditionAnd()[0].getConditionOr(),
//        t8or = t8cri.getConditionOr();
//
//    var test_result2 =
//        t8and.length === 1 &&
//        t8or.length === 0 &&
//        t8and[0].left_key === "table2.key1" &&
//        t8and[0].key_type === "value";
//
//    expect(test_result2).toEqual(true);
//
//    var t8cri = cri3.createOfConditionWithKeyPrefixes(prefixes2, [0]),
//        t8and = t8cri.getConditionAnd(),
//        t8or = t8cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t8and.length === 0 &&
//        t8or.length === 1 &&
//        t8or[0].left_key === "table2.key1" &&
//        t8or[0].key_type === "value";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('129 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t9cri = cri1.createOfConditionWithKeyPrefixes(prefixes2, [1]),
//        t9and = t9cri.getConditionAnd(),
//        t9or = t9cri.getConditionOr();
//
//    var test_result =
//        t9and.length === 0 &&
//        t9or.length === 1 &&
//        t9or[0].left_key === "table1.key1" &&
//        t9or[0].right_key[0] === "table2.key1" &&
//        t9or[0].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t9cri = cri2.createOfConditionWithKeyPrefixes(prefixes2, [1]),
//        t9and = t9cri.getConditionAnd()[0].getConditionOr(),
//        t9or = t9cri.getConditionOr();
//
//    var test_result2 =
//        t9and.length === 1 &&
//        t9or.length === 0 &&
//        t9and[0].left_key === "table1.key1" &&
//        t9and[0].right_key[0] === "table2.key1" &&
//        t9and[0].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t9cri = cri3.createOfConditionWithKeyPrefixes(prefixes2, [1]),
//        t9and = t9cri.getConditionAnd(),
//        t9or = t9cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t9and.length === 0 &&
//        t9or.length === 1 &&
//        t9or[0].left_key === "table1.key1" &&
//        t9or[0].right_key[0] === "table2.key1" &&
//        t9or[0].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('130 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t10cri = cri1.createOfConditionWithKeyPrefixes(prefixes2, [2]),
//        t10and = t10cri.getConditionAnd(),
//        t10or = t10cri.getConditionOr();
//
//    var test_result =
//        t10and.length === 0 &&
//        t10or.length === 1 &&
//        t10or[0].left_key === "table1.key1" &&
//        t10or[0].right_key[0] === "table2.key1" &&
//        t10or[0].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t10cri = cri2.createOfConditionWithKeyPrefixes(prefixes2, [2]),
//        t10and = t10cri.getConditionAnd()[0].getConditionOr(),
//        t10or = t10cri.getConditionOr();
//
//    var test_result2 =
//        t10and.length === 1 &&
//        t10or.length === 0 &&
//        t10and[0].left_key === "table1.key1" &&
//        t10and[0].right_key[0] === "table2.key1" &&
//        t10and[0].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t10cri = cri3.createOfConditionWithKeyPrefixes(prefixes2, [2]),
//        t10and = t10cri.getConditionAnd(),
//        t10or = t10cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t10and.length === 0 &&
//        t10or.length === 1 &&
//        t10or[0].left_key === "table1.key1" &&
//        t10or[0].right_key[0] === "table2.key1" &&
//        t10or[0].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('131 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1)
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t11cri = cri1.createOfConditionWithKeyPrefixes(prefixes2, [3]);
//    //        t11and = t11cri.getConditionAnd(),
//    //        t11or = t11cri.getConditionOr(),
//
//    var test_result = t11cri === null;
//
//    expect(test_result).toEqual(true);
//
//    var t11cri = cri2.createOfConditionWithKeyPrefixes(prefixes2, [3]);
//    //        t11and = t11cri.getConditionAnd(),
//    //        t11or = t11cri.getConditionOr(),
//
//    var test_result2 = t11cri === null;
//
//    expect(test_result2).toEqual(true);
//
//    var t11cri = cri3.createOfConditionWithKeyPrefixes(prefixes2, [3]);
//    //        t11and = t11cri.getConditionAnd(),
//    //        t11or = t11cri.getConditionOr(),
//
//    var test_result3 = t11cri === null;
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('132 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t12cri = cri1.createOfConditionWithKeyPrefixes(prefixes2, [0, 1]),
//        t12and = t12cri.getConditionAnd(),
//        t12or = t12cri.getConditionOr();
//
//    var test_result =
//        t12and.length === 0 &&
//        t12or.length === 2 &&
//        t12or[0].left_key === "table2.key1" &&
//        t12or[0].key_type === "value" &&
//        t12or[1].left_key === "table1.key1" &&
//        t12or[1].right_key[0] === "table2.key1" &&
//        t12or[1].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t12cri = cri2.createOfConditionWithKeyPrefixes(prefixes2, [0, 1]),
//        t12and = t12cri.getConditionAnd()[0].getConditionOr(),
//        t12or = t12cri.getConditionOr();
//
//    var test_result2 =
//        t12and.length === 2 &&
//        t12or.length === 0 &&
//        t12and[0].left_key === "table2.key1" &&
//        t12and[0].key_type === "value" &&
//        t12and[1].left_key === "table1.key1" &&
//        t12and[1].right_key[0] === "table2.key1" &&
//        t12and[1].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t12cri = cri3.createOfConditionWithKeyPrefixes(prefixes2, [0, 1]),
//        t12and = t12cri.getConditionAnd(),
//        t12or = t12cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t12and.length === 0 &&
//        t12or.length === 2 &&
//        t12or[0].left_key === "table2.key1" &&
//        t12or[0].key_type === "value" &&
//        t12or[1].left_key === "table1.key1" &&
//        t12or[1].right_key[0] === "table2.key1" &&
//        t12or[1].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('133 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t13cri = cri1.createOfConditionWithKeyPrefixes(prefixes2, [0, 2]),
//        t13and = t13cri.getConditionAnd(),
//        t13or = t13cri.getConditionOr();
//
//    var test_result =
//        t13and.length === 0 &&
//        t13or.length === 2 &&
//        t13or[0].left_key === "table2.key1" &&
//        t13or[0].key_type === "value" &&
//        t13or[1].left_key === "table1.key1" &&
//        t13or[1].right_key[0] === "table2.key1" &&
//        t13or[1].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t13cri = cri2.createOfConditionWithKeyPrefixes(prefixes2, [0, 2]),
//        t13and = t13cri.getConditionAnd()[0].getConditionOr(),
//        t13or = t13cri.getConditionOr();
//
//    var test_result2 =
//        t13and.length === 2 &&
//        t13or.length === 0 &&
//        t13and[0].left_key === "table2.key1" &&
//        t13and[0].key_type === "value" &&
//        t13and[1].left_key === "table1.key1" &&
//        t13and[1].right_key[0] === "table2.key1" &&
//        t13and[1].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t13cri = cri3.createOfConditionWithKeyPrefixes(prefixes2, [0, 2]),
//        t13and = t13cri.getConditionAnd(),
//        t13or = t13cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t13and.length === 0 &&
//        t13or.length === 2 &&
//        t13or[0].left_key === "table2.key1" &&
//        t13or[0].key_type === "value" &&
//        t13or[1].left_key === "table1.key1" &&
//        t13or[1].right_key[0] === "table2.key1" &&
//        t13or[1].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('134 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t14cri = cri1.createOfConditionWithKeyPrefixes(prefixes2, [0, 3]),
//        t14and = t14cri.getConditionAnd(),
//        t14or = t14cri.getConditionOr();
//
//    var test_result =
//        t14and.length === 0 &&
//        t14or.length === 1 &&
//        t14or[0].left_key === "table2.key1" &&
//        t14or[0].key_type === "value";
//
//    expect(test_result).toEqual(true);
//
//    var t14cri = cri2.createOfConditionWithKeyPrefixes(prefixes2, [0, 3]),
//        t14and = t14cri.getConditionAnd()[0].getConditionOr(),
//        t14or = t14cri.getConditionOr();
//
//    var test_result2 =
//        t14and.length === 1 &&
//        t14or.length === 0 &&
//        t14and[0].left_key === "table2.key1" &&
//        t14and[0].key_type === "value";
//
//    expect(test_result2).toEqual(true);
//
//    var t14cri = cri3.createOfConditionWithKeyPrefixes(prefixes2, [0, 3]),
//        t14and = t14cri.getConditionAnd(),
//        t14or = t14cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t14and.length === 0 &&
//        t14or.length === 1 &&
//        t14or[0].left_key === "table2.key1" &&
//        t14or[0].key_type === "value";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('135 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t15cri = cri1.createOfConditionWithKeyPrefixes(prefixes3, [0]),
//        t15and = t15cri.getConditionAnd(),
//        t15or = t15cri.getConditionOr();
//
//    var test_result =
//        t15and.length === 0 &&
//        t15or.length === 2 &&
//        t15or[0].left_key === "table1.key1" &&
//        t15or[0].key_type === "value" &&
//        t15or[1].left_key === "table2.key1" &&
//        t15or[1].key_type === "value";
//
//    expect(test_result).toEqual(true);
//
//    var t15cri = cri2.createOfConditionWithKeyPrefixes(prefixes3, [0]),
//        t15and = t15cri.getConditionAnd()[0].getConditionOr(),
//        t15or = t15cri.getConditionOr();
//
//    var test_result2 =
//        t15and.length === 2 &&
//        t15or.length === 0 &&
//        t15and[0].left_key === "table1.key1" &&
//        t15and[0].key_type === "value" &&
//        t15and[1].left_key === "table2.key1" &&
//        t15and[1].key_type === "value";
//
//    expect(test_result2).toEqual(true);
//
//    var t15cri = cri3.createOfConditionWithKeyPrefixes(prefixes3, [0]),
//        t15and = t15cri.getConditionAnd(),
//        t15or = t15cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t15and.length === 0 &&
//        t15or.length === 2 &&
//        t15or[0].left_key === "table1.key1" &&
//        t15or[0].key_type === "value" &&
//        t15or[1].left_key === "table2.key1" &&
//        t15or[1].key_type === "value";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('136 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t16cri = cri1.createOfConditionWithKeyPrefixes(prefixes3, [1]),
//        t16and = t16cri.getConditionAnd(),
//        t16or = t16cri.getConditionOr();
//
//    var test_result =
//        t16and.length === 0 &&
//        t16or.length === 3 &&
//        t16or[0].left_key === "table1.key1" &&
//        t16or[0].right_key[0] === "table1.key2" &&
//        t16or[0].key_type === "key" &&
//        t16or[1].left_key === "table1.key1" &&
//        t16or[1].right_key[0] === "table2.key1" &&
//        t16or[1].key_type === "key" &&
//        t16or[2].left_key === "table1.key1" &&
//        t16or[2].right_key[0] === "table3.key1" &&
//        t16or[2].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t16cri = cri2.createOfConditionWithKeyPrefixes(prefixes3, [1]),
//        t16and = t16cri.getConditionAnd()[0].getConditionOr(),
//        t16or = t16cri.getConditionOr();
//
//    var test_result2 =
//        t16and.length === 3 &&
//        t16or.length === 0 &&
//        t16and[0].left_key === "table1.key1" &&
//        t16and[0].right_key[0] === "table1.key2" &&
//        t16and[0].key_type === "key" &&
//        t16and[1].left_key === "table1.key1" &&
//        t16and[1].right_key[0] === "table2.key1" &&
//        t16and[1].key_type === "key" &&
//        t16and[2].left_key === "table1.key1" &&
//        t16and[2].right_key[0] === "table3.key1" &&
//        t16and[2].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t16cri = cri3.createOfConditionWithKeyPrefixes(prefixes3, [1]),
//        t16and = t16cri.getConditionAnd(),
//        t16or = t16cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t16and.length === 0 &&
//        t16or.length === 3 &&
//        t16or[0].left_key === "table1.key1" &&
//        t16or[0].right_key[0] === "table1.key2" &&
//        t16or[0].key_type === "key" &&
//        t16or[1].left_key === "table1.key1" &&
//        t16or[1].right_key[0] === "table2.key1" &&
//        t16or[1].key_type === "key" &&
//        t16or[2].left_key === "table1.key1" &&
//        t16or[2].right_key[0] === "table3.key1" &&
//        t16or[2].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('137 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t17cri = cri1.createOfConditionWithKeyPrefixes(prefixes3, [2]),
//        t17and = t17cri.getConditionAnd(),
//        t17or = t17cri.getConditionOr();
//
//    var test_result =
//        t17and.length === 0 &&
//        t17or.length === 1 &&
//        t17or[0].left_key === "table1.key1" &&
//        t17or[0].right_key[0] === "table3.key1" &&
//        t17or[0].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t17cri = cri2.createOfConditionWithKeyPrefixes(prefixes3, [2]),
//        t17and = t17cri.getConditionAnd()[0].getConditionOr(),
//        t17or = t17cri.getConditionOr();
//
//    var test_result2 =
//        t17and.length === 1 &&
//        t17or.length === 0 &&
//        t17and[0].left_key === "table1.key1" &&
//        t17and[0].right_key[0] === "table3.key1" &&
//        t17and[0].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t17cri = cri3.createOfConditionWithKeyPrefixes(prefixes3, [2]),
//        t17and = t17cri.getConditionAnd(),
//        t17or = t17cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t17and.length === 0 &&
//        t17or.length === 1 &&
//        t17or[0].left_key === "table1.key1" &&
//        t17or[0].right_key[0] === "table3.key1" &&
//        t17or[0].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('138 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t18cri = cri1.createOfConditionWithKeyPrefixes(prefixes3, [3]),
//        t18and = t18cri.getConditionAnd(),
//        t18or = t18cri.getConditionOr();
//
//    var test_result =
//        t18and.length === 0 &&
//        t18or.length === 1 &&
//        t18or[0].left_key === "table1.key1" &&
//        t18or[0].right_key[0] === "table1.key2" &&
//        t18or[0].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t18cri = cri2.createOfConditionWithKeyPrefixes(prefixes3, [3]),
//        t18and = t18cri.getConditionAnd()[0].getConditionOr(),
//        t18or = t18cri.getConditionOr();
//
//    var test_result2 =
//        t18and.length === 1 &&
//        t18or.length === 0 &&
//        t18and[0].left_key === "table1.key1" &&
//        t18and[0].right_key[0] === "table1.key2" &&
//        t18and[0].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t18cri = cri3.createOfConditionWithKeyPrefixes(prefixes3, [3]),
//        t18and = t18cri.getConditionAnd(),
//        t18or = t18cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t18and.length === 0 &&
//        t18or.length === 1 &&
//        t18or[0].left_key === "table1.key1" &&
//        t18or[0].right_key[0] === "table1.key2" &&
//        t18or[0].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('139 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t19cri = cri1.createOfConditionWithKeyPrefixes(prefixes3, [0, 1]),
//        t19and = t19cri.getConditionAnd(),
//        t19or = t19cri.getConditionOr();
//
//    var test_result =
//        t19and.length === 0 &&
//        t19or.length === 5 &&
//        t19or[0].left_key === "table1.key1" &&
//        t19or[0].key_type === "value" &&
//        t19or[1].left_key === "table2.key1" &&
//        t19or[1].key_type === "value" &&
//        t19or[2].left_key === "table1.key1" &&
//        t19or[2].right_key[0] === "table1.key2" &&
//        t19or[2].key_type === "key" &&
//        t19or[3].left_key === "table1.key1" &&
//        t19or[3].right_key[0] === "table2.key1" &&
//        t19or[3].key_type === "key" &&
//        t19or[4].left_key === "table1.key1" &&
//        t19or[4].right_key[0] === "table3.key1" &&
//        t19or[4].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t19cri = cri2.createOfConditionWithKeyPrefixes(prefixes3, [0, 1]),
//        t19and = t19cri.getConditionAnd()[0].getConditionOr(),
//        t19or = t19cri.getConditionOr();
//
//    var test_result2 =
//        t19and.length === 5 &&
//        t19or.length === 0 &&
//        t19and[0].left_key === "table1.key1" &&
//        t19and[0].key_type === "value" &&
//        t19and[1].left_key === "table2.key1" &&
//        t19and[1].key_type === "value" &&
//        t19and[2].left_key === "table1.key1" &&
//        t19and[2].right_key[0] === "table1.key2" &&
//        t19and[2].key_type === "key" &&
//        t19and[3].left_key === "table1.key1" &&
//        t19and[3].right_key[0] === "table2.key1" &&
//        t19and[3].key_type === "key" &&
//        t19and[4].left_key === "table1.key1" &&
//        t19and[4].right_key[0] === "table3.key1" &&
//        t19and[4].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t19cri = cri3.createOfConditionWithKeyPrefixes(prefixes3, [0, 1]),
//        t19and = t19cri.getConditionAnd(),
//        t19or = t19cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t19and.length === 0 &&
//        t19or.length === 5 &&
//        t19or[0].left_key === "table1.key1" &&
//        t19or[0].key_type === "value" &&
//        t19or[1].left_key === "table2.key1" &&
//        t19or[1].key_type === "value" &&
//        t19or[2].left_key === "table1.key1" &&
//        t19or[2].right_key[0] === "table1.key2" &&
//        t19or[2].key_type === "key" &&
//        t19or[3].left_key === "table1.key1" &&
//        t19or[3].right_key[0] === "table2.key1" &&
//        t19or[3].key_type === "key" &&
//        t19or[4].left_key === "table1.key1" &&
//        t19or[4].right_key[0] === "table3.key1" &&
//        t19or[4].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('140 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t13cri = cri1.createOfConditionWithKeyPrefixes(prefixes3, [0, 2]),
//        t13and = t13cri.getConditionAnd(),
//        t13or = t13cri.getConditionOr();
//
//    var test_result =
//        t13and.length === 0 &&
//        t13or.length === 3 &&
//        t13or[0].left_key === "table1.key1" &&
//        t13or[0].key_type === "value" &&
//        t13or[1].left_key === "table2.key1" &&
//        t13or[1].key_type === "value" &&
//        t13or[2].left_key === "table1.key1" &&
//        t13or[2].right_key[0] === "table3.key1" &&
//        t13or[2].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t13cri = cri2.createOfConditionWithKeyPrefixes(prefixes3, [0, 2]),
//        t13and = t13cri.getConditionAnd()[0].getConditionOr(),
//        t13or = t13cri.getConditionOr();
//
//    var test_result2 =
//        t13and.length === 3 &&
//        t13or.length === 0 &&
//        t13and[0].left_key === "table1.key1" &&
//        t13and[0].key_type === "value" &&
//        t13and[1].left_key === "table2.key1" &&
//        t13and[1].key_type === "value" &&
//        t13and[2].left_key === "table1.key1" &&
//        t13and[2].right_key[0] === "table3.key1" &&
//        t13and[2].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t13cri = cri3.createOfConditionWithKeyPrefixes(prefixes3, [0, 2]),
//        t13and = t13cri.getConditionAnd(),
//        t13or = t13cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t13and.length === 0 &&
//        t13or.length === 3 &&
//        t13or[0].left_key === "table1.key1" &&
//        t13or[0].key_type === "value" &&
//        t13or[1].left_key === "table2.key1" &&
//        t13or[1].key_type === "value" &&
//        t13or[2].left_key === "table1.key1" &&
//        t13or[2].right_key[0] === "table3.key1" &&
//        t13or[2].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('141 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        cri3 = new Kriteria();
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table2.key1").eq.value(200)
//      .or("table1.key1").eq.key("table1.key2")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1");
//    cri2.and(cri1);
//    cri3.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    var t14cri = cri1.createOfConditionWithKeyPrefixes(prefixes3, [0, 3]),
//        t14and = t14cri.getConditionAnd(),
//        t14or = t14cri.getConditionOr();
//
//    var test_result =
//        t14and.length === 0 &&
//        t14or.length === 3 &&
//        t14or[0].left_key === "table1.key1" &&
//        t14or[0].key_type === "value" &&
//        t14or[1].left_key === "table2.key1" &&
//        t14or[1].key_type === "value" &&
//        t14or[2].left_key === "table1.key1" &&
//        t14or[2].right_key[0] === "table1.key2" &&
//        t14or[2].key_type === "key";
//
//    expect(test_result).toEqual(true);
//
//    var t14cri = cri2.createOfConditionWithKeyPrefixes(prefixes3, [0, 3]),
//        t14and = t14cri.getConditionAnd()[0].getConditionOr(),
//        t14or = t14cri.getConditionOr();
//
//    var test_result2 =
//        t14and.length === 3 &&
//        t14or.length === 0 &&
//        t14and[0].left_key === "table1.key1" &&
//        t14and[0].key_type === "value" &&
//        t14and[1].left_key === "table2.key1" &&
//        t14and[1].key_type === "value" &&
//        t14and[2].left_key === "table1.key1" &&
//        t14and[2].right_key[0] === "table1.key2" &&
//        t14and[2].key_type === "key";
//
//    expect(test_result2).toEqual(true);
//
//    var t14cri = cri3.createOfConditionWithKeyPrefixes(prefixes3, [0, 3]),
//        t14and = t14cri.getConditionAnd(),
//        t14or = t14cri.getConditionOr()[0].getConditionOr();
//
//    var test_result3 =
//        t14and.length === 0 &&
//        t14or.length === 3 &&
//        t14or[0].left_key === "table1.key1" &&
//        t14or[0].key_type === "value" &&
//        t14or[1].left_key === "table2.key1" &&
//        t14or[1].key_type === "value" &&
//        t14or[2].left_key === "table1.key1" &&
//        t14or[2].right_key[0] === "table1.key2" &&
//        t14or[2].key_type === "key";
//
//    expect(test_result3).toEqual(true);
//
//    done();
//  });
//
//
//
//  it('200 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        t1cri = null,
//        and_condition = [],
//        or_condition = [],
//        condition = null;
//
//    cri1.and("table1.key1").eq.value(100);
//
//    var prefixes = ["table2"];
//
//    t1cri = cri1.createOfConditionWithKeyPrefixes(prefixes);
//
//    expect(t1cri === null).toEqual(true);
//
//    done();
//  });
//
//  it('201 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        t1cri = null,
//        and_condition = [],
//        or_condition = [],
//        condition = null;
//
//    cri1.or("table1.key1").eq.value(100);
//
//    var prefixes = ["table2"];
//
//    t1cri = cri1.createOfConditionWithKeyPrefixes(prefixes);
//
//    expect(t1cri === null).toEqual(true);
//
//    done();
//  });
//
//  it('202 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        t1cri = null,
//        and_condition = [],
//        or_condition = [],
//        condition = null;
//
//    cri1.and("table1.key1").eq.value(100);
//    cri2.and(cri1);
//
//    var prefixes = ["table2"];
//
//    t1cri = cri2.createOfConditionWithKeyPrefixes(prefixes);
//
//    expect(t1cri === null).toEqual(true);
//
//    done();
//  });
//
//  it('203 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        t1cri = null,
//        and_condition = [],
//        or_condition = [],
//        condition = null;
//
//    cri1.and("table1.key1").eq.value(100);
//    cri2.or(cri1);
//
//    var prefixes = ["table2"];
//
//    t1cri = cri2.createOfConditionWithKeyPrefixes(prefixes);
//
//    expect(t1cri === null).toEqual(true);
//
//    done();
//  });
//
//  it('204 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        t1cri = null,
//        and_condition = [],
//        or_condition = [],
//        condition = null;
//
//    cri1.or("table1.key1").eq.value(100);
//    cri2.and(cri1);
//
//    var prefixes = ["table2"];
//
//    t1cri = cri2.createOfConditionWithKeyPrefixes(prefixes);
//
//    expect(t1cri === null).toEqual(true);
//
//    done();
//  });
//
//  it('205 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        t1cri = null,
//        and_condition = [],
//        or_condition = [],
//        condition = null;
//
//    cri1.or("table1.key1").eq.value(100);
//    cri2.or(cri1);
//
//    var prefixes = ["table2"];
//
//    t1cri = cri2.createOfConditionWithKeyPrefixes(prefixes);
//
//    expect(t1cri === null).toEqual(true);
//
//    done();
//  });
//
//  it('206 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        t1cri = null,
//        and_condition = [],
//        or_condition = [],
//        condition = null;
//
//    cri1.and("table1.key1").eq.key("table2.key1");
//
//    var prefixes = ["table3"];
//
//    t1cri = cri1.createOfConditionWithKeyPrefixes(prefixes);
//
//    expect(t1cri === null).toEqual(true);
//
//    done();
//  });
//
//  it('207 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        t1cri = null,
//        and_condition = [],
//        or_condition = [],
//        condition = null;
//
//    cri1.and("table1.key1").eq.key("table2.key1");
//
//    var prefixes = ["table3"];
//
//    t1cri = cri1.createOfConditionWithKeyPrefixes(prefixes);
//
//    expect(t1cri === null).toEqual(true);
//
//    done();
//  });
//
//  it('208 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        t1cri = null,
//        and_condition = [],
//        or_condition = [],
//        condition = null;
//
//    cri1.and("table1.key1").eq.key("table2.key1");
//    cri2.and(cri1);
//
//    var prefixes = ["table3"];
//
//    t1cri = cri2.createOfConditionWithKeyPrefixes(prefixes);
//
//    expect(t1cri === null).toEqual(true);
//
//    done();
//  });
//
//  it('209 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        t1cri = null,
//        and_condition = [],
//        or_condition = [],
//        condition = null;
//
//    cri1.and("table1.key1").eq.key("table2.key1");
//    cri2.or(cri1);
//
//    var prefixes = ["table3"];
//
//    t1cri = cri2.createOfConditionWithKeyPrefixes(prefixes);
//
//    expect(t1cri === null).toEqual(true);
//
//    done();
//  });
//
//  it('210 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        t1cri = null,
//        and_condition = [],
//        or_condition = [],
//        condition = null;
//
//    cri1.or("table1.key1").eq.key("table2.key1");
//    cri2.and(cri1);
//
//    var prefixes = ["table3"];
//
//    t1cri = cri2.createOfConditionWithKeyPrefixes(prefixes);
//
//    expect(t1cri === null).toEqual(true);
//
//    done();
//  });
//
//  it('211 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        t1cri = null,
//        and_condition = [],
//        or_condition = [],
//        condition = null;
//
//    cri1.or("table1.key1").eq.key("table2.key1");
//    cri2.or(cri1);
//
//    var prefixes = ["table3"];
//
//    t1cri = cri2.createOfConditionWithKeyPrefixes(prefixes);
//
//    expect(t1cri === null).toEqual(true);
//
//    done();
//  });
//
//  var countForPrefix = function countForPrefix(conditions, prefixes) {
//    var condition = null,
//        count = 0;
//
//    for(var i = 0, l = conditions.length; i < l; i = i + 1) {
//      condition = conditions[i];
//
//      if(condition instanceof Kriteria) {
//        count += countForPrefix(condition.getConditionAnd(), prefixes)
//              +  countForPrefix(condition.getConditionOr(), prefixes);
//
//      } else {
//        if(match_prefix(condition.left_key, prefixes) || match_prefix(condition.right_key[0], prefixes)) {
//          count++;
//        }
//      }
//    }
//
//    return count;
//  };
//
//  it('300 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        t1cri = null,
//        t2cri = null,
//        t3cri = null;
//
//    cri1.and("table1.key1").eq.value(100)
//        .and("table1.key2").eq.value(200)
//        .and("table2.key1").eq.value(300)
//        .and("table2.key2").eq.value(400)
//        .and("table2.key3").eq.value(500)
//        .and("table3.key1").eq.value(600)
//        .and("table3.key2").eq.value(700)
//        .and("table3.key2").eq.value(800);
//    cri2.and(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    t1cri = cri1.createOfConditionWithKeyPrefixes(prefixes1);
//    t2cri = cri1.createOfConditionWithKeyPrefixes(prefixes2);
//    t3cri = cri1.createOfConditionWithKeyPrefixes(prefixes3);
//
//    var len_all_and = cri1.getConditionAnd().length,
//        len_all_or = cri1.getConditionOr().length,
//        cnt_all_and_p1 = countForPrefix(cri1.getConditionAnd(), prefixes1),
//        cnt_all_and_p2 = countForPrefix(cri1.getConditionAnd(), prefixes2),
//        cnt_all_and_p3 = countForPrefix(cri1.getConditionAnd(), prefixes3),
//        len_t1_and = t1cri.getConditionAnd().length,
//        len_t1_or = t1cri.getConditionOr().length,
//        cnt_t1_and_p1 = countForPrefix(t1cri.getConditionAnd(), prefixes1),
//        cnt_t1_and_p2 = countForPrefix(t1cri.getConditionAnd(), prefixes2),
//        cnt_t1_and_p3 = countForPrefix(t1cri.getConditionAnd(), prefixes3),
//        len_t2_and = t2cri.getConditionAnd().length,
//        len_t2_or = t2cri.getConditionOr().length,
//        cnt_t2_and_p1 = countForPrefix(t2cri.getConditionAnd(), prefixes1),
//        cnt_t2_and_p2 = countForPrefix(t2cri.getConditionAnd(), prefixes2),
//        cnt_t2_and_p3 = countForPrefix(t2cri.getConditionAnd(), prefixes3),
//        len_t3_and = t3cri.getConditionAnd().length,
//        len_t3_or = t3cri.getConditionOr().length,
//        cnt_t3_and_p1 = countForPrefix(t3cri.getConditionAnd(), prefixes1),
//        cnt_t3_and_p2 = countForPrefix(t3cri.getConditionAnd(), prefixes2),
//        cnt_t3_and_p3 = countForPrefix(t3cri.getConditionAnd(), prefixes3);
//
//    var test_result1 = cnt_t1_and_p1 === len_t1_and &&
//        cnt_t1_and_p1 === cnt_all_and_p1 &&
//        cnt_t1_and_p2 === 0 &&
//        cnt_t1_and_p3 === cnt_t1_and_p1 &&
//        len_t1_or === 0 &&
//        len_t1_or === len_all_or,
//        test_result2 = cnt_t2_and_p1 === 0 &&
//        cnt_t2_and_p2 === len_t2_and &&
//        cnt_t2_and_p2 === cnt_all_and_p2 &&
//        cnt_t2_and_p3 === cnt_t2_and_p2 &&
//        len_t2_or === 0 &&
//        len_t2_or === len_all_or,
//        test_result3 = cnt_t3_and_p3 === len_t3_and &&
//        cnt_t3_and_p3 === (cnt_t3_and_p1 + cnt_t3_and_p2) &&
//        cnt_t3_and_p3 === cnt_all_and_p3 &&
//        cnt_t3_and_p3 < len_all_and &&
//        len_t3_or === 0 &&
//        len_t3_or === len_all_or;
//
//    expect(test_result1 && test_result2 && test_result3).toEqual(true);
//
//
//    t1cri = cri2.createOfConditionWithKeyPrefixes(prefixes1);
//    t2cri = cri2.createOfConditionWithKeyPrefixes(prefixes2);
//    t3cri = cri2.createOfConditionWithKeyPrefixes(prefixes3);
//
//    var len_all_and = cri1.getConditionAnd().length,
//        len_all_or = cri1.getConditionOr().length,
//        cnt_all_and_p1 = countForPrefix(cri1.getConditionAnd(), prefixes1),
//        cnt_all_and_p2 = countForPrefix(cri1.getConditionAnd(), prefixes2),
//        cnt_all_and_p3 = countForPrefix(cri1.getConditionAnd(), prefixes3),
//        len_t1_and = t1cri.getConditionAnd().length,
//        len_t1_or = t1cri.getConditionOr().length,
//        cnt_t1_and_p1 = countForPrefix(t1cri.getConditionAnd(), prefixes1),
//        cnt_t1_and_p2 = countForPrefix(t1cri.getConditionAnd(), prefixes2),
//        cnt_t1_and_p3 = countForPrefix(t1cri.getConditionAnd(), prefixes3),
//        len_t2_and = t2cri.getConditionAnd().length,
//        len_t2_or = t2cri.getConditionOr().length,
//        cnt_t2_and_p1 = countForPrefix(t2cri.getConditionAnd(), prefixes1),
//        cnt_t2_and_p2 = countForPrefix(t2cri.getConditionAnd(), prefixes2),
//        cnt_t2_and_p3 = countForPrefix(t2cri.getConditionAnd(), prefixes3),
//        len_t3_and = t3cri.getConditionAnd().length,
//        len_t3_or = t3cri.getConditionOr().length,
//        cnt_t3_and_p1 = countForPrefix(t3cri.getConditionAnd(), prefixes1),
//        cnt_t3_and_p2 = countForPrefix(t3cri.getConditionAnd(), prefixes2),
//        cnt_t3_and_p3 = countForPrefix(t3cri.getConditionAnd(), prefixes3);
//
//    var test_result1 = //cnt_t1_and_p1 === len_t1_and &&
//        cnt_t1_and_p1 === cnt_all_and_p1 &&
//        cnt_t1_and_p2 === 0 &&
//        cnt_t1_and_p3 === cnt_t1_and_p1 &&
//        len_t1_or === 0 &&
//        len_t1_or === len_all_or,
//        test_result2 = cnt_t2_and_p1 === 0 &&
//        //cnt_t2_and_p2 === len_t2_and &&
//        cnt_t2_and_p2 === cnt_all_and_p2 &&
//        cnt_t2_and_p3 === cnt_t2_and_p2 &&
//        len_t2_or === 0 &&
//        len_t2_or === len_all_or,
//        test_result3 = //cnt_t3_and_p3 === len_t3_and &&
//        cnt_t3_and_p3 === (cnt_t3_and_p1 + cnt_t3_and_p2) &&
//        cnt_t3_and_p3 === cnt_all_and_p3 &&
//        cnt_t3_and_p3 < len_all_and &&
//        len_t3_or === 0 &&
//        len_t3_or === len_all_or;
//
//    expect(test_result1 && test_result2 && test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('301 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        t1cri = null,
//        t2cri = null,
//        t3cri = null;
//
//    cri1.or("table1.key1").eq.value(100)
//      .or("table1.key2").eq.value(200)
//      .or("table2.key1").eq.value(300)
//      .or("table2.key2").eq.value(400)
//      .or("table2.key3").eq.value(500)
//      .or("table3.key1").eq.value(600)
//      .or("table3.key2").eq.value(700)
//      .or("table3.key2").eq.value(800);
//    cri2.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    t1cri = cri1.createOfConditionWithKeyPrefixes(prefixes1);
//    t2cri = cri1.createOfConditionWithKeyPrefixes(prefixes2);
//    t3cri = cri1.createOfConditionWithKeyPrefixes(prefixes3);
//
//    var len_all_and = cri1.getConditionAnd().length,
//        len_all_or = cri1.getConditionOr().length,
//        cnt_all_or_p1 = countForPrefix(cri1.getConditionOr(), prefixes1),
//        cnt_all_or_p2 = countForPrefix(cri1.getConditionOr(), prefixes2),
//        cnt_all_or_p3 = countForPrefix(cri1.getConditionOr(), prefixes3),
//        len_t1_and = t1cri.getConditionAnd().length,
//        len_t1_or = t1cri.getConditionOr().length,
//        cnt_t1_or_p1 = countForPrefix(t1cri.getConditionOr(), prefixes1),
//        cnt_t1_or_p2 = countForPrefix(t1cri.getConditionOr(), prefixes2),
//        cnt_t1_or_p3 = countForPrefix(t1cri.getConditionOr(), prefixes3),
//        len_t2_and = t2cri.getConditionAnd().length,
//        len_t2_or = t2cri.getConditionOr().length,
//        cnt_t2_or_p1 = countForPrefix(t2cri.getConditionOr(), prefixes1),
//        cnt_t2_or_p2 = countForPrefix(t2cri.getConditionOr(), prefixes2),
//        cnt_t2_or_p3 = countForPrefix(t2cri.getConditionOr(), prefixes3),
//        len_t3_and = t3cri.getConditionAnd().length,
//        len_t3_or = t3cri.getConditionOr().length,
//        cnt_t3_or_p1 = countForPrefix(t3cri.getConditionOr(), prefixes1),
//        cnt_t3_or_p2 = countForPrefix(t3cri.getConditionOr(), prefixes2),
//        cnt_t3_or_p3 = countForPrefix(t3cri.getConditionOr(), prefixes3);
//
//    var test_result1 = cnt_t1_or_p1 === len_t1_or &&
//        cnt_t1_or_p1 === cnt_all_or_p1 &&
//        cnt_t1_or_p2 === 0 &&
//        cnt_t1_or_p3 === cnt_t1_or_p1 &&
//        len_t1_and === 0 &&
//        len_t1_and === len_all_and,
//        test_result2 = cnt_t2_or_p1 === 0 &&
//        cnt_t2_or_p2 === len_t2_or &&
//        cnt_t2_or_p2 === cnt_all_or_p2 &&
//        cnt_t2_or_p3 === cnt_t2_or_p2 &&
//        len_t2_and === 0 &&
//        len_t2_and === len_all_and,
//        test_result3 = cnt_t3_or_p3 === len_t3_or &&
//        cnt_t3_or_p3 === (cnt_t3_or_p1 + cnt_t3_or_p2) &&
//        cnt_t3_or_p3 === cnt_all_or_p3 &&
//        cnt_t3_or_p3 < len_all_or &&
//        len_t3_and === 0 &&
//        len_t3_and === len_all_and;
//
//    expect(test_result1 && test_result2 && test_result3).toEqual(true);
//
//
//    t1cri = cri2.createOfConditionWithKeyPrefixes(prefixes1);
//    t2cri = cri2.createOfConditionWithKeyPrefixes(prefixes2);
//    t3cri = cri2.createOfConditionWithKeyPrefixes(prefixes3);
//
//    var len_all_and = cri1.getConditionAnd().length,
//        len_all_or = cri1.getConditionOr().length,
//        cnt_all_or_p1 = countForPrefix(cri1.getConditionOr(), prefixes1),
//        cnt_all_or_p2 = countForPrefix(cri1.getConditionOr(), prefixes2),
//        cnt_all_or_p3 = countForPrefix(cri1.getConditionOr(), prefixes3),
//        len_t1_and = t1cri.getConditionAnd().length,
//        len_t1_or = t1cri.getConditionOr().length,
//        cnt_t1_or_p1 = countForPrefix(t1cri.getConditionOr(), prefixes1),
//        cnt_t1_or_p2 = countForPrefix(t1cri.getConditionOr(), prefixes2),
//        cnt_t1_or_p3 = countForPrefix(t1cri.getConditionOr(), prefixes3),
//        len_t2_and = t2cri.getConditionAnd().length,
//        len_t2_or = t2cri.getConditionOr().length,
//        cnt_t2_or_p1 = countForPrefix(t2cri.getConditionOr(), prefixes1),
//        cnt_t2_or_p2 = countForPrefix(t2cri.getConditionOr(), prefixes2),
//        cnt_t2_or_p3 = countForPrefix(t2cri.getConditionOr(), prefixes3),
//        len_t3_and = t3cri.getConditionAnd().length,
//        len_t3_or = t3cri.getConditionOr().length,
//        cnt_t3_or_p1 = countForPrefix(t3cri.getConditionOr(), prefixes1),
//        cnt_t3_or_p2 = countForPrefix(t3cri.getConditionOr(), prefixes2),
//        cnt_t3_or_p3 = countForPrefix(t3cri.getConditionOr(), prefixes3);
//
//    var test_result1 = //cnt_t1_or_p1 === len_t1_or &&
//        cnt_t1_or_p1 === cnt_all_or_p1 &&
//        cnt_t1_or_p2 === 0 &&
//        cnt_t1_or_p3 === cnt_t1_or_p1 &&
//        len_t1_and === 0 &&
//        len_t1_and === len_all_and,
//        test_result2 = cnt_t2_or_p1 === 0 &&
//        //cnt_t2_or_p2 === len_t2_or &&
//        cnt_t2_or_p2 === cnt_all_or_p2 &&
//        cnt_t2_or_p3 === cnt_t2_or_p2 &&
//        len_t2_and === 0 &&
//        len_t2_and === len_all_and,
//        test_result3 = //cnt_t3_or_p3 === len_t3_or &&
//        cnt_t3_or_p3 === (cnt_t3_or_p1 + cnt_t3_or_p2) &&
//        cnt_t3_or_p3 === cnt_all_or_p3 &&
//        cnt_t3_or_p3 < len_all_or &&
//        len_t3_and === 0 &&
//        len_t3_and === len_all_and;
//
//    expect(test_result1 && test_result2 && test_result3).toEqual(true);
//
//    done();
//  });
//
//  it('302 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        t1cri = null,
//        t2cri = null,
//        t3cri = null;
//
//    cri1.and("table1.key1").eq.key("table1.key1")
//      .and("table1.key1").eq.key("table2.key1")
//      .and("table1.key1").eq.key("table3.key1")
//      .and("table2.key2").eq.key("table1.key1")
//      .and("table2.key2").eq.key("table2.key2")
//      .and("table2.key2").eq.key("table3.key3")
//      .and("table3.key3").eq.key("table1.key1")
//      .and("table3.key3").eq.key("table2.key2")
//      .and("table3.key3").eq.key("table3.key3");
//    cri2.and(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    t1cri = cri1.createOfConditionWithKeyPrefixes(prefixes1);
//    t2cri = cri1.createOfConditionWithKeyPrefixes(prefixes2);
//    t3cri = cri1.createOfConditionWithKeyPrefixes(prefixes3);
//
//    var //len_all_and = cri1.getConditionAnd().length,
//        len_all_or = cri1.getConditionOr().length,
//        cnt_all_and_p1 = countForPrefix(cri1.getConditionAnd(), prefixes1),
//        cnt_all_and_p2 = countForPrefix(cri1.getConditionAnd(), prefixes2),
//        cnt_all_and_p3 = countForPrefix(cri1.getConditionAnd(), prefixes3),
//        len_t1_and = t1cri.getConditionAnd().length,
//        len_t1_or = t1cri.getConditionOr().length,
//        cnt_t1_and_p1 = countForPrefix(t1cri.getConditionAnd(), prefixes1),
//        cnt_t1_and_p2 = countForPrefix(t1cri.getConditionAnd(), prefixes2),
//        cnt_t1_and_p3 = countForPrefix(t1cri.getConditionAnd(), prefixes3),
//        len_t2_and = t2cri.getConditionAnd().length,
//        len_t2_or = t2cri.getConditionOr().length,
//        cnt_t2_and_p1 = countForPrefix(t2cri.getConditionAnd(), prefixes1),
//        cnt_t2_and_p2 = countForPrefix(t2cri.getConditionAnd(), prefixes2),
//        cnt_t2_and_p3 = countForPrefix(t2cri.getConditionAnd(), prefixes3),
//        len_t3_and = t3cri.getConditionAnd().length,
//        len_t3_or = t3cri.getConditionOr().length,
//        cnt_t3_and_p1 = countForPrefix(t3cri.getConditionAnd(), prefixes1),
//        cnt_t3_and_p2 = countForPrefix(t3cri.getConditionAnd(), prefixes2),
//        cnt_t3_and_p3 = countForPrefix(t3cri.getConditionAnd(), prefixes3);
//
//    var test_result1 = cnt_t1_and_p1 === 5 &&
//        cnt_t1_and_p1 === len_t1_and &&
//        cnt_t1_and_p2 === 2 &&
//        cnt_t1_and_p3 === 5 &&
//        len_t1_or === 0 &&
//        len_t1_or === len_all_or,
//        test_result2 = cnt_t2_and_p1 === 2 &&
//        cnt_t2_and_p2 === 5 &&
//        cnt_t2_and_p2 === len_t2_and &&
//        cnt_t2_and_p3 === 5 &&
//        len_t2_or === 0 &&
//        len_t2_or === len_all_or,
//        test_result3 = cnt_t3_and_p1 === 5 &&
//        cnt_t3_and_p2 === 5 &&
//        cnt_t3_and_p3 === 8 &&
//        cnt_t3_and_p3 === len_t3_and &&
//        len_t3_or === 0 &&
//        len_t3_or === len_all_or,
//        test_result4 = cnt_all_and_p1 === 5 &&
//        cnt_all_and_p2 === 5 &&
//        cnt_all_and_p3 === 8;
//
//    expect(test_result1 && test_result2 && test_result3 && test_result4).toEqual(true);
//
//
//    t1cri = cri2.createOfConditionWithKeyPrefixes(prefixes1);
//    t2cri = cri2.createOfConditionWithKeyPrefixes(prefixes2);
//    t3cri = cri2.createOfConditionWithKeyPrefixes(prefixes3);
//
//    var //len_all_and = cri1.getConditionAnd().length,
//        len_all_or = cri1.getConditionOr().length,
//        cnt_all_and_p1 = countForPrefix(cri1.getConditionAnd(), prefixes1),
//        cnt_all_and_p2 = countForPrefix(cri1.getConditionAnd(), prefixes2),
//        cnt_all_and_p3 = countForPrefix(cri1.getConditionAnd(), prefixes3),
//        //len_t1_and = t1cri.getConditionAnd().length,
//        len_t1_or = t1cri.getConditionOr().length,
//        cnt_t1_and_p1 = countForPrefix(t1cri.getConditionAnd(), prefixes1),
//        cnt_t1_and_p2 = countForPrefix(t1cri.getConditionAnd(), prefixes2),
//        cnt_t1_and_p3 = countForPrefix(t1cri.getConditionAnd(), prefixes3),
//        //len_t2_and = t2cri.getConditionAnd().length,
//        len_t2_or = t2cri.getConditionOr().length,
//        cnt_t2_and_p1 = countForPrefix(t2cri.getConditionAnd(), prefixes1),
//        cnt_t2_and_p2 = countForPrefix(t2cri.getConditionAnd(), prefixes2),
//        cnt_t2_and_p3 = countForPrefix(t2cri.getConditionAnd(), prefixes3),
//        //len_t3_and = t3cri.getConditionAnd().length,
//        len_t3_or = t3cri.getConditionOr().length,
//        cnt_t3_and_p1 = countForPrefix(t3cri.getConditionAnd(), prefixes1),
//        cnt_t3_and_p2 = countForPrefix(t3cri.getConditionAnd(), prefixes2),
//        cnt_t3_and_p3 = countForPrefix(t3cri.getConditionAnd(), prefixes3);
//
//    var test_result1 = cnt_t1_and_p1 === 5 &&
//        //cnt_t1_and_p1 === len_t1_and &&
//        cnt_t1_and_p2 === 2 &&
//        cnt_t1_and_p3 === 5 &&
//        len_t1_or === 0 &&
//        len_t1_or === len_all_or,
//        test_result2 = cnt_t2_and_p1 === 2 &&
//        cnt_t2_and_p2 === 5 &&
//        //cnt_t2_and_p2 === len_t2_and &&
//        cnt_t2_and_p3 === 5 &&
//        len_t2_or === 0 &&
//        len_t2_or === len_all_or,
//        test_result3 = cnt_t3_and_p1 === 5 &&
//        cnt_t3_and_p2 === 5 &&
//        cnt_t3_and_p3 === 8 &&
//        //cnt_t3_and_p3 === len_t3_and &&
//        len_t3_or === 0 &&
//        len_t3_or === len_all_or,
//        test_result4 = cnt_all_and_p1 === 5 &&
//        cnt_all_and_p2 === 5 &&
//        cnt_all_and_p3 === 8;
//
//    expect(test_result1 && test_result2 && test_result3 && test_result4).toEqual(true);
//
//    done();
//  });
//
//  it('303 - createOfConditionWithKeyPrefixes', function(done) {
//    var cri1 = new Kriteria(),
//        cri2 = new Kriteria(),
//        t1cri = null,
//        t2cri = null,
//        t3cri = null;
//
//    cri1.or("table1.key1").eq.key("table1.key1")
//      .or("table1.key1").eq.key("table2.key1")
//      .or("table1.key1").eq.key("table3.key1")
//      .or("table2.key2").eq.key("table1.key1")
//      .or("table2.key2").eq.key("table2.key2")
//      .or("table2.key2").eq.key("table3.key3")
//      .or("table3.key3").eq.key("table1.key1")
//      .or("table3.key3").eq.key("table2.key2")
//      .or("table3.key3").eq.key("table3.key3");
//    cri2.or(cri1);
//
//    var prefixes1 = ["table1"],
//        prefixes2 = ["table2"],
//        prefixes3 = ["table1", "table2"];
//
//    t1cri = cri1.createOfConditionWithKeyPrefixes(prefixes1);
//    t2cri = cri1.createOfConditionWithKeyPrefixes(prefixes2);
//    t3cri = cri1.createOfConditionWithKeyPrefixes(prefixes3);
//
//    var len_all_and = cri1.getConditionAnd().length,
//        //len_all_or = cri1.getConditionOr().length,
//        cnt_all_or_p1 = countForPrefix(cri1.getConditionOr(), prefixes1),
//        cnt_all_or_p2 = countForPrefix(cri1.getConditionOr(), prefixes2),
//        cnt_all_or_p3 = countForPrefix(cri1.getConditionOr(), prefixes3),
//        len_t1_and = t1cri.getConditionAnd().length,
//        len_t1_or = t1cri.getConditionOr().length,
//        cnt_t1_or_p1 = countForPrefix(t1cri.getConditionOr(), prefixes1),
//        cnt_t1_or_p2 = countForPrefix(t1cri.getConditionOr(), prefixes2),
//        cnt_t1_or_p3 = countForPrefix(t1cri.getConditionOr(), prefixes3),
//        len_t2_and = t2cri.getConditionAnd().length,
//        len_t2_or = t2cri.getConditionOr().length,
//        cnt_t2_or_p1 = countForPrefix(t2cri.getConditionOr(), prefixes1),
//        cnt_t2_or_p2 = countForPrefix(t2cri.getConditionOr(), prefixes2),
//        cnt_t2_or_p3 = countForPrefix(t2cri.getConditionOr(), prefixes3),
//        len_t3_and = t3cri.getConditionAnd().length,
//        len_t3_or = t3cri.getConditionOr().length,
//        cnt_t3_or_p1 = countForPrefix(t3cri.getConditionOr(), prefixes1),
//        cnt_t3_or_p2 = countForPrefix(t3cri.getConditionOr(), prefixes2),
//        cnt_t3_or_p3 = countForPrefix(t3cri.getConditionOr(), prefixes3);
//
//    var test_result1 = cnt_t1_or_p1 === 5 &&
//        cnt_t1_or_p1 === len_t1_or &&
//        cnt_t1_or_p2 === 2 &&
//        cnt_t1_or_p3 === 5 &&
//        len_t1_and === 0 &&
//        len_t1_and === len_all_and,
//        test_result2 = cnt_t2_or_p1 === 2 &&
//        cnt_t2_or_p2 === 5 &&
//        cnt_t2_or_p2 === len_t2_or &&
//        cnt_t2_or_p3 === 5 &&
//        len_t2_and === 0 &&
//        len_t2_and === len_all_and,
//        test_result3 = cnt_t3_or_p1 === 5 &&
//        cnt_t3_or_p2 === 5 &&
//        cnt_t3_or_p3 === 8 &&
//        cnt_t3_or_p3 === len_t3_or &&
//        len_t3_and === 0 &&
//        len_t3_and === len_all_and,
//        test_result4 = cnt_all_or_p1 === 5 &&
//        cnt_all_or_p2 === 5 &&
//        cnt_all_or_p3 === 8;
//
//    expect(test_result1 && test_result2 && test_result3 && test_result4).toEqual(true);
//
//
//    t1cri = cri2.createOfConditionWithKeyPrefixes(prefixes1);
//    t2cri = cri2.createOfConditionWithKeyPrefixes(prefixes2);
//    t3cri = cri2.createOfConditionWithKeyPrefixes(prefixes3);
//
//    var len_all_and = cri1.getConditionAnd().length,
//        //len_all_or = cri1.getConditionOr().length,
//        cnt_all_and_p1 = countForPrefix(cri1.getConditionAnd(), prefixes1),
//        cnt_all_and_p2 = countForPrefix(cri1.getConditionAnd(), prefixes2),
//        cnt_all_and_p3 = countForPrefix(cri1.getConditionAnd(), prefixes3),
//        len_t1_and = t1cri.getConditionAnd().length,
//        //len_t1_or = t1cri.getConditionOr().length,
//        cnt_t1_and_p1 = countForPrefix(t1cri.getConditionAnd(), prefixes1),
//        cnt_t1_and_p2 = countForPrefix(t1cri.getConditionAnd(), prefixes2),
//        cnt_t1_and_p3 = countForPrefix(t1cri.getConditionAnd(), prefixes3),
//        len_t2_and = t2cri.getConditionAnd().length,
//        //len_t2_or = t2cri.getConditionOr().length,
//        cnt_t2_and_p1 = countForPrefix(t2cri.getConditionAnd(), prefixes1),
//        cnt_t2_and_p2 = countForPrefix(t2cri.getConditionAnd(), prefixes2),
//        cnt_t2_and_p3 = countForPrefix(t2cri.getConditionAnd(), prefixes3),
//        len_t3_and = t3cri.getConditionAnd().length,
//        //len_t3_or = t3cri.getConditionOr().length,
//        cnt_t3_and_p1 = countForPrefix(t3cri.getConditionAnd(), prefixes1),
//        cnt_t3_and_p2 = countForPrefix(t3cri.getConditionAnd(), prefixes2),
//        cnt_t3_and_p3 = countForPrefix(t3cri.getConditionAnd(), prefixes3);
//
//    var test_result1 = cnt_t1_or_p1 === 5 &&
//        //cnt_t1_or_p1 === len_t1_or &&
//        cnt_t1_or_p2 === 2 &&
//        cnt_t1_or_p3 === 5 &&
//        len_t1_and === 0 &&
//        len_t1_and === len_all_and,
//        test_result2 = cnt_t2_or_p1 === 2 &&
//        cnt_t2_or_p2 === 5 &&
//        //cnt_t2_or_p2 === len_t2_or &&
//        cnt_t2_or_p3 === 5 &&
//        len_t2_and === 0 &&
//        len_t2_and === len_all_and,
//        test_result3 = cnt_t3_or_p1 === 5 &&
//        cnt_t3_or_p2 === 5 &&
//        cnt_t3_or_p3 === 8 &&
//        //cnt_t3_or_p3 === len_t3_or &&
//        len_t3_and === 0 &&
//        len_t3_and === len_all_and,
//        test_result4 = cnt_all_or_p1 === 5 &&
//        cnt_all_or_p2 === 5 &&
//        cnt_all_or_p3 === 8;
//
//    expect(test_result1 && test_result2 && test_result3 && test_result4).toEqual(true);
//
//    done();
//  });

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
