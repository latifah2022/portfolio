///  icons
import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
    FiMail,
    FiMapPin,
} from 'react-icons/fi';

//   // projects images
import Project1 from './images/projects/p11.jpg';
import Project2 from './images/projects/p12.jpg';
import Project3 from './images/projects/p13.jpg';
import Project4 from './images/projects/p18.jpg';
import Project5 from './images/projects/p15.jpg';
import Project6 from './images/projects/p16.jpg';
import Project7 from './images/projects/p17.jpg';


//   // skills images
import SkillImg1 from './images/skills/html5.png';
import SkillImg2 from './images/skills/css3.png';
import SkillImg3 from './images/skills/js.png';
import SkillImg4 from './images/skills/reactjs.png';
import SkillImg5 from './images/skills/nextjs.png';
import SkillImg6 from './images/skills/nodejs.png';
import SkillImg7 from './images/skills/git.png';
import SkillImg8 from './images/skills/figma.png';

  // navigation
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
      name: 'exprience',
      href: 'exprience',
    },
    {
      name: 'contact',
      href: 'contact',
    },
];
  
  // social
export const social = [
    {
      icon: <FiLinkedin />,
      href: 'https://www.linkedin.com/in/latifah-zawedde/',
    },
    {
      icon: <FiGithub />,
      href: 'https://github.com/latifah2022',
    },
    {
      icon: <FiTwitter />,
      href: 'https://twitter.com/latifah_z',
    },
    {
      icon: <FiMail />,
      href: 'mailto:zawedde2021@gmail.com'
    }
];
  
//   // projects
export const projectsData = [
  {
    id: '1',
    image: Project6,
    name: 'Tarah',
    category: 'Full Stack',
    demo: "https://latifah2022.github.io/tarah/",
    code: 'https://github.com/latifah2022/tarah'
  },
    {
      id: '2',
      image: Project1,
      name: 'Food Adventure',
      category: 'Full Stack',
      code: "https://github.com/cindyung56/food-adventure",
      demo: 'https://cindyung56.github.io/food-adventure/'
    },
    {
      id: '3',
      image: Project2,
      name: 'Book club',
      category: 'Full Stack',
      demo: "https://secret-harbor-07074.herokuapp.com/",
      code: 'https://github.com/latifah2022/book-club'
    },
    
    {
      id: '5',
      image: Project3,
      name: 'E-commerce',
      category: 'Backend',
      demo: "#",
      code: 'https://github.com/latifah2022/e-commerce'
    },
    {
      id: '4',
      image: Project4,
      name: 'Portfolio',
      category: 'web development',
      demo: "https://latifah2022.github.io/my-first-portfolio/",
      code: 'https://github.com/latifah2022/my-first-portfolio'
    },
    {
      id: '6',
      image: Project5,
      name: 'Employee Tracker',
      category: 'Backend',
      demo: "#",
      code: 'https://github.com/latifah2022/employee-tracker'
    },
    {
      id: '7',
      image: Project7,
      name: 'To-do List',
      category: 'Full Stack',
      demo: "https://serene-falls-35131.herokuapp.com/",
      code: 'https://github.com/christalledo/to-do-list-app'
    },
];

  
//   // projects
export const projectsNav = [
    {
      name: 'all',
    },
    {
      name: 'Frontend',
    },
    {
      name: 'web development',
    },
    {
      name: 'Backend',
    },
    {
      name: "Full Stack",
    }
  ];
  
//   // skill
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

  
// contact
export const contact = [
    {
      icon: <FiMail />,
      title: 'Reach Me',
      subtitle: 'Happy to work with you.',
      description: 'Email me.',
      href: 'mailto:zawedde2021@gmail.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      subtitle: 'Los Angeles, California.',
      description: 'Willing to work remote.',
    },
];