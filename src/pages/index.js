import React from "react"

import Layout from "../components/layout"

class BlogIndex extends React.Component {
  render() {

    return (
      <Layout location={this.props.location} title={'博客首页'}>
        <div className="pt-5 h1 text-light text-center font-weight-bolder text-monospace">Hi! Welcome to PeipeiTu's Blog</div>
      </Layout>
    )
  }
}

export default BlogIndex
