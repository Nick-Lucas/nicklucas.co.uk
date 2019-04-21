import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Section } from 'lib/Section'
import { HtmlAst } from 'lib/HtmlAst'
import { Spacer } from 'lib/Spacer'

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
const Template = ({ data }) => {
  const { frontmatter, htmlAst } = data.markdownRemark

  return (
    <>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>

      <Section>
        <HtmlAst htmlAst={htmlAst} />
      </Section>
    </>
  )
}

Template.displayName = 'BlogPost'

Template.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Template
