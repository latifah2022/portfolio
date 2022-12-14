import React from 'react';
import Projects from './Projects';


const Portfolio = () => {
    return (
        <section id='portfolio' className='section flex justify-center bg-cyan-700 '>
            <div className='container p-5 '>
                <div className='flex flex-col items-center text-center'>
                    <h1 className='section-title before:content-portfolio relative before:absolute before:opacity-40 text-4xl before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                        Projects
                    </h1>
                    {/* <p className='subtitle'>
                        My latest Work
                    </p> */}
                </div>
                <Projects />
            </div>
        </section>
  )
}

export default Portfolio;