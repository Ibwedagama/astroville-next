import React from 'react'
import Navbar from '../../Layout/Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
