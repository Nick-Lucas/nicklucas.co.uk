import React from 'react'
import PropTypes from 'prop-types'

import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'
import { Location } from '@reach/router'

// Code modified from: https://divdev.io/animating-gatsby-pt/

const DURATION = 200

const TRANSITION_STYLES = {
  entering: {
    position: 'absolute',
    marginTop: '2rem',
    opacity: 0,
  },
  entered: {
    transition: `all ${DURATION}ms ease-in-out`,

    marginTop: '0',
    opacity: 1,
  },
  exiting: {
    transition: `all ${DURATION}ms ease-in-out`,

    marginTop: '2rem',
    opacity: 0,
  },
}

class Transition extends React.PureComponent {
  render() {
    return <Location>{this.renderTransitioner}</Location>
  }

  renderTransitioner = ({ location }) => {
    const { children } = this.props

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: DURATION,
            exit: DURATION,
          }}
          component={null}
        >
          {status => (
            <div
              style={{
                ...TRANSITION_STYLES[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

Transition.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Transition
