import { HeroSection } from "@/components/hero-section"
import { CategorySection } from "@/components/category-section"
import { FeaturedArtists } from "@/components/featured-artists"
import { HowItWorks } from "@/components/how-it-works"
import { CTASection } from "@/components/cta-section"

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
