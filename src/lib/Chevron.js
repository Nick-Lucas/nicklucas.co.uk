import React from 'react'
import styled from 'styled-components'

import { Icon } from 'lib/Icon'

const StyledChevron = styled(Icon)`
  align-self: center;
  font-size: 1.3rem;
`

export const Chevron = () => {
  return <StyledChevron icon="arrow_forward_ios" />
}
