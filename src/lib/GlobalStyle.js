import { THEME, COLORS, SHADOWS, generateMobileOveride } from './styles'
import { createGlobalStyle } from 'styled-components'
import { CardHeader } from './Card'

export const GlobalStyle = createGlobalStyle`

html {
  font-family: 'Source Sans Pro';
  font-weight: 500;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  background-color: ${THEME.BACKGROUND}

  ${SHADOWS.LOW}
}

body {
  background: ${THEME.BACKGROUND};
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Text setup */
* {
  color: ${THEME.FONT};
  flex-direction: column;
}
h1 {
  font-weight: 500;
  margin: 0;
  margin-top: 1.5rem;
  :first-child {
    margin-top: 1rem;
    ${generateMobileOveride(`
      margin-top: 0.5rem;
    `)}
  }

  color: ${COLORS.BLUE};
  border-bottom-style: solid;
  border-bottom-width: 2px;

  ${CardHeader} & {
    margin: 0;
    color: ${COLORS.WHITE};
  }
}
h2 {
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0;
  margin-top: 1.3rem;
  :first-child {
    margin-top: 1rem;
    ${generateMobileOveride(`
      margin-top: 0.5rem;
    `)}
  }

  color: ${COLORS.PURPLE};
  border-bottom-style: solid;
  border-bottom-width: 1px;

  ${CardHeader} & {
    margin: 0;
    color: ${COLORS.WHITE};
  }
}
h3 {
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0;
  margin-top: 1rem;

  ${CardHeader} & {
    margin: 0;
    color: ${COLORS.WHITE};
  }
}
h4 {
  margin: 0;
  margin-top: 1rem;
}
h5 {
  margin: 0;
  margin-top: 1rem;
}
p {
  margin: 0;
  margin-top: 1rem;
}

ul {
  margin: 0;
  margin-top: 0.5rem;
  padding-inline-start: 1.5rem;
}
li {
  margin: 0;
  margin-top: 0.5rem;
}

button {
  font-size: 1rem;
  cursor: pointer;
}
`
