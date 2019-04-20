import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from 'lib/styles'
import { Icon } from 'lib/Icon'

const CircleShape = styled.button`
  margin: 0;
  padding: 0;

  border-radius: 100%;
  border-width: 3px;
  border-style: solid;
  border-color: ${COLORS.BLUE};
  color: ${COLORS.BLUE};

  background-color: ${COLORS.WHITE};
  outline: none;
  :hover {
    background-color: ${COLORS.OFF_WHITE};
  }
  transition: 0.3s;

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => `
    min-width: ${props.size}rem;
    max-width: ${props.size}rem;
    min-height: ${props.size}rem;
    max-height: ${props.size}rem;
  `};
`

const StyledIcon = styled(Icon)`
  color: ${COLORS.BLUE};

  ${props => `font-size: ${props.size}rem;`}
`

export const Circle = ({ size, expanded, toggle }) => {
  return (
    <CircleShape onClick={toggle} size={size}>
      <StyledIcon
        size={size}
        icon={expanded ? 'arrow_drop_down' : 'arrow_drop_up'}
      />
    </CircleShape>
  )
}

Circle.propTypes = {
  size: PropTypes.number.isRequired,
  expanded: PropTypes.bool,
  toggle: PropTypes.func,
}
