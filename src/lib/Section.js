// import React from 'react'
import styled from 'styled-components'
import { SHADOWS, COLORS, generateMobileOveride } from './styles'

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 1rem;
  ${generateMobileOveride(`
    padding: 1rem;
  `)}

  background-color: ${COLORS.WHITE};
  ${SHADOWS.LOW}
`
