---
title: "事务和锁（包含Sequelize下的代码）"
date: "2019-12-09T06:09:03.000Z"
description: "事务和锁"
type: "数据库"
---

##### 事务(Transaction)：
* 事务是数据库执行过程中的一个逻辑单位，由一系列有限的数据库操作序列构成。被事务裹起来的这些操作会有共同的执行结果，要么全部成功，要么失败并全部回滚。可以解决操作原子性的问题。

如银行转账，A转账100给B，即需要：
```sql
A余额 -= 100
B余额 += 100
```
两条语句虽然独立，但最终结果必须是要么都执行，要么都不执行。
```sql
// SQL代码
start transaction;
// 操作
commit;
```

`Sequelize`提供`Transaction`类，通过`Sequelize.transaction`创建事务，并在每一次数据库操作设置当前操作属于哪个事务：

```javascript
await sequelize.transaction({}, async (transaction) => {
  const instance = await Accounts.findOne({
    where: {
      name: 'name',
    },
    transaction
  });
  
  await instance.update({
    balances: instance.balances + number,
  }, {
    transaction
  })
})

```
---
##### 并发
事务只解决了操作原子性的问题，并发则需要通过加锁来避免。

###### 锁：
* `悲观锁`：为了避免冲突，直接给记录加上锁，再事务释放之前，其他要对该记录执行操作的事务都必须等待。MySql、Postgres都实现了悲观锁。缺点是，再读操作频繁的场景下，会影响吞吐量。

* `乐观锁`：不对读进行限制，仅在写入更新的时候做判断。通常会增加version字段，每次更新的时候version+1，提交更新的时候先判断version，如果已失效则重试。在写操作频繁的场景下会不断发生重试，也会影响吞吐量。

* `排他锁`：悲观锁的一种，查询的时候加锁。同一资源同一时间只能有一个排他锁，其他事务读写都需要等待。

```sql
// SQL代码
SELECT * FROM accounts WHERE name='name' FOR UPDATE;
```

```javascript
// Sequelize 写法
await Accounts.findOne({
  where: { name: 'name' },
  lock: Sequelize.Transaction.LOCK.UPDATE
});
```

* `共享锁`：允许同一资源同时存在多个共享锁，当需要执行修改、删除等操作时，必须等其他所有共享锁都释放后才能执行。

```sql
SELECT * FROM accounts WHERE name='name' FOR SHARE;
```
```javascript
await Accounts.findOne({
  where: {name:'name' },
  lock: Sequelize.Transaction.LOCK.SHARE
})
```

#### 事务隔离级
<table class="table table-bordered table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">级别</th>
      <th scope="col">脏读</th>
      <th scope="col">不可重复读</th>
      <th scope="col">幻读</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">READ_UNCOMMITTED 读未提交</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">READ_COMMITTED 读已提交</th>
      <td>×</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">REPEATABLE_READ 可重复读</th>
      <td>×</td>
      <td>×</td>
      <td></td>
    </tr>
        <tr>
      <th scope="row">SERIALIZABLE 可串行化</th>
      <td>×</td>
      <td>×</td>
      <td>×</td>
    </tr>
  </tbody>
</table>

* ×表示在这个级别里，某类问题不会出现。

###### 相关文章
* [学点后端知识之 Sequelize 中创建事务和🔐](https://juejin.im/post/5c98e31f51882574c6520dc3)