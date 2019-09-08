/*eslint-env node*/
/*eslint-disable no-console */

const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // Transform blog posts
  const BlogPostTemplate = path.resolve(`src/templates/BlogPost.js`)
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/blog/.*md$/" } }
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
  `)
    .then(result => {
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
        if (!node.frontmatter || !node.frontmatter.path) {
          console.log('No path provided for node: ', node)
          return
        }

        createPage({
          path: node.frontmatter.path,
          component: BlogPostTemplate,
        })
      })
    })
    .catch(e => console.error('Error:', e))
}
