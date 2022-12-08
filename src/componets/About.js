import React from 'react';
import Image from '../images/hero/mine.png';

const About = () => {
  return (
    <section className='section  bg-gray-900  text-cyan-500' id='about'>
       <h1 className='flex  justify-center'> About Me</h1>
        <div className='container flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image} alt=''/>
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex  m-2 flex-col'>
              <h4 className='text-3xl lg:text-3xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-10 before:-top-[2rem] before:hidden before:lg:block'>
                Latifah zawedde
              </h4>
              <p className='mb-4 text-2x1'>
                Jounior Software Engineer
              </p>
              <hr className='mb-8 opacity-6' />
              <div className='lg:text-2xl'>
                <p className='mb-8 text-xl'>
                  Hello, I am a Junior Software Engineer currently based in Los Angeles, CA but also welcoming remote opportunites. 
                  <br />
                  <br />
                  I have recently just complete a Software Engineering certificate from the University of California Los Angeles (UCLA) Extension program.
                  <br />
                  And even though I learn a number of skillsets during my course like my SQL, NoSQL, Data Structures,Web Development, Frontend and Backend.
                  <br /> 
                  <br />
                  I am focusing on Full Stack Development becuse it helps me put all my soft skils to work like creativity, teamwork,
                  willingness to learn,time management, problem solving, decision making, conflict resolution, Effective comunication, Responsibility.
                </p> 
              </div>
              
            </div>
            <a href='#contact' className='btn text-2xl p-2 rounded-2xl bg-black my-3  transition-all'> Contact me</a>
          </div>
        </div>
      
    </section>
  )
}

export default About