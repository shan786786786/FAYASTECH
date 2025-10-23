'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin, Twitter, Download, Mail, ChevronDown, Code, Cpu, Zap, Sparkles, Instagram, Youtube } from 'lucide-react'
import { Button } from './ui/button'
import Tilt from 'react-parallax-tilt'

const socialLinks = [
  { icon: Github, label: 'GitHub', url: 'https://github.com/fayastech' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/fayastech' },
  { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/FayasTechy' },
  { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/fayastechy' },
  { icon: Youtube, label: 'YouTube', url: 'https://www.youtube.com/@fayastechy' }
]

const gamingSpecs = [
  { label: 'CPU', value: 'Intel i9-14900K', icon: Cpu, color: 'from-blue-500 to-cyan-500' },
  { label: 'GPU', value: 'RTX 5090', icon: Zap, color: 'from-green-500 to-emerald-500' },
  { label: 'RAM', value: '64GB DDR5', icon: Code, color: 'from-purple-500 to-pink-500' },
  { label: 'Storage', value: '4TB NVMe SSD', icon: Sparkles, color: 'from-orange-500 to-red-500' }
]

// Particle component for background
const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-cyan-500 rounded-full"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      y: [-100, -800],
      x: [0, Math.random() * 200 - 100]
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2
    }}
  />
)

// Floating elements component
const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
)

export default function EnhancedHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const scrollToNext = () => {
    const nextSection = document.getElementById('about')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  }

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20 md:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <Particle key={i} delay={i * 0.1} />
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20 bg-grid-pattern" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-4"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={textVariants} className="mb-6">
              <motion.span 
                className="inline-block text-cyan-500 font-semibold text-lg mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                Hello, I&apos;m
              </motion.span>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-4"
                variants={textVariants}
              >
                Fayas
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  Tech
                </motion.span>
              </motion.h1>
              <motion.div 
                className="text-2xl md:text-3xl text-gray-300 mb-6"
                variants={textVariants}
              >
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block"
                >
                  Full Stack Developer
                </motion.span>
                {' • '}
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="inline-block text-cyan-500"
                >
                  15+ Years Experience
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-400 mb-4 max-w-2xl"
            >
              <strong className="text-cyan-400">Full Stack Developer</strong> means I build complete digital solutions - 
              both the beautiful parts you see and the powerful systems that make everything work! 
              Think of me as a digital architect who designs and builds amazing websites, apps, and systems.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg mb-4"
            >
              <p className="text-gray-300 text-sm mb-3">
                <strong className="text-yellow-400">🚀 What I Do:</strong> I help businesses and people bring their ideas to life using technology. 
                From simple websites to complex apps, I make sure everything works perfectly and looks amazing!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                <div className="flex items-center text-cyan-400">
                  <span className="mr-1">📊</span> Data Analysis
                </div>
                <div className="flex items-center text-green-400">
                  <span className="mr-1">🖥️</span> Hardware & Networking
                </div>
                <div className="flex items-center text-purple-400">
                  <span className="mr-1">🎬</span> Video Editing
                </div>
                <div className="flex items-center text-pink-400">
                  <span className="mr-1">🎨</span> 3D Animation
                </div>
                <div className="flex items-center text-red-400">
                  <span className="mr-1">📹</span> CCTV Security
                </div>
                <div className="flex items-center text-blue-400">
                  <span className="mr-1">💻</span> Web Development
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button 
                variant="neon" 
                size="lg"
                className="group relative overflow-hidden"
                onClick={() => scrollToNext()}
              >
                <motion.span
                  className="relative z-10 flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group border-cyan-500/50 text-cyan-500 hover:bg-cyan-500/10"
              >
                <motion.span
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </motion.span>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-500 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-500/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Gaming Specs */}
          <motion.div variants={itemVariants} className="relative">
            <Tilt
              className="parallax-effect-img"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareBorderRadius="20px"
            >
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                <FloatingElement>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" />
                </FloatingElement>
                
                <motion.h3 
                  className="text-2xl font-bold text-white mb-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                    Tech Arsenal
                  </span>
                </motion.h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {gamingSpecs.map((spec, index) => (
                    <motion.div
                      key={spec.label}
                      className="relative group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="bg-gray-700/50 rounded-xl p-4 border border-gray-600/50 group-hover:border-cyan-500/50 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <spec.icon className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r ${spec.color}`} />
                          <motion.div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${spec.color}`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                          />
                        </div>
                        <div className="text-xs text-gray-400 mb-1">{spec.label}</div>
                        <div className="text-sm font-semibold text-white">{spec.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Performance Indicator */}
                <motion.div 
                  className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 }}
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Performance</span>
                    <span className="text-green-500 font-semibold">Optimal</span>
                  </div>
                  <motion.div 
                    className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden"
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="flex flex-col items-center text-gray-400 hover:text-cyan-500 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}