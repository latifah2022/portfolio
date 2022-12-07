import React from 'react'
import WomanImg from "../images/hero/heros.png";
import CV from "../images/resume/cv.pdf";
//import { RiDownloadCloudFill } from "react-icons"
import { useState, useEffect } from "react";
import TrackVisibility from 'react-on-screen';


const Home = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Software Engineer", "Full Stack Developer" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

  return (
    <section id='home'
    className='lg:h-[85vh] flex items-center bg-gray-900 text-cyan-400 lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
        <div className='container mx-auto h-full'>
            <div className='flex items-center h-full pt-8'>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className='flex-1 flex flex-col m-5 items-center lg:items-start {isVisible ? "animate__animated animate__fadeIn" : ""}'>
                    <h1 className='text-lg text-accent text-md mb-[22px]'> {'Hey, I am Latifah! 👋'}
                    </h1>
                    <h4 className='text-2xl leading-[44px] md:text-2xl md:leading-tight lg:text-4xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
                        <span className="wrap">{text}</span>
                    </h4>
                    <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
                        Motivated Junior Software Engineer to provide unique perspectives
                        on how end-users interact with websites and software platforms.

                    </p>

                    <a  href={CV} download className='btn btn-md p-3 rounded-2xl bg-black hover:bg-secondary-hover md:btn-lg transition-all'>
                        Download CV 
                        {/* <RiDownloadCloudFill size={25} /> */}
                    </a> 
                </div>}
            </TrackVisibility>
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

// className='text-lg text-accent text-md mb-[22px]