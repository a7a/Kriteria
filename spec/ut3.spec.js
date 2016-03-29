var Kriteria = require("../dist/js/node/Kriteria.js").Kriteria;

var test_data = [
  {id:1, table1: { key1: 100, key2: 13, key3: 17 }, table2: { key1: 21, key2: 25, key3: 29 }, table3: { key1: 33, key2: 37, key3: 41 } },
  {id:2, table1: { key1: 11, key2: 16, key3: 21 }, table2: { key1: 100, key2: 31, key3: 36 }, table3: { key1: 41, key2: 46, key3: 51 } },
  {id:3, table1: { key1: 13, key2: 19, key3: 25 }, table2: { key1: 31, key2: 37, key3: 43 }, table3: { key1: 100, key2: 55, key3: 61 } },
  {id:4, table1: { key1: 100, key2: 22, key3: 29 }, table2: { key1: 100, key2: 43, key3: 50 }, table3: { key1: 57, key2: 64, key3: 71 } },
  {id:5, table1: { key1: 100, key2: 25, key3: 33 }, table2: { key1: 41, key2: 49, key3: 57 }, table3: { key1: 100, key2: 73, key3: 81 } },
  {id:6, table1: { key1: 19, key2: 28, key3: 37 }, table2: { key1: 100, key2: 55, key3: 64 }, table3: { key1: 100, key2: 82, key3: 91 } },
  {id:7, table1: { key1: 100, key2: 31, key3: 41 }, table2: { key1: 100, key2: 61, key3: 71 }, table3: { key1: 100, key2: 91, key3: 101 } },
  {id:8, table1: { key1: 23, key2: 100, key3: 45 }, table2: { key1: 56, key2: 67, key3: 78 }, table3: { key1: 89, key2: 101, key3: 111 } },
  {id:9, table1: { key1: 25, key2: 37, key3: 49 }, table2: { key1: 61, key2: 100, key3: 85 }, table3: { key1: 97, key2: 110, key3: 121 } },
  {id:10, table1: { key1: 27, key2: 40, key3: 53 }, table2: { key1: 66, key2: 79, key3: 92 }, table3: { key1: 105, key2: 100, key3: 131 } },
  {id:11, table1: { key1: 29, key2: 100, key3: 57 }, table2: { key1: 71, key2: 100, key3: 99 }, table3: { key1: 113, key2: 127, key3: 141 } },
  {id:12, table1: { key1: 31, key2: 100, key3: 61 }, table2: { key1: 76, key2: 91, key3: 106 }, table3: { key1: 121, key2: 100, key3: 151 } },
  {id:13, table1: { key1: 33, key2: 49, key3: 65 }, table2: { key1: 81, key2: 100, key3: 113 }, table3: { key1: 129, key2: 100, key3: 161 } },
  {id:14, table1: { key1: 35, key2: 100, key3: 69 }, table2: { key1: 86, key2: 100, key3: 120 }, table3: { key1: 137, key2: 100, key3: 171 } },
  {id:15, table1: { key1: 37, key2: 55, key3: 100 }, table2: { key1: 91, key2: 109, key3: 127 }, table3: { key1: 145, key2: 163, key3: 181 } },
  {id:16, table1: { key1: 39, key2: 58, key3: 77 }, table2: { key1: 96, key2: 115, key3: 100 }, table3: { key1: 153, key2: 172, key3: 191 } },
  {id:17, table1: { key1: 41, key2: 61, key3: 81 }, table2: { key1: 101, key2: 121, key3: 141 }, table3: { key1: 161, key2: 181, key3: 100 } },
  {id:18, table1: { key1: 43, key2: 64, key3: 100 }, table2: { key1: 106, key2: 127, key3: 100 }, table3: { key1: 169, key2: 190, key3: 211 } },
  {id:19, table1: { key1: 45, key2: 67, key3: 100 }, table2: { key1: 111, key2: 133, key3: 155 }, table3: { key1: 177, key2: 199, key3: 100 } },
  {id:20, table1: { key1: 47, key2: 70, key3: 93 }, table2: { key1: 116, key2: 139, key3: 100 }, table3: { key1: 185, key2: 208, key3: 100 } },
  {id:21, table1: { key1: 49, key2: 73, key3: 100 }, table2: { key1: 121, key2: 145, key3: 100 }, table3: { key1: 193, key2: 217, key3: 100 } },
  {id:22, table1: { key1: 200, key2: 76, key3: 101 }, table2: { key1: 200, key2: 151, key3: 176 }, table3: { key1: 201, key2: 226, key3: 251 } },
  {id:23, table1: { key1: 200, key2: 79, key3: 105 }, table2: { key1: 131, key2: 157, key3: 183 }, table3: { key1: 200, key2: 235, key3: 261 } },
  {id:24, table1: { key1: 55, key2: 82, key3: 109 }, table2: { key1: 200, key2: 163, key3: 190 }, table3: { key1: 200, key2: 244, key3: 271 } },
  {id:25, table1: { key1: 57, key2: 200, key3: 113 }, table2: { key1: 141, key2: 200, key3: 197 }, table3: { key1: 225, key2: 253, key3: 281 } },
  {id:26, table1: { key1: 59, key2: 200, key3: 117 }, table2: { key1: 146, key2: 175, key3: 204 }, table3: { key1: 233, key2: 200, key3: 291 } },
  {id:27, table1: { key1: 61, key2: 91, key3: 121 }, table2: { key1: 151, key2: 200, key3: 211 }, table3: { key1: 241, key2: 200, key3: 301 } },
  {id:28, table1: { key1: 63, key2: 94, key3: 200 }, table2: { key1: 156, key2: 200, key3: 218 }, table3: { key1: 249, key2: 280, key3: 311 } },
  {id:29, table1: { key1: 65, key2: 97, key3: 200 }, table2: { key1: 161, key2: 193, key3: 225 }, table3: { key1: 257, key2: 200, key3: 321 } },
  {id:30, table1: { key1: 67, key2: 101, key3: 133 }, table2: { key1: 166, key2: 200, key3: 232 }, table3: { key1: 265, key2: 200, key3: 331 } }
];

