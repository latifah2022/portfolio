import React from 'react';
import Image from '../images/hero/nn.webp';

const About = () => {
  return (
    <section className='section bg-gray-900 text-cyan-500' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image} alt=''/>
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
          <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Latifah zawedde
              </h2>
              <p className='mb-4 '>
                Jounior Software Engineer
              </p>
              <hr className='mb-8 opacity-6' />
              <p className='mb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
                earum dolorum quo consequatur rem nihil hic ducimus rerum soluta
                neque harum velit molestiae dignissimos distinctio dolorum nisi
                labore culpa nihil. <br />
                <br />
                Qui doloremque quod sit accusantium unde totam inventore
                cupiditate ratione esse maxime eum recusandae ducimus.
              </p> 
            </div>
            {/* <button id='contact' className='btn btn-md bg-gray-500 my-4 hover:bg-secondary-hover transition-all'>
              Contact me
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About