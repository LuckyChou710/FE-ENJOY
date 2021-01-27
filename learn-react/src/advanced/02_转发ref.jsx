import React, { Component } from 'react'

const MyFuncButton = React.forwardRef((props, ref) => (
  <button ref={ref} {...props}>
    {props.children}
  </button>
))

class MyClassButton extends Component {
  render() {
    return (
      <>
        <button ref={this.props.btnRef} onClick={() => this.props.onClick()}>
          {this.props.children}
        </button>
      </>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {}
  }

  render() {
    return (
      <div>
        <MyFuncButton ref={this.myRef} onClick={() => this.handleFuncClick()}>
          My Function Button
        </MyFuncButton>
        {/* 通过回调将ref传给子组件 */}
        <MyClassButton
          ref={(el) => (this.btnRef = el)}
          onClick={() => this.handleClassClick()}
        >
          My Class Button
        </MyClassButton>
      </div>
    )
  }

  handleFuncClick() {
    console.log(this.myRef.current)
  }

  handleClassClick() {
    console.log(this.btnRef)
  }
}
