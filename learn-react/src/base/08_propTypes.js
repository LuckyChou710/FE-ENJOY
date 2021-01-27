import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Address extends Component {
  static defaultProps = {
    address: 'hangzhou',
  }

  // 注意 这里的propTypes 是小驼峰
  static propTypes = {
    address: PropTypes.number.isRequired,
  }

  render() {
    return (
      <>
        <p>{this.props.address}</p>
      </>
    )
  }
}

export default class Example extends Component {
  render() {
    return (
      <div>
        <Address address={'shanghai'} />
      </div>
    )
  }
}
