// Global type definitions for FayasTech Portfolio

// Navigation types
export interface NavItem {
  href: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
}

// Project types
export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: ProjectCategory
  slug: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  metrics: ProjectMetrics
  directLinkOnly?: boolean
  customStyle?: string
}

export type ProjectCategory = 'web' | 'mobile' | 'backend' | 'iot' | 'game' | 'all'

export interface ProjectMetrics {
  stars: number
  forks: number
  views: string
}

// Contact form types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface FormState {
  success: boolean
  message: string
  errors?: {
    name?: string
    email?: string
    subject?: string
    message?: string
  }
}

// Social links types
export interface SocialLink {
  icon: React.ComponentType<{ className?: string }>
  label: string
  url: string
}

// Stats types
export interface Stat {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  numericValue: number
  suffix: string
}

// Skill types
export interface Skill {
  name: string
  level: number
  category?: string
}

// Animation variants types
export interface AnimationVariants {
  hidden: object
  visible: object
}

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Theme types
export type Theme = 'light' | 'dark' | 'system'

// Breakpoints
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export type Breakpoint = keyof typeof breakpoints
