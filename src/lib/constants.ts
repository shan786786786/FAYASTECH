// Site configuration and constants

export const siteConfig = {
  name: 'FayasTech',
  title: 'FayasTech - Tech Expert & Data Analyst',
  description: 'Professional portfolio showcasing 15+ years of expertise in Hardware, Networking, Video Editing, Data Analysis, and Modern Web Development.',
  url: 'https://fayastech.com',
  ogImage: '/og-image.png',
  author: {
    name: 'FayasTech',
    email: 'contact@fayastech.com',
    twitter: '@FayasTechy',
  },
  links: {
    github: 'https://github.com/fayastech',
    twitter: 'https://twitter.com/FayasTechy',
    linkedin: 'https://linkedin.com/in/fayastech',
    instagram: 'https://instagram.com/fayastechy',
    youtube: 'https://www.youtube.com/@fayastechy',
  },
} as const

// Navigation items
export const navigationItems = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
] as const

// Skills data
export const skills = [
  { name: 'Data Analysis & Visualization', level: 98, category: 'data' },
  { name: 'Computer Hardware & Networking', level: 98, category: 'hardware' },
  { name: 'Video Editing', level: 95, category: 'creative' },
  { name: '3D Animation', level: 92, category: 'creative' },
  { name: 'CCTV Installation & Security', level: 96, category: 'hardware' },
  { name: 'Frontend Development', level: 96, category: 'development' },
  { name: 'Backend Development', level: 94, category: 'development' },
] as const

// Stats data
export const stats = [
  { label: 'Projects Completed', value: '100+', numericValue: 100, suffix: '+' },
  { label: 'Performance Boost', value: '300%', numericValue: 300, suffix: '%' },
  { label: 'Happy Clients', value: '50+', numericValue: 50, suffix: '+' },
  { label: 'Years Experience', value: '15+', numericValue: 15, suffix: '+' },
] as const

// Gaming specs for hero section
export const gamingSpecs = [
  { label: 'CPU', value: 'Intel i9-14900K', color: 'from-blue-500 to-cyan-500' },
  { label: 'GPU', value: 'RTX 5090', color: 'from-green-500 to-emerald-500' },
  { label: 'RAM', value: '64GB DDR5', color: 'from-purple-500 to-pink-500' },
  { label: 'Storage', value: '4TB NVMe SSD', color: 'from-orange-500 to-red-500' },
] as const

// Contact info
export const contactInfo = [
  {
    label: 'Email',
    value: 'contact@fayastech.com',
    link: 'mailto:contact@fayastech.com',
  },
  {
    label: 'Phone',
    value: '+1 (234) 567-890',
    link: 'tel:+1234567890',
  },
  {
    label: 'Location',
    value: 'Available Worldwide',
    link: '#',
  },
] as const

// Animation timing
export const animationConfig = {
  staggerChildren: 0.1,
  delayChildren: 0.3,
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  ease: {
    default: [0.4, 0, 0.2, 1],
    spring: { type: 'spring', stiffness: 100, damping: 10 },
  },
} as const

// Project categories
export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'backend', label: 'Backend' },
  { id: 'iot', label: 'IoT' },
  { id: 'game', label: 'Gaming' },
] as const

// Tech stack
export const techStack = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Redis'],
  tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'],
  other: ['Arduino', 'Raspberry Pi', 'MQTT', 'WebSocket'],
} as const
