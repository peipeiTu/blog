---
title: "NodeJs 知识点"
date: "2019-12-09T08:35:45.000Z"
description: "NodeJs 常用的模块以及模块中常用的方法和类等"
type: "NodeJs"
---

### Buffer - 缓冲器
<br>

##### 1. `Buffer()和 new Buffer()` 已废弃

`Buffer()和 new Buffer()` 构造函数是不安全的，应使用其他的替代，替代规则如下：
* 对于`new Buffer(number)`，使用`Buffer.alloc(number)`替换
* 对于`new Buffer(string) / new Buffer(string,encoding)`，使用对应的`Buffer.from(string) / Buffer.from(string,encoding)`替换
* 对于其他情况（一般极为罕见）中使用了`new Buffer(...arguments)`的，使用`Buffer.from(...arguments)`替换

---
### child_process - 子进程
<br>

##### 1. 创建进程
子进程模块可以创建异步或同步的进程，来执行额外的命令，如`ls`等在控制台执行的命令。

---
### crypto - 加密
`crypto`模块提供了加密功能，包括对OpenSSL的哈希、HMAC、加密、解密、签名、以及验证功能的一整套封装。

##### 1. `Hash`类
用于创建数据的哈希摘要。`crypto.createHash()`用于创建`Hash`实例，不能用`new`直接创建。

摘要`(digest)`算法是输入长度不固定的消息，生成固定长度的输出。摘要运算不可逆，相同输入产生相同输出，且输出的长度固定。在我目前的编程生涯中，主要用摘要运算来生成作为标记ID的哈希，如矿工ID。

常见摘要算法及其输出位数：
* `MD5`: 128
* `SHA-1`: 160
* `SHA256`: 256
* `SHA512`: 512

创建后可以通过两种方式之一使用：
* 作为可读写的流，其中写入数据以在可读侧生成计算后的哈希摘要。

```javascript
const crypto = require('crypto');
const hash = crypto.createHash('sha256');

hash.on('readable', () => {
  // 哈希流只会生成一个元素。
  const data = hash.read();
  if (data) {
    console.log(data.toString('hex'));
    // 打印:  164345eba9bccbafb94b27b8299d49cc2d80627fc9995b03230965e6d8bcbf56
  }
});

hash.write('要创建哈希摘要的数据');
hash.end();
```
* 使用`hash.update()`和`hash.digest()`方法生成计算后的哈希。

```javascript
const crypto = require('crypto');
const hash = crypto.createHash('sha256');

hash.update('要创建哈希摘要的数据');
console.log(hash.digest('hex'));
// 打印: 164345eba9bccbafb94b27b8299d49cc2d80627fc9995b03230965e6d8bcbf56
```
