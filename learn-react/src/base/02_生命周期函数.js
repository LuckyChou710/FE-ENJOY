import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '我是Header组件',
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.text}</h2>
      </div>
    )
  }
  static getDerivedStateFromProps(props, state) {
    console.log('props : ', props, 'state : ', state)
    return {
      nextText: '我是修改后的Header组件',
    }
  }
  componentDidMount() {
    console.log('Header组件的componentDidMount方法执行了')
  }
  componentDidUpdate() {
    console.log('Header组件的componentDidUpdate方法执行了')
  }
  componentWillUnmount() {
    console.log('Header组件的componentWillUnmount方法执行了')
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
        <h2>我是Footer</h2>
      </div>
    )
  }
  componentDidMount() {
    console.log('Footer组件的componentDidMount方法执行了')
  }
  componentDidUpdate() {
    console.log('Footer组件的componentDidUpdate方法执行了')
  }
  componentWillUnmount() {
    console.log('Footer组件的componentWillUnmount方法执行了')
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: true,
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ show: !this.state.show })}>
          {this.state.show ? 'hidden' : 'show'}
        </button>
        {this.state.show && <Header name={'chou'} />}
        {this.state.show && <Footer />}
      </div>
    )
  }

  // handleClick() {
  //   this.setState({ show: !this.state.show })
  // }
}
