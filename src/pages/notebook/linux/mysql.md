---
title: "mysql 安装和学习（基于ubuntu 20）"
date: "2019-12-01T08:12:03.000Z"
description: "Nginx 安装和学习"
type: "Linux使用"
---

#### 安装mysql
1. 默认可以使用`apt-get`安装：
```bash
sudo apt-get install mysql-server
```

2. 初始化配置
```bash
sudo mysql_secure_installation
```
配置项挺多，根据需求配置即可。

3. 配置其他用户
mysql已经将创建账户和赋予权限的方式分开了，需要用两句sql来完成操作：
```bash
sudo mysql -uroot -p

> 
```