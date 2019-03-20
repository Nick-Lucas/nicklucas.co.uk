import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Spacer = styled.div`
  ${({ size }) => {
    let val = 0.5
    if (size === 'medium') {
      val = 1
    } else if (size === 'large') {
      val = 2
    }
    return `
      width: ${val}rem;
      height: ${val}rem;
    `
  }}
`

Spacer.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Spacer.defaultProps = {
  size: 'small',
}
