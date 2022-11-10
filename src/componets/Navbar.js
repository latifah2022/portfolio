import React from 'react'
//import { navigation } from '../data';
//import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <div>
      <ul className='flex'>
        <li className='px-3 cursor-pointer capitalize font-medium text-gray-500 hover:scale-100 duration-200'>Home</li>
        <li  className=''>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar