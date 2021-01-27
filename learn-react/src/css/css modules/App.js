import React from 'react'
import './css/header.css'
import FooterStyle from './css/footer.module.css'

function Header() {
  return (
    <>
      <div className="header">我是Header</div>
    </>
  )
}

function Footer() {
  return (
    <>
      <div className={FooterStyle.footer}>我是Footer</div>
    </>
  )
}

export default function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}
