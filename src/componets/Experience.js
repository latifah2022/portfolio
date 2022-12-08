import React from 'react';
import { experience } from '../data';
import Carousel from 'react-multi-carousel';

const Experience = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
  return (
    <section className='experience bg-gray-500 py-1 position-relative' id="exprience">
        <div className='container mx-auto rounded-3xl'>
            <div className='row'>
                <div className='col-12'>
                  <div className='experience-bx wow items-center justify-center p-5  bg-blue-500 zoomIn'>
                    <h2 className='text-3xl'> Experience</h2>
                    <p className=' text-lg'>fdghjkl;'lkjhgdghjk.l;k'</p>
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme experience-slider">
                      <div className='flex flex-row h-20 items-center text-center'>
                      {experience.map((experience, index) =>{
                        return (
                            <div className='item flex text-sm items-center m-auto justify-center' key={index}>
                              <image className='lg:h-20 w-10' src={experience.image} alt='' />
                              <h6>{experience.name}</h6>
                            </div>
                        )
                      })}
                      </div>
                    </Carousel>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience