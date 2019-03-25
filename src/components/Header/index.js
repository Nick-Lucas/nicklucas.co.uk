import React from 'react'
import styled from 'styled-components'
import { Title } from './Title'
import { COLORS, generateMobileOveride } from 'lib/styles'
import { Item } from './Item'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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

      <ItemsContainer>
        <Item icon="favorite" label="Projects" url="/projects" />
        <Item icon="people" label="Past Roles" url="/roles" />
        <Item icon="notes" label="Blog" url="/blog" />
      </ItemsContainer>
    </InnerContainer>
  </Container>
)
