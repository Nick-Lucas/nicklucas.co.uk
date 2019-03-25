import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from 'components/seo'
import { Section } from 'lib/Section'
import { HtmlAst } from 'lib/HtmlAst'
import { CardHeader } from 'lib/Card'

const Home = () => {
  const { htmlAst } = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/pages/home.md/" }) {
        htmlAst
      }
    }
  `).markdownRemark

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

export default Home
