'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Code, Zap, Cpu, Sparkles } from 'lucide-react'

export default function EnhancedLoading() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(progressInterval)
  }, [])

  if (!isLoading) return null

  const loadingSteps = [
    { label: 'Initializing AI Systems', icon: Cpu },
    { label: 'Loading Creative Modules', icon: Sparkles },
    { label: 'Optimizing Performance', icon: Zap },
    { label: 'Ready to Amaze', icon: Code }
  ]

  const currentStep = Math.floor((progress / 100) * loadingSteps.length)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-500 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
                opacity: 0
              }}
              animate={{
                y: -100,
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: Math.random() * 2
              }}
            />
          ))}

          {/* Rotating Geometric Shapes */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-cyan-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="absolute inset-4 border-2 border-blue-500/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute inset-4 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="text-center relative z-10">
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 1
            }}
            className="mb-8"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold"
              animate={{
                textShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.5)",
                  "0 0 40px rgba(59, 130, 246, 0.7)",
                  "0 0 20px rgba(6, 182, 212, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
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
          </motion.div>

          {/* Progress Circle */}
          <motion.div 
            className="relative w-32 h-32 mx-auto mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background Circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgba(75, 85, 99, 0.3)"
                strokeWidth="2"
                fill="none"
              />
              {/* Progress Circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress / 100 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  strokeDasharray: "283",
                  strokeDashoffset: 283 - (283 * progress) / 100
                }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Percentage Text */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              key={Math.floor(progress)}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-2xl font-bold text-white">
                {Math.floor(progress)}%
              </span>
            </motion.div>
          </motion.div>

          {/* Loading Steps */}
          <motion.div 
            className="space-y-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {loadingSteps.map((step, index) => {
              const Icon = step.icon
              const isActive = index <= currentStep
              const isCompleted = index < currentStep
              
              return (
                <motion.div
                  key={step.label}
                  className={`flex items-center justify-center gap-3 text-sm transition-all ${
                    isActive ? 'text-cyan-500' : 'text-gray-600'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.3,
                    x: 0,
                    scale: isActive ? 1.05 : 1
                  }}
                  transition={{ delay: 1 + index * 0.2 }}
                >
                  <motion.div
                    animate={isActive ? { 
                      rotate: 360,
                      scale: [1, 1.2, 1]
                    } : {}}
                    transition={{ 
                      rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                      scale: { duration: 1, repeat: Infinity }
                    }}
                  >
                    <Icon className={`w-4 h-4 ${isCompleted ? 'text-green-500' : ''}`} />
                  </motion.div>
                  <span>{step.label}</span>
                  {isCompleted && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-2 h-2 bg-green-500 rounded-full"
                    />
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ 
              delay: 1.5,
              duration: 2,
              repeat: Infinity
            }}
            className="text-gray-400 text-sm"
          >
            Crafting extraordinary digital experiences...
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}