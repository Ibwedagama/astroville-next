import React from 'react'
import Navbar from '../../Layout/Navbar/Navbar'
import Footer from '../../Layout/Footer/Footer'
import FloatingButton from '../../Base/FloatingButton/FloatingButton'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingButton/>
    </>
  )
}

export default Layout
