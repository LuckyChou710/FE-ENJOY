import React from 'react'

const NavBar = ThemeHOC(
  class extends React.Component {
    render() {
      return (
        <>
          <p style={{ color: this.props.theme }}>NavBar</p>
        </>
      )
    }
  }
)

const Message = LifeHOC(
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        username: 'chou',
      }
    }
    render() {
      return (
        <>
          <p>Message</p>
        </>
      )
    }

    componentDidMount() {
      console.log('我是原来的componentDidMount，我执行了')
    }
  }
)

// 增强props
function ThemeHOC(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <WrappedComponent theme={'red'} />
    }
  }
}

// 劫持生命周期方法 props state render方法
function LifeHOC(WrappedComponent) {
  return class extends WrappedComponent {
    constructor(props) {
      super(props)

      // 劫持到原组件的实例 并可以修改它
      console.log(this)

      // 可操作所有传入的props
      // 可操作组件的生命周期
      // 可操作组件的static方法
      // 获取refs
      // 可操作state
      // 可以渲染劫持
    }
  }
}

export default class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Message name={'chou'} />
      </>
    )
  }
}
