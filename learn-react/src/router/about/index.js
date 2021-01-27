import React from 'react'
import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom'
import Culture from './culture'
import Address from './address'
// import routes from '../router'
import { renderRoutes } from 'react-router-config'
export default function About(props) {
  console.log('culture组件:', props.route.routes)
  return (
    <BrowserRouter>
      <p>About</p>
      <Link to="/about/culture">文化</Link>
      <NavLink to="/about/address">地址</NavLink>

      {/* <Route path="/about/culture" component={Culture}></Route>
      <Route path="/about/address" component={Address}></Route> */}

      {renderRoutes(props.route.routes)}

    </BrowserRouter>
  )
}
