import React from 'react'
import Link from 'next/link'
import BrandLogo from '../../Base/Logo/BrandLogo'
import NAV_LINK from '../../../static/navLink'
import { BiX } from 'react-icons/bi'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'

const Sidebar = ({ isOpen, handleSidebarToggle }) => {
  return (
    <div
      className={
        `absolute w-screen h-screen inset-0 bg-brand-dark z-20 flex flex-col p-8 pt-0 transition-margin duration-300 ease-in-out ${isOpen ? '' : '-mx-100'}`
      }
    >
      <div className="flex justify-between w-full border-b-2 border-opacity-50 py-5 mb-16">
        <BrandLogo width="80px" height="30px" />

        {/* Hamburger Menu */}
        <button className="inline-flex bg-transparent" onClick={handleSidebarToggle}>
          <BiX className="text-4xl text-white" />
        </button>
      </div>

      <ul className="flex flex-col gap-6 w-full text-center mb-8">
        {NAV_LINK.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>
              <a className="font-display font-medium text-xl text-white">{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center w-full">
        <p className="font-display font-medium text-xl text-white">Follow Us :</p>
        <div>
          <button className="p-4">
            <AiOutlineInstagram className="text-2xl text-white" />
          </button>
          <button className="p-4">
            <AiOutlineYoutube className="text-2xl text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
