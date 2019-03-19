/*eslint-env node*/
/*eslint-disable no-console */

const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // Create blogs index
  const BlogPostsTemplate = path.resolve(`src/templates/BlogPosts.js`)
  createPage({
    path: '/blog',
    component: BlogPostsTemplate,
  })

  // Transform blog posts
  const BlogPostTemplate = path.resolve(`src/templates/BlogPost.js`)
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/posts/.*md$/" } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    console.log(
      'Found',
      result.data.allMarkdownRemark.edges.length,
      'blog posts:',
      JSON.stringify(result.data.allMarkdownRemark.edges)
    )

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: BlogPostTemplate,
      })
    })
  })
}
