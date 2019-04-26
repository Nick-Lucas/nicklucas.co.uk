import React from 'react'
import styled from 'styled-components'
// import { SocialIcon } from 'react-social-icons'
import SocialIcon from './SocialIconTempHack'

import { Row } from 'lib/Flex'
import { Clickable } from 'lib/Clickable'
import { COLORS } from 'lib/styles'

const Container = styled(Row)`
  justify-content: space-between;
  flex-flow: wrap;

  margin: -1rem auto;
`

const Item = styled.div`
  display: flex;
  flex-direction: row;

  padding: 1rem;

  background-color: transparent;
  :hover {
    background-color: ${COLORS.OFF_WHITE};
  }
`

const Label = styled.p`
  display: flex;
  margin: 0;
  margin-left: 0.5rem;
  align-self: center;
`

export const SocialStrip = () => {
  return (
    <Container>
      {renderIcon(
        'linkedin',
        'https://www.linkedin.com/in/nicholasjlucas/',
        'LinkedIn'
      )}
      {renderIcon('github', 'https://github.com/Nick-Lucas/', 'GitHub')}
      {renderIcon('email', 'mailto:me@nicklucas.dev', 'Email')}
    </Container>
  )
}

const renderIcon = (network, url, text) => {
  return (
    <Clickable to={url}>
      <Item>
        <SocialIcon
          network={network}
          style={{ height: '2.5rem', width: '2.5rem' }}
        />
        <Label>{text}</Label>
      </Item>
    </Clickable>
  )
}
