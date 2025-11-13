'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Monitor, Smartphone, Server, Shield, Star, TrendingUp } from 'lucide-react'
import { Button } from './ui/button'
import { useState } from 'react'
import Tilt from 'react-parallax-tilt'
import ProjectImage from './ProjectImage'

const projects = [
  {
    id: 1,
    title: "Production Management System",
    description: "Complete solution for managing your production crew, projects, and payments. Features employee management, project tracking, work entries with automatic calculations, and comprehensive payment processing.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Next.js", "MongoDB", "Live App"],
    category: "web",
    slug: "production-management-system",
    liveUrl: "https://evans.fayastech.com/",
    featured: true,
    metrics: { stars: 650, forks: 220, views: "15k" },
    directLinkOnly: true,
    customStyle: "game"
  },
  {
    id: 2,
    title: "Smart Attendance Tracker",
    description: "Live production web app for tracking attendance with real-time updates, user management, and comprehensive reporting. Built with modern tech stack.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Node.js", "MongoDB", "Live App"],
    category: "web",
    slug: "smartattend",
    liveUrl: "https://smartattend.fayastech.com/",
    featured: true,
    metrics: { stars: 500, forks: 180, views: "12k" }
  },
  {
    id: 3,
    title: "Mobile Web App Development",
    description: "Progressive Web Apps (PWA) with offline capabilities, push notifications, and native-like experience across all devices.",
    image: "/api/placeholder/600/400",
    tags: ["React", "PWA", "Service Workers", "Firebase"],
    category: "mobile",
    slug: "mobile-web-app",
    featured: true,
    metrics: { stars: 421, forks: 156, views: "8.9k" }
  },
  {
    id: 4,
    title: "Role-Based Attendance Tracking System",
    description: "Enterprise attendance management with role-based access control, real-time tracking, reports, and biometric integration.",
    image: "/api/placeholder/600/400",
    tags: ["Node.js", "MongoDB", "Role-Based Auth", "Biometric API"],
    category: "backend",
    slug: "attendance-system",
    featured: true,
    metrics: { stars: 387, forks: 143, views: "7.2k" }
  },
  {
    id: 5,
    title: "AI-Powered Dashboard",
    description: "Modern analytics dashboard with real-time AI insights, data visualization, and machine learning predictions.",
    image: "/api/placeholder/600/400",
    tags: ["React", "TypeScript", "Python", "TensorFlow"],
    category: "web",
    slug: "ai-dashboard",
    featured: true,
    metrics: { stars: 156, forks: 43, views: "2.3k" }
  },
  {
    id: 6,
    title: "Crypto Trading Bot",
    description: "Automated cryptocurrency trading bot with advanced algorithms, risk management, and real-time market analysis.",
    image: "/api/placeholder/600/400",
    tags: ["Node.js", "WebSocket", "MongoDB", "Docker"],
    category: "backend",
    slug: "crypto-bot",
    featured: false,
    metrics: { stars: 289, forks: 67, views: "5.1k" }
  },
  {
    id: 7,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features.",
    image: "/api/placeholder/600/400",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    category: "mobile",
    slug: "fitness-app",
    featured: false,
    metrics: { stars: 94, forks: 28, views: "1.8k" }
  },
  {
    id: 8,
    title: "Blockchain Explorer",
    description: "Comprehensive blockchain explorer with transaction tracking, wallet analysis, and network statistics.",
    image: "/api/placeholder/600/400",
    tags: ["Vue.js", "Nuxt.js", "Web3", "GraphQL"],
    category: "web",
    slug: "blockchain-explorer",
    featured: false,
    metrics: { stars: 203, forks: 89, views: "4.2k" }
  },
  {
    id: 9,
    title: "IoT Home Automation",
    description: "Smart home automation system with IoT sensors, voice control, and mobile app integration.",
    image: "/api/placeholder/600/400",
    tags: ["Arduino", "Raspberry Pi", "Python", "MQTT"],
    category: "iot",
    slug: "iot-home",
    featured: false,
    metrics: { stars: 127, forks: 34, views: "2.9k" }
  },
  {
    id: 10,
    title: "Gaming Platform",
    description: "Multiplayer gaming platform with real-time gameplay, user profiles, and tournament system.",
    image: "/api/placeholder/600/400",
    tags: ["Unity", "C#", "Socket.io", "PostgreSQL"],
    category: "game",
    slug: "gaming-platform",
    featured: false,
    metrics: { stars: 341, forks: 112, views: "7.8k" }
  }
]

