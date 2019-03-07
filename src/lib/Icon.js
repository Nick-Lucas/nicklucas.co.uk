import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconBase = styled.span`
  font-family: 'Material Icons';

  margin: 0 0.2rem;
  padding-top: 0.1rem;
`

export const Icon = ({ icon }) => {
  return <IconBase>{icon}</IconBase>
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
}
Icon.defaultProps = {}
