import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from 'lib/styles'
import { Icon } from 'lib/Icon'

const CircleShape = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;
  outline: none;
  overflow: hidden;

  border-radius: 100%;
  border-width: 3px;
  border-style: solid;
  border-color: ${COLORS.BLUE};

  color: ${COLORS.BLUE};
  background-color: ${COLORS.WHITE};
  :hover {
    background-color: ${COLORS.OFF_WHITE};
  }
  transition: 0.3s;

  ${props => `
    min-width: ${props.size}rem;
    max-width: ${props.size}rem;
    min-height: ${props.size}rem;
    max-height: ${props.size}rem;
  `};
`

const StyledIcon = styled(Icon)`
  margin: 0;
  padding: 0;

  color: ${COLORS.BLUE};
  ${props => `font-size: ${props.size}rem;`}

  transition: transform 0.3s ease-in-out;
  transform: rotate(0deg);
  ${props => {
    if (props.expanded) {
      return `
        transform: rotate(180deg)
      `
    }
  }};
`

export const Circle = ({ size, expanded, toggle }) => {
  return (
    <CircleShape onClick={toggle} size={size}>
      <StyledIcon size={size} icon={'arrow_drop_up'} expanded={expanded} />
    </CircleShape>
  )
}

Circle.propTypes = {
  size: PropTypes.number.isRequired,
  expanded: PropTypes.bool,
  toggle: PropTypes.func,
}
