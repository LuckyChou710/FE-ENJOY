import React, { Component } from 'react'

export default class Example extends Component {
  /*   constructor(props) {
    super(props)

    this.state = {
      username: '',
    }
  }

  render() {
    return (
      <>
        <input
          name="username"
          value={this.state.username}
          onChange={(e) => this.handleUsernameChange(e)}
        />
        <button onClick={() => this.showName()}>GET NAME</button>
      </>
    )
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value,
    })
  }

  showName() {
    alert(`U NAME IS ${this.state.username}`)
  } */

  constructor(props) {
    super(props)

    this.usernameRef = React.createRef()
  }

  render() {
    return (
      <>
        {/* ref 后可以等于 字符串/对象/函数 */}
        {/* 方式一 字符串 */}
        {/* 此方法不推荐 在后续版本中可能会被移除 */}
        <input ref="usernameRef" />

        {/* 方式二 对象 */}
        <input ref={this.usernameRef} />

        {/* 方式三 函数 */}
        <input ref={(_usernameRef) => (this._usernameRef = _usernameRef)} />
        <button onClick={() => this.showName()}>GET NAME</button>
      </>
    )
  }

  showName() {
    console.log(this)
  }
}
