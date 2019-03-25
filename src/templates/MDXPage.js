import React from 'react'
import { graphql } from 'gatsby'
import { HtmlMdx } from 'lib/HtmlMdx'

export const pageQuery = graphql`
  query MDXQuery($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
      }
      code {
        body
      }
    }
  }
`

export default class Template {
  render() {
    return <HtmlMdx>{this.props.data.mdx.code.body}</HtmlMdx>
  }
}
