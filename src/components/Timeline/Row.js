import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { COLORS, generateMobileOveride } from 'lib/styles'
import { Spacer } from 'lib/Spacer'

import { Circle } from './Circle'
import { datesToRange, datesToMonths } from './datesToDuration'

const CIRCLE_SIZE = 2

const Container = styled.div`
  display: grid;
  grid-template-columns: ${CIRCLE_SIZE * 2}rem auto 16rem;
  grid-template-rows: auto auto;
  ${generateMobileOveride(`
    grid-template-columns: ${CIRCLE_SIZE * 1.2}rem auto;
    grid-template-rows: auto auto auto;
  `)}

  box-sizing: border-box;
`

const CircleCell = styled.div`
  grid-column: 1;
  grid-row: 1;

  display: flex;
  align-items: center;
  padding-right: 0.5rem;
`

const LineCell = styled.div`
  grid-column: 1;
  grid-row: 2 / 99;

  display: flex;
  align-items: center;
  padding-right: 0.5rem;
`

const Title1Cell = styled.div`
  grid-column: 2;
  grid-row: 1;
  ${generateMobileOveride(`
    grid-column: 2 / 4;
  `)}

  display: flex;
  justify-content: center;
`

const Title2Cell = styled.div`
  grid-column: 3;
  grid-row: 1;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  ${generateMobileOveride(`
    grid-column: 2 / 4;
    grid-row: 2;
    align-items: flex-start;
  `)}
`

const BodyCell = styled.div`
  grid-column: 2 / 4;
  grid-row: 2;
  ${generateMobileOveride(`
    grid-row: 3;
  `)}

  display: flex;
  padding-top: 0.5rem;
`

const Line = styled.div`
  display: flex;
  flex: 1;
  color: ${COLORS.BLUE};

  border-left-width: 3px;
  border-left-style: solid;
  ${props => {
    if (props.hide) {
      return `border-left-style: none;`
    }
  }}
`

const Title1 = styled.h2`
  margin: 0 !important;
  padding: 0;
  border-bottom-style: none;

  color: ${COLORS.BLUE};
  font-weight: 700;
  ${({ noEmphasis = false }) => {
    if (noEmphasis) {
      return `
        color: ${COLORS.GREY};
        font-weight: 500;
      `
    }
  }}
`

const Title2 = styled.h4`
  margin: 0;
  padding: 0;
  border-bottom-style: none;

  color: ${COLORS.GREY};
  font-weight: 500;
  text-align: right;
`

const BodyWrapper = styled.div`
  display: flex;
  flex: 1;

  overflow: visible;
  transition: max-height 300ms 300ms, opacity 300ms 300ms;
  max-height: 200vh;

  ${props => {
    if (props.hide) {
      return `
        opacity: 0.0;
        max-height: 0px;
      `
    }
  }}

  padding-bottom: 1rem;
`

export const Row = ({
  title1,
  title2,
  children,
  hideLine,
  hideTopLine,
  dateFrom,
  dateTo,
  current,
  noEmphasis,
}) => {
  const [expanded, setExpanded] = useState(true)

  const duration = useMemo(() => datesToRange(dateFrom, dateTo, current), [
    dateFrom,
    dateTo,
    current,
  ])

  const range = useMemo(() => datesToMonths(dateFrom, dateTo), [
    dateFrom,
    dateTo,
    current,
  ])

  return (
    <Container>
      <CircleCell>
        <Line hide={hideTopLine} />
        <Circle
          size={CIRCLE_SIZE}
          expanded={expanded}
          toggle={() => setExpanded(!expanded)}
        />
        <Line hide={hideLine} />
      </CircleCell>

      <LineCell>
        <Line hide={hideLine} />
      </LineCell>

      <Title1Cell>
        <Title1 noEmphasis={noEmphasis}>{title1}</Title1>
      </Title1Cell>

      <Title2Cell>
        <Title2>{title2}</Title2>
        <Title2>
          {duration} {current || `(${range})`}
        </Title2>
      </Title2Cell>

      <BodyCell>
        <BodyWrapper hide={!expanded}>
          <Spacer size="medium" />
          {children}
          <Spacer size="medium" />
        </BodyWrapper>
      </BodyCell>
    </Container>
  )
}

Row.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  hideLine: PropTypes.bool,
  hideTopLine: PropTypes.bool,
  dateFrom: PropTypes.string.isRequired,
  dateTo: PropTypes.string.isRequired,
  current: PropTypes.bool,
  noEmphasis: PropTypes.bool,
}

Row.defaultProps = {
  hideLine: false,
  hideTopLine: false,
  current: false,
  noEmphasis: false,
}
