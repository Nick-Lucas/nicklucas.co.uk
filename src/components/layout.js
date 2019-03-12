/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Header } from './Header'
import styled from 'styled-components'
import { GlobalStyle, SHADOWS } from 'lib/styles'

const Page = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 50rem;
  max-width: 50rem;

  margin: 0 auto;
  padding: 1rem;

  ${SHADOWS.LOW}
`

const Layout = ({ children }) => (
  <Page>
    <GlobalStyle />
    <Header />
    <Body>
      <main>{children}</main>
      {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> */}
    </Body>
  </Page>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
