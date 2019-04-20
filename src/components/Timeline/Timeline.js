import React from 'react'
import PropTypes from 'prop-types'

import { Spacer } from 'lib/Spacer'
import { firstRestLast } from './firstRestLast'

export const Timeline = ({ children }) => {
  if (children.length > 0) {
    const [first, rest, last] = firstRestLast(children)

    return (
      <>
        <Spacer size="large" />
        {React.cloneElement(first, {
          hideTopLine: true,
        })}
        {rest}
        {React.cloneElement(last, {
          hideLine: true,
        })}
      </>
    )
  }
}

Timeline.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}
