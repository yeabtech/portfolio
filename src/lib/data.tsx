import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/unischeduler.png',
    title: 'University Scheduler',
    description:
      'A scheduling platform for organizing university timetables and planning.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    links: {
      preview:
        'https://university-scheduler-git-main-amenn5s-projects.vercel.app/',
      github: 'https://github.com/amenn5/universityScheduler',
      githubApi: 'https://api.github.com/repos/amenn5/universityScheduler',
    },
  },
  {
    image: '/images/ethio electric.png',
    title: 'Ethiopia Electric Corporation',
    description:
      'Utility management system focused on electricity service operations.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS'],
    links: {
      preview: 'https://ethio-electric-utility-management-s-one.vercel.app/',
      github: 'https://github.com/yeabtech/Ethio-Electric-utility-management-system',
      githubApi:
        'https://api.github.com/repos/yeabtech/Ethio-Electric-utility-management-system',
    },
  },
  {
    image: '/images/mazeball.png',
    title: 'Game Maze Ball',
    description:
      'A maze ball game project with interactive gameplay mechanics.',
    technologies: ['Next.js', 'TypeScript', 'CSS'],
    links: {
      preview: 'https://mazeball2-0.vercel.app/',
      github: 'https://github.com/yeabtech/mazeball2.0',
      githubApi: 'https://api.github.com/repos/yeabtech/mazeball2.0',
    },
  },
] as const;

export const experiencesData = [
  {
    company: 'Front-End Development',
    description:
      'I specialize in building modern, responsive, and visually engaging user interfaces that deliver smooth user experiences across devices. I develop dynamic web applications with a strong focus on performance, clean design, and maintainability. Skilled in creating reusable components, optimizing rendering, and implementing interactive features.',
    technologies: ['HTML', 'JavaScript', 'Next.js'],
  },
  {
    company: 'Back-End Development',
    description:
      'I develop robust, scalable, and secure server-side applications, handling business logic, API design, and system integration. I am experienced in building high-performance RESTful APIs and enterprise-level systems, ensuring reliability, security, and efficient data processing across applications.',
    technologies: [
      'Node.js (Express)',
      'Django',
      'Spring Boot',
      'Laravel',
    ],
  },
  {
    company: 'Database Experience',
    description:
      'I have strong experience in designing, managing, and optimizing both relational and non-relational databases. I focus on efficient data modeling, fast query performance, and maintaining data consistency across systems, using modern tools and best practices.',
    technologies: [
      'PostgreSQL',
      'SQL Databases',
      'NoSQL Databases',
      'Prisma ORM',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
