---
title: "GTM 表单追踪"
date: "2019-09-25T03:31:19.284Z"
description: "GTM表单追踪方式选择及实现"
type: "Google Tag Manager"
---

[来源博客](https://damonanalytics.com/2019/05/04/利用gtm追踪7种表单提交/)

#### 表单追踪方法选择

表单能抛出表单提交事件吗？(form表单，submit提交按钮) ： YES #1 选择默认的表单追踪触发器
NO ↓
成功后页面刷新吗？页面URL更改吗？目标URL唯一吗？： YES #2 选择“thank you”页面表单追踪
NO ↓
AJAX监听器能捕捉吗？能找到提交成功后相关dataLayer唯一变量？： YES #3 AJAX自动表单提交监听器
NO ↓
成功后展示message？该message有唯一class或id？： YES #4 选择元素可见性触发器
NO ↓
表单有JS API？API文档齐全且有简单样例？能编辑？： YES #5 创建自己的表单自动事件监听器
NO ↓
从网站开发获得帮助？： YES #6 表达提交后，请开发者触发一个dataLayer.push事件
NO ↓
以上方法都不适用？： YES #7 尝试DOM爬取
NO ↓
认输了吗？： YES 留言求助，谷歌

---

##### 1. GTM默认表单追踪

-   触发器类型选择`表单提交`

##### 2. “Thank you”页面表单提交追踪

-   如果提交成功后，跳转的页面唯一，且该页面只能通过这种方式到达，则追踪该页面的跳转来触发事件

##### 3. AJAX表单提交追踪

-   Lunametrics为GTM提供了一个免费的[AJAX监听器](https://www.bounteous.com/insights/2015/08/27/ajax-event-listener-google-tag-manager/?ns=l](https://www.bounteous.com/insights/2015/08/27/ajax-event-listener-google-tag-manager/?ns=l)

##### 4. 利用元素可见性触发器追踪表单

-   如果提交成功后会弹出提示信息，则触发器选择元素可见性进行事件跟踪

##### 5. 撰写自己的表单自动事件监听器

##### 6. 利用dataLayer事件追踪

-   由开发者主动推送事件，是性能最好，最直观的方式

##### 7. 利用DOM爬取追踪表单提交