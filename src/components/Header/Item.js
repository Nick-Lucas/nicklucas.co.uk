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
  text-decoration: none;

  :hover {
    background: ${COLORS.OFF_WHITE};
    transition: 0.3s;
  }
`
const StyledA = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  text-decoration: none;

  :hover {
    background: ${COLORS.OFF_WHITE};
    transition: 0.3s;
  }
`

const Text = styled.h3`
  margin: 0;
  border-bottom: none;
  color: ${COLORS.DARK};
`

export const Item = ({ label, url, icon }) => {
  const body = (
    <>
      {icon && <Icon icon={icon} />}
      <Text>{label}</Text>
    </>
  )

  if (url.startsWith('http')) {
    return <StyledA href={url}>{body}</StyledA>
  }

  return <StyledLink to={url}>{body}</StyledLink>
}

Item.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string,
}
