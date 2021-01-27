/* eslint-disable import/no-anonymous-default-export */
import { ADD_COUNT_VALUE, SUB_COUNT_VALUE } from './actionTypes'
const defaultState = {
  count: 0,
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case ADD_COUNT_VALUE:
      newState.count++
      return newState
    case SUB_COUNT_VALUE:
      newState.count--
      return newState
    default:
      return state
  }
}
