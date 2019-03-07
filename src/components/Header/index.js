import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Title } from './Title'
import { StaticQuery, graphql } from 'gatsby'
import { COLORS } from 'lib/styles'
import { Item } from './Item'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: ${COLORS.TINT};
  padding: 0 2rem;
`

const HeaderComponent = ({ title }) => (
  <Container>
    <Title siteTitle={title} />
    <Item label="Blog" url="/blog" />
  </Container>
)

HeaderComponent.propTypes = {
  title: PropTypes.string,
}

HeaderComponent.defaultProps = {
  title: ``,
}

export const Header = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <HeaderComponent title={data.site.siteMetadata.title} {...props} />
    )}
  />
)
