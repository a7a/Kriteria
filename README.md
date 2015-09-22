# Kriteria

- - -

## Usage

```javascript
var kri = new Kriteria().and("key1").eq.value(100);
kri.match({ key1: 100 }); // -> true
kri.match({ key1: 200 }); // -> false

var matcher = kri.matcher();
matcher({ key1: 100 }); // -> true
matcher({ key1: 200 }); // -> false

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
  .not()
```

## Licence

MIT
