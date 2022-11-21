import React from 'react';
import {social } from "../data"
import Logo from "../images/Logo/logo.png";

const Footer = () => {
    return (
        <footer className='bg-gray-700 py-3 h-25'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                    <div className='flex space-x-6 items-center justify-center'>
                        {social.map((item, index) => {const { href, icon } = item;
                            return (
                                <a className='text-accent text-base' href={href} key={index}>
                                    {icon}
                                </a>
                            );
                        })}
                    </div>
                    <div>
                        <img className='flex w-30 h-20' src={Logo} alt='logo' />
                    </div>
                    <p className='text-paragraph opacity-80 text-[15px]'>
                        &copy; 2022  Quin Latifah Zawedde. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;