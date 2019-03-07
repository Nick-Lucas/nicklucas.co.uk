/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Header } from './Header'
// import './layout.css'
import styled from 'styled-components'
import { GlobalStyle } from 'lib/styles'

const Page = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
`

const Layout = ({ children }) => (
  <Page>
    <GlobalStyle />
    <Header />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
      {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> */}
    </div>
  </Page>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
