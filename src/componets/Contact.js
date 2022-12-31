import React from 'react';
import { useState } from "react";
import {  Col } from "react-bootstrap";
import { contact } from "../data";
import TrackVisibility from 'react-on-screen';


const Contact = () => {
    const formInitialDetails = {
        fullName: '',
        email: '',
        subject: '',
        message: ''
      }
      const [formDetails, setFormDetails] = useState(formInitialDetails);
      const [buttonText, setButtonText] = useState('Send Messege');
      const [status, setStatus] = useState({});
    
      const onFormUpdate = (category, value) => {
          setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
          setStatus({ succes: true, message: 'Message sent successfully'});
        } else {
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        }
    };
    
  return (
    <section className='contact  bg-cyan-800 text-black' id='contact'>
        <h2 className='section-title  flex justify-center p-3 before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
                    Contact Me
        </h2>
        <div className='container justify-evenly flex flex-col xl:flex-row mx-auto '>
            
            <div className='flex flex-col  lg:gap-x-2 lg:flex-row'>
              <TrackVisibility>
              {({ isVisible }) =>
                <div className='flex flex-1 p-3  flex-col items-start space-y-2 mb-12 lg:mb-0 lg:pt-2 {isVisible ? "animate__animated animate__zoomIn" : ""}'>
                    {contact.map((item, index) => {const { icon, title, subtitle, description, href } = item;
                        return (
                            <div className='flex flex-col lg:flex-row gap-x-2' key={index}>
                                <div className=' rounded-sm w-10 h-5 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                                    <a href={href}>{icon}</a>
                                </div>
                                <div>
                                    <h2 className='font-body text-xl mb-1'>{title}</h2>
                                    <h5 className='mb-1 text-lg'>{subtitle}</h5>
                                    <h5 className='font-norma text-base'><a href={href}>{description}</a></h5>     
                                </div>
                            </div>
                        );
                    })}
                </div>}
              </TrackVisibility>
            </div>
            <div className='flex justify-center'>
            <form className='space-y-8 p-3 text-white   flex-row lg:items-start items-end' onSubmit={handleSubmit}>
                    <div  className='flex flex-col   md:w-1/2  gap-4'>
                        <input className='input  bg-slate-800 rounded-2xl' value={formDetails.fullName} type='text' onChange={(e) => onFormUpdate('fullName', e.target.value)} placeholder='Your name' />
                        <input className='input  bg-slate-800 rounded-2xl' value={formDetails.email} type='email' onChange={(e) => onFormUpdate('email', e.target.value)} placeholder='Your email' />
                    </div>
                    <div className='flex flex-col gap-4 w-50'>
                        <input className='input bg-slate-800 rounded-2xl '  type='text' value={formDetails.subject} onChange={(e) => onFormUpdate('subject', e.target.value)} placeholder='Subject' />
                        <textarea className='textarea bg-slate-800 rounded-2xl' value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)} placeholder='Your message'></textarea>
                    </div>
                    <div>
                    <button type="submit" className='btn m-2 p-2 item-center justify-center btn-lg bg-black text-cyan-700 hover:bg-gray-hover rounded-2xl'>
                            <span>{buttonText}</span> 
                        </button>
                    </div>
                    {
                        status.message &&
                        <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                    }
            </form>
               
            </div>
        </div>
    </section>
  );
};

export default Contact;