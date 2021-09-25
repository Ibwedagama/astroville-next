import React from 'react'
import BrandLogo from '../../Base/Logo/BrandLogo'

import { BiPhone, BiMap } from 'react-icons/bi'
import { AiOutlineMail, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer
      className="
      grid grid-cols-1 px-5 pt-8 pb-32 py-12 bg-brand-dark items-center justify-items-center gap-16
      md:px-8 md:py-8 md:grid-cols-4 md:gap-8 md:items-start md:justify-items-start md:gap-y-16
      lg:px-20 lg:py-20
      "
    >
      <BrandLogo width="202" height="78" />

      <div className="flex flex-col gap-2">
        <h3 className="font-display font-semibold text-xl text-white text-center mb-4 md:text-left">Contact</h3>
        <div className="flex gap-2 items-center w-full justify-center">
          <i className="text-2xl text-white leading-loose">
            <BiPhone />
          </i>
          <p className="text-white leading-loose">1234-5678-9101</p>
        </div>
        <div className="flex gap-2 items-center w-full justify-center">
          <i className="text-2xl text-white leading-loose">
            <AiOutlineMail />
          </i>
          <p className="text-white leading-loose">mail@mail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-display font-semibold text-xl text-white text-center mb-4 md:text-left">
          Location
        </h3>
        <div className="flex gap-2 items-center w-full justify-center">
          <i className="text-2xl text-white leading-loose">
            <BiMap />
          </i>
          <p className="text-white leading-loose">Yogyakarta, Indonesia</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h3 className="font-display font-semibold text-xl text-white text-center mb-4 md:text-left">
          Follow Us
        </h3>
        <div className="flex gap-2">
          <button className="p-4">
            <AiOutlineInstagram className="text-3xl text-white" />
          </button>
          <button className="p-4">
            <AiOutlineYoutube className="text-3xl text-white" />
          </button>
        </div>
      </div>

      <div className="md:col-span-4 md:justify-self-center w-full">
        <hr className="w-full border-b-1 border-color-white mb-8" />
        <p className="text-center font-display text-white text-sm leading-loose mb-2">
          Copyright &copy; {new Date().getFullYear()} Astroville.
        </p>
        <p className="text-center font-display text-white text-sm leading-loose">All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
