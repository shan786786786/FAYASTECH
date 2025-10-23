'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Youtube, Play, Eye, ThumbsUp } from 'lucide-react'
import { Button } from './ui/button'

export default function YouTubeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
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
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-3xl"
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-6 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Youtube className="w-5 h-5 text-red-500" />
              <span className="text-red-500 font-semibold">Featured Content</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Watch My <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">YouTube Channel</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore tutorials, tech reviews, and insights from 15+ years of experience in hardware, networking, and video editing.
            </p>
          </motion.div>

          {/* Video Container */}
          <motion.div 
            variants={itemVariants}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-4 border border-gray-700/50 overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
              />

              {/* Video Embed */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black group/video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/4k_qDWogcng"
                  title="FayasTech YouTube Channel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Video Info */}
              <motion.div 
                className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4"
                variants={itemVariants}
              >
                <div className="flex items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-cyan-500" />
                    <span>Watch Latest Videos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4 text-green-500" />
                    <span>Tech Tutorials</span>
                  </div>
                </div>

                <Button
                  variant="neon"
                  size="lg"
                  className="group/btn shadow-2xl shadow-red-500/30"
                  onClick={() => window.open('https://www.youtube.com/@fayastechy', '_blank')}
                >
                  <Youtube className="w-5 h-5 mr-2" />
                  <span className="font-bold">Visit My Channel</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Play className="w-4 h-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Skills Highlight */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { title: 'Hardware & Networking', desc: '15+ Years Experience', icon: '🔧' },
              { title: 'Video Editing', desc: 'Professional Content Creation', icon: '🎬' },
              { title: 'Tech Innovation', desc: 'Latest Tech & Solutions', icon: '💡' }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-500 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}