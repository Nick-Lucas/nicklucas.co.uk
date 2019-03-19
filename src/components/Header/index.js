import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Title } from './Title'
import { StaticQuery, graphql } from 'gatsby'
import { COLORS, SHADOWS } from 'lib/styles'
import { Item } from './Item'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: ${COLORS.BLUE};
  padding: 0 2rem;
  /* margin-bottom: 1rem; */

  ${SHADOWS.MEDIUM}
`

const HeaderComponent = ({ title }) => (
  <Container>
    <Title siteTitle={title} />

    <Item icon="attach_file" label="Blog" url="/blog" />
    <Item icon="view_carousel" label="Projects" url="/projects" />
    <Item icon="work" label="Past Roles" url="/roles" />
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
