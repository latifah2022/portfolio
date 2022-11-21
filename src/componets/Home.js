import React from 'react'
import WomanImg from "../images/hero/heros.webp";
//import { HiArrowSmRight } from "react-icons"

const Home = () => {
  return (
    <section id='home'
    className='lg:h-[85vh] flex items-center bg-gray-900 text-cyan-500 lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
        <div className='container mx-auto h-full'>
            <div className='flex items-center h-full pt-8'>
                <div className='flex-1 flex flex-col items-center lg:items-start'>
                    <p className='text-lg text-accent text-md mb-[22px]'>
                        Hey, I'm Latifah! 👋
                    </p>
                    <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
                        Software Engineer <br /> Full Stack Developer.
                    </h1>
                    <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
                        Motivated Junior Software Engineer to provide unique perspectives
                        on how end-users interact with websites and software platforms.

                    </p>
                    <button className='btn btn-md bg-gray-500 hover:bg-secondary-hover md:btn-lg transition-all'>
                        Work with me
                    </button>
                    <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
                        <img src={WomanImg} alt='mine' />
                    </div>
                    {/* <span className="group-hover:rotate-90 duration-300">
                        <HiArrowSmRight size={25} className="ml-1" />
                     </span> */}
                </div>

            </div>
        </div>
    </section>
  )
}

export default Home;