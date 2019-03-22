import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Layout from 'components/layout'
import { PostButton } from 'components/blog/PostButton'
import SEO from 'components/seo'

export default () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(
            sort: {
              order: DESC
              fields: [frontmatter___date, frontmatter___path]
            }
            limit: 1000
            filter: { fileAbsolutePath: { regex: "/blog/.*md$/" } }
          ) {
            edges {
              node {
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  path
                  title
                  summary
                }
                excerpt(pruneLength: 100, format: HTML)
              }
            }
          }
        }
      `}
      render={data => {
        const { edges } = data.allMarkdownRemark

        return (
          <Layout>
            <SEO
              title="Blog"
              keywords={[
                `nick lucas`,
                `software developer`,
                `software engineer`,
                `london`,
              ]}
            />
            {edges.map(PostButton)}
          </Layout>
        )
      }}
    />
  )
}
