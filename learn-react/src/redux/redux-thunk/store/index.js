import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware))

export default createStore(reducer, enhancer)
