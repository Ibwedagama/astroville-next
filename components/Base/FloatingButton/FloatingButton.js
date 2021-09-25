import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingButton = () => {
  const [isHovered, setIsHovered] = useState(false)
  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <>
      <section
        className="
        absolute z-10 bottom-0 w-full py-5 flex items-center justify-center gap-4 bg-brand-pink
        md:hidden
        "
      >
        <i className="text-3xl text-white font-semibold">
          <FaWhatsapp />
        </i>

        <p className="text-white font-display font-semibold">Hubungi Kami!</p>
      </section>

      <section className="hidden absolute z-10 bottom-0 w-full justify-end pointer-events-none md:flex">
        <div
          className="h-16 flex items-center justify-center mr-8 mb-8 cursor-pointer"
          onMouseOver={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p
            className={`${
              isHovered
                ? 'opacity-100 w-auto transition-all duration-300  ease-in-out'
                : 'opacity-0'
            } 
            text-white font-display font-semibold h-full bg-brand-pink flex 
            items-center justify-center pl-6 rounded-bl-full rounded-tl-full`}
          >
            Hubungi Kami!
          </p>
          <i
            className={`
            text-4xl text-white font-semibold w-16 h-full bg-brand-pink flex 
            justify-center rounded-full rounded-bl-none items-center 
            ${isHovered ? 'rounded-tl-none transition-all duration-150 ease-in-out' : ''}
            `}
          >
            <FaWhatsapp />
          </i>
        </div>
      </section>
    </>
  )
}

export default FloatingButton
