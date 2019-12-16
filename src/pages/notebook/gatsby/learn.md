---
title: "Gatsby 概述"
date: "2015-05-01T22:12:03.284Z"
description: "Gatsby知识点"
type: "gatsby"
---

#### 四个API文件
**gatsby在根目录可以配置四个文件(可选)，用来控制网页的行为和展示。**
1. `gatsby-config.js`
配置文件，用于启用插件，定义公共站点数据等。可以在这里配置一些全局变量，在网页中可以通过`GraphQL`获取。
2. `gatsby-browser.js`

3. `gatsby-node.js`
该文件会在启动项目的时候运行一次，主要用于手动生成一些页面。
4. `gatsby-ssr.js`