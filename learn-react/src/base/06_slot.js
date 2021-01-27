import React, { Component, Fragment } from 'react'

class TabBar extends Component {
  render() {
    const { leftSlot, rightSlot } = this.props

    return (
      <div>
        {/* <div className="tab-bar">
          <Fragment className="tab-bar-img">
            {this.props.children[0]}
          </Fragment>
          <Fragment className="tab-bar-title">
            {this.props.children[1]}
          </Fragment>
          <Fragment className="tab-bar-more">
            {this.props.children[2]}
          </Fragment>
        </div> */}

        <Fragment>{leftSlot}</Fragment>
        <Fragment>{rightSlot}</Fragment>
      </div>
    )
  }
}

export default class Example extends Component {
  render() {
    return (
      <>
        {/* <TabBar>
          <span>头像</span>
          <span>标题</span>
          <span>更多</span>
        </TabBar> */}
        <TabBar leftSlot={<span>left</span>} rightSlot={<span>right</span>} />
      </>
    )
  }
}
