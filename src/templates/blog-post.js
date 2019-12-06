import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;


    return (
      <Layout location={this.props.location} title={post.frontmatter.title}>
        <div id="markdown" className="px-5 py-3 rounded">
          <h2 className="mb-2 mt-5">{post.frontmatter.title}</h2>
          <div className="mb-5 text-muted">{post.frontmatter.date}</div>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        description
        type
      }
    }
  }
`
