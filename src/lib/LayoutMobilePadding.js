import styled from 'styled-components'

import { generateMobileOveride } from 'lib/styles'

export const LayoutMobilePadding = styled.div`
  display: flex;
  flex: 1;

  margin: 0;
  ${generateMobileOveride(`
    margin: 0 0.5rem;
  `)}
`
