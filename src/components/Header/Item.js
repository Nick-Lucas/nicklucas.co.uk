import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { COLORS } from 'lib/styles'
import { Icon } from 'lib/Icon'

const linkProps = {
  current: PropTypes.bool,
}

/* eslint-disable-next-line no-unused-vars */
const StyledLink = styled(({ current, ...rest }) => <Link {...rest} />)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  text-decoration: none;

  :hover {
    background-color: ${COLORS.OFF_WHITE};
  }
  transition: background-color 0.3s;

  ${({ current }) => current && `background-color: ${COLORS.OFF_WHITE};`}
`
StyledLink.propTypes = linkProps

/* eslint-disable-next-line no-unused-vars */
const StyledA = styled(({ current, ...rest }) => <a {...rest} />)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  text-decoration: none;

  :hover {
    background: ${COLORS.OFF_WHITE};
    transition: 0.3s;
  }

  ${({ current }) => current && `background: ${COLORS.OFF_WHITE};`}
`
StyledA.propTypes = linkProps

const Text = styled.h3`
  margin: 0;
  border-bottom: none;
  color: ${COLORS.DARK};

  white-space: nowrap;
  overflow: hidden;
`

export const Item = ({ label, url, icon, current }) => {
  const body = (
    <>
      {icon && <Icon icon={icon} />}
      <Text>{label}</Text>
    </>
  )

  if (url.startsWith('http')) {
    return (
      <StyledA
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        current={current}
      >
        {body}
      </StyledA>
    )
  }

  return (
    <StyledLink to={url} current={current}>
      {body}
    </StyledLink>
  )
}

Item.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string,
  current: PropTypes.bool,
}

Item.defaultProps = {
  current: false,
}
