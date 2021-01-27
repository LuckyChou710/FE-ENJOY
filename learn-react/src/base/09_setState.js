import React, { Component } from 'react'

export default class Example extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'chou',
      age: 18,
      count: 0,
    }
  }

  render() {
    return (
      <>
        <p>name : {this.state.name}</p>
        <p>age : {this.state.age}</p>
        <p>count : {this.state.count}</p>
        <button onClick={() => this.handleNameChange()}>change name</button>
        <button onClick={() => this.handleCountAdd()}>Add Count</button>
      </>
    )
  }

  handleNameChange() {
    console.log(this.state.name)
    this.setState(
      {
        name: 'luckychou',
      },
      () => {
        console.log('我是最新的数据哦,name : ', this.state.name)
      }
    )
    console.log(this.state.name)
  }

  handleCountAdd() {
    /*     this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 1,
    }) */
    /* setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      })
    })
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      })
    })
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      })
    }) */
    this.setState(() => {
      return {
        count: this.state.count + 1,
      }
    })
    this.setState(() => {
      return {
        count: this.state.count + 1,
      }
    })
    this.setState(() => {
      return {
        count: this.state.count + 1,
      }
    })
  }
}
