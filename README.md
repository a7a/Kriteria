# Kriteria

## Install

```
npm install kriteria
```

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

#### Kriteria#and(String|Kriteria|Function) : evaluation|Kriteria
#### Kriteria#or(String|Kriteria|Function) : evaluation|Kriteria

'and' または 'or' 条件を追加する。
引数が文字列の場合、左辺が指定した文字列である場合の条件を表し、返り値はevaluationとなる。
引数がKriteriaのインスタンスまたはFunctionの場合、入れ子の条件を表し、返り値はKriteriaとなる。

```javascript
kri.and("table1.key1"); // => evaluation
kri.or("table1.key1"); // => evaluation
kri.and(function($) {
  // $ is Kriteria instance
}); // => Kriteria
kri.or(function($) {
  // $ is Kriteria instance
}); // => Kriteria
kri.and(kri2); // => Kriteria
kri.or(kri2); // => Kriteria
```

#### Kriteria#not() : Kriteria

指定した条件に当てはまらない場合を表す。
返り値はKriteriaとなる。

```javascript
kri.not(); // => Kriteria
```

#### Kriteria#match(Object) : Boolean

Objectを引数とし、指定したObjectが条件と一致するかを返す。

#### Kriteria#matcher() : Function

条件と一致するかを判定するFunctionリテラルを返す。

#### Kriteria#parse(Object) : Kriteria

以下の構造を持つObjectからKriteriaインスタンスを作成する。

```javascript
{
  and: Object[],
  or: Object[],
  not: Boolean
}
```

#### Kriteria#splitByKeyPrefixes(String[]) : Object

条件を一致するprefixで分割する。
prefixには'.'が補われる。
条件が複数のprefixを持つ場合、後から登場したprefixにまとめられる。
返り値は指定したprefixおよびそれ以外のprefix（else）をプロパティを持つObjectとなる。
存在しないprefixはnullとなる。

```javascript
kri.and("table1.key1").eq.value(100);
kri.and("table2.key2").eq.value(200);
kri.and("table1.key3").eq.key("table2.key3");
kri.and("table3.key3").eq.value(300);

var ret = kri.spliteByKeyPrefixes(["table1", "table2", "table4"]);
/*
  ret.table1 => Kriteria =>
    table1.key1 === 100
  ret.table2 => Kriteria =>
    table2.key2 === 200 and
    table1.key3 === table2.key3 // 条件がtable1とtable2を持つ場合、table2の条件としてまとめる
  ret.table4 => null
  ret.else => Kriteria =>
    table3.key3 === 300
*/
```

#### Kriteria#merge(Kriteria, Boolean) : Kriteria

2つのKriteriaインスタンスを1つにまとめる。

#### Kriteria#compareTo(Kriteria) : Number

2つのKriteriaインスタンスを比較し、大きい、小さい、等しいを判定する
（実際にインスタンの大小を比較するものではなく、整列の基準を提供するメソッドである）。
大きい場合、返り値は1となる。
小さい場合、返り値は-1となる。
等しい場合、返り値は0となる。

内部プロパティの比較順は、

* notフラグがあるか（右辺のみnotの場合、返り値は-1、左辺のみnotの場合、返り値は1）
* and条件を持っているか（右辺のみ持っている場合、返り値は−１，左辺のみ持っている場合は、返り値は1）
* 各条件を、左辺のキー、演算子、右辺のタイプ、右辺のキーでソートし、
* * 条件が入れ子になっているか（右辺のみ入れ子になっている場合、返り値は-1、左辺のみ入れ子になっている場合は、返り値は1、両辺入れ子になっている場合は入れ子同士を比較）
* * 左辺のキーを比較
* * 演算子を比較
* * 右辺のタイプを比較
* * 右辺のキーを比較

となる。

#### Kriteria#removePrefixes(String[]) : Kriteria

条件のキーから指定したprefixを削除する。
右辺がvalueの場合、左辺からのみ削除する。
受けんがkeyの場合、左辺と右辺から削除する。

### evaluation : Kriteria

演算子と右辺のタイプの組み合わせのメソッドを提供する。

#### 演算子

* eq : '==='
* ne : '!=='
* lt : '<'
* le : '<='
* gt : '>'
* ge : '>='
* in : 指定した引数のいずれかを含む場合
* not_in : 指定した引数のいずれも含まない場合
* between : 第1引数以上、第2引数以下の場合
* not_between : 第1引数未満、第2引数より大きい場合
* match : 指定した正規表現に一致する場合
* not_match : 指定した正規表現に一致しない場合

#### 右辺のタイプ

* value : 右辺が値
* key : 右辺がobject内の他のキー（プロパティ）

#### sample

```javascript
kri.and("key1").eq.value(100); // key1が数値100に等しい場合
kri.and("key1").eq.value("100"); // key1が文字列'100'に等しい場合
kri.and("key1").eq.key("key2"); // key1がkey2プロパティに等しい場合

kri.and("key1").ne.value(100);
kri.and("key1").ne.key("key2");
kri.and("key1").lt.value(100);
kri.and("key1").lt.key("key2");
kri.and("key1").le.value(100);
kri.and("key1").le.key("key2");
kri.and("key1").gt.value(100);
kri.and("key1").gt.key("key2");
kri.and("key1").ge.value(100);
kri.and("key1").ge.key("key2");
kri.and("key1").in(100, 200, 300);
kri.and("key1").not_in(100, 200, 300);
kri.and("key1").between(100, 200);
kri.and("key1").match(/abc/);
kri.and("key1").not_match(/abc/);
```

## Licence

MIT
