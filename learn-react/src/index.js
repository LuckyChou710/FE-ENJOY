import React from 'react'
import ReactDOM from 'react-dom'

/* 基础部分 */
// import App from './base/01_组件通信'
// import App from './base/02_生命周期函数'
// import App from './base/03_dangerouslySetInnerHTML'
// import App from './base/04_ref'
// import App from './base/05_v-show'
// import App from './base/06_slot'
// import App from './base/07_context'
// import App from './base/08_propTypes'
// import App from './base/09_setState'
// import App from './base/10_高阶组件'

/* redux部分 */
// import App from './redux/react-redux/Counter_redux'
// import App from './redux/react-redux/Counter_react-redux'
// import App from './redux/redux-thunk/GetName'
// import App from './redux/redux-saga/GetName'
import App from './redux/rematch/View'

/* react css部分 */
// import App from './css/css modules/App'
// import App from './css/styled-components/App'

/* react router部分 */
// import App from './router'

/* hook部分 */
// import App from './hook/useState'
// import App from './hook/useEffect'
// import App from './hook/useRef'
// import App from './hook/useContext'
// import App from './hook/useReducer'
// import App from './hook/useCallback'
// import App from './hook/useMemo'
// import App from './hook/useLayoutEffect'
// import App from './hook/自定义hook'

/* 进阶部分 */
// import App from './advanced/01_为什么是hook'
// import App from './advanced/02_转发ref'
// import App from './advanced/03_hook使用原则'

/* demo */
// import App from './demo/ScrollTab'

/* bug */
// import App from './bug/01_setState无限刷新页面'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
