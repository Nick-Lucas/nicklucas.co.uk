import React from 'react'
import styled from 'styled-components'
import { COLORS } from './styles'

const StyledButton = styled.button`
  padding: 0.5rem;
  background-color: ${COLORS.WHITE};
  outline: none;

  border-radius: 5px;

  margin: 0.5rem 0;
`

export const Button = props => {
  return <StyledButton type="button" {...props} />
}
