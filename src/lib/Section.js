// import React from 'react'
import styled from 'styled-components'
import { SHADOWS, COLORS } from './styles'

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin: 1rem auto;
  padding: 2rem;
  padding-top: 0;

  background-color: ${COLORS.WHITE};
  ${SHADOWS.LOW}
`
