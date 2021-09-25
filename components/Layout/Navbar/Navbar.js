import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Sidebar from '../Sidebar/Sidebar'
import BrandLogo from '../../Base/Logo/BrandLogo'
import { BiMenu } from 'react-icons/bi'

import NAV_LINK from '../../../static/navLink'

const Navbar = () => {
  const [isSidebar, setSidebar] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      setSidebar(false)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
  }, [])

  const handleSidebarToggle = () => {
    setSidebar(!isSidebar)
  }

  return (
    <>
      <header
        className="
        fixed px-5 w-full bg-transparent z-10
        md:px-8 lg:px-20
        "
      >
        <nav className="flex py-5 border-b-2 justify-between border-opacity-50">
          {/* Astroville Logo */}
          <BrandLogo type="light" width="80px" height="30px" />

          {/* Navbar Link */}
          <ul
            className="
            hidden font-display font-medium text-white text-sm leading-0 items-center
            md:inline-flex md:gap-16
            "
          >
            {NAV_LINK.map((link) => (
              <li key={link.id}>
                <Link href={link.href}>
                  <a className="hover:text-brand-pink transition-colors duration-300 ease-in-out">{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu */}
          <button className="inline-flex bg-transparent md:hidden" onClick={handleSidebarToggle}>
            <BiMenu className="text-4xl text-white" />
          </button>
        </nav>
      </header>

      <Sidebar isOpen={isSidebar} handleSidebarToggle={handleSidebarToggle} />
    </>
  )
}

export default Navbar
