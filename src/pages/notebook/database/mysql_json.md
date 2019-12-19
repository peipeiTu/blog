---
title: "MySQL 之 JSON数据类型及其在Sequelize下的使用"
date: "2019-12-19T03:55:00.000Z"
description: "MySQL 5.7添加的新特性 JSON，可以直接在数据库中对JSON对象进行操作"
type: "数据库"
---

>> 之前一直不知道mysql已经支持了json类型，还一直傻兮兮的用text去存储。从MySQL5.7.8开始，MySql已经支持原生JSON数据类型。

#### 创建
`JSON`字段不能设置长度，可以是NULL，但不能有默认值
```sql
CREATE TABLE student (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `info` JSON,
  `record` JSON,
  PRIMARY KEY (`id`)
);
```

#### 插入
插入JSON格式的字符串，可以是对象形式，也可以是数组形式。插入会检查格式是否正确，如果不正确会插入失败。
```sql
INSERT INTO `student` (info, record) VALUES ('{"id": 1, "name": "xiaoming"}', '[1, 2, 3]');
```

`MySQL`提供函数`JSON_OBJECT`,`JSON_ARRAY`来生成符合格式的数据。
```sql
INSERT INTO `student` (info, record)  VALUES (JSON_OBJECT("id", 2, "name", "xiaohong"), JSON_ARRAY(1, 3, 5));
```
[更多函数参考](http://dev.mysql.com/doc/refman/5.7/en/json-creation-functions.html)

#### 查询

##### 查询字段
查询`JSON`中的数据用`column->path`的形式。对象类型为`$.path`，数组类型为`$[index]`
```sql
mysql> SELECT id, info->'$.id', info->'$.name', record->'$[0]', record->'$[2]' FROM student;
+----+--------------+----------------+----------------+----------------+
| id | info->'$.id' | info->'$.name' | record->'$[0]' | record->'$[2]' |
+----+--------------+----------------+----------------+----------------+
|  1 | 1            | "xiaoming"     | 1              | 3              |
|  2 | 2            | "xiaohong"     | 1              | 5              |
+----+--------------+----------------+----------------+----------------+
2 rows in set (0.00 sec)
```

这样查询的结果会带有双引号，使用函数`JSON_UNQUOTE`或操作符`->>`可以去掉。
```sql
mysql> SELECT id, info->'$.name', JSON_UNQUOTE(info->'$.name'), info->>'$.name' FROM student;
+----+----------------+------------------------------+-----------------+
| id | info->'$.name' | JSON_UNQUOTE(info->'$.name') | info->>'$.name' |
+----+----------------+------------------------------+-----------------+
|  1 | "xiaoming"     | xiaoming                     | xiaoming        |
|  2 | "xiaohong"     | xiaoming                     | xiaoming        |
+----+----------------+------------------------------+-----------------+
2 rows in set (0.00 sec)
```

##### 条件搜索
以`JSON`作为条件搜索的时候，不能直接和字符串比较，是无法匹配到的，可以通过`CAST`将字符串转成`JSON`的形式。
```sql
SELECT * FROM student WHERE info = CAST('{"id": 1, "name": "xiaoming"}' as JSON);
```
通过`JSON`中的元素进行查询，同样使用`column->path`形式。
```sql
SELECT * FROM student WHERE info->'$.name' = 'xiaoming';
```
**值得注意的是，JSON中的元素搜索是严格区分数据类型的，整型和字符串不能相匹配**

#### 更新

整个`JSON`更新，和插入时类似。更新`JSON`下的元素，需要使用下列函数。

##### 1. `JSON_INSERT()` 插入新值，但不会覆盖已存在的值。
```sql
mysql> UPDATE student SET category = JSON_INSERT(info, '$.name', 'xiaohua', '$.class', 'one') WHERE id = 1;
Query OK, 1 row affected (0.00 sec)

+----+------------------------------------------------+-----------+
| id | info                                           | record    |
+----+------------------------------------------------+-----------+
|  1 | {"id": 1, "class": "one", "name": "xiaoming"}  | [1, 3, 4] |
|  2 | {"id": 2, "name": "xiaohong"}                  | [1, 3, 5] |
+----+------------------------------------------------+-----------+
```

##### 2. `JSON_SET()` 插入新值，并覆盖已存在的值。
```sql
UPDATE student SET info = JSON_SET(info, '$.age', '1', '$.class', 'two') WHERE id = 1;

+----+-----------------------------------------------------------+-----------+
| id | info                                                      | record    |
+----+-----------------------------------------------------------+-----------+
|  1 | {"id": 1, "class": "two", "age": "1", "name": "xiaoming"} | [1, 3, 4] |
|  2 | {"id": 2, "name": "xiaohong"}                             | [1, 3, 5] |
+----+-----------------------------------------------------------+-----------+
```

##### 3. `JSON_REPLACE()` 只替换存在的值，不存在的则会被忽略。
```sql
UPDATE student SET info = JSON_REPLACE(info, '$.name', 'Lily', '$.class', 'three') WHERE id = 2;

+----+-----------------------------------------------------------+-----------+
| id | info                                                      | record    |
+----+-----------------------------------------------------------+-----------+
|  1 | {"id": 1, "class": "two", "age": "1", "name": "xiaoming"} | [1, 3, 4] |
|  2 | {"id": 2, "name": "Lily"}                                 | [1, 3, 5] |
+----+-----------------------------------------------------------+-----------+
```

##### 4. `JSON_REMOVE()` 删除JSON元素
```sql
UPDATE student SET info = JSON_REMOVE(info, '$.class', '$.age') WHERE id = 1;

+----+-------------------------------+-----------+
| id | info                          | record    |
+----+-------------------------------+-----------+
|  1 | {"id": 1, "name": "xiaoming"} | [1, 3, 4] |
|  2 | {"id": 2, "name": "Lily"}     | [1, 3, 5] |
+----+-------------------------------+-----------+
```

#### 在Sequelize下进行更新操作
```javascript
student.update({
  info:Sequelize.fn('上述三种方法', Sequelize.col('info'), '$.name','Lucy')
});
```