'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin, Twitter, Download, Mail, ChevronDown, Sparkles, Instagram, Youtube, Terminal, Layers, Rocket, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

const socialLinks = [
  { icon: Github, label: 'GitHub', url: 'https://github.com/fayastech', color: 'hover:bg-gray-700' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/fayastech', color: 'hover:bg-blue-600' },
  { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/FayasTechy', color: 'hover:bg-sky-500' },
  { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/fayastechy', color: 'hover:bg-pink-600' },
  { icon: Youtube, label: 'YouTube', url: 'https://www.youtube.com/@fayastechy', color: 'hover:bg-red-600' }
]

const techStack = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Python', color: '#3776AB' },
  { name: 'MongoDB', color: '#47A248' },
]

// Animated gradient blob
const GradientBlob = ({ className, colors, delay = 0 }: { className: string, colors: string, delay?: number }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
    style={{ background: colors }}
    animate={{
      scale: [1, 1.2, 1],
      x: [0, 30, -30, 0],
      y: [0, -30, 30, 0],
    }}
    transition={{
      duration: 15,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
)

// Floating tech badge
const TechBadge = ({ tech, index }: { tech: typeof techStack[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.5 + index * 0.1, type: "spring" }}
    whileHover={{ scale: 1.1, y: -5 }}
    className="px-3 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium"
    style={{ color: tech.color }}
  >
    {tech.name}
  </motion.div>
)

// Aurora background effect
const AuroraBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
    
    {/* Animated aurora lines */}
    <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aurora1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="aurora2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
          <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,200 Q400,100 800,200 T1600,200"
        fill="none"
        stroke="url(#aurora1)"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.path
        d="M0,300 Q400,200 800,300 T1600,300"
        fill="none"
        stroke="url(#aurora2)"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  </div>
)

// Animated typing effect
const TypeWriter = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="text-cyan-400"
      >
        |
      </motion.span>
    </span>
  )
}

// Magnetic button effect
const MagneticButton = ({ children, onClick, variant = "primary" }: { children: React.ReactNode, onClick?: () => void, variant?: "primary" | "secondary" }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.2)
    y.set((e.clientY - centerY) * 0.2)
  }, [x, y])

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  const baseStyles = "relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 overflow-hidden group"
  const primaryStyles = "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
  const secondaryStyles = "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20"

  return (
    <motion.button
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`${baseStyles} ${variant === "primary" ? primaryStyles : secondaryStyles}`}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
        />
      )}
    </motion.button>
  )
}

// Stats card with counter animation
const StatCard = ({ value, label, suffix = "", delay = 0 }: { value: number, label: string, suffix?: string, delay?: number }) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const stepValue = value / steps
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        setCount(Math.min(Math.round(stepValue * currentStep), value))
        if (currentStep >= steps) clearInterval(timer)
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  )
}

export default function EnhancedHero() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16">
      {/* Aurora Background */}
      <AuroraBackground />
      
      {/* Gradient Blobs */}
      <GradientBlob 
        className="w-[600px] h-[600px] -top-40 -left-40" 
        colors="linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
      />
      <GradientBlob 
        className="w-[500px] h-[500px] top-1/2 -right-40" 
        colors="linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
        delay={5}
      />
      <GradientBlob 
        className="w-[400px] h-[400px] -bottom-20 left-1/3" 
        colors="linear-gradient(135deg, #10b981 0%, #06b6d4 100%)"
        delay={10}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Main Content */}
      <motion.div
        ref={ref}
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-4"
      >
        <div className="max-w-6xl mx-auto">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </motion.div>
              <span className="text-sm text-gray-300">Available for new projects</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                  Fayas
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </h1>
            <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300 h-[1.5em]">
              <TypeWriter words={['Full Stack Developer', 'Data Analyst', 'Tech Expert', 'Problem Solver']} />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-8"
          >
            With <span className="text-cyan-400 font-semibold">15+ years</span> of experience, I craft 
            high-performance web applications and solve complex technical challenges. 
            From concept to deployment, I turn ideas into reality.
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {techStack.map((tech, index) => (
              <TechBadge key={tech.name} tech={tech} index={index} />
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <MagneticButton variant="primary" onClick={scrollToContact}>
              <Mail className="w-5 h-5" />
              Let's Talk
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            
            <MagneticButton variant="secondary">
              <Download className="w-5 h-5" />
              Download CV
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center gap-8 md:gap-16 mb-12"
          >
            <StatCard value={100} label="Projects" suffix="+" delay={1.3} />
            <div className="w-px bg-white/10" />
            <StatCard value={50} label="Clients" suffix="+" delay={1.4} />
            <div className="w-px bg-white/10" />
            <StatCard value={15} label="Years Exp" suffix="+" delay={1.5} />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center text-gray-400 hover:text-white border border-white/10 hover:border-white/20 transition-all ${social.color}`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            className="flex flex-col items-center text-gray-500 hover:text-white transition-colors group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-1.5 bg-current rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
