import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  crmnext,
  nickelfox,
  newgen,
  austinlegacycorpicon,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  SchoolERP,
  NorthPoint,
  Handyman,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  selfEmployed,
  resumePdf,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
];

const experiences = [

  {
    title: "Software Engineer Intern",
    company_name: "Austin Legacy Corp",
    company_website: "https://www.austinlegacycorp.com/",
    icon: austinlegacycorpicon,
    iconBg: "#E6DEDD",
    date: "NOV-2025 - April 2026",
    points: [
      "Contributed to the development of a Test Engine Application, empowering users to create and conduct tests seamlessly.",
      "Built three essential modules: Teacher, Student, and Admin, ensuring comprehensive functionality for all user roles.",
      "Collaborated effectively with the development team, actively participating in code reviews and resolving technical challenges.",
      "Demonstrated strong problem-solving skills, consistently delivering high-quality code and meeting project deadlines.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Self-employed",
    icon: selfEmployed,
    iconBg: "#E6DEDD",
    date: "JUN 2025 - NOV 2025",
    points: [
      "Spearheaded the development of a fully responsive website for the college coding society.",
      "Led coding sessions, actively sharing knowledge and insights to enrich members' programming skills and understanding.",
      "Organized informative sessions on cutting-edge technologies, including JavaScript and ReactJs.",
      "Curated and designed challenging coding problems for college competitions.",
    ],
  },
];

const projects = [
  {
    name: "School ERP",
    description:
      "I worked on the School ERP system, where I developed frontend pages and built multiple modules, focusing on creating structured, responsive, and user-friendly interfaces for different functionalities across the website.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: SchoolERP,
    
  },
  {
    name: "North Point",
    description:
      "I worked for NorthPoint, where I developed and designed frontend pages, focusing on creating responsive, user-friendly interfaces and ensuring smooth navigation and performance across the website.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: NorthPoint,
   
  },
  {
    name: "HandyMan",
    description:
      "I worked on the Handyman project for Austin Legacy Corp, where I developed the frontend of the website and integrated backend functionalities into it. I connected APIs, managed data flow, and ensured smooth interaction between the frontend and backend to deliver a seamless user experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      
    ],

    image: Handyman,
    
  },
  // {
  //   name: "Zeal App",
  //   description:
  //     "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
  //   tags: [
  //     {
  //       name: "react-native",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "sendgrid",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: zealApp,
  //   hosted_link:
  //     "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140",
  // },
  // {
  //   name: "Roll Web",
  //   description:
  //     "The Roll website is the gateway to the future of decentralized communities and digital assets. It allows users to seamlessly earn, redeem, send, and trade social tokens.",
  //   tags: [
  //     {
  //       name: "reactjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "formik",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: rollWeb,
  //   hosted_link: "https://app.tryroll.com/",
  // },
  
];

const personalInfo = {
  name: "Chinmay",
  fullName: "Chinmay Arora",
  email: "chinmayarorabhai@gmail.com",
  role: "Software Developer",
  about: `Motivated Computer Science undergraduate with a strong foundation in software development, data structures, and system design. Quick learner 
with hands-on project experience and strong problem-solving skills. Passionate about building scalable solutions and contributing to innovative 
technology projects while continuously growing as a software engineer.  `,
};

const publicUrls = {
  resume: resumePdf,
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/chinmay-arora-49445724a/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/chinmay7733",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
