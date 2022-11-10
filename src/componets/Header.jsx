import React from 'react'
import Navbar from './Navbar'
import NavMobile from './NavMobile'

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black">
        <div>
            <h1 className='text-4xl font-sin ml-2'>Latifah</h1>
        </div>
        <div className='hidden lg:block'>
            <Navbar />
        </div>
        <div>
            <NavMobile />
        </div>


    </div>
  )
}

export default Header