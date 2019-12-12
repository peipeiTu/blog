---
title: "scss学习"
date: "2019-12-12T02:02:00.000Z"
description: "学习scss的特点和使用"
type: "前端知识"
---

#### 继承和占位符
>两个都是通过`@extend`来引用类，不同的是，占位符不被引用则不会编译，即不会占用css文件大小。

```scss
// 继承
.btn {
  border: 1px solid blue;
}
// 占位符
%btn {
  border: 1px solid blue;
}

.btn--primary {
  color: black;
  @extend .btn;
  @extend %btn;
}
```