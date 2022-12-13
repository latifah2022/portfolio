import React from 'react';

const Work = ({item}) => {
    return (
         <div key={item.id} className='flex flex-col items-center text-center'>
            <div className=''>
                <img className='rounded-2xl duration-200 hover:scale-105' src={item.image} alt='' />
                <ul className='flex items-center justify-center'>
                    <li className='w-1/2 flex justify-between m-2 duration-200 hover:scale-105'>
                        <a className=' text-3xl flex bg-cyan-300 p-1 rounded-2xl justify-between m-2 duration-200 hover:scale-105' href={item.code} >Code</a>
                        <a className=' text-3xl flex  bg-cyan-300 p-1 rounded-2xl justify-between m-2 duration-200 hover:scale-105'  href={item.demo}>Demo</a>
                    </li>
                </ul>
                <p className='capitalize  text-base mb-3'>{item.category}</p>
                <h3 className='text-2xl  capitalize mb-3'>{item.name}</h3>
            </div>
        </div>
    );
};

export default Work;