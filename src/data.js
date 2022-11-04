import {
    FiInstagram,
    FiGithub,
    FiLayout,
    FiSettings,
    FiPenTool,
    FiTag,
    FiMail,
    FiMapPin,
    FiYoutube,
    FiDribbble
} from 'react-icons/fi';

import Project1 from './images/projects/p1.webp';
import Project2 from './images/projects/p2.webp';
import Project3 from './images/projects/p3.webp';
import Project4 from './images/projects/p4.webp';
import Project5 from './images/projects/p5.webp';
import Project6 from './images/projects/p6.webp';

import SkillImg1 from './images/skills/html5.png';
import SkillImg2 from './images/skills/css3.png';
import SkillImg3 from './images/skills/js.png';
import SkillImg4 from './images/skills/reactjs.png';
import SkillImg5 from './images/skills/nextjs.png';
import SkillImg6 from './images/skills/nodejs.png';
import SkillImg7 from './images/skills/git.png';
import SkillImg8 from './images/skills/figma.png';

export const navigation = [
    {
        name: 'home',
        href: 'home',
    },
    {
        name: 'about',
        href: 'about',
    },
    {
        name: 'portfolio',
        href: 'portfolio',
    },
    {
        name: 'services',
        href: 'services',
    },
    {
        name: 'testimonials',
        href: 'testimonials',
    },
    {
        name: 'contact',
        href: 'contact',
    },
];
  
  // social
export const social = [
    {
        icon: <FiYoutube />,
        href: '',
    },
    {
        icon: <FiInstagram />,
        href: '',
    },
    {
        icon: <FiGithub />,
        href: '',
    },
    {
        icon: <FiDribbble />,
        href: '',
    },
];
  
  
  // projects
export const projectsData = [
    {
        id: '1',
        image: Project1,
        name: 'project name 1',
        category: 'UI/UX design',
    },
    {
        id: '2',
        image: Project2,
        name: 'project name 2',
        category: 'web development',
    },
    {
        id: '3',
        image: Project3,
        name: 'project name 3',
        category: 'UI/UX design',
    },
    {
        id: '4',
        image: Project4,
        name: 'project name 4',
        category: 'branding',
    },
    {
        id: '5',
        image: Project5,
        name: 'project name 5',
        category: 'web development',
    },
    {
        id: '6',
        image: Project6,
        name: 'project name 6',
        category: 'web development',
    },
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'UI/UX Design',
    },
    {
        name: 'web development',
    },
    {
        name: 'branding',
    },
];
  
export const skills = [
    {
        image: SkillImg1,
    },
    {
        image: SkillImg2,
    },
    {
        image: SkillImg3,
    },
    {
        image: SkillImg4,
    },
    {
        image: SkillImg5,
    },
    {
        image: SkillImg6,
    },
    {
        image: SkillImg7,
    },
    {
        image: SkillImg8,
    },
];
  

export const services = [
    {
        icon: <FiLayout />,
        name: 'Web Design',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
        icon: <FiSettings />,
        name: 'Web Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
        icon: <FiPenTool />,
        name: 'Branding',
        description:
           'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
        icon: <FiTag />,
        name: 'SEO',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
];
  
  
export const contact = [
    {
        icon: <FiMail />,
        title: 'Have a question?',
        subtitle: 'I am here to help you.',
        description: 'Email me at zawedde2021@gmail.com',
    },
    {
        icon: <FiMapPin />,
        title: 'Current Location',
        subtitle: 'Los Angeles, California',
        description: 'Serving clients worldwide',
    },
];
