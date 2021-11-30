---
title: "Dart基础语法"
date: "2019-05-01T22:12:03.284Z"
description: "Hello World"
type: "Flutter"
---

### 数组(List)基础操作及语法

#### 1. 数组的定义

* 定义固定类型数组
```dart
var list = List<int>();
```

* 定义固定长度数组
```dart
var list2 = List(2);
```

* 定义混合类型数组
```dart
var list3 = List<dynamic>(); 
list3.add(2);
list3.add('value');
print(list3); // [2, 'value']
```

#### 2. 数组的常用属性

* 获取数组长度 - `length`
```dart
var list = [1, 2, 3, 4];
print(list.length); // 4
```

* 获取数组第一个元素 - `first`
```dart
var list = [1, 2, 3, 4];
print(list.first); // 1
```

* 获取数组最后一个元素 - `last`
```dart
var list = [1, 2, 3, 4];
print(list.last); // 4
```

* 获取倒序迭代器 - `reversed`
```dart
var list = [1, 2, 3, 4];
print(list.reversed); // (4, 3, 2, 1)
```

* 判断数组是否为空 - `isEmpty`
```dart
var list = [1, 2, 3, 4];
print(list.isEmpty); // false
```

* 判断数组是否为非空 - `isNotEmpty`
```dart
var list = [1, 2, 3, 4];
print(list.isNotEmpty); // true
```

#### 3. 数组的常用方法

* 添加元素 - `add`
```dart
var list = [];
list.add(1);
print(list); // [1]
```

* 批量添加 - `addAll`
```dart
var list = [1, 2, 3, 4];
var list2 = [0, 20, 40];
list.addAll(list2);
print(list); // [1, 2, 3, 4, 0, 20, 40]
```

* 指定位置添加 - `insert`
```dart
var list = [1, 2, 3, 4];
list.insert(2, 90);
print(list); // [1, 2, 90, 3, 4]
```

* 指定位置批量添加 - `insertAll`
```dart
var list = [1, 2, 3, 4];
var list2 = [0, 20, 40];
list.insertAll(2, list2);
print(list); // [1, 2, 0, 20, 40, 3, 4]
```

* 删除指定值 - `remove`
```dart
var list = [1, 2, 6, 4];
list.remove(6);
print(list); // [1, 2, 4]
```

* 删除指定索引 - `removeAt`
```dart
var list = [1, 2, 6, 4];
list.removeAt(2);
print(list); // [1, 2, 4]
```

* 删除指定范围 - `removeRange`
```dart
var list = [1, 2, 6, 4];
list.removeRange(2, 4);
print(list); // [1, 2]
```

* 删除最后一个 - `removeLast`
```dart
var list = [1, 2, 6, 4];
list.removeLast();
print(list); // [1, 2, 6]
```

* 删除符合条件的所有元素 - `removeWhere`
```dart
var list = [1, 2, 6, 4, 6];
list.removeWhere((v) => v > 3); // 删除大于3的元素
print(list); // [1, 2]
```

* 删除所有元素 - `clear`
```dart
var list = [1, 2, 6, 4, 6];
list.clear();
print(list); // []
```

* 修改数组中某区间元素为指定值 - `setRange`
```dart
var list = [1, 2, 6, 4, 6];
list.setRange(1, 4, [9, 9, 9]); // 将索引1到4的值修改为9
print(list); // [1, 9, 9, 9, 6]
```

* 修改指定索引后的数组值 - `setAll`
```dart
var list = [1, 2, 6, 4, 6];
list.setAll(2, [2, 4, 5]); // 设置索引为2开始的后面3位数分别为2，4，5
print(list); // [1, 2, 2, 4, 5]
```

* 替换 - `replaceRange`
```dart
var list = [1, 2, 6, 4, 6];
list.replaceRange(0, 4, [3]); // 将索引从0-4的元素替换成3
print(list); // [3, 6]
```

* 将指定区间替换成某个固定值 - `fillRange`
```dart
var list = [1, 2, 6, 4, 6];
list.fillRange(2, 4, 1); // 将区间2到4的元素替换成数值1
print(list); // [1, 2, 1, 1, 6]
```

* 获取某个区间的值 - `getRange`
```dart
var list = [1, 2, 6, 4, 6];
print(list.getRange(2, 4)); // 返回Iterable (6, 4)
```

* 查询指定区间的值 - `sublist`
```dart
var list = [1, 2, 6, 4, 6];
print(list.sublist(2)); // [6, 4, 6] ， 返回从索引2开始的所有数据
print(list.sublist(2, 4)); // [6, 4]， 返回索引从2到4的数据
```

* 判断数组内是否有满足条件的元素 - `any`
```dart
var list = [3, 2, 6, 4, 6];
// 数组中是否有大于2的元素
print(list.any((v) => v > 2)); // true
// 数组中是否有大于6的元素
print(list.any((v) => v > 6)); // false
```

* 判断数组所有元素是否都满足设定条件 - `every`
```dart
var list = [3, 2, 6, 4, 6];
// 数组中所有元素是否都大于1
print(list.every((v) => v > 1)); // true
// 数组中所有元素是否都大于2
print(list.every((v) => v > 2)); // false
```

