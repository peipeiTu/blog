---
title: "NodeJs学习笔记"
date: "2019-05-01T22:12:03.284Z"
description: "Hello World"
type: "NodeJs"
---

#### 1. root用户无法npm install
root用户需要设置：`npm config set unsafe-perm true`

#### 2. npm换源
* 临时使用 `npm --registry <url> install <package>`
* 永久修改 `npm config set registry <url>`
* 淘宝镜像 `https://registry.npm.taobao.org`
* 官方镜像 `https://registry.npmjs.org`