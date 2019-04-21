import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledA = styled.a`
  text-decoration: none;
`

export const Clickable = ({ to, ...props }) => {
  if (to.startsWith('http')) {
    return <StyledA {...props} href={to} />
  } else {
    return <StyledLink {...props} to={to} />
  }
}
