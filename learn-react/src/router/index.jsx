import React, { Component } from 'react'
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  withRouter,
} from 'react-router-dom'
import Home from './home'
import Profile from './profile'
import About from './about'
import Article from './article'
import { renderRoutes } from 'react-router-config'
import routes from './router'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 1,
      profile: {
        name: 'chou',
        age: 18,
      },
    }
  }

  render () {
    
    console.log("App组件:",this.props)

    return (
      <div>
        <BrowserRouter>
          <Link to="/">首页</Link>
          <NavLink
            to={{
              pathname: '/profile',
              state: this.state.profile,
            }}
          >
            我的
          </NavLink>
          <Link to="/about">关于</Link>
          <Link to={`/article/${this.state.id}`}>文章</Link>

          {/* <Route exact path="/" component={Home}></Route>
          <Route
            path="/profile"
            component={Profile}
          ></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/article/:id" component={Article}></Route> */}

          {renderRoutes(routes)}
        </BrowserRouter>
      </div>
    )
  }
}

const MyApp = withRouter(App)

class _AppWrapper extends Component {
  render() {
    return (
      <BrowserRouter>
        <MyApp />
      </BrowserRouter>
    )
  }
}

export default _AppWrapper

// export default App
