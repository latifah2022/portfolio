///  icons
import {
    //FiInstagram,
    FiGithub,
    FiTwitter,
    //FiLayout,
    //FiSettings,
    FiLinkedin,
    //FiPenTool,
    // FiTag,
    FiMail,
    FiMapPin,
  } from 'react-icons/fi';
  
//   // companies icons
//   import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
//   import UpworkBrandIcon from './assets/img/brands/upwork.png';
//   import FiverBrandIcon from './assets/img/brands/fiverr.png';
//   import BehanceBrandIcon from './assets/img/brands/behance.png';
//   import DribbbleBrandIcon from './assets/img/brands/dribbble.png';
  
//   // projects images
import Project1 from './images/projects/p1.webp';
import Project2 from './images/projects/p2.webp';
import Project3 from './images/projects/p3.webp';
import Project4 from './images/projects/p4.webp';
import Project5 from './images/projects/p5.webp';
import Project6 from './images/projects/p6.webp';

//   // skills images
import SkillImg1 from './images/skills/html5.png';
import SkillImg2 from './images/skills/css3.png';
import SkillImg3 from './images/skills/js.png';
import SkillImg4 from './images/skills/reactjs.png';
import SkillImg5 from './images/skills/nextjs.png';
import SkillImg6 from './images/skills/nodejs.png';
import SkillImg7 from './images/skills/git.png';
import SkillImg8 from './images/skills/figma.png';

// links 

  
//   // testimonial images
//   import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
//   import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
//   import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';
  
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
      name: 'services',
      href: 'services',
    },
    {
      name: 'contact',
      href: 'contact',
    },
  ];
  
//   // social
export const social = [
    {
        icon: <FiLinkedin />,
        href: 'https://www.linkedin.com/in/latifah-zawedde/',
      },
    // {
    //   icon: <FiInstagram />,
    //   href: '',
    // },
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
  
//   // companies
//   export const brands = [
//     {
//       img: FreelancerBrandIcon,
//       href: '',
//     },
//     {
//       img: UpworkBrandIcon,
//       href: '',
//     },
//     {
//       img: FiverBrandIcon,
//       href: '',
//     },
//     {
//       img: BehanceBrandIcon,
//       href: '',
//     },
//     {
//       img: DribbbleBrandIcon,
//       href: '',
//     },
//   ];
  
//   // projects
export const projectsData = [
    {
      id: '1',
      image: Project1,
      name: 'Food Adventure',
      category: 'Full Stack',
      code: "https://github.com/cindyung56/food-adventure",
      demo: 'https://cindyung56.github.io/food-adventure/'
    },
    {
      id: '2',
      image: Project2,
      name: 'Book club',
      category: 'Full Stack',
      demo: "https://secret-harbor-07074.herokuapp.com/",
      code: 'https://github.com/latifah2022/book-club'
    },
    {
      id: '3',
      image: Project3,
      name: 'Portfolio',
      category: 'web development',
      demo: "https://latifah2022.github.io/my-first-portfolio/",
      code: 'https://github.com/latifah2022/my-first-portfolio'
    },
    {
      id: '4',
      image: Project4,
      name: 'E-commerce',
      category: 'Backend',
      demo: "#",
      code: 'https://github.com/latifah2022/e-commerce'
    },
    {
      id: '5',
      image: Project5,
      name: 'Employee Tracker',
      category: 'Backend',
      demo: "#",
      code: 'https://github.com/latifah2022/employee-tracker'
    },
    {
      id: '6',
      image: Project6,
      name: 'To-do List',
      category: 'Full Stack',
      demo: "https://serene-falls-35131.herokuapp.com/",
      code: 'https://github.com/christalledo/to-do-list-app'
    },
];

// export const links = [
//   {
//     id: "1",
//     demo: "https://github.com/cindyung56/food-adventure",
//     code:  'https://cindyung56.github.io/food-adventure/',
//   },
//   {
//     id: '2',
//     demo: "https://secret-harbor-07074.herokuapp.com/",
//     code: 'https://github.com/latifah2022/book-club'
//   },
//   {
//     id: '3',
//     demo: "https://latifah2022.github.io/my-first-portfolio/",
//     code: 'https://github.com/latifah2022/my-first-portfolio'
//   },
//   {
//     id: '4',
//     demo: "#",
//     code: 'https://github.com/latifah2022/e-commerce'
//   },
//   {
//     id: '5',
//     demo: "#",
//     Code: 'https://github.com/latifah2022/employee-tracker'
//   },
//   {
//     id: '6',
//     demo: "https://serene-falls-35131.herokuapp.com/",
//     Code: 'https://github.com/christalledo/to-do-list-app'
//   }

// ]
  
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
      name: "Full Stack"
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
  
//   // services
//   export const services = [
//     {
//       icon: <FiLayout />,
//       name: 'Web Design',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
//     },
//     {
//       icon: <FiSettings />,
//       name: 'Web Development',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
//     },
//     {
//       icon: <FiPenTool />,
//       name: 'Branding',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
//     },
//     {
//       icon: <FiTag />,
//       name: 'SEO',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
//     },
//   ];
  
//   // testimonials
//   export const testimonials = [
//     {
//       authorImg: TestiImage1,
//       authorText:
//         'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
//       authorName: 'Olivia Doe',
//       authorPosition: 'Head of Design, Google',
//     },
//     {
//       authorImg: TestiImage2,
//       authorText:
//         'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
//       authorName: 'Olivia Doe',
//       authorPosition: 'Head of Design, Google',
//     },
//     {
//       authorImg: TestiImage3,
//       authorText:
//         'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
//       authorName: 'Olivia Doe',
//       authorPosition: 'Head of Design, Google',
//     },
//   ];
  
// contact
export const contact = [
    {
      icon: <FiMail />,
      title: 'Have a question?',
      subtitle: 'I am here to help you.',
      description: 'Email me at zawedde2021@gmail.com',
      href: 'mailto:zawedde2021@gmail.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      subtitle: 'Los Angeles, California',
      description: 'Willing to work remote.',
    },
];