/** 
 * useEffect
 * 可以接收两个参数
 * 第一个参数 
 * 函数形式 可实现等同于componentDidMount shouldComponentUpdate componentWillUnmount
 * 并且可以返回一个函数 用来消除副作用 类似componentWillUnmount 可以做一些事件的解绑 定时器的关闭等
 * 第二个参数 数组 状态依赖项 实现性能优化 如果传[] 则等同于不开启shouldComponentUpdate
*/

import React, { useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('chou')

  /* 基础用法 */
  useEffect(() => {
    document.title = count
  })

  /* 返回一个函数 来消除副作用 */
  useEffect(() => {
    console.log('事件监听')

    return () => {
      console.log('取消监听')
    }
  })


  /** 
   * 性能优化 
   * 第二个参数 数组 状态依赖
  */
  useEffect(() => {
    console.log('重新渲染')
  }, [count])

  /* 传入一个空的数组 [] 就是componentDidMount和componentWillUnmount */

  useEffect(() => {
    console.log('componentDidMount和componentWillUnmount执行了')
  }, [])

  return (
    <div>
      <p>当前计数 : {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <p>当前使用者 : {name}</p>
      <button onClick={() => setName(name + '~')}>CHANGE NAME</button>
    </div>
  )
}
