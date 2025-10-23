'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Zap, Users, Award } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Tilt from 'react-parallax-tilt'

const stats = [
  { icon: Code, label: 'Projects Completed', value: '100+', numericValue: 100, suffix: '+' },
  { icon: Zap, label: 'Performance Boost', value: '300%', numericValue: 300, suffix: '%' },
  { icon: Users, label: 'Happy Clients', value: '50+', numericValue: 50, suffix: '+' },
  { icon: Award, label: 'Years Experience', value: '15+', numericValue: 15, suffix: '+' },
]

const skills = [
  { name: 'Data Analysis & Visualization (Finding Patterns in Numbers)', level: 98 },
  { name: 'Computer Hardware & Networking (Building & Connecting Computers)', level: 98 },
  { name: 'Video Editing (Creating Amazing Videos)', level: 95 },
  { name: '3D Animation (Making Things Come to Life)', level: 92 },
  { name: 'CCTV Installation & Security (Keeping Places Safe)', level: 96 },
  { name: 'Frontend Development (Making Websites Beautiful)', level: 96 },
  { name: 'Backend Development (Building the Brain)', level: 94 },
]

// Animated Counter Component with reset capability
const AnimatedCounter = ({ target, suffix, inView }: { target: number, suffix: string, inView: boolean }) => {
  const [count, setCount] = useState(0)
  const prevInViewRef = useRef(false)

  useEffect(() => {
    // Reset counter when coming back into view
    if (inView && !prevInViewRef.current) {
      setCount(0)
      
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepValue = target / steps
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const newValue = Math.min(Math.round(stepValue * currentStep), target)
        setCount(newValue)
        
        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, stepDuration)

      prevInViewRef.current = true
      return () => clearInterval(timer)
    } else if (!inView) {
      prevInViewRef.current = false
    }
  }, [target, inView])

  return (
    <span className="text-3xl font-bold text-white">
      {count}{suffix}
    </span>
  )
}

