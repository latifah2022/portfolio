import React from 'react';
import { contact } from "../data";

const Contact = () => {
  return (
    <section className='section bg-gray-900 text-cyan-600' id='contact'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title m-3 before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
                    Contact Me
                </h2>
                {/* <p className='subtitle'>
                    drftgyuhijlk;jhbgfcdghjkl;
                </p> */}
            </div>
            <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
                    {contact.map((item, index) => {const { icon, title, subtitle, description, href } = item;
                        return (
                            <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                                <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                                    <a href={href}>{icon}</a>
                                </div>
                                <div>
                                    <h2 className='font-body text-xl mb-1'>{title}</h2>
                                    <h5 className='mb-1 '>{subtitle}</h5>
                                    <h5 className='font-normal'>{description}</h5>
                                    
                                </div>
                            </div>
                        );
                    })}
                </div>
                <form className='space-y-8 '>
                    <div className='flex flex-col gap-4'>
                        <input className='input rounded-2xl' type='text' placeholder='Your name' />
                        <input className='input rounded-2xl' type='email' placeholder='Your email' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <input className='input rounded-2xl' type='text' placeholder='Subject' />
                        <textarea className='textarea rounded-2xl' placeholder='Your message'></textarea>
                        <button className='btn m-2 btn-lg bg-black hover:bg-gray-hover rounded-2xl'>
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  );
};

export default Contact;