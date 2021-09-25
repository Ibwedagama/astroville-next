import React from 'react'

const Button = ({ label, icon }) => {
  return (
    <>
      <button className="flex items-center gap-4 p-4 text-white bg-brand-dark">
        {label}

        <i>{icon}</i>
      </button>
    </>
  )
}

export default Button
