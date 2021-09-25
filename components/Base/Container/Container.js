import React from 'react'

const Container = ({ children }) => {
  return (
    <div
      className="
      flex flex-col items-center justify-center w-full p-5 pt-20 md:p-8 lg:p-20 text-center 
      md:text-left md:justify-start md:items-start"
    >
      {children}
    </div>
  )
}

export default Container
