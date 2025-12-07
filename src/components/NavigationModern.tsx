'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, Box, Sparkles } from 'lucide-react'

const navigationItems = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

// Animated hamburger menu icon
const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="relative w-6 h-5 flex flex-col justify-between">
    <motion.span
      className="w-full h-0.5 bg-current rounded-full origin-left"
      animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: 0 }}
    />
    <motion.span
      className="w-full h-0.5 bg-current rounded-full"
      animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
    />
    <motion.span
      className="w-full h-0.5 bg-current rounded-full origin-left"
      animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 0 }}
    />
  </div>
)

// Nav link with hover effect
const NavLink = ({ href, label, onClick, index }: { href: string, label: string, onClick?: () => void, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <Link
      href={href}
      onClick={onClick}
      className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors group"
    >
      <span className="relative z-10">{label}</span>
      <motion.span
        className="absolute inset-0 bg-white/5 rounded-lg"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300" />
    </Link>
  </motion.div>
)

// Mobile nav link
const MobileNavLink = ({ href, label, onClick, index }: { href: string, label: string, onClick: () => void, index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
  >
    <Link
      href={href}
      onClick={onClick}
      className="block text-3xl font-semibold text-gray-300 hover:text-white transition-colors py-4 border-b border-white/5 hover:border-cyan-500/50 hover:pl-4"
    >
      <span className="text-cyan-500/50 mr-4 text-lg">0{index + 1}</span>
      {label}
    </Link>
  </motion.div>
)

export default function NavigationModern() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  // Hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    setIsScrolled(latest > 50)
  })

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.nav
            className={`flex items-center justify-between py-4 px-6 mt-4 rounded-2xl transition-all duration-500 ${
              isScrolled 
                ? 'bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50' 
                : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <Link href="/" className="relative group">
              <motion.div
                className="text-2xl font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white">Fayas</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tech</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navigationItems.map((item, index) => (
                <NavLink key={item.href} {...item} index={index} />
              ))}
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/3d-showcase"
                  className="ml-4 relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-medium overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <Box className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">3D Showcase</span>
                  <Sparkles className="w-3 h-3 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <MenuIcon isOpen={isMobileMenuOpen} />
            </motion.button>
          </motion.nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col justify-center px-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <nav className="space-y-2">
                {navigationItems.map((item, index) => (
                  <MobileNavLink
                    key={item.href}
                    {...item}
                    index={index}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </nav>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <Link
                  href="/3d-showcase"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold"
                >
                  <Box className="w-5 h-5" />
                  <span>Explore 3D Showcase</span>
                </Link>
              </motion.div>

              {/* Social hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-8 left-8 text-gray-500 text-sm"
              >
                Let&apos;s create something amazing together
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
