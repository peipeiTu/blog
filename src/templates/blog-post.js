import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Col, Row } from 'react-bootstrap'

import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;

    return (
      <Layout location={this.props.location} title={post.frontmatter.title}>

        <Row className='py-5 px-5'>
          <Col lg="2">
            <div className='mb-5 ml-5'><Link to='/notebook' className='text-light'>&lt; 返回列表</Link></div>
            <ul>
              {post.tableOfContents.items.map(({url, title, items}, index)=>(
                <li key={index}>
                  <Link to={url} className='link-secondary text-truncate'>{title}</Link>
                  <ul>
                    {items?.map((next, i)=>(
                      <li key={i}><Link to={next.url}  className='link-secondary text-truncate'>{next.title}</Link></li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg="8" id="markdown" className="px-5 py-5 mx-3 rounded">
            <h2 className="mb-2 mt-4">{post.frontmatter.title}</h2>
            <div className="mb-5 text-muted">{post.frontmatter.date}</div>
            <MDXRenderer className='mb-5'>{post.body}</MDXRenderer>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(slug: {eq: $slug}) {
      body
      frontmatter {
        date
        description
        title
        type
      }
      tableOfContents
    }
  }
`
