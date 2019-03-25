import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Card, CardHeader } from 'lib/Card'
import { Icon } from 'lib/Icon'
import { Row, Col } from 'lib/Flex'
import { Clickable } from 'lib/Clickable'
import { Spacer } from 'lib/Spacer'

const Chevron = styled(Icon)`
  align-self: center;
  font-size: 1.3rem;
`

export const PostButton = ({ node }) => {
  const { frontmatter, excerpt } = node

  return (
    <Clickable to={frontmatter.path} key={frontmatter.path}>
      <Card>
        <CardHeader>
          <h3>{frontmatter.title}</h3>
        </CardHeader>
        <Row>
          <Col>
            <h5>{frontmatter.date}</h5>
            <p>{frontmatter.summary || excerpt}</p>
            <Spacer size="medium" />
          </Col>

          <Chevron icon="arrow_forward_ios" />
        </Row>
      </Card>
    </Clickable>
  )
}

PostButton.propTypes = {
  node: PropTypes.object.isRequired,
}
