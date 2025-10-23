'use client'

import { motion } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Star, Eye, GitFork, ExternalLink, Github, Zap, Rocket, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Tilt from 'react-parallax-tilt'
import { useEffect, useState } from 'react'

const projects = {
  'mobile-web-app': {
    title: "Mobile Web App Development",
    description: "Progressive Web Apps (PWA) with offline capabilities, push notifications, and native-like experience across all devices.",
    tags: ["React", "PWA", "Service Workers", "Firebase"],
    metrics: { stars: 421, forks: 156, views: "8.9k" },
    color: "from-blue-500 to-indigo-500",
    features: [
      "📱 Native-like Experience",
      "🔔 Push Notifications",
      "📡 Offline Capabilities",
      "⚡ Lightning Fast Loading"
    ],
    tech: "Progressive Web App with service workers and modern React"
  },
  'attendance-system': {
    title: "Role-Based Attendance Tracking System",
    description: "Enterprise attendance management with role-based access control, real-time tracking, reports, and biometric integration.",
    tags: ["Node.js", "MongoDB", "Role-Based Auth", "Biometric API"],
    metrics: { stars: 387, forks: 143, views: "7.2k" },
    color: "from-emerald-500 to-teal-500",
    features: [
      "👤 Role-Based Access Control",
      "⏱️ Real-time Tracking",
      "📊 Advanced Reports & Analytics",
      "🔐 Biometric Integration"
    ],
    tech: "Node.js backend with MongoDB and advanced role management"
  },
  'ai-dashboard': {
    title: "AI-Powered Dashboard",
    description: "Modern analytics dashboard with real-time AI insights, data visualization, and machine learning predictions.",
    tags: ["React", "TypeScript", "Python", "TensorFlow"],
    metrics: { stars: 156, forks: 43, views: "2.3k" },
    color: "from-purple-500 to-pink-500",
    features: [
      "🤖 AI-Powered Predictions",
      "📊 Real-time Data Visualization", 
      "🎯 Smart Analytics Engine",
      "⚡ Lightning Fast Performance"
    ],
    tech: "Built with cutting-edge ML algorithms and modern React"
  },
  'crypto-bot': {
    title: "Crypto Trading Bot",
    description: "Automated cryptocurrency trading bot with advanced algorithms, risk management, and real-time market analysis.",
    tags: ["Node.js", "WebSocket", "MongoDB", "Docker"],
    metrics: { stars: 289, forks: 67, views: "5.1k" },
    color: "from-green-500 to-emerald-500",
    features: [
      "💰 Automated Trading",
      "📈 Market Analysis",
      "🛡️ Risk Management",
      "⚡ Real-time Updates"
    ],
    tech: "Advanced trading algorithms with WebSocket connections"
  },
  'fitness-app': {
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features.",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    metrics: { stars: 94, forks: 28, views: "1.8k" },
    color: "from-orange-500 to-red-500",
    features: [
      "💪 Workout Plans",
      "📱 Cross-Platform",
      "📊 Progress Tracking",
      "👥 Social Features"
    ],
    tech: "React Native with Firebase backend integration"
  },
  'blockchain-explorer': {
    title: "Blockchain Explorer",
    description: "Comprehensive blockchain explorer with transaction tracking, wallet analysis, and network statistics.",
    tags: ["Vue.js", "Nuxt.js", "Web3", "GraphQL"],
    metrics: { stars: 203, forks: 89, views: "4.2k" },
    color: "from-blue-500 to-cyan-500",
    features: [
      "⛓️ Transaction Tracking",
      "💼 Wallet Analysis",
      "📊 Network Stats",
      "🔍 Advanced Search"
    ],
    tech: "Vue.js powered with Web3 blockchain integration"
  },
  'iot-home': {
    title: "IoT Home Automation",
    description: "Smart home automation system with IoT sensors, voice control, and mobile app integration.",
    tags: ["Arduino", "Raspberry Pi", "Python", "MQTT"],
    metrics: { stars: 127, forks: 34, views: "2.9k" },
    color: "from-indigo-500 to-purple-500",
    features: [
      "🏠 Smart Home Control",
      "🎤 Voice Commands",
      "📱 Mobile Integration",
      "🌡️ Sensor Network"
    ],
    tech: "IoT devices connected via MQTT protocol"
  },
  'gaming-platform': {
    title: "Gaming Platform",
    description: "Multiplayer gaming platform with real-time gameplay, user profiles, and tournament system.",
    tags: ["Unity", "C#", "Socket.io", "PostgreSQL"],
    metrics: { stars: 341, forks: 112, views: "7.8k" },
    color: "from-pink-500 to-rose-500",
    features: [
      "🎮 Multiplayer Gaming",
      "🏆 Tournament System",
      "👤 User Profiles",
      "⚡ Real-time Sync"
    ],
    tech: "Unity engine with real-time Socket.io connections"
  }
}

