/**
 * useState
 * 数组解构
 * 可以定义多个状态
 * 同个状态不同组件之间互不影响
 * 可以传入函数
 */

import React, { useState } from 'react'

const Count = () => {
  const [count, setCount] = useState(0)

  // setCount会进行合并
  function addCountSync() {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  function addCountASync() {
    setCount((preState) => preState + 1)
    setCount((preState) => preState + 1)
    setCount((preState) => preState + 1)
    setCount((preState) => preState + 1)
  }

  return (
    <div>
      <p>当前计数 : {count}</p>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
      <button onClick={() => addCountSync()}>Add Count Sync</button>
      <button onClick={() => addCountASync()}>Add Count ASync</button>
    </div>
  )
}

export default function App() {
  const [list, setList] = useState([])

  return (
    <div>
      {/* 两个Count之间的count互不影响 */}
      <Count />
      <Count />
      <p>当前列表 : </p>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item.count}</li>
        })}
      </ul>
      <button onClick={() => setList([...list, { count: 1 }])}>Add List</button>
    </div>
  )
}
