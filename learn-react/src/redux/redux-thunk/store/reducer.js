/* eslint-disable import/no-anonymous-default-export */
import { GET_NAME_VALUE } from './actionTypes'
const defaultState = {
  name: null,
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case GET_NAME_VALUE:
      newState.name = action.name
      return newState
    default:
      return state
  }
}
