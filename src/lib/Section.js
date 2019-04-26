// import React from 'react'
import styled from 'styled-components'
import { SHADOWS, COLORS, generateMobileOveride } from './styles'

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 2rem;
  ${generateMobileOveride(`
    padding: 1rem;
  `)}
  border-radius: 0.1rem;

  background-color: ${COLORS.WHITE};
  ${SHADOWS.LOW}
`
