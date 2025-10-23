'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ParticleSystem() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Simplified Particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            delay: i * 0.1,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-4 h-4 border-2 border-cyan-500/30 rotate-45"
        animate={{
          y: [0, -30, 0],
          rotate: [45, 135, 45],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-3 h-8 bg-gradient-to-t from-cyan-500/20 to-transparent"
        animate={{
          rotate: [0, 180, 360],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}