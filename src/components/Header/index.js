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
  padding: 0 2rem;

  background-color: ${COLORS.WHITE};
  border-bottom: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.PALE_WHITE};
`

const TitleContainer = styled.div`
  display: flex;
  flex: 1;
`

const HeaderComponent = ({ title }) => (
  <Container>
    <TitleContainer>
      <Title siteTitle={title} />
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
