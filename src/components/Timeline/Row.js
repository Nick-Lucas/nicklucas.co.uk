import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS, generateMobileOveride } from 'lib/styles'

const CIRCLE_SIZE = 2

const Container = styled.div`
  display: grid;
  grid-template-columns: ${CIRCLE_SIZE * 2}rem auto;
  grid-template-rows: auto auto;

  box-sizing: border-box;
`

const CircleCell = styled.div`
  grid-column: 1;
  grid-row: 1;

  display: flex;
  align-items: center;
`

const LineCell = styled.div`
  grid-column: 1;
  grid-row: 2;

  display: flex;
  align-items: center;
`

const Title1Cell = styled.div`
  grid-column: 2;
  grid-row: 1;
  ${generateMobileOveride(`
    display: none;
  `)}

  display: flex;
  justify-content: center;
`

const Title2Cell = styled.div`
  grid-column: 3;
  grid-row: 1;
  ${generateMobileOveride(`
    display: none;
  `)}

  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const TitleMobile = styled.div`
  grid-column: 2 / 4;
  grid-row: 1;
  ${generateMobileOveride(`
    display: flex;
  `)}

  display: none;
  justify-content: center;
`

const BodyCell = styled.div`
  grid-column: 2 / 4;
  grid-row: 2;

  display: flex;
  padding-top: 0.5rem;
`

const Circle = styled.div`
  border-radius: 100%;
  border-width: 3px;
  border-style: solid;
  color: ${COLORS.BLUE};

  width: ${CIRCLE_SIZE}rem;
  height: ${CIRCLE_SIZE}rem;
`

const Line = styled.div`
  display: flex;
  flex: 1;
  color: ${COLORS.BLUE};

  border-left-width: 3px;
  border-left-style: solid;
`

const Title1 = styled.h2`
  margin: 0;
  padding: 0;
  border-bottom-style: none;

  color: ${COLORS.BLUE};
  font-weight: 700;
`

const Title2 = styled.h4`
  margin: 0;
  padding: 0;
  border-bottom-style: none;

  color: ${COLORS.GREY};
  font-weight: 500;
`

const Spacer = styled.div`
  height: 2rem;
`

export const Row = ({ title1, title2, children, hideLine }) => {
  return (
    <Container>
      <CircleCell>
        <Circle />
        {hideLine || <Line />}
      </CircleCell>

      <LineCell>{hideLine || <Line />}</LineCell>

      <Title1Cell>
        <Title1>{title1}</Title1>
      </Title1Cell>

      <Title2Cell>
        <Title2>{title2}</Title2>
      </Title2Cell>

      <TitleMobile>
        <Title1>{title1}</Title1>
        <Title2>{title2}</Title2>
      </TitleMobile>

      <BodyCell>
        {children}
        <Spacer />
      </BodyCell>
    </Container>
  )
}

Row.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  hideLine: PropTypes.bool,
}

Row.defaultProps = {
  hideLine: false,
}
