---
title: "expect：实现脚本的自动交互"
date: "2019-12-01T08:12:03.000Z"
description: "expect工具的使用和语法解释，用于实现在Linux下进行脚本的自动交互"
type: "Linux使用"
---

**`expect`**是建立在`tcl`基础上的一个自动化交互套件，在一些需要交互输入指令的场景下，可以通过`expect`脚本实现。

整个过程大致如下：

spwan启动进程 → expect获取指定关键字 → send发送定义好的指令 → 完成

---

#### 安装
ubuntu：`apt-get install -y tcl expect`

---

#### 常用命令
* `spawn`：启动新的交互进程
* `expect`：从进程输出中接收信息，如果匹配成功，则执行之后的动作
* `send`：向进程发送指定字符串
* `send exp_send`：用于发送指定的字符串信息
* `exp_continue`：多次匹配中使用
* `send_user`：输出
* `interact`: 允许用户交互
* `exit`：退出脚本
* `eof`：expect执行结束，退出
* `set`：定义变量
* `puts`：输出变量
* `set timeout`：设置超时