const categories = [
  { id: 'all', label: 'All Projects', icon: Monitor },
  { id: 'web', label: 'Web Apps', icon: Monitor },
  { id: 'mobile', label: 'Mobile', icon: Smartphone },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'iot', label: 'IoT', icon: Shield },
  { id: 'game', label: 'Gaming', icon: Star }
]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const isProductionManagement = project.id === 1
  const isGamingPlatform = project.id === 10

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        scale={1.02}
        glareEnable={true}
        glareMaxOpacity={(isProductionManagement || isGamingPlatform) ? 0.45 : 0.2}
        glareColor={(isProductionManagement || isGamingPlatform) ? "#c084fc" : "#06b6d4"}
        glarePosition="all"
        glareBorderRadius="20px"
        className="w-full h-full"
      >
        <motion.div
          className={`relative backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 ${
            (isProductionManagement || isGamingPlatform) 
              ? 'bg-gradient-to-br from-purple-900/60 via-purple-800/40 to-black/80 border border-purple-700/50 hover:border-purple-500/70' 
              : 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 hover:border-cyan-500/50'
          }`}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ y: -5 }}
        >
          {/* Featured Badge */}
          {project.featured && (
            <motion.div
              className={`absolute top-4 right-4 z-10 text-white px-3 py-1 rounded-full text-xs font-semibold ${
                (isProductionManagement || isGamingPlatform) ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              Featured
            </motion.div>
          )}

          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <ProjectImage 
              category={project.category}
              title={project.title}
              className="w-full h-full"
              customStyle={(project as any).customStyle}
            />

            {/* Pink Glow Accent at Top - Gaming/Production Cards */}
            {(isProductionManagement || isGamingPlatform) && (
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-pink-500/40 via-purple-500/30 to-transparent pointer-events-none" />
            )}

            {/* Metrics Overlay */}
            <motion.div
              className="absolute top-4 right-4 flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-white flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500" />
                {project.metrics.stars}
              </div>
              <div className="bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-white flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-green-500" />
                {project.metrics.views}
              </div>
            </motion.div>
          </div>

          {/* Project Content */}
          <div className="p-6">
            <motion.h3 
              className={`text-xl font-bold text-white mb-2 transition-colors ${
                (isProductionManagement || isGamingPlatform) ? 'group-hover:text-purple-500' : 'group-hover:text-cyan-500'
              }`}
              layout
            >
              {project.title}
            </motion.h3>
            
            <motion.p 
              className="text-gray-400 text-sm mb-4 line-clamp-2"
              layout
            >
              {project.description}
            </motion.p>

            {/* Tags */}
            <motion.div 
              className="flex flex-wrap gap-2 mb-4"
              layout
            >
              {project.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  className={`px-2 py-1 bg-gray-700/50 text-xs rounded-lg border border-gray-600/50 ${
                    (isProductionManagement || isGamingPlatform) ? 'text-purple-500' : 'text-cyan-500'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + tagIndex * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex gap-3"
              layout
            >
              <Button
                variant="neon"
                size="sm"
                className={`flex-1 group/btn shadow-lg transition-shadow ${
                  (isProductionManagement || isGamingPlatform) ? 'shadow-purple-500/20 hover:shadow-purple-500/40' : 'shadow-cyan-500/20 hover:shadow-cyan-500/40'
                }`}
                onClick={() => {
                  if (project.liveUrl) {
                    window.open(project.liveUrl, '_blank')
                  } else {
                    window.location.href = `/demo/${project.slug}`
                  }
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                {project.liveUrl ? 'Live Demo' : 'View Demo'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className={`transition-all shadow-lg ${
                  (isProductionManagement || isGamingPlatform)
                    ? 'border-purple-500/50 text-purple-400 hover:text-white hover:bg-purple-500/10 hover:border-purple-500' 
                    : 'border-cyan-500/50 text-cyan-400 hover:text-white hover:bg-cyan-500/10 hover:border-cyan-500'
                }`}
                onClick={() => {
                  if (project.liveUrl) {
                    window.open(project.liveUrl, '_blank')
                  } else {
                    window.location.href = `/demo/${project.slug}`
                  }
                }}
              >
                <Github className="w-4 h-4 mr-1" />
                Details
              </Button>
            </motion.div>
          </div>

          {/* Hover Glow Effect */}
          <motion.div
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
              (isProductionManagement || isGamingPlatform) ? 'bg-gradient-to-r from-purple-500/5 to-pink-500/5' : 'bg-gradient-to-r from-cyan-500/5 to-blue-500/5'
            }`}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </motion.div>
      </Tilt>
    </motion.div>
  )
}

export default function EnhancedPortfolio() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Projects</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore my latest work featuring cutting-edge technologies, innovative solutions, and impactful results.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                    activeCategory === category.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-500'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-400 hover:border-gray-600/50 hover:text-white'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </motion.button>
              )
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <Button
              variant="neon"
              size="lg"
              className="shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
              onClick={() => alert('🎯 Full Portfolio Coming Soon!\n\n100+ projects across:\n\n💻 Data Analysis\n🖥️ Hardware & Networking\n🎬 Video Editing\n🌐 Web Development\n🔐 Cybersecurity')}
            >
              <motion.span
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                View All 100+ Projects
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.div>
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}