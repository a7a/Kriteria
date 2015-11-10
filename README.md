# Kriteria

## Usage

```javascript
var kri = new Kriteria().and("key1").eq.value(100);
kri.match({ key1: 100 }); // -> true
kri.match({ key1: 200 }); // -> false

var matcher = kri.matcher();
matcher({ key1: 100 }); // -> true
matcher({ key1: 200 }); // -> false
```

### Methods

```javascript
new Kriteria()
  .and(key_name)
  .or(key_name)
    .eq.value(value)
       .key(key_name)
    .ne.value(value)
       .key(key_name)
    .lt.value(value)
       .key(key_name)
    .le.value(value)
       .key(key_name)
    .gt.value(value)
       .key(key_name)
    .ge.value(value)
       .key(key_name)
    .in.value(value1[, value2 ...])
       .key(key_name)
    .not_in.value(value1[, vlaue2 ...])
           .key(key_name)
    .between(value1, value2)
    .match(value|regexp)
  .not()
```

### Multiple Conditions

```javascript
var kri = new Kriteria();
kri.and("key1").eq.value(100)
   .and("key2").eq.value(200);
```

### Nested Condition

```javascript
var kri1 = new Kriteria(),
    kri2 = new Kriteria(),
    kri3 = new Kriteria();
kri1.or(kri2).or(kri3);
```

or

```javascript
var kri = new Kriteria();
kri.or(function($) { // $ is Kriteria instance
  $.and("key1").eq.value(100);
});
```

## Licence

MIT
