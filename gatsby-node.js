const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(`
    {
      allMdx {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) throw result.errors;


  // Create blog posts pages.
  const posts = result.data.allMdx.nodes

  posts.forEach(({slug}) => {
    createPage({
      path: slug,
      component: blogPost,
      context: {
        slug: slug
      }
    })
  })
}

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }

    type MdxFrontmatter {
      date: String
      description: String
      type: String
    }
  `);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
