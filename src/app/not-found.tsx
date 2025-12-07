import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 text-[150px] md:text-[200px] font-bold text-cyan-500/10 blur-xl leading-none select-none">
            404
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for seems to have wandered off into the digital void. 
          Let&apos;s get you back on track!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="neon"
            asChild
            className="flex items-center gap-2"
          >
            <Link href="/">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          
          <Button
            variant="outline"
            asChild
            className="flex items-center gap-2 border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <Link href="/#portfolio">
              <Search className="w-4 h-4" />
              View Portfolio
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm mb-4">Or try these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#about" className="text-cyan-500 hover:text-cyan-400 transition-colors text-sm">
              About
            </Link>
            <Link href="/#portfolio" className="text-cyan-500 hover:text-cyan-400 transition-colors text-sm">
              Portfolio
            </Link>
            <Link href="/#contact" className="text-cyan-500 hover:text-cyan-400 transition-colors text-sm">
              Contact
            </Link>
            <Link href="/3d-showcase" className="text-cyan-500 hover:text-cyan-400 transition-colors text-sm">
              3D Showcase
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      </div>
    </div>
  )
}
