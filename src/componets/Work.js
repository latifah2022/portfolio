import React from 'react';

const Work = ({item}) => {
    return (
         <div key={item.id} className='flex flex-col items-center text-center'>
            <div className='  '>
                <img className='rounded-2xl duration-200 hover:scale-105' src={item.image} alt='' />
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-2 m-2 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-2 m-2 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
            <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
            <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
        </div>
    );
};

export default Work;