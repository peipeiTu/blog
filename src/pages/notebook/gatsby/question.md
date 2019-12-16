---
title: "Gatsby问题记录"
date: "2015-05-01T22:12:03.284Z"
description: "在学习使用Gatsby过程中遇到过的问题"
type: "gatsby"
---

#### `gatsby develop`和`gatsby build`的结果不一样
由于编译后是纯静态文件，有些方法是无法通过的。<br>
如：调试状态下，window对象可以使用，但编译无法通过。