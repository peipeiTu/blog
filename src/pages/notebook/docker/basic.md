---
title: "Docker的基础知识和操作"
date: "2019-11-10T04:10:28.000Z"
description: "Docker的基础知识和操作"
type: "Docker"
---

#### 镜像
* `docker pull <image>[:version]` 下载镜像，若不指定版本，即为最新版本
* `docker images` 列出已下载的镜像
* `docker rmi <imageId>` 删除已下载的镜像

#### 容器

* `docker create <container>` 创建容器，创建的容器处于停止状态
* `docker ps` 查看当前运行的容器
* `docker ps -a` 查看所有容器，包括停止的容器
* 进入容器：
  * `docker attach <container>`：从这个stdin中exit，会导致容器停止。
  * `docker exec -it <container> bash`:只用`-i`参数时，由于没有分配伪终端，界面没有linux命令提示返回。`-it`参数时，界面有linux命令提示。