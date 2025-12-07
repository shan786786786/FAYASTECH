'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  Code2, Database, Palette, Server, Shield, Smartphone, 
  TrendingUp, Cpu, Video, Wifi, ArrowRight, CheckCircle2 
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
    color: 'from-cyan-500 to-blue-500',
    tech: ['React', 'Next.js', 'TypeScript']
  },
  {
    icon: Database,
    title: 'Data Analysis',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    color: 'from-purple-500 to-pink-500',
    tech: ['Python', 'SQL', 'Power BI']
  },
  {
    icon: Server,
    title: 'Backend Systems',
    description: 'Scalable server architectures and APIs that power your applications.',
    color: 'from-green-500 to-emerald-500',
    tech: ['Node.js', 'MongoDB', 'Redis']
  },
  {
    icon: Cpu,
    title: 'Hardware & Networking',
    description: 'Complete IT infrastructure solutions from setup to maintenance.',
    color: 'from-orange-500 to-red-500',
    tech: ['Cisco', 'Windows Server', 'Linux']
  },
  {
    icon: Video,
    title: 'Video Production',
    description: 'Professional video editing and 3D animation for compelling content.',
    color: 'from-rose-500 to-pink-500',
    tech: ['Premiere Pro', 'After Effects', 'Blender']
  },
  {
    icon: Shield,
    title: 'Security Systems',
    description: 'CCTV installation and security solutions to protect what matters.',
    color: 'from-indigo-500 to-purple-500',
    tech: ['Hikvision', 'Dahua', 'IP Systems']
  },
]

const stats = [
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
]

// Animated counter
const AnimatedCounter = ({ target, suffix }: { target: number, suffix: string }) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const stepValue = target / steps
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        setCount(Math.min(Math.round(stepValue * currentStep), target))
        if (currentStep >= steps) clearInterval(timer)
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

// Service card component
const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative h-full p-6 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden">
        {/* Gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />
        
        {/* Icon */}
        <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-5`}>
          <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
            <service.icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
          {service.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Learn more link */}
        <motion.div 
          className="flex items-center text-sm text-gray-500 group-hover:text-white transition-colors"
          animate={{ x: isHovered ? 5 : 0 }}
        >
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </motion.div>

        {/* Corner accent */}
        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-10 blur-2xl`} />
      </div>
    </motion.div>
  )
}

// Timeline item
const TimelineItem = ({ year, title, description, isLast }: { year: string, title: string, description: string, isLast?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 pb-8"
  >
    {/* Line */}
    {!isLast && (
      <div className="absolute left-[11px] top-8 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-transparent" />
    )}
    
    {/* Dot */}
    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-cyan-500" />
    </div>

    {/* Content */}
    <div className="text-cyan-500 text-sm font-medium mb-1">{year}</div>
    <h4 className="text-white font-semibold mb-1">{title}</h4>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
)

export default function AboutModern() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <section id="about" ref={containerRef} className="relative py-16 md:py-20 bg-black overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4"
          >
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Crafting Digital{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Excellence
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I&apos;m a passionate technologist who transforms complex challenges into elegant solutions. 
            With over 15 years in the industry, I&apos;ve mastered the art of building things that matter.
          </p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
            
            {/* Image container */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-white/20 transition-all duration-500">
              <Image
                src="/DQ.png"
                alt="Fayas - Full Stack Developer"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>

            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin-slow" style={{ animationDuration: '20s' }} />
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-6 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 text-center hover:border-cyan-500/30 transition-colors">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              My Journey in Tech
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Started tinkering with computers when I was a kid, and never stopped. What began as 
              curiosity turned into a career spanning hardware, software, and everything in between.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I&apos;ve built systems for startups and enterprises alike. Fixed code that others 
              said was unfixable. Deployed solutions that scaled to millions of users. Every 
              project taught me something new.
            </p>

            {/* Key points */}
            <div className="space-y-3 pt-4">
              {[
                'Full-stack development with modern frameworks',
                'Data analysis that drives business decisions',
                'Infrastructure that scales and performs',
                'Security-first approach to all solutions'
              ].map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 p-8"
          >
            <h4 className="text-xl font-semibold text-white mb-6">Career Highlights</h4>
            <TimelineItem 
              year="2010" 
              title="Started as IT Support"
              description="Began my journey fixing computers and building networks"
            />
            <TimelineItem 
              year="2014" 
              title="Moved to Development"
              description="Transitioned to full-stack web development"
            />
            <TimelineItem 
              year="2018" 
              title="Data Analytics Focus"
              description="Added data analysis and visualization to my skillset"
            />
            <TimelineItem 
              year="2020" 
              title="Independent Consultant"
              description="Started working with clients worldwide"
              isLast
            />
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I Can Do For You
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive suite of services to bring your vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
