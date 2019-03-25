/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Transition from './Transition'
import styled from 'styled-components'

import { Header } from './Header'
import { generateMobileOveride } from 'lib/styles'
import { GlobalStyle } from 'lib/GlobalStyle'

const Page = styled.div`
  display: block;
  /* flex-direction: column; */

  min-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: 50rem;

  margin: 0 auto;
  padding: 2rem;
  padding-top: 1rem;

  ${generateMobileOveride(`padding: 0.5rem;`)}
`

const Layout = ({ children }) => (
  <Page>
    <GlobalStyle />
    <Header />

    <Transition>
      <Body>
        <main>{children}</main>
        {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> */}
      </Body>
    </Transition>
  </Page>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
