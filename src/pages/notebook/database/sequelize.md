---
title: "Sequelize常用方法"
date: "2020-04-15T07:10:00.000Z"
description: "Sequelize作为nodejs中常用的ORM框架的经常使用到的方法"
type: "数据库"
---

#### 1. 返回值仅包含数据
使用参数`raw: true`，如下：
```javascript
models.user.findAll({
  raw: true
});
```