import React, { Component } from 'react'
import store from './store'
import { getName } from './store/actionCreators'
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = store.getState()
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleGetName()}>SHOW NAME</button>
        <p>{this.state.name}</p>
      </div>
    )
  }

  // 监听store 重新更改页面中的state
  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()))
  }

  handleGetName () {
    console.log(123)
    store.dispatch(getName())
  }
}
