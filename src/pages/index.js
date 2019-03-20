import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from 'components/layout'
import SEO from 'components/seo'
import { Row } from 'lib/Flex'
import { LinkedInBadge } from 'components/LinkedInBadge'

const IndexPage = ({ data: { html } }) => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `nick lucas`,
          `software developer`,
          `software engineer`,
          `london`,
        ]}
      />

      <Row>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <LinkedInBadge />
      </Row>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({ html: PropTypes.string.isRequired }).isRequired,
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/pages/home.md/" }) {
          html
        }
      }
    `}
    render={data => <IndexPage data={data.markdownRemark} />}
  />
)
