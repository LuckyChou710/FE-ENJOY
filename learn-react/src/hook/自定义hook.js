/** 
 * 自定义hook
 * 必须以use开头
*/

import React, { useEffect, useState } from 'react'

const useLogger = (componentName) => {
  useEffect(() => {
    console.log(`${componentName}组件被创建了`)

    return () => {
      console.log(`${componentName}组件被销毁了`)
    }
  })
}

const Header = () => {
  useLogger('Header')

  return (
    <div>
      <h2>Header</h2>
    </div>
  )
}

const Footer = () => {
  useLogger('Footer')

  return (
    <div>
      <h2>Footer</h2>
    </div>
  )
}

export default function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? 'hidden' : 'show'}</button>
      {show && <Header />}
      {show && <Footer />}
    </div>
  )
}
