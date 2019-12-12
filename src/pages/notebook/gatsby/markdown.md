---
title: "Gatsby 之 markdown文件展示"
date: "2015-05-01T22:12:03.284Z"
description: "在Gatsby项目下将markdown转换为页面的具体操作及扩展"
type: "gatsby"
---

#### 生成目录
---
##### 1. 获取目录数据
在markdown文件展示的template文件中的graphQL查询代码中添加`tableOfContents`

```javascript
{
  markdownRemark(fields: { slug: { eq: $slug } }) {
    id
    excerpt
    html
    tableOfContents
    frontmatter {
      title
      tags
      date(formatString: "MMMM DD, YYYY")
    }
  }
}
```
##### 2. 注入锚点
引入插件`gatsby-remark-autolink-headers`并在`gatsby-config.js`文件中配置
```bash
npm install --save gatsby-remark-autolink-headers
```
```javascript
module.exports = {
  plugins: [
    ... ...
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          ... ...
          `gatsby-remark-autolink-headers`
          ... ...
        ],
      },
    },
    ... ...
  ]
}
```
注：如果使用了prismjs插件，那么autolink要放在前面，prismjs放在后面，不然有冲突。
