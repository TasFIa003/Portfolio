export interface Project {
  name: string;
  description: string;
  language: string;
  url: string;
  pinned?: boolean;
  tags?: string[];
}

export const projects: Project[] = [
  {
    name: 'FAA_project',
    description: 'A full-stack web application built with Node.js and EJS templating, demonstrating MVC architecture and dynamic server-side rendering.',
    language: 'EJS / Node.js',
    url: 'https://github.com/TasFIa003/FAA_project',
    pinned: true,
    tags: ['Node.js', 'EJS', 'Web'],
  },
  {
    name: 'Project_Spread_Happiness',
    description: 'A web platform developed using Node.js and EJS, focused on community engagement and social good — showcased at the CSE Fest 2022.',
    language: 'EJS / Node.js',
    url: 'https://github.com/TasFIa003/Project_Spread_Happiness',
    pinned: true,
    tags: ['Node.js', 'EJS', 'Web'],
  },
  {
    name: 'Travel_management',
    description: 'A Java-based travel management system implementing object-oriented design patterns for booking, scheduling, and itinerary management.',
    language: 'Java',
    url: 'https://github.com/TasFIa003/Travel_management',
    pinned: true,
    tags: ['Java', 'OOP', 'Desktop'],
  },
  
];
