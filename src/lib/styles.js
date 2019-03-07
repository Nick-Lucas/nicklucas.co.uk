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
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html {
    font-family: 'Open Sans';
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
`
