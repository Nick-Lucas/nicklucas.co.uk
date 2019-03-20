import React from 'react'
import PropTypes from 'prop-types'
import Rehype from 'rehype-react'

import { Spacer } from 'lib/Spacer'

const render = new Rehype({
  createElement: React.createElement,
  components: {
    hr: Spacer,
  },
}).Compiler

export const HtmlAst = ({ htmlAst }) => render(htmlAst)

HtmlAst.propTypes = {
  htmlAst: PropTypes.object.isRequired,
}
