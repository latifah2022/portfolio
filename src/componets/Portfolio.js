import React from 'react';
import Projects from './Projects';


const Portfolio = () => {
    return (
        <section>
            <div className='container p-5 bg-gray-700' id='portfolio'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                        Portfolio
                    </h2>
                    <p className='subtitle'>
                        My latest Work

                    </p>
                </div>
                <Projects />
            </div>
        </section>
  )
}

export default Portfolio;