import React from 'react'

const Button = ({ label, icon }) => {
  return (
    <>
      <button className="py-2 px-4 flex items-center bg-brand-dark">
        {label}
        <i>
          {icon}
        </i>
      </button>
    </>
  )
}

export default Button
