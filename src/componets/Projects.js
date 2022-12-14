import React, { useState, useEffect } from 'react';
import Work from './Work';
import { projectsData } from "../data";
import { projectsNav } from "../data";

const Projects = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        // get projects based on item
        if (item.name === 'all') {
          setProjects(projectsData);
        } else {
          const newProjects = projectsData.filter((project) => {
            return project.category.toLowerCase() === item.name;
          });
          setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };

    return (
        <section>
            <nav className='mb-5 bg-slate-800 mx-auto'>
                <ul className='flex flex-col md:flex-row justify-evenly items-center text-xl text-white'>
                    {projectsNav.map((item, index) => {
                        return (
                            <li onClick={(e) => {handleClick(e, index)}}
                                className={`${active === index ? 'active' : ''} 
                                cursor-pointer capitalize m-4`} key={index}>
                                { item.name }
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className='grid gap-y-5 bg-cyan-700 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8'>
                {projects.map((item) => {
                    return <Work item={item} key={item.id} />;
                })}
            </div>
        </section>
    );
};

export default Projects;