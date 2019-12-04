---
title: "GTM 概述"
date: "2019-09-20T05:44:04.284Z"
description: "Google Tag Manager基础入门"
type: "Google Tag Manager"
---

`Google Tag Manger` 用于减轻埋点负担，将大部分工作从网页编码中移出，当它和`Google Analytics`结合使用时，相当于插入了谷歌分析和网页代码之间，所以不再需要在网页中使用`gtag.js`等。

##### # 容器

- 包含一个项目，拥有一个容器码，用于嵌入网页。
- 嵌入代码有两段，在`管理 → 安装Google跟踪代码管理器` 中可以找到 
  - 第一段嵌入`<head>`中，尽量靠顶 
    -  ```javascript
        (function(w,d,s,l,i){
          w[l]=w[l]||[];
          w[l].push({
            'gtm.start':<span class="ag-soft-line-break"></span>new Date().getTime(),
            event:'gtm.js'
          });
          var f=d.getElementsByTagName(s)[0],
          <span class="ag-soft-line-break"></span>j=d.createElement(s),
          dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src=<span class="ag-soft-line-break"></span>'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          <span class="ag-soft-line-break"></span>
          })(window,document,'script','dataLayer','GTM-MGJBX6K');
        
        ```
        
  - 第二段代码紧跟起始`<body>`，是预览时弹出的调试窗口
   - ```javascript
        <!-- Google Tag Manager (noscript) -->
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MGJBX6K" height="0" width="0" style="display:none;visibility:hidden">
          </iframe>
        </noscript>
        <!-- End Google Tag Manager (noscript) -->
     ```
    
##### # 变量 (variable)

主要分为`内置变量`和`用户定义的变量`

内置变量需要勾选生效，没有使用的默认不开启：

-   **网页**
    
    -   `Page URL`
        
    -   `Page Hostname`
        
    -   `Page Path`
        
    -   `Referrer`
        
-   **实用工具**
    
    -   `Event`
        
    -   `Environment Name`
        
    -   `Container Version`
        
    -   `Random Number`
        
    -   `HTML ID`
        
-   **错误**
    
    -   `Error Message`
        
    -   `Error URL`
        
    -   `Error Line`
        
    -   `Debug Mode`
        
-   **点击**
    
    -   `Click Element`：点击的DOM元素对象
        
    -   `Click Classes`
        
    -   `Click ID`
        
    -   `Click Target`
        
    -   `Click URL`
        
    -   `Click Text`
        
-   **表单**
    
    -   `Form Element`
        
    -   `Form Classes`
        
    
    -   `Form ID`
        
    -   `Form Target`
        
    -   `Form URL`
        
    -   `Form Text` 
-   **历史记录**
    
    -   `New History Fragment`
        
    -   `Old History Fragement`
        
    -   `New History State`
        
    -   `Old History State`
        
    -   `History Source`
        
-   **视频**
    
    -   `Video Provider`
        
    -   `Video Status`
        
    -   `Video URL`
        
    -   `Video Title`
        
    -   `Video Duration`
        
    -   `Video Current Time`
        
    -   `Video Percent`
        
    -   `Video Visible`
        
-   **滚动**
    
    -   `Scroll Depth Threshold`
        
    -   `Scroll Depth Units`
        
    -   `Scroll Direction`
        
-   **公开范围**
    
    -   `Percent Visible`
        
    -   `On-Screen Duration`
        

自定义变量：

-   **导航**
    
    -   `网址`
        
    -   `Http引荐来源网址`
        
-   **网页变量**
    
    -   `第一方Cookie`：返回浏览器cookie中该变量的值
        
    -   `数据层变量`：通过dataLayer.push传递的键值对
        
    -   `未定义的值`
        
    -   `自定义javascript`：自己写的js函数的返回值，其中可以用`{{}}`来使用已存在的变量
        
    -   `javascript变量`：抓取页面的全局变量
        
-   **页面元素**
    
    -   `元素可见性`
        
    -   `自动事件变量`
        
    -   `DOM元素`
        
-   **实用工具**
    
    -   `常量`
        
    -   `对照表`：根据输入值的不同，然后返回对应的输出值，类似switch
        
    -   `环境名称`
        
    -   `随机数字`：0~2147483647的随机数 (含边界)
        
    -   `正则表达式表格`：输入值用正则来匹配的对照表
        
    -   `自定义事件`
        
    -   `Google Analytics(分析) 设置`
        
-   **容器数据**
    
    -   `调试模式`：当处于调试模式时，该值为true
        
    -   `容器ID`
        
    -   `容器版本号`
        

##### # 触发器

制定规则，即规定好触发代码的条件

触发器类型：

-   网页浏览
    
    -   `DOM已准备就绪`
        
    -   `窗口已加载`
        
    -   `网页浏览`
        
-   点击
    
    -   `仅链接`
        
    -   `所有元素`
        
-   用户深度互动情况
    
    -   `YouTube视频`
        
    -   `元素可见性`
        
    -   `滚动深度`
        
    -   `表单提交`：`form`提交成功的跟踪，需要`form`最后的提交按钮类型是submit才能触发。
        
-   其他
    
    -   `JavaScript错误`
        
    -   `历史记录更改`：网址的变化跟踪，可用于单页应用的网页浏览跟踪。
        
    -   `定时器`
        
    -   `自定义事件`：通过`dataLayer.push({event:事件})`触发，跟踪不便通过前端变化定位的事件。
        
    -   `触发器组`
        

##### # 代码

-   设定类型和触发器，即满足触发条件之后，向某个统计工具发送指定的消息。
    
    1.  Universal Analytics：向特定的GA view发送数据
        
    2.  自定义html：向页面插入代码，可用于事件监控，再营销代码部署，GA基础代码部署
        

##### # GTM debug

-   线上预览
    
-   demo站点