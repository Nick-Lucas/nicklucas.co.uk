import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import SEO from 'components/seo'
import { Section } from 'lib/Section'
import { HtmlAst } from 'lib/HtmlAst'

const IndexPage = ({ data: { htmlAst } }) => {
  return (
    <>
      <SEO
        keywords={[
          `nick lucas`,
          `software developer`,
          `software engineer`,
          `london`,
        ]}
      />

      <Section>
        <h1>Welcome!</h1>

        <HtmlAst htmlAst={htmlAst} />
      </Section>
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({ htmlAst: PropTypes.object.isRequired }).isRequired,
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/pages/home.md/" }) {
          htmlAst
        }
      }
    `}
    render={data => <IndexPage data={data.markdownRemark} />}
  />
)
