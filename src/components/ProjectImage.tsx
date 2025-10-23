'use client'

import { motion } from 'framer-motion'
import { Monitor, Smartphone, Server, Shield, Star, Gamepad2 } from 'lucide-react'

interface ProjectImageProps {
  category: string
  title: string
  className?: string
}

const categoryIcons = {
  web: Monitor,
  mobile: Smartphone,
  backend: Server,
  iot: Shield,
  game: Gamepad2,
  default: Star
}

const categoryGradients = {
  web: 'from-blue-500 via-cyan-500 to-teal-500',
  mobile: 'from-purple-500 via-pink-500 to-rose-500',
  backend: 'from-green-500 via-emerald-500 to-teal-500',
  iot: 'from-orange-500 via-red-500 to-pink-500',
  game: 'from-violet-500 via-purple-500 to-fuchsia-500',
  default: 'from-gray-500 via-gray-600 to-gray-700'
}

export default function ProjectImage({ category, title, className = "" }: ProjectImageProps) {
  const Icon = categoryIcons[category as keyof typeof categoryIcons] || categoryIcons.default
  const gradient = categoryGradients[category as keyof typeof categoryGradients] || categoryGradients.default

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-black/30" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)
            `
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {/* Main Icon */}
          <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <Icon className="w-12 h-12 text-white" />
          </div>

          {/* Orbiting Elements */}
          <motion.div
            className="absolute -top-2 -right-2 w-4 h-4 bg-white/30 rounded-full"
            animate={{
              rotate: [0, -360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-2 -left-2 w-3 h-3 bg-white/40 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{
              rotate: { duration: 6, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </motion.div>
      </div>

      {/* Code-like Pattern Overlay */}
      <div className="absolute top-4 left-4 text-white/20 text-xs font-mono space-y-1">
        <div className="flex gap-2">
          <motion.div 
            className="w-2 h-2 bg-green-400/40 rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.div 
            className="w-2 h-2 bg-yellow-400/40 rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div 
            className="w-2 h-2 bg-red-400/40 rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, repeat: Infinity, delay: 1 }}
          />
        </div>
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Title Overlay */}
      <div className="absolute bottom-4 left-4 right-4">
        <motion.div
          className="bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-white text-sm font-semibold truncate">{title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-white/70 text-xs capitalize">{category}</span>
          </div>
        </motion.div>
      </div>

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}