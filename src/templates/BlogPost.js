import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Rehype from 'rehype-react'
import { Card } from 'lib/Card'
import Layout from 'components/layout'

export const pageQuery = graphql`
  query {
    markdownRemark {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

const render = new Rehype({
  createElement: React.createElement,
  components: { p: Card },
}).Compiler

const Template = ({ data }) => {
  const { frontmatter, htmlAst, tableOfContents } = data.markdownRemark

  return (
    <Layout>
      <div>{tableOfContents}</div>
      {/* <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2> */}
      {render(htmlAst)}
    </Layout>
  )
}

Template.displayName = 'BlogPost'

Template.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Template
