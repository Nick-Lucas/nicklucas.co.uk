import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
// import Rehype from 'rehype-react'
// import { Card } from 'lib/Card'
import Layout from 'components/layout'

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
      filter: { fileAbsolutePath: { regex: "/posts/.*md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

// const render = new Rehype({
//   createElement: React.createElement,
//   components: { p: Card },
// }).Compiler

const Template = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      {edges.map(({ node }) => {
        const { frontmatter } = node

        return (
          <div key={frontmatter.path}>
            <Link
              to={frontmatter.path}
              style={{
                textDecoration: `none`,
              }}
            >
              <h1>{frontmatter.title}</h1>
            </Link>
            <h4>{frontmatter.date}</h4>
            {/* <p></p> */}
          </div>
        )
      })}
    </Layout>
  )
}

Template.displayName = 'BlogPost'

Template.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Template
