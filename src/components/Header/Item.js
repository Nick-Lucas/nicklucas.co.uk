import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { COLORS } from 'lib/styles'
import { Icon } from 'lib/Icon'

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;

  :hover {
    background: ${COLORS.PALE_WHITE};
    transition: 0.3s;
  }
`

const Text = styled.h3`
  margin: 0;
  border-bottom: none;
  color: ${COLORS.DARK};
`

export const Item = ({ label, url, icon }) => (
  <StyledLink
    to={url}
    style={{
      textDecoration: `none`,
    }}
  >
    {icon && <Icon icon={icon} />}
    <Text>{label}</Text>
  </StyledLink>
)

Item.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string,
}
