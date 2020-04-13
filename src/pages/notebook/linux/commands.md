---
title: "Ubuntu常用命令"
date: "2019-12-12T00:58:00.000Z"
description: "Unbutu常用命令"
type: "Linux使用"
---

**在我使用`Ubuntu`过程中常使用的命令及其参数，姑且按照字母顺序排列。**
<br><br>

#### `du` 列出目录下所有文件及其大小
* `du -sh`：总结出当前目录的整个大小，并转换大小单位

---

#### `df` 列出磁盘使用情况
* `df -h`：列出磁盘使用情况，并转换大小单位

---

#### `journalctl` 查看systemd-journald服务收集到的日志
* `journalctl`：输出所有日志。
为了分类查询，常用的选项有如下一些：
* `-u/--unit [UNIT]`：查看特定项目的日志，如`-u mysqld`
* `-S/--since [DATE]`：设定开始时间，以格式`YYYY-MM-DD HH:mm`输入
* `-U/--until [DATE]`：设定结束时间，以格式`YYYY-MM-DD HH:mm`输入
* `[FIELD]=[VALUE]`：采用这种格式来匹配日志记录。日志记录类似一个实体类型，有许多字段，如`MESSAGE, MESSAGE_ID, _PID, _UID, _HOSTNAME, _SYSTEMD_UNIT`等，可以通过`man 7 systemd.journal-fields`查看所有可用字段。
由于日志打印的时候特别多，所以和`more`结合使用效果更佳。

---

#### `more` 逐行输出
一般和其他的命令搭配使用，如`journalctl`，`grep`

---

####  `rm` 删除文件
* `-r`：递归删除，需要删除文件夹时，需要加上这个参数，不然会报错。
* `-f`：强制删除。