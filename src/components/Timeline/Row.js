import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`

const CircleContainer = styled.div`
  display: flex;
  box-sizing: border-box;

  align-items: center;
  margin-right: 1rem;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Circle = styled.div`
  border-radius: 100%;
  border-width: 3px;
  border-style: solid;

  width: 2rem;
  height: 2rem;
`

const Line = styled.div`
  display: flex;
  flex: 1;
  min-height: 1rem;

  border-left-width: 3px;
  border-left-style: solid;
`

const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`

const Title = styled.h2`
  margin: 0;
  padding: 0;
`

export const Row = ({ title, children }) => {
  return (
    <Container>
      <TitleContainer>
        <CircleContainer>
          <Circle />
        </CircleContainer>

        <Title>{title}</Title>
      </TitleContainer>

      <Body>
        <CircleContainer>
          <Line />
        </CircleContainer>

        {children}
      </Body>
    </Container>
  )
}
