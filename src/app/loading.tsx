export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
      <div className="relative">
        {/* Main spinner */}
        <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
        
        {/* Inner spinner */}
        <div className="absolute inset-2 w-12 h-12 border-4 border-blue-500/30 border-b-blue-500 rounded-full animate-spin animation-delay-150" 
             style={{ animationDirection: 'reverse' }} />
        
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" />
        </div>
      </div>
      
      {/* Loading text */}
      <div className="absolute mt-24 text-center">
        <p className="text-gray-400 text-sm animate-pulse">Loading...</p>
      </div>

      {/* Background glow */}
      <div className="absolute w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
    </div>
  )
}
