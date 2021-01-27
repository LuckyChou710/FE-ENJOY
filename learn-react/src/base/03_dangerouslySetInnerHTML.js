import React, { Component } from 'react'

export default class Example extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tag: '<h2>HELLO REACT</h2>',
    }
  }

  render() {
    return (
      <>
        {/* 页面中显示 <h2>HELLO REACT</h2> */}
        {this.state.tag}  

        {/* 页面正确解析h2标签 */}
        <div dangerouslySetInnerHTML={{ __html: this.state.tag }}></div>
      </>
    )
  }
}
