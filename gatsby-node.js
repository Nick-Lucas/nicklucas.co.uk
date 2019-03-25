/*eslint-env node*/
/*eslint-disable no-console */

const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  // Add redirects
  createRedirect({
    fromPath: `/projects`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `https://github.com/Nick-Lucas/`,
  })
  createRedirect({
    fromPath: `/roles`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `https://www.linkedin.com/in/nicholasjlucas/`,
  })

  // Transform blog posts
  const BlogPostTemplate = path.resolve(`src/templates/BlogPost.js`)
  const blogPostsPromise = graphql(`
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
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    console.log(
      'Found',
      result.data.allMarkdownRemark.edges.length,
      'blog posts'
    )

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: BlogPostTemplate,
      })
    })
  })

  // Transform MDX pages
  const MDXPageTemplate = path.resolve(`src/templates/MDXPage.js`)
  const mdxPagePromise = graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              path
            }
            parent {
              ... on File {
                name
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    console.log('Found', result.data.allMdx.edges.length, 'MDX pages')

    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: MDXPageTemplate,
      })
    })
  })

  return Promise.all([mdxPagePromise, blogPostsPromise])
}
