"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[104],{8e3:function(a,e,n){n.r(e),n.d(e,{_frontmatter:function(){return o},default:function(){return d}});var t=n(3366),m=(n(7294),n(4983)),s=["components"],o={title:"事务和锁（包含Sequelize下的代码）",date:"2019-12-09T06:09:03.000Z",description:"事务和锁",type:"数据库"},c={_frontmatter:o};function d(a){var e=a.components,n=(0,t.Z)(a,s);return(0,m.mdx)("wrapper",Object.assign({},c,n,{components:e,mdxType:"MDXLayout"}),(0,m.mdx)("h5",{id:"事务transaction",style:{position:"relative"}},(0,m.mdx)("a",{parentName:"h5",href:"#%E4%BA%8B%E5%8A%A1transaction","aria-label":"事务transaction permalink",className:"anchor before"},(0,m.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,m.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"事务(Transaction)："),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"事务是数据库执行过程中的一个逻辑单位，由一系列有限的数据库操作序列构成。被事务裹起来的这些操作会有共同的执行结果，要么全部成功，要么失败并全部回滚。可以解决操作原子性的问题。")),(0,m.mdx)("p",null,"如银行转账，A转账100给B，即需要："),(0,m.mdx)("div",{className:"gatsby-highlight","data-language":"sql"},(0,m.mdx)("pre",{parentName:"div",className:"language-sql"},(0,m.mdx)("code",{parentName:"pre",className:"language-sql"},"A余额 ",(0,m.mdx)("span",{parentName:"code",className:"token operator"},"-"),(0,m.mdx)("span",{parentName:"code",className:"token operator"},"=")," ",(0,m.mdx)("span",{parentName:"code",className:"token number"},"100"),"\nB余额 ",(0,m.mdx)("span",{parentName:"code",className:"token operator"},"+"),(0,m.mdx)("span",{parentName:"code",className:"token operator"},"=")," ",(0,m.mdx)("span",{parentName:"code",className:"token number"},"100")))),(0,m.mdx)("p",null,"两条语句虽然独立，但最终结果必须是要么都执行，要么都不执行。"),(0,m.mdx)("div",{className:"gatsby-highlight","data-language":"sql"},(0,m.mdx)("pre",{parentName:"div",className:"language-sql"},(0,m.mdx)("code",{parentName:"pre",className:"language-sql"},(0,m.mdx)("span",{parentName:"code",className:"token comment"},"// SQL代码"),"\n",(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"start")," ",(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"transaction"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,m.mdx)("span",{parentName:"code",className:"token comment"},"// 操作"),"\n",(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"commit"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},";")))),(0,m.mdx)("p",null,(0,m.mdx)("code",{parentName:"p",className:"language-text"},"Sequelize"),"提供",(0,m.mdx)("code",{parentName:"p",className:"language-text"},"Transaction"),"类，通过",(0,m.mdx)("code",{parentName:"p",className:"language-text"},"Sequelize.transaction"),"创建事务，并在每一次数据库操作设置当前操作属于哪个事务："),(0,m.mdx)("div",{className:"gatsby-highlight","data-language":"javascript"},(0,m.mdx)("pre",{parentName:"div",className:"language-javascript"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"await")," sequelize",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"."),(0,m.mdx)("span",{parentName:"code",className:"token function"},"transaction"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"("),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"async")," ",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"("),(0,m.mdx)("span",{parentName:"code",className:"token parameter"},"transaction"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,m.mdx)("span",{parentName:"code",className:"token operator"},"=>")," ",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"const")," instance ",(0,m.mdx)("span",{parentName:"code",className:"token operator"},"=")," ",(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"await")," Accounts",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"."),(0,m.mdx)("span",{parentName:"code",className:"token function"},"findOne"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"("),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    where",(0,m.mdx)("span",{parentName:"code",className:"token operator"},":")," ",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      name",(0,m.mdx)("span",{parentName:"code",className:"token operator"},":")," ",(0,m.mdx)("span",{parentName:"code",className:"token string"},"'name'"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},","),"\n    transaction\n  ",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},")"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},";"),"\n  \n  ",(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"await")," instance",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"."),(0,m.mdx)("span",{parentName:"code",className:"token function"},"update"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"("),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    balances",(0,m.mdx)("span",{parentName:"code",className:"token operator"},":")," instance",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"."),"balances ",(0,m.mdx)("span",{parentName:"code",className:"token operator"},"+")," number",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},","),"\n  ",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    transaction\n  ",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},")"),"\n",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},")"),"\n"))),(0,m.mdx)("hr",null),(0,m.mdx)("h5",{id:"并发",style:{position:"relative"}},(0,m.mdx)("a",{parentName:"h5",href:"#%E5%B9%B6%E5%8F%91","aria-label":"并发 permalink",className:"anchor before"},(0,m.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,m.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"并发"),(0,m.mdx)("p",null,"事务只解决了操作原子性的问题，并发则需要通过加锁来避免。"),(0,m.mdx)("h6",{id:"锁",style:{position:"relative"}},(0,m.mdx)("a",{parentName:"h6",href:"#%E9%94%81","aria-label":"锁 permalink",className:"anchor before"},(0,m.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,m.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"锁："),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("code",{parentName:"p",className:"language-text"},"悲观锁"),"：为了避免冲突，直接给记录加上锁，再事务释放之前，其他要对该记录执行操作的事务都必须等待。MySql、Postgres都实现了悲观锁。缺点是，再读操作频繁的场景下，会影响吞吐量。")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("code",{parentName:"p",className:"language-text"},"乐观锁"),"：不对读进行限制，仅在写入更新的时候做判断。通常会增加version字段，每次更新的时候version+1，提交更新的时候先判断version，如果已失效则重试。在写操作频繁的场景下会不断发生重试，也会影响吞吐量。")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("code",{parentName:"p",className:"language-text"},"排他锁"),"：悲观锁的一种，查询的时候加锁。同一资源同一时间只能有一个排他锁，其他事务读写都需要等待。"))),(0,m.mdx)("div",{className:"gatsby-highlight","data-language":"sql"},(0,m.mdx)("pre",{parentName:"div",className:"language-sql"},(0,m.mdx)("code",{parentName:"pre",className:"language-sql"},(0,m.mdx)("span",{parentName:"code",className:"token comment"},"// SQL代码"),"\n",(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"SELECT")," ",(0,m.mdx)("span",{parentName:"code",className:"token operator"},"*")," ",(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"FROM")," accounts ",(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"WHERE")," name",(0,m.mdx)("span",{parentName:"code",className:"token operator"},"="),(0,m.mdx)("span",{parentName:"code",className:"token string"},"'name'")," ",(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"FOR")," ",(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"UPDATE"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},";")))),(0,m.mdx)("div",{className:"gatsby-highlight","data-language":"javascript"},(0,m.mdx)("pre",{parentName:"div",className:"language-javascript"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},(0,m.mdx)("span",{parentName:"code",className:"token comment"},"// Sequelize 写法"),"\n",(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"await")," Accounts",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"."),(0,m.mdx)("span",{parentName:"code",className:"token function"},"findOne"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"("),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  where",(0,m.mdx)("span",{parentName:"code",className:"token operator"},":")," ",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"{")," name",(0,m.mdx)("span",{parentName:"code",className:"token operator"},":")," ",(0,m.mdx)("span",{parentName:"code",className:"token string"},"'name'")," ",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},","),"\n  lock",(0,m.mdx)("span",{parentName:"code",className:"token operator"},":")," Sequelize",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"."),"Transaction",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"."),(0,m.mdx)("span",{parentName:"code",className:"token constant"},"LOCK"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"."),(0,m.mdx)("span",{parentName:"code",className:"token constant"},"UPDATE"),"\n",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},")"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},";")))),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("code",{parentName:"li",className:"language-text"},"共享锁"),"：允许同一资源同时存在多个共享锁，当需要执行修改、删除等操作时，必须等其他所有共享锁都释放后才能执行。")),(0,m.mdx)("div",{className:"gatsby-highlight","data-language":"sql"},(0,m.mdx)("pre",{parentName:"div",className:"language-sql"},(0,m.mdx)("code",{parentName:"pre",className:"language-sql"},(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"SELECT")," ",(0,m.mdx)("span",{parentName:"code",className:"token operator"},"*")," ",(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"FROM")," accounts ",(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"WHERE")," name",(0,m.mdx)("span",{parentName:"code",className:"token operator"},"="),(0,m.mdx)("span",{parentName:"code",className:"token string"},"'name'")," ",(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"FOR")," ",(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"SHARE"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},";")))),(0,m.mdx)("div",{className:"gatsby-highlight","data-language":"javascript"},(0,m.mdx)("pre",{parentName:"div",className:"language-javascript"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},(0,m.mdx)("span",{parentName:"code",className:"token keyword"},"await")," Accounts",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"."),(0,m.mdx)("span",{parentName:"code",className:"token function"},"findOne"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"("),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  where",(0,m.mdx)("span",{parentName:"code",className:"token operator"},":")," ",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"name",(0,m.mdx)("span",{parentName:"code",className:"token operator"},":"),(0,m.mdx)("span",{parentName:"code",className:"token string"},"'name'")," ",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},","),"\n  lock",(0,m.mdx)("span",{parentName:"code",className:"token operator"},":")," Sequelize",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"."),"Transaction",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"."),(0,m.mdx)("span",{parentName:"code",className:"token constant"},"LOCK"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"."),(0,m.mdx)("span",{parentName:"code",className:"token constant"},"SHARE"),"\n",(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),(0,m.mdx)("span",{parentName:"code",className:"token punctuation"},")")))),(0,m.mdx)("h4",{id:"事务隔离级",style:{position:"relative"}},(0,m.mdx)("a",{parentName:"h4",href:"#%E4%BA%8B%E5%8A%A1%E9%9A%94%E7%A6%BB%E7%BA%A7","aria-label":"事务隔离级 permalink",className:"anchor before"},(0,m.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,m.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"事务隔离级"),(0,m.mdx)("table",{className:"table table-bordered table-striped table-dark"},(0,m.mdx)("thead",null,(0,m.mdx)("tr",null,(0,m.mdx)("th",{scope:"col"},"级别"),(0,m.mdx)("th",{scope:"col"},"脏读"),(0,m.mdx)("th",{scope:"col"},"不可重复读"),(0,m.mdx)("th",{scope:"col"},"幻读"))),(0,m.mdx)("tbody",null,(0,m.mdx)("tr",null,(0,m.mdx)("th",{scope:"row"},"READ_UNCOMMITTED 读未提交"),(0,m.mdx)("td",null),(0,m.mdx)("td",null),(0,m.mdx)("td",null)),(0,m.mdx)("tr",null,(0,m.mdx)("th",{scope:"row"},"READ_COMMITTED 读已提交"),(0,m.mdx)("td",null,"×"),(0,m.mdx)("td",null),(0,m.mdx)("td",null)),(0,m.mdx)("tr",null,(0,m.mdx)("th",{scope:"row"},"REPEATABLE_READ 可重复读"),(0,m.mdx)("td",null,"×"),(0,m.mdx)("td",null,"×"),(0,m.mdx)("td",null)),(0,m.mdx)("tr",null,(0,m.mdx)("th",{scope:"row"},"SERIALIZABLE 可串行化"),(0,m.mdx)("td",null,"×"),(0,m.mdx)("td",null,"×"),(0,m.mdx)("td",null,"×")))),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"×表示在这个级别里，某类问题不会出现。")),(0,m.mdx)("h6",{id:"相关文章",style:{position:"relative"}},(0,m.mdx)("a",{parentName:"h6",href:"#%E7%9B%B8%E5%85%B3%E6%96%87%E7%AB%A0","aria-label":"相关文章 permalink",className:"anchor before"},(0,m.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,m.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"相关文章"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://juejin.im/post/5c98e31f51882574c6520dc3"},"学点后端知识之 Sequelize 中创建事务和🔐"))))}d.isMDXComponent=!0},3366:function(a,e,n){function t(a,e){if(null==a)return{};var n,t,m={},s=Object.keys(a);for(t=0;t<s.length;t++)n=s[t],e.indexOf(n)>=0||(m[n]=a[n]);return m}n.d(e,{Z:function(){return t}})}}]);
//# sourceMappingURL=component---src-pages-notebook-database-transaction-and-lock-md-65af7984dfce6cc14680.js.map