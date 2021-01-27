/** 
 * useReducer
 * 和redux没有关系 组件之间不共享数据
 * 是useState的一种替代方案
 * 对于复杂的业务 使用useReducer比useState会有更好的可读性
*/

import React, { useReducer } from 'react'

const ADD_COUNT_VALUE = 'ADD_COUNT_VALUE'
const SUB_COUNT_VALUE = 'SUB_COUNT_VALUE'

const myReducers = (state, action) => {
  switch (action.type) {
    case ADD_COUNT_VALUE:
      return {
        ...state,
        count: state.count + 1,
      }
    case SUB_COUNT_VALUE:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

const Count = () => {
  const [state, dispatch] = useReducer(myReducers, { count: 0 })

  return (
    <div>
      <p>当前计数：{state.count}</p>
      <button onClick={() => dispatch({ type: ADD_COUNT_VALUE })}>+1</button>
      <button onClick={() => dispatch({ type: SUB_COUNT_VALUE })}>-1</button>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Count />
      <Count />
    </>
  )
}
