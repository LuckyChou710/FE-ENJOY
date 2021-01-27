import React, { Component } from 'react'

export default class Example extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isShow: true,
      text: 'HIDE',
    }
  }

  render() {
    return (
      <>
        {this.state.isShow && <div>NOW U SEE ME</div>}
        <div style={{ display: this.state.isShow ? 'block' : 'none' }}>
          NOW U SEE ME
        </div>
        <button onClick={() => this.handleHideClick()}>
          {this.state.text}
        </button>
      </>
    )
  }

  handleHideClick() {
    this.setState({
      isShow: !this.state.isShow,
      text: this.state.isShow ? 'SHOW' : 'HIDE',
    })
  }
}