describe('test - Kriteria.js - 2', function() {

  it("100 - splitByKeyPrefixes", function(done) {
    var kri1 = null,
        splited = {};

    kri1 = new Kriteria();
    kri1.and("table1.key1").eq.value(100);

    splited = kri1.splitByKeyPrefixes(["table1"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.else === null;
    var test_result2 = true,
        match_ids = [1,4,5,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect1");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table2"]);

    var test_result1 =
        splited.table2 === null &&
        splited.else !== null;

    expect(test_result1).toEqual(true, "expect2");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table1", "table2"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.table2 === null &&
        splited.else === null;
    var test_result2 = true,
        match_ids = [1,4,5,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect3");

    done();
  });

  it("101 - splitByKeyPrefixes", function(done) {
    var kri1 = null,
        splited = {};

    kri1 = new Kriteria();
    kri1.and("table2.key1").eq.value(100);

    splited = kri1.splitByKeyPrefixes(["table1"]);

    var test_result1 =
        splited.table1 === null &&
        splited.else !== null;

    expect(test_result1).toEqual(true, "expect1");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table2"]);

    var test_result1 =
        splited.table2 !== null &&
        splited.else === null;
    var test_result2 = true,
        match_ids = [2,4,6,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table2.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }

    expect(test_result1 && test_result2).toEqual(true, "expect2");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table1", "table2"]);

    var test_result1 =
        splited.table1 === null &&
        splited.table2 !== null &&
        splited.else === null;
    var test_result2 = true,
        match_ids = [2,4,6,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table2.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect3");

    done();
  });

  it("102 - splitByKeyPrefixes", function(done) {
    var kri1 = null,
        splited = {};

    kri1 = new Kriteria();
    kri1.and("table3.key1").eq.value(100);

    splited = kri1.splitByKeyPrefixes(["table1"]);

    var test_result1 =
        splited.table1 === null &&
        splited.else !== null;

    expect(test_result1).toEqual(true, "expect1");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table2"]);

    var test_result1 =
        splited.table2 === null &&
        splited.else !== null;

    expect(test_result1).toEqual(true, "expect2");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table1", "table2"]);

    var test_result1 =
        splited.table1 === null &&
        splited.table2 === null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [3,5,6,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.else.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect3");

    done();
  });

  it("103 - splitByKeyPrefixes", function(done) {
    var kri1 = null,
        splited = {};

    kri1 = new Kriteria();
    kri1.and("key1").eq.value(100);

    splited = kri1.splitByKeyPrefixes(["table1"]);

    var test_result1 =
        splited.table1 === null &&
        splited.else !== null;

    expect(test_result1).toEqual(true, "expect1");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table2"]);

    var test_result1 =
        splited.table2 === null &&
        splited.else !== null;

    expect(test_result1).toEqual(true, "expect2");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table1", "table2"]);

    var test_result1 =
        splited.table1 === null &&
        splited.table2 === null &&
        splited.else !== null;
    var test_result2 = true,
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.else.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    test_result2 = matches.length === 0;

    expect(test_result1 && test_result2).toEqual(true, "expect3");

    done();
  });

  it("104 - splitByKeyPrefixes", function(done) {
    var kri1 = null,
        splited = {};

    kri1 = new Kriteria();
    kri1.or("table1.key1").eq.value(100);

    splited = kri1.splitByKeyPrefixes(["table1"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.else === null;
    var test_result2 = true,
        match_ids = [1,4,5,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect1");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table2"]);

    var test_result1 =
        splited.table2 === null &&
        splited.else !== null;

    expect(test_result1).toEqual(true, "expect2");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table1", "table2"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.table2 === null &&
        splited.else === null;
    var test_result2 = true,
        match_ids = [1,4,5,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect3");

    done();
  });

  it("105 - splitByKeyPrefixes", function(done) {
    var kri1 = null,
        splited = {};

    kri1 = new Kriteria();
    kri1.or("table2.key1").eq.value(100);

    splited = kri1.splitByKeyPrefixes(["table1"]);

    var test_result1 =
        splited.table1 === null &&
        splited.else !== null;

    expect(test_result1).toEqual(true, "expect1");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table2"]);

    var test_result1 =
        splited.table2 !== null &&
        splited.else === null;
    var test_result2 = true,
        match_ids = [2,4,6,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table2.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }

    expect(test_result1 && test_result2).toEqual(true, "expect2");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table1", "table2"]);

    var test_result1 =
        splited.table1 === null &&
        splited.table2 !== null &&
        splited.else === null;
    var test_result2 = true,
        match_ids = [2,4,6,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table2.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect3");

    done();
  });

  it("106 - splitByKeyPrefixes", function(done) {
    var kri1 = null,
        splited = {};

    kri1 = new Kriteria();
    kri1.or("table3.key1").eq.value(100);

    splited = kri1.splitByKeyPrefixes(["table1"]);

    var test_result1 =
        splited.table1 === null &&
        splited.else !== null;

    expect(test_result1).toEqual(true, "expect1");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table2"]);

    var test_result1 =
        splited.table2 === null &&
        splited.else !== null;

    expect(test_result1).toEqual(true, "expect2");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table1", "table2"]);

    var test_result1 =
        splited.table1 === null &&
        splited.table2 === null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [3,5,6,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.else.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect3");

    done();
  });

  it("107 - splitByKeyPrefixes", function(done) {
    var kri1 = null,
        splited = {};

    kri1 = new Kriteria();
    kri1.or("key1").eq.value(100);

    splited = kri1.splitByKeyPrefixes(["table1"]);

    var test_result1 =
        splited.table1 === null &&
        splited.else !== null;

    expect(test_result1).toEqual(true, "expect1");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table2"]);

    var test_result1 =
        splited.table2 === null &&
        splited.else !== null;

    expect(test_result1).toEqual(true, "expect2");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table1", "table2"]);

    var test_result1 =
        splited.table1 === null &&
        splited.table2 === null &&
        splited.else !== null;
    var test_result2 = true,
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.else.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    test_result2 = matches.length === 0;

    expect(test_result1 && test_result2).toEqual(true, "expect3");

    done();
  });

  it("200 - splitByKeyPrefixes", function(done) {
    var kri1 = null,
        splited = {};

    kri1 = new Kriteria();
    kri1.and("table1.key1").eq.value(100);
    kri1.and("table2.key1").eq.value(100);
    kri1.and("table3.key1").eq.value(100);
    kri1.and("key1").eq.value(100);
    kri1.and("table1.key1").eq.key("table2.key1");
    kri1.and("table2.key1").eq.key("table3.key1");
    kri1.and("table3.key1").eq.key("table1.key1");

    splited = kri1.splitByKeyPrefixes(["table1"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [1,4,5,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }

    expect(test_result1 && test_result2).toEqual(true, "expect1");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table2"]);

    var test_result1 =
        splited.table2 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [2,4,6,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table2.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }

    expect(test_result1 && test_result2).toEqual(true, "expect2");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table1", "table2"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.table2 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids1 = [1,4,5,7],
        match_ids2 = [4,7],
        matches1 = [],
        matches2 = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches1[matches1.length] = test_data[i];
      }
      if(splited.table2.match(test_data[i])) {
        matches2[matches2.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches1.length; i < l; i = i + 1) {
      if(!~match_ids1.indexOf(matches1[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches1.length === 0) {
      test_result2 = false;
    }
    for(var i = 0, l = matches2.length; i < l; i = i + 1) {
      if(!~match_ids2.indexOf(matches2[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches2.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect3");

    done();
  });

  it("201 - splitByKeyPrefixes", function(done) {
    var kri1 = null,
        splited = {};

    kri1 = new Kriteria();
    kri1
    .and(function($) {
      $.and("table1.key1").eq.value(100);
      $.and("table2.key1").eq.value(100);
      $.and("table3.key1").eq.value(100);
      $.and("key1").eq.value(100);
      $.and("table1.key1").eq.key("table2.key1");
      $.and("table2.key1").eq.key("table3.key1");
      $.and("table3.key1").eq.key("table1.key1");
    });

    splited = kri1.splitByKeyPrefixes(["table1"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [1,4,5,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect1");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table2"]);

    var test_result1 =
        splited.table2 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [2,4,6,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table2.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect2");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table1", "table2"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.table2 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids1 = [1,4,5,7],
        match_ids2 = [4,7],
        matches1 = [],
        matches2 = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches1[matches1.length] = test_data[i];
      }
      if(splited.table2.match(test_data[i])) {
        matches2[matches2.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches1.length; i < l; i = i + 1) {
      if(!~match_ids1.indexOf(matches1[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches1.length === 0) {
      test_result2 = false;
    }
    for(var i = 0, l = matches2.length; i < l; i = i + 1) {
      if(!~match_ids2.indexOf(matches2[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches2.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect3");

    done();
  });

  it("202 - splitByKeyPrefixes", function(done) {
    var kri1 = null,
        splited = {};

    kri1 = new Kriteria();
    kri1
    .and(function($) {
      $.and("table1.key1").eq.value(100);
      $.and("table2.key1").eq.value(100);
      $.and("table3.key1").eq.value(100);
      $.and("key1").eq.value(100);
    })
    .and(function($) {
      $.and("table1.key2").eq.value(31);
      $.and("table2.key2").eq.value(55);
      $.and("table3.key2").eq.value(73);
      $.and("key1").eq.value(100);
    });

    splited = kri1.splitByKeyPrefixes(["table1"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect1");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table2"]);

    var test_result1 =
        splited.table2 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [6],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table2.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect2");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table1", "table2"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.table2 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids1 = [7],
        match_ids2 = [6],
        matches1 = [],
        matches2 = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches1[matches1.length] = test_data[i];
      }
      if(splited.table2.match(test_data[i])) {
        matches2[matches2.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches1.length; i < l; i = i + 1) {
      if(!~match_ids1.indexOf(matches1[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches1.length === 0) {
      test_result2 = false;
    }
    for(var i = 0, l = matches2.length; i < l; i = i + 1) {
      if(!~match_ids2.indexOf(matches2[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches2.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect3");

    done();
  });

  it("203 - splitByKeyPrefixes", function(done) {
    var kri1 = null,
        splited = {};

    kri1 = new Kriteria();
    kri1.or("table1.key1").eq.value(100);
    kri1.or("table2.key1").eq.value(100);
    kri1.or("table3.key1").eq.value(100);
    kri1.or("key1").eq.value(100);
    kri1.or("table1.key1").eq.key("table2.key1");
    kri1.or("table2.key1").eq.key("table3.key1");
    kri1.or("table3.key1").eq.key("table1.key1");

    splited = kri1.splitByKeyPrefixes(["table1"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [1,4,5,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect1");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table2"]);

    var test_result1 =
        splited.table2 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [2,4,6,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table2.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect2");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table1", "table2"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.table2 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids1 = [1,4,5,7],
        match_ids2 = [2,4,6,7,22],
        matches1 = [],
        matches2 = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches1[matches1.length] = test_data[i];
      }
      if(splited.table2.match(test_data[i])) {
        matches2[matches2.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches1.length; i < l; i = i + 1) {
      if(!~match_ids1.indexOf(matches1[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches1.length === 0) {
      test_result2 = false;
    }
    for(var i = 0, l = matches2.length; i < l; i = i + 1) {
      if(!~match_ids2.indexOf(matches2[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches2.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect3");

    done();
  });

  it("204 - splitByKeyPrefixes", function(done) {
    var kri1 = null,
        splited = {};

    kri1 = new Kriteria();
    kri1
    .or(function($) {
      $.or("table1.key1").eq.value(100);
      $.or("table2.key1").eq.value(100);
      $.or("table3.key1").eq.value(100);
      $.or("key1").eq.value(100);
      $.or("table1.key1").eq.key("table2.key1");
      $.or("table2.key1").eq.key("table3.key1");
      $.or("table3.key1").eq.key("table1.key1");
    });

    splited = kri1.splitByKeyPrefixes(["table1"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [1,4,5,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect1");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table2"]);

    var test_result1 =
        splited.table2 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [2,4,6,7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table2.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect2");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table1", "table2"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.table2 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids1 = [1,4,5,7],
        match_ids2 = [2,4,6,7,22],
        matches1 = [],
        matches2 = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches1[matches1.length] = test_data[i];
      }
      if(splited.table2.match(test_data[i])) {
        matches2[matches2.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches1.length; i < l; i = i + 1) {
      if(!~match_ids1.indexOf(matches1[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches1.length === 0) {
      test_result2 = false;
    }
    for(var i = 0, l = matches2.length; i < l; i = i + 1) {
      if(!~match_ids2.indexOf(matches2[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches2.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect3");

    done();
  });

  it("205 - splitByKeyPrefixes", function(done) {
    var kri1 = null,
        splited = {};

    kri1 = new Kriteria();
    kri1
    .or(function($) {
      $.or("table1.key1").eq.value(100);
      $.or("table2.key1").eq.value(100);
      $.or("table3.key1").eq.value(100);
      $.or("key1").eq.value(100);
    })
    .or(function($) {
      $.or("table1.key2").eq.value(100);
      $.or("table2.key2").eq.value(100);
      $.or("table3.key2").eq.value(100);
      $.or("key1").eq.value(100);
    });

    splited = kri1.splitByKeyPrefixes(["table1"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [1,4,5,7,8,11,12,14],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect1");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table2"]);

    var test_result1 =
        splited.table2 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [2,4,6,7,9,11,13,14],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table2.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect2");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table1", "table2"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.table2 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids1 = [1,4,5,7,8,11,12,14],
        match_ids2 = [2,4,6,7,9,11,13,14],
        matches1 = [],
        matches2 = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches1[matches1.length] = test_data[i];
      }
      if(splited.table2.match(test_data[i])) {
        matches2[matches2.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches1.length; i < l; i = i + 1) {
      if(!~match_ids1.indexOf(matches1[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches1.length === 0) {
      test_result2 = false;
    }
    for(var i = 0, l = matches2.length; i < l; i = i + 1) {
      if(!~match_ids2.indexOf(matches2[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches2.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect3");

    done();
  });

  it("206 - splitByKeyPrefixes", function(done) {
    var kri1 = null,
        splited = {};

    kri1 = new Kriteria();
    kri1
    .and(function($) {
      $.or("table1.key1").eq.value(100);
      $.or("table2.key1").eq.value(100);
      $.or("table3.key1").eq.value(100);
      $.or("key1").eq.value(100);
    })
    .and(function($) {
      $.or("table1.key2").eq.value(25);
      $.or("table2.key2").eq.value(61);
      $.or("table3.key2").eq.value(82);
      $.or("key1").eq.value(100);
    });

    splited = kri1.splitByKeyPrefixes(["table1"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [5],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect1");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table2"]);

    var test_result1 =
        splited.table2 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [7],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table2.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect2");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table1", "table2"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.table2 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids1 = [5],
        match_ids2 = [7],
        matches1 = [],
        matches2 = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches1[matches1.length] = test_data[i];
      }
      if(splited.table2.match(test_data[i])) {
        matches2[matches2.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches1.length; i < l; i = i + 1) {
      if(!~match_ids1.indexOf(matches1[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches1.length === 0) {
      test_result2 = false;
    }
    for(var i = 0, l = matches2.length; i < l; i = i + 1) {
      if(!~match_ids2.indexOf(matches2[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches2.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect3");

    done();
  });

  it("207 - splitByKeyPrefixes", function(done) {
    var kri1 = null,
        splited = {};

    kri1 = new Kriteria();
    kri1
    .or(function($) {
      $.and("table1.key1").eq.value(100);
      $.and("table2.key1").eq.value(100);
      $.and("table3.key1").eq.value(100);
      $.and("key1").eq.value(100);
    })
    .or(function($) {
      $.and("table1.key2").eq.value(100);
      $.and("table2.key2").eq.value(100);
      $.and("table3.key2").eq.value(100);
      $.and("key1").eq.value(100);
    });

    splited = kri1.splitByKeyPrefixes(["table1"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [1,4,5,7,8,11,12,14],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect1");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table2"]);

    var test_result1 =
        splited.table2 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids = [2,4,6,7,9,11,13,14],
        matches = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table2.match(test_data[i])) {
        matches[matches.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches.length; i < l; i = i + 1) {
      if(!~match_ids.indexOf(matches[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect2");

    // **************************************

    splited = kri1.splitByKeyPrefixes(["table1", "table2"]);

    var test_result1 =
        splited.table1 !== null &&
        splited.table2 !== null &&
        splited.else !== null;
    var test_result2 = true,
        match_ids1 = [1,4,5,7,8,11,12,14],
        match_ids2 = [2,4,6,7,9,11,13,14],
        matches1 = [],
        matches2 = [];

    for(var i = 0, l = test_data.length; i < l; i = i + 1) {
      if(splited.table1.match(test_data[i])) {
        matches1[matches1.length] = test_data[i];
      }
      if(splited.table2.match(test_data[i])) {
        matches2[matches2.length] = test_data[i];
      }
    }

    for(var i = 0, l = matches1.length; i < l; i = i + 1) {
      if(!~match_ids1.indexOf(matches1[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches1.length === 0) {
      test_result2 = false;
    }
    for(var i = 0, l = matches2.length; i < l; i = i + 1) {
      if(!~match_ids2.indexOf(matches2[i].id)) {
        test_result2 = false;
        break;
      }
    }
    if(matches2.length === 0) {
      test_result2 = false;
    }

    expect(test_result1 && test_result2).toEqual(true, "expect3");

    done();
  });

});
