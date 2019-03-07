/* Adjusted to give override background and text colour */
import { createGlobalStyle } from 'styled-components'

export const COLORS = {
  BACKGROUND: '#272822',
  TINT: '#49483E',
  GREY: '#75715e',
  BLUE: '#66d9ef',
  PURPLE: '#ae81ff',
  WHITE: '#f8f8f2',
  RED: '#f92672',
  RED_DARK: '#960050',
  YELLOW: '#e6db74',
}

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Source Sans Pro';
    font-weight: 500;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background: ${COLORS.BACKGROUND};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Text setup */
  * {
    color: ${COLORS.WHITE};
  }
  h1 {
    font-weight: 500;
  }
  h2 {
    font-weight: 500;
  }
  h3 {
    font-weight: 500;
  }
`
