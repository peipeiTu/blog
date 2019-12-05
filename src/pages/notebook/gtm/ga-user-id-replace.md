---
title: "GTM 替换GA中的用户ID"
date: "2019-09-29T03:31:19.284Z"
description: "替换GA中的用户ID，和系统用户体系联系起来"
type: "Google Tag Manager"
---

#### 1. 设定GA中的User-ID

-   `管理 → 媒体资源→ 跟踪信息 → User-ID`,同意启用User-ID政策
    
-   下一步`设置User-ID`，不用管
    
-   下一步，`创建User-ID视图`
    

---

#### 2. 在GTM中获取User ID的方法

###### # 让开发者使用`datalayer`方式传递User ID

-   开发者通过`windows.dataLayer.push({userId:'123456'})`传递ID
    
-   在GTM 的变量中，声明好变量`User_id`，类型为`数据层变量`，命名与开发者传递的一致
    

###### # 将ID存储在cookie中

-   开发者将ID存储在cookie中，可以在GTM中的自定义变量 - cookie中获取。

###### # 使用javascript变量寻找ID

-   当ID存在于js全局变量中时，可以使用。

###### # 在DOM中寻找ID

-   当页面展示内容中存在ID，可以通过DOM获取ID。

###### # 在URL中找ID

---

#### 3. 更新GA设置变量

-   在之前配置好的`GA设置`变量中，选择更多设置，添加字段`userId - {{userId}}`,将在上一步中定义好的变量赋值给userId
-   在GA中新建好userId维度，同时在`GA设置`中设置维度，注意维度的ID要一致，也赋值userId