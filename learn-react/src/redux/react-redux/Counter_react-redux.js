import React from 'react'
import store from './store'
import { addCount, subCount } from './store/actionCreators'
import { Provider, connect } from 'react-redux'

function Counter(props) {
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={() => props.handleAddClick()}>ADD</button>
      <button onClick={() => props.handleSubClick()}>SUB</button>
    </div>
  )
}

// mapStateToProps mapDispatchToProps必须是纯对象
// 这两个函数可以将state和dispatch映射到props
const mapStateToProps = (state) => ({
  count: state.count,
})

const mapDispatchToProps = (dispatch) => ({
  handleAddClick() {
    dispatch(addCount())
  },
  handleSubClick() {
    dispatch(subCount())
  },
})

const CounterWrapper = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default function App() {
  return (
    // 用Provider包裹需要共享数据的子元素
    <Provider store={store}>
      <CounterWrapper />
    </Provider>
  )
}
