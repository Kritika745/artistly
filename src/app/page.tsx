import { HeroSection } from "@/components/home/hero-section"
import { CategorySection } from "@/components/home/category-section"
import { FeaturedArtists } from "@/components/home/featured-artists"
import { HowItWorks } from "@/components/home/how-it-works"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategorySection />
      <FeaturedArtists />
      <HowItWorks />
      <CTASection />
    </div>
  )
}
