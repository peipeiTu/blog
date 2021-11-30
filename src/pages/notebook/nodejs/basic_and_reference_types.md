---
title: "JS基本类型和引用类型"
date: "2020-10-28T09:44:00.000Z"
description: "JS基本类型和引用类型的区别及使用上的一些注意点"
type: "NodeJs"
---

#### 基本类型和引用类型

* **基本类型**
  * 即值类型，是一种既非对象也无方法的数据。JS目前共有7种基本类型：string, number, bigint, boolean, null, undefined, symbol。
  * 所有基本类型的值都是不可改变的，如：
  ```javascript
  var a = 5;
  a = 6;
  ```
  这里a的值改变了，不过MDN对这段代码的定义为`替换`。
  * 对于基本类型，JS采用的是传值调用，即传递副本，如：
  ```javascript
  var a = 'abc';
  b = a;
  ```
  上面代码中，b得到的是一个新副本，所以无论a和b如何改变，都不会影响到对方。

* **引用类型**
  * 所有对象都是引用类型。在JS中，数组、函数、Map、Set等都是对象，可以`typeof`打印看看。