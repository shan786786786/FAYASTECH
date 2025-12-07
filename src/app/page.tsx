import NavigationModern from "@/components/NavigationModern"
import HeroModern from "@/components/HeroModern"
import AboutModern from "@/components/AboutModern"
import PortfolioModern from "@/components/PortfolioModern"
import YouTubeSection from "@/components/YouTubeSection"
import ContactModern from "@/components/ContactModern"
import FooterModern from "@/components/FooterModern"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <NavigationModern />
      <div id="hero">
        <HeroModern />
      </div>
      <div id="about">
        <AboutModern />
      </div>
      <YouTubeSection />
      <div id="portfolio">
        <PortfolioModern />
      </div>
      <div id="contact">
        <ContactModern />
      </div>
      <FooterModern />
    </main>
  )
}
