'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github, ArrowRight, Star, Eye, GitFork, Sparkles, Play, Monitor, Smartphone, Layers, Code, Database, Server } from 'lucide-react'

const projects = [
  {
    id: 1,
    slug: "production-management",
    title: "Production Management System",
    description: "Complete solution for managing production crews, projects, and payments with real-time tracking, automated calculations, and detailed reporting dashboards.",
    image: "/projects/production-demo.svg",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Node.js"],
    category: "fullstack",
    platform: "Web",
    liveUrl: "https://evans.fayastech.com/",
    githubUrl: "#",
    demoVideo: "https://youtube.com/watch?v=demo1",
    featured: true,
    stats: { stars: 128, views: "15K", forks: 34 },
    color: "from-violet-500 to-purple-500",
    features: ["Real-time Tracking", "Auto Payments", "Team Management", "Reports"],
  },
  {
    id: 2,
    slug: "smart-attendance",
    title: "Smart Attendance Tracker",
    description: "Real-time attendance management system with biometric integration, user authentication, comprehensive reporting dashboard, and team analytics.",
    image: "/projects/attendance-demo.svg",
    tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    category: "fullstack",
    platform: "Web",
    liveUrl: "https://smartattend.fayastech.com/",
    githubUrl: "#",
    demoVideo: "https://youtube.com/watch?v=demo2",
    featured: true,
    stats: { stars: 89, views: "12K", forks: 21 },
    color: "from-cyan-500 to-blue-500",
    features: ["Biometric Support", "Live Updates", "Analytics", "Export Data"],
  },
  {
    id: 3,
    slug: "ai-analytics",
    title: "AI Analytics Dashboard",
    description: "Modern analytics platform with AI-powered insights, real-time data visualization, predictive modeling, and automated reporting capabilities.",
    image: "/projects/analytics-demo.svg",
    tags: ["React", "TypeScript", "Python", "TensorFlow", "D3.js"],
    category: "data",
    platform: "Web",
    liveUrl: "#",
    githubUrl: "#",
    demoVideo: "https://youtube.com/watch?v=demo3",
    featured: true,
    stats: { stars: 156, views: "8.9K", forks: 43 },
    color: "from-emerald-500 to-green-500",
    features: ["AI Predictions", "Real-time Charts", "Custom Reports", "Alerts"],
  },
  {
    id: 7,
    slug: "flutter-food-delivery",
    title: "Food Delivery App",
    description: "Complete food delivery solution with Flutter featuring restaurant listings, real-time order tracking, payment integration, and driver app.",
    image: "/projects/flutter-food.svg",
    tags: ["Flutter", "Dart", "Firebase", "Google Maps", "Stripe"],
    category: "mobile",
    platform: "iOS / Android",
    liveUrl: "https://play.google.com/store/apps/details?id=com.fayastech.foodie",
    githubUrl: "#",
    demoVideo: "https://youtube.com/watch?v=demo8",
    featured: true,
    stats: { stars: 312, views: "25K", forks: 89 },
    color: "from-orange-500 to-amber-500",
    features: ["Live Tracking", "Multi-App", "Payments", "Reviews"],
  },
  {
    id: 4,
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-featured online store with Stripe payment integration, inventory management, customer analytics, and responsive design for all devices.",
    image: "/projects/ecommerce-demo.svg",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "Redis"],
    category: "fullstack",
    platform: "Web",
    liveUrl: "#",
    githubUrl: "#",
    demoVideo: "https://youtube.com/watch?v=demo4",
    featured: false,
    stats: { stars: 67, views: "5.2K", forks: 18 },
    color: "from-orange-500 to-red-500",
    features: ["Secure Payments", "Cart System", "Order Tracking", "Reviews"],
  },
  {
    id: 8,
    slug: "flutter-expense-tracker",
    title: "Expense Tracker App",
    description: "Beautiful Flutter app for tracking expenses, managing budgets, and visualizing spending patterns with charts and analytics.",
    image: "/projects/flutter-expense.svg",
    tags: ["Flutter", "Dart", "Firebase", "Hive", "Provider"],
    category: "mobile",
    platform: "iOS / Android",
    liveUrl: "https://play.google.com/store/apps/details?id=com.fayastech.expense",
    githubUrl: "#",
    demoVideo: "https://youtube.com/watch?v=demo7",
    featured: false,
    stats: { stars: 234, views: "18K", forks: 67 },
    color: "from-green-500 to-emerald-500",
    features: ["Budget Tracking", "Analytics", "Cloud Sync", "Dark Mode"],
  },
  {
    id: 9,
    slug: "flutter-social-app",
    title: "Social Media App",
    description: "Feature-rich social media application with posts, stories, reels, messaging, and real-time notifications built entirely in Flutter.",
    image: "/projects/flutter-social.svg",
    tags: ["Flutter", "Dart", "Firebase", "Agora", "Algolia"],
    category: "mobile",
    platform: "iOS / Android",
    liveUrl: "#",
    githubUrl: "#",
    demoVideo: "https://youtube.com/watch?v=demo9",
    featured: false,
    stats: { stars: 178, views: "14K", forks: 45 },
    color: "from-pink-500 to-rose-500",
    features: ["Stories", "Reels", "Messaging", "Video Calls"],
  },
  {
    id: 10,
    slug: "flutter-fitness-app",
    title: "Fitness & Workout App",
    description: "Comprehensive fitness app with workout plans, exercise library, progress tracking, and health metrics integration.",
    image: "/projects/flutter-fitness.svg",
    tags: ["Flutter", "Dart", "Firebase", "Health Kit", "Google Fit"],
    category: "mobile",
    platform: "iOS / Android",
    liveUrl: "https://play.google.com/store/apps/details?id=com.fayastech.fitness",
    githubUrl: "#",
    demoVideo: "https://youtube.com/watch?v=demo10",
    featured: false,
    stats: { stars: 145, views: "11K", forks: 38 },
    color: "from-blue-500 to-indigo-500",
    features: ["Workout Plans", "Progress Track", "Health Sync", "Achievements"],
  },
  {
    id: 5,
    slug: "iot-smart-home",
    title: "IoT Smart Home System",
    description: "Comprehensive IoT device monitoring and control system with real-time alerts, data logging, voice commands, and remote control capabilities.",
    image: "/projects/iot-demo.svg",
    tags: ["Python", "MQTT", "InfluxDB", "React", "Raspberry Pi"],
    category: "iot",
    platform: "IoT / Web",
    liveUrl: "#",
    githubUrl: "#",
    demoVideo: "https://youtube.com/watch?v=demo5",
    featured: false,
    stats: { stars: 45, views: "3.1K", forks: 12 },
    color: "from-cyan-500 to-teal-500",
    features: ["Voice Control", "Automation", "Energy Monitor", "Security"],
  },
  {
    id: 6,
    slug: "video-streaming",
    title: "Video Streaming Platform",
    description: "High-performance video streaming platform with adaptive bitrate, real-time chat, recommendations, and personalized content delivery.",
    image: "/projects/streaming-demo.svg",
    tags: ["React", "WebRTC", "Node.js", "FFmpeg", "HLS"],
    category: "media",
    platform: "Web",
    liveUrl: "#",
    githubUrl: "#",
    demoVideo: "https://youtube.com/watch?v=demo6",
    featured: false,
    stats: { stars: 92, views: "7.8K", forks: 28 },
    color: "from-pink-500 to-purple-500",
    features: ["HD Streaming", "Live Chat", "Watchlist", "Downloads"],
  },
]

