'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useTransition } from 'react'
import { 
  Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram, Youtube,
  CheckCircle, AlertCircle, Loader2, ArrowRight, Sparkles, MessageSquare
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@fayastech.com',
    link: 'mailto:contact@fayastech.com',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (234) 567-890',
    link: 'tel:+1234567890',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Available Worldwide',
    link: '#',
    color: 'from-purple-500 to-pink-500',
  },
]

const socialLinks = [
  { icon: Github, label: 'GitHub', url: 'https://github.com/fayastech', color: 'hover:text-white hover:bg-gray-700' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/fayastech', color: 'hover:text-white hover:bg-blue-600' },
  { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/FayasTechy', color: 'hover:text-white hover:bg-sky-500' },
  { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/fayastechy', color: 'hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500' },
  { icon: Youtube, label: 'YouTube', url: 'https://www.youtube.com/@fayastechy', color: 'hover:text-white hover:bg-red-600' },
]

// Animated input component
const FormInput = ({ 
  label, 
  name, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error,
  required = true 
}: {
  label: string
  name: string
  type?: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  required?: boolean
}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label} {required && <span className="text-cyan-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          required={required}
          className={`w-full px-4 py-4 bg-white/[0.02] border rounded-xl text-white placeholder-gray-500 transition-all duration-300 outline-none ${
            error 
              ? 'border-red-500/50 focus:border-red-500' 
              : isFocused 
                ? 'border-cyan-500 shadow-lg shadow-cyan-500/10' 
                : 'border-white/10 hover:border-white/20'
          }`}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isFocused ? '100%' : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-xs mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

// Animated textarea component
const FormTextarea = ({ 
  label, 
  name, 
  placeholder, 
  value, 
  onChange, 
  error,
  rows = 5 
}: {
  label: string
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  error?: string
  rows?: number
}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label} <span className="text-cyan-500">*</span>
      </label>
      <div className="relative">
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          rows={rows}
          required
          className={`w-full px-4 py-4 bg-white/[0.02] border rounded-xl text-white placeholder-gray-500 transition-all duration-300 outline-none resize-none ${
            error 
              ? 'border-red-500/50 focus:border-red-500' 
              : isFocused 
                ? 'border-cyan-500 shadow-lg shadow-cyan-500/10' 
                : 'border-white/10 hover:border-white/20'
          }`}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isFocused ? '100%' : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-xs mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

// Contact info card
const ContactCard = ({ info, index }: { info: typeof contactInfo[0], index: number }) => (
  <motion.a
    href={info.link}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.02, x: 5 }}
    className="group flex items-center gap-4 p-4 bg-white/[0.02] backdrop-blur-sm rounded-xl border border-white/5 hover:border-white/10 transition-all"
  >
    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} p-0.5 flex-shrink-0`}>
      <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
        <info.icon className="w-5 h-5 text-white" />
      </div>
    </div>
    <div>
      <p className="text-gray-500 text-sm">{info.label}</p>
      <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
        {info.value}
      </p>
    </div>
    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 ml-auto opacity-0 group-hover:opacity-100 transition-all" />
  </motion.a>
)

export default function ContactModern() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.subject.trim() || formData.subject.length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters'
    }
    
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setStatus('loading')
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset status after 5 seconds
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s Work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s create something amazing together.
            I&apos;m always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <ContactCard key={info.label} info={info} index={index} />
              ))}
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">Currently Available</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                I&apos;m actively looking for new projects and opportunities. 
                Whether it&apos;s a quick fix or a long-term collaboration, I&apos;m ready to help.
              </p>
              <div className="flex items-center gap-2 text-cyan-400 text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Response time: Within 24 hours</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center text-gray-400 border border-white/5 transition-all ${social.color}`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput
                  label="Name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              <FormInput
                label="Subject"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
              />

              <FormTextarea
                label="Message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
              />

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  status === 'success'
                    ? 'bg-green-500 text-white'
                    : status === 'loading'
                    ? 'bg-cyan-500/50 text-white cursor-wait'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                }`}
                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              >
                {status === 'loading' && (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                )}
                {status === 'error' && (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    Try Again
                  </>
                )}
                {status === 'idle' && (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center"
                  >
                    <CheckCircle className="w-6 h-6 mx-auto mb-2" />
                    <p className="font-medium">Thank you for reaching out!</p>
                    <p className="text-sm text-green-400/70">I&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
