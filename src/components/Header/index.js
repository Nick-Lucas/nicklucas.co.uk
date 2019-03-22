import React from 'react'
import styled from 'styled-components'
import { Title } from './Title'
import { COLORS, generateMobileOveride } from 'lib/styles'
import { Item } from './Item'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 2rem;

  background-color: ${COLORS.WHITE};
  border-bottom: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.PALE_WHITE};

  justify-content: center;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  max-width: 60rem;

  ${generateMobileOveride(`flex-direction: column;`)}
`

const TitleContainer = styled.div`
  display: flex;
  flex: 1;
`

export const Header = () => (
  <Container>
    <InnerContainer>
      <TitleContainer>
        <Title />
      </TitleContainer>

      <Item
        icon="favorite"
        label="Projects"
        url="https://github.com/Nick-Lucas/"
      />
      <Item
        icon="people"
        label="Past Roles"
        url="https://www.linkedin.com/in/nicholasjlucas/"
      />
      <Item icon="notes" label="Blog" url="/blog" />
    </InnerContainer>
  </Container>
)
