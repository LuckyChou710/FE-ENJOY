import React, { Component } from 'react'
import store from './store'
import { addCount, subCount } from './store/actionCreators'

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = store.getState()
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.handleAddClick()}>ADD</button>
        <button onClick={() => this.handleSubClick()}>SUB</button>
      </div>
    )
  }

  handleAddClick() {
    const action = addCount()
    store.dispatch(action)
  }
  handleSubClick() {
    const action = subCount()
    store.dispatch(action)
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()))
  }
}