* 判断数组是否包含某个元素 - `contains`
```dart
var list = [3, 2, 6, 4, 6];
// 数组中是否包含3
print(list.contains(3)); // true
// 数组中是否包含1
print(list.contains(1)); // false
```

* 获取满足条件的第一个元素 - `firstWhere`
```dart
var list = [3, 2, 3, 6, 4, 3];
print(list.lastWhere((v) => v > 2)); // 获取最后一个大于2的元素: 3
list.firstWhere((v) => v > 6, orElse: () => print(3333)); // 如果未查找到所制定条件的元素，进入orElse参数
```

* 获取满足条件的最后一个元素 - `lastWhere`
```dart
var list = [3, 2, 6, 4, 6];
print(list.lastWhere((v) => v > 4)); // 获取最后一个大于4的元素: 6
list.firstWhere((v) => v > 6, orElse: () => print(3333)); // 如果未查找到所制定条件的元素，进入orElse参数
```

* 从指定位置开始，获取满足条件的第一个元素的索引 - `indexWhere`
```dart
var list = [3, 2, 6, 4, 6];
// 查询第一个大于4的元素索引值
print(list.indexWhere((v) => v > 4)); // 2
// 从索引3开始，查询第一个大于4的元素索引值
print(list.indexWhere((v) => v > 4, 3)); // 4
// 从索引3开始，查询第一个大于9的元素索引值
// 若不存在，返回-1
print(list.indexWhere((v) => v > 9, 3)); // -1
```

* 获取满足条件的最后一个元素的索引(倒叙查询) - `lastIndexWhere`
```dart
var list = [3, 2, 6, 4, 6];
// 获取最后一个大于4的元素索引值
print(list.lastIndexWhere((v) => v > 2)); // 4
// 从索引2开始，查询最后一个大于4的元素索引值
print(list.lastIndexWhere((v) => v > 3, 3)); // 2
// 如果没有，返回-1
print(list.lastIndexWhere((v) => v > 9)); // -1
```

* 从指定位置开始，获取指定值的索引 - `indexOf`
```dart
var list = [3, 2, 6, 4, 6];
// 从索引3开始，获取6第一次出现时的索引值，如果不存在，返回 -1 
print(list.indexOf(6, 3)); // 4
print(list.indexOf(6)); // 2
```

* 从指定位置开始，倒叙获取指定值的索引 - `lastIndexOf`
```dart
var list = [3, 2, 6, 4, 6];
print(list.lastIndexOf(6, 3)); // 从索引3开始，获取6第一次出现时的索引值，如果不存在，返回 -1: 4
print(list.lastIndexOf(6)); // 2
print(list.lastIndexOf(7)); // -1
```

* 获取唯一元素 - `singleWhere`
```dart
var list = [3, 2, 6, 4, 6];
// 获取大于6的唯一元素，不存在该元素，执行orElse
print(list.singleWhere((v) => v > 6, orElse: () => print(' --- '))); // ---

// 获取等于2的唯一元素，存在，返回2
print(list.singleWhere((v) => v == 2, orElse: () => print(' --- '))); // 2

// 获取等于6的唯一元素，存在该元素，但是出现次数不唯一，不会执行orElse，直接抛出错误，进入catch
print(list.singleWhere((v) => v == 6, orElse: () => print(' --- '))); // error
```

* 将数组用指定字符拼接成字符串 - `join`
```dart
var list = [3, 2, 6, 4, 6];
// 将数组转换为用&拼接的字符串
print(list.join('&')); // 3&2&6&4&6
复制代码28、数组去重 - toSet
var list = [3, 2, 6, 4, 6];
 print(list.toSet()); // {3, 2, 6, 4}
复制代码29、数组遍历 - forEach
var list = [3, 2, 6, 4, 6];
list.forEach((element) => print(element)); // element 为list内的每个元素
```

* 按指定条件返回Iterable - `map`
```dart
var list = [3, 2, 6, 4, 6];
var x = list.map((e) => e + 1); // 将list所有元素加1并返回Iterable
print(x); // (4, 3, 7, 5, 7)
// 将list所有元素与4比较并返回boolean Iterable
var y = list.map((e) {
  return e > 4;
});
print(y);//(false, false, true, false, true)
```

* 累加器 - reduce
```dart
var list = [3, 2, 6, 4, 6];
// 将每次返回值作为value循环执行。最终返回最后一次执行值
var x = list.reduce((value, element) {
  print('value: $value - element: $element');
  /**
  	每次的执行结果
  	value: 3 - element: 2
	value: 5 - element: 6
	value: 11 - element: 4
	value: 15 - element: 6
  */
  return value + element;
});
print('x: $x'); // x: 21
```

* 排序 - sort
```dart
var list = [3, 2, 6, 4, 6];
// 按回调中的return结果正负数来排序
// a - b 为升序， b - a为降序
list.sort((a, b) {
  return a - b;
});
print(list); // [6, 6, 4, 3, 2]
```