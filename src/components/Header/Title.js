import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 0.5rem 1rem;
`

export const Title = ({ siteTitle }) => (
  <Container>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </Container>
)

Title.propTypes = {
  siteTitle: PropTypes.string,
}
