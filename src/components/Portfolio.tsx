'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Monitor, Smartphone, Server, Shield } from 'lucide-react'
import { Button } from './ui/button'

const projects = [
  {
    id: 1,
    title: 'SmartAttend SaaS Platform',
    description: 'Multi-tenant attendance management system with advanced analytics, role-based access control, and real-time reporting.',
    image: '/api/placeholder/600/400',
    category: 'Full-Stack',
    icon: Monitor,
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    features: ['Multi-tenant Architecture', 'Real-time Analytics', 'Role-based Access', 'API Integration'],
    metrics: ['500+ Users', '99.9% Uptime', '50ms Response Time'],
    links: {
      demo: '#',
      github: '#',
      live: '#'
    }
  },
  {
    id: 2,
    title: 'Enterprise Network Infrastructure',
    description: 'Complete network overhaul for 500+ users with 10Gb backbone, advanced security, and 99.9% uptime guarantee.',
    image: '/api/placeholder/600/400',
    category: 'Networking',
    icon: Server,
    technologies: ['Cisco', 'pfSense', 'Ubiquiti', 'VLAN', 'Zabbix'],
    features: ['10Gb Backbone', 'Advanced Firewall', 'Wi-Fi 6 Deployment', 'Network Monitoring'],
    metrics: ['1000% Speed Increase', 'Zero Breaches', '99.9% Uptime'],
    links: {
      demo: '#',
      case_study: '#'
    }
  },
  {
    id: 3,
    title: 'React Native Mobile App',
    description: 'Cross-platform mobile application with 60fps animations, offline support, and seamless user experience.',
    image: '/api/placeholder/600/400',
    category: 'Mobile',
    icon: Smartphone,
    technologies: ['React Native', 'Expo', 'Firebase', 'Redux', 'TypeScript'],
    features: ['Cross-platform', '60fps Animations', 'Offline Support', 'Push Notifications'],
    metrics: ['10k+ Downloads', '4.8★ Rating', '98% Crash-free'],
    links: {
      demo: '#',
      github: '#',
      playstore: '#'
    }
  },
  {
    id: 4,
    title: 'Advanced CCTV Security System',
    description: 'AI-powered surveillance system with facial recognition, behavioral analysis, and cloud storage integration.',
    image: '/api/placeholder/600/400',
    category: 'Security',
    icon: Shield,
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Raspberry Pi', 'Cloud Storage'],
    features: ['Facial Recognition', 'Behavior Analysis', 'Cloud Storage', 'Mobile Alerts'],
    metrics: ['95% Theft Reduction', '24/7 Monitoring', '30-day Storage'],
    links: {
      demo: '#',
      documentation: '#'
    }
  }
]

const categories = ['All', 'Full-Stack', 'Networking', 'Mobile', 'Security']

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcase of innovative solutions that deliver measurable results and exceptional user experiences.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={cardVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-gray-700 text-gray-300 hover:border-cyan-500 hover:text-cyan-500 hover:bg-gray-800"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 z-10" />
                  <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-gray-600" />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                    <div className="flex gap-4">
                      {project.links.demo && (
                        <Button size="sm" variant="neon">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                      {project.links.github && (
                        <Button size="sm" variant="outline">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <project.icon className="w-5 h-5 text-gray-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-xs text-gray-300">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-4 text-xs">
                    {project.metrics.map((metric) => (
                      <div key={metric} className="text-cyan-500 font-semibold">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={cardVariants} className="text-center mt-16">
            <p className="text-gray-300 mb-6">
              Interested in working together? Let&apos;s discuss your next project.
            </p>
            <Button variant="neon" size="lg">
              Start a Project
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}