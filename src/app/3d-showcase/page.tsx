'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowLeft, Sparkles, Rocket, Zap, Star, Heart, Coffee, Code, Database, Cpu, Box, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Tilt from 'react-parallax-tilt'
import { useRouter } from 'next/navigation'

const showcaseItems = [
  { 
    id: 1, 
    icon: Rocket, 
    color: 'from-pink-500 to-rose-500', 
    label: 'Rocket Launch',
    description: 'Blast off to space!'
  },
  { 
    id: 2, 
    icon: Sparkles, 
    color: 'from-purple-500 to-indigo-500', 
    label: 'Magic Sparkle',
    description: 'Magical effects'
  },
  { 
    id: 3, 
    icon: Zap, 
    color: 'from-yellow-500 to-orange-500', 
    label: 'Lightning Bolt',
    description: 'Electric energy'
  },
  { 
    id: 4, 
    icon: Star, 
    color: 'from-cyan-500 to-blue-500', 
    label: 'Shining Star',
    description: 'Starry night'
  },
  { 
    id: 5, 
    icon: Heart, 
    color: 'from-red-500 to-pink-500', 
    label: 'Love Heart',
    description: 'Full of love'
  },
  { 
    id: 6, 
    icon: Coffee, 
    color: 'from-amber-500 to-brown-500', 
    label: 'Coffee Time',
    description: 'Caffeine boost'
  },
  { 
    id: 7, 
    icon: Code, 
    color: 'from-green-500 to-emerald-500', 
    label: 'Code Master',
    description: 'Clean code'
  },
  { 
    id: 8, 
    icon: Database, 
    color: 'from-blue-500 to-cyan-500', 
    label: 'Data Power',
    description: 'Big data'
  },
  { 
    id: 9, 
    icon: Cpu, 
    color: 'from-indigo-500 to-purple-500', 
    label: 'CPU Speed',
    description: 'Fast processing'
  },
  { 
    id: 10, 
    icon: Box, 
    color: 'from-orange-500 to-red-500', 
    label: '3D Cube',
    description: 'Three dimensions'
  },
  { 
    id: 11, 
    icon: Layers, 
    color: 'from-teal-500 to-green-500', 
    label: 'Layer Stack',
    description: 'Multiple layers'
  },
  { 
    id: 12, 
    icon: Sparkles, 
    color: 'from-pink-500 to-purple-500', 
    label: 'Glitter',
    description: 'Shiny effects'
  }
]

const FloatingParticle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-2 h-2 bg-cyan-500 rounded-full"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      opacity: [0.2, 1, 0.2],
      scale: [1, 1.5, 1]
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
)

export default function Showcase3D() {
  const router = useRouter()
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const yReverse = useTransform(scrollYProgress, [0, 1], ['100%', '0%'])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Particles - Completely disabled on mobile */}
      {!isMobile && Array.from({ length: 30 }).map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.2} />
      ))}

      {/* Rotating Background Orbs - Disabled on mobile for performance */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
            style={{ y, rotate }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            style={{ y: yReverse, rotate }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </>
      )}

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <Button 
            onClick={() => router.push('/')} 
            variant="outline"
            className="mb-8 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>

          <div className="text-center">
            <motion.div
              animate={isMobile ? {} : { 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: isMobile ? 0 : Infinity 
              }}
              className="inline-block mb-6"
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                <Sparkles className="w-16 h-16 text-white" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                3D Showcase
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Experience interactive 3D animations and cartoon-style effects. Hover, click, and explore!
            </motion.p>
          </div>
        </motion.div>

        {/* Main 3D Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8, rotateY: isMobile ? 0 : -180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  delay: isMobile ? index * 0.05 : index * 0.1,
                  type: isMobile ? "tween" : "spring",
                  stiffness: 100,
                  duration: isMobile ? 0.3 : undefined
                }}
              >
                <Tilt
                  tiltEnable={!isMobile}
                  tiltMaxAngleX={25}
                  tiltMaxAngleY={25}
                  perspective={1000}
                  scale={isMobile ? 1 : 1.1}
                  glareEnable={false}
                  glareMaxOpacity={0.4}
                  glareColor="#06b6d4"
                  glarePosition="all"
                  glareBorderRadius="24px"
                >
                  <motion.div
                    className={`relative bg-gradient-to-br ${item.color} rounded-3xl p-8 cursor-pointer overflow-hidden group`}
                    whileHover={isMobile ? {} : { 
                      scale: 1.05,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                  >
                    {/* Background Animation - Disabled on mobile */}
                    {!isMobile && (
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ 
                          scale: 2, 
                          opacity: 0.3,
                          transition: { duration: 0.6 }
                        }}
                        style={{ borderRadius: '50%' }}
                      />
                    )}

                    {/* Icon */}
                    <motion.div
                      animate={selectedItem === item.id ? {
                        rotate: [0, 360],
                        scale: [1, 1.3, 1]
                      } : isMobile ? {} : {
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: selectedItem === item.id ? 1 : 2,
                        repeat: isMobile && selectedItem !== item.id ? 0 : Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative z-10"
                    >
                      <Icon className="w-16 h-16 text-white mx-auto mb-4" />
                    </motion.div>

                    {/* Label */}
                    <motion.h3 
                      className="text-white font-bold text-center mb-2 relative z-10"
                      animate={selectedItem === item.id ? {
                        scale: [1, 1.1, 1]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {item.label}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="text-white/80 text-sm text-center relative z-10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {item.description}
                    </motion.p>

                    {/* Selected Indicator */}
                    {selectedItem === item.id && (
                      <motion.div
                        className="absolute inset-0 border-4 border-white rounded-3xl"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                      />
                    )}

                    {/* Sparkle Effect */}
                    <motion.div
                      className="absolute top-2 right-2"
                      animate={{
                        rotate: [0, 180, 360],
                        scale: [1, 1.5, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      <Sparkles className="w-6 h-6 text-white/50" />
                    </motion.div>
                  </motion.div>
                </Tilt>
              </motion.div>
            )
          })}
        </div>

        {/* Bouncing Cartoon Characters - Hidden on mobile */}
        {!isMobile && (
          <div className="flex justify-center gap-8 mb-12">
            {[Rocket, Sparkles, Star, Heart, Zap].map((Icon, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2 + index * 0.3,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                <Tilt
                  tiltMaxAngleX={30}
                  tiltMaxAngleY={30}
                  scale={1.2}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Like what you see?
          </h2>
          <p className="text-gray-300 mb-6">
            Explore more amazing projects in the portfolio section
          </p>
          <Button 
            onClick={() => router.push('/#portfolio')} 
            variant="neon"
            size="lg"
            className="shadow-2xl shadow-cyan-500/30"
          >
            <Sparkles className="mr-2 w-5 h-5" />
            View Portfolio
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
