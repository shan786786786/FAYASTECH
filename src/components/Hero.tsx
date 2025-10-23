"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }



  const backgroundElements = [
    { text: "const portfolio = React.createApp();", delay: 0 },
    { text: "RTX 4080 16GB GDDR6X", delay: 0.5 },
    { text: "Ryzen 9 7900X 12 cores", delay: 1 },
    { text: "@media (max-width: 768px) {}", delay: 1.5 },
    { text: "function NextJS() { return <App />; }", delay: 2 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {backgroundElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-cyan-500/10 font-mono text-sm md:text-base font-medium"
            style={{
              top: `${20 + (index * 15)}%`,
              left: `${10 + (index % 2) * 70}%`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1, 0.8],
              x: [-20, 20, -20],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            {element.text}
          </motion.div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Gaming Specs Badge */}
        <motion.div
          className="inline-flex items-center px-4 py-2 mb-8 bg-gray-800/50 backdrop-blur-md border border-cyan-500/30 rounded-full"
          variants={itemVariants}
          animate="float"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-cyan-400 text-sm font-medium">
            🎮 Gaming Enthusiast • RTX 4080 • Ryzen 9 7900X
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="block text-white mb-2">Hi, I&apos;m</span>
          <motion.span
            className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            FAYAS
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-4"
          variants={itemVariants}
        >
          Full Stack Developer & Tech Innovator
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Building cutting-edge web applications with React, Next.js, and modern technologies. 
          Passionate about creating exceptional user experiences and scalable solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <Button
            size="lg"
            variant="neon"
            className="group relative overflow-hidden px-8 py-4 text-lg"
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg group"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download CV
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center space-x-6 mb-12"
          variants={itemVariants}
        >
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="p-3 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                y: -2,
                boxShadow: "0 10px 20px rgba(0, 255, 231, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero