import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Timeline = ({ children }) => {
  if (children.length > 0) {
    const last = children.slice(-1)[0]
    const rest = children.slice(0, -1)

    return (
      <>
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