const categories = [
  { id: 'all', label: 'All Projects', icon: Layers },
  { id: 'fullstack', label: 'Full Stack', icon: Code },
  { id: 'mobile', label: 'Flutter Apps', icon: Smartphone },
  { id: 'data', label: 'Data & AI', icon: Database },
  { id: 'iot', label: 'IoT', icon: Server },
  { id: 'media', label: 'Media', icon: Play },
]

// Project card component
const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative cursor-pointer ${project.featured ? 'md:col-span-2' : ''}`}
      >
      <div className="relative h-full bg-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-500">
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs font-semibold text-white">
            <Sparkles className="w-3 h-3" />
            Featured
          </div>
        )}

        {/* Image area with actual demo screenshot */}
        <div className="relative h-56 md:h-72 overflow-hidden">
          {/* Project Screenshot */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* Hover overlay with actions */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {project.liveUrl !== '#' && (
                <motion.button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-black font-medium hover:bg-cyan-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Monitor className="w-4 h-4" />
                  Live Demo
                </motion.button>
              )}
              <motion.button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  window.open(project.demoVideo, '_blank', 'noopener,noreferrer')
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-medium hover:bg-white/20 transition-colors border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </motion.button>
            </div>
            
            {/* GitHub Link */}
            <motion.button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(project.githubUrl, '_blank', 'noopener,noreferrer')
              }}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Github className="w-4 h-4" />
              View Source Code
            </motion.button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500" />
              {project.stats.stars}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {project.stats.views}
            </span>
            <span className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              {project.stats.forks}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.features.map((feature) => (
              <span
                key={feature}
                className={`px-2 py-1 text-xs rounded-md bg-gradient-to-r ${project.color} bg-opacity-10 text-white/80`}
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs bg-white/5 text-gray-400 rounded-lg border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View project link */}
          <motion.div
            className="flex items-center text-sm font-medium text-gray-400 group-hover:text-white transition-colors cursor-pointer"
            animate={{ x: isHovered ? 5 : 0 }}
          >
            <span>View Project Details</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </motion.div>
        </div>
      </div>
    </motion.div>
    </Link>
  )
}

// Filter button component
const FilterButton = ({ 
  category, 
  isActive, 
  onClick 
}: { 
  category: typeof categories[0], 
  isActive: boolean, 
  onClick: () => void 
}) => {
  const Icon = category.icon
  return (
    <motion.button
      onClick={onClick}
      className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
        isActive 
          ? 'text-white' 
          : 'text-gray-400 hover:text-white hover:bg-white/5'
      }`}
      whileTap={{ scale: 0.95 }}
    >
      {isActive && (
        <motion.div
          layoutId="activeFilter"
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      <Icon className="relative z-10 w-4 h-4" />
      <span className="relative z-10">{category.label}</span>
    </motion.button>
  )
}

export default function PortfolioModern() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work, showcasing full-stack development, 
            data analysis, and innovative solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <FilterButton
              key={category.id}
              category={category}
              isActive={activeFilter === category.id}
              onClick={() => setActiveFilter(category.id)}
            />
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/fayastech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
