import React from 'react'
import Navbar from './Navbar'
import NavMobile from './NavMobile'
import Socials from './Socials'
import Logo from "../images/Logo/logo.png"

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-cyan-500 bg-gray-600">
        <div>
            <img className='flex w-30 h-10' src={Logo} alt='' />
        </div>
        <div className='hidden lg:block'>
            <Navbar />
        </div>
        <div className='hidden lg:block' >
            <Socials />
        </div>

        <div className='lg:hidden'>
            <NavMobile />
        </div>


    </div>
  )
}

export default Header;