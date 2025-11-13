import Navigation from "@/components/Navigation"
import EnhancedHero from "@/components/EnhancedHero"
import About from "@/components/About"
import EnhancedPortfolio from "@/components/EnhancedPortfolio"
import YouTubeSection from "@/components/YouTubeSection"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white relative">
      <Navigation />
      <div id="hero">
        <EnhancedHero />
      </div>
      <div id="about">
        <About />
      </div>
      <YouTubeSection />
      <div id="portfolio">
        <EnhancedPortfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
