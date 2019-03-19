/* Adjusted to give override background and text colour */
import { createGlobalStyle } from 'styled-components'

export const COLORS = {
  DARK: '#272822',
  DARK_TINT: '#49483E',
  GREY: '#75715e',
  BLUE: '#16b1d0',
  PURPLE: '#9c66ff',
  PALE_WHITE: '#d2d0c6',
  WHITE: '#ffffff',
  OFF_WHITE: '#efefef',
  RED: '#f9065f',
  RED_DARK: '#960050',
  YELLOW: '#c3b322',
}

const generateShadow = ({
  distance = 2,
  blur = 5,
  spread = 0,
  colour = '#999999',
}) => `
  -webkit-box-shadow: ${distance}px ${distance}px ${blur}px ${spread}px ${colour};
  -moz-box-shadow: ${distance}px ${distance}px ${blur}px ${spread}px ${colour};
  box-shadow: ${distance}px ${distance}px ${blur}px ${spread}px ${colour};
`

export const SHADOWS = {
  LOW: generateShadow({
    distance: 1,
    blur: 3,
  }),
  MEDIUM: generateShadow({
    distance: 4,
    blur: 10,
  }),
  HIGH: generateShadow({
    distance: 6,
    blur: 20,
  }),
}

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Source Sans Pro';
    font-weight: 500;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background: ${COLORS.WHITE};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Text setup */
  * {
    color: ${COLORS.DARK};
    flex-direction: column;
  }
  h1 {
    font-weight: 500;
    margin: 0;
    margin-bottom: 0.5rem;

    color: ${COLORS.BLUE};
    border-bottom-style: solid;
    border-bottom-width: 0.1rem;
  }
  h2 {
    font-weight: 500;
    margin: 0;
    margin-bottom: 0.5rem;

    color: ${COLORS.PURPLE};
    border-bottom-style: solid;
    border-bottom-width: 0.1rem;
    display: table;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0;
    margin-bottom: 0.5rem;

    color: ${COLORS.YELLOW};
  }
  h4 {
    margin: 0;
    margin-bottom: 0.5rem;
  }
  h5 {
    margin: 0;
    margin-bottom: 0.5rem;
  }
  p {
    margin: 0;
  }
  button {
    font-size: 1rem;
    cursor: pointer;
  }
`
