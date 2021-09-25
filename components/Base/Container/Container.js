import React from 'react'

const Container = ({ children, fullWidth }) => {
  return (
    <div
      className={`${fullWidth ? 'md:px-0 lg:px-0' : ''} flex flex-col items-center justify-center w-full p-5 pt-20 md:p-8 lg:p-20 text-center md:text-left md:justify-start md:items-start`}
    >
      {children}
    </div>
  )
}

export default Container
