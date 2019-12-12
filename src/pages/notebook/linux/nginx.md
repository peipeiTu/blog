---
title: "Nginx 安装和学习"
date: "2019-12-01T08:12:03.000Z"
description: "Nginx 安装和学习"
type: "Linux使用"
---

#### 安装Nginx
* 安装

```bash
sudo apt update
sudo apt install nginx
```

* 检查状态

```bash
systemctl status nginx
```

#### Nginx 限制IP访问频率
1. 添加`limit_req_zone`。这个变量只能在http使用

```
http{
  ...
  # 定义一个名为allips的limit_req_zone用来存储session，大小10M，
  # 以$binary_remote_addr为key，限制平均每秒的请求为5个，
  # 1M能存储16000个状态，rate值必须为整数，
  # 如果限制两秒一个请求，可以设置为30r/m
  limit_req_zone $binary_remote_addr zone=allips:10m rate=5r/s;
}
```
2. 添加`limit_req`。这个变量可以在http,server,location使用。
```
...
server{
  ...
  location {
    ...
    #限制每ip每秒不超过20个请求，漏桶数burst为5
    #brust的意思就是，如果第1秒、2,3,4秒请求为19个，
    #第5秒的请求为25个是被允许的。
    #但是如果你第1秒就25个请求，第2秒超过20的请求返回503错误。
    #nodelay，如果不设置该选项，严格使用平均速率限制请求数，
    #第1秒25个请求时，5个请求放到第2秒执行，
    #设置nodelay，25个请求将在第1秒执行。
    limit_req zone=allips burst=5 nodelay;
    ...
  }
...
}
...
```
