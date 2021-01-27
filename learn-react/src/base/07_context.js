import React, { Component } from 'react'

const myContext = React.createContext({
  name: 'chou',
  theme: 'light',
})

function Header() {
  return (
    <div>
      <myContext.Consumer>
        {(value) => {
          console.log(value)
          return (
            <div>
              <Nav />
              {value.theme}
            </div>
          )
        }}
      </myContext.Consumer>
    </div>
  )
}
class Nav extends Component {
  static contextType = myContext
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return <div>{this.context.theme}</div>
  }
}

export default class Example extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light',
    }
  }

  render() {
    return (
      <div>
        <myContext.Provider value={this.state}>
          <Header />
          <button onClick={() => this.handleThemeChange()}>CHANGE THEME</button>
        </myContext.Provider>
      </div>
    )
  }

  handleThemeChange() {
    this.setState({
      theme: 'dark',
    })
  }
}
