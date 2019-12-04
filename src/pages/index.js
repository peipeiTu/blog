import React from "react"

import Layout from "../components/layout"

class BlogIndex extends React.Component {
  render() {

    return (
      <Layout location={this.props.location} title={'博客首页'}>
        这是首页，但我还没想好放些什么
      </Layout>
    )
  }
}

export default BlogIndex
