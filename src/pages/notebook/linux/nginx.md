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

#### Nginx 配置
1. 单页应用静态文件部署，需要加上如下配置：

```
location / {
  try_files $uri $uri/ /index.html;
}
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

#### 配置HTTPS
可以使用`certbot`进行设置，在这里只记录`ubuntu18`的`nginx`设置方法，其他的[点此查看](https://certbot.eff.org/lets-encrypt/ubuntuxenial-nginx)
```bash
# 添加Certbot PPA
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository universe
sudo add-apt-repository ppa:certbot/certbot
sudo apt update

# 安装Certbot
sudo apt install certbot python-certbot-nginx

# 安装证书
sudo certbot --nginx

Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator nginx, Installer nginx
# 选择要安装证书的域名,域名需要在nginx配置填写好才能搜索
Which names would you like to activate HTTPS for?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: www.example.com
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate numbers separated by commas and/or spaces, or leave input
blank to select all options shown (Enter 'c' to cancel): 1  
# 这里的认证需要保证当前nginx正确工作，并且域名正确指向本台服务器，即验证这个域名是否归你所有
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for www.example.com
Waiting for verification...
Cleaning up challenges
Deploying Certificate to VirtualHost /etc/nginx/sites-enabled/node
# 是否将所有请求都跳转到https上
Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
new sites, or if you're confident your site works on HTTPS. You can undo this
change by editing your web server's configuration.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-2] then [enter] (press 'c' to cancel): 2 
Redirecting all traffic on port 80 to ssl in /etc/nginx/sites-enabled/node

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Congratulations! You have successfully enabled https://www.example.com

You should test your configuration at:
https://www.ssllabs.com/ssltest/analyze.html?d=www.example.com
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# 安装完成后，certbot会自动新建定时任务来定时刷新证书，避免过期
# 通过以下命令检查自动更新是否能顺利进行
$ sudo certbot renew --dry-run

# 检查定时任务是否正确添加
$ sudo systemctl list-timers

NEXT                         LEFT         LAST                         PASSED             UNIT                         ACTIVATES
Mon 2019-12-16 20:31:18 CST  3h 9min left Mon 2019-12-16 07:45:10 CST  9h ago             apt-daily.timer              apt-daily.service
Tue 2019-12-17 06:09:19 CST  12h left     Mon 2019-12-16 06:32:56 CST  10h ago            apt-daily-upgrade.timer      apt-daily-upgrade.service
Tue 2019-12-17 09:06:43 CST  15h left     n/a                          n/a                certbot.timer                certbot.service

```