/* eslint-disable */

import PropTypes from 'prop-types'
import React from 'react'

import Background from 'react-social-icons/dist/background.js'
import Icon from 'react-social-icons/dist/icon.js'
import Mask from 'react-social-icons/dist/mask.js'
import { keyFor } from 'react-social-icons/dist/networks.js'
import { socialIcon, socialContainer, socialSvg } from 'react-social-icons/dist/styles.js'

function getNetworkKey(props) {
  return props.network || keyFor(props.url)
}

function SocialIcon(props) {
  const { url, network, bgColor, fgColor, className, label, ...rest } = props
  const networkKey = getNetworkKey({ url, network })

  const outerProps = {
    className: 'social-icon' + (className ? ' ' + className : ''),
    style: { ...socialIcon, ...props.style },
    'aria-label': label || networkKey,
  }

  const icon = (
    <div className="social-container" style={socialContainer}>
      <svg className="social-svg" style={socialSvg} viewBox="0 0 64 64">
        <Background />
        <Icon networkKey={networkKey} fgColor={fgColor} />
        <Mask networkKey={networkKey} bgColor={bgColor} />
      </svg>
    </div>
  )

  if (!url) {
    return (
      <div {...rest} {...outerProps}>
        {icon}
      </div>
    )
  }

  return (
    <a {...rest} {...outerProps} href={url}>
      {icon}
    </a>
  )
}

SocialIcon.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  label: PropTypes.string,
  network: PropTypes.string,
  url: PropTypes.string,
}

export default SocialIcon
