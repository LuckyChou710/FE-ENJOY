import Address from '../about/address'
import Culture from '../about/culture'

const { default: About } = require('../about')
const { default: Home } = require('../home')
const { default: Profile } = require('../profile')

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about/address',
        component: Address
      },
      {
        path: '/about/culture',
        component: Culture
      }
    ]
  },
  {
    path: '/profile',
    component: Profile,
  },
]

export default routes