export default function About() {
  // Re-trigger animations every time section comes into view
  const [ref, inView] = useInView({
    triggerOnce: false, // Changed to false to retrigger
    threshold: 0.1
  })

  // Separate refs for different animations
  const [statsRef, statsInView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  })

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }



  return (
    <section id="about" className="py-12 md:py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">FayasTech</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming ideas into powerful digital solutions with cutting-edge technology 
              and innovative design approaches.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            ref={statsRef}
            variants={itemVariants} 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <stat.icon className="w-8 h-8 text-cyan-500 mx-auto mb-4" />
                <div className="mb-2">
                  <AnimatedCounter 
                    target={stat.numericValue} 
                    suffix={stat.suffix} 
                    inView={statsInView}
                  />
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Building Amazing Digital Solutions That Everyone Can Use
              </h3>
              
              {/* Kid-Friendly Introduction */}
              <div className="p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-lg">
                <h4 className="text-lg font-semibold text-green-400 mb-2">What I Do (Explained Simply):</h4>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Think of me as a digital builder! Just like how architects design and build houses, I design and build websites, 
                  apps, and computer systems. I help businesses solve problems using technology - kind of like a tech superhero! 🦸‍♂️
                </p>
              </div>

              {/* Professional Description */}
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-cyan-400">Full Stack Developer</strong> means I can build the complete package - both the pretty front part you see 
                (like the colorful buttons and animations on websites) and the powerful back part that makes everything work 
                (like the brain of a computer that stores and manages all the information).
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                With over <strong className="text-cyan-400">15 years of experience</strong>, I&apos;ve completed <strong className="text-cyan-400">100+ projects</strong> 
                helping businesses and people create amazing digital experiences. I&apos;m like a tech doctor who can:
                <br />• <strong>Diagnose</strong> what&apos;s wrong with websites or systems
                <br />• <strong>Cure</strong> problems by writing special computer code
                <br />• <strong>Prevent</strong> future issues by building strong, secure systems
              </p>

              {/* Technical Expertise in Simple Terms */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">What I&apos;m Really Good At:</h4>
                
                {/* Frontend Technologies */}
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={800}
                  scale={1.05}
                  transitionSpeed={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.25}
                  glareColor="#a855f7"
                  glareBorderRadius="12px"
                >
                  <div className="p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg hover:border-purple-500/50 transition-all shadow-xl">
                    <h5 className="text-purple-400 font-semibold mb-2">🎨 Frontend (The Pretty Part You See)</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
                      <li>• <strong>React/Next.js</strong> - Building interactive websites</li>
                      <li>• <strong>TypeScript</strong> - Writing safer, better code</li>
                      <li>• <strong>Tailwind CSS</strong> - Making things look beautiful</li>
                      <li>• <strong>Framer Motion</strong> - Creating smooth animations</li>
                      <li>• <strong>HTML/CSS</strong> - The foundation of all websites</li>
                      <li>• <strong>JavaScript</strong> - Making websites interactive</li>
                    </ul>
                  </div>
                </Tilt>

                {/* Backend Technologies */}
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={800}
                  scale={1.05}
                  transitionSpeed={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.25}
                  glareColor="#3b82f6"
                  glareBorderRadius="12px"
                >
                  <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg hover:border-blue-500/50 transition-all shadow-xl">
                    <h5 className="text-blue-400 font-semibold mb-2">⚡ Backend (The Brain Behind Everything)</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
                      <li>• <strong>Node.js</strong> - Server-side programming</li>
                      <li>• <strong>Python</strong> - Data analysis and automation</li>
                      <li>• <strong>Databases</strong> - Storing and managing information</li>
                      <li>• <strong>APIs</strong> - Connecting different systems</li>
                      <li>• <strong>Cloud Services</strong> - Making apps available worldwide</li>
                      <li>• <strong>Security</strong> - Keeping everything safe</li>
                    </ul>
                  </div>
                </Tilt>

                {/* Data Analysis */}
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={800}
                  scale={1.05}
                  transitionSpeed={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.25}
                  glareColor="#06b6d4"
                  glareBorderRadius="12px"
                >
                  <div className="p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-lg hover:border-cyan-500/50 transition-all shadow-xl">
                    <h5 className="text-cyan-400 font-semibold mb-2">📊 Data Analysis (Making Sense of Numbers)</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
                      <li>• <strong>Excel & Power BI</strong> - Creating charts and reports</li>
                      <li>• <strong>Python/Pandas</strong> - Analyzing large datasets</li>
                      <li>• <strong>Data Visualization</strong> - Making data easy to understand</li>
                      <li>• <strong>Statistics</strong> - Finding patterns and trends</li>
                      <li>• <strong>Reporting</strong> - Presenting insights clearly</li>
                      <li>• <strong>Predictive Analysis</strong> - Forecasting future trends</li>
                    </ul>
                  </div>
                </Tilt>

                {/* Hardware & Networking */}
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={800}
                  scale={1.05}
                  transitionSpeed={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.25}
                  glareColor="#f97316"
                  glareBorderRadius="12px"
                >
                  <div className="p-4 bg-orange-900/20 border border-orange-500/30 rounded-lg hover:border-orange-500/50 transition-all shadow-xl">
                    <h5 className="text-orange-400 font-semibold mb-2">🖥️ Hardware & Networking (The Physical Tech)</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
                      <li>• <strong>PC Building</strong> - Assembling custom computers</li>
                      <li>• <strong>Network Setup</strong> - Connecting devices together</li>
                      <li>• <strong>Troubleshooting</strong> - Fixing hardware problems</li>
                      <li>• <strong>Server Configuration</strong> - Setting up powerful systems</li>
                      <li>• <strong>WiFi Optimization</strong> - Making internet faster</li>
                      <li>• <strong>Cable Management</strong> - Organizing connections neatly</li>
                    </ul>
                  </div>
                </Tilt>

                {/* Video Editing & 3D Animation */}
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={800}
                  scale={1.05}
                  transitionSpeed={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.25}
                  glareColor="#ec4899"
                  glareBorderRadius="12px"
                >
                  <div className="p-4 bg-pink-900/20 border border-pink-500/30 rounded-lg hover:border-pink-500/50 transition-all shadow-xl">
                    <h5 className="text-pink-400 font-semibold mb-2">🎬 Video Editing & 3D Animation (Creating Magic)</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
                      <li>• <strong>Adobe Premiere Pro</strong> - Professional video editing</li>
                      <li>• <strong>After Effects</strong> - Motion graphics and effects</li>
                      <li>• <strong>Blender/Maya</strong> - 3D modeling and animation</li>
                      <li>• <strong>Color Grading</strong> - Making videos look cinematic</li>
                      <li>• <strong>Sound Design</strong> - Adding audio effects</li>
                      <li>• <strong>Visual Effects</strong> - Creating movie-like scenes</li>
                    </ul>
                  </div>
                </Tilt>

                {/* CCTV & Security Systems */}
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={800}
                  scale={1.05}
                  transitionSpeed={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.25}
                  glareColor="#ef4444"
                  glareBorderRadius="12px"
                >
                  <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg hover:border-red-500/50 transition-all shadow-xl">
                    <h5 className="text-red-400 font-semibold mb-2">� CCTV & Security Systems (Keeping Safe)</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
                      <li>• <strong>Camera Installation</strong> - Setting up security cameras</li>
                      <li>• <strong>DVR/NVR Setup</strong> - Recording and monitoring systems</li>
                      <li>• <strong>Network Security</strong> - Protecting surveillance feeds</li>
                      <li>• <strong>Remote Access</strong> - View cameras from anywhere</li>
                      <li>• <strong>Motion Detection</strong> - Smart alert systems</li>
                      <li>• <strong>Maintenance</strong> - Keeping systems running 24/7</li>
                    </ul>
                  </div>
                </Tilt>

                {/* Tools & Skills */}
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={800}
                  scale={1.05}
                  transitionSpeed={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.25}
                  glareColor="#10b981"
                  glareBorderRadius="12px"
                >
                  <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg hover:border-green-500/50 transition-all shadow-xl">
                    <h5 className="text-green-400 font-semibold mb-2">🛠️ Tools & Special Skills</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
                      <li>• <strong>Git/GitHub</strong> - Saving and sharing code safely</li>
                      <li>• <strong>Docker</strong> - Packaging apps for easy deployment</li>
                      <li>• <strong>Testing</strong> - Making sure everything works perfectly</li>
                      <li>• <strong>Performance Optimization</strong> - Making things super fast</li>
                      <li>• <strong>Video Editing</strong> - Creating professional content</li>
                      <li>• <strong>Hardware & Networking</strong> - Understanding how computers work</li>
                    </ul>
                  </div>
                </Tilt>
              </div>

              {/* What Makes Me Special */}
                              {/* What Makes Me Special */}
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={800}
                  scale={1.05}
                  transitionSpeed={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.25}
                  glareColor="#f59e0b"
                  glareBorderRadius="12px"
                >
                  <div className="col-span-full p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg hover:border-yellow-500/50 transition-all shadow-xl">
                    <h5 className="text-yellow-400 font-semibold mb-2">✨ What Makes Me Special</h5>
                    <p className="text-gray-300 text-sm">
                      I don&apos;t just write code - I create complete solutions! From designing beautiful websites 
                      to analyzing data, from fixing computers to creating stunning videos and 3D animations, 
                      I bring multiple skills together to build amazing things. It&apos;s like being a digital Swiss Army knife! 🎯
                    </p>
                  </div>
                </Tilt>
            </motion.div>

            {/* Skills */}
            {/* Skills Section */}
            <motion.div 
              ref={skillsRef}
              variants={itemVariants} 
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">My Technical Superpowers 🚀</h3>
              
              {/* Skill Level Explanation */}
              <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-sm">
                  <strong className="text-cyan-400">Skill Levels:</strong> Think of these like video game levels! 
                  90%+ means I&apos;m like a boss-level expert, 80-89% means I&apos;m really good, and 70-79% means I&apos;m still learning but can do cool stuff!
                </p>
              </div>

              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full relative"
                        initial={{ width: 0 }}
                        animate={skillsInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                      >
                        {/* Sparkle effect for high skills */}
                        {skill.level >= 95 && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-cyan-400/30 rounded-full"
                            animate={{ opacity: [0.3, 0.7, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fun Facts Section */}
              <motion.div 
                className="mt-8 p-6 rounded-xl bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Award className="w-5 h-5 text-yellow-500 mr-2" />
                  Fun Facts About My Work
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="text-gray-300">
                    <div className="text-indigo-400 font-semibold">📱 Apps I&apos;ve Built</div>
                    Mobile apps, websites, and games that people actually use every day!
                  </div>
                  <div className="text-gray-300">
                    <div className="text-indigo-400 font-semibold">⚡ Speed Boost</div>
                    I made some websites 300% faster - that&apos;s like turning a bicycle into a race car!
                  </div>
                  <div className="text-gray-300">
                    <div className="text-indigo-400 font-semibold">🛡️ Security Expert</div>
                    I protect websites from hackers like a digital bodyguard!
                  </div>
                  <div className="text-gray-300">
                    <div className="text-indigo-400 font-semibold">🌍 Global Reach</div>
                    My apps work in different countries and languages around the world!
                  </div>
                </div>
              </motion.div>

              {/* Gaming Specs Showcase */}
              <motion.div 
                className="mt-8 p-6 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                  My Super Computer Setup (Like a Gaming Beast!)
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-gray-300">
                    <div className="text-cyan-500 font-semibold">🎮 Graphics Card</div>
                    RTX 4080 16GB - Can run any game at max settings!
                  </div>
                  <div className="text-gray-300">
                    <div className="text-cyan-500 font-semibold">🧠 Processor</div>
                    Ryzen 9 7900X - 12 cores of pure power!
                  </div>
                  <div className="text-gray-300">
                    <div className="text-cyan-500 font-semibold">💾 Memory</div>
                    32GB DDR5 - Faster than a superhero&apos;s reflexes!
                  </div>
                  <div className="text-gray-300">
                    <div className="text-cyan-500 font-semibold">💿 Storage</div>
                    2TB SSD - Loads everything instantly!
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-3">
                  This powerful setup helps me build, test, and create amazing digital experiences super fast! 
                  It&apos;s like having a race car for coding! 🏎️
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}