import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { HeadshotImage } from 'components/Images/Headshot'
import { Clickable } from 'lib/Clickable'
import { THEME } from 'lib/styles'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;
`

const HeadshotContainer = styled.div`
  width: 2.5rem;
  border-radius: 100%;
  overflow: hidden;

  margin: auto 0;
`

const H1 = styled.h1`
  color: ${THEME.FONT};
  font-weight: 700;

  margin: auto 0;
  border-bottom: none;
`

export const Title = ({ siteTitle }) => (
  <Clickable to="/">
    <Container>
      <HeadshotContainer>
        <HeadshotImage />
      </HeadshotContainer>

      <H1>{siteTitle}</H1>
    </Container>
  </Clickable>
)

Title.propTypes = {
  siteTitle: PropTypes.string,
}
