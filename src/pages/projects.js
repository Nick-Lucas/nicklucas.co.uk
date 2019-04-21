import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ContentLoader from 'react-content-loader'

import { Row, Col } from 'lib/Flex'
import { Spacer } from 'lib/Spacer'
import { Chevron } from 'lib/Chevron'
import { Card, CardHeader } from 'lib/Card'
import { COLORS } from 'lib/styles'
import { Clickable } from 'lib/Clickable'

const ENDPOINT = '/.netlify/functions/github-projects'

const Name = styled.h3`
  margin: 0;
  flex: 1;

  text-transform: capitalize;
`

const Language = styled.h4`
  margin: 0;
  color: ${COLORS.OFF_WHITE};

  font-weight: 500;
`

export default () => {
  const [loadFailed, setLoadFailed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    if (loading || data.length || loadFailed) {
      return
    }

    setLoading(true)
    axios
      .get(ENDPOINT)
      .then(response => {
        if (response.status === 200) {
          setData(response.data)
          setLoading(false)
        } else {
          setLoadFailed(true)
          setLoading(false)
        }
      })
      .catch(() => {
        setLoadFailed(true)
        setLoading(false)
      })
  })

  if (loading) {
    return <>{[0, 1, 2].map(renderLoader)}</>
  }
  if (loadFailed) {
    return <div>Oh no, there was a problem loading this page :(</div>
  }

  return <>{data.map(renderItem)}</>
}

const renderItem = item => (
  <Clickable to={item.url} key={item.url}>
    <Card>
      <CardHeader>
        <Row>
          <Name>{item.name}</Name>
          <Language>{item.language}</Language>
        </Row>
      </CardHeader>

      <Row>
        <Col>
          <p>{item.description}</p>
          <Spacer size="medium" />
        </Col>

        <Chevron />
      </Row>
    </Card>
  </Clickable>
)

const renderLoader = i => (
  <Card key={i}>
    <CardHeader>
      <Row>
        <Name>
          <Loader>
            <rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
            <rect x="80" y="0" rx="3" ry="3" width="200" height="10" />
          </Loader>
        </Name>
      </Row>
    </CardHeader>

    <Row>
      <Col>
        <p>
          <Loader>
            <rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
            <rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
            <rect x="190" y="0" rx="3" ry="3" width="20" height="10" />
            <rect x="220" y="0" rx="3" ry="3" width="20" height="10" />
            <rect x="250" y="0" rx="3" ry="3" width="100" height="10" />
            <rect x="360" y="0" rx="3" ry="3" width="50" height="10" />
            <rect x="420" y="0" rx="3" ry="3" width="70" height="10" />
          </Loader>
        </p>
        <Spacer size="medium" />
      </Col>

      <Chevron />
    </Row>
  </Card>
)

const StyledContentLoader = styled(ContentLoader)`
  width: 90%;
  height: 10px;
`
const Loader = props => {
  return (
    <StyledContentLoader
      height={10}
      width={500}
      speed={2}
      interval={0}
      primaryColor={COLORS.BLUE}
      secondaryColor={COLORS.WHITE}
      {...props}
    />
  )
}
