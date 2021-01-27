/* eslint-disable import/no-anonymous-default-export */
import { GET_NAME_VALUE } from './actionTypes'
const defaultState = {
  name: null,
}

export default (state = defaultState, action) => {

  switch (action.type) {
    case GET_NAME_VALUE:
      const newState = JSON.parse(JSON.stringify(state))
      newState.name = action.name
      return newState
    default:
      return state
  }
}
