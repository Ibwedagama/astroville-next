import React from 'react'

const Container = ({ children, fullWidth }) => {
  return (
    <div
      className={`${fullWidth ? 'md:px-0 lg:px-0' : ''} 
      flex flex-col items-center justify-center text-center w-full px-5 py-5
      md:px-8 md:pt-20 lg:px-20 lg:pt-20 md:text-left md:justify-start md:items-start`}
    >
      {children}
    </div>
  )
}

export default Container
