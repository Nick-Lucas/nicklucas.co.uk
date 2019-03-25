import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Title } from './Title'
import { COLORS, generateMobileOveride } from 'lib/styles'
import { Item } from './Item'
import { Location } from '@reach/router'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
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

class HeaderInner extends React.PureComponent {
  renderItem = (icon, label, route = '/') => {
    const { location } = this.props

    if (route.slice(route.length - 1) !== '/') {
      route += '/'
    }

    return (
      <Item
        icon={icon}
        label={label}
        url={route}
        current={location && location.startsWith(route)}
      />
    )
  }

  render() {
    return (
      <Container>
        <InnerContainer>
          <TitleContainer>
            <Title />
          </TitleContainer>

          <ItemsContainer>
            {this.renderItem('favorite', 'Projects', '/projects')}
            {this.renderItem('people', 'Past Roles', '/roles')}
            {this.renderItem('notes', 'Blog', '/blog')}
          </ItemsContainer>
        </InnerContainer>
      </Container>
    )
  }
}

HeaderInner.propTypes = {
  location: PropTypes.string.isRequired,
}

export const Header = () => (
  <Location>
    {({ location }) => <HeaderInner location={location.pathname} />}
  </Location>
)
