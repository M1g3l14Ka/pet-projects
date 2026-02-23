import { ITimelineItem } from "@/types";


export const petTimelineData: ITimelineItem[] = [
  {
    id: 1,
    category: 'Pet',
    date: 'Jan 2026',
    title: 'Fitness App',
    subtitle: 'Stack: Next, TypeScript, TailWind LocalStorage, Frame motion',
    description: 'A modern Single Page Application (SPA) for selecting fitness plans. Features server-side rendering for speed, a persistent smart timer, and a fully adaptive UI.',
    code: 'https://github.com/M1g3l14Ka/pet-projects/tree/main/Next-projects/fitness-ads-app',
    link: 'https://fitness-ads-app.vercel.app/',
    img:'/petImg/fitness-app.png',
    isInProgress: false,
  },
  {
    id: 2,
    category: 'Pet',
    date: 'Feb 2025',
    title: 'Table CRM',
    subtitle: 'Stack: Next.js, TypeScript, Tailwind CSS, Gemini API',
    description: 'A commercial product creation form built with Next.js and Server Actions. Features secure API integration and a custom Gemini AI module that automatically generates SEO metadata based on user input',
    code: 'https://github.com/M1g3l14Ka/pet-projects/tree/main/Commercial-projects/table-crm',
    link: 'https://next-tablecrm.vercel.app/',
    img:'/petImg/table-CRM.png',
    isInProgress: false,
  },
  {
    id: 3,
    category: 'Pet',
    date: 'Feb 2026',
    title: 'Clicker Game',
    subtitle: 'Stack: Js(ES6), HTML5/CSS3, LocalStorage',
    description: 'Little clicker game: Bash the bots! Smash those robots until their circuits fry. Farm some gold and pay off your debt - but make sure you take some time while you do it =)',
    code: 'https://github.com/M1g3l14Ka/pet-projects/tree/main/Vanilla-Js-projects/Clicker-game',
    link: 'https://clicker-robot-game.vercel.app/',
    img:'/petImg/clicker-game.png',
    isInProgress: false,
  },
  {
    id: 4,
    category: 'Pet',
    date: 'Jan 2026',
    title: 'The Nexus Portal',
    subtitle: 'Stack: Next, TailWind, Framer Motion',
    description: 'Creative portal with complex animations, glassmorphism UI and interactive background tiles.',
    code: 'https://github.com/M1g3l14Ka/pet-projects/tree/main/Next-projects/nexus-portal',
    link: '/',
    img:'/petImg/nexus-portal.png',
    isInProgress: true,
  },
];

export const workTimeLineData: ITimelineItem[] = [
  {
    id: 1,
    category: 'Work',
    date: 'July 2023 - July 2024',
    title: 'PJSC «Rosseti North-West»',
    subtitle: 'Analytics and monitoring',
    description: 'Analytics and monitoring of company resources, reporting on the work done, working with databases.',
    img:'/'
  },  
  {
    id: 2,
    category: 'Work',
    date: 'July 2024 - Present',
    title: 'Megafon Retail JSC',
    subtitle: 'Sales Manager / CRM Operator',
    description: 'Developed communication skills and worked with internal corporate software under high pressure.',
    img:'/'
  },
];

export const aboutTimeLineData: ITimelineItem[] = [
    {
    id: 1,
    category: 'About Me',
    date: '2024',
    title: 'Winner of "Professionals"',
    subtitle: 'Regional Championship',
    description: '1st place in "Mobile Game Development". Proved ability to deliver complex logic under strict deadlines.',
    img:'/'
  }
]


export const headerTitleBtns = [
  { id: 'About Me', label: 'About Me' },
  { id: 'Pet', label: 'Code Projects' },
  { id: 'Work', label: 'Work' },
];


export const headerTiles = [
  { id: 1, src: '/tilesImg/html.png', alt: 'HTML' },
  { id: 2, src: '/tilesImg/css.png', alt: 'CSS' },
  { id: 3, src: '/tilesImg/js.png', alt: 'JavaScript' },
  { id: 4, src: '/tilesImg/typeScript.png', alt: 'TypeScript' }, 
  { id: 5, src: '/tilesImg/react.png', alt: 'React' },
  { id: 6, src: '/tilesImg/next.png', alt: 'Next.js' },
  { id: 7, src: '/tilesImg/tailwind.png', alt: 'Tailwind' },
  { id: 8, src: '/tilesImg/gitHub.png', alt: 'GitHub' },
  { id: 9, src: '/tilesImg/docker.png', alt: 'Docker' },
  { id: 10, src: '/tilesImg/node.png', alt: 'Node.js' },
  { id: 11, src: '/tilesImg/vuejs.png', alt: 'Vue.js' }, 
];


export const hireBtns = [
  { id: 1, title:'Telegram', url:'https://t.me/M1g3L14Ka' },
  { id: 2, title:'Vkontakte', url:'https://vk.com/mi4aejl' }
]

export const worksBtns = [
  { id: 1, title:'GitHub', url:'https://github.com/M1g3L14Ka' },
  { id: 2, title:'Tilda', url:'https://foxy-frontend-resume.tilda.ws/' }
]

