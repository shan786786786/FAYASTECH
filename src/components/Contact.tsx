'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Youtube, AlertCircle, Sparkles } from 'lucide-react'
import { Button } from './ui/button'
import { useState } from 'react'

const ContactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@fayastech.com',
    link: 'mailto:contact@fayastech.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (234) 567-890',
    link: 'tel:+1234567890'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Available Worldwide',
    link: '#'
  }
]

const socialLinks = [
  { icon: Github, label: 'GitHub', url: 'https://github.com/fayastech' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/fayastech' },
  { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/FayasTechy' },
  { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/fayastechy' },
  { icon: Youtube, label: 'YouTube', url: 'https://www.youtube.com/@fayastechy' }
]

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowError(false)
    setErrorMessage('')
    
    // Simulate form submission with delay
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
    <section id="contact" className="py-12 md:py-20 bg-gray-950">
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
              Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Talk</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Got a project in mind? Need someone to fix your code? Or just want to chat about tech? Hit me up.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Work Together</h3>
                <p className="text-gray-300 mb-8">
                  Always up for interesting projects. Whether you need a full-time dev, 
                  freelance work, or just some consulting - shoot me a message.
                </p>

                <div className="space-y-6">
                  {ContactInfo.map((info) => (
                    <motion.a
                      key={info.label}
                      href={info.link}
                      className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <info.icon className="w-6 h-6 text-cyan-500 mr-4 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-400">{info.label}</div>
                        <div className="text-white group-hover:text-cyan-500 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-500 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                <h4 className="text-lg font-semibold text-white mb-2">Current Availability</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Open to new opportunities and interesting projects
                </p>
                <div className="flex items-center text-green-500 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available for new projects
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="neon"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {/* Success Message */}
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span>🚀 Contact form coming soon! Connect with me on social media below.</span>
                  </motion.div>
                )}

                {/* Error Message */}
                {showError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-500 flex items-center justify-center gap-2"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>{errorMessage || 'Failed to send. Please try again.'}</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}