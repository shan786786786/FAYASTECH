'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { 
  ArrowLeft, ExternalLink, Github, Play, Star, Eye, GitFork, 
  Calendar, Clock, Users, CheckCircle2, Code2, Layers, Zap
} from 'lucide-react'

const allProjects = [
  {
    id: 1,
    slug: "production-management",
    title: "Production Management System",
    subtitle: "Complete Film & Media Production Solution",
    description: "A comprehensive solution for managing production crews, projects, and payments with real-time tracking, automated calculations, and detailed reporting dashboards. Built for the film and media industry.",
    longDescription: `This production management system revolutionizes how film and media companies handle their day-to-day operations. From crew scheduling to payment processing, every aspect of production management is streamlined.

The system features real-time project tracking, allowing producers and managers to monitor progress across multiple productions simultaneously. Automated payment calculations ensure accuracy and save countless hours of manual work.

Key highlights include a comprehensive dashboard showing project status, budget utilization, and team performance metrics. The reporting module generates detailed analytics that help in decision-making and resource allocation.`,
    image: "/projects/production-demo.svg",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Node.js", "Express", "JWT Auth"],
    category: "fullstack",
    platform: "Web",
    liveUrl: "https://evans.fayastech.com/",
    githubUrl: "https://github.com/fayastech/production-management",
    demoVideo: "https://youtube.com/watch?v=demo1",
    featured: true,
    stats: { stars: 128, views: "15K", forks: 34 },
    color: "from-violet-500 to-purple-500",
    features: [
      { title: "Real-time Tracking", description: "Monitor project progress in real-time with live updates" },
      { title: "Auto Payments", description: "Automated salary and payment calculations for crew members" },
      { title: "Team Management", description: "Manage crews, assign roles, and track attendance" },
      { title: "Advanced Reports", description: "Generate detailed financial and operational reports" },
      { title: "Multi-project Support", description: "Handle multiple productions simultaneously" },
      { title: "Role-based Access", description: "Secure access control with different permission levels" },
    ],
    screenshots: ["/projects/production-demo.svg"],
    timeline: "3 months",
    teamSize: "Solo Developer",
    completedDate: "2024",
  },
  {
    id: 2,
    slug: "smart-attendance",
    title: "Smart Attendance Tracker",
    subtitle: "Modern Workforce Management System",
    description: "Real-time attendance management system with biometric integration, user authentication, comprehensive reporting dashboard, and team analytics.",
    longDescription: `Smart Attendance Tracker is a next-generation workforce management solution designed to simplify attendance tracking and team management. The system supports multiple authentication methods including biometric devices.

Real-time synchronization ensures that attendance data is always up-to-date across all devices and locations. Managers can view live attendance status, receive alerts for late arrivals, and generate comprehensive reports.

The analytics dashboard provides insights into attendance patterns, helping organizations identify trends and improve workforce productivity.`,
    image: "/projects/attendance-demo.svg",
    tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Redis", "Chart.js"],
    category: "fullstack",
    platform: "Web",
    liveUrl: "https://smartattend.fayastech.com/",
    githubUrl: "https://github.com/fayastech/smart-attendance",
    demoVideo: "https://youtube.com/watch?v=demo2",
    featured: true,
    stats: { stars: 89, views: "12K", forks: 21 },
    color: "from-cyan-500 to-blue-500",
    features: [
      { title: "Biometric Support", description: "Integration with fingerprint and face recognition devices" },
      { title: "Live Updates", description: "Real-time attendance sync across all devices" },
      { title: "Analytics Dashboard", description: "Comprehensive insights and attendance patterns" },
      { title: "Export Data", description: "Export reports in multiple formats (PDF, Excel, CSV)" },
      { title: "Leave Management", description: "Built-in leave request and approval system" },
      { title: "Shift Scheduling", description: "Flexible shift management and rotation" },
    ],
    screenshots: ["/projects/attendance-demo.svg"],
    timeline: "2 months",
    teamSize: "Solo Developer",
    completedDate: "2024",
  },
  {
    id: 3,
    slug: "ai-analytics",
    title: "AI Analytics Dashboard",
    subtitle: "Intelligent Business Intelligence Platform",
    description: "Modern analytics platform with AI-powered insights, real-time data visualization, predictive modeling, and automated reporting capabilities.",
    longDescription: `The AI Analytics Dashboard represents the cutting edge of business intelligence. Leveraging machine learning algorithms, it transforms raw data into actionable insights that drive business growth.

The platform features predictive modeling capabilities that help businesses forecast trends, identify opportunities, and mitigate risks. Real-time data visualization makes complex data accessible and understandable.

Automated reporting saves time and ensures stakeholders always have access to the latest insights.`,
    image: "/projects/analytics-demo.svg",
    tags: ["React", "TypeScript", "Python", "TensorFlow", "D3.js", "FastAPI", "PostgreSQL"],
    category: "data",
    platform: "Web",
    liveUrl: "#",
    githubUrl: "https://github.com/fayastech/ai-analytics",
    demoVideo: "https://youtube.com/watch?v=demo3",
    featured: true,
    stats: { stars: 156, views: "8.9K", forks: 43 },
    color: "from-emerald-500 to-green-500",
    features: [
      { title: "AI Predictions", description: "Machine learning powered trend predictions" },
      { title: "Real-time Charts", description: "Interactive, live-updating visualizations" },
      { title: "Custom Reports", description: "Build custom reports with drag-and-drop" },
      { title: "Smart Alerts", description: "AI-triggered notifications for anomalies" },
      { title: "Data Integration", description: "Connect to multiple data sources" },
      { title: "Natural Language Queries", description: "Ask questions in plain English" },
    ],
    screenshots: ["/projects/analytics-demo.svg"],
    timeline: "4 months",
    teamSize: "Solo Developer",
    completedDate: "2024",
  },
  {
    id: 4,
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    subtitle: "Full-Featured Online Shopping Solution",
    description: "Full-featured online store with Stripe payment integration, inventory management, customer analytics, and responsive design for all devices.",
    longDescription: `A complete e-commerce solution built for modern online retail. This platform provides everything needed to run a successful online store, from product management to payment processing.

The system integrates seamlessly with Stripe for secure payment processing and supports multiple payment methods. Inventory management features help prevent overselling and automate reordering.

Customer analytics provide insights into shopping behavior, helping merchants optimize their offerings.`,
    image: "/projects/ecommerce-demo.svg",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "Redis", "Tailwind", "TypeScript"],
    category: "fullstack",
    platform: "Web",
    liveUrl: "#",
    githubUrl: "https://github.com/fayastech/ecommerce",
    demoVideo: "https://youtube.com/watch?v=demo4",
    featured: false,
    stats: { stars: 67, views: "5.2K", forks: 18 },
    color: "from-orange-500 to-red-500",
    features: [
      { title: "Secure Payments", description: "Stripe integration with multiple payment methods" },
      { title: "Cart System", description: "Persistent shopping cart with guest checkout" },
      { title: "Order Tracking", description: "Real-time order status and delivery tracking" },
      { title: "Reviews System", description: "Product reviews and ratings from customers" },
      { title: "Inventory Management", description: "Automated stock tracking and alerts" },
      { title: "Admin Dashboard", description: "Complete store management interface" },
    ],
    screenshots: ["/projects/ecommerce-demo.svg"],
    timeline: "3 months",
    teamSize: "Solo Developer",
    completedDate: "2024",
  },
  {
    id: 5,
    slug: "iot-smart-home",
    title: "IoT Smart Home System",
    subtitle: "Complete Home Automation Platform",
    description: "Comprehensive IoT device monitoring and control system with real-time alerts, data logging, voice commands, and remote control capabilities.",
    longDescription: `Transform any home into a smart home with this comprehensive IoT platform. The system supports a wide range of devices and sensors, providing centralized control and monitoring.

Voice command integration allows hands-free operation, while the mobile app provides control from anywhere. Energy monitoring helps reduce utility costs by identifying consumption patterns.

Advanced automation rules let users create complex scenarios that trigger based on time, location, or sensor data.`,
    image: "/projects/iot-demo.svg",
    tags: ["Python", "MQTT", "InfluxDB", "React", "Raspberry Pi", "Node-RED", "TensorFlow Lite"],
    category: "iot",
    platform: "IoT / Mobile",
    liveUrl: "#",
    githubUrl: "https://github.com/fayastech/smart-home",
    demoVideo: "https://youtube.com/watch?v=demo5",
    featured: false,
    stats: { stars: 45, views: "3.1K", forks: 12 },
    color: "from-cyan-500 to-teal-500",
    features: [
      { title: "Voice Control", description: "Integration with Alexa and Google Assistant" },
      { title: "Automation Rules", description: "Create complex automation scenarios" },
      { title: "Energy Monitor", description: "Track and optimize energy consumption" },
      { title: "Security System", description: "Motion detection and alert notifications" },
      { title: "Remote Access", description: "Control your home from anywhere" },
      { title: "Device Management", description: "Easy device pairing and management" },
    ],
    screenshots: ["/projects/iot-demo.svg"],
    timeline: "5 months",
    teamSize: "Solo Developer",
    completedDate: "2024",
  },
  {
    id: 6,
    slug: "video-streaming",
    title: "Video Streaming Platform",
    subtitle: "Netflix-Style Streaming Service",
    description: "High-performance video streaming platform with adaptive bitrate, real-time chat, recommendations, and personalized content delivery.",
    longDescription: `A modern video streaming platform built for performance and scalability. Featuring adaptive bitrate streaming that automatically adjusts video quality based on network conditions.

The recommendation engine uses machine learning to suggest content based on viewing history and preferences. Real-time chat during live streams creates an engaging community experience.

Content creators can upload, manage, and monetize their videos through the intuitive dashboard.`,
    image: "/projects/streaming-demo.svg",
    tags: ["React", "WebRTC", "Node.js", "FFmpeg", "HLS", "AWS S3", "Redis"],
    category: "media",
    platform: "Web",
    liveUrl: "#",
    githubUrl: "https://github.com/fayastech/streaming",
    demoVideo: "https://youtube.com/watch?v=demo6",
    featured: false,
    stats: { stars: 92, views: "7.8K", forks: 28 },
    color: "from-pink-500 to-purple-500",
    features: [
      { title: "HD Streaming", description: "Adaptive bitrate up to 4K quality" },
      { title: "Live Chat", description: "Real-time chat during live streams" },
      { title: "Watchlist", description: "Save and organize favorite content" },
      { title: "Downloads", description: "Offline viewing support" },
      { title: "Recommendations", description: "AI-powered content suggestions" },
      { title: "Creator Tools", description: "Upload, manage, and monetize content" },
    ],
    screenshots: ["/projects/streaming-demo.svg"],
    timeline: "4 months",
    teamSize: "Solo Developer",
    completedDate: "2024",
  },
  {
    id: 7,
    slug: "flutter-expense-tracker",
    title: "Expense Tracker App",
    subtitle: "Personal Finance Management",
    description: "Beautiful Flutter app for tracking expenses, managing budgets, and visualizing spending patterns with charts and analytics.",
    longDescription: `Take control of your finances with this beautifully designed expense tracking app built with Flutter. The app makes it easy to record expenses, categorize spending, and understand where your money goes.

Features include budget setting with alerts, recurring expense tracking, and multiple account support. The analytics dashboard provides insights through intuitive charts and graphs.

Cloud sync ensures your data is always backed up and accessible across all your devices.`,
    image: "/projects/flutter-expense.svg",
    tags: ["Flutter", "Dart", "Firebase", "Hive", "Provider", "FL Chart", "Material 3"],
    category: "mobile",
    platform: "iOS / Android",
    liveUrl: "https://play.google.com/store/apps/details?id=com.fayastech.expense",
    githubUrl: "https://github.com/fayastech/expense-tracker",
    demoVideo: "https://youtube.com/watch?v=demo7",
    featured: false,
    stats: { stars: 234, views: "18K", forks: 67 },
    color: "from-green-500 to-emerald-500",
    features: [
      { title: "Expense Tracking", description: "Quick and easy expense logging" },
      { title: "Budget Management", description: "Set budgets and track progress" },
      { title: "Analytics", description: "Beautiful charts and insights" },
      { title: "Categories", description: "Organize expenses by category" },
      { title: "Cloud Sync", description: "Backup and sync across devices" },
      { title: "Dark Mode", description: "Beautiful dark theme support" },
    ],
    screenshots: ["/projects/flutter-expense.svg"],
    timeline: "2 months",
    teamSize: "Solo Developer",
    completedDate: "2024",
  },
  {
    id: 8,
    slug: "flutter-food-delivery",
    title: "Food Delivery App",
    subtitle: "Restaurant & Delivery Platform",
    description: "Complete food delivery solution with Flutter featuring restaurant listings, real-time order tracking, payment integration, and driver app.",
    longDescription: `A complete food delivery ecosystem built entirely with Flutter. This project includes three apps: customer app, restaurant app, and delivery driver app, all sharing a common backend.

Customers can browse restaurants, customize orders, and track delivery in real-time on a map. Restaurants manage their menus, accept orders, and update preparation status. Drivers receive optimal routes and delivery instructions.

The system handles payments, reviews, loyalty programs, and promotional campaigns.`,
    image: "/projects/flutter-food.svg",
    tags: ["Flutter", "Dart", "Firebase", "Google Maps", "Stripe", "Node.js", "Socket.io"],
    category: "mobile",
    platform: "iOS / Android",
    liveUrl: "https://play.google.com/store/apps/details?id=com.fayastech.foodie",
    githubUrl: "https://github.com/fayastech/food-delivery",
    demoVideo: "https://youtube.com/watch?v=demo8",
    featured: true,
    stats: { stars: 312, views: "25K", forks: 89 },
    color: "from-orange-500 to-amber-500",
    features: [
      { title: "Live Tracking", description: "Real-time order and delivery tracking" },
      { title: "Multiple Apps", description: "Customer, restaurant, and driver apps" },
      { title: "Payment Integration", description: "Stripe and local payment methods" },
      { title: "Reviews & Ratings", description: "Rate restaurants and drivers" },
      { title: "Promotions", description: "Discount codes and loyalty rewards" },
      { title: "Push Notifications", description: "Order updates and promotions" },
    ],
    screenshots: ["/projects/flutter-food.svg"],
    timeline: "4 months",
    teamSize: "Solo Developer",
    completedDate: "2024",
  },
  {
    id: 9,
    slug: "flutter-social-app",
    title: "Social Media App",
    subtitle: "Instagram-Style Social Platform",
    description: "Feature-rich social media application with posts, stories, reels, messaging, and real-time notifications built entirely in Flutter.",
    longDescription: `A modern social media application inspired by Instagram, built completely with Flutter for cross-platform performance. Users can share photos and videos, post stories, and create short-form reels.

The real-time messaging system supports text, images, voice notes, and video calls. The feed algorithm shows personalized content based on user interests and interactions.

Features include hashtags, mentions, location tagging, and a powerful search and discovery system.`,
    image: "/projects/flutter-social.svg",
    tags: ["Flutter", "Dart", "Firebase", "Agora", "Cloud Functions", "Algolia", "FFmpeg"],
    category: "mobile",
    platform: "iOS / Android",
    liveUrl: "#",
    githubUrl: "https://github.com/fayastech/social-app",
    demoVideo: "https://youtube.com/watch?v=demo9",
    featured: false,
    stats: { stars: 178, views: "14K", forks: 45 },
    color: "from-pink-500 to-rose-500",
    features: [
      { title: "Posts & Stories", description: "Share photos and temporary stories" },
      { title: "Reels", description: "Create and discover short videos" },
      { title: "Messaging", description: "Real-time chat with media support" },
      { title: "Video Calls", description: "HD video calling with Agora" },
      { title: "Notifications", description: "Real-time push notifications" },
      { title: "Discovery", description: "Explore trending content and users" },
    ],
    screenshots: ["/projects/flutter-social.svg"],
    timeline: "5 months",
    teamSize: "Solo Developer",
    completedDate: "2024",
  },
  {
    id: 10,
    slug: "flutter-fitness-app",
    title: "Fitness & Workout App",
    subtitle: "Personal Training Companion",
    description: "Comprehensive fitness app with workout plans, exercise library, progress tracking, and health metrics integration.",
    longDescription: `Your personal fitness companion built with Flutter. This app provides everything needed to achieve fitness goals, from structured workout plans to detailed progress tracking.

The exercise library includes hundreds of exercises with video demonstrations and proper form instructions. Custom workout builder lets users create personalized routines.

Health metrics integration with Apple Health and Google Fit provides a complete picture of fitness progress.`,
    image: "/projects/flutter-fitness.svg",
    tags: ["Flutter", "Dart", "Firebase", "Health Kit", "Google Fit", "Rive", "Provider"],
    category: "mobile",
    platform: "iOS / Android",
    liveUrl: "https://play.google.com/store/apps/details?id=com.fayastech.fitness",
    githubUrl: "https://github.com/fayastech/fitness-app",
    demoVideo: "https://youtube.com/watch?v=demo10",
    featured: false,
    stats: { stars: 145, views: "11K", forks: 38 },
    color: "from-blue-500 to-indigo-500",
    features: [
      { title: "Workout Plans", description: "Structured programs for all levels" },
      { title: "Exercise Library", description: "Hundreds of exercises with videos" },
      { title: "Progress Tracking", description: "Track workouts, weight, and measurements" },
      { title: "Health Integration", description: "Sync with Apple Health & Google Fit" },
      { title: "Custom Workouts", description: "Build your own workout routines" },
      { title: "Achievements", description: "Earn badges and milestones" },
    ],
    screenshots: ["/projects/flutter-fitness.svg"],
    timeline: "3 months",
    teamSize: "Solo Developer",
    completedDate: "2024",
  },
]

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const project = allProjects.find(p => p.slug === slug)
  
  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/#portfolio" className="text-cyan-400 hover:text-cyan-300">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br ${project.color} opacity-10 blur-3xl rounded-full`} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* Platform Badge */}
              <span className={`inline-block px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-white text-sm font-medium mb-4`}>
                {project.platform}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-400 mb-6">{project.subtitle}</p>
              <p className="text-gray-300 mb-8">{project.description}</p>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-400">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>{project.stats.stars}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Eye className="w-5 h-5" />
                  <span>{project.stats.views}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <GitFork className="w-5 h-5" />
                  <span>{project.stats.forks}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.liveUrl !== '#' && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} rounded-xl text-white font-medium hover:opacity-90 transition-opacity`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                )}
                <motion.a
                  href={project.demoVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl text-white font-medium hover:bg-white/20 transition-colors border border-white/10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-xl text-white font-medium hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-5 h-5" />
                  Source Code
                </motion.a>
              </div>
            </motion.div>

            {/* Right - Screenshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className={`absolute -inset-4 bg-gradient-to-r ${project.color} rounded-3xl opacity-20 blur-2xl`} />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5"
            >
              <Calendar className="w-8 h-8 text-cyan-400 mb-3" />
              <h4 className="text-sm text-gray-400 mb-1">Completed</h4>
              <p className="text-xl font-semibold text-white">{project.completedDate}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5"
            >
              <Clock className="w-8 h-8 text-purple-400 mb-3" />
              <h4 className="text-sm text-gray-400 mb-1">Timeline</h4>
              <p className="text-xl font-semibold text-white">{project.timeline}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5"
            >
              <Users className="w-8 h-8 text-green-400 mb-3" />
              <h4 className="text-sm text-gray-400 mb-1">Team</h4>
              <p className="text-xl font-semibold text-white">{project.teamSize}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5"
            >
              <Layers className="w-8 h-8 text-orange-400 mb-3" />
              <h4 className="text-sm text-gray-400 mb-1">Platform</h4>
              <p className="text-xl font-semibold text-white">{project.platform}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl font-bold text-white mb-6">About This Project</h2>
            <div className="prose prose-invert prose-lg">
              {project.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8"
          >
            Key Features
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/10 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} p-0.5 mb-4`}>
                  <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8"
          >
            Tech Stack
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {project.tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-white/5 text-white rounded-xl border border-white/10 hover:border-white/20 transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Interested in This Project?</h2>
            <p className="text-gray-400 mb-8">
              Want to discuss something similar or have questions about the implementation? Let&apos;s connect!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} rounded-xl text-white font-medium hover:opacity-90 transition-opacity`}
              >
                <Zap className="w-5 h-5" />
                Get in Touch
              </Link>
              <Link
                href="/#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-xl text-white font-medium hover:bg-white/10 transition-colors"
              >
                <Code2 className="w-5 h-5" />
                View More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
