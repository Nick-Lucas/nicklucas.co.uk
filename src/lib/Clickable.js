import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { COLORS, withAlpha } from 'lib/styles'

const StyledLink = styled(Link)`
  text-decoration: none;

  -webkit-tap-highlight-color: ${withAlpha(COLORS.GREY)};
  user-select: none;

  /* Bring in line with default <a/> behaviour */
  display: contents;
`

const StyledA = styled.a`
  text-decoration: none;

  -webkit-tap-highlight-color: ${withAlpha(COLORS.GREY)};
  user-select: none;
`

export const Clickable = ({ to, ...props }) => {
  if (to.startsWith('http')) {
    return (
      <StyledA {...props} href={to} target="_blank" rel="noopener noreferrer" />
    )
  } else {
    return <StyledLink {...props} to={to} />
  }
}
