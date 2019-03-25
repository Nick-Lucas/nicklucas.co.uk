import React from 'react'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-mdx'

import { Spacer } from 'lib/Spacer'

const components = {
  hr: Spacer,
}

export const HtmlMdx = ({ children }) => (
  <MDXRenderer components={components}>{children}</MDXRenderer>
)

HtmlMdx.propTypes = {
  children: PropTypes.object.isRequired,
}
