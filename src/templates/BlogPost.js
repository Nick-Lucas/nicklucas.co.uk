import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Rehype from 'rehype-react'
import { Helmet } from 'react-helmet'

import Layout from 'components/layout'

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
  components: {},
}).Compiler

const Template = ({ data }) => {
  const { frontmatter, htmlAst } = data.markdownRemark

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>

      {render(htmlAst)}
    </Layout>
  )
}

Template.displayName = 'BlogPost'

Template.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Template
