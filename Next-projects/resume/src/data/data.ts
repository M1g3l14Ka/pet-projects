import { ITimelineItem } from "@/types";


export const petTimelineData: ITimelineItem[] = [
  {
    id: 1,
    category: 'Pet',
    date: 'Nov 2025',
    title: 'LiteShop (E-commerce App)',
    subtitle: 'Stack: React, LocalStorage, CSS Grid',
    description: 'SPA store with shopping cart, filtering, search and order history. The data is saved locally.',
    code: 'https://github.com/M1g3L14Ka/html_css_js_studying/tree/main/html_coding/react/lite-shop-v2',
    link: 'https://foxy-lite-shop.netlify.app/',
    img:'/petImg/lite-shop-image.png',
    isInProgress: false,
  },
  {
    id: 2,
    category: 'Pet',
    date: 'Dec 2025',
    title: 'World Weather',
    subtitle: 'Stack: React, LocalStorage, CSS Grid',
    description: 'Global data coverage via the OpenWeather API with local data retention is provided.',
    code: 'https://github.com/M1g3L14Ka/html_css_js_studying/tree/main/html_coding/react/weather-app',
    link: 'https://foxy-weather-app.netlify.app/',
    img:'/petImg/weather-app-image.png',
    isInProgress: false,
  },
  {
    id: 3,
    category: 'Pet',
    date: 'Jan 2026',
    title: 'Fitness App',
    subtitle: 'Stack: Next, TypeScript, TailWind LocalStorage, Frame motion',
    description: 'A modern Single Page Application (SPA) for selecting fitness plans. Features server-side rendering for speed, a persistent smart timer, and a fully adaptive UI.',
    code: 'https://github.com/M1g3L14Ka/next-app-a4-test-ex',
    link: 'https://next-app-a4-test-ex.vercel.app/',
    img:'/petImg/fitness-app-image.png',
    isInProgress: false,
  },
  {
    id: 4,
    category: 'Pet',
    date: 'Jan 2026',
    title: 'The Nexus Portal',
    subtitle: 'Stack: Next, TailWind, Framer Motion',
    description: 'Creative portal with complex animations, glassmorphism UI and interactive background tiles.',
    code: '/',
    link: '/',
    img:'/',
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

