import React from 'react'
import WomanImg from "../images/hero/heros.png";
//import { HiArrowSmRight } from "react-icons"

const Home = () => {
  return (
    <section id='home'
    className='lg:h-[85vh] flex items-center bg-gray-900 text-cyan-400 lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
        <div className='container mx-auto h-full'>
            <div className='flex items-center h-full pt-8'>
                <div className='flex-1 flex flex-col m-5 items-center lg:items-start'>
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
                    <button  href='contact' className='btn btn-md p-3 rounded-2xl bg-black hover:bg-secondary-hover md:btn-lg transition-all'>
                        Work with me
                    </button>
                    
                </div>
                <img  className='hidden lg:flex flex-1  rounded-2xl justify-end items-end h-full' src={WomanImg} alt='mine' />

            </div>
        </div>
    </section>
  )
}

// const styles= {
//     imageWidth: {
//       width: 100,
//     },
// };

export default Home;

//className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'