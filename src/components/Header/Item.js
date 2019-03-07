import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { COLORS } from 'lib/styles'

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;

  border-left: solid;
  border-left-color: ${COLORS.BACKGROUND};
  border-left-width: 1px;

  :hover {
    background: ${COLORS.BACKGROUND};
    transition: 0.3s;
  }
`

const Text = styled.h3`
  margin: 0;
`

export const Item = ({ label, url }) => (
  <StyledLink
    to={url}
    style={{
      textDecoration: `none`,
    }}
  >
    <Text>{label}</Text>
  </StyledLink>
)

Item.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
}
