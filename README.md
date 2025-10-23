# FayasTech Portfolio - Modern Next.js Portfolio

A stunning, modern portfolio website built with Next.js 14, TypeScript, Framer Motion, and Tailwind CSS. Features advanced Lottie-style animations, particle systems, 3D effects, and optimal performance.

## 👨‍💻 About the Developer

**Full Stack Developer with 15+ Years Experience** - Building digital solutions that make technology accessible for everyone!

📖 **[Read My Complete Developer Profile](./FULL-STACK-DEVELOPER-PROFILE.md)** - A comprehensive guide written in simple terms that even kids can understand! Includes:
- What Full Stack Development really means (explained like building a house!)
- My technical superpowers and skill levels
- Real-world examples of projects I've built
- How I can help your business or project
- Fun facts and behind-the-scenes info

---

## 🚀 Features

### ✨ Modern Tech Stack
- **Next.js 14** - App Router with React Server Components
- **TypeScript** - Type-safe development
- **Framer Motion** - Advanced animations and interactions
- **Lottie React** - Professional animation system
- **React Parallax Tilt** - 3D interactive effects
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Modern component library
- **Lucide React** - Beautiful icons

### 🎨 Design Features
- **Particle Systems** - Floating animated particles
- **3D Tilt Effects** - Interactive parallax on cards
- **Glass Morphism** - Modern glassmorphic UI
- **Neon Gradient Animations** - Flowing color transitions
- **Smooth Scroll Animations** - Parallax scrolling effects
- **Interactive Hover Effects** - Engaging micro-interactions
- **Responsive Mobile-First Design** - Perfect on all devices
- **Dark Theme with Neon Accents** - Professional aesthetic

### 🎬 Content Sections
1. **Hero Section** - Animated welcome with particle effects and gaming specs (RTX 5090)
2. **About Section** - 15+ years experience showcase with skill animations
3. **YouTube Section** - Embedded channel with video player
4. **Portfolio Section** - Dynamic project cards with generated gradients
5. **Contact Section** - Form with validation and animations
6. **Footer** - Complete navigation and social links

### 🚀 Performance Optimizations
- Server Components for faster loading
- Image optimization with next/image
- Lazy loading with React Suspense
- Optimized bundle sizes (186kB)
- Hardware-accelerated animations
- Perfect Lighthouse scores

## 📱 Sections

1. **Hero Section**
   - Animated welcome text
   - Gaming specs showcase
   - Social media links
   - Call-to-action buttons

2. **About Section**
   - Professional profile
   - Animated skill bars
   - Performance statistics
   - Technical expertise

3. **Portfolio Section**
   - Project showcase cards
   - Category filtering
   - Interactive hover effects
   - Live demo and GitHub links

4. **Contact Section**
   - Contact form with validation
   - Contact information
   - Social media links
   - Availability status

5. **Footer**
   - Quick navigation links
   - Social media links
   - Copyright information
   - Back to top functionality

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fayastech-portfolio.git
   cd fayastech-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📦 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Customization

### Personal Information
Update your personal information in the following components:
- `src/components/Hero.tsx` - Name, title, social links
- `src/components/About.tsx` - Bio, skills, statistics
- `src/components/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Copyright and social links

### Projects
Add your projects in `src/components/Portfolio.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description...",
    image: "/images/project.jpg",
    tags: ["React", "TypeScript"],
    category: "web",
    liveUrl: "https://yourproject.com",
    githubUrl: "https://github.com/you/project"
  }
]
```

### Colors and Themes
Customize colors in `tailwind.config.js` and update gradient classes throughout components.

### Animations
Modify Framer Motion variants in each component for custom animations:
```typescript
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm run start
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: All green
- **Bundle Size**: Optimized with Next.js
- **Images**: WebP/AVIF optimization
- **Animations**: Hardware accelerated

## 📞 Contact

- **Email**: contact@fayastech.com
- **LinkedIn**: [FayasTech](https://linkedin.com/in/fayastech)
- **GitHub**: [FayasTech](https://github.com/fayastech)
- **Portfolio**: [fayastech.com](https://fayastech.com)

---

**Made with ❤️ using Next.js & TypeScript**
