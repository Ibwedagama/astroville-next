import React from 'react'

const Button = ({ label, icon }) => {
  return (
    <>
      <button className="flex items-center gap-4 p-4 text-white bg-brand-dark hover:bg-brand-pink transition-color duration-150 ease-in-out">
        {label}

        <i>{icon}</i>
      </button>
    </>
  )
}

export default Button
