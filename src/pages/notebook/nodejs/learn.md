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

#### 3. Javascript能准确表达的最大整数
Javascript中所有的数字，无论是整数还是小数，都是Number类型，实质是一个64位的浮点数。则Javascript能表示的数值范围是