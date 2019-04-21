import React from 'react'
import PropTypes from 'prop-types'
import { navigateTo } from 'gatsby'
import styled from 'styled-components'
import { COLORS, SHADOWS } from './styles'

const StyledButton = styled.button`
  /* Reset styles to generic button */
  border: none;
  font: inherit;
  color: inherit;

  background-color: ${COLORS.WHITE};
  outline: none;
  :hover {
    background-color: ${COLORS.OFF_WHITE};
  }
  :active {
    background-color: ${COLORS.PALE_WHITE};
  }

  max-width: 20rem;
  align-items: center;
  align-self: center;

  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 0.5rem 0;

  ${SHADOWS.LOW}
`

const Text = styled.strong``

export const Button = ({ children, to = null, onClick = null, ...props }) => {
  let clickHandler = onClick
  if (to) {
    clickHandler = () => navigateTo(to)
  }

  return (
    <StyledButton type="button" {...props} onClick={clickHandler}>
      <Text>{children}</Text>
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
}
