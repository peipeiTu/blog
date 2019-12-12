---
title: "MySQL配置及使用"
date: "2019-12-09T06:09:03.000Z"
description: "在使用MySQL过程中可能遇到的问题和解决方法"
type: "数据库"
---

#### MySQL设置允许外网访问
整个过程主要分为两部分：更新user表，更新mysql配置。

##### 1. 更新user表，主要是新增一个用户供外网访问。
* 使用root登录数据库，查看user表是否存在供外网访问的user

```bash
mysql -uroot -p

# 使用mysql库
mysql> use mysql;

# 查看当前已存在的用户
mysql> SELECT `host`, `user` FROM `user`;
+-----------+------------------+
| host      | user             |
+-----------+------------------+
| %         | root             |
| localhost | debian-sys-maint |
| localhost | mysql.session    |
| localhost | mysql.sys        |
| localhost | root             |
+-----------+------------------+

# 如果不存在host为%的用户，则新增用户，生产环境最好不要修改root为外网可访问
mysql> UPDATE `user` set `host` = '%' WHERE `user` = 'root' AND `host` = 'localhost';

# 更改权限
mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%'  IDENTIFIED BY '123456'  WITH GRANT OPTION;

# 刷新权限
mysql> FLUSH PRIVILEGES;
```

##### 2. 更新mysql配置
在mysql默认配置中，设置了仅绑定127.0.0.1的地址，所以需要将此行注释掉，或修改成0.0.0.0
```bash
sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf

# 注释掉下方设置
# bind-address = 127.0.0.1

# 重启服务
sudo service mysql restart
```

