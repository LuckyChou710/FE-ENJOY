import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <>
        <p>我是子组件</p>
        <ul>
          {this.props.movies.map((movie, index) => {
            return (
              <li
                key={index}
                index={index}
                onClick={() => this.handleDeleteClick(index)}
              >
                {movie}
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  handleDeleteClick(index) {
    if (this.props.onDelete) {
      this.props.onDelete(index)
    }
  }
}

export default class Father extends Component {
  render() {
    return (
      <>
        <Child
          movies={['姜子牙', '哪吒', '杨戬']}
          onDelete={(index) => this.handleDeleteMovie(index)}
        />
      </>
    )
  }

  handleDeleteMovie(index) {
    console.log(`子组件要删除的是第${index}项`)
  }
}
