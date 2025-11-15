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
                <h4 className="text-lg font-semibold text-green-400 mb-2">Here's what I do:</h4>
                <p className="text-gray-300 leading-relaxed text-sm">
                  I build digital stuff - websites, apps, systems. Whatever you need online, I can probably make it happen. 
                  Been doing this for a while now, so I've seen pretty much everything. 🚀
                </p>
              </div>

              {/* Professional Description */}
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-cyan-400">Full Stack Developer</strong> - that means I handle both ends. 
                The frontend (what you see and click), and the backend (where all the magic happens behind the scenes). 
                Database, server, design - I've got it covered.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-cyan-400">15 years in the game</strong>, worked on <strong className="text-cyan-400">100+ projects</strong>. 
                From small business websites to complex enterprise systems. I've:
                <br />• Fixed broken code that everyone else gave up on
                <br />• Built systems from scratch that actually scale
                <br />• Saved companies money by optimizing their tech stack
              </p>

              {/* Technical Expertise in Simple Terms */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">My Tech Stack:</h4>
                
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
                    <h5 className="text-purple-400 font-semibold mb-2">🎨 Frontend Development</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
                      <li>• <strong>React/Next.js</strong> - My go-to framework</li>
                      <li>• <strong>TypeScript</strong> - Keeps code clean</li>
                      <li>• <strong>Tailwind CSS</strong> - Fast styling</li>
                      <li>• <strong>Framer Motion</strong> - Smooth animations</li>
                      <li>• <strong>HTML/CSS</strong> - The basics, perfected</li>
                      <li>• <strong>JavaScript</strong> - Been using it forever</li>
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
                    <h5 className="text-blue-400 font-semibold mb-2">⚡ Backend Development</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
                      <li>• <strong>Node.js</strong> - Server stuff</li>
                      <li>• <strong>Python</strong> - Scripts & automation</li>
                      <li>• <strong>Databases</strong> - MongoDB, PostgreSQL, MySQL</li>
                      <li>• <strong>APIs</strong> - REST, GraphQL</li>
                      <li>• <strong>Cloud</strong> - AWS, Vercel, Firebase</li>
                      <li>• <strong>Security</strong> - Auth, encryption, etc.</li>
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
                    <h5 className="text-cyan-400 font-semibold mb-2">📊 Data Analysis</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
                      <li>• <strong>Excel & Power BI</strong> - Reports & dashboards</li>
                      <li>• <strong>Python/Pandas</strong> - Data crunching</li>
                      <li>• <strong>Data Viz</strong> - Charts that make sense</li>
                      <li>• <strong>Statistics</strong> - Finding patterns</li>
                      <li>• <strong>Reporting</strong> - Clear insights</li>
                      <li>• <strong>Predictions</strong> - Future trends</li>
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
                    <h5 className="text-orange-400 font-semibold mb-2">🖥️ Hardware & Networking</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
                      <li>• <strong>PC Building</strong> - Custom rigs</li>
                      <li>• <strong>Network Setup</strong> - Routers, switches, etc.</li>
                      <li>• <strong>Troubleshooting</strong> - Fix broken stuff</li>
                      <li>• <strong>Servers</strong> - Enterprise systems</li>
                      <li>• <strong>WiFi</strong> - Fast, stable connections</li>
                      <li>• <strong>Cables</strong> - Clean setups</li>
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
                    <h5 className="text-pink-400 font-semibold mb-2">🎬 Video & 3D Work</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
                      <li>• <strong>Premiere Pro</strong> - Video editing</li>
                      <li>• <strong>After Effects</strong> - Motion graphics</li>
                      <li>• <strong>Blender/Maya</strong> - 3D animation</li>
                      <li>• <strong>Color Grading</strong> - Look & feel</li>
                      <li>• <strong>Sound Design</strong> - Audio polish</li>
                      <li>• <strong>VFX</strong> - Special effects</li>
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
                    <h5 className="text-red-400 font-semibold mb-2">📹 Security Systems</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
                      <li>• <strong>CCTV Install</strong> - Camera setup</li>
                      <li>• <strong>DVR/NVR</strong> - Recording systems</li>
                      <li>• <strong>Security</strong> - Protected feeds</li>
                      <li>• <strong>Remote View</strong> - Check from anywhere</li>
                      <li>• <strong>Alerts</strong> - Motion detection</li>
                      <li>• <strong>Support</strong> - 24/7 monitoring</li>
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
                    <h5 className="text-green-400 font-semibold mb-2">🛠️ Dev Tools</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
                      <li>• <strong>Git/GitHub</strong> - Version control</li>
                      <li>• <strong>Docker</strong> - Containerization</li>
                      <li>• <strong>Testing</strong> - QA & debugging</li>
                      <li>• <strong>Optimization</strong> - Speed & performance</li>
                      <li>• <strong>Video Editing</strong> - Content creation</li>
                      <li>• <strong>Hardware</strong> - PC & network setup</li>
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
                    <h5 className="text-yellow-400 font-semibold mb-2">✨ Why Work With Me</h5>
                    <p className="text-gray-300 text-sm">
                      I don't just code - I solve problems. Need a website? Done. System broken? I'll fix it. 
                      Data needs analyzing? Got it. Video editing, 3D animation, hardware setup - whatever you throw at me, 
                      I've probably done it before. 15 years in this game teaches you a thing or two. 🎯
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