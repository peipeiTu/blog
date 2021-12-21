import React from 'react'
import { Link, graphql } from 'gatsby'
import { Col, Card, ListGroup } from 'react-bootstrap'
import Masonry from 'react-masonry-component'
import { Container } from '@material-ui/core'

import Layout from "../../components/layout"

const NotebookIndex = ({ data }) => {
  console.log(data);
  return (
    <Layout title={'笔记列表'}>
      <Container maxWidth="lg" className='py-5'>
      <Masonry>
        {data.allMdx.group.map(({ nodes, fieldValue }) => (
          <Col sm={6} key={fieldValue}>
            <Card className="mx-3 border-0 mb-3 opacity-75">
              <Card.Header className="text-dark font-weight-bold">
                {fieldValue}
              </Card.Header>
              <ListGroup className="mb-2">
                {nodes.map(({ id, slug, frontmatter }) => (
                  <ListGroup.Item key={id} className="border-0 py-1">
                    <Link to={`/${slug}`}>{frontmatter.title}</Link>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Masonry>
      </Container>
    </Layout>
  )
}

export default NotebookIndex

export const pageQuery = graphql`
  query MyQuery {
    allMdx {
      group(field: frontmatter___type) {
        nodes {
          id
          slug
          frontmatter {
            date
            description
            title
            type
          }
        }
        fieldValue
      }
    }
  }
`