---
title: "Angular学习 - 基于angular10"
date: "2020-08-10T06:30:00.000Z"
description: "Angular常用知识点"
type: "前端知识"
---

> 当前使用环境为Angular10，如果在更新版本上测试过之后，会更新这句话。
-----------------------

#### # 父子组件之间传值

##### 1. 父 → 子

在子组件中导入`Input`，并定义一个变量来接受父组件的传值：
```javascript
// 子组件ts文件
import { Component, Input } from '@angular/core';
...
@Input() list;
```

父组件引入子组件时，即可在标签属性内进行传值：
```html
<!-- 父组件html文件 -->
<app-child [list]="lists"></app-child>
```
⭐ 传值也可以传递方法，但父组件里的方法如果使用了父组件的私有对象，如在方法内使用了`this`，则传递方法时需要绑定`this`：
```html
<!-- 父组件html文件 -->
<app-child [list]="lists" [getData]="getData.bind(this)"></app-child>
```

#### 2. 子 → 父

在子组件中导入`Output, EventEmitter`，然后可以在某个事件里触发，将值发送到父组件：
```javascript
// 子组件ts文件
import { Component, Output, EventEmitter } from '@angular/core';
...
@Output() getChange = new EventEmitter();
...
change():void {
  const n = this.list.length;
  this.getChange.emit(n);
}
```

父组件可以在自定义时间中接收子组件发送过来的信息：
```html
<!-- 父组件html文件 -->
<app-child [list]="lists" (getChange)="checkChange($event)"></app-child>
```
```javascript
// 父组件TS文件
checkChange(n: number) {
  console.log(n);
}
```

#### 3. 父组件主动获取子组件的属性或方法
首先在父组件引入子组件时，给子组件加上标记位：
```html
<!-- 父组件html文件 -->
<app-child #table [list]="lists"></app-child>
```
然后在父组件中使用`@ViewChild`就可以获取子组件的属性或者方法：

```javascript
// 父组件TS文件
import { Component, ViewChild } from '@angular/core';
...
@ViewChild('table') table1;
...
add(): void {
  this.table1.getInfo(); // 调用子组件的方法
  console.log(this.table1.info); // 调用子组件的属性值
}
```
-----------------------