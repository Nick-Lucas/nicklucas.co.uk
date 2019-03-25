import React, { PureComponent } from 'react'
import { navigateTo } from 'gatsby'

export default class extends PureComponent {
  componentDidMount() {
    setTimeout(() => {
      navigateTo(this.props.to)
    }, 500)
  }

  render() {
    return <p>Redirecting you...</p>
  }
}
