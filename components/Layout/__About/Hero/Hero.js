import React from 'react'
import style from './Hero.module.scss'

const Hero = () => {
  return (
    <div
      className={`
      ${style.hero} w-full flex items-center justify-center bg-brand-gray object-cover object-center
      md:h-screen lg:h-screen
      `}
    >
      <h1 className="font-display text-5xl text-white font-medium text-center leading-normal">
        Behind the <span className="text-brand-pink">Gear</span>
      </h1>
    </div>
  )
}

export default Hero
