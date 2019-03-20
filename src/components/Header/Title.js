import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { HeadshotImage } from 'components/Images/Headshot'
import { Clickable } from 'lib/Clickable'
import { THEME, COLORS } from 'lib/styles'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 0.5rem 1rem;

  :hover {
    background: ${COLORS.OFF_WHITE};
    transition: 0.3s;
  }
`

const StyledClickable = styled(Clickable)`
  display: flex;
  flex: 1;
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
  <StyledClickable to="/">
    <Container>
      <HeadshotContainer>
        <HeadshotImage />
      </HeadshotContainer>

      <H1>{siteTitle}</H1>
    </Container>
  </StyledClickable>
)

Title.propTypes = {
  siteTitle: PropTypes.string,
}