export default function DemoPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const project = projects[slug as keyof typeof projects]

  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100
    }))
    setParticles(newParticles)
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Button onClick={() => router.push('/')} variant="neon">
            <ArrowLeft className="mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute w-2 h-2 bg-gradient-to-r ${project.color} rounded-full blur-sm`}
          style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            onClick={() => router.push('/')} 
            variant="outline"
            className="mb-8 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Portfolio
          </Button>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className={`w-24 h-24 mx-auto bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center shadow-2xl`}>
              <Rocket className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-xl rounded-xl px-6 py-3 border border-gray-700/50"
            >
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-white font-bold">{project.metrics.stars}</span>
                <span className="text-gray-400 text-sm">stars</span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-xl rounded-xl px-6 py-3 border border-gray-700/50"
            >
              <div className="flex items-center gap-2">
                <GitFork className="w-5 h-5 text-blue-500" />
                <span className="text-white font-bold">{project.metrics.forks}</span>
                <span className="text-gray-400 text-sm">forks</span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-xl rounded-xl px-6 py-3 border border-gray-700/50"
            >
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-green-500" />
                <span className="text-white font-bold">{project.metrics.views}</span>
                <span className="text-gray-400 text-sm">views</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 3D Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {project.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#06b6d4"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all h-full"
                >
                  <div className="text-4xl mb-3">{feature.split(' ')[0]}</div>
                  <p className="text-white font-semibold">{feature.substring(feature.indexOf(' ') + 1)}</p>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Main Demo Card */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1500}
          glareEnable={true}
          glareMaxOpacity={0.2}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 mb-12"
          >
            {/* Demo Preview */}
            <div className={`relative h-96 bg-gradient-to-br ${project.color} rounded-2xl mb-6 overflow-hidden`}>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-32 h-32 text-white/80 mx-auto mb-4" />
                  </motion.div>
                  <h2 className="text-4xl font-bold text-white mb-2">Interactive Demo</h2>
                  <p className="text-white/80 text-lg">Experience the future of technology</p>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full"
                animate={{ 
                  y: [0, -20, 0],
                  x: [0, 10, 0] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-32 h-32 bg-white/20 rounded-full"
                animate={{ 
                  y: [0, 20, 0],
                  x: [0, -10, 0] 
                }}
                transition={{ duration: 3.5, repeat: Infinity }}
              />
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-4 py-2 bg-gradient-to-r ${project.color} rounded-xl text-white font-semibold shadow-lg`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 text-lg">
              {project.tech}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="neon" size="lg" className="shadow-2xl shadow-cyan-500/30">
                <ExternalLink className="mr-2 w-5 h-5" />
                Launch Live Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
              >
                <Github className="mr-2 w-5 h-5" />
                View Source Code
              </Button>
            </div>
          </motion.div>
        </Tilt>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in similar projects?
          </h3>
          <Button 
            onClick={() => router.push('/')} 
            variant="neon"
            size="lg"
            className="shadow-2xl shadow-cyan-500/30"
          >
            View All Projects
            <Sparkles className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
