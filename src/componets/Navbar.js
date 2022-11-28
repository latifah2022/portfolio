import React from 'react'
import { navigation } from '../data';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <div>
      <ul className='flex'>
        {navigation.map((item, index) => {
          return (
            <li className='px-2 cursor-pointer capitalize font-small  hover:scale-105 '>
              <Link
              to={item.href}
              activeClass='active'
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className='transition-all duration-300'>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Navbar;