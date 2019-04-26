import React from 'react'
import PropTypes from 'prop-types'
import Transition from './Transition'
import styled from 'styled-components'

import { Header } from './Header'
import { generateMobileOveride } from 'lib/styles'
import { GlobalStyle } from 'lib/GlobalStyle'

const Page = styled.div`
  display: flex;

  align-items: center;

  min-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;

  width: 100%;
  max-width: 50rem;

  padding: 2rem;
  padding-top: 1rem;

  ${generateMobileOveride(`
    padding: 0.5rem 0;
    padding-top: 1rem;
  `)}
`

const Footer = styled.footer`
  padding: 1rem;
  padding-top: 0;
`

const Layout = ({ children }) => (
  <Page>
    <GlobalStyle />
    <Header />

    <Body>
      <Transition>
        <main>{children}</main>
      </Transition>

      <Footer>
        <p>© {new Date().getFullYear()}, Nick Lucas</p>
        <h5>
          I designed and built site is built with{' '}
          <a href="https://reactjs.org/">React</a> and{' '}
          <a href="https://www.gatsbyjs.org/">GatsbyJS</a>, it's fully open
          source{' '}
          <a href="https://github.com/Nick-Lucas/nicklucas.co.uk">on GitHub</a>.
        </h5>
      </Footer>
    </Body>
  </Page>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
